import { motion } from "motion/react";
import { AreaChart, Area, Tooltip, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { VIDEOS } from "../data/content";
import VideoHero from "../components/VideoHero";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

const caseStudies = [
  {
    label: "German Carpet House",
    sector: "Luxury Rugs & Home Textiles",
    headline: "13 qualified B2B enquiries in under two weeks.",
    body: "A heritage carpet manufacturer with established product but no systematic approach to new distribution. We mapped the A&D community across DACH and Benelux, built a precision outreach sequence, and activated it. The first qualified enquiries arrived within 72 hours.",
    metrics: [
      { value: "13", label: "Qualified B2B enquiries" },
      { value: "14", label: "Days to results" },
      { value: "5", label: "New markets activated" },
    ],
    gradient: "linear-gradient(137deg, #F5A623 0%, #F7971E 50%, #FFD200 100%)",
    chartData: [{ w: "W1", v: 2 }, { w: "W2", v: 7 }, { w: "W3", v: 13 }],
    chartColor: "#F5A623",
  },
  {
    label: "Zurich Real Estate Firm",
    sector: "Premium Real Estate",
    headline: "A qualified principal replied in fourteen minutes.",
    body: "A Swiss real estate principal operating primarily off-market needed a systematic way to reach HNW investors across Europe. We built the intelligence layer, mapped the right principals, and deployed a message architecture that read like a peer-to-peer introduction.",
    metrics: [
      { value: "14 min", label: "Time to first qualified reply" },
      { value: "200+", label: "HNW principals contacted" },
      { value: "68%", label: "Response rate improvement" },
    ],
    gradient: "linear-gradient(137deg, #0071E3 0%, #5AC8FA 50%, #34C759 100%)",
    chartData: [{ w: "W1", v: 12 }, { w: "W2", v: 34 }, { w: "W3", v: 58 }, { w: "W4", v: 72 }],
    chartColor: "#0071E3",
  },
  {
    label: "Wealth Boutique",
    sector: "Wealth Management",
    headline: "Mapped to a qualified principal list before any cold message was sent.",
    body: "A boutique wealth advisory firm needed to expand their client base without compromising the discretion their existing clients expected. We built the intelligence infrastructure first, verified every contact, then deployed a carefully calibrated sequence.",
    metrics: [
      { value: "500+", label: "UHNW profiles built" },
      { value: "97%", label: "Contact accuracy rate" },
      { value: "8%", label: "First meeting conversion" },
    ],
    gradient: "linear-gradient(137deg, #11998e 0%, #38ef7d 50%, #A8E063 100%)",
    chartData: [{ w: "W1", v: 0 }, { w: "W2", v: 0 }, { w: "W3", v: 500 }, { w: "W4", v: 500 }],
    chartColor: "#38ef7d",
  },
  {
    label: "B2B Luxury Brand",
    sector: "B2B Luxury Brands",
    headline: "78% increase in qualified trade buyer enquiries within six weeks.",
    body: "A premium lifestyle brand with strong D2C performance but limited wholesale presence. We identified and mapped 400 trade buyers across their target markets, built a multi-touch sequence, and activated the channel in parallel with their existing sales motion.",
    metrics: [
      { value: "78%", label: "Enquiry increase" },
      { value: "6", label: "Weeks to results" },
      { value: "400", label: "Trade buyers mapped" },
    ],
    gradient: "linear-gradient(137deg, #f953c6 0%, #b91d73 50%, #FF6B6B 100%)",
    chartData: [{ w: "W1", v: 15 }, { w: "W2", v: 22 }, { w: "W3", v: 31 }, { w: "W4", v: 38 }, { w: "W5", v: 44 }, { w: "W6", v: 78 }],
    chartColor: "#f953c6",
  },
];

export default function Results() {
  return (
    <main className="relative w-full bg-[#0A0A0B] font-sans selection:bg-white/20 selection:text-white">
      <SEO
        title="Client Results & Case Studies — AI Outreach Outcomes | SVNR Global"
        description="See real outcomes from SVNR Global's AI client acquisition systems: 312% increase in AOV, 78% rise in qualified enquiries, and consistent pipeline results across luxury, real estate, and private equity."
        canonical="/results"
        schema={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "SVNR Global Client Results",
          "url": "https://svnrglobal.com/results",
          "description": "Measurable outcomes from AI-powered outreach campaigns across luxury, real estate, private equity, and high-ticket B2B sectors.",
          "publisher": { "@type": "Organization", "name": "SVNR Global", "url": "https://svnrglobal.com" }
        }}
      />
      <VideoHero src={VIDEOS.main}>
        <div className="max-w-4xl mx-auto px-6 text-center pt-32 pb-24">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-6">
            Proof
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}
            className="text-5xl md:text-6xl font-medium text-white leading-tight tracking-tight mb-6">
            The system is the differentiator.<br />
            <span className="shimmer-text">The results follow.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
            className="text-white/50 text-lg">
            Specific proof. Not generic claims.
          </motion.p>
        </div>
      </VideoHero>

      <section className="relative z-10 bg-[#0A0A0B] py-16 px-6">
        <div className="max-w-6xl mx-auto space-y-8">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.08 }}
              className="liquid-glass rounded-3xl overflow-hidden"
            >
              <div className="h-0.5 w-full" style={{ background: cs.gradient }} />
              <div className="p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 block mb-3">{cs.sector}</span>
                  <h3 className="text-2xl font-medium text-white mb-4 tracking-tight">{cs.label}</h3>
                  <p className="text-lg text-white/80 italic mb-4">{cs.headline}</p>
                  <p className="text-sm text-white/50 leading-relaxed">{cs.body}</p>

                  <div className="grid grid-cols-3 gap-4 mt-8">
                    {cs.metrics.map((m) => (
                      <div key={m.label}>
                        <div className="text-xl font-medium text-white stat-number">{m.value}</div>
                        <div className="text-[10px] text-white/30 mt-1 leading-tight">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-[10px] uppercase tracking-widest text-white/20 mb-3">Result trajectory</p>
                  <div className="h-40">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={cs.chartData}>
                        <defs>
                          <linearGradient id={`r-grad-${i}`} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor={cs.chartColor} stopOpacity={0.3} />
                            <stop offset="95%" stopColor={cs.chartColor} stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <XAxis dataKey="w" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10 }} axisLine={false} tickLine={false} />
                        <YAxis hide />
                        <Tooltip contentStyle={{ background: "#1A1A1C", border: "none", borderRadius: 8, fontSize: 11, color: "#fff" }} />
                        <Area type="monotone" dataKey="v" stroke={cs.chartColor} strokeWidth={2.5} fill={`url(#r-grad-${i})`} dot={false} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="relative z-10 px-6 pb-10 max-w-7xl mx-auto">
        <Footer />
      </div>
    </main>
  );
}
