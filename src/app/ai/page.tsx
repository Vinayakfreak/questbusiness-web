import Link from "next/link";

export default function AiCoachPage() {
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

      <h1 style={{ marginTop: 12 }}>AI Coach (Daily)</h1>
      <p style={{ marginTop: 8, opacity: 0.85, lineHeight: 1.7 }}>
        This is the core of Quest Business: hand‑holding, daily targets, daily tasks, market analysis, and 1% improvement.
      </p>

      <div style={{ marginTop: 14, border: "1px solid var(--border)", borderRadius: 18, padding: 16, background: "var(--panel)" }}>
        <h2 style={{ margin: 0, fontSize: 18 }}>Daily workflow</h2>
        <ul style={{ marginTop: 10, paddingLeft: 18, opacity: 0.9, lineHeight: 1.9 }}>
          <li>Seller submits daily sales update (web dashboard + WhatsApp)</li>
          <li>AI sets tomorrow’s targets based on last 7–14 days</li>
          <li>AI gives before‑closing checklist + reminders</li>
          <li>AI scans market trends (pricing/offer ideas)</li>
          <li>AI suggests 1% improvement + differentiation ideas</li>
        </ul>
      </div>

      <div style={{ marginTop: 14, opacity: 0.75, fontSize: 13, lineHeight: 1.7 }}>
        Implementation note: we’ll start with a dashboard form + stored history, then add WhatsApp automation.
      </div>
    </div>
  );
}
