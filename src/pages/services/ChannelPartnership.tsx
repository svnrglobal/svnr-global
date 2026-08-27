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
import { PartnerMap, ProspectConsole } from "../../components/console/replicas";
import { SelfResolvingAlert, RedactedName, LogTail } from "../../components/console/primitives";
import { useIdleMischief } from "../../hooks/useIdleMischief";

const MONO = { fontFamily: "var(--font-mono)" } as const;
const EASE = [0.16, 1, 0.3, 1] as const;

const HERO_STATS = [
  { v: "25+", l: "Partner leads / month" },
  { v: "44%", l: "Activation rate" },
  { v: "60%", l: "Revenue from partners" },
];

const CAPABILITIES = [
  { label: "CHANNEL AUDIT", badge: "STEP 01", h: "Map the distribution you already have.", d: "Current architects, agents, and specifiers mapped against the gaps your product should be filling." },
  { label: "PARTNER ICP", badge: "STEP 02", h: "Define the exact partner profile.", d: "Project type, client profile, geography, and purchasing authority, before a single message goes out." },
  { label: "OUTREACH BUILD", badge: "STEP 03", h: "Reach the studios who match.", d: "Targeted, branded outreach to the specific studios, agencies, and specifiers who fit your ideal partner profile." },
  { label: "ACTIVATION", badge: "STEP 04", h: "Turn contacts into partners.", d: "Onboarding into active relationships, sample programmes, briefing packs, and the first project introductions." },
];

const MILESTONES = [
  { n: "01", when: "Week 0", label: "Distribution mapped, gaps defined" },
  { n: "02", when: "Week 2 to 3", label: "Partner ICP and qualification set" },
  { n: "03", when: "Day 30 to 60", label: "First confirmed partner relationship" },
  { n: "04", when: "Day 90", label: "10 to 20 partners active in market" },
];

const sectors = ["Luxury Rugs", "B2B Luxury Brands", "High-Ticket E-commerce", "Professional Services", "Maritime", "Real Estate"];

const RELATED = [
  { to: "/blog/luxury-rug-brand-distribution-strategy", label: "Luxury Brand Distribution" },
  { to: "/blog/outbound-lead-generation-luxury-retail", label: "Outbound for Luxury Retail" },
];

const CHANNEL_PARTNERSHIP_FAQS = [
  { q: "How do premium brands build trade channel partnerships systematically?", a: "By mapping the universe of qualifying trade partners — architects, interior designers, showrooms, distributors — in target geographies, researching each partner's project type and client base, then initiating direct contact with messages that demonstrate knowledge of their practice and explain precisely why the partnership makes sense." },
  { q: "How many trade partners can SVNR activate in a new market?", a: "A structured 90-day programme typically activates 10–20 qualified trade partner relationships in a new market. The first confirmed partner relationship typically arrives within 30 days of deployment." },
  { q: "What is the difference between a stockist and a channel partner?", a: "A stockist holds and sells inventory. A channel partner can include stockists, specifiers, showrooms, and interior designers who recommend or specify the product for client projects without holding inventory. SVNR builds programmes for both models depending on the brand's distribution strategy." },
  { q: "Does channel partnership development work for non-luxury product categories?", a: "Yes. SVNR deploys channel partnership programmes for any premium product with a defined trade buyer profile — architectural materials, home textiles, premium kitchen equipment, high-ticket wellness products, and others where the route to market runs through a specifier or trade buyer." },
];

// A feature block: label / badge / headline / sentence / ConsoleFrame demo.
// Replays once via useIdleMischief after the reader hovers and moves on.
function FeatureBlock({
  label,
  badge,
  h,
  d,
  frameLabel,
  frameBadge,
  i,
  children,
}: {
  label: string;
  badge: string;
  h: string;
  d: string;
  frameLabel: string;
  frameBadge?: string;
  i: number;
  children: (lit: boolean) => React.ReactNode;
}) {
  const { lit, mischief, bind } = useIdleMischief();
  const [replay, setReplay] = useState(0);

  useEffect(() => {
    if (mischief) setReplay((n) => n + 1);
  }, [mischief]);

  const active = lit || mischief;

  return (
    <motion.div
      {...bind}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: i * 0.05, ease: EASE }}
      className="rounded-2xl border border-white/[0.08] bg-white/[0.015] hover:border-white/[0.14] hover:bg-white/[0.028] transition-colors duration-300 p-7"
    >
      <div className="flex items-center justify-between gap-3 mb-5">
        <span className="text-[10px] tracking-[0.28em] text-white/40" style={MONO}>{label}</span>
        <span className="text-[9px] tracking-widest text-white/30 border border-white/[0.08] rounded px-1.5 py-0.5" style={MONO}>{badge}</span>
      </div>
      <h3 className="text-white text-lg md:text-xl font-medium tracking-tight mb-2">{h}</h3>
      <p className="text-white/45 text-sm leading-relaxed mb-6">{d}</p>
      <ConsoleFrame label={frameLabel} badge={frameBadge}>
        <div key={replay}>{children(active)}</div>
      </ConsoleFrame>
    </motion.div>
  );
}

// THE STRIPE MOMENT — hero-scale PartnerMap, lit on load.
function HeroReplica() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
    >
      <ConsoleFrame label="channel · partner-map" badge="LIVE">
        <div className="min-h-[220px] md:min-h-[280px] flex items-center justify-center py-6">
          <div className="w-full scale-110 md:scale-125">
            <PartnerMap lit={true} />
          </div>
        </div>
      </ConsoleFrame>
    </motion.div>
  );
}

export default function ChannelPartnership() {
  const outreachLog = [
    { t: "09:14", status: "SENT", text: "Studio brief sent — Zürich atelier" },
    { t: "09:41", status: "OPENED", text: "Message opened, no reply yet" },
    { t: "11:02", status: "REPLIED", text: "Interested — sample requested" },
    { t: "13:20", status: "QUALIFIED", text: "First project introduction scheduled" },
  ];

  return (
    <main className="relative w-full bg-black font-sans selection:bg-white/20 selection:text-white">
      <SEO
        title="Channel Partnership — Trade Distribution Activation | SVNR Global"
        description="Systematic trade channel and stockist acquisition for luxury and premium brands. We map, reach, and activate architects, designers, and retail buyers in your target markets. 10–20 partners per market in 90 days."
        canonical="/services/channel-partnership"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Channel Partnership, Trade Distribution Activation",
            "provider": { "@id": "https://svnrglobal.com/#organization" },
            "description": "Systematic trade partner acquisition: finding, reaching, and activating the right architects, interior designers, specifiers, showrooms, and distributors for premium products. Channel partnership infrastructure that converts cold contacts into active distribution relationships.",
            "areaServed": ["Global", "Europe", "Middle East", "Asia", "United Kingdom"],
            "serviceType": ["Channel Partnership Development", "Trade Distribution Activation", "Showroom Partner Acquisition", "Specifier Outreach"]
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How do premium brands build trade channel partnerships systematically?",
                "acceptedAnswer": { "@type": "Answer", "text": "By mapping the universe of qualifying trade partners, architects, interior designers, showrooms, distributors, in target geographies, researching each partner's project type and client base, then initiating direct contact with messages that demonstrate knowledge of their practice and explain precisely why the partnership makes sense." }
              },
              {
                "@type": "Question",
                "name": "How many trade partners can SVNR activate in a new market?",
                "acceptedAnswer": { "@type": "Answer", "text": "A structured 90-day programme typically activates 10–20 qualified trade partner relationships in a new market. The first confirmed partner relationship typically arrives within 30 days of deployment." }
              },
              {
                "@type": "Question",
                "name": "What is the difference between a stockist and a channel partner?",
                "acceptedAnswer": { "@type": "Answer", "text": "A stockist holds and sells inventory. A channel partner can include stockists, specifiers, showrooms, and interior designers who recommend or specify the product for client projects without holding inventory. SVNR builds programmes for both models depending on the brand's distribution strategy." }
              },
              {
                "@type": "Question",
                "name": "Does channel partnership development work for non-luxury product categories?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes. SVNR deploys channel partnership programmes for any premium product with a defined trade buyer profile, architectural materials, home textiles, premium kitchen equipment, high-ticket wellness products, and others where the route to market runs through a specifier or trade buyer rather than direct to consumer." }
              }
            ]
          }
        ]}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Channel Partnership", url: "/services/channel-partnership" },
        ]}
      />

      {/* HERO */}
      <section className="relative z-10 px-6 md:px-12 pt-32 md:pt-44 pb-16 md:pb-24">
        <div className="max-w-[1200px] mx-auto">
          <Breadcrumbs
            items={[{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: "Channel Partnership" }]}
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
                SYSTEM 08 · CHANNEL PARTNERSHIP
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
              >
                <OpticalType className="text-4xl sm:text-5xl md:text-[64px] font-medium text-white leading-[1.05] tracking-tight">
                  Build the distribution layer.
                </OpticalType>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.22 }}
                className="text-white/45 text-base md:text-lg mt-6 max-w-xl leading-relaxed"
              >
                Systematic trade partner acquisition for operators who sell through agents, studios, or channels.
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

            <HeroReplica />
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
              THE PROBLEM
            </p>
            <p className="text-xl md:text-3xl font-medium text-white tracking-tight leading-snug max-w-3xl">
              Trade distribution is won through relationships, not marketing. The architect who specifies your
              product, the interior designer who recommends it, the purchasing agent who sources it — these are won
              through a structured programme, not advertising.
            </p>
          </motion.div>
        </div>
      </section>

      {/* THE SYSTEM — four feature blocks, each demonstrating one capability */}
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
              THE SYSTEM
            </p>
            <h2 className="text-2xl md:text-4xl font-medium text-white tracking-tight">
              From audit to active distribution.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FeatureBlock
              {...CAPABILITIES[0]}
              i={0}
              frameLabel="channel · distribution-map"
              frameBadge="AUDIT"
            >
              {(lit) => <PartnerMap lit={lit} />}
            </FeatureBlock>

            <FeatureBlock
              {...CAPABILITIES[1]}
              i={1}
              frameLabel="channel · partner-icp"
              frameBadge="PROFILE"
            >
              {(lit) => <ProspectConsole lit={lit} />}
            </FeatureBlock>

            <FeatureBlock
              {...CAPABILITIES[2]}
              i={2}
              frameLabel="channel · outreach-log"
              frameBadge="LIVE"
            >
              {(lit) => <LogTail lit={lit} rows={outreachLog} />}
            </FeatureBlock>

            <FeatureBlock
              {...CAPABILITIES[3]}
              i={3}
              frameLabel="channel · activation-status"
              frameBadge="STATUS"
            >
              {(lit) => (
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-white/50">
                      <RedactedName lit={lit} name="Studio Marchetti" delay={280} />
                    </span>
                    <span className="text-[9px] text-white/25" style={MONO}>— new partner</span>
                  </div>
                  <SelfResolvingAlert
                    lit={lit}
                    problem="Sample programme pending — awaiting partner sign-off"
                    resolution="Partner activated — first introduction booked"
                    meta="18 days"
                  />
                </div>
              )}
            </FeatureBlock>
          </div>
        </div>
      </section>

      {/* THE 90-DAY PATH */}
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
              THE 90-DAY PATH
            </p>
            <h2 className="text-2xl md:text-4xl font-medium text-white tracking-tight">
              From audit to active partners.
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

      {/* SUITABLE INDUSTRIES */}
      <section className="relative z-10 px-6 md:px-12 py-16 md:py-20 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-[10px] tracking-[0.28em] text-white/40 mb-6" style={MONO}>
            SUITABLE INDUSTRIES
          </p>
          <div className="flex flex-wrap gap-3">
            {sectors.map((s) => (
              <span
                key={s}
                className="px-4 py-2 rounded-full border border-white/[0.08] text-sm text-white/60 hover:border-white/[0.14] hover:text-white transition-colors"
              >
                {s}
              </span>
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
              Build the distribution layer your product deserves.
            </h2>
            <p className="text-white/45 text-base leading-relaxed mb-9">
              We identify, reach, and activate the trade partners who will carry your product to the right market.
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

      <FaqSection faqs={CHANNEL_PARTNERSHIP_FAQS} title="Common questions about Channel Partnership" />

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
                  className="block rounded-2xl border border-white/[0.08] bg-white/[0.015] hover:border-white/[0.14] hover:bg-white/[0.028] transition-colors duration-300 p-5"
                >
                  <p className="text-[9px] tracking-widest text-white/30 mb-2" style={MONO}>READ</p>
                  <p className="text-white/80 text-sm font-medium leading-snug hover:text-white transition-colors">{r.label}</p>
                  <p className="text-white/30 text-[10px] mt-3 tracking-widest" style={MONO}>→ svnrglobal.com/blog</p>
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
