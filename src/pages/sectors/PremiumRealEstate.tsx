import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { AreaChart, Area, RadialBarChart, RadialBar, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO";

const timelineData = [
  { day: "D1", response: 100 }, { day: "D3", response: 72 },
  { day: "D7", response: 48 }, { day: "D14", response: 30 },
  { day: "D30", response: 15 },
];

const radialData = [
  { name: "Off-market", value: 68, fill: "#0071E3" },
  { name: "Portal", value: 32, fill: "rgba(255,255,255,0.1)" },
];

const services = [
  { slug: "client-acquisition", label: "Client Acquisition", desc: "Direct outreach to HNW principals, family offices, and institutional investors before they enter formal search processes." },
  { slug: "intelligence-research", label: "Intelligence Research", desc: "Principal buyer profiles built from business press, LinkedIn exits, family office mandates, and liquidity signals." },
  { slug: "brand-outreach", label: "Brand Outreach", desc: "Messages that reach principals on the channels they actually use — WhatsApp, direct email — not portal enquiry forms." },
  { slug: "ai-receptionist", label: "AI Receptionist", desc: "Every inbound enquiry qualified and responded to within 60 seconds. No missed opportunity after hours." },
];

const insights = [
  "The buyer for a prime residential property or investment asset is not on Rightmove at midnight. They are a principal making a capital allocation decision. Portal-dependent acquisition by definition cannot reach them.",
  "In European and Middle Eastern prime markets, WhatsApp is the dominant channel for high-value buyer conversations. The firm that reaches a qualified buyer directly on the right channel is operating in a different competitive environment.",
  "Days on market is a diagnostic. When a prime property sits beyond its typical transaction window, the buyer pool is too small — and that is a structural problem that portal optimisation cannot solve.",
  "The off-market buyer is not passive. They are a principal with capital, a geographic preference, and a clear sense of what a good transaction looks like. They are waiting for someone who understands their parameters.",
];

export default function PremiumRealEstate() {
  return (
    <main className="relative w-full bg-[#0A0A0B] font-sans selection:bg-white/20 selection:text-white">
      <SEO
        title="Premium Real Estate Client Acquisition | SVNR Global"
        description="We help premium real estate firms reach HNW investors and off-market buyers directly — without portal dependency. Systematic outreach to qualified principals."
        canonical="/sectors/premium-real-estate"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Premium Real Estate Buyer & Investor Acquisition",
            "provider": { "@type": "Organization", "name": "SVNR Global", "url": "https://svnrglobal.com" },
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
                "acceptedAnswer": { "@type": "Answer", "text": "By identifying principal buyers — HNW individuals, family offices, and institutional investors — through AI-driven signal monitoring and business press, then initiating direct contact through email and WhatsApp with messages specific to their investment profile and capital position." }
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
      <section className="relative w-full h-screen flex items-end justify-start overflow-hidden">
        <img src="/sectors/real-estate-photo-1505873242700-f289a29e1e0f.avif" alt="Premium Real Estate" className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="absolute inset-0 z-[1]" style={{ background: "linear-gradient(to top, rgba(10,10,11,1) 0%, rgba(10,10,11,0.4) 50%, rgba(10,10,11,0.1) 100%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-20 w-full">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4">Sector 02</p>
            <h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight mb-4">Premium<br />Real Estate</h1>
            <p className="text-xl text-white/60 max-w-2xl">Principal relationships, not portal listings. For real estate firms moving toward direct HNW and institutional investor relationships.</p>
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="liquid-glass rounded-2xl px-6 py-3">
                <div className="text-2xl font-medium text-white">14 min</div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest">Time to first qualified reply</div>
              </div>
              <div className="liquid-glass rounded-2xl px-6 py-3">
                <div className="text-2xl font-medium text-white">5K+</div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest">HNW contacts mapped</div>
              </div>
              <div className="liquid-glass rounded-2xl px-6 py-3">
                <div className="text-2xl font-medium text-white">68%</div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest">Off-market deal rate</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 bg-[#0A0A0B] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="liquid-glass rounded-3xl p-8 md:p-12">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">Proof</p>
            <p className="text-2xl md:text-3xl font-medium text-white max-w-3xl">A Zurich real estate firm. A qualified principal replied in fourteen minutes — reached directly on WhatsApp with a message specific to their investment profile, before any competitor had made contact.</p>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 bg-[#0A0A0B] py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">The Market Reality</p>
            <h2 className="text-4xl font-medium text-white tracking-tight mb-6">Portal dependency is a buyer quality problem, not a volume problem.</h2>
            {insights.map((insight, i) => (
              <motion.p key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-white/60 text-sm leading-relaxed mb-4">
                {insight}
              </motion.p>
            ))}
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="space-y-6">
            <div className="liquid-glass rounded-3xl p-8">
              <p className="text-[10px] uppercase tracking-widest text-white/30 mb-4">Response rate by contact method</p>
              <div className="h-44">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={timelineData}>
                    <defs>
                      <linearGradient id="re1" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0071E3" stopOpacity={0.4} />
                        <stop offset="95%" stopColor="#0071E3" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="day" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 11 }} axisLine={false} tickLine={false} />
                    <Tooltip contentStyle={{ background: "#1A1A1C", border: "none", borderRadius: 8, fontSize: 12, color: "#fff" }} cursor={false} />
                    <Area type="monotone" dataKey="response" stroke="#0071E3" strokeWidth={2} fill="url(#re1)" dot={false} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="liquid-glass rounded-3xl p-8">
              <p className="text-[10px] uppercase tracking-widest text-white/30 mb-4">Deal sourcing — off-market vs. portal</p>
              <div className="h-40 flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <RadialBarChart innerRadius="40%" outerRadius="90%" data={radialData} startAngle={90} endAngle={-270}>
                    <RadialBar dataKey="value" cornerRadius={4} />
                    <Tooltip contentStyle={{ background: "#1A1A1C", border: "none", borderRadius: 8, fontSize: 12, color: "#fff" }} />
                  </RadialBarChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center gap-8 mt-2">
                <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500" /><span className="text-xs text-white/50">Off-market 68%</span></div>
                <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-white/20" /><span className="text-xs text-white/50">Portal 32%</span></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 bg-[#0A0A0B] py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-4">
          {["/sectors/real-estate-photo-1505873242700-f289a29e1e0f.avif", "/sectors/real-estate-premium_photo-1661915661139-5b6a4e4a6fcc.avif"].map((src, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src={src} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Premium real estate UHNW investor buyer pipeline generation" />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-10 bg-[#0A0A0B] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">Applicable Systems</p>
            <h2 className="text-4xl font-medium text-white tracking-tight">The infrastructure built for premium real estate.</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <motion.div key={s.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="liquid-glass rounded-2xl p-8 group card-3d">
                <h3 className="text-white font-medium text-xl mb-3 group-hover:text-blue-400 transition-colors">{s.label}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4">{s.desc}</p>
                <Link to={`/services/${s.slug}`} className="inline-flex items-center gap-2 text-xs text-white/40 hover:text-white transition-colors">Learn more <ArrowRight size={12} /></Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-[#0A0A0B] py-24 px-6">
        <div className="max-w-4xl mx-auto text-center liquid-glass rounded-3xl p-12 md:p-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">Build the principal relationships that portals cannot produce.</h2>
            <p className="text-white/50 mb-8 max-w-xl mx-auto">We map and reach the HNW buyers in your market before anyone else does.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black text-sm font-medium tracking-wide hover:bg-white/90 transition-all">
              Start the conversation <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      <div className="relative z-10 bg-[#0A0A0B] px-6 pb-10"><div className="max-w-7xl mx-auto">
      {/* RELATED INSIGHTS */}
      <section className="relative z-10 bg-[#0A0A0B] pb-16 px-6 border-t border-white/8">
        <div className="max-w-7xl mx-auto pt-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-3">Related Insights</p>
            <h2 className="text-2xl font-medium text-white tracking-tight">From the SVNR blog</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0 * 0.1 }}>
              <Link to="/blog/real-estate-investor-buyer-acquisition" className="block liquid-glass rounded-2xl p-5 hover:border-white/20 transition-all border border-white/8">
                <p className="text-[9px] uppercase tracking-widest text-white/30 mb-2">Read</p>
                <p className="text-white/80 text-sm font-medium leading-snug hover:text-white transition-colors">Reaching Investor Buyers</p>
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

      <Footer /></div></div>
    </main>
  );
}
