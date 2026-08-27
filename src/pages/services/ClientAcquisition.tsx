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
  ProspectConsole,
  SequenceBoard,
  PartnerMap,
} from "../../components/console/replicas";
import { SelfResolvingAlert, LogTail } from "../../components/console/primitives";
import { useIdleMischief } from "../../hooks/useIdleMischief";

const MONO = { fontFamily: "var(--font-mono)" };
const EASE = [0.16, 1, 0.3, 1] as const;

const HERO_STATS = [
  { v: "40+", l: "Qualified leads per month" },
  { v: "18%", l: "Average reply rate" },
  { v: "14 days", l: "To first meeting" },
];

const steps = [
  { n: "01", title: "Define ideal client profile", desc: "We work with you to map the precise characteristics of your best-fit client — sector, size, geography, decision-maker title." },
  { n: "02", title: "Map the target universe", desc: "Using proprietary data infrastructure, we identify every qualifying company and decision-maker in your market." },
  { n: "03", title: "Research & qualify", desc: "Each prospect is individually researched and scored. Only the highest-signal targets enter the outreach sequence." },
  { n: "04", title: "Deploy outreach sequences", desc: "Multi-touch, multi-channel sequences are deployed. Every message is personalised to the individual — no templates." },
  { n: "05", title: "Warm handoff to principal", desc: "When a prospect responds with genuine interest, we hand them directly to you with full context for the conversation." },
];

const sectors = ["Luxury Rugs", "Premium Real Estate", "Private Equity", "Wealth Management", "B2B Luxury", "Professional Services"];

const RELATED = [
  { to: "/blog/client-acquisition-system-vs-campaign", label: "System vs Campaign" },
  { to: "/blog/client-acquisition-cost-referral-dependency", label: "Breaking Referral Dependency" },
  { to: "/blog/what-is-outreach-infrastructure", label: "What Is Outreach Infrastructure" },
];

const services = [
  { slug: "ai-receptionist", label: "AI Receptionist", desc: "Every inbound enquiry qualified, answered, and routed the moment it arrives, day or night." },
  { slug: "revenue-operations", label: "Revenue Operations", desc: "The pipeline this system fills, tracked end-to-end. Every stage measured and managed." },
  { slug: "intelligence-research", label: "Intelligence & Research", desc: "The signal layer behind qualification — funding, hiring, and market movement mapped per account." },
];

const CLIENT_ACQUISITION_FAQS = [
  { q: "What does SVNR's client acquisition system actually do?", a: "The system identifies every qualifying prospect in your target market using AI-driven research across 50+ data signals, builds personalised multi-channel outreach sequences, runs the entire conversation until the prospect is genuinely warm, and hands them directly to you with full context. You only engage at the point of a qualified conversation." },
  { q: "How many qualified leads does the client acquisition system generate per month?", a: "Most SVNR client acquisition deployments generate 40+ qualified conversations per month from month two onwards. Reply rates average 18% across sectors, with first meetings typically occurring within 14 days of deployment." },
  { q: "Is this the same as a cold email agency?", a: "No. A cold email agency sends templated sequences at volume. SVNR builds a complete acquisition infrastructure — ICP definition, 50-signal prospect research, individually crafted messaging, multi-channel deployment across email and LinkedIn, and continuous optimisation. The result is a permanent acquisition asset, not a one-off campaign." },
  { q: "How quickly does SVNR's client acquisition system start delivering results?", a: "Most clients see the first qualified prospect conversations within 14–21 days of deployment. The system compounds over time — month 3 consistently outperforms month 1 as early relationships mature and the sequence is refined on real response data." },
];

// THE STRIPE MOMENT — the account console, blown up to hero scale inside the
// console chrome. Plays on load; replays once, quietly, after a hover-and-leave.
function HeroConsole() {
  const { lit, mischief, bind } = useIdleMischief();
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
      <ConsoleFrame label="prospect-console — live" badge="LIVE">
        <div key={replay}>
          <ProspectConsole lit={mischief || lit || replay === 0} />
        </div>
      </ConsoleFrame>
    </motion.div>
  );
}

// Feature block wrapper: label / badge / headline / sentence / a replaying console.
function FeatureBlock({
  eyebrow,
  badge,
  title,
  copy,
  consoleLabel,
  children,
  delay = 0,
}: {
  eyebrow: string;
  badge: string;
  title: string;
  copy: string;
  consoleLabel: string;
  children: (lit: boolean) => React.ReactNode;
  delay?: number;
}) {
  const { lit, mischief, bind } = useIdleMischief();
  const [replay, setReplay] = useState(0);

  useEffect(() => {
    if (mischief) setReplay((n) => n + 1);
  }, [mischief]);

  const active = mischief || lit;

  return (
    <motion.div
      {...bind}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: EASE }}
      className="rounded-2xl border border-white/[0.08] bg-white/[0.015] hover:border-white/[0.14] hover:bg-white/[0.028] transition-colors duration-300 p-7 md:p-8"
    >
      <p className="text-[10px] tracking-[0.28em] text-white/40 mb-3" style={MONO}>
        {eyebrow.toUpperCase()}
      </p>
      <span
        className="inline-block text-[9px] tracking-widest text-white/30 border border-white/[0.08] rounded px-1.5 py-0.5 mb-5"
        style={MONO}
      >
        {badge}
      </span>
      <h3 className="text-white text-lg md:text-xl font-medium tracking-tight mb-2">{title}</h3>
      <p className="text-white/45 text-sm leading-relaxed mb-6">{copy}</p>
      <ConsoleFrame label={consoleLabel}>
        <div key={replay}>{children(active)}</div>
      </ConsoleFrame>
    </motion.div>
  );
}

export default function ClientAcquisition() {
  return (
    <main className="relative w-full bg-black font-sans selection:bg-white/20 selection:text-white">
      <SEO
        title="Client Acquisition — AI-Powered B2B Outreach | SVNR Global"
        description="AI-powered B2B client acquisition for luxury brands, private equity, real estate, and high-ticket operators. 40+ qualified conversations per month. First results in 14–21 days. No ads, no referrals."
        canonical="/services/client-acquisition"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "AI-Powered B2B Client Acquisition",
            "provider": { "@id": "https://svnrglobal.com/#organization" },
            "description": "Bespoke AI client acquisition system that identifies, researches, and reaches the exact decision-makers in your market, delivering 40+ qualified conversations per month without paid ads or referral dependency.",
            "areaServed": ["Global", "Europe", "Middle East", "Asia", "India"],
            "serviceType": ["B2B Client Acquisition", "Outbound Lead Generation", "AI Outreach", "Sales Pipeline Development"]
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What does SVNR's client acquisition system actually do?",
                "acceptedAnswer": { "@type": "Answer", "text": "The system identifies every qualifying prospect in your target market using AI-driven research across 50+ data signals, builds personalised multi-channel outreach sequences, runs the entire conversation until the prospect is genuinely warm, and hands them directly to you with full context. You only engage at the point of a qualified conversation." }
              },
              {
                "@type": "Question",
                "name": "How many qualified leads does the client acquisition system generate per month?",
                "acceptedAnswer": { "@type": "Answer", "text": "Most SVNR client acquisition deployments generate 40+ qualified conversations per month from month two onwards. Reply rates average 18% across sectors, with first meetings typically occurring within 14 days of deployment." }
              },
              {
                "@type": "Question",
                "name": "Is this the same as a cold email agency?",
                "acceptedAnswer": { "@type": "Answer", "text": "No. A cold email agency sends templated sequences at volume. SVNR builds a complete acquisition infrastructure, ICP definition, 50-signal prospect research, individually crafted messaging, multi-channel deployment across email and LinkedIn, and continuous optimisation. The result is a permanent acquisition asset, not a one-off campaign." }
              },
              {
                "@type": "Question",
                "name": "How quickly does SVNR's client acquisition system start delivering results?",
                "acceptedAnswer": { "@type": "Answer", "text": "Most clients see the first qualified prospect conversations within 14–21 days of deployment. The system compounds over time, month 3 consistently outperforms month 1 as early relationships mature and the sequence is refined on real response data." }
              }
            ]
          }
        ]}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Client Acquisition", url: "/services/client-acquisition" },
        ]}
      />

      {/* HERO */}
      <section className="relative z-10 px-6 md:px-12 pt-32 md:pt-44 pb-16 md:pb-24">
        <div className="max-w-[1200px] mx-auto">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: "Client Acquisition" }]} />

          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="text-[10px] tracking-[0.28em] text-white/40 mb-6"
                style={MONO}
              >
                SYSTEM 01 · CLIENT ACQUISITION
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.08, ease: EASE }}>
                <OpticalType className="text-4xl sm:text-5xl md:text-[64px] font-medium text-white leading-[1.05] tracking-tight">
                  The system that fills your pipeline.
                </OpticalType>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.22 }}
                className="text-white/45 text-base md:text-lg mt-6 max-w-xl leading-relaxed"
              >
                We identify, reach, and warm the exact decision-makers in your market — continuously, without your time.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-3 mt-9"
              >
                <Link to="/contact" className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors">
                  Start the conversation <ArrowRight size={14} />
                </Link>
                <Link to="/services" className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/[0.14] text-white/80 text-sm hover:border-white/30 hover:text-white transition-colors">
                  All systems <ArrowRight size={14} />
                </Link>
              </motion.div>
            </div>

            <HeroConsole />
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

      {/* WHICH SECTORS */}
      <section className="relative z-10 px-6 md:px-12 py-16 md:py-20 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, ease: EASE }}>
            <p className="text-[10px] tracking-[0.28em] text-white/40 mb-6" style={MONO}>
              WHICH INDUSTRIES BENEFIT MOST
            </p>
            <div className="flex flex-wrap gap-3">
              {sectors.map((s) => (
                <span
                  key={s}
                  className="px-4 py-2 rounded-full text-xs uppercase tracking-widest text-white/60 border border-white/[0.08]"
                  style={MONO}
                >
                  {s}
                </span>
              ))}
            </div>
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
              WHAT THE SYSTEM DELIVERS
            </p>
            <h2 className="text-2xl md:text-4xl font-medium text-white tracking-tight">
              Four capabilities, one pipeline.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FeatureBlock
              eyebrow="Market mapping"
              badge="ICP MATCH"
              title="Every qualifying account, mapped before contact."
              copy="We identify every relevant decision-maker in your target geography before a single message is sent."
              consoleLabel="prospect-console"
              delay={0}
            >
              {(lit) => <ProspectConsole lit={lit} />}
            </FeatureBlock>

            <FeatureBlock
              eyebrow="Prospect identification"
              badge="50+ SIGNALS"
              title="Qualification against your ideal client profile."
              copy="AI-driven qualification runs across 50+ data signals so only the highest-fit targets enter a sequence."
              consoleLabel="pipeline-health"
              delay={0.05}
            >
              {(lit) => (
                <div className="py-1">
                  <SelfResolvingAlert
                    lit={lit}
                    problem="Stale deal detected — Nordvik Group, 19 days idle"
                    resolution="Auto-escalated to owner, follow-up sent"
                    meta="11 min"
                  />
                </div>
              )}
            </FeatureBlock>

            <FeatureBlock
              eyebrow="Multi-channel outreach"
              badge="EMAIL + LINKEDIN"
              title="Precision sequences tuned to your sector."
              copy="Multi-touch sequences run across email and LinkedIn, personalised to the individual, never templated."
              consoleLabel="sequence-board"
              delay={0.1}
            >
              {(lit) => <SequenceBoard lit={lit} />}
            </FeatureBlock>

            <FeatureBlock
              eyebrow="Warm handoff"
              badge="ROUTED"
              title="You close from a position of strength."
              copy="We run the conversation until the prospect is genuinely warm, then hand off with full context."
              consoleLabel="handoff-log"
              delay={0.15}
            >
              {(lit) => (
                <LogTail
                  lit={lit}
                  rows={[
                    { t: "09:14", status: "reply", text: "Prospect replied — routed to qualification" },
                    { t: "10:02", status: "warm", text: "Interest confirmed — context brief prepared" },
                    { t: "10:48", status: "handoff", text: "Handed off to principal for first call" },
                  ]}
                />
              )}
            </FeatureBlock>
          </div>
        </div>
      </section>

      {/* HOW IT RUNS */}
      <section className="relative z-10 px-6 md:px-12 py-20 md:py-28 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <p className="text-[10px] tracking-[0.28em] text-white/40 mb-5" style={MONO}>
              HOW IT RUNS
            </p>
            <h2 className="text-2xl md:text-4xl font-medium text-white tracking-tight leading-tight mb-6">
              Signals in. Conversations out.
            </h2>
            <p className="text-white/45 text-sm leading-relaxed mb-4">
              Most acquisition motions depend on one person who knows everyone, or a trade fair cycle that produces
              two new contacts per year. We replace that dependency with a permanent operating system.
            </p>
            <p className="text-white/45 text-sm leading-relaxed">
              40+ qualified conversations per month. 18% average reply rate. First meetings inside 14 days.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.08, ease: EASE }}
          >
            <ConsoleFrame label="partner-map">
              <PartnerMap lit={true} />
            </ConsoleFrame>
          </motion.div>
        </div>
      </section>

      {/* PROCESS */}
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
              PROCESS
            </p>
            <h2 className="text-2xl md:text-4xl font-medium text-white tracking-tight">
              How the system deploys.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
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
                <p className="text-white/40 text-xs leading-relaxed mt-2">{s.desc}</p>
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
              RELATED SYSTEMS
            </p>
            <h2 className="text-2xl md:text-4xl font-medium text-white tracking-tight">
              Built to run alongside client acquisition.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                  <ArrowRight size={14} className="absolute top-7 right-7 text-white/20 group-hover:text-white/70 group-hover:translate-x-1 transition-all duration-300" />
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
              Ready to build the pipeline?
            </h2>
            <p className="text-white/45 text-base leading-relaxed mb-9">
              Every engagement is built specifically for your market. No templates. No shared infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors">
                Start the conversation <ArrowRight size={14} />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/[0.14] text-white/80 text-sm hover:border-white/30 hover:text-white transition-colors">
                All systems <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <FaqSection faqs={CLIENT_ACQUISITION_FAQS} title="Common questions about Client Acquisition" />

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
                  <ArrowRight size={14} className="shrink-0 text-white/20 group-hover:text-white/70 group-hover:translate-x-1 transition-all duration-300" />
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
