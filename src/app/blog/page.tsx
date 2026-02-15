import Link from "next/link";

export default function BlogPage() {
  return (
    <div style={{ maxWidth: 980, margin: "0 auto", padding: 20 }}>
      <Link href="/" style={{ opacity: 0.85 }}>
        ← Home
      </Link>
      <h1 style={{ marginTop: 12 }}>Blog</h1>
      <p style={{ marginTop: 8, opacity: 0.85, lineHeight: 1.7, maxWidth: 720 }}>
        Coming soon.
      </p>
    </div>
  );
}
