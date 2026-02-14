import React from "react";

export function QBLogo({ size = 28 }: { size?: number }) {
  return (
    <div
      aria-label="Quest Business"
      style={{
        width: size,
        height: size,
        borderRadius: 10,
        position: "relative",
        overflow: "hidden",
        border: "1px solid var(--border)",
        background:
          "radial-gradient(120% 120% at 20% 10%, rgba(168,85,247,0.55), transparent 55%), radial-gradient(120% 120% at 80% 70%, rgba(59,130,246,0.50), transparent 55%), rgba(255,255,255,0.03)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.45)",
      }}
    >
      {/* subtle noise lines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(transparent, rgba(255,255,255,0.07), transparent)",
          opacity: 0.25,
          transform: "rotate(25deg) scale(1.6)",
        }}
      />

      <svg
        width={size}
        height={size}
        viewBox="0 0 28 28"
        style={{ position: "absolute", inset: 0 }}
      >
        <defs>
          <linearGradient id="qb" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#a855f7" />
            <stop offset="1" stopColor="#22c55e" />
          </linearGradient>
        </defs>
        <text
          x="50%"
          y="58%"
          textAnchor="middle"
          fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto"
          fontWeight="900"
          fontSize="14"
          fill="url(#qb)"
          style={{ letterSpacing: "-0.8px" }}
        >
          QB
        </text>
      </svg>
    </div>
  );
}
