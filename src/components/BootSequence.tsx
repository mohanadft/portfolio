"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { INTRO_SESSION_KEY } from "@/lib/session";
import { EASE } from "@/lib/motion";

const COLLAPSE_MS = 180;
const FLASH_MS = 80;
const EXPAND_MS = 220;

type Stage = "idle" | "collapse" | "flash" | "expand" | "done";

export default function BootSequence() {
  const [stage, setStage] = useState<Stage>("idle");

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion || sessionStorage.getItem(INTRO_SESSION_KEY) === "1") {
      const toDone = setTimeout(() => setStage("done"), 0);
      return () => clearTimeout(toDone);
    }

    setStage("collapse");
    const toFlash = setTimeout(() => setStage("flash"), COLLAPSE_MS);
    const toExpand = setTimeout(
      () => setStage("expand"),
      COLLAPSE_MS + FLASH_MS
    );
    const toDone = setTimeout(
      () => setStage("done"),
      COLLAPSE_MS + FLASH_MS + EXPAND_MS
    );
    return () => {
      clearTimeout(toFlash);
      clearTimeout(toExpand);
      clearTimeout(toDone);
    };
  }, []);

  if (stage === "done" || stage === "idle") return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[70] pointer-events-none bg-primary"
        initial={{ scaleY: 1, opacity: 1 }}
        animate={{
          scaleY: stage === "expand" ? 1 : 0.02,
          opacity: stage === "expand" ? 0 : 1,
        }}
        exit={{ opacity: 0 }}
        transition={{
          duration: (stage === "expand" ? EXPAND_MS : COLLAPSE_MS) / 1000,
          ease: EASE,
        }}
        aria-hidden="true"
      >
        {stage === "flash" && (
          <motion.div
            className="absolute inset-0 bg-green"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{ duration: FLASH_MS / 1000, ease: "easeInOut" }}
          />
        )}
      </motion.div>
    </AnimatePresence>
  );
}
