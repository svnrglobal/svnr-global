import { motion } from "motion/react";

// Ambient background for the chat workspace: slow-drifting indigo glows over the
// void, a faint grid, and a vignette that keeps the conversation legible.
// Signal-indigo only (no arc) to respect the brand color rules. Transform/opacity
// motion only.
export default function ChatBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0 bg-[#0A0A0B]" />

      <motion.div
        className="absolute rounded-full"
        style={{
          width: 640,
          height: 640,
          top: "-14%",
          left: "6%",
          background: "radial-gradient(circle, rgba(251,113,133,0.16), rgba(251,113,133,0) 70%)",
          filter: "blur(44px)",
        }}
        animate={{ x: [0, 60, -28, 0], y: [0, 40, 80, 0], scale: [1, 1.08, 0.96, 1] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 560,
          height: 560,
          bottom: "-18%",
          right: "2%",
          background: "radial-gradient(circle, rgba(124,108,255,0.13), rgba(124,108,255,0) 70%)",
          filter: "blur(52px)",
        }}
        animate={{ x: [0, -52, 22, 0], y: [0, -28, -62, 0], scale: [1, 1.1, 1, 1] }}
        transition={{ duration: 33, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 380,
          height: 380,
          top: "42%",
          left: "54%",
          background: "radial-gradient(circle, rgba(92,92,210,0.1), rgba(92,92,210,0) 70%)",
          filter: "blur(46px)",
        }}
        animate={{ x: [0, 30, -42, 0], y: [0, -40, 30, 0] }}
        transition={{ duration: 29, repeat: Infinity, ease: "easeInOut" }}
      />

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "46px 46px",
          maskImage: "radial-gradient(120% 90% at 50% 20%, #000 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(120% 90% at 50% 20%, #000 30%, transparent 80%)",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(120% 80% at 50% 28%, rgba(10,10,11,0) 38%, rgba(10,10,11,0.88) 100%)",
        }}
      />
    </div>
  );
}
