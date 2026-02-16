import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div style={{ maxWidth: 980, margin: "0 auto", padding: 20 }}>
      <Link href="/" style={{ opacity: 0.85 }}>
        ← Home
      </Link>
      <h1 style={{ marginTop: 12 }}>Privacy Policy</h1>
      <p style={{ marginTop: 10, opacity: 0.85, lineHeight: 1.9 }}>
        Quest Business respects your privacy. This page is a simple policy for the MVP stage and will evolve as the
        platform grows.
      </p>

      <div style={{ marginTop: 16, border: "1px solid var(--border)", borderRadius: 18, background: "var(--panel)", padding: 16 }}>
        <h2 style={{ fontSize: 18, letterSpacing: -0.2 }}>What we collect</h2>
        <ul style={{ marginTop: 10, paddingLeft: 18, opacity: 0.85, lineHeight: 1.9 }}>
          <li>Email (for OTP login)</li>
          <li>Business info you submit (brand name, niche, goals)</li>
          <li>Performance logs you enter (sales, leads, content posted)</li>
        </ul>

        <h2 style={{ marginTop: 16, fontSize: 18, letterSpacing: -0.2 }}>How we use it</h2>
        <ul style={{ marginTop: 10, paddingLeft: 18, opacity: 0.85, lineHeight: 1.9 }}>
          <li>To authenticate your account</li>
          <li>To generate recommendations and weekly reviews</li>
          <li>To improve product quality and reliability</li>
        </ul>

        <h2 style={{ marginTop: 16, fontSize: 18, letterSpacing: -0.2 }}>Data sharing</h2>
        <p style={{ marginTop: 10, opacity: 0.85, lineHeight: 1.9 }}>
          We do not sell your data. We may use trusted service providers (e.g., hosting, analytics, authentication) to run
          the platform.
        </p>

        <h2 style={{ marginTop: 16, fontSize: 18, letterSpacing: -0.2 }}>Contact</h2>
        <p style={{ marginTop: 10, opacity: 0.85, lineHeight: 1.9 }}>
          Email: vrk@questbusiness.in
        </p>
      </div>
    </div>
  );
}
