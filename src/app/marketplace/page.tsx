import Link from "next/link";

const BRAND = "Quest Business";

type Product = {
  id: string;
  title: string;
  price: number;
  seller: string;
  slug: string;
  desc: string;
};

const demoProducts: Product[] = [
  {
    id: "p1",
    title: "Classic T‑Shirt",
    price: 399,
    seller: "Demo Seller",
    slug: "classic-tshirt",
    desc: "Soft cotton, clean fit.",
  },
  {
    id: "p2",
    title: "Premium Hoodie",
    price: 999,
    seller: "Demo Seller",
    slug: "premium-hoodie",
    desc: "Warm, durable, everyday.",
  },
  {
    id: "p3",
    title: "Combo Offer",
    price: 1299,
    seller: "Demo Seller",
    slug: "combo-offer",
    desc: "Best value bundle.",
  },
];

export default function MarketplacePage() {
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "28px 18px 60px" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <Link href="/" style={{ fontWeight: 800 }}>
            {BRAND}
          </Link>
          <span style={{ opacity: 0.7, fontSize: 12 }}>Marketplace</span>
        </div>
        <nav style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link href="/roadmap" style={{ opacity: 0.85 }}>
            Roadmap
          </Link>
          <Link href="/ai" style={{ opacity: 0.85 }}>
            AI Coach
          </Link>
          <Link href="/pricing" style={{ opacity: 0.85 }}>
            Pricing
          </Link>
          <Link href="/cart" style={{ opacity: 0.85 }}>
            Cart
          </Link>
        </nav>
      </header>

      <h1 style={{ marginTop: 18, fontSize: 40, letterSpacing: -0.8 }}>Shop small. Buy better.</h1>
      <p style={{ marginTop: 10, opacity: 0.85, lineHeight: 1.7, maxWidth: 860 }}>
        This is the MVP marketplace UI. Next we’ll connect real sellers, real products, and full checkout.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 12, marginTop: 16 }}>
        {demoProducts.map((p) => (
          <Link
            key={p.id}
            href={`/p/${p.slug}`}
            style={{
              border: "1px solid var(--border)",
              background: "var(--panel)",
              borderRadius: 18,
              padding: 14,
              display: "block",
            }}
          >
            <div style={{ fontWeight: 800 }}>{p.title}</div>
            <div style={{ opacity: 0.75, marginTop: 6 }}>{p.desc}</div>
            <div style={{ marginTop: 10, fontWeight: 900 }}>₹ {p.price}</div>
            <div style={{ marginTop: 8, opacity: 0.7, fontSize: 13 }}>Sold by {p.seller}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
