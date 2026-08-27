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
import { ProspectConsole, WorkflowGraph, SERVICE_REPLICA } from "../../components/console/replicas";
import { SelfResolvingAlert, AgeingTimestamp, LogTail } from "../../components/console/primitives";
import { useIdleMischief } from "../../hooks/useIdleMischief";

const MONO = { fontFamily: "var(--font-mono)" };
const EASE = [0.16, 1, 0.3, 1] as const;

const HERO_STATS = [
  { v: "52%", l: "Open rate" },
  { v: "21%", l: "Positive reply rate" },
  { v: "0.4%", l: "Unsubscribe rate" },
];

const MESSAGE_LOG = [
  { t: "01", status: "researched", text: "Prospect background, role, and recent activity reviewed" },
  { t: "02", status: "drafted", text: "Opening line built around a specific, verifiable observation" },
  { t: "03", status: "checked", text: "Generic phrasing and template language stripped out" },
  { t: "04", status: "queued", text: "Message queued to send at the recipient's local morning" },
];

const services = [
  { slug: "client-acquisition", label: "Client Acquisition", desc: "Systematic identification of the accounts and decision-makers worth reaching in your market." },
  { slug: "intelligence-research", label: "Intelligence & Research", desc: "Deep prospect research and signal monitoring, delivered as intelligence, not data." },
  { slug: "revenue-operations", label: "Revenue Operations", desc: "Pipeline tracked end-to-end, lead to close, every stage measured and managed." },
  { slug: "sector-workflows", label: "Sector Workflows", desc: "Outreach and enquiry handling automated to your sector's specific buying process." },
];

const sectors = ["Luxury Rugs", "B2B Luxury Brands", "Premium Real Estate", "Wealth Management", "Private Equity", "Professional Services"];

const RELATED = [
  { to: "/blog/cold-email-agency-luxury-brands", label: "Cold Email for Luxury Brands" },
  { to: "/blog/outbound-lead-generation-luxury-retail", label: "Outbound for Luxury Retail" },
  { to: "/blog/how-to-get-b2b-clients-luxury-brand", label: "B2B Clients for Luxury Brands" },
];

const BRAND_OUTREACH_FAQS = [
  { q: "What makes personalised brand outreach different from cold email?", a: "Cold email sends templated messages at volume. Brand outreach means every message is researched and written for the specific recipient, referencing their business, their sector, and the specific reason the contact is relevant. SVNR's reply rates average 18–24%, against a 2–5% industry average for templated cold email." },
  { q: "How does SVNR personalise outreach at scale for premium brands?", a: "SVNR combines deep sector research with AI-assisted message architecture — each prospect is individually researched across 50+ data signals, and each message is built around specific observations about that prospect's business, portfolio, or buying history." },
  { q: "What channels does SVNR brand outreach cover?", a: "Email is the primary channel, followed by LinkedIn for professional relationships and WhatsApp where culturally appropriate, particularly in European and Middle Eastern markets for HNW and trade relationships." },
  { q: "Does brand outreach work for luxury brands targeting trade buyers?", a: "Yes, and it is the most effective acquisition channel for luxury trade relationships. A message that demonstrates specific knowledge of an interior designer's project portfolio earns a response at a completely different rate than a catalogue introduction. SVNR has achieved 78% enquiry lifts for luxury brands within six weeks of deployment." },
];

// THE STRIPE MOMENT — this service's own replica, blown up to hero scale
// inside a console frame. Plays on load, replays once after a reader hovers
// and moves on.
function SequenceArtefact() {
  const { mischief, bind } = useIdleMischief();
  return (
    <motion.div
      {...bind}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
    >
      <ConsoleFrame label="sequence-board.svnr" badge="LIVE" className="min-h-[300px] md:min-h-[380px]">
        <div key={mischief ? "replay" : "initial"}>{SERVICE_REPLICA["brand-outreach"]?.(true)}</div>
      </ConsoleFrame>
    </motion.div>
  );
}

// Feature block 2 — message architecture, shown as the build log each
// message actually passes through before it sends.
function MessageArchitectureBlock() {
  const { lit, mischief, bind } = useIdleMischief();
  const active = lit || mischief;
  return (
    <div {...bind}>
      <ConsoleFrame label="message-build.svnr" badge="PER MESSAGE">
        <LogTail lit={active} rows={MESSAGE_LOG} />
      </ConsoleFrame>
    </div>
  );
}

// Feature block 4 — send and optimise, a stale-sequence alert that resolves
// itself once the system reacts, next to a live send timestamp.
function SendOptimiseBlock() {
  const { lit, mischief, bind } = useIdleMischief();
  const active = lit || mischief;
  return (
    <div {...bind} className="flex flex-col gap-3">
      <ConsoleFrame label="send-monitor.svnr" badge="WEEKLY">
        <SelfResolvingAlert
          lit={active}
          problem="Sequence 2 reply rate below threshold"
          resolution="Subject line rewritten, reply rate recovered"
          meta="4d to resolve"
        />
        <div className="mt-3 text-[10px] text-white/30 flex items-center justify-between" style={MONO}>
          <span>LAST SEND</span>
          <AgeingTimestamp lit={active} startMinutes={12} />
        </div>
      </ConsoleFrame>
    </div>
  );
}

export default function BrandOutreach() {
  return (
    <main className="relative w-full bg-black font-sans selection:bg-white/20 selection:text-white">
      <SEO
        title="Brand Outreach — Hyper-Personalised B2B Messaging | SVNR Global"
        description="AI-personalised brand outreach for luxury and premium B2B. Every message researched for the specific recipient. 18–24% average reply rates. For trade buyers, designers, and decision-makers who ignore templates."
        canonical="/services/brand-outreach"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Brand Outreach, Hyper-Personalised B2B Messaging",
            "provider": { "@id": "https://svnrglobal.com/#organization" },
            "description": "Individually researched, hyper-personalised B2B outreach sequences for premium brands. Every message is written for the specific recipient, no templates, no mass sends. Outreach that earns a response because it reads like it came from a peer who did their homework.",
            "areaServed": ["Global", "Europe", "Middle East", "Asia"],
            "serviceType": ["Brand Outreach", "Personalised B2B Messaging", "Premium Outreach Sequences", "B2B Email Strategy"]
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What makes personalised brand outreach different from cold email?",
                "acceptedAnswer": { "@type": "Answer", "text": "Cold email sends templated messages at volume. Brand outreach means every message is researched and written for the specific recipient, referencing their business, their sector, and the specific reason the contact is relevant. SVNR's reply rates average 18–24%, against a 2–5% industry average for templated cold email." }
              },
              {
                "@type": "Question",
                "name": "How does SVNR personalise outreach at scale for premium brands?",
                "acceptedAnswer": { "@type": "Answer", "text": "SVNR combines deep sector research with AI-assisted message architecture, each prospect is individually researched across 50+ data signals, and each message is built around specific observations about that prospect's business, portfolio, or buying history. The result is personalised outreach delivered at a scale no human team could match manually." }
              },
              {
                "@type": "Question",
                "name": "What channels does SVNR brand outreach cover?",
                "acceptedAnswer": { "@type": "Answer", "text": "Email is the primary channel, followed by LinkedIn for professional relationships and WhatsApp where culturally appropriate, particularly in European and Middle Eastern markets for HNW and trade relationships. Channel selection is determined by the sector and buyer profile." }
              },
              {
                "@type": "Question",
                "name": "Does brand outreach work for luxury brands targeting trade buyers?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes, and it is the most effective acquisition channel for luxury trade relationships. A message that demonstrates specific knowledge of an interior designer's project portfolio earns a response at a completely different rate than a catalogue introduction. SVNR has achieved 78% enquiry lifts for luxury brands within six weeks of deployment." }
              }
            ]
          }
        ]}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Brand Outreach", url: "/services/brand-outreach" },
        ]}
      />

      {/* HERO */}
      <section className="relative z-10 px-6 md:px-12 pt-32 md:pt-44 pb-16 md:pb-24">
        <div className="max-w-[1200px] mx-auto">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: "Brand Outreach" }]} />
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="text-[10px] tracking-[0.28em] text-white/40 mb-6"
                style={MONO}
              >
                SYSTEM 06 · BRAND OUTREACH
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.08, ease: EASE }}>
                <OpticalType className="text-4xl sm:text-5xl md:text-[64px] font-medium text-white leading-[1.05] tracking-tight">
                  Outreach that reads like a peer.
                </OpticalType>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.22 }}
                className="text-white/45 text-base md:text-lg mt-6 max-w-xl leading-relaxed"
              >
                Message sequences written and deployed at the level your market expects. No templates. No mass sends.
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

            <SequenceArtefact />
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
              52% open rate. 21% positive reply rate. 0.4% unsubscribe rate. The numbers a premium brand earns with
              outreach that respects its audience, rather than templated messaging sent at volume.
            </p>
          </motion.div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="relative z-10 px-6 md:px-12 py-20 md:py-28 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, ease: EASE }}>
            <p className="text-[10px] tracking-[0.28em] text-white/40 mb-5" style={MONO}>
              THE PROBLEM
            </p>
            <h2 className="text-2xl md:text-4xl font-medium text-white tracking-tight leading-tight mb-6">
              Generic outreach damages premium brands.
            </h2>
            <p className="text-white/45 text-sm leading-relaxed mb-4">
              A template is a template. The interior designer, the fund manager, and the family office principal who
              receives it knows immediately, and the message your brand sends with that template is that your brand
              is generic.
            </p>
            <p className="text-white/45 text-sm leading-relaxed">
              We build outreach that operates at the level of the people you are trying to reach, specific, researched,
              and written as if you wrote it yourself.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: 0.08, ease: EASE }}>
            <ConsoleFrame label="reply-quality.svnr" badge="BY SEQUENCE">
              <WorkflowGraph lit={true} />
            </ConsoleFrame>
          </motion.div>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section className="relative z-10 px-6 md:px-12 py-20 md:py-28 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, ease: EASE }} className="mb-10">
            <p className="text-[10px] tracking-[0.28em] text-white/40 mb-5" style={MONO}>
              WHAT WE BUILD
            </p>
            <h2 className="text-2xl md:text-4xl font-medium text-white tracking-tight">Every element of the outreach system.</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Block 1 — ICP Definition */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              <p className="text-[10px] tracking-[0.28em] text-white/40 mb-3" style={MONO}>
                01 · TARGETING
              </p>
              <h3 className="text-white text-lg font-medium mb-2">ICP definition</h3>
              <p className="text-white/45 text-sm leading-relaxed mb-5">
                We define the exact profile of the person worth reaching, title, sector, company size, intent
                signals, before the first message is written.
              </p>
              <ConsoleFrame label="icp-mapping.svnr" badge="ACTIVE">
                <ProspectConsole lit={true} />
              </ConsoleFrame>
            </motion.div>

            {/* Block 2 — Message Architecture */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.05, ease: EASE }}
            >
              <p className="text-[10px] tracking-[0.28em] text-white/40 mb-3" style={MONO}>
                02 · WRITING
              </p>
              <h3 className="text-white text-lg font-medium mb-2">Message architecture</h3>
              <p className="text-white/45 text-sm leading-relaxed mb-5">
                Every sequence built from the recipient's perspective. No templates, no spray-and-pray. Each message
                written as if you wrote it yourself.
              </p>
              <MessageArchitectureBlock />
            </motion.div>

            {/* Block 3 — Sequence Build */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
            >
              <p className="text-[10px] tracking-[0.28em] text-white/40 mb-3" style={MONO}>
                03 · DEPLOYMENT
              </p>
              <h3 className="text-white text-lg font-medium mb-2">Sequence build</h3>
              <p className="text-white/45 text-sm leading-relaxed mb-5">
                Multi-touch, multi-channel sequences deployed across email, LinkedIn, and direct channels, timed to
                each target's engagement pattern.
              </p>
              <ConsoleFrame label="sequence-board.svnr" badge="4-TOUCH">
                {SERVICE_REPLICA["brand-outreach"]?.(true)}
              </ConsoleFrame>
            </motion.div>

            {/* Block 4 — Send and Optimise */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.15, ease: EASE }}
            >
              <p className="text-[10px] tracking-[0.28em] text-white/40 mb-3" style={MONO}>
                04 · ITERATION
              </p>
              <h3 className="text-white text-lg font-medium mb-2">Send and optimise</h3>
              <p className="text-white/45 text-sm leading-relaxed mb-5">
                Continuous testing of subject lines, message frames, and send timing. Every cycle of outreach
                improves on the last.
              </p>
              <SendOptimiseBlock />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SUITABLE INDUSTRIES */}
      <section className="relative z-10 px-6 md:px-12 py-20 md:py-28 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, ease: EASE }} className="mb-6">
            <p className="text-[10px] tracking-[0.28em] text-white/40" style={MONO}>
              SUITABLE INDUSTRIES
            </p>
          </motion.div>
          <div className="flex flex-wrap gap-3">
            {sectors.map((s, i) => (
              <motion.span
                key={s}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.04, ease: EASE }}
                className="px-4 py-2 rounded-full border border-white/[0.08] text-sm text-white/60 hover:border-white/[0.2] hover:text-white transition-colors"
              >
                {s}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICABLE SYSTEMS */}
      <section className="relative z-10 px-6 md:px-12 py-20 md:py-28 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, ease: EASE }} className="mb-10">
            <p className="text-[10px] tracking-[0.28em] text-white/40 mb-5" style={MONO}>
              APPLICABLE SYSTEMS
            </p>
            <h2 className="text-2xl md:text-4xl font-medium text-white tracking-tight">Outreach that connects to the rest of the pipeline.</h2>
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
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.55, ease: EASE }} className="max-w-2xl">
            <p className="text-[10px] tracking-[0.28em] text-white/40 mb-5" style={MONO}>
              NEXT
            </p>
            <h2 className="text-2xl md:text-4xl font-medium text-white tracking-tight leading-tight mb-5">
              Outreach at the standard your brand deserves.
            </h2>
            <p className="text-white/45 text-base leading-relaxed mb-9">
              We write and deploy outreach that opens doors with the right people in your market.
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

      <FaqSection faqs={BRAND_OUTREACH_FAQS} title="Common questions about Brand Outreach" />

      {/* RELATED INSIGHTS */}
      <section className="relative z-10 px-6 md:px-12 py-20 md:py-24 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, ease: EASE }} className="mb-8">
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
