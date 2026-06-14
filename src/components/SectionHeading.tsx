"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SectionHeadingProps {
  number: string;
  title: string;
}

export default function SectionHeading({ number, title }: SectionHeadingProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="relative mb-8">
      <span
        className="absolute -top-8 -left-2 font-bold text-text-primary select-none pointer-events-none"
        style={{ fontSize: "clamp(5rem, 10vw, 8rem)", opacity: "var(--watermark-opacity)" }}
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
        className="h-px bg-green/60 mt-3 origin-left"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  );
}
