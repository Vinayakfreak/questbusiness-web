"use client";

import { useMemo, useState } from "react";
import styles from "./HeroTypeSelector.module.css";

type BizType = "products" | "services" | "both";

const COPY: Record<BizType, { label: string; line: string }> = {
  products: {
    label: "Products",
    line: "A daily system for storefront conversion, content, and repeat purchases.",
  },
  services: {
    label: "Services",
    line: "A daily system for lead flow, follow-ups, and consistent bookings.",
  },
  both: {
    label: "Both",
    line: "A single operating system for selling products and booking services.",
  },
};

export function HeroTypeSelector() {
  const [type, setType] = useState<BizType>("both");
  const text = useMemo(() => COPY[type].line, [type]);

  return (
    <div className={styles.wrap}>
      <div className={styles.label}>Built for</div>
      <div className={styles.tabs}>
        {(Object.keys(COPY) as BizType[]).map((k) => (
          <button
            key={k}
            type="button"
            className={k === type ? `${styles.tab} ${styles.active}` : styles.tab}
            onClick={() => setType(k)}
          >
            {COPY[k].label}
          </button>
        ))}
      </div>
      <div className={styles.text}>{text}</div>
    </div>
  );
}
