import { motion, type Variants } from "motion/react";
import { BODY_CELLS, EYE_CELLS, GRID_W, GRID_H } from "./markGeometry";

export type MarkState = "idle" | "thinking" | "happy" | "static";

// The Aether mark — inline SVG so the body inherits `currentColor`.
// `thinking` spins constantly (the "responding" state, like Claude's working
// logo); `idle` gives a gentle breathe; `happy` does a quick bounce.
const variants: Variants = {
  idle: { y: [0, -1.2, 0], transition: { duration: 3.2, repeat: Infinity, ease: "easeInOut" } },
  thinking: { rotate: 360, transition: { duration: 1.7, repeat: Infinity, ease: "linear" } },
  happy: {
    y: [0, -2.2, 0],
    scale: [1, 1.1, 1],
    transition: { duration: 0.5, repeat: Infinity, ease: "easeInOut" },
  },
  static: {},
};

export default function AetherMark({
  size = 22,
  state = "idle",
  eye = "#15151a",
  className = "",
}: {
  size?: number;
  state?: MarkState;
  eye?: string;
  className?: string;
}) {
  const h = (size * GRID_H) / GRID_W;
  return (
    <motion.span
      className={`inline-flex shrink-0 ${className}`}
      style={{ width: size, height: h, lineHeight: 0, transformOrigin: "center" }}
      variants={variants}
      animate={state}
    >
      <svg
        viewBox={`0 0 ${GRID_W} ${GRID_H}`}
        width={size}
        height={h}
        shapeRendering="crispEdges"
        aria-hidden="true"
      >
        <g fill="currentColor">
          {BODY_CELLS.map((c, i) => (
            <rect key={i} x={c.x} y={c.y} width={1.04} height={1.04} />
          ))}
        </g>
        <g fill={eye}>
          {EYE_CELLS.map((c, i) => (
            <rect key={i} x={c.x} y={c.y} width={1.04} height={1.04} />
          ))}
        </g>
      </svg>
    </motion.span>
  );
}
