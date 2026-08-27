interface MessageThreadProps {
  to: string;
  loc: string;
  subject: string;
  body: string[];
  touches: string[];
  status: string;
}

export default function MessageThread({ to, loc, subject, body, touches, status }: MessageThreadProps) {
  return (
    <div className="p-4" style={{ fontFamily: "var(--font-mono)" }}>
      {/* Header */}
      <div className="mb-3 pb-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="flex items-center justify-between mb-1">
          <span className="text-[9px] uppercase tracking-[0.08em] text-white/25">To</span>
          <span
            className="text-[8px] uppercase tracking-[0.08em] px-1.5 py-0.5 rounded"
            style={{
              background: "rgba(255,255,255,0.10)",
              color: "rgba(255,255,255,0.75)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {status}
          </span>
        </div>
        <p className="text-[11px] text-white/70">
          {to}{" "}
          <span className="text-white/30">· {loc}</span>
        </p>
      </div>

      {/* Subject */}
      <div className="mb-3 pb-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <span className="text-[9px] uppercase tracking-[0.08em] text-white/25 block mb-1">Subject</span>
        <p className="text-[10px] text-white/60">{subject}</p>
      </div>

      {/* Body */}
      <div className="mb-4 flex flex-col gap-1.5">
        {body.map((line, i) => (
          <p key={i} className="text-[10px] text-white/40 leading-relaxed">
            {line}
          </p>
        ))}
      </div>

      {/* Sequence touches */}
      <div
        className="pt-3 flex flex-wrap gap-2"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        {touches.map((touch, i) => (
          <span
            key={i}
            className="text-[8px] uppercase tracking-[0.06em] px-2 py-1 rounded"
            style={{
              background: i === 0 ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.03)",
              color: i === 0 ? "rgba(255,255,255,0.50)" : "rgba(255,255,255,0.25)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            {touch}
          </span>
        ))}
      </div>
    </div>
  );
}
