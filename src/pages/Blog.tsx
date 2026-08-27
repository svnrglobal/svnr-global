import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import Breadcrumbs from "../components/Breadcrumbs";
import { articles } from "./BlogArticle";
import { type Article } from "../data/blogShared";

const MONO = { fontFamily: "var(--font-mono)" };

function excerptOf(a: Article): string {
  if (a.excerpt) return a.excerpt;
  const body = a.content?.[0]?.body ?? "";
  return body.slice(0, 150).replace(/\s+\S*$/, "") + "…";
}

function formatDate(d: string): string {
  const parsed = new Date(d);
  if (Number.isNaN(parsed.getTime())) return d;
  return parsed.toLocaleDateString("en-US", { day: "numeric", month: "long" });
}

function Row({ a, i, dense }: { a: Article; i: number; dense?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="border-b border-white/[0.08]"
    >
      <Link
        to={`/blog/${a.slug}`}
        className="group flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 py-5"
      >
        <span
          className="shrink-0 w-full sm:w-28 text-[11px] text-white/40 tracking-wide"
          style={MONO}
        >
          {formatDate(a.datePublished)}
        </span>
        <div className="min-w-0 flex-1">
          <span
            className="block text-[10px] tracking-[0.28em] uppercase text-white/40 mb-1.5"
            style={MONO}
          >
            {a.category}
          </span>
          <h3 className="text-white text-base sm:text-lg font-medium tracking-tight leading-snug group-hover:text-white/80 transition-colors">
            {a.title}
          </h3>
          {!dense && (
            <p className="text-white/45 text-sm leading-relaxed mt-1.5 max-w-2xl">
              {excerptOf(a)}
            </p>
          )}
        </div>
      </Link>
    </motion.div>
  );
}

export default function Blog() {
  const [active, setActive] = useState<"All" | "Featured">("All");

  const featured = useMemo(
    () => articles.find((a) => a.slug === "aether-ai-for-premium-acquisition") ?? articles[0],
    []
  );

  const featuredList = useMemo(() => [featured], [featured]);

  const rest = useMemo(
    () => articles.filter((a) => a.slug !== featured.slug),
    [featured]
  );

  return (
    <main className="relative w-full bg-black font-sans selection:bg-white/20 selection:text-white">
      <SEO
        title="Blog — AI Client Acquisition, Outreach & Cassian Insights | SVNR Global"
        description="Playbooks on AI client acquisition, the Cassian models, outreach strategy, deal flow, and revenue growth for luxury brands, real estate, private equity, and premium B2B operators."
        canonical="/blog"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Blog", url: "/blog" }]}
        schema={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "SVNR Global Blog",
          url: "https://svnrglobal.com/blog",
          description:
            "Insights on AI-powered client acquisition, the Cassian models, outbound strategy, and revenue growth for premium B2B and luxury operators.",
          publisher: { "@type": "Organization", name: "SVNR Global", url: "https://svnrglobal.com" },
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 pt-32 sm:pt-40 pb-16">
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Blog" }]} />

        <h1 className="text-4xl sm:text-5xl md:text-[64px] font-medium text-white leading-[1.05] tracking-tight mt-6 mb-10">
          Blog
        </h1>

        {/* filter tabs */}
        <div className="flex items-center gap-8 border-b border-white/[0.08] mb-10">
          {(["All", "Featured"] as const).map((t) => {
            const on = active === t;
            return (
              <button
                key={t}
                onClick={() => setActive(t)}
                className="relative pb-4 text-sm transition-colors"
                style={{ color: on ? "#fff" : "rgba(255,255,255,0.45)" }}
              >
                {t === "All" ? "All" : "Featured articles"}
                {on && (
                  <span
                    className="absolute left-0 right-0 -bottom-px h-[2px] rounded-full"
                    style={{ background: "var(--color-accent, #fb7185)" }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* FEATURED */}
        <section className="mb-16">
          <p className="text-[10px] tracking-[0.28em] uppercase text-white/40 mb-2" style={MONO}>
            Featured articles
          </p>
          <div>
            {featuredList.map((a, i) => (
              <Row key={a.slug} a={a} i={i} />
            ))}
          </div>
        </section>

        {/* BLOG POSTS */}
        {active === "All" && (
          <section>
            <h2 className="text-2xl md:text-4xl font-medium tracking-tight text-white mb-2">
              Blog posts
            </h2>
            <div>
              {rest.map((a, i) => (
                <Row key={a.slug} a={a} i={i} dense />
              ))}
            </div>
          </section>
        )}
      </div>

      <div className="relative z-10 bg-black px-6 pb-10">
        <div className="max-w-[1200px] mx-auto"><Footer /></div>
      </div>
    </main>
  );
}
