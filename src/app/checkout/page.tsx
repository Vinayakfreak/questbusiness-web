import Link from "next/link";

const WHATSAPP = "https://wa.me/917007474846?text=";

export default function CheckoutPage() {
  const msg = encodeURIComponent(
    "Hi Quest Business, I want to place an order from the marketplace. Please share payment method and confirm my order."
  );

  return (
    <div style={{ maxWidth: 980, margin: "0 auto", padding: 20 }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link href="/cart" style={{ opacity: 0.85 }}>
          ← Cart
        </Link>
        <Link href="/pricing" style={{ opacity: 0.85 }}>
          Pricing
        </Link>
      </header>

      <h1 style={{ marginTop: 12 }}>Checkout (MVP)</h1>
      <p style={{ marginTop: 8, opacity: 0.85, lineHeight: 1.7 }}>
        Full checkout is coming. For now, we confirm orders manually on WhatsApp.
      </p>

      <div style={{ marginTop: 14, border: "1px solid var(--border)", borderRadius: 18, padding: 16, background: "var(--panel)" }}>
        <h2 style={{ margin: 0, fontSize: 18 }}>Step 1</h2>
        <p style={{ marginTop: 8, opacity: 0.85 }}>Message us on WhatsApp with your order details.</p>
        <a
          href={WHATSAPP + msg}
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
            fontWeight: 900,
            marginTop: 10,
          }}
        >
          WhatsApp checkout
        </a>

        <div style={{ marginTop: 16, opacity: 0.75, fontSize: 13, lineHeight: 1.7 }}>
          Next version will support: cart totals, UPI payment, payment verification, order IDs, and commission tracking.
        </div>
      </div>
    </div>
  );
}
