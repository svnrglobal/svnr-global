import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { AreaChart, Area, BarChart, Bar, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO";

const enquiryData = [
  { w: "W1", v: 5 }, { w: "W2", v: 12 }, { w: "W3", v: 22 }, { w: "W4", v: 38 }, { w: "W5", v: 55 }, { w: "W6", v: 78 },
];
const channelData = [
  { ch: "Trade direct", v: 60 }, { ch: "Showroom", v: 25 }, { ch: "Portal", v: 15 },
];

const services = [
  { slug: "client-acquisition", label: "Client Acquisition", desc: "Systematic identification and outreach to trade buyers, stockists, and B2B clients across your target geographies." },
  { slug: "brand-outreach", label: "Brand Outreach", desc: "Outreach that positions your brand at the level the trade buyer expects. Researched, specific, and premium in execution." },
  { slug: "channel-partnership", label: "Channel Partnership", desc: "Trade partner acquisition programme: the right stockists, showrooms, and distributors identified and activated." },
  { slug: "sector-workflows", label: "Sector Workflows", desc: "Wholesale operations automated — enquiry handling, quote generation, order tracking, and partner onboarding." },
];

export default function B2BLuxury() {
  return (
    <main className="relative w-full bg-[#0A0A0B] font-sans selection:bg-white/20 selection:text-white">
      <SEO
        title="B2B Luxury Brand Client Acquisition | SVNR Global | SVNR Global"
        description="For premium fashion, interiors, and lifestyle brands that need to build and activate trade buyer relationships at scale. Systematic stockist acquisition for luxury brands."
        canonical="/sectors/b2b-luxury-brands"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Sectors", url: "/sectors" },
          { name: "B2B Luxury Brands", url: "/sectors/b2b-luxury-brands" },
        ]}
      />
      <section className="relative w-full h-screen flex items-end justify-start overflow-hidden">
        <img src="/sectors/b2b-luxury-photo-1514179974491-a7885781ed87.avif" alt="B2B Luxury" className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="absolute inset-0 z-[1]" style={{ background: "linear-gradient(to top, rgba(10,10,11,1) 0%, rgba(10,10,11,0.4) 50%, rgba(10,10,11,0.1) 100%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-20 w-full">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4">Sector 04</p>
            <h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight mb-4">B2B Luxury<br />Brands</h1>
            <p className="text-xl text-white/60 max-w-2xl">The stockist relationship as infrastructure. For premium fashion, interiors, and lifestyle brands building trade buyer relationships at scale.</p>
            <div className="flex flex-wrap gap-4 mt-8">
              {[{ v: "40+", l: "Stockist pipeline / quarter" }, { v: "24%", l: "Trade buyer reply rate" }, { v: "78%", l: "Enquiry lift in 6 weeks" }].map(s => (
                <div key={s.l} className="liquid-glass rounded-2xl px-6 py-3">
                  <div className="text-2xl font-medium text-white">{s.v}</div>
                  <div className="text-[10px] text-white/40 uppercase tracking-widest">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 bg-[#0A0A0B] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="liquid-glass rounded-3xl p-8 md:p-12">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">Proof</p>
            <p className="text-2xl md:text-3xl font-medium text-white max-w-3xl">A luxury brand. 78% increase in qualified trade buyer enquiries within six weeks of deploying a systematic outreach programme across three European markets.</p>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 bg-[#0A0A0B] py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">The Market</p>
            <h2 className="text-4xl font-medium text-white tracking-tight mb-6">Trade relationships are won, not found.</h2>
            <p className="text-white/60 text-sm leading-relaxed mb-4">For premium brands selling through trade channels, the relationship with the buyer is the asset. A stockist who has been briefed, understands the collection, and has met the brand at the right moment carries product differently than one onboarded through a form.</p>
            <p className="text-white/60 text-sm leading-relaxed mb-4">We build the programme that finds the right buyers, reaches them with outreach that matches the brand's quality standard, and activates them into the trade relationship that drives revenue.</p>
            <p className="text-white/60 text-sm leading-relaxed">40+ stockist leads per quarter. 24% trade buyer reply rate. 21-day average from first contact to first order.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="space-y-6">
            <div className="liquid-glass rounded-3xl p-8">
              <p className="text-[10px] uppercase tracking-widest text-white/30 mb-4">Trade enquiry growth — weeks 1-6</p>
              <div className="h-44">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={enquiryData}>
                    <defs>
                      <linearGradient id="bl1" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#f953c6" stopOpacity={0.4} />
                        <stop offset="95%" stopColor="#f953c6" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="w" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 11 }} axisLine={false} tickLine={false} />
                    <Tooltip contentStyle={{ background: "#1A1A1C", border: "none", borderRadius: 8, fontSize: 12, color: "#fff" }} cursor={false} />
                    <Area type="monotone" dataKey="v" stroke="#f953c6" strokeWidth={2} fill="url(#bl1)" dot={false} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="liquid-glass rounded-3xl p-8">
              <p className="text-[10px] uppercase tracking-widest text-white/30 mb-4">Revenue by channel</p>
              <div className="h-36">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={channelData} layout="vertical" barSize={10}>
                    <XAxis type="number" hide />
                    <YAxis type="category" dataKey="ch" tick={{ fill: "rgba(255,255,255,0.4)", fontSize: 11 }} axisLine={false} tickLine={false} width={80} />
                    <Tooltip contentStyle={{ background: "#1A1A1C", border: "none", borderRadius: 8, fontSize: 12, color: "#fff" }} cursor={false} />
                    <Bar dataKey="v" fill="#f953c6" radius={4} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 bg-[#0A0A0B] py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-4">
          {["/sectors/b2b-luxury-photo-1514179974491-a7885781ed87.avif", "/sectors/b2b-luxury-photo-1598452963314-b09f397a5c48.avif", "/sectors/b2b-luxury-premium_photo-1724862979245-71e659b98366.avif"].map((src, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="rounded-2xl overflow-hidden aspect-square">
              <img src={src} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="B2B luxury" />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-10 bg-[#0A0A0B] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">Applicable Systems</p>
            <h2 className="text-4xl font-medium text-white tracking-tight">Infrastructure for luxury trade distribution.</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <motion.div key={s.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="liquid-glass rounded-2xl p-8 group card-3d">
                <h3 className="text-white font-medium text-xl mb-3 group-hover:text-pink-400 transition-colors">{s.label}</h3>
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
            <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">Build the trade relationships your brand deserves.</h2>
            <p className="text-white/50 mb-8 max-w-xl mx-auto">We map the right buyers, deploy the outreach, and activate the stockist relationships that carry your product at its correct positioning.</p>
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
              <Link to="/blog/how-to-get-b2b-clients-luxury-brand" className="block liquid-glass rounded-2xl p-5 hover:border-white/20 transition-all border border-white/8">
                <p className="text-[9px] uppercase tracking-widest text-white/30 mb-2">Read</p>
                <p className="text-white/80 text-sm font-medium leading-snug hover:text-white transition-colors">B2B Clients for Luxury Brands</p>
                <p className="text-white/30 text-[10px] mt-3 uppercase tracking-widest">→ svnrglobal.com/blog</p>
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 1 * 0.1 }}>
              <Link to="/blog/cold-email-agency-luxury-brands" className="block liquid-glass rounded-2xl p-5 hover:border-white/20 transition-all border border-white/8">
                <p className="text-[9px] uppercase tracking-widest text-white/30 mb-2">Read</p>
                <p className="text-white/80 text-sm font-medium leading-snug hover:text-white transition-colors">Cold Email for Luxury Brands</p>
                <p className="text-white/30 text-[10px] mt-3 uppercase tracking-widest">→ svnrglobal.com/blog</p>
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 2 * 0.1 }}>
              <Link to="/blog/outbound-lead-generation-luxury-retail" className="block liquid-glass rounded-2xl p-5 hover:border-white/20 transition-all border border-white/8">
                <p className="text-[9px] uppercase tracking-widest text-white/30 mb-2">Read</p>
                <p className="text-white/80 text-sm font-medium leading-snug hover:text-white transition-colors">Outbound for Luxury Retail</p>
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
