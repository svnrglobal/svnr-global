import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "motion/react";

// Wraps a headline so its letterforms lean ~1° toward the pointer. Individually
// imperceptible; in aggregate the type feels like it is tracking the reader.
// Falls back to a plain element under reduced-motion and on touch (no pointer).
//
// `as` picks the rendered tag so headings stay semantic (default h1).
export default function OpticalType({
  children,
  as: Tag = "h1",
  className,
  maxTilt = 1,
}: {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "p" | "div";
  className?: string;
  maxTilt?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  // -1..1 across the element, smoothed so fast cursor moves do not jitter.
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 110, damping: 22, mass: 0.6 });
  const sy = useSpring(py, { stiffness: 110, damping: 22, mass: 0.6 });

  const rotateY = useTransform(sx, [-1, 1], [-maxTilt, maxTilt]);
  const rotateX = useTransform(sy, [-1, 1], [maxTilt * 0.7, -maxTilt * 0.7]);
  const skewX = useTransform(sx, [-1, 1], [maxTilt * 0.45, -maxTilt * 0.45]);

  const MotionTag = motion[Tag];

  if (reduce) {
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <div
      ref={ref}
      onPointerMove={(e) => {
        if (e.pointerType === "touch") return;
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        px.set(((e.clientX - r.left) / r.width) * 2 - 1);
        py.set(((e.clientY - r.top) / r.height) * 2 - 1);
      }}
      onPointerLeave={() => {
        px.set(0);
        py.set(0);
      }}
      style={{ perspective: 900 }}
    >
      <MotionTag
        className={className}
        style={{ rotateX, rotateY, skewX, transformStyle: "preserve-3d" }}
      >
        {children}
      </MotionTag>
    </div>
  );
}
