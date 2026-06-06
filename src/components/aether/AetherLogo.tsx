import { motion, type Variants } from "motion/react";

export type LogoState = "static" | "thinking" | "pulse" | "idle" | "happy";

// The Aether brand mark: an 8-blade angular asterisk. Inherits currentColor.
// `thinking` spins (the responding state); `idle`/`pulse` give a soft breathe.
const POLYS = [
  "4.40,-5.00 3.41,-45.88 2.21,-45.95 -4.40,-5.00",
  "6.08,-0.99 25.11,-21.42 24.32,-22.32 0.99,-6.08",
  "5.00,4.00 37.89,2.92 37.97,1.72 5.00,-4.00",
  "0.42,6.65 30.69,35.60 31.59,34.80 6.65,0.42",
  "-4.00,5.00 -3.10,40.89 -1.90,40.96 4.00,5.00",
  "-6.08,0.99 -24.36,20.75 -23.57,21.65 -0.99,6.08",
  "-5.00,-4.20 -44.88,-3.35 -44.95,-2.15 -5.00,4.20",
  "-0.85,-6.22 -22.74,-26.61 -23.64,-25.82 -6.22,-0.85",
];

const variants: Variants = {
  static: {},
  thinking: { rotate: 360, transition: { duration: 1.8, repeat: Infinity, ease: "linear" } },
  pulse: { scale: [1, 1.08, 1], transition: { duration: 3.2, repeat: Infinity, ease: "easeInOut" } },
  idle: { scale: [1, 1.05, 1], opacity: [0.92, 1, 0.92], transition: { duration: 3.6, repeat: Infinity, ease: "easeInOut" } },
  happy: { rotate: [0, 18, -10, 0], scale: [1, 1.12, 1], transition: { duration: 0.6, repeat: Infinity, ease: "easeInOut" } },
};

export default function AetherLogo({
  size = 22,
  state = "static",
  className = "",
}: {
  size?: number;
  state?: LogoState;
  className?: string;
}) {
  return (
    <motion.span
      className={`inline-flex shrink-0 ${className}`}
      style={{ width: size, height: size, lineHeight: 0, transformOrigin: "center" }}
      variants={variants}
      animate={state}
    >
      <svg viewBox="-50 -50 100 100" width={size} height={size} fill="currentColor" aria-hidden="true">
        {POLYS.map((p, i) => (
          <polygon key={i} points={p} />
        ))}
      </svg>
    </motion.span>
  );
}
