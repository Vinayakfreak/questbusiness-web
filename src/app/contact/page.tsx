"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./contact.module.css";

export default function ContactPage() {
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMsg("");
    setBusy(true);

    const form = new FormData(e.currentTarget);
    const first = String(form.get("first") || "").trim();
    const last = String(form.get("last") || "").trim();
    const email = String(form.get("email") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const message = String(form.get("message") || "").trim();

    try {
      const r = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ first, last, email, phone, message }),
      });
      const j = await r.json().catch(() => ({}));

      if (r.ok) {
        setMsg("Submitted. We will contact you shortly.");
        e.currentTarget.reset();
        return;
      }

      // Fallback: open WhatsApp if email isn't configured
      const text =
        `Hi Quest Business,%0A%0A` +
        `Name: ${encodeURIComponent(first + (last ? " " + last : ""))}%0A` +
        `Email: ${encodeURIComponent(email)}%0A` +
        `Phone: ${encodeURIComponent(phone)}%0A%0A` +
        `Message:%0A${encodeURIComponent(message)}%0A`;

      window.open(`https://wa.me/917007474846?text=${text}`, "_blank");
      setMsg(j?.error ? `${j.error} Opened WhatsApp as fallback.` : "Opened WhatsApp as fallback.");
      e.currentTarget.reset();
    } catch {
      setMsg("Failed to submit. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className={styles.wrap}>
      <header className={styles.top}>
        <Link href="/" style={{ opacity: 0.85 }}>
          ← Home
        </Link>
        <div className={styles.title}>Quest Business</div>
      </header>

      <section className={styles.hero}>
        <div className={styles.pill}>Contact</div>
        <h1 className={styles.h1}>Get in Touch with Us</h1>
        <p className={styles.sub}>
          Have questions or need AI solutions? Let us know by filling out the form, and we’ll be in touch.
        </p>
      </section>

      <section className={styles.grid}>
        <div className={styles.card}>
          <div className={styles.infoRow}>
            <div className={styles.info}>
              <div className={styles.infoLabel}>Email</div>
              <div className={styles.infoValue}>support@questbusiness.in</div>
            </div>
            <div className={styles.info}>
              <div className={styles.infoLabel}>Phone</div>
              <div className={styles.infoValue}>+91 7007474846</div>
            </div>
          </div>

          {msg ? <div className={styles.note}>{msg}</div> : null}

          <form onSubmit={onSubmit}>
            <div className={styles.form}>
              <input className={styles.input} name="first" placeholder="First Name" required />
              <input className={styles.input} name="last" placeholder="Last Name" />
              <input className={styles.input} name="email" placeholder="Email" type="email" required />
              <input className={styles.input} name="phone" placeholder="Phone" required />
              <textarea className={`${styles.textarea} ${styles.full}`} name="message" placeholder="Message" required />
            </div>
            <button className={styles.btn} type="submit" disabled={busy}>
              {busy ? "Submitting…" : "Submit Form"}
            </button>
          </form>

          <div className={styles.note}>
            This form submits to our support inbox. If email is not configured, it will open WhatsApp as a fallback.
          </div>
        </div>
      </section>
    </div>
  );
}
