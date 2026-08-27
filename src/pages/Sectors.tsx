import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SECTORS } from "../data/content";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import Breadcrumbs from "../components/Breadcrumbs";
import OpticalType from "../components/OpticalType";
import Counter from "../components/Counter";
import { SECTOR_MINI } from "../components/minis";
import { useIdleMischief } from "../hooks/useIdleMischief";

const MONO = { fontFamily: "var(--font-mono)" };
const EASE = [0.16, 1, 0.3, 1] as const;

type Sector = (typeof SECTORS)[number];

// Bento tiling: 2/1 · 1/2 · 2/1 · 1/2 fills four clean rows of three columns.
const SPANS: Record<string, 1 | 2> = {
  "luxury-rugs-home-textiles": 2,
  "premium-real-estate": 1,
  "private-equity-family-offices": 1,
  "b2b-luxury-brands": 2,
  "wealth-management": 2,
  "high-ticket-ecommerce": 1,
  "maritime-logistics": 1,
  "professional-services": 2,
};

// The data encodes units as suffixes ("€+", "min"). Render them as a human
// would write them — currency in front, word units spaced. No value is changed.
function fmtMetric(value: string | number, unit: string): string {
  const v = String(value);
  if (unit.startsWith("€") || unit.startsWith("$")) return `${unit[0]}${v}${unit.slice(1)}`;
  if (/^[a-z]{2,}$/.test(unit)) return `${v} ${unit}`;
  return `${v}${unit}`;
}

function SectorCard({ s, i }: { s: Sector; i: number }) {
  const { lit, mischief, bind } = useIdleMischief();
  const span = SPANS[s.slug] ?? 1;
  // Mischief replays the demo unprompted once, a beat after the reader leaves.
  const active = lit || mischief;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, transition: { duration: 0.22, ease: "easeOut" } }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: i * 0.05, ease: EASE }}
      className={span === 2 ? "md:col-span-2" : "md:col-span-1"}
    >
      <Link
        to={`/sectors/${s.slug}`}
        {...bind}
        className="group relative flex flex-col justify-end h-full min-h-[280px] rounded-2xl border border-white/[0.08] bg-white/[0.015] hover:border-white/[0.14] hover:bg-white/[0.028] transition-colors duration-300 overflow-hidden p-7"
      >
        <span
          className="absolute top-6 left-7 text-[10px] tracking-widest text-white/20 tabular-nums transition-colors duration-300 group-hover:text-white/40"
          style={MONO}
        >
          {s.number}
        </span>
        <ArrowRight
          size={14}
          className="absolute top-6 right-7 text-white/20 group-hover:text-white/70 group-hover:translate-x-1 transition-all duration-300"
        />

        {SECTOR_MINI[s.slug]?.(active)}

        <div className="relative z-10 mt-auto">
          <h3 className="text-white text-lg md:text-xl font-medium tracking-tight mb-1.5">{s.label}</h3>
          <p className="text-white/40 text-sm leading-snug">{s.title}</p>
        </div>
      </Link>
    </motion.div>
  );
}

// THE STRIPE MOMENT — the whole book of numbers as one instrument panel.
// Twenty-four readings settle into place as the panel scrolls in, each one an
// actual figure from the sector data. Delete it and the buyer loses every
// number on the page, which is exactly why it stays.
function IndexLedger() {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.015] overflow-hidden divide-y divide-white/[0.06]">
      {SECTORS.map((s, i) => (
        <motion.div
          key={s.slug}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, delay: i * 0.05, ease: EASE }}
        >
          <Link
            to={`/sectors/${s.slug}`}
            className="group grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)_auto] items-center gap-5 lg:gap-8 px-6 md:px-8 py-6 hover:bg-white/[0.02] transition-colors duration-300"
          >
            <div className="min-w-0">
              <div className="flex items-baseline gap-3">
                <span className="text-[10px] tracking-widest text-white/20 tabular-nums shrink-0" style={MONO}>
                  {s.number}
                </span>
                <h3 className="text-white text-base font-medium tracking-tight">{s.label}</h3>
              </div>
              <p className="text-white/35 text-xs leading-relaxed mt-1.5">{s.proof}</p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {s.metrics.map((m) => (
                <div key={m.label} className="min-w-0">
                  <Counter
                    value={fmtMetric(m.value, m.unit)}
                    className="block text-lg md:text-xl font-medium text-white tabular-nums leading-none"
                  />
                  <p className="text-[9px] tracking-[0.18em] text-white/30 mt-2 leading-tight" style={MONO}>
                    {m.label.toUpperCase()}
                  </p>
                </div>
              ))}
            </div>

            <ArrowRight
              size={14}
              className="hidden lg:block text-white/20 group-hover:text-white/70 group-hover:translate-x-1 transition-all duration-300"
            />
          </Link>
        </motion.div>
      ))}
    </div>
  );
}

export default function Sectors() {
  return (
    <main className="relative w-full bg-black font-sans selection:bg-white/20 selection:text-white">
      <SEO
        title="Industries We Serve — Luxury, Real Estate, Private Equity & More | SVNR Global"
        description="SVNR Global delivers AI client acquisition systems tailored to luxury rug brands, premium real estate firms, private equity, wealth management, maritime, B2B luxury, and high-ticket e-commerce operators."
        canonical="/sectors"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Industries", url: "/sectors" }]}
        schema={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Industries Served by SVNR Global",
          "url": "https://svnrglobal.com/sectors",
          "description": "Sector-specific AI outreach and client acquisition for luxury, real estate, private equity, wealth management, maritime, and more.",
          "publisher": { "@type": "Organization", "name": "SVNR Global", "url": "https://svnrglobal.com" }
        }}
      />

      {/* HERO */}
      <section className="relative z-10 px-6 md:px-12 pt-32 md:pt-44 pb-14 md:pb-20">
        <div className="max-w-[1200px] mx-auto">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Industries" }]} />
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="text-[10px] tracking-[0.28em] text-white/40 mb-6"
            style={MONO}
          >
            INDUSTRIES
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
          >
            <OpticalType className="text-4xl sm:text-5xl md:text-[64px] font-medium text-white leading-[1.05] tracking-tight max-w-3xl">
              We operate in eight industries.
            </OpticalType>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="text-white/45 text-base md:text-lg mt-6 max-w-xl leading-relaxed"
          >
            Each industry has its own operating rhythm. We build accordingly.
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
        </div>
      </section>

      {/* BENTO — every card runs its own sector's demo on hover */}
      <section className="relative z-10 px-6 md:px-12 pb-20 md:pb-28">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {SECTORS.map((s, i) => (
              <SectorCard key={s.slug} s={s} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* THE INDEX */}
      <section className="relative z-10 px-6 md:px-12 py-20 md:py-28 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: EASE }}
            className="mb-10 max-w-2xl"
          >
            <p className="text-[10px] tracking-[0.28em] text-white/40 mb-5" style={MONO}>
              THE INDEX
            </p>
            <h2 className="text-2xl md:text-4xl font-medium text-white tracking-tight leading-tight mb-5">
              The numbers behind each industry.
            </h2>
            <p className="text-white/45 text-base leading-relaxed">
              Every row links through to the full sector breakdown.
            </p>
          </motion.div>

          <IndexLedger />
        </div>
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
              NEXT
            </p>
            <h2 className="text-2xl md:text-4xl font-medium text-white tracking-tight leading-tight mb-5">
              Find the system built for your market.
            </h2>
            <p className="text-white/45 text-base leading-relaxed mb-9">
              Each system is built for your market. None are templates.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors"
              >
                Book a consultation <ArrowRight size={14} />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/[0.14] text-white/80 text-sm hover:border-white/30 hover:text-white transition-colors"
              >
                See the work <ArrowRight size={14} />
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
