"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "./SectionHeading";
import { EASE } from "@/lib/motion";

const testimonials = [
  {
    name: "Mohammad Barhoush",
    role: "Tech Leader",
    initials: "MB",
    linkedin: "https://www.linkedin.com/in/mbarhoush",
    quote:
      "Mohanad's code showcases a deep understanding of algorithms and data structures, particularly in backend development: efficient, well-organized solutions with outstanding problem-solving skill throughout.",
  },
  {
    name: "Wasim Juned",
    role: undefined,
    initials: "WJ",
    linkedin: "https://www.linkedin.com/in/wasimjuned/",
    quote: "An outstanding engineer, a real pleasure working with him.",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="testimonials"
      className="py-14 md:py-section-tight px-6 relative bg-primary overflow-hidden"
      ref={ref}
    >
      {/* width: narrow */}
      <div className="max-w-2xl mx-auto font-mono relative">
        <SectionHeading number="05" title="Testimonials" />

        <span
          className="absolute -top-2 left-0 font-bold text-green select-none pointer-events-none leading-none"
          style={{
            fontSize: "clamp(6rem, 16vw, 10rem)",
            opacity: "var(--watermark-opacity)",
          }}
          aria-hidden="true"
        >
          &ldquo;
        </span>

        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-10 relative">
          {testimonials.map((testimonial, i) => (
            <motion.blockquote
              key={testimonial.name}
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1, ease: EASE }}
              className="relative"
            >
              <p className="text-text-primary text-sm md:text-base leading-relaxed mb-4">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <footer className="flex items-center gap-3">
                <span className="w-10 h-10 shrink-0 flex items-center justify-center rounded-md bg-tertiary border border-border text-green text-sm font-bold">
                  {testimonial.initials}
                </span>
                <span className="text-sm">
                  <a
                    href={testimonial.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-text-primary hover:text-green transition-colors font-semibold link-hover"
                  >
                    {testimonial.name}
                  </a>
                  {testimonial.role && (
                    <span className="block text-text-muted text-xs">
                      {testimonial.role}
                    </span>
                  )}
                </span>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
