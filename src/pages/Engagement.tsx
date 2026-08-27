import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import Breadcrumbs from "../components/Breadcrumbs";
import FaqSection from "../components/FaqSection";
import OpticalType from "../components/OpticalType";
import Counter from "../components/Counter";
import { useIdleMischief } from "../hooks/useIdleMischief";

const MONO = { fontFamily: "var(--font-mono)" };
const EASE = [0.16, 1, 0.3, 1] as const;

// Every figure below is lifted verbatim from this page's own engagement copy.
const HERO_STATS = [
  { v: "2–3 weeks", l: "Build and calibration" },
  { v: "30–60 days", l: "First qualified conversations" },
  { v: "48 hours", l: "Tailored proposal after a call" },
];

const STAGES = [
  {
    n: "01",
    category: "Research & Intelligence",
    items: [
      "Ideal client profile development",
      "Market mapping and universe sizing",
      "Prospect enrichment across 50+ data signals",
      "Decision-maker identification and validation",
    ],
  },
  {
    n: "02",
    category: "Outreach & Execution",
    items: [
      "Custom outreach sequences, email and LinkedIn",
      "Personalisation at the individual level (not merge-tag personalisation)",
      "Multi-touch follow-up logic",
      "Response handling and conversation management",
    ],
  },
  {
    n: "03",
    category: "Infrastructure & Automation",
    items: [
      "Custom AI agents (built and trained per client)",
      "Automated qualification and routing",
      "CRM integration and pipeline management",
      "AI receptionist (on Infrastructure and Full Stack tiers)",
    ],
  },
  {
    n: "04",
    category: "Reporting & Visibility",
    items: [
      "Live reporting dashboard (custom-built per client)",
      "Weekly performance review",
      "Pipeline health metrics and conversion tracking",
      "Sector-specific benchmarking",
    ],
  },
];

const TIERS = [
  {
    id: "foundation",
    name: "Foundation",
    tagline: "For operators building a pipeline from scratch, or entering a new market.",
    note: "Typically deployed within 2–3 weeks of engagement start.",
    includes: [
      "Ideal client profile definition and validation",
      "Market mapping, every qualifying company in your geography",
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
    note: "Best suited for operators with an existing sales function to receive warm leads.",
    includes: [
      "All Foundation deliverables",
      "Multi-market or multi-segment outreach, simultaneously active",
      "Custom AI agents per market or persona (built and trained to your sector)",
      "AI receptionist layer, qualifies and routes inbound responses 24/7",
      "CRM integration and automated lead routing",
      "Competitive intelligence briefings",
      "Monthly strategy session with full pipeline analysis",
    ],
  },
  {
    id: "fullstack",
    name: "Full Stack",
    tagline: "For operators who want the entire acquisition layer managed.",
    note: "Limited engagements available. We work with a small number of clients at this level at any one time.",
    includes: [
      "All Infrastructure deliverables",
      "Custom-designed visual dashboard (branded to your company)",
      "Intelligence research, deep dossiers on priority target accounts",
      "Channel and partnership development outreach",
      "Deal flow sourcing (for PE/family office clients)",
      "Revenue operations layer, pipeline forecasting and conversion tracking",
      "Dedicated point of contact with weekly briefings",
      "Quarterly infrastructure review and expansion planning",
    ],
  },
];

const faqs = [
  { q: "Do you publish fixed prices?", a: "No. Every SVNR engagement is scoped and priced around the specific client, the sector, the target geography, the complexity of the market, and the scope of infrastructure required. Publishing a flat rate would be dishonest: a luxury rug brand entering the UK trade market requires a fundamentally different build than a private equity firm sourcing proprietary deal flow across Europe." },
  { q: "How long before we see results?", a: "Most clients see first qualified conversations within 30–60 days of infrastructure deployment. The first 2–3 weeks are build and calibration. From week 4, outreach is live. The pipeline compounds over time, month three typically outperforms month one by a significant margin." },
  { q: "Is this a campaign or an ongoing retainer?", a: "Neither. It is infrastructure. We build systems that run continuously, not campaigns with an end date, and not a retainer for 'managed outreach.' The distinction matters: campaigns stop when the budget runs out. Infrastructure compounds as long as it operates." },
  { q: "How many clients do you work with at once?", a: "A small number. We do not scale by volume, we scale by depth of engagement per client. Every client's infrastructure is built specifically for them. Taking on too many clients simultaneously would compromise that. We are selective about who we engage with." },
  { q: "What makes each engagement bespoke?", a: "The AI agents, the outreach sequences, the reporting dashboards, and the data infrastructure are all built from scratch for each client. Nothing is recycled across clients. Your sequences are not running on a shared template. Your dashboard is not a generic CRM view. Every deliverable is custom-designed." },
  { q: "Do we need to be involved day-to-day?", a: "No. Once the infrastructure is deployed and calibrated, it runs without your daily input. You receive a weekly briefing and a live dashboard. When a prospect reaches a warm handoff point, we surface them to you with full context. Your time is spent closing, not prospecting." },
];

function Bullet({ children }: { children: string }) {
  return (
    <li className="flex items-start gap-2.5">
      <span className="w-1 h-1 rounded-full bg-white/25 mt-[7px] shrink-0" />
      <span className="text-[13px] text-white/40 leading-relaxed">{children}</span>
    </li>
  );
}

// THE STRIPE MOMENT — one hairline wires the four delivery stages together and
// draws itself left to right as the bento arrives, each node lighting as the
// line reaches it. Delete it and the reader loses the single thing the four
// cards cannot say on their own: that they run in order, every build.
// Geometry: the rail is a 4-column grid matching the card grid, so nodes sit
// dead-centre over their cards; the line spans centre to centre, which is
// 12.5% of the width less three-eighths of the 16px gutter.
function SequenceRail() {
  return (
    // The container owns the viewport trigger and hands "draw" down as a
    // variant. A horizontal path has a zero-height box, so whileInView placed
    // on the path itself would never fire.
    <motion.div
      aria-hidden
      initial="rest"
      whileInView="draw"
      viewport={{ once: true, margin: "-60px" }}
      className="relative hidden lg:grid grid-cols-4 gap-4 h-9 mb-1"
    >
      <svg
        className="absolute h-[2px] overflow-visible"
        // An <svg> is a replaced element: left+right alone would collapse it to
        // its intrinsic viewBox width, so the span is set explicitly.
        style={{ top: 3, left: "calc(12.5% - 6px)", width: "calc(75% + 12px)" }}
        viewBox="0 0 100 2"
        preserveAspectRatio="none"
        fill="none"
      >
        <motion.path
          d="M 0 1 H 100"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth={1}
          vectorEffect="non-scaling-stroke"
          variants={{ rest: { pathLength: 0 }, draw: { pathLength: 1 } }}
          transition={{ duration: 1.15, ease: EASE }}
        />
      </svg>

      {STAGES.map((s, i) => (
        <div key={s.n} className="flex flex-col items-center justify-self-center">
          <motion.span
            className="w-2 h-2 rounded-full bg-white/70"
            variants={{ rest: { scale: 0, opacity: 0 }, draw: { scale: 1, opacity: 1 } }}
            transition={{ duration: 0.34, delay: 0.12 + i * 0.26, ease: EASE }}
          />
          <motion.span
            className="w-px h-6 mt-1 origin-top bg-gradient-to-b from-white/[0.16] to-transparent"
            variants={{ rest: { scaleY: 0 }, draw: { scaleY: 1 } }}
            transition={{ duration: 0.3, delay: 0.2 + i * 0.26, ease: EASE }}
          />
        </div>
      ))}
    </motion.div>
  );
}

function Sequence() {
  // Remounting the rail restarts its draw. The key flips a beat after the
  // reader hovers the bento and leaves, so the sequence redraws unprompted once.
  const { mischief, bind } = useIdleMischief();

  return (
    <div {...bind}>
      <SequenceRail key={mischief ? "replay" : "first"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {STAGES.map((s, i) => (
          <motion.div
            key={s.category}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.05, ease: EASE }}
            className="rounded-2xl border border-white/[0.08] bg-white/[0.015] hover:border-white/[0.14] hover:bg-white/[0.028] transition-colors duration-300 p-6"
          >
            <span className="text-[10px] tracking-widest text-white/20 tabular-nums" style={MONO}>
              {s.n}
            </span>
            <p className="text-white text-sm font-medium leading-snug mt-4 mb-4">{s.category}</p>
            <ul className="space-y-2.5">
              {s.items.map((item) => (
                <Bullet key={item}>{item}</Bullet>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function Engagement() {
  return (
    <main className="relative w-full bg-black font-sans selection:bg-white/20 selection:text-white">
      <SEO
        title="How We Work — Bespoke Engagement Model | SVNR Global"
        description="Every SVNR engagement is custom-built for your sector, market, and client profile. Understand what's included, how it works, and what makes each engagement unique."
        canonical="/engagement"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "How We Work", url: "/engagement" },
        ]}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "SVNR Global Engagement Model",
            "url": "https://svnrglobal.com/engagement",
            "description": "SVNR Global's bespoke engagement model, custom AI agents, outreach infrastructure, and reporting dashboards built specifically for each client.",
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((f) => ({
              "@type": "Question",
              "name": f.q,
              "acceptedAnswer": { "@type": "Answer", "text": f.a },
            })),
          },
        ]}
      />

      {/* HERO */}
      <section className="relative z-10 px-6 md:px-12 pt-32 md:pt-44 pb-16 md:pb-24">
        <div className="max-w-[1200px] mx-auto">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "How We Work" }]} />
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="text-[10px] tracking-[0.28em] text-white/40 mb-6"
            style={MONO}
          >
            HOW WE WORK
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
          >
            <OpticalType className="text-4xl sm:text-5xl md:text-[64px] font-medium text-white leading-[1.05] tracking-tight max-w-3xl">
              Every client is different. Every engagement reflects that.
            </OpticalType>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="text-white/45 text-base md:text-lg mt-6 max-w-xl leading-relaxed"
          >
            No shared templates. No recycled agents. No generic dashboards. Your infrastructure is built for your
            market, from the first data point to the final dashboard.
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
              Book a consultation <ArrowRight size={14} />
            </Link>
            <Link
              to="/compare"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/[0.14] text-white/80 text-sm hover:border-white/30 hover:text-white transition-colors"
            >
              See how we compare <ArrowRight size={14} />
            </Link>
          </motion.div>

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

      {/* THE SEQUENCE */}
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
              EVERY ENGAGEMENT
            </p>
            <h2 className="text-2xl md:text-4xl font-medium text-white tracking-tight max-w-2xl">
              Four stages, in order, on every build.
            </h2>
          </motion.div>
          <Sequence />
        </div>
      </section>

      {/* WHY BESPOKE */}
      <section className="relative z-10 px-6 md:px-12 py-20 md:py-28 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <p className="text-[10px] tracking-[0.28em] text-white/40 mb-5" style={MONO}>
              WHY BESPOKE
            </p>
            <h2 className="text-2xl md:text-4xl font-medium text-white tracking-tight leading-tight">
              The same system does not work for every market.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.08, ease: EASE }}
            className="space-y-4"
          >
            <p className="text-white/45 text-sm leading-relaxed">
              A luxury rug brand targeting trade buyers in Germany requires different data sources, different outreach
              tone, different timing, and different qualification criteria than a private equity firm sourcing deal
              flow from family-owned businesses in France.
            </p>
            <p className="text-white/45 text-sm leading-relaxed">
              Generic outreach agencies solve this problem by ignoring it. They run the same playbook for every client
              and call the variance "personalisation."
            </p>
            <p className="text-white/45 text-sm leading-relaxed">
              We solve it by building from scratch every time. The AI agents are trained on your sector. The sequences
              are written for your voice. The dashboards are designed for your reporting needs. Nothing is borrowed
              from another client's build.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ENGAGEMENT SCOPE */}
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
              ENGAGEMENT SCOPE
            </p>
            <h2 className="text-2xl md:text-4xl font-medium text-white tracking-tight">
              Three levels of infrastructure.
            </h2>
            <p className="text-white/45 text-base leading-relaxed mt-5 max-w-xl">
              Each level is priced on your market, sector complexity, and scope. Nothing is packaged.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {TIERS.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: EASE }}
                className="flex flex-col rounded-2xl border border-white/[0.08] bg-white/[0.015] hover:border-white/[0.14] hover:bg-white/[0.028] transition-colors duration-300 p-7"
              >
                <span className="text-[10px] tracking-widest text-white/20 tabular-nums" style={MONO}>
                  0{i + 1}
                </span>
                <h3 className="text-white text-lg md:text-xl font-medium tracking-tight mt-5">{t.name}</h3>
                <p className="text-white/40 text-sm leading-snug mt-1.5">{t.tagline}</p>
                <p className="text-[10px] tracking-[0.28em] text-white/40 mt-7 mb-4" style={MONO}>
                  INCLUDES · {t.includes.length}
                </p>
                <ul className="space-y-2.5">
                  {t.includes.map((item) => (
                    <Bullet key={item}>{item}</Bullet>
                  ))}
                </ul>
                <p className="text-[11px] text-white/25 leading-relaxed mt-auto pt-7">{t.note}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white/40 text-sm mt-8"
          >
            Pricing is scoped per engagement.{" "}
            <Link to="/contact" className="text-white/75 hover:text-white underline underline-offset-4 transition-colors">
              Book a call
            </Link>{" "}
            and we'll send a tailored proposal within 48 hours.
          </motion.p>
        </div>
      </section>

      <FaqSection faqs={faqs} title="Before you book" />

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
              Ready to build something built for you?
            </h2>
            <p className="text-white/45 text-base leading-relaxed mb-9">
              Book a call and we'll scope an engagement specifically for your market. No templates, no packages, no
              pressure.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors"
              >
                Book a consultation <ArrowRight size={14} />
              </Link>
              <Link
                to="/compare"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/[0.14] text-white/80 text-sm hover:border-white/30 hover:text-white transition-colors"
              >
                See how we compare <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="relative z-10 px-6 md:px-12 pb-10 max-w-[1200px] mx-auto">
        <Footer />
      </div>
    </main>
  );
}
