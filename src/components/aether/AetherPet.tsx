import { motion, type Variants } from "motion/react";
import { BODY_CELLS, EYE_CELLS, GRID_W, GRID_H } from "./markGeometry";

export type PetMood = "idle" | "thinking" | "happy";

// The Cassian pet (Ora's creature). It drifts and bobs while idle with a little
// playful hop and wiggle, blinks on a long cycle, squints while thinking, and
// bounces when happy.
const floatVariants: Variants = {
  idle: {
    y: [0, -5, 0, -2, 0, -15, -2, 0],
    x: [0, 5, -3, 4, 0, -2, 2, 0],
    rotate: [0, 2.5, -2.5, 1.5, 0, -4, 2, 0],
    scaleY: [1, 1, 0.95, 1, 1, 1.06, 0.97, 1],
    transition: {
      duration: 6.5,
      repeat: Infinity,
      ease: "easeInOut",
      times: [0, 0.12, 0.24, 0.38, 0.52, 0.74, 0.88, 1],
    },
  },
  thinking: { y: [0, -3, 0], rotate: [0, 1.5, -1.5, 0], transition: { duration: 1.2, repeat: Infinity, ease: "easeInOut" } },
  happy: {
    y: [0, -14, 0],
    rotate: [0, -7, 7, 0],
    scaleY: [1, 1.08, 0.96, 1],
    transition: { duration: 0.55, repeat: Infinity, ease: "easeInOut" },
  },
};

const eyeVariants: Variants = {
  // Long open stretches with the occasional cute double blink.
  idle: {
    scaleY: [1, 1, 0.1, 1, 0.1, 1, 1],
    transition: { duration: 5.2, times: [0, 0.78, 0.82, 0.86, 0.9, 0.94, 1], repeat: Infinity },
  },
  thinking: { scaleY: [1, 0.45, 1], transition: { duration: 0.7, repeat: Infinity, ease: "easeInOut" } },
  happy: { scaleY: [1, 0.55, 1], transition: { duration: 0.4, repeat: Infinity, ease: "easeInOut" } },
};

export default function AetherPet({
  size = 120,
  mood = "idle",
  body = "#cdcdd6",
  className = "",
}: {
  size?: number;
  mood?: PetMood;
  body?: string;
  className?: string;
}) {
  const h = (size * GRID_H) / GRID_W;
  return (
    <motion.div
      className={className}
      style={{ width: size, height: h, transformOrigin: "center bottom" }}
      variants={floatVariants}
      animate={mood}
    >
      <svg
        viewBox={`0 0 ${GRID_W} ${GRID_H}`}
        width={size}
        height={h}
        shapeRendering="crispEdges"
        aria-hidden="true"
      >
        <g fill={body}>
          {BODY_CELLS.map((c, i) => (
            <rect key={i} x={c.x} y={c.y} width={1.04} height={1.04} />
          ))}
        </g>
        <motion.g
          fill="#15151a"
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
          variants={eyeVariants}
        >
          {EYE_CELLS.map((c, i) => (
            <rect key={i} x={c.x} y={c.y} width={1.04} height={1.04} />
          ))}
        </motion.g>
      </svg>
    </motion.div>
  );
}
