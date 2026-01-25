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
      {/* Scanline effect */}
      <div
        className="absolute inset-0 pointer-events-none bg-[length:100%_4px] opacity-20"
        style={{
          backgroundImage: 'linear-gradient(to bottom, transparent 50%, color-mix(in srgb, var(--accent-green) 2%, transparent) 50%)'
        }}
      />

      {/* Terminal window */}
      <motion.div
        className="relative w-full max-w-4xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Terminal header */}
        <div className="bg-tertiary border-t border-x border-border rounded-t-lg px-4 py-2 flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red" />
            <div className="w-3 h-3 rounded-full bg-yellow" />
            <div className="w-3 h-3 rounded-full bg-green" />
          </div>
          <span className="text-text-secondary text-sm ml-2 font-mono">bash</span>
        </div>

        {/* Terminal body */}
        <div className="bg-primary border border-border rounded-b-lg p-6 md:p-8 font-mono text-sm md:text-base shadow-2xl">
          <div className="space-y-3">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-green"
            >
              <span className="text-text-muted">$</span> whoami
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-text-primary pl-4"
            >
              {displayedText}
              <span className={`${showCursor ? "opacity-100" : "opacity-0"} transition-opacity`}>▋</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="text-green pt-2"
            >
              <span className="text-text-muted">$</span> cat skills.txt
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2 }}
              className="text-text-primary pl-4 space-y-1"
            >
              <div>
                <span className="text-yellow">Backend Engineer</span> · Systems Programmer
              </div>
              <div>
                <span className="text-cyan">Node.js</span> · <span className="text-cyan">Rust</span> · <span className="text-cyan">TypeScript</span>
              </div>
              <div>Gaza, Palestine 🇵🇸</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.8 }}
              className="text-green pt-2"
            >
              <span className="text-text-muted">$</span> ls ~/projects
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3 }}
              className="pl-4 flex gap-4 flex-wrap"
            >
              <a href="#about" className="text-blue hover:opacity-80 hover:underline">
                ./about-me
              </a>
              <a href="#projects" className="text-blue hover:opacity-80 hover:underline">
                ./my-projects
              </a>
              <a href="#opensource" className="text-blue hover:opacity-80 hover:underline">
                ./open-source
              </a>
              <a href="#writing" className="text-blue hover:opacity-80 hover:underline">
                ./writing
              </a>
              <a href="#testimonials" className="text-blue hover:opacity-80 hover:underline">
                ./testimonials
              </a>
              <a href="#contact" className="text-blue hover:opacity-80 hover:underline">
                ./contact
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.5 }}
              className="text-green pt-2 flex items-center"
            >
              <span className="text-text-muted">$</span>
              <motion.span
                className="ml-2"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                ▋
              </motion.span>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Ambient terminal glow */}
      <div
        className="absolute inset-0 blur-3xl pointer-events-none"
        style={{ backgroundColor: 'color-mix(in srgb, var(--accent-green) 5%, transparent)' }}
      />
    </section>
  );
}
