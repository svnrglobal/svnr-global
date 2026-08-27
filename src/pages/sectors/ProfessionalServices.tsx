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
  { v: "6+", l: "Mandate introductions / quarter" },
  { v: "8K+", l: "Decision-maker contacts" },
  { v: "€250K+", l: "Avg. engagement value" },
];

// Mandate introductions as they actually accumulate, quarter by quarter.
const MANDATES = [
  { q: "Q1", n: 2 },
  { q: "Q2", n: 4 },
  { q: "Q3", n: 5 },
  { q: "Q4", n: 6 },
];

const CLIENT_MIX = [
  { type: "Developer", v: 40 },
  { type: "Operator", v: 30 },
  { type: "Institutional", v: 20 },
  { type: "Private", v: 10 },
];

const MILESTONES = [
  { n: "01", when: "Week 0", label: "Client universe mapped" },
  { n: "02", when: "Week 2 to 3", label: "Outreach live" },
  { n: "03", when: "Day 30 to 60", label: "First mandates in discussion" },
  { n: "04", when: "Day 90", label: "Pipeline before the RFP" },
];

const services = [
  { slug: "client-acquisition", label: "Client Acquisition", desc: "Pre-RFP client identification: developers, operators, and asset owners in the project pipeline before formal procurement begins." },
  { slug: "intelligence-research", label: "Intelligence Research", desc: "Planning applications, development finance announcements, hotel expansion plans, and project pipeline signals monitored continuously." },
  { slug: "brand-outreach", label: "Brand Outreach", desc: "Principal-level outreach to the developers and operators most likely to commission your studio, specific, researched, peer-level." },
  { slug: "revenue-operations", label: "Revenue Operations", desc: "Mandate pipeline tracked through pre-RFP, shortlist, proposal, and instruction stages. Every relationship stage measured." },
];

const IMAGES = [
  "/sectors/professional-A015474D-5AE6-4690-B0C0-35613EAEE95D.JPG",
  "/sectors/professional-IMG_3168.JPG",
];

const RELATED = [
  { to: "/blog/professional-services-client-acquisition", label: "Professional Services Acquisition" },
  { to: "/blog/architecture-interior-design-studio-client-acquisition", label: "Architecture Studio Acquisition" },
  { to: "/blog/client-acquisition-cost-referral-dependency", label: "Breaking Referral Dependency" },
];

const PROF_SERVICES_FAQS = [
  { q: "How do law firms and consultancies get new clients without referrals?", a: "Through systematic direct outreach to corporate decision-makers, developers, and operators whose profile and project pipeline match the firm's practice area, reaching them before a formal procurement process begins and positioning the firm as a knowledgeable peer rather than an unsolicited vendor." },
  { q: "What is the best client acquisition strategy for a boutique law firm?", a: "A combination of referral programme formalisation and systematic direct outreach — identifying the corporate clients and decision-makers most aligned with the firm's sector expertise, and maintaining presence through intelligent, low-frequency contact across the months before a mandate arises." },
  { q: "How long does it take to convert a professional services prospect into a client?", a: "Professional services procurement cycles are typically 3–12 months from first contact to signed instruction. The outreach programme must be designed for this timeline, maintaining credibility and presence across multiple touches before a formal opportunity arises." },
  { q: "Does outreach work for architecture studios and design consultancies?", a: "Yes. Architecture and design studios are among the most passive sectors in business development, which means systematic outreach faces almost no competition. A studio making disciplined, research-backed contact with developers and hospitality operators each month is operating in a market where almost no competitor does the same." },
];

// THE STRIPE MOMENT — the sector's own mini, blown up to hero scale inside a
// bordered instrument panel: the mandate ledger, arriving direct. It plays on
// load and replays once, quietly, about eight seconds after a reader hovers it
// and moves on.
function MandateArtefact() {
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
          MANDATE LEDGER
        </span>
        <span className="text-[10px] tracking-[0.2em] text-white/25" style={MONO}>
          PRE-RFP
        </span>
      </div>

      <div
        key={replay}
        className="absolute left-0 top-4 w-[80%] md:w-[64.5%] origin-top-left scale-[1.25] md:scale-[1.55]"
      >
        {SECTOR_MINI["professional-services"]?.(true)}
      </div>

      <p className="absolute z-10 bottom-7 left-7 right-7 text-[10px] text-white/30" style={MONO}>
        No referral. No intermediary. No brief issued yet.
      </p>
    </motion.div>
  );
}

// Bars grow from the floor: the ramp is the point, not the styling.
function MandateBuild() {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.015] p-7">
      <p className="text-[10px] tracking-[0.28em] text-white/40 mb-7" style={MONO}>
        MANDATE INTRODUCTIONS · BY QUARTER
      </p>
      <div className="flex items-end gap-4 h-40">
        {MANDATES.map((m, i) => (
          <div key={m.q} className="flex-1 h-full flex flex-col justify-end items-center gap-2">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.3, delay: 0.35 + i * 0.09 }}
              className="text-[13px] text-white/60 tabular-nums"
              style={MONO}
            >
              {m.n}
            </motion.span>
            <div className="w-full flex-1 flex items-end rounded-t bg-white/[0.04] overflow-hidden">
              <motion.div
                className="w-full rounded-t bg-white/35"
                initial={{ height: 0 }}
                whileInView={{ height: `${(m.n / 6) * 100}%` }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.09, ease: EASE }}
              />
            </div>
            <span className="text-[9px] tracking-widest text-white/25" style={MONO}>
              {m.q}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Who the mandates actually come from — bar length is the whole argument.
function ClientMix() {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.015] p-7">
      <p className="text-[10px] tracking-[0.28em] text-white/40 mb-6" style={MONO}>
        CLIENT PROFILE BY TYPE
      </p>
      <div className="flex flex-col gap-3.5">
        {CLIENT_MIX.map((c, i) => (
          <div key={c.type}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] tracking-[0.18em] text-white/40" style={MONO}>
                {c.type.toUpperCase()}
              </span>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.08 }}
                className="text-[11px] text-white/55 tabular-nums"
                style={MONO}
              >
                {c.v}
              </motion.span>
            </div>
            <div className="h-[3px] rounded-full bg-white/[0.06] overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-white/35"
                initial={{ width: "0%" }}
                whileInView={{ width: `${(c.v / 40) * 100}%` }}
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

export default function ProfessionalServices() {
  return (
    <main className="relative w-full bg-black font-sans selection:bg-white/20 selection:text-white">
      <SEO
        title="Professional Services Client Acquisition | SVNR Global"
        description="Client acquisition for law firms, consultancies, architecture studios, and advisory practices. Systematic direct outreach that positions you as a peer, not a vendor. For professional services firms moving beyond referral dependency."
        canonical="/sectors/professional-services"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Professional Services Client Acquisition",
            "provider": { "@id": "https://svnrglobal.com/#organization" },
            "description": "Systematic mandate and client acquisition for law firms, boutique consultancies, accountancies, architecture studios, and advisory practices. Pre-RFP outreach to developers, corporates, and principals that positions the firm as a peer before the brief is issued.",
            "areaServed": ["Global", "Europe", "Middle East", "India", "United Kingdom"],
            "serviceType": ["Law Firm Client Acquisition", "Consultancy Business Development", "Architecture Studio Mandate Pipeline", "Advisory Practice Growth"]
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How do law firms and consultancies get new clients without referrals?",
                "acceptedAnswer": { "@type": "Answer", "text": "Through systematic direct outreach to corporate decision-makers, developers, and operators whose profile and project pipeline match the firm's practice area, reaching them before a formal procurement process begins and positioning the firm as a knowledgeable peer rather than an unsolicited vendor." }
              },
              {
                "@type": "Question",
                "name": "What is the best client acquisition strategy for a boutique law firm?",
                "acceptedAnswer": { "@type": "Answer", "text": "A combination of referral programme formalisation and systematic direct outreach, identifying the corporate clients and decision-makers most aligned with the firm's sector expertise, and maintaining presence through intelligent, low-frequency contact across the months before a mandate arises." }
              },
              {
                "@type": "Question",
                "name": "How long does it take to convert a professional services prospect into a client?",
                "acceptedAnswer": { "@type": "Answer", "text": "Professional services procurement cycles are typically 3–12 months from first contact to signed instruction. The outreach programme must be designed for this timeline, maintaining credibility and presence across multiple touches before a formal opportunity arises." }
              },
              {
                "@type": "Question",
                "name": "Does outreach work for architecture studios and design consultancies?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes. Architecture and design studios are among the most passive sectors in business development, which means systematic outreach faces almost no competition. A studio making disciplined, research-backed contact with developers and hospitality operators each month is operating in a market where almost no competitor does the same." }
              }
            ]
          }
        ]}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Sectors", url: "/sectors" },
          { name: "Professional Services", url: "/sectors/professional-services" },
        ]}
      />

      {/* HERO */}
      <section className="relative z-10 px-6 md:px-12 pt-32 md:pt-44 pb-16 md:pb-24">
        <div className="max-w-[1200px] mx-auto">
          <Breadcrumbs
            items={[{ label: "Home", to: "/" }, { label: "Sectors", to: "/sectors" }, { label: "Professional Services" }]}
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
                SECTOR 08 · PROFESSIONAL SERVICES
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
              >
                <OpticalType className="text-4xl sm:text-5xl md:text-[64px] font-medium text-white leading-[1.05] tracking-tight">
                  The mandated relationship as pipeline.
                </OpticalType>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.22 }}
                className="text-white/45 text-base md:text-lg mt-6 max-w-xl leading-relaxed"
              >
                For architecture studios, legal boutiques, and advisory firms where new client relationships come
                through mandates.
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

            <MandateArtefact />
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
              An architecture studio. Six qualified mandate introductions in the first quarter, from developers and
              operators the studio had no prior relationship with, reached before any RFP was issued.
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
              The studio that reaches clients before the RFP wins a different competition.
            </h2>
            <p className="text-white/45 text-sm leading-relaxed mb-4">
              Studios shortlisted at the RFP stage have already lost part of the competition. The client has formed
              opinions, set the brief, and defined the parameters without input from most of the studios responding.
              The studio that had a conversation with this client six months earlier, when the project was still in
              planning, entered the process in a completely different position.
            </p>
            <p className="text-white/45 text-sm leading-relaxed mb-4">
              Development pipelines are visible before they become briefs. Planning applications are public. Hotel
              expansion plans are documented. Institutional development programmes are announced. We monitor these
              signals continuously and put your principals in front of the right clients at the right moment.
            </p>
            <p className="text-white/45 text-sm leading-relaxed">
              6+ mandate introductions per quarter. Decision-maker contacts across developer, operator, and
              institutional segments. Average engagement value above €250K.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.08, ease: EASE }}
            className="flex flex-col gap-4"
          >
            <MandateBuild />
            <ClientMix />
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
                alt="Professional services firm client acquisition and pre-RFP outreach"
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
              Built for the pre-RFP mandate.
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
              Reach clients before they issue the brief.
            </h2>
            <p className="text-white/45 text-base leading-relaxed mb-9">
              We monitor the development pipeline, identify the right clients, and put your principals in front of them
              at the moment that matters.
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

      <FaqSection faqs={PROF_SERVICES_FAQS} title="Common questions about professional services client acquisition" />

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
