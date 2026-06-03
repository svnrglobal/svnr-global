import { motion, AnimatePresence, useInView } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { useRef, useState } from "react";
import { VIDEOS } from "../data/content";
import VideoHero from "../components/VideoHero";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

const tiers = [
  {
    name: "Foundation",
    tagline: "For operators building a pipeline from scratch.",
    description:
      "A full end-to-end outreach infrastructure built around your sector and ideal client profile. Designed for operators who have not yet systematised acquisition — or who are entering a new market.",
    includes: [
      "Ideal client profile definition and validation",
      "Market mapping — identify every qualifying company in your target geography",
      "Prospect database build and AI enrichment (50+ data signals)",
      "Custom outreach sequences (email + LinkedIn) — written for your voice and sector",
      "Multi-touch follow-up logic and response handling",
      "Custom reporting dashboard with live pipeline visibility",
      "Weekly performance review and optimisation",
    ],
    note: "Typically deployed within 2–3 weeks of engagement start.",
    accent: "from-[#667eea] to-[#764ba2]",
  },
  {
    name: "Infrastructure",
    tagline: "For operators scaling into multiple markets or segments.",
    description:
      "Everything in Foundation, plus expanded market coverage, sector-specific AI agents, and advanced automation layers. Designed for operators who need acquisition running across more than one market simultaneously.",
    includes: [
      "All Foundation deliverables",
      "Multi-market or multi-segment outreach — simultaneously active",
      "Custom AI agents per market or persona (built and trained to your sector)",
      "AI receptionist layer — qualifies and routes inbound responses 24/7",
      "CRM integration and automated lead routing",
      "Competitive intelligence briefings — what your target accounts are tracking",
      "Monthly strategy session with full pipeline analysis",
    ],
    note: "Best suited for operators with an existing sales function to receive warm leads.",
    accent: "from-[#f093fb] to-[#f5576c]",
  },
  {
    name: "Full Stack",
    tagline: "For operators who want the entire acquisition layer managed.",
    description:
      "The complete SVNR infrastructure stack. Custom agents, custom dashboards, custom visual design, intelligence research, channel partnership development, and revenue operations — all running as a unified system.",
    includes: [
      "All Infrastructure deliverables",
      "Custom-designed visual dashboard (branded to your company)",
      "Intelligence research — deep dossiers on priority target accounts",
      "Channel and partnership development outreach",
      "Deal flow sourcing (for PE/family office clients)",
      "Revenue operations layer — pipeline forecasting and conversion tracking",
      "Dedicated point of contact with weekly briefings",
      "Quarterly infrastructure review and expansion planning",
    ],
    note: "Limited engagements available. We work with a small number of clients at this level at any one time.",
    accent: "from-[#4facfe] to-[#00f2fe]",
  },
];

const included = [
  {
    category: "Research & Intelligence",
    items: [
      "Ideal client profile development",
      "Market mapping and universe sizing",
      "Prospect enrichment across 50+ data signals",
      "Decision-maker identification and validation",
    ],
  },
  {
    category: "Outreach & Execution",
    items: [
      "Custom outreach sequences — email and LinkedIn",
      "Personalisation at the individual level (not merge-tag personalisation)",
      "Multi-touch follow-up logic",
      "Response handling and conversation management",
    ],
  },
  {
    category: "Infrastructure & Automation",
    items: [
      "Custom AI agents (built and trained per client)",
      "Automated qualification and routing",
      "CRM integration and pipeline management",
      "AI receptionist (on Infrastructure and Full Stack tiers)",
    ],
  },
  {
    category: "Reporting & Visibility",
    items: [
      "Live reporting dashboard (custom-built per client)",
      "Weekly performance review",
      "Pipeline health metrics and conversion tracking",
      "Sector-specific benchmarking",
    ],
  },
];

const faqs = [
  {
    q: "Do you publish fixed prices?",
    a: "No. Every SVNR engagement is scoped and priced around the specific client — the sector, the target geography, the complexity of the market, and the scope of infrastructure required. Publishing a flat rate would be dishonest: a luxury rug brand entering the UK trade market requires a fundamentally different build than a private equity firm sourcing proprietary deal flow across Europe.",
  },
  {
    q: "How long before we see results?",
    a: "Most clients see first qualified conversations within 30–60 days of infrastructure deployment. The first 2–3 weeks are build and calibration. From week 4, outreach is live. The pipeline compounds over time — month three typically outperforms month one by a significant margin.",
  },
  {
    q: "Is this a campaign or an ongoing retainer?",
    a: "Neither. It is infrastructure. We build systems that run continuously — not campaigns with an end date, and not a retainer for 'managed outreach.' The distinction matters: campaigns stop when the budget runs out. Infrastructure compounds as long as it operates.",
  },
  {
    q: "How many clients do you work with at once?",
    a: "A small number. We do not scale by volume — we scale by depth of engagement per client. Every client's infrastructure is built specifically for them. Taking on too many clients simultaneously would compromise that. We are selective about who we engage with.",
  },
  {
    q: "What makes each engagement bespoke?",
    a: "The AI agents, the outreach sequences, the reporting dashboards, and the data infrastructure are all built from scratch for each client. Nothing is recycled across clients. Your sequences are not running on a shared template. Your dashboard is not a generic CRM view. Every deliverable is custom-designed.",
  },
  {
    q: "Do we need to be involved day-to-day?",
    a: "No. Once the infrastructure is deployed and calibrated, it runs without your daily input. You receive a weekly briefing and a live dashboard. When a prospect reaches a warm handoff point, we surface them to you with full context. Your time is spent closing — not prospecting.",
  },
];

const INFRA_TIERS = [
  {
    id: "foundation",
    name: "Foundation",
    tagline: "For operators building a pipeline from scratch.",
    description: "A full end-to-end outreach infrastructure built around your sector and ideal client profile. Designed for operators who have not yet systematised acquisition — or who are entering a new market.",
    note: "Typically deployed within 2–3 weeks of engagement start.",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "#667eea",
    capabilities: [
      { label: "ICP Definition & Validation", value: 95 },
      { label: "Market Mapping", value: 90 },
      { label: "Prospect Enrichment (50+ signals)", value: 85 },
      { label: "Custom Outreach Sequences", value: 95 },
      { label: "Multi-Touch Follow-Up Logic", value: 88 },
      { label: "Live Pipeline Dashboard", value: 80 },
      { label: "Weekly Performance Review", value: 100 },
    ],
    includes: [
      "Ideal client profile definition and validation",
      "Market mapping — every qualifying company in your geography",
      "Prospect database build and AI enrichment (50+ data signals)",
      "Custom outreach sequences (email + LinkedIn)",
      "Multi-touch follow-up logic and response handling",
      "Custom reporting dashboard with live pipeline visibility",
      "Weekly performance review and optimisation",
    ],
  },
  {
    id: "infrastructure",
    name: "Infrastructure",
    tagline: "For operators scaling into multiple markets or segments.",
    description: "Everything in Foundation, plus expanded market coverage, sector-specific AI agents, and advanced automation layers. Designed for operators who need acquisition running across more than one market simultaneously.",
    note: "Best suited for operators with an existing sales function to receive warm leads.",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    color: "#f093fb",
    capabilities: [
      { label: "All Foundation Capabilities", value: 100 },
      { label: "Multi-Market Outreach (Simultaneous)", value: 95 },
      { label: "Custom AI Agents per Market", value: 90 },
      { label: "AI Receptionist Layer (24/7)", value: 95 },
      { label: "CRM Integration & Lead Routing", value: 88 },
      { label: "Competitive Intelligence Briefings", value: 85 },
      { label: "Monthly Strategy Session", value: 100 },
    ],
    includes: [
      "All Foundation deliverables",
      "Multi-market or multi-segment outreach — simultaneously active",
      "Custom AI agents per market or persona (built and trained to your sector)",
      "AI receptionist layer — qualifies and routes inbound responses 24/7",
      "CRM integration and automated lead routing",
      "Competitive intelligence briefings",
      "Monthly strategy session with full pipeline analysis",
    ],
  },
  {
    id: "fullstack",
    name: "Full Stack",
    tagline: "For operators who want the entire acquisition layer managed.",
    description: "The complete SVNR infrastructure stack. Custom agents, custom dashboards, custom visual design, intelligence research, channel partnership development, and revenue operations — all running as a unified system.",
    note: "Limited engagements available. We work with a small number of clients at this level at any one time.",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    color: "#4facfe",
    capabilities: [
      { label: "All Infrastructure Capabilities", value: 100 },
      { label: "Custom-Designed Visual Dashboard", value: 100 },
      { label: "Intelligence Research (Deep Dossiers)", value: 95 },
      { label: "Channel & Partnership Development", value: 90 },
      { label: "Deal Flow Sourcing (PE/Family Office)", value: 88 },
      { label: "Revenue Operations Layer", value: 95 },
      { label: "Dedicated Point of Contact", value: 100 },
    ],
    includes: [
      "All Infrastructure deliverables",
      "Custom-designed visual dashboard (branded to your company)",
      "Intelligence research — deep dossiers on priority target accounts",
      "Channel and partnership development outreach",
      "Deal flow sourcing (for PE/family office clients)",
      "Revenue operations layer — pipeline forecasting and conversion tracking",
      "Dedicated point of contact with weekly briefings",
      "Quarterly infrastructure review and expansion planning",
    ],
  },
];

function CapBar({ label, value, color, delay }: { label: string; value: number; color: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="mb-3">
      <div className="flex justify-between mb-1">
        <span className="text-white/55 text-xs">{label}</span>
        <span className="text-white/35 text-xs tabular-nums">{value}%</span>
      </div>
      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.07)" }}>
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}88)` }}
          initial={{ width: 0 }}
          animate={{ width: inView ? `${value}%` : 0 }}
          transition={{ duration: 1.1, delay: delay + 0.1, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

function DynamicInfrastructure() {
  const [active, setActive] = useState(0);
  const tier = INFRA_TIERS[active];

  return (
    <section className="relative z-10 bg-[#0A0A0B] py-20 px-6 border-t border-white/8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">Engagement scope</p>
          <h2 className="text-3xl sm:text-4xl font-medium text-white tracking-tight mb-3">Three levels of infrastructure</h2>
          <p className="text-white/40 text-sm max-w-xl mx-auto">
            Each level is priced based on your market, sector complexity, and scope. Book a call to receive a tailored proposal.
          </p>
        </motion.div>

        {/* Tab selector — styled like reference image */}
        <div className="flex items-center gap-0 mb-8 rounded-2xl overflow-hidden p-1" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
          {INFRA_TIERS.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActive(i)}
              className="relative flex-1 py-3 px-4 rounded-xl text-sm font-medium transition-all duration-300 text-center"
              style={{ color: active === i ? "#fff" : "rgba(255,255,255,0.35)" }}
            >
              {active === i && (
                <motion.div
                  layoutId="infra-tab"
                  className="absolute inset-0 rounded-xl"
                  style={{ background: t.gradient, opacity: 0.15 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                />
              )}
              <span className="relative z-10">{t.name}</span>
            </button>
          ))}
        </div>

        {/* Main panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {/* Left — capability bars */}
            <div className="p-6 md:p-8 rounded-3xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-white font-medium text-lg">{tier.name}</h3>
                  <p className="text-white/40 text-xs mt-0.5">{tier.tagline}</p>
                </div>
                <div className="w-8 h-8 rounded-full" style={{ background: tier.gradient }} />
              </div>

              <p className="text-[10px] uppercase tracking-[0.25em] text-white/25 mb-4">Capability Coverage</p>

              {tier.capabilities.map((cap, i) => (
                <CapBar
                  key={cap.label}
                  label={cap.label}
                  value={cap.value}
                  color={tier.color}
                  delay={i * 0.08}
                />
              ))}

              <p className="text-[10px] text-white/25 italic mt-5">{tier.note}</p>
            </div>

            {/* Right — includes + description */}
            <div className="flex flex-col gap-4">
              <div className="p-6 md:p-8 rounded-3xl flex-1" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <p className="text-white/55 text-sm leading-relaxed mb-6">{tier.description}</p>

                <p className="text-[10px] uppercase tracking-[0.25em] text-white/25 mb-4">Includes</p>
                <div className="space-y-2.5">
                  {tier.includes.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
                        style={{ background: tier.gradient }}>
                        <Check size={9} className="text-white" />
                      </div>
                      <span className="text-white/55 text-sm leading-relaxed">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Tier navigation dots */}
              <div className="flex items-center justify-center gap-2">
                {INFRA_TIERS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className="w-2 h-2 rounded-full transition-all duration-300"
                    style={{ background: active === i ? tier.color : "rgba(255,255,255,0.2)", transform: active === i ? "scale(1.4)" : "scale(1)" }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-6 rounded-2xl px-8 py-5 text-center" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="text-white/45 text-sm">
            Pricing is scoped per engagement. <Link to="/contact" className="text-white/80 hover:text-white transition-colors underline underline-offset-2">Book a call</Link> and we'll send a tailored proposal within 48 hours.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default function Engagement() {
  return (
    <main className="relative w-full bg-[#0A0A0B] font-sans selection:bg-white/20 selection:text-white">
      <SEO
        title="How We Work — Bespoke Engagement Model | SVNR Global"
        description="Every SVNR engagement is custom-built for your sector, market, and client profile. Understand what's included, how it works, and what makes each engagement unique."
        canonical="/engagement"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "How We Work", url: "/engagement" },
        ]}
        schema={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "SVNR Global Engagement Model",
          "url": "https://svnrglobal.com/engagement",
          "description": "SVNR Global's bespoke engagement model — custom AI agents, outreach infrastructure, and reporting dashboards built specifically for each client.",
        }}
      />

      {/* HERO */}
      <VideoHero src={VIDEOS.engagement}>
        <div className="max-w-4xl mx-auto px-6 text-center pt-20 sm:pt-32 pb-14 sm:pb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-6"
          >
            How We Work
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl font-medium text-white leading-tight tracking-tight mb-6"
          >
            Every client is different.<br />
            <span className="shimmer-text">Every engagement reflects that.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
            className="text-white/50 text-lg max-w-2xl mx-auto"
          >
            No shared templates. No recycled agents. No generic dashboards.
            Your infrastructure is built specifically for your market — from the first data point to the final dashboard.
          </motion.p>
        </div>
      </VideoHero>

      {/* PHILOSOPHY */}
      <section className="relative z-10 bg-[#0A0A0B] py-20 px-6 border-t border-white/8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
          >
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">Why bespoke</p>
              <h2 className="text-3xl sm:text-4xl font-medium text-white tracking-tight mb-6">
                The same system does not work for every market.
              </h2>
            </div>
            <div className="space-y-5">
              <p className="text-white/60 leading-relaxed text-[15px]">
                A luxury rug brand targeting trade buyers in Germany requires different data sources, different outreach tone, different timing, and different qualification criteria than a private equity firm sourcing deal flow from family-owned businesses in France.
              </p>
              <p className="text-white/60 leading-relaxed text-[15px]">
                Generic outreach agencies solve this problem by ignoring it. They run the same playbook for every client and call the variance "personalisation."
              </p>
              <p className="text-white/60 leading-relaxed text-[15px]">
                We solve it by building from scratch every time. The AI agents are trained on your sector. The sequences are written for your voice. The dashboards are designed for your reporting needs. Nothing is borrowed from another client's build.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="relative z-10 bg-[#0A0A0B] py-20 px-6 border-t border-white/8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">Every engagement</p>
            <h2 className="text-3xl sm:text-4xl font-medium text-white tracking-tight">What's included</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {included.map((block, i) => (
              <motion.div
                key={block.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="liquid-glass rounded-2xl p-7"
              >
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-4">{block.category}</p>
                <ul className="space-y-3">
                  {block.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-1 h-1 rounded-full bg-white/30 mt-2 shrink-0" />
                      <span className="text-sm text-white/60 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DYNAMIC INFRASTRUCTURE LAYOUT */}
      <DynamicInfrastructure />

      {/* BESPOKE CALLOUT */}
      <section className="relative z-10 bg-[#0A0A0B] py-16 px-6 border-t border-white/8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {[
              { label: "Custom AI agents", desc: "Built and trained per client — never shared or recycled across engagements." },
              { label: "Custom dashboards", desc: "Designed to your brand and reporting needs. Not a generic CRM view." },
              { label: "Custom visual design", desc: "Every deliverable — from sequence templates to client-facing assets — is designed specifically for you." },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="liquid-glass rounded-2xl px-6 py-6"
              >
                <p className="text-white font-medium text-sm mb-2">{item.label}</p>
                <p className="text-white/45 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 bg-[#0A0A0B] py-20 px-6 border-t border-white/8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">Common questions</p>
            <h2 className="text-3xl font-medium text-white tracking-tight">Before you book</h2>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="border-b border-white/8 pb-6"
              >
                <h3 className="text-white font-medium mb-3">{faq.q}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 bg-[#0A0A0B] py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight">
              Ready to build something<br />
              <span className="shimmer-text">built for you?</span>
            </h2>
            <p className="text-white/50 mb-10 max-w-xl mx-auto">
              Book a call and we'll scope an engagement specifically for your market. No templates, no packages, no pressure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-all"
              >
                Book a Consultation <ArrowRight size={14} />
              </Link>
              <Link
                to="/compare"
                className="inline-flex items-center gap-3 px-10 py-4 rounded-full border border-white/20 text-white text-sm hover:border-white/50 transition-all"
              >
                See How We Compare <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="relative z-10 px-6 pb-10 max-w-7xl mx-auto">
        <Footer />
      </div>
    </main>
  );
}
