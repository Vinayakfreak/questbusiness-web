import Link from "next/link";

export default function RoadmapPage() {
  return (
    <div style={{ maxWidth: 980, margin: "0 auto", padding: 20 }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link href="/" style={{ opacity: 0.85 }}>
          ← Home
        </Link>
        <Link href="/pricing" style={{ opacity: 0.85 }}>
          Pricing
        </Link>
      </header>

      <h1 style={{ marginTop: 12 }}>Roadmap (A + B)</h1>
      <p style={{ marginTop: 8, opacity: 0.85, lineHeight: 1.7 }}>
        This page will become the full learning/courses area. MVP content is listed below.
      </p>

      <div style={{ marginTop: 14, border: "1px solid var(--border)", borderRadius: 18, padding: 16, background: "var(--panel)" }}>
        <ul style={{ margin: 0, paddingLeft: 18, opacity: 0.9, lineHeight: 1.9 }}>
          <li>7 days: build a website from scratch</li>
          <li>Proper detailed explanation while making the website</li>
          <li>Make AI work for you</li>
          <li>Make money online</li>
          <li>Work 2 hours daily & learn AI + web development</li>
          <li>Learn business from scratch</li>
          <li>Learn digital marketing</li>
          <li>Learn about stock</li>
        </ul>
      </div>
    </div>
  );
}
