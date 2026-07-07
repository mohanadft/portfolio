"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useCallback, useEffect } from "react";
import { EASE } from "@/lib/motion";
import TerminalWindow from "./TerminalWindow";

const EXIT_DELAY_MS = 1400;
const CLOSE_DELAY_MS = 700;

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
  const [exiting, setExiting] = useState(false);
  const [closed, setClosed] = useState(false);

  const copyEmail = useCallback(() => {
    navigator.clipboard.writeText("mohanadfteha@gmail.com").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, []);

  useEffect(() => {
    if (!isInView) return;
    const timer = setTimeout(() => setExiting(true), EXIT_DELAY_MS);
    return () => clearTimeout(timer);
  }, [isInView]);

  useEffect(() => {
    if (!exiting) return;
    const timer = setTimeout(() => setClosed(true), CLOSE_DELAY_MS);
    return () => clearTimeout(timer);
  }, [exiting]);

  return (
    <section
      id="contact"
      className="py-20 md:py-section-generous px-6 relative bg-secondary/30 overflow-hidden"
      ref={ref}
    >
      <motion.div
        className="absolute inset-0 pointer-events-none hidden md:block"
        animate={{ opacity: closed ? 0 : 1 }}
        transition={{ duration: 1 }}
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
      </motion.div>
      {/* width: narrow */}
      <div className="max-w-2xl mx-auto font-mono relative">
        <h2 className="sr-only">Contact</h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-text-primary text-lg md:text-xl leading-relaxed mb-12"
        >
          I build systems that don&apos;t wake people up at 3 AM.
          <br />
          <span className="text-text-secondary">
            If that sounds useful, let&apos;s talk.
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={
            isInView
              ? { opacity: 1, scale: exiting ? 0.99 : 1 }
              : {}
          }
          transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
        >
          <TerminalWindow
            title="mohanad@gaza ~"
            dimmed={exiting}
            bodyClassName="p-6 md:p-8 text-sm"
          >
            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3, duration: 0.2 }}
                className="text-green"
              >
                <span className="text-text-muted">$</span> whoami
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.45, duration: 0.2 }}
                className="pl-4 text-text-secondary"
              >
                mohanad@gaza ~ still here
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6, duration: 0.2 }}
                className="text-green pt-2"
              >
                <span className="text-text-muted">$</span> echo $CONTACT
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.75, duration: 0.3 }}
                className="pl-4 space-y-2"
              >
                {channels.map((channel) => (
                  <div
                    key={channel.label}
                    className="flex items-baseline gap-3 group"
                  >
                    <span className="text-text-muted text-xs w-16 shrink-0 uppercase tracking-wider">
                      {channel.label}
                    </span>
                    <a
                      href={channel.href}
                      target={channel.label === "Email" ? undefined : "_blank"}
                      rel={
                        channel.label === "Email"
                          ? undefined
                          : "noopener noreferrer"
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
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.9, duration: 0.2 }}
                className="text-green pt-2"
              >
                <span className="relative inline-block">
                  <span className="text-text-muted">$</span> exit
                  {exiting && (
                    <motion.span
                      className="absolute inset-0 bg-green origin-left"
                      initial={{ scaleX: 0, opacity: 1 }}
                      animate={{ scaleX: 1, opacity: 0 }}
                      transition={{ duration: 0.5, ease: EASE }}
                      aria-hidden="true"
                    />
                  )}
                </span>
              </motion.div>

              <motion.div
                animate={{ opacity: closed ? 1 : 0 }}
                transition={{ duration: 0.4 }}
                className="pl-4 text-text-muted text-xs"
              >
                Connection to mohanad@gaza closed.
              </motion.div>
            </div>
          </TerminalWindow>
        </motion.div>

        <motion.p
          animate={{ opacity: closed ? 1 : 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center text-text-muted text-xs mt-8"
        >
          mohanad fteha &copy; 2026{" "}
          <span className="cursor-decay-blink text-green">_</span>
        </motion.p>
      </div>
    </section>
  );
}
