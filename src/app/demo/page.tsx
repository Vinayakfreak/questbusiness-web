import Link from "next/link";
import styles from "./demo.module.css";

function MiniChart() {
  return (
    <div className={styles.chart} aria-hidden>
      <div className={styles.chartBar} style={{ height: 18 }} />
      <div className={styles.chartBar} style={{ height: 26 }} />
      <div className={styles.chartBar} style={{ height: 22 }} />
      <div className={styles.chartBar} style={{ height: 34 }} />
      <div className={styles.chartBar} style={{ height: 42 }} />
      <div className={styles.chartBar} style={{ height: 38 }} />
      <div className={styles.chartBar} style={{ height: 50 }} />
    </div>
  );
}

export default function DemoPage() {
  return (
    <div className={styles.wrap}>
      <header className={styles.top}>
        <Link href="/" style={{ opacity: 0.85 }}>
          ← Home
        </Link>
        <div className={styles.title}>Platform Preview</div>
      </header>

      <section className={styles.hero}>
        <div className={styles.pill}>Demo</div>
        <h1 className={styles.h1}>A calm dashboard built for daily execution.</h1>
        <p className={styles.sub}>
          This is a preview of how Quest Business presents performance, patterns, and next actions.
        </p>
      </section>

      <section className={styles.grid}>
        <div className={styles.card}>
          <div className={styles.label}>Revenue (30 days)</div>
          <div className={styles.value}>₹ 2,18,400</div>
          <MiniChart />
        </div>
        <div className={styles.card}>
          <div className={styles.label}>Engagement score</div>
          <div className={styles.value}>74 / 100</div>
          <div className={styles.muted}>
            Consistency improved. Keep the posting schedule stable for 14 days.
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.label}>AI recommendation</div>
          <div className={styles.value} style={{ fontSize: 16 }}>
            Tighten the offer and simplify the CTA.
          </div>
          <div className={styles.muted}>
            Next actions:
            <div className={styles.list}>
              <div>• Rewrite the headline in one clear promise</div>
              <div>• Add proof: 2 screenshots / 2 reviews</div>
              <div>• Reduce steps to checkout / booking</div>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.label}>Weekly review (Stop/Start/Continue)</div>
          <div className={styles.muted}>
            <div className={styles.list}>
              <div>
                <b>Stop:</b> posting without a weekly plan
              </div>
              <div>
                <b>Start:</b> 3 content pillars + 1 offer per week
              </div>
              <div>
                <b>Continue:</b> replying to leads within 15 minutes
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <h2 className={styles.h2}>Want this for your business?</h2>
        <p className={styles.sub} style={{ marginTop: 8 }}>
          Start the 7-day structured trial or book a call to set it up.
        </p>
        <div className={styles.row}>
          <Link className={styles.btnPrimary} href="/login">
            Start Free 7-Day Trial
          </Link>
          <a className={styles.btn} href="https://cal.com/questbusiness/book-the-call" target="_blank" rel="noreferrer">
            Book a call
          </a>
        </div>
      </section>
    </div>
  );
}
