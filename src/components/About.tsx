"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Rust", "SQL"],
  },
  {
    category: "Frameworks",
    items: ["Node.js", "Express.js", "NestJS", "Next.js", "Astro.js", "React"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
  },
  {
    category: "Infrastructure",
    items: ["AWS Lambda", "EC2", "Cloudflare", "Docker", "Kubernetes", "GitHub Actions"],
  },
  {
    category: "Architecture",
    items: ["REST", "GraphQL", "Microservices", "Serverless", "RabbitMQ", "BullMQ"],
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      className="py-28 md:py-36 px-6 relative bg-primary"
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
          <span className="text-green">cat about.md</span>
        </motion.div>

        <div className="space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-text-primary mb-4 tracking-tight">
              About
            </h2>
            <div className="flex gap-5 items-start">
              <p className="text-text-secondary leading-relaxed text-sm md:text-base max-w-[65ch]">
                Backend-focused software engineer with 3 years of experience
                building APIs and infrastructure in Node.js, TypeScript, and
                Rust. Most recently architected serverless microservices on AWS
                Lambda at Yaffa Solutions and maintained open-source tooling at
                Tech for Palestine. Committed to writing clean, testable code
                and making systems easier for the next person to work with.
              </p>
              <img
                src="/photo.jpg"
                alt="Mohanad Fteha"
                className="hidden sm:block w-24 h-24 md:w-28 md:h-28 rounded-lg object-cover shrink-0 border border-border-subtle grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-base font-semibold text-yellow mb-3">
              What I Do
            </h3>
            <ul className="space-y-2 text-sm text-text-secondary">
              {[
                "Build and maintain RESTful APIs, GraphQL services, and serverless architectures",
                "Design scalable microservices and infrastructure on AWS",
                "Lead security hardening, CI pipelines, and production observability",
                "Contribute to open-source projects and technical writing",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-cyan shrink-0">{">"}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-base font-semibold text-yellow mb-4">
              Tech Stack
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 text-sm">
              {skills.map((group, i) => (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.06 }}
                >
                  <span className="text-green text-xs block mb-0.5">
                    {group.category}
                  </span>
                  <span className="text-text-secondary">
                    {group.items.join(", ")}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h3 className="text-base font-semibold text-yellow mb-3">
              Education
            </h3>
            <div className="text-sm space-y-1">
              <div className="text-text-primary font-semibold">
                B.Sc. Computer Systems Engineering
              </div>
              <div className="text-text-secondary">
                Al Azhar University, Gaza
                <span className="text-text-muted mx-2">/</span>
                2020 – 2025
                <span className="text-text-muted mx-2">/</span>
                GPA: <span className="text-cyan">89.1/100</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-base font-semibold text-yellow mb-3">
              Achievements
            </h3>
            <ul className="space-y-2 text-sm text-text-secondary">
              {[
                {
                  text: "250+ problems solved on LeetCode",
                  link: "https://leetcode.com/mohanadft",
                },
                {
                  text: "IEEExtreme Programming Competition participant (2022)",
                  link: "https://drive.google.com/file/d/1Xe7JDoQkZLLvBuU7qW7Ql9NbMgWmsFR8/view",
                },
                {
                  text: "TAP Software Development Training Program (2023)",
                  link: "https://drive.google.com/file/d/1-NOVj8l4KSHhEbT4jR_Lum4d2_wSW35k/view",
                },
                {
                  text: "Duolingo English Test: Overall 120, CEFR B2 (2026)",
                  link: "https://certs.duolingo.com/pjorgjk4wgxpd0rr",
                },
                {
                  text: "Sussex Conversational English Course (2026)",
                  link: "https://drive.google.com/file/d/1CR1jVo9PJi4dY_xC0GOXiqmIM7Ql0yUM/view",
                },
              ].map((item) => (
                <li key={item.text} className="flex gap-2.5">
                  <span className="text-cyan shrink-0">{">"}</span>
                  <span>
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue hover:text-cyan transition-colors"
                      >
                        {item.text}
                      </a>
                    ) : (
                      item.text
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-12 pt-6 border-t border-border-subtle text-text-muted text-xs"
        >
          EOF
        </motion.div>
      </div>
    </section>
  );
}
