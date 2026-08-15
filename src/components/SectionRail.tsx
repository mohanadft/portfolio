"use client";

import { useEffect, useState } from "react";
import { SECTIONS } from "@/lib/sections";

const OBSERVER_OPTIONS: IntersectionObserverInit = {
  rootMargin: "-45% 0px -45% 0px",
  threshold: 0,
};

export default function SectionRail() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const visible = new Set<string>();

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) visible.add(entry.target.id);
        else visible.delete(entry.target.id);
      }

      // The last visible section in document order wins.
      const current = [...SECTIONS].reverse().find((s) => visible.has(s.id));
      setActive(current?.id ?? "");
    }, OBSERVER_OPTIONS);

    for (const section of SECTIONS) {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Sections"
      className="fixed left-7 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-[0.85rem] font-mono text-[0.6875rem] tracking-[0.1em] lg:flex"
    >
      {SECTIONS.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          title={section.label}
          aria-current={active === section.id ? "true" : undefined}
          className={`transition-colors duration-200 ${
            active === section.id ? "text-acid" : "text-rule"
          }`}
        >
          {section.num}
          <span className="sr-only"> {section.label}</span>
        </a>
      ))}
    </nav>
  );
}
