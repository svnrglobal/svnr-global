import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO";

const pipelineData = [
  { q: "Q1", pre: 3, banker: 1 }, { q: "Q2", pre: 5, banker: 2 },
  { q: "Q3", pre: 7, banker: 2 }, { q: "Q4", pre: 8, banker: 2 },
];
const signalData = [
  { name: "Succession", value: 35 }, { name: "Capital need", value: 28 },
  { name: "Market consol.", value: 22 }, { name: "Strategic", value: 15 },
];
const COLORS = ["#667eea", "#764ba2", "#BF5AF2", "#9b59b6"];

const services = [
  { slug: "dealflow-investor", label: "Dealflow for Investors", desc: "Proprietary deal flow infrastructure: mandate defined, targets mapped, founders reached before the banker deck arrives." },
  { slug: "intelligence-research", label: "Intelligence Research", desc: "Sector maps built to investment thesis depth. Company profiles, ownership structure, succession signals, EBITDA inference." },
  { slug: "brand-outreach", label: "Brand Outreach", desc: "Founder-appropriate outreach that does not read like a financial pitch. Written for the individual, not the category." },
  { slug: "revenue-operations", label: "Revenue Operations", desc: "Full pipeline visibility across all active deal relationships — stage, last contact, next action, and conversion signal." },
];

const insights = [
  "The most valuable transaction a PE firm executes is the one it sourced before anyone else knew it was available. Not because the company was hidden — because the firm had a relationship with the founder three months before the formal process.",
  "A thesis specific enough to generate a researchable target universe is the foundation of proprietary deal flow. 'B2B services in Western Europe' is a category. 'Founder-led industrial maintenance businesses with 8-20M EBITDA and no succession plan' is a thesis.",
  "The volume trap: 500 generic emails to founders produce no relationships. 50 thoughtful, research-anchored contacts produce 50 first steps toward genuine conversations. The pipeline that generates proprietary deals is deep, not wide.",
  "Founders remember which firms have been intelligent and specific in their outreach. The firm they call when the moment arrives is the one they have had the most substantive conversations with — not the most recognisable name.",
];

export default function PrivateEquity() {
  return (
    <main className="relative w-full bg-[#0A0A0B] font-sans selection:bg-white/20 selection:text-white">
      <SEO
        title="Private Equity Deal Flow & Investor Relations | SVNR Global | SVNR Global"
        description="Proprietary deal flow infrastructure for PE firms and family offices. We surface opportunities before they are formally marketed through relationship-driven outreach."
        canonical="/sectors/private-equity-family-offices"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Sectors", url: "/sectors" },
          { name: "Private Equity & Family Offices", url: "/sectors/private-equity-family-offices" },
        ]}
      />
      <section className="relative w-full h-screen flex items-end justify-start overflow-hidden">
        <img src="/sectors/private-equity-photo-1504711434969-e33886168f5c.avif" alt="Private Equity" className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="absolute inset-0 z-[1]" style={{ background: "linear-gradient(to top, rgba(10,10,11,1) 0%, rgba(10,10,11,0.4) 50%, rgba(10,10,11,0.1) 100%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-20 w-full">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4">Sector 03</p>
            <h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight mb-4">Private Equity &<br />Family Offices</h1>
            <p className="text-xl text-white/60 max-w-2xl">Deal flow before the process. Proprietary pipeline infrastructure for investors who need to see opportunities before they are formally marketed.</p>
            <div className="flex flex-wrap gap-4 mt-8">
              {[{ v: "75%", l: "Pre-process deal flow" }, { v: "2K+", l: "GP network contacts" }, { v: "€50M+", l: "Avg. deal size tracked" }].map(s => (
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
            <p className="text-2xl md:text-3xl font-medium text-white max-w-3xl">A wealth boutique. A qualified principal list built and verified before the first outreach message was sent. 75% of deal conversations initiated before any formal process began.</p>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 bg-[#0A0A0B] py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">The Market Reality</p>
            <h2 className="text-4xl font-medium text-white tracking-tight mb-6">By the time the teaser arrives, you are already competing.</h2>
            {insights.map((insight, i) => (
              <motion.p key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-white/60 text-sm leading-relaxed mb-4">{insight}</motion.p>
            ))}
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="space-y-6">
            <div className="liquid-glass rounded-3xl p-8">
              <p className="text-[10px] uppercase tracking-widest text-white/30 mb-4">Pre-process vs. banker-led deal flow</p>
              <div className="h-44">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={pipelineData} barSize={14} barGap={4}>
                    <XAxis dataKey="q" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 11 }} axisLine={false} tickLine={false} />
                    <YAxis hide />
                    <Tooltip contentStyle={{ background: "#1A1A1C", border: "none", borderRadius: 8, fontSize: 12, color: "#fff" }} cursor={false} />
                    <Bar dataKey="pre" fill="#667eea" radius={4} name="Pre-process" />
                    <Bar dataKey="banker" fill="rgba(255,255,255,0.15)" radius={4} name="Banker-led" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="liquid-glass rounded-3xl p-8">
              <p className="text-[10px] uppercase tracking-widest text-white/30 mb-4">Deal trigger signals — distribution</p>
              <div className="h-40">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={signalData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={60} innerRadius={30} paddingAngle={3}>
                      {signalData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                    </Pie>
                    <Tooltip contentStyle={{ background: "#1A1A1C", border: "none", borderRadius: 8, fontSize: 12, color: "#fff" }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex flex-wrap gap-3 justify-center mt-2">
                {signalData.map((d, i) => <div key={d.name} className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full" style={{ background: COLORS[i] }} /><span className="text-[10px] text-white/40">{d.name}</span></div>)}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 bg-[#0A0A0B] py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-4">
          {["/sectors/private-equity-photo-1504711434969-e33886168f5c.avif", "/sectors/private-equity-photo-1506787497326-c2736dde1bef.avif", "/sectors/private-equity-premium_photo-1679456904325-19ca215974a7.avif"].map((src, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="rounded-2xl overflow-hidden aspect-square">
              <img src={src} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Private equity" />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-10 bg-[#0A0A0B] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">Applicable Systems</p>
            <h2 className="text-4xl font-medium text-white tracking-tight">Built for investor deal sourcing.</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <motion.div key={s.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="liquid-glass rounded-2xl p-8 group card-3d">
                <h3 className="text-white font-medium text-xl mb-3 group-hover:text-purple-400 transition-colors">{s.label}</h3>
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
            <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">See the deal before the banker does.</h2>
            <p className="text-white/50 mb-8 max-w-xl mx-auto">We build the proprietary sourcing infrastructure that produces founder relationships before any formal process begins.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black text-sm font-medium tracking-wide hover:bg-white/90 transition-all">
              Discuss your mandate <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      <div className="relative z-10 bg-[#0A0A0B] px-6 pb-10"><div className="max-w-7xl mx-auto"><Footer /></div></div>
    </main>
  );
}
