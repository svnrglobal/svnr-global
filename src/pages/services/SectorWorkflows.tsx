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
import { useIdleMischief } from "../../hooks/useIdleMischief";
import ConsoleFrame from "../../components/console/ConsoleFrame";
import { WorkflowGraph, PipelineHealth, SignalEnrichment, InboundLog } from "../../components/console/replicas";
import { SelfResolvingAlert } from "../../components/console/primitives";

const MONO = { fontFamily: "var(--font-mono)" };
const EASE = [0.16, 1, 0.3, 1] as const;

const HERO_STATS = [
  { v: "70%", l: "Process time reduction" },
  { v: "0.2%", l: "Error rate" },
  { v: "3", l: "FTEs displaced" },
];

const STEPS = [
  { n: "01", title: "Process audit", desc: "Every manual workflow documented. Time spent, error rate, and handoff points mapped before we write a single automation." },
  { n: "02", title: "Flow design", desc: "Custom automation designed around your vertical's actual operating logic. No off-the-shelf templates repurposed." },
  { n: "03", title: "Integration build", desc: "Tools connected, data flowing, triggers tested. Built to run without daily maintenance from your team." },
  { n: "04", title: "Live deployment", desc: "Go-live with your team trained, documentation delivered, and monitoring in place. Support through the first 30 days." },
];

const SECTORS = ["Luxury Rugs", "Real Estate", "Private Equity", "Wealth Management", "High-Ticket E-commerce", "Maritime"];

const RELATED = [
  { to: "/blog/b2b-outreach-agency-india", label: "B2B Outreach Agency India" },
  { to: "/blog/professional-services-client-acquisition", label: "Professional Services Acquisition" },
];

const SYSTEMS = [
  { slug: "client-acquisition", label: "Client Acquisition", desc: "Systematic identification of qualified buyers and trade accounts in your target geographies." },
  { slug: "revenue-operations", label: "Revenue Operations", desc: "Pipeline tracked end-to-end from lead to order, order to repeat. Every stage measured and managed." },
  { slug: "ai-receptionist", label: "AI Receptionist", desc: "Inbound calls and chats answered, qualified, and routed without a human on the line." },
  { slug: "intelligence-research", label: "Intelligence Research", desc: "Signal monitoring and enrichment that keeps every workflow fed with current account data." },
];

const SECTOR_WORKFLOWS_FAQS = [
  { q: "What is sector-specific workflow automation?", a: "Sector-specific workflow automation is AI-driven process automation built around the actual operational requirements of a defined industry, not generic automation tools applied generically. A luxury brand's wholesale enquiry workflow is different from a real estate firm's deal workflow, which is different from a wealth manager's client onboarding workflow. Each is built to match." },
  { q: "What workflows does SVNR typically automate for luxury and B2B companies?", a: "Common automations include: wholesale enquiry handling and quote generation, trade partner onboarding sequences, inbound lead qualification and routing, deal stage tracking and follow-up triggers, report generation, and CRM data enrichment. Each is built specifically for the client's operational context." },
  { q: "What tools does SVNR use to build sector workflows?", a: "SVNR builds on Make, n8n, Airtable, Notion, HubSpot, and custom AI agents depending on the workflow requirements. The tools are selected for the task, not applied as a one-size-fits-all stack." },
  { q: "How long does it take to deploy a custom sector workflow?", a: "Simple workflow automations can be designed, built, and deployed within 1–2 weeks. Complex multi-system integrations typically take 3–4 weeks. All workflows are delivered with documentation and a testing phase before full deployment." },
];

// THE STRIPE MOMENT — the workflow graph blown up to hero scale inside an
// instrument panel. Draws itself on load, replays once after the reader
// hovers and moves on.
function WorkflowArtefact() {
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
          WORKFLOW ENGINE
        </span>
        <span className="text-[10px] tracking-[0.2em] text-white/25" style={MONO}>
          LIVE
        </span>
      </div>
      <div key={replay} className="absolute inset-0 origin-top-left scale-[1.4] md:scale-[1.7] flex items-center justify-center">
        <WorkflowGraph lit={true} />
      </div>
      <p className="absolute z-10 bottom-7 left-7 right-7 text-[10px] text-white/30" style={MONO}>
        Manual work in → automated operations out
      </p>
    </motion.div>
  );
}

export default function SectorWorkflows() {
  return (
    <main className="relative w-full bg-black font-sans selection:bg-white/20 selection:text-white">
      <SEO
        title="Sector Workflows — Industry-Specific Automation | SVNR Global"
        description="Sector-specific AI workflow automation for luxury brands, real estate, wealth management, maritime, and professional services. Built for how your industry actually operates — not generic templates. Deployed in 1–4 weeks."
        canonical="/services/sector-workflows"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Sector Workflows, Industry-Specific Automation",
            "provider": { "@id": "https://svnrglobal.com/#organization" },
            "description": "Custom AI workflow automation built for specific industry verticals, luxury brands, wealth management, real estate, maritime, and professional services. Not generic automation. Systems built around how your business actually operates.",
            "areaServed": ["Global"],
            "serviceType": ["Sector Workflow Automation", "Industry-Specific AI Automation", "Business Process Automation", "Operational AI Systems"]
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is sector-specific workflow automation?",
                "acceptedAnswer": { "@type": "Answer", "text": "Sector-specific workflow automation is AI-driven process automation built around the actual operational requirements of a defined industry, not generic automation tools applied generically. A luxury brand's wholesale enquiry workflow is different from a real estate firm's deal workflow, which is different from a wealth manager's client onboarding workflow. Each is built to match." }
              },
              {
                "@type": "Question",
                "name": "What workflows does SVNR typically automate for luxury and B2B companies?",
                "acceptedAnswer": { "@type": "Answer", "text": "Common automations include: wholesale enquiry handling and quote generation, trade partner onboarding sequences, inbound lead qualification and routing, deal stage tracking and follow-up triggers, report generation, and CRM data enrichment. Each is built specifically for the client's operational context." }
              },
              {
                "@type": "Question",
                "name": "What tools does SVNR use to build sector workflows?",
                "acceptedAnswer": { "@type": "Answer", "text": "SVNR builds on Make, n8n, Airtable, Notion, HubSpot, and custom AI agents depending on the workflow requirements. The tools are selected for the task, not applied as a one-size-fits-all stack." }
              },
              {
                "@type": "Question",
                "name": "How long does it take to deploy a custom sector workflow?",
                "acceptedAnswer": { "@type": "Answer", "text": "Simple workflow automations can be designed, built, and deployed within 1–2 weeks. Complex multi-system integrations typically take 3–4 weeks. All workflows are delivered with documentation and a testing phase before full deployment." }
              }
            ]
          }
        ]}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Sector Workflows", url: "/services/sector-workflows" },
        ]}
      />

      {/* HERO */}
      <section className="relative z-10 px-6 md:px-12 pt-32 md:pt-44 pb-16 md:pb-24">
        <div className="max-w-[1200px] mx-auto">
          <Breadcrumbs
            items={[{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: "Sector Workflows" }]}
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
                SYSTEM 04 · SECTOR WORKFLOWS
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
              >
                <OpticalType className="text-4xl sm:text-5xl md:text-[64px] font-medium text-white leading-[1.05] tracking-tight">
                  Operations built for your vertical.
                </OpticalType>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.22 }}
                className="text-white/45 text-base md:text-lg mt-6 max-w-xl leading-relaxed"
              >
                Automation that understands how your industry actually runs, not generic templates applied to a specialist business.
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

            <WorkflowArtefact />
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
              70% process time reduction. 0.2% error rate. Three FTEs' worth of manual work returned to the team for
              higher-value activity, built specific to each client's vertical.
            </p>
          </motion.div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="relative z-10 px-6 md:px-12 py-20 md:py-28 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <p className="text-[10px] tracking-[0.28em] text-white/40 mb-5" style={MONO}>
              THE PROBLEM
            </p>
            <h2 className="text-2xl md:text-4xl font-medium text-white tracking-tight leading-tight mb-6">
              Generic automation breaks in specialist businesses.
            </h2>
            <p className="text-white/45 text-sm leading-relaxed mb-4">
              A rug house quotes differently than a PE firm. A wealth boutique onboards clients differently than a
              maritime operator. Generic workflow tools give you the building blocks. We build the actual structure,
              specific to your vertical, your operating logic, and how your clients expect to be handled.
            </p>
            <p className="text-white/45 text-sm leading-relaxed">
              Every sector has its own operating rhythm. We build the workflow infrastructure specific to how your
              business actually runs.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.08, ease: EASE }}
          >
            <ConsoleFrame label="pipeline_health.sys" badge="LIVE">
              <PipelineHealth lit={true} />
            </ConsoleFrame>
          </motion.div>
        </div>
      </section>

      {/* FEATURE BLOCKS */}
      <FeatureBlock
        area="PROCESS AUDIT"
        badge="STEP 01"
        headline="Every manual step mapped before we automate anything."
        body="Time spent, error rate, and handoff points documented across your current operations, quoting, follow-up, onboarding, reporting, so we know exactly what to build first."
        frameLabel="signal_enrichment.sys"
        frameBadge="AUDIT"
      >
        <SignalEnrichment lit={true} />
      </FeatureBlock>

      <FeatureBlock
        area="FLOW DESIGN"
        badge="STEP 02"
        headline="Custom automation flows built for how your sector operates."
        body="No generic templates. No mis-fit processes. Each flow is designed around your vertical's actual operating logic, from a rug house's quoting cadence to a PE firm's deal workflow."
        frameLabel="workflow_graph.sys"
        frameBadge="DESIGN"
        reverse
      >
        <WorkflowGraph lit={true} />
      </FeatureBlock>

      <FeatureBlock
        area="INTEGRATION BUILD"
        badge="STEP 03"
        headline="Your existing tools wired into flows that run without you."
        body="CRM, email, and communication channels connected so the workflow runs on its own, and any stalled step surfaces itself before it becomes a missed handoff."
        frameLabel="stage_watch.sys"
        frameBadge="MONITOR"
      >
        <SelfResolvingAlert
          lit={true}
          problem="Trade onboarding stalled at step 3"
          resolution="Reassigned and cleared"
          meta="4m to resolve"
        />
      </FeatureBlock>

      <FeatureBlock
        area="LIVE DEPLOYMENT"
        badge="STEP 04"
        headline="Flows deployed, tested, and monitored from day one."
        body="Inbound routes tested against real traffic before handover, so your team trains on a system that already works, not a demo."
        frameLabel="inbound_log.sys"
        frameBadge="DEPLOY"
        reverse
      >
        <InboundLog lit={true} />
      </FeatureBlock>

      {/* DEPLOYMENT PATH */}
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
              DEPLOYMENT
            </p>
            <h2 className="text-2xl md:text-4xl font-medium text-white tracking-tight">
              From audit to live in under six weeks.
            </h2>
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
                <p className="text-white text-sm font-medium leading-snug mt-5">{s.title}</p>
                <p className="text-white/40 text-[13px] leading-relaxed mt-2">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SUITABLE INDUSTRIES */}
      <section className="relative z-10 px-6 md:px-12 py-16 md:py-20 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-[10px] tracking-[0.28em] text-white/40 mb-6" style={MONO}>
            SUITABLE INDUSTRIES
          </p>
          <div className="flex flex-wrap gap-3">
            {SECTORS.map((s) => (
              <span
                key={s}
                className="px-4 py-2 rounded-full border border-white/[0.08] text-sm text-white/50 hover:border-white/[0.14] hover:text-white/80 transition-colors"
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
              APPLICABLE SYSTEMS
            </p>
            <h2 className="text-2xl md:text-4xl font-medium text-white tracking-tight">
              Runs alongside the rest of the stack.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SYSTEMS.map((s, i) => (
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
              Ready to reclaim the time your team spends on process?
            </h2>
            <p className="text-white/45 text-base leading-relaxed mb-9">
              We audit your current workflows, design the automation, and deploy it, specific to your vertical.
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

      <FaqSection faqs={SECTOR_WORKFLOWS_FAQS} title="Common questions about Sector Workflows" />

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

      <Footer />
    </main>
  );
}

// One feature block, Vercel's five-part shape: product-area label / scope
// badge / feature headline / one sentence / a ConsoleFrame demonstrating that
// specific capability. Replays once via useIdleMischief after the reader
// hovers and moves on.
function FeatureBlock({
  area,
  badge,
  headline,
  body,
  frameLabel,
  frameBadge,
  reverse,
  children,
}: {
  area: string;
  badge: string;
  headline: string;
  body: string;
  frameLabel: string;
  frameBadge: string;
  reverse?: boolean;
  children: React.ReactNode;
}) {
  const { mischief, bind } = useIdleMischief();
  const [replay, setReplay] = useState(0);

  useEffect(() => {
    if (mischief) setReplay((n) => n + 1);
  }, [mischief]);

  return (
    <section className="relative z-10 px-6 md:px-12 py-16 md:py-20 border-t border-white/[0.06]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: EASE }}
          className={reverse ? "md:order-2" : ""}
        >
          <p className="text-[10px] tracking-[0.28em] text-white/40 mb-5" style={MONO}>
            {area}
          </p>
          <span
            className="inline-block text-[9px] tracking-widest text-white/30 border border-white/[0.08] rounded px-1.5 py-0.5 mb-5"
            style={MONO}
          >
            {badge}
          </span>
          <h2 className="text-2xl md:text-4xl font-medium text-white tracking-tight leading-tight mb-5">
            {headline}
          </h2>
          <p className="text-white/45 text-sm leading-relaxed">{body}</p>
        </motion.div>
        <motion.div
          {...bind}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.08, ease: EASE }}
          className={reverse ? "md:order-1" : ""}
        >
          <ConsoleFrame label={frameLabel} badge={frameBadge}>
            <div key={replay}>{children}</div>
          </ConsoleFrame>
        </motion.div>
      </div>
    </section>
  );
}
