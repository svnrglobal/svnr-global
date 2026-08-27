import type { ReactNode } from "react";

interface BrowserFrameProps {
  title?: string;
  url?: string;
  className?: string;
  children: ReactNode;
}

/**
 * BrowserFrame — minimal hairline window frame wrapping arbitrary children.
 * Vercel-style: near-black surface, thin top chrome, monochrome, no shadows.
 */
export default function BrowserFrame({ title, url, className = "", children }: BrowserFrameProps) {
  return (
    <div
      className={`rounded-xl border border-white/10 overflow-hidden flex flex-col ${className}`}
      style={{ background: "#0c0c0d", boxShadow: "0 2px 24px rgba(0,0,0,0.45), 0 1px 2px rgba(0,0,0,0.25)" }}
      role="img"
      aria-label={title ?? url ?? "Product preview"}
    >
      {/* Top chrome */}
      <div
        className="flex items-center gap-2 px-3 flex-shrink-0"
        style={{
          height: 36,
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          background: "rgba(255,255,255,0.025)",
        }}
      >
        {/* Traffic-light dots */}
        <span className="flex items-center gap-[5px]" aria-hidden="true">
          <span className="block w-2 h-2 rounded-full" style={{ background: "rgba(255,255,255,0.15)" }} />
          <span className="block w-2 h-2 rounded-full" style={{ background: "rgba(255,255,255,0.15)" }} />
          <span className="block w-2 h-2 rounded-full" style={{ background: "rgba(255,255,255,0.15)" }} />
        </span>

        {/* URL pill or title — centered */}
        {(url ?? title) && (
          <div className="flex-1 flex justify-center">
            <span
              className="px-3 py-0.5 rounded-md text-[10px] leading-none"
              style={{
                fontFamily: "var(--font-mono)",
                color: "rgba(255,255,255,0.35)",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.07)",
                letterSpacing: "0.02em",
                maxWidth: 220,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {url ?? title}
            </span>
          </div>
        )}

        {/* Balance spacer (same width as dots block) so pill stays centred */}
        <span className="flex items-center gap-[5px]" aria-hidden="true" style={{ visibility: "hidden" }}>
          <span className="block w-2 h-2 rounded-full" />
          <span className="block w-2 h-2 rounded-full" />
          <span className="block w-2 h-2 rounded-full" />
        </span>
      </div>

      {/* Body — content defines the height */}
      <div className="relative overflow-hidden flex-1">
        {children}
      </div>
    </div>
  );
}
