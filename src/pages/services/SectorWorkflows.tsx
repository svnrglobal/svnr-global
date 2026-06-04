import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Workflow, Settings, Zap, Database, ArrowRight } from "lucide-react";
import { AreaChart, Area, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO";


const beforeAfter = [
  { label: "Before", hours: 100, errors: 14 },
  { label: "Week 2", hours: 70, errors: 8 },
  { label: "Week 4", hours: 50, errors: 4 },
  { label: "Week 6", hours: 35, errors: 2 },
  { label: "Week 8", hours: 30, errors: 0.2 },
];

const capabilities = [
  { icon: Settings, title: "Process Audit", desc: "We map every manual step in your current operations, quoting, follow-up, onboarding, reporting, and identify what to automate first." },
  { icon: Workflow, title: "Flow Design", desc: "Custom automation flows built specifically for how your sector operates. No generic templates. No mis-fit processes." },
  { icon: Zap, title: "Integration Build", desc: "We wire together your existing tools, CRM, email, communication channels, data sources, into flows that run without human input." },
  { icon: Database, title: "Live Deployment", desc: "Flows deployed, tested, and handed over with documentation. Your team trains in hours, not weeks." },
];

const steps = [
  { n: "01", title: "Process audit", desc: "Every manual workflow documented. Time spent, error rate, and handoff points mapped before we write a single automation." },
  { n: "02", title: "Flow design", desc: "Custom automation designed around your vertical's actual operating logic. No off-the-shelf templates repurposed." },
  { n: "03", title: "Integration build", desc: "Tools connected, data flowing, triggers tested. Built to run without daily maintenance from your team." },
  { n: "04", title: "Live deployment", desc: "Go-live with your team trained, documentation delivered, and monitoring in place. Support through the first 30 days." },
];

const sectors = ["Luxury Rugs", "Real Estate", "Private Equity", "Wealth Management", "High-Ticket E-commerce", "Maritime"];

export default function SectorWorkflows() {
  return (
    <main className="relative w-full bg-[#0A0A0B] font-sans selection:bg-white/20 selection:text-white">
      <SEO
        title="Sector Workflows — Industry-Specific Automation | SVNR Global"
        description="Operations built for your vertical. We build workflow infrastructure specific to how your business actually runs, not generic automation."
        canonical="/services/sector-workflows"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Sector Workflows, Industry-Specific Automation",
            "provider": { "@type": "Organization", "name": "SVNR Global", "url": "https://svnrglobal.com" },
            "description": "Custom AI workflow automation built for specific industry verticals, luxury brands, wealth management, real estate, maritime, and professional services. Not generic automation. Systems built around how your business actually operates.",
            "areaServed": ["Global"],
            "serviceType": ["Sector Workflow Automation", "Industry-Specific AI Automation", "Business Process Automation", "Operational AI Systems"]
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is sector-specific workflow automation?",
                "acceptedAnswer": { "@type": "Answer", "text": "Sector-specific workflow automation is AI-driven process automation built around the actual operational requirements of a defined industry, not generic automation tools applied generically. A luxury brand's wholesale enquiry workflow is different from a real estate firm's deal workflow, which is different from a wealth manager's client onboarding workflow. Each is built to match." }
              },
              {
                "@type": "Question",
                "name": "What workflows does SVNR typically automate for luxury and B2B companies?",
                "acceptedAnswer": { "@type": "Answer", "text": "Common automations include: wholesale enquiry handling and quote generation, trade partner onboarding sequences, inbound lead qualification and routing, deal stage tracking and follow-up triggers, report generation, and CRM data enrichment. Each is built specifically for the client's operational context." }
              },
              {
                "@type": "Question",
                "name": "What tools does SVNR use to build sector workflows?",
                "acceptedAnswer": { "@type": "Answer", "text": "SVNR builds on Make, n8n, Airtable, Notion, HubSpot, and custom AI agents depending on the workflow requirements. The tools are selected for the task, not applied as a one-size-fits-all stack." }
              },
              {
                "@type": "Question",
                "name": "How long does it take to deploy a custom sector workflow?",
                "acceptedAnswer": { "@type": "Answer", "text": "Simple workflow automations can be designed, built, and deployed within 1–2 weeks. Complex multi-system integrations typically take 3–4 weeks. All workflows are delivered with documentation and a testing phase before full deployment." }
              }
            ]
          }
        ]}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Sector Workflows", url: "/services/sector-workflows" },
        ]}
      />
      <section className="relative w-full h-screen flex items-end justify-start overflow-hidden">
        <video className="absolute inset-0 w-full h-full object-cover z-0" src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_115655_b4d9cd77-feed-43cd-a198-af78ebdf1f7a.mp4" autoPlay loop muted playsInline />
        <div className="absolute inset-0 z-[1]" style={{ background: "linear-gradient(to top, rgba(10,10,11,1) 0%, rgba(10,10,11,0.55) 55%, rgba(10,10,11,0.25) 100%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-20 w-full">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4">Service 04</p>
            <h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight mb-4">Sector Workflows</h1>
            <p className="text-xl text-white/60 max-w-xl">Operations built for your vertical. Automation that understands how your industry actually runs.</p>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 bg-[#0A0A0B] pt-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="rounded-2xl overflow-hidden border border-white/10">
            <img src="/services/sector-workflows.png" alt="Sector Workflows Dashboard" className="w-full h-auto object-cover" />
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 bg-[#0A0A0B] py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">The Problem</p>
            <h2 className="text-4xl font-medium text-white tracking-tight mb-6">Generic automation breaks in specialist businesses.</h2>
            <p className="text-white/60 leading-relaxed mb-6">A rug house quotes differently than a PE firm. A wealth boutique onboards clients differently than a maritime operator. Generic workflow tools give you the building blocks. We build the actual structure, specific to your vertical, your operating logic, and how your clients expect to be handled.</p>
            <p className="text-white/60 leading-relaxed">70% process time reduction. 0.2% error rate. 3 FTEs worth of manual work returned to your team for higher-value activities.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
            <div className="liquid-glass rounded-3xl p-8">
              <p className="text-[10px] uppercase tracking-widest text-white/30 mb-4">Process hours, before vs. after</p>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={beforeAfter}>
                    <defs>
                      <linearGradient id="sw1" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#34C759" stopOpacity={0.4} />
                        <stop offset="95%" stopColor="#34C759" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="label" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 11 }} axisLine={false} tickLine={false} />
                    <Tooltip contentStyle={{ background: "#1A1A1C", border: "none", borderRadius: 8, fontSize: 12, color: "#fff" }} cursor={false} />
                    <Area type="monotone" dataKey="hours" stroke="#34C759" strokeWidth={2} fill="url(#sw1)" dot={false} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/10">
                <div className="text-center"><div className="text-2xl font-medium text-white">70%</div><div className="text-[10px] text-white/30 mt-1">Time reduction</div></div>
                <div className="text-center"><div className="text-2xl font-medium text-white">0.2%</div><div className="text-[10px] text-white/30 mt-1">Error rate</div></div>
                <div className="text-center"><div className="text-2xl font-medium text-white">3</div><div className="text-[10px] text-white/30 mt-1">FTEs displaced</div></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 bg-[#0A0A0B] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">Capabilities</p>
            <h2 className="text-4xl font-medium text-white tracking-tight">Automation that runs your operations.</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map((c, i) => (
              <motion.div key={c.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="liquid-glass rounded-2xl p-8 card-3d">
                <c.icon size={28} className="text-yellow-400 mb-4" />
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
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">Deployment</p>
            <h2 className="text-4xl font-medium text-white tracking-tight max-w-xl">From audit to live in under six weeks.</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div key={s.n} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative">
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
            <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">Ready to reclaim the time your team spends on process?</h2>
            <p className="text-white/50 mb-8 max-w-xl mx-auto">We audit your current workflows, design the automation, and deploy it, specific to your vertical.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black text-sm font-medium tracking-wide hover:bg-white/90 transition-all">
              Book a workflow audit <ArrowRight size={14} />
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0 * 0.1 }}>
              <Link to="/blog/b2b-outreach-agency-india" className="block liquid-glass rounded-2xl p-5 hover:border-white/20 transition-all border border-white/8">
                <p className="text-[9px] uppercase tracking-widest text-white/30 mb-2">Read</p>
                <p className="text-white/80 text-sm font-medium leading-snug hover:text-white transition-colors">B2B Outreach Agency India</p>
                <p className="text-white/30 text-[10px] mt-3 uppercase tracking-widest">→ svnrglobal.com/blog</p>
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 1 * 0.1 }}>
              <Link to="/blog/professional-services-client-acquisition" className="block liquid-glass rounded-2xl p-5 hover:border-white/20 transition-all border border-white/8">
                <p className="text-[9px] uppercase tracking-widest text-white/30 mb-2">Read</p>
                <p className="text-white/80 text-sm font-medium leading-snug hover:text-white transition-colors">Professional Services Acquisition</p>
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
