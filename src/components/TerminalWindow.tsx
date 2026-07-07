interface TerminalWindowProps {
  title: string;
  dimmed?: boolean;
  bodyClassName?: string;
  children: React.ReactNode;
}

export default function TerminalWindow({
  title,
  dimmed = false,
  bodyClassName = "",
  children,
}: TerminalWindowProps) {
  const borderClass = dimmed ? "border-border-subtle" : "border-border";

  return (
    <>
      <div
        className={`bg-tertiary/80 border rounded-t-lg px-4 py-2.5 flex items-center gap-2 transition-colors duration-500 ${borderClass}`}
      >
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green/80" />
        </div>
        <span className="text-text-muted text-xs ml-2 font-mono tracking-wide">
          {title}
        </span>
      </div>
      <div
        className={`bg-secondary border-x border-b rounded-b-lg font-mono transition-colors duration-500 ${borderClass} ${bodyClassName}`}
      >
        {children}
      </div>
    </>
  );
}
