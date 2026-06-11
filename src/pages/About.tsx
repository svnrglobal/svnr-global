import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Layers, Zap, Target, Users, BarChart2, RefreshCw, Star, Building2, Briefcase, ShoppingBag, ShoppingCart, Anchor, PenTool } from "lucide-react";
import { VIDEOS } from "../data/content";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import Counter from "../components/Counter";

/* ── data ── */

const stats = [
  { value: "18+",  label: "Active markets",           sub: "Global client footprint" },
  { value: "8",    label: "Specialist verticals",      sub: "Deep category fluency" },
  { value: "<60s", label: "AI response time",          sub: "Across all live systems" },
  { value: "~100", label: "Years of craft heritage",   sub: "Bhadohi manufacturing lineage" },
];

const values = [
  {
    icon: Target,
    title: "Precision over volume",
    body: "We identify fewer targets, but the right ones. Every name in a sequence has been selected by role, timing signal, and fit, not pulled from a list.",
  },
  {
    icon: Layers,
    title: "Infrastructure, not campaigns",
    body: "A campaign ends. Infrastructure runs. We build systems that generate warm conversations every month, not one-time bursts of activity.",
  },
  {
    icon: Globe,
    title: "Inside knowledge",
    body: "Our family has manufactured in Bhadohi for nearly a century. That inside-market fluency carries into every vertical we operate in.",
  },
  {
    icon: Zap,
    title: "AI that serves craft",
    body: "We use AI to find, qualify, and reach the right people faster, not to replace the human relationships that close premium deals.",
  },
  {
    icon: Users,
    title: "A small practice",
    body: "We work with a small number of operators at any given time. Every engagement is specific, not templated.",
  },
  {
    icon: BarChart2,
    title: "Measured by outcomes",
    body: "We report on warm conversations generated, meetings booked, and revenue influenced, not impressions, clicks, or open rates.",
  },
];

const verticals = [
  { n: "01", label: "Luxury Rugs & Home Textiles",        color: "from-amber-500/20 to-transparent",   icon: Star },
  { n: "02", label: "Premium Real Estate",                 color: "from-blue-500/20 to-transparent",    icon: Building2 },
  { n: "03", label: "Private Equity & Family Offices",     color: "from-purple-500/20 to-transparent",  icon: Briefcase },
  { n: "04", label: "B2B Luxury Brands",                   color: "from-pink-500/20 to-transparent",    icon: ShoppingBag },
  { n: "05", label: "Wealth Management Boutiques",         color: "from-emerald-500/20 to-transparent", icon: Layers },
  { n: "06", label: "High-Ticket E-Commerce",              color: "from-cyan-500/20 to-transparent",    icon: ShoppingCart },
  { n: "07", label: "Maritime & Logistics",                color: "from-sky-500/20 to-transparent",     icon: Anchor },
  { n: "08", label: "Professional & Creative Services",    color: "from-rose-500/20 to-transparent",    icon: PenTool },
];

const timeline = [
  { year: "~1930s", label: "Craft lineage begins", desc: "Our family begins manufacturing handmade rugs in Bhadohi, the heart of India's carpet belt." },
  { year: "2019",   label: "Global trade opens",   desc: "We start placing Bhadohi product in international markets, design houses, interior specifiers, contract buyers across Europe and the Gulf." },
  { year: "2022",   label: "Outreach systematised", desc: "We build the outreach methodology in-house for our own carpet business. It works. We start running it for other premium operators." },
  { year: "2024",   label: "SVNR Global launches",  desc: "Formalised as a full-service AI outreach infrastructure practice serving eight specialist verticals globally." },
];

/* ── page ── */

export default function About() {
  return (
    <main className="relative w-full bg-[#0A0A0B] font-sans selection:bg-white/20 selection:text-white">
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

      {/* ── HERO ── */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={VIDEOS.about}
          autoPlay loop muted playsInline
        />
        <div className="video-overlay absolute inset-0 z-[1]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-[10px] uppercase tracking-[0.35em] text-white/40 mb-6"
          >
            About SVNR Global
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-[2.1rem] sm:text-5xl md:text-7xl font-medium text-white leading-[1.1] tracking-tight mb-5 md:mb-6"
          >
            We build the systems that bring<br />
            the right <span className="shimmer-text">clients</span> to you.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-lg text-white/40 max-w-xl mx-auto"
          >
            Not campaigns. Not content. Autonomous outreach infrastructure, permanently running, continuously refined.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="mt-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-black text-xs uppercase tracking-[0.15em] font-medium hover:bg-white/90 transition-all"
            >
              Begin the conversation <ArrowRight size={13} />
            </Link>
            <Link
              to="/services"
              className="text-xs uppercase tracking-[0.15em] text-white/45 hover:text-white transition-colors"
            >
              Our services
            </Link>
          </motion.div>
        </div>

        {/* scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        >
          <div className="w-px h-10 bg-gradient-to-b from-white/0 to-white/30" />
          <span className="text-[9px] uppercase tracking-[0.3em] text-white/25">Scroll</span>
        </motion.div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="relative z-10 bg-[#0A0A0B] px-6 md:px-10 pt-14 md:pt-24 pb-10 md:pb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 border border-white/8 rounded-2xl overflow-hidden divide-x divide-y md:divide-y-0 divide-white/8 text-center md:text-left"
          >
            {stats.map((s) => (
              <div key={s.label} className="px-4 sm:px-8 py-6 sm:py-10 flex flex-col justify-between">
                <div className="text-2xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight mb-2 md:mb-3"><Counter value={s.value} duration={1.6} /></div>
                <div>
                  <div className="text-sm text-white/70 font-medium mb-1">{s.label}</div>
                  <div className="text-[10px] text-white/30 uppercase tracking-[0.15em]">{s.sub}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── ORIGIN STORY ── */}
      <section className="relative z-10 bg-[#0A0A0B] py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-5">Our origin</p>
            <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight leading-[1.15] mb-8">
              We understand these markets from the inside.
            </h2>
            <p className="text-white/55 leading-relaxed mb-6 text-lg">
              Our family has manufactured handmade rugs and carpets in Bhadohi, India for nearly a century. We know what a hand-knotted pile costs to produce, how a trade certification changes a buyer conversation in Cologne versus Dubai, and what it takes to build lasting relationships with interior designers who specify everything.
            </p>
            <p className="text-white/55 leading-relaxed">
              That fluency carries into every vertical we operate in. When we write outreach for a luxury rug house, a boutique PE firm, or a premium real estate principal, the prospect reads it as someone already inside their world, not a vendor who researched the category last week.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="space-y-0"
          >
            {timeline.map((t, i) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="flex gap-6 pb-8 last:pb-0"
              >
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-2 h-2 rounded-full bg-white/30 mt-1.5 shrink-0" />
                  {i < timeline.length - 1 && <div className="w-px flex-1 bg-white/8 mt-2" />}
                </div>
                <div className="pb-2">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-white/25 block mb-1">{t.year}</span>
                  <h3 className="text-white font-medium text-base mb-2">{t.label}</h3>
                  <p className="text-white/45 text-sm leading-relaxed">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PULLQUOTE ── */}
      <section className="relative z-10 bg-[#0A0A0B] py-14 md:py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="liquid-glass rounded-3xl px-5 sm:px-10 md:px-20 py-10 sm:py-14 md:py-20 text-center max-w-5xl mx-auto"
          >
            <p className="text-xl sm:text-2xl md:text-4xl font-medium text-white leading-[1.45] tracking-tight mb-6 md:mb-8">
              "The operators we work with do not run campaigns and hope.<br className="hidden md:block" />
              They run infrastructure, and close."
            </p>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/25">The SVNR philosophy</p>

            {/* Campaign vs Infrastructure: the compounding difference, drawn */}
            <div className="max-w-[560px] mx-auto mt-8">
              <svg viewBox="0 0 560 140" className="w-full h-auto" role="img" aria-label="A campaign spikes then ends; infrastructure compounds over time">
                <line x1="20" y1="120" x2="540" y2="120" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                <motion.path
                  d="M 20 120 C 70 40, 110 35, 150 60 C 190 85, 240 115, 300 120 L 540 120"
                  fill="none"
                  stroke="rgba(255,255,255,0.25)"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                />
                <motion.path
                  d="M 20 120 C 140 116, 240 104, 330 80 C 420 56, 490 36, 540 22"
                  fill="none"
                  stroke="#8b7dff"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                />
                <text x="305" y="135" fill="rgba(255,255,255,0.3)" fontSize="10" letterSpacing="1.5">CAMPAIGN ENDS</text>
                <text x="380" y="16" fill="#b49bff" fontSize="10" letterSpacing="1.5">INFRASTRUCTURE COMPOUNDS</text>
              </svg>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── WHAT WE BELIEVE ── */}
      <section className="relative z-10 bg-[#0A0A0B] py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 md:mb-16"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">What we believe</p>
            <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight max-w-2xl leading-snug">
              Six principles that define how we build for our clients.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.7 }}
                className="liquid-glass rounded-2xl p-8 card-3d"
              >
                <v.icon size={24} className="text-white/40 mb-5" strokeWidth={1.5} />
                <h3 className="text-white font-medium text-lg mb-3">{v.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GEO ENTITY SECTION ── */}
      <section className="relative z-10 bg-[#0A0A0B] py-16 md:py-20 px-6 border-t border-white/8">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">What SVNR Global is</p>
            <h2 className="text-3xl font-medium text-white tracking-tight mb-8">The definitive description</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { label: "Founded", value: "2019, New Delhi, India" },
              { label: "Category", value: "AI client acquisition infrastructure" },
              { label: "Clients served", value: "Premium B2B operators globally" },
              { label: "Markets covered", value: "UK, EU, UAE, Switzerland, Singapore, India" },
              { label: "Core service", value: "Bespoke outreach infrastructure, custom AI agents, enriched prospect databases, precision outreach sequences" },
              { label: "Sectors", value: "Luxury brands, private equity, premium real estate, wealth management, maritime, professional services" },
              { label: "Differentiation", value: "Every engagement is custom-built per client, no shared templates, no recycled agents, no generic dashboards" },
              { label: "Founder", value: "Hamza Omair, formerly in luxury rug manufacturing and international trade, Bhadohi, India" },
            ].map((item, i) => (
              <motion.div key={item.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="border-b border-white/8 pb-5">
                <p className="text-[10px] uppercase tracking-widest text-white/30 mb-1">{item.label}</p>
                <p className="text-white/70 text-sm leading-relaxed">{item.value}</p>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10">
            <Link to="/founder" className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors group">
              Meet the founder, Hamza Omair
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── VERTICALS ── */}
      <section className="relative z-10 bg-[#0A0A0B] pb-16 md:pb-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">Where we operate</p>
            <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">
              Eight specialist verticals. One methodology.
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {verticals.map((v, i) => (
              <motion.div
                key={v.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.6 }}
                className={`liquid-glass rounded-xl px-5 py-5 bg-gradient-to-b ${v.color}`}
              >
                <v.icon size={16} strokeWidth={1.5} className="text-white/30 mb-3" />
                <span className="text-[9px] text-white/20 block mb-2 uppercase tracking-[0.2em]">{v.n}</span>
                <span className="text-sm text-white/75 leading-snug font-medium">{v.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="relative z-10 bg-[#0A0A0B] pb-16 md:pb-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">How it works</p>
            <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">Three layers. One permanent system.</h2>
          </motion.div>

          {/* The three layers as a connected flow that loops */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 flex-wrap mb-12"
          >
            {[
              { n: "01", label: "Research", accent: "text-amber-400" },
              { n: "02", label: "Outreach", accent: "text-sky-400" },
              { n: "03", label: "Infrastructure", accent: "text-emerald-400" },
            ].map((s, i, arr) => (
              <span key={s.n} className="flex items-center gap-3">
                <span className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-1.5 text-[11px] text-white/60">
                  <span className={`font-medium ${s.accent}`}>{s.n}</span> {s.label}
                </span>
                {i < arr.length - 1 && <ArrowRight size={12} className="text-white/25" />}
              </span>
            ))}
            <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-white/30">
              <RefreshCw size={11} /> runs continuously
            </span>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                n: "01",
                label: "Research",
                accent: "text-amber-400",
                body: "Every target is identified by name, role, and timing signal, before a single message is written. We know your market before we move in it. ICP workshops, buyer signal mapping, and account prioritisation complete this phase.",
              },
              {
                n: "02",
                label: "Outreach",
                accent: "text-sky-400",
                body: "Precision sequences deployed across the channels your buyers actually use. Every message is written as if you wrote it yourself, no templates, no noise. Multi-channel, fully branded, continuously A/B tested.",
              },
              {
                n: "03",
                label: "Infrastructure",
                accent: "text-emerald-400",
                body: "Unlike a campaign, the system does not stop. It runs continuously, refines automatically, and surfaces warm conversations to your team every month, while you focus on closing.",
              },
            ].map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.7 }}
                className="liquid-glass rounded-2xl p-8"
              >
                <div className={`text-[11px] uppercase tracking-[0.25em] font-medium mb-2 ${p.accent}`}>{p.n}</div>
                <h3 className="text-2xl font-medium text-white mb-4">{p.label}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative z-10 bg-[#0A0A0B] pb-16 md:pb-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="liquid-glass rounded-3xl px-6 md:px-16 py-10 md:py-20 flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-end justify-between"
          >
            <div className="max-w-xl">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/25 mb-5">Start here</p>
              <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight leading-tight mb-6">
                If acquisition is the constraint,<br />this is where it ends.
              </h2>
              <p className="text-white/45 leading-relaxed text-lg">
                We work with a small number of operators at any one time. Every engagement is built specifically for your market, your buyer, and your proof.
              </p>
            </div>
            <div className="flex flex-col gap-4 shrink-0 items-start md:items-end">
              <a
                href="mailto:contact@svnrglobal.com"
                className="text-sm text-white/40 hover:text-white transition-colors"
              >
                contact@svnrglobal.com
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-all whitespace-nowrap"
              >
                Begin the conversation <ArrowRight size={14} />
              </Link>
              <Link
                to="/compare"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/15 text-white/55 text-sm hover:border-white/35 hover:text-white transition-all whitespace-nowrap"
              >
                SVNR vs Alternatives <ArrowRight size={13} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="relative z-10 px-6 md:px-10 pb-10">
        <div className="max-w-7xl mx-auto">
          <Footer />
        </div>
      </div>
    </main>
  );
}
