import Link from "next/link";

export default function AboutPage() {
  return (
    <div style={{ maxWidth: 980, margin: "0 auto", padding: 20 }}>
      <Link href="/" style={{ opacity: 0.85 }}>
        ← Home
      </Link>

      <h1 style={{ marginTop: 12 }}>About Us — Quest Business</h1>
      <p style={{ marginTop: 10, opacity: 0.85, lineHeight: 1.8, maxWidth: 860 }}>
        Quest Business helps small brands grow smarter and faster with an AI-powered Growth Operating System. We empower
        founder-led businesses to streamline their daily operations, reduce manual work, and unlock structured,
        data-driven growth.
      </p>

      <div
        style={{
          marginTop: 18,
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gap: 12,
        }}
      >
        <section
          style={{
            gridColumn: "span 12",
            border: "1px solid var(--border)",
            borderRadius: 18,
            background: "var(--panel)",
            padding: 16,
          }}
        >
          <h2 style={{ fontSize: 18, letterSpacing: -0.2 }}>Who We Are</h2>
          <p style={{ marginTop: 10, opacity: 0.85, lineHeight: 1.8 }}>
            Quest Business is a team dedicated to making business growth simple yet effective. We help small ecommerce and
            Instagram-driven brands track performance consistently, optimize content strategy intelligently, and scale with
            structured insights rather than guesswork.
          </p>
          <p style={{ marginTop: 10, opacity: 0.85, lineHeight: 1.8 }}>
            With daily performance tracking, weekly strategic reviews, and AI-driven content guidance, we help brands make
            smarter decisions and achieve measurable progress.
          </p>
        </section>

        <section
          style={{
            gridColumn: "span 12",
            border: "1px solid var(--border)",
            borderRadius: 18,
            background: "var(--panel)",
            padding: 16,
          }}
        >
          <h2 style={{ fontSize: 18, letterSpacing: -0.2 }}>Our Mission</h2>
          <p style={{ marginTop: 10, opacity: 0.85, lineHeight: 1.8 }}>
            Our mission is to democratize business intelligence and make growth tools accessible to every small brand
            founder. We believe:
          </p>
          <ul style={{ marginTop: 10, paddingLeft: 18, opacity: 0.85, lineHeight: 1.9 }}>
            <li>Growth must be consistent</li>
            <li>Data should be actionable</li>
            <li>AI should reduce friction, not add complexity</li>
          </ul>
        </section>

        <section
          style={{
            gridColumn: "span 12",
            border: "1px solid var(--border)",
            borderRadius: 18,
            background: "var(--panel)",
            padding: 16,
          }}
        >
          <h2 style={{ fontSize: 18, letterSpacing: -0.2 }}>How We Help</h2>
          <p style={{ marginTop: 10, opacity: 0.85, lineHeight: 1.8 }}>
            Through our AI Growth Operating System, brands can:
          </p>
          <ul style={{ marginTop: 10, paddingLeft: 18, opacity: 0.85, lineHeight: 1.9 }}>
            <li>Track daily revenue and engagement</li>
            <li>Identify performance patterns</li>
            <li>Get one actionable task each day</li>
            <li>Create high-impact content ideas</li>
            <li>Improve conversion weekly</li>
          </ul>
          <p style={{ marginTop: 10, opacity: 0.85, lineHeight: 1.8 }}>
            We focus on simplicity with structure — helping entrepreneurs grow businesses that scale over time.
          </p>
        </section>

        <section
          style={{
            gridColumn: "span 12",
            border: "1px solid var(--border)",
            borderRadius: 18,
            background: "var(--panel)",
            padding: 16,
          }}
        >
          <h2 style={{ fontSize: 18, letterSpacing: -0.2 }}>Our Core Values</h2>
          <ul style={{ marginTop: 10, paddingLeft: 18, opacity: 0.85, lineHeight: 1.9 }}>
            <li>
              <b>Innovation First</b> — We embrace cutting-edge AI to simplify growth.
            </li>
            <li>
              <b>Integrity &amp; Trust</b> — Transparency and long-term partnership matter.
            </li>
            <li>
              <b>Action-Driven</b> — Every recommendation has a clear purpose.
            </li>
            <li>
              <b>Empowerment</b> — We help founders make faster, smarter decisions.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
