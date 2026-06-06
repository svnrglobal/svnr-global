import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import VideoHero from "../components/VideoHero";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import BlogCover from "../components/blog/BlogCover";
import { VIDEOS } from "../data/content";
import { articles } from "./BlogArticle";
import { getCover } from "../data/blogCovers";
import { categoryColors, CATEGORY_ORDER, type Article } from "../data/blogShared";

function excerptOf(a: Article): string {
  if (a.excerpt) return a.excerpt;
  const body = a.content?.[0]?.body ?? "";
  return body.slice(0, 150).replace(/\s+\S*$/, "") + "…";
}

function Card({ a }: { a: Article }) {
  const color = categoryColors[a.category] ?? "#7a7a85";
  return (
    <Link
      to={`/blog/${a.slug}`}
      className="group block rounded-2xl overflow-hidden liquid-glass border border-white/8 hover:border-white/20 transition-all h-full"
    >
      <div className="relative">
        <BlogCover {...getCover(a.slug, a.category)} className="h-40" />
        <span
          className="absolute bottom-3 left-3 text-[9px] uppercase tracking-widest px-2 py-1 rounded-full"
          style={{ background: "rgba(255,255,255,0.9)", color }}
        >
          {a.category}
        </span>
      </div>
      <div className="p-5">
        <span className="text-[10px] text-white/30 flex items-center gap-1 mb-2">
          <Clock size={10} /> {a.readTime} read
        </span>
        <h3 className="text-white font-medium text-[15px] leading-snug mb-2 tracking-tight group-hover:text-white/90 transition-colors line-clamp-2">
          {a.title}
        </h3>
        <p className="text-white/40 text-xs leading-relaxed line-clamp-2">{excerptOf(a)}</p>
        <div className="flex items-center gap-1.5 text-[11px] text-white/30 group-hover:text-white/70 transition-colors mt-3">
          Read <ArrowRight size={12} />
        </div>
      </div>
    </Link>
  );
}

export default function Blog() {
  const [active, setActive] = useState<string>("All");

  const categories = useMemo(() => {
    const present = CATEGORY_ORDER.filter((c) => articles.some((a) => a.category === c));
    const extra = Array.from(new Set(articles.map((a) => a.category))).filter((c) => !present.includes(c));
    return [...present, ...extra];
  }, []);

  const featured = useMemo(
    () => articles.find((a) => a.slug === "aether-ai-for-premium-acquisition") ?? articles[0],
    []
  );

  const sections = useMemo(() => {
    const list = active === "All" ? categories : [active];
    return list
      .map((cat) => ({
        cat,
        posts: articles.filter((a) => a.category === cat && a.slug !== featured.slug),
      }))
      .filter((s) => s.posts.length > 0);
  }, [active, categories, featured]);

  return (
    <main className="relative w-full bg-[#0A0A0B] font-sans selection:bg-white/20 selection:text-white">
      <SEO
        title="Blog — AI Client Acquisition, Outreach & Aether Insights | SVNR Global"
        description="Playbooks on AI client acquisition, the Aether models, outreach strategy, deal flow, and revenue growth for luxury brands, real estate, private equity, and premium B2B operators."
        canonical="/blog"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Blog", url: "/blog" }]}
        schema={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "SVNR Global Blog",
          url: "https://svnrglobal.com/blog",
          description:
            "Insights on AI-powered client acquisition, the Aether models, outbound strategy, and revenue growth for premium B2B and luxury operators.",
          publisher: { "@type": "Organization", name: "SVNR Global", url: "https://svnrglobal.com" },
        }}
      />

      <VideoHero src={VIDEOS.blog}>
        <div className="max-w-4xl mx-auto px-6 text-center pt-20 sm:pt-32 pb-14 sm:pb-24">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }} className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-6">
            Pillar Thinking
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.3 }} className="text-4xl sm:text-5xl md:text-6xl font-medium text-white leading-tight tracking-tight mb-6">
            How premium operators<br />
            <span className="shimmer-text">build their pipelines.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.6 }} className="text-lg text-white/50 max-w-xl mx-auto">
            Sector guides, use cases, and the Aether models, written for operators, not marketers.
          </motion.p>
        </div>
      </VideoHero>

      {/* FEATURED */}
      <section className="relative z-10 bg-[#0A0A0B] pt-12 md:pt-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <Link to={`/blog/${featured.slug}`} className="group grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden liquid-glass hover:ring-1 hover:ring-white/20 transition-all">
              <BlogCover {...getCover(featured.slug, featured.category)} className="h-56 md:h-auto md:min-h-[300px]" />
              <div className="p-6 sm:p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-[10px] uppercase tracking-widest px-3 py-1 rounded-full" style={{ background: `${categoryColors[featured.category]}22`, color: categoryColors[featured.category] }}>
                      {featured.category}
                    </span>
                    <span className="text-[10px] text-white/30 flex items-center gap-1"><Clock size={10} /> {featured.readTime} read</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-white tracking-tight mb-4 group-hover:text-white/90 transition-colors leading-snug">{featured.title}</h2>
                  <p className="text-white/50 text-sm leading-relaxed">{excerptOf(featured)}</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/40 group-hover:text-white transition-colors mt-6">
                  Read the full guide <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CATEGORY NAV + GRID */}
      <section className="relative z-10 bg-[#0A0A0B] py-12 md:py-16 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[190px_1fr] gap-8 lg:gap-12">
          {/* category nav */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-3 hidden lg:block">Browse</p>
            <div className="flex lg:flex-col gap-1.5 overflow-x-auto lg:overflow-y-auto lg:max-h-[calc(100vh-9rem)] pb-2 lg:pb-0 -mx-1 px-1 lg:pr-1.5 nice-scroll">
              {["All", ...categories].map((c) => {
                const on = active === c;
                const color = c === "All" ? "#ffffff" : categoryColors[c] ?? "#888";
                return (
                  <button
                    key={c}
                    onClick={() => setActive(c)}
                    className="shrink-0 text-left flex items-center gap-2 px-3 py-2 rounded-xl text-[13px] transition-all whitespace-nowrap"
                    style={{
                      color: on ? "#fff" : "rgba(255,255,255,0.45)",
                      background: on ? "rgba(255,255,255,0.07)" : "transparent",
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: on ? color : "rgba(255,255,255,0.2)" }} />
                    {c}
                  </button>
                );
              })}
            </div>
          </aside>

          {/* sections */}
          <div className="min-w-0 space-y-14">
            {sections.map(({ cat, posts }) => (
              <div key={cat}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-2 h-2 rounded-full" style={{ background: categoryColors[cat] ?? "#888" }} />
                  <h2 className="text-xl sm:text-2xl font-medium text-white tracking-tight">{cat}</h2>
                  <span className="text-white/25 text-xs">{posts.length}</span>
                </div>
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
                  {posts.map((a, i) => (
                    <motion.div
                      key={a.slug}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.5, delay: Math.min(i * 0.05, 0.25), ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Card a={a} />
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 bg-[#0A0A0B] py-16 md:py-24 px-6">
        <div className="max-w-4xl mx-auto text-center liquid-glass rounded-3xl p-8 sm:p-12 md:p-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">Ready to build the system, not the campaign?</h2>
            <p className="text-white/50 mb-8 max-w-xl mx-auto">The firms that grow consistently have moved from campaign-driven acquisition to permanent operating infrastructure. We build that infrastructure.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black text-sm font-medium tracking-wide hover:bg-white/90 transition-all">
              Start the conversation <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      <div className="relative z-10 bg-[#0A0A0B] px-6 pb-10">
        <div className="max-w-7xl mx-auto"><Footer /></div>
      </div>
    </main>
  );
}
