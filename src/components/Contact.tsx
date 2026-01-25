"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const contactMethods = [
  { name: "GitHub", value: "github.com/mohanadft", url: "https://github.com/mohanadft", command: "open_github" },
  { name: "LinkedIn", value: "linkedin.com/in/mohanad-fteha", url: "https://www.linkedin.com/in/mohanad-fteha", command: "open_linkedin" },
  { name: "Email", value: "mohanadfteha@gmail.com", url: "mailto:mohanadfteha@gmail.com", command: "send_mail" },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 px-6 relative bg-primary"
      ref={ref}
    >
      <div className="max-w-4xl w-full">
        <motion.div
          className="border border-border bg-secondary/50 rounded-lg p-6 md:p-8 font-mono text-sm md:text-base"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Command header */}
          <div className="mb-6">
            <span className="text-text-muted">$</span>{" "}
            <span className="text-green">cat contact.json</span>
          </div>

          {/* JSON-style output */}
          <div className="pl-4 space-y-4 text-text-primary">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              <div className="text-cyan">{"{"}</div>
            </motion.div>

            <div className="pl-4 space-y-3">
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3 }}
              >
                <span className="text-yellow">"status"</span>
                <span className="text-text-muted">: </span>
                <span className="text-green">"available_for_work"</span>
                <span className="text-text-muted">,</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
              >
                <span className="text-yellow">"message"</span>
                <span className="text-text-muted">: </span>
                <span className="text-green">
                  "Building scalable systems and solving complex problems. Let's connect!"
                </span>
                <span className="text-text-muted">,</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 }}
              >
                <div className="mb-2">
                  <span className="text-yellow">"links"</span>
                  <span className="text-text-muted">: {"{"}</span>
                </div>
                <div className="pl-4 space-y-2">
                  {contactMethods.map((method, index) => (
                    <motion.div
                      key={method.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="group"
                    >
                      <span className="text-purple">"{method.name.toLowerCase()}"</span>
                      <span className="text-text-muted">: </span>
                      <a
                        href={method.url}
                        target={method.name === "Email" ? undefined : "_blank"}
                        rel={method.name === "Email" ? undefined : "noopener noreferrer"}
                        className="text-blue hover:opacity-80 hover:underline"
                      >
                        "{method.value}"
                      </a>
                      <span className="text-text-muted">
                        {index < contactMethods.length - 1 ? "," : ""}
                      </span>
                      <span className="text-text-muted ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-xs">
                        // {method.command}
                      </span>
                    </motion.div>
                  ))}
                </div>
                <div className="text-text-muted">{"}"}</div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1 }}
            >
              <div className="text-cyan">{"}"}</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.2 }}
              className="pt-6 border-t border-tertiary"
            >
              <div className="text-text-muted text-xs space-y-1">
                <div>
                  <span className="text-text-muted">#</span> Feel free to reach out for:
                </div>
                <div className="pl-4 space-y-0.5">
                  <div>
                    <span className="text-cyan">→</span> Backend engineering opportunities
                  </div>
                  <div>
                    <span className="text-cyan">→</span> Systems design discussions
                  </div>
                  <div>
                    <span className="text-cyan">→</span> Open source collaborations
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.4 }}
              className="pt-4 text-text-muted text-xs"
            >
              <span className="text-text-muted">$</span> Built by Mohanad Fteha with ❤️
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
