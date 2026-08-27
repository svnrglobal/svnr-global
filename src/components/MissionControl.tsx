import { motion } from "motion/react";
import BrowserFrame from "./BrowserFrame";
import Counter from "./Counter";

const EASE = [0.16, 1, 0.3, 1] as const;

const FUNNEL_ROWS = [
  { label: "Sourced", value: "3,120", dim: true },
  { label: "Contacted", value: "1,840", dim: true },
  { label: "Replied", value: "412", dim: true },
  { label: "Qualified", value: "188", dim: true },
  { label: "Booked", value: "96", dim: false },
];

// 12-week bar heights (relative, last 3 are highlighted)
const BAR_HEIGHTS = [38, 44, 31, 52, 47, 55, 42, 58, 60, 72, 85, 94];
const MAX_BAR = Math.max(...BAR_HEIGHTS);
const HIGHLIGHT_FROM = BAR_HEIGHTS.length - 3;

export default function MissionControl() {
  return (
    <section className="relative z-10 bg-[#0A0A0B] py-20 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: EASE }}
        >
          <p className="eyebrow text-white/40 mb-4">Mission Control</p>
          <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tightest leading-[1.08] mb-4 max-w-3xl">
            See every conversation from first signal to signed.
          </h2>
          <p className="text-white/50 text-sm md:text-base leading-relaxed max-w-2xl mb-12">
            One live view of the entire acquisition engine — who's been sourced, who's replied,
            and who's about to close — updating around the clock.
          </p>
        </motion.div>

        {/* Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: EASE, delay: 0.12 }}
        >
          <BrowserFrame url="svnr.app/control" className="w-full">
            <div style={{ fontFamily: "var(--font-mono)" }}>

              {/* ── Stat strip ── */}
              <div
                className="grid grid-cols-2 md:grid-cols-4"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
              >
                {/* KPI 1 */}
                <div
                  className="p-4 md:p-5"
                  style={{ borderRight: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <p className="text-[9px] uppercase tracking-widest text-white/25 mb-2">
                    Qualified leads · QTR
                  </p>
                  <p className="text-[1.6rem] font-semibold text-white leading-none tabular-nums">
                    <Counter value="1,284" />
                  </p>
                </div>

                {/* KPI 2 */}
                <div
                  className="p-4 md:p-5"
                  style={{ borderRight: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <p className="text-[9px] uppercase tracking-widest text-white/25 mb-2">
                    Meetings booked
                  </p>
                  <p className="text-[1.6rem] font-semibold text-white leading-none tabular-nums">
                    <Counter value="96" />
                  </p>
                </div>

                {/* KPI 3 — "14m" contains a number so Counter parses "14" + suffix "m" */}
                <div
                  className="p-4 md:p-5"
                  style={{ borderRight: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <p className="text-[9px] uppercase tracking-widest text-white/25 mb-2">
                    Avg. reply time
                  </p>
                  <p className="text-[1.6rem] font-semibold text-white leading-none tabular-nums">
                    <Counter value="14m" />
                  </p>
                </div>

                {/* KPI 4 — "$42M": Counter parses "$" prefix + "42" + "M" suffix */}
                <div className="p-4 md:p-5">
                  <p className="text-[9px] uppercase tracking-widest text-white/25 mb-2">
                    Pipeline value
                  </p>
                  <p className="text-[1.6rem] font-semibold text-white leading-none tabular-nums">
                    <Counter value="$42M" />
                  </p>
                </div>
              </div>

              {/* ── Alert card ── */}
              <div
                className="px-4 md:px-5 py-3"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.14)",
                  }}
                >
                  {/* Live dot (static glow, no animation) */}
                  <span
                    className="block w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{
                      background: "rgba(255,255,255,0.5)",
                      boxShadow: "0 0 6px rgba(255,255,255,0.4)",
                    }}
                  />
                  <span className="text-[10px] text-white/65 flex-1 truncate">
                    Hot reply — Managing Partner · Aldgate Capital
                  </span>
                  <span className="text-[9px] text-white/30 tabular-nums flex-shrink-0 mr-2">
                    10:42
                  </span>
                  {/* BOOKED pill */}
                  <span
                    className="text-[8px] uppercase tracking-widest px-2 py-0.5 rounded-md flex-shrink-0"
                    style={{
                      background: "rgba(255,255,255,0.10)",
                      color: "rgba(255,255,255,0.75)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    Booked
                  </span>
                </div>
              </div>

              {/* ── Trend + Funnel row ── */}
              <div className="grid grid-cols-1 md:grid-cols-3">

                {/* Trend (left ~2/3) */}
                <div
                  className="p-4 md:p-5 md:col-span-2"
                  style={{ borderRight: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <p className="text-[9px] uppercase tracking-widest text-white/25 mb-3">
                    Qualified conversations · 12 wks
                  </p>

                  <div className="relative flex items-end gap-1.5 h-16">
                    {BAR_HEIGHTS.map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm"
                        style={{
                          height: `${(h / MAX_BAR) * 100}%`,
                          background:
                            i >= HIGHLIGHT_FROM
                              ? "rgba(255,255,255,0.45)"
                              : "rgba(255,255,255,0.12)",
                        }}
                      />
                    ))}

                    {/* CLOSING badge near tallest recent bar (last bar = index 11) */}
                    <span
                      className="absolute bottom-full mb-1.5 right-0 text-[8px] uppercase tracking-widest px-2 py-0.5 rounded-md"
                      style={{
                        background: "rgba(255,255,255,0.10)",
                        color: "rgba(255,255,255,0.75)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      Closing
                    </span>
                  </div>
                </div>

                {/* Funnel (right ~1/3) */}
                <div className="p-4 md:p-5">
                  <p className="text-[9px] uppercase tracking-widest text-white/25 mb-3">
                    Funnel
                  </p>
                  <div className="flex flex-col">
                    {FUNNEL_ROWS.map((row, i) => (
                      <div
                        key={row.label}
                        className="flex items-center justify-between py-1.5"
                        style={{
                          borderTop: i === 0 ? "none" : "1px solid rgba(255,255,255,0.06)",
                        }}
                      >
                        <span
                          className="text-[9px] uppercase tracking-widest"
                          style={{
                            color: row.dim
                              ? "rgba(255,255,255,0.30)"
                              : "rgba(255,255,255,0.70)",
                          }}
                        >
                          {row.label}
                        </span>
                        <span
                          className="text-[11px] tabular-nums font-medium"
                          style={{
                            color: row.dim
                              ? "rgba(255,255,255,0.35)"
                              : "rgba(255,255,255,0.80)",
                          }}
                        >
                          {row.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </BrowserFrame>
        </motion.div>
      </div>
    </section>
  );
}
