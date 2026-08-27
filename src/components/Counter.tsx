import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

// Animates the numeric part of a stat string (e.g. "312%", "$32.8M", "14 min",
// "<60s", "13") from zero up to its value when it scrolls into view. Any
// non-numeric prefix/suffix is preserved. Renders the exact value statically
// under reduced-motion and in the prerendered (pre-scroll) HTML, so SEO and
// no-JS readers always see the real number.
//
// The curve deliberately overshoots by ~3% and settles back, so the number
// reads as an instrument taking a reading rather than a marketing claim.
// Pass `settle={false}` for a plain monotonic count-up.
export default function Counter({
  value,
  duration = 1.4,
  settle = true,
  className,
}: {
  value: string;
  duration?: number;
  settle?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(value);

  // Recomputed each render for the fallback below; intentionally NOT an effect
  // dependency (a fresh match() array every render would restart the animation).
  const parts = value.match(/^(\D*)(\d[\d,]*\.?\d*)(.*)$/s);

  useEffect(() => {
    const m = value.match(/^(\D*)(\d[\d,]*\.?\d*)(.*)$/s);
    if (!m || reduce || !inView) return;
    const prefix = m[1];
    const numRaw = m[2];
    const suffix = m[3];
    const decimals = numRaw.includes(".") ? numRaw.split(".")[1].length : 0;
    const target = parseFloat(numRaw.replace(/,/g, ""));

    // easeOutBack with a restrained c1 — peaks ~3% past target, then settles.
    const c1 = 0.6;
    const c3 = c1 + 1;
    const ease = settle
      ? (p: number) => 1 + c3 * Math.pow(p - 1, 3) + c1 * Math.pow(p - 1, 2)
      : (p: number) => 1 - Math.pow(1 - p, 3); // easeOutCubic

    let raf = 0;
    let start = 0;
    const tick = (t: number) => {
      if (!start) start = t;
      const p = Math.min(1, (t - start) / (duration * 1000));
      const cur = (target * ease(p)).toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      });
      setDisplay(`${prefix}${cur}${suffix}`);
      if (p < 1) raf = requestAnimationFrame(tick);
      else setDisplay(value); // snap to exact original formatting
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, value, duration, settle]);

  return (
    <span ref={ref} className={className}>
      {parts ? display : value}
    </span>
  );
}
