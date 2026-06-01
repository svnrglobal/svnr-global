import { motion } from "motion/react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

type ContentSection = {
  heading: string;
  body: string;
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
};

type Article = {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  image: string;
  imageAlt: string;
  content: ContentSection[];
};

const categoryColors: Record<string, string> = {
  "Luxury Rugs": "#F5A623",
  "Premium Real Estate": "#0071E3",
  "Private Equity": "#667eea",
  "Professional Services": "#ffd200",
  "Wealth Management": "#11998e",
  "B2B Platforms": "#f953c6",
  "Strategy": "#FC466B",
};

const articles: Article[] = [
  {
    slug: "luxury-rug-brand-distribution-strategy",
    title: "How Luxury Rug and Carpet Brands Build Distribution in New Markets Without a Showroom",
    category: "Luxury Rugs",
    readTime: "8 min",
    image: "/blog/sustainable-luxury-carpets.jpg",
    imageAlt: "Luxury carpet manufacturing",
    content: [
      {
        heading: "The Ceiling Most Brands Hit",
        body: "There is a pattern that repeats itself across the handmade rug and carpet industry. A brand spends years building a product with genuine craft behind it — hand-knotted construction, vegetable dyes, wool sourced from specific regions, a design language that holds up against the best European studios. The product is genuinely exceptional. And then growth stops. Not because the product got worse. But because the distribution model that got them to this point — trade fairs, showroom relationships, word of mouth inside the A&D community — has a hard ceiling.",
        image: "/blog/IMG-20230113-WA0031.jpg",
        imageAlt: "Handmade rug craftsmanship in Bhadohi",
        imageCaption: "Hand-knotted production in Bhadohi — the heart of India's carpet belt",
      },
      {
        heading: "Why the Traditional Distribution Model Breaks at Scale",
        body: "The traditional route into a new market looks like this: exhibit at the relevant trade fair, meet showroom owners and interior designers, follow up, send samples, wait. This model works. It built every major rug brand that exists today. It is also extraordinarily slow, expensive per contact made, and entirely dependent on who happens to walk through a trade fair hall in a three-day window. The interior designer who would have specified your collection at Domotex in January is now researching new suppliers on their own timeline, based on a project brief they received in March, for a client presentation happening in June. They are not waiting for the next trade fair.",
      },
      {
        heading: "The A&D Community Is the Distribution Channel",
        body: "For luxury rug and carpet brands, the architecture and interior design community is not a marketing audience — it is the primary distribution channel. Interior designers specify rugs for projects. Their specification drives purchase. Their recommendation drives repeat specification. The relationship between a rug brand and an interior designer operates more like a wholesale relationship than a consumer marketing relationship. This means the question is not 'how do we market to interior designers.' The question is 'how do we build systematic trade relationships with interior designers in markets we are not yet present in.'",
        image: "/blog/rug-unknown.jpg",
        imageAlt: "Luxury rug detail and texture",
      },
      {
        heading: "Geography Is the Opportunity",
        body: "The single biggest distribution opportunity for most luxury rug brands is a geography they are completely absent from despite having a product that would perform there. These gaps exist not because the market is not ready — they exist because the brand's distribution development has been opportunistic rather than systematic. Systematic distribution development starts by mapping where the gaps are and then identifying, by name, the designers and showrooms operating in those cities whose portfolio, price point, and material preferences match the brand's product positioning.",
      },
      {
        heading: "Trade Fairs Are Amplifiers, Not Acquisition Channels",
        body: "The role of trade fairs in a well-designed distribution strategy is amplification, not acquisition. A brand that has already been in contact with ten interior designers in a new city for three months before Maison & Objet opens has a completely different trade fair experience than one arriving cold. The warm contacts become scheduled meetings rather than booth walk-ins. Brands that rely exclusively on trade fairs for distribution development are paying exhibition costs to acquire cold contacts in a three-day window. Brands that use systematic outreach to build a warm audience before the fair opens use the same investment to advance existing relationships.",
      },
      {
        heading: "What a New Market Distribution Program Looks Like in Practice",
        body: "A well-designed new market distribution program has a defined set of outputs across a 90-day window. In the first four weeks: a mapped list of named interior designers and showrooms in the target city, filtered by project type, price point, and material history. In weeks five through eight: follow-up sequencing based on initial responses, sample requests fulfilled, showroom conversations progressed. In weeks nine through twelve: a clear picture of which relationships have genuine potential and what the realistic path to first specifications looks like. At the end of 90 days, a brand has not opened a showroom — but it has relationships with the designers most likely to specify its product in that city.",
      },
    ],
  },
  {
    slug: "real-estate-investor-buyer-acquisition",
    title: "How Premium Real Estate Firms Reach Investor Buyers Without Portal Dependency",
    category: "Premium Real Estate",
    readTime: "9 min",
    image: "/blog/blog-banner-10Jan2025.jpg",
    imageAlt: "Premium real estate",
    content: [
      {
        heading: "The Portal Problem Is a Buyer Quality Problem",
        body: "Every premium real estate firm has the same private conversation at some point. The portals are expensive, the quality of enquiries is declining, and the investor buyers who close quickly are not the ones browsing listing pages at midnight. The problem is not that portals drive no transactions. For residential property in the mid-market, portals are efficient and appropriate. The buyer for a prime residential property or investment asset is a principal making a capital allocation decision. They are not browsing. Portal-dependent acquisition cannot reach this buyer.",
      },
      {
        heading: "What Principal Buyers Actually Look Like",
        body: "A principal buyer in prime residential property is not a single profile. They include high net worth individuals and families relocating internationally, family offices adding real estate to a broader portfolio, entrepreneurs who have exited a business and are deploying proceeds into capital-preservation assets, and institutional buyers with formal investment mandates. What all of these buyers have in common is that they are reachable. They have professional profiles on LinkedIn. They appear in business press when they exit companies or raise capital. The signals that indicate a principal is likely to be in or near the market for a significant property purchase are visible to anyone who looks for them systematically.",
        image: "/blog/real-estate-office.jpeg",
        imageAlt: "Premium office and real estate spaces",
      },
      {
        heading: "The WhatsApp Channel Is Not a Detail",
        body: "In European and Middle Eastern prime real estate markets, WhatsApp is the dominant communication channel for high-value buyer and seller conversations. A principal buyer in Switzerland, Germany, the UAE, or across the Mediterranean does not manage significant financial conversations through a portal enquiry form. They respond to direct, personal contact on the channel they actually use for business communication. The real estate firm that reaches a qualified buyer directly on WhatsApp, with a specific message that demonstrates knowledge of that buyer's investment profile, is operating in a completely different competitive environment than the firm waiting for a portal enquiry.",
      },
      {
        heading: "Days on Market Is a Diagnostic, Not a Given",
        body: "When a prime property sits beyond the typical transaction window for its price band and geography, one of two things is true: the pricing is wrong, or the buyer pool is too small. A firm whose buyer acquisition is predominantly portal-driven has a buyer pool defined by whoever is actively searching on the portals at the time the property is listed. This pool excludes every principal who is not actively searching, every international buyer who does not use that specific portal, and every investor who would buy this property if they knew about it but has not entered the market formally.",
      },
      {
        heading: "Building the Off-Market Buyer Pipeline",
        body: "The firms closing the most valuable transactions in prime residential and investment property are not winning because they have better listings on the portals. They are winning because they have a system for reaching the buyers who never use the portals. This system identifies specific buyer profiles from signal data — liquidity events, company exits, family office mandates — and reaches those principals directly, on the right channel, with a specific message before any competitor has made contact.",
      },
    ],
  },
  {
    slug: "private-equity-proprietary-deal-flow",
    title: "How Private Equity Firms Source Proprietary Deal Flow Before Companies Enter a Formal Process",
    category: "Private Equity",
    readTime: "10 min",
    image: "/blog/Founder-Syndrome-1024x614.jpg.webp",
    imageAlt: "Private equity deal flow",
    content: [
      {
        heading: "The Most Valuable Deal Is the One You See First",
        body: "The most valuable transaction a private equity firm executes is the one it sourced before anyone else knew it was available. Not because the company was hidden — because the firm had a relationship with the founder three months before the formal process. By the time a teaser arrives in your inbox, you are already competing with every other firm on the distribution list. The advantage has been priced out. The opportunity to shape the structure, the terms, and the narrative belongs to the firm that was in the room first.",
      },
      {
        heading: "What a Researchable Thesis Looks Like",
        body: "A thesis specific enough to generate a researchable target universe is the foundation of proprietary deal flow. 'B2B services in Western Europe' is a category. 'Founder-led industrial maintenance businesses with 8–20M EBITDA and no succession plan' is a thesis. The first generates a list too large to work with. The second generates a list of companies where you can name the founder, infer the ownership structure, and understand why a conversation in the next 12 months might be timely. That level of specificity is what separates a genuine sourcing program from an outreach exercise.",
        image: "/blog/pe-deal-sourcing.png",
        imageAlt: "Traditional deal sourcing vs modern approach",
      },
      {
        heading: "The Volume Trap",
        body: "500 generic emails to founders produce no relationships. 50 thoughtful, research-anchored contacts produce 50 first steps toward genuine conversations. The pipeline that generates proprietary deals is deep, not wide. Each contact in a real sourcing program is someone who received a message that demonstrated specific knowledge of their business, their sector, and the reasons why a conversation with this particular firm might be relevant. That message is not easy to write at scale. But it is the only message that produces a response worth having.",
      },
      {
        heading: "Founders Remember Who Was Specific",
        body: "The firm that calls when the moment arrives is the one the founder has had the most substantive conversations with — not the most recognisable name. A succession process, a capital need, a strategic decision: the catalyst is almost always something specific, and it is almost always something a well-researched firm could have anticipated. Founders remember which firms have been intelligent and specific in their outreach. The relationship that produces a proprietary transaction is built in the months and years before the transaction is on anyone's radar.",
      },
      {
        heading: "The Infrastructure of Proprietary Deal Flow",
        body: "Building a proprietary deal flow program requires three layers of infrastructure: a research layer that maps and monitors the target universe continuously, an outreach layer that reaches founders and management teams with specific, research-backed communication, and a relationship management layer that keeps the firm present in the founder's mind through substantive follow-up. Most PE firms have none of these layers operating systematically. The ones that do are consistently winning deals that the rest of the market sees only in the press.",
      },
    ],
  },
  {
    slug: "architecture-interior-design-studio-client-acquisition",
    title: "Client Acquisition for Architecture and Interior Design Studios: Moving Beyond Referrals",
    category: "Professional Services",
    readTime: "9 min",
    image: "/blog/GettyImages-1224893561.jpg",
    imageAlt: "Architecture studio",
    content: [
      {
        heading: "The Referral Model and Its Limits",
        body: "Most architecture and interior design studios grow through the quality of their work, the relationships of their principals, and the reach of their press coverage. This model works. It is also completely outside the studio's control. A referral arrives when a past client happens to have a conversation with someone who happens to need a studio of your type at the moment they happen to remember your name. The studio has no influence over the timing, the client profile, or the project size.",
      },
      {
        heading: "What Systematic Client Acquisition Looks Like for a Design Studio",
        body: "The alternative is not a marketing campaign. Design studios that have moved beyond referral dependency do not run advertising or produce content hoping it finds the right client. They identify the specific client profiles most likely to commission the kind of work the studio wants to do — developer clients for a certain type of residential project, hospitality groups with a specific aesthetic direction, commercial occupiers in a particular sector — and they reach those clients directly with communication anchored in specific knowledge of their projects and needs.",
        image: "/blog/architecture-house.jpg",
        imageAlt: "Award-winning architecture project",
        imageCaption: "Premium residential architecture — projects won through relationship, not chance",
      },
      {
        heading: "The Research Layer Most Studios Skip",
        body: "Before any outreach begins, the studio needs to know who it is trying to reach. This is not a vague demographic target. It is named individuals at named organisations with specific project pipelines. A property developer who just acquired a site in a specific city and has not yet appointed an architect is a precisely identified opportunity. A hospitality group that has announced expansion plans but has not yet released an RFP for design services is a warm prospect. This kind of intelligence is available to anyone who looks for it systematically.",
      },
      {
        heading: "The Competition in Creative Outreach Is Lower Than You Think",
        body: "Architecture and interior design studios are, by the standards of most industries, extremely passive in their business development. The competition for a well-researched, personally relevant message to a qualified prospect is almost non-existent. Most studios are waiting for the phone to ring. The studio that is making disciplined, specific, research-backed contact with a defined set of target clients each month is operating in a market where almost no other studio is doing the same thing.",
      },
    ],
  },
  {
    slug: "wealth-management-boutique-client-acquisition",
    title: "How Wealth Management Boutiques Reach the Next Generation of HNWI Clients",
    category: "Wealth Management",
    readTime: "9 min",
    image: "/blog/istockphoto-1346853640-612x612.jpg",
    imageAlt: "Wealth management",
    content: [
      {
        heading: "Two Pressures Arriving at Once",
        body: "The business model of a wealth management boutique has not changed in its essentials for thirty years. It is now facing two simultaneous pressures that it was not designed to handle. The first is generational transfer: the clients who built the book are aging, and their assets will move — to heirs, to other advisors, to self-directed platforms — over the next decade. The second is structural acquisition failure: the channels that built the current book — professional networks, golf club introductions, accountant referrals — are not producing new clients at the rate required to replace attrition.",
      },
      {
        heading: "Who the Next Generation of HNWI Clients Actually Are",
        body: "The next generation of high net worth individuals requiring wealth management services is not a homogeneous group. They include entrepreneurs who have exited technology and software businesses in the past five years, executives receiving significant equity compensation from listed companies, second-generation inheritors of family business wealth, and professionals in high-compensation fields who have accumulated capital faster than their existing advisory relationships can manage. Each of these profiles has different trigger points, different communication preferences, and different reasons to move wealth under management.",
        image: "/blog/wealth-mgmt-2.jpg",
        imageAlt: "Next generation wealth management clients",
        imageCaption: "The next-gen HNWI client: digitally native, trigger-driven, advisor-agnostic",
      },
      {
        heading: "The Trigger Identification Problem",
        body: "Wealth management relationships are initiated at specific moments: a liquidity event, a divorce, an inheritance, a retirement, a business sale. The boutique that identifies these triggers as they are happening — from business press, company announcements, LinkedIn activity — and makes contact at the right moment is operating with a precision that referral-dependent acquisition cannot match. This is not a novel insight. It is a systematised version of what the best relationship managers at larger institutions have always done intuitively.",
      },
      {
        heading: "Communication That Resonates with This Client",
        body: "An entrepreneur who has just sold a business does not respond well to generic wealth management marketing. They are not looking for a brand. They are looking for someone who understands their specific situation — the tax considerations of a particular deal structure, the difference between their current requirements and what they will need in five years, the complexity of managing wealth when the primary asset has just become liquid for the first time. The communication that starts a relationship with this client is specific, demonstrates expertise about their situation, and is delivered on the channel they actually use.",
      },
    ],
  },
  {
    slug: "b2b-textile-platform-buyer-acquisition",
    title: "How B2B Textile Platforms Solve the Buyer-Side Liquidity Problem",
    category: "B2B Platforms",
    readTime: "8 min",
    image: "/blog/DUVqh5kW-R3HR4829-1200x800.jpg",
    imageAlt: "Textile sourcing platform",
    content: [
      {
        heading: "The Structural Pattern That Repeats",
        body: "Two-sided marketplace businesses in textile sourcing share a structural pattern that repeats regardless of geography. The supply side gets built first. Mills, manufacturers, and brands are onboarded because they are motivated: they want buyers. The platform gets a catalogue. And then it stalls — not because the supply is wrong, but because buyer-side liquidity is structurally harder to build. Buyers are passive. They do not browse marketplaces looking for new suppliers unless they have a specific, immediate need. And even when they do have that need, inertia toward existing supplier relationships is powerful.",
      },
      {
        heading: "Why Buyer-Side Liquidity Does Not Build Itself",
        body: "Every B2B textile platform has a version of this problem. Supplier acquisition is straightforward because suppliers are motivated to join. Buyer acquisition requires finding buyers who are not yet on the platform, understanding their sourcing requirements at a specific moment, and reaching them with a reason to engage that is compelling enough to displace their existing workflow. This is harder. It requires identifying the right buyers, understanding their sourcing calendars and requirements, and making contact at a moment when switching costs are low enough to warrant a conversation.",
      },
      {
        heading: "The Buyer Profile Segmentation That Changes Outcomes",
        body: "Not all buyers are equal in their potential impact on platform liquidity. The buyers who create the most value are those who place regular, repeated orders rather than one-off sample requests, whose volume makes them meaningful to supplier economics, and whose category requirements are well-served by the platform's current supplier base. Identifying these buyers — by sourcing category, order frequency, geographic market, and operational profile — before outreach begins dramatically improves the quality of the pipeline that results.",
        image: "/blog/textile-graphic.jpg",
        imageAlt: "Textile sourcing and B2B buyer acquisition",
        imageCaption: "Buyer-side liquidity: the problem every textile marketplace faces at scale",
      },
      {
        heading: "The Outreach That Works for B2B Sourcing Buyers",
        body: "Buyers at sourcing teams in brands, retailers, and trading companies respond to outreach that is specific about what they source and why the platform can serve that requirement better than their current process. Generic platform marketing — 'thousands of suppliers, competitive prices' — does not move a sourcing manager who has spent five years building their existing supplier relationships. Specific outreach — 'we have twelve verified manufacturers in your specific category, in the origin you require, at the price bands your current season suggests you are working at' — is a different conversation.",
      },
    ],
  },
  {
    slug: "client-acquisition-cost-referral-dependency",
    title: "What Client Acquisition Actually Costs a Premium Brand Running on Referrals Alone",
    category: "Strategy",
    readTime: "8 min",
    image: "/blog/SBftLgcgXSDqVmTwCyQwrxykDpA.webp",
    imageAlt: "Business strategy",
    content: [
      {
        heading: "The Hidden Cost of Referral Dependency",
        body: "Ask the founder of a premium brand how they acquire clients and you will often receive an answer that sounds like a strength: 'We grow through referrals.' It is also, looked at clearly, a single point of failure for the entire revenue of the business. A referral arrives when a past client happens to have a conversation with someone who happens to need a brand of your type at the moment they happen to remember your name. The brand has no influence over the timing, the client profile, the project size, or the conversion rate. The entire acquisition function is outsourced to chance.",
      },
      {
        heading: "What the True Cost Looks Like",
        body: "The cost of referral dependency is not paid in a line on the P&L. It is paid in the months where the pipeline is thin because the last project ended and no referrals have come in yet. It is paid in the clients accepted below the preferred profile because the pipeline required a transaction. It is paid in the growth ceiling that arrives because the partner network has been exhausted and the brand has no other way to reach new clients. These costs are real but they are invisible in the standard analysis of acquisition economics.",
        image: "/blog/referral-cost.png",
        imageAlt: "The cost of referral-only acquisition",
        imageCaption: "Pipeline visibility: the hidden cost of passive acquisition",
      },
      {
        heading: "The Opportunity Cost of Passive Acquisition",
        body: "The most significant cost of referral dependency is the market that goes unreached. Every premium brand operates in a market where there are more qualified potential clients than the brand will ever serve. Most of these potential clients will never become aware of the brand, never refer the brand, and never be reached by a referral chain that includes an existing client. The entire segment of the market that sits outside the existing relationship network is permanently inaccessible unless the brand develops an active acquisition motion.",
      },
      {
        heading: "What the Transition From Passive to Active Acquisition Requires",
        body: "Moving from referral dependency to a systematic acquisition motion does not require abandoning the relationships and reputation that have driven growth to date. It requires adding a layer of deliberate outreach to the network that already exists. Identifying which potential clients in the target market are not yet in the relationship network. Researching those clients specifically. Making contact with communication that is specific enough to be taken seriously. And doing this consistently, as an ongoing operating function rather than a campaign with a start and end date.",
      },
    ],
  },
  {
    slug: "client-acquisition-system-vs-campaign",
    title: "The Difference Between a Client Acquisition System and a Client Acquisition Campaign",
    category: "Strategy",
    readTime: "9 min",
    image: "/blog/20943871-marketing-scaled.jpg",
    imageAlt: "Client acquisition system",
    content: [
      {
        heading: "The Campaign Cycle and Why It Fails",
        body: "The word 'campaign' in business development implies a beginning, a middle, and an end. Most businesses acquire clients through a series of campaigns — a push at the start of the year, a trade fair effort, a targeted outreach in response to a quiet quarter. This is the campaign cycle. And it is structurally unable to produce the consistent, compounding pipeline that growing businesses need. Because campaigns end. And when they end, the pipeline empties. And when the pipeline empties, the business starts another campaign.",
      },
      {
        heading: "What a System Does That a Campaign Cannot",
        body: "A client acquisition system does not have an end date. It runs continuously, identifying new prospects as they enter the addressable market, reaching them with communication appropriate to their profile and timing, and maintaining contact across the timeline of a realistic relationship. The difference in output between a campaign and a system is not linear — it is exponential over time. A campaign produces a batch of leads in a window. A system produces a continuously growing base of relationships, some of which convert this quarter, some next year, and some three years from now when a trigger event makes the timing right.",
      },
      {
        heading: "The Infrastructure a System Requires",
        body: "A client acquisition system requires three things a campaign does not: a continuous research function that keeps the prospect universe current, a relationship management layer that maintains contact with prospects across extended timelines, and a feedback mechanism that identifies which messages and channels are producing responses and refines the approach accordingly. Most businesses run campaigns because campaigns are simpler to design and easier to budget. Systems require ongoing investment and ongoing management. But the return on that investment is not a batch of leads — it is a permanent acquisition capability.",
      },
      {
        heading: "The Compounding Advantage",
        body: "The most powerful argument for building a system rather than running campaigns is the compounding effect that arrives over time. In month one, a system produces a small number of qualified conversations. In month six, the number is larger because the early conversations have matured and new ones have been added. In year two, the system is producing more qualified pipeline than the business could have generated through any campaign approach, because every relationship built in the previous period is still active and every new prospect added is entering a proven engagement process. Campaigns reset. Systems compound.",
      },
    ],
  },
];

export default function BlogArticle() {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);

  if (!article) return <Navigate to="/blog" replace />;

  const color = categoryColors[article.category] || "#ffffff";
  const related = articles.filter((a) => a.slug !== slug).slice(0, 3);

  const articleDescription = article.content[0]?.body?.slice(0, 155).replace(/\s\S*$/, "…") ?? article.title;

  return (
    <main className="relative w-full bg-[#0A0A0B] font-sans selection:bg-white/20 selection:text-white">
      <SEO
        title={article.title}
        description={articleDescription}
        canonical={`/blog/${article.slug}`}
        ogImage={`https://www.svnrglobal.com${article.image}`}
        ogType="article"
        articlePublishedTime="2026-06-01T00:00:00Z"
        schema={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": article.title,
          "description": articleDescription,
          "image": `https://www.svnrglobal.com${article.image}`,
          "datePublished": "2026-06-01T00:00:00Z",
          "dateModified": "2026-06-01T00:00:00Z",
          "author": { "@type": "Organization", "name": "SVNR Global", "url": "https://www.svnrglobal.com" },
          "publisher": {
            "@type": "Organization",
            "name": "SVNR Global",
            "logo": { "@type": "ImageObject", "url": "https://www.svnrglobal.com/svnr-logo.svg" }
          },
          "mainEntityOfPage": { "@type": "WebPage", "@id": `https://www.svnrglobal.com/blog/${article.slug}` }
        }}
      />
      {/* HERO */}
      <section className="relative w-full h-[70vh] flex items-end overflow-hidden">
        <img src={article.image} alt={article.imageAlt} className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="absolute inset-0 z-[1]" style={{ background: "linear-gradient(to top, rgba(10,10,11,1) 0%, rgba(10,10,11,0.6) 50%, rgba(10,10,11,0.2) 100%)" }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 pb-16 w-full">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }}>
            <Link to="/blog" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/40 hover:text-white/70 transition-colors mb-6">
              <ArrowLeft size={12} /> Back to Blog
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] uppercase tracking-widest px-3 py-1 rounded-full" style={{ background: `${color}22`, color }}>
                {article.category}
              </span>
              <span className="text-[10px] text-white/30 flex items-center gap-1">
                <Clock size={10} /> {article.readTime} read
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-medium text-white tracking-tight leading-tight">{article.title}</h1>
          </motion.div>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <section className="relative z-10 bg-[#0A0A0B] py-20 px-6">
        <div className="max-w-3xl mx-auto">
          {article.content.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="mb-14"
            >
              <h2 className="text-2xl font-medium text-white tracking-tight mb-4">{section.heading}</h2>
              <p className="text-white/60 leading-relaxed text-base mb-0">{section.body}</p>
              {section.image && (
                <motion.figure
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="mt-8"
                >
                  <div className="rounded-2xl overflow-hidden border border-white/8">
                    <img
                      src={section.image}
                      alt={section.imageAlt ?? section.heading}
                      className="w-full h-64 md:h-80 object-cover"
                    />
                  </div>
                  {section.imageCaption && (
                    <figcaption className="text-[11px] text-white/30 mt-3 text-center tracking-wide">
                      {section.imageCaption}
                    </figcaption>
                  )}
                </motion.figure>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* DIVIDER */}
      <div className="relative z-10 bg-[#0A0A0B] px-6">
        <div className="max-w-3xl mx-auto border-t border-white/10" />
      </div>

      {/* CTA */}
      <section className="relative z-10 bg-[#0A0A0B] py-24 px-6">
        <div className="max-w-3xl mx-auto liquid-glass rounded-3xl p-10 md:p-14 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Ready to build the system?</h2>
            <p className="text-white/50 mb-8 max-w-md mx-auto">We work with a small number of operators at a time. Every engagement is built specifically for your market.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black text-sm font-medium tracking-wide hover:bg-white/90 transition-all">
              Start the conversation <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* RELATED ARTICLES */}
      <section className="relative z-10 bg-[#0A0A0B] pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-8">More reading</p>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((a, i) => (
              <motion.div key={a.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link to={`/blog/${a.slug}`} className="group block liquid-glass rounded-2xl overflow-hidden hover:ring-1 hover:ring-white/20 transition-all">
                  <div className="relative h-40 overflow-hidden">
                    <img src={a.image} alt={a.imageAlt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B]/60 to-transparent" />
                  </div>
                  <div className="p-5">
                    <span className="text-[9px] uppercase tracking-widest" style={{ color: categoryColors[a.category] || "#fff" }}>{a.category}</span>
                    <h3 className="text-white font-medium text-sm mt-2 leading-snug group-hover:text-white/80 transition-colors line-clamp-2">{a.title}</h3>
                    <div className="flex items-center gap-1 text-[10px] text-white/30 group-hover:text-white/60 transition-colors mt-3">
                      Read <ArrowRight size={10} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="relative z-10 bg-[#0A0A0B] px-6 pb-10">
        <div className="max-w-7xl mx-auto"><Footer /></div>
      </div>
    </main>
  );
}
