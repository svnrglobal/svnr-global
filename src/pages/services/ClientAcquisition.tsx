import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Map, Mail, Handshake } from "lucide-react";
import { AreaChart, Area, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import Footer from "../../components/Footer";
import FaqSection from "../../components/FaqSection";
import SEO from "../../components/SEO";
import Counter from "../../components/Counter";
import AnimatedSteps from "../../components/AnimatedSteps";
import SystemFlow from "../../components/SystemFlow";

const gradient = "linear-gradient(135deg, #667eea, #764ba2)";

const chartData = [
  { week: "W1", leads: 4 }, { week: "W2", leads: 9 }, { week: "W3", leads: 14 },
  { week: "W4", leads: 18 }, { week: "W5", leads: 22 }, { week: "W6", leads: 27 },
  { week: "W7", leads: 31 }, { week: "W8", leads: 35 }, { week: "W9", leads: 37 },
  { week: "W10", leads: 39 }, { week: "W11", leads: 41 }, { week: "W12", leads: 42 },
];

const capabilities = [
  { icon: Map, title: "Market Mapping", desc: "Identify every relevant decision-maker in your target geography before a single message is sent." },
  { icon: Target, title: "Prospect Identification", desc: "AI-driven qualification against your ideal client profile across 50+ data signals." },
  { icon: Mail, title: "Multi-Channel Outreach", desc: "Precision sequences across email, LinkedIn, and direct channels tuned to your sector." },
  { icon: Handshake, title: "Warm Handoff", desc: "We run the conversation until the prospect is genuinely warm. You close from a position of strength." },
];

const steps = [
  { n: "01", title: "Define ideal client profile", desc: "We work with you to map the precise characteristics of your best-fit client, sector, size, geography, decision-maker title." },
  { n: "02", title: "Map the target universe", desc: "Using proprietary data infrastructure, we identify every qualifying company and decision-maker in your market." },
  { n: "03", title: "Research & qualify", desc: "Each prospect is individually researched and scored. Only the highest-signal targets enter the outreach sequence." },
  { n: "04", title: "Deploy outreach sequences", desc: "Multi-touch, multi-channel sequences are deployed. Every message is personalised to the individual, no templates." },
  { n: "05", title: "Warm handoff to principal", desc: "When a prospect responds with genuine interest, we hand them directly to you with full context for the conversation." },
];

const sectors = ["Luxury Rugs", "Premium Real Estate", "Private Equity", "Wealth Management", "B2B Luxury", "Professional Services"];

const CLIENT_ACQUISITION_FAQS = [
  { q: "What does SVNR's client acquisition system actually do?", a: "The system identifies every qualifying prospect in your target market using AI-driven research across 50+ data signals, builds personalised multi-channel outreach sequences, runs the entire conversation until the prospect is genuinely warm, and hands them directly to you with full context. You only engage at the point of a qualified conversation." },
  { q: "How many qualified leads does the client acquisition system generate per month?", a: "Most SVNR client acquisition deployments generate 40+ qualified conversations per month from month two onwards. Reply rates average 18% across sectors, with first meetings typically occurring within 14 days of deployment." },
  { q: "Is this the same as a cold email agency?", a: "No. A cold email agency sends templated sequences at volume. SVNR builds a complete acquisition infrastructure — ICP definition, 50-signal prospect research, individually crafted messaging, multi-channel deployment across email and LinkedIn, and continuous optimisation. The result is a permanent acquisition asset, not a one-off campaign." },
  { q: "How quickly does SVNR's client acquisition system start delivering results?", a: "Most clients see the first qualified prospect conversations within 14–21 days of deployment. The system compounds over time — month 3 consistently outperforms month 1 as early relationships mature and the sequence is refined on real response data." },
];

export default function ClientAcquisition() {
  return (
    <main className="relative w-full bg-[#0A0A0B] font-sans selection:bg-white/20 selection:text-white">
      <SEO
        title="Client Acquisition — AI-Powered B2B Outreach | SVNR Global"
        description="AI-powered B2B client acquisition for luxury brands, private equity, real estate, and high-ticket operators. 40+ qualified conversations per month. First results in 14–21 days. No ads, no referrals."
        canonical="/services/client-acquisition"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "AI-Powered B2B Client Acquisition",
            "provider": { "@id": "https://svnrglobal.com/#organization" },
            "description": "Bespoke AI client acquisition system that identifies, researches, and reaches the exact decision-makers in your market, delivering 40+ qualified conversations per month without paid ads or referral dependency.",
            "areaServed": ["Global", "Europe", "Middle East", "Asia", "India"],
            "serviceType": ["B2B Client Acquisition", "Outbound Lead Generation", "AI Outreach", "Sales Pipeline Development"]
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What does SVNR's client acquisition system actually do?",
                "acceptedAnswer": { "@type": "Answer", "text": "The system identifies every qualifying prospect in your target market using AI-driven research across 50+ data signals, builds personalised multi-channel outreach sequences, runs the entire conversation until the prospect is genuinely warm, and hands them directly to you with full context. You only engage at the point of a qualified conversation." }
              },
              {
                "@type": "Question",
                "name": "How many qualified leads does the client acquisition system generate per month?",
                "acceptedAnswer": { "@type": "Answer", "text": "Most SVNR client acquisition deployments generate 40+ qualified conversations per month from month two onwards. Reply rates average 18% across sectors, with first meetings typically occurring within 14 days of deployment." }
              },
              {
                "@type": "Question",
                "name": "Is this the same as a cold email agency?",
                "acceptedAnswer": { "@type": "Answer", "text": "No. A cold email agency sends templated sequences at volume. SVNR builds a complete acquisition infrastructure, ICP definition, 50-signal prospect research, individually crafted messaging, multi-channel deployment across email and LinkedIn, and continuous optimisation. The result is a permanent acquisition asset, not a one-off campaign." }
              },
              {
                "@type": "Question",
                "name": "How quickly does SVNR's client acquisition system start delivering results?",
                "acceptedAnswer": { "@type": "Answer", "text": "Most clients see the first qualified prospect conversations within 14–21 days of deployment. The system compounds over time, month 3 consistently outperforms month 1 as early relationships mature and the sequence is refined on real response data." }
              }
            ]
          }
        ]}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Client Acquisition", url: "/services/client-acquisition" },
        ]}
      />
      {/* HERO */}
      <section className="relative w-full h-screen flex items-end justify-start overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_115655_b4d9cd77-feed-43cd-a198-af78ebdf1f7a.mp4"
          autoPlay loop muted playsInline
        />
        <div className="absolute inset-0 z-[1]" style={{ background: "linear-gradient(to top, rgba(10,10,11,1) 0%, rgba(10,10,11,0.55) 55%, rgba(10,10,11,0.25) 100%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-20 w-full">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4">Service 01</p>
            <h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight mb-4">Client Acquisition</h1>
            <p className="text-xl text-white/60 max-w-xl">We build the pipeline that brings the right clients to you, consistently.</p>
          </motion.div>
        </div>
      </section>

      {/* DASHBOARD IMAGE */}
      <section className="relative z-10 bg-[#0A0A0B] pt-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="rounded-2xl overflow-hidden border border-white/10">
            <img loading="lazy" decoding="async" src="/services/client-acquisition.png" alt="Client Acquisition Dashboard" className="w-full h-auto object-cover" />
          </motion.div>
        </div>
      </section>

      {/* SECTORS */}
      <section className="relative z-10 bg-[#0A0A0B] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-6">Which industries benefit most</p>
            <div className="flex flex-wrap gap-3">
              {sectors.map((s) => (
                <span key={s} className="px-4 py-2 rounded-full text-xs uppercase tracking-widest text-white/70 border border-white/15">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* METRICS */}
      <section className="relative z-10 bg-[#0A0A0B] py-16 px-6 border-t border-white/8">
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-8">
          {[
            { value: "40+", label: "Qualified leads per month" },
            { value: "18%", label: "Average reply rate" },
            { value: "14 days", label: "To first meeting" },
          ].map((m) => (
            <motion.div key={m.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
              <div className="text-4xl md:text-5xl font-medium mb-2" style={{ background: gradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                <Counter value={m.value} />
              </div>
              <p className="text-xs uppercase tracking-widest text-white/40">{m.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* HOW IT RUNS: system flow infographic */}
      <section className="relative z-10 bg-[#0A0A0B] py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">How it runs</p>
            <h2 className="text-3xl font-medium text-white tracking-tight">Signals in. Conversations out.</h2>
          </motion.div>
          <SystemFlow
            inputs={["Market mapping", "50+ data signals", "Individual research", "Multi-channel sequences"]}
            engine="Client Acquisition System"
            engineIcon={Target}
            output={{ value: "40+", label: "qualified conversations per month" }}
            gradient={gradient}
          />
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="relative z-10 bg-[#0A0A0B] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">Capabilities</p>
            <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight">What the system delivers</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ rotateX: -5, rotateY: 5, scale: 1.02 }}
                style={{ transformStyle: "preserve-3d", perspective: 1000 }}
                className="liquid-glass rounded-2xl p-7"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: gradient }}>
                  <c.icon size={18} className="text-white" />
                </div>
                <h3 className="text-white font-medium mb-2">{c.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative z-10 bg-[#0A0A0B] py-24 px-6 border-t border-white/8">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">Process</p>
            <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight">How the system deploys</h2>
          </motion.div>
          <AnimatedSteps steps={steps} gradient={gradient} />
        </div>
      </section>

      {/* CHART */}
      <section className="relative z-10 bg-[#0A0A0B] py-24 px-6 border-t border-white/8">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">Performance</p>
            <h2 className="text-3xl font-medium text-white tracking-tight">Leads generated over 12 weeks</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="liquid-glass rounded-2xl p-8">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="ca-grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#667eea" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#667eea" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="week" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 11 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 11 }} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={{ background: "#1A1A1C", border: "none", borderRadius: 8, fontSize: 12, color: "#fff" }} />
                  <Area type="monotone" dataKey="leads" stroke="#667eea" strokeWidth={2} fill="url(#ca-grad)" dot={false} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </section>


      {/* RELATED INSIGHTS */}
      <section className="relative z-10 bg-[#0A0A0B] pb-16 px-6 border-t border-white/8">
        <div className="max-w-7xl mx-auto pt-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-3">Related Insights</p>
            <h2 className="text-2xl font-medium text-white tracking-tight">From the SVNR blog</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0 * 0.1 }}>
              <Link to="/blog/client-acquisition-system-vs-campaign" className="block liquid-glass rounded-2xl p-5 hover:border-white/20 transition-all border border-white/8">
                <p className="text-[9px] uppercase tracking-widest text-white/30 mb-2">Read</p>
                <p className="text-white/80 text-sm font-medium leading-snug hover:text-white transition-colors">System vs Campaign</p>
                <p className="text-white/30 text-[10px] mt-3 uppercase tracking-widest">→ svnrglobal.com/blog</p>
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 1 * 0.1 }}>
              <Link to="/blog/client-acquisition-cost-referral-dependency" className="block liquid-glass rounded-2xl p-5 hover:border-white/20 transition-all border border-white/8">
                <p className="text-[9px] uppercase tracking-widest text-white/30 mb-2">Read</p>
                <p className="text-white/80 text-sm font-medium leading-snug hover:text-white transition-colors">Breaking Referral Dependency</p>
                <p className="text-white/30 text-[10px] mt-3 uppercase tracking-widest">→ svnrglobal.com/blog</p>
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 2 * 0.1 }}>
              <Link to="/blog/what-is-outreach-infrastructure" className="block liquid-glass rounded-2xl p-5 hover:border-white/20 transition-all border border-white/8">
                <p className="text-[9px] uppercase tracking-widest text-white/30 mb-2">Read</p>
                <p className="text-white/80 text-sm font-medium leading-snug hover:text-white transition-colors">What Is Outreach Infrastructure</p>
                <p className="text-white/30 text-[10px] mt-3 uppercase tracking-widest">→ svnrglobal.com/blog</p>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="relative z-10 bg-[#0A0A0B] py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight">
              Ready to build the pipeline?
            </h2>
            <p className="text-white/50 mb-10">Every engagement is built specifically for your market. No templates. No shared infrastructure.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-all">
                Book a Consultation <ArrowRight size={14} />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-3 px-10 py-4 rounded-full border border-white/20 text-white text-sm hover:border-white/50 transition-all">
                View All Services <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      
      <FaqSection faqs={CLIENT_ACQUISITION_FAQS} title="Common questions about Client Acquisition" />

      <div className="relative z-10 px-6 pb-10 max-w-7xl mx-auto">
        <Footer />
      </div>
    </main>
  );
}
