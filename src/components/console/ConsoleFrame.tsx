import type { ReactNode } from "react";

interface ConsoleFrameProps {
  label: string;
  badge?: string;
  children: ReactNode;
  className?: string;
}

// Chrome wrapping every product replica. A display surface, not a control —
// no hover state, no interactivity. Matches BrowserFrame's language at a
// smaller, denser scale suited to sitting inside a feature block.
export default function ConsoleFrame({ label, badge, children, className = "" }: ConsoleFrameProps) {
  return (
    <div className={`rounded-xl border border-white/[0.08] bg-white/[0.02] overflow-hidden ${className}`}>
      <div className="h-9 border-b border-white/[0.06] px-3.5 flex items-center justify-between">
        <div className="flex items-center gap-2.5 min-w-0">
          <span className="flex items-center gap-[5px] shrink-0" aria-hidden="true">
            <span className="block w-[7px] h-[7px] rounded-full bg-white/[0.10]" />
            <span className="block w-[7px] h-[7px] rounded-full bg-white/[0.10]" />
            <span className="block w-[7px] h-[7px] rounded-full bg-white/[0.10]" />
          </span>
          <span
            className="text-[10px] text-white/35 truncate"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {label}
          </span>
        </div>
        {badge && (
          <span
            className="text-[9px] tracking-widest text-white/30 border border-white/[0.08] rounded px-1.5 py-0.5 shrink-0 ml-2"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {badge}
          </span>
        )}
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}
