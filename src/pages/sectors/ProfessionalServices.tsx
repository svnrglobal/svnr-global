import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { AreaChart, Area, BarChart, Bar, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO";

const mandateData = [
  { q: "Q1", mandates: 2 }, { q: "Q2", mandates: 4 }, { q: "Q3", mandates: 5 }, { q: "Q4", mandates: 6 },
];
const clientData = [
  { type: "Developer", v: 40 }, { type: "Operator", v: 30 }, { type: "Institutional", v: 20 }, { type: "Private", v: 10 },
];

const services = [
  { slug: "client-acquisition", label: "Client Acquisition", desc: "Pre-RFP client identification: developers, operators, and asset owners in the project pipeline before formal procurement begins." },
  { slug: "intelligence-research", label: "Intelligence Research", desc: "Planning applications, development finance announcements, hotel expansion plans, and project pipeline signals monitored continuously." },
  { slug: "brand-outreach", label: "Brand Outreach", desc: "Principal-level outreach to the developers and operators most likely to commission your studio, specific, researched, peer-level." },
  { slug: "revenue-operations", label: "Revenue Operations", desc: "Mandate pipeline tracked through pre-RFP, shortlist, proposal, and instruction stages. Every relationship stage measured." },
];

export default function ProfessionalServices() {
  return (
    <main className="relative w-full bg-[#0A0A0B] font-sans selection:bg-white/20 selection:text-white">
      <SEO
        title="Professional Services Client Acquisition | SVNR Global"
        description="For law firms, consultancies, accountancies, and advisory practices building a systematic client acquisition pipeline. Outreach that positions you as a peer, not a vendor."
        canonical="/sectors/professional-services"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Professional Services Client Acquisition",
            "provider": { "@type": "Organization", "name": "SVNR Global", "url": "https://svnrglobal.com" },
            "description": "Systematic mandate and client acquisition for law firms, boutique consultancies, accountancies, architecture studios, and advisory practices. Pre-RFP outreach to developers, corporates, and principals that positions the firm as a peer before the brief is issued.",
            "areaServed": ["Global", "Europe", "Middle East", "India", "United Kingdom"],
            "serviceType": ["Law Firm Client Acquisition", "Consultancy Business Development", "Architecture Studio Mandate Pipeline", "Advisory Practice Growth"]
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How do law firms and consultancies get new clients without referrals?",
                "acceptedAnswer": { "@type": "Answer", "text": "Through systematic direct outreach to corporate decision-makers, developers, and operators whose profile and project pipeline match the firm's practice area, reaching them before a formal procurement process begins and positioning the firm as a knowledgeable peer rather than an unsolicited vendor." }
              },
              {
                "@type": "Question",
                "name": "What is the best client acquisition strategy for a boutique law firm?",
                "acceptedAnswer": { "@type": "Answer", "text": "A combination of referral programme formalisation and systematic direct outreach, identifying the corporate clients and decision-makers most aligned with the firm's sector expertise, and maintaining presence through intelligent, low-frequency contact across the months before a mandate arises." }
              },
              {
                "@type": "Question",
                "name": "How long does it take to convert a professional services prospect into a client?",
                "acceptedAnswer": { "@type": "Answer", "text": "Professional services procurement cycles are typically 3–12 months from first contact to signed instruction. The outreach programme must be designed for this timeline, maintaining credibility and presence across multiple touches before a formal opportunity arises." }
              },
              {
                "@type": "Question",
                "name": "Does outreach work for architecture studios and design consultancies?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes. Architecture and design studios are among the most passive sectors in business development, which means systematic outreach faces almost no competition. A studio making disciplined, research-backed contact with developers and hospitality operators each month is operating in a market where almost no competitor does the same." }
              }
            ]
          }
        ]}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Sectors", url: "/sectors" },
          { name: "Professional Services", url: "/sectors/professional-services" },
        ]}
      />
      <section className="relative w-full h-screen flex items-end justify-start overflow-hidden">
        <img src="/sectors/professional-A015474D-5AE6-4690-B0C0-35613EAEE95D.JPG" alt="Professional Services" className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="absolute inset-0 z-[1]" style={{ background: "linear-gradient(to top, rgba(10,10,11,1) 0%, rgba(10,10,11,0.4) 50%, rgba(10,10,11,0.1) 100%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-20 w-full">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4">Sector 08</p>
            <h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight mb-4">Professional<br />Services</h1>
            <p className="text-xl text-white/60 max-w-2xl">The mandated relationship as pipeline. For architecture studios, legal boutiques, and advisory firms where new client relationships come through mandates.</p>
            <div className="flex flex-wrap gap-4 mt-8">
              {[{ v: "6+", l: "Mandate introductions / quarter" }, { v: "8K+", l: "Decision-maker contacts" }, { v: "€250K+", l: "Avg. engagement value" }].map(s => (
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
            <p className="text-2xl md:text-3xl font-medium text-white max-w-3xl">An architecture studio. Six qualified mandate introductions in the first quarter, from developers and operators the studio had no prior relationship with, reached before any RFP was issued.</p>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 bg-[#0A0A0B] py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">The Market</p>
            <h2 className="text-4xl font-medium text-white tracking-tight mb-6">The studio that reaches clients before the RFP wins a different competition.</h2>
            <p className="text-white/60 text-sm leading-relaxed mb-4">Studios shortlisted at the RFP stage have already lost part of the competition. The client has formed opinions, set the brief, and defined the parameters without input from most of the studios responding. The studio that had a conversation with this client six months earlier, when the project was still in planning, entered the process in a completely different position.</p>
            <p className="text-white/60 text-sm leading-relaxed mb-4">Development pipelines are visible before they become briefs. Planning applications are public. Hotel expansion plans are documented. Institutional development programmes are announced. We monitor these signals continuously and put your principals in front of the right clients at the right moment.</p>
            <p className="text-white/60 text-sm leading-relaxed">6+ mandate introductions per quarter. Decision-maker contacts across developer, operator, and institutional segments. Average engagement value above £250K.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="space-y-6">
            <div className="liquid-glass rounded-3xl p-8">
              <p className="text-[10px] uppercase tracking-widest text-white/30 mb-4">Mandate introductions by quarter</p>
              <div className="h-44">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={mandateData}>
                    <defs>
                      <linearGradient id="ps1" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#ffd200" stopOpacity={0.4} />
                        <stop offset="95%" stopColor="#ffd200" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="q" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 11 }} axisLine={false} tickLine={false} />
                    <Tooltip contentStyle={{ background: "#1A1A1C", border: "none", borderRadius: 8, fontSize: 12, color: "#fff" }} cursor={false} />
                    <Area type="monotone" dataKey="mandates" stroke="#ffd200" strokeWidth={2} fill="url(#ps1)" dot={false} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="liquid-glass rounded-3xl p-8">
              <p className="text-[10px] uppercase tracking-widest text-white/30 mb-4">Client profile by type</p>
              <div className="h-36">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={clientData} layout="vertical" barSize={8}>
                    <XAxis type="number" hide />
                    <YAxis type="category" dataKey="type" tick={{ fill: "rgba(255,255,255,0.4)", fontSize: 11 }} axisLine={false} tickLine={false} width={75} />
                    <Tooltip contentStyle={{ background: "#1A1A1C", border: "none", borderRadius: 8, fontSize: 12, color: "#fff" }} cursor={false} />
                    <Bar dataKey="v" fill="#ffd200" radius={4} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 bg-[#0A0A0B] py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-4">
          {["/sectors/professional-A015474D-5AE6-4690-B0C0-35613EAEE95D.JPG", "/sectors/professional-IMG_3168.JPG"].map((src, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src={src} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Professional services firm client acquisition and pre-RFP outreach" />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-10 bg-[#0A0A0B] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <motion.div key={s.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="liquid-glass rounded-2xl p-8 group card-3d">
                <h3 className="text-white font-medium text-xl mb-3 group-hover:text-yellow-300 transition-colors">{s.label}</h3>
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
            <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">Reach clients before they issue the brief.</h2>
            <p className="text-white/50 mb-8 max-w-xl mx-auto">We monitor the development pipeline, identify the right clients, and put your principals in front of them at the moment that matters.</p>
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
              <Link to="/blog/professional-services-client-acquisition" className="block liquid-glass rounded-2xl p-5 hover:border-white/20 transition-all border border-white/8">
                <p className="text-[9px] uppercase tracking-widest text-white/30 mb-2">Read</p>
                <p className="text-white/80 text-sm font-medium leading-snug hover:text-white transition-colors">Professional Services Acquisition</p>
                <p className="text-white/30 text-[10px] mt-3 uppercase tracking-widest">→ svnrglobal.com/blog</p>
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 1 * 0.1 }}>
              <Link to="/blog/architecture-interior-design-studio-client-acquisition" className="block liquid-glass rounded-2xl p-5 hover:border-white/20 transition-all border border-white/8">
                <p className="text-[9px] uppercase tracking-widest text-white/30 mb-2">Read</p>
                <p className="text-white/80 text-sm font-medium leading-snug hover:text-white transition-colors">Architecture Studio Acquisition</p>
                <p className="text-white/30 text-[10px] mt-3 uppercase tracking-widest">→ svnrglobal.com/blog</p>
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 2 * 0.1 }}>
              <Link to="/blog/client-acquisition-cost-referral-dependency" className="block liquid-glass rounded-2xl p-5 hover:border-white/20 transition-all border border-white/8">
                <p className="text-[9px] uppercase tracking-widest text-white/30 mb-2">Read</p>
                <p className="text-white/80 text-sm font-medium leading-snug hover:text-white transition-colors">Breaking Referral Dependency</p>
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
