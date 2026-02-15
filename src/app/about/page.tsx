import Link from "next/link";
import styles from "./about.module.css";
import { QBLogo } from "../components/QBLogo";

export default function AboutPage() {
  return (
    <div className={styles.wrap}>
      <header className={styles.top}>
        <div className={styles.brand}>
          <QBLogo size={26} />
          <span>Quest Business</span>
        </div>
        <Link href="/" style={{ opacity: 0.85 }}>
          ← Home
        </Link>
      </header>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.pill}>About Us</div>
        <h1 className={styles.h1}>Helping Businesses Grow</h1>
        <p className={styles.sub}>
          Quest Business helps small brands grow smarter and faster with an AI-powered Growth Operating System. We empower
          founder-led businesses to streamline daily operations, reduce manual work, and unlock structured, data-driven
          growth.
        </p>

        <div className={styles.logoRow} aria-label="Trusted by">
          <div className={styles.logo}>Structured Tracking</div>
          <div className={styles.logo}>Weekly Review</div>
          <div className={styles.logo}>Conversion Systems</div>
          <div className={styles.logo}>AI Guidance</div>
        </div>
      </section>

      {/* Who We Are */}
      <section className={styles.section}>
        <div className={styles.pill}>Who We Are</div>
        <h2 className={styles.h2} style={{ marginTop: 10 }}>
          A team focused on simplicity with structure.
        </h2>
        <p className={styles.p}>
          We help small ecommerce and Instagram-driven brands track performance consistently, optimize content strategy
          intelligently, and scale with structured insights rather than guesswork.
        </p>
        <p className={styles.p}>
          With daily performance tracking, weekly strategic reviews, and AI-driven content guidance, we help brands make
          smarter decisions and achieve measurable progress.
        </p>
      </section>

      {/* Mission */}
      <section className={styles.section}>
        <div className={styles.pill}>Mission</div>
        <h2 className={styles.h2} style={{ marginTop: 10 }}>
          Make business intelligence accessible.
        </h2>
        <p className={styles.p}>
          Our mission is to democratize business intelligence and make growth tools accessible to every small brand
          founder. We believe:
        </p>
        <ul className={styles.ul}>
          <li>Growth must be consistent</li>
          <li>Data should be actionable</li>
          <li>AI should reduce friction, not add complexity</li>
        </ul>
      </section>

      {/* How We Help */}
      <section className={styles.section}>
        <div className={styles.pill}>How We Help</div>
        <h2 className={styles.h2} style={{ marginTop: 10 }}>
          A simple loop that compounds.
        </h2>
        <p className={styles.p}>Through our AI Growth Operating System, brands can:</p>
        <ul className={styles.ul}>
          <li>Track daily revenue and engagement</li>
          <li>Identify performance patterns</li>
          <li>Get one actionable task each day</li>
          <li>Create high-impact content ideas</li>
          <li>Improve conversion weekly</li>
        </ul>
        <p className={styles.p}>
          We focus on simplicity with structure — helping entrepreneurs grow businesses that scale over time.
        </p>
      </section>

      {/* Values */}
      <section className={styles.section}>
        <div className={styles.pill}>Values</div>
        <h2 className={styles.h2} style={{ marginTop: 10 }}>
          Our Core Values
        </h2>
        <ul className={styles.ul}>
          <li>
            <b>Innovation First</b> — We embrace cutting-edge AI to simplify growth.
          </li>
          <li>
            <b>Integrity &amp; Trust</b> — Transparency and long-term partnership matter.
          </li>
          <li>
            <b>Action-Driven</b> — Every recommendation has a clear purpose.
          </li>
          <li>
            <b>Empowerment</b> — We help founders make faster, smarter decisions.
          </li>
        </ul>
      </section>
    </div>
  );
}
