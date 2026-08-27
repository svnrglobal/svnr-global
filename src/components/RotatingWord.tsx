import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface RotatingWordProps {
  words: string[];
  interval?: number;
  className?: string;
}

export default function RotatingWord({
  words,
  interval = 2200,
  className,
}: RotatingWordProps) {
  const [index, setIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setReducedMotion(
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      );
    }
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  if (reducedMotion) {
    return (
      <span className={`inline-block align-bottom ${className ?? ""}`}>
        <span>{words[index]}</span>
      </span>
    );
  }

  return (
    <span className={`inline-block align-bottom ${className ?? ""}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: "0.4em" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-0.4em" }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
