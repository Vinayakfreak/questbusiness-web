"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import styles from "./blog.module.css";

type Post = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  date: string;
  image: string;
  featured?: boolean;
};

const POSTS: Post[] = [
  {
    slug: "improve-instagram-engagement-7-days",
    title: "How to Improve Instagram Engagement in 7 Days",
    summary: "Practical tactics to boost visibility, interaction, and conversion without paid ads.",
    category: "Growth Strategy",
    date: "March 10, 2026",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=70",
    featured: true,
  },
  {
    slug: "weekly-business-review-simple-framework",
    title: "The Weekly Business Review: A Simple Framework That Compounds",
    summary: "Use Stop/Start/Continue to keep decisions grounded and execution consistent.",
    category: "Weekly Business Review",
    date: "March 18, 2026",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=70",
  },
  {
    slug: "ai-content-ideas-that-sell",
    title: "AI Content Ideas That Actually Sell",
    summary: "A system to generate content that moves prospects through a clear buying journey.",
    category: "AI Growth Tips",
    date: "March 28, 2026",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=70",
  },
  {
    slug: "conversion-optimization-for-small-brands",
    title: "Conversion Optimization for Small Brands (No Hype)",
    summary: "Improve headline, offer clarity, CTA friction, and pricing psychology with a calm checklist.",
    category: "Content Strategy",
    date: "April 02, 2026",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=1400&q=70",
  },
];

const CATEGORIES = [
  "All",
  "AI Growth Tips",
  "Content Strategy",
  "Weekly Business Review",
  "Case Studies",
  "Product Updates",
  "Growth Strategy",
] as const;

export default function BlogPage() {
  const [cat, setCat] = useState<(typeof CATEGORIES)[number]>("All");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const qq = q.trim().toLowerCase();
    return POSTS.filter((p) => {
      const okCat = cat === "All" ? true : p.category === cat;
      const okQ =
        !qq ||
        p.title.toLowerCase().includes(qq) ||
        p.summary.toLowerCase().includes(qq) ||
        p.category.toLowerCase().includes(qq);
      return okCat && okQ;
    });
  }, [cat, q]);

  return (
    <div className={styles.wrap}>
      <header className={styles.top}>
        <Link href="/" style={{ opacity: 0.85 }}>
          ← Home
        </Link>
        <div style={{ opacity: 0.8, fontSize: 13 }}>Quest Business</div>
      </header>

      <section className={styles.hero}>
        <div className={styles.pill}>Blog</div>
        <h1 className={styles.h1}>Insights &amp; Growth Resources</h1>
        <p className={styles.sub}>
          Actionable articles, tips, and strategies to help small brands grow with structure and intelligence.
        </p>
      </section>

      <div className={styles.layout}>
        <main>
          <div className={styles.grid}>
            {filtered.map((p) => (
              <article key={p.slug} className={p.featured ? `${styles.card} ${styles.featured}` : styles.card}>
                <img className={styles.img} src={p.image} alt="" loading="lazy" />
                <div className={styles.body}>
                  <div className={styles.meta}>
                    <div className={styles.cat}>{p.category}</div>
                    <div>{p.date}</div>
                  </div>
                  <div className={styles.title}>{p.title}</div>
                  <div className={styles.sum}>{p.summary}</div>
                </div>
              </article>
            ))}
          </div>

          <section className={styles.cta}>
            <div className={styles.ctaTitle}>Want growth tips delivered daily?</div>
            <div className={styles.sub} style={{ marginTop: 8 }}>
              Subscribe to updates and we’ll share new playbooks and improvements.
            </div>
            <div className={styles.ctaRow}>
              <a className={`${styles.btn} ${styles.btnPrimary}`} href="/login">
                Subscribe to Updates
              </a>
              <a className={styles.btn} href="https://cal.com/questbusiness/book-the-call" target="_blank" rel="noreferrer">
                Book a call
              </a>
            </div>
          </section>
        </main>

        <aside className={styles.sidebar}>
          <div className={styles.sideTitle}>Filter</div>
          <input
            className={styles.search}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search articles"
          />

          <div style={{ marginTop: 12, color: "var(--muted)", fontSize: 12 }}>Categories</div>
          <div className={styles.tags}>
            {CATEGORIES.map((c) => (
              <button
                key={c}
                className={c === cat ? `${styles.tag} ${styles.tagActive}` : styles.tag}
                onClick={() => setCat(c)}
                type="button"
              >
                {c}
              </button>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
