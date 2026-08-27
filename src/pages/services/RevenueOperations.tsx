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
import { PipelineHealth, SignalEnrichment, SequenceBoard } from "../../components/console/replicas";
import { SelfResolvingAlert } from "../../components/console/primitives";
import { useIdleMischief } from "../../hooks/useIdleMischief";

const MONO = { fontFamily: "var(--font-mono)" } as const;
const EASE = [0.16, 1, 0.3, 1] as const;

const HERO_STATS = [
  { v: "312%", l: "Pipeline increase" },
  { v: "2.4x", l: "Close rate improvement" },
  { v: "60 days", l: "Payback period" },
];

const STEPS = [
  { n: "01", when: "Week 0 to 1", label: "Audit current pipeline" },
  { n: "02", when: "Week 1 to 2", label: "Design CRM architecture" },
  { n: "03", when: "Week 2 to 4", label: "Build automation flows" },
  { n: "04", when: "Week 4 onward", label: "Deploy tracking infrastructure" },
];

const sectors = ["Private Equity", "B2B Luxury", "Professional Services", "High-Ticket Ecommerce"];

const services = [
  { slug: "client-acquisition", label: "Client Acquisition", desc: "Systematic identification and outreach to decision-makers in your target market." },
  { slug: "ai-receptionist", label: "AI Receptionist", desc: "Every inbound call and chat answered, qualified, and routed without a missed opportunity." },
  { slug: "channel-partnership", label: "Channel Partnership", desc: "Trade distribution built alongside direct sales, finding and activating the right partners." },
];

const RELATED = [
  { to: "/blog/client-acquisition-system-vs-campaign", label: "System vs Campaign" },
  { to: "/blog/what-is-outreach-infrastructure", label: "What Is Outreach Infrastructure" },
];

const REVOPS_FAQS = [
  { q: "What is revenue operations for a premium B2B company?", a: "Revenue operations is the infrastructure that tracks every deal relationship from first contact to signed client, monitoring stage progression, last contact dates, next action triggers, and conversion signals. It ensures no opportunity is lost to administrative gap, delayed follow-up, or pipeline blindness." },
  { q: "How does SVNR's revenue operations service differ from a standard CRM setup?", a: "Standard CRM setups use off-the-shelf templates. SVNR builds revenue operations infrastructure specifically around your deal cycle — the stages, signals, and timeline relevant to your sector. A luxury real estate pipeline is structured differently from a PE deal sourcing pipeline, which is different from a wealth management client acquisition pipeline." },
  { q: "What tools does SVNR use for revenue operations?", a: "SVNR builds on the infrastructure stack appropriate to the client's existing setup, typically HubSpot, Notion, Airtable, or custom dashboards built in Make or n8n. The specific tool is less important than the architecture: stage definitions, signal logic, and reporting that gives the principal complete pipeline visibility." },
  { q: "Can revenue operations be integrated with SVNR's outreach infrastructure?", a: "Yes. Revenue operations is most powerful when connected to SVNR's outreach infrastructure — warm handoffs from the acquisition system feed directly into the pipeline tracking layer, and stage progression triggers automated follow-up sequences where appropriate." },
];

// THE STRIPE MOMENT — the service's own console, blown up to hero scale.
function HeroConsole() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
    >
      <ConsoleFrame label="pipeline.health" badge="LIVE">
        <PipelineHealth lit={true} />
      </ConsoleFrame>
    </motion.div>
  );
}

// FEATURE BLOCK 1 — CRM architecture, demonstrated via the funnel + hygiene
// ring already inside PipelineHealth, replayed once after the reader moves on.
function CrmBlock() {
  const { mischief, bind } = useIdleMischief();
  const [replay, setReplay] = useState(0);
  useEffect(() => {
    if (mischief) setReplay((n) => n + 1);
  }, [mischief]);

  return (
    <div {...bind}>
      <ConsoleFrame label="crm.stages" badge="AUTO">
        <div key={replay}>
          <PipelineHealth lit={true} />
        </div>
      </ConsoleFrame>
    </div>
  );
}

// FEATURE BLOCK 2 — Pipeline automation, demonstrated via a stale-deal alert
// that resolves itself: the automation is the point, not a chart of it.
function AutomationBlock() {
  const { lit, mischief, bind } = useIdleMischief();
  const [replay, setReplay] = useState(0);
  useEffect(() => {
    if (mischief) setReplay((n) => n + 1);
  }, [mischief]);
  const active = lit || mischief;

  return (
    <div {...bind}>
      <ConsoleFrame label="automation.triggers" badge="RULES">
        <div key={replay} className="flex flex-col gap-3">
          <SelfResolvingAlert
            lit={active}
            problem="Stale deal detected — Halvorsen & Cie, 14 days idle"
            resolution="Auto-escalated to owner, follow-up sent"
            meta="8 min"
          />
          <SelfResolvingAlert
            lit={active}
            problem="No reply after 3 touches — Bellrose Partners"
            resolution="Sequence branch triggered, next touch scheduled"
            meta="4 min"
          />
        </div>
      </ConsoleFrame>
    </div>
  );
}

// FEATURE BLOCK 3 — Deal velocity tracking, demonstrated via the outreach
// sequence board's reply signal (a deal that moved because a touch landed).
function VelocityBlock() {
  const { mischief, bind } = useIdleMischief();
  const [replay, setReplay] = useState(0);
  useEffect(() => {
    if (mischief) setReplay((n) => n + 1);
  }, [mischief]);

  return (
    <div {...bind}>
      <ConsoleFrame label="deal.velocity" badge="TRACK">
        <div key={replay}>
          <SequenceBoard lit={true} />
        </div>
      </ConsoleFrame>
    </div>
  );
}

// FEATURE BLOCK 4 — Conversion analytics, demonstrated via a signal-count
// enrichment card streaming in the reporting layer's inputs.
function AnalyticsBlock() {
  const { mischief, bind } = useIdleMischief();
  const [replay, setReplay] = useState(0);
  useEffect(() => {
    if (mischief) setReplay((n) => n + 1);
  }, [mischief]);

  return (
    <div {...bind}>
      <ConsoleFrame label="conversion.report" badge="FULL-FUNNEL">
        <div key={replay}>
          <SignalEnrichment lit={true} />
        </div>
      </ConsoleFrame>
    </div>
  );
}

const FEATURE_BLOCKS = [
  {
    label: "CRM ARCHITECTURE",
    badge: "SCOPE · PIPELINE",
    headline: "A CRM that reflects how you actually sell.",
    copy: "Stage definitions and hygiene scoring built around your deal cycle, not a generic template.",
    render: () => <CrmBlock />,
  },
  {
    label: "PIPELINE AUTOMATION",
    badge: "SCOPE · TRIGGERS",
    headline: "Every stalled deal gets caught and escalated.",
    copy: "Follow-ups, task creation, deal-stage movement, and alerts run without anyone watching the board.",
    render: () => <AutomationBlock />,
  },
  {
    label: "DEAL VELOCITY TRACKING",
    badge: "SCOPE · SEQUENCE",
    headline: "See exactly where a deal moved, and why.",
    copy: "Which touch landed, which channel replied, and which rep closes fastest — tracked at the touch level.",
    render: () => <VelocityBlock />,
  },
  {
    label: "CONVERSION ANALYTICS",
    badge: "SCOPE · REPORTING",
    headline: "Full-funnel reporting, first touch to closed revenue.",
    copy: "Every signal that enriches a deal record feeds the same reporting layer the principal reads from.",
    render: () => <AnalyticsBlock />,
  },
];

export default function RevenueOperations() {
  return (
    <main className="relative w-full bg-black font-sans selection:bg-white/20 selection:text-white">
      <SEO
        title="Revenue Operations — Pipeline Management & Automation | SVNR Global"
        description="Full-funnel revenue operations for premium B2B: pipeline tracking, deal signal monitoring, CRM automation, and reporting built specifically for your deal cycle — not generic templates. For luxury, PE, real estate, and advisory firms."
        canonical="/services/revenue-operations"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Revenue Operations, Pipeline Management & Automation",
            "provider": { "@id": "https://svnrglobal.com/#organization" },
            "description": "Full-funnel revenue operations infrastructure for premium B2B operators. Pipeline stage tracking, deal signal monitoring, CRM automation, and reporting architecture built specifically for your deal cycle, no generic templates.",
            "areaServed": ["Global"],
            "serviceType": ["Revenue Operations", "Pipeline Management", "CRM Automation", "Sales Operations", "Deal Tracking"]
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is revenue operations for a premium B2B company?",
                "acceptedAnswer": { "@type": "Answer", "text": "Revenue operations is the infrastructure that tracks every deal relationship from first contact to signed client, monitoring stage progression, last contact dates, next action triggers, and conversion signals. It ensures no opportunity is lost to administrative gap, delayed follow-up, or pipeline blindness." }
              },
              {
                "@type": "Question",
                "name": "How does SVNR's revenue operations service differ from a standard CRM setup?",
                "acceptedAnswer": { "@type": "Answer", "text": "Standard CRM setups use off-the-shelf templates. SVNR builds revenue operations infrastructure specifically around your deal cycle, the stages, signals, and timeline relevant to your sector. A luxury real estate pipeline is structured differently from a PE deal sourcing pipeline, which is different from a wealth management client acquisition pipeline." }
              },
              {
                "@type": "Question",
                "name": "What tools does SVNR use for revenue operations?",
                "acceptedAnswer": { "@type": "Answer", "text": "SVNR builds on the infrastructure stack appropriate to the client's existing setup, typically HubSpot, Notion, Airtable, or custom dashboards built in Make or n8n. The specific tool is less important than the architecture: stage definitions, signal logic, and reporting that gives the principal complete pipeline visibility." }
              },
              {
                "@type": "Question",
                "name": "Can revenue operations be integrated with SVNR's outreach infrastructure?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes. Revenue operations is most powerful when connected to SVNR's outreach infrastructure, warm handoffs from the acquisition system feed directly into the pipeline tracking layer, and stage progression triggers automated follow-up sequences where appropriate." }
              }
            ]
          }
        ]}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Revenue Operations", url: "/services/revenue-operations" },
        ]}
      />

      {/* HERO */}
      <section className="relative z-10 px-6 md:px-12 pt-32 md:pt-44 pb-16 md:pb-24">
        <div className="max-w-[1200px] mx-auto">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: "Revenue Operations" }]} />

          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="text-[10px] tracking-[0.28em] text-white/40 mb-6"
                style={MONO}
              >
                SYSTEM 02 · REVENUE OPERATIONS
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.08, ease: EASE }}>
                <OpticalType className="text-4xl sm:text-5xl md:text-[64px] font-medium text-white leading-[1.05] tracking-tight">
                  The infrastructure that turns conversations into closed revenue.
                </OpticalType>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.22 }}
                className="text-white/45 text-base md:text-lg mt-6 max-w-xl leading-relaxed"
              >
                Full-funnel pipeline tracking, CRM automation, and reporting built for your deal cycle, not a generic template.
              </motion.p>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }} className="flex flex-col sm:flex-row gap-3 mt-9">
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

          {/* STAT ROW */}
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

      {/* WHICH INDUSTRIES */}
      <section className="relative z-10 px-6 md:px-12 py-16 md:py-20 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, ease: EASE }}>
            <p className="text-[10px] tracking-[0.28em] text-white/40 mb-6" style={MONO}>
              WHICH INDUSTRIES BENEFIT MOST
            </p>
            <div className="flex flex-wrap gap-3">
              {sectors.map((s) => (
                <span key={s} className="px-4 py-2 rounded-full text-xs uppercase tracking-widest text-white/60 border border-white/[0.10]">
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
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, ease: EASE }} className="mb-16">
            <p className="text-[10px] tracking-[0.28em] text-white/40 mb-4" style={MONO}>
              WHAT THE SYSTEM DELIVERS
            </p>
            <h2 className="text-2xl md:text-4xl font-medium text-white tracking-tight">Four layers, one pipeline.</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FEATURE_BLOCKS.map((b, i) => (
              <motion.div
                key={b.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: EASE }}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.015] hover:border-white/[0.14] hover:bg-white/[0.028] transition-colors duration-300 p-7"
              >
                <div className="flex items-center justify-between gap-3 mb-5">
                  <span className="text-[10px] tracking-[0.28em] text-white/40" style={MONO}>
                    {b.label}
                  </span>
                  <span className="text-[9px] tracking-widest text-white/30 border border-white/[0.08] rounded px-1.5 py-0.5 shrink-0" style={MONO}>
                    {b.badge}
                  </span>
                </div>
                <h3 className="text-white text-lg font-medium tracking-tight mb-2">{b.headline}</h3>
                <p className="text-white/45 text-sm leading-relaxed mb-6">{b.copy}</p>
                {b.render()}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW THE SYSTEM DEPLOYS */}
      <section className="relative z-10 px-6 md:px-12 py-20 md:py-28 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, ease: EASE }} className="mb-10">
            <p className="text-[10px] tracking-[0.28em] text-white/40 mb-5" style={MONO}>
              HOW THE SYSTEM DEPLOYS
            </p>
            <h2 className="text-2xl md:text-4xl font-medium text-white tracking-tight">From audit to always-on tracking.</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {STEPS.map((s, i) => (
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
                <p className="text-[10px] tracking-[0.28em] text-white/40 mt-5" style={MONO}>
                  {s.when.toUpperCase()}
                </p>
                <p className="text-white text-sm font-medium leading-snug mt-2">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED SYSTEMS */}
      <section className="relative z-10 px-6 md:px-12 py-20 md:py-28 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, ease: EASE }} className="mb-16">
            <p className="text-[10px] tracking-[0.28em] text-white/40 mb-4" style={MONO}>
              RELATED SYSTEMS
            </p>
            <h2 className="text-2xl md:text-4xl font-medium text-white tracking-tight">Pipeline tracking connects upstream.</h2>
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
                  <h3 className="text-white text-lg font-medium tracking-tight mb-2 pr-8">{s.label}</h3>
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
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.55, ease: EASE }} className="max-w-2xl">
            <p className="text-[10px] tracking-[0.28em] text-white/40 mb-5" style={MONO}>
              NEXT
            </p>
            <h2 className="text-2xl md:text-4xl font-medium text-white tracking-tight leading-tight mb-5">
              Turn conversations into revenue.
            </h2>
            <p className="text-white/45 text-base leading-relaxed mb-9">
              Infrastructure that tracks, follows up, and closes, without manual effort.
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

      {/* RELATED INSIGHTS */}
      <section className="relative z-10 px-6 md:px-12 py-20 md:py-24 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, ease: EASE }} className="mb-8">
            <p className="text-[10px] tracking-[0.28em] text-white/40 mb-5" style={MONO}>
              RELATED INSIGHTS
            </p>
            <h2 className="text-2xl md:text-4xl font-medium text-white tracking-tight">From the SVNR blog</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {RELATED.map((r, i) => (
              <motion.div key={r.to} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: i * 0.05, ease: EASE }}>
                <Link to={r.to} className="group relative flex items-center justify-between gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.015] hover:border-white/[0.14] hover:bg-white/[0.028] transition-colors duration-300 p-6">
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

      <FaqSection faqs={REVOPS_FAQS} title="Common questions about Revenue Operations" />

      <div className="relative z-10 px-6 pb-10 max-w-[1200px] mx-auto">
        <Footer />
      </div>
    </main>
  );
}
