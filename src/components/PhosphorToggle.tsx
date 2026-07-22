"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

type Phosphor = "green" | "amber";

export default function PhosphorToggle() {
  const [phosphor, setPhosphor] = useState<Phosphor>("green");
  const [mounted, setMounted] = useState(false);
  const [docked, setDocked] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("phosphor") as Phosphor | null;
    const initial = stored || "green";
    setPhosphor(initial);
    document.documentElement.setAttribute("data-phosphor", initial);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setDocked(window.scrollY > window.innerHeight * 0.6);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const togglePhosphor = () => {
    const next = phosphor === "green" ? "amber" : "green";
    setPhosphor(next);
    localStorage.setItem("phosphor", next);
    document.documentElement.setAttribute("data-phosphor", next);
  };

  if (!mounted) return null;

  return (
    <motion.button
      onClick={togglePhosphor}
      className="fixed right-14 z-50 p-2 rounded-md cursor-pointer"
      aria-label={`Switch to ${phosphor === "green" ? "amber" : "green"} phosphor mode`}
      animate={{
        top: docked ? 6 : 16,
        backgroundColor: docked ? "transparent" : "var(--bg-secondary)",
        borderColor: docked ? "transparent" : "var(--border-subtle)",
        borderWidth: 1,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      <span
        className="block w-4 h-4 rounded-full"
        style={{
          background: "var(--accent-green)",
          boxShadow: "0 0 6px color-mix(in oklch, var(--accent-green) 60%, transparent)",
        }}
        aria-hidden="true"
      />
    </motion.button>
  );
}
