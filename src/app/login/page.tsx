import Link from "next/link";

export default function LoginPage() {
  return (
    <div style={{ maxWidth: 980, margin: "0 auto", padding: 20 }}>
      <Link href="/" style={{ opacity: 0.85 }}>
        ← Home
      </Link>
      <h1 style={{ marginTop: 12 }}>Login (Email OTP + Coupon)</h1>
      <p style={{ marginTop: 8, opacity: 0.85, lineHeight: 1.7 }}>
        This will unlock your plan after your coupon is verified. If setup is not complete yet, this page will show an error.
      </p>

      <div
        style={{
          marginTop: 14,
          border: "1px solid var(--border)",
          borderRadius: 18,
          padding: 16,
          background: "var(--panel)",
        }}
      >
        <p style={{ margin: 0, opacity: 0.85 }}>
          Setup required: Supabase project + env vars.
        </p>
        <p style={{ marginTop: 10, opacity: 0.75 }}>
          Next step: I’ll wire this page to a real OTP + coupon validation flow as soon as you give me your Supabase URL and keys.
        </p>
      </div>

      <div style={{ marginTop: 16, opacity: 0.75, fontSize: 13 }}>
        For now, onboarding is still available on WhatsApp.
      </div>
      <a
        href="https://wa.me/917007474846?text=Hi%20Quest%20Business,%20I%20want%20to%20login%20with%20coupon"
        target="_blank"
        rel="noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          height: 44,
          padding: "0 16px",
          borderRadius: 999,
          background: "#25D366",
          color: "#08110a",
          fontWeight: 900,
          marginTop: 12,
        }}
      >
        WhatsApp support
      </a>
    </div>
  );
}
