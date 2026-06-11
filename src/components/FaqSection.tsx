import { useState } from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

interface Faq {
  q: string;
  a: string;
}

// Accordion FAQ. Answers stay mounted (height-animated) so crawlers and the
// FAQPage JSON-LD always see the full text; only the visual state collapses.
function FaqItem({ faq, index, defaultOpen }: { faq: Faq; index: number; defaultOpen: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: Math.min(index * 0.06, 0.4) }}
      className="border-b border-white/8"
    >
      <h3 className="text-white font-medium text-[15px]">
        <button
          type="button"
          aria-expanded={open}
          aria-controls={`faq-a-${index}`}
          onClick={() => setOpen((v) => !v)}
          className="w-full flex items-center justify-between gap-4 text-left py-5 hover:text-white/80 transition-colors"
        >
          <span>{faq.q}</span>
          <ChevronDown
            size={16}
            className="shrink-0 text-white/35 transition-transform duration-300"
            style={{ transform: open ? "rotate(180deg)" : "none" }}
          />
        </button>
      </h3>
      <motion.div
        id={`faq-a-${index}`}
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
      >
        <p className="text-white/55 text-sm leading-relaxed pb-6">{faq.a}</p>
      </motion.div>
    </motion.div>
  );
}

export default function FaqSection({ faqs, title = "Common questions" }: { faqs: Faq[]; title?: string }) {
  if (!faqs || faqs.length === 0) return null;
  return (
    <section className="relative z-10 bg-[#0A0A0B] py-20 px-6 border-t border-white/8">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">FAQ</p>
          <h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-6">{title}</h2>
          <div>
            {faqs.map((faq, i) => (
              <FaqItem key={i} faq={faq} index={i} defaultOpen={i === 0} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
