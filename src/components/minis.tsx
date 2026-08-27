import { motion } from "motion/react";

// Sector mini-demos: each renders the mechanism a sector actually gets, not
// decoration. `lit` drives entry — hover, or the idle-mischief replay. All are
// absolutely positioned inside a relative card and are pointer-transparent, so
// the card itself stays the link.
//
// Shared by the Home bento and the eight sector detail pages.

export function PipelineMini({ lit }: { lit: boolean }) {
  const rows = [
    { name: "Atelier Renz", loc: "Zürich", badge: "OUT", cls: "text-white/35 border-white/10" },
    { name: "Maison Libert", loc: "Paris", badge: "REPLY", cls: "text-sky-400/60 border-sky-400/20" },
    { name: "De Vries Int.", loc: "Amsterdam", badge: "HOT", cls: "text-emerald-400/70 border-emerald-400/25" },
  ];
  return (
    <div className="absolute inset-x-6 top-14 flex flex-col gap-1.5 pointer-events-none">
      {rows.map((r, i) => (
        <motion.div
          key={r.name}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: lit ? 1 : 0, x: lit ? 0 : -8 }}
          transition={{ duration: 0.32, delay: lit ? i * 0.1 : 0, ease: "easeOut" }}
          className="flex items-center justify-between rounded-lg border border-white/[0.07] bg-white/[0.03] px-3 py-1.5"
        >
          <div className="flex items-center gap-1.5 min-w-0">
            <span className="text-[11px] text-white/65 font-medium truncate" style={{ fontFamily: "var(--font-mono)" }}>{r.name}</span>
            <span className="text-[10px] text-white/25 shrink-0">{r.loc}</span>
          </div>
          <span className={`text-[8px] tracking-widest border rounded px-1.5 py-0.5 shrink-0 ml-2 ${r.cls}`} style={{ fontFamily: "var(--font-mono)" }}>{r.badge}</span>
        </motion.div>
      ))}
    </div>
  );
}

export function ReplyMini({ lit }: { lit: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: lit ? 1 : 0, y: lit ? 0 : -10 }}
      transition={{ duration: 0.38, ease: "easeOut" }}
      className="absolute inset-x-6 top-14 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 pointer-events-none"
    >
      <div className="flex items-center gap-2 mb-1.5">
        <motion.span
          animate={lit ? { opacity: [1, 0.25, 1] } : { opacity: 0 }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
          className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"
        />
        <span className="text-[10px] text-white/40 tracking-widest" style={{ fontFamily: "var(--font-mono)" }}>REPLY RECEIVED</span>
      </div>
      <p className="text-[13px] text-white/75 font-medium">Thomas Vandermeer</p>
      <p className="text-[10px] text-white/30 mt-0.5" style={{ fontFamily: "var(--font-mono)" }}>Principal · Brussels · 14 min</p>
    </motion.div>
  );
}

export function FillBarMini({ lit }: { lit: boolean }) {
  return (
    <div className="absolute inset-x-6 top-14 pointer-events-none">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: lit ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="text-[9px] tracking-widest text-white/30 mb-2.5"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        DEAL FLOW CAPTURED PRE-MARKET
      </motion.p>
      <div className="h-1 rounded-full bg-white/[0.06] overflow-hidden">
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: lit ? "75%" : "0%" }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="h-full rounded-full bg-white/45"
        />
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: lit ? 1 : 0 }}
        transition={{ duration: 0.3, delay: 0.65 }}
        className="text-[28px] font-semibold text-white/75 mt-2.5 tabular-nums leading-none"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        75%
      </motion.p>
    </div>
  );
}

export function SparklineMini({ lit }: { lit: boolean }) {
  return (
    <div className="absolute inset-x-6 top-13 pointer-events-none">
      <svg width="140" height="52" viewBox="0 0 140 52" fill="none" className="overflow-visible mb-1">
        <motion.path
          d="M 0 48 L 24 42 L 48 34 L 72 24 L 96 14 L 120 5 L 140 2"
          stroke="rgba(255,255,255,0.28)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: lit ? 1 : 0, opacity: lit ? 1 : 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
        <motion.circle
          cx="140" cy="2" r="2.5"
          fill="white"
          fillOpacity={0.7}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: lit ? 1 : 0, scale: lit ? 1 : 0 }}
          transition={{ duration: 0.2, delay: 0.65 }}
        />
      </svg>
      <motion.p
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: lit ? 1 : 0, y: lit ? 0 : 4 }}
        transition={{ duration: 0.3, delay: 0.6 }}
        className="text-[26px] font-semibold text-white/75 tabular-nums leading-none"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        +78%
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: lit ? 1 : 0 }}
        transition={{ delay: 0.7 }}
        className="text-[9px] text-white/28 tracking-widest mt-1"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        QUALIFIED TRADE ENQUIRIES
      </motion.p>
    </div>
  );
}

export function ProfileStackMini({ lit }: { lit: boolean }) {
  const profiles = [
    "R. Hoffman · Geneva · CHF 120M",
    "T. Al-Rashid · Dubai · $80M",
    "K. Schreiber · Frankfurt · €95M",
    "M. Dupont · Paris · €60M",
    "A. Vandermeer · Zürich · CHF 200M",
  ];
  return (
    <div className="absolute inset-x-6 top-14 pointer-events-none">
      <div className="flex flex-col gap-1">
        {profiles.map((p, i) => (
          <motion.div
            key={p}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: lit ? 1 : 0, x: lit ? 0 : -6 }}
            transition={{ duration: 0.28, delay: lit ? i * 0.07 : 0, ease: "easeOut" }}
            className="text-[10px] text-white/40 border-b border-white/[0.05] pb-1 last:border-0"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {p}
          </motion.div>
        ))}
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: lit ? 1 : 0 }}
        transition={{ delay: 0.55 }}
        className="text-[22px] font-semibold text-white/70 mt-2 tabular-nums leading-none"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        500 →
      </motion.p>
    </div>
  );
}

export function BarCompareMini({ lit }: { lit: boolean }) {
  return (
    <div className="absolute inset-x-6 top-14 flex items-end gap-5 pointer-events-none">
      <div className="flex flex-col items-center gap-1.5">
        <div className="w-8 h-12 rounded bg-white/[0.05] flex items-end overflow-hidden">
          <motion.div
            className="w-full bg-white/20 rounded-t"
            initial={{ height: 0 }}
            animate={{ height: lit ? "28%" : "0%" }}
            transition={{ duration: 0.45, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
        <motion.span
          className="text-[9px] text-white/25 tracking-widest"
          style={{ fontFamily: "var(--font-mono)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: lit ? 1 : 0 }}
          transition={{ delay: 0.45 }}
        >
          BEFORE
        </motion.span>
      </div>
      <div className="flex flex-col items-center gap-1.5">
        <motion.span
          className="text-[20px] font-semibold text-white/75 tabular-nums leading-none mb-1"
          style={{ fontFamily: "var(--font-mono)" }}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: lit ? 1 : 0, y: lit ? 0 : 4 }}
          transition={{ delay: 0.6 }}
        >
          ×3.1
        </motion.span>
        <div className="w-8 h-12 rounded bg-white/[0.05] flex items-end overflow-hidden">
          <motion.div
            className="w-full bg-white/50 rounded-t"
            initial={{ height: 0 }}
            animate={{ height: lit ? "92%" : "0%" }}
            transition={{ duration: 0.55, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
        <motion.span
          className="text-[9px] text-white/25 tracking-widest"
          style={{ fontFamily: "var(--font-mono)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: lit ? 1 : 0 }}
          transition={{ delay: 0.5 }}
        >
          AFTER
        </motion.span>
      </div>
    </div>
  );
}

export function ConnectionMini({ lit }: { lit: boolean }) {
  const ports = [{ x: 22, y: 28, label: "DXB" }, { x: 88, y: 12, label: "HKG" }, { x: 58, y: 48, label: "AMS" }, { x: 118, y: 36, label: "SGP" }];
  const lines = [{ x1: 22, y1: 28, x2: 88, y2: 12 }, { x1: 88, y1: 12, x2: 118, y2: 36 }, { x1: 22, y1: 28, x2: 58, y2: 48 }, { x1: 58, y1: 48, x2: 118, y2: 36 }];
  return (
    <div className="absolute inset-x-6 top-14 pointer-events-none">
      <svg width="140" height="68" viewBox="0 0 140 68" fill="none" className="overflow-visible">
        {lines.map((l, i) => (
          <motion.path
            key={i}
            d={`M ${l.x1} ${l.y1} L ${l.x2} ${l.y2}`}
            stroke="rgba(255,255,255,0.16)"
            strokeWidth="1"
            strokeDasharray="3 4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: lit ? 1 : 0, opacity: lit ? 1 : 0 }}
            transition={{ duration: 0.38, delay: lit ? i * 0.11 : 0, ease: "easeOut" }}
          />
        ))}
        {ports.map((p, i) => (
          <g key={p.label}>
            <motion.circle
              cx={p.x} cy={p.y} r={3}
              fill="rgba(255,255,255,0.55)"
              initial={{ opacity: 0 }}
              animate={{ opacity: lit ? 1 : 0 }}
              transition={{ duration: 0.2, delay: lit ? i * 0.08 : 0 }}
            />
            <motion.text
              x={p.x} y={p.y - 7}
              textAnchor="middle"
              fontSize="8"
              fill="rgba(255,255,255,0.28)"
              fontFamily="var(--font-mono)"
              initial={{ opacity: 0 }}
              animate={{ opacity: lit ? 1 : 0 }}
              transition={{ duration: 0.25, delay: lit ? 0.38 + i * 0.06 : 0 }}
            >
              {p.label}
            </motion.text>
          </g>
        ))}
      </svg>
    </div>
  );
}

export function MandateMini({ lit }: { lit: boolean }) {
  const mandates = [
    { firm: "Lexis Partners", type: "Law firm" },
    { firm: "Meridian Advisory", type: "Consulting" },
    { firm: "Vantage Audit", type: "Audit firm" },
  ];
  return (
    <div className="absolute inset-x-6 top-14 flex flex-col gap-1.5 pointer-events-none">
      {mandates.map((m, i) => (
        <motion.div
          key={m.firm}
          initial={{ opacity: 0, y: 7 }}
          animate={{ opacity: lit ? 1 : 0, y: lit ? 0 : 7 }}
          transition={{ duration: 0.32, delay: lit ? i * 0.1 : 0, ease: "easeOut" }}
          className="flex items-center justify-between rounded-lg border border-white/[0.07] bg-white/[0.03] px-3 py-1.5"
        >
          <div className="flex items-center gap-1.5 min-w-0">
            <span className="text-[11px] text-white/65 font-medium truncate" style={{ fontFamily: "var(--font-mono)" }}>{m.firm}</span>
            <span className="text-[9px] text-white/25 shrink-0">{m.type}</span>
          </div>
          <span className="text-[8px] tracking-widest border border-emerald-400/22 text-emerald-400/55 rounded px-1.5 py-0.5 shrink-0 ml-2" style={{ fontFamily: "var(--font-mono)" }}>DIRECT</span>
        </motion.div>
      ))}
    </div>
  );
}

// Map slug → animation renderer
export const SECTOR_MINI: Record<string, (lit: boolean) => React.ReactNode> = {
  "luxury-rugs-home-textiles": (lit) => <PipelineMini lit={lit} />,
  "premium-real-estate": (lit) => <ReplyMini lit={lit} />,
  "private-equity-family-offices": (lit) => <FillBarMini lit={lit} />,
  "b2b-luxury-brands": (lit) => <SparklineMini lit={lit} />,
  "wealth-management": (lit) => <ProfileStackMini lit={lit} />,
  "high-ticket-ecommerce": (lit) => <BarCompareMini lit={lit} />,
  "maritime-logistics": (lit) => <ConnectionMini lit={lit} />,
  "professional-services": (lit) => <MandateMini lit={lit} />,
};
