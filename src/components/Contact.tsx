"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const links = [
  {
    key: "github",
    value: "github.com/mohanadft",
    url: "https://github.com/mohanadft",
  },
  {
    key: "linkedin",
    value: "linkedin.com/in/mohanad-fteha",
    url: "https://www.linkedin.com/in/mohanad-fteha",
  },
  {
    key: "email",
    value: "mohanadfteha@gmail.com",
    url: "mailto:mohanadfteha@gmail.com",
    isEmail: true,
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      className="py-32 md:py-40 px-6 relative bg-primary"
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
          <span className="text-green">cat contact.json</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="group/json bg-secondary/60 border border-border-subtle rounded-lg p-5 md:p-8 text-sm hover:border-border transition-colors duration-300"
        >
          <div className="text-text-muted">{"{"}</div>

          <div className="pl-4 py-3 space-y-2">
            <div>
              <span className="text-yellow">&quot;status&quot;</span>
              <span className="text-text-muted">: </span>
              <span className="text-green">
                &quot;available_for_work&quot;
              </span>
              <span className="text-text-muted">,</span>
            </div>

            <div>
              <span className="text-yellow">&quot;message&quot;</span>
              <span className="text-text-muted">: </span>
              <span className="text-green">
                &quot;Building scalable systems. Let&apos;s connect.&quot;
              </span>
              <span className="text-text-muted">,</span>
            </div>

            <div>
              <span className="text-yellow">&quot;links&quot;</span>
              <span className="text-text-muted">{": {"}</span>
            </div>

            <div className="pl-4 space-y-1.5">
              {links.map((link, index) => (
                <motion.div
                  key={link.key}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.3 + index * 0.08 }}
                >
                  <span className="text-purple">
                    &quot;{link.key}&quot;
                  </span>
                  <span className="text-text-muted">: </span>
                  <a
                    href={link.url}
                    target={link.isEmail ? undefined : "_blank"}
                    rel={link.isEmail ? undefined : "noopener noreferrer"}
                    className="text-blue hover:text-cyan transition-colors link-hover"
                  >
                    &quot;{link.value}&quot;
                  </a>
                  {index < links.length - 1 && (
                    <span className="text-text-muted">,</span>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="text-text-muted">{"}"}</div>
          </div>

          <div className="text-text-muted">{"}"}</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-8 text-text-muted text-xs space-y-1.5"
        >
          <div className="text-text-muted">Reach out for:</div>
          <div className="pl-4 space-y-1 text-text-secondary">
            <div>
              <span className="text-cyan">{">"}</span> Backend engineering
              opportunities
            </div>
            <div>
              <span className="text-cyan">{">"}</span> Systems design
              discussions
            </div>
            <div>
              <span className="text-cyan">{">"}</span> Open source
              collaborations
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-20 pt-6 border-t border-border-subtle text-text-muted text-xs"
        >
          Built by Mohanad Fteha, 2026
        </motion.div>
      </div>
    </section>
  );
}
