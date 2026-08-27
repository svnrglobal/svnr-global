import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, ArrowLeft, Link2, Check } from "lucide-react";
import SEO from "../components/SEO";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";
import Counter from "../components/Counter";
import { CASE_STUDIES } from "../data/caseStudies";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const MONO = { fontFamily: "var(--font-mono)" } as const;

function slugifyHeading(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// H2 with a "copy link to heading" affordance, matching the Vercel customer-
// story pattern: an anchor id plus a small clipboard control on hover/focus.
function SectionHeading({ children, className = "" }: { children: string; className?: string }) {
  const id = slugifyHeading(children);
  const [copied, setCopied] = useState(false);

  const copyLink = () => {
    try {
      const url = `${window.location.origin}${window.location.pathname}#${id}`;
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // clipboard unavailable, e.g. insecure context, permissions, or older browser; fail silently
    }
  };

  return (
    <h2 id={id} className={`group relative scroll-mt-28 flex items-center gap-2 ${className}`}>
      <span>{children}</span>
      <button
        type="button"
        onClick={copyLink}
        aria-label="Copy link to heading"
        className="opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity text-white/30 hover:text-white shrink-0"
      >
        {copied ? <Check size={16} /> : <Link2 size={16} />}
      </button>
    </h2>
  );
}

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const cs = CASE_STUDIES.find((c) => c.slug === slug);

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

  // The three bare outcome lines, sourced only from this case study's own
  // keyMetrics — no invented numbers.
  const outcomeLines = cs.keyMetrics.slice(0, 3);

  return (
    <main className="relative w-full bg-black font-sans selection:bg-white/20 selection:text-white">
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

      {/* ── HERO: outcome H1 + "<Industry> on SVNR" H2 + bare outcome lines ── */}
      <section className="relative z-10 px-6 md:px-12 pt-32 md:pt-44 pb-20 md:pb-28">
        <div className="max-w-[1200px] mx-auto">
          <Breadcrumbs
            items={[
              { label: "Home", to: "/" },
              { label: "Case Studies", to: "/case-studies" },
              { label: cs.industry },
            ]}
          />

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE }}>
            <p className="text-[10px] tracking-[0.28em] uppercase text-white/40 mb-6" style={MONO}>
              {cs.industryCode} &middot; {cs.location} &middot; {cs.duration}
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-[64px] font-medium text-white leading-[1.05] tracking-tight max-w-4xl">
              {cs.title}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: EASE }}
            className="mt-14 md:mt-20"
          >
            <SectionHeading className="text-2xl md:text-4xl font-medium tracking-tight mb-8 text-white">
              {`${cs.industry} on SVNR`}
            </SectionHeading>

            <div className="flex flex-col gap-3">
              {outcomeLines.map((m, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.05, ease: EASE }}
                  className="text-xl md:text-2xl text-white/85 tracking-tight"
                >
                  <span className="font-medium text-white">
                    <Counter value={m.value} />
                  </span>{" "}
                  {m.label}
                </motion.p>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
              className="text-white/45 text-base md:text-lg leading-[1.75] max-w-2xl mt-10"
            >
              {cs.summary}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── THE CHALLENGES ── */}
      <section className="relative z-10 px-6 md:px-12 py-16 md:py-24 border-t border-white/[0.08]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, ease: EASE }}>
            <SectionHeading className="text-2xl md:text-4xl font-medium tracking-tight mb-10 text-white">
              The challenges
            </SectionHeading>
          </motion.div>
          <div className="flex flex-col gap-8 max-w-2xl">
            {cs.challenges.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: EASE }}
              >
                <h3 className="text-white font-medium text-base mb-2">{c.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{c.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE SVNR SOLUTION ── */}
      <section className="relative z-10 px-6 md:px-12 py-16 md:py-24 border-t border-white/[0.08]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, ease: EASE }}>
            <SectionHeading className="text-2xl md:text-4xl font-medium tracking-tight mb-10 text-white">
              The SVNR solution
            </SectionHeading>
          </motion.div>
          <div className="flex flex-col gap-8 max-w-2xl">
            {cs.phases.map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: EASE }}
                className="flex gap-5"
              >
                <span className="text-white/30 text-xs shrink-0 pt-1" style={MONO}>
                  {phase.number}
                </span>
                <div>
                  <h3 className="text-white font-medium text-base mb-2">{phase.title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed">{phase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESULTS ── */}
      <section className="relative z-10 px-6 md:px-12 py-16 md:py-24 border-t border-white/[0.08]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, ease: EASE }}>
            <SectionHeading className="text-2xl md:text-4xl font-medium tracking-tight mb-6 text-white">
              {`Results after ${cs.duration}`}
            </SectionHeading>
            <p className="text-white/45 text-base leading-relaxed max-w-xl mb-10">{cs.resultsSummary}</p>
          </motion.div>
          <div className="flex flex-col gap-3 max-w-2xl">
            {cs.results.map((r, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: EASE }}
                className="text-lg md:text-xl text-white/85 tracking-tight"
              >
                <span className="font-medium text-white">
                  <Counter value={r.value} />
                </span>{" "}
                {r.label}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ, AEO ── */}
      <section className="relative z-10 px-6 md:px-12 py-16 md:py-24 border-t border-white/[0.08]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, ease: EASE }}>
            <SectionHeading className="text-2xl md:text-4xl font-medium tracking-tight mb-10 text-white">
              Common questions
            </SectionHeading>
          </motion.div>
          <div className="flex flex-col divide-y divide-white/[0.08] max-w-2xl">
            {cs.faqs.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: EASE }}
                className="py-6 first:pt-0"
              >
                <h3 className="text-white font-medium text-sm mb-2 leading-relaxed">{f.q}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{f.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PREV / NEXT NAVIGATION ── */}
      <section className="relative z-10 px-6 md:px-12 py-10 border-t border-white/[0.08]">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between gap-4">
          {prev ? (
            <Link to={`/case-studies/${prev.slug}`} className="group flex items-center gap-3 py-4">
              <ArrowLeft size={14} className="text-white/40 group-hover:text-white transition-colors flex-shrink-0" />
              <div>
                <div className="text-[10px] tracking-[0.28em] uppercase text-white/30 mb-0.5" style={MONO}>Previous</div>
                <div className="text-white/60 text-sm group-hover:text-white transition-colors">{prev.industry}</div>
              </div>
            </Link>
          ) : <div />}
          <Link to="/case-studies" className="text-[10px] tracking-[0.28em] uppercase text-white/30 hover:text-white transition-colors whitespace-nowrap" style={MONO}>
            All Case Studies
          </Link>
          {next ? (
            <Link to={`/case-studies/${next.slug}`} className="group flex items-center gap-3 py-4 text-right">
              <div>
                <div className="text-[10px] tracking-[0.28em] uppercase text-white/30 mb-0.5" style={MONO}>Next</div>
                <div className="text-white/60 text-sm group-hover:text-white transition-colors">{next.industry}</div>
              </div>
              <ArrowRight size={14} className="text-white/40 group-hover:text-white transition-colors flex-shrink-0" />
            </Link>
          ) : <div />}
        </div>
      </section>

      {/* ── Related Sector & Services ── */}
      {(cs.relatedSector || cs.relatedServices) && (
        <section className="relative z-10 px-6 md:px-12 py-12 border-t border-white/[0.08]">
          <div className="max-w-[1200px] mx-auto">
            <p className="text-[10px] tracking-[0.28em] uppercase text-white/40 mb-6" style={MONO}>Explore further</p>
            <div className="flex flex-wrap gap-3">
              {cs.relatedSector && (
                <Link
                  to={`/sectors/${cs.relatedSector.slug}`}
                  className="flex items-center gap-2 px-5 py-3 rounded-2xl border border-white/[0.08] hover:border-white/[0.14] text-white/60 hover:text-white transition-all text-sm"
                >
                  <span className="text-[10px] tracking-[0.28em] uppercase text-white/30" style={MONO}>Industry</span>
                  {cs.relatedSector.label}
                  <ArrowRight size={12} />
                </Link>
              )}
              {cs.relatedServices?.map((svc) => (
                <Link
                  key={svc.slug}
                  to={`/services/${svc.slug}`}
                  className="flex items-center gap-2 px-5 py-3 rounded-2xl border border-white/[0.08] hover:border-white/[0.14] text-white/60 hover:text-white transition-all text-sm"
                >
                  <span className="text-[10px] tracking-[0.28em] uppercase text-white/30" style={MONO}>Service</span>
                  {svc.label}
                  <ArrowRight size={12} />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="relative z-10 px-6 md:px-12 py-20 border-t border-white/[0.08]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, ease: EASE }}>
            <p className="text-[10px] tracking-[0.28em] uppercase text-white/40 mb-6" style={MONO}>Work with SVNR</p>
            <h2 className="text-2xl md:text-4xl font-medium text-white mb-5 tracking-tight leading-tight max-w-2xl">
              Ready to build this infrastructure for your business?
            </h2>
            <p className="text-white/45 mb-10 text-base leading-relaxed max-w-xl">
              Book a call. We'll map what this looks like for your sector, your market, and your specific acquisition challenge, with no generic frameworks.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors"
            >
              Book a Consultation <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      <div className="relative z-10 px-6 md:px-12 pb-10 max-w-[1200px] mx-auto">
        <Footer />
      </div>
    </main>
  );
}
