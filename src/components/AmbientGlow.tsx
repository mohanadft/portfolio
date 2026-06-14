"use client";

import { useEffect, useRef } from "react";

export default function AmbientGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) return;

    let raf: number;
    const onMove = (e: MouseEvent) => {
      raf = requestAnimationFrame(() => {
        el.style.setProperty("--glow-x", `${e.clientX}px`);
        el.style.setProperty("--glow-y", `${e.clientY}px`);
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="fixed inset-0 pointer-events-none z-0 hidden md:block"
      style={{
        background:
          "radial-gradient(600px circle at var(--glow-x, 50%) var(--glow-y, 50%), var(--ambient-glow-color), transparent 60%)",
      }}
      aria-hidden="true"
    />
  );
}
