interface StackGroup {
  category: string;
  core: string[];
  items: string[];
}

const STACK: readonly StackGroup[] = [
  { category: "Languages", core: ["TypeScript", "Rust"], items: ["JavaScript", "SQL"] },
  {
    category: "Frameworks",
    core: ["Node.js", "NestJS"],
    items: ["Express.js", "Next.js", "Astro.js", "React"],
  },
  { category: "Databases", core: ["PostgreSQL", "Redis"], items: ["MongoDB", "MySQL"] },
  {
    category: "Infrastructure",
    core: ["AWS Lambda", "Kubernetes"],
    items: ["EC2", "Cloudflare", "Docker", "GitHub Actions"],
  },
  {
    category: "Architecture",
    core: ["Serverless", "Microservices"],
    items: ["REST", "GraphQL", "RabbitMQ", "BullMQ"],
  },
];

const ROW = "grid grid-cols-1 gap-6 border-t border-rule py-[0.85rem] sm:grid-cols-[10rem_1fr] sm:items-baseline";
const ROW_LABEL = "eyebrow";
const LINK = "border-b border-rule pb-0.5 transition-colors duration-200 hover:border-acid";

export default function About() {
  return (
    <section id="about" className="border-t border-rule px-[6vw] py-28">
      <div className="grid max-w-[84rem] grid-cols-1 items-start gap-12 lg:grid-cols-[19rem_1fr] lg:gap-[4.5rem]">
        <div className="lg:sticky lg:top-16">
          <div className="eyebrow border-b border-rule pb-[0.9rem]">
            <span className="text-acid">01</span> / About
          </div>
          <p className="mt-6 font-mono text-[0.8125rem] leading-[1.7] text-bone-dim">
            Software engineer, backend-focused.
            <br />
            Three years, mostly Node and TypeScript.
            <br />
            Currently at Tech for Palestine.
          </p>
        </div>

        <div>
          <p className="mb-6 max-w-[58ch] text-[clamp(1.125rem,1.5vw,1.375rem)] leading-[1.5] text-pretty">
            I got into backend work because a request either returns 200 or it
            doesn&apos;t. The feedback is honest, and I liked that.
          </p>
          <p className="mb-6 max-w-[62ch] leading-[1.65] text-pretty text-bone-dim">
            Three years in, most of the job turns out to be making services
            boring: adding tests to code that had none, dragging a Lambda&apos;s
            cold start down from painful to fine, writing the setup doc so the
            answer is there before anyone has to ask. At Yaffa Solutions I built
            serverless microservices on AWS. At Tech for Palestine I spend as
            much time reviewing other people&apos;s code and closing security
            holes as writing my own.
          </p>
          <p className="mb-12 max-w-[62ch] leading-[1.65] text-pretty text-bone-dim">
            I&apos;d rather ship something a stranger can maintain than something
            clever.
          </p>

          <div className="flex flex-col">
            {STACK.map((group) => (
              <div key={group.category} className={ROW}>
                <span className={ROW_LABEL}>{group.category}</span>
                <span className="text-[0.9375rem]">
                  <span className="text-bone">{group.core.join(" · ")}</span>
                  <span className="text-muted"> · {group.items.join(" · ")}</span>
                </span>
              </div>
            ))}
            <div className={`${ROW} border-b`}>
              <span className={ROW_LABEL}>Studied</span>
              <span className="text-[0.9375rem]">
                B.Sc. Computer Systems Engineering, Al Azhar University Gaza{" "}
                <span className="text-muted">· 2020–2025 · </span>
                <span className="text-acid">89.1/100</span>
              </span>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-8 font-mono text-xs">
            <a
              href="https://leetcode.com/mohanadft"
              target="_blank"
              rel="noopener noreferrer"
              className={LINK}
            >
              250+ LeetCode problems
            </a>
            <a
              href="https://drive.google.com/file/d/1Xe7JDoQkZLLvBuU7qW7Ql9NbMgWmsFR8/view"
              target="_blank"
              rel="noopener noreferrer"
              className={LINK}
            >
              IEEExtreme 2022
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
