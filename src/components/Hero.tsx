"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Mohanad Fteha";
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 70);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-primary px-6">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, var(--accent-green) 0px, transparent 1px, transparent 4px)",
        }}
      />

      <motion.div
        className="relative w-full max-w-3xl"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="bg-tertiary/80 border border-border rounded-t-lg px-4 py-2.5 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green/80" />
          </div>
          <span className="text-text-muted text-xs ml-2 font-mono tracking-wide">
            bash
          </span>
        </div>

        <div className="bg-secondary border-x border-b border-border rounded-b-lg p-6 md:p-10 font-mono text-sm md:text-base">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="text-green"
            >
              <span className="text-text-muted">$</span> whoami
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.3 }}
              className="text-text-primary pl-4 font-bold tracking-[-0.04em]"
              style={{ fontSize: "clamp(1.75rem, 5vw, 3rem)" }}
            >
              {displayedText}
              <span
                className={`${showCursor ? "opacity-100" : "opacity-0"} transition-opacity text-green`}
              >
                _
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.3 }}
              className="text-green pt-3"
            >
              <span className="text-text-muted">$</span> cat role.txt
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.35, duration: 0.3 }}
              className="pl-4 space-y-1.5"
            >
              <div className="text-text-primary">
                <span className="text-yellow font-semibold text-base md:text-lg">
                  Software Engineer
                </span>{" "}
                <span className="text-text-muted">/</span>{" "}
                <span className="text-text-secondary">
                  Backend &amp; Infrastructure
                </span>
              </div>
              <div className="text-text-secondary text-sm">
                <span className="text-cyan">Node.js</span>
                <span className="text-text-muted"> / </span>
                <span className="text-cyan">TypeScript</span>
                <span className="text-text-muted"> / </span>
                <span className="text-cyan">Rust</span>
                <span className="text-text-muted"> / </span>
                <span className="text-cyan">AWS</span>
              </div>
              <div className="text-text-muted text-sm">
                Gaza, Palestine
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.3 }}
              className="text-green pt-3"
            >
              <span className="text-text-muted">$</span> ls ~/
            </motion.div>

            <motion.nav
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.7, duration: 0.3 }}
              className="pl-4 flex gap-x-5 gap-y-2 flex-wrap"
              aria-label="Page sections"
            >
              {[
                { href: "#about", label: "about" },
                { href: "#experience", label: "experience" },
                { href: "#projects", label: "projects" },
                { href: "#opensource", label: "open-source" },
                { href: "#writing", label: "writing" },
                { href: "#testimonials", label: "testimonials" },
                { href: "#contact", label: "contact" },
              ].map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="text-blue hover:text-cyan transition-colors link-hover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.7 + i * 0.04, duration: 0.25 }}
                >
                  {link.label}/
                </motion.a>
              ))}
            </motion.nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.1, duration: 0.3 }}
              className="text-text-muted pt-3 flex items-center"
            >
              <span>$</span>
              <motion.span
                className="ml-1.5 text-green"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              >
                _
              </motion.span>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, oklch(0.75 0.19 152 / 0.06), transparent 70%)",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 50%, oklch(0.13 0.006 250 / 0.6) 100%)",
        }}
      />
    </section>
  );
}
