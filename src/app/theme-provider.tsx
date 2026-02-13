"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  const saved = window.localStorage.getItem("qb_theme");
  if (saved === "light" || saved === "dark") return saved;
  const prefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
  return prefersLight ? "light" : "dark";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const t = getInitialTheme();
    setTheme(t);
    document.documentElement.dataset.theme = t;
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("qb_theme", theme);
  }, [theme]);

  return (
    <>
      <div style={{ position: "fixed", top: 14, right: 14, zIndex: 50 }}>
        <button
          onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
          style={{
            height: 36,
            padding: "0 12px",
            borderRadius: 999,
            border: "1px solid var(--border)",
            background: "var(--panel)",
            color: "var(--fg)",
            fontWeight: 700,
            cursor: "pointer",
          }}
          aria-label="Toggle theme"
        >
          {theme === "dark" ? "Light" : "Dark"}
        </button>
      </div>
      {children}
    </>
  );
}
