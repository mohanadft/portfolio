"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "./SectionHeading";

const jobs = [
  {
    role: "Software Engineer",
    company: "Tech for Palestine",
    period: "Sep 2025 – Present",
    current: true,
    highlights: [
      "Built and launched an A/B testing framework across key conversion pages, integrating Plausible Analytics to surface donor behavior signals. Enabled data-driven product decisions that improved conversion rates by ~15%.",
      "Led open-source code review and maintenance: triaged 50+ issues, reviewed community PRs, and enforced code quality standards across the repository.",
      "Architected a CI security scanning pipeline and led 6 rounds of security hardening: patched 12+ medium/high-severity dependency vulnerabilities, fixed a Cloudflare CSP nonce bypass, and enforced constant-time secret comparison on all webhook endpoints.",
      "Integrated Sentry error monitoring across server-side API routes and webhooks; debugged silent analytics event drops by tracing a Cloudflare Worker lifecycle issue, recovering ~20% of previously lost donation tracking events.",
    ],
  },
  {
    role: "Full Stack Software Engineer",
    company: "Yaffa Solutions",
    period: "Jan 2025 – Sep 2025",
    current: false,
    highlights: [
      "Engineered and tuned AWS Lambda functions and custom API Gateway Authorizers for a production serverless microservices architecture, cutting cold-start latency by ~40% and increasing request throughput.",
      "Drove test coverage with unit and integration tests using Vitest, raising code coverage from ~30% to 75%+ and intercepting regressions before every production deployment.",
      "Authored a Docker-based SQL Server setup guide in the first week that became the standard onboarding reference, cutting new developer environment setup from 2+ days to under an hour.",
    ],
  },
  {
    role: "Backend Web Developer (Trainee)",
    company: "TAP",
    period: "May 2023 – Sep 2023",
    current: false,
    highlights: [
      "Engineered a production-ready e-commerce REST API with Node.js, Express.js, and TypeScript; designed the database schema (normalized to 3NF), implemented and tested all endpoints.",
      "Partnered with frontend developers to define API contracts and integration, delivering working features on a weekly sprint cadence.",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="experience"
      className="py-20 md:py-28 px-6 relative bg-secondary/30"
      ref={ref}
    >
      <div className="max-w-2xl mx-auto font-mono">
        <SectionHeading number="02" title="Experience" />

        <div className="relative">
          <motion.div
            className="absolute left-0 top-2 bottom-0 w-px bg-border-subtle hidden md:block origin-top"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          />

          <div className="space-y-12 md:pl-8">
            {jobs.map((job, index) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: -12 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.1 + index * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative"
              >
                <div
                  className={`absolute -left-8 top-1.5 hidden md:block w-2 h-2 rounded-full border ${
                    job.current
                      ? "bg-green border-green"
                      : "bg-primary border-border"
                  }`}
                  style={{ transform: "translateX(-50%)" }}
                >
                  {job.current && (
                    <span className="absolute inset-0 rounded-full bg-green animate-ping opacity-40" />
                  )}
                </div>

                <div className="flex items-baseline gap-3 flex-wrap mb-1">
                  <h3
                    className="font-semibold text-text-primary tracking-[-0.02em]"
                    style={{ fontSize: "clamp(1rem, 1.5vw, 1.125rem)" }}
                  >
                    {job.role}
                  </h3>
                  <span className="text-text-muted">/</span>
                  <span className="text-cyan text-sm">{job.company}</span>
                </div>
                <div className="text-text-muted text-xs mb-4">{job.period}</div>

                <ul className="space-y-2.5 text-sm text-text-secondary">
                  {job.highlights.map((item, i) => (
                    <li key={i} className="flex gap-2.5">
                      <span className="text-green shrink-0 mt-0.5">{">"}</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
