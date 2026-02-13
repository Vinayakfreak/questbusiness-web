import Link from "next/link";

const BRAND = "Quest Business";

function Card({
  title,
  price,
  subtitle,
  items,
  cta,
  highlight,
}: {
  title: string;
  price: string;
  subtitle: string;
  items: string[];
  cta: string;
  highlight?: boolean;
}) {
  return (
    <div
      style={{
        border: `1px solid var(--border)`,
        background: highlight ? "var(--panel)" : "var(--panel2)",
        borderRadius: 18,
        padding: 16,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", gap: 10, alignItems: "baseline" }}>
        <h2 style={{ margin: 0, fontSize: 18 }}>{title}</h2>
        {highlight ? (
          <span
            style={{
              fontSize: 12,
              padding: "4px 10px",
              borderRadius: 999,
              border: "1px solid var(--border)",
              background: "var(--panel)",
              color: "var(--muted)",
            }}
          >
            Recommended
          </span>
        ) : null}
      </div>
      <div style={{ marginTop: 10, fontSize: 28, fontWeight: 800 }}>{price}</div>
      <div style={{ marginTop: 6, opacity: 0.8 }}>{subtitle}</div>

      <ul style={{ marginTop: 14, paddingLeft: 18, opacity: 0.9, lineHeight: 1.8 }}>
        {items.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>

      <Link
        href="/onboard"
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          height: 44,
          padding: "0 16px",
          borderRadius: 999,
          background: "var(--fg)",
          color: "var(--bg)",
          fontWeight: 800,
          marginTop: 10,
        }}
      >
        {cta}
      </Link>
    </div>
  );
}

export default function PricingPage() {
  return (
    <div style={{ maxWidth: 1050, margin: "0 auto", padding: "28px 18px 60px" }}>
      <header style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center" }}>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <Link href="/" style={{ fontWeight: 800 }}>
            {BRAND}
          </Link>
          <span style={{ opacity: 0.7, fontSize: 12 }}>Pricing</span>
        </div>
        <Link href="/about" style={{ opacity: 0.8 }}>
          Learn more
        </Link>
      </header>

      <h1 style={{ marginTop: 18, fontSize: 40, letterSpacing: -0.8 }}>Plans</h1>
      <p style={{ marginTop: 10, opacity: 0.85, lineHeight: 1.7, maxWidth: 820 }}>
        Start free. Upgrade when you want advanced themes, full coaching, and daily targets. We do not use other brand names on
        this website — everything is provided inside {BRAND}.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 12, marginTop: 16 }}>
        <Card
          title="Free"
          price="₹0/mo"
          subtitle="Try the platform"
          cta="Start Free"
          items={[
            "Access website platform",
            "Basic store page",
            "Limited templates",
            "No AI website builder",
            "No advanced AI coach",
          ]}
        />

        <Card
          title="Basic"
          price="₹699/mo"
          subtitle="Store setup + limited assistant"
          cta="Get Basic"
          highlight
          items={[
            "Email OTP login (dashboard)",
            "Online store showcase",
            "Connect domain (storefront)",
            "Limited assistant (templates & actions)",
            "No online marketing in this plan",
            "Commission: 5% on online sales (after tracking is enabled)",
          ]}
        />

        <Card
          title="Grow"
          price="₹3,599/mo"
          subtitle="Full access: website + coaching + courses"
          cta="Get Grow"
          items={[
            "Everything in Basic",
            "Premium themes & templates",
            "Full AI access",
            "Daily targets + daily tasks",
            "Daily market analysis suggestions",
            "Courses (A + B roadmap)",
          ]}
        />
      </div>

      <div style={{ marginTop: 18, border: "1px solid var(--border)", borderRadius: 18, padding: 16, background: "var(--panel)" }}>
        <h2 style={{ margin: 0, fontSize: 18 }}>Custom / Done‑For‑You</h2>
        <p style={{ marginTop: 8, opacity: 0.85, lineHeight: 1.7 }}>
          Need full modifications, custom design, and setup handled by us? Custom plans start from <b>₹30,000+</b>.
        </p>
        <p style={{ marginTop: 6, opacity: 0.7 }}>
          Optional add‑on: extra editing / adding features can be offered as a small subscription (example: ₹29/month) or per‑task.
        </p>
      </div>

      <div style={{ marginTop: 18, opacity: 0.7, fontSize: 13 }}>
        Note: Shipping/logistics is handled by the seller (out of scope for MVP).
      </div>
    </div>
  );
}
