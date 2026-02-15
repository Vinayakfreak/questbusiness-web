"use client";

import React, { useMemo, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import styles from "./loginClient.module.css";

export default function LoginClient() {  
  if (!supabase) {
    return (
      <div className={styles.box}>
        <div className={styles.step}>Server not configured yet</div>
        <div className={styles.help} style={{ opacity: 0.85 }}>
          Missing Supabase environment variables. Add in Vercel:
          <ul style={{ marginTop: 8, paddingLeft: 18, opacity: 0.9, lineHeight: 1.9 }}>
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
    <div className={styles.box}>
      <div className={styles.badge}>Email OTP + Coupon</div>
      {msg ? <div className={styles.msg}>{msg}</div> : null}

      {step === "email" ? (
        <>
          <div className={styles.step}>Step 1: Email</div>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className={styles.input}
          />
          <button
            onClick={sendOtp}
            disabled={busy || !email.trim()}
            className={`${styles.btn} ${styles.btnPrimary}`}
            style={{ marginTop: 12 }}
          >
            {busy ? "Sending…" : "Send OTP"}
          </button>
        </>
      ) : null}

      {step === "otp" ? (
        <>
          <div className={styles.step}>Step 2: OTP</div>
          <input
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            className={styles.input}
          />
          <div className={styles.row}>
            <button
              onClick={verifyOtp}
              disabled={busy || !otp.trim()}
              className={`${styles.btn} ${styles.btnPrimary}`}
            >
              {busy ? "Verifying…" : "Verify OTP"}
            </button>
            <button onClick={() => setStep("email")} disabled={busy} className={styles.btn}>
              Change email
            </button>
          </div>
        </>
      ) : null}

      {step === "coupon" ? (
        <>
          <div className={styles.step}>Step 3: Coupon</div>
          <input
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            placeholder="QB-XXXX-XXXX-XXXX"
            className={styles.input}
            style={{ letterSpacing: "0.5px" }}
          />
          <button
            onClick={activateCoupon}
            disabled={busy || normalizedCoupon.length < 8}
            className={`${styles.btn} ${styles.btnPrimary}`}
            style={{ marginTop: 12 }}
          >
            {busy ? "Activating…" : "Activate coupon"}
          </button>
        </>
      ) : null}

      {step === "done" ? <div className={styles.step}>Done. You’re unlocked.</div> : null}

      <div className={styles.help}>If you face issues, WhatsApp: 7007474846</div>
    </div>
  );
}
