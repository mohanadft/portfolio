"use client";

import { useState } from "react";

interface Project {
  index: string;
  name: string;
  date: string;
  problem: string;
  approach: string;
  outcome: string;
  tech: string[];
  url: string;
  inspiredBy: string | null;
}

const PROJECTS: readonly Project[] = [
  {
    index: "01",
    name: "mini-osb",
    date: "May 2026",
    problem:
      "Standing up a Redis or Postgres for a microservice meant hand-running kubectl every time — slow, easy to fumble, and awkward to drive from CI.",
    approach:
      "A small Open Service Broker that provisions real Kubernetes pods from a declarative config file or a GitHub webhook, with a dashboard so you can see what's actually running.",
    outcome:
      "Provisioning is one command. Adding a new service type is a config entry, not a pull request against the broker.",
    tech: ["JavaScript", "HTML", "Kubernetes", "Open Service Broker API"],
    url: "https://github.com/mohanadft/mini-osb",
    inspiredBy: "https://www.youtube.com/watch?v=55pTFVoclvE",
  },
  {
    index: "02",
    name: "Contextly",
    date: "Jan 2026",
    problem:
      "Reading in a second language, a dictionary rarely helps mid-article. “bank” means one thing in a finance piece and another in a geography paper.",
    approach:
      "A Chrome extension that sends the surrounding paragraph to HuggingFace Zephyr-7B and returns an explanation that fits the sentence you're actually reading.",
    outcome:
      "Works across PDFs, docs and articles with no copy-pasting. Highlight the word, get the meaning in context.",
    tech: [
      "JavaScript",
      "Chrome Extension",
      "Node.js",
      "Express",
      "HuggingFace Zephyr-7B",
    ],
    url: "https://github.com/mohanadft/contextly",
    inspiredBy: null,
  },
];

const COLUMN_LABEL = "eyebrow mb-3";

export default function Projects() {
  const [openProject, setOpenProject] = useState(0);

  return (
    <section id="projects" className="border-t border-rule">
      <div className="eyebrow px-[6vw] pt-28 pb-6">
        <span className="text-acid">03</span> / Projects — built to scratch an
        itch
      </div>

      {PROJECTS.map((project, i) => {
        const isOpen = openProject === i;
        const panelId = `project-panel-${project.index}`;

        return (
          <div
            key={project.name}
            className={`group border-t border-l-[3px] border-rule transition-colors duration-[250ms] ${
              isOpen
                ? "border-l-acid bg-ink-deep"
                : "border-l-transparent hover:bg-ink-deep"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenProject(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="flex w-full cursor-pointer flex-wrap items-baseline gap-x-6 gap-y-2 px-[calc(6vw-3px)] py-8 text-left"
            >
              <span
                className={`font-mono text-xs ${isOpen ? "text-acid" : "text-muted"}`}
              >
                {project.index}
              </span>
              <h3
                className={`text-[clamp(2rem,4.5vw,3.25rem)] leading-none font-medium tracking-[-0.035em] transition-colors duration-[250ms] ${
                  isOpen ? "text-bone" : "text-bone-dim"
                }`}
              >
                {project.name}
              </h3>
              <span className="font-mono text-xs text-muted">{project.date}</span>
              <span className="font-mono text-xs whitespace-pre-wrap text-muted sm:ml-auto">
                {project.tech.join("  /  ")}
              </span>
            </button>

            <div
              id={panelId}
              className={`grid transition-[grid-template-rows,opacity] duration-[400ms] ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-[calc(6vw-3px)] pb-8">
                  <div className="grid grid-cols-1 gap-10 border-t border-rule pt-7 md:grid-cols-3">
                    <div>
                      <div className={COLUMN_LABEL}>The itch</div>
                      <p className="leading-[1.6] text-pretty text-bone-dim">
                        {project.problem}
                      </p>
                    </div>
                    <div>
                      <div className={COLUMN_LABEL}>What I built</div>
                      <p className="leading-[1.6] text-pretty text-bone-dim">
                        {project.approach}
                      </p>
                    </div>
                    <div>
                      <div className={COLUMN_LABEL}>Where it landed</div>
                      <p className="leading-[1.6] text-pretty text-bone-dim">
                        {project.outcome}
                      </p>
                    </div>
                  </div>

                  <div className="mt-7 flex flex-wrap items-baseline gap-6">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-b border-acid pb-[3px] font-mono text-xs tracking-[0.08em] uppercase transition-colors duration-200"
                    >
                      Source ↗
                    </a>
                    {project.inspiredBy && (
                      <a
                        href={project.inspiredBy}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs text-muted transition-colors duration-200"
                      >
                        after a Kelsey Hightower talk ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <div className="border-t border-rule" />
    </section>
  );
}
