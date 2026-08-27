import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion, useInView } from "motion/react";
import ConsoleFrame from "./ConsoleFrame";
import { RedactedName } from "./primitives";

// ============================================================================
// Shared bits
// ============================================================================

function TabRow({
  tabs,
  active,
  onChange,
}: {
  tabs: string[];
  active: number;
  onChange: (i: number) => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-b border-white/[0.06] pb-3 mb-4">
      {tabs.map((tab, i) => (
        <button
          key={tab}
          type="button"
          onClick={() => onChange(i)}
          className="relative pb-2 text-[12px] transition-colors duration-300"
          style={{
            fontFamily: "var(--font-mono)",
            color: active === i ? "#ffffff" : "rgba(255,255,255,0.35)",
          }}
        >
          {tab}
          {active === i && (
            <motion.span
              layoutId="tab-underline"
              className="absolute left-0 right-0 -bottom-[13px] h-px"
              style={{ background: "var(--color-accent)" }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            />
          )}
        </button>
      ))}
    </div>
  );
}

function Spinner({ done }: { done: boolean }) {
  const reduce = useReducedMotion();
  if (done) {
    return (
      <svg width="10" height="10" viewBox="0 0 10 10" className="shrink-0 text-emerald-400/80">
        <path d="M1.5 5.2 L4 7.5 L8.5 2" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <span className="relative flex h-2.5 w-2.5 shrink-0">
      <motion.span
        animate={reduce ? {} : { rotate: 360 }}
        transition={reduce ? {} : { duration: 0.8, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full border border-white/15 border-t-white/50"
      />
    </span>
  );
}

// ============================================================================
// 1) AskSurface — demonstrates the range of things you can ask Cassian, and
//    what it actually does in response (plan steps -> a concrete result).
// ============================================================================

interface Ask {
  label: string;
  plan: string[];
  result: string;
}

const ASKS: Ask[] = [
  {
    label: "Find 40 stockists in Milan",
    plan: [
      "Mapping showroom universe...",
      "Filtering by price point + material history...",
      "Cross-referencing recent buyer activity...",
      "Enriching 40 named buyers...",
    ],
    result: "40 named buyers, 12 with recent project signals",
  },
  {
    label: "Draft outreach to a Zurich family office",
    plan: [
      "Pulling entity + principal contact...",
      "Reading prior touchpoints for tone...",
      "Drafting angle from mandate history...",
    ],
    result: "Draft ready, 1 open question flagged for review",
  },
  {
    label: "Why did De Vries go cold?",
    plan: [
      "Reconstructing the thread timeline...",
      "Checking reply gaps against baseline...",
      "Scanning for a changed decision-maker...",
    ],
    result: "Likely cause: budget cycle reset in Q3, not disinterest",
  },
];

export function AskSurface() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const [stepsDone, setStepsDone] = useState<number>(reduce ? ASKS[0].plan.length : 0);
  const [showResult, setShowResult] = useState(!!reduce);
  const [copied, setCopied] = useState(false);
  const ask = ASKS[active];

  useEffect(() => {
    if (reduce) {
      setStepsDone(ask.plan.length);
      setShowResult(true);
      return;
    }
    setStepsDone(0);
    setShowResult(false);
    const timers: ReturnType<typeof setTimeout>[] = [];
    ask.plan.forEach((_, i) => {
      timers.push(setTimeout(() => setStepsDone((d) => Math.max(d, i + 1)), 380 + i * 420));
    });
    timers.push(setTimeout(() => setShowResult(true), 380 + ask.plan.length * 420 + 250));
    return () => timers.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, reduce]);

  async function copyPlan() {
    const text = [`> ${ask.label}`, ...ask.plan.map((s) => `- ${s.replace(/\.\.\.$/, "")}`), ask.result].join("\n");
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard unavailable — visual only, fail silently
    }
  }

  return (
    <ConsoleFrame label="ask-cassian" badge="LIVE">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <TabRow tabs={ASKS.map((a) => a.label)} active={active} onChange={setActive} />
        </div>
        <button
          type="button"
          onClick={copyPlan}
          className="shrink-0 -mt-1 text-[10px] tracking-wide text-white/35 hover:text-white/60 border border-white/[0.08] hover:border-white/[0.14] rounded px-2 py-1 transition-colors"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {copied ? "COPIED" : "COPY PLAN"}
        </button>
      </div>

      <div className="min-h-[132px]" style={{ fontFamily: "var(--font-mono)" }}>
        <div className="flex items-baseline gap-2 mb-3">
          <span style={{ color: "var(--color-accent)" }}>&gt;</span>
          <span className="text-[12.5px] text-white/70">{ask.label}</span>
        </div>

        <div className="flex flex-col gap-1.5 pl-4">
          {ask.plan.map((step, i) => {
            const started = i < stepsDone || reduce;
            const done = i < stepsDone;
            return (
              <motion.div
                key={`${active}-${i}`}
                initial={reduce ? false : { opacity: 0, x: -6 }}
                animate={{ opacity: started ? 1 : 0.15, x: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-2 text-[11px]"
              >
                <Spinner done={done} />
                <span className={done ? "text-white/40" : "text-white/55"}>{step}</span>
              </motion.div>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          {showResult && (
            <motion.div
              key={`result-${active}`}
              initial={reduce ? false : { opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="flex items-baseline gap-2 mt-3 pl-4"
            >
              <span className="text-emerald-400/70 text-[9px] tracking-widest">RESULT</span>
              <span className="text-[11.5px] text-emerald-400/90">{ask.result}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ConsoleFrame>
  );
}

// ============================================================================
// 2) ColdAccountReroute — the signature mechanic. A primary channel goes
//    cold on screen, then Cassian reroutes via a second path that lands.
// ============================================================================

interface RerouteStrategy {
  label: string;
  primaryNode: string;
  fallbackNode: string;
}

const STRATEGIES: RerouteStrategy[] = [
  { label: "Channel", primaryNode: "Email · Day 0-6", fallbackNode: "LinkedIn · Day 8" },
  { label: "Angle", primaryNode: "Email · Day 0-6", fallbackNode: "New angle: expansion filing" },
  { label: "Timing", primaryNode: "Email · Day 0-6", fallbackNode: "Re-approach Q1" },
];

type Phase = "primary" | "degraded" | "rerouting" | "replied";

export function ColdAccountReroute() {
  const [active, setActive] = useState(0);
  const [phase, setPhase] = useState<Phase>("primary");
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.4 });
  const strategy = STRATEGIES[active];

  useEffect(() => {
    if (reduce) {
      setPhase("replied");
      return;
    }
    if (!inView) return;

    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];

    function runCycle() {
      if (cancelled) return;
      setPhase("primary");
      timers.push(setTimeout(() => !cancelled && setPhase("degraded"), 1200));
      timers.push(setTimeout(() => !cancelled && setPhase("rerouting"), 2400));
      timers.push(setTimeout(() => !cancelled && setPhase("replied"), 3600));
      timers.push(setTimeout(runCycle, 6000));
    }
    runCycle();

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, [inView, reduce, active]);

  const degraded = phase === "degraded" || phase === "rerouting" || phase === "replied";
  const rerouting = phase === "rerouting" || phase === "replied";
  const replied = phase === "replied";

  return (
    <ConsoleFrame label="cold-account-reroute" badge="AUTO">
      <TabRow tabs={STRATEGIES.map((s) => s.label)} active={active} onChange={setActive} />

      <div ref={ref} className="overflow-x-auto">
        <svg
          viewBox="0 0 620 150"
          className="w-full min-w-[560px]"
          style={{ fontFamily: "var(--font-mono)" }}
          role="img"
          aria-label="Cold account reroute diagram"
        >
          {/* Account node */}
          <g transform="translate(10,55)">
            <rect width="120" height="40" rx="8" className="fill-white/[0.02] stroke-white/[0.12]" strokeWidth="1" />
            <foreignObject x="0" y="0" width="120" height="40">
              <div className="h-full w-full flex items-center justify-center text-[10px] text-white/60">
                <RedactedName lit name="H. De Vries" />
              </div>
            </foreignObject>
          </g>

          {/* Primary edge */}
          <line
            x1="130"
            y1="75"
            x2="240"
            y2="75"
            stroke={degraded ? "rgba(251,191,36,0.35)" : "rgba(255,255,255,0.18)"}
            strokeWidth="1.5"
            strokeDasharray={degraded ? "4 3" : undefined}
            style={{ transition: "stroke 0.5s ease" }}
          />

          {/* Primary node: Email */}
          <g transform="translate(240,55)">
            <rect
              width="140"
              height="40"
              rx="8"
              className={degraded ? "fill-amber-400/[0.04] stroke-amber-400/25" : "fill-white/[0.02] stroke-white/[0.12]"}
              strokeWidth="1"
              style={{ transition: "all 0.5s ease" }}
            />
            <text x="70" y="19" textAnchor="middle" className={degraded ? "fill-white/35" : "fill-white/55"} fontSize="9.5">
              {strategy.primaryNode}
            </text>
            <AnimatePresence>
              {degraded && (
                <motion.text
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  x="70"
                  y="32"
                  textAnchor="middle"
                  className="fill-amber-400/70"
                  fontSize="8.5"
                  letterSpacing="1"
                >
                  NO REPLY
                </motion.text>
              )}
            </AnimatePresence>
          </g>

          {/* Fallback edge (curves down) */}
          <path
            d="M 310 95 C 310 130, 460 130, 460 95"
            fill="none"
            stroke={rerouting ? (replied ? "rgba(52,211,153,0.4)" : "rgba(255,255,255,0.3)") : "rgba(255,255,255,0.06)"}
            strokeWidth="1.5"
            strokeDasharray={rerouting ? undefined : "3 4"}
            style={{ transition: "stroke 0.6s ease" }}
          />
          {rerouting && !reduce && (
            <motion.circle
              r="2.5"
              fill="var(--color-accent)"
              initial={{ offsetDistance: "0%" }}
              animate={{ offsetDistance: "100%" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              style={{ offsetPath: "path('M 310 95 C 310 130, 460 130, 460 95')" }}
            />
          )}

          {/* Fallback node */}
          <g transform="translate(390,55)">
            <rect
              width="150"
              height="40"
              rx="8"
              className={replied ? "fill-emerald-400/[0.05] stroke-emerald-400/30" : "fill-white/[0.015] stroke-white/[0.08]"}
              strokeWidth="1"
              style={{ transition: "all 0.5s ease" }}
            />
            <text
              x="75"
              y="19"
              textAnchor="middle"
              fontSize="9.5"
              className={rerouting ? "fill-white/70" : "fill-white/25"}
              style={{ transition: "fill 0.5s ease" }}
            >
              {strategy.fallbackNode}
            </text>
            <AnimatePresence>
              {replied && (
                <motion.text
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  x="75"
                  y="32"
                  textAnchor="middle"
                  className="fill-emerald-400/80"
                  fontSize="8.5"
                  letterSpacing="1"
                >
                  REPLIED · 14 MIN
                </motion.text>
              )}
            </AnimatePresence>
          </g>
        </svg>
      </div>
    </ConsoleFrame>
  );
}

// ============================================================================
// 3) StackDiff — replaces a stack of line items with one, as a unified diff.
// ============================================================================

const MINUS_ROWS = ["SDR agency retainer", "Prospect database seat", "Research VA"];

export function StackDiff() {
  const reduce = useReducedMotion();
  const [struckCount, setStruckCount] = useState(reduce ? MINUS_ROWS.length : 0);
  const [plusVisible, setPlusVisible] = useState(!!reduce);

  useEffect(() => {
    if (reduce) return;
    const timers: ReturnType<typeof setTimeout>[] = [];
    MINUS_ROWS.forEach((_, i) => {
      timers.push(setTimeout(() => setStruckCount((c) => c + 1), 500 + i * 500));
    });
    timers.push(setTimeout(() => setPlusVisible(true), 500 + MINUS_ROWS.length * 500 + 300));
    return () => timers.forEach(clearTimeout);
  }, [reduce]);

  return (
    <ConsoleFrame label="your-stack.diff">
      <div className="flex flex-col gap-1" style={{ fontFamily: "var(--font-mono)" }}>
        {MINUS_ROWS.map((row, i) => {
          const struck = i < struckCount;
          return (
            <motion.div
              key={row}
              animate={{ opacity: struck ? 0.45 : 1 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2.5 rounded-md px-3 py-2 bg-rose-500/[0.06]"
            >
              <span className="text-rose-400/60 text-[11px] shrink-0">-</span>
              <span className={`text-[11.5px] text-white/55 ${struck ? "line-through decoration-white/25" : ""}`}>
                {row}
              </span>
            </motion.div>
          );
        })}

        <AnimatePresence>
          {plusVisible && (
            <motion.div
              initial={reduce ? false : { opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2.5 rounded-md px-3 py-2 bg-emerald-500/[0.06] mt-1"
            >
              <span className="text-emerald-400/70 text-[11px] shrink-0">+</span>
              <span className="text-[11.5px] text-emerald-300/90">Cassian</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <p className="text-[11.5px] text-white/40 mt-4 leading-relaxed">
        One system that sources, qualifies, and re-approaches — instead of a stack of tools stitched together by hand.
      </p>
    </ConsoleFrame>
  );
}
