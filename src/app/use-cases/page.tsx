"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type CaseKey = "products" | "services" | "both";

const CASES: Record<CaseKey, {
  title: string;
  subtitle: string;
  bullets: string[];
  sampleDay: { title: string; items: string[] };
}> = {
  products: {
    title: "For product brands",
    subtitle: "A structured system for content, conversion, and repeat purchases.",
    bullets: [
      "Daily performance tracking (revenue, leads, conversion)",
      "Offer clarity + landing page improvements",
      "Content plan built around 3 pillars",
      "Weekly Stop/Start/Continue review",
    ],
    sampleDay: {
      title: "A sample day",
      items: [
        "10 minutes: update daily log",
        "15 minutes: execute the AI-recommended task",
        "10 minutes: respond to leads with a script",
      ],
    },
  },
  services: {
    title: "For service businesses",
    subtitle: "A structured system for lead flow, follow-ups, and consistent bookings.",
    bullets: [
      "Lead tracking + follow-up workflow",
      "Daily actions to increase bookings",
      "Content scripts designed for trust + proof",
      "Weekly review to improve conversion",
    ],
    sampleDay: {
      title: "A sample day",
      items: [
        "10 minutes: log leads and responses",
        "15 minutes: send 5 structured follow-ups",
        "10 minutes: post one proof-based story/reel",
      ],
    },
  },
  both: {
    title: "For products + services",
    subtitle: "One operating system for selling and booking — without chaos.",
    bullets: [
      "Unified daily tracking across sales + bookings",
      "AI tasks prioritized by impact",
      "Weekly review across channels",
      "Conversion + offer optimization",
    ],
    sampleDay: {
      title: "A sample day",
      items: [
        "10 minutes: daily log",
        "15 minutes: AI task (offer/CTA/content)",
        "10 minutes: follow-up + booking confirmations",
      ],
    },
  },
};

export default function UseCasesPage() {
  const [k, setK] = useState<CaseKey>("both");
  const c = useMemo(() => CASES[k], [k]);

  return (
    <div style={{ maxWidth: 1120, margin: "0 auto", padding: "28px 18px 70px" }}>
      <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, padding: "10px 0 18px" }}>
        <Link href="/" style={{ opacity: 0.85 }}>
          ← Home
        </Link>
        <div style={{ opacity: 0.8, fontSize: 13 }}>Use Cases</div>
      </header>

      <section
        style={{
          marginTop: 10,
          border: "1px solid var(--border)",
          borderRadius: 24,
          background:
            "radial-gradient(900px 300px at 50% 0%, rgba(59,130,246,.12), transparent 55%), radial-gradient(900px 300px at 55% 0%, rgba(168,85,247,.10), transparent 55%), rgba(255,255,255,.03)",
          padding: "42px 28px",
        }}
      >
        <div style={{ display: "inline-flex", padding: "6px 12px", border: "1px solid var(--border)", borderRadius: 999, background: "rgba(255,255,255,.03)", fontSize: 12, color: "var(--muted)" }}>
          Use cases
        </div>
        <h1 style={{ marginTop: 14, fontSize: 40, letterSpacing: -1.1, lineHeight: 1.08 }}>
          Built for real execution.
        </h1>
        <p style={{ marginTop: 10, maxWidth: 820, color: "var(--muted)", lineHeight: 1.85, fontSize: 15 }}>
          Choose your business type to see how Quest Business fits your workflow.
        </p>

        <div style={{ marginTop: 14, display: "inline-flex", gap: 8, border: "1px solid var(--border)", background: "rgba(0,0,0,.18)", borderRadius: 999, padding: 6 }}>
          {(["products", "services", "both"] as CaseKey[]).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setK(key)}
              style={{
                height: 32,
                padding: "0 12px",
                borderRadius: 999,
                border: "1px solid transparent",
                background: key === k ? "var(--fg)" : "transparent",
                color: key === k ? "#0b0f19" : "var(--fg)",
                fontWeight: 900,
                cursor: "pointer",
                opacity: key === k ? 1 : 0.85,
              }}
            >
              {key === "products" ? "Products" : key === "services" ? "Services" : "Both"}
            </button>
          ))}
        </div>
      </section>

      <section style={{ marginTop: 18, display: "grid", gridTemplateColumns: "repeat(12,1fr)", gap: 12 }}>
        <div style={{ gridColumn: "span 7", border: "1px solid var(--border)", borderRadius: 20, background: "rgba(255,255,255,.03)", padding: 16 }}>
          <div style={{ fontWeight: 900, letterSpacing: -0.2, fontSize: 18 }}>{c.title}</div>
          <div style={{ marginTop: 8, color: "var(--muted)", lineHeight: 1.8 }}>{c.subtitle}</div>
          <ul style={{ marginTop: 12, paddingLeft: 18, color: "var(--muted)", lineHeight: 1.9 }}>
            {c.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>

        <div style={{ gridColumn: "span 5", border: "1px solid var(--border)", borderRadius: 20, background: "rgba(255,255,255,.03)", padding: 16 }}>
          <div style={{ fontWeight: 900, letterSpacing: -0.2 }}>{c.sampleDay.title}</div>
          <div style={{ marginTop: 10, display: "grid", gap: 8, color: "var(--muted)", lineHeight: 1.8 }}>
            {c.sampleDay.items.map((i) => (
              <div key={i}>• {i}</div>
            ))}
          </div>
          <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Link href="/demo" style={{ height: 44, padding: "0 16px", borderRadius: 999, background: "var(--fg)", color: "#0b0f19", fontWeight: 900, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
              View demo
            </Link>
            <a href="https://cal.com/questbusiness/book-the-call" target="_blank" rel="noreferrer" style={{ height: 44, padding: "0 16px", borderRadius: 999, border: "1px solid var(--border)", background: "transparent", color: "var(--fg)", fontWeight: 900, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
              Book a call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
