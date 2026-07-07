"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";
import { INTRO_SESSION_KEY } from "@/lib/session";
import { EASE } from "@/lib/motion";
import TerminalWindow from "./TerminalWindow";

const FULL_NAME = "Mohanad Fteha";
const TYPING_SPEED_MS = 70;
const CURSOR_BLINK_MS = 530;

interface TerminalLine {
  type: "input" | "output";
  text: string;
}

const COMMANDS: Record<string, string> = {
  help: "Available commands: help, about, skills, contact, projects, status, clear",
  about:
    "Backend engineer from Gaza, Palestine. 3 years building APIs and infrastructure with Node.js, TypeScript, Rust, and AWS.",
  skills:
    "Languages: TypeScript, JavaScript, Rust, SQL\nInfra: AWS Lambda, Docker, Kubernetes, Cloudflare\nDatabases: PostgreSQL, MongoDB, Redis",
  contact:
    "Email: mohanadfteha@gmail.com\nGitHub: github.com/mohanadft\nLinkedIn: linkedin.com/in/mohanad-fteha",
  projects:
    "1. mini-osb: Kubernetes pod provisioner via Open Service Broker API\n2. Contextly: AI-powered Chrome extension for contextual word explanations",
  status: "Available for work. Currently at Tech for Palestine.",
  clear: "__CLEAR__",
};

const HINT_TEXT = 'try "help"';
const HINT_DELAY_MS = 3500;
const HINT_TYPE_MS = 80;

interface TerminalInputProps {
  skipIntro: boolean;
}

function TerminalInput({ skipIntro }: TerminalInputProps) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<TerminalLine[]>([]);
  const [focused, setFocused] = useState(false);
  const [hint, setHint] = useState("");
  const [hintVisible, setHintVisible] = useState(false);
  const interacted = useRef(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      if (interacted.current) return;
      setHintVisible(true);
      let i = 0;
      const typeTimer = setInterval(() => {
        if (interacted.current) {
          clearInterval(typeTimer);
          return;
        }
        i++;
        setHint(HINT_TEXT.slice(0, i));
        if (i >= HINT_TEXT.length) clearInterval(typeTimer);
      }, HINT_TYPE_MS);
      return () => clearInterval(typeTimer);
    }, HINT_DELAY_MS);
    return () => clearTimeout(delayTimer);
  }, []);

  const dismissHint = useCallback(() => {
    interacted.current = true;
    setHintVisible(false);
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const cmd = input.trim().toLowerCase();
      if (!cmd) return;

      if (cmd === "clear") {
        setHistory([]);
        setInput("");
        return;
      }

      const output =
        COMMANDS[cmd] ?? `command not found: ${cmd}. Type "help" for available commands.`;

      setHistory((prev) => [
        ...prev,
        { type: "input", text: cmd },
        { type: "output", text: output },
      ]);
      setInput("");
    },
    [input]
  );

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <motion.div
      initial={skipIntro ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={skipIntro ? { duration: 0 } : { delay: 2.1, duration: 0.3 }}
      className="pt-3"
    >
      {history.length > 0 && (
        <div
          ref={containerRef}
          className="max-h-40 overflow-y-auto space-y-1 mb-2 text-sm scrollbar-thin"
        >
          {history.map((line, i) => (
            <div key={i}>
              {line.type === "input" ? (
                <div className="text-text-muted">
                  <span>$</span>{" "}
                  <span className="text-green">{line.text}</span>
                </div>
              ) : (
                <div className="text-text-secondary pl-4 whitespace-pre-wrap">
                  {line.text}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className={`flex items-center text-text-muted cursor-text rounded px-2 py-1 -mx-2 ${
          focused
            ? "border border-green/30"
            : "border animate-[pulse-border_2s_ease-in-out_infinite]"
        }`}
        onClick={() => inputRef.current?.focus()}
      >
        <span>$</span>
        <span className="relative ml-1.5 inline-flex items-center">
          <span className="invisible whitespace-pre font-mono text-sm md:text-base">
            {input || " "}
          </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              dismissHint();
            }}
            onFocus={() => {
              setFocused(true);
              dismissHint();
            }}
            onBlur={() => setFocused(false)}
            className="terminal-input absolute inset-0 bg-transparent border-none outline-none focus-visible:outline-none text-green caret-transparent font-mono text-sm md:text-base w-full"
            aria-label="Terminal command input"
            autoComplete="off"
            spellCheck={false}
          />
          <span
            className={`text-green ${focused || !input ? "cursor-decay-blink" : ""}`}
          >
            _
          </span>
        </span>
      </form>

      {hintVisible && hint && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-text-muted/50 text-xs mt-2 pl-4"
        >
          {hint}
          <span className="animate-pulse">_</span>
        </motion.div>
      )}
    </motion.div>
  );
}

export default function Hero() {
  const [skipIntro, setSkipIntro] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const rafRef = useRef<number>(0);

  const reveal = useCallback(
    (delay: number) => ({
      initial: skipIntro ? false : { opacity: 0 },
      animate: { opacity: 1 },
      transition: skipIntro ? { duration: 0 } : { delay, duration: 0.3 },
    }),
    [skipIntro]
  );

  useEffect(() => {
    if (skipIntro) {
      setDisplayedText(FULL_NAME);
      return;
    }

    let index = 0;
    let lastTime = 0;

    const step = (time: number) => {
      if (!lastTime) lastTime = time;
      if (time - lastTime >= TYPING_SPEED_MS) {
        index++;
        setDisplayedText(FULL_NAME.slice(0, index));
        lastTime = time;
      }
      if (index < FULL_NAME.length) {
        rafRef.current = requestAnimationFrame(step);
      }
    };

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [skipIntro]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, CURSOR_BLINK_MS);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem(INTRO_SESSION_KEY) === "1") {
      setSkipIntro(true);
    }
    sessionStorage.setItem(INTRO_SESSION_KEY, "1");
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-primary px-6">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06] animate-[scanline-flicker_4s_ease-in-out_infinite] dark-only"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, var(--accent-green) 0px, transparent 1px, transparent 4px)",
        }}
      />

      <motion.div
        className="relative w-full max-w-3xl"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <TerminalWindow
          title="mohanad@gaza ~"
          bodyClassName="p-6 md:p-10 text-sm md:text-base"
        >
          <div className="space-y-4">
            <motion.div {...reveal(0.2)} className="text-green">
              <span className="text-text-muted">$</span> whoami
            </motion.div>

            <motion.h1
              {...reveal(0.35)}
              className="text-text-primary pl-4 font-bold tracking-[-0.04em]"
              style={{ fontSize: "clamp(1.75rem, 5vw, 3rem)" }}
            >
              {displayedText}
              <span
                className={`cursor-decay text-green ${showCursor ? "" : "cursor-off"}`}
              >
                _
              </span>
            </motion.h1>

            <motion.div {...reveal(1.2)} className="text-green pt-3">
              <span className="text-text-muted">$</span> cat role.txt
            </motion.div>

            <motion.div {...reveal(1.35)} className="pl-4 space-y-1.5">
              <div className="text-text-primary">
                <span className="text-yellow font-semibold text-base md:text-lg">
                  Software Engineer
                </span>{" "}
                <span className="text-text-muted">/</span>{" "}
                <span className="text-text-secondary">
                  Backend &amp; Infrastructure
                </span>
              </div>
              <div className="text-text-secondary text-sm">
                <span className="text-cyan">Node.js</span>
                <span className="text-text-muted"> / </span>
                <span className="text-cyan">TypeScript</span>
                <span className="text-text-muted"> / </span>
                <span className="text-cyan">Rust</span>
                <span className="text-text-muted"> / </span>
                <span className="text-cyan">AWS</span>
              </div>
              <div className="text-text-muted text-sm">
                Gaza, Palestine
              </div>
            </motion.div>

            <motion.div {...reveal(1.6)} className="text-green pt-3">
              <span className="text-text-muted">$</span> ls ~/
            </motion.div>

            <motion.nav
              {...reveal(1.7)}
              className="pl-4 flex gap-x-5 gap-y-2 flex-wrap"
              aria-label="Page sections"
            >
              {[
                { href: "#about", label: "about" },
                { href: "#experience", label: "experience" },
                { href: "#projects", label: "projects" },
                { href: "#opensource", label: "open-source" },

                { href: "#testimonials", label: "testimonials" },
                { href: "#contact", label: "contact" },
              ].map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="text-blue hover:text-cyan transition-colors link-hover"
                  {...reveal(1.7 + i * 0.04)}
                >
                  {link.label}/
                </motion.a>
              ))}
            </motion.nav>

            <TerminalInput skipIntro={skipIntro} />
          </div>
        </TerminalWindow>
      </motion.div>

      <div
        className="absolute inset-0 pointer-events-none hero-glow"
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 pointer-events-none hero-vignette"
        aria-hidden="true"
      />
    </section>
  );
}
