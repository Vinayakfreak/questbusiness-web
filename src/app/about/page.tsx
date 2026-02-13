import Link from "next/link";

const BRAND = "QuestBudiness";

export default function AboutPage() {
  return (
    <div style={{ maxWidth: 980, margin: "0 auto", padding: 20 }}>
      <Link href="/" style={{ opacity: 0.8 }}>
        ← Back
      </Link>
      <h1 style={{ marginTop: 12 }}>About {BRAND}</h1>
      <p style={{ opacity: 0.85, marginTop: 10, lineHeight: 1.7 }}>
        We’re building an all‑in‑one platform for small entrepreneurs: launch a clean online store page, take orders, and grow
        with honest guidance. At the same time, we document the journey and teach the skills needed to build websites, use AI,
        and learn business.
      </p>

      <h2 style={{ marginTop: 22 }}>Two tracks (A + B)</h2>
      <ul style={{ marginTop: 10, paddingLeft: 18, opacity: 0.85, lineHeight: 1.8 }}>
        <li>
          <b>Track A:</b> Seller platform — storefront pages, onboarding, payments (UPI), WhatsApp ordering, and growth tools.
        </li>
        <li>
          <b>Track B:</b> Learning roadmap — 7‑day build from scratch, AI workflows, digital marketing basics, and business
          fundamentals.
        </li>
      </ul>

      <p style={{ marginTop: 18, opacity: 0.7 }}>
        This is MVP v0. Next we’ll add onboarding forms, real product uploads, and a seller dashboard.
      </p>
    </div>
  );
}
