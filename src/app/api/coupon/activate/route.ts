import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const code = String(body.code || "").trim().toUpperCase();
  if (!code) return NextResponse.json({ error: "Missing code" }, { status: 400 });

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceKey) {
    return NextResponse.json(
      { error: "Server not configured. Missing SUPABASE_SERVICE_ROLE_KEY." },
      { status: 500 }
    );
  }

  const supabase = createClient(url, serviceKey);

  // Get user from bearer token
  const auth = req.headers.get("authorization") || "";
  const token = auth.startsWith("Bearer ") ? auth.slice("Bearer ".length) : null;
  if (!token) return NextResponse.json({ error: "Not authenticated" }, { status: 401 });

  const { data: userData, error: userErr } = await supabase.auth.getUser(token);
  if (userErr || !userData?.user) {
    return NextResponse.json({ error: "Invalid session" }, { status: 401 });
  }
  const user = userData.user;

  // Load coupon
  const { data: coupon, error: cErr } = await supabase
    .from("coupons")
    .select("id, code, plan, duration_days, status, assigned_email, activated_at, expires_at")
    .eq("code", code)
    .maybeSingle();

  if (cErr) return NextResponse.json({ error: cErr.message }, { status: 500 });
  if (!coupon) return NextResponse.json({ error: "Invalid coupon" }, { status: 400 });
  if (coupon.status === "disabled") return NextResponse.json({ error: "Coupon disabled" }, { status: 400 });

  const email = (user.email || "").toLowerCase();

  // If assigned to another email, reject
  if (coupon.assigned_email && coupon.assigned_email.toLowerCase() !== email) {
    return NextResponse.json({ error: "Coupon already used" }, { status: 400 });
  }

  // If expired, reject
  const now = new Date();
  if (coupon.expires_at && new Date(coupon.expires_at) < now) {
    return NextResponse.json({ error: "Coupon expired" }, { status: 400 });
  }

  // Activate if new
  let expiresAt = coupon.expires_at ? new Date(coupon.expires_at) : null;
  if (!expiresAt) {
    expiresAt = new Date(now.getTime() + (coupon.duration_days || 30) * 24 * 60 * 60 * 1000);

    const { error: upErr } = await supabase
      .from("coupons")
      .update({
        status: "active",
        assigned_email: email,
        activated_at: now.toISOString(),
        expires_at: expiresAt.toISOString(),
      })
      .eq("id", coupon.id);

    if (upErr) return NextResponse.json({ error: upErr.message }, { status: 500 });
  }

  // Upsert user profile
  const { error: pErr } = await supabase.from("user_profiles").upsert({
    id: user.id,
    email,
    plan: coupon.plan,
    coupon_code: coupon.code,
    plan_expires_at: expiresAt.toISOString(),
  });
  if (pErr) return NextResponse.json({ error: pErr.message }, { status: 500 });

  return NextResponse.json({ ok: true, plan: coupon.plan, expiresAt: expiresAt.toISOString() });
}
