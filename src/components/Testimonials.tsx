"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "./SectionHeading";

const testimonials = [
  {
    name: "Mohammad Barhoush",
    role: "Tech Leader",
    linkedin: "https://www.linkedin.com/in/mbarhoush",
    quote:
      "Mohanad's performance has been nothing short of exceptional. His code showcases deep understanding of algorithms and data structures, particularly in backend development. Outstanding problem-solving skills with efficient, well-organized solutions.",
  },
  {
    name: "Wasim Juned",
    role: "",
    linkedin: "https://www.linkedin.com/in/wasimjuned",
    quote: "An outstanding engineer. A real pleasure working with him.",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="testimonials"
      className="py-24 md:py-32 px-6 relative bg-primary"
      ref={ref}
    >
      <div className="max-w-2xl mx-auto font-mono">
        <SectionHeading number="05" title="Testimonials" />

        <div className="space-y-12">
          {testimonials.map((testimonial, index) => (
            <motion.blockquote
              key={testimonial.name}
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.1 + index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative"
            >
              <p className="text-text-primary text-sm md:text-base leading-relaxed mb-4 max-w-[60ch]">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <footer className="flex items-baseline gap-2 flex-wrap text-sm">
                <a
                  href={testimonial.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan hover:text-green transition-colors font-semibold link-hover"
                >
                  {testimonial.name}
                </a>
                {testimonial.role && (
                  <>
                    <span className="text-text-muted">/</span>
                    <span className="text-text-muted text-xs">
                      {testimonial.role}
                    </span>
                  </>
                )}
              </footer>
            </motion.blockquote>
          ))}
        </div>

      </div>
    </section>
  );
}
