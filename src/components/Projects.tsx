"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    id: "mini-osb",
    name: "mini-osb",
    description:
      "A mini Open Service Broker that provisions real Kubernetes pods (Redis, Postgres) via declarative config or GitHub webhooks. Includes a dashboard UI and supports any service catalog.",
    tech: ["JavaScript", "HTML", "Kubernetes", "Open Service Broker API"],
    features: [
      "Provisions real Kubernetes pods (Redis, Postgres) on demand",
      "Supports declarative config and GitHub webhook triggers",
      "Dashboard UI for managing provisioned services",
      "Extensible service catalog support",
    ],
    url: "https://github.com/mohanadft/mini-osb",
    inspiredBy: "https://www.youtube.com/watch?v=55pTFVoclvE",
    date: "2026-05",
  },
  {
    id: "contextly",
    name: "Contextly",
    description:
      "A Chrome extension that helps non-native English readers understand unfamiliar words by providing AI-powered, context-aware explanations instead of traditional dictionary definitions.",
    tech: [
      "JavaScript",
      "Chrome Extension",
      "Node.js",
      "Express",
      "HuggingFace Zephyr-7B",
    ],
    features: [
      "Context-aware explanations powered by AI",
      "Works across PDFs, articles, and documentation",
      "Smart word suggestions for quick lookup",
      "Simple language explanations",
    ],
    url: "https://github.com/mohanadft/contextly",
    date: "2026-01",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="projects"
      className="py-24 md:py-32 px-6 relative bg-primary"
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
          <span className="text-green">git log --oneline --graph</span>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.15 + index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group bg-secondary/60 border border-border-subtle rounded-lg p-5 md:p-6 hover:border-border transition-all duration-300 hover:shadow-[0_0_24px_-8px_oklch(0.75_0.19_152_/_0.08)]"
            >
              <div className="flex items-baseline gap-3 mb-3 flex-wrap">
                <span className="text-yellow text-xs">*</span>
                <h3
                  className="font-bold text-text-primary tracking-[-0.02em]"
                  style={{ fontSize: "clamp(1.05rem, 1.5vw, 1.2rem)" }}
                >
                  {project.name}
                </h3>
                <span className="text-text-muted text-xs">
                  {project.date}
                </span>
              </div>

              <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-[60ch]">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-cyan bg-cyan/5 px-2 py-0.5 rounded border border-cyan/10 transition-all duration-200 hover:bg-cyan/10 hover:border-cyan/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="space-y-1.5 mb-4 text-sm text-text-secondary">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex gap-2.5">
                    <span className="text-green shrink-0">{">"}</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4 items-center text-sm">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue hover:text-cyan transition-colors inline-flex items-center gap-1.5 link-hover"
                >
                  GitHub
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 17L17 7M17 7H7M17 7v10"
                    />
                  </svg>
                </a>
                {"inspiredBy" in project &&
                  typeof project.inspiredBy === "string" && (
                    <span className="text-xs text-text-muted">
                      inspired by{" "}
                      <a
                        href={project.inspiredBy}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-secondary hover:text-cyan transition-colors link-hover"
                      >
                        this talk
                      </a>
                    </span>
                  )}
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-10 text-text-muted text-xs"
        >
          <span className="text-green">{">"}</span> More on{" "}
          <a
            href="https://github.com/mohanadft"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue hover:text-cyan transition-colors link-hover"
          >
            github.com/mohanadft
          </a>
        </motion.div>
      </div>
    </section>
  );
}
