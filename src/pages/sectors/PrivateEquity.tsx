import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Footer from "../../components/Footer";
import FaqSection from "../../components/FaqSection";
import SEO from "../../components/SEO";
import Breadcrumbs from "../../components/Breadcrumbs";
import OpticalType from "../../components/OpticalType";
import Counter from "../../components/Counter";
import { SECTOR_MINI } from "../../components/minis";
import { useIdleMischief } from "../../hooks/useIdleMischief";

const MONO = { fontFamily: "var(--font-mono)" };
const EASE = [0.16, 1, 0.3, 1] as const;

const HERO_STATS = [
  { v: "75%", l: "Pre-process deal flow" },
  { v: "2K+", l: "GP network contacts" },
  { v: "€50M+", l: "Avg. deal size tracked" },
];

// Deals sourced before the teaser lands, against deals that arrived with a banker attached.
const PIPELINE = [
  { q: "Q1", pre: 3, banker: 1 },
  { q: "Q2", pre: 5, banker: 2 },
  { q: "Q3", pre: 7, banker: 2 },
  { q: "Q4", pre: 8, banker: 2 },
];
const PIPELINE_MAX = 8;

// Why a founder becomes reachable. Share of observed trigger events.
const SIGNALS = [
  { name: "Succession", value: 35 },
  { name: "Capital need", value: 28 },
  { name: "Market consolidation", value: 22 },
  { name: "Strategic", value: 15 },
];

const MILESTONES = [
  { n: "01", when: "Week 0", label: "Founder universe mapped" },
  { n: "02", when: "Week 2 to 3", label: "Signal monitoring live" },
  { n: "03", when: "Day 30 to 60", label: "First proprietary conversations" },
  { n: "04", when: "Day 90", label: "Meaningful starting position" },
];

const services = [
  { slug: "dealflow-investor", label: "Dealflow for Investors", desc: "Proprietary deal flow infrastructure: mandate defined, targets mapped, founders reached before the banker deck arrives." },
  { slug: "intelligence-research", label: "Intelligence Research", desc: "Sector maps built to investment thesis depth. Company profiles, ownership structure, succession signals, EBITDA inference." },
  { slug: "brand-outreach", label: "Brand Outreach", desc: "Founder-appropriate outreach that does not read like a financial pitch. Written for the individual, not the category." },
  { slug: "revenue-operations", label: "Revenue Operations", desc: "Full pipeline visibility across all active deal relationships, stage, last contact, next action, and conversion signal." },
];

const insights = [
  "The most valuable transaction a PE firm executes is the one it sourced before anyone else knew it was available. Not because the company was hidden, because the firm had a relationship with the founder three months before the formal process.",
  "A thesis specific enough to generate a researchable target universe is the foundation of proprietary deal flow. 'B2B services in Western Europe' is a category. 'Founder-led industrial maintenance businesses with 8-20M EBITDA and no succession plan' is a thesis.",
  "The volume trap: 500 generic emails to founders produce no relationships. 50 thoughtful, research-anchored contacts produce 50 first steps toward genuine conversations. The pipeline that generates proprietary deals is deep, not wide.",
  "Founders remember which firms have been intelligent and specific in their outreach. The firm they call when the moment arrives is the one they have had the most substantive conversations with, not the most recognisable name.",
];

const IMAGES = [
  "/sectors/private-equity-photo-1504711434969-e33886168f5c.avif",
  "/sectors/private-equity-photo-1506787497326-c2736dde1bef.avif",
  "/sectors/private-equity-premium_photo-1679456904325-19ca215974a7.avif",
];

const RELATED = [
  { to: "/blog/private-equity-proprietary-deal-flow", label: "PE Proprietary Deal Flow" },
  { to: "/blog/ai-prospecting-family-offices", label: "AI Prospecting for Family Offices" },
];

const PRIVATE_EQUITY_FAQS = [
  { q: "What is proprietary deal flow in private equity?", a: "Proprietary deal flow refers to investment opportunities a PE firm identifies and approaches directly, before the company enters a formal sale process or engages an investment bank. These deals avoid competitive bidding and typically command better entry terms." },
  { q: "How do PE firms find companies before they go to market?", a: "Through systematic outreach to founders and management teams in target sectors, using AI-driven research to identify companies matching the fund's investment thesis, then building relationships before a formal sale process begins. Trigger signals including succession planning, debt maturity, and sector consolidation are monitored continuously." },
  { q: "How long does it take to build proprietary deal flow?", a: "A structured 90-day programme identifies qualifying targets and initiates founder conversations. Meaningful deal flow from those relationships typically materialises within 6–18 months, as founders reach the moment of readiness for a transaction." },
  { q: "Can SVNR Global help family offices find new GPs and fund managers?", a: "Yes. SVNR builds GP-to-LP relationship infrastructure for family offices and institutional investors, mapping qualified fund managers by mandate, strategy, and track record, then facilitating introductions through systematic outreach." },
];

// THE STRIPE MOMENT — the sector's own mini, blown up to hero scale inside a
// bordered instrument panel. The bar fills on load, and fills once more, quietly,
// about eight seconds after a reader hovers it and moves on.
//
// The inner stage is sized at 62.5% and scaled 1.6 so the enlarged demo lands
// exactly inside the panel: the 75% fill never runs off the edge.
function DealFlowArtefact() {
  const { mischief, bind } = useIdleMischief();
  const [replay, setReplay] = useState(0);

  useEffect(() => {
    if (mischief) setReplay((n) => n + 1);
  }, [mischief]);

  return (
    <motion.div
      {...bind}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
      className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.015] hover:border-white/[0.14] hover:bg-white/[0.028] transition-colors duration-300 min-h-[300px] md:min-h-[380px] p-7"
    >
      <div className="relative z-10 flex items-start justify-between gap-4">
        <span className="text-[10px] tracking-[0.28em] text-white/40" style={MONO}>
          DEAL FLOW SOURCE
        </span>
        <span className="text-[10px] tracking-[0.2em] text-white/25" style={MONO}>
          OFF-MARKET
        </span>
      </div>

      <div className="absolute inset-x-6 top-[3.25rem] bottom-6">
        <div key={replay} className="relative w-[62.5%] h-[62.5%] origin-top-left scale-[1.6]">
          {SECTOR_MINI["private-equity-family-offices"]?.(true)}
        </div>
      </div>

      <p className="absolute z-10 bottom-7 left-7 right-7 text-[10px] text-white/30 leading-relaxed" style={MONO}>
        75 of every 100 deal conversations open before the formal process
      </p>
    </motion.div>
  );
}

// Two bars a quarter: what we sourced, and what the bankers sent. The gap is the argument.
function SourcingSplit() {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.015] p-7">
      <p className="text-[10px] tracking-[0.28em] text-white/40" style={MONO}>
        PRE-PROCESS VS BANKER-LED
      </p>
      <div className="flex items-center gap-5 mt-3 mb-6">
        <span className="flex items-center gap-2 text-[9px] tracking-widest text-white/30" style={MONO}>
          <span className="w-2 h-2 rounded-sm bg-white/35" /> PRE-PROCESS
        </span>
        <span className="flex items-center gap-2 text-[9px] tracking-widest text-white/30" style={MONO}>
          <span className="w-2 h-2 rounded-sm bg-white/12" /> BANKER-LED
        </span>
      </div>
      <div className="flex items-end gap-4 h-40">
        {PIPELINE.map((p, i) => (
          <div key={p.q} className="flex-1 h-full flex flex-col justify-end items-center gap-2">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.3, delay: 0.35 + i * 0.09 }}
              className="text-[12px] text-white/60 tabular-nums"
              style={MONO}
            >
              {p.pre}
              <span className="text-white/25"> / {p.banker}</span>
            </motion.span>
            <div className="w-full flex-1 flex items-end gap-1.5">
              <div className="flex-1 h-full flex items-end rounded-t bg-white/[0.04] overflow-hidden">
                <motion.div
                  className="w-full rounded-t bg-white/35"
                  initial={{ height: 0 }}
                  whileInView={{ height: `${(p.pre / PIPELINE_MAX) * 100}%` }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.09, ease: EASE }}
                />
              </div>
              <div className="flex-1 h-full flex items-end rounded-t bg-white/[0.04] overflow-hidden">
                <motion.div
                  className="w-full rounded-t bg-white/12"
                  initial={{ height: 0 }}
                  whileInView={{ height: `${(p.banker / PIPELINE_MAX) * 100}%` }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: 0.06 + i * 0.09, ease: EASE }}
                />
              </div>
            </div>
            <span className="text-[9px] tracking-widest text-white/25" style={MONO}>
              {p.q}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// What actually makes a founder reachable, by share of observed triggers.
function TriggerSignals() {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.015] p-7">
      <p className="text-[10px] tracking-[0.28em] text-white/40 mb-6" style={MONO}>
        DEAL TRIGGER SIGNALS · DISTRIBUTION
      </p>
      <div className="flex flex-col gap-4">
        {SIGNALS.map((s, i) => (
          <div key={s.name}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] text-white/50">{s.name}</span>
              <span className="text-[10px] text-white/35 tabular-nums" style={MONO}>
                {s.value}%
              </span>
            </div>
            <div className="h-[3px] rounded-full bg-white/[0.06] overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-white/40"
                initial={{ width: "0%" }}
                whileInView={{ width: `${s.value}%` }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PrivateEquity() {
  return (
    <main className="relative w-full bg-black font-sans selection:bg-white/20 selection:text-white">
      <SEO
        title="Private Equity Deal Flow & Investor Relations | SVNR Global"
        description="Proprietary deal flow for private equity firms and family offices. We reach founders before formal sale processes begin. Off-market pipeline, LP acquisition, and GP relationship infrastructure — built on AI-driven outreach."
        canonical="/sectors/private-equity-family-offices"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Private Equity Proprietary Deal Flow & Investor Relations",
            "provider": { "@id": "https://svnrglobal.com/#organization" },
            "description": "AI-driven proprietary deal flow infrastructure for PE firms and family offices. We identify and reach founders before formal sale processes begin, delivering off-market opportunities and fund LP relationships.",
            "areaServed": ["Global", "Europe", "Middle East", "United Kingdom", "India"],
            "serviceType": ["Proprietary Deal Flow", "PE Founder Outreach", "LP Acquisition", "Family Office Prospecting"]
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is proprietary deal flow in private equity?",
                "acceptedAnswer": { "@type": "Answer", "text": "Proprietary deal flow refers to investment opportunities a PE firm identifies and approaches directly, before the company enters a formal sale process or engages an investment bank. These deals avoid competitive bidding and typically command better entry terms." }
              },
              {
                "@type": "Question",
                "name": "How do PE firms find companies before they go to market?",
                "acceptedAnswer": { "@type": "Answer", "text": "Through systematic outreach to founders and management teams in target sectors, using AI-driven research to identify companies matching the fund's investment thesis, then building relationships before a formal sale process begins. Trigger signals including succession planning, debt maturity, and sector consolidation are monitored continuously." }
              },
              {
                "@type": "Question",
                "name": "How long does it take to build proprietary deal flow?",
                "acceptedAnswer": { "@type": "Answer", "text": "A structured 90-day programme identifies qualifying targets and initiates founder conversations. Meaningful deal flow from those relationships typically materialises within 6–18 months, as founders reach the moment of readiness for a transaction." }
              },
              {
                "@type": "Question",
                "name": "Can SVNR Global help family offices find new GPs and fund managers?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes. SVNR builds GP-to-LP relationship infrastructure for family offices and institutional investors, mapping qualified fund managers by mandate, strategy, and track record, then facilitating introductions through systematic outreach." }
              }
            ]
          }
        ]}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Sectors", url: "/sectors" },
          { name: "Private Equity & Family Offices", url: "/sectors/private-equity-family-offices" },
        ]}
      />

      {/* HERO */}
      <section className="relative z-10 px-6 md:px-12 pt-32 md:pt-44 pb-16 md:pb-24">
        <div className="max-w-[1200px] mx-auto">
          <Breadcrumbs
            items={[{ label: "Home", to: "/" }, { label: "Sectors", to: "/sectors" }, { label: "Private Equity & Family Offices" }]}
          />
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="text-[10px] tracking-[0.28em] text-white/40 mb-6"
                style={MONO}
              >
                SECTOR 03 · PRIVATE EQUITY & FAMILY OFFICES
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
              >
                <OpticalType className="text-4xl sm:text-5xl md:text-[64px] font-medium text-white leading-[1.05] tracking-tight">
                  Deal flow before the process.
                </OpticalType>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.22 }}
                className="text-white/45 text-base md:text-lg mt-6 max-w-xl leading-relaxed"
              >
                Proprietary pipeline infrastructure for investors who need to see opportunities before they are
                formally marketed.
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
                  Discuss your mandate <ArrowRight size={14} />
                </Link>
                <Link
                  to="/sectors"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/[0.14] text-white/80 text-sm hover:border-white/30 hover:text-white transition-colors"
                >
                  All sectors <ArrowRight size={14} />
                </Link>
              </motion.div>
            </div>

            <DealFlowArtefact />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 md:mt-16">
            {HERO_STATS.map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: EASE }}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.015] hover:border-white/[0.14] hover:bg-white/[0.028] transition-colors duration-300 px-6 py-5"
              >
                <Counter value={s.v} className="block text-2xl md:text-[28px] font-medium text-white tabular-nums leading-none" />
                <p className="text-[10px] tracking-[0.28em] text-white/40 mt-3" style={MONO}>
                  {s.l.toUpperCase()}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="relative z-10 px-6 md:px-12 py-20 md:py-28 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: EASE }}
            className="rounded-2xl border border-white/[0.08] bg-white/[0.015] p-8 md:p-12"
          >
            <p className="text-[10px] tracking-[0.28em] text-white/40 mb-6" style={MONO}>
              PROOF
            </p>
            <p className="text-xl md:text-3xl font-medium text-white tracking-tight leading-snug max-w-3xl">
              A wealth boutique. A qualified principal list built and verified before the first outreach message was
              sent. 75% of deal conversations initiated before any formal process began.
            </p>
          </motion.div>
        </div>
      </section>

      {/* THE MARKET REALITY */}
      <section className="relative z-10 px-6 md:px-12 py-20 md:py-28 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <p className="text-[10px] tracking-[0.28em] text-white/40 mb-5" style={MONO}>
              THE MARKET REALITY
            </p>
            <h2 className="text-2xl md:text-4xl font-medium text-white tracking-tight leading-tight mb-6">
              By the time the teaser arrives, you are already competing.
            </h2>
            {insights.map((insight, i) => (
              <p
                key={i}
                className={`text-white/45 text-sm leading-relaxed ${i === insights.length - 1 ? "" : "mb-4"}`}
              >
                {insight}
              </p>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.08, ease: EASE }}
            className="flex flex-col gap-4"
          >
            <SourcingSplit />
            <TriggerSignals />
          </motion.div>
        </div>
      </section>

      {/* SECTOR IMAGERY */}
      <section className="relative z-10 px-6 md:px-12 pb-4">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
          {IMAGES.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: EASE }}
              className="rounded-2xl border border-white/[0.08] overflow-hidden aspect-[4/3]"
            >
              <img
                loading="lazy"
                decoding="async"
                src={src}
                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                alt="Private equity proprietary deal flow and founder outreach infrastructure"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* THE 90-DAY PATH */}
      <section className="relative z-10 px-6 md:px-12 py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: EASE }}
            className="mb-10"
          >
            <p className="text-[10px] tracking-[0.28em] text-white/40 mb-5" style={MONO}>
              THE 90-DAY PATH
            </p>
            <h2 className="text-2xl md:text-4xl font-medium text-white tracking-tight">
              From engagement to active pipeline.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {MILESTONES.map((m, i) => (
              <motion.div
                key={m.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: EASE }}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.015] hover:border-white/[0.14] hover:bg-white/[0.028] transition-colors duration-300 p-6"
              >
                <span className="text-[10px] tracking-widest text-white/20 tabular-nums" style={MONO}>
                  {m.n}
                </span>
                <p className="text-[10px] tracking-[0.28em] text-white/40 mt-5" style={MONO}>
                  {m.when.toUpperCase()}
                </p>
                <p className="text-white text-sm font-medium leading-snug mt-2">{m.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICABLE SYSTEMS */}
      <section className="relative z-10 px-6 md:px-12 py-20 md:py-28 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: EASE }}
            className="mb-10"
          >
            <p className="text-[10px] tracking-[0.28em] text-white/40 mb-5" style={MONO}>
              APPLICABLE SYSTEMS
            </p>
            <h2 className="text-2xl md:text-4xl font-medium text-white tracking-tight">
              Built for investor deal sourcing.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((s, i) => (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4, transition: { duration: 0.22, ease: "easeOut" } }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: EASE }}
              >
                <Link
                  to={`/services/${s.slug}`}
                  className="group relative flex flex-col h-full rounded-2xl border border-white/[0.08] bg-white/[0.015] hover:border-white/[0.14] hover:bg-white/[0.028] transition-colors duration-300 p-7"
                >
                  <ArrowRight
                    size={14}
                    className="absolute top-7 right-7 text-white/20 group-hover:text-white/70 group-hover:translate-x-1 transition-all duration-300"
                  />
                  <h3 className="text-white text-lg md:text-xl font-medium tracking-tight mb-2 pr-8">{s.label}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{s.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
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
              See the deal before the banker does.
            </h2>
            <p className="text-white/45 text-base leading-relaxed mb-9">
              We build the proprietary sourcing infrastructure that produces founder relationships before any formal
              process begins.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors"
              >
                Discuss your mandate <ArrowRight size={14} />
              </Link>
              <Link
                to="/services/dealflow-investor"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/[0.14] text-white/80 text-sm hover:border-white/30 hover:text-white transition-colors"
              >
                Dealflow for investors <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <FaqSection faqs={PRIVATE_EQUITY_FAQS} title="Common questions about private equity deal flow" />

      {/* RELATED INSIGHTS */}
      <section className="relative z-10 px-6 md:px-12 py-20 md:py-24 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: EASE }}
            className="mb-8"
          >
            <p className="text-[10px] tracking-[0.28em] text-white/40 mb-5" style={MONO}>
              RELATED INSIGHTS
            </p>
            <h2 className="text-2xl md:text-4xl font-medium text-white tracking-tight">From the SVNR blog</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {RELATED.map((r, i) => (
              <motion.div
                key={r.to}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: EASE }}
              >
                <Link
                  to={r.to}
                  className="group relative flex items-center justify-between gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.015] hover:border-white/[0.14] hover:bg-white/[0.028] transition-colors duration-300 p-6"
                >
                  <div>
                    <p className="text-[10px] tracking-[0.28em] text-white/40 mb-2" style={MONO}>
                      READ
                    </p>
                    <p className="text-white text-sm font-medium leading-snug">{r.label}</p>
                  </div>
                  <ArrowRight
                    size={14}
                    className="shrink-0 text-white/20 group-hover:text-white/70 group-hover:translate-x-1 transition-all duration-300"
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="relative z-10 px-6 md:px-12 pb-10 max-w-[1200px] mx-auto">
        <Footer />
      </div>
    </main>
  );
}
