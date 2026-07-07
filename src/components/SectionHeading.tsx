"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { EASE } from "@/lib/motion";

interface SectionHeadingProps {
  number: string;
  title: string;
  accent?: "green" | "cyan" | "yellow";
}

const UNDERLINE_CLASSES: Record<NonNullable<SectionHeadingProps["accent"]>, string> = {
  green: "bg-green/60",
  cyan: "bg-cyan/60",
  yellow: "bg-yellow/60",
};

export default function SectionHeading({
  number,
  title,
  accent = "green",
}: SectionHeadingProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="relative mb-8">
      <span
        className="absolute -top-8 -left-2 font-bold text-text-primary select-none pointer-events-none watermark-pulse"
        style={{ fontSize: "clamp(5rem, 10vw, 8rem)" }}
        aria-hidden="true"
      >
        {number}
      </span>
      <h2
        className="relative font-bold text-text-primary tracking-[-0.03em]"
        style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)" }}
      >
        {title}
      </h2>
      <motion.div
        className={`h-px ${UNDERLINE_CLASSES[accent]} mt-3 origin-left`}
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
      />
    </div>
  );
}
