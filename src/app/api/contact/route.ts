import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const first = String(body.first || "").trim();
  const last = String(body.last || "").trim();
  const email = String(body.email || "").trim();
  const phone = String(body.phone || "").trim();
  const message = String(body.message || "").trim();

  if (!first || !email || !phone || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || "support@questbusiness.in";
  const from = process.env.CONTACT_FROM_EMAIL || "Quest Business <onboarding@questbusiness.in>";

  if (!apiKey) {
    return NextResponse.json(
      {
        error: "Server not configured. Missing RESEND_API_KEY.",
        fallback: "whatsapp",
      },
      { status: 500 }
    );
  }

  const subject = `New contact request — ${first}${last ? " " + last : ""}`;
  const text =
    `Name: ${first}${last ? " " + last : ""}\n` +
    `Email: ${email}\n` +
    `Phone: ${phone}\n\n` +
    `Message:\n${message}\n`;

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from,
      to,
      subject,
      text,
      replyTo: email,
    } as any);

    if (error) {
      return NextResponse.json({ error: error.message || "Failed to send" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Failed to send" }, { status: 500 });
  }
}
