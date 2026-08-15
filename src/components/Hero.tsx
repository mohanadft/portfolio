import Image from "next/image";
import { SECTIONS } from "@/lib/sections";

export default function Hero() {
  return (
    <section className="grid min-h-screen grid-cols-1 lg:grid-cols-[1fr_24rem]">
      <div className="grid min-w-0 grid-rows-[auto_1fr_auto] px-[6vw] pt-8 pb-10 lg:pr-[4vw]">
        <div className="flex flex-wrap justify-between gap-x-8 gap-y-2 border-b border-rule pb-4 font-mono text-[0.6875rem] tracking-[0.14em] text-muted uppercase">
          <span className="text-bone">Mohanad Fteha</span>
          <span>Software Engineer</span>
          <span>Gaza, Palestine</span>
          <span className="inline-flex items-center gap-2 text-acid">
            <span
              aria-hidden="true"
              className="inline-block size-1.5 rounded-full bg-acid"
            />
            Open to work
          </span>
        </div>

        <div className="flex flex-col justify-center py-16">
          <h1 className="text-[clamp(3.5rem,11.5vw,10rem)] leading-[0.84] font-medium tracking-[-0.045em]">
            Mohanad
            <br />
            Fteha<span className="text-acid">.</span>
          </h1>
          <p className="mt-12 max-w-[46ch] text-[clamp(1.0625rem,1.6vw,1.375rem)] leading-[1.45] text-pretty text-bone-dim">
            I work on the half of the product you only notice when it breaks —
            APIs, queues, deploy pipelines, the pager. Three years of it, mostly
            Node and TypeScript, lately Rust.
          </p>

          <a
            href="#words"
            className="mt-8 inline-block self-start border-b border-rule pb-1 font-mono text-xs tracking-[0.08em] text-muted uppercase transition-colors duration-200 hover:border-acid hover:text-acid"
          >
            What people I&apos;ve worked with say ↓
          </a>
        </div>

        <nav
          aria-label="Sections"
          className="flex flex-wrap gap-9 border-t border-rule pt-4 font-mono text-xs tracking-[0.08em] text-muted uppercase"
        >
          {SECTIONS.map((section) => {
            const isContact = section.id === "contact";
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`transition-colors duration-200 ${
                  isContact ? "ml-auto text-acid" : ""
                }`}
              >
                {section.num} {section.label}
                {isContact ? " →" : ""}
              </a>
            );
          })}
        </nav>
      </div>

      <div className="group relative order-first h-[50vh] border-rule lg:order-none lg:h-auto lg:border-l">
        <Image
          src="/photo.jpg"
          alt="Mohanad Fteha"
          fill
          priority
          sizes="(min-width: 1024px) 24rem, 100vw"
          className="object-cover object-[center_22%] [filter:grayscale(1)_contrast(1.08)_brightness(0.85)] transition-[filter] duration-500 ease-out group-hover:[filter:none]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-acid opacity-[0.16] mix-blend-color transition-opacity duration-500 ease-out group-hover:opacity-0"
        />
        {/* He's looking off-frame in the photo — the plate names what he's looking at. */}
        <div className="absolute top-0 left-0 overflow-hidden">
          <div className="-translate-x-full bg-acid px-4 py-3 text-[clamp(1.0625rem,1.4vw,1.375rem)] leading-[1.15] font-bold tracking-[-0.02em] text-ink transition-transform duration-500 ease-out group-hover:translate-x-0">
            Still looking
            <br />
            forward<span className="opacity-40">.</span>
          </div>
        </div>

        <div className="absolute bottom-5 left-5 font-mono text-[0.625rem] tracking-[0.14em] text-bone uppercase">
          Gaza, 2023
        </div>
      </div>
    </section>
  );
}
