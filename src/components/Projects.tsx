"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const projects: any[] = [];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
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
            <span className="text-green">git log --oneline --graph</span>
          </div>

          {/* Projects list */}
          <div className="pl-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="text-text-muted text-sm"
            >
              <div className="mb-2">
                <span className="text-text-muted">#</span> No commits yet
              </div>
              <div className="pl-4 text-text-muted text-xs">
                Projects coming soon... Stay tuned!
              </div>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="mt-8 pt-6 border-t border-tertiary text-text-muted text-xs pl-4"
          >
            <span className="text-green">→</span> Check out my{" "}
            <a href="https://github.com/mohanadft" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">
              GitHub
            </a>
            {" "}for code samples
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
