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
import { SECTOR_MINI } from "../../components/minis";
import { useIdleMischief } from "../../hooks/useIdleMischief";

const MONO = { fontFamily: "var(--font-mono)" };
const EASE = [0.16, 1, 0.3, 1] as const;

const HERO_STATS = [
  { v: "14 min", l: "Time to first qualified reply" },
  { v: "5K+", l: "HNW contacts mapped" },
  { v: "68%", l: "Off-market deal rate" },
];

// Deal sourcing, off-market versus portal.
const SOURCING = { offMarket: 68, portal: 32 };

// Response by day from first contact, indexed to 100 at day one.
const RESPONSE = [
  { day: "D1", response: 100 },
  { day: "D3", response: 72 },
  { day: "D7", response: 48 },
  { day: "D14", response: 30 },
  { day: "D30", response: 15 },
];

const MILESTONES = [
  { n: "01", when: "Week 0", label: "Buyer signals mapped" },
  { n: "02", when: "Week 2 to 3", label: "Outreach live" },
  { n: "03", when: "First reply", label: "14 minutes in a live programme" },
  { n: "04", when: "Day 90", label: "Principal pipeline active" },
];

const services = [
  { slug: "client-acquisition", label: "Client Acquisition", desc: "Direct outreach to HNW principals, family offices, and institutional investors before they enter formal search processes." },
  { slug: "intelligence-research", label: "Intelligence Research", desc: "Principal buyer profiles built from business press, LinkedIn exits, family office mandates, and liquidity signals." },
  { slug: "brand-outreach", label: "Brand Outreach", desc: "Messages that reach principals on the channels they actually use, WhatsApp, direct email, not portal enquiry forms." },
  { slug: "ai-receptionist", label: "AI Receptionist", desc: "Every inbound enquiry qualified and responded to within 60 seconds. No missed opportunity after hours." },
];

const insights = [
  "The buyer for a prime residential property or investment asset is not on Rightmove at midnight. They are a principal making a capital allocation decision. Portal-dependent acquisition by definition cannot reach them.",
  "In European and Middle Eastern prime markets, WhatsApp is the dominant channel for high-value buyer conversations. The firm that reaches a qualified buyer directly on the right channel is operating in a different competitive environment.",
  "Days on market is a diagnostic. When a prime property sits beyond its typical transaction window, the buyer pool is too small, and that is a structural problem that portal optimisation cannot solve.",
  "The off-market buyer is not passive. They are a principal with capital, a geographic preference, and a clear sense of what a good transaction looks like. They are waiting for someone who understands their parameters.",
];

const IMAGES = [
  "/sectors/real-estate-photo-1505873242700-f289a29e1e0f.avif",
  "/sectors/real-estate-premium_photo-1661915661139-5b6a4e4a6fcc.avif",
];

const RELATED = [
  { to: "/blog/real-estate-investor-buyer-acquisition", label: "Reaching Investor Buyers" },
  { to: "/blog/hnw-investor-outreach-strategy", label: "HNW Investor Outreach" },
  { to: "/blog/uhnw-client-acquisition-strategy", label: "UHNW Client Acquisition" },
];

const PREMIUM_RE_FAQS = [
  { q: "How do premium real estate firms find HNW buyers without property portals?", a: "By identifying principal buyers — HNW individuals, family offices, and institutional investors — through AI-driven signal monitoring and business press, then initiating direct contact through email and WhatsApp with messages specific to their investment profile and capital position." },
  { q: "Why do luxury properties sit on the market for too long?", a: "Most prime property is marketed to whoever is actively searching portals. This excludes international buyers, passive investors, and principals who would purchase if they knew the property existed. Off-market buyer acquisition expands the buyer pool beyond what portals can reach." },
  { q: "What channels do HNW property buyers actually use?", a: "In European and Middle Eastern prime markets, WhatsApp and direct email are the dominant channels for high-value buyer conversations. A qualified buyer in Switzerland, Germany, or the UAE does not manage significant financial decisions through a portal enquiry form." },
  { q: "How quickly can SVNR generate buyer pipeline for a premium real estate firm?", a: "Most programmes produce the first qualified principal contact within 14 days of deployment. A recent engagement produced a qualified principal reply in 14 minutes. Speed of contact is determined by targeting precision and message quality." },
];

// THE STRIPE MOMENT — the sector's own mini, blown up to hero scale inside a
// bordered instrument panel. The reply lands on load, and lands once more,
// quietly, about eight seconds after a reader hovers it and moves on.
function ReplyArtefact() {
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
          INBOX
        </span>
        <span className="text-[10px] tracking-[0.2em] text-white/25" style={MONO}>
          DIRECT · NOT PORTAL
        </span>
      </div>

      <div
        key={replay}
        className="absolute top-0 left-0 origin-top-left w-[77%] h-[77%] scale-[1.3] md:w-[67%] md:h-[67%] md:scale-[1.5]"
      >
        {SECTOR_MINI["premium-real-estate"]?.(true)}
      </div>

      <p className="absolute z-10 bottom-7 left-7 right-7 text-[10px] text-white/30" style={MONO}>
        Outreach sent → principal reply logged at 14 minutes
      </p>
    </motion.div>
  );
}

// One bar, two truths: where the deals actually come from.
function SourcingSplit() {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.015] p-7">
      <p className="text-[10px] tracking-[0.28em] text-white/40 mb-6" style={MONO}>
        DEAL SOURCING · OFF-MARKET VS PORTAL
      </p>
      <div className="flex h-3 w-full overflow-hidden rounded-full bg-white/[0.05]">
        <motion.div
          className="h-full bg-white/45"
          initial={{ width: "0%" }}
          whileInView={{ width: `${SOURCING.offMarket}%` }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: EASE }}
        />
        <motion.div
          className="h-full bg-white/[0.12]"
          initial={{ width: "0%" }}
          whileInView={{ width: `${SOURCING.portal}%` }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.12, ease: EASE }}
        />
      </div>
      <div className="flex items-baseline justify-between mt-5">
        <div>
          <p className="text-2xl font-medium text-white tabular-nums leading-none">{SOURCING.offMarket}%</p>
          <p className="text-[10px] tracking-[0.28em] text-white/40 mt-2" style={MONO}>
            OFF-MARKET
          </p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-medium text-white/35 tabular-nums leading-none">{SOURCING.portal}%</p>
          <p className="text-[10px] tracking-[0.28em] text-white/25 mt-2" style={MONO}>
            PORTAL
          </p>
        </div>
      </div>
    </div>
  );
}

// The decay is the argument for speed: bars shorten as the days pass.
function ResponseDecay() {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.015] p-7">
      <p className="text-[10px] tracking-[0.28em] text-white/40 mb-6" style={MONO}>
        RESPONSE BY DAY FROM FIRST CONTACT · D1 = 100
      </p>
      <div className="flex flex-col gap-3">
        {RESPONSE.map((r, i) => (
          <div key={r.day} className="flex items-center gap-3">
            <span className="w-8 shrink-0 text-[9px] tracking-widest text-white/25" style={MONO}>
              {r.day}
            </span>
            <div className="h-[3px] flex-1 rounded-full bg-white/[0.06] overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-white/40"
                initial={{ width: "0%" }}
                whileInView={{ width: `${r.response}%` }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: EASE }}
              />
            </div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.3, delay: 0.25 + i * 0.08 }}
              className="w-8 shrink-0 text-right text-[11px] text-white/55 tabular-nums"
              style={MONO}
            >
              {r.response}
            </motion.span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PremiumRealEstate() {
  return (
    <main className="relative w-full bg-black font-sans selection:bg-white/20 selection:text-white">
      <SEO
        title="Premium Real Estate Client Acquisition | SVNR Global"
        description="Off-market buyer acquisition for premium real estate. We reach HNW investors, family offices, and principal buyers directly — no portal dependency. First qualified buyer contact within 14 days. Europe, Gulf, and global."
        canonical="/sectors/premium-real-estate"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Premium Real Estate Buyer & Investor Acquisition",
            "provider": { "@id": "https://svnrglobal.com/#organization" },
            "description": "AI-powered outreach to HNW investors, family offices, and principal buyers for premium and luxury real estate firms. Off-market buyer acquisition without portal dependency.",
            "areaServed": ["Global", "Europe", "Middle East", "Switzerland", "United Kingdom", "UAE"],
            "serviceType": ["Real Estate Buyer Acquisition", "HNW Investor Outreach", "Off-Market Deal Pipeline", "Principal Buyer Identification"]
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How do premium real estate firms find HNW buyers without property portals?",
                "acceptedAnswer": { "@type": "Answer", "text": "By identifying principal buyers, HNW individuals, family offices, and institutional investors, through AI-driven signal monitoring and business press, then initiating direct contact through email and WhatsApp with messages specific to their investment profile and capital position." }
              },
              {
                "@type": "Question",
                "name": "Why do luxury properties sit on the market for too long?",
                "acceptedAnswer": { "@type": "Answer", "text": "Most prime property is marketed to whoever is actively searching portals. This excludes international buyers, passive investors, and principals who would purchase if they knew the property existed. Off-market buyer acquisition expands the buyer pool beyond what portals can reach." }
              },
              {
                "@type": "Question",
                "name": "What channels do HNW property buyers actually use?",
                "acceptedAnswer": { "@type": "Answer", "text": "In European and Middle Eastern prime markets, WhatsApp and direct email are the dominant channels for high-value buyer conversations. A qualified buyer in Switzerland, Germany, or the UAE does not manage significant financial decisions through a portal enquiry form." }
              },
              {
                "@type": "Question",
                "name": "How quickly can SVNR generate buyer pipeline for a premium real estate firm?",
                "acceptedAnswer": { "@type": "Answer", "text": "Most programmes produce the first qualified principal contact within 14 days of deployment. A recent engagement produced a qualified principal reply in 14 minutes. Speed of contact is determined by targeting precision and message quality." }
              }
            ]
          }
        ]}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Sectors", url: "/sectors" },
          { name: "Premium Real Estate", url: "/sectors/premium-real-estate" },
        ]}
      />

      {/* HERO */}
      <section className="relative z-10 px-6 md:px-12 pt-32 md:pt-44 pb-16 md:pb-24">
        <div className="max-w-[1200px] mx-auto">
          <Breadcrumbs
            items={[{ label: "Home", to: "/" }, { label: "Sectors", to: "/sectors" }, { label: "Premium Real Estate" }]}
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
                SECTOR 02 · PREMIUM REAL ESTATE
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
              >
                <OpticalType className="text-4xl sm:text-5xl md:text-[64px] font-medium text-white leading-[1.05] tracking-tight">
                  Principal relationships, not portal listings.
                </OpticalType>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.22 }}
                className="text-white/45 text-base md:text-lg mt-6 max-w-xl leading-relaxed"
              >
                For real estate firms moving toward direct HNW and institutional investor relationships.
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
                  to="/sectors"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/[0.14] text-white/80 text-sm hover:border-white/30 hover:text-white transition-colors"
                >
                  All sectors <ArrowRight size={14} />
                </Link>
              </motion.div>
            </div>

            <ReplyArtefact />
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
              A Zurich real estate firm. A qualified principal replied in fourteen minutes, reached directly on
              WhatsApp with a message specific to their investment profile, before any competitor had made contact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* THE MARKET REALITY */}
      <section className="relative z-10 px-6 md:px-12 py-20 md:py-28 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <p className="text-[10px] tracking-[0.28em] text-white/40 mb-5" style={MONO}>
              THE MARKET REALITY
            </p>
            <h2 className="text-2xl md:text-4xl font-medium text-white tracking-tight leading-tight mb-6">
              Portal dependency is a buyer quality problem, not a volume problem.
            </h2>
            {insights.map((insight) => (
              <p key={insight} className="text-white/45 text-sm leading-relaxed mb-4 last:mb-0">
                {insight}
              </p>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.08, ease: EASE }}
            className="flex flex-col gap-4"
          >
            <SourcingSplit />
            <ResponseDecay />
          </motion.div>
        </div>
      </section>

      {/* SECTOR IMAGERY */}
      <section className="relative z-10 px-6 md:px-12 pb-4">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {IMAGES.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: EASE }}
              className="rounded-2xl border border-white/[0.08] overflow-hidden aspect-[4/3]"
            >
              <img
                loading="lazy"
                decoding="async"
                src={src}
                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                alt="Premium real estate UHNW investor buyer pipeline generation"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* THE 90-DAY PATH */}
      <section className="relative z-10 px-6 md:px-12 py-20 md:py-28">
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
              From engagement to active pipeline.
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
              The infrastructure built for premium real estate.
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
              Build the principal relationships that portals cannot produce.
            </h2>
            <p className="text-white/45 text-base leading-relaxed mb-9">
              We map and reach the HNW buyers in your market before anyone else does.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors"
              >
                Start the conversation <ArrowRight size={14} />
              </Link>
              <Link
                to="/services/client-acquisition"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/[0.14] text-white/80 text-sm hover:border-white/30 hover:text-white transition-colors"
              >
                Client acquisition <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <FaqSection faqs={PREMIUM_RE_FAQS} title="Common questions about premium real estate buyer acquisition" />

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
