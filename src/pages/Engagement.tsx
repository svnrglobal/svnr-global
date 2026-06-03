import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
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
      <VideoHero src={VIDEOS.main}>
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

      {/* TIERS */}
      <section className="relative z-10 bg-[#0A0A0B] py-20 px-6 border-t border-white/8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">Engagement scope</p>
            <h2 className="text-3xl sm:text-4xl font-medium text-white tracking-tight mb-4">Three levels of infrastructure</h2>
            <p className="text-white/40 text-sm max-w-xl mx-auto">
              Each level is priced based on your market, sector complexity, and scope. Book a call to receive a tailored proposal.
            </p>
          </motion.div>

          <div className="space-y-6">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="liquid-glass rounded-2xl p-8 sm:p-10"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-6 mb-8">
                  <div className={`w-10 h-10 rounded-xl shrink-0 bg-gradient-to-br ${tier.accent}`} />
                  <div>
                    <h3 className="text-xl font-medium text-white mb-1">{tier.name}</h3>
                    <p className="text-white/40 text-sm italic mb-3">{tier.tagline}</p>
                    <p className="text-white/60 text-[15px] leading-relaxed max-w-2xl">{tier.description}</p>
                  </div>
                </div>

                <div className="border-t border-white/8 pt-6">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-4">Includes</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3">
                    {tier.includes.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <div className="w-1 h-1 rounded-full bg-white/30 mt-2 shrink-0" />
                        <span className="text-sm text-white/55 leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-[11px] text-white/25 italic mt-6">{tier.note}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mt-8 liquid-glass rounded-2xl px-8 py-6 text-center"
          >
            <p className="text-white/50 text-sm">
              Pricing is scoped per engagement. <span className="text-white/70">Book a call</span> and we'll send a tailored proposal within 48 hours.
            </p>
          </motion.div>
        </div>
      </section>

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
