"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const articles = [
  {
    title: "Deep Diving into Palindrome Linked List Problem on LeetCode",
    platform: "Medium",
    url: "https://medium.com/@mohanadfteha/deep-diving-into-palindrome-linked-list-problem-on-leetcode-4d0f45b96211",
    description:
      "In-depth analysis of solving the palindrome linked list problem with multiple approaches",
    tags: ["Algorithms", "Data Structures", "LeetCode"],
    date: "2023",
  },
];

export default function Writing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="writing"
      className="py-20 md:py-28 px-6 relative bg-primary"
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
          <span className="text-green">ls ~/writing</span>
        </motion.div>

        <div className="space-y-6">
          {articles.map((article, index) => (
            <motion.article
              key={article.url}
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.15 + index * 0.1,
              }}
            >
              <div className="flex items-baseline gap-3 mb-2 text-xs text-text-muted">
                <span>{article.date}</span>
                <span className="text-cyan">{article.platform}</span>
              </div>

              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link block"
              >
                <h3 className="text-base md:text-lg font-semibold text-text-primary mb-2 group-hover/link:text-green transition-colors">
                  {article.title}
                </h3>
              </a>

              <p className="text-text-secondary text-sm leading-relaxed mb-3 max-w-[60ch]">
                {article.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-3">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-yellow bg-yellow/5 px-2 py-0.5 rounded border border-yellow/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue hover:text-cyan transition-colors text-sm inline-flex items-center gap-1.5"
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
                    d="M7 17L17 7M17 7H7M17 7v10"
                  />
                </svg>
              </a>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="mt-10 pt-6 border-t border-border-subtle text-text-muted text-xs"
        >
          More on{" "}
          <a
            href="https://medium.com/@mohanadfteha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue hover:text-cyan transition-colors"
          >
            Medium
          </a>
        </motion.div>
      </div>
    </section>
  );
}
