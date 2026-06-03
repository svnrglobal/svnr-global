import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Search, Eye, BarChart2, Bell, ArrowRight } from "lucide-react";
import { AreaChart, Area, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO";


const chartData = [
  { m: "Jan", v: 120 }, { m: "Feb", v: 220 }, { m: "Mar", v: 320 },
  { m: "Apr", v: 440 }, { m: "May", v: 480 }, { m: "Jun", v: 500 },
];

const capabilities = [
  { icon: Search, title: "Market Segmentation", desc: "Every qualifying company in your target market mapped, ranked, and profiled before a single message is sent." },
  { icon: Eye, title: "Decision-Maker Mapping", desc: "Named individuals, titles, contact vectors, and seniority — built from 80+ signal sources updated weekly." },
  { icon: Bell, title: "Signal Monitoring", desc: "Funding rounds, leadership hires, product launches, and public statements tracked continuously for intent signals." },
  { icon: BarChart2, title: "Weekly Intelligence Brief", desc: "A structured brief delivered weekly with the highest-signal contacts and market movements in your target vertical." },
];

const steps = [
  { n: "01", title: "Market segmentation", desc: "We define the exact universe of companies and contacts relevant to your mandate — no noise, no padding." },
  { n: "02", title: "Data build & enrichment", desc: "Each target is researched across professional databases, press, LinkedIn, and public filings to build a complete profile." },
  { n: "03", title: "Signal layer", desc: "We overlay intent and timing signals — funding, hiring, leadership change — to rank by likelihood of engagement." },
  { n: "04", title: "Intelligence delivery", desc: "Weekly briefs and a live dashboard give your team a real-time view of where to focus outreach effort." },
];

const sectors = ["Private Equity", "Premium Real Estate", "Luxury Rugs", "Wealth Management", "Maritime", "Professional Services"];

export default function IntelligenceResearch() {
  return (
    <main className="relative w-full bg-[#0A0A0B] font-sans selection:bg-white/20 selection:text-white">
      <SEO
        title="Intelligence Research — Prospect & Market Mapping | SVNR Global"
        description="We build the intelligence layer your team never had time to build. Who is buying, where they are buying from, and what signals predict when they move."
        canonical="/services/intelligence-research"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Intelligence Research — Prospect & Market Mapping",
            "provider": { "@type": "Organization", "name": "SVNR Global", "url": "https://svnrglobal.com" },
            "description": "AI-powered prospect intelligence and market mapping for premium B2B operators. We build the research layer that identifies every qualifying buyer, decision-maker, and opportunity in your market — enriched across 50+ data signals and delivered as actionable outreach intelligence.",
            "areaServed": ["Global", "Europe", "Middle East", "Asia"],
            "serviceType": ["Prospect Intelligence", "Market Mapping", "B2B Research", "Buyer Identification", "Signal Monitoring"]
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is AI prospect intelligence for B2B companies?",
                "acceptedAnswer": { "@type": "Answer", "text": "AI prospect intelligence is the systematic process of identifying every qualifying buyer and decision-maker in your market by aggregating signals from 50+ data sources — company filings, business press, LinkedIn activity, property records, financial announcements — and producing an enriched, ranked prospect universe ready for outreach." }
              },
              {
                "@type": "Question",
                "name": "What data signals does SVNR monitor to identify prospects?",
                "acceptedAnswer": { "@type": "Answer", "text": "SVNR monitors liquidity events, business sale announcements, company director changes, LinkedIn profile updates, trade association memberships, property transactions, funding rounds, debt maturities, sector consolidation announcements, and planning applications — depending on the target sector and buyer profile." }
              },
              {
                "@type": "Question",
                "name": "How many prospects can SVNR map for a new market entry?",
                "acceptedAnswer": { "@type": "Answer", "text": "A typical market mapping engagement produces 300–1,000 individually researched and ranked prospects in a defined geography within 30 days. Each record includes contact details, seniority, organisation profile, and a relevance score based on the client's ICP criteria." }
              },
              {
                "@type": "Question",
                "name": "Is intelligence research a one-off exercise or a continuous function?",
                "acceptedAnswer": { "@type": "Answer", "text": "Both models are available. A one-off market mapping engagement establishes the initial prospect universe. Ongoing intelligence monitoring continuously identifies new prospects as they enter the target profile and updates existing records with new signal data — keeping the outreach pipeline permanently current." }
              }
            ]
          }
        ]}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Intelligence Research", url: "/services/intelligence-research" },
        ]}
      />
      <section className="relative w-full h-screen flex items-end justify-start overflow-hidden">
        <video className="absolute inset-0 w-full h-full object-cover z-0" src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_115655_b4d9cd77-feed-43cd-a198-af78ebdf1f7a.mp4" autoPlay loop muted playsInline />
        <div className="absolute inset-0 z-[1]" style={{ background: "linear-gradient(to top, rgba(10,10,11,1) 0%, rgba(10,10,11,0.55) 55%, rgba(10,10,11,0.25) 100%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-20 w-full">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4">Service 05</p>
            <h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight mb-4">Intelligence Research</h1>
            <p className="text-xl text-white/60 max-w-xl">Know your market before you move. Deep intelligence delivered as a system, not a spreadsheet.</p>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 bg-[#0A0A0B] pt-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="rounded-2xl overflow-hidden border border-white/10">
            <img src="/services/intelligence-research.png" alt="Intelligence Research Dashboard" className="w-full h-auto object-cover" />
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 bg-[#0A0A0B] py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">The Problem</p>
            <h2 className="text-4xl font-medium text-white tracking-tight mb-6">Most teams move on incomplete information.</h2>
            <p className="text-white/60 leading-relaxed mb-6">Your outreach is only as good as the intelligence behind it. Teams that win in competitive markets do not move faster. They move with more precision — because they know who is likely to respond, when, and why. We build that precision layer.</p>
            <p className="text-white/60 leading-relaxed">500+ prospect profiles. 80+ signal sources. A weekly intelligence brief that tells you exactly where to focus. Built as infrastructure, not a one-off research project.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
            <div className="liquid-glass rounded-3xl p-8">
              <p className="text-[10px] uppercase tracking-widest text-white/30 mb-4">Profiles built over time</p>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient id="ig1" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#764ba2" stopOpacity={0.4} />
                        <stop offset="95%" stopColor="#764ba2" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="m" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 11 }} axisLine={false} tickLine={false} />
                    <Tooltip contentStyle={{ background: "#1A1A1C", border: "none", borderRadius: 8, fontSize: 12, color: "#fff" }} cursor={false} />
                    <Area type="monotone" dataKey="v" stroke="#764ba2" strokeWidth={2} fill="url(#ig1)" dot={false} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/10">
                <div className="text-center"><div className="text-2xl font-medium text-white">500+</div><div className="text-[10px] text-white/30 mt-1">Profiles built</div></div>
                <div className="text-center"><div className="text-2xl font-medium text-white">80+</div><div className="text-[10px] text-white/30 mt-1">Signal sources</div></div>
                <div className="text-center"><div className="text-2xl font-medium text-white">97%</div><div className="text-[10px] text-white/30 mt-1">Accuracy rate</div></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 bg-[#0A0A0B] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">Capabilities</p>
            <h2 className="text-4xl font-medium text-white tracking-tight">Every layer of your market. Mapped.</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map((c, i) => (
              <motion.div key={c.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="liquid-glass rounded-2xl p-8 card-3d">
                <c.icon size={28} className="text-purple-400 mb-4" />
                <h3 className="text-white font-medium text-xl mb-3">{c.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-[#0A0A0B] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">How it works</p>
            <h2 className="text-4xl font-medium text-white tracking-tight max-w-xl">Intelligence delivered as a system.</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div key={s.n} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative">
                <div className="text-[40px] font-bold text-white/5 leading-none mb-4">{s.n}</div>
                <h3 className="text-white font-medium text-lg mb-3">{s.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
                {i < steps.length - 1 && <div className="hidden lg:block absolute top-8 right-0 w-8 h-px bg-white/10" />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-[#0A0A0B] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-6">Works across industries</p>
          <div className="flex flex-wrap gap-3">
            {sectors.map((s) => (
              <span key={s} className="px-4 py-2 rounded-full border border-white/10 text-sm text-white/60 hover:border-white/30 hover:text-white transition-all">{s}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-[#0A0A0B] py-24 px-6">
        <div className="max-w-4xl mx-auto text-center liquid-glass rounded-3xl p-12 md:p-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">Know your market before your next move.</h2>
            <p className="text-white/50 mb-8 max-w-xl mx-auto">The intelligence layer that premium operators build before anything else. Let us map your market and deliver the brief.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black text-sm font-medium tracking-wide hover:bg-white/90 transition-all">
              Start the conversation <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      <div className="relative z-10 bg-[#0A0A0B] px-6 pb-10">
        <div className="max-w-7xl mx-auto">
      {/* RELATED INSIGHTS */}
      <section className="relative z-10 bg-[#0A0A0B] pb-16 px-6 border-t border-white/8">
        <div className="max-w-7xl mx-auto pt-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-3">Related Insights</p>
            <h2 className="text-2xl font-medium text-white tracking-tight">From the SVNR blog</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0 * 0.1 }}>
              <Link to="/blog/ai-prospecting-family-offices" className="block liquid-glass rounded-2xl p-5 hover:border-white/20 transition-all border border-white/8">
                <p className="text-[9px] uppercase tracking-widest text-white/30 mb-2">Read</p>
                <p className="text-white/80 text-sm font-medium leading-snug hover:text-white transition-colors">AI Prospecting for Family Offices</p>
                <p className="text-white/30 text-[10px] mt-3 uppercase tracking-widest">→ svnrglobal.com/blog</p>
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 1 * 0.1 }}>
              <Link to="/blog/hnw-investor-outreach-strategy" className="block liquid-glass rounded-2xl p-5 hover:border-white/20 transition-all border border-white/8">
                <p className="text-[9px] uppercase tracking-widest text-white/30 mb-2">Read</p>
                <p className="text-white/80 text-sm font-medium leading-snug hover:text-white transition-colors">HNW Investor Outreach</p>
                <p className="text-white/30 text-[10px] mt-3 uppercase tracking-widest">→ svnrglobal.com/blog</p>
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 2 * 0.1 }}>
              <Link to="/blog/uhnw-client-acquisition-strategy" className="block liquid-glass rounded-2xl p-5 hover:border-white/20 transition-all border border-white/8">
                <p className="text-[9px] uppercase tracking-widest text-white/30 mb-2">Read</p>
                <p className="text-white/80 text-sm font-medium leading-snug hover:text-white transition-colors">UHNW Client Acquisition</p>
                <p className="text-white/30 text-[10px] mt-3 uppercase tracking-widest">→ svnrglobal.com/blog</p>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer /></div>
      </div>
    </main>
  );
}
