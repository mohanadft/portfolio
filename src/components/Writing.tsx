"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const articles = [
  {
    title: "Deep Diving into Palindrome Linked List Problem on LeetCode",
    platform: "Medium",
    url: "https://medium.com/@mohanadfteha/deep-diving-into-palindrome-linked-list-problem-on-leetcode-4d0f45b96211",
    description: "In-depth analysis of solving the palindrome linked list problem with multiple approaches",
    tags: ["Algorithms", "Data Structures", "LeetCode"],
    date: "2023",
  },
];

export default function Writing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="writing"
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
            <span className="text-green">ls -la ~/writing</span>
          </div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="mb-4 pl-4 text-text-muted text-xs"
          >
            total {articles.length}
          </motion.div>

          {/* Articles list */}
          <div className="pl-4 space-y-6">
            {articles.map((article, index) => (
              <motion.div
                key={article.url}
                className="group"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <div className="border-l-2 border-border group-hover:border-yellow pl-4 transition-colors">
                  {/* Date and platform */}
                  <div className="flex items-baseline gap-3 mb-2 flex-wrap text-xs text-text-muted">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span className="text-cyan">{article.platform}</span>
                  </div>

                  {/* Title */}
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group/link"
                  >
                    <h3 className="text-green font-semibold mb-2 group-hover/link:opacity-80 group-hover/link:underline transition-colors">
                      {article.title}
                    </h3>
                  </a>

                  {/* Description */}
                  <p className="text-text-secondary mb-3 text-sm leading-relaxed">
                    {article.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-2">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-yellow bg-yellow/10 px-2 py-1 rounded border border-yellow/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read link */}
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue hover:opacity-80 hover:underline text-sm inline-flex items-center gap-1"
                  >
                    Read article
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
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="mt-8 pt-6 border-t border-tertiary text-text-muted text-xs pl-4"
          >
            <div className="space-y-1">
              <div>
                <span className="text-green">→</span> More articles coming soon...
              </div>
              <div>
                <span className="text-green">→</span> Follow on{" "}
                <a
                  href="https://medium.com/@mohanadfteha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue hover:underline"
                >
                  Medium
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
