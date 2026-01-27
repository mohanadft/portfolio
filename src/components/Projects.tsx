"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    id: "contextly",
    name: "Contextly",
    description: "Context-aware word explanations for readers in Chrome",
    longDescription: "A Chrome extension that helps non-native English readers understand unfamiliar words by providing AI-powered, context-aware explanations instead of traditional dictionary definitions.",
    tech: ["JavaScript", "Chrome Extension", "Node.js", "Express", "HuggingFace Zephyr-7B"],
    features: [
      "Context-aware explanations powered by AI",
      "Works across PDFs, articles, and documentation",
      "Smart word suggestions for quick lookup",
      "Simple language explanations"
    ],
    url: "https://github.com/mohanadft/contextly",
    date: "2026-01"
  }
];

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
          <div className="pl-4 space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.2 }}
                className="border-l-2 border-green pl-4"
              >
                {/* Commit hash and title */}
                <div className="mb-2">
                  <span className="text-yellow">*</span>{" "}
                  <span className="text-cyan font-semibold">{project.name}</span>
                  <span className="text-text-muted ml-2 text-xs">({project.date})</span>
                </div>

                {/* Description */}
                <div className="mb-3 text-text-secondary">
                  {project.longDescription}
                </div>

                {/* Tech stack */}
                <div className="mb-3">
                  <span className="text-text-muted text-xs">Tech:</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {project.tech.map((tech: string) => (
                      <span
                        key={tech}
                        className="text-xs bg-tertiary/50 text-blue px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-3">
                  <span className="text-text-muted text-xs">Features:</span>
                  <ul className="mt-1 space-y-1">
                    {project.features.map((feature: string, i: number) => (
                      <li key={i} className="text-sm text-text-secondary">
                        <span className="text-green">→</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Link */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-cyan hover:text-cyan/80 hover:underline inline-flex items-center gap-1"
                >
                  View on GitHub →
                </a>
              </motion.div>
            ))}
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
