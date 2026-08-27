import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import BrowserFrame from "./BrowserFrame";

interface Tab {
  label: string;
  url: string;
  panel: React.ReactNode;
}

interface SectorBlockProps {
  eyebrow: string;
  headline: string;
  subhead: string;
  reverse?: boolean;
  tabs: Tab[];
}

export default function SectorBlock({ eyebrow, headline, subhead, reverse = false, tabs }: SectorBlockProps) {
  const [active, setActive] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16${reverse ? " lg:flex-row-reverse" : ""}`}
    >
      {/* LEFT — text column */}
      <div className="flex-1 min-w-0">
        <p className="eyebrow text-white/40 mb-4">{eyebrow}</p>
        <h2 className="text-3xl lg:text-4xl font-semibold text-white tracking-tightest leading-[1.08] mb-4">
          {headline}
        </h2>
        <p className="text-white/50 text-sm leading-relaxed mb-6">{subhead}</p>

        {/* Tab row */}
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab, i) => (
            <button
              key={tab.label}
              type="button"
              aria-pressed={active === i}
              onClick={() => setActive(i)}
              className="text-[11px] uppercase tracking-[0.08em] px-3 py-2 rounded-md transition-colors duration-150"
              style={{
                fontFamily: "var(--font-mono)",
                border: active === i
                  ? "1px solid rgba(255,255,255,0.14)"
                  : "1px solid rgba(255,255,255,0.07)",
                background: active === i ? "rgba(255,255,255,0.06)" : "transparent",
                color: active === i ? "rgba(255,255,255,0.80)" : "rgba(255,255,255,0.40)",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                if (active !== i) {
                  (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.70)";
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.12)";
                }
              }}
              onMouseLeave={(e) => {
                if (active !== i) {
                  (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.40)";
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.07)";
                }
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* RIGHT — mock column */}
      <div className="flex-1 min-w-0 w-full">
        <BrowserFrame url={tabs[active].url} className="w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              {tabs[active].panel}
            </motion.div>
          </AnimatePresence>
        </BrowserFrame>
      </div>
    </motion.div>
  );
}
