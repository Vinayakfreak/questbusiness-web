"use client";

import React, { useMemo, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function LoginClient() {
  if (!supabase) {
    return (
      <div
        style={{
          marginTop: 14,
          border: "1px solid var(--border)",
          borderRadius: 18,
          padding: 16,
          background: "var(--panel)",
        }}
      >
        <div style={{ fontWeight: 900 }}>Server not configured yet</div>
        <div style={{ marginTop: 8, opacity: 0.85, lineHeight: 1.7 }}>
          Missing Supabase environment variables. Add in Vercel:
          <ul style={{ marginTop: 8, paddingLeft: 18, opacity: 0.9 }}>
            <li>NEXT_PUBLIC_SUPABASE_URL</li>
            <li>NEXT_PUBLIC_SUPABASE_ANON_KEY</li>
            <li>SUPABASE_SERVICE_ROLE_KEY (server only)</li>
          </ul>
        </div>
      </div>
    );
  }

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [coupon, setCoupon] = useState("");
  const [step, setStep] = useState<"email" | "otp" | "coupon" | "done">("email");
  const [msg, setMsg] = useState<string>("");
  const [busy, setBusy] = useState(false);

  const normalizedCoupon = useMemo(() => coupon.trim().toUpperCase(), [coupon]);

  const sb = supabase;

  async function sendOtp() {
    setBusy(true);
    setMsg("");
    try {
      const { error } = await sb.auth.signInWithOtp({ email: email.trim() });
      if (error) throw error;
      setStep("otp");
      setMsg("OTP sent to your email.");
    } catch (e: any) {
      setMsg(e?.message || "Failed to send OTP");
    } finally {
      setBusy(false);
    }
  }

  async function verifyOtp() {
    setBusy(true);
    setMsg("");
    try {
      const { data, error } = await sb.auth.verifyOtp({
        email: email.trim(),
        token: otp.trim(),
        type: "email",
      });
      if (error) throw error;
      if (!data.session) throw new Error("OTP verified but no session created.");
      setStep("coupon");
      setMsg("Logged in. Now enter your coupon code.");
    } catch (e: any) {
      setMsg(e?.message || "Failed to verify OTP");
    } finally {
      setBusy(false);
    }
  }

  async function activateCoupon() {
    setBusy(true);
    setMsg("");
    try {
      const session = await sb.auth.getSession();
      const accessToken = session.data.session?.access_token;
      if (!accessToken) throw new Error("Not logged in");

      const r = await fetch("/api/coupon/activate", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${accessToken}` },
        body: JSON.stringify({ code: normalizedCoupon }),
      });
      const j = await r.json();
      if (!r.ok) throw new Error(j?.error || "Activation failed");
      setStep("done");
      setMsg(`Coupon activated. Plan: ${j.plan}. Expires: ${j.expiresAt}`);
    } catch (e: any) {
      setMsg(e?.message || "Coupon activation failed");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div
      style={{
        marginTop: 14,
        border: "1px solid var(--border)",
        borderRadius: 18,
        padding: 16,
        background: "var(--panel)",
      }}
    >
      {msg ? (
        <div style={{ marginBottom: 10, opacity: 0.9 }}>
          {msg}
        </div>
      ) : null}

      {step === "email" ? (
        <>
          <div style={{ fontWeight: 900 }}>Step 1: Email</div>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            style={{ width: "100%", marginTop: 10, height: 44, borderRadius: 12, border: "1px solid var(--border)", background: "transparent", color: "var(--fg)", padding: "0 12px" }}
          />
          <button
            onClick={sendOtp}
            disabled={busy || !email.trim()}
            style={{ marginTop: 12, height: 44, padding: "0 16px", borderRadius: 999, background: "var(--fg)", color: "var(--bg)", fontWeight: 900, border: 0, cursor: "pointer" }}
          >
            {busy ? "Sending…" : "Send OTP"}
          </button>
        </>
      ) : null}

      {step === "otp" ? (
        <>
          <div style={{ fontWeight: 900 }}>Step 2: OTP</div>
          <input
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            style={{ width: "100%", marginTop: 10, height: 44, borderRadius: 12, border: "1px solid var(--border)", background: "transparent", color: "var(--fg)", padding: "0 12px" }}
          />
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}>
            <button
              onClick={verifyOtp}
              disabled={busy || !otp.trim()}
              style={{ height: 44, padding: "0 16px", borderRadius: 999, background: "var(--fg)", color: "var(--bg)", fontWeight: 900, border: 0, cursor: "pointer" }}
            >
              {busy ? "Verifying…" : "Verify OTP"}
            </button>
            <button
              onClick={() => setStep("email")}
              disabled={busy}
              style={{ height: 44, padding: "0 16px", borderRadius: 999, background: "transparent", color: "var(--fg)", fontWeight: 900, border: "1px solid var(--border)", cursor: "pointer" }}
            >
              Change email
            </button>
          </div>
        </>
      ) : null}

      {step === "coupon" ? (
        <>
          <div style={{ fontWeight: 900 }}>Step 3: Coupon</div>
          <input
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            placeholder="QB-XXXX-XXXX-XXXX"
            style={{ width: "100%", marginTop: 10, height: 44, borderRadius: 12, border: "1px solid var(--border)", background: "transparent", color: "var(--fg)", padding: "0 12px", letterSpacing: "0.5px" }}
          />
          <button
            onClick={activateCoupon}
            disabled={busy || normalizedCoupon.length < 8}
            style={{ marginTop: 12, height: 44, padding: "0 16px", borderRadius: 999, background: "var(--fg)", color: "var(--bg)", fontWeight: 900, border: 0, cursor: "pointer" }}
          >
            {busy ? "Activating…" : "Activate coupon"}
          </button>
        </>
      ) : null}

      {step === "done" ? (
        <div style={{ fontWeight: 900 }}>Done. You’re unlocked.</div>
      ) : null}

      <div style={{ marginTop: 12, opacity: 0.7, fontSize: 13, lineHeight: 1.7 }}>
        If you face issues, WhatsApp: 7007474846
      </div>
    </div>
  );
}
