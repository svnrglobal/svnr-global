import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

// Animates the numeric part of a stat string (e.g. "312%", "$32.8M", "14 min",
// "<60s", "13") from zero up to its value when it scrolls into view. Any
// non-numeric prefix/suffix is preserved. Renders the exact value statically
// under reduced-motion and in the prerendered (pre-scroll) HTML, so SEO and
// no-JS readers always see the real number.
export default function Counter({
  value,
  duration = 1.4,
  className,
}: {
  value: string;
  duration?: number;
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

    let raf = 0;
    let start = 0;
    const tick = (t: number) => {
      if (!start) start = t;
      const p = Math.min(1, (t - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      const cur = (target * eased).toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      });
      setDisplay(`${prefix}${cur}${suffix}`);
      if (p < 1) raf = requestAnimationFrame(tick);
      else setDisplay(value); // snap to exact original formatting
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, value, duration]);

  return (
    <span ref={ref} className={className}>
      {parts ? display : value}
    </span>
  );
}
