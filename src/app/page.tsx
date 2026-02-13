import Link from "next/link";
import styles from "./page.module.css";

const BRAND = "QuestBudiness";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.nav}>
          <div className={styles.brand}>
            <span>{BRAND}</span>
            <span className={styles.badge}>MVP</span>
          </div>
          <div className={styles.badge}>questbusiness.in</div>
        </header>

        <section className={styles.hero}>
          {/* 3D background placeholder (Spline embed) */}
          <div className={styles.canvas} aria-hidden>
            <iframe
              title="3D"
              // Replace this with your Spline scene URL later.
              src="https://my.spline.design/placeholder"
              loading="lazy"
            />
          </div>

          <div className={styles.heroInner}>
            <h1 className={styles.h1}>
              All-in-one platform for small sellers.
            </h1>
            <p className={styles.sub}>
              Create a store page, list products, take orders on WhatsApp/UPI, and grow with honest guidance.
              Built for entrepreneurs who want to start with low investment.
            </p>

            <div className={styles.ctas}>
              <Link className={styles.btnPrimary} href="/onboard">
                Create your store
              </Link>
              <Link className={styles.btnSecondary} href="/s/demo">
                View demo seller page
              </Link>
            </div>

            <div className={styles.grid}>
              <div className={styles.card}>
                <h3>Fast Setup</h3>
                <p>Simple seller page like a marketplace product page.</p>
              </div>
              <div className={styles.card}>
                <h3>Low Investment</h3>
                <p>Start with WhatsApp orders + UPI, upgrade later.</p>
              </div>
              <div className={styles.card}>
                <h3>Honest Coach</h3>
                <p>We tell you what to fix, not fake motivation.</p>
              </div>
            </div>

            <div className={styles.section}>
              <div className={styles.list}>
                <h2>What you can do (Phase 1)</h2>
                <ul className={styles.ul}>
                  <li>Create your seller store page</li>
                  <li>Add products with photos and prices</li>
                  <li>Take orders via WhatsApp</li>
                  <li>Accept UPI payments (link/QR)</li>
                </ul>
              </div>
              <div className={styles.list}>
                <h2>Coming next</h2>
                <ul className={styles.ul}>
                  <li>Seller dashboard + order tracking</li>
                  <li>Customer list + follow-ups</li>
                  <li>Templates for Instagram & WhatsApp</li>
                  <li>AI weekly growth report</li>
                </ul>
              </div>
            </div>

            <footer className={styles.footer}>
              © {new Date().getFullYear()} {BRAND}. Build the small, grow the big.
            </footer>
          </div>
        </section>
      </div>
    </div>
  );
}
