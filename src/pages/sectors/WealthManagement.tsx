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
  { v: "200+", l: "UHNW contacts / month" },
  { v: "$5M+", l: "AUM threshold" },
  { v: "8%", l: "First meeting set rate" },
];

// Cumulative UHNW contacts reached across the first twelve months.
const REACH = [
  { m: "M1", contacts: 20 },
  { m: "M3", contacts: 60 },
  { m: "M6", contacts: 120 },
  { m: "M9", contacts: 175 },
  { m: "M12", contacts: 200 },
];

// Who the reached principals actually are, as a share of the list.
const SEGMENTS = [
  { name: "Entrepreneur exits", value: 38, tone: "bg-white/45" },
  { name: "NextGen inheritors", value: 30, tone: "bg-white/30" },
  { name: "Family office", value: 20, tone: "bg-white/[0.18]" },
  { name: "Professional wealth", value: 12, tone: "bg-white/[0.10]" },
];

const MILESTONES = [
  { n: "01", when: "Week 0", label: "UHNW signals mapped" },
  { n: "02", when: "Week 2 to 3", label: "Discreet outreach live" },
  { n: "03", when: "Day 30 to 60", label: "First qualified conversations" },
  { n: "04", when: "Day 90", label: "Pipeline beyond referrals" },
];

const services = [
  { slug: "client-acquisition", label: "Client Acquisition", desc: "Direct outreach to UHNW individuals, founders post-exit, and NextGen inheritors, before they have formalised a wealth management relationship." },
  { slug: "intelligence-research", label: "Intelligence Research", desc: "HNWI prospect profiles built from business press, M&A announcements, director filings, and professional network signals." },
  { slug: "brand-outreach", label: "Brand Outreach", desc: "Discreet, specific outreach at the standard a HNWI prospect expects. Never intrusive. Never generic." },
  { slug: "ai-receptionist", label: "AI Receptionist", desc: "Every inbound enquiry, from referrals, website, or introduced contacts, responded to with precision and routed appropriately." },
];

const IMAGES = [
  "/sectors/wealth-photo-1444653614773-995cb1ef9efa.avif",
  "/sectors/wealth-photo-1454165804606-c3d57bc86b40.avif",
];

const RELATED = [
  { to: "/blog/wealth-management-boutique-client-acquisition", label: "Wealth Boutique Acquisition" },
  { to: "/blog/hnw-investor-outreach-strategy", label: "HNW Investor Outreach" },
  { to: "/blog/uhnw-client-acquisition-strategy", label: "UHNW Client Acquisition" },
];

const WEALTH_MGMT_FAQS = [
  { q: "How do wealth management boutiques attract UHNW clients?", a: "Through direct outreach to individuals at the moment of a liquidity event — a business sale, an exit, an inheritance — combined with systematic relationship-building with accountants, lawyers, and advisors who work with HNW individuals. AI systems monitor trigger signals in real time to identify prospects at the right moment." },
  { q: "What triggers a high net worth individual to change wealth manager?", a: "Most transitions happen after a liquidity event, a significant life change, or consistent underperformance in service. The firm that maintains contact with prospects across these trigger windows is positioned when the transition moment arrives." },
  { q: "How is SVNR different from a typical wealth management marketing agency?", a: "SVNR does not run marketing campaigns. We build acquisition infrastructure — AI-driven prospect identification, research-backed outreach, and relationship management — that operates continuously to deliver warm conversations with qualified prospects, not leads or impressions." },
  { q: "Can SVNR Global help wealth managers reach clients outside their home market?", a: "Yes. SVNR deploys outreach across European, Middle Eastern, and global markets. We identify and reach HNW and UHNW prospects in any geography where the client has regulatory permission to operate." },
];

// THE STRIPE MOMENT — the sector's own mini, blown up to hero scale inside a
// bordered instrument panel: the qualified principal list assembling itself,
// one verified name at a time. It replays once, quietly, about eight seconds
// after a reader hovers it and moves on.
function PrincipalListArtefact() {
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
          PRINCIPAL LIST
        </span>
        <span className="text-[10px] tracking-[0.2em] text-white/25" style={MONO}>
          AUM ≥ $5M
        </span>
      </div>

      <div key={replay} className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-[71%] origin-top-left scale-[1.4] md:w-[62%] md:scale-[1.6]">
          {SECTOR_MINI["wealth-management"]?.(true)}
        </div>
      </div>

      <p className="absolute z-10 bottom-7 left-7 right-7 text-[10px] text-white/30" style={MONO}>
        Verified before a single message is sent
      </p>
    </motion.div>
  );
}

// The reach curve as bars, because the shape of the ramp is the claim:
// twenty contacts in month one, two hundred by month twelve.
function ReachBuild() {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.015] p-7">
      <p className="text-[10px] tracking-[0.28em] text-white/40 mb-7" style={MONO}>
        UHNW CONTACTS REACHED · CUMULATIVE
      </p>
      <div className="flex items-end gap-3 h-40">
        {REACH.map((r, i) => (
          <div key={r.m} className="flex-1 h-full flex flex-col justify-end items-center gap-2">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.3, delay: 0.35 + i * 0.09 }}
              className="text-[13px] text-white/60 tabular-nums"
              style={MONO}
            >
              {r.contacts}
            </motion.span>
            <div className="w-full flex-1 flex items-end rounded-t bg-white/[0.04] overflow-hidden">
              <motion.div
                className="w-full rounded-t bg-white/35"
                initial={{ height: 0 }}
                whileInView={{ height: `${(r.contacts / 200) * 100}%` }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.09, ease: EASE }}
              />
            </div>
            <span className="text-[9px] tracking-widest text-white/25" style={MONO}>
              {r.m}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// One bar, four claims on it. The widths are the segment shares, so the
// animation is the fact rather than a wrapper around it.
function SegmentSplit() {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.015] p-7">
      <p className="text-[10px] tracking-[0.28em] text-white/40 mb-6" style={MONO}>
        TARGET SEGMENT SPLIT
      </p>
      <div className="flex gap-[3px] h-2 mb-6">
        {SEGMENTS.map((s, i) => (
          <motion.div
            key={s.name}
            className={`h-full rounded-sm ${s.tone}`}
            initial={{ width: 0 }}
            whileInView={{ width: `calc(${s.value}% - 3px)` }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.09, ease: EASE }}
          />
        ))}
      </div>
      <ul className="flex flex-col gap-2.5">
        {SEGMENTS.map((s, i) => (
          <motion.li
            key={s.name}
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: 0.25 + i * 0.06, ease: EASE }}
            className="flex items-center justify-between gap-4"
          >
            <span className="flex items-center gap-2.5 min-w-0">
              <span className={`w-2 h-2 rounded-sm shrink-0 ${s.tone}`} />
              <span className="text-[12px] text-white/45 truncate">{s.name}</span>
            </span>
            <span className="text-[12px] text-white/60 tabular-nums shrink-0" style={MONO}>
              {s.value}%
            </span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default function WealthManagement() {
  return (
    <main className="relative w-full bg-black font-sans selection:bg-white/20 selection:text-white">
      <SEO
        title="Wealth Management Client Acquisition | SVNR Global"
        description="UHNW and HNW client acquisition for wealth management boutiques and RIAs. AI-driven prospect mapping, trigger signal monitoring, and discreet personalised outreach. For firms expanding beyond referrals in Europe, the Gulf, and globally."
        canonical="/sectors/wealth-management"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Wealth Management Boutique Client Acquisition",
            "provider": { "@id": "https://svnrglobal.com/#organization" },
            "description": "AI-powered UHNW and HNW client acquisition for wealth management boutiques and independent financial advisors. Discreet, researched outreach to qualified principals at the moment of liquidity events and wealth transitions.",
            "areaServed": ["Global", "Europe", "Middle East", "Switzerland", "United Kingdom", "Singapore"],
            "serviceType": ["UHNW Client Acquisition", "HNW Investor Outreach", "Wealth Management Business Development", "Liquidity Event Targeting"]
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How do wealth management boutiques attract UHNW clients?",
                "acceptedAnswer": { "@type": "Answer", "text": "Through direct outreach to individuals at the moment of a liquidity event, a business sale, an exit, an inheritance, combined with systematic relationship-building with accountants, lawyers, and advisors who work with HNW individuals. AI systems monitor trigger signals in real time to identify prospects at the right moment." }
              },
              {
                "@type": "Question",
                "name": "What triggers a high net worth individual to change wealth manager?",
                "acceptedAnswer": { "@type": "Answer", "text": "Most transitions happen after a liquidity event, a significant life change, or consistent underperformance in service. The firm that maintains contact with prospects across these trigger windows is positioned when the transition moment arrives." }
              },
              {
                "@type": "Question",
                "name": "How is SVNR different from a typical wealth management marketing agency?",
                "acceptedAnswer": { "@type": "Answer", "text": "SVNR does not run marketing campaigns. We build acquisition infrastructure, AI-driven prospect identification, research-backed outreach, and relationship management, that operates continuously to deliver warm conversations with qualified prospects, not leads or impressions." }
              },
              {
                "@type": "Question",
                "name": "Can SVNR Global help wealth managers reach clients outside their home market?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes. SVNR deploys outreach across European, Middle Eastern, and global markets from its New Delhi base. We identify and reach HNW and UHNW prospects in any geography where the client has regulatory permission to operate." }
              }
            ]
          }
        ]}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Sectors", url: "/sectors" },
          { name: "Wealth Management", url: "/sectors/wealth-management" },
        ]}
      />

      {/* HERO */}
      <section className="relative z-10 px-6 md:px-12 pt-32 md:pt-44 pb-16 md:pb-24">
        <div className="max-w-[1200px] mx-auto">
          <Breadcrumbs
            items={[{ label: "Home", to: "/" }, { label: "Sectors", to: "/sectors" }, { label: "Wealth Management" }]}
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
                SECTOR 05 · WEALTH MANAGEMENT
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
              >
                <OpticalType className="text-4xl sm:text-5xl md:text-[64px] font-medium text-white leading-[1.05] tracking-tight">
                  Client acquisition for boutique wealth.
                </OpticalType>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.22 }}
                className="text-white/45 text-base md:text-lg mt-6 max-w-xl leading-relaxed"
              >
                For wealth boutiques and family office advisors reaching UHNW clients without a brand marketing budget.
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

            <PrincipalListArtefact />
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
              A wealth boutique. A qualified principal list built and verified. The boutique that asked the right
              questions about a Zurich family office's succession situation before making contact received a reply in
              fourteen minutes.
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
              The referral model that built the book cannot reach the next generation of wealth.
            </h2>
            <p className="text-white/45 text-sm leading-relaxed mb-4">
              The wealth European boutiques have stewarded since the 1990s is transferring. The clients they built their
              books around are in their 70s. The next generation has different advisors, different communication habits,
              and different loyalty patterns. They are not staying with the boutique because their father did.
            </p>
            <p className="text-white/45 text-sm leading-relaxed mb-4">
              The wealth being created today, from founder exits, private equity proceeds, and the professional class, is
              not entering the referral networks of established boutiques. It is reachable, but through a different
              acquisition motion.
            </p>
            <p className="text-white/45 text-sm leading-relaxed">
              200+ UHNW contacts reached per month. AUM threshold of $5M+. Every outreach calibrated to the specific
              individual's circumstances, not a category pitch.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.08, ease: EASE }}
            className="flex flex-col gap-4"
          >
            <ReachBuild />
            <SegmentSplit />
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
                alt="Wealth management UHNW client acquisition and trigger-driven outreach"
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
              Built for wealth boutique acquisition.
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
              Reach the UHNW clients your referral network cannot produce.
            </h2>
            <p className="text-white/45 text-base leading-relaxed mb-9">
              We build the client acquisition infrastructure that reaches new wealth at the moment it is looking for a
              wealth management conversation.
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

      <FaqSection faqs={WEALTH_MGMT_FAQS} title="Common questions about wealth management client acquisition" />

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
