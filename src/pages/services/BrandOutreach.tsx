import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Mail, User, TrendingUp, RefreshCw, ArrowRight } from "lucide-react";
import { AreaChart, Area, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO";

const chartData = [
  { seq: "Seq 1", rate: 18 }, { seq: "Seq 2", rate: 24 },
  { seq: "Seq 3", rate: 38 }, { seq: "Seq 4", rate: 52 },
];

const capabilities = [
  { icon: User, title: "ICP Definition", desc: "We define the exact profile of the person worth reaching — title, sector, company size, intent signals — before the first message is written." },
  { icon: Mail, title: "Message Architecture", desc: "Every sequence built from the recipient's perspective. No templates. No spray-and-pray. Each message written as if you wrote it yourself." },
  { icon: TrendingUp, title: "Sequence Build", desc: "Multi-touch, multi-channel sequences deployed across email, LinkedIn, and direct channels — timed to each target's engagement pattern." },
  { icon: RefreshCw, title: "Send and Optimise", desc: "Continuous testing of subject lines, message frames, and send timing. Every cycle of outreach improves on the last." },
];

const steps = [
  { n: "01", title: "ICP definition", desc: "Exact buyer profile built — sector, title, company profile, intent signals. The quality of outreach is determined before a word is written." },
  { n: "02", title: "Message architecture", desc: "We write outreach that reads like it came from a senior person in your firm. No AI-sounding phrases. No generic value props." },
  { n: "03", title: "Sequence build", desc: "Four to six touch sequence deployed across the right channels, with correct timing between contacts and specific follow-up framing." },
  { n: "04", title: "Send and optimise", desc: "Weekly review of open rates, reply rates, and positive response rate. Continuous iteration to maintain performance over time." },
];

const sectors = ["Luxury Rugs", "B2B Luxury Brands", "Premium Real Estate", "Wealth Management", "Private Equity", "Professional Services"];

export default function BrandOutreach() {
  return (
    <main className="relative w-full bg-[#0A0A0B] font-sans selection:bg-white/20 selection:text-white">
      <SEO
        title="Brand Outreach — Hyper-Personalised B2B Messaging | SVNR Global"
        description="Every message we deploy is written specifically for your market and your buyer profile. No templates. No mass sends. Outreach that reads like a peer."
        canonical="/services/brand-outreach"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Brand Outreach — Hyper-Personalised B2B Messaging",
            "provider": { "@type": "Organization", "name": "SVNR Global", "url": "https://svnrglobal.com" },
            "description": "Individually researched, hyper-personalised B2B outreach sequences for premium brands. Every message is written for the specific recipient — no templates, no mass sends. Outreach that earns a response because it reads like it came from a peer who did their homework.",
            "areaServed": ["Global", "Europe", "Middle East", "Asia"],
            "serviceType": ["Brand Outreach", "Personalised B2B Messaging", "Premium Outreach Sequences", "B2B Email Strategy"]
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What makes personalised brand outreach different from cold email?",
                "acceptedAnswer": { "@type": "Answer", "text": "Cold email sends templated messages at volume. Brand outreach means every message is researched and written for the specific recipient — referencing their business, their sector, and the specific reason the contact is relevant. SVNR's reply rates average 18–24%, against a 2–5% industry average for templated cold email." }
              },
              {
                "@type": "Question",
                "name": "How does SVNR personalise outreach at scale for premium brands?",
                "acceptedAnswer": { "@type": "Answer", "text": "SVNR combines deep sector research with AI-assisted message architecture — each prospect is individually researched across 50+ data signals, and each message is built around specific observations about that prospect's business, portfolio, or buying history. The result is personalised outreach delivered at a scale no human team could match manually." }
              },
              {
                "@type": "Question",
                "name": "What channels does SVNR brand outreach cover?",
                "acceptedAnswer": { "@type": "Answer", "text": "Email is the primary channel, followed by LinkedIn for professional relationships and WhatsApp where culturally appropriate — particularly in European and Middle Eastern markets for HNW and trade relationships. Channel selection is determined by the sector and buyer profile." }
              },
              {
                "@type": "Question",
                "name": "Does brand outreach work for luxury brands targeting trade buyers?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes — and it is the most effective acquisition channel for luxury trade relationships. A message that demonstrates specific knowledge of an interior designer's project portfolio earns a response at a completely different rate than a catalogue introduction. SVNR has achieved 78% enquiry lifts for luxury brands within six weeks of deployment." }
              }
            ]
          }
        ]}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Brand Outreach", url: "/services/brand-outreach" },
        ]}
      />
      <section className="relative w-full h-screen flex items-end justify-start overflow-hidden">
        <video className="absolute inset-0 w-full h-full object-cover z-0" src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_115655_b4d9cd77-feed-43cd-a198-af78ebdf1f7a.mp4" autoPlay loop muted playsInline />
        <div className="absolute inset-0 z-[1]" style={{ background: "linear-gradient(to top, rgba(10,10,11,1) 0%, rgba(10,10,11,0.55) 55%, rgba(10,10,11,0.25) 100%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-20 w-full">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4">Service 06</p>
            <h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight mb-4">Brand Outreach</h1>
            <p className="text-xl text-white/60 max-w-xl">Outreach that reads like a peer. Precision sequences at the level your market expects.</p>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 bg-[#0A0A0B] pt-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="rounded-2xl overflow-hidden border border-white/10">
            <img src="/services/brand-outreach.png" alt="Brand Outreach Dashboard" className="w-full h-auto object-cover" />
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 bg-[#0A0A0B] py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">The Problem</p>
            <h2 className="text-4xl font-medium text-white tracking-tight mb-6">Generic outreach damages premium brands.</h2>
            <p className="text-white/60 leading-relaxed mb-6">A template is a template. The interior designer, the fund manager, and the family office principal who receives it knows immediately. And the message your brand sends with that template is that your brand is generic. We build outreach that operates at the level of the people you are trying to reach — specific, researched, and written as if you wrote it yourself.</p>
            <p className="text-white/60 leading-relaxed">52% open rate. 21% positive reply rate. 0.4% unsubscribe rate. These are the numbers a premium brand earns with outreach that respects its audience.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
            <div className="liquid-glass rounded-3xl p-8">
              <p className="text-[10px] uppercase tracking-widest text-white/30 mb-4">Reply rate by sequence</p>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient id="bo1" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#f953c6" stopOpacity={0.4} />
                        <stop offset="95%" stopColor="#f953c6" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="seq" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 11 }} axisLine={false} tickLine={false} />
                    <Tooltip contentStyle={{ background: "#1A1A1C", border: "none", borderRadius: 8, fontSize: 12, color: "#fff" }} cursor={false} />
                    <Area type="monotone" dataKey="rate" stroke="#f953c6" strokeWidth={2} fill="url(#bo1)" dot={false} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/10">
                <div className="text-center"><div className="text-2xl font-medium text-white">52%</div><div className="text-[10px] text-white/30 mt-1">Open rate</div></div>
                <div className="text-center"><div className="text-2xl font-medium text-white">21%</div><div className="text-[10px] text-white/30 mt-1">Positive reply</div></div>
                <div className="text-center"><div className="text-2xl font-medium text-white">0.4%</div><div className="text-[10px] text-white/30 mt-1">Unsubscribe</div></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 bg-[#0A0A0B] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">What we build</p>
            <h2 className="text-4xl font-medium text-white tracking-tight">Every element of the outreach system.</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map((c, i) => (
              <motion.div key={c.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="liquid-glass rounded-2xl p-8 card-3d">
                <c.icon size={28} className="text-pink-400 mb-4" />
                <h3 className="text-white font-medium text-xl mb-3">{c.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-[#0A0A0B] py-24 px-6">
        <div className="max-w-7xl mx-auto">
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
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-6">Suitable industries</p>
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
            <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">Outreach at the standard your brand deserves.</h2>
            <p className="text-white/50 mb-8 max-w-xl mx-auto">We write and deploy outreach that opens doors with the right people in your market.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black text-sm font-medium tracking-wide hover:bg-white/90 transition-all">
              See a sample sequence <ArrowRight size={14} />
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
              <Link to="/blog/cold-email-agency-luxury-brands" className="block liquid-glass rounded-2xl p-5 hover:border-white/20 transition-all border border-white/8">
                <p className="text-[9px] uppercase tracking-widest text-white/30 mb-2">Read</p>
                <p className="text-white/80 text-sm font-medium leading-snug hover:text-white transition-colors">Cold Email for Luxury Brands</p>
                <p className="text-white/30 text-[10px] mt-3 uppercase tracking-widest">→ svnrglobal.com/blog</p>
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 1 * 0.1 }}>
              <Link to="/blog/outbound-lead-generation-luxury-retail" className="block liquid-glass rounded-2xl p-5 hover:border-white/20 transition-all border border-white/8">
                <p className="text-[9px] uppercase tracking-widest text-white/30 mb-2">Read</p>
                <p className="text-white/80 text-sm font-medium leading-snug hover:text-white transition-colors">Outbound for Luxury Retail</p>
                <p className="text-white/30 text-[10px] mt-3 uppercase tracking-widest">→ svnrglobal.com/blog</p>
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 2 * 0.1 }}>
              <Link to="/blog/how-to-get-b2b-clients-luxury-brand" className="block liquid-glass rounded-2xl p-5 hover:border-white/20 transition-all border border-white/8">
                <p className="text-[9px] uppercase tracking-widest text-white/30 mb-2">Read</p>
                <p className="text-white/80 text-sm font-medium leading-snug hover:text-white transition-colors">B2B Clients for Luxury Brands</p>
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
