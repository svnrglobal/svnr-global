interface FeedLine {
  time: string;
  event: string;
  detail: string;
  dim?: boolean;
}

interface ActivityFeedProps {
  lines: FeedLine[];
  footer: string;
}

export default function ActivityFeed({ lines, footer }: ActivityFeedProps) {
  return (
    <div className="p-4" style={{ fontFamily: "var(--font-mono)" }}>
      {/* Live indicator */}
      <div className="flex items-center gap-2 mb-4">
        <span
          className="block w-1.5 h-1.5 rounded-full"
          style={{ background: "rgba(255,255,255,0.5)", boxShadow: "0 0 6px rgba(255,255,255,0.4)" }}
        />
        <span className="text-[9px] uppercase tracking-widest text-white/30">Agent · Live</span>
      </div>
      {/* Feed lines */}
      {lines.map((line, i) => (
        <div
          key={i}
          className="flex items-start gap-3 py-2"
          style={{
            borderBottom: "1px solid rgba(255,255,255,0.04)",
            opacity: line.dim ? 0.35 : 1 - i * 0.06,
          }}
        >
          <span className="text-[9px] text-white/25 tabular-nums flex-shrink-0 pt-px">{line.time}</span>
          <div className="flex-1 min-w-0">
            <span className="text-[10px] text-white/65 block truncate">{line.event}</span>
            <span className="text-[9px] text-white/25 block truncate">{line.detail}</span>
          </div>
        </div>
      ))}
      <div
        className="mt-3 pt-3 flex items-center gap-2"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <span className="text-[9px] text-white/20 uppercase tracking-widest">{footer}</span>
      </div>
    </div>
  );
}
