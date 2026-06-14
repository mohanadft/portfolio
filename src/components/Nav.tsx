"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const visibleSections = useRef(new Set<string>());

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * NAV_SHOW_THRESHOLD);
    };

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
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -48, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -48, opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="fixed top-0 left-0 right-0 z-40 bg-primary/90 backdrop-blur-md border-b border-border-subtle"
          aria-label="Section navigation"
        >
          <div className="hidden md:flex max-w-6xl mx-auto px-6 h-11 items-center gap-1 font-mono text-xs">
            <span className="text-green font-semibold tracking-tight mr-3">
              mohanadft
            </span>
            <span className="text-text-muted mr-3">~</span>
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

          <div className="md:hidden relative">
            <div className="flex items-center justify-between px-4 pr-14 h-11 font-mono text-xs">
              <div className="flex items-center gap-2">
                <span className="text-green font-semibold">mohanadft</span>
                <span className="text-text-muted">~</span>
                {activeLabel && (
                  <span className="text-text-secondary">/{activeLabel}</span>
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
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
