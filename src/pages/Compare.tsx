import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, X, Minus } from "lucide-react";
import { VIDEOS } from "../data/content";
import VideoHero from "../components/VideoHero";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

const checks = {
  yes: <Check size={16} className="text-white" />,
  no: <X size={16} className="text-white/25" />,
  partial: <Minus size={16} className="text-white/40" />,
};

const comparisonRows = [
  { label: "Sector-specific expertise", svnr: "yes", generic: "no", inhouse: "partial", tools: "no" },
  { label: "Custom AI agents per client", svnr: "yes", generic: "no", inhouse: "no", tools: "no" },
  { label: "Bespoke outreach — no shared templates", svnr: "yes", generic: "no", inhouse: "partial", tools: "no" },
  { label: "Permanent infrastructure (not a campaign)", svnr: "yes", generic: "no", inhouse: "yes", tools: "no" },
  { label: "Custom dashboards & reporting", svnr: "yes", generic: "no", inhouse: "partial", tools: "partial" },
  { label: "Decision-maker level targeting", svnr: "yes", generic: "partial", inhouse: "partial", tools: "partial" },
  { label: "Multi-channel (email + LinkedIn + direct)", svnr: "yes", generic: "partial", inhouse: "partial", tools: "no" },
  { label: "Works for luxury / high-ticket brands", svnr: "yes", generic: "no", inhouse: "partial", tools: "no" },
  { label: "Results without your daily input", svnr: "yes", generic: "partial", inhouse: "no", tools: "no" },
  { label: "No onboarding lag (30–60 days to results)", svnr: "yes", generic: "no", inhouse: "no", tools: "no" },
];

const angles = [
  {
    title: "SVNR vs Volume B2B Agencies",
    subtitle: "Premium operators vs mass-market lead gen",
    body: [
      "Volume outreach agencies — Belkins, Martal Group, CIENCE — are built for one thing: throughput. They run the same templated sequences across hundreds of clients at once, optimised for quantity of contacts, not quality of conversation.",
      "The problem is obvious the moment you operate in luxury, private equity, or high-ticket B2B. Your prospect — a family office principal, a premium retailer's MD, a wealth manager's partner — receives the same automated email as every other target in a mass campaign. They delete it. Your brand suffers.",
      "SVNR Global operates with a fundamentally different model. We take on a small number of engagements at any one time. Every outreach sequence is written specifically for your sector, your target profile, and your brand voice. There are no shared templates. There is no recycled messaging.",
      "The result: your prospects feel approached with intelligence, not sprayed with automation.",
    ],
    tags: ["Luxury B2B", "Private Equity", "Premium Real Estate", "Wealth Management"],
  },
  {
    title: "SVNR vs Campaign-Based Agencies",
    subtitle: "Permanent infrastructure vs one-off campaigns",
    body: [
      "Most outreach agencies sell campaigns. A fixed duration, a fixed scope, a fixed set of contacts — and when the campaign ends, so does your pipeline. You are back to square one.",
      "This model was designed for agencies, not for clients. It creates recurring dependency: you need another campaign, another invoice, another onboarding. The results are episodic — spikes of activity followed by silence.",
      "SVNR builds outreach infrastructure. Not a campaign. Not a retainer for 'ongoing outreach.' A system — custom AI agents, enriched prospect databases, automated qualification and routing — that runs continuously and compounds over time. The longer it operates, the better it performs.",
      "Think of it like the difference between renting water and building a well. Campaigns rent you water. Infrastructure gives you the well.",
    ],
    tags: ["System vs Campaign", "Outreach Infrastructure", "Long-term Pipeline"],
  },
  {
    title: "SVNR vs Generic AI Outreach Tools",
    subtitle: "Bespoke deployment vs self-serve platforms",
    body: [
      "Apollo.io, Instantly, Lemlist, Smartlead — these are tools. Powerful tools, in the right hands. But they require a team to configure, a copywriter to write the sequences, a strategist to define targeting, a data analyst to interpret results, and a RevOps operator to maintain the infrastructure.",
      "What most premium operators discover when they try these platforms is that the tool is the smallest part of the problem. The hard work is everything around it: knowing which data sources to combine, how to enrich a prospect with sector-specific signals, how to write outreach that sounds human to a sceptical MD, how to structure follow-up sequences that escalate without irritating.",
      "SVNR does all of that. You get the outcome — qualified conversations in your calendar — not the tool.",
    ],
    tags: ["Apollo Alternative", "AI Outreach", "Done-For-You vs DIY"],
  },
  {
    title: "SVNR vs Hiring In-House",
    subtitle: "Deployed infrastructure vs ramp-up lag",
    body: [
      "Hiring an SDR, a BDR, or a head of sales is the natural instinct when the pipeline feels thin. The logic makes sense: internal control, brand ownership, cultural fit.",
      "But the economics rarely hold up for premium operators. A mid-level SDR in London or New York costs £50–80k base before commission, management overhead, tools, and ramp time. Six months to hire. Three months to ramp. Nine months before you know if it was the right hire.",
      "SVNR deploys in weeks. The infrastructure includes data enrichment, AI-assisted research, multi-channel outreach, and a reporting layer — none of which a single SDR brings with them. And unlike a full-time hire, our engagement scales with your pipeline, not your headcount budget.",
      "This is not an argument against ever hiring in-house. It's an argument for having infrastructure operational before the hire arrives — so they close, not prospect.",
    ],
    tags: ["SDR Alternative", "In-House vs Agency", "Sales Infrastructure"],
  },
  {
    title: "SVNR vs Paid Advertising",
    subtitle: "Direct outreach vs waiting for inbound",
    body: [
      "Paid advertising works for consumer products, SaaS with high trial volume, and businesses where unit economics allow for broad top-of-funnel spend. For premium B2B — private equity deal flow, wealth management client acquisition, luxury brand distribution — it almost never works.",
      "Your buyer is a specific person, not a demographic segment. A family office principal does not discover their next GP relationship through a Google ad. A premium retailer's head of buying does not click a LinkedIn campaign when selecting new suppliers.",
      "Direct outreach — intelligent, personalised, sector-specific — is how premium deals get started. SVNR's infrastructure identifies those specific people, researches their context, and initiates a conversation that feels earned rather than broadcast.",
    ],
    tags: ["B2B vs B2C", "Outbound vs Paid Ads", "High-Ticket Acquisition"],
  },
];

const ColHeader = ({ label, sub, highlight }: { label: string; sub: string; highlight?: boolean }) => (
  <th className={`px-4 py-4 text-center ${highlight ? "bg-white/8 rounded-t-xl" : ""}`}>
    <div className={`text-sm font-medium ${highlight ? "text-white" : "text-white/50"}`}>{label}</div>
    <div className="text-[10px] uppercase tracking-widest text-white/25 mt-1">{sub}</div>
  </th>
);

const Cell = ({ val, highlight }: { val: keyof typeof checks; highlight?: boolean }) => (
  <td className={`px-4 py-3.5 text-center ${highlight ? "bg-white/5" : ""}`}>
    <div className="flex justify-center">{checks[val]}</div>
  </td>
);

export default function Compare() {
  return (
    <main className="relative w-full bg-[#0A0A0B] font-sans selection:bg-white/20 selection:text-white">
      <SEO
        title="SVNR Global vs Other Agencies — Why Premium Operators Choose SVNR"
        description="How does SVNR Global compare to volume outreach agencies, campaign retainers, AI tools, and in-house teams? A clear breakdown for premium B2B operators."
        canonical="/compare"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Compare", url: "/compare" },
        ]}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "SVNR Global vs Other Client Acquisition Approaches",
            "url": "https://svnrglobal.com/compare",
            "description": "A detailed comparison of SVNR Global against volume agencies, campaign retainers, self-serve AI tools, and in-house SDR teams — for premium B2B operators.",
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How is SVNR Global different from a B2B outreach agency?",
                "acceptedAnswer": { "@type": "Answer", "text": "Volume agencies send high-frequency templated sequences to large contact lists. SVNR builds bespoke acquisition infrastructure — custom AI agents, individually researched prospects, sector-specific outreach — for a small number of premium clients at any time. The difference is precision vs volume, and permanent infrastructure vs one-off campaigns." }
              },
              {
                "@type": "Question",
                "name": "Is SVNR Global better than hiring an in-house SDR or BDR?",
                "acceptedAnswer": { "@type": "Answer", "text": "An in-house SDR takes 3–6 months to ramp, requires management overhead, and typically uses generic tools and tactics not built for premium sectors. SVNR deploys in 2–3 weeks with sector-specific AI infrastructure, no management overhead, and results accountability built into the engagement." }
              },
              {
                "@type": "Question",
                "name": "How does SVNR compare to self-serve AI outreach tools like Clay or Apollo?",
                "acceptedAnswer": { "@type": "Answer", "text": "Clay, Apollo, and similar tools are platforms requiring internal expertise to configure, run, and optimise. SVNR uses these tools as components in a bespoke infrastructure built and operated for the client. You get the output — qualified conversations — without the operational overhead of running the tools yourself." }
              },
              {
                "@type": "Question",
                "name": "Why do premium brands choose SVNR over cheaper outreach agencies?",
                "acceptedAnswer": { "@type": "Answer", "text": "Premium B2B acquisition cannot be done with generic templates. Luxury brands, PE firms, and wealth managers require outreach that demonstrates specific knowledge of the recipient's world — something high-volume agencies cannot deliver. SVNR's sector depth and individualised research are what make the difference in reply rates and relationship quality." }
              }
            ]
          }
        ]}
      />

      {/* HERO */}
      <VideoHero src={VIDEOS.compare}>
        <div className="max-w-4xl mx-auto px-6 text-center pt-20 sm:pt-32 pb-14 sm:pb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }}
            className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-6"
          >
            SVNR vs Alternatives
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.3 }}
            className="text-4xl sm:text-5xl md:text-6xl font-medium text-white leading-tight tracking-tight mb-6"
          >
            Not all client acquisition<br />
            <span className="shimmer-text">is built the same.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.6 }}
            className="text-white/50 text-lg max-w-2xl mx-auto"
          >
            Volume agencies, one-off campaigns, AI tools, in-house teams — each has a use case.
            Here is why premium operators choose infrastructure over any of them.
          </motion.p>
        </div>
      </VideoHero>

      {/* COMPARISON TABLE */}
      <section className="relative z-10 bg-[#0A0A0B] py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">Feature comparison</p>
            <h2 className="text-3xl sm:text-4xl font-medium text-white tracking-tight">At a glance</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="liquid-glass rounded-2xl overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-white/8">
                    <th className="px-4 py-4 text-left text-xs uppercase tracking-widest text-white/30 font-normal">Capability</th>
                    <ColHeader label="SVNR Global" sub="Infrastructure" highlight />
                    <ColHeader label="Volume Agency" sub="Belkins, CIENCE, etc." />
                    <ColHeader label="In-House SDR" sub="Full-time hire" />
                    <ColHeader label="AI Tools" sub="Apollo, Instantly, etc." />
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={row.label} className={`border-b border-white/5 ${i % 2 === 0 ? "" : "bg-white/[0.02]"}`}>
                      <td className="px-4 py-3.5 text-sm text-white/60">{row.label}</td>
                      <Cell val={row.svnr as keyof typeof checks} highlight />
                      <Cell val={row.generic as keyof typeof checks} />
                      <Cell val={row.inhouse as keyof typeof checks} />
                      <Cell val={row.tools as keyof typeof checks} />
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ANGLE SECTIONS */}
      <section className="relative z-10 bg-[#0A0A0B] py-10 px-6">
        <div className="max-w-4xl mx-auto space-y-24">
          {angles.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-2">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-3">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="text-3xl sm:text-4xl font-medium text-white tracking-tight mb-2">{a.title}</h2>
                <p className="text-white/40 text-sm italic mb-8">{a.subtitle}</p>
              </div>

              <div className="space-y-5 mb-8">
                {a.body.map((para, j) => (
                  <p key={j} className="text-white/60 leading-relaxed text-[15px]">{para}</p>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {a.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1.5 rounded-full text-[10px] uppercase tracking-widest text-white/40 border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>

              {i < angles.length - 1 && (
                <div className="mt-16 border-t border-white/8" />
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* BOTTOM CALLOUT */}
      <section className="relative z-10 bg-[#0A0A0B] py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="liquid-glass rounded-3xl p-10 sm:p-14 text-center"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-6">The short version</p>
            <h2 className="text-3xl sm:text-4xl font-medium text-white tracking-tight mb-6">
              If you operate at the premium end,<br />
              <span className="shimmer-text">the approach has to match.</span>
            </h2>
            <p className="text-white/50 mb-10 max-w-xl mx-auto leading-relaxed">
              Volume agencies dilute your brand. Campaigns create dependency. Tools require expertise you don't have.
              In-house teams ramp slowly. SVNR deploys infrastructure that runs — built specifically for your market,
              your sector, and the calibre of client you want to attract.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-all"
              >
                Book a Consultation <ArrowRight size={14} />
              </Link>
              <Link
                to="/engagement"
                className="inline-flex items-center gap-3 px-10 py-4 rounded-full border border-white/20 text-white text-sm hover:border-white/50 transition-all"
              >
                See How We Work <ArrowRight size={14} />
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
