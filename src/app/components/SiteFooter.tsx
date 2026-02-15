"use client";

import Link from "next/link";
import { QBLogo } from "./QBLogo";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <div className={styles.brandTop}>
            <QBLogo size={26} />
            <span>Quest Business</span>
          </div>
          <div className={styles.tagline}>
            Quest Business is an AI-powered growth operating system for modern small brands — built for calm execution,
            structured review, and consistent improvement.
          </div>

          <div className={styles.newsTitle}>Join our newsletter</div>
          <div className={styles.formRow}>
            <input className={styles.input} placeholder="name@email.com" />
            <a className={styles.btn} href="/login">
              Subscribe
            </a>
          </div>
        </div>

        <div>
          <div className={styles.colTitle}>Links</div>
          <div className={styles.links}>
            <Link href="/use-cases">Use cases</Link>
            <Link href="/demo">Platform preview</Link>
            <a href="#pricing">Pricing</a>
            <a href="https://cal.com/questbusiness/book-the-call" target="_blank" rel="noreferrer">
              Book a call
            </a>
          </div>
        </div>

        <div>
          <div className={styles.colTitle}>Pages</div>
          <div className={styles.links}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>

        <div>
          <div className={styles.colTitle}>Socials</div>
          <div className={styles.links}>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://x.com/" target="_blank" rel="noreferrer">
              Twitter
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div>© {new Date().getFullYear()} Quest Business.</div>
        <div>support@questbusiness.in</div>
      </div>
    </footer>
  );
}
