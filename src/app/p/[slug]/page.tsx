import Link from "next/link";

const BRAND = "Quest Business";

const catalog: Record<string, { title: string; price: number; seller: string; desc: string }> = {
  "classic-tshirt": { title: "Classic T‑Shirt", price: 399, seller: "Demo Seller", desc: "Soft cotton, clean fit." },
  "premium-hoodie": { title: "Premium Hoodie", price: 999, seller: "Demo Seller", desc: "Warm, durable, everyday." },
  "combo-offer": { title: "Combo Offer", price: 1299, seller: "Demo Seller", desc: "Best value bundle." },
};

export default function ProductPage({ params }: { params: { slug: string } }) {
  const p = catalog[params.slug];

  if (!p) {
    return (
      <div style={{ maxWidth: 980, margin: "0 auto", padding: 20 }}>
        <Link href="/marketplace">← Back</Link>
        <h1 style={{ marginTop: 12 }}>Product not found</h1>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 980, margin: "0 auto", padding: 20 }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link href="/marketplace" style={{ opacity: 0.85 }}>
          ← Marketplace
        </Link>
        <Link href="/cart" style={{ opacity: 0.85 }}>
          Cart
        </Link>
      </header>

      <div style={{ marginTop: 14, border: "1px solid var(--border)", borderRadius: 18, padding: 16, background: "var(--panel)" }}>
        <div style={{ opacity: 0.7, fontSize: 12 }}>{BRAND}</div>
        <h1 style={{ margin: "6px 0 0" }}>{p.title}</h1>
        <div style={{ opacity: 0.8, marginTop: 8, lineHeight: 1.7 }}>{p.desc}</div>
        <div style={{ marginTop: 12, fontWeight: 900, fontSize: 20 }}>₹ {p.price}</div>
        <div style={{ marginTop: 8, opacity: 0.7 }}>Sold by {p.seller}</div>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
          <Link
            href={`/cart?add=${params.slug}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              height: 44,
              padding: "0 16px",
              borderRadius: 999,
              background: "var(--fg)",
              color: "var(--bg)",
              fontWeight: 900,
            }}
          >
            Add to cart
          </Link>
          <Link href="/checkout" style={{ alignSelf: "center", opacity: 0.9 }}>
            Go to checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
