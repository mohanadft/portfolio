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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black px-6">
      {/* Scanline effect */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,255,0,0.02)_50%)] bg-[length:100%_4px] opacity-20" />

      {/* Terminal window */}
      <motion.div
        className="relative w-full max-w-4xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Terminal header */}
        <div className="bg-gray-800 border-t border-x border-gray-700 rounded-t-lg px-4 py-2 flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-gray-400 text-sm ml-2 font-mono">bash</span>
        </div>

        {/* Terminal body */}
        <div className="bg-black border border-gray-700 rounded-b-lg p-6 md:p-8 font-mono text-sm md:text-base shadow-2xl">
          <div className="space-y-3">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-green-400"
            >
              <span className="text-gray-500">$</span> whoami
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-300 pl-4"
            >
              {displayedText}
              <span className={`${showCursor ? "opacity-100" : "opacity-0"} transition-opacity`}>▋</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="text-green-400 pt-2"
            >
              <span className="text-gray-500">$</span> cat skills.txt
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2 }}
              className="text-gray-300 pl-4 space-y-1"
            >
              <div>
                <span className="text-yellow-400">Backend Engineer</span> · Systems Programmer
              </div>
              <div>
                <span className="text-cyan-400">Node.js</span> · <span className="text-cyan-400">Rust</span> · <span className="text-cyan-400">TypeScript</span>
              </div>
              <div>Gaza, Palestine 🇵🇸</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.8 }}
              className="text-green-400 pt-2"
            >
              <span className="text-gray-500">$</span> ls ~/projects
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3 }}
              className="pl-4 flex gap-4 flex-wrap"
            >
              <a href="#about" className="text-blue-400 hover:text-blue-300 hover:underline">
                ./about-me
              </a>
              <a href="#projects" className="text-blue-400 hover:text-blue-300 hover:underline">
                ./my-projects
              </a>
              <a href="#opensource" className="text-blue-400 hover:text-blue-300 hover:underline">
                ./open-source
              </a>
              <a href="#writing" className="text-blue-400 hover:text-blue-300 hover:underline">
                ./writing
              </a>
              <a href="#testimonials" className="text-blue-400 hover:text-blue-300 hover:underline">
                ./testimonials
              </a>
              <a href="#contact" className="text-blue-400 hover:text-blue-300 hover:underline">
                ./contact
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.5 }}
              className="text-green-400 pt-2 flex items-center"
            >
              <span className="text-gray-500">$</span>
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
      <div className="absolute inset-0 bg-green-500/5 blur-3xl pointer-events-none" />
    </section>
  );
}
