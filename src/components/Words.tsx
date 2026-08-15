const CARD = "m-0 border border-rule bg-ink p-9";
const FOOTER = "eyebrow mt-6 border-t border-rule pt-[0.85rem] tracking-[0.1em]";

export default function Words() {
  return (
    <section
      id="words"
      className="border-t border-rule bg-ink-deep px-[6vw] py-28"
    >
      <div className="eyebrow mb-14">
        <span className="text-acid">05</span> / Words from people I&apos;ve
        worked with
      </div>

      <div className="grid max-w-[84rem] grid-cols-1 items-start gap-6 lg:grid-cols-[1.35fr_1fr]">
        <blockquote className={CARD}>
          <p className="m-0 leading-[1.6] text-pretty text-bone">
            “From day one, Mohanad Fteha impressed me with his initiative and
            sharp analytical mind. Despite being the youngest member of our team,
            he took it upon himself to quickly master the domain knowledge of our
            industry. With over 30 years of experience in the concrete business,
            I intimately understand how plant operations work, but translating
            these intricate calculations onto paper is a significant challenge.
            Mohanad not only grasped these complex technical requirements
            effortlessly, but his analytical rigor was so strong that he would
            occasionally spot nuances or correct calculations that even I had
            overlooked.”
          </p>
          <footer className={FOOTER}>
            <span className="text-bone">Garfield Liddon</span> — 30 years in the
            concrete business
          </footer>
        </blockquote>

        <div className="flex flex-col gap-6">
          <blockquote className="m-0 bg-acid p-9 text-ink">
            <p className="m-0 text-[clamp(1.25rem,2vw,1.625rem)] leading-[1.25] font-medium tracking-[-0.02em] text-pretty">
              “An outstanding engineer, a real pleasure working with him.”
            </p>
            <footer className="mt-6 border-t border-[color-mix(in_oklch,var(--ink)_30%,transparent)] pt-[0.85rem] font-mono text-[0.6875rem] tracking-[0.1em] uppercase">
              <a
                href="https://www.linkedin.com/in/wasimjuned/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-[color-mix(in_oklch,var(--ink)_40%,transparent)] pb-0.5 text-ink hover:text-ink"
              >
                Wasim Juned ↗
              </a>
            </footer>
          </blockquote>

          <blockquote className={CARD}>
            <p className="m-0 text-[0.9375rem] leading-[1.6] text-pretty text-bone-dim">
              “Mohanad&apos;s code showcases a deep understanding of algorithms
              and data structures, particularly in backend development:
              efficient, well-organized solutions with outstanding
              problem-solving skill throughout.”
            </p>
            <footer className={FOOTER}>
              <a
                href="https://www.linkedin.com/in/mbarhoush"
                target="_blank"
                rel="noopener noreferrer"
                className="text-bone transition-colors duration-200"
              >
                Mohammad Barhoush ↗
              </a>{" "}
              — Tech Leader
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
