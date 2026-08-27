import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SEO from "../components/SEO";
import Counter from "../components/Counter";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";
import OpticalType from "../components/OpticalType";
import { CASE_STUDIES } from "../data/caseStudies";

const MONO = { fontFamily: "var(--font-mono)" };
const EASE = [0.16, 1, 0.3, 1] as const;

const schema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Case Studies, SVNR Global",
  "description": "Real results across luxury real estate, wealth management, law firms, dental clinics, hotels, healthcare, manufacturing, e-commerce, and aesthetic clinics.",
  "url": "https://svnrglobal.com/case-studies",
  "publisher": { "@type": "Organization", "name": "SVNR Global", "url": "https://svnrglobal.com" },
};

// Counted from the record itself rather than hard-coded, so the strip can never
// drift out of step with the rows below it.
const INDUSTRY_COUNT = new Set(CASE_STUDIES.map((c) => c.industry)).size;

const HERO_STATS = [
  { v: String(INDUSTRY_COUNT), l: "Industries transformed" },
  { v: "$513M+", l: "Pipeline generated" },
  { v: "212–340%", l: "Revenue growth range" },
  { v: "54–93%", l: "Efficiency gains" },
];

// THE STRIPE MOMENT — the headline result is the only thing on the row that
// moves. It counts up and overshoots by ~3% before settling, so each engagement
// reads as an instrument taking a reading rather than a number being asserted.
// The supporting metrics stay static: one reading per row, not four.
function ResultRow({ cs, i }: { cs: (typeof CASE_STUDIES)[number]; i: number }) {
  const [headline, ...rest] = cs.keyMetrics;
  const flipped = i % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: EASE }}
      className="border-t border-white/[0.06]"
    >
      <Link
        to={`/case-studies/${cs.slug}`}
        className="group block hover:bg-white/[0.015] transition-colors duration-300"
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className={flipped ? "lg:order-2" : undefined}>
            <p className="text-[10px] tracking-[0.28em] text-white/40" style={MONO}>
              {cs.industryCode} · {cs.industry.toUpperCase()}
            </p>
            <h3 className="text-white text-xl md:text-[26px] font-medium leading-snug tracking-tight mt-5 max-w-xl">
              {cs.title}
            </h3>
            <p className="text-[10px] tracking-[0.2em] text-white/30 mt-5" style={MONO}>
              {cs.duration.toUpperCase()} · {cs.location.toUpperCase()}
            </p>
            <span className="inline-flex items-center gap-2 text-sm text-white/50 group-hover:text-white transition-colors duration-300 mt-7">
              Read case study
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </div>

          <div className={flipped ? "lg:order-1" : undefined}>
            <Counter
              value={headline.value}
              duration={1.6}
              className="block text-5xl md:text-[72px] font-medium text-white tabular-nums leading-[0.95] tracking-tight"
            />
            <p className="text-[10px] tracking-[0.28em] text-white/40 mt-4" style={MONO}>
              {headline.label.toUpperCase()}
            </p>
            {rest.length > 0 && (
              <div className="grid grid-cols-2 gap-6 mt-8 pt-7 border-t border-white/[0.06] max-w-md">
                {rest.slice(0, 2).map((m) => (
                  <div key={m.label}>
                    <span className="block text-lg text-white/70 font-medium tabular-nums leading-none">
                      {m.value}
                    </span>
                    <p className="text-[9px] tracking-[0.2em] text-white/30 mt-2 leading-relaxed" style={MONO}>
                      {m.label.toUpperCase()}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function CaseStudies() {
  return (
    <main className="relative w-full bg-black font-sans selection:bg-white/20 selection:text-white">
      <SEO
        title="Case Studies — AI Client Acquisition Results | SVNR Global"
        description="Real results across luxury real estate, wealth management, law firms, dental clinics, hotels & resorts, private healthcare, manufacturing export, e-commerce, and aesthetic clinics."
        canonical="/case-studies"
        schema={schema}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Case Studies", url: "/case-studies" },
        ]}
      />

      {/* HERO */}
      <section className="relative z-10 px-6 md:px-12 pt-32 md:pt-44 pb-16 md:pb-24">
        <div className="max-w-[1200px] mx-auto">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Case Studies" }]} />
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="text-[10px] tracking-[0.28em] text-white/40 mb-6"
            style={MONO}
          >
            DOCUMENTED RESULTS
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
          >
            <OpticalType className="text-4xl sm:text-5xl md:text-[64px] font-medium text-white leading-[1.05] tracking-tight max-w-3xl">
              Infrastructure that produces results.
            </OpticalType>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="text-white/45 text-base md:text-lg mt-6 max-w-xl leading-relaxed"
          >
            Every result below is real, documented, and replicable.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 mt-9"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors"
            >
              Book a consultation <ArrowRight size={14} />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/[0.14] text-white/80 text-sm hover:border-white/30 hover:text-white transition-colors"
            >
              The agent stack <ArrowRight size={14} />
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 md:mt-16">
            {HERO_STATS.map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: EASE }}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.015] hover:border-white/[0.14] hover:bg-white/[0.028] transition-colors duration-300 px-6 py-5"
              >
                <Counter
                  value={s.v}
                  className="block text-2xl md:text-[28px] font-medium text-white tabular-nums leading-none"
                />
                <p className="text-[10px] tracking-[0.28em] text-white/40 mt-3" style={MONO}>
                  {s.l.toUpperCase()}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* THE RECORD — full-bleed rows, one engagement each */}
      <section className="relative z-10 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 pt-20 md:pt-28 pb-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <p className="text-[10px] tracking-[0.28em] text-white/40 mb-5" style={MONO}>
              THE RECORD
            </p>
            <h2 className="text-2xl md:text-4xl font-medium text-white tracking-tight">
              What each engagement produced.
            </h2>
          </motion.div>
        </div>

        {CASE_STUDIES.map((cs, i) => (
          <ResultRow key={cs.slug} cs={cs} i={i} />
        ))}
      </section>

      {/* CTA */}
      <section className="relative z-10 px-6 md:px-12 py-20 md:py-28 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: EASE }}
            className="max-w-2xl"
          >
            <p className="text-[10px] tracking-[0.28em] text-white/40 mb-5" style={MONO}>
              YOUR INDUSTRY
            </p>
            <h2 className="text-2xl md:text-4xl font-medium text-white tracking-tight leading-tight mb-5">
              Every one of these started with a single conversation.
            </h2>
            <p className="text-white/45 text-base leading-relaxed mb-9">
              Book a call and we'll show you what the infrastructure looks like built for your market, your sector, and
              your exact acquisition challenge.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors"
              >
                Book a consultation <ArrowRight size={14} />
              </Link>
              <Link
                to="/sectors"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/[0.14] text-white/80 text-sm hover:border-white/30 hover:text-white transition-colors"
              >
                Browse sectors <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="relative z-10 px-6 md:px-12 pb-10 max-w-[1200px] mx-auto">
        <Footer />
      </div>
    </main>
  );
}
