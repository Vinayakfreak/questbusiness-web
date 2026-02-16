import Link from "next/link";

export default function TermsPage() {
  return (
    <div style={{ maxWidth: 980, margin: "0 auto", padding: 20 }}>
      <Link href="/" style={{ opacity: 0.85 }}>
        ← Home
      </Link>
      <h1 style={{ marginTop: 12 }}>Terms of Service</h1>
      <p style={{ marginTop: 10, opacity: 0.85, lineHeight: 1.9 }}>
        These terms apply to your use of Quest Business (MVP). By using the site, you agree to these terms.
      </p>

      <div style={{ marginTop: 16, border: "1px solid var(--border)", borderRadius: 18, background: "var(--panel)", padding: 16 }}>
        <h2 style={{ fontSize: 18, letterSpacing: -0.2 }}>Use of the platform</h2>
        <ul style={{ marginTop: 10, paddingLeft: 18, opacity: 0.85, lineHeight: 1.9 }}>
          <li>You are responsible for the accuracy of the data you enter.</li>
          <li>You must not misuse the platform or attempt unauthorized access.</li>
        </ul>

        <h2 style={{ marginTop: 16, fontSize: 18, letterSpacing: -0.2 }}>AI recommendations</h2>
        <p style={{ marginTop: 10, opacity: 0.85, lineHeight: 1.9 }}>
          Recommendations are guidance, not guarantees. You are responsible for final decisions and execution.
        </p>

        <h2 style={{ marginTop: 16, fontSize: 18, letterSpacing: -0.2 }}>Payments & access</h2>
        <p style={{ marginTop: 10, opacity: 0.85, lineHeight: 1.9 }}>
          Paid plans unlock additional features. Coupon-based access may expire or be disabled if misused.
        </p>

        <h2 style={{ marginTop: 16, fontSize: 18, letterSpacing: -0.2 }}>Contact</h2>
        <p style={{ marginTop: 10, opacity: 0.85, lineHeight: 1.9 }}>
          Email: vrk@questbusiness.in
        </p>
      </div>
    </div>
  );
}
