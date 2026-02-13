import Link from "next/link";

export default function CartPage() {
  return (
    <div style={{ maxWidth: 980, margin: "0 auto", padding: 20 }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link href="/marketplace" style={{ opacity: 0.85 }}>
          ← Marketplace
        </Link>
        <Link href="/checkout" style={{ opacity: 0.85 }}>
          Checkout
        </Link>
      </header>

      <h1 style={{ marginTop: 12 }}>Cart (MVP)</h1>
      <p style={{ marginTop: 8, opacity: 0.8, lineHeight: 1.7 }}>
        This is a placeholder cart. Next we’ll store cart items per user and calculate totals.
      </p>

      <div style={{ marginTop: 14, border: "1px solid var(--border)", borderRadius: 18, padding: 16, background: "var(--panel)" }}>
        <div style={{ opacity: 0.8 }}>No items yet.</div>
      </div>

      <div style={{ marginTop: 14 }}>
        <Link
          href="/checkout"
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
          Continue to checkout
        </Link>
      </div>
    </div>
  );
}
