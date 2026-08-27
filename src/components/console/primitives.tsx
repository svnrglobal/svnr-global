import { useEffect, useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "motion/react";

// Four small animation primitives shared by the product replicas. Each is
// information carrying meaning (a state change, a redaction, elapsed time,
// an arriving log) — never decoration for its own sake.

// ---------------------------------------------------------------------------
// 1) SelfResolvingAlert — amber "investigating" settles to emerald "resolved".
// ---------------------------------------------------------------------------

export function SelfResolvingAlert({
  lit,
  problem,
  resolution,
  meta,
}: {
  lit: boolean;
  problem: string;
  resolution: string;
  meta: string;
}) {
  const reduce = useReducedMotion();
  const [resolved, setResolved] = useState(!!reduce);

  useEffect(() => {
    if (reduce) {
      setResolved(true);
      return;
    }
    if (!lit) {
      setResolved(false);
      return;
    }
    const t = setTimeout(() => setResolved(true), 1400);
    return () => clearTimeout(t);
  }, [lit, reduce]);

  const active = reduce ? true : lit;
  const bars = [3, 6, 4, 7, 5];
  const resolvedBars = [4, 3, 2, 2, 1];

  return (
    <div
      className={`rounded-lg border px-3 py-2.5 transition-colors duration-500 ${
        resolved ? "border-emerald-400/20 bg-emerald-400/[0.03]" : "border-amber-400/20 bg-amber-400/[0.03]"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 min-w-0">
          <span className="relative flex h-1.5 w-1.5 shrink-0">
            {!resolved && !reduce && (
              <motion.span
                animate={{ opacity: [1, 0.2, 1] }}
                transition={{ duration: 1.1, repeat: Infinity }}
                className="absolute inset-0 rounded-full bg-amber-400"
              />
            )}
            <span
              className={`absolute inset-0 rounded-full ${resolved ? "bg-emerald-400/80" : "bg-amber-400/80"}`}
              style={{ opacity: resolved || reduce ? 1 : 0.9 }}
            />
          </span>
          <AnimatePresence mode="wait">
            <motion.span
              key={resolved ? "res" : "prob"}
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-[11.5px] text-white/60 truncate"
            >
              {resolved ? resolution : problem}
            </motion.span>
          </AnimatePresence>
        </div>
        <span
          className={`text-[9px] tracking-widest shrink-0 ${resolved ? "text-emerald-400/70" : "text-amber-400/70"}`}
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {resolved ? "RESOLVED" : "INVESTIGATING"}
        </span>
      </div>
      <div className="flex items-end gap-[3px] mt-2 h-4">
        {(resolved ? resolvedBars : bars).map((h, i) => (
          <motion.span
            key={i}
            animate={{ height: `${h * 2}px` }}
            transition={{ duration: 0.5, delay: active ? i * 0.04 : 0, ease: [0.16, 1, 0.3, 1] }}
            className={`w-[3px] rounded-sm ${resolved ? "bg-emerald-400/40" : "bg-amber-400/40"}`}
          />
        ))}
        <AnimatePresence>
          {resolved && (
            <motion.span
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-[9px] text-white/30 ml-2 self-center"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {meta}
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// 2) RedactedName — decrypts from block characters to the real name.
// ---------------------------------------------------------------------------

export function RedactedName({ lit, name, delay = 0 }: { lit: boolean; name: string; delay?: number }) {
  const reduce = useReducedMotion();
  const [resolved, setResolved] = useState(!!reduce);

  useEffect(() => {
    if (reduce) {
      setResolved(true);
      return;
    }
    if (!lit) {
      setResolved(false);
      return;
    }
    const t = setTimeout(() => setResolved(true), delay);
    return () => clearTimeout(t);
  }, [lit, delay, reduce]);

  if (reduce) {
    return <span className="text-white/65">{name}</span>;
  }

  const blocks = "█".repeat(name.length);

  // The real name is always present as a single text node for assistive tech and
  // for text extraction; only the animated glyph layer is decorative. Splitting
  // the visible characters without hiding them would make a screen reader spell
  // every client name out letter by letter.
  return (
    <span className="relative">
      <span className="sr-only">{name}</span>
      <span aria-hidden="true" className="whitespace-pre">
        {resolved
          ? name.split("").map((ch, i) => (
              <motion.span
                key={`r-${i}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.18, delay: i * 0.015 }}
                className="inline-block text-white/65"
              >
                {ch === " " ? " " : ch}
              </motion.span>
            ))
          : blocks.split("").map((ch, i) => (
              <span key={`b-${i}`} className="inline-block text-white/20">
                {ch}
              </span>
            ))}
      </span>
    </span>
  );
}

// ---------------------------------------------------------------------------
// 3) AgeingTimestamp — "n min ago" that ticks upward while lit and visible.
// ---------------------------------------------------------------------------

export function AgeingTimestamp({ lit, startMinutes }: { lit: boolean; startMinutes: number }) {
  const reduce = useReducedMotion();
  const [minutes, setMinutes] = useState(startMinutes);

  useEffect(() => {
    if (reduce || !lit) return;
    const id = setInterval(() => {
      if (document.visibilityState === "visible") {
        setMinutes((m) => m + 1);
      }
    }, 20000);
    return () => clearInterval(id);
  }, [lit, reduce]);

  useEffect(() => {
    if (!lit) setMinutes(startMinutes);
  }, [lit, startMinutes]);

  return (
    <span className="tabular-nums" style={{ fontFamily: "var(--font-mono)" }}>
      {minutes} min ago
    </span>
  );
}

// ---------------------------------------------------------------------------
// 4) LogTail — rows stream in from the bottom, older ones dim.
// ---------------------------------------------------------------------------

export function LogTail({
  lit,
  rows,
}: {
  lit: boolean;
  rows: Array<{ t: string; status: string; text: string }>;
}) {
  const reduce = useReducedMotion();
  const active = reduce ? true : lit;

  return (
    <div className="flex flex-col gap-1" style={{ fontFamily: "var(--font-mono)" }}>
      {rows.map((r, i) => {
        const fromEnd = rows.length - 1 - i;
        const dim = fromEnd > 1 ? 0.35 - Math.min(fromEnd - 1, 3) * 0.05 : fromEnd === 1 ? 0.35 : 0.55;
        return (
          <motion.div
            key={`${r.t}-${i}`}
            initial={reduce ? false : { opacity: 0, y: 6 }}
            animate={{ opacity: active ? 1 : 0, y: active ? 0 : 6 }}
            transition={{ duration: 0.3, delay: active ? i * 0.09 : 0, ease: "easeOut" }}
            className="flex items-baseline gap-2 text-[10.5px] leading-[1.5]"
          >
            <span className="tabular-nums text-white/25 shrink-0">{r.t}</span>
            <span className="text-white/30 shrink-0 w-14 truncate uppercase text-[9px] tracking-wide">
              {r.status}
            </span>
            <span className="truncate" style={{ color: `rgba(255,255,255,${Math.max(dim, 0.2)})` }}>
              {r.text}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}
