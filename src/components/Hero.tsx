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
    }, 100);

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
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, var(--accent-green) 0px, transparent 1px, transparent 4px)",
        }}
      />

      <motion.div
        className="relative w-full max-w-3xl"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
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
              transition={{ delay: 0.3 }}
              className="text-green"
            >
              <span className="text-text-muted">$</span> whoami
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-text-primary pl-4 text-2xl md:text-3xl font-bold tracking-tight"
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
              transition={{ delay: 2 }}
              className="text-green pt-3"
            >
              <span className="text-text-muted">$</span> cat role.txt
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2 }}
              className="pl-4 space-y-1.5"
            >
              <div className="text-text-primary">
                <span className="text-yellow font-semibold">
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
              transition={{ delay: 2.8 }}
              className="text-green pt-3"
            >
              <span className="text-text-muted">$</span> ls ~/
            </motion.div>

            <motion.nav
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3 }}
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
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-blue hover:text-cyan transition-colors"
                >
                  {link.label}/
                </a>
              ))}
            </motion.nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.5 }}
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
            "radial-gradient(ellipse at center, color-mix(in srgb, var(--accent-green) 3%, transparent), transparent 70%)",
        }}
      />
    </section>
  );
}
