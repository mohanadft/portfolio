"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    name: "Mohammad Barhoush",
    role: "Tech Leader",
    linkedin: "https://www.linkedin.com/in/mbarhoush",
    quote: "Mohanad's performance has been nothing short of exceptional. His code showcases deep understanding of algorithms and data structures, particularly in backend development. Outstanding problem-solving skills with efficient, well-organized solutions. I wholeheartedly recommend him for any Backend role that demands brilliance and expertise.",
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
    quote: "Outstanding teammate and developer. Highly skilled in solving complex problems with creative solutions. Great balance of technical expertise and communication. I strongly recommend Mohanad for any team looking for a reliable, talented, and dedicated professional.",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="testimonials"
      className="min-h-screen py-20 px-6 relative bg-primary"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="border border-border bg-secondary/50 rounded-lg p-6 md:p-8 font-mono text-sm md:text-base"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Command */}
          <div className="mb-6">
            <span className="text-text-muted">$</span>{" "}
            <span className="text-green">cat testimonials.txt</span>
          </div>

          {/* Testimonials */}
          <div className="pl-4 space-y-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
              >
                <div className="border-l-2 border-border group-hover:border-cyan pl-4 transition-colors">
                  {/* Header */}
                  <div className="mb-3">
                    <div className="flex items-baseline gap-2 flex-wrap mb-1">
                      <span className="text-cyan font-semibold">
                        {testimonial.name}
                      </span>
                      {testimonial.role && (
                        <>
                          <span className="text-text-muted">—</span>
                          <span className="text-yellow text-sm">{testimonial.role}</span>
                        </>
                      )}
                    </div>
                    <a
                      href={testimonial.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue hover:opacity-80 hover:underline text-xs inline-flex items-center gap-1"
                    >
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      View profile
                    </a>
                  </div>

                  {/* Quote */}
                  <div className="mb-4 text-text-primary leading-relaxed text-sm border-l-2 border-tertiary pl-3 italic">
                    "{testimonial.quote}"
                  </div>

                </div>

                {/* Separator */}
                {index < testimonials.length - 1 && (
                  <div className="mt-6 border-t border-tertiary" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="mt-8 pt-6 border-t border-tertiary text-text-muted text-xs pl-4"
          >
            <span className="text-green">EOF</span> - End of testimonials
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
