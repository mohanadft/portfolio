interface Contribution {
  project: string;
  repo: string;
  prs: string[];
}

const CONTRIBUTIONS: readonly Contribution[] = [
  { project: "Node.js", repo: "nodejs/nodejs.org", prs: ["5904", "5905"] },
  { project: "MonkeyType", repo: "monkeytypegame/monkeytype", prs: ["4614", "4667"] },
  { project: "ExpressoTS", repo: "expressots/expressots", prs: ["101", "105", "118"] },
  { project: "Qwikx", repo: "qwikifiers/qwik-nx", prs: ["14"] },
  { project: "ParsecCloud", repo: "Scille/parsec-cloud", prs: ["5373"] },
  {
    project: "30-Seconds-of-Code",
    repo: "Chalarangelo/30-seconds-of-code",
    prs: ["2020"],
  },
];

const TOTAL_PRS = CONTRIBUTIONS.reduce((sum, c) => sum + c.prs.length, 0);

const TABLE_ROW =
  "grid grid-cols-[6rem_minmax(0,1fr)_auto] items-baseline gap-5 sm:grid-cols-[9rem_minmax(0,1fr)_auto]";

export default function OpenSource() {
  return (
    <section id="opensource" className="px-[6vw] py-28">
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[19rem_1fr] lg:gap-[4.5rem]">
        <div>
          <div className="eyebrow">
            <span className="text-acid">04</span> / Open source
          </div>
          <div className="mt-4 text-[clamp(4rem,9vw,7rem)] leading-none font-medium tracking-[-0.05em] text-acid">
            {TOTAL_PRS}
          </div>
          <p className="mt-2 max-w-[22ch] leading-[1.5] text-bone-dim">
            pull requests merged into other people&apos;s repositories. Small
            fixes mostly — docs, edge cases, the quiet upkeep that keeps a
            project usable.
          </p>
          <a
            href="https://gist.github.com/mohanadft/04fedcf4f229dacffdde52cc475a9f5f"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block border-b border-rule pb-0.5 font-mono text-xs transition-colors duration-200 hover:border-acid"
          >
            Full history ↗
          </a>
        </div>

        <div>
          <div
            className={`${TABLE_ROW} eyebrow border-b border-rule pb-3`}
          >
            <span>Project</span>
            <span>Repository</span>
            <span>Merged</span>
          </div>
          {CONTRIBUTIONS.map((contribution) => (
            <div
              key={contribution.repo}
              className={`${TABLE_ROW} border-b border-rule py-4`}
            >
              <span className="text-[0.9375rem]">{contribution.project}</span>
              <span className="font-mono text-[0.8125rem] [overflow-wrap:anywhere] text-muted">
                {contribution.repo}
              </span>
              <span className="flex flex-wrap justify-end gap-3 font-mono text-[0.8125rem]">
                {contribution.prs.map((pr) => (
                  <a
                    key={pr}
                    href={`https://github.com/${contribution.repo}/pull/${pr}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-[2px] border border-rule px-[0.4rem] py-[0.1rem] text-bone transition-colors duration-200 hover:border-acid hover:bg-acid/10 hover:text-acid"
                  >
                    #{pr} ↗
                  </a>
                ))}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
