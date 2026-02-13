import Link from "next/link";

export default function OnboardPage() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 20 }}>
      <Link href="/" style={{ opacity: 0.8 }}>
        ← Back
      </Link>
      <h1 style={{ marginTop: 12 }}>Create your store (MVP)</h1>
      <p style={{ opacity: 0.8, marginTop: 8 }}>
        This onboarding form is coming next. For now, message us and we’ll set up your seller page manually.
      </p>

      <div style={{ marginTop: 16, display: "flex", gap: 10, flexWrap: "wrap" }}>
        <a
          href="https://wa.me/917007474846?text=Hi%20I%20want%20to%20create%20my%20store%20on%20Quest%20Business"
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
            fontWeight: 800,
          }}
        >
          WhatsApp us to onboard
        </a>
        <Link href="/s/demo" style={{ alignSelf: "center", opacity: 0.9 }}>
          See demo seller page
        </Link>
      </div>

      <h2 style={{ marginTop: 24 }}>What we’ll ask (soon)</h2>
      <ul style={{ marginTop: 10, paddingLeft: 18, opacity: 0.85, lineHeight: 1.8 }}>
        <li>Business name + category</li>
        <li>WhatsApp number for orders</li>
        <li>UPI ID / QR code</li>
        <li>Product photos + prices</li>
      </ul>
    </div>
  );
}
