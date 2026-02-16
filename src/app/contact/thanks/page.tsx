import Link from "next/link";
import styles from "../contact.module.css";

export default function ContactThanksPage() {
  return (
    <div className={styles.wrap}>
      <header className={styles.top}>
        <Link href="/" style={{ opacity: 0.85 }}>
          ← Home
        </Link>
        <div className={styles.title}>Quest Business</div>
      </header>

      <section className={styles.hero}>
        <div className={styles.pill}>Thank you</div>
        <h1 className={styles.h1}>We received your message.</h1>
        <p className={styles.sub}>We will contact you soon.</p>
        <div style={{ marginTop: 14 }}>
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              height: 44,
              padding: "0 16px",
              borderRadius: 12,
              border: "1px solid var(--border)",
              background: "transparent",
              color: "var(--fg)",
              fontWeight: 900,
            }}
          >
            Back to home
          </Link>
        </div>
      </section>
    </div>
  );
}
