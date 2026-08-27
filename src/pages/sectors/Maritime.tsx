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
  { v: "3K+", l: "Cargo owner contacts mapped" },
  { v: "15+", l: "Commercial leads / quarter" },
  { v: "8", l: "Sectors covered" },
];

// Commercial leads as the quarter-on-quarter build actually runs.
const LEADS = [
  { q: "Q1", leads: 4 },
  { q: "Q2", leads: 8 },
  { q: "Q3", leads: 12 },
  { q: "Q4", leads: 15 },
];

// The mapped cargo owner universe, by shipping sector.
const DISTRIBUTION = [
  { name: "Dry bulk", v: 35 },
  { name: "Tankers", v: 28 },
  { name: "Containers", v: 22 },
  { name: "Offshore", v: 15 },
];

const MILESTONES = [
  { n: "01", when: "Week 0", label: "Cargo owner universe mapped" },
  { n: "02", when: "Week 2 to 3", label: "Outreach live" },
  { n: "03", when: "Day 30 to 60", label: "First charterer conversations" },
  { n: "04", when: "Day 90", label: "Relationship pipeline active" },
];

const services = [
  { slug: "client-acquisition", label: "Client Acquisition", desc: "Cargo owner identification, charterer outreach, and port services acquisition, researched and deployed systematically." },
  { slug: "intelligence-research", label: "Intelligence Research", desc: "Cargo owner databases, fleet movement data, and commercial signal monitoring built into a continuous intelligence layer." },
  { slug: "brand-outreach", label: "Brand Outreach", desc: "Commercial outreach written for the shipping industry, specific, professional, and calibrated to how principals communicate." },
  { slug: "sector-workflows", label: "Sector Workflows", desc: "Charter negotiation workflows, port call coordination, and commercial operations automated to reduce manual overhead." },
];

const IMAGES = [
  "/sectors/maritime-66696B36-CAA5-4117-AA93-881FBF985E5C.JPG",
  "/sectors/maritime-BDEF64CC-72BD-4FF6-BEB8-883C73230CB0.JPG",
];

const RELATED = [
  { to: "/blog/maritime-logistics-business-development", label: "Maritime Business Development" },
  { to: "/blog/client-acquisition-system-vs-campaign", label: "System vs Campaign" },
];

const MARITIME_FAQS = [
  { q: "How do shipping companies get new cargo clients systematically?", a: "Through systematic outreach to logistics managers, supply chain directors, and procurement teams at companies whose cargo profile and trade lanes match the operator's capabilities, combined with tender intelligence to position before formal RFQ processes begin." },
  { q: "What is the best business development strategy for freight forwarding?", a: "Trade-lane specific outreach targeting shippers whose cargo requirements match the forwarder's network, combined with relationship building at the logistics manager level in mid-market manufacturers and retailers, and proactive positioning ahead of tender cycles." },
  { q: "How do maritime operators reach logistics decision-makers directly?", a: "By identifying logistics directors and supply chain managers at target companies through LinkedIn and industry association databases, then reaching them with messages that reference their specific trade lanes, cargo profile, and operational pressures, not generic freight service marketing." },
  { q: "What is tender intelligence in maritime and how does it help win new clients?", a: "Tender intelligence is awareness of upcoming freight procurement processes before they are formally issued, allowing the operator to build a relationship with the procurement team in advance. Operators who arrive at the tender stage with an existing relationship win at a significantly higher rate than those arriving cold." },
];

// THE STRIPE MOMENT — the sector's own mini, blown up to hero scale inside a
// bordered instrument panel. The lanes draw themselves in, ports resolve after
// them, and the whole reading replays once, quietly, about eight seconds after
// a reader hovers it and moves on.
function LaneArtefact() {
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
          TRADE LANES
        </span>
        <span className="text-[10px] tracking-[0.2em] text-white/25" style={MONO}>
          CARGO OWNER MAP
        </span>
      </div>

      <div key={replay} className="absolute inset-0 origin-top-left scale-[1.5] md:scale-[1.9]">
        {SECTOR_MINI["maritime-logistics"]?.(true)}
      </div>

      <p className="absolute z-10 bottom-7 left-7 right-7 text-[10px] text-white/30" style={MONO}>
        3,000+ contacts mapped across 8 shipping sectors
      </p>
    </motion.div>
  );
}

// Four quarters, bars growing from the floor. The shape of the build is the
// fact; there is nothing else to read here.
function LeadsBuild() {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.015] p-7">
      <p className="text-[10px] tracking-[0.28em] text-white/40 mb-7" style={MONO}>
        COMMERCIAL LEADS BY QUARTER
      </p>
      <div className="flex items-end gap-4 h-40">
        {LEADS.map((l, i) => (
          <div key={l.q} className="flex-1 h-full flex flex-col justify-end items-center gap-2">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.3, delay: 0.35 + i * 0.09 }}
              className="text-[13px] text-white/60 tabular-nums"
              style={MONO}
            >
              {l.leads}
            </motion.span>
            <div className="w-full flex-1 flex items-end rounded-t bg-white/[0.04] overflow-hidden">
              <motion.div
                className="w-full rounded-t bg-white/35"
                initial={{ height: 0 }}
                whileInView={{ height: `${(l.leads / 15) * 100}%` }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.09, ease: EASE }}
              />
            </div>
            <span className="text-[9px] tracking-widest text-white/25" style={MONO}>
              {l.q}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// The mapped universe, weighted. Bars run to the widest sector, so the reader
// sees the shape of the database rather than four numbers in a list.
function SectorSpread() {
  const max = Math.max(...DISTRIBUTION.map((d) => d.v));
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.015] p-7">
      <p className="text-[10px] tracking-[0.28em] text-white/40 mb-6" style={MONO}>
        CARGO OWNER DISTRIBUTION BY SECTOR
      </p>
      <div className="flex flex-col gap-3.5">
        {DISTRIBUTION.map((d, i) => (
          <div key={d.name}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] text-white/50" style={MONO}>
                {d.name}
              </span>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.08 }}
                className="text-[11px] text-white/40 tabular-nums"
                style={MONO}
              >
                {d.v}
              </motion.span>
            </div>
            <div className="h-[3px] rounded-full bg-white/[0.06] overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-white/40"
                initial={{ width: "0%" }}
                whileInView={{ width: `${(d.v / max) * 100}%` }}
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

export default function Maritime() {
  return (
    <main className="relative w-full bg-black font-sans selection:bg-white/20 selection:text-white">
      <SEO
        title="Maritime & Logistics Business Development | SVNR Global"
        description="Business development for maritime operators, shipping lines, and freight forwarders. We identify cargo owners and logistics decision-makers, build relationships before RFQs open, and deliver qualified commercial pipeline."
        canonical="/sectors/maritime-logistics"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Maritime & Logistics Business Development",
            "provider": { "@id": "https://svnrglobal.com/#organization" },
            "description": "Systematic cargo owner identification, charterer outreach, and commercial client acquisition for shipping operators, freight forwarders, and port services providers. Trade-lane specific outreach that builds maritime commercial relationships at scale.",
            "areaServed": ["Global", "Europe", "Middle East", "Asia", "West Africa", "Mediterranean"],
            "serviceType": ["Maritime Business Development", "Freight Forwarder Client Acquisition", "Cargo Owner Outreach", "Port Services Commercial Development"]
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How do shipping companies get new cargo clients systematically?",
                "acceptedAnswer": { "@type": "Answer", "text": "Through systematic outreach to logistics managers, supply chain directors, and procurement teams at companies whose cargo profile and trade lanes match the operator's capabilities, combined with tender intelligence to position before formal RFQ processes begin." }
              },
              {
                "@type": "Question",
                "name": "What is the best business development strategy for freight forwarding?",
                "acceptedAnswer": { "@type": "Answer", "text": "Trade-lane specific outreach targeting shippers whose cargo requirements match the forwarder's network, combined with relationship building at the logistics manager level in mid-market manufacturers and retailers, and proactive positioning ahead of tender cycles." }
              },
              {
                "@type": "Question",
                "name": "How do maritime operators reach logistics decision-makers directly?",
                "acceptedAnswer": { "@type": "Answer", "text": "By identifying logistics directors and supply chain managers at target companies through LinkedIn and industry association databases, then reaching them with messages that reference their specific trade lanes, cargo profile, and operational pressures, not generic freight service marketing." }
              },
              {
                "@type": "Question",
                "name": "What is tender intelligence in maritime and how does it help win new clients?",
                "acceptedAnswer": { "@type": "Answer", "text": "Tender intelligence is awareness of upcoming freight procurement processes before they are formally issued, allowing the operator to build a relationship with the procurement team in advance. Operators who arrive at the tender stage with an existing relationship win at a significantly higher rate than those arriving cold." }
              }
            ]
          }
        ]}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Sectors", url: "/sectors" },
          { name: "Maritime & Logistics", url: "/sectors/maritime-logistics" },
        ]}
      />

      {/* HERO */}
      <section className="relative z-10 px-6 md:px-12 pt-32 md:pt-44 pb-16 md:pb-24">
        <div className="max-w-[1200px] mx-auto">
          <Breadcrumbs
            items={[{ label: "Home", to: "/" }, { label: "Sectors", to: "/sectors" }, { label: "Maritime & Logistics" }]}
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
                SECTOR 07 · MARITIME &amp; LOGISTICS
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
              >
                <OpticalType className="text-4xl sm:text-5xl md:text-[64px] font-medium text-white leading-[1.05] tracking-tight">
                  Commercial relationships at port scale.
                </OpticalType>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.22 }}
                className="text-white/45 text-base md:text-lg mt-6 max-w-xl leading-relaxed"
              >
                For shipping operators, port services, and freight principals building commercial relationships with
                cargo owners and charterers.
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
                  Start the conversation <ArrowRight size={14} />
                </Link>
                <Link
                  to="/sectors"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/[0.14] text-white/80 text-sm hover:border-white/30 hover:text-white transition-colors"
                >
                  All sectors <ArrowRight size={14} />
                </Link>
              </motion.div>
            </div>

            <LaneArtefact />
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
              Commercial outreach infrastructure built for a European maritime operator. Cargo owner contacts mapped,
              outreach deployed, and 15+ qualified commercial leads generated in the first quarter of operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* THE MARKET */}
      <section className="relative z-10 px-6 md:px-12 py-20 md:py-28 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <p className="text-[10px] tracking-[0.28em] text-white/40 mb-5" style={MONO}>
              THE MARKET
            </p>
            <h2 className="text-2xl md:text-4xl font-medium text-white tracking-tight leading-tight mb-6">
              Commercial shipping relationships are built before the cargo moves.
            </h2>
            <p className="text-white/45 text-sm leading-relaxed mb-4">
              In maritime commercial operations, the relationship with the cargo owner or charterer precedes the
              transaction. Operators who wait for cargo to come to them through brokers are operating at a disadvantage
              relative to those who have built direct relationships with the principals who control cargo flow.
            </p>
            <p className="text-white/45 text-sm leading-relaxed mb-4">
              We map the cargo owner universe by sector, ship type, and route preference. We identify the commercial
              decision-makers at each organisation. We deploy outreach that opens conversations before a formal tender
              or broker process begins.
            </p>
            <p className="text-white/45 text-sm leading-relaxed">
              3,000+ cargo owner contacts in our mapped database. 8 shipping sectors covered. Commercial leads
              generated before formal tender processes begin.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.08, ease: EASE }}
            className="space-y-4"
          >
            <LeadsBuild />
            <SectorSpread />
          </motion.div>
        </div>
      </section>

      {/* SECTOR IMAGERY */}
      <section className="relative z-10 px-6 md:px-12 pb-4">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                alt="Maritime logistics business development and cargo owner outreach"
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
              Built for maritime commercial operations.
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
              Build commercial relationships before the cargo moves.
            </h2>
            <p className="text-white/45 text-base leading-relaxed mb-9">
              We map the cargo owner universe, reach the right commercial principals, and generate qualified leads
              before formal tender processes begin.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors"
              >
                Start the conversation <ArrowRight size={14} />
              </Link>
              <Link
                to="/services/intelligence-research"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/[0.14] text-white/80 text-sm hover:border-white/30 hover:text-white transition-colors"
              >
                Intelligence research <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <FaqSection faqs={MARITIME_FAQS} title="Common questions about maritime business development" />

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
