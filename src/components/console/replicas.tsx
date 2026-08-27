import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import Counter from "../Counter";
import { SelfResolvingAlert, RedactedName, AgeingTimestamp, LogTail } from "./primitives";

// Eight faithful, non-interactive replicas of SVNR's internal systems — one
// per service. Built from DOM + inline SVG only. Every client/prospect name
// runs through RedactedName; every headline metric is either plausible UI
// chrome (timestamps, routes, stage labels) or omitted per the content brief.

const mono = { fontFamily: "var(--font-mono)" } as const;

// ---------------------------------------------------------------------------
// ProspectConsole — client-acquisition
// ---------------------------------------------------------------------------

export function ProspectConsole({ lit }: { lit: boolean }) {
  const rows = [
    { account: "Atelier Renz", market: "Zürich", signal: "Funding round", stage: "OUTREACH", cls: "text-white/35 border-white/10" },
    { account: "Maison Libert", market: "Paris", signal: "New hire, VP Sales", stage: "REPLIED", cls: "text-sky-400/60 border-sky-400/20" },
    { account: "De Vries Int.", market: "Amsterdam", signal: "Expansion filing", stage: "QUALIFIED", cls: "text-emerald-400/70 border-emerald-400/25" },
    { account: "Nordkap Holding", market: "Oslo", signal: "Site traffic spike", stage: "OUTREACH", cls: "text-white/35 border-white/10" },
  ];

  return (
    <div className="flex flex-col gap-px">
      <div
        className="grid grid-cols-[1.3fr_0.7fr_1.3fr_0.8fr] gap-2 px-2 pb-1.5 text-[9px] tracking-widest text-white/25 uppercase"
        style={mono}
      >
        <span>Account</span>
        <span>Market</span>
        <span>Signal</span>
        <span className="text-right">Stage</span>
      </div>
      {rows.map((r, i) => (
        <motion.div
          key={r.account}
          initial={{ opacity: 0, x: -6 }}
          animate={{ opacity: lit ? 1 : 0, x: lit ? 0 : -6 }}
          transition={{ duration: 0.32, delay: lit ? i * 0.11 : 0, ease: "easeOut" }}
          className="grid grid-cols-[1.3fr_0.7fr_1.3fr_0.8fr] gap-2 items-center rounded-lg px-2 py-1.5 border border-white/[0.06] bg-white/[0.015]"
        >
          <span className="text-[11px] text-white/65 truncate">
            <RedactedName lit={lit} name={r.account} delay={300 + i * 120} />
          </span>
          <span className="text-[10px] text-white/35 truncate">{r.market}</span>
          <span className="text-[10px] text-white/30 truncate">{r.signal}</span>
          <span
            className={`text-[8px] tracking-widest border rounded px-1.5 py-0.5 justify-self-end ${r.cls}`}
            style={mono}
          >
            {r.stage}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// InboundLog — ai-receptionist
// ---------------------------------------------------------------------------

export function InboundLog({ lit }: { lit: boolean }) {
  const rows = [
    { t: "09:14:02", status: "call", text: "Routed to sales — qualified, response 8s" },
    { t: "09:26:41", status: "chat", text: "Answered pricing query, response 3s" },
    { t: "10:02:17", status: "call", text: "Routed to support — existing account" },
    { t: "10:48:55", status: "chat", text: "Booked consult call, response 5s" },
    { t: "11:15:30", status: "call", text: "Routed to sales — qualified, response 6s" },
  ];
  return (
    <div>
      <LogTail lit={lit} rows={rows} />
    </div>
  );
}

// ---------------------------------------------------------------------------
// PipelineHealth — revenue-operations
// ---------------------------------------------------------------------------

export function PipelineHealth({ lit }: { lit: boolean }) {
  const reduce = useReducedMotion();
  const stages = [
    { label: "Prospect", pct: 100 },
    { label: "Qualified", pct: 68 },
    { label: "Proposal", pct: 41 },
    { label: "Committed", pct: 22 },
  ];
  const score = 87;
  const r = 20;
  const c = 2 * Math.PI * r;

  return (
    <div className="flex gap-4 items-center">
      <div className="flex-1 flex flex-col gap-2">
        {stages.map((s, i) => (
          <div key={s.label} className="flex items-center gap-2">
            <span className="text-[9px] text-white/30 w-16 shrink-0" style={mono}>
              {s.label}
            </span>
            <div className="flex-1 h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: lit ? `${s.pct}%` : "0%" }}
                transition={{ duration: 0.6, delay: lit ? i * 0.08 : 0, ease: [0.16, 1, 0.3, 1] }}
                className="h-full rounded-full bg-white/40"
              />
            </div>
          </div>
        ))}
        <div className="mt-1">
          <SelfResolvingAlert
            lit={lit}
            problem="Stale deal detected — Nordvik Group, 19 days idle"
            resolution="Auto-escalated to owner, follow-up sent"
            meta="11 min"
          />
        </div>
      </div>
      <div className="relative w-14 h-14 shrink-0">
        <svg viewBox="0 0 48 48" className="w-14 h-14 -rotate-90">
          <circle cx="24" cy="24" r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="3" />
          <motion.circle
            cx="24"
            cy="24"
            r={r}
            fill="none"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={c}
            initial={{ strokeDashoffset: c }}
            animate={{ strokeDashoffset: lit ? c * (1 - score / 100) : c }}
            transition={reduce ? { duration: 0 } : { duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          />
        </svg>
        <span
          className="absolute inset-0 flex items-center justify-center text-[10px] text-white/50 tabular-nums"
          style={mono}
        >
          {score}
        </span>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// SignalEnrichment — intelligence-research
// ---------------------------------------------------------------------------

export function SignalEnrichment({ lit }: { lit: boolean }) {
  const signals = ["Funding", "Hiring", "Tech stack", "News", "Traffic", "Leadership"];
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: lit ? 1 : 0, y: lit ? 0 : -6 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="rounded-lg border border-white/[0.07] bg-white/[0.02] px-3 py-2.5 mb-2.5"
      >
        <div className="flex items-center justify-between">
          <span className="text-[11px] text-white/65 font-medium">
            <RedactedName lit={lit} name="Halvorsen Maritime" delay={250} />
          </span>
          <span className="text-[9px] text-white/30" style={mono}>
            <AgeingTimestamp lit={lit} startMinutes={2} />
          </span>
        </div>
        <p className="text-[10px] text-white/30 mt-0.5" style={mono}>
          Bergen · Shipping &amp; Logistics
        </p>
      </motion.div>
      <div className="grid grid-cols-3 gap-1.5 mb-2.5">
        {signals.map((s, i) => (
          <motion.span
            key={s}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: lit ? 1 : 0, scale: lit ? 1 : 0.92 }}
            transition={{ duration: 0.28, delay: lit ? 0.2 + i * 0.06 : 0, ease: "easeOut" }}
            className="text-[9px] text-white/40 text-center border border-white/[0.07] rounded-md py-1 truncate"
            style={mono}
          >
            {s}
          </motion.span>
        ))}
      </div>
      <div className="flex items-baseline gap-1.5">
        <Counter value="83" className="text-lg text-white/70 font-medium" />
        <span className="text-[10px] text-white/30" style={mono}>
          signals mapped
        </span>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// WorkflowGraph — sector-workflows
// ---------------------------------------------------------------------------

export function WorkflowGraph({ lit }: { lit: boolean }) {
  const reduce = useReducedMotion();
  const nodes = [
    { x: 20, y: 60, label: "Intake" },
    { x: 90, y: 24, label: "Verify" },
    { x: 160, y: 60, label: "Route" },
    { x: 230, y: 24, label: "Enrich" },
    { x: 300, y: 60, label: "Handoff" },
  ];
  const edges: [number, number][] = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
  ];

  return (
    <svg viewBox="0 0 320 90" className="w-full h-[90px]">
      {edges.map(([a, b], i) => {
        const p1 = nodes[a];
        const p2 = nodes[b];
        return (
          <motion.line
            key={i}
            x1={p1.x}
            y1={p1.y}
            x2={p2.x}
            y2={p2.y}
            stroke="rgba(255,255,255,0.16)"
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: lit ? 1 : 0 }}
            transition={reduce ? { duration: 0 } : { duration: 0.4, delay: lit ? 0.15 + i * 0.14 : 0, ease: "easeOut" }}
          />
        );
      })}
      {nodes.map((n, i) => (
        <g key={n.label}>
          <motion.circle
            cx={n.x}
            cy={n.y}
            r="5"
            fill="rgba(255,255,255,0.06)"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="1"
            initial={{ scale: 0 }}
            animate={{ scale: lit ? 1 : 0 }}
            transition={{ duration: 0.25, delay: lit ? i * 0.14 : 0, ease: "backOut" }}
          />
          <text
            x={n.x}
            y={n.y > 40 ? n.y + 18 : n.y - 12}
            textAnchor="middle"
            className="fill-white/35"
            style={{ fontSize: 8, fontFamily: "var(--font-mono)" }}
          >
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

// ---------------------------------------------------------------------------
// SequenceBoard — brand-outreach
// ---------------------------------------------------------------------------

export function SequenceBoard({ lit }: { lit: boolean }) {
  const touches = [
    { n: 1, channel: "Email", day: "Day 1" },
    { n: 2, channel: "LinkedIn", day: "Day 3" },
    { n: 3, channel: "Email", day: "Day 7" },
    { n: 4, channel: "LinkedIn", day: "Day 12" },
  ];
  return (
    <div className="pt-1">
      <div className="relative flex items-center justify-between">
        <div className="absolute left-3 right-3 top-3 h-px bg-white/[0.08]" />
        {touches.map((t, i) => (
          <motion.div
            key={t.n}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: lit ? 1 : 0, y: lit ? 0 : 6 }}
            transition={{ duration: 0.3, delay: lit ? i * 0.13 : 0, ease: "easeOut" }}
            className="relative z-10 flex flex-col items-center gap-1.5 w-1/4"
          >
            <span
              className={`w-6 h-6 rounded-full border flex items-center justify-center text-[9px] tabular-nums ${
                i === 2 ? "border-sky-400/30 text-sky-400/70 bg-sky-400/[0.06]" : "border-white/[0.12] text-white/40 bg-black"
              }`}
              style={mono}
            >
              {t.n}
            </span>
            <span className="text-[9px] text-white/35" style={mono}>
              {t.channel}
            </span>
            <span className="text-[8px] text-white/22" style={mono}>
              {t.day}
            </span>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: lit ? 1 : 0 }}
        transition={{ duration: 0.3, delay: lit ? 0.55 : 0 }}
        className="mt-3 flex items-center gap-1.5 rounded-md border border-sky-400/20 bg-sky-400/[0.04] px-2.5 py-1.5"
      >
        <span className="w-1 h-1 rounded-full bg-sky-400/70 shrink-0" />
        <span className="text-[10px] text-white/50 truncate">
          Reply from <RedactedName lit={lit} name="Fabienne Larousse" delay={800} /> — branched to warm handoff
        </span>
      </motion.div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// DealRadar — dealflow-investor
// ---------------------------------------------------------------------------

export function DealRadar({ lit }: { lit: boolean }) {
  const deals = [
    { name: "Project Halyard", pos: 18 },
    { name: "Project Kestrel", pos: 38 },
    { name: "Project Alder", pos: 58 },
  ];
  const marketX = 76;
  return (
    <div className="relative h-16">
      <div className="absolute inset-x-0 top-8 h-px bg-white/[0.08]" />
      <div className="absolute top-0 bottom-2" style={{ left: `${marketX}%` }}>
        <div className="w-px h-full bg-white/25" />
        <span
          className="absolute -top-3 -translate-x-1/2 text-[8px] tracking-widest text-white/35"
          style={mono}
        >
          MARKET
        </span>
      </div>
      {deals.map((d, i) => (
        <motion.div
          key={d.name}
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: lit ? 1 : 0, y: lit ? 0 : -6 }}
          transition={{ duration: 0.3, delay: lit ? 0.2 + i * 0.15 : 0, ease: "easeOut" }}
          className="absolute top-6 -translate-x-1/2 flex flex-col items-center gap-1"
          style={{ left: `${d.pos}%` }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/70" />
          <span className="text-[8px] text-white/35 whitespace-nowrap" style={mono}>
            {d.name}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// PartnerMap — channel-partnership (ConnectionMini idea, larger scale)
// ---------------------------------------------------------------------------

export function PartnerMap({ lit }: { lit: boolean }) {
  const reduce = useReducedMotion();
  const center = { x: 160, y: 45 };
  const nodes = [
    { x: 40, y: 15, label: "Reseller EU" },
    { x: 40, y: 75, label: "Integrator US" },
    { x: 280, y: 15, label: "Agency APAC" },
    { x: 280, y: 75, label: "Referral Net" },
  ];
  return (
    <svg viewBox="0 0 320 90" className="w-full h-[90px]">
      {nodes.map((n, i) => (
        <motion.line
          key={n.label}
          x1={center.x}
          y1={center.y}
          x2={n.x}
          y2={n.y}
          stroke="rgba(255,255,255,0.14)"
          strokeWidth="1"
          strokeDasharray="3 3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: lit ? 1 : 0 }}
          transition={reduce ? { duration: 0 } : { duration: 0.5, delay: lit ? i * 0.1 : 0, ease: "easeOut" }}
        />
      ))}
      <circle cx={center.x} cy={center.y} r="7" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.35)" strokeWidth="1" />
      <text x={center.x} y={center.y + 20} textAnchor="middle" className="fill-white/40" style={{ fontSize: 8, fontFamily: "var(--font-mono)" }}>
        SVNR
      </text>
      {nodes.map((n, i) => (
        <motion.g
          key={n.label}
          initial={{ opacity: 0 }}
          animate={{ opacity: lit ? 1 : 0 }}
          transition={{ duration: 0.3, delay: lit ? 0.2 + i * 0.1 : 0 }}
        >
          <circle cx={n.x} cy={n.y} r="4" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
          <text
            x={n.x}
            y={n.y < 45 ? n.y - 9 : n.y + 15}
            textAnchor="middle"
            className="fill-white/30"
            style={{ fontSize: 7.5, fontFamily: "var(--font-mono)" }}
          >
            {n.label}
          </text>
        </motion.g>
      ))}
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Registry
// ---------------------------------------------------------------------------

export const SERVICE_REPLICA: Record<string, (lit: boolean) => ReactNode> = {
  "client-acquisition": (lit) => <ProspectConsole lit={lit} />,
  "ai-receptionist": (lit) => <InboundLog lit={lit} />,
  "revenue-operations": (lit) => <PipelineHealth lit={lit} />,
  "intelligence-research": (lit) => <SignalEnrichment lit={lit} />,
  "sector-workflows": (lit) => <WorkflowGraph lit={lit} />,
  "brand-outreach": (lit) => <SequenceBoard lit={lit} />,
  "dealflow-investor": (lit) => <DealRadar lit={lit} />,
  "channel-partnership": (lit) => <PartnerMap lit={lit} />,
};
