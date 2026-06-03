import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { BarChart, Bar, AreaChart, Area, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO";

const aovData = [
  { ch: "D2C", aov: 100 }, { ch: "Trade Q1", aov: 180 }, { ch: "Trade Q2", aov: 260 }, { ch: "Trade Q3", aov: 312 },
];
const pipelineData = [
  { m: "M1", leads: 8 }, { m: "M2", leads: 16 }, { m: "M3", leads: 25 }, { m: "M4", leads: 30 },
];

const services = [
  { slug: "client-acquisition", label: "Client Acquisition", desc: "Systematic identification of wholesale buyers, retail partners, and trade accounts in your target geographies." },
  { slug: "channel-partnership", label: "Channel Partnership", desc: "Trade distribution built alongside D2C — finding, reaching, and activating the stockists who carry your product correctly." },
  { slug: "revenue-operations", label: "Revenue Operations", desc: "Wholesale pipeline tracked end-to-end: lead to order, order to repeat. Every stage measured and managed." },
  { slug: "sector-workflows", label: "Sector Workflows", desc: "B2B operations automated — trade pricing, wholesale enquiry handling, partner onboarding, and order logistics." },
];

export default function HighTicketEcommerce() {
  return (
    <main className="relative w-full bg-[#0A0A0B] font-sans selection:bg-white/20 selection:text-white">
      <SEO
        title="High-Ticket E-commerce Client Acquisition | SVNR Global"
        description="For premium D2C and wholesale operators looking to grow average order value and trade buyer relationships. AI-powered outreach that converts."
        canonical="/sectors/high-ticket-ecommerce"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "High-Ticket E-commerce & Wholesale Buyer Acquisition",
            "provider": { "@type": "Organization", "name": "SVNR Global", "url": "https://svnrglobal.com" },
            "description": "AI-powered wholesale buyer and trade account acquisition for premium D2C and high-ticket e-commerce operators. Systematic outreach that builds B2B distribution alongside D2C — delivering 312% average order value increase through trade channels.",
            "areaServed": ["Global", "Europe", "United Kingdom", "United States", "Middle East"],
            "serviceType": ["Wholesale Buyer Acquisition", "Trade Account Development", "High-Ticket E-commerce Distribution", "D2C to B2B Expansion"]
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How do premium e-commerce brands build a wholesale channel?",
                "acceptedAnswer": { "@type": "Answer", "text": "By systematically identifying wholesale buyers, boutique retailers, and trade accounts in target geographies — researching each buyer's category focus, price architecture, and order profile — then initiating direct contact with outreach specific to their purchasing profile." }
              },
              {
                "@type": "Question",
                "name": "Why does wholesale outperform D2C for high-ticket products?",
                "acceptedAnswer": { "@type": "Answer", "text": "Wholesale trade accounts order at larger volumes, return less frequently, and carry product at its correct brand positioning. SVNR client data shows a 312% average order value increase when premium operators add a trade distribution channel alongside D2C." }
              },
              {
                "@type": "Question",
                "name": "How many wholesale leads can SVNR generate per month for a premium brand?",
                "acceptedAnswer": { "@type": "Answer", "text": "Most programmes generate 25–35 qualified wholesale buyer contacts per month from month one. The conversion rate from contact to active trade account averages 41% across high-ticket e-commerce engagements." }
              },
              {
                "@type": "Question",
                "name": "Does SVNR work with D2C brands that have no existing wholesale experience?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes. SVNR builds the trade distribution infrastructure from scratch — ICP definition, buyer mapping, wholesale outreach sequences, and trade account onboarding workflows — for brands entering B2B for the first time." }
              }
            ]
          }
        ]}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Sectors", url: "/sectors" },
          { name: "High-Ticket E-commerce", url: "/sectors/high-ticket-ecommerce" },
        ]}
      />
      <section className="relative w-full h-screen flex items-end justify-start overflow-hidden">
        <img src="/sectors/ecommerce-EA694261-B27B-44EA-9C9C-02F22C06A07B.jpg" alt="High-Ticket E-commerce" className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="absolute inset-0 z-[1]" style={{ background: "linear-gradient(to top, rgba(10,10,11,1) 0%, rgba(10,10,11,0.4) 50%, rgba(10,10,11,0.1) 100%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-20 w-full">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4">Sector 06</p>
            <h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight mb-4">High-Ticket<br />E-commerce</h1>
            <p className="text-xl text-white/60 max-w-2xl">B2B distribution for premium products. For high-ticket operators building wholesale and trade distribution alongside their D2C channel.</p>
            <div className="flex flex-wrap gap-4 mt-8">
              {[{ v: "30+", l: "Wholesale leads / month" }, { v: "41%", l: "Trade buyer activation" }, { v: "312%", l: "AOV increase via trade" }].map(s => (
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
            <p className="text-2xl md:text-3xl font-medium text-white max-w-3xl">A premium product operator. 312% increase in average order value through the B2B channel — built through systematic wholesale outreach that D2C marketing could not have produced.</p>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 bg-[#0A0A0B] py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">The Opportunity</p>
            <h2 className="text-4xl font-medium text-white tracking-tight mb-6">The B2B channel produces 312% higher AOV than D2C alone.</h2>
            <p className="text-white/60 text-sm leading-relaxed mb-4">High-ticket product operators with a strong D2C channel often underestimate the wholesale opportunity available to them. The trade buyer — an interior designer, a boutique retailer, a property developer specifying for multiple units — orders at a scale and frequency that transforms unit economics.</p>
            <p className="text-white/60 text-sm leading-relaxed mb-4">Reaching these buyers requires a different motion than consumer advertising. They need to be identified, reached on the right channel, and activated through a trade onboarding process that reflects the quality of the product they are considering.</p>
            <p className="text-white/60 text-sm leading-relaxed">30+ wholesale leads per month. 41% trade buyer activation rate. Built as a parallel channel alongside D2C, not as a replacement for it.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="space-y-6">
            <div className="liquid-glass rounded-3xl p-8">
              <p className="text-[10px] uppercase tracking-widest text-white/30 mb-4">AOV index — D2C vs. trade channel</p>
              <div className="h-44">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={aovData} barSize={28}>
                    <XAxis dataKey="ch" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 11 }} axisLine={false} tickLine={false} />
                    <YAxis hide />
                    <Tooltip contentStyle={{ background: "#1A1A1C", border: "none", borderRadius: 8, fontSize: 12, color: "#fff" }} cursor={false} />
                    <Bar dataKey="aov" fill="#FC466B" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="liquid-glass rounded-3xl p-8">
              <p className="text-[10px] uppercase tracking-widest text-white/30 mb-4">Wholesale pipeline build over 4 months</p>
              <div className="h-36">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={pipelineData}>
                    <defs>
                      <linearGradient id="ht1" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3F5EFB" stopOpacity={0.4} />
                        <stop offset="95%" stopColor="#3F5EFB" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="m" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 11 }} axisLine={false} tickLine={false} />
                    <Tooltip contentStyle={{ background: "#1A1A1C", border: "none", borderRadius: 8, fontSize: 12, color: "#fff" }} cursor={false} />
                    <Area type="monotone" dataKey="leads" stroke="#3F5EFB" strokeWidth={2} fill="url(#ht1)" dot={false} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 bg-[#0A0A0B] py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-4">
          {["/sectors/ecommerce-EA694261-B27B-44EA-9C9C-02F22C06A07B.jpg", "/sectors/ecommerce-IMG_3162.JPG"].map((src, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src={src} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="High-ticket ecommerce" />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-10 bg-[#0A0A0B] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">Applicable Systems</p>
            <h2 className="text-4xl font-medium text-white tracking-tight">Built for high-ticket wholesale growth.</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <motion.div key={s.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="liquid-glass rounded-2xl p-8 group card-3d">
                <h3 className="text-white font-medium text-xl mb-3 group-hover:text-red-400 transition-colors">{s.label}</h3>
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
            <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">Build the wholesale channel your product has been missing.</h2>
            <p className="text-white/50 mb-8 max-w-xl mx-auto">We identify, reach, and activate the B2B buyers who will carry your product at scale and at the right price point.</p>
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
              <Link to="/blog/outbound-lead-generation-luxury-retail" className="block liquid-glass rounded-2xl p-5 hover:border-white/20 transition-all border border-white/8">
                <p className="text-[9px] uppercase tracking-widest text-white/30 mb-2">Read</p>
                <p className="text-white/80 text-sm font-medium leading-snug hover:text-white transition-colors">Outbound for Luxury Retail</p>
                <p className="text-white/30 text-[10px] mt-3 uppercase tracking-widest">→ svnrglobal.com/blog</p>
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 1 * 0.1 }}>
              <Link to="/blog/how-to-get-b2b-clients-luxury-brand" className="block liquid-glass rounded-2xl p-5 hover:border-white/20 transition-all border border-white/8">
                <p className="text-[9px] uppercase tracking-widest text-white/30 mb-2">Read</p>
                <p className="text-white/80 text-sm font-medium leading-snug hover:text-white transition-colors">B2B Clients for Luxury Brands</p>
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
