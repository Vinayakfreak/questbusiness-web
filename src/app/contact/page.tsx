import Link from "next/link";

export default function ContactPage() {
  return (
    <div style={{ maxWidth: 980, margin: "0 auto", padding: 20 }}>
      <Link href="/" style={{ opacity: 0.85 }}>
        ← Home
      </Link>
      <h1 style={{ marginTop: 12 }}>Contact</h1>
      <p style={{ marginTop: 8, opacity: 0.85, lineHeight: 1.7, maxWidth: 720 }}>
        For support and onboarding, message us on WhatsApp.
      </p>
      <div style={{ marginTop: 14, display: "flex", gap: 12, flexWrap: "wrap" }}>
        <a
          href="https://wa.me/917007474846?text=Hi%20Quest%20Business"
          target="_blank"
          rel="noreferrer"
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
            border: 0,
            textDecoration: "none",
          }}
        >
          WhatsApp
        </a>
        <a
          href="mailto:support@questbusiness.in"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            height: 44,
            padding: "0 16px",
            borderRadius: 999,
            border: "1px solid var(--border)",
            background: "transparent",
            color: "var(--fg)",
            fontWeight: 900,
            textDecoration: "none",
          }}
        >
          Email
        </a>
      </div>
    </div>
  );
}
