import { useCallback, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";

// A card the reader hovered and then abandoned does one small thing on its own
// after a delay — a row arrives, a line ticks up. Nobody registers it
// consciously; the page reads as something that is running rather than sitting.
//
// Returns { lit, mischief, bind }. Spread `bind` onto the hover target:
//   const { lit, mischief, bind } = useIdleMischief();
//   <div {...bind}>{lit || mischief ? <Demo /> : null}</div>
//
// `lit` is live hover. `mischief` fires once, `delay` ms after the pointer
// leaves a card that was actually hovered, and clears on re-hover. Disabled
// entirely under reduced-motion.
export function useIdleMischief(delay = 8000) {
  const [lit, setLit] = useState(false);
  const [mischief, setMischief] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const spent = useRef(false); // one visit, one surprise
  const reduce = useReducedMotion();

  const clear = useCallback(() => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
  }, []);

  useEffect(() => clear, [clear]);

  const onMouseEnter = useCallback(() => {
    clear();
    setMischief(false);
    setLit(true);
  }, [clear]);

  const onMouseLeave = useCallback(() => {
    setLit(false);
    if (reduce || spent.current) return;
    clear();
    timer.current = setTimeout(() => {
      spent.current = true;
      setMischief(true);
    }, delay);
  }, [clear, delay, reduce]);

  return { lit, mischief, bind: { onMouseEnter, onMouseLeave } };
}
