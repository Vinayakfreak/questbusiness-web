import Link from "next/link";
import styles from "./page.module.css";
import { QBLogo } from "./components/QBLogo";
import { Starfield } from "./components/Starfield";
import { LoginModal } from "./components/LoginModal";
import { FAQ } from "./components/FAQ";
import { AiSection } from "./components/AiSection";

const BRAND = "Quest Business";

export default function Home() {
  return (
    <div className={styles.page}>
      <LoginModal />
      <div className={styles.container}>
        <header className={styles.nav}>
          <div className={styles.brand}>
            <QBLogo size={28} />
            <span>{BRAND}</span>
          </div>
          <nav style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "flex-end" }}>
            <a className={styles.badge} href="#home">Home</a>
            <a className={styles.badge} href="#marketplace">Marketplace</a>
            <a className={styles.badge} href="#roadmap">Roadmap</a>
            <a className={styles.badge} href="#ai">AI</a>
            <a className={styles.badge} href="#pricing">Pricing</a>
            <a className={styles.badge} href="#about">About</a>
            <a className={styles.badge} href="#faq">FAQ</a>
          </nav>
        </header>

        {/* A: Home / Landing */}
        <section id="home" className={styles.hero}>
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
              <a
                className={styles.btnPrimary}
                href="https://quest-business-coach.appy.ai/"
                target="_blank"
                rel="noreferrer"
              >
                Your Business Idea
              </a>
              <Link className={styles.btnSecondary} href="/marketplace">
                Marketplace
              </Link>
            </div>

            {/* I: Marketplace preview */}
            <div id="marketplace" className={styles.sectionFull}>
              <div className={styles.kicker}>Marketplace</div>
              <h2 style={{ marginTop: 10, fontSize: 28, letterSpacing: -0.6 }}>Shop small. Buy better.</h2>
              <p style={{ marginTop: 8, opacity: 0.85, lineHeight: 1.7, maxWidth: 820 }}>
                Discover sellers, products, and services — and checkout in one place.
              </p>
              <div style={{ marginTop: 12 }}>
                <Link className={styles.btnSecondary} href="/marketplace">
                  Open marketplace →
                </Link>
              </div>
            </div>

            {/* C: Roadmap */}
            <div id="roadmap" className={styles.sectionFull}>
              <div className={styles.kicker}>Roadmap</div>
              <h2 style={{ marginTop: 10, fontSize: 28, letterSpacing: -0.6 }}>Build your brand offline + online.</h2>
              <p style={{ marginTop: 8, opacity: 0.85, lineHeight: 1.7, maxWidth: 820 }}>
                Follow the step‑by‑step roadmap: websites, AI workflows, business basics, marketing, and more.
              </p>
              <div style={{ marginTop: 12 }}>
                <Link className={styles.btnSecondary} href="/roadmap">
                  View roadmap →
                </Link>
              </div>
            </div>

            {/* D: AI Coach with tabs */}
            <AiSection />

            {/* E: Pricing preview */}
            <div id="pricing" className={styles.sectionFull}>
              <div className={styles.kicker}>Pricing</div>
              <h2 style={{ marginTop: 10, fontSize: 28, letterSpacing: -0.6 }}>Start free. Upgrade when ready.</h2>
              <p style={{ marginTop: 8, opacity: 0.85, lineHeight: 1.7, maxWidth: 820 }}>
                Free / Basic / Grow — plus custom setup.
              </p>
              <div style={{ marginTop: 12 }}>
                <Link className={styles.btnSecondary} href="/pricing">
                  See pricing →
                </Link>
              </div>
            </div>

            {/* B: About */}
            <div id="about" className={styles.sectionFull}>
              <div className={styles.kicker}>About</div>
              <h2 style={{ marginTop: 10, fontSize: 28, letterSpacing: -0.6 }}>Build smarter systems.</h2>
              <p style={{ marginTop: 8, opacity: 0.85, lineHeight: 1.7, maxWidth: 820 }}>
                Quest Business helps sellers become brands with daily targets, clear tasks, and honest growth.
              </p>
              <div style={{ marginTop: 12 }}>
                <Link className={styles.btnSecondary} href="/about">
                  Learn more →
                </Link>
              </div>
            </div>

            {/* G: FAQ */}
            <div id="faq" className={styles.sectionFull}>
              <div className={styles.kicker}>FAQ</div>
              <h2 style={{ marginTop: 10, fontSize: 28, letterSpacing: -0.6 }}>We’ve got the answers.</h2>
              <FAQ />
              <div style={{ marginTop: 14 }}>
                <a
                  href="https://wa.me/917007474846?text=Hi%20Quest%20Business"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.btnPrimary}
                  style={{ display: "inline-flex" }}
                >
                  WhatsApp us
                </a>
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
