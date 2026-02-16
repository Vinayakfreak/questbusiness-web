import Link from "next/link";
import styles from "./pricing.module.css";

export default function PricingPage() {
  return (
    <div className={styles.wrap}>
      <header className={styles.top}>
        <Link href="/" style={{ opacity: 0.85 }}>
          ← Home
        </Link>
        <div className={styles.title}>Pricing</div>
      </header>

      <section className={styles.hero}>
        <div className={styles.pill}>Plans</div>
        <h1 className={styles.h1}>Simple plans. Clear upgrades.</h1>
        <p className={styles.sub}>
          Start free. Upgrade when you want daily AI recommendations, structured reviews, and conversion improvements.
        </p>
      </section>

      {/* SaaS plans */}
      <section className={styles.grid}>
        <div className={styles.card}>
          <div className={styles.row}>
            <div style={{ fontWeight: 900 }}>Starter</div>
          </div>
          <div className={styles.price}>Free</div>
          <div className={styles.note}>For getting started</div>
          <ul className={styles.ul}>
            <li>Daily log (basic)</li>
            <li>Starter playbooks</li>
            <li>Community support</li>
          </ul>
          <Link className={styles.btn} href="/login">
            Start
          </Link>
        </div>

        <div className={styles.cardFeatured}>
          <div className={styles.row}>
            <div style={{ fontWeight: 900 }}>Growth</div>
            <div className={styles.badge}>Recommended</div>
          </div>
          <div className={styles.price}>₹1499 / month</div>
          <div className={styles.note}>Best for most businesses</div>
          <ul className={styles.ul}>
            <li>Daily AI recommendations</li>
            <li>Conversion + offer improvements</li>
            <li>Weekly Stop/Start/Continue review</li>
          </ul>
          <Link className={`${styles.btn} ${styles.btnPrimary}`} href="/login">
            Begin Structured Growth
          </Link>
        </div>

        <div className={styles.card}>
          <div className={styles.row}>
            <div style={{ fontWeight: 900 }}>Scale</div>
          </div>
          <div className={styles.price}>₹3499 / month</div>
          <div className={styles.note}>For teams & advanced workflows</div>
          <ul className={styles.ul}>
            <li>Advanced tracking</li>
            <li>Templates + automation</li>
            <li>Priority support</li>
          </ul>
          <a className={styles.btn} href="https://cal.com/questbusiness/book-the-call" target="_blank" rel="noreferrer">
            Talk to us
          </a>
        </div>
      </section>

      {/* Done-for-you */}
      <section className={styles.section}>
        <div className={styles.kicker}>Done-for-you</div>
        <h2 className={styles.h2} style={{ marginTop: 10 }}>
          Customised Setup Pricing (₹3,500 – ₹80,000)
        </h2>
        <p className={styles.sub} style={{ marginTop: 8 }}>
          For founders who want the complete setup handled end-to-end. One-time setup fees; recurring tools (domain,
          hosting, calling credits, API usage) may be billed separately at actual cost.
        </p>

        <div className={styles.customGrid}>
          <div className={styles.customCard}>
            <div style={{ fontWeight: 900 }}>Launch Setup</div>
            <div className={styles.price}>₹3,500 – ₹12,000</div>
            <div className={styles.note}>Early businesses</div>
            <ul className={styles.ul}>
              <li>Template website / 1-page setup</li>
              <li>Basic tracking + assistant setup</li>
              <li>WhatsApp inquiry + lead capture</li>
              <li>Basic training</li>
            </ul>
            <a className={styles.btn} href="https://cal.com/questbusiness/book-the-call" target="_blank" rel="noreferrer">
              Book a call
            </a>
          </div>

          <div className={styles.customCard}>
            <div style={{ fontWeight: 900 }}>Growth System Setup</div>
            <div className={styles.price}>₹15,000 – ₹35,000</div>
            <div className={styles.note}>Growing businesses</div>
            <ul className={styles.ul}>
              <li>Premium website setup</li>
              <li>CRM pipeline + follow-up workflow</li>
              <li>WhatsApp automation setup</li>
              <li>Advanced AI assistant setup</li>
            </ul>
            <a className={styles.btn} href="https://cal.com/questbusiness/book-the-call" target="_blank" rel="noreferrer">
              Book a call
            </a>
          </div>

          <div className={styles.customCard}>
            <div style={{ fontWeight: 900 }}>Business OS Transformation</div>
            <div className={styles.price}>₹50,000 – ₹80,000</div>
            <div className={styles.note}>Premium clients</div>
            <ul className={styles.ul}>
              <li>Custom website + branding</li>
              <li>Full CRM + automation</li>
              <li>Calling flow + scripts</li>
              <li>Audit + strategy + training</li>
            </ul>
            <a className={styles.btn} href="https://cal.com/questbusiness/book-the-call" target="_blank" rel="noreferrer">
              Book a call
            </a>
          </div>
        </div>
      </section>

      <div style={{ marginTop: 16, opacity: 0.7, fontSize: 13 }}>
        Note: Shipping/logistics is handled by the seller (out of scope for MVP).
      </div>
    </div>
  );
}
