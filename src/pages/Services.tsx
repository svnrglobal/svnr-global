import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { AreaChart, Area, ResponsiveContainer, Tooltip } from "recharts";
import { VIDEOS, SERVICES } from "../data/content";
import VideoHero from "../components/VideoHero";
import FeatureCard from "../components/FeatureCard";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

const metricChartData: Record<string, { data: { name: string; value: number }[]; color: string }> = {
  "client-acquisition": { data: [{ name: "W1", value: 4 }, { name: "W2", value: 9 }, { name: "W3", value: 18 }, { name: "W4", value: 28 }, { name: "W5", value: 35 }, { name: "W6", value: 40 }], color: "#FF3D77" },
  "ai-receptionist": { data: [{ name: "M", value: 60 }, { name: "T", value: 45 }, { name: "W", value: 50 }, { name: "T", value: 42 }, { name: "F", value: 38 }, { name: "S", value: 55 }], color: "#06B6D4" },
  "revenue-operations": { data: [{ name: "Q1", value: 65 }, { name: "Q2", value: 71 }, { name: "Q3", value: 84 }, { name: "Q4", value: 100 }], color: "#4361EE" },
  "sector-workflows": { data: [{ name: "Before", value: 100 }, { name: "Wk2", value: 70 }, { name: "Wk4", value: 50 }, { name: "Wk6", value: 35 }, { name: "Wk8", value: 30 }], color: "#34C759" },
  "intelligence-research": { data: [{ name: "Jan", value: 120 }, { name: "Feb", value: 280 }, { name: "Mar", value: 380 }, { name: "Apr", value: 500 }], color: "#BF5AF2" },
  "brand-outreach": { data: [{ name: "Seq1", value: 18 }, { name: "Seq2", value: 24 }, { name: "Seq3", value: 38 }, { name: "Seq4", value: 52 }], color: "#f953c6" },
  "dealflow-investor": { data: [{ name: "Q1", value: 3 }, { name: "Q2", value: 5 }, { name: "Q3", value: 7 }, { name: "Q4", value: 8 }], color: "#38ef7d" },
  "channel-partnership": { data: [{ name: "M1", value: 5 }, { name: "M2", value: 12 }, { name: "M3", value: 18 }, { name: "M4", value: 25 }], color: "#00C6FF" },
};

function ServiceDetailCard({ svc, index }: { svc: typeof SERVICES[0]; index: number }) {
  const chart = metricChartData[svc.slug] || metricChartData["client-acquisition"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.05 }}
      className="liquid-glass rounded-3xl overflow-hidden"
    >
      <div
        className="h-1 w-full"
        style={{ background: svc.gradient }}
      />
      <div className="p-8 md:p-10">
        <div className="flex items-start justify-between mb-6">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-2 block">{svc.number}</span>
            <h3 className="text-2xl font-medium text-white tracking-tight">{svc.label}</h3>
            <p className="text-white/50 text-sm mt-2 max-w-sm">{svc.title}</p>
          </div>
        </div>

        <p className="text-white/60 text-sm leading-relaxed mb-8">{svc.description}</p>

        {/* Animated Chart */}
        <div className="mb-8">
          <p className="text-[10px] uppercase tracking-widest text-white/30 mb-3">Performance curve</p>
          <div className="h-28">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chart.data}>
                <defs>
                  <linearGradient id={`grad-${svc.slug}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={chart.color} stopOpacity={0.3} />
                    <stop offset="95%" stopColor={chart.color} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Tooltip
                  contentStyle={{ background: "#1A1A1C", border: "none", borderRadius: 8, fontSize: 12, color: "#fff" }}
                  cursor={false}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke={chart.color}
                  strokeWidth={2}
                  fill={`url(#grad-${svc.slug})`}
                  dot={false}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {svc.metrics.map((m) => (
            <div key={m.label} className="text-center">
              <div className="text-xl font-medium text-white stat-number">
                {m.value}{m.unit}
              </div>
              <div className="text-[10px] text-white/30 mt-1 leading-tight">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Steps */}
        <div>
          <p className="text-[10px] uppercase tracking-widest text-white/30 mb-3">Deployment steps</p>
          <div className="flex flex-wrap gap-2">
            {svc.steps.map((step, i) => (
              <span key={step} className="flex items-center gap-2 text-xs text-white/50 px-3 py-1.5 rounded-full border border-white/10">
                <span className="text-[10px] opacity-40">{i + 1}</span>
                {step}
              </span>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 mt-6 pt-6">
          <Link to={`/services/${svc.slug}`} className="inline-flex items-center gap-2 text-xs text-white/40 hover:text-white transition-colors uppercase tracking-widest">
            View full system <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <main className="relative w-full bg-[#0A0A0B] font-sans selection:bg-white/20 selection:text-white">
      <SEO
        title="AI Client Acquisition & Outreach Services — SVNR Global"
        description="SVNR Global offers AI-powered client acquisition, AI receptionist, revenue operations, brand outreach, deal flow generation, and sector-specific workflow automation for premium B2B operators."
        canonical="/services"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "AI Client Acquisition & Outreach Infrastructure",
          "provider": { "@type": "Organization", "name": "SVNR Global", "url": "https://svnrglobal.com" },
          "description": "Bespoke AI systems for client acquisition, outbound outreach, revenue operations, and business development for luxury brands and premium B2B operators.",
          "areaServed": "Worldwide",
          "serviceType": ["Client Acquisition", "AI Outreach", "Revenue Operations", "Deal Flow Generation", "Brand Outreach"]
        }}
      />
      <VideoHero src={VIDEOS.main}>
        <div className="max-w-4xl mx-auto px-6 text-center pt-20 sm:pt-32 pb-14 sm:pb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-6"
          >
            The Systems
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl font-medium text-white leading-tight tracking-tight mb-6"
          >
            Eight AI systems.<br />
            <span className="shimmer-text">One operating infrastructure.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-white/50 text-lg"
          >
            Each system is built for your market. None are templates.
          </motion.p>
        </div>
      </VideoHero>

      {/* Overview Cards */}
      <section className="relative z-10 bg-[#0A0A0B] py-12 md:py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16 md:mb-24">
            {SERVICES.map((svc, i) => (
              <Link key={svc.slug} to={`/services/${svc.slug}`} style={{ textDecoration: "none" }}>
                <FeatureCard
                  title={svc.label}
                  description={svc.summary}
                  icon={svc.icon}
                  gradient={svc.gradient}
                  delay={i * 0.06}
                  number={svc.number}
                />
              </Link>
            ))}
          </div>

          {/* Detailed cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map((svc, i) => (
              <ServiceDetailCard key={svc.slug} svc={svc} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Compare CTA */}
      <section className="relative z-10 bg-[#0A0A0B] py-16 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">Not sure how we compare?</p>
            <h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-4">
              See SVNR vs Agencies, Tools & In-House Teams
            </h2>
            <p className="text-white/40 text-sm mb-8 max-w-xl mx-auto leading-relaxed">
              A clear breakdown of how our infrastructure differs from volume agencies, one-off campaigns, and self-serve AI tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-all">
                Book a Consultation <ArrowRight size={14} />
              </Link>
              <Link to="/compare" className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 text-white text-sm hover:border-white/50 transition-all">
                SVNR vs Alternatives <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="relative z-10 px-6 pb-10 max-w-7xl mx-auto">
        <Footer />
      </div>
    </main>
  );
}
