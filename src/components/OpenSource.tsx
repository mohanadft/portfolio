"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "./SectionHeading";
import { EASE } from "@/lib/motion";

const contributions = [
  {
    project: "Node.js",
    description: "JavaScript runtime and ecosystem",
    prs: ["5904", "5905"],
    repo: "nodejs/nodejs.org",
    tech: ["JavaScript", "Runtime", "Core"],
    featured: true,
  },
  {
    project: "MonkeyType",
    description: "Typing practice platform",
    prs: ["4614", "4667"],
    repo: "monkeytypegame/monkeytype",
    tech: ["TypeScript", "Frontend"],
    featured: true,
  },
  {
    project: "ExpressoTS",
    description: "TypeScript framework for backend development",
    prs: ["101", "105", "118"],
    repo: "expressots/expressots",
    tech: ["TypeScript", "Backend", "Framework"],
    featured: true,
  },
  {
    project: "Qwikx",
    description: "Frontend library",
    prs: ["14"],
    repo: "qwikifiers/qwik-nx",
    tech: ["TypeScript", "Frontend"],
    featured: false,
  },
  {
    project: "ParsecCloud",
    description: "Cloud collaboration platform",
    prs: ["5373"],
    repo: "Scille/parsec-cloud",
    tech: ["Cloud", "Collaboration"],
    featured: false,
  },
  {
    project: "30-Seconds-of-Code",
    description: "Code snippet collection resource",
    prs: ["2020"],
    repo: "Chalarangelo/30-seconds-of-code",
    tech: ["Documentation", "Education"],
    featured: false,
  },
];

const featuredContributions = contributions.filter((c) => c.featured);
const otherContributions = contributions.filter((c) => !c.featured);

export default function OpenSource() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const totalPRs = contributions.reduce((sum, c) => sum + c.prs.length, 0);

  return (
    <section
      id="opensource"
      className="py-16 md:py-section-medium px-6 relative bg-secondary/30 tint-cool"
      ref={ref}
    >
      {/* width: wide */}
      <div className="max-w-4xl mx-auto font-mono">
        <SectionHeading number="04" title="Open Source" accent="cyan" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.1 }}
          className="mb-8 text-xs text-text-muted"
        >
          <span className="text-cyan">{totalPRs} merged PRs</span> across{" "}
          <span className="text-yellow">{contributions.length} projects</span>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-3 mb-6">
          {featuredContributions.map((contrib, index) => (
            <motion.div
              key={contrib.project}
              initial={{ opacity: 0, y: 8 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.4,
                delay: 0.15 + index * 0.06,
                ease: EASE,
              }}
              className="bg-secondary/60 border border-border-subtle hover:border-border rounded-lg p-4 transition-colors duration-200"
            >
              <div className="text-green font-semibold text-base mb-0.5">
                {contrib.project}
              </div>
              <div className="text-text-muted text-xs mb-2 truncate">
                {contrib.repo}
              </div>
              <p className="text-text-secondary text-sm mb-3">
                {contrib.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {contrib.prs.map((pr) => (
                  <a
                    key={pr}
                    href={`https://github.com/${contrib.repo}/pull/${pr}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-purple bg-purple/8 px-1.5 py-0.5 rounded font-mono hover:bg-purple/15 hover:text-purple transition-all duration-200"
                  >
                    #{pr}
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="space-y-2.5">
          {otherContributions.map((contrib, index) => (
            <motion.div
              key={contrib.project}
              initial={{ opacity: 0, x: -8 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.35,
                delay: 0.4 + index * 0.04,
                ease: EASE,
              }}
              className="flex items-baseline gap-4"
            >
              <span className="text-text-secondary font-medium text-sm w-32 shrink-0 truncate">
                {contrib.project}
              </span>
              <div className="flex flex-wrap gap-1.5 ml-auto shrink-0">
                {contrib.prs.map((pr) => (
                  <a
                    key={pr}
                    href={`https://github.com/${contrib.repo}/pull/${pr}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-purple bg-purple/8 px-1.5 py-0.5 rounded font-mono hover:bg-purple/15 hover:text-purple transition-all duration-200"
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
          transition={{ delay: 0.5 }}
          className="mt-10 pt-6 border-t border-border-subtle text-text-muted text-xs space-y-1"
        >
          <div>All contributions merged and deployed</div>
          <div>
            Full history:{" "}
            <a
              href="https://gist.github.com/mohanadft/04fedcf4f229dacffdde52cc475a9f5f"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue hover:text-cyan transition-colors link-hover"
            >
              gist.github.com/mohanadft
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
