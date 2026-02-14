"use client";

import React, { useState } from "react";

type QA = { q: string; a: string };

const items: QA[] = [
  {
    q: "What is Quest Business?",
    a: "An all-in-one platform: marketplace + website builder + daily AI coach + learning roadmap.",
  },
  {
    q: "Do you support payments and checkout?",
    a: "Checkout is MVP now. Full payment tracking + commission logic will be enabled in Phase 2.",
  },
  {
    q: "Is shipping included?",
    a: "Shipping/logistics is handled by the seller (out of scope for MVP).",
  },
  {
    q: "How does the AI help daily?",
    a: "Daily targets, tasks before closing shop, market suggestions, 1% improvement plan, and differentiation ideas.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div>
      {items.map((it, idx) => {
        const isOpen = open === idx;
        return (
          <div
            key={it.q}
            style={{
              border: "1px solid var(--border)",
              borderRadius: 14,
              background: "var(--panel)",
              marginTop: 10,
              overflow: "hidden",
            }}
          >
            <button
              onClick={() => setOpen((cur) => (cur === idx ? null : idx))}
              style={{
                width: "100%",
                textAlign: "left",
                padding: "12px 14px",
                display: "flex",
                justifyContent: "space-between",
                gap: 10,
                background: "transparent",
                border: "0",
                color: "var(--fg)",
                cursor: "pointer",
                fontWeight: 900,
              }}
            >
              <span>{it.q}</span>
              <span style={{ opacity: 0.7 }}>{isOpen ? "–" : "+"}</span>
            </button>
            {isOpen ? (
              <div style={{ padding: "0 14px 12px", opacity: 0.85, lineHeight: 1.7 }}>{it.a}</div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
