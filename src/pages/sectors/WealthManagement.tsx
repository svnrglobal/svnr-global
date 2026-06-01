import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { AreaChart, Area, PieChart, Pie, Cell, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO";

const aumData = [
  { m: "M1", contacts: 20 }, { m: "M3", contacts: 60 }, { m: "M6", contacts: 120 },
  { m: "M9", contacts: 175 }, { m: "M12", contacts: 200 },
];
const segmentData = [
  { name: "Entrepreneur exits", value: 38 }, { name: "NextGen inheritors", value: 30 },
  { name: "Family office", value: 20 }, { name: "Professional wealth", value: 12 },
];
const COLORS = ["#11998e", "#38ef7d", "#A8E063", "#56ab2f"];

const services = [
  { slug: "client-acquisition", label: "Client Acquisition", desc: "Direct outreach to UHNW individuals, founders post-exit, and NextGen inheritors — before they have formalised a wealth management relationship." },
  { slug: "intelligence-research", label: "Intelligence Research", desc: "HNWI prospect profiles built from business press, M&A announcements, director filings, and professional network signals." },
  { slug: "brand-outreach", label: "Brand Outreach", desc: "Discreet, specific outreach at the standard a HNWI prospect expects. Never intrusive. Never generic." },
  { slug: "ai-receptionist", label: "AI Receptionist", desc: "Every inbound enquiry — from referrals, website, or introduced contacts — responded to with precision and routed appropriately." },
];

export default function WealthManagement() {
  return (
    <main className="relative w-full bg-[#0A0A0B] font-sans selection:bg-white/20 selection:text-white">
      <SEO
        title="Wealth Management Client Acquisition | SVNR Global | SVNR Global"
        description="We help wealth management boutiques and RIAs expand their UHNW client base with discretion. AI-driven prospect mapping and personalised outreach to qualified principals."
        canonical="/sectors/wealth-management"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Sectors", url: "/sectors" },
          { name: "Wealth Management", url: "/sectors/wealth-management" },
        ]}
      />
      <section className="relative w-full h-screen flex items-end justify-start overflow-hidden">
        <img src="/sectors/wealth-photo-1444653614773-995cb1ef9efa.avif" alt="Wealth Management" className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="absolute inset-0 z-[1]" style={{ background: "linear-gradient(to top, rgba(10,10,11,1) 0%, rgba(10,10,11,0.4) 50%, rgba(10,10,11,0.1) 100%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-20 w-full">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4">Sector 05</p>
            <h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight mb-4">Wealth<br />Management</h1>
            <p className="text-xl text-white/60 max-w-2xl">Client acquisition for boutique wealth. For wealth boutiques and family office advisors reaching UHNW clients without a brand marketing budget.</p>
            <div className="flex flex-wrap gap-4 mt-8">
              {[{ v: "200+", l: "UHNW contacts / month" }, { v: "$5M+", l: "AUM threshold" }, { v: "8%", l: "First meeting set rate" }].map(s => (
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
            <p className="text-2xl md:text-3xl font-medium text-white max-w-3xl">A wealth boutique. A qualified principal list built and verified. The boutique that asked the right questions about a Zurich family office's succession situation before making contact received a reply in fourteen minutes.</p>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 bg-[#0A0A0B] py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">The Market</p>
            <h2 className="text-4xl font-medium text-white tracking-tight mb-6">The referral model that built the book cannot reach the next generation of wealth.</h2>
            <p className="text-white/60 text-sm leading-relaxed mb-4">The wealth European boutiques have stewarded since the 1990s is transferring. The clients they built their books around are in their 70s. The next generation has different advisors, different communication habits, and different loyalty patterns. They are not staying with the boutique because their father did.</p>
            <p className="text-white/60 text-sm leading-relaxed mb-4">The wealth being created today — from founder exits, private equity proceeds, and the professional class — is not entering the referral networks of established boutiques. It is reachable, but through a different acquisition motion.</p>
            <p className="text-white/60 text-sm leading-relaxed">200+ UHNW contacts reached per month. AUM threshold of $5M+. Every outreach calibrated to the specific individual's circumstances — not a category pitch.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="space-y-6">
            <div className="liquid-glass rounded-3xl p-8">
              <p className="text-[10px] uppercase tracking-widest text-white/30 mb-4">UHNW contacts reached — cumulative</p>
              <div className="h-44">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={aumData}>
                    <defs>
                      <linearGradient id="wm1" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#11998e" stopOpacity={0.4} />
                        <stop offset="95%" stopColor="#11998e" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="m" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 11 }} axisLine={false} tickLine={false} />
                    <Tooltip contentStyle={{ background: "#1A1A1C", border: "none", borderRadius: 8, fontSize: 12, color: "#fff" }} cursor={false} />
                    <Area type="monotone" dataKey="contacts" stroke="#11998e" strokeWidth={2} fill="url(#wm1)" dot={false} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="liquid-glass rounded-3xl p-8">
              <p className="text-[10px] uppercase tracking-widest text-white/30 mb-4">Target segment breakdown</p>
              <div className="h-36">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={segmentData} dataKey="value" cx="50%" cy="50%" outerRadius={55} innerRadius={25} paddingAngle={3}>
                      {segmentData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                    </Pie>
                    <Tooltip contentStyle={{ background: "#1A1A1C", border: "none", borderRadius: 8, fontSize: 12, color: "#fff" }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex flex-wrap gap-2 justify-center mt-2">
                {segmentData.map((d, i) => <div key={d.name} className="flex items-center gap-1"><div className="w-2 h-2 rounded-full" style={{ background: COLORS[i] }} /><span className="text-[10px] text-white/40">{d.name}</span></div>)}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 bg-[#0A0A0B] py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-4">
          {["/sectors/wealth-photo-1444653614773-995cb1ef9efa.avif", "/sectors/wealth-photo-1454165804606-c3d57bc86b40.avif"].map((src, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src={src} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Wealth management" />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-10 bg-[#0A0A0B] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">Applicable Systems</p>
            <h2 className="text-4xl font-medium text-white tracking-tight">Built for wealth boutique acquisition.</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <motion.div key={s.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="liquid-glass rounded-2xl p-8 group card-3d">
                <h3 className="text-white font-medium text-xl mb-3 group-hover:text-green-400 transition-colors">{s.label}</h3>
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
            <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">Reach the UHNW clients your referral network cannot produce.</h2>
            <p className="text-white/50 mb-8 max-w-xl mx-auto">We build the client acquisition infrastructure that reaches new wealth at the moment it is looking for a wealth management conversation.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black text-sm font-medium tracking-wide hover:bg-white/90 transition-all">
              Start the conversation <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      <div className="relative z-10 bg-[#0A0A0B] px-6 pb-10"><div className="max-w-7xl mx-auto"><Footer /></div></div>
    </main>
  );
}
