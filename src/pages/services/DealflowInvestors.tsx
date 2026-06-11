import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { TrendingUp, Map, MessageSquare, Clock, ArrowRight } from "lucide-react";
import { AreaChart, Area, ResponsiveContainer, Tooltip, XAxis, BarChart, Bar } from "recharts";
import Footer from "../../components/Footer";
import FaqSection from "../../components/FaqSection";
import SEO from "../../components/SEO";
import SystemFlow from "../../components/SystemFlow";

const flowGradient = "linear-gradient(135deg, #38ef7d, #11998e)";

const chartData = [
  { q: "Q1", deals: 3 }, { q: "Q2", deals: 5 },
  { q: "Q3", deals: 7 }, { q: "Q4", deals: 8 },
];

const barData = [
  { label: "Pre-process", value: 75 },
  { label: "Banker-led", value: 25 },
];

const capabilities = [
  { icon: Map, title: "Mandate Definition", desc: "We translate your investment thesis into a research-ready profile: sector, EBITDA range, geography, ownership type, and succession signals." },
  { icon: TrendingUp, title: "Target Mapping", desc: "Every qualifying company in your target universe mapped, researched, and ranked by fit and transaction readiness, before any contact." },
  { icon: MessageSquare, title: "Outreach Programme", desc: "Specific, founder-appropriate outreach deployed at scale. No generic pitches. No mass sends. Every message written to the individual." },
  { icon: Clock, title: "Ongoing Deal Flow", desc: "A sustained programme that maintains active relationships with the right founders over the 12-24 month window that matters." },
];

const steps = [
  { n: "01", title: "Mandate definition", desc: "Your thesis translated into a researchable target profile. Specific enough to generate 50-75 qualifying companies in a first mapping exercise." },
  { n: "02", title: "Target mapping", desc: "Every qualifying company found, researched, and ranked. Ownership structure, succession signals, capital events, and deal readiness assessed." },
  { n: "03", title: "Outreach programme", desc: "Top 15-20 companies contacted with specific, thesis-anchored messages. The goal is a 20-minute founder conversation, not a pitch." },
  { n: "04", title: "Ongoing deal flow", desc: "Active relationships with 30+ founders maintained over 12-18 months. The pipeline that produces proprietary deals is built over time." },
];

const sectors = ["Private Equity", "Family Offices", "Venture Capital", "Wealth Management", "Corporate M&A", "Growth Capital"];

const DEALFLOW_FAQS = [
  { q: "How do PE firms source proprietary off-market deals?", a: "Through systematic outreach to founders, owner-operators, and management teams in sectors matching the fund's thesis, using AI-driven research to identify companies at pre-transaction trigger points: succession planning, debt maturity, management transitions, and sector consolidation signals." },
  { q: "Why is proprietary deal flow better than auction processes for PE firms?", a: "Proprietary deals avoid competitive bidding, which compresses returns. They allow deeper pre-LOI diligence, better founder trust before signing, and more favourable terms on price and structure. The most valuable transactions a PE firm executes are typically ones it sourced before any other firm knew they were available." },
  { q: "How long does it take to build a proprietary deal flow pipeline?", a: "A structured 90-day programme identifies qualifying targets and initiates founder conversations. Meaningful deal flow from those relationships typically materialises within 6–18 months, as founders reach their own moment of readiness for a transaction." },
  { q: "Can SVNR help with LP fundraising as well as deal sourcing?", a: "Yes. SVNR builds LP acquisition infrastructure for emerging managers and established funds, mapping qualifying family offices and institutional LPs, researching their mandate fit, and deploying outreach that earns an introduction at the decision-maker level." },
];

export default function DealflowInvestors() {
  return (
    <main className="relative w-full bg-[#0A0A0B] font-sans selection:bg-white/20 selection:text-white">
      <SEO
        title="Dealflow for Investors — Proprietary PE Deal Sourcing | SVNR Global"
        description="Proprietary deal flow infrastructure for private equity firms and family offices. We reach founders before formal sale processes begin. Off-market pipeline built through systematic, AI-driven founder outreach."
        canonical="/services/dealflow-investor"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Dealflow for Investors, Proprietary PE Deal Sourcing",
            "provider": { "@id": "https://svnrglobal.com/#organization" },
            "description": "AI-powered proprietary deal flow infrastructure for private equity firms, venture capital funds, and family offices. We identify and reach founders, owner-operators, and management teams before formal sale processes begin, delivering off-market deal pipeline that competitive bidding never reaches.",
            "areaServed": ["Global", "Europe", "Middle East", "India", "United Kingdom"],
            "serviceType": ["Proprietary Deal Flow", "PE Deal Sourcing", "Off-Market Transaction Pipeline", "Founder Outreach", "LP Fundraising"]
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How do PE firms source proprietary off-market deals?",
                "acceptedAnswer": { "@type": "Answer", "text": "Through systematic outreach to founders, owner-operators, and management teams in sectors matching the fund's thesis, using AI-driven research to identify companies at pre-transaction trigger points: succession planning, debt maturity, management transitions, and sector consolidation signals." }
              },
              {
                "@type": "Question",
                "name": "Why is proprietary deal flow better than auction processes for PE firms?",
                "acceptedAnswer": { "@type": "Answer", "text": "Proprietary deals avoid competitive bidding, which compresses returns. They allow deeper pre-LOI diligence, better founder trust before signing, and more favourable terms on price and structure. The most valuable transactions a PE firm executes are typically ones it sourced before any other firm knew they were available." }
              },
              {
                "@type": "Question",
                "name": "How long does it take to build a proprietary deal flow pipeline?",
                "acceptedAnswer": { "@type": "Answer", "text": "A structured 90-day programme identifies qualifying targets and initiates founder conversations. Meaningful deal flow from those relationships typically materialises within 6–18 months, as founders reach their own moment of readiness for a transaction, which cannot be accelerated but can be anticipated." }
              },
              {
                "@type": "Question",
                "name": "Can SVNR help with LP fundraising as well as deal sourcing?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes. SVNR builds LP acquisition infrastructure for emerging managers and established funds, mapping qualifying family offices and institutional LPs, researching their mandate fit, and deploying outreach that earns an introduction at the decision-maker level." }
              }
            ]
          }
        ]}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Dealflow for Investors", url: "/services/dealflow-investor" },
        ]}
      />
      <section className="relative w-full h-screen flex items-end justify-start overflow-hidden">
        <video className="absolute inset-0 w-full h-full object-cover z-0" src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_115655_b4d9cd77-feed-43cd-a198-af78ebdf1f7a.mp4" autoPlay loop muted playsInline />
        <div className="absolute inset-0 z-[1]" style={{ background: "linear-gradient(to top, rgba(10,10,11,1) 0%, rgba(10,10,11,0.55) 55%, rgba(10,10,11,0.25) 100%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-20 w-full">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4">Service 07</p>
            <h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight mb-4">Dealflow for Investors</h1>
            <p className="text-xl text-white/60 max-w-xl">Proprietary deal flow, before the process. Built for PE firms and family offices who need to see opportunities first.</p>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 bg-[#0A0A0B] pt-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="rounded-2xl overflow-hidden border border-white/10">
            <img loading="lazy" decoding="async" src="/services/dealflow-investors.png" alt="Dealflow Investors Dashboard" className="w-full h-auto object-cover" />
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 bg-[#0A0A0B] py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">The Problem</p>
            <h2 className="text-4xl font-medium text-white tracking-tight mb-6">By the time the banker deck arrives, you are already behind.</h2>
            <p className="text-white/60 leading-relaxed mb-6">When a founder engages an investment bank, 30-60 potential buyers receive the same information on the same day. The competitive dynamic shifts immediately. The firms that consistently see the best transactions see them before this moment, because they built a relationship with the founder three months earlier.</p>
            <p className="text-white/60 leading-relaxed">75% of our clients' deals are sourced pre-process. 12 sectors mapped. 8+ GP introductions per quarter. That is what systematic proprietary sourcing looks like.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
            <div className="liquid-glass rounded-3xl p-8 space-y-6">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-white/30 mb-4">Deal flow by quarter</p>
                <div className="h-36">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={chartData}>
                      <defs>
                        <linearGradient id="df1" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#38ef7d" stopOpacity={0.4} />
                          <stop offset="95%" stopColor="#38ef7d" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="q" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 11 }} axisLine={false} tickLine={false} />
                      <Tooltip contentStyle={{ background: "#1A1A1C", border: "none", borderRadius: 8, fontSize: 12, color: "#fff" }} cursor={false} />
                      <Area type="monotone" dataKey="deals" stroke="#38ef7d" strokeWidth={2} fill="url(#df1)" dot={false} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="pt-4 border-t border-white/10">
                <p className="text-[10px] uppercase tracking-widest text-white/30 mb-3">Pre-process vs. banker-led</p>
                <div className="h-24">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={barData} layout="vertical" barSize={12}>
                      <XAxis type="number" hide />
                      <Tooltip contentStyle={{ background: "#1A1A1C", border: "none", borderRadius: 8, fontSize: 12, color: "#fff" }} cursor={false} />
                      <Bar dataKey="value" fill="#38ef7d" radius={4} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* HOW IT RUNS: system flow infographic */}
      <section className="relative z-10 bg-[#0A0A0B] py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">How it runs</p>
            <h2 className="text-3xl font-medium text-white tracking-tight">Signals in. Proprietary conversations out.</h2>
          </motion.div>
          <SystemFlow
            inputs={["Founder signals", "Succession indicators", "Sector mapping", "Direct outreach"]}
            engine="Deal Origination Engine"
            engineIcon={TrendingUp}
            output={{ value: "90", label: "days to a meaningful starting position" }}
            gradient={flowGradient}
          />
        </div>
      </section>

      <section className="relative z-10 bg-[#0A0A0B] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">The system</p>
            <h2 className="text-4xl font-medium text-white tracking-tight">Proprietary sourcing as a permanent programme.</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map((c, i) => (
              <motion.div key={c.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="liquid-glass rounded-2xl p-8 card-3d">
                <c.icon size={28} className="text-green-400 mb-4" />
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
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">The 90-day start</p>
            <h2 className="text-4xl font-medium text-white tracking-tight max-w-xl">A meaningful starting position within 90 days.</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div key={s.n} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="text-[40px] font-bold text-white/5 leading-none mb-4">{s.n}</div>
                <h3 className="text-white font-medium text-lg mb-3">{s.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-[#0A0A0B] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-6">Built for</p>
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
            <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">See the deal before the banker does.</h2>
            <p className="text-white/50 mb-8 max-w-xl mx-auto">We map your target universe, reach the right founders, and maintain those relationships over the timeline that matters.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black text-sm font-medium tracking-wide hover:bg-white/90 transition-all">
              Discuss your mandate <ArrowRight size={14} />
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
              <Link to="/blog/private-equity-proprietary-deal-flow" className="block liquid-glass rounded-2xl p-5 hover:border-white/20 transition-all border border-white/8">
                <p className="text-[9px] uppercase tracking-widest text-white/30 mb-2">Read</p>
                <p className="text-white/80 text-sm font-medium leading-snug hover:text-white transition-colors">PE Proprietary Deal Flow</p>
                <p className="text-white/30 text-[10px] mt-3 uppercase tracking-widest">→ svnrglobal.com/blog</p>
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 1 * 0.1 }}>
              <Link to="/blog/ai-prospecting-family-offices" className="block liquid-glass rounded-2xl p-5 hover:border-white/20 transition-all border border-white/8">
                <p className="text-[9px] uppercase tracking-widest text-white/30 mb-2">Read</p>
                <p className="text-white/80 text-sm font-medium leading-snug hover:text-white transition-colors">AI Prospecting for Family Offices</p>
                <p className="text-white/30 text-[10px] mt-3 uppercase tracking-widest">→ svnrglobal.com/blog</p>
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 2 * 0.1 }}>
              <Link to="/blog/hnw-investor-outreach-strategy" className="block liquid-glass rounded-2xl p-5 hover:border-white/20 transition-all border border-white/8">
                <p className="text-[9px] uppercase tracking-widest text-white/30 mb-2">Read</p>
                <p className="text-white/80 text-sm font-medium leading-snug hover:text-white transition-colors">HNW Investor Outreach</p>
                <p className="text-white/30 text-[10px] mt-3 uppercase tracking-widest">→ svnrglobal.com/blog</p>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      
      <FaqSection faqs={DEALFLOW_FAQS} title="Common questions about Deal Flow & Investor Relations" />

      <Footer /></div>
      </div>
    </main>
  );
}
