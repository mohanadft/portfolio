"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useCallback } from "react";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    id: "mini-osb",
    name: "mini-osb",
    problem:
      "Developers provisioning databases and caches for microservices face manual kubectl workflows: slow, error-prone, and hard to automate from CI/CD pipelines.",
    approach:
      "Built a lightweight Open Service Broker that provisions real Kubernetes pods (Redis, Postgres) through a declarative config file or GitHub webhook triggers, with a dashboard UI for visibility.",
    outcome:
      "One-command service provisioning with an extensible catalog. Any new service type is a config entry, not a code change.",
    tech: ["JavaScript", "HTML", "Kubernetes", "Open Service Broker API"],
    url: "https://github.com/mohanadft/mini-osb",
    inspiredBy: "https://www.youtube.com/watch?v=55pTFVoclvE",
    date: "2026-05",
  },
  {
    id: "contextly",
    name: "Contextly",
    problem:
      "Non-native English readers hit unfamiliar words and get dictionary definitions that ignore context. The meaning of 'bank' changes between a finance article and a geography paper.",
    approach:
      "Created a Chrome extension backed by HuggingFace Zephyr-7B that reads the surrounding paragraph and generates context-aware explanations in plain language.",
    outcome:
      "Works across PDFs, articles, and documentation with no copy-pasting. Highlight a word and get an explanation that fits the text you're reading.",
    tech: [
      "JavaScript",
      "Chrome Extension",
      "Node.js",
      "Express",
      "HuggingFace Zephyr-7B",
    ],
    url: "https://github.com/mohanadft/contextly",
    date: "2026-01",
  },
];

function useCardTilt() {
  const onMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(800px) rotateY(${x * 4}deg) rotateX(${-y * 4}deg)`;
  }, []);

  const onMouseLeave = useCallback((e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.transform = "";
  }, []);

  return { onMouseMove, onMouseLeave };
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const tilt = useCardTilt();

  return (
    <section
      id="projects"
      className="py-28 md:py-36 px-6 relative bg-primary"
      ref={ref}
    >
      <div className="max-w-4xl mx-auto font-mono">
        <SectionHeading number="03" title="Projects" />

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
              onMouseMove={tilt.onMouseMove}
              onMouseLeave={tilt.onMouseLeave}
              className="group bg-secondary/60 border border-border-subtle rounded-lg p-5 md:p-6 hover:border-border transition-[border-color,box-shadow] duration-300 hover:shadow-[0_0_24px_-8px_var(--accent-green)] will-change-transform"
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
                <span className="ml-auto text-text-muted/30 text-[0.625rem] hidden sm:inline font-mono">
                  {project.id.slice(0, 7)}
                </span>
              </div>

              <div className="space-y-3 mb-4 text-sm text-text-secondary">
                <div className="flex gap-2.5">
                  <span className="text-red shrink-0 mt-0.5 font-semibold text-xs">PROBLEM</span>
                  <p className="leading-relaxed max-w-[58ch]">{project.problem}</p>
                </div>
                <div className="flex gap-2.5">
                  <span className="text-yellow shrink-0 mt-0.5 font-semibold text-xs">APPROACH</span>
                  <p className="leading-relaxed max-w-[58ch]">{project.approach}</p>
                </div>
                <div className="flex gap-2.5">
                  <span className="text-green shrink-0 mt-0.5 font-semibold text-xs">OUTCOME</span>
                  <p className="leading-relaxed max-w-[58ch]">{project.outcome}</p>
                </div>
              </div>

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
                    <a
                      href={project.inspiredBy}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-text-muted hover:text-cyan transition-colors link-hover"
                    >
                      inspired by a Kelsey Hightower talk
                    </a>
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
