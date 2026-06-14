"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useCallback } from "react";

const channels = [
  {
    label: "Email",
    value: "mohanadfteha@gmail.com",
    href: "mailto:mohanadfteha@gmail.com",
    copyable: true,
  },
  {
    label: "GitHub",
    value: "github.com/mohanadft",
    href: "https://github.com/mohanadft",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/mohanad-fteha",
    href: "https://www.linkedin.com/in/mohanad-fteha",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [copied, setCopied] = useState(false);

  const copyEmail = useCallback(() => {
    navigator.clipboard.writeText("mohanadfteha@gmail.com").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, []);

  return (
    <section
      id="contact"
      className="py-32 md:py-40 px-6 relative bg-secondary/30 overflow-hidden"
      ref={ref}
    >
      <div
        className="absolute inset-0 pointer-events-none hidden md:block"
        aria-hidden="true"
      >
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-green/20 animate-[float_8s_ease-in-out_infinite]"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 1.3}s`,
            }}
          />
        ))}
      </div>
      <div className="max-w-xl mx-auto font-mono relative">
        <h2 className="sr-only">Contact</h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-text-primary text-lg md:text-xl leading-relaxed mb-12"
        >
          I build systems that don&apos;t wake people up at 3 AM.
          <br />
          <span className="text-text-secondary">
            If that sounds useful, let&apos;s talk.
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          {channels.map((channel, index) => (
            <motion.div
              key={channel.label}
              initial={{ opacity: 0, x: -8 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.4,
                delay: 0.3 + index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex items-baseline gap-3 group"
            >
              <span className="text-text-muted text-xs w-16 shrink-0 uppercase tracking-wider">
                {channel.label}
              </span>
              <a
                href={channel.href}
                target={channel.label === "Email" ? undefined : "_blank"}
                rel={
                  channel.label === "Email" ? undefined : "noopener noreferrer"
                }
                className="text-cyan hover:text-green transition-colors duration-200 text-sm"
              >
                {channel.value}
              </a>
              {channel.copyable && (
                <button
                  onClick={copyEmail}
                  className="text-text-muted hover:text-green transition-colors duration-200 text-xs cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
                  aria-label={
                    copied ? "Email copied" : "Copy email to clipboard"
                  }
                >
                  {copied ? (
                    <span className="text-green">copied</span>
                  ) : (
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      copy
                    </span>
                  )}
                </button>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 pt-8 border-t border-border-subtle"
        >
          <p className="text-text-muted text-xs flex items-center gap-1">
            <span className="text-green">~</span>
            <span>End of transmission.</span>
            <motion.span
              animate={{ opacity: [1, 1, 0, 0] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                times: [0, 0.45, 0.5, 1],
              }}
              className="inline-block w-1.5 h-3 bg-green ml-0.5"
              aria-hidden="true"
            />
          </p>
        </motion.div>
      </div>
    </section>
  );
}
