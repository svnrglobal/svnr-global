import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SEO from "../components/SEO";
import VideoHero from "../components/VideoHero";
import Footer from "../components/Footer";
import { VIDEOS } from "../data/content";
import { CASE_STUDIES } from "../data/caseStudies";

const schema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Case Studies, SVNR Global",
  "description": "Real results across luxury real estate, wealth management, law firms, dental clinics, hotels, healthcare, manufacturing, e-commerce, and aesthetic clinics.",
  "url": "https://svnrglobal.com/case-studies",
  "publisher": { "@type": "Organization", "name": "SVNR Global", "url": "https://svnrglobal.com" },
};

export default function CaseStudies() {
  return (
    <main className="relative w-full bg-[#0A0A0B] font-sans selection:bg-white/20 selection:text-white">
      <SEO
        title="Case Studies — AI Client Acquisition Results | SVNR Global"
        description="Real results across luxury real estate, wealth management, law firms, dental clinics, hotels & resorts, private healthcare, manufacturing export, e-commerce, and aesthetic clinics."
        canonical="/case-studies"
        schema={schema}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Case Studies", url: "/case-studies" },
        ]}
      />

      {/* HERO */}
      <VideoHero src={VIDEOS.caseStudies}>
        <div className="max-w-5xl mx-auto px-6 pt-24 sm:pt-32 pb-16 sm:pb-24 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-6"
          >
            Documented Results
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white leading-[1.05] tracking-tight mb-6"
          >
            Infrastructure that<br />
            <span className="shimmer-text">produces results.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="text-white/50 text-lg max-w-2xl mx-auto"
          >
            Nine industries. Nine transformations. Every result is real, documented, and replicable.
          </motion.p>
        </div>
      </VideoHero>

      {/* STATS STRIP */}
      <section className="relative z-10 bg-[#0A0A0B] py-12 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "9", label: "Industries Transformed" },
              { value: "$513M+", label: "Pipeline Generated" },
              { value: "212–340%", label: "Revenue Growth Range" },
              { value: "54–93%", label: "Efficiency Gains" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-medium text-white mb-1">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-widest text-white/30">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY GRID */}
      <section className="relative z-10 bg-[#0A0A0B] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CASE_STUDIES.map((cs, i) => (
              <motion.div
                key={cs.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <Link to={`/case-studies/${cs.slug}`} className="group block h-full">
                  <div className="relative overflow-hidden rounded-3xl h-full flex flex-col"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>

                    {/* Image */}
                    <div className="relative h-56 overflow-hidden rounded-t-3xl">
                      <img
                        src={cs.heroImage}
                        alt={cs.industry}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                      />
                      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(10,10,11,0.9) 100%)" }} />
                      {/* Industry tag */}
                      <div className="absolute top-4 left-4">
                        <span className="text-[9px] uppercase tracking-[0.2em] text-white/60 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                          {cs.industryCode} · {cs.industry}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      {/* Gradient bar */}
                      <div className="h-0.5 w-10 rounded-full mb-4" style={{ background: cs.gradient }} />

                      <h2 className="text-white font-medium text-base leading-snug mb-3 line-clamp-3 group-hover:text-white/90 transition-colors">
                        {cs.title}
                      </h2>
                      <p className="text-white/40 text-xs leading-relaxed mb-5 flex-1 line-clamp-3">
                        {cs.summary}
                      </p>

                      {/* Key metrics */}
                      <div className="grid grid-cols-2 gap-2 mb-5">
                        {cs.keyMetrics.slice(0, 2).map((m, j) => (
                          <div key={j} className="rounded-xl p-3" style={{ background: "rgba(255,255,255,0.04)" }}>
                            <div className="text-white font-medium text-lg leading-none mb-1">{m.value}</div>
                            <div className="text-white/35 text-[9px] uppercase tracking-widest leading-tight">{m.label}</div>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-[10px] uppercase tracking-widest text-white/30">{cs.duration}</span>
                        <span className="flex items-center gap-1 text-xs text-white/50 group-hover:text-white transition-colors">
                          Read case study <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 bg-[#0A0A0B] py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-6">Your Industry</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight">
              Every one of these started<br />with a single conversation.
            </h2>
            <p className="text-white/50 mb-10 max-w-xl mx-auto">
              Book a call and we'll show you what the infrastructure looks like built for your market, your sector, and your exact acquisition challenge.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-white text-black text-sm font-medium tracking-wide hover:bg-white/90 transition-all"
            >
              Book a Consultation <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      <div className="relative z-10 px-6 pb-10 max-w-7xl mx-auto">
        <Footer />
      </div>
    </main>
  );
}
