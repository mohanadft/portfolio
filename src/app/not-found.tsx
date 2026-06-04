import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-primary px-6">
      <div className="max-w-xl w-full font-mono">
        <div className="bg-tertiary/80 border border-border rounded-t-lg px-4 py-2.5 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green/80" />
          </div>
          <span className="text-text-muted text-xs ml-2 tracking-wide">
            bash
          </span>
        </div>

        <div className="bg-secondary border-x border-b border-border rounded-b-lg p-6 md:p-8 text-sm space-y-4">
          <div>
            <span className="text-text-muted">$</span>{" "}
            <span className="text-green">cd ~/page</span>
          </div>

          <div className="text-red">
            bash: cd: ~/page: No such file or directory
          </div>

          <div>
            <span className="text-text-muted">$</span>{" "}
            <span className="text-green">echo $?</span>
          </div>

          <div className="text-text-primary text-4xl font-bold tracking-tight">
            404
          </div>

          <div className="text-text-secondary text-sm">
            The page you&apos;re looking for doesn&apos;t exist.
          </div>

          <div className="pt-2">
            <span className="text-text-muted">$</span>{" "}
            <Link
              href="/"
              className="text-blue hover:text-cyan transition-colors link-hover"
            >
              cd ~/
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
