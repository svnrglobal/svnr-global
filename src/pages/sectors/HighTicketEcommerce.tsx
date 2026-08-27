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
  { v: "30+", l: "Wholesale leads / month" },
  { v: "41%", l: "Trade buyer activation" },
  { v: "312%", l: "AOV increase via trade" },
];

// The wholesale pipeline as it actually builds, months one to four.
const PIPELINE = [
  { m: "M1", leads: 8 },
  { m: "M2", leads: 16 },
  { m: "M3", leads: 25 },
  { m: "M4", leads: 30 },
];

const MILESTONES = [
  { n: "01", when: "Week 0", label: "Trade buyer universe mapped" },
  { n: "02", when: "Week 2 to 3", label: "Wholesale outreach live" },
  { n: "03", when: "Day 30 to 60", label: "First trade accounts open" },
  { n: "04", when: "Day 90", label: "312% higher AOV channel" },
];

const services = [
  { slug: "client-acquisition", label: "Client Acquisition", desc: "Systematic identification of wholesale buyers, retail partners, and trade accounts in your target geographies." },
  { slug: "channel-partnership", label: "Channel Partnership", desc: "Trade distribution built alongside D2C, finding, reaching, and activating the stockists who carry your product correctly." },
  { slug: "revenue-operations", label: "Revenue Operations", desc: "Wholesale pipeline tracked end-to-end: lead to order, order to repeat. Every stage measured and managed." },
  { slug: "sector-workflows", label: "Sector Workflows", desc: "B2B operations automated, trade pricing, wholesale enquiry handling, partner onboarding, and order logistics." },
];

const IMAGES = [
  "/sectors/ecommerce-EA694261-B27B-44EA-9C9C-02F22C06A07B.jpg",
  "/sectors/ecommerce-IMG_3162.JPG",
];

const RELATED = [
  { to: "/blog/outbound-lead-generation-luxury-retail", label: "Outbound for Luxury Retail" },
  { to: "/blog/how-to-get-b2b-clients-luxury-brand", label: "B2B Clients for Luxury Brands" },
];

const ECOMMERCE_FAQS = [
  { q: "How do premium e-commerce brands build a wholesale channel?", a: "By systematically identifying wholesale buyers, boutique retailers, and trade accounts in target geographies, researching each buyer's category focus, price architecture, and order profile, then initiating direct contact with outreach specific to their purchasing profile." },
  { q: "Why does wholesale outperform D2C for high-ticket products?", a: "Wholesale trade accounts order at larger volumes, return less frequently, and carry product at its correct brand positioning. SVNR client data shows a 312% average order value increase when premium operators add a trade distribution channel alongside D2C." },
  { q: "How many wholesale leads can SVNR generate per month for a premium brand?", a: "Most programmes generate 25–35 qualified wholesale buyer contacts per month from month one. The conversion rate from contact to active trade account averages 41% across high-ticket e-commerce engagements." },
  { q: "Does SVNR work with D2C brands that have no existing wholesale experience?", a: "Yes. SVNR builds the trade distribution infrastructure from scratch — ICP definition, buyer mapping, wholesale outreach sequences, and trade account onboarding workflows — for brands entering B2B for the first time." },
];

// THE STRIPE MOMENT — the sector's own mini, blown up to hero scale inside a
// bordered instrument panel. It draws itself on load, and replays once, quietly,
// about eight seconds after a reader hovers it and moves on.
function AovArtefact() {
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
          AOV INDEX
        </span>
        <span className="text-[10px] tracking-[0.2em] text-white/25" style={MONO}>
          D2C → TRADE
        </span>
      </div>

      <div key={replay} className="absolute inset-0 origin-top-left scale-[1.5] md:scale-[1.9]">
        {SECTOR_MINI["high-ticket-ecommerce"]?.(true)}
      </div>

      <p className="absolute z-10 bottom-7 left-7 right-7 text-[10px] text-white/30" style={MONO}>
        D2C baseline 100 → trade channel 312
      </p>
    </motion.div>
  );
}

// Bars grow from the floor: the shape of the build is the point, not the styling.
function PipelineBuild() {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.015] p-7">
      <p className="text-[10px] tracking-[0.28em] text-white/40 mb-7" style={MONO}>
        WHOLESALE PIPELINE BUILD · 4 MONTHS
      </p>
      <div className="flex items-end gap-4 h-44">
        {PIPELINE.map((p, i) => (
          <div key={p.m} className="flex-1 h-full flex flex-col justify-end items-center gap-2">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.3, delay: 0.35 + i * 0.09 }}
              className="text-[13px] text-white/60 tabular-nums"
              style={MONO}
            >
              {p.leads}
            </motion.span>
            <div className="w-full flex-1 flex items-end rounded-t bg-white/[0.04] overflow-hidden">
              <motion.div
                className="w-full rounded-t bg-white/35"
                initial={{ height: 0 }}
                whileInView={{ height: `${(p.leads / 30) * 100}%` }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.09, ease: EASE }}
              />
            </div>
            <span className="text-[9px] tracking-widest text-white/25" style={MONO}>
              {p.m}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HighTicketEcommerce() {
  return (
    <main className="relative w-full bg-black font-sans selection:bg-white/20 selection:text-white">
      <SEO
        title="High-Ticket E-commerce Client Acquisition | SVNR Global"
        description="Wholesale and trade buyer acquisition for high-ticket e-commerce brands. We identify and reach boutique retailers and trade accounts in your target markets. 312% average AOV increase. 25–35 qualified wholesale leads per month."
        canonical="/sectors/high-ticket-ecommerce"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "High-Ticket E-commerce & Wholesale Buyer Acquisition",
            "provider": { "@id": "https://svnrglobal.com/#organization" },
            "description": "AI-powered wholesale buyer and trade account acquisition for premium D2C and high-ticket e-commerce operators. Systematic outreach that builds B2B distribution alongside D2C, delivering 312% average order value increase through trade channels.",
            "areaServed": ["Global", "Europe", "United Kingdom", "United States", "Middle East"],
            "serviceType": ["Wholesale Buyer Acquisition", "Trade Account Development", "High-Ticket E-commerce Distribution", "D2C to B2B Expansion"]
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How do premium e-commerce brands build a wholesale channel?",
                "acceptedAnswer": { "@type": "Answer", "text": "By systematically identifying wholesale buyers, boutique retailers, and trade accounts in target geographies, researching each buyer's category focus, price architecture, and order profile, then initiating direct contact with outreach specific to their purchasing profile." }
              },
              {
                "@type": "Question",
                "name": "Why does wholesale outperform D2C for high-ticket products?",
                "acceptedAnswer": { "@type": "Answer", "text": "Wholesale trade accounts order at larger volumes, return less frequently, and carry product at its correct brand positioning. SVNR client data shows a 312% average order value increase when premium operators add a trade distribution channel alongside D2C." }
              },
              {
                "@type": "Question",
                "name": "How many wholesale leads can SVNR generate per month for a premium brand?",
                "acceptedAnswer": { "@type": "Answer", "text": "Most programmes generate 25–35 qualified wholesale buyer contacts per month from month one. The conversion rate from contact to active trade account averages 41% across high-ticket e-commerce engagements." }
              },
              {
                "@type": "Question",
                "name": "Does SVNR work with D2C brands that have no existing wholesale experience?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes. SVNR builds the trade distribution infrastructure from scratch, ICP definition, buyer mapping, wholesale outreach sequences, and trade account onboarding workflows, for brands entering B2B for the first time." }
              }
            ]
          }
        ]}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Sectors", url: "/sectors" },
          { name: "High-Ticket E-commerce", url: "/sectors/high-ticket-ecommerce" },
        ]}
      />

      {/* HERO */}
      <section className="relative z-10 px-6 md:px-12 pt-32 md:pt-44 pb-16 md:pb-24">
        <div className="max-w-[1200px] mx-auto">
          <Breadcrumbs
            items={[{ label: "Home", to: "/" }, { label: "Sectors", to: "/sectors" }, { label: "High-Ticket E-commerce" }]}
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
                SECTOR 06 · HIGH-TICKET E-COMMERCE
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
              >
                <OpticalType className="text-4xl sm:text-5xl md:text-[64px] font-medium text-white leading-[1.05] tracking-tight">
                  B2B distribution for premium products.
                </OpticalType>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.22 }}
                className="text-white/45 text-base md:text-lg mt-6 max-w-xl leading-relaxed"
              >
                For high-ticket operators building wholesale and trade distribution alongside their D2C channel.
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

            <AovArtefact />
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
              A premium product operator. 312% increase in average order value through the B2B channel, built through
              systematic wholesale outreach that D2C marketing could not have produced.
            </p>
          </motion.div>
        </div>
      </section>

      {/* THE OPPORTUNITY */}
      <section className="relative z-10 px-6 md:px-12 py-20 md:py-28 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <p className="text-[10px] tracking-[0.28em] text-white/40 mb-5" style={MONO}>
              THE OPPORTUNITY
            </p>
            <h2 className="text-2xl md:text-4xl font-medium text-white tracking-tight leading-tight mb-6">
              The B2B channel produces 312% higher AOV than D2C alone.
            </h2>
            <p className="text-white/45 text-sm leading-relaxed mb-4">
              High-ticket product operators with a strong D2C channel often underestimate the wholesale opportunity
              available to them. The trade buyer, an interior designer, a boutique retailer, a property developer
              specifying for multiple units, orders at a scale and frequency that transforms unit economics.
            </p>
            <p className="text-white/45 text-sm leading-relaxed mb-4">
              Reaching these buyers requires a different motion than consumer advertising. They need to be identified,
              reached on the right channel, and activated through a trade onboarding process that reflects the quality
              of the product they are considering.
            </p>
            <p className="text-white/45 text-sm leading-relaxed">
              30+ wholesale leads per month. 41% trade buyer activation rate. Built as a parallel channel alongside
              D2C, not as a replacement for it.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.08, ease: EASE }}
          >
            <PipelineBuild />
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
                alt="High-ticket e-commerce wholesale buyer acquisition and AOV growth"
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
              Built for high-ticket wholesale growth.
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
              Build the wholesale channel your product has been missing.
            </h2>
            <p className="text-white/45 text-base leading-relaxed mb-9">
              We identify, reach, and activate the B2B buyers who will carry your product at scale and at the right
              price point.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors"
              >
                Start the conversation <ArrowRight size={14} />
              </Link>
              <Link
                to="/services/channel-partnership"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/[0.14] text-white/80 text-sm hover:border-white/30 hover:text-white transition-colors"
              >
                Channel partnership <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <FaqSection faqs={ECOMMERCE_FAQS} title="Common questions about high-ticket e-commerce B2B acquisition" />

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

      <div className="relative z-10 px-6 md:px-12 pb-10 max-w-[1200px] mx-auto">
        <Footer />
      </div>
    </main>
  );
}
