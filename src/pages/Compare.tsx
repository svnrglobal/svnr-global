import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Settings, PenLine, Lightbulb, BarChart3, Workflow } from "lucide-react";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import Breadcrumbs from "../components/Breadcrumbs";

const EASE = [0.16, 1, 0.3, 1] as const;

type Cell = "yes" | "no" | "partial";

const comparisonGroups: { category: string; note: string; rows: { label: string; svnr: Cell; generic: Cell; inhouse: Cell; tools: Cell }[] }[] = [
  {
    category: "Expertise & Targeting",
    note: "How precisely the outreach is aimed at the right buyer.",
    rows: [
      { label: "Sector-specific expertise", svnr: "yes", generic: "no", inhouse: "partial", tools: "no" },
      { label: "Custom AI agents per client", svnr: "yes", generic: "no", inhouse: "no", tools: "no" },
      { label: "Bespoke outreach, no shared templates", svnr: "yes", generic: "no", inhouse: "partial", tools: "no" },
      { label: "Decision-maker level targeting", svnr: "yes", generic: "partial", inhouse: "partial", tools: "partial" },
      { label: "Works for luxury / high-ticket brands", svnr: "yes", generic: "no", inhouse: "partial", tools: "no" },
    ],
  },
  {
    category: "Delivery Model",
    note: "What you're actually buying, and whether it lasts.",
    rows: [
      { label: "Permanent infrastructure (not a campaign)", svnr: "yes", generic: "no", inhouse: "yes", tools: "no" },
      { label: "Multi-channel (email + LinkedIn + direct)", svnr: "yes", generic: "partial", inhouse: "partial", tools: "no" },
      { label: "No onboarding lag (30–60 days to results)", svnr: "yes", generic: "no", inhouse: "no", tools: "no" },
    ],
  },
  {
    category: "Operations & Reporting",
    note: "What it takes from your team to keep it running.",
    rows: [
      { label: "Custom dashboards & reporting", svnr: "yes", generic: "no", inhouse: "partial", tools: "partial" },
      { label: "Results without your daily input", svnr: "yes", generic: "partial", inhouse: "no", tools: "no" },
    ],
  },
];

const plans = [
  {
    name: "SVNR Global",
    tag: "Infrastructure",
    line: "Bespoke acquisition infrastructure, built and operated for you.",
    features: ["Sector-specific AI agents", "No shared templates", "Runs continuously, compounds over time"],
    highlight: true,
  },
  {
    name: "Volume Agency",
    tag: "Belkins, CIENCE, etc.",
    line: "Templated sequences run at scale across many clients at once.",
    features: ["Fixed-duration campaigns", "Shared messaging", "Optimised for contact volume"],
    highlight: false,
  },
  {
    name: "In-House SDR",
    tag: "Full-time hire",
    line: "Internal control, at the cost of hiring and ramp time.",
    features: ["6 months to hire", "3 months to ramp", "Scales with headcount budget"],
    highlight: false,
  },
  {
    name: "AI Tools",
    tag: "Apollo, Instantly, etc.",
    line: "Self-serve platforms that still need a team to run them.",
    features: ["Requires internal configuration", "No strategy or copywriting included", "You operate it yourself"],
    highlight: false,
  },
];

const angles = [
  {
    title: "SVNR vs Volume B2B Agencies",
    subtitle: "Premium operators vs mass-market lead gen",
    body: [
      "Volume outreach agencies, Belkins, Martal Group, CIENCE, are built for one thing: throughput. They run the same templated sequences across hundreds of clients at once, optimised for quantity of contacts, not quality of conversation.",
      "The problem is obvious the moment you operate in luxury, private equity, or high-ticket B2B. Your prospect, a family office principal, a premium retailer's MD, a wealth manager's partner, receives the same automated email as every other target in a mass campaign. They delete it. Your brand suffers.",
      "SVNR Global operates with a fundamentally different model. We take on a small number of engagements at any one time. Every outreach sequence is written specifically for your sector, your target profile, and your brand voice. There are no shared templates. There is no recycled messaging.",
      "The result: your prospects feel approached with intelligence, not sprayed with automation.",
    ],
    tags: ["Luxury B2B", "Private Equity", "Premium Real Estate", "Wealth Management"],
  },
  {
    title: "SVNR vs Campaign-Based Agencies",
    subtitle: "Permanent infrastructure vs one-off campaigns",
    body: [
      "Most outreach agencies sell campaigns. A fixed duration, a fixed scope, a fixed set of contacts, and when the campaign ends, so does your pipeline. You are back to square one.",
      "This model was designed for agencies, not for clients. It creates recurring dependency: you need another campaign, another invoice, another onboarding. The results are episodic, spikes of activity followed by silence.",
      "SVNR builds outreach infrastructure. Not a campaign. Not a retainer for 'ongoing outreach.' A system, custom AI agents, enriched prospect databases, automated qualification and routing, that runs continuously and compounds over time. The longer it operates, the better it performs.",
      "Think of it like the difference between renting water and building a well. Campaigns rent you water. Infrastructure gives you the well.",
    ],
    tags: ["System vs Campaign", "Outreach Infrastructure", "Long-term Pipeline"],
  },
  {
    title: "SVNR vs Generic AI Outreach Tools",
    subtitle: "Bespoke deployment vs self-serve platforms",
    body: [
      "Apollo.io, Instantly, Lemlist, Smartlead, these are tools. Powerful tools, in the right hands. But they require a team to configure, a copywriter to write the sequences, a strategist to define targeting, a data analyst to interpret results, and a RevOps operator to maintain the infrastructure.",
      "What most premium operators discover when they try these platforms is that the tool is the smallest part of the problem. The hard work is everything around it: knowing which data sources to combine, how to enrich a prospect with sector-specific signals, how to write outreach that sounds human to a sceptical MD, how to structure follow-up sequences that escalate without irritating.",
      "SVNR does all of that. You get the outcome, qualified conversations in your calendar, not the tool.",
    ],
    tags: ["Apollo Alternative", "AI Outreach", "Done-For-You vs DIY"],
  },
  {
    title: "SVNR vs Hiring In-House",
    subtitle: "Deployed infrastructure vs ramp-up lag",
    body: [
      "Hiring an SDR, a BDR, or a head of sales is the natural instinct when the pipeline feels thin. The logic makes sense: internal control, brand ownership, cultural fit.",
      "But the economics rarely hold up for premium operators. A mid-level SDR in London or New York costs £50–80k base before commission, management overhead, tools, and ramp time. Six months to hire. Three months to ramp. Nine months before you know if it was the right hire.",
      "SVNR deploys in weeks. The infrastructure includes data enrichment, AI-assisted research, multi-channel outreach, and a reporting layer, none of which a single SDR brings with them. And unlike a full-time hire, our engagement scales with your pipeline, not your headcount budget.",
      "This is not an argument against ever hiring in-house. It's an argument for having infrastructure operational before the hire arrives, so they close, not prospect.",
    ],
    tags: ["SDR Alternative", "In-House vs Agency", "Sales Infrastructure"],
  },
  {
    title: "SVNR vs Paid Advertising",
    subtitle: "Direct outreach vs waiting for inbound",
    body: [
      "Paid advertising works for consumer products, SaaS with high trial volume, and businesses where unit economics allow for broad top-of-funnel spend. For premium B2B, private equity deal flow, wealth management client acquisition, luxury brand distribution, it almost never works.",
      "Your buyer is a specific person, not a demographic segment. A family office principal does not discover their next GP relationship through a Google ad. A premium retailer's head of buying does not click a LinkedIn campaign when selecting new suppliers.",
      "Direct outreach, intelligent, personalised, sector-specific, is how premium deals get started. SVNR's infrastructure identifies those specific people, researches their context, and initiates a conversation that feels earned rather than broadcast.",
    ],
    tags: ["B2B vs B2C", "Outbound vs Paid Ads", "High-Ticket Acquisition"],
  },
];

function CellMark({ val }: { val: Cell }) {
  if (val === "yes") return <Check size={15} className="text-[#fda4af]" />;
  if (val === "partial") return <span className="text-white/35 text-xs">±</span>;
  return <span className="text-white/20">—</span>;
}

// Small inline visuals that anchor three of the comparison angles. Additive
// next to the prose; no SEO copy is replaced.
function AngleVisual({ index }: { index: number }) {
  if (index === 0) {
    const scatter = [
      [42, 36], [88, 92], [140, 50], [62, 128], [180, 120], [220, 64],
      [118, 148], [200, 30], [250, 140], [156, 92], [34, 84], [240, 100],
    ];
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="rounded-2xl border border-white/[0.08] p-6 mb-8"
      >
        <svg viewBox="0 0 640 180" className="w-full h-auto" role="img" aria-label="Volume outreach scatters; precision outreach converges on the right buyer">
          {scatter.map(([x, y], i) => (
            <circle key={i} cx={x + 20} cy={y} r={4} fill="rgba(255,255,255,0.22)" opacity={0.15 + (i % 4) * 0.05} />
          ))}
          <text x="160" y="172" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="10" letterSpacing="2">VOLUME</text>
          <line x1="310" y1="20" x2="310" y2="160" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          {[[370, 40], [385, 130], [420, 70], [445, 120], [470, 45]].map(([x, y], i) => (
            <g key={i}>
              <circle cx={x} cy={y} r={4} fill="rgba(251,113,133,0.7)" />
              <line x1={x} y1={y} x2={540} y2={90} stroke="rgba(251,113,133,0.3)" strokeWidth="1.5" />
            </g>
          ))}
          <circle cx="540" cy="90" r="22" fill="none" stroke="rgba(251,113,133,0.7)" strokeWidth="1.5" />
          <circle cx="540" cy="90" r="12" fill="none" stroke="rgba(251,113,133,0.45)" strokeWidth="1.5" />
          <circle cx="540" cy="90" r="4" fill="#fb7185" />
          <text x="480" y="172" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="10" letterSpacing="2">PRECISION</text>
        </svg>
      </motion.div>
    );
  }
  if (index === 2) {
    const tools = [
      { icon: Settings, label: "Configure" },
      { icon: PenLine, label: "Copywriting" },
      { icon: Lightbulb, label: "Strategy" },
      { icon: BarChart3, label: "Analysis" },
      { icon: Workflow, label: "RevOps" },
    ];
    return (
      <div className="flex flex-wrap items-center gap-2 mb-8">
        {tools.map((t, i) => (
          <motion.span
            key={t.label}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="flex items-center gap-2"
          >
            <span className="flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-[10px] uppercase tracking-widest text-white/45">
              <t.icon size={12} /> {t.label}
            </span>
            {i < tools.length - 1 && <span className="text-white/25">+</span>}
          </motion.span>
        ))}
        <ArrowRight size={12} className="text-white/25" />
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="rounded-full border border-[#fb7185]/40 px-3 py-1.5 text-[10px] uppercase tracking-widest text-white"
        >
          One system, operated for you
        </motion.span>
      </div>
    );
  }
  if (index === 3) {
    const seg = "h-7 flex items-center justify-center text-[10px] uppercase tracking-widest text-white/50 whitespace-nowrap overflow-hidden";
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="rounded-2xl border border-white/[0.08] p-6 mb-8 space-y-4"
      >
        <div>
          <p className="text-[10px] uppercase tracking-widest text-white/40 mb-2">In-house SDR</p>
          <div className="flex gap-1">
            {[
              { w: "50%", bg: "rgba(255,255,255,0.08)", label: "Hire, 6 months" },
              { w: "25%", bg: "rgba(255,255,255,0.12)", label: "Ramp, 3 months" },
              { w: "25%", bg: "rgba(255,255,255,0.2)", label: "First results" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                style={{ width: s.w, background: s.bg, transformOrigin: "left" }}
                className={`${seg} rounded-md px-1`}
              >
                {s.label}
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-widest text-white/40 mb-2">SVNR</p>
          <div className="flex gap-1">
            {[
              { w: "15%", bg: "rgba(251,113,133,0.6)", label: "Deploy" },
              { w: "25%", bg: "rgba(251,113,133,0.3)", label: "Outreach live" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45 + i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                style={{ width: s.w, background: s.bg, transformOrigin: "left" }}
                className={`${seg} rounded-md px-1`}
              >
                {s.label}
              </motion.div>
            ))}
          </div>
        </div>
        <p className="text-[9px] text-white/25">0 to 9 months</p>
      </motion.div>
    );
  }
  return null;
}

export default function Compare() {
  return (
    <main className="relative w-full bg-black font-sans selection:bg-white/20 selection:text-white">
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
            "description": "A detailed comparison of SVNR Global against volume agencies, campaign retainers, self-serve AI tools, and in-house SDR teams, for premium B2B operators.",
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How is SVNR Global different from a B2B outreach agency?",
                "acceptedAnswer": { "@type": "Answer", "text": "Volume agencies send high-frequency templated sequences to large contact lists. SVNR builds bespoke acquisition infrastructure, custom AI agents, individually researched prospects, sector-specific outreach, for a small number of premium clients at any time. The difference is precision vs volume, and permanent infrastructure vs one-off campaigns." }
              },
              {
                "@type": "Question",
                "name": "Is SVNR Global better than hiring an in-house SDR or BDR?",
                "acceptedAnswer": { "@type": "Answer", "text": "An in-house SDR takes 3–6 months to ramp, requires management overhead, and typically uses generic tools and tactics not built for premium sectors. SVNR deploys in 2–3 weeks with sector-specific AI infrastructure, no management overhead, and results accountability built into the engagement." }
              },
              {
                "@type": "Question",
                "name": "How does SVNR compare to self-serve AI outreach tools like Clay or Apollo?",
                "acceptedAnswer": { "@type": "Answer", "text": "Clay, Apollo, and similar tools are platforms requiring internal expertise to configure, run, and optimise. SVNR uses these tools as components in a bespoke infrastructure built and operated for the client. You get the output, qualified conversations, without the operational overhead of running the tools yourself." }
              },
              {
                "@type": "Question",
                "name": "Why do premium brands choose SVNR over cheaper outreach agencies?",
                "acceptedAnswer": { "@type": "Answer", "text": "Premium B2B acquisition cannot be done with generic templates. Luxury brands, PE firms, and wealth managers require outreach that demonstrates specific knowledge of the recipient's world, something high-volume agencies cannot deliver. SVNR's sector depth and individualised research are what make the difference in reply rates and relationship quality." }
              }
            ]
          }
        ]}
      />

      {/* HERO */}
      <section className="relative pt-32 sm:pt-40 pb-16 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "SVNR vs Alternatives" }]} />
          <motion.p
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="text-[10px] tracking-[0.28em] uppercase text-white/40 mb-6"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            SVNR vs Alternatives
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05, ease: EASE }}
            className="text-4xl sm:text-5xl md:text-[64px] font-medium text-white leading-[1.05] tracking-tight mb-6 max-w-3xl"
          >
            Not all client acquisition is built the same.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            className="text-white/45 text-lg max-w-2xl"
          >
            Volume agencies, one-off campaigns, AI tools, in-house teams, each has a use case.
            Here is why premium operators choose infrastructure over any of them.
          </motion.p>
        </div>
      </section>

      {/* PLAN-STYLE SUMMARY CARDS */}
      <section className="relative px-6 md:px-12 pb-16">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: EASE }}
              className={`relative rounded-2xl border p-6 flex flex-col ${
                p.highlight ? "border-white/[0.14] bg-white/[0.028]" : "border-white/[0.08] bg-white/[0.015] hover:bg-white/[0.028] hover:border-white/[0.14]"
              } transition-colors`}
            >
              {p.highlight && (
                <span className="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl" style={{ background: "linear-gradient(90deg, transparent, #fb7185, transparent)" }} />
              )}
              {p.highlight && (
                <span
                  className="absolute -top-3 left-6 rounded-full px-3 py-1 text-[10px] tracking-[0.15em] uppercase text-white border border-[#fb7185]/40"
                  style={{ background: "rgba(251,113,133,0.12)" }}
                >
                  Recommended
                </span>
              )}
              <div className="text-[10px] tracking-[0.2em] uppercase text-white/35 mb-2" style={{ fontFamily: "var(--font-mono)" }}>
                {p.tag}
              </div>
              <h3 className="text-xl font-medium text-white tracking-tight mb-3">{p.name}</h3>
              <p className="text-white/45 text-sm leading-relaxed mb-5">{p.line}</p>
              <div className="text-[10px] tracking-widest uppercase text-white/30 mb-3 mt-auto">
                {p.highlight ? "All essentials, plus:" : "Includes"}
              </div>
              <ul className="space-y-2">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-white/50">
                    <Check size={13} className={p.highlight ? "text-[#fda4af] mt-0.5 shrink-0" : "text-white/25 mt-0.5 shrink-0"} />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="relative px-6 md:px-12 py-16">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: EASE }}
            className="mb-10"
          >
            <p className="text-[10px] tracking-[0.28em] uppercase text-white/40 mb-4" style={{ fontFamily: "var(--font-mono)" }}>
              Feature comparison
            </p>
            <h2 className="text-2xl md:text-4xl font-medium text-white tracking-tight">At a glance</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: EASE }}
            className="rounded-2xl border border-white/[0.08] overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] border-collapse">
                <thead>
                  <tr className="sticky top-[64px] z-20 bg-black">
                    <th className="border-b border-white/[0.08] px-5 py-4 text-left text-[10px] tracking-[0.2em] uppercase text-white/35 font-normal bg-black" style={{ fontFamily: "var(--font-mono)" }}>
                      Capability
                    </th>
                    <th className="border-b border-white/[0.08] px-4 py-4 text-center bg-white/[0.03] relative">
                      <span className="absolute inset-x-0 top-0 h-[2px]" style={{ background: "#fb7185" }} />
                      <div className="text-sm font-medium text-white">SVNR Global</div>
                      <div className="text-[9px] uppercase tracking-widest text-white/30 mt-1">Infrastructure</div>
                    </th>
                    <th className="border-b border-white/[0.08] px-4 py-4 text-center bg-black">
                      <div className="text-sm font-medium text-white/50">Volume Agency</div>
                      <div className="text-[9px] uppercase tracking-widest text-white/25 mt-1">Belkins, CIENCE, etc.</div>
                    </th>
                    <th className="border-b border-white/[0.08] px-4 py-4 text-center bg-black">
                      <div className="text-sm font-medium text-white/50">In-House SDR</div>
                      <div className="text-[9px] uppercase tracking-widest text-white/25 mt-1">Full-time hire</div>
                    </th>
                    <th className="border-b border-white/[0.08] px-4 py-4 text-center bg-black">
                      <div className="text-sm font-medium text-white/50">AI Tools</div>
                      <div className="text-[9px] uppercase tracking-widest text-white/25 mt-1">Apollo, Instantly, etc.</div>
                    </th>
                  </tr>
                </thead>
                {comparisonGroups.map((group) => (
                  <tbody key={group.category}>
                    <tr>
                      <td colSpan={5} className="px-5 pt-8 pb-2">
                        <div className="text-sm font-medium text-white">{group.category}</div>
                        <div className="text-xs text-white/40 mt-0.5">{group.note}</div>
                      </td>
                    </tr>
                    {group.rows.map((row, i) => (
                      <motion.tr
                        key={row.label}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: Math.min(i * 0.04, 0.3) }}
                        className="border-b border-white/[0.05]"
                      >
                        <td className="px-5 py-3.5 text-sm text-white/55">{row.label}</td>
                        <td className="px-4 py-3.5 text-center bg-white/[0.015]">
                          <div className="flex justify-center"><CellMark val={row.svnr} /></div>
                        </td>
                        <td className="px-4 py-3.5 text-center">
                          <div className="flex justify-center"><CellMark val={row.generic} /></div>
                        </td>
                        <td className="px-4 py-3.5 text-center">
                          <div className="flex justify-center"><CellMark val={row.inhouse} /></div>
                        </td>
                        <td className="px-4 py-3.5 text-center">
                          <div className="flex justify-center"><CellMark val={row.tools} /></div>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                ))}
              </table>
            </div>
          </motion.div>
          <p className="text-[10px] text-white/30 text-center mt-3 md:hidden">Swipe to compare</p>
        </div>
      </section>

      {/* ANGLE SECTIONS */}
      <section className="relative px-6 md:px-12 py-10">
        <div className="max-w-[1200px] mx-auto space-y-24">
          {angles.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: EASE }}
              className="max-w-3xl"
            >
              <div className="mb-2">
                <p className="text-[10px] tracking-[0.28em] uppercase text-white/30 mb-3" style={{ fontFamily: "var(--font-mono)" }}>
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="text-2xl md:text-4xl font-medium text-white tracking-tight mb-2">{a.title}</h2>
                <p className="text-white/40 text-sm italic mb-8">{a.subtitle}</p>
              </div>

              <div className="space-y-5 mb-8">
                {a.body.map((para, j) => (
                  <p key={j} className="text-white/45 leading-relaxed text-[15px]">{para}</p>
                ))}
              </div>

              <AngleVisual index={i} />

              <div className="flex flex-wrap gap-2">
                {a.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1.5 rounded-full text-[10px] uppercase tracking-widest text-white/40 border border-white/[0.08]">
                    {tag}
                  </span>
                ))}
              </div>

              {i < angles.length - 1 && (
                <div className="mt-16 border-t border-white/[0.08]" />
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* BOTTOM CALLOUT */}
      <section className="relative px-6 md:px-12 py-24">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: EASE }}
            className="rounded-2xl border border-white/[0.08] bg-white/[0.015] p-10 sm:p-14 text-center"
          >
            <p className="text-[10px] tracking-[0.28em] uppercase text-white/30 mb-6" style={{ fontFamily: "var(--font-mono)" }}>
              The short version
            </p>
            <h2 className="text-2xl md:text-4xl font-medium text-white tracking-tight mb-6">
              If you operate at the premium end, the approach has to match.
            </h2>
            <p className="text-white/45 mb-10 max-w-xl mx-auto leading-relaxed">
              Volume agencies dilute your brand. Campaigns create dependency. Tools require expertise you don't have.
              In-house teams ramp slowly. SVNR deploys infrastructure that runs, built specifically for your market,
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
                className="inline-flex items-center gap-3 px-10 py-4 rounded-full border border-white/[0.14] text-white text-sm hover:border-white/30 transition-all"
              >
                See How We Work <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="relative px-6 md:px-12 pb-10 max-w-[1200px] mx-auto">
        <Footer />
      </div>
    </main>
  );
}
