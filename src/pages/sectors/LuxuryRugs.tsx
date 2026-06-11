import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { AreaChart, Area, BarChart, Bar, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import Footer from "../../components/Footer";
import FaqSection from "../../components/FaqSection";
import SEO from "../../components/SEO";
import EngagementTimeline from "../../components/EngagementTimeline";


const enquiryData = [
  { week: "W1", enquiries: 2 }, { week: "W2", enquiries: 5 },
  { week: "W3", enquiries: 8 }, { week: "W4", enquiries: 11 },
  { week: "W5", enquiries: 13 }, { week: "W6", enquiries: 13 },
];

const geoData = [
  { market: "Germany", value: 100 },
  { market: "UAE", value: 85 },
  { market: "US", value: 72 },
  { market: "UK", value: 65 },
  { market: "Japan", value: 48 },
];

const services = [
  { slug: "client-acquisition", label: "Client Acquisition", desc: "Systematic outreach to A&D studios and trade buyers in new geographies, mapped, researched, and personalised." },
  { slug: "brand-outreach", label: "Brand Outreach", desc: "Messages written at the level of the interior designer or architect you are trying to reach. No templates." },
  { slug: "channel-partnership", label: "Channel Partnership", desc: "Structured programme to find and activate the right showrooms, specifiers, and trade partners in your target markets." },
  { slug: "intelligence-research", label: "Intelligence Research", desc: "A&D community mapped by city, project type, and material history. Know who to reach before you reach them." },
];

const insights = [
  "The A&D community is the primary distribution channel for luxury rug brands. Interior designers specify product. Their specification drives purchase. The relationship is a wholesale relationship, not a consumer marketing one.",
  "Geographic gaps in distribution are almost always the result of opportunistic rather than systematic development. A brand strong in Germany but absent in the Netherlands has not failed, it has simply not yet reached that market with a structured programme.",
  "Trade fairs are amplifiers, not acquisition channels. The brand that arrives at Domotex with 10 warm relationships already in place has a fundamentally different experience than the brand arriving cold.",
  "The A&D community operates on its own timeline, not the trade fair calendar. The designer specifying for a hospitality project in June is not waiting for January to find a new supplier.",
];

const LUXURY_RUGS_FAQS = [
  { q: "How do luxury rug brands enter new markets without a showroom?", a: "By systematically identifying and reaching interior designers and trade buyers in the target market through direct outreach, mapping the A&D community by name, initiating contact with personalised messages, and building trade relationships before committing to permanent retail infrastructure." },
  { q: "What is the best distribution channel for luxury handmade rugs?", a: "The architecture and interior design community is the primary distribution channel. Interior designers specify rugs for client projects at a level that drives consistent volume. Building direct trade relationships with designers in target markets is more efficient than relying on trade fairs or showrooms alone." },
  { q: "How long does it take to build trade distribution in a new market for a rug brand?", a: "A structured 90-day programme can identify qualifying designers and buyers, initiate contact with the most relevant targets, and produce active trade relationships in a new geography. SVNR's programmes have generated 13 qualified enquiries in the first 14 days without a showroom or trade fair." },
  { q: "What role do trade fairs play in luxury rug distribution?", a: "Trade fairs are amplifiers, not acquisition channels. Brands that use direct outreach to build warm relationships before a fair opens use the same exhibition investment to advance existing conversations rather than make cold introductions in a crowded hall." },
];

export default function LuxuryRugs() {
  return (
    <main className="relative w-full bg-[#0A0A0B] font-sans selection:bg-white/20 selection:text-white">
      <SEO
        title="Luxury Rugs & Home Textiles Client Acquisition | SVNR Global"
        description="B2B client acquisition for luxury rug and carpet brands. We map the A&D community in your target markets and deliver qualified trade enquiries. 13 qualified leads in 14 days — without trade fairs or showrooms."
        canonical="/sectors/luxury-rugs-home-textiles"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Luxury Rugs & Home Textiles B2B Distribution Development",
            "provider": { "@id": "https://svnrglobal.com/#organization" },
            "description": "Systematic A&D community outreach and trade buyer acquisition for luxury rug brands and handmade carpet manufacturers entering new international markets. 13 qualified B2B enquiries in 14 days, without trade fairs.",
            "areaServed": ["Global", "Europe", "Germany", "United Kingdom", "United States", "UAE", "Japan"],
            "serviceType": ["Luxury Rug Distribution", "A&D Community Outreach", "Trade Buyer Acquisition", "New Market Entry"]
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How do luxury rug brands enter new markets without a showroom?",
                "acceptedAnswer": { "@type": "Answer", "text": "By systematically identifying and reaching interior designers and trade buyers in the target market through direct outreach, mapping the A&D community by name, initiating contact with personalised messages, and building trade relationships before committing to permanent retail infrastructure." }
              },
              {
                "@type": "Question",
                "name": "What is the best distribution channel for luxury handmade rugs?",
                "acceptedAnswer": { "@type": "Answer", "text": "The architecture and interior design community is the primary distribution channel. Interior designers specify rugs for client projects at a level that drives consistent volume. Building direct trade relationships with designers in target markets is more efficient than relying on trade fairs or showrooms alone." }
              },
              {
                "@type": "Question",
                "name": "How long does it take to build trade distribution in a new market for a rug brand?",
                "acceptedAnswer": { "@type": "Answer", "text": "A structured 90-day programme can identify qualifying designers and buyers, initiate contact with the most relevant targets, and produce active trade relationships in a new geography. SVNR's programmes have generated 13 qualified enquiries in the first 14 days without a showroom or trade fair." }
              },
              {
                "@type": "Question",
                "name": "What role do trade fairs play in luxury rug distribution?",
                "acceptedAnswer": { "@type": "Answer", "text": "Trade fairs are amplifiers, not acquisition channels. Brands that use direct outreach to build warm relationships before a fair opens use the same exhibition investment to advance existing conversations rather than make cold introductions in a crowded hall." }
              }
            ]
          }
        ]}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Sectors", url: "/sectors" },
          { name: "Luxury Rugs & Home Textiles", url: "/sectors/luxury-rugs-home-textiles" },
        ]}
      />
      {/* HERO */}
      <section className="relative w-full h-screen flex items-end justify-start overflow-hidden">
        <img fetchPriority="high" decoding="async" src="/sectors/luxury-rugs-photo-1600166930985-a86f7295dd99.avif" alt="Luxury Rugs" className="absolute inset-0 w-full h-full object-cover z-0" />
        <img loading="lazy" decoding="async" src="/sectors/luxury-rugs-premium_photo-1664114727312-cf38fd519315.avif" alt="Premium handmade luxury rug weaves and textures" className="absolute inset-0 w-full h-full object-cover z-0 opacity-0 hover:opacity-100 transition-opacity duration-1000" />
        <div className="absolute inset-0 z-[1]" style={{ background: "linear-gradient(to top, rgba(10,10,11,1) 0%, rgba(10,10,11,0.4) 50%, rgba(10,10,11,0.1) 100%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-20 w-full">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4">Sector 01</p>
            <h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight mb-4">Luxury Rugs &<br />Home Textiles</h1>
            <p className="text-xl text-white/60 max-w-2xl">Distribution built for craft. For rug and carpet houses building international B2B distribution where the A&D community specifies everything.</p>
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="liquid-glass rounded-2xl px-6 py-3">
                <div className="text-2xl font-medium text-white">13</div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest">Qualified enquiries / 2 weeks</div>
              </div>
              <div className="liquid-glass rounded-2xl px-6 py-3">
                <div className="text-2xl font-medium text-white">18</div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest">Markets served</div>
              </div>
              <div className="liquid-glass rounded-2xl px-6 py-3">
                <div className="text-2xl font-medium text-white">10K+</div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest">A&D contacts mapped</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROOF */}
      <section className="relative z-10 bg-[#0A0A0B] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="liquid-glass rounded-3xl p-8 md:p-12">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">Proof</p>
            <p className="text-2xl md:text-3xl font-medium text-white max-w-3xl">A German carpet house. Thirteen qualified B2B enquiries in under two weeks, from interior designers and trade buyers across four geographies the brand had no prior presence in.</p>
          </motion.div>
        </div>
      </section>

      {/* THE MARKET */}
      <section className="relative z-10 bg-[#0A0A0B] py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">The Market</p>
            <h2 className="text-4xl font-medium text-white tracking-tight mb-6">The A&D community is the distribution channel.</h2>
            {insights.map((insight, i) => (
              <motion.p key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-white/60 text-sm leading-relaxed mb-4">
                {insight}
              </motion.p>
            ))}
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="space-y-6">
            <div className="liquid-glass rounded-3xl p-8">
              <p className="text-[10px] uppercase tracking-widest text-white/30 mb-4">Enquiry trajectory, first 6 weeks</p>
              <div className="h-44">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={enquiryData}>
                    <defs>
                      <linearGradient id="lr1" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#F5A623" stopOpacity={0.4} />
                        <stop offset="95%" stopColor="#F5A623" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="week" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 11 }} axisLine={false} tickLine={false} />
                    <Tooltip contentStyle={{ background: "#1A1A1C", border: "none", borderRadius: 8, fontSize: 12, color: "#fff" }} cursor={false} />
                    <Area type="monotone" dataKey="enquiries" stroke="#F5A623" strokeWidth={2} fill="url(#lr1)" dot={false} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="liquid-glass rounded-3xl p-8">
              <p className="text-[10px] uppercase tracking-widest text-white/30 mb-4">Market index by geography</p>
              <div className="h-40">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={geoData} layout="vertical" barSize={8}>
                    <XAxis type="number" hide />
                    <YAxis type="category" dataKey="market" tick={{ fill: "rgba(255,255,255,0.4)", fontSize: 11 }} axisLine={false} tickLine={false} width={55} />
                    <Tooltip contentStyle={{ background: "#1A1A1C", border: "none", borderRadius: 8, fontSize: 12, color: "#fff" }} cursor={false} />
                    <Bar dataKey="value" fill="#F5A623" radius={4} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* IMAGES */}
      <section className="relative z-10 bg-[#0A0A0B] py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-4">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="rounded-2xl overflow-hidden aspect-[4/3]">
            <img loading="lazy" decoding="async" src="/sectors/luxury-rugs-photo-1600166930985-a86f7295dd99.avif" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Luxury rug and carpet brand distribution strategy for new markets" />
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="rounded-2xl overflow-hidden aspect-[4/3]">
            <img loading="lazy" decoding="async" src="/sectors/luxury-rugs-premium_photo-1664114727312-cf38fd519315.avif" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Premium handmade textile trade buyer outreach and stockist acquisition" />
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      {/* THE 90-DAY PATH: engagement timeline */}
      <section className="relative z-10 bg-[#0A0A0B] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">The 90-day path</p>
            <h2 className="text-3xl font-medium text-white tracking-tight">From engagement to active pipeline.</h2>
          </motion.div>
          <EngagementTimeline accent="#F5A623" milestones={[{"when":"Week 0","label":"A&D universe mapped by name"},{"when":"Week 2","label":"Outreach live"},{"when":"Day 14","label":"13 qualified enquiries"},{"when":"Day 90","label":"Distribution pipeline active"}]} />
        </div>
      </section>

      <section className="relative z-10 bg-[#0A0A0B] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">Applicable Systems</p>
            <h2 className="text-4xl font-medium text-white tracking-tight">The infrastructure built for this sector.</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <motion.div key={s.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="liquid-glass rounded-2xl p-8 group card-3d">
                <h3 className="text-white font-medium text-xl mb-3 group-hover:text-yellow-300 transition-colors">{s.label}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4">{s.desc}</p>
                <Link to={`/services/${s.slug}`} className="inline-flex items-center gap-2 text-xs text-white/40 hover:text-white transition-colors">
                  Learn more <ArrowRight size={12} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* RELATED INSIGHTS */}
      <section className="relative z-10 bg-[#0A0A0B] pb-16 px-6 border-t border-white/8">
        <div className="max-w-7xl mx-auto pt-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-3">Related Insights</p>
            <h2 className="text-2xl font-medium text-white tracking-tight">From the SVNR blog</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0 * 0.1 }}>
              <Link to="/blog/luxury-rug-brand-distribution-strategy" className="block liquid-glass rounded-2xl p-5 hover:border-white/20 transition-all border border-white/8">
                <p className="text-[9px] uppercase tracking-widest text-white/30 mb-2">Read</p>
                <p className="text-white/80 text-sm font-medium leading-snug hover:text-white transition-colors">Distribution Without a Showroom</p>
                <p className="text-white/30 text-[10px] mt-3 uppercase tracking-widest">→ svnrglobal.com/blog</p>
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 1 * 0.1 }}>
              <Link to="/blog/outbound-lead-generation-luxury-retail" className="block liquid-glass rounded-2xl p-5 hover:border-white/20 transition-all border border-white/8">
                <p className="text-[9px] uppercase tracking-widest text-white/30 mb-2">Read</p>
                <p className="text-white/80 text-sm font-medium leading-snug hover:text-white transition-colors">Outbound for Luxury Retail</p>
                <p className="text-white/30 text-[10px] mt-3 uppercase tracking-widest">→ svnrglobal.com/blog</p>
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 2 * 0.1 }}>
              <Link to="/blog/cold-email-agency-luxury-brands" className="block liquid-glass rounded-2xl p-5 hover:border-white/20 transition-all border border-white/8">
                <p className="text-[9px] uppercase tracking-widest text-white/30 mb-2">Read</p>
                <p className="text-white/80 text-sm font-medium leading-snug hover:text-white transition-colors">Cold Email for Luxury Brands</p>
                <p className="text-white/30 text-[10px] mt-3 uppercase tracking-widest">→ svnrglobal.com/blog</p>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="relative z-10 bg-[#0A0A0B] py-24 px-6">
        <div className="max-w-4xl mx-auto text-center liquid-glass rounded-3xl p-12 md:p-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">Ready to build distribution in new markets?</h2>
            <p className="text-white/50 mb-8 max-w-xl mx-auto">We map the A&D community in your target geographies and deploy the outreach infrastructure that builds lasting trade relationships.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black text-sm font-medium tracking-wide hover:bg-white/90 transition-all">
              Start the conversation <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      
      <FaqSection faqs={LUXURY_RUGS_FAQS} title="Common questions about luxury rug market entry" />

      <div className="relative z-10 bg-[#0A0A0B] px-6 pb-10"><div className="max-w-7xl mx-auto"><Footer /></div></div>
    </main>
  );
}
