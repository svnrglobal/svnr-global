import { useParams, Link, Navigate } from "react-router-dom";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import { useRef } from "react";
import { ArrowRight, ArrowLeft, ChevronDown } from "lucide-react";
import SEO from "../components/SEO";
import Footer from "../components/Footer";
import { CASE_STUDIES } from "../data/caseStudies";

function CapabilityBar({ label, value, delay, gradient }: { label: string; value: number; delay: number; gradient: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="mb-5">
      <div className="flex justify-between mb-2">
        <span className="text-white/65 text-xs leading-relaxed">{label}</span>
        <span className="text-white/35 text-xs tabular-nums">{value}%</span>
      </div>
      <div className="h-1 rounded-full bg-white/8 overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: gradient }}
          initial={{ width: 0 }}
          animate={{ width: inView ? `${value}%` : 0 }}
          transition={{ duration: 1.4, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

function SectionImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative rounded-2xl overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        onError={(e) => {
          const el = e.target as HTMLImageElement;
          el.parentElement!.style.display = "none";
        }}
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, transparent 60%, rgba(10,10,11,0.4) 100%)" }} />
    </div>
  );
}

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const cs = CASE_STUDIES.find((c) => c.slug === slug);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

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

      {/* ── HERO ── */}
      <section ref={heroRef} className="relative w-full min-h-[92vh] flex flex-col justify-end overflow-hidden">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0">
          <img
            src={cs.heroImage}
            alt={cs.industry}
            className="w-full h-full object-cover"
            onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,10,11,0.2) 0%, rgba(10,10,11,0.45) 40%, rgba(10,10,11,0.97) 100%)" }} />
        </motion.div>

        <div className="absolute top-24 left-6 md:left-10 z-20">
          <Link to="/case-studies" className="flex items-center gap-2 text-white/40 hover:text-white transition-colors text-[10px] uppercase tracking-widest">
            <ArrowLeft size={12} /> All Case Studies
          </Link>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 pb-16 md:pb-20 w-full">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="text-[9px] uppercase tracking-[0.25em] text-white/50 border border-white/15 px-3 py-1 rounded-full">{cs.industryCode}</span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-white/50">{cs.industry}</span>
              <span className="text-white/20">·</span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-white/50">{cs.location}</span>
              <span className="text-white/20">·</span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-white/50">{cs.duration}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-medium text-white leading-[1.06] tracking-tight mb-5 max-w-4xl">
              {cs.title}
            </h1>
            <p className="text-white/55 text-sm md:text-base max-w-2xl leading-relaxed">{cs.subtitle}</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
        >
          <ChevronDown size={18} className="text-white/25 animate-bounce" />
        </motion.div>
      </section>

      {/* ── KEY METRICS STRIP ── */}
      <section className="relative z-10 bg-[#0A0A0B] py-14 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {cs.keyMetrics.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="text-center"
              >
                <div
                  className="text-4xl md:text-5xl font-medium mb-2 tabular-nums"
                  style={{ background: cs.gradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
                >
                  {m.value}
                </div>
                <div className="text-[9px] uppercase tracking-[0.2em] text-white/35 leading-relaxed">{m.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 1: EXECUTIVE SUMMARY + IMAGE ── */}
      <section className="relative z-10 bg-[#0A0A0B] py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            {/* Text */}
            <div className="lg:col-span-3">
              <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-6">Executive Summary</p>
                <p className="text-white/75 text-lg md:text-xl leading-[1.75] mb-8">{cs.summary}</p>
                <div className="space-y-4 pt-6 border-t border-white/6">
                  <div className="flex gap-4">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-white/30 w-24 shrink-0 pt-0.5">Industry</span>
                    <span className="text-white/60 text-sm">{cs.industry}</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-white/30 w-24 shrink-0 pt-0.5">Location</span>
                    <span className="text-white/60 text-sm">{cs.location}</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-white/30 w-24 shrink-0 pt-0.5">Duration</span>
                    <span className="text-white/60 text-sm">{cs.duration}</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-white/30 w-24 shrink-0 pt-0.5">Keywords</span>
                    <div className="flex flex-wrap gap-1.5">
                      {cs.keywords.slice(0, 3).map((k, i) => (
                        <span key={i} className="text-[8px] uppercase tracking-wider text-white/30 border border-white/10 px-2 py-0.5 rounded-full">{k}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            {/* Image 1 */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {cs.images[0] && (
                <SectionImage src={cs.images[0]} alt={`${cs.industry} — overview`} className="h-[340px] md:h-[440px]" />
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: THE CHALLENGES + IMAGE ── */}
      <section className="relative z-10 bg-[#0A0A0B] py-20 md:py-28 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            {/* Image 2 — left */}
            <motion.div
              className="lg:col-span-2 order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {cs.images[1] && (
                <SectionImage src={cs.images[1]} alt={`${cs.industry} — challenges`} className="h-[340px] md:h-[460px]" />
              )}
            </motion.div>
            {/* Challenges */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-6">The Challenges</p>
                <h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-8 leading-tight">
                  What wasn't working — and why it mattered.
                </h2>
                <div className="space-y-5">
                  {cs.challenges.map((c, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.6 }}
                      className="flex gap-4 p-5 rounded-2xl"
                      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                    >
                      <div
                        className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center mt-0.5 text-[9px] font-medium text-white"
                        style={{ background: cs.gradient }}
                      >
                        {i + 1}
                      </div>
                      <div>
                        <h3 className="text-white font-medium text-sm mb-1.5">{c.title}</h3>
                        <p className="text-white/50 text-sm leading-relaxed">{c.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: THE SOLUTION PHASES + IMAGE ── */}
      <section className="relative z-10 bg-[#0A0A0B] py-20 md:py-28 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">The SVNR Solution</p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight max-w-xl leading-tight">
                Five phases.<br />One unified infrastructure.
              </h2>
              <p className="text-white/40 text-sm max-w-sm leading-relaxed">
                Every engagement follows a structured deployment sequence — from intelligence build to live pipeline — adapted precisely for your sector and market.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            {/* Timeline */}
            <div className="lg:col-span-3">
              <div className="relative">
                <div className="absolute left-5 top-2 bottom-8 w-px bg-white/8" />
                <div className="space-y-6">
                  {cs.phases.map((phase, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -24 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="relative flex gap-6"
                    >
                      <div className="relative flex-shrink-0 flex items-start justify-center">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-[9px] font-medium text-white z-10"
                          style={{ background: cs.gradient }}
                        >
                          {phase.number}
                        </div>
                      </div>
                      <div className="flex-1 pb-6">
                        <div
                          className="p-5 rounded-2xl hover:scale-[1.01] transition-transform duration-300 cursor-default"
                          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                        >
                          <h3 className="text-white font-medium text-sm mb-2">{phase.title}</h3>
                          <p className="text-white/50 text-sm leading-relaxed">{phase.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            {/* Image 3 — right */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="sticky top-28 space-y-4">
                {cs.images[2] && (
                  <SectionImage src={cs.images[2]} alt={`${cs.industry} — solution`} className="h-[260px] md:h-[300px]" />
                )}
                {cs.images[3] && (
                  <SectionImage src={cs.images[3]} alt={`${cs.industry} — implementation`} className="h-[200px] md:h-[230px]" />
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: PERFORMANCE BARS + 3D METRICS ── */}
      <section className="relative z-10 bg-[#0A0A0B] py-20 md:py-28 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: Performance bars */}
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-3">Performance After SVNR</p>
                <h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-8 leading-tight">
                  Measurable improvement<br />across every dimension.
                </h2>
                <div
                  className="p-6 rounded-2xl"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  {cs.results.slice(0, 6).map((r, i) => {
                    const numMatch = r.value.match(/\d+/);
                    const raw = numMatch ? parseInt(numMatch[0]) : 70;
                    const barVal = raw > 100 ? 100 : raw < 20 ? 20 + raw : raw;
                    return (
                      <CapabilityBar
                        key={i}
                        label={`${r.value} — ${r.label}`}
                        value={barVal}
                        delay={i * 0.15}
                        gradient={cs.gradient}
                      />
                    );
                  })}
                </div>
              </motion.div>
            </div>

            {/* Right: 3D metric cards + image */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {cs.keyMetrics.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16, rotateX: 12 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                    whileHover={{ y: -5, rotateX: -4 }}
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      transformStyle: "preserve-3d",
                      perspective: "800px",
                    }}
                    className="p-5 rounded-2xl cursor-default"
                  >
                    <div
                      className="text-2xl md:text-3xl font-medium mb-1.5 tabular-nums"
                      style={{ background: cs.gradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
                    >
                      {m.value}
                    </div>
                    <div className="text-[9px] uppercase tracking-[0.18em] text-white/35 leading-relaxed">{m.label}</div>
                  </motion.div>
                ))}
              </div>
              {/* Image 4 */}
              {cs.images[4] && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <SectionImage src={cs.images[4]} alt={`${cs.industry} — results`} className="h-[220px] md:h-[260px]" />
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: RESULTS INFOGRAPHIC ── */}
      <section className="relative z-10 py-20 md:py-28 px-6 overflow-hidden border-t border-white/5">
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 50% 50%, ${cs.gradient.match(/#[0-9a-fA-F]{6}/)?.[0] ?? "#ffffff"} 0%, transparent 70%)`,
          }}
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            {/* Results grid */}
            <div className="lg:col-span-3">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">Results After {cs.duration}</p>
                <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4 leading-tight">
                  The numbers that matter.
                </h2>
                <p className="text-white/45 text-sm leading-relaxed max-w-xl">{cs.resultsSummary}</p>
              </motion.div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {cs.results.map((r, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20, scale: 0.94 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.6 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="p-5 rounded-2xl text-center cursor-default"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      boxShadow: "0 4px 24px rgba(0,0,0,0.25)",
                    }}
                  >
                    <div
                      className="text-2xl md:text-3xl font-medium mb-1.5 tabular-nums"
                      style={{ background: cs.gradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
                    >
                      {r.value}
                    </div>
                    <div className="text-white/40 text-[9px] uppercase tracking-[0.18em] leading-relaxed">{r.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Image 5 + quote */}
            <motion.div
              className="lg:col-span-2 space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {cs.images[5] && (
                <SectionImage src={cs.images[5]} alt={`${cs.industry} — outcome`} className="h-[280px] md:h-[340px]" />
              )}
              <div
                className="p-6 rounded-2xl"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <p className="text-[9px] uppercase tracking-[0.2em] text-white/25 mb-3">Engagement Outcome</p>
                <p className="text-white/60 text-sm leading-relaxed italic">"{cs.resultsSummary}"</p>
                <p className="text-[9px] uppercase tracking-widest text-white/25 mt-4">— SVNR Global · {cs.industry}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: FAQ — AEO ── */}
      <section className="relative z-10 bg-[#0A0A0B] py-20 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            {/* FAQ */}
            <div className="lg:col-span-3">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">Common Questions</p>
                <h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight leading-tight">
                  Frequently asked about<br />this case study.
                </h2>
              </motion.div>
              <div className="space-y-4">
                {cs.faqs.map((f, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    className="p-6 rounded-2xl"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    <h3 className="text-white font-medium text-sm mb-3 leading-relaxed">{f.q}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{f.a}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Sidebar: keywords + related metrics */}
            <motion.div
              className="lg:col-span-2 space-y-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div
                className="p-6 rounded-2xl"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <p className="text-[9px] uppercase tracking-[0.2em] text-white/25 mb-4">Industry Context</p>
                <div className="space-y-3">
                  {cs.keywords.map((k, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1 h-1 rounded-full bg-white/25 flex-shrink-0" />
                      <span className="text-white/45 text-xs capitalize">{k.replace(/-/g, " ")}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="p-6 rounded-2xl"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <p className="text-[9px] uppercase tracking-[0.2em] text-white/25 mb-4">Key Metrics Summary</p>
                <div className="space-y-4">
                  {cs.keyMetrics.map((m, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-white/45 text-xs">{m.label}</span>
                      <span
                        className="text-sm font-medium tabular-nums"
                        style={{ background: cs.gradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
                      >
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PREV / NEXT NAVIGATION ── */}
      <section className="relative z-10 bg-[#0A0A0B] py-12 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
          {prev ? (
            <Link to={`/case-studies/${prev.slug}`} className="group flex items-center gap-3 p-5 rounded-2xl hover:bg-white/5 transition-all">
              <ArrowLeft size={14} className="text-white/40 group-hover:text-white transition-colors flex-shrink-0" />
              <div>
                <div className="text-[8px] uppercase tracking-widest text-white/25 mb-0.5">Previous</div>
                <div className="text-white/60 text-sm group-hover:text-white transition-colors">{prev.industry}</div>
              </div>
            </Link>
          ) : <div />}
          <Link to="/case-studies" className="text-[10px] uppercase tracking-widest text-white/25 hover:text-white transition-colors whitespace-nowrap">
            All Case Studies
          </Link>
          {next ? (
            <Link to={`/case-studies/${next.slug}`} className="group flex items-center gap-3 p-5 rounded-2xl hover:bg-white/5 transition-all text-right">
              <div>
                <div className="text-[8px] uppercase tracking-widest text-white/25 mb-0.5">Next</div>
                <div className="text-white/60 text-sm group-hover:text-white transition-colors">{next.industry}</div>
              </div>
              <ArrowRight size={14} className="text-white/40 group-hover:text-white transition-colors flex-shrink-0" />
            </Link>
          ) : <div />}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative z-10 bg-[#0A0A0B] py-20 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-6">Work With SVNR</p>
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-5 tracking-tight leading-tight">
              Ready to build this<br />infrastructure for your business?
            </h2>
            <p className="text-white/40 mb-10 text-sm leading-relaxed max-w-xl mx-auto">
              Book a call. We'll map what this looks like for your sector, your market, and your specific acquisition challenge — with no generic frameworks.
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
