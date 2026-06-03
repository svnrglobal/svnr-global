import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import { VIDEOS, SERVICES, SECTORS } from "../data/content";
import SEO from "../components/SEO";

const HOME_SCHEMA = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SVNR Global",
    "url": "https://svnrglobal.com",
    "logo": "https://svnrglobal.com/svnr-logo.svg",
    "description": "SVNR Global builds bespoke AI-powered client acquisition systems and outreach infrastructure for premium operators — luxury brands, private equity, real estate, and high-ticket B2B.",
    "foundingDate": "2019",
    "address": { "@type": "PostalAddress", "addressLocality": "New Delhi", "addressCountry": "IN" },
    "contactPoint": { "@type": "ContactPoint", "email": "hamza@svnrglobal.com", "contactType": "sales" },
    "sameAs": [
      "https://www.instagram.com/svnr.lab",
      "https://in.pinterest.com/svnrglobal/",
      "https://in.linkedin.com/company/svnrglobal"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "SVNR Global",
    "url": "https://svnrglobal.com"
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "SVNR Global Client Testimonials",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Review",
          "reviewBody": "Thirteen qualified B2B enquiries in under two weeks. We had tried trade fairs for years and never moved this fast into a new market.",
          "author": { "@type": "Person", "name": "Director, German Carpet House" },
          "itemReviewed": { "@type": "Organization", "name": "SVNR Global", "url": "https://svnrglobal.com" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Review",
          "reviewBody": "A qualified principal replied in fourteen minutes. The message read like it came from someone who understood the off-market world we operate in.",
          "author": { "@type": "Person", "name": "Principal, Zurich Real Estate Firm" },
          "itemReviewed": { "@type": "Organization", "name": "SVNR Global", "url": "https://svnrglobal.com" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Review",
          "reviewBody": "They mapped 500 UHNW profiles before we sent a single message. The quality of intelligence was unlike anything we had built internally.",
          "author": { "@type": "Person", "name": "Managing Partner, Wealth Boutique" },
          "itemReviewed": { "@type": "Organization", "name": "SVNR Global", "url": "https://svnrglobal.com" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
        }
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is AI outreach infrastructure?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI outreach infrastructure is a system of automated, AI-driven processes that identify ideal clients, craft personalised outreach sequences, qualify leads, and route them into a sales pipeline — without relying on inbound marketing, paid ads, or referrals."
        }
      },
      {
        "@type": "Question",
        "name": "How does SVNR Global generate clients for premium brands?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SVNR Global combines deep sector research, AI-enriched prospect data, and hyper-personalised multi-channel outreach to connect premium operators directly with their ideal buyers, investors, or partners — typically within 30–60 days of engagement."
        }
      },
      {
        "@type": "Question",
        "name": "What industries does SVNR Global serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SVNR Global specialises in luxury rugs and home textiles, premium real estate, private equity and family offices, B2B luxury brands, wealth management boutiques, maritime and logistics, high-ticket e-commerce, and professional services firms."
        }
      },
      {
        "@type": "Question",
        "name": "Is SVNR Global's client acquisition service better than running ads?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For high-ticket B2B and premium sectors, outbound acquisition consistently outperforms paid advertising because it targets decision-makers directly with personalised messaging, rather than waiting for inbound traffic. SVNR Global's AI systems compress the research and outreach cycle that would take a sales team months to execute manually."
        }
      },
      {
        "@type": "Question",
        "name": "How much does it cost to hire SVNR Global?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SVNR Global works on a bespoke engagement model. Pricing depends on sector, campaign scope, and infrastructure complexity. Book a call to receive a tailored proposal for your business."
        }
      },
      {
        "@type": "Question",
        "name": "Is SVNR Global a lead generation agency?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SVNR Global operates as a B2B client acquisition agency, which goes beyond traditional lead generation. Rather than delivering raw lists or unqualified leads, SVNR builds the full outreach infrastructure — research, messaging, sequencing, and follow-up — and delivers warm, qualified conversations with decision-makers directly to the client."
        }
      },
      {
        "@type": "Question",
        "name": "Does SVNR Global work with companies outside India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. SVNR Global is headquartered in New Delhi but serves clients across Europe, North America, the Gulf, and Southeast Asia. Outreach is deployed in English and adapted for local market context. Geographic location of the client does not restrict the markets SVNR can target."
        }
      },
      {
        "@type": "Question",
        "name": "How is SVNR Global different from a cold email agency?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A cold email agency sends templated sequences at volume. SVNR builds sector-specific outreach infrastructure: ICP definition, prospect research using 50+ data signals, individually crafted messaging, multi-channel deployment across email and LinkedIn, and continuous optimisation. The result is a permanent acquisition asset, not a one-off campaign."
        }
      }
    ]
  }
];

const TECH_LOGOS = [
  { name: "Google", logo: "/logos/google.png" },
  { name: "OpenAI", logo: "/logos/openai.webp" },
  { name: "Anthropic", logo: "/logos/anthropic.png" },
  { name: "Make", logo: "/logos/make.webp" },
  { name: "Airtable", logo: "/logos/airtable.webp" },
  { name: "Slack", logo: "/logos/slack.png" },
  { name: "HubSpot", logo: "/logos/hubspot.png" },
  { name: "Apollo", logo: "/logos/apollo.webp" },
  { name: "Notion", logo: "/logos/notion.png" },
  { name: "Zapier", logo: "/logos/zapier.png" },
  { name: "n8n", logo: "/logos/n8n.webp" },
  { name: "Clay", logo: "/logos/clay.avif" },
  { name: "Twilio", logo: "/logos/twilio.png" },
  { name: "Perplexity", logo: "/logos/perplexity.webp" },
  { name: "Mistral", logo: "/logos/mistral.png" },
  { name: "Salesforce", logo: "/logos/salesforce.png" },
];
import FeatureCard from "../components/FeatureCard";
import Footer from "../components/Footer";

const RESULTS = [
  { metric: "312%", label: "Increase in average order value", sector: "High-Ticket E-commerce" },
  { metric: "78%", label: "Increase in qualified trade enquiries", sector: "B2B Luxury Brand" },
  { metric: "14 min", label: "Time to first qualified principal reply", sector: "Premium Real Estate" },
  { metric: "13", label: "Qualified B2B enquiries in 14 days", sector: "Luxury Rugs" },
  { metric: "<60s", label: "AI receptionist response time", sector: "All Sectors" },
  { metric: "8", label: "Markets mapped per client", sector: "Average" },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const [videoReady, setVideoReady] = useState(false);

  return (
    <main className="relative w-full min-h-screen bg-[#0A0A0B] font-sans selection:bg-white/20 selection:text-white">
      <SEO
        title="SVNR Global — AI Client Acquisition & Outreach Infrastructure for Premium Operators"
        description="SVNR Global builds bespoke AI-powered outreach systems that bring the right clients to luxury brands, private equity firms, premium real estate, and high-ticket B2B operators. No ads. No referrals. Just results."
        canonical="/"
        schema={HOME_SCHEMA}
      />
      {/* HERO */}
      <section ref={heroRef} className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
        <video
          className="fixed inset-0 w-full h-full object-cover z-0"
          src={VIDEOS.home}
          autoPlay
          loop
          muted
          playsInline
          onPlaying={() => setVideoReady(true)}
          onCanPlay={() => setVideoReady(true)}
        />
        <div className="video-overlay fixed inset-0 z-[1]" />
        {/* Dark intro overlay — fades out when video plays */}
        <motion.div
          className="fixed inset-0 z-[5] bg-[#0A0A0B]"
          initial={{ opacity: 1 }}
          animate={{ opacity: videoReady ? 0 : 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ pointerEvents: "none" }}
        />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="text-[2.1rem] sm:text-5xl md:text-7xl lg:text-8xl font-medium text-white leading-[1.1] tracking-tight mb-6 md:mb-8"
          >
            We build the systems that bring the right{" "}
            <span className="shimmer-text">clients</span> to you.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.35 }}
            className="text-lg text-white/50 max-w-xl mx-auto mb-10"
          >
            Not campaigns. Not content. Infrastructure that runs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.55 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-full bg-white text-black text-sm font-medium tracking-wide hover:bg-white/90 transition-all"
            >
              Book a Consultation
            </Link>
            <Link
              to="/services"
              className="px-8 py-3.5 rounded-full border border-white/20 text-white text-sm tracking-wide hover:border-white/50 transition-all flex items-center justify-center gap-2"
            >
              View Systems <ArrowRight size={14} />
            </Link>
            <Link
              to="/compare"
              className="px-8 py-3.5 rounded-full border border-white/10 text-white/60 text-sm tracking-wide hover:border-white/30 hover:text-white transition-all flex items-center justify-center gap-2"
            >
              SVNR vs Alternatives <ArrowRight size={14} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex items-center justify-center gap-5 sm:gap-8 mt-10 md:mt-16 flex-wrap"
          >
            {[
              { value: "312%", label: "ROI ceiling" },
              { value: "78%", label: "Enquiry lift" },
              { value: "<60s", label: "AI response" },
              { value: "8", label: "Sector verticals" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-medium text-white stat-number">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-widest text-white/30 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <ChevronDown size={20} className="text-white/30 animate-bounce" />
        </motion.div>
      </section>

      {/* SEO: keyword-rich intro — visible to crawlers and readers */}
      <section className="relative z-10 bg-[#0A0A0B] py-10 md:py-14 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/45 text-sm md:text-base leading-relaxed"
          >
            SVNR Global is a <strong className="text-white/70 font-normal">B2B client acquisition agency</strong> based in New Delhi, India — operating globally across luxury, real estate, private equity, and high-ticket B2B. We design and run <strong className="text-white/70 font-normal">AI-powered outbound systems</strong> that identify ideal buyers and decision-makers, build multi-channel outreach sequences, and deliver warm, qualified conversations to premium operators — without paid advertising, content marketing, or referral dependency.
          </motion.p>
        </div>
      </section>

      {/* INFRASTRUCTURE LOGOS — auto-scroll marquee */}
      <section className="relative z-10 bg-[#0A0A0B] py-16 overflow-hidden">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[10px] uppercase tracking-[0.3em] text-white/30 text-center mb-10 px-6"
        >
          Our AI systems are built on enterprise infrastructure from
        </motion.p>
        <div className="marquee-wrapper relative" style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}>
          <div className="marquee-track flex items-center gap-12">
            {[...TECH_LOGOS, ...TECH_LOGOS].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2 flex-shrink-0 opacity-40 hover:opacity-90 transition-opacity duration-300 group"
              >
                <img
                  src={item.logo}
                  alt={item.name}
                  className="h-8 w-auto object-contain"
                  style={{ filter: "brightness(0) invert(1)" }}
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />
                <span className="text-[9px] uppercase tracking-widest text-white/40 group-hover:text-white/70 transition-colors whitespace-nowrap">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative z-10 bg-[#0A0A0B] py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">The Systems</p>
            <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight">
              Eight AI systems.<br />One operating infrastructure.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {SERVICES.map((svc, i) => (
              <Link key={svc.slug} to={`/services/${svc.slug}`} className="block">
                <FeatureCard
                  title={svc.label}
                  description={svc.summary}
                  icon={svc.icon}
                  gradient={svc.gradient}
                  delay={i * 0.07}
                  number={svc.number}
                />
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"
            >
              View all systems <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="relative z-10 bg-[#0A0A0B] py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">Proof</p>
            <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight">
              The system is the differentiator.<br />The results follow.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {RESULTS.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="liquid-glass rounded-2xl p-7"
              >
                <div className="text-4xl font-medium text-white mb-2 stat-number">{r.metric}</div>
                <p className="text-sm text-white/60 mb-3">{r.label}</p>
                <span className="text-[10px] uppercase tracking-widest text-white/30">{r.sector}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="relative z-10 bg-[#0A0A0B] py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] uppercase tracking-[0.3em] text-white/30 text-center mb-12"
          >
            What clients say
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "Thirteen qualified B2B enquiries in under two weeks. We had tried trade fairs for years and never moved this fast into a new market.",
                author: "Director",
                company: "German Carpet House",
                sector: "Luxury Rugs & Home Textiles",
                gradient: "linear-gradient(137deg, #F5A623 0%, #FFD200 100%)",
              },
              {
                quote: "A qualified principal replied in fourteen minutes. The message read like it came from someone who understood the off-market world we operate in.",
                author: "Principal",
                company: "Zurich Real Estate Firm",
                sector: "Premium Real Estate",
                gradient: "linear-gradient(137deg, #0071E3 0%, #34C759 100%)",
              },
              {
                quote: "They mapped 500 UHNW profiles before we sent a single message. The quality of intelligence was unlike anything we had built internally.",
                author: "Managing Partner",
                company: "Wealth Boutique",
                sector: "Wealth Management",
                gradient: "linear-gradient(137deg, #11998e 0%, #38ef7d 100%)",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="liquid-glass rounded-3xl p-8 flex flex-col"
              >
                <div className="h-0.5 w-12 mb-6 rounded-full" style={{ background: t.gradient }} />
                <p className="text-white/70 text-sm leading-relaxed italic flex-1 mb-6">"{t.quote}"</p>
                <div>
                  <p className="text-white text-sm font-medium">{t.author}</p>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest mt-0.5">{t.company} · {t.sector}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTORS */}
      <section className="relative z-10 bg-[#0A0A0B] py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">Industries</p>
            <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight">
              We operate in eight industries.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {SECTORS.map((s, i) => (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  to={`/sectors/${s.slug}`}
                  className="flex items-center gap-6 p-6 rounded-2xl border border-white/8 hover:border-white/20 transition-all group liquid-glass"
                >
                  <span className="text-[10px] uppercase tracking-widest text-white/30 w-6">{s.number}</span>
                  <div className="flex-1">
                    <h3 className="text-white text-sm font-medium mb-1">{s.label}</h3>
                    <p className="text-xs text-white/40">{s.summary.slice(0, 80)}…</p>
                  </div>
                  <ArrowRight size={14} className="text-white/20 group-hover:text-white/60 transition-colors" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 bg-[#0A0A0B] py-16 md:py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-6">Get Started</p>
            <h2 className="text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight">
              If acquisition is the constraint,<br />this is where it ends.
            </h2>
            <p className="text-white/50 mb-10">
              We work with a small number of operators at any one time. Every engagement is built specifically for your market.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-white text-black text-sm font-medium tracking-wide hover:bg-white/90 transition-all"
            >
              Book a Consultation <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      <div className="relative z-10 px-6 pb-10 max-w-7xl mx-auto">
        <Footer />
      </div>
    </main>
  );
}
