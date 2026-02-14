"use client";

import React, { useEffect, useState } from "react";

export function LoginModal() {
  const [open, setOpen] = useState(true);
  const [minimized, setMinimized] = useState(false);

  useEffect(() => {
    // Only show once per session (optional). Comment out if you want always.
    const seen = sessionStorage.getItem("qb_login_seen");
    if (seen) {
      setOpen(false);
      setMinimized(true);
    } else {
      sessionStorage.setItem("qb_login_seen", "1");
    }
  }, []);

  if (!open && !minimized) return null;

  if (!open && minimized) {
    return (
      <button
        onClick={() => {
          setOpen(true);
          setMinimized(false);
        }}
        style={{
          position: "fixed",
          right: 16,
          bottom: 16,
          zIndex: 60,
          height: 44,
          padding: "0 14px",
          borderRadius: 999,
          border: "1px solid var(--border)",
          background: "var(--panel)",
          color: "var(--fg)",
          fontWeight: 900,
          backdropFilter: "blur(10px)",
          cursor: "pointer",
        }}
      >
        Login
      </button>
    );
  }

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
        background: "rgba(0,0,0,0.55)",
      }}
      role="dialog"
      aria-modal="true"
    >
      <div
        style={{
          width: "min(560px, 100%)",
          borderRadius: 18,
          border: "1px solid var(--border)",
          background: "var(--panel)",
          backdropFilter: "blur(14px)",
          boxShadow: "0 25px 80px rgba(0,0,0,0.55)",
          padding: 16,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", gap: 10, alignItems: "center" }}>
          <div style={{ fontWeight: 900, fontSize: 16 }}>Login (MVP)</div>
          <div style={{ display: "flex", gap: 8 }}>
            <button
              onClick={() => {
                setOpen(false);
                setMinimized(true);
              }}
              style={{
                height: 34,
                padding: "0 10px",
                borderRadius: 10,
                border: "1px solid var(--border)",
                background: "transparent",
                color: "var(--fg)",
                cursor: "pointer",
              }}
            >
              Minimize
            </button>
            <button
              onClick={() => {
                setOpen(false);
                setMinimized(false);
              }}
              style={{
                height: 34,
                padding: "0 10px",
                borderRadius: 10,
                border: "1px solid var(--border)",
                background: "transparent",
                color: "var(--fg)",
                cursor: "pointer",
              }}
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>

        <p style={{ marginTop: 10, opacity: 0.8, lineHeight: 1.6 }}>
          Login with Email OTP + Coupon.
        </p>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}>
          <a
            href="/login"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              height: 44,
              padding: "0 16px",
              borderRadius: 999,
              background: "var(--fg)",
              color: "var(--bg)",
              fontWeight: 900,
              textDecoration: "none",
            }}
          >
            Go to login
          </a>
          <button
            onClick={() => {
              setOpen(false);
              setMinimized(true);
            }}
            style={{
              height: 44,
              padding: "0 16px",
              borderRadius: 999,
              border: "1px solid var(--border)",
              background: "transparent",
              color: "var(--fg)",
              fontWeight: 900,
              cursor: "pointer",
            }}
          >
            Continue without login
          </button>
        </div>
      </div>
    </div>
  );
}
