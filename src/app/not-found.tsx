import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col justify-center px-[6vw] py-28">
      <div className="eyebrow border-b border-rule pb-[0.9rem]">
        <span className="text-acid">404</span> / Not found
      </div>

      <h1 className="mt-12 text-[clamp(3.5rem,11.5vw,10rem)] leading-[0.84] font-medium tracking-[-0.045em]">
        Not
        <br />
        here<span className="text-acid">.</span>
      </h1>

      <p className="mt-12 max-w-[46ch] text-[clamp(1.0625rem,1.6vw,1.375rem)] leading-[1.45] text-pretty text-bone-dim">
        The page you&apos;re looking for doesn&apos;t exist — moved, renamed, or
        never written in the first place.
      </p>

      <div className="mt-12 border-t border-rule pt-4">
        <Link
          href="/"
          className="border-b border-acid pb-[3px] font-mono text-xs tracking-[0.08em] uppercase transition-colors duration-200"
        >
          ← Back home
        </Link>
      </div>
    </main>
  );
}
