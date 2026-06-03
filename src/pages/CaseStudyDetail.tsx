import { useParams, Link, Navigate } from "react-router-dom";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import { useRef, useState } from "react";
import { ArrowRight, ArrowLeft, ChevronDown } from "lucide-react";
import SEO from "../components/SEO";
import Footer from "../components/Footer";
import { CASE_STUDIES } from "../data/caseStudies";


function CapabilityBar({ label, value, delay }: { label: string; value: number; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1.5">
        <span className="text-white/60 text-xs">{label}</span>
        <span className="text-white/40 text-xs">{value}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/8 overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: "linear-gradient(90deg, rgba(255,255,255,0.6), rgba(255,255,255,0.3))" }}
          initial={{ width: 0 }}
          animate={{ width: inView ? `${value}%` : 0 }}
          transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const cs = CASE_STUDIES.find((c) => c.slug === slug);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const [activeImage, setActiveImage] = useState(0);

  if (!cs) return <Navigate to="/case-studies" replace />;

  const currentIndex = CASE_STUDIES.findIndex((c) => c.slug === slug);
  const prev = CASE_STUDIES[currentIndex - 1];
  const next = CASE_STUDIES[currentIndex + 1];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": cs.title,
      "description": cs.seoDescription,
      "url": `https://svnrglobal.com/case-studies/${cs.slug}`,
      "publisher": { "@type": "Organization", "name": "SVNR Global", "url": "https://svnrglobal.com" },
      "about": { "@type": "Thing", "name": cs.industry },
      "keywords": cs.keywords.join(", "),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": cs.faqs.map((f) => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a },
      })),
    },
  ];

  return (
    <main className="relative w-full bg-[#0A0A0B] font-sans selection:bg-white/20 selection:text-white">
      <SEO
        title={cs.seoTitle}
        description={cs.seoDescription}
        canonical={`/case-studies/${cs.slug}`}
        ogType="article"
        schema={schema}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Case Studies", url: "/case-studies" },
          { name: cs.industry, url: `/case-studies/${cs.slug}` },
        ]}
      />

      {/* HERO */}
      <section ref={heroRef} className="relative w-full min-h-[90vh] flex flex-col justify-end overflow-hidden">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0">
          <img
            src={cs.heroImage}
            alt={cs.industry}
            className="w-full h-full object-cover"
            onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,10,11,0.3) 0%, rgba(10,10,11,0.5) 40%, rgba(10,10,11,0.95) 100%)" }} />
        </motion.div>

        {/* Back */}
        <div className="absolute top-24 left-6 md:left-10 z-20">
          <Link to="/case-studies" className="flex items-center gap-2 text-white/40 hover:text-white transition-colors text-xs uppercase tracking-widest">
            <ArrowLeft size={12} /> All Case Studies
          </Link>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 pb-16">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[9px] uppercase tracking-[0.25em] text-white/40 border border-white/15 px-3 py-1 rounded-full">{cs.industryCode}</span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-white/40">{cs.industry}</span>
              <span className="text-white/20">·</span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-white/40">{cs.duration}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-[1.05] tracking-tight mb-4 max-w-4xl">
              {cs.title}
            </h1>
            <p className="text-white/50 text-sm md:text-base max-w-2xl">{cs.subtitle}</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
        >
          <ChevronDown size={18} className="text-white/30 animate-bounce" />
        </motion.div>
      </section>

      {/* KEY METRICS STRIP */}
      <section className="relative z-10 bg-[#0A0A0B] py-12 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {cs.keyMetrics.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-medium text-white mb-1" style={{ background: cs.gradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  {m.value}
                </div>
                <div className="text-[9px] uppercase tracking-widest text-white/35">{m.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SUMMARY */}
      <section className="relative z-10 bg-[#0A0A0B] py-16 md:py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-6">Executive Summary</p>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed">{cs.summary}</p>
          </motion.div>
        </div>
      </section>

      {/* IMAGE GALLERY */}
      <section className="relative z-10 bg-[#0A0A0B] py-4 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[50vh] md:h-[60vh] rounded-3xl overflow-hidden mb-3"
          >
            <img
              src={cs.images[activeImage]}
              alt={`${cs.industry} case study`}
              className="w-full h-full object-cover transition-all duration-700"
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 60%, rgba(10,10,11,0.6) 100%)" }} />
          </motion.div>
          {/* Thumbnails */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {cs.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={`relative flex-shrink-0 w-16 h-12 md:w-20 md:h-14 rounded-xl overflow-hidden border-2 transition-all ${activeImage === i ? "border-white/60" : "border-white/10 hover:border-white/30"}`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CHALLENGES + CAPABILITY BARS */}
      <section className="relative z-10 bg-[#0A0A0B] py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Challenges */}
            <div>
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-6">The Challenges</p>
                <div className="space-y-5">
                  {cs.challenges.map((c, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-4 p-5 rounded-2xl"
                      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                        style={{ background: cs.gradient }}>
                        <span className="text-[9px] text-white font-medium">{i + 1}</span>
                      </div>
                      <div>
                        <h3 className="text-white font-medium text-sm mb-1">{c.title}</h3>
                        <p className="text-white/45 text-xs leading-relaxed">{c.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Capability bars — "before SVNR" performance indicators */}
            <div>
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-6">Performance After SVNR</p>
                <div className="p-6 rounded-2xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  {cs.results.slice(0, 6).map((r, i) => {
                    const numMatch = r.value.match(/\d+/);
                    const barVal = numMatch ? Math.min(parseInt(numMatch[0]), 100) : 70;
                    return (
                      <CapabilityBar
                        key={i}
                        label={`${r.value} ${r.label}`}
                        value={barVal > 100 ? 100 : barVal < 20 ? 20 + barVal : barVal}
                        delay={i * 0.15}
                      />
                    );
                  })}
                </div>

                {/* 3D-style metric cards */}
                <div className="grid grid-cols-2 gap-3 mt-4">
                  {cs.keyMetrics.slice(0, 2).map((m, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10, rotateX: 10 }}
                      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                      whileHover={{ y: -4, rotateX: -5 }}
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        transformStyle: "preserve-3d",
                        transformPerspective: "800px",
                      }}
                      className="p-4 rounded-2xl cursor-default"
                    >
                      <div className="text-2xl font-medium text-white mb-1" style={{ background: cs.gradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{m.value}</div>
                      <div className="text-[9px] uppercase tracking-widest text-white/35">{m.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION PHASES — TIMELINE */}
      <section className="relative z-10 bg-[#0A0A0B] py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">The SVNR Solution</p>
            <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">
              Five phases. One unified infrastructure.
            </h2>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-white/8" />

            <div className="space-y-8">
              {cs.phases.map((phase, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="relative flex gap-6 md:gap-10"
                >
                  {/* Number node */}
                  <div className="relative flex-shrink-0 w-12 md:w-16 flex items-start justify-center pt-1">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-[10px] font-medium text-white z-10 relative"
                      style={{ background: cs.gradient }}>
                      {phase.number}
                    </div>
                  </div>
                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="p-5 rounded-2xl hover:scale-[1.01] transition-transform duration-300"
                      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                      <h3 className="text-white font-medium mb-2">{phase.title}</h3>
                      <p className="text-white/50 text-sm leading-relaxed">{phase.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS — INFOGRAPHIC */}
      <section className="relative z-10 py-16 md:py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ background: `radial-gradient(ellipse at 50% 50%, ${cs.gradient.includes("#") ? cs.gradient.split("#")[1]?.substring(0, 6) ? `#${cs.gradient.split("#")[1].substring(0, 6)}` : "#fff" : "#fff"} 0%, transparent 70%)` }} />
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">Results After {cs.duration}</p>
            <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight">
              The numbers that matter.
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {cs.results.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="p-6 rounded-2xl text-center cursor-default"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
                }}
              >
                <div className="text-3xl md:text-4xl font-medium mb-2"
                  style={{ background: cs.gradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  {r.value}
                </div>
                <div className="text-white/45 text-[10px] uppercase tracking-widest">{r.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center text-white/40 text-sm mt-10 max-w-2xl mx-auto leading-relaxed"
          >
            {cs.resultsSummary}
          </motion.p>
        </div>
      </section>

      {/* FAQ — AEO */}
      <section className="relative z-10 bg-[#0A0A0B] py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">Common Questions</p>
            <h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight">Frequently asked about this case study</h2>
          </motion.div>
          <div className="space-y-4">
            {cs.faqs.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <h3 className="text-white font-medium text-sm mb-2">{f.q}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{f.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NAVIGATION — prev / next */}
      <section className="relative z-10 bg-[#0A0A0B] py-12 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
          {prev ? (
            <Link to={`/case-studies/${prev.slug}`} className="group flex items-center gap-3 p-5 rounded-2xl hover:bg-white/5 transition-all">
              <ArrowLeft size={14} className="text-white/40 group-hover:text-white transition-colors" />
              <div>
                <div className="text-[9px] uppercase tracking-widest text-white/30 mb-0.5">Previous</div>
                <div className="text-white/70 text-sm group-hover:text-white transition-colors">{prev.industry}</div>
              </div>
            </Link>
          ) : <div />}
          <Link to="/case-studies" className="text-[10px] uppercase tracking-widest text-white/30 hover:text-white transition-colors">All Case Studies</Link>
          {next ? (
            <Link to={`/case-studies/${next.slug}`} className="group flex items-center gap-3 p-5 rounded-2xl hover:bg-white/5 transition-all text-right">
              <div>
                <div className="text-[9px] uppercase tracking-widest text-white/30 mb-0.5">Next</div>
                <div className="text-white/70 text-sm group-hover:text-white transition-colors">{next.industry}</div>
              </div>
              <ArrowRight size={14} className="text-white/40 group-hover:text-white transition-colors" />
            </Link>
          ) : <div />}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 bg-[#0A0A0B] py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-6">Work With SVNR</p>
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-5 tracking-tight">
              Ready to build this infrastructure<br />for your business?
            </h2>
            <p className="text-white/45 mb-8 text-sm">Book a call. We'll map what this looks like for your sector, your market, and your acquisition challenge.</p>
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
