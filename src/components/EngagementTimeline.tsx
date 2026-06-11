import { motion } from "motion/react";

interface Milestone {
  when: string;
  label: string;
}

// SaaS-style engagement timeline: the track draws itself on scroll, milestone
// nodes pop in sequence. Horizontal on desktop, vertical rail on mobile.
export default function EngagementTimeline({
  milestones,
  accent = "#8b7dff",
}: {
  milestones: Milestone[];
  accent?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="liquid-glass rounded-3xl p-6 sm:p-10"
    >
      {/* desktop: horizontal */}
      <div className="hidden md:block">
        <div className="relative h-px mx-6" style={{ background: "rgba(255,255,255,0.1)" }}>
          <motion.div
            className="absolute inset-y-0 left-0 w-full"
            style={{ background: `linear-gradient(90deg, ${accent}, ${accent}33)`, transformOrigin: "left" }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
        <div className="flex justify-between -mt-[5px]">
          {milestones.map((m, i) => (
            <motion.div
              key={m.when}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 + i * (1.2 / milestones.length), type: "spring", bounce: 0.5, duration: 0.6 }}
              className="flex flex-col items-center text-center"
              style={{ width: `${100 / milestones.length}%` }}
            >
              <span
                className="w-[10px] h-[10px] rounded-full mb-4"
                style={{ background: accent, boxShadow: `0 0 10px ${accent}99` }}
              />
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-1">{m.when}</span>
              <span className="text-sm text-white/75 font-medium max-w-[170px] leading-snug">{m.label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* mobile: vertical */}
      <div className="md:hidden relative">
        <motion.div
          className="absolute left-[4px] top-2 bottom-2 w-px"
          style={{ background: `linear-gradient(180deg, ${accent}, ${accent}33)`, transformOrigin: "top" }}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="space-y-6">
          {milestones.map((m, i) => (
            <motion.div
              key={m.when}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="flex gap-4"
            >
              <span
                className="w-[9px] h-[9px] rounded-full mt-1 shrink-0 relative z-10"
                style={{ background: accent, boxShadow: `0 0 8px ${accent}99` }}
              />
              <div>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-white/40">{m.when}</span>
                <span className="text-sm text-white/75 font-medium">{m.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
