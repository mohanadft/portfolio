"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const contributions = [
  {
    project: "MonkeyType",
    description: "Typing practice platform",
    prs: ["4614", "4667"],
    repo: "monkeytypegame/monkeytype",
    tech: ["TypeScript", "Frontend"],
  },
  {
    project: "ExpressoTS",
    description: "TypeScript framework for backend development",
    prs: ["101", "105", "118"],
    repo: "expressots/expressots",
    tech: ["TypeScript", "Backend", "Framework"],
  },
  {
    project: "Node.js",
    description: "JavaScript runtime and ecosystem",
    prs: ["5904", "5905"],
    repo: "nodejs/nodejs.org",
    tech: ["JavaScript", "Runtime", "Core"],
  },
  {
    project: "Qwikx",
    description: "Frontend library",
    prs: ["14"],
    repo: "qwikifiers/qwik-nx",
    tech: ["TypeScript", "Frontend"],
  },
  {
    project: "ParsecCloud",
    description: "Cloud collaboration platform",
    prs: ["5373"],
    repo: "Scille/parsec-cloud",
    tech: ["Cloud", "Collaboration"],
  },
  {
    project: "30-Seconds-of-Code",
    description: "Code snippet collection resource",
    prs: ["2020"],
    repo: "Chalarangelo/30-seconds-of-code",
    tech: ["Documentation", "Education"],
  },
];

export default function OpenSource() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const totalPRs = contributions.reduce((sum, c) => sum + c.prs.length, 0);

  return (
    <section
      id="opensource"
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
            <span className="text-green">git log --author="mohanadft" --all --oneline</span>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="mb-6 pl-4 text-text-secondary text-xs"
          >
            <span className="text-cyan">{totalPRs} merged PRs</span> across{" "}
            <span className="text-yellow">{contributions.length} projects</span>
          </motion.div>

          {/* Contributions list */}
          <div className="pl-4 space-y-6">
            {contributions.map((contrib, index) => (
              <motion.div
                key={contrib.project}
                className="group"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <div className="border-l-2 border-border group-hover:border-green pl-4 transition-colors">
                  {/* Project name */}
                  <div className="flex items-baseline gap-3 mb-2 flex-wrap">
                    <span className="text-green font-semibold">
                      {contrib.project}
                    </span>
                    <span className="text-text-muted text-xs">
                      {contrib.prs.length} PR{contrib.prs.length > 1 ? "s" : ""}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-text-secondary mb-3 text-sm">
                    {contrib.description}
                  </p>

                  {/* PR numbers */}
                  <div className="flex flex-wrap gap-2 mb-2">
                    {contrib.prs.map((pr) => (
                      <a
                        key={pr}
                        href={`https://github.com/${contrib.repo}/pull/${pr}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-purple bg-purple/10 px-2 py-1 rounded border border-purple/30 font-mono hover:bg-purple/20 hover:border-purple/50 transition-colors"
                      >
                        #{pr} ✓
                      </a>
                    ))}
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {contrib.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs text-text-muted bg-tertiary/50 px-2 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.2 }}
            className="mt-8 pt-6 border-t border-tertiary text-text-muted text-xs pl-4"
          >
            <div className="space-y-2">
              <div>
                <span className="text-green">→</span> All contributions merged and deployed
              </div>
              <div>
                <span className="text-green">→</span> View full history:{" "}
                <a
                  href="https://gist.github.com/mohanadft/04fedcf4f229dacffdde52cc475a9f5f"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue hover:underline"
                >
                  gist.github.com/mohanadft
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
