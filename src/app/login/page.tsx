import Link from "next/link";
import styles from "./login.module.css";
import LoginClient from "./LoginClient";

export default function LoginPage() {
  return (
    <div className={styles.wrap}>
      <header className={styles.top}>
        <Link href="/" style={{ opacity: 0.85 }}>
          ← Home
        </Link>
        <div className={styles.title}>Quest Business</div>
      </header>

      <section className={styles.hero}>
        <div className={styles.pill}>Login</div>
        <h1 className={styles.h1}>Access your Growth Operating System</h1>
        <p className={styles.sub}>
          Verify your email with OTP, then activate your coupon to unlock your plan.
        </p>
      </section>

      <section className={styles.grid}>
        <div className={styles.side}>
          <div className={styles.sideTitle}>What happens after login</div>
          <div style={{ marginTop: 10 }}>
            • Start the 7-day structured trial
            <br />• Log daily performance in minutes
            <br />• Get one clear action per day
            <br />• Run a weekly Stop/Start/Continue review
          </div>
          <div style={{ marginTop: 12, opacity: 0.9 }}>
            Prefer speaking first? Book a call:
            <div style={{ marginTop: 8 }}>
              <a href="https://cal.com/questbusiness/book-the-call" target="_blank" rel="noreferrer">
                https://cal.com/questbusiness/book-the-call
              </a>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <LoginClient />
        </div>
      </section>
    </div>
  );
}
