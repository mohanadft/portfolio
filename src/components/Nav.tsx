"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

const sections = [
  { id: "about", label: "about" },
  { id: "experience", label: "experience" },
  { id: "projects", label: "projects" },
  { id: "opensource", label: "open-source" },
  { id: "testimonials", label: "testimonials" },
  { id: "contact", label: "contact" },
];

const NAV_SHOW_THRESHOLD = 0.6;

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);
  const visibleSections = useRef(new Set<string>());

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * NAV_SHOW_THRESHOLD);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPct(max > 0 ? Math.round((window.scrollY / max) * 100) : 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visibleSections.current.add(entry.target.id);
          } else {
            visibleSections.current.delete(entry.target.id);
          }
        }

        for (let i = sections.length - 1; i >= 0; i--) {
          if (visibleSections.current.has(sections[i].id)) {
            setActive(sections[i].id);
            return;
          }
        }
        setActive("");
      },
      { rootMargin: "-80px 0px -40% 0px", threshold: 0 }
    );

    for (const s of sections) {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (menuOpen) {
      const close = () => setMenuOpen(false);
      window.addEventListener("scroll", close, { passive: true });
      return () => window.removeEventListener("scroll", close);
    }
  }, [menuOpen]);

  const activeLabel = sections.find((s) => s.id === active)?.label;

  return (
    <>
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
        scrolled
          ? "bg-primary/90 backdrop-blur-md border-b border-border-subtle"
          : "border-b border-transparent"
      }`}
      aria-label="Site identity and section navigation"
    >
      <div className="hidden md:flex max-w-6xl mx-auto pl-6 pr-28 h-11 items-center gap-1 font-mono text-xs">
        <span className="text-text-primary font-semibold tracking-tight mr-2">
          Mohanad Fteha
        </span>
        <span className="text-text-muted mr-3">Backend &amp; Infra Engineer</span>

        <div
          className={`flex items-center gap-1 ml-auto transition-opacity duration-300 ${
            scrolled ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`relative px-2.5 py-1.5 rounded transition-colors duration-200 ${
                active === s.id
                  ? "text-green"
                  : "text-text-muted hover:text-text-secondary"
              }`}
            >
              {s.label}
              {active === s.id && (
                <motion.div
                  layoutId="nav-active"
                  className="absolute inset-0 bg-green/10 rounded"
                  transition={{ type: "spring", stiffness: 500, damping: 35 }}
                />
              )}
            </a>
          ))}
        </div>
      </div>

      <div className="md:hidden relative">
        <div className="flex items-center justify-between pl-4 pr-24 h-11 font-mono text-xs">
          <div className="flex items-center gap-2 min-w-0">
            <span className="text-text-primary font-semibold truncate">
              Mohanad Fteha
            </span>
            {activeLabel && (
              <span className="text-text-secondary shrink-0">/{activeLabel}</span>
            )}
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-text-muted hover:text-text-secondary p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden border-t border-border-subtle bg-primary/95 backdrop-blur-md"
            >
              <div className="flex flex-col py-2 px-4 font-mono text-xs">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    onClick={() => setMenuOpen(false)}
                    className={`px-3 py-3 rounded transition-colors ${
                      active === s.id
                        ? "text-green bg-green/10"
                        : "text-text-muted hover:text-text-secondary"
                    }`}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>

    <div
      className="fixed bottom-0 left-0 right-0 z-40 bg-primary/90 backdrop-blur-md border-t border-border-subtle font-mono text-xs px-4 h-6 flex items-center justify-between"
      aria-label="Availability status"
    >
      <span className="flex items-center gap-3 min-w-0 truncate">
        <span className="flex items-center gap-1.5 shrink-0">
          <span className="status-dot" />
          <span className="text-green">Open to work</span>
        </span>
        <span className="text-text-muted hidden sm:inline shrink-0">
          Gaza, Palestine
        </span>
      </span>
      <span className="text-text-muted shrink-0 ml-2 truncate">
        {activeLabel && <span className="text-green">[{activeLabel}]</span>}{" "}
        {scrollPct}%
      </span>
    </div>
    </>
  );
}
