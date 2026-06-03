import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  RadialBarChart, RadialBar, PieChart, Pie, Cell,
  AreaChart, Area,
} from "recharts";
import { VIDEOS, SECTORS } from "../data/content";
import VideoHero from "../components/VideoHero";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

const sectorCharts: Record<string, React.ReactNode> = {
  "luxury-rugs-home-textiles": (
    <BarChart data={[
      { market: "DE", value: 45 }, { market: "FR", value: 38 }, { market: "UK", value: 52 },
      { market: "US", value: 61 }, { market: "AE", value: 29 }, { market: "JP", value: 22 },
    ]}>
      <XAxis dataKey="market" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10 }} axisLine={false} tickLine={false} />
      <YAxis hide />
      <Tooltip contentStyle={{ background: "#1A1A1C", border: "none", borderRadius: 8, fontSize: 11, color: "#fff" }} />
      <Bar dataKey="value" fill="#F5A623" radius={[4, 4, 0, 0]} />
    </BarChart>
  ),
  "premium-real-estate": (
    <AreaChart data={[
      { m: "Jan", hni: 12 }, { m: "Feb", hni: 19 }, { m: "Mar", hni: 31 },
      { m: "Apr", hni: 44 }, { m: "May", hni: 58 }, { m: "Jun", hni: 72 },
    ]}>
      <defs>
        <linearGradient id="re-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#0071E3" stopOpacity={0.4} />
          <stop offset="95%" stopColor="#0071E3" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey="m" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10 }} axisLine={false} tickLine={false} />
      <YAxis hide />
      <Tooltip contentStyle={{ background: "#1A1A1C", border: "none", borderRadius: 8, fontSize: 11, color: "#fff" }} />
      <Area type="monotone" dataKey="hni" stroke="#0071E3" strokeWidth={2} fill="url(#re-grad)" dot={false} />
    </AreaChart>
  ),
  "private-equity-family-offices": (
    <PieChart>
      <Pie data={[{ value: 75 }, { value: 25 }]} cx="50%" cy="50%" innerRadius={30} outerRadius={50} startAngle={90} endAngle={-270}>
        <Cell fill="#764ba2" />
        <Cell fill="rgba(255,255,255,0.05)" />
      </Pie>
      <Tooltip contentStyle={{ background: "#1A1A1C", border: "none", borderRadius: 8, fontSize: 11, color: "#fff" }} />
    </PieChart>
  ),
  "b2b-luxury-brands": (
    <BarChart data={[
      { q: "Q1", leads: 28 }, { q: "Q2", leads: 35 }, { q: "Q3", leads: 41 }, { q: "Q4", leads: 52 },
    ]}>
      <XAxis dataKey="q" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10 }} axisLine={false} tickLine={false} />
      <YAxis hide />
      <Tooltip contentStyle={{ background: "#1A1A1C", border: "none", borderRadius: 8, fontSize: 11, color: "#fff" }} />
      <Bar dataKey="leads" fill="#f953c6" radius={[4, 4, 0, 0]} />
    </BarChart>
  ),
  "wealth-management": (
    <RadialBarChart cx="50%" cy="50%" innerRadius={20} outerRadius={55} data={[{ value: 8, fill: "#38ef7d" }, { value: 100, fill: "rgba(255,255,255,0.05)" }]}>
      <RadialBar dataKey="value" />
      <Tooltip contentStyle={{ background: "#1A1A1C", border: "none", borderRadius: 8, fontSize: 11, color: "#fff" }} />
    </RadialBarChart>
  ),
  "high-ticket-ecommerce": (
    <AreaChart data={[
      { m: "M1", aov: 100 }, { m: "M2", aov: 148 }, { m: "M3", aov: 212 }, { m: "M4", aov: 280 }, { m: "M5", aov: 312 },
    ]}>
      <defs>
        <linearGradient id="hte-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#3F5EFB" stopOpacity={0.4} />
          <stop offset="95%" stopColor="#3F5EFB" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey="m" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10 }} axisLine={false} tickLine={false} />
      <YAxis hide />
      <Tooltip contentStyle={{ background: "#1A1A1C", border: "none", borderRadius: 8, fontSize: 11, color: "#fff" }} />
      <Area type="monotone" dataKey="aov" stroke="#3F5EFB" strokeWidth={2} fill="url(#hte-grad)" dot={false} />
    </AreaChart>
  ),
  "maritime-logistics": (
    <BarChart data={[
      { sector: "Bulk", value: 32 }, { sector: "Container", value: 48 }, { sector: "Tanker", value: 28 }, { sector: "RoRo", value: 18 },
    ]}>
      <XAxis dataKey="sector" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 9 }} axisLine={false} tickLine={false} />
      <YAxis hide />
      <Tooltip contentStyle={{ background: "#1A1A1C", border: "none", borderRadius: 8, fontSize: 11, color: "#fff" }} />
      <Bar dataKey="value" fill="#4facfe" radius={[4, 4, 0, 0]} />
    </BarChart>
  ),
  "professional-services": (
    <AreaChart data={[
      { q: "Q1", mandates: 2 }, { q: "Q2", mandates: 4 }, { q: "Q3", mandates: 5 }, { q: "Q4", mandates: 6 },
    ]}>
      <defs>
        <linearGradient id="ps-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#ffd200" stopOpacity={0.4} />
          <stop offset="95%" stopColor="#ffd200" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey="q" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10 }} axisLine={false} tickLine={false} />
      <YAxis hide />
      <Tooltip contentStyle={{ background: "#1A1A1C", border: "none", borderRadius: 8, fontSize: 11, color: "#fff" }} />
      <Area type="monotone" dataKey="mandates" stroke="#ffd200" strokeWidth={2} fill="url(#ps-grad)" dot={false} />
    </AreaChart>
  ),
};

export default function Sectors() {
  return (
    <main className="relative w-full bg-[#0A0A0B] font-sans selection:bg-white/20 selection:text-white">
      <SEO
        title="Industries We Serve — Luxury, Real Estate, Private Equity & More | SVNR Global"
        description="SVNR Global delivers AI client acquisition systems tailored to luxury rug brands, premium real estate firms, private equity, wealth management, maritime, B2B luxury, and high-ticket e-commerce operators."
        canonical="/sectors"
        schema={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Industries Served by SVNR Global",
          "url": "https://svnrglobal.com/sectors",
          "description": "Sector-specific AI outreach and client acquisition for luxury, real estate, private equity, wealth management, maritime, and more.",
          "publisher": { "@type": "Organization", "name": "SVNR Global", "url": "https://svnrglobal.com" }
        }}
      />
      <VideoHero src={VIDEOS.sectors}>
        <div className="max-w-4xl mx-auto px-6 text-center pt-20 sm:pt-32 pb-14 sm:pb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-6"
          >
            Industries
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="text-4xl sm:text-5xl md:text-6xl font-medium text-white leading-tight tracking-tight mb-6"
          >
            We operate in<br />
            <span className="shimmer-text">eight industries.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7 }}
            className="text-white/50 text-lg"
          >
            Each industry has its own operating rhythm. We build accordingly.
          </motion.p>
        </div>
      </VideoHero>

      <section className="relative z-10 bg-[#0A0A0B] py-12 md:py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {SECTORS.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.06 }}
              className="liquid-glass rounded-3xl overflow-hidden"
            >
              <div className="h-1 w-full" style={{ background: s.gradient }} />
              <div className="p-5 sm:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-white/20 block mb-2">{s.number}</span>
                    <h3 className="text-xl font-medium text-white mb-1">{s.label}</h3>
                    <p className="text-white/50 text-sm">{s.title}</p>
                  </div>
                  <Link
                    to={`/sectors/${s.slug}`}
                    className="p-2 rounded-full border border-white/10 hover:border-white/30 transition-all"
                  >
                    <ArrowRight size={14} className="text-white/50" />
                  </Link>
                </div>

                <p className="text-white/50 text-sm leading-relaxed mb-6">{s.summary}</p>

                {/* Animated chart */}
                <div className="h-24 mb-6">
                  <ResponsiveContainer width="100%" height="100%">
                    {sectorCharts[s.slug] as React.ReactElement}
                  </ResponsiveContainer>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {s.metrics.map((m) => (
                    <div key={m.label} className="text-center">
                      <div className="text-base sm:text-lg font-medium text-white stat-number">{m.value}{m.unit}</div>
                      <div className="text-[8px] sm:text-[9px] text-white/30 mt-0.5 leading-tight">{m.label}</div>
                    </div>
                  ))}
                </div>

                {s.proof && (
                  <div className="mt-5 pt-5 border-t border-white/8">
                    <p className="text-xs text-white/40 italic">{s.proof}</p>
                  </div>
                )}
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
