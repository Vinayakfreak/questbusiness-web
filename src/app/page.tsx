import Link from "next/link";
import styles from "./page.module.css";
import { QBLogo } from "./components/QBLogo";
import { Starfield } from "./components/Starfield";

const BRAND = "Quest Business";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.nav}>
          <div className={styles.brand}>
            <QBLogo size={28} />
            <span>{BRAND}</span>
            <span className={styles.badge}>MVP</span>
          </div>
          <div className={styles.badge}>questbusiness.in</div>
        </header>

        {/* Welcome / Landing screen */}
        <section className={styles.hero}>
          <div className={styles.canvas} aria-hidden>
            <Starfield />
            {/* 3D background: set NEXT_PUBLIC_SPLINE_URL in Vercel env to enable */}
            {process.env.NEXT_PUBLIC_SPLINE_URL ? (
              <iframe title="3D" src={process.env.NEXT_PUBLIC_SPLINE_URL} loading="lazy" />
            ) : null}
          </div>
          <div className={styles.heroGlow} aria-hidden />

          <div className={styles.heroInner}>
            <div className={styles.badge} style={{ width: "fit-content" }}>
              AI + Marketplace + Learning
            </div>
            <h1 className={styles.h1} style={{ marginTop: 10 }}>
              {BRAND}
            </h1>
            <p className={styles.sub}>
              Make your blueprint idea come to reality and become different from other marketplace people.
            </p>

            <div className={styles.ctas}>
              <Link className={styles.btnPrimary} href="/onboard">
                Your Business Idea
              </Link>
              <Link className={styles.btnSecondary} href="/about">
                Learn more
              </Link>
              <Link className={styles.btnSecondary} href="/pricing">
                Pricing
              </Link>
              <Link className={styles.btnSecondary} href="/s/demo">
                Demo seller page
              </Link>
            </div>

            {/* Sequential parts (cards) */}
            <div className={styles.grid}>
              <div className={styles.card}>
                <h3>Track A</h3>
                <p>Seller storefront + WhatsApp orders + UPI.</p>
              </div>
              <div className={styles.card}>
                <h3>Track B</h3>
                <p>7‑day build from scratch + AI workflows.</p>
              </div>
              <div className={styles.card}>
                <h3>Reality + Growth</h3>
                <p>Honest guidance—what to fix and what to do next.</p>
              </div>
            </div>

            {/* About & projects + upcoming */}
            <div className={styles.section}>
              <div className={styles.list}>
                <h2>The idea (learning roadmap)</h2>
                <ul className={styles.ul}>
                  <li>7 days: build a website from scratch</li>
                  <li>Proper detailed explanation while making the website</li>
                  <li>Make AI work for you</li>
                  <li>Make money online</li>
                  <li>Work 2 hours daily & learn AI + web development</li>
                  <li>Learn business from scratch</li>
                  <li>Learn digital marketing</li>
                  <li>Learn about stock</li>
                </ul>
              </div>
              <div className={styles.list}>
                <h2>About us & upcoming</h2>
                <ul className={styles.ul}>
                  <li>Seller onboarding form</li>
                  <li>Real product upload + catalog</li>
                  <li>Seller dashboard + order tracking</li>
                  <li>AI weekly growth report</li>
                </ul>
              </div>
            </div>

            <footer className={styles.footer}>
              © {new Date().getFullYear()} {BRAND}.
            </footer>
          </div>
        </section>
      </div>
    </div>
  );
}
