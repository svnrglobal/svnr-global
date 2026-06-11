import { motion, AnimatePresence, useInView } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Search, Mail, Workflow, BarChart3 } from "lucide-react";
import { useRef, useState } from "react";
import { VIDEOS } from "../data/content";
import VideoHero from "../components/VideoHero";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import Breadcrumbs from "../components/Breadcrumbs";
import FaqSection from "../components/FaqSection";

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
      "Custom outreach sequences, email and LinkedIn",
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
    a: "No. Every SVNR engagement is scoped and priced around the specific client, the sector, the target geography, the complexity of the market, and the scope of infrastructure required. Publishing a flat rate would be dishonest: a luxury rug brand entering the UK trade market requires a fundamentally different build than a private equity firm sourcing proprietary deal flow across Europe.",
  },
  {
    q: "How long before we see results?",
    a: "Most clients see first qualified conversations within 30–60 days of infrastructure deployment. The first 2–3 weeks are build and calibration. From week 4, outreach is live. The pipeline compounds over time, month three typically outperforms month one by a significant margin.",
  },
  {
    q: "Is this a campaign or an ongoing retainer?",
    a: "Neither. It is infrastructure. We build systems that run continuously, not campaigns with an end date, and not a retainer for 'managed outreach.' The distinction matters: campaigns stop when the budget runs out. Infrastructure compounds as long as it operates.",
  },
  {
    q: "How many clients do you work with at once?",
    a: "A small number. We do not scale by volume, we scale by depth of engagement per client. Every client's infrastructure is built specifically for them. Taking on too many clients simultaneously would compromise that. We are selective about who we engage with.",
  },
  {
    q: "What makes each engagement bespoke?",
    a: "The AI agents, the outreach sequences, the reporting dashboards, and the data infrastructure are all built from scratch for each client. Nothing is recycled across clients. Your sequences are not running on a shared template. Your dashboard is not a generic CRM view. Every deliverable is custom-designed.",
  },
  {
    q: "Do we need to be involved day-to-day?",
    a: "No. Once the infrastructure is deployed and calibrated, it runs without your daily input. You receive a weekly briefing and a live dashboard. When a prospect reaches a warm handoff point, we surface them to you with full context. Your time is spent closing, not prospecting.",
  },
];

const INFRA_TIERS = [
  {
    id: "foundation",
    name: "Foundation",
    tagline: "For operators building a pipeline from scratch.",
    description: "A full end-to-end outreach infrastructure built around your sector and ideal client profile. Designed for operators who have not yet systematised acquisition, or who are entering a new market.",
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
    description: "The complete SVNR infrastructure stack. Custom agents, custom dashboards, custom visual design, intelligence research, channel partnership development, and revenue operations, all running as a unified system.",
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
      "Intelligence research, deep dossiers on priority target accounts",
      "Channel and partnership development outreach",
      "Deal flow sourcing (for PE/family office clients)",
      "Revenue operations layer, pipeline forecasting and conversion tracking",
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

// Handle centre position for each of the three tiers (0..1 across the track).
const TIER_POS = [1 / 6, 0.5, 5 / 6];

/**
 * Dot-matrix engagement slider — inspired by the "Faster / Smarter" effort
 * control. Drag (or use arrow keys) to move between Foundation and Full Stack.
 * The dotted track fills with a lilac→white gradient toward the handle.
 */
function DotMatrixSlider({
  tiers,
  active,
  onChange,
}: {
  tiers: typeof INFRA_TIERS;
  active: number;
  onChange: (i: number) => void;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [drag, setDrag] = useState<number | null>(null);
  const tier = tiers[active];
  const fill = drag ?? TIER_POS[active];

  const COLS = 46;
  const ROWS = 4;

  const fracFromX = (clientX: number) => {
    const el = trackRef.current;
    if (!el) return 0;
    const rect = el.getBoundingClientRect();
    return Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
  };
  const nearestTier = (f: number) => {
    let best = 0;
    let bd = Infinity;
    TIER_POS.forEach((p, i) => {
      const d = Math.abs(p - f);
      if (d < bd) {
        bd = d;
        best = i;
      }
    });
    return best;
  };

  const onDown = (e: React.PointerEvent) => {
    (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
    setDrag(fracFromX(e.clientX));
  };
  const onMove = (e: React.PointerEvent) => {
    if (drag === null) return;
    setDrag(fracFromX(e.clientX));
  };
  const onUp = () => {
    if (drag === null) return;
    onChange(nearestTier(drag));
    setDrag(null);
  };
  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === "ArrowUp") {
      e.preventDefault();
      onChange(Math.min(2, active + 1));
    } else if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
      e.preventDefault();
      onChange(Math.max(0, active - 1));
    }
  };

  // Top tier (Full Stack) turns the whole track into a living, twinkling pixel
  // matrix. Lower tiers keep the clean gradient-to-handle fill. While dragging,
  // preview the top-tier state as soon as the pointer is nearest it.
  const previewActive = drag !== null ? nearestTier(drag) : active;
  const isTop = previewActive === tiers.length - 1;

  const SPACING = Math.max(4, Math.round(COLS / 6));
  const dots = [];
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const colFrac = c / (COLS - 1);
      if (isTop) {
        const baseAlpha = 0.3 + 0.6 * colFrac; // dim left → bright right
        const h = r * COLS + c;
        const dur = 1.3 + ((h * 7) % 11) / 10; // 1.3s..2.3s
        const delay = ((h * 13) % 21) / 10; // 0s..2s
        dots.push(
          <span
            key={`${r}-${c}`}
            className="matrix-px"
            style={{
              background: `rgba(180,150,255,${baseAlpha.toFixed(2)})`,
              borderRadius: 1.5,
              animation: `matrixTwinkle ${dur}s ease-in-out ${delay}s infinite`,
            }}
          />
        );
      } else {
        // Foundation / Infrastructure: calm neutral fill. Purple lives only at Full Stack.
        let bg = "transparent";
        if (colFrac <= fill + 0.0001) {
          const t = colFrac / Math.max(fill, 0.0001);
          bg = `rgba(255,255,255,${(0.14 + 0.4 * t).toFixed(2)})`;
        } else if (c === COLS - 1) {
          bg = "rgba(180,150,255,0.85)"; // hint of the Full Stack matrix at the far end
        } else if (c % SPACING === 0) {
          bg = "rgba(255,255,255,0.12)";
        }
        dots.push(<span key={`${r}-${c}`} style={{ background: bg, borderRadius: 1.5 }} />);
      }
    }
  }

  return (
    <div
      className="mb-8 rounded-3xl p-5 sm:p-6 select-none"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="flex items-center justify-between mb-1">
        <span className="text-white/85 text-sm font-medium">
          Engagement depth{" "}
          <span
            className="font-normal transition-colors duration-300"
            style={{ color: isTop ? "#b49bff" : "rgba(255,255,255,0.45)" }}
          >
            · {tier.name}
          </span>
        </span>
        <span className="text-white/30 text-xs">drag to compare</span>
      </div>
      <div className="flex items-center justify-between mb-3">
        <span className="text-white/40 text-xs">Leaner</span>
        <span className="text-white/40 text-xs">Full stack</span>
      </div>

      <div
        ref={trackRef}
        role="slider"
        tabIndex={0}
        aria-valuemin={1}
        aria-valuemax={3}
        aria-valuenow={active + 1}
        aria-label="Engagement depth"
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onKeyDown={onKey}
        className="relative cursor-pointer rounded-2xl p-2.5 outline-none focus-visible:ring-1 focus-visible:ring-white/30"
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <div
          className="grid gap-[3px]"
          style={{ gridTemplateColumns: `repeat(${COLS}, 1fr)`, gridAutoRows: "5px" }}
        >
          {dots}
        </div>

        {/* shimmer sheen over the filled region */}
        <div
          aria-hidden
          className="absolute top-0 bottom-0 left-0 pointer-events-none rounded-2xl overflow-hidden"
          style={{ width: `${fill * 100}%` }}
        >
          <motion.div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.16), transparent)",
              backgroundSize: "45% 100%",
              backgroundRepeat: "no-repeat",
            }}
            animate={{ backgroundPositionX: ["-45%", "145%"] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* handle */}
        <motion.div
          className="absolute top-1/2 pointer-events-none"
          initial={false}
          animate={{ left: `calc(${fill * 100}% - 6px)`, y: "-50%" }}
          transition={
            drag === null
              ? { type: "spring", bounce: 0.2, duration: 0.5 }
              : { duration: 0 }
          }
        >
          <div
            className="w-[12px] h-[26px] rounded-full bg-white"
            style={{
              boxShadow:
                "0 2px 12px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.3)",
            }}
          />
        </motion.div>
      </div>

      {/* Tier cards — tap to switch; each says who it is for and what it adds */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-3">
        {tiers.map((t, i) => {
          const on = active === i;
          const top = i === tiers.length - 1;
          const scope =
            i === 0
              ? `${t.includes.length} core deliverables`
              : `Everything in ${tiers[i - 1].name}, plus ${t.includes.length - 1} more`;
          return (
            <button
              key={t.id}
              onClick={() => onChange(i)}
              className="rounded-2xl px-3.5 py-3 text-left transition-all duration-300"
              style={{
                background: on
                  ? top
                    ? "rgba(180,150,255,0.10)"
                    : "rgba(255,255,255,0.06)"
                  : "rgba(255,255,255,0.02)",
                border: `1px solid ${
                  on
                    ? top
                      ? "rgba(180,150,255,0.45)"
                      : "rgba(255,255,255,0.22)"
                    : "rgba(255,255,255,0.07)"
                }`,
              }}
            >
              <span
                className="block text-[12px] sm:text-[13px] font-medium"
                style={{ color: on ? "#fff" : "rgba(255,255,255,0.55)" }}
              >
                {t.name}
              </span>
              <span
                className="block text-[10.5px] mt-1 leading-snug"
                style={{ color: on ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.3)" }}
              >
                {t.tagline}
              </span>
              <span
                className="block text-[9.5px] mt-1.5 uppercase tracking-wider"
                style={{
                  color: on
                    ? top
                      ? "#b49bff"
                      : "rgba(255,255,255,0.4)"
                    : "rgba(255,255,255,0.22)",
                }}
              >
                {scope}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function DynamicInfrastructure() {
  const [active, setActive] = useState(1); // default to the middle (Infrastructure) tier
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

        {/* Dot-matrix engagement-depth slider (reference-inspired) */}
        <DotMatrixSlider tiers={INFRA_TIERS} active={active} onChange={setActive} />

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
            {/* Left, capability bars */}
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

            {/* Right, includes + description */}
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
      <VideoHero src={VIDEOS.engagement}>
        <div className="max-w-4xl mx-auto px-6 text-center pt-20 sm:pt-32 pb-14 sm:pb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }}
            className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-6"
          >
            How We Work
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.3 }}
            className="text-4xl sm:text-5xl md:text-6xl font-medium text-white leading-tight tracking-tight mb-6"
          >
            Every client is different.<br />
            <span className="shimmer-text">Every engagement reflects that.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.6 }}
            className="text-white/50 text-lg max-w-2xl mx-auto"
          >
            No shared templates. No recycled agents. No generic dashboards.
            Your infrastructure is built specifically for your market, from the first data point to the final dashboard.
          </motion.p>
        </div>
      </VideoHero>

      {/* PHILOSOPHY */}
      <section className="relative z-10 bg-[#0A0A0B] py-20 px-6 border-t border-white/8">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "How We Work" }]} />
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start"
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

          {/* Flow strip: the four delivery stages in sequence */}
          <div className="hidden sm:flex items-center justify-center gap-3 flex-wrap mb-10">
            {[
              { icon: Search, label: "Research & Intelligence" },
              { icon: Mail, label: "Outreach & Execution" },
              { icon: Workflow, label: "Infrastructure & Automation" },
              { icon: BarChart3, label: "Reporting & Visibility" },
            ].map((stage, i, arr) => (
              <motion.div
                key={stage.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-3"
              >
                <span className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2">
                  <stage.icon size={14} className="text-white/50" />
                  <span className="text-[11px] text-white/60 whitespace-nowrap">{stage.label}</span>
                </span>
                {i < arr.length - 1 && <ArrowRight size={12} className="text-white/25" />}
              </motion.div>
            ))}
          </div>
          <div className="grid sm:hidden grid-cols-2 gap-2 mb-10">
            {[
              { icon: Search, label: "Research & Intelligence" },
              { icon: Mail, label: "Outreach & Execution" },
              { icon: Workflow, label: "Infrastructure & Automation" },
              { icon: BarChart3, label: "Reporting & Visibility" },
            ].map((stage) => (
              <span key={stage.label} className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 min-w-0">
                <stage.icon size={13} className="text-white/50 shrink-0" />
                <span className="text-[10px] text-white/60 truncate">{stage.label}</span>
              </span>
            ))}
          </div>

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
              { label: "Custom AI agents", desc: "Built and trained per client, never shared or recycled across engagements." },
              { label: "Custom dashboards", desc: "Designed to your brand and reporting needs. Not a generic CRM view." },
              { label: "Custom visual design", desc: "Every deliverable, from sequence templates to client-facing assets, is designed specifically for you." },
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
      <FaqSection faqs={faqs} title="Before you book" />

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
