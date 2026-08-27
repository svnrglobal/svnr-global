import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "../data/content";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import Breadcrumbs from "../components/Breadcrumbs";
import OpticalType from "../components/OpticalType";
import { useIdleMischief } from "../hooks/useIdleMischief";

const MONO = { fontFamily: "var(--font-mono)" };

function PipelineMini({ lit }: { lit: boolean }) {
  const rows = [
    { name: "Atelier Renz", loc: "Zürich", badge: "OUT", cls: "text-white/35 border-white/10" },
    { name: "Maison Libert", loc: "Paris", badge: "REPLY", cls: "text-sky-400/60 border-sky-400/20" },
    { name: "De Vries Int.", loc: "Amsterdam", badge: "HOT", cls: "text-emerald-400/70 border-emerald-400/25" },
  ];
  return (
    <div className="absolute inset-x-7 top-16 flex flex-col gap-1.5 pointer-events-none">
      {rows.map((r, i) => (
        <motion.div
          key={r.name}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: lit ? 1 : 0, x: lit ? 0 : -8 }}
          transition={{ duration: 0.32, delay: lit ? i * 0.1 : 0, ease: "easeOut" }}
          className="flex items-center justify-between rounded-lg border border-white/[0.07] bg-white/[0.03] px-3 py-1.5"
        >
          <div className="flex items-center gap-1.5 min-w-0">
            <span className="text-[11px] text-white/65 font-medium truncate" style={MONO}>{r.name}</span>
            <span className="text-[10px] text-white/25 shrink-0">{r.loc}</span>
          </div>
          <span className={`text-[8px] tracking-widest border rounded px-1.5 py-0.5 shrink-0 ml-2 ${r.cls}`} style={MONO}>{r.badge}</span>
        </motion.div>
      ))}
    </div>
  );
}

function InboundMini({ lit }: { lit: boolean }) {
  return (
    <div className="absolute inset-x-7 top-16 pointer-events-none">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: lit ? 1 : 0, y: lit ? 0 : -10 }}
        transition={{ duration: 0.38, ease: "easeOut" }}
        className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3"
      >
        <div className="flex items-center gap-2 mb-1.5">
          <motion.span
            animate={lit ? { opacity: [1, 0.25, 1] } : { opacity: 0 }}
            transition={{ duration: 1.4, repeat: Infinity, delay: 0.4 }}
            className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"
          />
          <span className="text-[10px] text-white/40 tracking-widest" style={MONO}>INBOUND · 23:41</span>
        </div>
        <p className="text-[12px] text-white/70">Qualified · routed to sales</p>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: lit ? 1 : 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="text-[24px] font-semibold text-white/75 mt-3 tabular-nums leading-none"
        style={MONO}
      >
        60s
      </motion.p>
    </div>
  );
}

function StageMini({ lit }: { lit: boolean }) {
  const stages = [
    { name: "Contacted", pct: 100 },
    { name: "Qualified", pct: 68 },
    { name: "Proposal", pct: 41 },
    { name: "Closed", pct: 22 },
  ];
  return (
    <div className="absolute inset-x-7 top-16 flex flex-col gap-2 pointer-events-none">
      {stages.map((s, i) => (
        <div key={s.name}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: lit ? 1 : 0 }}
            transition={{ duration: 0.25, delay: lit ? i * 0.08 : 0 }}
            className="flex items-center justify-between mb-1"
          >
            <span className="text-[9px] tracking-widest text-white/30" style={MONO}>{s.name.toUpperCase()}</span>
            <span className="text-[9px] text-white/40 tabular-nums" style={MONO}>{s.pct}%</span>
          </motion.div>
          <div className="h-[3px] rounded-full bg-white/[0.06] overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: lit ? `${s.pct}%` : "0%" }}
              transition={{ duration: 0.55, delay: lit ? 0.1 + i * 0.09 : 0, ease: [0.16, 1, 0.3, 1] }}
              className="h-full rounded-full bg-white/40"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function ReductionMini({ lit }: { lit: boolean }) {
  return (
    <div className="absolute inset-x-7 top-16 flex items-end gap-5 pointer-events-none">
      <div className="flex flex-col items-center gap-1.5">
        <div className="w-8 h-14 rounded bg-white/[0.05] flex items-end overflow-hidden">
          <motion.div
            className="w-full bg-white/45 rounded-t"
            initial={{ height: 0 }}
            animate={{ height: lit ? "100%" : "0%" }}
            transition={{ duration: 0.45, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
        <motion.span
          className="text-[9px] text-white/25 tracking-widest"
          style={MONO}
          initial={{ opacity: 0 }}
          animate={{ opacity: lit ? 1 : 0 }}
          transition={{ delay: 0.45 }}
        >
          MANUAL
        </motion.span>
      </div>
      <div className="flex flex-col items-center gap-1.5">
        <motion.span
          className="text-[18px] font-semibold text-white/75 tabular-nums leading-none mb-1"
          style={MONO}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: lit ? 1 : 0, y: lit ? 0 : 4 }}
          transition={{ delay: 0.6 }}
        >
          −70%
        </motion.span>
        <div className="w-8 h-14 rounded bg-white/[0.05] flex items-end overflow-hidden">
          <motion.div
            className="w-full bg-white/20 rounded-t"
            initial={{ height: 0 }}
            animate={{ height: lit ? "30%" : "0%" }}
            transition={{ duration: 0.55, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
        <motion.span
          className="text-[9px] text-white/25 tracking-widest"
          style={MONO}
          initial={{ opacity: 0 }}
          animate={{ opacity: lit ? 1 : 0 }}
          transition={{ delay: 0.5 }}
        >
          AUTOMATED
        </motion.span>
      </div>
    </div>
  );
}

function ProfileStackMini({ lit }: { lit: boolean }) {
  const profiles = [
    "R. Hoffman · Geneva · CHF 120M",
    "T. Al-Rashid · Dubai · $80M",
    "K. Schreiber · Frankfurt · €95M",
    "M. Dupont · Paris · €60M",
    "A. Vandermeer · Zürich · CHF 200M",
  ];
  return (
    <div className="absolute inset-x-7 top-16 pointer-events-none">
      <div className="flex flex-col gap-1">
        {profiles.map((p, i) => (
          <motion.div
            key={p}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: lit ? 1 : 0, x: lit ? 0 : -6 }}
            transition={{ duration: 0.28, delay: lit ? i * 0.07 : 0, ease: "easeOut" }}
            className="text-[10px] text-white/40 border-b border-white/[0.05] pb-1 last:border-0"
            style={MONO}
          >
            {p}
          </motion.div>
        ))}
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: lit ? 1 : 0 }}
        transition={{ delay: 0.55 }}
        className="text-[20px] font-semibold text-white/70 mt-2 tabular-nums leading-none"
        style={MONO}
      >
        500 →
      </motion.p>
    </div>
  );
}

function SequenceMini({ lit }: { lit: boolean }) {
  const steps = [
    { label: "Opener", state: "SENT" },
    { label: "Follow-up", state: "SENT" },
    { label: "Value note", state: "OPEN" },
    { label: "Close", state: "REPLY" },
  ];
  return (
    <div className="absolute inset-x-7 top-16 flex flex-col gap-1.5 pointer-events-none">
      {steps.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 7 }}
          animate={{ opacity: lit ? 1 : 0, y: lit ? 0 : 7 }}
          transition={{ duration: 0.3, delay: lit ? i * 0.09 : 0, ease: "easeOut" }}
          className="flex items-center justify-between rounded-lg border border-white/[0.07] bg-white/[0.03] px-3 py-1.5"
        >
          <span className="text-[11px] text-white/60" style={MONO}>{s.label}</span>
          <span
            className={`text-[8px] tracking-widest border rounded px-1.5 py-0.5 ${
              s.state === "REPLY"
                ? "text-emerald-400/70 border-emerald-400/25"
                : s.state === "OPEN"
                ? "text-sky-400/60 border-sky-400/20"
                : "text-white/30 border-white/10"
            }`}
            style={MONO}
          >
            {s.state}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

function SparklineMini({ lit }: { lit: boolean }) {
  return (
    <div className="absolute inset-x-7 top-16 pointer-events-none">
      <svg width="150" height="56" viewBox="0 0 150 56" fill="none" className="overflow-visible mb-1">
        <motion.path
          d="M 0 52 L 26 44 L 52 36 L 78 25 L 104 14 L 130 6 L 150 2"
          stroke="rgba(255,255,255,0.28)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: lit ? 1 : 0, opacity: lit ? 1 : 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
        <motion.circle
          cx="150"
          cy="2"
          r="2.5"
          fill="white"
          fillOpacity={0.7}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: lit ? 1 : 0, scale: lit ? 1 : 0 }}
          transition={{ duration: 0.2, delay: 0.65 }}
        />
      </svg>
      <motion.p
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: lit ? 1 : 0, y: lit ? 0 : 4 }}
        transition={{ duration: 0.3, delay: 0.6 }}
        className="text-[24px] font-semibold text-white/75 tabular-nums leading-none"
        style={MONO}
      >
        75%
      </motion.p>
    </div>
  );
}

function NetworkMini({ lit }: { lit: boolean }) {
  const nodes = [
    { x: 20, y: 30, label: "AGENT" },
    { x: 86, y: 12, label: "STUDIO" },
    { x: 56, y: 52, label: "TRADE" },
    { x: 122, y: 38, label: "DEALER" },
  ];
  const lines = [
    { x1: 20, y1: 30, x2: 86, y2: 12 },
    { x1: 86, y1: 12, x2: 122, y2: 38 },
    { x1: 20, y1: 30, x2: 56, y2: 52 },
    { x1: 56, y1: 52, x2: 122, y2: 38 },
  ];
  return (
    <div className="absolute inset-x-7 top-16 pointer-events-none">
      <svg width="150" height="72" viewBox="0 0 150 72" fill="none" className="overflow-visible">
        {lines.map((l, i) => (
          <motion.path
            key={i}
            d={`M ${l.x1} ${l.y1} L ${l.x2} ${l.y2}`}
            stroke="rgba(255,255,255,0.16)"
            strokeWidth="1"
            strokeDasharray="3 4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: lit ? 1 : 0, opacity: lit ? 1 : 0 }}
            transition={{ duration: 0.38, delay: lit ? i * 0.11 : 0, ease: "easeOut" }}
          />
        ))}
        {nodes.map((n, i) => (
          <g key={n.label}>
            <motion.circle
              cx={n.x}
              cy={n.y}
              r={3}
              fill="rgba(255,255,255,0.55)"
              initial={{ opacity: 0 }}
              animate={{ opacity: lit ? 1 : 0 }}
              transition={{ duration: 0.2, delay: lit ? i * 0.08 : 0 }}
            />
            <motion.text
              x={n.x}
              y={n.y - 7}
              textAnchor="middle"
              fontSize="7"
              fill="rgba(255,255,255,0.28)"
              fontFamily="var(--font-mono)"
              initial={{ opacity: 0 }}
              animate={{ opacity: lit ? 1 : 0 }}
              transition={{ duration: 0.25, delay: lit ? 0.38 + i * 0.06 : 0 }}
            >
              {n.label}
            </motion.text>
          </g>
        ))}
      </svg>
    </div>
  );
}

const SERVICE_ANIM: Record<string, (lit: boolean) => React.ReactNode> = {
  "client-acquisition": (lit) => <PipelineMini lit={lit} />,
  "ai-receptionist": (lit) => <InboundMini lit={lit} />,
  "revenue-operations": (lit) => <StageMini lit={lit} />,
  "sector-workflows": (lit) => <ReductionMini lit={lit} />,
  "intelligence-research": (lit) => <ProfileStackMini lit={lit} />,
  "brand-outreach": (lit) => <SequenceMini lit={lit} />,
  "dealflow-investor": (lit) => <SparklineMini lit={lit} />,
  "channel-partnership": (lit) => <NetworkMini lit={lit} />,
};

const SPANS: Record<string, 1 | 2> = {
  "client-acquisition": 2,
  "ai-receptionist": 1,
  "revenue-operations": 1,
  "sector-workflows": 1,
  "intelligence-research": 1,
  "brand-outreach": 2,
  "dealflow-investor": 1,
  "channel-partnership": 1,
};

function ServiceCard({ svc, i }: { svc: (typeof SERVICES)[number]; i: number }) {
  const { lit, mischief, bind } = useIdleMischief();
  const span = SPANS[svc.slug] ?? 1;
  // Mischief replays the demo unprompted once, a beat after the reader leaves.
  const active = lit || mischief;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, transition: { duration: 0.22, ease: "easeOut" } }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className={span === 2 ? "md:col-span-2" : "md:col-span-1"}
    >
      <Link
        to={`/services/${svc.slug}`}
        {...bind}
        className="group relative flex flex-col justify-end h-full min-h-[260px] rounded-2xl border border-white/[0.08] bg-white/[0.015] hover:border-white/[0.14] hover:bg-white/[0.028] transition-colors duration-300 overflow-hidden p-7"
      >
        <span
          className="absolute top-6 left-7 text-[10px] tracking-widest text-white/20 tabular-nums transition-colors duration-300 group-hover:text-white/40"
          style={MONO}
        >
          {svc.number}
        </span>
        <ArrowRight
          size={14}
          className="absolute top-6 right-7 text-white/20 group-hover:text-white/70 group-hover:translate-x-1 transition-all duration-300"
        />

        {SERVICE_ANIM[svc.slug]?.(active)}

        <div className="relative z-10 mt-auto">
          <h3 className="text-white text-lg md:text-xl font-medium tracking-tight mb-1.5">{svc.label}</h3>
          <p className="text-white/40 text-sm leading-snug">{svc.summary}</p>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Services() {
  return (
    <main className="relative w-full bg-black font-sans selection:bg-white/20 selection:text-white">
      <SEO
        title="AI Client Acquisition & Outreach Services — SVNR Global"
        description="SVNR Global offers AI-powered client acquisition, AI receptionist, revenue operations, brand outreach, deal flow generation, and sector-specific workflow automation for premium B2B operators."
        canonical="/services"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Services", url: "/services" }]}
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "AI Client Acquisition & Outreach Infrastructure",
          provider: { "@id": "https://svnrglobal.com/#organization" },
          description:
            "Bespoke AI systems for client acquisition, outbound outreach, revenue operations, and business development for luxury brands and premium B2B operators.",
          areaServed: "Worldwide",
          serviceType: [
            "Client Acquisition",
            "AI Outreach",
            "Revenue Operations",
            "Deal Flow Generation",
            "Brand Outreach",
          ],
        }}
      />

      <section className="relative z-10 px-6 md:px-12 pt-32 md:pt-44 pb-16 md:pb-24">
        <div className="max-w-[1200px] mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-[10px] tracking-[0.28em] text-white/40 mb-6"
            style={MONO}
          >
            THE AGENT STACK
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <OpticalType className="text-4xl sm:text-5xl md:text-[64px] font-medium text-white leading-[1.05] tracking-tight max-w-3xl">
              Eight systems. One operating infrastructure.
            </OpticalType>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="text-white/45 text-base md:text-lg mt-6 max-w-xl leading-relaxed"
          >
            Each system is built for your market. None are templates.
          </motion.p>
        </div>
      </section>

      <section className="relative z-10 px-6 md:px-12 pb-20 md:pb-28">
        <div className="max-w-[1200px] mx-auto">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Services" }]} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            {SERVICES.map((svc, i) => (
              <ServiceCard key={svc.slug} svc={svc} i={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 md:px-12 py-20 md:py-28 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <p className="text-[10px] tracking-[0.28em] text-white/40 mb-5" style={MONO}>
              COMPARE
            </p>
            <h2 className="text-2xl md:text-4xl font-medium text-white tracking-tight leading-tight mb-5">
              How this differs from agencies, tools, and in-house teams.
            </h2>
            <p className="text-white/45 text-base leading-relaxed mb-9">
              A clear breakdown of how our infrastructure differs from volume agencies, one-off campaigns, and
              self-serve AI tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors"
              >
                Book a consultation <ArrowRight size={14} />
              </Link>
              <Link
                to="/compare"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/[0.14] text-white/80 text-sm hover:border-white/30 hover:text-white transition-colors"
              >
                SVNR vs alternatives <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="relative z-10 px-6 md:px-12 pb-10 max-w-[1200px] mx-auto">
        <Footer />
      </div>
    </main>
  );
}
