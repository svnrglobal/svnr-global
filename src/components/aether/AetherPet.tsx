import { motion, type Variants } from "motion/react";
import { BODY_CELLS, EYE_CELLS, GRID_W, GRID_H } from "./markGeometry";

export type PetMood = "idle" | "thinking" | "happy";

// The larger Aether pet that lives on the chat page. It bobs and drifts while
// idle, blinks on a long cycle, squints while thinking, and bounces when happy.
const floatVariants: Variants = {
  idle: {
    y: [0, -6, 0],
    x: [0, 6, -4, 0],
    transition: { duration: 7, repeat: Infinity, ease: "easeInOut" },
  },
  thinking: { y: [0, -3, 0], transition: { duration: 1.2, repeat: Infinity, ease: "easeInOut" } },
  happy: {
    y: [0, -12, 0],
    rotate: [0, -5, 5, 0],
    transition: { duration: 0.6, repeat: Infinity, ease: "easeInOut" },
  },
};

const eyeVariants: Variants = {
  idle: {
    scaleY: [1, 1, 0.12, 1, 1],
    transition: { duration: 4.5, times: [0, 0.9, 0.94, 0.98, 1], repeat: Infinity },
  },
  thinking: { scaleY: [1, 0.5, 1], transition: { duration: 0.7, repeat: Infinity, ease: "easeInOut" } },
  happy: { scaleY: [1, 0.6, 1], transition: { duration: 0.4, repeat: Infinity, ease: "easeInOut" } },
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
