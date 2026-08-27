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
  { v: "13", l: "Qualified enquiries / 2 weeks" },
  { v: "18", l: "Markets served" },
  { v: "10K+", l: "A&D contacts mapped" },
];

// Enquiry trajectory across the first six weeks of a programme.
const ENQUIRIES = [
  { week: "W1", n: 2 },
  { week: "W2", n: 5 },
  { week: "W3", n: 8 },
  { week: "W4", n: 11 },
  { week: "W5", n: 13 },
  { week: "W6", n: 13 },
];

const GEO = [
  { market: "Germany", value: 100 },
  { market: "UAE", value: 85 },
  { market: "US", value: 72 },
  { market: "UK", value: 65 },
  { market: "Japan", value: 48 },
];

const MILESTONES = [
  { n: "01", when: "Week 0", label: "A&D universe mapped by name" },
  { n: "02", when: "Week 2", label: "Outreach live" },
  { n: "03", when: "Day 14", label: "13 qualified enquiries" },
  { n: "04", when: "Day 90", label: "Distribution pipeline active" },
];

const services = [
  { slug: "client-acquisition", label: "Client Acquisition", desc: "Systematic outreach to A&D studios and trade buyers in new geographies, mapped, researched, and personalised." },
  { slug: "brand-outreach", label: "Brand Outreach", desc: "Messages written at the level of the interior designer or architect you are trying to reach. No templates." },
  { slug: "channel-partnership", label: "Channel Partnership", desc: "Structured programme to find and activate the right showrooms, specifiers, and trade partners in your target markets." },
  { slug: "intelligence-research", label: "Intelligence Research", desc: "A&D community mapped by city, project type, and material history. Know who to reach before you reach them." },
];

const insights = [
  "The A&D community is the primary distribution channel for luxury rug brands. Interior designers specify product. Their specification drives purchase. The relationship is a wholesale relationship, not a consumer marketing one.",
  "Geographic gaps in distribution are almost always the result of opportunistic rather than systematic development. A brand strong in Germany but absent in the Netherlands has not failed, it has simply not yet reached that market with a structured programme.",
  "Trade fairs are amplifiers, not acquisition channels. The brand that arrives at Domotex with 10 warm relationships already in place has a fundamentally different experience than the brand arriving cold.",
  "The A&D community operates on its own timeline, not the trade fair calendar. The designer specifying for a hospitality project in June is not waiting for January to find a new supplier.",
];

const IMAGES = [
  {
    src: "/sectors/luxury-rugs-photo-1600166930985-a86f7295dd99.avif",
    alt: "Luxury rug and carpet brand distribution strategy for new markets",
  },
  {
    src: "/sectors/luxury-rugs-premium_photo-1664114727312-cf38fd519315.avif",
    alt: "Premium handmade textile trade buyer outreach and stockist acquisition",
  },
];

const RELATED = [
  { to: "/blog/luxury-rug-brand-distribution-strategy", label: "Distribution Without a Showroom" },
  { to: "/blog/outbound-lead-generation-luxury-retail", label: "Outbound for Luxury Retail" },
  { to: "/blog/cold-email-agency-luxury-brands", label: "Cold Email for Luxury Brands" },
];

const LUXURY_RUGS_FAQS = [
  { q: "How do luxury rug brands enter new markets without a showroom?", a: "By systematically identifying and reaching interior designers and trade buyers in the target market through direct outreach, mapping the A&D community by name, initiating contact with personalised messages, and building trade relationships before committing to permanent retail infrastructure." },
  { q: "What is the best distribution channel for luxury handmade rugs?", a: "The architecture and interior design community is the primary distribution channel. Interior designers specify rugs for client projects at a level that drives consistent volume. Building direct trade relationships with designers in target markets is more efficient than relying on trade fairs or showrooms alone." },
  { q: "How long does it take to build trade distribution in a new market for a rug brand?", a: "A structured 90-day programme can identify qualifying designers and buyers, initiate contact with the most relevant targets, and produce active trade relationships in a new geography. SVNR's programmes have generated 13 qualified enquiries in the first 14 days without a showroom or trade fair." },
  { q: "What role do trade fairs play in luxury rug distribution?", a: "Trade fairs are amplifiers, not acquisition channels. Brands that use direct outreach to build warm relationships before a fair opens use the same exhibition investment to advance existing conversations rather than make cold introductions in a crowded hall." },
];

// THE STRIPE MOMENT — the sector's own mini, enlarged into a bordered instrument
// panel beside the headline. Each row is a named specifier moving from sent, to
// replied, to hot. It plays on load and replays once, quietly, about eight
// seconds after a reader hovers it and wanders off.
function SpecifierArtefact() {
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
          A&D PIPELINE
        </span>
        <span className="text-[10px] tracking-[0.2em] text-white/25" style={MONO}>
          OUT · REPLY · HOT
        </span>
      </div>

      <div
        key={replay}
        className="absolute inset-0 origin-top-left scale-[1.3] w-[76.9%] h-[76.9%] md:scale-[1.55] md:w-[64.5%] md:h-[64.5%]"
      >
        {SECTOR_MINI["luxury-rugs-home-textiles"]?.(true)}
      </div>

      <p className="absolute z-10 bottom-7 left-7 right-7 text-[10px] text-white/30" style={MONO}>
        Named specifier · city · state of play
      </p>
    </motion.div>
  );
}

// Six weeks of enquiries, drawn as they actually arrived. The plateau at W5 is
// the information: the programme fills, it does not climb forever.
function EnquiryClimb() {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.015] p-7">
      <p className="text-[10px] tracking-[0.28em] text-white/40 mb-7" style={MONO}>
        ENQUIRY TRAJECTORY · FIRST 6 WEEKS
      </p>
      <div className="flex items-end gap-3 h-40">
        {ENQUIRIES.map((e, i) => (
          <div key={e.week} className="flex-1 h-full flex flex-col justify-end items-center gap-2">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.3, delay: 0.35 + i * 0.08 }}
              className="text-[13px] text-white/60 tabular-nums"
              style={MONO}
            >
              {e.n}
            </motion.span>
            <div className="w-full flex-1 flex items-end rounded-t bg-white/[0.04] overflow-hidden">
              <motion.div
                className="w-full rounded-t bg-white/35"
                initial={{ height: 0 }}
                whileInView={{ height: `${(e.n / 13) * 100}%` }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
              />
            </div>
            <span className="text-[9px] tracking-widest text-white/25" style={MONO}>
              {e.week}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Relative market index. Bars extend to their share of the strongest market, so
// the gap between Germany and Japan is the point, not the colour.
function MarketIndex() {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.015] p-7">
      <p className="text-[10px] tracking-[0.28em] text-white/40 mb-6" style={MONO}>
        MARKET INDEX BY GEOGRAPHY
      </p>
      <div className="flex flex-col gap-3.5">
        {GEO.map((g, i) => (
          <div key={g.market}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] tracking-[0.2em] text-white/40" style={MONO}>
                {g.market.toUpperCase()}
              </span>
              <span className="text-[10px] text-white/30 tabular-nums" style={MONO}>
                {g.value}
              </span>
            </div>
            <div className="h-[3px] rounded-full bg-white/[0.06] overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-white/35"
                initial={{ width: "0%" }}
                whileInView={{ width: `${g.value}%` }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.07, ease: EASE }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LuxuryRugs() {
  return (
    <main className="relative w-full bg-black font-sans selection:bg-white/20 selection:text-white">
      <SEO
        title="Luxury Rugs & Home Textiles Client Acquisition | SVNR Global"
        description="B2B client acquisition for luxury rug and carpet brands. We map the A&D community in your target markets and deliver qualified trade enquiries. 13 qualified leads in 14 days — without trade fairs or showrooms."
        canonical="/sectors/luxury-rugs-home-textiles"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Luxury Rugs & Home Textiles B2B Distribution Development",
            "provider": { "@id": "https://svnrglobal.com/#organization" },
            "description": "Systematic A&D community outreach and trade buyer acquisition for luxury rug brands and handmade carpet manufacturers entering new international markets. 13 qualified B2B enquiries in 14 days, without trade fairs.",
            "areaServed": ["Global", "Europe", "Germany", "United Kingdom", "United States", "UAE", "Japan"],
            "serviceType": ["Luxury Rug Distribution", "A&D Community Outreach", "Trade Buyer Acquisition", "New Market Entry"]
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How do luxury rug brands enter new markets without a showroom?",
                "acceptedAnswer": { "@type": "Answer", "text": "By systematically identifying and reaching interior designers and trade buyers in the target market through direct outreach, mapping the A&D community by name, initiating contact with personalised messages, and building trade relationships before committing to permanent retail infrastructure." }
              },
              {
                "@type": "Question",
                "name": "What is the best distribution channel for luxury handmade rugs?",
                "acceptedAnswer": { "@type": "Answer", "text": "The architecture and interior design community is the primary distribution channel. Interior designers specify rugs for client projects at a level that drives consistent volume. Building direct trade relationships with designers in target markets is more efficient than relying on trade fairs or showrooms alone." }
              },
              {
                "@type": "Question",
                "name": "How long does it take to build trade distribution in a new market for a rug brand?",
                "acceptedAnswer": { "@type": "Answer", "text": "A structured 90-day programme can identify qualifying designers and buyers, initiate contact with the most relevant targets, and produce active trade relationships in a new geography. SVNR's programmes have generated 13 qualified enquiries in the first 14 days without a showroom or trade fair." }
              },
              {
                "@type": "Question",
                "name": "What role do trade fairs play in luxury rug distribution?",
                "acceptedAnswer": { "@type": "Answer", "text": "Trade fairs are amplifiers, not acquisition channels. Brands that use direct outreach to build warm relationships before a fair opens use the same exhibition investment to advance existing conversations rather than make cold introductions in a crowded hall." }
              }
            ]
          }
        ]}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Sectors", url: "/sectors" },
          { name: "Luxury Rugs & Home Textiles", url: "/sectors/luxury-rugs-home-textiles" },
        ]}
      />

      {/* HERO */}
      <section className="relative z-10 px-6 md:px-12 pt-32 md:pt-44 pb-16 md:pb-24">
        <div className="max-w-[1200px] mx-auto">
          <Breadcrumbs
            items={[{ label: "Home", to: "/" }, { label: "Sectors", to: "/sectors" }, { label: "Luxury Rugs & Home Textiles" }]}
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
                SECTOR 01 · LUXURY RUGS & HOME TEXTILES
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
              >
                <OpticalType className="text-4xl sm:text-5xl md:text-[64px] font-medium text-white leading-[1.05] tracking-tight">
                  Distribution built for craft.
                </OpticalType>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.22 }}
                className="text-white/45 text-base md:text-lg mt-6 max-w-xl leading-relaxed"
              >
                For rug and carpet houses building international B2B distribution where the A&D community specifies
                everything.
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

            <SpecifierArtefact />
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
              A German carpet house. Thirteen qualified B2B enquiries in under two weeks, from interior designers and
              trade buyers across four geographies the brand had no prior presence in.
            </p>
          </motion.div>
        </div>
      </section>

      {/* THE MARKET */}
      <section className="relative z-10 px-6 md:px-12 py-20 md:py-28 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">
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
              The A&D community is the distribution channel.
            </h2>
            {insights.map((insight) => (
              <p key={insight} className="text-white/45 text-sm leading-relaxed mb-4 last:mb-0">
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
            <EnquiryClimb />
            <MarketIndex />
          </motion.div>
        </div>
      </section>

      {/* SECTOR IMAGERY */}
      <section className="relative z-10 px-6 md:px-12 pb-4">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {IMAGES.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: EASE }}
              className="rounded-2xl border border-white/[0.08] overflow-hidden aspect-[4/3]"
            >
              <img
                loading="lazy"
                decoding="async"
                src={img.src}
                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                alt={img.alt}
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
              The infrastructure built for this sector.
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
              Ready to build distribution in new markets?
            </h2>
            <p className="text-white/45 text-base leading-relaxed mb-9">
              We map the A&D community in your target geographies and deploy the outreach infrastructure that builds
              lasting trade relationships.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors"
              >
                Start the conversation <ArrowRight size={14} />
              </Link>
              <Link
                to="/services/channel-partnership"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/[0.14] text-white/80 text-sm hover:border-white/30 hover:text-white transition-colors"
              >
                Channel partnership <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <FaqSection faqs={LUXURY_RUGS_FAQS} title="Common questions about luxury rug market entry" />

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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
                  className="group relative flex items-center justify-between gap-4 h-full rounded-2xl border border-white/[0.08] bg-white/[0.015] hover:border-white/[0.14] hover:bg-white/[0.028] transition-colors duration-300 p-6"
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
