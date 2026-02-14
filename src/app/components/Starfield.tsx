"use client";

import React, { useEffect, useRef } from "react";

type Star = { x: number; y: number; z: number; r: number };

export function Starfield({ density = 130 }: { density?: number }) {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const stars = useRef<Star[]>([]);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const g = ctx;

    let raf = 0;
    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));

    function resize() {
      if (!canvas) return;
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      g.setTransform(dpr, 0, 0, dpr, 0, 0);

      // init stars
      const count = Math.floor((width * height) / 9000) + density;
      stars.current = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        z: 0.2 + Math.random() * 1.0,
        r: 0.5 + Math.random() * 1.2,
      }));
    }

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();

    let t = 0;
    function draw() {
      if (!canvas) return;
      const { width, height } = canvas.getBoundingClientRect();
      t += 0.005;
      g.clearRect(0, 0, width, height);

      // subtle fade
      g.fillStyle = "rgba(0,0,0,0.15)";
      g.fillRect(0, 0, width, height);

      for (const s of stars.current) {
        // drift
        s.y += 0.15 * s.z;
        s.x += Math.sin(t + s.y * 0.01) * 0.05;
        if (s.y > height + 10) {
          s.y = -10;
          s.x = Math.random() * width;
        }

        const alpha = 0.25 + s.z * 0.35;
        g.beginPath();
        g.fillStyle = `rgba(255,255,255,${alpha})`;
        g.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        g.fill();
      }

      raf = requestAnimationFrame(draw);
    }

    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [density]);

  return (
    <canvas
      ref={ref}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        opacity: 0.9,
      }}
      aria-hidden
    />
  );
}
