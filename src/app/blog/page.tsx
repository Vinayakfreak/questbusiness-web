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
    slug: "10-ai-growth-tips",
    title: "10 AI Growth Tips for Instagram Driven Businesses",
    summary: "Practical ways to leverage AI for better content, engagement, and conversion.",
    category: "AI Strategy",
    date: "March 20, 2026",
    image: "/blog/ai-growth-tips.jpg",
    featured: true,
  },
  {
    slug: "content-optimization-reels",
    title: "Content Optimization: Create Instagram Reels That Convert",
    summary: "Hook-first ideas to boost engagement and drive sales.",
    category: "Content Strategy",
    date: "March 12, 2026",
    image: "/blog/content-optimization.jpg",
  },
  {
    slug: "daily-performance-reviews",
    title: "Maximize Revenue With Daily Performance Reviews",
    summary: "How consistent check-ins lead to compounding growth.",
    category: "Growth Tips",
    date: "February 26, 2026",
    image: "/blog/daily-performance-review.jpg",
  },
  {
    slug: "structured-growth-vision",
    title: "Building Structured Growth: Our Vision for Quest Business",
    summary: "How we’re bringing AI business infrastructure to small brands.",
    category: "Our Vision",
    date: "January 18, 2026",
    image: "/blog/our-vision.jpg",
  },
  {
    slug: "weekly-review-framework",
    title: "A Weekly Review Framework to Boost Growth",
    summary: "Use a Stop/Start/Continue method for structured improvement.",
    category: "Case Study",
    date: "December 5, 2025",
    image: "/blog/weekly-review-framework.jpg",
  },
  {
    slug: "new-content-ideas",
    title: "Use AI To Find New Content Ideas Every Day",
    summary: "Generate creative, high-impact content ideas with structured prompts.",
    category: "AI Strategy",
    date: "November 28, 2025",
    image: "/blog/new-content-ideas.jpg",
  },
];

const CATEGORIES = [
  "All",
  "AI Strategy",
  "Content Strategy",
  "Growth Tips",
  "Our Vision",
  "Case Study",
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
