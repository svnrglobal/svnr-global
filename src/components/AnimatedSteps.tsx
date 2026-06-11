import { motion } from "motion/react";

interface Step {
  n?: string;
  title: string;
  desc: string;
}

// SaaS-style deployment rail: the spine draws itself as you scroll, each
// numbered node fills with the page gradient and pops in, content staggers in
// from the left. Drop-in replacement for the static process lists.
export default function AnimatedSteps({ steps, gradient }: { steps: Step[]; gradient: string }) {
  return (
    <div className="relative">
      {/* spine that draws on scroll */}
      <motion.div
        aria-hidden="true"
        className="hidden md:block absolute left-[28px] top-2 bottom-2 w-px"
        style={{ background: "linear-gradient(180deg, rgba(139,125,255,0.5), rgba(255,255,255,0.06))", transformOrigin: "top" }}
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="space-y-8">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: Math.min(i * 0.1, 0.5), duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex gap-6 md:gap-8"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(i * 0.1, 0.5) + 0.15, type: "spring", bounce: 0.45, duration: 0.7 }}
              className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-xs font-medium text-white relative z-10"
              style={{ background: gradient, boxShadow: "0 4px 18px rgba(0,0,0,0.4)" }}
            >
              {step.n ?? String(i + 1).padStart(2, "0")}
            </motion.div>
            <div className="pt-2 md:pt-3">
              <h3 className="text-white font-medium mb-1">{step.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed max-w-xl">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
