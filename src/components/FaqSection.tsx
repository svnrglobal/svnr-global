import { motion } from "motion/react";

interface Faq {
  q: string;
  a: string;
}

export default function FaqSection({ faqs, title = "Common questions" }: { faqs: Faq[]; title?: string }) {
  if (!faqs || faqs.length === 0) return null;
  return (
    <section className="relative z-10 bg-[#0A0A0B] py-20 px-6 border-t border-white/8">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">FAQ</p>
          <h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-10">{title}</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="border-b border-white/8 pb-6"
              >
                <h3 className="text-white font-medium mb-3 text-[15px]">{faq.q}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
