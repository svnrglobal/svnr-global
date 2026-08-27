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
import { SparklineMini } from "../../components/minis";
import { useIdleMischief } from "../../hooks/useIdleMischief";

const MONO = { fontFamily: "var(--font-mono)" };

// Weekly qualified-enquiry readings from the six-week European programme.
const ENQUIRY_WEEKS = [
  { w: "W1", v: 5 },
  { w: "W2", v: 12 },
  { w: "W3", v: 22 },
  { w: "W4", v: 38 },
  { w: "W5", v: 55 },
  { w: "W6", v: 78 },
];

const CHANNEL_MIX = [
  { ch: "Trade direct", v: 60 },
  { ch: "Showroom", v: 25 },
  { ch: "Portal", v: 15 },
];

const STATS = [
  { v: "40+", l: "Stockist pipeline / quarter" },
  { v: "24%", l: "Trade buyer reply rate" },
  { v: "21", l: "Avg. days, first contact to first order" },
];

const MILESTONES = [
  { when: "Week 0", label: "Trade market mapped by name" },
  { when: "Week 2 to 3", label: "Outreach live to stockists and buyers" },
  { when: "Week 6", label: "78% lift in qualified enquiries" },
  { when: "Day 90", label: "Active stockist pipeline" },
];

const services = [
  { slug: "client-acquisition", label: "Client Acquisition", desc: "Systematic identification and outreach to trade buyers, stockists, and B2B clients across your target geographies." },
  { slug: "brand-outreach", label: "Brand Outreach", desc: "Outreach that positions your brand at the level the trade buyer expects. Researched, specific, and premium in execution." },
  { slug: "channel-partnership", label: "Channel Partnership", desc: "Trade partner acquisition programme: the right stockists, showrooms, and distributors identified and activated." },
  { slug: "sector-workflows", label: "Sector Workflows", desc: "Wholesale operations automated, enquiry handling, quote generation, order tracking, and partner onboarding." },
];

const GALLERY = [
  "/sectors/b2b-luxury-photo-1514179974491-a7885781ed87.avif",
  "/sectors/b2b-luxury-photo-1598452963314-b09f397a5c48.avif",
  "/sectors/b2b-luxury-premium_photo-1724862979245-71e659b98366.avif",
];

const RELATED = [
  { to: "/blog/how-to-get-b2b-clients-luxury-brand", label: "B2B Clients for Luxury Brands" },
  { to: "/blog/cold-email-agency-luxury-brands", label: "Cold Email for Luxury Brands" },
  { to: "/blog/outbound-lead-generation-luxury-retail", label: "Outbound for Luxury Retail" },
];

const B2B_LUXURY_FAQS = [
  { q: "How do luxury brands find trade buyers and stockists?", a: "Through systematic direct outreach to interior designers, boutique retailers, and trade buyers in target geographies, mapping the market by name, initiating contact with personalised outreach, and building relationships before committing to trade fair or showroom investment." },
  { q: "How long does it take to build a stockist pipeline for a luxury brand?", a: "A structured 90-day programme can deliver 40+ qualified stockist leads, initiate trade conversations, and produce active relationships in a new geography. Most brands see the first confirmed stockist relationship within 60 days." },
  { q: "What is the best way to reach trade buyers for a luxury brand?", a: "Direct outreach through email and LinkedIn, with messages that demonstrate specific knowledge of the buyer's project portfolio, client base, and material preferences. Generic catalogue introductions produce minimal response. Research-backed, personalised contact is the standard that earns a trade relationship." },
  { q: "Does SVNR Global work with luxury brands outside India?", a: "Yes. SVNR Global operates from New Delhi but deploys outreach programmes across Europe, the UK, the UAE, and North America. Our programmes target stockists and trade buyers in whatever geographies a brand wants to develop, regardless of where the brand is based." },
];

// The page's one lush element: the sector's own mini demo, blown up into a
// bordered instrument panel. It takes its first reading a beat after load,
// re-runs when the reader touches it, and re-runs itself once if abandoned.
function TradeEnquiryPanel() {
  const [booted, setBooted] = useState(false);
  const [runs, setRuns] = useState(0);
  const { mischief, bind } = useIdleMischief();

  useEffect(() => {
    const t = setTimeout(() => setBooted(true), 280);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (mischief) setRuns((r) => r + 1);
  }, [mischief]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => {
        bind.onMouseEnter();
        setRuns((r) => r + 1);
      }}
      onMouseLeave={bind.onMouseLeave}
      className="rounded-2xl border border-white/[0.08] bg-white/[0.015] hover:border-white/[0.14] hover:bg-white/[0.028] transition-colors duration-300 p-6 md:p-8 overflow-hidden"
    >
      <div className="flex items-center justify-between gap-4">
        <span className="text-[10px] tracking-[0.28em] text-white/40" style={MONO}>
          TRADE ENQUIRY GROWTH
        </span>
        <span
          className="text-[9px] tracking-widest text-white/30 border border-white/[0.1] rounded px-2 py-1 shrink-0"
          style={MONO}
        >
          WEEKS 1–6
        </span>
      </div>

      <div className="relative h-[200px] md:h-[248px]">
        <div className="absolute inset-x-0 -top-6 bottom-0 origin-top-left scale-[1.3] md:scale-[1.7]">
          <SparklineMini key={runs} lit={booted} />
        </div>
      </div>

      <p className="text-white/40 text-[13px] leading-relaxed border-t border-white/[0.06] pt-4">
        Six weeks of systematic outreach across three European markets.
      </p>
    </motion.div>
  );
}

function WeeklyEnquiries() {
  const peak = ENQUIRY_WEEKS[ENQUIRY_WEEKS.length - 1].v;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-2xl border border-white/[0.08] bg-white/[0.015] hover:border-white/[0.14] hover:bg-white/[0.028] transition-colors duration-300 p-6 md:p-7"
    >
      <p className="text-[10px] tracking-[0.28em] text-white/40 mb-6" style={MONO}>
        TRADE ENQUIRY GROWTH, WEEKS 1–6
      </p>
      <div className="flex items-end gap-2 h-[132px]">
        {ENQUIRY_WEEKS.map((d, i) => (
          <div key={d.w} className="flex-1 flex flex-col justify-end h-full">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.3, delay: 0.35 + i * 0.07 }}
              className="text-[10px] text-white/40 tabular-nums text-center mb-1.5"
              style={MONO}
            >
              {d.v}
            </motion.span>
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: `${(d.v / peak) * 100}%` }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className={`w-full rounded-t ${i === ENQUIRY_WEEKS.length - 1 ? "bg-white/45" : "bg-white/[0.14]"}`}
            />
          </div>
        ))}
      </div>
      <div className="flex gap-2 mt-2.5 pt-2.5 border-t border-white/[0.06]">
        {ENQUIRY_WEEKS.map((d) => (
          <span key={d.w} className="flex-1 text-[9px] tracking-widest text-white/25 text-center" style={MONO}>
            {d.w}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function ChannelMix() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-2xl border border-white/[0.08] bg-white/[0.015] hover:border-white/[0.14] hover:bg-white/[0.028] transition-colors duration-300 p-6 md:p-7"
    >
      <p className="text-[10px] tracking-[0.28em] text-white/40 mb-6" style={MONO}>
        REVENUE BY CHANNEL
      </p>
      <div className="flex flex-col gap-4">
        {CHANNEL_MIX.map((c, i) => (
          <div key={c.ch}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[12px] text-white/60">{c.ch}</span>
              <span className="text-[12px] text-white/40 tabular-nums" style={MONO}>
                {c.v}
              </span>
            </div>
            <div className="h-[3px] rounded-full bg-white/[0.06] overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                whileInView={{ width: `${c.v}%` }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: 0.12 + i * 0.09, ease: [0.16, 1, 0.3, 1] }}
                className={`h-full rounded-full ${i === 0 ? "bg-white/45" : "bg-white/20"}`}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function B2BLuxury() {
  return (
    <main className="relative w-full bg-black font-sans selection:bg-white/20 selection:text-white">
      <SEO
        title="B2B Luxury Brand Client Acquisition | SVNR Global"
        description="Stockist and trade buyer acquisition for B2B luxury brands. We map interior designers, retail buyers, and trade partners in your target markets and build relationships at scale. 40+ stockist leads per quarter."
        canonical="/sectors/b2b-luxury-brands"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Sectors", url: "/sectors" },
          { name: "B2B Luxury Brands", url: "/sectors/b2b-luxury-brands" },
        ]}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "B2B Luxury Brand Client Acquisition",
            "provider": { "@id": "https://svnrglobal.com/#organization" },
            "description": "AI-powered stockist and trade buyer acquisition for premium fashion, interiors, and lifestyle brands. Systematic outreach to interior designers, retail buyers, and trade partners across target geographies.",
            "areaServed": ["Global", "Europe", "Middle East", "United Kingdom", "United States"],
            "serviceType": ["Trade Buyer Acquisition", "Stockist Outreach", "B2B Luxury Brand Development", "Channel Partnership"]
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How do luxury brands find trade buyers and stockists?",
                "acceptedAnswer": { "@type": "Answer", "text": "Through systematic direct outreach to interior designers, boutique retailers, and trade buyers in target geographies, mapping the market by name, initiating contact with personalised outreach, and building relationships before committing to trade fair or showroom investment." }
              },
              {
                "@type": "Question",
                "name": "How long does it take to build a stockist pipeline for a luxury brand?",
                "acceptedAnswer": { "@type": "Answer", "text": "A structured 90-day programme can deliver 40+ qualified stockist leads, initiate trade conversations, and produce active relationships in a new geography. Most brands see the first confirmed stockist relationship within 60 days." }
              },
              {
                "@type": "Question",
                "name": "What is the best way to reach trade buyers for a luxury brand?",
                "acceptedAnswer": { "@type": "Answer", "text": "Direct outreach through email and LinkedIn, with messages that demonstrate specific knowledge of the buyer's project portfolio, client base, and material preferences. Generic catalogue introductions produce minimal response. Research-backed, personalised contact is the standard that earns a trade relationship." }
              },
              {
                "@type": "Question",
                "name": "Does SVNR Global work with luxury brands outside India?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes. SVNR Global operates from New Delhi but deploys outreach programmes across Europe, the UK, the UAE, and North America. Our programmes target stockists and trade buyers in whatever geographies a brand wants to develop, regardless of where the brand is based." }
              }
            ]
          }
        ]}
      />

      {/* HERO — copy left, the sector's own demo enlarged into a panel on the right */}
      <section className="relative z-10 px-6 md:px-12 pt-32 md:pt-44 pb-16 md:pb-24">
        <div className="max-w-[1200px] mx-auto">
          <Breadcrumbs
            items={[{ label: "Home", to: "/" }, { label: "Sectors", to: "/sectors" }, { label: "B2B Luxury Brands" }]}
          />
        </div>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-[10px] tracking-[0.28em] text-white/40 mb-6"
              style={MONO}
            >
              SECTOR 04
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <OpticalType className="text-4xl sm:text-5xl md:text-[64px] font-medium text-white leading-[1.05] tracking-tight">
                B2B Luxury Brands
              </OpticalType>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white/45 text-base md:text-lg mt-6 max-w-xl leading-relaxed"
            >
              The stockist relationship as infrastructure. For premium fashion, interiors, and lifestyle brands
              building trade buyer relationships at scale.
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
                to="/services"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/[0.14] text-white/80 text-sm hover:border-white/30 hover:text-white transition-colors"
              >
                The agent stack <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>

          <TradeEnquiryPanel />
        </div>
      </section>

      {/* STATS */}
      <section className="relative z-10 px-6 md:px-12 pb-20 md:pb-28">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {STATS.map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.015] hover:border-white/[0.14] hover:bg-white/[0.028] transition-colors duration-300 p-6 md:p-7"
              >
                <Counter
                  value={s.v}
                  className="block text-3xl md:text-4xl font-medium text-white tabular-nums leading-none"
                />
                <p className="text-[10px] tracking-[0.28em] text-white/40 mt-3.5" style={MONO}>
                  {s.l.toUpperCase()}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* THE MARKET */}
      <section className="relative z-10 px-6 md:px-12 py-20 md:py-28 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[10px] tracking-[0.28em] text-white/40 mb-5" style={MONO}>
              THE MARKET
            </p>
            <h2 className="text-2xl md:text-4xl font-medium text-white tracking-tight leading-tight mb-6">
              Trade relationships are won, not found.
            </h2>
            <p className="text-white/45 text-[15px] leading-relaxed mb-4">
              For premium brands selling through trade channels, the relationship with the buyer is the asset. A
              stockist who has been briefed, understands the collection, and has met the brand at the right moment
              carries product differently than one onboarded through a form.
            </p>
            <p className="text-white/45 text-[15px] leading-relaxed mb-4">
              We build the programme that finds the right buyers, reaches them with outreach that matches the brand's
              quality standard, and activates them into the trade relationship that drives revenue.
            </p>
            <p className="text-white/45 text-[15px] leading-relaxed">
              40+ stockist leads per quarter. 24% trade buyer reply rate. 21-day average from first contact to first
              order.
            </p>
          </motion.div>

          <div className="flex flex-col gap-4">
            <WeeklyEnquiries />
            <ChannelMix />
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
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <p className="text-[10px] tracking-[0.28em] text-white/40 mb-5" style={MONO}>
              PROOF
            </p>
            <p className="text-xl md:text-3xl font-medium text-white tracking-tight leading-snug">
              A luxury brand. 78% increase in qualified trade buyer enquiries within six weeks of deploying a
              systematic outreach programme across three European markets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* THE 90-DAY PATH */}
      <section className="relative z-10 px-6 md:px-12 py-20 md:py-28 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12"
          >
            <p className="text-[10px] tracking-[0.28em] text-white/40 mb-5" style={MONO}>
              THE 90-DAY PATH
            </p>
            <h2 className="text-2xl md:text-4xl font-medium text-white tracking-tight">
              From engagement to active pipeline.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
            {MILESTONES.map((m, i) => (
              <motion.div
                key={m.when}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-5 border-l border-white/[0.08] md:pl-0 md:border-l-0 md:pt-7"
              >
                <div className="hidden md:block absolute top-0 inset-x-0 h-px bg-white/[0.07]">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, delay: 0.1 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full origin-left bg-white/25"
                  />
                </div>
                <span
                  className={`absolute hidden md:block -top-[3px] left-0 w-[7px] h-[7px] rounded-full ${
                    i === MILESTONES.length - 1 ? "bg-emerald-400/70" : "bg-white/30"
                  }`}
                />
                <p className="text-[10px] tracking-[0.28em] text-white/40 mb-2.5" style={MONO}>
                  {m.when.toUpperCase()}
                </p>
                <p className="text-white/70 text-sm leading-snug">{m.label}</p>
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
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12"
          >
            <p className="text-[10px] tracking-[0.28em] text-white/40 mb-5" style={MONO}>
              APPLICABLE SYSTEMS
            </p>
            <h2 className="text-2xl md:text-4xl font-medium text-white tracking-tight">
              Infrastructure for luxury trade distribution.
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
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  to={`/services/${s.slug}`}
                  className="group relative flex flex-col h-full rounded-2xl border border-white/[0.08] bg-white/[0.015] hover:border-white/[0.14] hover:bg-white/[0.028] transition-colors duration-300 p-7"
                >
                  <ArrowRight
                    size={14}
                    className="absolute top-7 right-7 text-white/20 group-hover:text-white/70 group-hover:translate-x-1 transition-all duration-300"
                  />
                  <h3 className="text-white text-lg md:text-xl font-medium tracking-tight mb-2 pr-10">{s.label}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{s.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="relative z-10 px-6 md:px-12 pb-20 md:pb-28">
        <div className="max-w-[1200px] mx-auto grid grid-cols-3 gap-4">
          {GALLERY.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl overflow-hidden border border-white/[0.08] aspect-square"
            >
              <img
                loading="lazy"
                decoding="async"
                src={src}
                className="w-full h-full object-cover"
                alt="B2B luxury brand client acquisition and trade buyer outreach"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 px-6 md:px-12 py-20 md:py-28 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <p className="text-[10px] tracking-[0.28em] text-white/40 mb-5" style={MONO}>
              NEXT
            </p>
            <h2 className="text-2xl md:text-4xl font-medium text-white tracking-tight leading-tight mb-5">
              Build the trade relationships your brand deserves.
            </h2>
            <p className="text-white/45 text-base leading-relaxed mb-9">
              We map the right buyers, deploy the outreach, and activate the stockist relationships that carry your
              product at its correct positioning.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
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
            </div>
          </motion.div>
        </div>
      </section>

      <FaqSection faqs={B2B_LUXURY_FAQS} title="Common questions about B2B luxury brand trade acquisition" />

      {/* RELATED INSIGHTS */}
      <section className="relative z-10 px-6 md:px-12 py-20 md:py-28 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10"
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
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  to={r.to}
                  className="group relative flex flex-col h-full rounded-2xl border border-white/[0.08] bg-white/[0.015] hover:border-white/[0.14] hover:bg-white/[0.028] transition-colors duration-300 p-6"
                >
                  <ArrowRight
                    size={13}
                    className="absolute top-6 right-6 text-white/20 group-hover:text-white/70 group-hover:translate-x-1 transition-all duration-300"
                  />
                  <p className="text-[10px] tracking-[0.28em] text-white/40 mb-3" style={MONO}>
                    READ
                  </p>
                  <p className="text-white/80 text-sm font-medium leading-snug pr-8 group-hover:text-white transition-colors">
                    {r.label}
                  </p>
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
