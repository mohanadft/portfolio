"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { category: "Languages", items: ["Rust", "Node.js", "TypeScript", "JavaScript", "SQL"] },
    { category: "Frameworks", items: ["Express.js", "Nest.js", "Next.js", "React.js"] },
    { category: "Databases", items: ["PostgreSQL", "MongoDB", "SQL Server"] },
    { category: "Tools & DevOps", items: ["Docker", "AWS Lambda", "Linux", "Git", "VIM"] },
    { category: "Testing", items: ["Vitest", "Unit Testing", "Integration Testing"] },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 px-6 relative bg-primary">
      <div className="max-w-4xl w-full" ref={ref}>
        <motion.div
          className="border border-border bg-secondary/50 rounded-lg p-6 md:p-8 font-mono text-sm md:text-base"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Command header */}
          <div className="mb-6">
            <span className="text-text-muted">$</span>{" "}
            <span className="text-green">cat about.md</span>
          </div>

          {/* Content */}
          <div className="pl-4 space-y-6 text-text-primary">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-yellow text-lg mb-2"># About</h3>
              <p className="leading-relaxed">
                Software Engineer with 3 years of experience in backend development using Node.js, Rust, and TypeScript.
                Focused on building reliable APIs, improving system performance, and designing scalable backend architectures.
                Known for the ability to figure things out quickly, connect the dots across complex systems, and deliver
                solutions that streamline operations and improve the overall user experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-yellow text-lg mb-2"># What I Do</h3>
              <ul className="space-y-1 list-none">
                <li>
                  <span className="text-cyan">→</span> Build reliable RESTful APIs and GraphQL services
                </li>
                <li>
                  <span className="text-cyan">→</span> Design scalable backend architectures and microservices
                </li>
                <li>
                  <span className="text-cyan">→</span> Optimize system performance and database queries
                </li>
                <li>
                  <span className="text-cyan">→</span> Contribute to open-source projects and technical writing
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              <h3 className="text-yellow text-lg mb-3"># Tech Stack</h3>
              <div className="space-y-3">
                {skills.map((skillGroup, index) => (
                  <motion.div
                    key={skillGroup.category}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    <div className="text-green">{skillGroup.category}:</div>
                    <div className="pl-4 text-text-secondary">
                      {skillGroup.items.join(" • ")}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.1 }}
            >
              <h3 className="text-yellow text-lg mb-3"># Competitive Programming</h3>
              <div className="space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-green">Platform:</span>
                  <a
                    href="https://leetcode.com/u/mohanadft/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue hover:opacity-80 hover:underline"
                  >
                    LeetCode
                  </a>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-green">Problems Solved:</span>
                  <span className="text-cyan font-semibold">250+</span>
                </div>
                <div className="pl-4 text-text-muted text-xs">
                  <span className="text-text-muted">#</span> Focused on algorithms, data structures, and optimization
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.3 }}
              className="pt-4 border-t border-tertiary text-text-muted text-xs"
            >
              <span className="text-green">EOF</span> - End of file
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
