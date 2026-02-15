import Link from "next/link";
import styles from "./page.module.css";
import { QBLogo } from "./components/QBLogo";
import { Starfield } from "./components/Starfield";
import { LoginModal } from "./components/LoginModal";
import { HeroTypeSelector } from "./components/HeroTypeSelector";

const BRAND = "Quest Business";

function DashboardMock() {
  return (
    <div className={styles.mock} aria-label="Dashboard preview">
      <div className={styles.mockTop}>
        <div className={styles.mockPill}>Revenue</div>
        <div className={styles.mockPill}>Signals</div>
        <div className={styles.mockPill}>Next actions</div>
      </div>

      <div className={styles.mockGrid}>
        <div className={styles.mockCard}>
          <div className={styles.mockLabel}>Monthly revenue</div>
          <div className={styles.mockValue}>₹ 2,18,400</div>
          <div className={styles.spark} aria-hidden />
        </div>

        <div className={styles.mockCard}>
          <div className={styles.mockLabel}>AI recommendation</div>
          <div className={styles.mockText}>
            Improve conversions by tightening the offer and simplifying the CTA.
          </div>
          <div className={styles.mockList}>
            <div>• Rewrite headline</div>
            <div>• Add 2 proof points</div>
            <div>• Reduce checkout friction</div>
          </div>
        </div>
      </div>
    </div>
  );
}

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
          <nav className={styles.menu}>
            <Link className={styles.menuLink} href="/">
              Home
            </Link>
            <Link className={styles.menuLink} href="/about">
              About
            </Link>
            <Link className={styles.menuLink} href="/blog">
              Blog
            </Link>
            <Link className={styles.menuLink} href="/contact">
              Contact
            </Link>
            <a
              className={styles.menuCta}
              href="https://cal.com/questbusiness/book-the-call"
              target="_blank"
              rel="noreferrer"
            >
              Book a call
            </a>
          </nav>
        </header>

        {/* HERO */}
        <section id="home" className={styles.hero}>
          <div className={styles.canvas} aria-hidden>
            <Starfield />
          </div>
          <div className={styles.heroGlow} aria-hidden />

          <div className={styles.heroInner}>
            <div className={styles.fadeIn}>
              <div className={styles.kicker}>AI Growth Operating System</div>
              <h1 className={styles.h1}>Structured Growth For Modern Small Brands.</h1>
              <p className={styles.sub}>
                Quest Business is an AI-powered growth operating system that tracks performance, analyzes patterns, and
                improves revenue daily.
              </p>

              <div className={styles.ctas}>
                <Link className={styles.btnPrimary} href="/login">
                  Start Free 7-Day Growth Trial
                </Link>
                <Link className={styles.btnSecondary} href="/demo">
                  View Platform Preview
                </Link>
              </div>

              <HeroTypeSelector />

              <div className={styles.trustRow}>
                <div className={styles.trustItem}>Daily tracking</div>
                <div className={styles.trustItem}>Weekly review</div>
                <div className={styles.trustItem}>Actionable AI</div>
                <div className={styles.trustItem}>Low friction setup</div>
              </div>
            </div>

            <div className={styles.heroRight}>
              <div className={styles.fadeInDelay}>
                <DashboardMock />
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section className={styles.section} id="problem">
          <div className={styles.sectionHead}>
            <h2 className={styles.h2}>Most Small Businesses Operate Without A System.</h2>
            <p className={styles.p}>
              Effort is not the issue. Structure is. When performance isn’t tracked and reviewed, growth becomes
              inconsistent.
            </p>
          </div>

          <div className={styles.cards3}>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Random Content</div>
              <div className={styles.cardBody}>Posting without a weekly plan leads to unstable reach and poor conversion.</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Disconnected Data</div>
              <div className={styles.cardBody}>Sales, DMs, leads, and traffic live in different places with no clear signal.</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTitle}>No Weekly Optimization</div>
              <div className={styles.cardBody}>Without review, the same mistakes repeat and small improvements don’t compound.</div>
            </div>
          </div>
        </section>

        {/* SOLUTION */}
        <section className={styles.section} id="features">
          <div className={styles.sectionSplit}>
            <div>
              <div className={styles.kicker}>Solution</div>
              <h2 className={styles.h2}>An AI Growth Operating System.</h2>
              <p className={styles.p}>
                A calm, structured workflow for daily execution and weekly review — built for product sellers and service
                businesses.
              </p>
            </div>

            <div className={styles.featureGrid}>
              <div className={styles.feature}>
                <div className={styles.featureTitle}>Daily Performance Tracking</div>
                <div className={styles.featureBody}>Log key signals in one place. Keep progress measurable.</div>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureTitle}>AI Content & Conversion Intelligence</div>
                <div className={styles.featureBody}>Turn patterns into clear actions: what to post, what to change, what to keep.</div>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureTitle}>Weekly Strategic Review</div>
                <div className={styles.featureBody}>Stop / Start / Continue — with recommendations grounded in your history.</div>
              </div>
            </div>
          </div>
        </section>

        {/* 7-DAY TRIAL */}
        <section className={styles.section} id="trial">
          <div className={styles.sectionHead}>
            <h2 className={styles.h2}>What you get in the 7-day trial</h2>
            <p className={styles.p}>
              A simple sequence that turns “trying a tool” into a working operating rhythm.
            </p>
          </div>

          <div className={styles.timeline}>
            <div className={styles.timeCard}>
              <div className={styles.timeDay}>Day 1</div>
              <div className={styles.timeTitle}>Setup + baseline</div>
              <div className={styles.timeBody}>Define your offer, audience, and current numbers. Start the daily log.</div>
            </div>
            <div className={styles.timeCard}>
              <div className={styles.timeDay}>Day 2</div>
              <div className={styles.timeTitle}>Content structure</div>
              <div className={styles.timeBody}>Create 3 content pillars + a posting plan you can actually maintain.</div>
            </div>
            <div className={styles.timeCard}>
              <div className={styles.timeDay}>Day 3</div>
              <div className={styles.timeTitle}>Offer clarity</div>
              <div className={styles.timeBody}>Tighten your promise and pricing so customers understand quickly.</div>
            </div>
            <div className={styles.timeCard}>
              <div className={styles.timeDay}>Day 4</div>
              <div className={styles.timeTitle}>Conversion fixes</div>
              <div className={styles.timeBody}>Simplify CTA, reduce friction, and improve the landing message.</div>
            </div>
            <div className={styles.timeCard}>
              <div className={styles.timeDay}>Day 5</div>
              <div className={styles.timeTitle}>Lead follow-up system</div>
              <div className={styles.timeBody}>Build a repeatable follow-up script and tracking workflow.</div>
            </div>
            <div className={styles.timeCard}>
              <div className={styles.timeDay}>Day 6</div>
              <div className={styles.timeTitle}>Weekly review</div>
              <div className={styles.timeBody}>Stop/Start/Continue review based on your week’s signals.</div>
            </div>
            <div className={styles.timeCard}>
              <div className={styles.timeDay}>Day 7</div>
              <div className={styles.timeTitle}>Next 30-day plan</div>
              <div className={styles.timeBody}>A clear plan for the next month with priorities and targets.</div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className={styles.section} id="how">
          <div className={styles.sectionHead}>
            <h2 className={styles.h2}>How It Works</h2>
            <p className={styles.p}>A lightweight loop designed to compound improvements without noise.</p>
          </div>

          <div className={styles.steps}>
            <div className={styles.step}>
              <div className={styles.stepNum}>01</div>
              <div className={styles.stepText}>Connect your data</div>
            </div>
            <div className={styles.stepLine} aria-hidden />
            <div className={styles.step}>
              <div className={styles.stepNum}>02</div>
              <div className={styles.stepText}>Log daily performance</div>
            </div>
            <div className={styles.stepLine} aria-hidden />
            <div className={styles.step}>
              <div className={styles.stepNum}>03</div>
              <div className={styles.stepText}>Receive AI action</div>
            </div>
            <div className={styles.stepLine} aria-hidden />
            <div className={styles.step}>
              <div className={styles.stepNum}>04</div>
              <div className={styles.stepText}>Compound structured growth</div>
            </div>
          </div>
        </section>

        {/* DASHBOARD SHOWCASE */}
        <section className={styles.section} id="preview">
          <div className={styles.sectionSplit}>
            <div>
              <div className={styles.kicker}>Dashboard</div>
              <h2 className={styles.h2}>Clarity Over Complexity.</h2>
              <p className={styles.p}>
                A single view that shows performance, quality signals, and clear next actions.
              </p>
            </div>
            <DashboardMock />
          </div>
        </section>

        {/* WEBSITE OPTIMIZATION MODULE */}
        <section className={styles.section} id="optimization">
          <div className={styles.sectionHead}>
            <h2 className={styles.h2}>Turn Visitors Into Buyers.</h2>
            <p className={styles.p}>
              Conversion improvements are treated like engineering: measurable, repeatable, and prioritized.
            </p>
          </div>

          <div className={styles.bullets}>
            <div>Headline refinement</div>
            <div>Offer optimization</div>
            <div>CTA improvement</div>
            <div>Pricing psychology</div>
            <div>Funnel analysis</div>
          </div>
        </section>

        {/* PROOF */}
        <section className={styles.section} id="proof">
          <div className={styles.sectionHead}>
            <h2 className={styles.h2}>Proof beats promises.</h2>
            <p className={styles.p}>
              Early results will be published here as we onboard more businesses.
            </p>
          </div>
          <div className={styles.testimonials}>
            <div className={styles.quote}>
              <div className={styles.quoteText}>
                “The daily checklist removed decision fatigue. We became consistent again.”
              </div>
              <div className={styles.quoteMeta}>— Founder, D2C brand (beta)</div>
            </div>
            <div className={styles.quote}>
              <div className={styles.quoteText}>
                “Weekly review made it obvious what to stop doing. The system feels calm.”
              </div>
              <div className={styles.quoteMeta}>— Service business owner (beta)</div>
            </div>
            <div className={styles.quote}>
              <div className={styles.quoteText}>
                “We improved conversion by simplifying the offer and tightening the CTA.”
              </div>
              <div className={styles.quoteMeta}>— Instagram seller (beta)</div>
            </div>
          </div>
        </section>

        {/* WHO IT’S FOR */}
        <section className={styles.section} id="for">
          <div className={styles.sectionHead}>
            <h2 className={styles.h2}>Who It’s For</h2>
            <p className={styles.p}>Built for teams that want structure without overhead.</p>
          </div>
          <div className={styles.cards3}>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Instagram-first D2C brands</div>
              <div className={styles.cardBody}>A system for content, conversion, and daily execution.</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Founder-led businesses</div>
              <div className={styles.cardBody}>Clear targets and next actions when time and attention are limited.</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Early-stage online stores</div>
              <div className={styles.cardBody}>Identify what works early, then scale with discipline.</div>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className={styles.section} id="pricing">
          <div className={styles.sectionHead}>
            <h2 className={styles.h2}>Pricing</h2>
            <p className={styles.p}>Simple plans. A clear upgrade path.</p>
          </div>

          <div className={styles.pricing}>
            <div className={styles.priceCard}>
              <div className={styles.priceTitle}>Starter</div>
              <div className={styles.priceValue}>Free</div>
              <div className={styles.priceNote}>For getting started</div>
              <ul className={styles.priceUl}>
                <li>Daily log (basic)</li>
                <li>Starter playbooks</li>
                <li>Community support</li>
              </ul>
              <Link className={styles.btnSecondary} href="/login">
                Start
              </Link>
            </div>

            <div className={styles.priceCardFeatured}>
              <div className={styles.priceTitle}>Growth</div>
              <div className={styles.priceValue}>₹1499 / month</div>
              <div className={styles.priceNote}>Best for most businesses</div>
              <ul className={styles.priceUl}>
                <li>Daily AI recommendations</li>
                <li>Conversion + offer improvements</li>
                <li>Weekly Stop/Start/Continue review</li>
              </ul>
              <Link className={styles.btnPrimary} href="/login">
                Begin Structured Growth
              </Link>
            </div>

            <div className={styles.priceCard}>
              <div className={styles.priceTitle}>Scale</div>
              <div className={styles.priceValue}>₹3499 / month</div>
              <div className={styles.priceNote}>For teams & advanced workflows</div>
              <ul className={styles.priceUl}>
                <li>Advanced tracking</li>
                <li>Templates + automation</li>
                <li>Priority support</li>
              </ul>
              <a className={styles.btnSecondary} href="https://cal.com/questbusiness/book-the-call" target="_blank" rel="noreferrer">
                Talk to us
              </a>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className={styles.final}>
          <div className={styles.finalInner}>
            <h2 className={styles.h2}>Stop Operating Blind. Start Operating With Structure.</h2>
            <p className={styles.p}>
              Start with a calm system: track, review, and improve with consistent execution.
            </p>
            <div className={styles.ctas}>
              <Link className={styles.btnPrimary} href="/login">
                Begin Structured Growth
              </Link>
              <Link className={styles.btnSecondary} href="/demo">
                View preview
              </Link>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className={styles.footer}>
          <div className={styles.footerLinks}>
            <Link href="/about">About</Link>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <Link href="/">Privacy</Link>
            <Link href="/">Terms</Link>
            <a href="mailto:support@questbusiness.in">Contact</a>
          </div>
          <div className={styles.footerCopy}>© {new Date().getFullYear()} {BRAND}.</div>
        </footer>
      </div>
    </div>
  );
}
