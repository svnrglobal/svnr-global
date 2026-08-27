interface SecondaryMetric {
  label: string;
  value: string;
}

interface ResultsReadoutProps {
  metricLabel: string;
  metric: string;
  metricSuffix: string;
  bars: number[];
  barsLabel: string;
  secondary: SecondaryMetric[];
}

export default function ResultsReadout({
  metricLabel,
  metric,
  metricSuffix,
  bars,
  barsLabel,
  secondary,
}: ResultsReadoutProps) {
  const maxBar = Math.max(...bars);
  const highlightFrom = bars.length - 3;

  return (
    <div className="p-5" style={{ fontFamily: "var(--font-mono)" }}>
      {/* Big metric */}
      <div className="mb-5 pb-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <p className="text-[9px] uppercase tracking-widest text-white/25 mb-2">{metricLabel}</p>
        <div className="flex items-end gap-3">
          <span className="text-[2.5rem] font-semibold text-white leading-none tracking-tighter stat-number">
            {metric}
          </span>
          <span className="text-[10px] text-white/30 mb-1 uppercase tracking-widest">{metricSuffix}</span>
        </div>
      </div>
      {/* Mini bar chart */}
      <p className="text-[9px] uppercase tracking-widest text-white/20 mb-3">{barsLabel}</p>
      <div className="flex items-end gap-1.5 h-12 mb-5">
        {bars.map((v, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm"
            style={{
              height: `${(v / maxBar) * 100}%`,
              background: i >= highlightFrom ? "rgba(255,255,255,0.45)" : "rgba(255,255,255,0.12)",
            }}
          />
        ))}
      </div>
      {/* Secondary metrics row */}
      <div
        className="grid gap-3 pt-3"
        style={{
          gridTemplateColumns: `repeat(${secondary.length}, minmax(0, 1fr))`,
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {secondary.map((m) => (
          <div key={m.label}>
            <p className="text-[8px] uppercase tracking-widest text-white/20 mb-1">{m.label}</p>
            <p className="text-[13px] font-medium text-white/70 stat-number">{m.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
