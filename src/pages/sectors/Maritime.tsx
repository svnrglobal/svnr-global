import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { AreaChart, Area, BarChart, Bar, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO";

const leadsData = [
  { q: "Q1", leads: 4 }, { q: "Q2", leads: 8 }, { q: "Q3", leads: 12 }, { q: "Q4", leads: 15 },
];
const sectorData = [
  { name: "Dry bulk", v: 35 }, { name: "Tankers", v: 28 }, { name: "Containers", v: 22 }, { name: "Offshore", v: 15 },
];

const services = [
  { slug: "client-acquisition", label: "Client Acquisition", desc: "Cargo owner identification, charterer outreach, and port services acquisition, researched and deployed systematically." },
  { slug: "intelligence-research", label: "Intelligence Research", desc: "Cargo owner databases, fleet movement data, and commercial signal monitoring built into a continuous intelligence layer." },
  { slug: "brand-outreach", label: "Brand Outreach", desc: "Commercial outreach written for the shipping industry, specific, professional, and calibrated to how principals communicate." },
  { slug: "sector-workflows", label: "Sector Workflows", desc: "Charter negotiation workflows, port call coordination, and commercial operations automated to reduce manual overhead." },
];

export default function Maritime() {
  return (
    <main className="relative w-full bg-[#0A0A0B] font-sans selection:bg-white/20 selection:text-white">
      <SEO
        title="Maritime & Logistics Business Development | SVNR Global"
        description="Systematic B2B outreach for maritime operators, logistics firms, and freight specialists. We map your target market and build direct relationships with decision-makers."
        canonical="/sectors/maritime-logistics"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Maritime & Logistics Business Development",
            "provider": { "@type": "Organization", "name": "SVNR Global", "url": "https://svnrglobal.com" },
            "description": "Systematic cargo owner identification, charterer outreach, and commercial client acquisition for shipping operators, freight forwarders, and port services providers. Trade-lane specific outreach that builds maritime commercial relationships at scale.",
            "areaServed": ["Global", "Europe", "Middle East", "Asia", "West Africa", "Mediterranean"],
            "serviceType": ["Maritime Business Development", "Freight Forwarder Client Acquisition", "Cargo Owner Outreach", "Port Services Commercial Development"]
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How do shipping companies get new cargo clients systematically?",
                "acceptedAnswer": { "@type": "Answer", "text": "Through systematic outreach to logistics managers, supply chain directors, and procurement teams at companies whose cargo profile and trade lanes match the operator's capabilities, combined with tender intelligence to position before formal RFQ processes begin." }
              },
              {
                "@type": "Question",
                "name": "What is the best business development strategy for freight forwarding?",
                "acceptedAnswer": { "@type": "Answer", "text": "Trade-lane specific outreach targeting shippers whose cargo requirements match the forwarder's network, combined with relationship building at the logistics manager level in mid-market manufacturers and retailers, and proactive positioning ahead of tender cycles." }
              },
              {
                "@type": "Question",
                "name": "How do maritime operators reach logistics decision-makers directly?",
                "acceptedAnswer": { "@type": "Answer", "text": "By identifying logistics directors and supply chain managers at target companies through LinkedIn and industry association databases, then reaching them with messages that reference their specific trade lanes, cargo profile, and operational pressures, not generic freight service marketing." }
              },
              {
                "@type": "Question",
                "name": "What is tender intelligence in maritime and how does it help win new clients?",
                "acceptedAnswer": { "@type": "Answer", "text": "Tender intelligence is awareness of upcoming freight procurement processes before they are formally issued, allowing the operator to build a relationship with the procurement team in advance. Operators who arrive at the tender stage with an existing relationship win at a significantly higher rate than those arriving cold." }
              }
            ]
          }
        ]}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Sectors", url: "/sectors" },
          { name: "Maritime & Logistics", url: "/sectors/maritime-logistics" },
        ]}
      />
      <section className="relative w-full h-screen flex items-end justify-start overflow-hidden">
        <img src="/sectors/maritime-66696B36-CAA5-4117-AA93-881FBF985E5C.JPG" alt="Maritime Logistics" className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="absolute inset-0 z-[1]" style={{ background: "linear-gradient(to top, rgba(10,10,11,1) 0%, rgba(10,10,11,0.4) 50%, rgba(10,10,11,0.1) 100%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-20 w-full">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4">Sector 07</p>
            <h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight mb-4">Maritime &<br />Logistics</h1>
            <p className="text-xl text-white/60 max-w-2xl">Commercial relationships at port scale. For shipping operators, port services, and freight principals building cargo owner and charterer relationships.</p>
            <div className="flex flex-wrap gap-4 mt-8">
              {[{ v: "3K+", l: "Cargo owner contacts mapped" }, { v: "15+", l: "Commercial leads / quarter" }, { v: "8", l: "Sectors covered" }].map(s => (
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
            <p className="text-2xl md:text-3xl font-medium text-white max-w-3xl">Commercial outreach infrastructure built for a European maritime operator, cargo owner contacts mapped, outreach deployed, and 15+ qualified commercial leads generated in the first quarter of operations.</p>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 bg-[#0A0A0B] py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">The Market</p>
            <h2 className="text-4xl font-medium text-white tracking-tight mb-6">Commercial shipping relationships are built before the cargo moves.</h2>
            <p className="text-white/60 text-sm leading-relaxed mb-4">In maritime commercial operations, the relationship with the cargo owner or charterer precedes the transaction. Operators who wait for cargo to come to them through brokers are operating at a disadvantage relative to those who have built direct relationships with the principals who control cargo flow.</p>
            <p className="text-white/60 text-sm leading-relaxed mb-4">We map the cargo owner universe by sector, ship type, and route preference. We identify the commercial decision-makers at each organisation. We deploy outreach that opens conversations before a formal tender or broker process begins.</p>
            <p className="text-white/60 text-sm leading-relaxed">3,000+ cargo owner contacts in our mapped database. 8 shipping sectors covered. Commercial leads generated before formal tender processes begin.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="space-y-6">
            <div className="liquid-glass rounded-3xl p-8">
              <p className="text-[10px] uppercase tracking-widest text-white/30 mb-4">Commercial leads by quarter</p>
              <div className="h-44">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={leadsData}>
                    <defs>
                      <linearGradient id="mt1" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#4facfe" stopOpacity={0.4} />
                        <stop offset="95%" stopColor="#4facfe" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="q" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 11 }} axisLine={false} tickLine={false} />
                    <Tooltip contentStyle={{ background: "#1A1A1C", border: "none", borderRadius: 8, fontSize: 12, color: "#fff" }} cursor={false} />
                    <Area type="monotone" dataKey="leads" stroke="#4facfe" strokeWidth={2} fill="url(#mt1)" dot={false} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="liquid-glass rounded-3xl p-8">
              <p className="text-[10px] uppercase tracking-widest text-white/30 mb-4">Cargo owner distribution by sector</p>
              <div className="h-36">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={sectorData} layout="vertical" barSize={8}>
                    <XAxis type="number" hide />
                    <YAxis type="category" dataKey="name" tick={{ fill: "rgba(255,255,255,0.4)", fontSize: 11 }} axisLine={false} tickLine={false} width={65} />
                    <Tooltip contentStyle={{ background: "#1A1A1C", border: "none", borderRadius: 8, fontSize: 12, color: "#fff" }} cursor={false} />
                    <Bar dataKey="v" fill="#4facfe" radius={4} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 bg-[#0A0A0B] py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-4">
          {["/sectors/maritime-66696B36-CAA5-4117-AA93-881FBF985E5C.JPG", "/sectors/maritime-BDEF64CC-72BD-4FF6-BEB8-883C73230CB0.JPG"].map((src, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src={src} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Maritime logistics business development and cargo owner outreach" />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-10 bg-[#0A0A0B] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <motion.div key={s.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="liquid-glass rounded-2xl p-8 group card-3d">
                <h3 className="text-white font-medium text-xl mb-3 group-hover:text-cyan-400 transition-colors">{s.label}</h3>
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
            <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">Build commercial relationships before the cargo moves.</h2>
            <p className="text-white/50 mb-8 max-w-xl mx-auto">We map the cargo owner universe, reach the right commercial principals, and generate qualified leads before formal tender processes begin.</p>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0 * 0.1 }}>
              <Link to="/blog/maritime-logistics-business-development" className="block liquid-glass rounded-2xl p-5 hover:border-white/20 transition-all border border-white/8">
                <p className="text-[9px] uppercase tracking-widest text-white/30 mb-2">Read</p>
                <p className="text-white/80 text-sm font-medium leading-snug hover:text-white transition-colors">Maritime Business Development</p>
                <p className="text-white/30 text-[10px] mt-3 uppercase tracking-widest">→ svnrglobal.com/blog</p>
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 1 * 0.1 }}>
              <Link to="/blog/client-acquisition-system-vs-campaign" className="block liquid-glass rounded-2xl p-5 hover:border-white/20 transition-all border border-white/8">
                <p className="text-[9px] uppercase tracking-widest text-white/30 mb-2">Read</p>
                <p className="text-white/80 text-sm font-medium leading-snug hover:text-white transition-colors">System vs Campaign</p>
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
