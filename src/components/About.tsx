"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";

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
      className="py-28 md:py-36 px-6 relative bg-primary overflow-hidden"
      ref={ref}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--accent-green) 0.5px, transparent 0.5px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />
      <div className="max-w-3xl mx-auto font-mono">
        <SectionHeading number="01" title="About" />
        <div className="space-y-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex gap-5 items-start">
              <p className="text-text-secondary leading-relaxed text-sm md:text-base max-w-[65ch]">
                Backend-focused software engineer with 3 years of experience
                building APIs and infrastructure in Node.js, TypeScript, and
                Rust. Most recently architected serverless microservices on AWS
                Lambda at Yaffa Solutions and maintained open-source tooling at
                Tech for Palestine. Committed to writing clean, testable code
                and making systems easier for the next person to work with.
              </p>
              <Image
                src="/photo.jpg"
                alt="Mohanad Fteha"
                width={112}
                height={112}
                className="hidden sm:block w-24 h-24 md:w-28 md:h-28 rounded-lg object-cover shrink-0 border border-border-subtle md:grayscale md:hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
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
                  transition={{ delay: 0.3 + i * 0.06 }}
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
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm space-y-2"
          >
            <div>
              <span className="text-text-primary font-semibold">
                B.Sc. Computer Systems Engineering
              </span>
              <span className="text-text-muted mx-2">/</span>
              <span className="text-text-secondary">
                Al Azhar University, Gaza
              </span>
              <span className="text-text-muted mx-2">/</span>
              <span className="text-text-secondary">2020 – 2025</span>
              <span className="text-text-muted mx-2">/</span>
              <span className="text-cyan">89.1/100</span>
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-1 text-text-secondary">
              <a
                href="https://leetcode.com/mohanadft"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue hover:text-cyan transition-colors link-hover"
              >
                250+ LeetCode problems
              </a>
              <a
                href="https://drive.google.com/file/d/1Xe7JDoQkZLLvBuU7qW7Ql9NbMgWmsFR8/view"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue hover:text-cyan transition-colors link-hover"
              >
                IEEExtreme 2022
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
