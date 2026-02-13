import Link from "next/link";

type Params = { seller: string };

const demoCatalog = {
  demo: {
    name: "Demo Seller",
    tagline: "Quality products, fair price.",
    whatsapp: "https://wa.me/919999999999?text=Hi%20I%20want%20to%20order",
    products: [
      { slug: "classic-tshirt", title: "Classic T‑Shirt", price: 399, desc: "Soft cotton, clean fit." },
      { slug: "premium-hoodie", title: "Premium Hoodie", price: 999, desc: "Warm, durable, everyday." },
      { slug: "combo-offer", title: "Combo Offer", price: 1299, desc: "Best value bundle." },
    ],
  },
} as const;

export default function SellerPage({ params }: { params: Params }) {
  const sellerKey = (params.seller || "").toLowerCase();
  const data = (demoCatalog as any)[sellerKey] as (typeof demoCatalog)["demo"] | undefined;

  if (!data) {
    return (
      <div style={{ maxWidth: 900, margin: "0 auto", padding: 20 }}>
        <h1>Seller not found</h1>
        <p>Try the demo seller page:</p>
        <Link href="/s/demo">/s/demo</Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: 20 }}>
      <Link href="/" style={{ opacity: 0.8 }}>
        ← Back to home
      </Link>
      <h1 style={{ marginTop: 12 }}>{data.name}</h1>
      <p style={{ opacity: 0.8, marginTop: 6 }}>{data.tagline}</p>

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}>
        <a
          href={data.whatsapp}
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
            fontWeight: 700,
          }}
        >
          Order on WhatsApp
        </a>
        <span style={{ opacity: 0.7, alignSelf: "center" }}>
          (Payments: UPI link/QR will be added in Phase 1)
        </span>
      </div>

      <h2 style={{ marginTop: 22 }}>Products</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12, marginTop: 12 }}>
        {data.products.map((p) => (
          <div key={p.slug} style={{ border: "1px solid rgba(255,255,255,0.14)", borderRadius: 16, padding: 14, background: "rgba(255,255,255,0.03)" }}>
            <h3 style={{ margin: 0 }}>{p.title}</h3>
            <p style={{ margin: "8px 0 0", opacity: 0.85 }}>{p.desc}</p>
            <p style={{ margin: "10px 0 0", fontWeight: 700 }}>₹ {p.price}</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 26, opacity: 0.7, fontSize: 13 }}>
        Note: This is an MVP demo. Next we’ll add real seller onboarding + product upload.
      </div>
    </div>
  );
}
