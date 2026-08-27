interface PipelineRow {
  name: string;
  loc: string;
  col: number;
  status: string;
}

interface PipelineBoardProps {
  rows: PipelineRow[];
  footerLeft: string;
  footerRight: string;
}

export default function PipelineBoard({ rows, footerLeft, footerRight }: PipelineBoardProps) {
  return (
    <div className="p-4" style={{ fontFamily: "var(--font-mono)" }}>
      {/* Column headers */}
      <div className="grid grid-cols-4 gap-2 mb-3">
        {["Researched", "Contacted", "Replied", "Qualified"].map((col) => (
          <div
            key={col}
            className="text-[9px] uppercase tracking-[0.1em] text-white/25 pb-2"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
          >
            {col}
          </div>
        ))}
      </div>
      {/* Pipeline rows */}
      {rows.map((row, i) => (
        <div
          key={row.name}
          className="grid grid-cols-4 gap-2 py-2 items-center"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.04)", opacity: 1 - i * 0.08 }}
        >
          {[0, 1, 2, 3].map((colIdx) => (
            <div key={colIdx} className="flex items-center justify-start">
              {colIdx === 0 && (
                <span className="text-[10px] text-white/60 truncate">{row.name}</span>
              )}
              {colIdx === row.col && colIdx !== 0 && (
                <span
                  className="text-[8px] uppercase tracking-[0.08em] px-1.5 py-0.5 rounded"
                  style={{
                    background:
                      row.status === "HOT" || row.status === "MEET"
                        ? "rgba(255,255,255,0.10)"
                        : "rgba(255,255,255,0.05)",
                    color:
                      row.status === "HOT" || row.status === "MEET"
                        ? "rgba(255,255,255,0.75)"
                        : "rgba(255,255,255,0.35)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  {row.status}
                </span>
              )}
            </div>
          ))}
        </div>
      ))}
      {/* Footer stat */}
      <div
        className="mt-4 pt-3 flex items-center justify-between"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <span className="text-[9px] text-white/20 uppercase tracking-widest">{footerLeft}</span>
        <span className="text-[9px] text-white/20 uppercase tracking-widest">{footerRight}</span>
      </div>
    </div>
  );
}
