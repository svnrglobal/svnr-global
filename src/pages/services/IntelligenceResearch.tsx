import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Footer from "../../components/Footer";
import FaqSection from "../../components/FaqSection";
import SEO from "../../components/SEO";
import Breadcrumbs from "../../components/Breadcrumbs";
import OpticalType from "../../components/OpticalType";
import Counter from "../../components/Counter";
import { useIdleMischief } from "../../hooks/useIdleMischief";
import ConsoleFrame from "../../components/console/ConsoleFrame";
import { SignalEnrichment } from "../../components/console/replicas";
import { SelfResolvingAlert, RedactedName, AgeingTimestamp, LogTail } from "../../components/console/primitives";

const MONO = { fontFamily: "var(--font-mono)" };
const EASE = [0.16, 1, 0.3, 1] as const;

const HERO_STATS = [
  { v: "500+", l: "Profiles built" },
  { v: "80+", l: "Signal sources" },
  { v: "97%", l: "Accuracy rate" },
];

const sectors = ["Private Equity", "Premium Real Estate", "Luxury Rugs", "Wealth Management", "Maritime", "Professional Services"];

const steps = [
  { n: "01", title: "Market segmentation", desc: "We define the exact universe of companies and contacts relevant to your mandate, no noise, no padding." },
  { n: "02", title: "Data build & enrichment", desc: "Each target is researched across professional databases, press, LinkedIn, and public filings to build a complete profile." },
  { n: "03", title: "Signal layer", desc: "We overlay intent and timing signals, funding, hiring, leadership change, to rank by likelihood of engagement." },
  { n: "04", title: "Intelligence delivery", desc: "Weekly briefs and a live dashboard give your team a real-time view of where to focus outreach effort." },
];

const RELATED = [
  { to: "/blog/ai-prospecting-family-offices", label: "AI Prospecting for Family Offices" },
  { to: "/blog/hnw-investor-outreach-strategy", label: "HNW Investor Outreach" },
  { to: "/blog/uhnw-client-acquisition-strategy", label: "UHNW Client Acquisition" },
];

const INTELLIGENCE_FAQS = [
  { q: "What is AI prospect intelligence for B2B companies?", a: "AI prospect intelligence is the systematic process of identifying every qualifying buyer and decision-maker in your market by aggregating signals from 50+ data sources — company filings, business press, LinkedIn activity, property records, financial announcements — and producing an enriched, ranked prospect universe ready for outreach." },
  { q: "What data signals does SVNR monitor to identify prospects?", a: "SVNR monitors liquidity events, business sale announcements, company director changes, LinkedIn profile updates, trade association memberships, property transactions, funding rounds, debt maturities, sector consolidation announcements, and planning applications, depending on the target sector and buyer profile." },
  { q: "How many prospects can SVNR map for a new market entry?", a: "A typical market mapping engagement produces 300–1,000 individually researched and ranked prospects in a defined geography within 30 days. Each record includes contact details, seniority, organisation profile, and a relevance score based on the client's ICP criteria." },
  { q: "Is intelligence research a one-off exercise or a continuous function?", a: "Both models are available. A one-off market mapping engagement establishes the initial prospect universe. Ongoing intelligence monitoring continuously identifies new prospects as they enter the target profile and updates existing records with new signal data, keeping the outreach pipeline permanently current." },
];

// ---------------------------------------------------------------------------
// FEATURE BLOCK 1 — Market Segmentation. LogTail of segmentation events.
// ---------------------------------------------------------------------------

function SegmentationLog({ lit }: { lit: boolean }) {
  const rows = [
    { t: "07:41", status: "scan", text: "Private equity — Europe, mid-market, 214 companies matched" },
    { t: "07:52", status: "scan", text: "Premium real estate — GCC, developer segment, 88 companies matched" },
    { t: "08:03", status: "filter", text: "ICP thresholds applied — 312 records ranked" },
    { t: "08:15", status: "done", text: "Segmentation set frozen for enrichment pass" },
  ];
  return <LogTail lit={lit} rows={rows} />;
}

// ---------------------------------------------------------------------------
// FEATURE BLOCK 2 — Decision-Maker Mapping. Redacted contact card + ageing ts.
// ---------------------------------------------------------------------------

function ContactCard({ lit }: { lit: boolean }) {
  const contacts = [
    { name: "Aurelien Vasseur", title: "Managing Partner", start: 4 },
    { name: "Ingrid Solberg", title: "Head of Acquisitions", start: 11 },
  ];
  return (
    <div className="flex flex-col gap-2.5">
      {contacts.map((c, i) => (
        <motion.div
          key={c.name}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: lit ? 1 : 0, y: lit ? 0 : 6 }}
          transition={{ duration: 0.3, delay: lit ? i * 0.14 : 0, ease: "easeOut" }}
          className="flex items-center justify-between gap-3 rounded-lg border border-white/[0.07] bg-white/[0.02] px-3 py-2"
        >
          <div className="min-w-0">
            <p className="text-[11px] text-white/65 truncate">
              <RedactedName lit={lit} name={c.name} delay={300 + i * 200} />
            </p>
            <p className="text-[9.5px] text-white/30 truncate" style={MONO}>
              {c.title}
            </p>
          </div>
          <span className="text-[9px] text-white/30 shrink-0" style={MONO}>
            <AgeingTimestamp lit={lit} startMinutes={c.start} />
          </span>
        </motion.div>
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// FEATURE BLOCK 3 — Signal Monitoring. Self-resolving alert.
// ---------------------------------------------------------------------------

function SignalAlert({ lit }: { lit: boolean }) {
  return (
    <SelfResolvingAlert
      lit={lit}
      problem="New signal — leadership change flagged, unrouted"
      resolution="Profile re-scored, added to weekly brief"
      meta="6 min"
    />
  );
}

// ---------------------------------------------------------------------------
// FEATURE BLOCK 4 — Weekly Intelligence Brief. LogTail of brief delivery.
// ---------------------------------------------------------------------------

function BriefLog({ lit }: { lit: boolean }) {
  const rows = [
    { t: "MON", status: "brief", text: "Weekly brief compiled — 41 ranked contacts" },
    { t: "MON", status: "sent", text: "Delivered to outreach team, 06:00 GMT" },
    { t: "WED", status: "update", text: "3 new signals surfaced mid-week" },
    { t: "FRI", status: "review", text: "Dashboard synced — ready for Monday cycle" },
  ];
  return <LogTail lit={lit} rows={rows} />;
}

const FEATURE_BLOCKS: Array<{
  label: string;
  badge: string;
  headline: string;
  desc: string;
  render: (lit: boolean) => React.ReactNode;
  frameLabel: string;
}> = [
  {
    label: "MARKET SEGMENTATION",
    badge: "SCAN",
    headline: "Every qualifying company, mapped and ranked.",
    desc: "Every qualifying company in your target market mapped, ranked, and profiled before a single message is sent.",
    render: (lit) => <SegmentationLog lit={lit} />,
    frameLabel: "segmentation.log",
  },
  {
    label: "DECISION-MAKER MAPPING",
    badge: "CONTACTS",
    headline: "Named individuals, not job titles.",
    desc: "Named individuals, titles, contact vectors, and seniority, built from 80+ signal sources updated weekly.",
    render: (lit) => <ContactCard lit={lit} />,
    frameLabel: "contact-card.dev",
  },
  {
    label: "SIGNAL MONITORING",
    badge: "LIVE",
    headline: "Intent signals tracked as they happen.",
    desc: "Funding rounds, leadership hires, product launches, and public statements tracked continuously for intent signals.",
    render: (lit) => <SignalAlert lit={lit} />,
    frameLabel: "signal-monitor.sys",
  },
  {
    label: "WEEKLY INTELLIGENCE BRIEF",
    badge: "BRIEF",
    headline: "A structured brief, delivered on schedule.",
    desc: "A structured brief delivered weekly with the highest-signal contacts and market movements in your target vertical.",
    render: (lit) => <BriefLog lit={lit} />,
    frameLabel: "brief-delivery.log",
  },
];

function FeatureBlock({ block, i }: { block: (typeof FEATURE_BLOCKS)[number]; i: number }) {
  const { mischief, bind } = useIdleMischief();
  const lit = mischief;

  return (
    <motion.div
      {...bind}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: i * 0.05, ease: EASE }}
      className="rounded-2xl border border-white/[0.08] bg-white/[0.015] hover:border-white/[0.14] hover:bg-white/[0.028] transition-colors duration-300 p-7 md:p-8"
    >
      <p className="text-[10px] tracking-[0.28em] text-white/40 mb-4" style={MONO}>
        {block.label}
      </p>
      <span
        className="inline-block text-[9px] tracking-widest text-white/30 border border-white/[0.08] rounded px-1.5 py-0.5 mb-5"
        style={MONO}
      >
        {block.badge}
      </span>
      <h3 className="text-white text-xl md:text-2xl font-medium tracking-tight mb-3">{block.headline}</h3>
      <p className="text-white/45 text-sm leading-relaxed mb-6">{block.desc}</p>
      <ConsoleFrame label={block.frameLabel}>{block.render(lit)}</ConsoleFrame>
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// HERO ARTEFACT — SignalEnrichment blown up, the page's Stripe moment.
// ---------------------------------------------------------------------------

function HeroArtefact() {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
      className="relative"
    >
      <ConsoleFrame label="signal-enrichment.sys" badge="LIVE" className="min-h-[300px] md:min-h-[380px]">
        <div className={reduce ? "" : "scale-[1.06] origin-top-left"}>
          <SignalEnrichment lit={true} />
        </div>
      </ConsoleFrame>
    </motion.div>
  );
}

export default function IntelligenceResearch() {
  return (
    <main className="relative w-full bg-black font-sans selection:bg-white/20 selection:text-white">
      <SEO
        title="Intelligence Research — Prospect & Market Mapping | SVNR Global"
        description="AI prospect intelligence and market mapping for luxury, private equity, real estate, and B2B. 300–1,000 qualified prospects mapped in 30 days. 50+ data signals per contact. Know your market before you reach it."
        canonical="/services/intelligence-research"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Intelligence Research, Prospect & Market Mapping",
            "provider": { "@id": "https://svnrglobal.com/#organization" },
            "description": "AI-powered prospect intelligence and market mapping for premium B2B operators. We build the research layer that identifies every qualifying buyer, decision-maker, and opportunity in your market, enriched across 50+ data signals and delivered as actionable outreach intelligence.",
            "areaServed": ["Global", "Europe", "Middle East", "Asia"],
            "serviceType": ["Prospect Intelligence", "Market Mapping", "B2B Research", "Buyer Identification", "Signal Monitoring"]
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is AI prospect intelligence for B2B companies?",
                "acceptedAnswer": { "@type": "Answer", "text": "AI prospect intelligence is the systematic process of identifying every qualifying buyer and decision-maker in your market by aggregating signals from 50+ data sources, company filings, business press, LinkedIn activity, property records, financial announcements, and producing an enriched, ranked prospect universe ready for outreach." }
              },
              {
                "@type": "Question",
                "name": "What data signals does SVNR monitor to identify prospects?",
                "acceptedAnswer": { "@type": "Answer", "text": "SVNR monitors liquidity events, business sale announcements, company director changes, LinkedIn profile updates, trade association memberships, property transactions, funding rounds, debt maturities, sector consolidation announcements, and planning applications, depending on the target sector and buyer profile." }
              },
              {
                "@type": "Question",
                "name": "How many prospects can SVNR map for a new market entry?",
                "acceptedAnswer": { "@type": "Answer", "text": "A typical market mapping engagement produces 300–1,000 individually researched and ranked prospects in a defined geography within 30 days. Each record includes contact details, seniority, organisation profile, and a relevance score based on the client's ICP criteria." }
              },
              {
                "@type": "Question",
                "name": "Is intelligence research a one-off exercise or a continuous function?",
                "acceptedAnswer": { "@type": "Answer", "text": "Both models are available. A one-off market mapping engagement establishes the initial prospect universe. Ongoing intelligence monitoring continuously identifies new prospects as they enter the target profile and updates existing records with new signal data, keeping the outreach pipeline permanently current." }
              }
            ]
          }
        ]}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Intelligence Research", url: "/services/intelligence-research" },
        ]}
      />

      {/* HERO */}
      <section className="relative z-10 px-6 md:px-12 pt-32 md:pt-44 pb-16 md:pb-24">
        <div className="max-w-[1200px] mx-auto">
          <Breadcrumbs
            items={[{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: "Intelligence Research" }]}
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
                SYSTEM 05 · INTELLIGENCE RESEARCH
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
              >
                <OpticalType className="text-4xl sm:text-5xl md:text-[64px] font-medium text-white leading-[1.05] tracking-tight">
                  Know your market before you move.
                </OpticalType>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.22 }}
                className="text-white/45 text-base md:text-lg mt-6 max-w-xl leading-relaxed"
              >
                Deep market and prospect intelligence delivered as a system, not a spreadsheet.
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
                  All systems <ArrowRight size={14} />
                </Link>
              </motion.div>
            </div>

            <HeroArtefact />
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

      {/* THE PROBLEM */}
      <section className="relative z-10 px-6 md:px-12 py-20 md:py-28 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: EASE }}
            className="max-w-3xl"
          >
            <p className="text-[10px] tracking-[0.28em] text-white/40 mb-5" style={MONO}>
              THE PROBLEM
            </p>
            <h2 className="text-2xl md:text-4xl font-medium text-white tracking-tight leading-tight mb-6">
              Most teams move on incomplete information.
            </h2>
            <p className="text-white/45 text-sm md:text-base leading-relaxed mb-4">
              Your outreach is only as good as the intelligence behind it. Teams that win in competitive markets do
              not move faster. They move with more precision, because they know who is likely to respond, when, and
              why. We build that precision layer.
            </p>
            <p className="text-white/45 text-sm md:text-base leading-relaxed">
              500+ prospect profiles. 80+ signal sources. A weekly intelligence brief that tells you exactly where to
              focus. Built as infrastructure, not a one-off research project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FEATURE BLOCKS */}
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
              CAPABILITIES
            </p>
            <h2 className="text-2xl md:text-4xl font-medium text-white tracking-tight">
              Every layer of your market, mapped.
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {FEATURE_BLOCKS.map((block, i) => (
              <FeatureBlock key={block.label} block={block} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
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
              HOW IT WORKS
            </p>
            <h2 className="text-2xl md:text-4xl font-medium text-white tracking-tight max-w-xl">
              Intelligence delivered as a system.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: EASE }}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.015] hover:border-white/[0.14] hover:bg-white/[0.028] transition-colors duration-300 p-6"
              >
                <span className="text-[10px] tracking-widest text-white/20 tabular-nums" style={MONO}>
                  {s.n}
                </span>
                <p className="text-white text-sm font-medium leading-snug mt-4">{s.title}</p>
                <p className="text-white/40 text-sm leading-relaxed mt-2">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKS ACROSS INDUSTRIES */}
      <section className="relative z-10 px-6 md:px-12 py-20 md:py-28 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: EASE }}
            className="text-[10px] tracking-[0.28em] text-white/40 mb-6"
            style={MONO}
          >
            WORKS ACROSS INDUSTRIES
          </motion.p>
          <div className="flex flex-wrap gap-3">
            {sectors.map((s, i) => (
              <motion.span
                key={s}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.04, ease: EASE }}
                className="px-4 py-2 rounded-full border border-white/[0.08] text-sm text-white/60 hover:border-white/30 hover:text-white transition-colors"
              >
                {s}
              </motion.span>
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
              Know your market before your next move.
            </h2>
            <p className="text-white/45 text-base leading-relaxed mb-9">
              The intelligence layer that premium operators build before anything else. Let us map your market and
              deliver the brief.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
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
                All systems <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <FaqSection faqs={INTELLIGENCE_FAQS} title="Common questions about Intelligence Research" />

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
                  className="group relative flex flex-col h-full rounded-2xl border border-white/[0.08] bg-white/[0.015] hover:border-white/[0.14] hover:bg-white/[0.028] transition-colors duration-300 p-6"
                >
                  <p className="text-[9px] uppercase tracking-widest text-white/30 mb-2" style={MONO}>
                    Read
                  </p>
                  <p className="text-white text-sm font-medium leading-snug pr-6">{r.label}</p>
                  <ArrowRight
                    size={14}
                    className="absolute top-6 right-6 text-white/20 group-hover:text-white/70 group-hover:translate-x-1 transition-all duration-300"
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
