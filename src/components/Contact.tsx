"use client";

import { useEffect, useRef, useState } from "react";

const EMAIL = "mohanadfteha@gmail.com";
const COPIED_RESET_MS = 2000;

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setCopied(false), COPIED_RESET_MS);
    } catch {
      // Clipboard unavailable (insecure context or denied permission) — the
      // mailto link beside the button remains the working path.
    }
  };

  return (
    <section
      id="contact"
      className="border-t-2 border-acid px-[6vw] pt-28 pb-12"
    >
      <div className="eyebrow mb-10">
        <span className="text-acid">06</span> / Contact
      </div>

      <p className="mb-14 max-w-[26ch] text-[clamp(1.25rem,2.4vw,1.875rem)] leading-[1.3] tracking-[-0.02em]">
        I build systems that don&apos;t wake people up at 3 AM. If that sounds
        useful, my inbox is open.
      </p>

      <div className="flex flex-wrap items-baseline gap-6 border-b border-rule pb-8">
        <a
          href={`mailto:${EMAIL}`}
          className="text-[clamp(1.75rem,5.5vw,4rem)] leading-none font-medium tracking-[-0.04em] [overflow-wrap:anywhere] transition-colors duration-200"
        >
          {EMAIL}
        </a>
        <button
          type="button"
          onClick={handleCopy}
          className="cursor-pointer border border-rule px-3 py-[0.4rem] font-mono text-xs tracking-[0.08em] text-muted uppercase transition-colors duration-200 hover:border-acid hover:text-acid"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>

      <div className="flex flex-wrap gap-10 border-b border-rule py-8 font-mono text-[0.8125rem]">
        <a
          href="https://github.com/mohanadft"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors duration-200"
        >
          github.com/mohanadft ↗
        </a>
        <a
          href="https://www.linkedin.com/in/mohanad-fteha"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors duration-200"
        >
          linkedin.com/in/mohanad-fteha ↗
        </a>
      </div>

      <div className="eyebrow flex flex-wrap justify-between gap-4 pt-8">
        <span>
          <span className="text-acid">Open to work</span> — Gaza, Palestine
        </span>
        <span>Mohanad Fteha © 2026</span>
      </div>
    </section>
  );
}
