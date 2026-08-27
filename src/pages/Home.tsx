import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import { SERVICES, SECTORS } from "../data/content";
import SEO from "../components/SEO";
import { SECTOR_MINI } from "../components/minis";
import FaqSection from "../components/FaqSection";
import PrismHero from "../components/PrismHero";
import SectorBlock from "../components/SectorBlock";
import PipelineBoard from "../components/mocks/PipelineBoard";
import ActivityFeed from "../components/mocks/ActivityFeed";
import ResultsReadout from "../components/mocks/ResultsReadout";
import MessageThread from "../components/mocks/MessageThread";
import MissionControl from "../components/MissionControl";
import RotatingWord from "../components/RotatingWord";

const HOME_FAQS = [
  { q: "What is AI outreach infrastructure?", a: "AI outreach infrastructure is a system of automated, AI-driven processes that identify ideal clients, craft personalised outreach sequences, qualify leads, and route them into a sales pipeline, without relying on inbound marketing, paid ads, or referrals." },
  { q: "How does SVNR Global generate clients for premium brands?", a: "SVNR Global combines deep sector research, AI-enriched prospect data, and hyper-personalised multi-channel outreach to connect premium operators directly with their ideal buyers, investors, or partners, typically within 30–60 days of engagement." },
  { q: "What industries does SVNR Global serve?", a: "SVNR Global specialises in luxury rugs and home textiles, premium real estate, private equity and family offices, B2B luxury brands, wealth management boutiques, maritime and logistics, high-ticket e-commerce, and professional services firms." },
  { q: "Is SVNR Global's client acquisition service better than running ads?", a: "For high-ticket B2B and premium sectors, outbound acquisition consistently outperforms paid advertising because it targets decision-makers directly with personalised messaging, rather than waiting for inbound traffic. SVNR Global's AI systems compress the research and outreach cycle that would take a sales team months to execute manually." },
  { q: "How much does it cost to hire SVNR Global?", a: "SVNR Global works on a bespoke engagement model. Pricing depends on sector, campaign scope, and infrastructure complexity. Book a call to receive a tailored proposal for your business." },
  { q: "Is SVNR Global a lead generation agency?", a: "SVNR Global operates as a B2B client acquisition agency, which goes beyond traditional lead generation. Rather than delivering raw lists or unqualified leads, SVNR builds the full outreach infrastructure — research, messaging, sequencing, and follow-up — and delivers warm, qualified conversations with decision-makers directly to the client." },
  { q: "Does SVNR Global work with companies outside India?", a: "Yes. SVNR Global is headquartered in New Delhi but serves clients across Europe, North America, the Gulf, and Southeast Asia. Outreach is deployed in English and adapted for local market context." },
  { q: "How is SVNR Global different from a cold email agency?", a: "A cold email agency sends templated sequences at volume. SVNR builds sector-specific outreach infrastructure: ICP definition, prospect research using 50+ data signals, individually crafted messaging, multi-channel deployment across email and LinkedIn, and continuous optimisation. The result is a permanent acquisition asset, not a one-off campaign." },
];

// Organization + WebSite now live as a global @graph in index.html (present pre-JS on
// every page). Home keeps the page-specific ProfessionalService + FAQ schema.
const HOME_SCHEMA = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "SVNR Global",
    "url": "https://svnrglobal.com",
    "description": "SVNR Global builds bespoke AI-powered client acquisition systems for luxury brands, private equity, premium real estate, and high-ticket B2B operators globally.",
    "priceRange": "$$$$",
    "address": { "@type": "PostalAddress", "addressLocality": "New Delhi", "addressCountry": "IN" },
    "areaServed": ["GB", "DE", "FR", "AE", "CH", "SG", "IN", "US"],
    "contactPoint": { "@type": "ContactPoint", "email": "contact@svnrglobal.com", "contactType": "sales" },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Client Acquisition Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Client Acquisition", "url": "https://svnrglobal.com/services/client-acquisition/" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Receptionist", "url": "https://svnrglobal.com/services/ai-receptionist/" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Intelligence Research", "url": "https://svnrglobal.com/services/intelligence-research/" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brand Outreach", "url": "https://svnrglobal.com/services/brand-outreach/" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Revenue Operations", "url": "https://svnrglobal.com/services/revenue-operations/" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Deal Flow & Investor Relations", "url": "https://svnrglobal.com/services/dealflow-investor/" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Channel Partnership", "url": "https://svnrglobal.com/services/channel-partnership/" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sector Workflows", "url": "https://svnrglobal.com/services/sector-workflows/" } }
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": HOME_FAQS.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
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
import Counter from "../components/Counter";


// Hero right-side lines (Vercel-style): a mono-caps statement that expands with a
// lowercase continuation on hover. Three lines describe what the infrastructure is
// FOR, what it does, and how — flanking the mark.
const HERO_LINES = [
  {
    head: "For premium operators",
    body: "in luxury, real estate, private equity and high-ticket B2B — where a single deal can change the year.",
  },
  {
    head: "To open real conversations",
    body: "with the exact buyers, investors and partners worth their time — not lists, not leads.",
  },
  {
    head: "Run by autonomous agents",
    body: "that research, personalise and follow up across every channel, around the clock.",
  },
];


// Bento grid layout for the Industries section — alternating 2/1 column spans.
const BENTO_SECTORS: { slug: string; span: 1 | 2; proof: string }[] = [
  { slug: "luxury-rugs-home-textiles", span: 2, proof: "13 qualified B2B enquiries in 14 days." },
  { slug: "premium-real-estate", span: 1, proof: "14-minute time to first principal reply." },
  { slug: "private-equity-family-offices", span: 1, proof: "75% of deal flow captured pre-market." },
  { slug: "b2b-luxury-brands", span: 2, proof: "78% increase in qualified trade enquiries." },
  { slug: "wealth-management", span: 2, proof: "500 UHNW profiles mapped before first message." },
  { slug: "high-ticket-ecommerce", span: 1, proof: "312% increase in average order value." },
  { slug: "maritime-logistics", span: 1, proof: "Direct access to decision-makers across global trade." },
  { slug: "professional-services", span: 2, proof: "New mandates without referral or pitch dependency." },
];

// ─── Sector-specific mini animations ───────────────────────────────────────

function BentoCard({ b, s, i }: { b: { slug: string; span: 1 | 2; proof: string }; s: { slug: string; number: string; label: string; [key: string]: unknown }; i: number }) {
  const [lit, setLit] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, transition: { duration: 0.22, ease: "easeOut" } }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className={b.span === 2 ? "md:col-span-2" : "md:col-span-1"}
    >
      <Link
        to={`/sectors/${s.slug}`}
        onMouseEnter={() => setLit(true)}
        onMouseLeave={() => setLit(false)}
        className="group relative flex flex-col justify-end h-full min-h-[200px] md:min-h-0 rounded-2xl border border-white/8 bg-white/[0.015] hover:border-white/[0.12] hover:bg-white/[0.025] transition-colors duration-300 overflow-hidden p-7"
      >
        {/* number top-left */}
        <span
          className="absolute top-6 left-7 text-[10px] tracking-widest text-white/20 tabular-nums transition-colors duration-300 group-hover:text-white/40"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {s.number}
        </span>
        {/* arrow top-right */}
        <ArrowRight
          size={14}
          className="absolute top-6 right-7 text-white/20 group-hover:text-white/70 group-hover:translate-x-1 transition-all duration-300"
        />
        {/* sector-specific animation */}
        {SECTOR_MINI[s.slug]?.(lit)}
        {/* text bottom-left */}
        <div className="relative z-10 mt-auto">
          <h3 className="text-white text-lg md:text-xl font-medium tracking-tight mb-1.5">{s.label}</h3>
          <p className="text-white/40 text-sm leading-snug">{b.proof}</p>
        </div>
      </Link>
    </motion.div>
  );
}

const SECTOR_BLOCKS = [
  {
    eyebrow: "Luxury Rugs & Home Textiles",
    headline: "Book qualified B2B meetings while you sleep.",
    subhead: "13 qualified B2B enquiries in 14 days — luxury rugs.",
    reverse: false,
    tabs: [
      {
        label: "ICP & A/D prospect research",
        url: "svnr.app/pipeline",
        panel: (
          <PipelineBoard
            rows={[
              { name: "Atelier Renz", loc: "Zürich", col: 3, status: "HOT" },
              { name: "Studio Frei", loc: "München", col: 2, status: "SENT" },
              { name: "Maison Libert", loc: "Paris", col: 3, status: "REPLY" },
              { name: "Kern & Co.", loc: "Vienna", col: 1, status: "OUT" },
              { name: "De Vries Int.", loc: "Amsterdam", col: 3, status: "MEET" },
              { name: "Licht Studio", loc: "Hamburg", col: 0, status: "NEW" },
            ]}
            footerLeft="13 qualified · 14 days"
            footerRight="Luxury Rugs · DE"
          />
        ),
      },
      {
        label: "Multi-channel outreach sequences",
        url: "svnr.app/outreach",
        panel: (
          <MessageThread
            to="Erik van Houten"
            loc="Amsterdam, NL"
            subject="Bespoke rug programme — Maison van Houten"
            body={[
              "Hi Erik, I came across your showroom's recent expansion into bespoke interior contracts.",
              "We work with design houses across the Benelux sourcing hand-knotted pieces directly from Jaipur — no middleman, full exclusivity.",
              "Would a short call this week make sense to explore a wholesale arrangement?",
            ]}
            touches={["Touch 1 · Email", "Touch 2 · LinkedIn", "Touch 3 · Follow-up"]}
            status="QUALIFIED"
          />
        ),
      },
      {
        label: "AI personalisation at scale",
        url: "svnr.app/agent",
        panel: (
          <ActivityFeed
            lines={[
              { time: "08:12:04", event: "Prospect profile built", detail: "Interior buyer · Zürich · CHF 2M AUM", dim: false },
              { time: "08:12:09", event: "Signal detected", detail: "Recent renovation project · Archello listing", dim: false },
              { time: "08:12:15", event: "Outreach personalised", detail: "Bespoke framing · hand-knotted reference", dim: false },
              { time: "08:12:18", event: "Sequence deployed", detail: "Email ch.1 · LinkedIn note queued", dim: false },
              { time: "08:24:31", event: "Reply received", detail: "Buyer interested · 12 min response", dim: false },
              { time: "08:24:33", event: "Next prospect loaded", detail: "Munich interior studio · mapping", dim: true },
            ]}
            footer="Personalised at scale · 0 manual steps"
          />
        ),
      },
      {
        label: "Qualified handoff to your team",
        url: "svnr.app/results",
        panel: (
          <ResultsReadout
            metricLabel="Qualified leads · Luxury Rugs · EU"
            metric="13"
            metricSuffix="in 14 days"
            bars={[2, 3, 2, 4, 3, 5, 4, 6, 5, 7, 8, 13]}
            barsLabel="Daily qualified handoffs"
            secondary={[
              { label: "Avg. reply time", value: "22 min" },
              { label: "Markets", value: "4" },
              { label: "Close rate", value: "31%" },
            ]}
          />
        ),
      },
    ],
  },
  {
    eyebrow: "Premium Real Estate",
    headline: "Reach principal-level buyers before they reach the portals.",
    subhead: "14 min to first qualified principal reply — premium real estate.",
    reverse: true,
    tabs: [
      {
        label: "HNW & institutional investor mapping",
        url: "svnr.app/pipeline",
        panel: (
          <PipelineBoard
            rows={[
              { name: "R. Hoffmann", loc: "Geneva", col: 3, status: "MEET" },
              { name: "Alp Capital", loc: "Zürich", col: 2, status: "REPLY" },
              { name: "T. Vandermeer", loc: "Brussels", col: 3, status: "HOT" },
              { name: "Riva Partners", loc: "Milan", col: 1, status: "OUT" },
              { name: "M. Al-Rashid", loc: "Dubai", col: 2, status: "SENT" },
              { name: "K. Schreiber", loc: "Frankfurt", col: 0, status: "NEW" },
            ]}
            footerLeft="8 principals mapped · 6 engaged"
            footerRight="Premium RE · EU+GCC"
          />
        ),
      },
      {
        label: "Off-market relationship outreach",
        url: "svnr.app/agent-feed",
        panel: (
          <ActivityFeed
            lines={[
              { time: "09:41:03", event: "Principal profile enriched", detail: "Zurich RE / CHF 80M AUM", dim: false },
              { time: "09:41:11", event: "Outreach drafted", detail: "off-market framing · 3 touch", dim: false },
              { time: "09:41:14", event: "Sequence deployed", detail: "Email ch.1 sent", dim: false },
              { time: "09:55:22", event: "Reply received", detail: "Principal · 14 min response", dim: false },
              { time: "09:55:24", event: "Lead qualified", detail: "Handoff triggered → CRM", dim: false },
              { time: "10:02:07", event: "Next prospect loaded", detail: "HNW mapping · Geneva", dim: true },
            ]}
            footer="Running 24 / 7 · 0 manual steps"
          />
        ),
      },
      {
        label: "Principal-level message craft",
        url: "svnr.app/outreach",
        panel: (
          <MessageThread
            to="Thomas Vandermeer"
            loc="Brussels, BE"
            subject="Off-market residential · Brussels — private allocation"
            body={[
              "Thomas, I noticed your family office completed two trophy acquisitions in Q3 — the Uccle villa and the Antwerp loft.",
              "We're running a private allocation round for a 320 sqm off-market residence in Ixelles — no portal exposure, direct vendor.",
              "Happy to send the brief under NDA if timing aligns.",
            ]}
            touches={["Touch 1 · Email", "Touch 2 · WhatsApp", "Touch 3 · LinkedIn"]}
            status="HOT"
          />
        ),
      },
      {
        label: "AI receptionist for inbound",
        url: "svnr.app/results",
        panel: (
          <ResultsReadout
            metricLabel="Time to first qualified reply · Premium RE"
            metric="14 min"
            metricSuffix="avg response"
            bars={[38, 45, 42, 36, 30, 28, 22, 20, 18, 16, 15, 14]}
            barsLabel="Reply time trend (minutes)"
            secondary={[
              { label: "Principals reached", value: "24" },
              { label: "Qualified", value: "8" },
              { label: "Inbound handled", value: "100%" },
            ]}
          />
        ),
      },
    ],
  },
  {
    eyebrow: "High-Ticket E-commerce",
    headline: "Turn a D2C product into a B2B distribution machine.",
    subhead: "312% increase in average order value — high-ticket e-commerce.",
    reverse: false,
    tabs: [
      {
        label: "Wholesale & trade buyer ICP build",
        url: "svnr.app/pipeline",
        panel: (
          <PipelineBoard
            rows={[
              { name: "Nordvik Supply", loc: "Stockholm", col: 3, status: "MEET" },
              { name: "Prestige Trade", loc: "London", col: 2, status: "REPLY" },
              { name: "Maison Depot", loc: "Lyon", col: 3, status: "HOT" },
              { name: "Balt & Co.", loc: "Copenhagen", col: 1, status: "OUT" },
              { name: "Valore Group", loc: "Milan", col: 2, status: "SENT" },
              { name: "Kroft Retail", loc: "Berlin", col: 0, status: "NEW" },
            ]}
            footerLeft="18 trade buyers · 6 weeks"
            footerRight="E-comm · EU"
          />
        ),
      },
      {
        label: "Multi-channel distributor outreach",
        url: "svnr.app/agent-feed",
        panel: (
          <ActivityFeed
            lines={[
              { time: "10:05:11", event: "Distributor ICP matched", detail: "Nordvik Supply · Stockholm · B2B tier 1", dim: false },
              { time: "10:05:18", event: "Outreach sequence built", detail: "Email + LinkedIn · 4 touch", dim: false },
              { time: "10:05:22", event: "Personalisation applied", detail: "Recent SKU expansion signal used", dim: false },
              { time: "10:05:25", event: "Sequence deployed", detail: "ch.1 email sent · 09:00 local", dim: false },
              { time: "10:19:44", event: "Reply received", detail: "Buyer requesting catalogue + MOQ", dim: false },
              { time: "10:19:47", event: "Next distributor loaded", detail: "Prestige Trade · London", dim: true },
            ]}
            footer="Multi-channel · automated follow-up"
          />
        ),
      },
      {
        label: "AI-personalised trade proposals",
        url: "svnr.app/outreach",
        panel: (
          <MessageThread
            to="Lars Eriksson"
            loc="Stockholm, SE"
            subject="Wholesale partnership — premium skincare · Nordvik"
            body={[
              "Lars, Nordvik's recent expansion into premium wellness caught our eye — specifically the Östermalm pop-up in March.",
              "We work with a London-based high-ticket skincare brand doing €4M D2C — now opening B2B. Average retail margin of 58%.",
              "Can I send over the trade deck and a sample set this week?",
            ]}
            touches={["Touch 1 · Email", "Touch 2 · LinkedIn", "Touch 3 · Email follow-up", "Touch 4 · LinkedIn note"]}
            status="QUALIFIED"
          />
        ),
      },
      {
        label: "Partner activation programme",
        url: "svnr.app/results",
        panel: (
          <ResultsReadout
            metricLabel="Avg. Order Value · B2B Channel"
            metric="312%"
            metricSuffix="increase"
            bars={[18, 22, 19, 27, 30, 26, 35, 30, 38, 34, 41, 30]}
            barsLabel="Monthly wholesale leads"
            secondary={[
              { label: "Trade buyers", value: "41%" },
              { label: "Leads / mo", value: "30+" },
              { label: "Engagement", value: "6 wks" },
            ]}
          />
        ),
      },
    ],
  },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  // which hero line is hovered → lights the matching region of the mark
  const [hoverLine, setHoverLine] = useState<number | null>(null);

  return (
    <main className="relative w-full min-h-screen bg-black font-sans selection:bg-white/20 selection:text-white">
      <SEO
        title="SVNR Global — AI Client Acquisition & Outreach Infrastructure for Premium Operators"
        description="SVNR Global builds bespoke AI-powered outreach systems that bring the right clients to luxury brands, private equity firms, premium real estate, and high-ticket B2B operators. No ads. No referrals. Just results."
        canonical="/"
        schema={HOME_SCHEMA}
      />
      {/* HERO — Vercel-style: headline left · mark centered · expandable lines right */}
      <section ref={heroRef} className="relative w-full min-h-screen flex items-center overflow-hidden pt-28 pb-20">
        {/* centered mark — focal point, sits between the two text columns (desktop) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.3, delay: 0.3 }}
          style={{ opacity: heroOpacity }}
          className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(46vw,560px)] aspect-square z-0 pointer-events-auto"
        >
          <PrismHero className="absolute inset-0" markSize={360} highlight={hoverLine} />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 items-center gap-y-8 gap-x-8"
        >
          {/* LEFT — headline + CTAs */}
          <div className="lg:col-span-5 text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="text-[2.75rem] sm:text-6xl lg:text-[4.25rem] font-medium text-white leading-[1.03] tracking-tightest"
            >
              The agent-native way to run ambitious <RotatingWord words={["businesses", "brands", "operations"]} />.
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-9 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <Link to="/contact" className="btn-primary">
                Book a consultation <ArrowRight size={14} />
              </Link>
              <Link to="/services" className="btn-ghost">
                View systems
              </Link>
            </motion.div>
          </div>

          {/* CENTER — spacer the desktop mark sits over; in-flow mark on mobile */}
          <div className="lg:col-span-3 flex justify-center">
            <div className="relative w-[min(78vw,340px)] aspect-square lg:hidden">
              <PrismHero className="absolute inset-0" markSize={240} highlight={hoverLine} />
            </div>
          </div>

          {/* RIGHT — three hover-expand statements */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.62 }}
            className="lg:col-span-4 lg:justify-self-end w-full max-w-sm mx-auto lg:mx-0 flex flex-col gap-4 text-center lg:text-left"
          >
            {HERO_LINES.map((l, i) => (
              <div
                key={l.head}
                className="group cursor-default"
                onMouseEnter={() => setHoverLine(i)}
                onMouseLeave={() => setHoverLine(null)}
                onFocus={() => setHoverLine(i)}
                onBlur={() => setHoverLine(null)}
                tabIndex={0}
              >
                <motion.p
                  className="eyebrow"
                  animate={{
                    color: hoverLine === i ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.38)",
                    textShadow: hoverLine === i
                      ? "0 0 20px rgba(255,255,255,0.45), 0 0 44px rgba(255,255,255,0.18)"
                      : "0 0 0px rgba(255,255,255,0)",
                  }}
                  transition={{ duration: 0.65, ease: "easeOut" }}
                >
                  {l.head}
                </motion.p>
                <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out group-hover:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <p className="pt-2 text-sm leading-relaxed text-white/45">{l.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 lg:hidden"
        >
          <ChevronDown size={20} className="text-white/30 animate-bounce" />
        </motion.div>
      </section>

      {/* Positioning statement */}
      <section className="relative z-10 bg-black py-10 md:py-14 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/50 text-lg md:text-xl leading-relaxed tracking-tight"
          >
            The infrastructure that identifies, engages, and delivers your best clients.{" "}
            <span className="text-white/25">No ads. No referrals. No agencies.</span>
          </motion.p>
        </div>
      </section>

      {/* CUSTOMER-PROOF TRIO — interactive tab-swap sector blocks */}
      <section className="relative z-10 bg-black py-20 md:py-32 px-6">
        <div className="max-w-6xl mx-auto flex flex-col gap-28 md:gap-36">
          {SECTOR_BLOCKS.map((b) => (
            <SectorBlock key={b.eyebrow} {...b} />
          ))}
        </div>
      </section>

      <MissionControl />

      {/* INFRASTRUCTURE LOGOS, auto-scroll marquee */}
      <section className="relative z-10 bg-black py-16 overflow-hidden">
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
                <img loading="lazy" decoding="async" src={item.logo}
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
      <section id="systems" className="relative z-10 bg-black py-16 md:py-24 px-6">
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

      {/* SECTORS — Vercel-style bento grid */}
      <section id="industries" className="relative z-10 bg-black py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12 md:mb-14 max-w-2xl"
          >
            <p className="eyebrow text-white/40 mb-4">Industries</p>
            <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tightest leading-[1.08]">
              Eight industries.<br />One acquisition engine.
            </h2>
          </motion.div>

          {/* Bento grid: 3-col desktop, 1-col mobile. Alternates 2/1 col spans. */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:auto-rows-[220px]">
            {BENTO_SECTORS.map((b, i) => {
              const s = SECTORS.find((x) => x.slug === b.slug);
              if (!s) return null;
              return <BentoCard key={s.slug} b={b} s={s} i={i} />;
            })}
          </div>

          <div className="mt-8">
            <Link
              to="/sectors"
              className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"
            >
              Explore all industries <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="book" className="relative z-10 bg-black py-16 md:py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="eyebrow text-white/40 mb-4">Get started</p>
            <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tightest leading-tight mb-6">
              If acquisition is the constraint,<br />this is where it ends.
            </h2>
            <p className="text-white/50 max-w-xl mx-auto text-sm md:text-base mb-12">
              We work with a small number of operators at any one time. Every engagement is built specifically for your market.
            </p>

            {/* ROI stat band */}
            <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/8 border border-white/8 rounded-2xl mb-12">
              {[
                { value: "30", label: "To first booked meeting" },
                { value: "40+", label: "Qualified conversations / mo" },
                { value: "8", label: "Industries served" },
                { value: "$0", label: "Spent on cold-calling" },
              ].map(({ value, label }, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center py-8 px-4 gap-2"
                >
                  <span
                    className="text-3xl md:text-4xl font-semibold text-white tabular-nums"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    <Counter value={value} />
                  </span>
                  <span
                    className="text-[10px] uppercase tracking-widest text-white/35 leading-snug"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* Two-path CTA */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/contact" className="btn-primary">
                Book a consultation <ArrowRight size={14} />
              </Link>
              <Link to="/case-studies" className="btn-ghost">
                See client results
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <FaqSection faqs={HOME_FAQS} title="Common questions about SVNR Global" />

      <div className="relative z-10 mt-24">
        <Footer />
      </div>
    </main>
  );
}
