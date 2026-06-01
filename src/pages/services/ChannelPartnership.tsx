import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Network, Users, Award, TrendingUp, ArrowRight } from "lucide-react";
import { AreaChart, Area, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO";

const chartData = [
  { m: "M1", partners: 5 }, { m: "M2", partners: 12 },
  { m: "M3", partners: 18 }, { m: "M4", partners: 25 },
];

const capabilities = [
  { icon: Network, title: "Channel Audit", desc: "We map your current distribution relationships — architects, designers, specifiers, agents — and identify the gaps your product should be filling." },
  { icon: Users, title: "Partner ICP", desc: "The exact profile of the right trade partner for your product: project type, client profile, geography, and purchasing authority." },
  { icon: Award, title: "Outreach Build", desc: "Targeted outreach to the specific studios, agencies, and specifiers who match your ideal partner profile. Personal, specific, and branded." },
  { icon: TrendingUp, title: "Activation Programme", desc: "Onboarding new partners into active relationships — sample programmes, briefing packs, and the first project introductions." },
];

const steps = [
  { n: "01", title: "Channel audit", desc: "Current distribution mapped. Gap analysis completed. Target partner profile defined before outreach begins." },
  { n: "02", title: "Partner ICP", desc: "The right partner profile built — firm type, project category, geographic focus, and qualification criteria." },
  { n: "03", title: "Outreach build", desc: "Specific, branded outreach deployed to the studios and specifiers who match your product positioning." },
  { n: "04", title: "Activation programme", desc: "New partners activated with samples, briefing materials, and introduction pathways to their first specification." },
];

const sectors = ["Luxury Rugs", "B2B Luxury Brands", "High-Ticket E-commerce", "Professional Services", "Maritime", "Real Estate"];

export default function ChannelPartnership() {
  return (
    <main className="relative w-full bg-[#0A0A0B] font-sans selection:bg-white/20 selection:text-white">
      <SEO
        title="Channel Partnership — Trade Distribution Activation | SVNR Global"
        description="We build the system that finds, reaches, and activates the right architects, designers, and specifiers for your product. Trade distribution built through relationships."
        canonical="/services/channel-partnership"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Channel Partnership", url: "/services/channel-partnership" },
        ]}
      />
      <section className="relative w-full h-screen flex items-end justify-start overflow-hidden">
        <video className="absolute inset-0 w-full h-full object-cover z-0" src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_115655_b4d9cd77-feed-43cd-a198-af78ebdf1f7a.mp4" autoPlay loop muted playsInline />
        <div className="absolute inset-0 z-[1]" style={{ background: "linear-gradient(to top, rgba(10,10,11,1) 0%, rgba(10,10,11,0.55) 55%, rgba(10,10,11,0.25) 100%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-20 w-full">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4">Service 08</p>
            <h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight mb-4">Channel Partnership</h1>
            <p className="text-xl text-white/60 max-w-xl">Build the distribution layer. Systematic trade partner acquisition for operators who sell through agents, studios, or channels.</p>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 bg-[#0A0A0B] pt-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="rounded-2xl overflow-hidden border border-white/10">
            <img src="/services/channel-partnership.png" alt="Channel Partnership Dashboard" className="w-full h-auto object-cover" />
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 bg-[#0A0A0B] py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">The Problem</p>
            <h2 className="text-4xl font-medium text-white tracking-tight mb-6">Trade distribution is won through relationships, not marketing.</h2>
            <p className="text-white/60 leading-relaxed mb-6">The architect who specifies your product, the interior designer who recommends it, the purchasing agent who sources it — these are not won through advertising. They are won through a structured programme of finding, reaching, and activating the right people in the right way. We build that programme.</p>
            <p className="text-white/60 leading-relaxed">25+ partner leads per month. 44% activation rate. 60% of revenue attributable to the channel layer within 12 months of programme launch.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
            <div className="liquid-glass rounded-3xl p-8">
              <p className="text-[10px] uppercase tracking-widest text-white/30 mb-4">Partners activated over time</p>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient id="cp1" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#00C6FF" stopOpacity={0.4} />
                        <stop offset="95%" stopColor="#00C6FF" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="m" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 11 }} axisLine={false} tickLine={false} />
                    <Tooltip contentStyle={{ background: "#1A1A1C", border: "none", borderRadius: 8, fontSize: 12, color: "#fff" }} cursor={false} />
                    <Area type="monotone" dataKey="partners" stroke="#00C6FF" strokeWidth={2} fill="url(#cp1)" dot={false} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/10">
                <div className="text-center"><div className="text-2xl font-medium text-white">25+</div><div className="text-[10px] text-white/30 mt-1">Partner leads / mo</div></div>
                <div className="text-center"><div className="text-2xl font-medium text-white">44%</div><div className="text-[10px] text-white/30 mt-1">Activation rate</div></div>
                <div className="text-center"><div className="text-2xl font-medium text-white">60%</div><div className="text-[10px] text-white/30 mt-1">Revenue from partners</div></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 bg-[#0A0A0B] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">The system</p>
            <h2 className="text-4xl font-medium text-white tracking-tight">From audit to active distribution.</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map((c, i) => (
              <motion.div key={c.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="liquid-glass rounded-2xl p-8 card-3d">
                <c.icon size={28} className="text-cyan-400 mb-4" />
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
            <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">Build the distribution layer your product deserves.</h2>
            <p className="text-white/50 mb-8 max-w-xl mx-auto">We identify, reach, and activate the trade partners who will carry your product to the right market.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black text-sm font-medium tracking-wide hover:bg-white/90 transition-all">
              Start the conversation <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      <div className="relative z-10 bg-[#0A0A0B] px-6 pb-10">
        <div className="max-w-7xl mx-auto"><Footer /></div>
      </div>
    </main>
  );
}
