import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import Breadcrumbs from "../components/Breadcrumbs";
import OpticalType from "../components/OpticalType";
import Counter from "../components/Counter";

const MONO = { fontFamily: "var(--font-mono)" };
const EASE = [0.16, 1, 0.3, 1] as const;

const STATS = [
  { v: "18+", l: "Active markets" },
  { v: "8", l: "Specialist verticals" },
  { v: "<60s", l: "AI response time" },
  { v: "~100", l: "Years of craft heritage" },
];

// The whole practice in three lines. Anything that needed a fourth is not a principle.
const STATEMENT = [
  "We identify fewer targets, but the right ones.",
  "A campaign ends. Infrastructure runs.",
  "We report on warm conversations generated, meetings booked, and revenue influenced.",
];

const HERITAGE = [
  { year: "~1930s", label: "Craft lineage begins" },
  { year: "2019", label: "Global trade opens" },
  { year: "2022", label: "Outreach systematised" },
  { year: "2024", label: "SVNR Global launches" },
];

const FACTS = [
  { label: "Founded", value: "2019, New Delhi, India" },
  { label: "Category", value: "AI client acquisition infrastructure" },
  { label: "Markets covered", value: "UK, EU, UAE, Switzerland, Singapore, India" },
  {
    label: "Core service",
    value: "Bespoke outreach infrastructure, custom AI agents, enriched prospect databases, precision outreach sequences",
  },
  {
    label: "Sectors",
    value: "Luxury brands, private equity, premium real estate, wealth management, maritime, professional services",
  },
  {
    label: "Differentiation",
    value: "Every engagement is custom-built per client, no shared templates, no recycled agents, no generic dashboards",
  },
];

// THE STRIPE MOMENT — the company's own lineage, drawn as one hairline that
// sweeps left to right while each dated mark lights as the sweep reaches it.
// The timing is the fact: a century of craft, then four years of compression.
function HeritageLine() {
  return (
    <div className="relative mt-14 md:mt-20">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.95, ease: EASE }}
        className="hidden md:block absolute left-0 right-0 top-[3px] h-px origin-left bg-white/[0.14]"
      />
      <div className="relative grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6">
        {HERITAGE.map((h, i) => (
          <div key={h.year}>
            <motion.span
              initial={{ opacity: 0, scale: 0.4 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.3, delay: 0.12 + i * 0.22, ease: "easeOut" }}
              className="block w-[7px] h-[7px] rounded-full bg-white/55 ring-4 ring-black"
            />
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.22, ease: EASE }}
            >
              <p className="text-[10px] tracking-[0.28em] text-white/40 mt-6" style={MONO}>
                {h.year.toUpperCase()}
              </p>
              <p className="text-white text-sm font-medium leading-snug mt-2 pr-4">{h.label}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <main className="relative w-full bg-black font-sans selection:bg-white/20 selection:text-white">
      <SEO
        title="About SVNR Global — Bespoke AI Outreach for Premium Operators"
        description="SVNR Global was built to solve one problem: premium operators struggle to reach the right clients at scale. We build AI infrastructure that changes that. New Delhi, globally deployed."
        canonical="/about"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "About", url: "/about" }]}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About SVNR Global",
            "url": "https://svnrglobal.com/about",
            "description": "SVNR Global is a bespoke AI outreach infrastructure agency founded in New Delhi, India. We build custom AI-powered client acquisition systems for luxury brands, private equity firms, premium real estate operators, and high-ticket B2B businesses globally.",
            "publisher": { "@type": "Organization", "name": "SVNR Global", "url": "https://svnrglobal.com" }
          },
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "SVNR Global",
            "alternateName": "SVNR",
            "url": "https://svnrglobal.com",
            "logo": "https://svnrglobal.com/svnr-logo.svg",
            "image": "https://svnrglobal.com/og-image.png",
            "description": "SVNR Global builds bespoke AI-powered client acquisition infrastructure for premium operators, luxury brands, private equity firms, real estate, wealth management, and high-ticket B2B businesses. Founded in New Delhi, India, globally deployed.",
            "foundingDate": "2019",
            "foundingLocation": "New Delhi, India",
            "numberOfEmployees": { "@type": "QuantitativeValue", "minValue": 1, "maxValue": 10 },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "New Delhi",
              "addressRegion": "Delhi",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "email": "contact@svnrglobal.com",
              "contactType": "customer service",
              "availableLanguage": "English"
            },
            "founder": {
              "@type": "Person",
              "name": "Hamza Omair",
              "jobTitle": "Founder & CEO",
              "url": "https://svnrglobal.com/founder/",
              "sameAs": "https://in.linkedin.com/in/hamza-omair-5434b1354",
              "worksFor": { "@type": "Organization", "name": "SVNR Global" }
            },
            "knowsAbout": [
              "AI client acquisition",
              "B2B outreach infrastructure",
              "outbound lead generation",
              "luxury brand B2B sales",
              "private equity deal flow",
              "HNW investor outreach",
              "UHNW client acquisition",
              "outreach infrastructure",
              "AI prospecting",
              "premium real estate client acquisition"
            ],
            "areaServed": ["GB", "DE", "FR", "AE", "CH", "SG", "IN", "US"],
            "serviceType": [
              "AI Client Acquisition",
              "B2B Outreach Infrastructure",
              "Deal Flow Generation",
              "Outbound Lead Generation",
              "HNW Investor Outreach"
            ],
            "sameAs": [
              "https://www.instagram.com/svnr.lab",
              "https://in.pinterest.com/svnrglobal/",
              "https://www.linkedin.com/company/svnrglobal"
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Hamza Omair",
            "jobTitle": "Founder & CEO, SVNR Global",
            "url": "https://svnrglobal.com/founder/",
            "sameAs": "https://in.linkedin.com/in/hamza-omair-5434b1354",
            "worksFor": { "@type": "Organization", "name": "SVNR Global", "url": "https://svnrglobal.com" },
            "knowsAbout": [
              "AI outreach infrastructure",
              "B2B client acquisition",
              "luxury brand distribution",
              "private equity deal flow",
              "outbound lead generation"
            ],
            "address": { "@type": "PostalAddress", "addressLocality": "New Delhi", "addressCountry": "IN" }
          }
        ]}
      />

      {/* HERO */}
      <section className="relative z-10 px-6 md:px-12 pt-32 md:pt-44 pb-16 md:pb-24">
        <div className="max-w-[1200px] mx-auto">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "About" }]} />
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="text-[10px] tracking-[0.28em] text-white/40 mb-6"
            style={MONO}
          >
            ABOUT SVNR GLOBAL
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
          >
            <OpticalType className="text-4xl sm:text-5xl md:text-[64px] font-medium text-white leading-[1.05] tracking-tight max-w-3xl">
              We build the systems that bring the right clients to you.
            </OpticalType>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="text-white/45 text-base md:text-lg mt-6 max-w-xl leading-relaxed"
          >
            Not campaigns. Not content. Autonomous outreach infrastructure, permanently running, continuously refined.
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
              Begin the conversation <ArrowRight size={14} />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/[0.14] text-white/80 text-sm hover:border-white/30 hover:text-white transition-colors"
            >
              Our services <ArrowRight size={14} />
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-14 md:mt-20">
            {STATS.map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: EASE }}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.015] hover:border-white/[0.14] hover:bg-white/[0.028] transition-colors duration-300 px-6 py-5"
              >
                <Counter
                  value={s.v}
                  className="block text-2xl md:text-[28px] font-medium text-white tabular-nums leading-none"
                />
                <p className="text-[10px] tracking-[0.28em] text-white/40 mt-3" style={MONO}>
                  {s.l.toUpperCase()}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* THE STATEMENT — three lines, and no fourth */}
      <section className="relative z-10 px-6 md:px-12 py-20 md:py-28 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: EASE }}
            className="text-[10px] tracking-[0.28em] text-white/40 mb-10"
            style={MONO}
          >
            WHAT WE BELIEVE
          </motion.p>
          <div className="max-w-4xl">
            {STATEMENT.map((line, i) => (
              <motion.div
                key={line}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: EASE }}
                className="flex items-start gap-6 md:gap-10 border-t border-white/[0.06] first:border-t-0 py-7 first:pt-0"
              >
                <span className="text-[10px] tracking-widest text-white/20 tabular-nums pt-2 shrink-0" style={MONO}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="text-xl md:text-3xl font-medium text-white tracking-tight leading-snug">{line}</h2>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="relative z-10 px-6 md:px-12 py-20 md:py-28 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[0.7fr_1.3fr] gap-10 lg:gap-14 items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: EASE }}
              className="rounded-2xl border border-white/[0.08] overflow-hidden max-w-[340px]"
            >
              <img
                loading="lazy"
                decoding="async"
                src="/hamza.jpg"
                alt="Hamza Omair, Founder of SVNR Global"
                className="w-full h-full object-cover aspect-square opacity-90"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.08, ease: EASE }}
            >
              <p className="text-[10px] tracking-[0.28em] text-white/40 mb-5" style={MONO}>
                FOUNDER
              </p>
              <h2 className="text-2xl md:text-4xl font-medium text-white tracking-tight leading-tight mb-6">
                We understand these markets from the inside.
              </h2>
              <p className="text-white/45 text-sm md:text-base leading-relaxed mb-4">
                Our family has manufactured handmade rugs and carpets in Bhadohi, India for nearly a century. We know
                what a hand-knotted pile costs to produce, how a trade certification changes a buyer conversation in
                Cologne versus Dubai, and what it takes to build lasting relationships with interior designers who
                specify everything.
              </p>
              <p className="text-white/45 text-sm md:text-base leading-relaxed mb-8">
                That fluency carries into every vertical we operate in. When we write outreach for a luxury rug house, a
                boutique PE firm, or a premium real estate principal, the prospect reads it as someone already inside
                their world, not a vendor who researched the category last week.
              </p>
              <p className="text-white text-sm font-medium">Hamza Omair</p>
              <p className="text-white/40 text-sm mt-1 mb-7">
                Founder &amp; CEO. New Delhi, operating globally.
              </p>
              <Link
                to="/founder"
                className="group inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
              >
                Read the founder&rsquo;s account
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          <HeritageLine />
        </div>
      </section>

      {/* THE RECORD */}
      <section className="relative z-10 px-6 md:px-12 py-20 md:py-28 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: EASE }}
            className="text-[10px] tracking-[0.28em] text-white/40 mb-10"
            style={MONO}
          >
            THE RECORD
          </motion.p>
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-0">
            {FACTS.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: EASE }}
                className="border-b border-white/[0.06] py-6"
              >
                <dt className="text-[10px] tracking-[0.28em] text-white/40 mb-2" style={MONO}>
                  {f.label.toUpperCase()}
                </dt>
                <dd className="text-white/70 text-sm leading-relaxed">{f.value}</dd>
              </motion.div>
            ))}
          </dl>
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
              START HERE
            </p>
            <h2 className="text-2xl md:text-4xl font-medium text-white tracking-tight leading-tight mb-5">
              If acquisition is the constraint, this is where it ends.
            </h2>
            <p className="text-white/45 text-base leading-relaxed mb-9">
              We work with a small number of operators at any one time. Every engagement is built specifically for your
              market, your buyer, and your proof.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors"
              >
                Begin the conversation <ArrowRight size={14} />
              </Link>
              <Link
                to="/compare"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/[0.14] text-white/80 text-sm hover:border-white/30 hover:text-white transition-colors"
              >
                SVNR vs alternatives <ArrowRight size={14} />
              </Link>
            </div>
            <a
              href="mailto:contact@svnrglobal.com"
              className="inline-block text-sm text-white/40 hover:text-white transition-colors mt-7"
            >
              contact@svnrglobal.com
            </a>
          </motion.div>
        </div>
      </section>

      <div className="relative z-10 px-6 md:px-12 pb-10 max-w-[1200px] mx-auto">
        <Footer />
      </div>
    </main>
  );
}
