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
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const totalPRs = contributions.reduce((sum, c) => sum + c.prs.length, 0);

  return (
    <section
      id="opensource"
      className="py-20 md:py-28 px-6 relative bg-secondary/30"
      ref={ref}
    >
      <div className="max-w-3xl mx-auto font-mono">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-4 text-sm text-text-muted"
        >
          <span className="text-text-muted">$</span>{" "}
          <span className="text-green">
            git log --author=&quot;mohanadft&quot; --all --oneline
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.1 }}
          className="mb-8 text-xs text-text-muted"
        >
          <span className="text-cyan">{totalPRs} merged PRs</span> across{" "}
          <span className="text-yellow">{contributions.length} projects</span>
        </motion.div>

        <div className="space-y-5">
          {contributions.map((contrib, index) => (
            <motion.div
              key={contrib.project}
              initial={{ opacity: 0, x: -8 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.4,
                delay: 0.15 + index * 0.06,
              }}
              className="group flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4"
            >
              <div className="shrink-0 sm:w-32">
                <span className="text-green font-semibold text-sm">
                  {contrib.project}
                </span>
              </div>

              <div className="text-text-secondary text-sm hidden sm:block flex-1 min-w-0 truncate">
                {contrib.description}
              </div>

              <div className="flex flex-wrap gap-1.5 mt-1 sm:mt-0 sm:ml-auto shrink-0">
                {contrib.prs.map((pr) => (
                  <a
                    key={pr}
                    href={`https://github.com/${contrib.repo}/pull/${pr}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-purple bg-purple/8 px-1.5 py-0.5 rounded font-mono hover:bg-purple/15 transition-colors"
                  >
                    #{pr}
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-10 pt-6 border-t border-border-subtle text-text-muted text-xs space-y-1"
        >
          <div>All contributions merged and deployed</div>
          <div>
            Full history:{" "}
            <a
              href="https://gist.github.com/mohanadft/04fedcf4f229dacffdde52cc475a9f5f"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue hover:text-cyan transition-colors"
            >
              gist.github.com/mohanadft
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
