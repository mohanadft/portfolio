interface Job {
  company: string;
  role: string;
  year: string;
  months: string;
  current: boolean;
  highlights: string[];
}

const JOBS: readonly Job[] = [
  {
    company: "Tech for Palestine",
    role: "Software Engineer",
    year: "2025",
    months: "Sep — present",
    current: true,
    highlights: [
      "Built and launched an A/B testing framework across key conversion pages, integrating Plausible Analytics to surface donor behavior signals. Enabled data-driven product decisions that improved conversion rates by ~15%.",
      "Led open-source code review and maintenance: triaged 50+ issues, reviewed community PRs, and enforced code quality standards across the repository.",
      "Architected a CI security scanning pipeline and led 6 rounds of security hardening: patched 12+ medium/high-severity dependency vulnerabilities, fixed a Cloudflare CSP nonce bypass, and enforced constant-time secret comparison on all webhook endpoints.",
      "Integrated Sentry error monitoring across server-side API routes and webhooks; debugged silent analytics event drops by tracing a Cloudflare Worker lifecycle issue, recovering ~20% of previously lost donation tracking events.",
    ],
  },
  {
    company: "Yaffa Solutions",
    role: "Full Stack Software Engineer",
    year: "2025",
    months: "Jan — Sep",
    current: false,
    highlights: [
      "Engineered and tuned AWS Lambda functions and custom API Gateway Authorizers for a production serverless microservices architecture, cutting cold-start latency by ~40% and increasing request throughput.",
      "Drove test coverage with unit and integration tests using Vitest, raising code coverage from ~30% to 75%+ and intercepting regressions before every production deployment.",
      "Authored a Docker-based SQL Server setup guide in the first week that became the standard onboarding reference, cutting new developer environment setup from 2+ days to under an hour.",
    ],
  },
  {
    company: "TAP",
    role: "Backend Web Developer (Trainee)",
    year: "2023",
    months: "May — Sep",
    current: false,
    highlights: [
      "Engineered a production-ready e-commerce REST API with Node.js, Express.js, and TypeScript; designed the database schema (normalized to 3NF), implemented and tested all endpoints.",
      "Partnered with frontend developers to define API contracts and integration, delivering working features on a weekly sprint cadence.",
    ],
  },
];

export default function Work() {
  return (
    <section
      id="work"
      className="border-t border-rule bg-ink-deep px-[6vw] py-28"
    >
      <div className="eyebrow mb-14 flex items-baseline justify-between">
        <span>
          <span className="text-acid">02</span> / Work
        </span>
        <span>2023 — present</span>
      </div>

      {JOBS.map((job) => (
        <div
          key={`${job.company}-${job.months}`}
          className="grid grid-cols-1 items-start gap-6 border-t border-rule py-10 md:grid-cols-[10rem_1fr] md:gap-12"
        >
          <div>
            <div
              className={`text-[clamp(2.5rem,4vw,3.5rem)] leading-[0.9] font-medium tracking-[-0.05em] ${
                job.current ? "text-acid" : "text-bone-dim"
              }`}
            >
              {job.year}
            </div>
            <div className="eyebrow mt-[0.6rem] tracking-[0.1em]">
              {job.months}
            </div>
          </div>

          <div>
            <div className="flex flex-wrap items-baseline gap-4">
              <h3 className="text-[clamp(1.5rem,2.6vw,2.125rem)] leading-[1.1] font-medium tracking-[-0.025em]">
                {job.company}
              </h3>
              <span className="font-mono text-[0.8125rem] text-muted">
                {job.role}
              </span>
            </div>
            <div className="mt-6 flex max-w-[70ch] flex-col">
              {job.highlights.map((highlight) => (
                <p
                  key={highlight}
                  className="border-t border-rule py-[0.85rem] leading-[1.6] text-pretty text-bone-dim"
                >
                  {highlight}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
