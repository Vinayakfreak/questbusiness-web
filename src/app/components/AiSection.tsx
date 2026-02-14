"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "../page.module.css";

const tabs = [
  {
    key: "delegate",
    label: "Delegate Daily Tasks",
    title: "Delegate Daily Tasks",
    body: "Daily targets, before‑closing checklist, and reminders so you execute every day.",
  },
  {
    key: "growth",
    label: "Accelerate Sales Growth",
    title: "Accelerate Sales Growth",
    body: "Market analysis + 1% improvement plan + differentiation ideas to beat competitors.",
  },
  {
    key: "brand",
    label: "Make Brand Special",
    title: "Make Your Brand Special",
    body: "Packaging + offer + photo/copy guidance to look premium online and offline.",
  },
] as const;

export function AiSection() {
  const [active, setActive] = useState<(typeof tabs)[number]["key"]>("delegate");
  const cur = tabs.find((t) => t.key === active)!;

  return (
    <div id="ai" className={styles.sectionFull}>
      <div className={styles.kicker}>AI Coach</div>
      <h2 style={{ marginTop: 10, fontSize: 28, letterSpacing: -0.6 }}>Let AI do the work so you can scale faster.</h2>
      <p style={{ marginTop: 8, opacity: 0.85, lineHeight: 1.7, maxWidth: 820 }}>
        Hand‑holding daily guidance for sellers: targets, tasks, market insights and honest feedback.
      </p>

      <div className={styles.tabs}>
        {tabs.map((t) => (
          <button
            key={t.key}
            className={`${styles.tab} ${t.key === active ? styles.tabActive : ""}`}
            onClick={() => setActive(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div style={{ marginTop: 12, border: "1px solid var(--border)", borderRadius: 16, background: "var(--panel2)", padding: 14 }}>
        <div style={{ fontWeight: 900 }}>{cur.title}</div>
        <div style={{ marginTop: 8, opacity: 0.85, lineHeight: 1.7 }}>{cur.body}</div>
        <div style={{ marginTop: 12 }}>
          <Link className={styles.btnSecondary} href="/ai">
            Explore AI Coach →
          </Link>
        </div>
      </div>
    </div>
  );
}
