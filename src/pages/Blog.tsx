import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import VideoHero from "../components/VideoHero";
import Footer from "../components/Footer";
import { VIDEOS } from "../data/content";
import SEO from "../components/SEO";

const articles = [
  {
    slug: "luxury-rug-brand-distribution-strategy",
    title: "How Luxury Rug and Carpet Brands Build Distribution in New Markets Without a Showroom",
    excerpt: "There is a pattern that repeats itself across the handmade rug and carpet industry. A brand spends years building a product with genuine craft behind it. And then growth stops — not because the product got worse, but because the distribution model has a hard ceiling.",
    category: "Luxury Rugs",
    readTime: "8 min",
    image: "/blog/sustainable-luxury-carpets.jpg",
    imageAlt: "Luxury carpet manufacturing",
    keyword: "luxury rug brand distribution strategy",
  },
  {
    slug: "real-estate-investor-buyer-acquisition",
    title: "How Premium Real Estate Firms Reach Investor Buyers Without Portal Dependency",
    excerpt: "Every premium real estate firm has the same private conversation at some point. The portals are expensive, the quality of enquiries is declining, and the investor buyers who close quickly are not the ones browsing listing pages at midnight.",
    category: "Premium Real Estate",
    readTime: "9 min",
    image: "/blog/blog-banner-10Jan2025.jpg",
    imageAlt: "Premium real estate",
    keyword: "real estate investor buyer acquisition",
  },
  {
    slug: "private-equity-proprietary-deal-flow",
    title: "How Private Equity Firms Source Proprietary Deal Flow Before Companies Enter a Formal Process",
    excerpt: "The most valuable transaction a private equity firm executes is the one it sourced before anyone else knew it was available — because the firm had a relationship with the founder three months before they decided to sell.",
    category: "Private Equity",
    readTime: "10 min",
    image: "/blog/Founder-Syndrome-1024x614.jpg.webp",
    imageAlt: "Private equity deal flow",
    keyword: "private equity proprietary deal flow",
  },
  {
    slug: "architecture-interior-design-studio-client-acquisition",
    title: "Client Acquisition for Architecture and Interior Design Studios: Moving Beyond Referrals",
    excerpt: "Most architecture and interior design studios grow through the quality of their work, the relationships of their principals, and the reach of their press coverage. This model works. It is also completely outside the studio's control.",
    category: "Professional Services",
    readTime: "9 min",
    image: "/blog/GettyImages-1224893561.jpg",
    imageAlt: "Architecture studio",
    keyword: "architecture firm client acquisition",
  },
  {
    slug: "wealth-management-boutique-client-acquisition",
    title: "How Wealth Management Boutiques Reach the Next Generation of HNWI Clients",
    excerpt: "The business model of a wealth management boutique has not changed in its essentials for thirty years. It is now facing two simultaneous pressures that it was not designed to handle — generational transfer and structural acquisition failure.",
    category: "Wealth Management",
    readTime: "9 min",
    image: "/blog/istockphoto-1346853640-612x612.jpg",
    imageAlt: "Wealth management",
    keyword: "wealth management client acquisition",
  },
  {
    slug: "b2b-textile-platform-buyer-acquisition",
    title: "How B2B Textile Platforms Solve the Buyer-Side Liquidity Problem",
    excerpt: "Two-sided marketplace businesses in textile sourcing share a structural pattern that repeats regardless of geography. The supply side gets built first. Then it stalls — not because the supply is wrong, but because buyer-side liquidity is structurally harder to build.",
    category: "B2B Platforms",
    readTime: "8 min",
    image: "/blog/DUVqh5kW-R3HR4829-1200x800.jpg",
    imageAlt: "Textile sourcing platform",
    keyword: "B2B textile platform buyer acquisition",
  },
  {
    slug: "client-acquisition-cost-referral-dependency",
    title: "What Client Acquisition Actually Costs a Premium Brand Running on Referrals Alone",
    excerpt: "Ask the founder of a premium brand how they acquire clients and you will often receive an answer that sounds like a strength: 'We grow through referrals.' It is also, looked at clearly, a single point of failure for the entire revenue of the business.",
    category: "Strategy",
    readTime: "8 min",
    image: "/blog/SBftLgcgXSDqVmTwCyQwrxykDpA.webp",
    imageAlt: "Business strategy",
    keyword: "client acquisition cost referral dependency",
  },
  {
    slug: "client-acquisition-system-vs-campaign",
    title: "The Difference Between a Client Acquisition System and a Client Acquisition Campaign",
    excerpt: "The word 'campaign' in business development implies a beginning, a middle, and an end. Most businesses acquire clients through a series of campaigns. This is the campaign cycle — and it is structurally unable to produce the consistent, compounding pipeline that growing businesses need.",
    category: "Strategy",
    readTime: "9 min",
    image: "/blog/20943871-marketing-scaled.jpg",
    imageAlt: "Client acquisition system",
    keyword: "client acquisition system vs campaign",
  },
];

const categoryColors: Record<string, string> = {
  "Luxury Rugs": "#F5A623",
  "Premium Real Estate": "#0071E3",
  "Private Equity": "#667eea",
  "Professional Services": "#ffd200",
  "Wealth Management": "#11998e",
  "B2B Platforms": "#f953c6",
  "Strategy": "#FC466B",
};

export default function Blog() {
  return (
    <main className="relative w-full bg-[#0A0A0B] font-sans selection:bg-white/20 selection:text-white">
      <SEO
        title="Blog — AI Outreach, Client Acquisition & B2B Growth Insights | SVNR Global"
        description="Practical playbooks on AI client acquisition, outbound outreach strategy, deal flow generation, and revenue operations for luxury brands, real estate firms, and premium B2B operators."
        canonical="/blog"
        schema={{
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "SVNR Global Blog",
          "url": "https://svnrglobal.com/blog",
          "description": "Insights on AI-powered client acquisition, outbound strategy, and revenue growth for premium B2B and luxury operators.",
          "publisher": { "@type": "Organization", "name": "SVNR Global", "url": "https://svnrglobal.com" }
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
            Eight sector-specific guides on client acquisition, deal flow, and systematic business development — written for operators, not marketers.
          </motion.p>
        </div>
      </VideoHero>

      {/* FEATURED ARTICLE */}
      <section className="relative z-10 bg-[#0A0A0B] py-12 md:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <Link to={`/blog/${articles[0].slug}`} className="group grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden liquid-glass hover:ring-1 hover:ring-white/20 transition-all">
              <div className="relative h-64 md:h-auto overflow-hidden">
                <img src={articles[0].image} alt={articles[0].imageAlt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to right, transparent, rgba(10,10,11,0.3))" }} />
              </div>
              <div className="p-6 sm:p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-[10px] uppercase tracking-widest px-3 py-1 rounded-full" style={{ background: `${categoryColors[articles[0].category]}22`, color: categoryColors[articles[0].category] }}>
                      {articles[0].category}
                    </span>
                    <span className="text-[10px] text-white/30 flex items-center gap-1"><Clock size={10} /> {articles[0].readTime} read</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-white tracking-tight mb-4 group-hover:text-white/90 transition-colors leading-snug">{articles[0].title}</h2>
                  <p className="text-white/50 text-sm leading-relaxed">{articles[0].excerpt}</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/40 group-hover:text-white transition-colors mt-6">
                  Read the full guide <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ALL ARTICLES GRID */}
      <section className="relative z-10 bg-[#0A0A0B] pb-16 md:pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-2">All articles</p>
            <h2 className="text-3xl font-medium text-white tracking-tight">Eight pillar guides. Eight markets.</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.slice(1).map((article, i) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <Link to={`/blog/${article.slug}`} className="group block liquid-glass rounded-2xl overflow-hidden hover:ring-1 hover:ring-white/20 transition-all h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img src={article.image} alt={article.imageAlt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B]/60 to-transparent" />
                    <span className="absolute bottom-3 left-3 text-[9px] uppercase tracking-widest px-2 py-1 rounded-full" style={{ background: `${categoryColors[article.category]}33`, color: categoryColors[article.category] }}>
                      {article.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] text-white/30 flex items-center gap-1"><Clock size={10} /> {article.readTime} read</span>
                    </div>
                    <h3 className="text-white font-medium text-lg leading-snug mb-3 group-hover:text-white/90 transition-colors tracking-tight">{article.title}</h3>
                    <p className="text-white/40 text-xs leading-relaxed line-clamp-3">{article.excerpt}</p>
                    <div className="flex items-center gap-2 text-xs text-white/30 group-hover:text-white/70 transition-colors mt-4">
                      Read guide <ArrowRight size={12} />
                    </div>
                  </div>
                </Link>
              </motion.div>
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
