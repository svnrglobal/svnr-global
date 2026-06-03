import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Database, Zap, TrendingUp, BarChart2 } from "lucide-react";
import { BarChart, Bar, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO";

const gradient = "linear-gradient(135deg, #f093fb, #f5576c)";

const chartData = [
  { label: "Before", pipeline: 65, closedWon: 12 },
  { label: "Month 1", pipeline: 88, closedWon: 18 },
  { label: "Month 2", pipeline: 124, closedWon: 27 },
  { label: "Month 3", pipeline: 168, closedWon: 38 },
  { label: "Month 4", pipeline: 204, closedWon: 44 },
  { label: "Month 5", pipeline: 245, closedWon: 51 },
  { label: "Month 6", pipeline: 267, closedWon: 56 },
];

const capabilities = [
  { icon: Database, title: "CRM Architecture", desc: "We design and deploy a CRM that reflects how you actually sell — not how a software vendor thinks you should." },
  { icon: Zap, title: "Pipeline Automation", desc: "Every stage of your pipeline is automated: follow-ups, task creation, deal stage movement, and alerts." },
  { icon: TrendingUp, title: "Deal Velocity Tracking", desc: "See exactly where deals stall, which rep closes fastest, and which channels produce the best outcomes." },
  { icon: BarChart2, title: "Conversion Analytics", desc: "Full-funnel reporting from first touch to closed revenue. Understand your numbers, not just your feelings." },
];

const steps = [
  { n: "01", title: "Audit current pipeline", desc: "We document your existing pipeline, conversion rates, deal stages, and where revenue is lost." },
  { n: "02", title: "Design CRM architecture", desc: "We architect a CRM structure that maps to your actual sales motion, not generic templates." },
  { n: "03", title: "Build automation flows", desc: "Sequences, tasks, notifications, and integrations are built and tested end-to-end." },
  { n: "04", title: "Deploy tracking infrastructure", desc: "Analytics dashboards and reporting pipelines go live so you see performance in real time." },
  { n: "05", title: "Optimise continuously", desc: "Monthly reviews of pipeline health, conversion rates, and automation performance with actionable recommendations." },
];

const sectors = ["Private Equity", "B2B Luxury", "Professional Services", "High-Ticket Ecommerce"];

export default function RevenueOperations() {
  return (
    <main className="relative w-full bg-[#0A0A0B] font-sans selection:bg-white/20 selection:text-white">
      <SEO
        title="Revenue Operations — Pipeline Management & Automation | SVNR Global"
        description="Full-funnel revenue ops built around your deal cycle. Every stage tracked. Every signal acted on. No more pipeline surprises."
        canonical="/services/revenue-operations"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Revenue Operations — Pipeline Management & Automation",
            "provider": { "@type": "Organization", "name": "SVNR Global", "url": "https://svnrglobal.com" },
            "description": "Full-funnel revenue operations infrastructure for premium B2B operators. Pipeline stage tracking, deal signal monitoring, CRM automation, and reporting architecture built specifically for your deal cycle — no generic templates.",
            "areaServed": ["Global"],
            "serviceType": ["Revenue Operations", "Pipeline Management", "CRM Automation", "Sales Operations", "Deal Tracking"]
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is revenue operations for a premium B2B company?",
                "acceptedAnswer": { "@type": "Answer", "text": "Revenue operations is the infrastructure that tracks every deal relationship from first contact to signed client — monitoring stage progression, last contact dates, next action triggers, and conversion signals. It ensures no opportunity is lost to administrative gap, delayed follow-up, or pipeline blindness." }
              },
              {
                "@type": "Question",
                "name": "How does SVNR's revenue operations service differ from a standard CRM setup?",
                "acceptedAnswer": { "@type": "Answer", "text": "Standard CRM setups use off-the-shelf templates. SVNR builds revenue operations infrastructure specifically around your deal cycle — the stages, signals, and timeline relevant to your sector. A luxury real estate pipeline is structured differently from a PE deal sourcing pipeline, which is different from a wealth management client acquisition pipeline." }
              },
              {
                "@type": "Question",
                "name": "What tools does SVNR use for revenue operations?",
                "acceptedAnswer": { "@type": "Answer", "text": "SVNR builds on the infrastructure stack appropriate to the client's existing setup — typically HubSpot, Notion, Airtable, or custom dashboards built in Make or n8n. The specific tool is less important than the architecture: stage definitions, signal logic, and reporting that gives the principal complete pipeline visibility." }
              },
              {
                "@type": "Question",
                "name": "Can revenue operations be integrated with SVNR's outreach infrastructure?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes. Revenue operations is most powerful when connected to SVNR's outreach infrastructure — warm handoffs from the acquisition system feed directly into the pipeline tracking layer, and stage progression triggers automated follow-up sequences where appropriate." }
              }
            ]
          }
        ]}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Revenue Operations", url: "/services/revenue-operations" },
        ]}
      />
      <section className="relative w-full h-screen flex items-end justify-start overflow-hidden">
        <video className="absolute inset-0 w-full h-full object-cover z-0" src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_115655_b4d9cd77-feed-43cd-a198-af78ebdf1f7a.mp4" autoPlay loop muted playsInline />
        <div className="absolute inset-0 z-[1]" style={{ background: "linear-gradient(to top, rgba(10,10,11,1) 0%, rgba(10,10,11,0.55) 55%, rgba(10,10,11,0.25) 100%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-20 w-full">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4">Service 02</p>
            <h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight mb-4">Revenue Operations</h1>
            <p className="text-xl text-white/60 max-w-xl">The infrastructure that turns conversations into closed revenue.</p>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 bg-[#0A0A0B] pt-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="rounded-2xl overflow-hidden border border-white/10">
            <img src="/services/revenue-operations.png" alt="Revenue Operations Dashboard" className="w-full h-auto object-cover" />
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 bg-[#0A0A0B] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-6">Which industries benefit most</p>
            <div className="flex flex-wrap gap-3">
              {sectors.map((s) => (
                <span key={s} className="px-4 py-2 rounded-full text-xs uppercase tracking-widest text-white/70 border border-white/15">{s}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 bg-[#0A0A0B] py-16 px-6 border-t border-white/8">
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-8">
          {[{ value: "312%", label: "Pipeline increase" }, { value: "2.4x", label: "Close rate improvement" }, { value: "60 days", label: "Payback period" }].map((m) => (
            <motion.div key={m.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
              <div className="text-4xl md:text-5xl font-medium text-white mb-2">{m.value}</div>
              <p className="text-xs uppercase tracking-widest text-white/40">{m.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-10 bg-[#0A0A0B] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">Capabilities</p>
            <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight">What the system delivers</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((c, i) => (
              <motion.div key={c.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                whileHover={{ rotateX: -5, rotateY: 5, scale: 1.02 }} style={{ transformStyle: "preserve-3d", perspective: 1000 }}
                className="liquid-glass rounded-2xl p-7">
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

      <section className="relative z-10 bg-[#0A0A0B] py-24 px-6 border-t border-white/8">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">Process</p>
            <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight">How the system deploys</h2>
          </motion.div>
          <div className="relative">
            <div className="hidden md:block absolute left-[28px] top-0 bottom-0 w-px bg-white/10" />
            <div className="space-y-8">
              {steps.map((step, i) => (
                <motion.div key={step.n} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-8">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center text-xs font-medium text-white border border-white/20 bg-[#0A0A0B] relative z-10">{step.n}</div>
                  <div className="pt-3">
                    <h3 className="text-white font-medium mb-1">{step.title}</h3>
                    <p className="text-sm text-white/50 leading-relaxed max-w-xl">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-[#0A0A0B] py-24 px-6 border-t border-white/8">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">Performance</p>
            <h2 className="text-3xl font-medium text-white tracking-tight">Revenue pipeline before & after</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="liquid-glass rounded-2xl p-8">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <XAxis dataKey="label" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 11 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 11 }} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={{ background: "#1A1A1C", border: "none", borderRadius: 8, fontSize: 12, color: "#fff" }} />
                  <Bar dataKey="pipeline" fill="#f093fb" radius={[4, 4, 0, 0]} name="Pipeline" />
                  <Bar dataKey="closedWon" fill="#f5576c" radius={[4, 4, 0, 0]} name="Closed Won" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 bg-[#0A0A0B] py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight">Turn conversations into revenue.</h2>
            <p className="text-white/50 mb-10">Infrastructure that tracks, follows up, and closes — without manual effort.</p>
            <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-all">
              Book a Consultation <ArrowRight size={14} />
            </Link>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0 * 0.1 }}>
              <Link to="/blog/client-acquisition-system-vs-campaign" className="block liquid-glass rounded-2xl p-5 hover:border-white/20 transition-all border border-white/8">
                <p className="text-[9px] uppercase tracking-widest text-white/30 mb-2">Read</p>
                <p className="text-white/80 text-sm font-medium leading-snug hover:text-white transition-colors">System vs Campaign</p>
                <p className="text-white/30 text-[10px] mt-3 uppercase tracking-widest">→ svnrglobal.com/blog</p>
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 1 * 0.1 }}>
              <Link to="/blog/what-is-outreach-infrastructure" className="block liquid-glass rounded-2xl p-5 hover:border-white/20 transition-all border border-white/8">
                <p className="text-[9px] uppercase tracking-widest text-white/30 mb-2">Read</p>
                <p className="text-white/80 text-sm font-medium leading-snug hover:text-white transition-colors">What Is Outreach Infrastructure</p>
                <p className="text-white/30 text-[10px] mt-3 uppercase tracking-widest">→ svnrglobal.com/blog</p>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="relative z-10 px-6 pb-10 max-w-7xl mx-auto"><Footer /></div>
    </main>
  );
}
