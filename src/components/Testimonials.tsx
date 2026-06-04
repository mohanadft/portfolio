"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    name: "Mohammad Barhoush",
    role: "Tech Leader",
    linkedin: "https://www.linkedin.com/in/mbarhoush",
    quote:
      "Mohanad's performance has been nothing short of exceptional. His code showcases deep understanding of algorithms and data structures, particularly in backend development. Outstanding problem-solving skills with efficient, well-organized solutions. I wholeheartedly recommend him for any Backend role that demands brilliance and expertise.",
  },
  {
    name: "Wasim Juned",
    role: "",
    linkedin: "https://www.linkedin.com/in/wasimjuned",
    quote: "An outstanding engineer - a real pleasure working with him.",
  },
  {
    name: "Saleh Marouf",
    role: "Full Stack Software Engineer",
    linkedin: "https://www.linkedin.com/in/saleh-marouf",
    quote:
      "Outstanding teammate and developer. Highly skilled in solving complex problems with creative solutions. Great balance of technical expertise and communication. I strongly recommend Mohanad for any team looking for a reliable, talented, and dedicated professional.",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 px-6 relative bg-secondary/30"
      ref={ref}
    >
      <div className="max-w-3xl mx-auto font-mono">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10 text-sm text-text-muted"
        >
          <span className="text-text-muted">$</span>{" "}
          <span className="text-green">cat testimonials.log</span>
        </motion.div>

        <div className="space-y-10">
          {testimonials.map((testimonial, index) => (
            <motion.blockquote
              key={testimonial.name}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.1 + index * 0.12,
                ease: [0.25, 0.1, 0.25, 1],
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
                  className="text-cyan hover:text-green transition-colors font-semibold"
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

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 pt-6 border-t border-border-subtle text-text-muted text-xs"
        >
          EOF
        </motion.div>
      </div>
    </section>
  );
}
