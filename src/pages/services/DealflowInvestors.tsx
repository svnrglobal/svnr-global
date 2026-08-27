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
import ConsoleFrame from "../../components/console/ConsoleFrame";
import {
  DealRadar,
  ProspectConsole,
  PipelineHealth,
  SequenceBoard,
} from "../../components/console/replicas";
import { useIdleMischief } from "../../hooks/useIdleMischief";

const MONO = { fontFamily: "var(--font-mono)" };
const EASE = [0.16, 1, 0.3, 1] as const;

const HERO_STATS = [
  { v: "75%", l: "Deals sourced pre-process" },
  { v: "12", l: "Sectors mapped" },
  { v: "8+", l: "GP introductions / quarter" },
];

const MILESTONES = [
  { n: "01", when: "Week 0", label: "Mandate translated into a research-ready target profile" },
  { n: "02", when: "Week 2 to 3", label: "Target universe mapped, researched, and ranked" },
  { n: "03", when: "Day 30 to 60", label: "Top companies contacted with thesis-anchored outreach" },
  { n: "04", when: "Day 90", label: "A meaningful starting position, and a pipeline that keeps building" },
];

const services = [
  { slug: "client-acquisition", label: "Client Acquisition", desc: "Systematic identification and outreach to the accounts that match your ideal customer profile." },
  { slug: "intelligence-research", label: "Intelligence & Research", desc: "Signals mapped on the accounts and markets that matter, before you need to ask." },
  { slug: "channel-partnership", label: "Channel Partnership", desc: "Distribution built through the resellers, integrators, and agencies who reach your buyer first." },
  { slug: "brand-outreach", label: "Brand Outreach", desc: "Message sequences written and deployed at the level of your market. No templates, no mass sends." },
];

const RELATED = [
  { to: "/blog/private-equity-proprietary-deal-flow", label: "PE Proprietary Deal Flow" },
  { to: "/blog/ai-prospecting-family-offices", label: "AI Prospecting for Family Offices" },
  { to: "/blog/hnw-investor-outreach-strategy", label: "HNW Investor Outreach" },
];

const DEALFLOW_FAQS = [
  { q: "How do PE firms source proprietary off-market deals?", a: "Through systematic outreach to founders, owner-operators, and management teams in sectors matching the fund's thesis, using AI-driven research to identify companies at pre-transaction trigger points: succession planning, debt maturity, management transitions, and sector consolidation signals." },
  { q: "Why is proprietary deal flow better than auction processes for PE firms?", a: "Proprietary deals avoid competitive bidding, which compresses returns. They allow deeper pre-LOI diligence, better founder trust before signing, and more favourable terms on price and structure. The most valuable transactions a PE firm executes are typically ones it sourced before any other firm knew they were available." },
  { q: "How long does it take to build a proprietary deal flow pipeline?", a: "A structured 90-day programme identifies qualifying targets and initiates founder conversations. Meaningful deal flow from those relationships typically materialises within 6–18 months, as founders reach their own moment of readiness for a transaction." },
  { q: "Can SVNR help with LP fundraising as well as deal sourcing?", a: "Yes. SVNR builds LP acquisition infrastructure for emerging managers and established funds, mapping qualifying family offices and institutional LPs, researching their mandate fit, and deploying outreach that earns an introduction at the decision-maker level." },
];

// THE STRIPE MOMENT — DealRadar blown up to hero scale inside a bordered
// instrument panel. Plays on load, replays once after the reader hovers and
// moves on.
function DealRadarArtefact() {
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
    >
      <ConsoleFrame label="deal-radar.svnr" badge="LIVE" className="min-h-[300px] md:min-h-[380px]">
        <div key={replay} className="pt-6 md:pt-10">
          <DealRadar lit={true} />
        </div>
        <p className="text-[10px] text-white/30 mt-6" style={MONO}>
          Deals sourced left of market — before the banker deck.
        </p>
      </ConsoleFrame>
    </motion.div>
  );
}

// Feature block wrapper: label / badge / headline / sentence / ConsoleFrame,
// replaying its replica once after the reader moves on.
function FeatureBlock({
  label,
  badge,
  headline,
  sentence,
  frameLabel,
  frameBadge,
  children,
  delay = 0,
}: {
  label: string;
  badge: string;
  headline: string;
  sentence: string;
  frameLabel: string;
  frameBadge?: string;
  children: (lit: boolean, key: number) => React.ReactNode;
  delay?: number;
}) {
  const { mischief, bind } = useIdleMischief();
  const [replay, setReplay] = useState(0);

  useEffect(() => {
    if (mischief) setReplay((n) => n + 1);
  }, [mischief]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: EASE }}
      {...bind}
    >
      <p className="text-[10px] tracking-[0.28em] text-white/40 mb-3" style={MONO}>
        {label.toUpperCase()}
      </p>
      <span
        className="inline-block text-[9px] tracking-widest text-white/30 border border-white/[0.08] rounded px-1.5 py-0.5 mb-4"
        style={MONO}
      >
        {badge}
      </span>
      <h3 className="text-white text-lg md:text-xl font-medium tracking-tight mb-2">{headline}</h3>
      <p className="text-white/40 text-sm leading-relaxed mb-5">{sentence}</p>
      <ConsoleFrame label={frameLabel} badge={frameBadge}>
        {children(true, replay)}
      </ConsoleFrame>
    </motion.div>
  );
}

export default function DealflowInvestors() {
  return (
    <main className="relative w-full bg-black font-sans selection:bg-white/20 selection:text-white">
      <SEO
        title="Dealflow for Investors — Proprietary PE Deal Sourcing | SVNR Global"
        description="Proprietary deal flow infrastructure for private equity firms and family offices. We reach founders before formal sale processes begin. Off-market pipeline built through systematic, AI-driven founder outreach."
        canonical="/services/dealflow-investor"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Dealflow for Investors, Proprietary PE Deal Sourcing",
            "provider": { "@id": "https://svnrglobal.com/#organization" },
            "description": "AI-powered proprietary deal flow infrastructure for private equity firms, venture capital funds, and family offices. We identify and reach founders, owner-operators, and management teams before formal sale processes begin, delivering off-market deal pipeline that competitive bidding never reaches.",
            "areaServed": ["Global", "Europe", "Middle East", "India", "United Kingdom"],
            "serviceType": ["Proprietary Deal Flow", "PE Deal Sourcing", "Off-Market Transaction Pipeline", "Founder Outreach", "LP Fundraising"]
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How do PE firms source proprietary off-market deals?",
                "acceptedAnswer": { "@type": "Answer", "text": "Through systematic outreach to founders, owner-operators, and management teams in sectors matching the fund's thesis, using AI-driven research to identify companies at pre-transaction trigger points: succession planning, debt maturity, management transitions, and sector consolidation signals." }
              },
              {
                "@type": "Question",
                "name": "Why is proprietary deal flow better than auction processes for PE firms?",
                "acceptedAnswer": { "@type": "Answer", "text": "Proprietary deals avoid competitive bidding, which compresses returns. They allow deeper pre-LOI diligence, better founder trust before signing, and more favourable terms on price and structure. The most valuable transactions a PE firm executes are typically ones it sourced before any other firm knew they were available." }
              },
              {
                "@type": "Question",
                "name": "How long does it take to build a proprietary deal flow pipeline?",
                "acceptedAnswer": { "@type": "Answer", "text": "A structured 90-day programme identifies qualifying targets and initiates founder conversations. Meaningful deal flow from those relationships typically materialises within 6–18 months, as founders reach their own moment of readiness for a transaction, which cannot be accelerated but can be anticipated." }
              },
              {
                "@type": "Question",
                "name": "Can SVNR help with LP fundraising as well as deal sourcing?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes. SVNR builds LP acquisition infrastructure for emerging managers and established funds, mapping qualifying family offices and institutional LPs, researching their mandate fit, and deploying outreach that earns an introduction at the decision-maker level." }
              }
            ]
          }
        ]}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Dealflow for Investors", url: "/services/dealflow-investor" },
        ]}
      />

      {/* HERO */}
      <section className="relative z-10 px-6 md:px-12 pt-32 md:pt-44 pb-16 md:pb-24">
        <div className="max-w-[1200px] mx-auto">
          <Breadcrumbs
            items={[{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: "Dealflow for Investors" }]}
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
                SYSTEM 07 · DEALFLOW FOR INVESTORS
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
              >
                <OpticalType className="text-4xl sm:text-5xl md:text-[64px] font-medium text-white leading-[1.05] tracking-tight">
                  Proprietary deal flow, before the process.
                </OpticalType>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.22 }}
                className="text-white/45 text-base md:text-lg mt-6 max-w-xl leading-relaxed"
              >
                Built for PE firms and family offices who need to see opportunities before they are formally marketed.
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

            <DealRadarArtefact />
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
            transition={{ duration: 0.55, ease: EASE }}
            className="rounded-2xl border border-white/[0.08] bg-white/[0.015] p-8 md:p-12"
          >
            <p className="text-[10px] tracking-[0.28em] text-white/40 mb-6" style={MONO}>
              THE PROBLEM
            </p>
            <p className="text-xl md:text-3xl font-medium text-white tracking-tight leading-snug max-w-3xl">
              By the time the banker deck arrives, 30–60 potential buyers are looking at the same information on the
              same day. The firms that consistently see the best transactions see them three months earlier.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FEATURE BLOCKS — the core of the page */}
      <section className="relative z-10 px-6 md:px-12 py-20 md:py-28 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: EASE }}
            className="mb-14"
          >
            <p className="text-[10px] tracking-[0.28em] text-white/40 mb-5" style={MONO}>
              THE SYSTEM
            </p>
            <h2 className="text-2xl md:text-4xl font-medium text-white tracking-tight">
              Proprietary sourcing as a permanent programme.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-16">
            <FeatureBlock
              label="Mandate Definition"
              badge="STEP 01"
              headline="Your thesis, translated into a research-ready profile."
              sentence="Sector, EBITDA range, geography, ownership type, and succession signals — specific enough to generate 50–75 qualifying companies in a first mapping exercise."
              frameLabel="target-mapping.svnr"
              frameBadge="12 SECTORS"
              delay={0}
            >
              {(lit, key) => <div key={key}><ProspectConsole lit={lit} /></div>}
            </FeatureBlock>

            <FeatureBlock
              label="Ongoing Deal Flow"
              badge="STEP 04"
              headline="A pipeline that keeps producing, not a one-time list."
              sentence="Active relationships maintained over the 12–24 month window that matters, with stale deals surfaced and escalated automatically before they go cold."
              frameLabel="pipeline-health.svnr"
              frameBadge="87 SCORE"
              delay={0.05}
            >
              {(lit, key) => <div key={key}><PipelineHealth lit={lit} /></div>}
            </FeatureBlock>

            <FeatureBlock
              label="Outreach Programme"
              badge="STEP 03"
              headline="Specific, founder-appropriate outreach at scale."
              sentence="No generic pitches, no mass sends. Every message written to the individual, sequenced across the touches that earn a 20-minute founder conversation."
              frameLabel="sequence-board.svnr"
              frameBadge="4 TOUCHES"
              delay={0.1}
            >
              {(lit, key) => <div key={key}><SequenceBoard lit={lit} /></div>}
            </FeatureBlock>

            <FeatureBlock
              label="Target Mapping"
              badge="STEP 02"
              headline="Every qualifying company, researched and ranked."
              sentence="Deals sourced pre-market, left of the point where a formal process begins — the position that produces 75% of proprietary flow."
              frameLabel="deal-radar.svnr"
              frameBadge="PRE-MARKET"
              delay={0.15}
            >
              {(lit, key) => <div key={key}><DealRadar lit={lit} /></div>}
            </FeatureBlock>
          </div>
        </div>
      </section>

      {/* THE 90-DAY START */}
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
              THE 90-DAY START
            </p>
            <h2 className="text-2xl md:text-4xl font-medium text-white tracking-tight max-w-xl">
              A meaningful starting position within 90 days.
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

      {/* BUILT FOR */}
      <section className="relative z-10 px-6 md:px-12 py-16 md:py-20 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-[10px] tracking-[0.28em] text-white/40 mb-6" style={MONO}>
            BUILT FOR
          </p>
          <div className="flex flex-wrap gap-3">
            {["Private Equity", "Family Offices", "Venture Capital", "Wealth Management", "Corporate M&A", "Growth Capital"].map((s) => (
              <span
                key={s}
                className="px-4 py-2 rounded-full border border-white/[0.08] text-sm text-white/60 hover:border-white/30 hover:text-white transition-colors"
              >
                {s}
              </span>
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
              RELATED SYSTEMS
            </p>
            <h2 className="text-2xl md:text-4xl font-medium text-white tracking-tight">
              Built alongside the sourcing programme.
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
              We map your target universe, reach the right founders, and maintain those relationships over the
              timeline that matters.
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

      <FaqSection faqs={DEALFLOW_FAQS} title="Common questions about Deal Flow & Investor Relations" />

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
