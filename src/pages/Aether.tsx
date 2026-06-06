import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Lock, Check } from "lucide-react";
import { useRef, useState } from "react";
import AetherLogo from "../components/aether/AetherLogo";
import AgentOrbit from "../components/aether/AgentOrbit";
import VideoHero from "../components/VideoHero";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { VIDEOS } from "../data/content";
import { AETHER_MODELS } from "../data/aetherContent";
import { useAuth } from "../lib/useAuth";

const LEVELS = [
  {
    name: "Answers",
    pos: 1 / 6,
    line: "Ora responds to questions about SVNR, your sector, and how an engagement actually works.",
  },
  {
    name: "Advises",
    pos: 0.5,
    line: "Soleth learns your market, your ICP, and your proof, then gives guidance built on your context.",
  },
  {
    name: "Operates",
    pos: 5 / 6,
    line: "Aether thinks like your acquisition team: pipeline logic, outreach reasoning, and the next move.",
  },
];

// Aether depth slider — dot-matrix, white→blue gradient, the mark on the handle.
function AetherDepthSlider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(1);
  const [drag, setDrag] = useState<number | null>(null);
  const fill = drag ?? LEVELS[active].pos;
  const level = LEVELS[active];

  const COLS = 46;
  const ROWS = 4;

  const fracFromX = (clientX: number) => {
    const el = trackRef.current;
    if (!el) return 0;
    const rect = el.getBoundingClientRect();
    return Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
  };
  const nearest = (f: number) => {
    let best = 0;
    let bd = Infinity;
    LEVELS.forEach((l, i) => {
      const d = Math.abs(l.pos - f);
      if (d < bd) {
        bd = d;
        best = i;
      }
    });
    return best;
  };
  const onDown = (e: React.PointerEvent) => {
    (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
    setDrag(fracFromX(e.clientX));
  };
  const onMove = (e: React.PointerEvent) => {
    if (drag === null) return;
    setDrag(fracFromX(e.clientX));
  };
  const onUp = () => {
    if (drag === null) return;
    setActive(nearest(drag));
    setDrag(null);
  };
  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === "ArrowUp") {
      e.preventDefault();
      setActive(Math.min(2, active + 1));
    } else if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
      e.preventDefault();
      setActive(Math.max(0, active - 1));
    }
  };

  const SPACING = Math.max(4, Math.round(COLS / 6));
  const dots = [];
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const colFrac = c / (COLS - 1);
      let bg = "transparent";
      if (colFrac <= fill + 0.0001) {
        const t = colFrac / Math.max(fill, 0.0001);
        bg = `rgba(139,125,255,${(0.4 + 0.55 * t).toFixed(2)})`;
      } else if (c % SPACING === 0) {
        bg = "rgba(255,255,255,0.12)";
      }
      dots.push(<span key={`${r}-${c}`} style={{ background: bg, borderRadius: 1.5 }} />);
    }
  }

  return (
    <div
      className="rounded-3xl p-6 sm:p-8 select-none"
      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div className="flex items-center justify-between mb-1">
        <span className="text-white/85 text-sm font-medium">
          What Aether does <span className="text-white/45 font-normal">· {level.name}</span>
        </span>
        <span className="text-white/30 text-xs">drag</span>
      </div>
      <div className="flex items-center justify-between mb-3">
        <span className="text-white/40 text-xs">Ask</span>
        <span className="text-white/40 text-xs">Operate</span>
      </div>

      <div
        ref={trackRef}
        role="slider"
        tabIndex={0}
        aria-valuemin={1}
        aria-valuemax={3}
        aria-valuenow={active + 1}
        aria-label="What Aether does"
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onKeyDown={onKey}
        className="relative cursor-pointer rounded-2xl p-3 outline-none focus-visible:ring-1 focus-visible:ring-white/30"
        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
      >
        <div className="grid gap-[3px]" style={{ gridTemplateColumns: `repeat(${COLS}, 1fr)`, gridAutoRows: "5px" }}>
          {dots}
        </div>

        <motion.div
          className="absolute top-1/2 pointer-events-none rounded-full bg-white"
          initial={false}
          animate={{ left: `calc(${fill * 100}% - 6px)`, y: "-50%" }}
          transition={drag === null ? { type: "spring", bounce: 0.2, duration: 0.5 } : { duration: 0 }}
          style={{ width: 12, height: 26, boxShadow: "0 2px 12px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.3)" }}
        />
      </div>

      <div className="flex items-center justify-between mt-3 px-0.5 mb-5">
        {LEVELS.map((l, i) => (
          <button
            key={l.name}
            onClick={() => setActive(i)}
            className="text-[11px] sm:text-xs transition-colors"
            style={{ color: active === i ? "#fff" : "rgba(255,255,255,0.32)" }}
          >
            {l.name}
          </button>
        ))}
      </div>

      <motion.p
        key={active}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-white/55 text-sm leading-relaxed border-t border-white/8 pt-5"
      >
        {level.line}
      </motion.p>
    </div>
  );
}

export default function Aether() {
  const { session, profile } = useAuth();
  const approved = Boolean(session && profile?.prose_access_granted);

  return (
    <main className="relative w-full bg-[#0A0A0B] font-sans selection:bg-white/20 selection:text-white">
      <SEO
        title="Aether — SVNR Global's AI"
        description="Aether is SVNR Global's AI. Three models, Ora, Soleth, and Aether, that answer, advise, and operate alongside premium teams. Apply for access to Ora free."
        canonical="/aether"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Aether", url: "/aether" },
        ]}
        schema={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Aether — SVNR Global's AI",
          url: "https://svnrglobal.com/aether",
          description:
            "Aether is SVNR Global's AI, with three models that answer, advise, and operate alongside premium teams.",
        }}
      />

      {/* HERO */}
      <VideoHero src={VIDEOS.aether} minHeight="min-h-[78vh]">
        <div className="max-w-3xl mx-auto px-6 text-center pt-20 sm:pt-28 pb-14 sm:pb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1 }}
            className="flex justify-center mb-6 text-white"
          >
            <AetherLogo size={56} state="thinking" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.25 }}
            className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-5"
          >
            Meet Aether
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.35 }}
            className="text-4xl sm:text-5xl md:text-6xl font-medium text-white tracking-tight mb-5 leading-tight"
          >
            The fastest way to understand{" "}
            <span className="shimmer-text">whether SVNR fits.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.55 }}
            className="text-white/55 text-base sm:text-lg max-w-xl mx-auto"
          >
            Aether is SVNR's AI. Talk to Ora free about your market, ask the hard questions, and see the
            next move. Soleth and Aether go deeper for members.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.75 }}
            className="mt-8 flex items-center justify-center gap-3"
          >
            <Link
              to={approved ? "/chat" : "/signup"}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-all"
            >
              {approved ? "Open Ora" : "Request access"} <ArrowRight size={14} />
            </Link>
            {!approved && (
              <Link
                to="/login"
                className="inline-flex items-center px-6 py-3.5 rounded-full text-sm text-white/70 hover:text-white border border-white/12 hover:bg-white/5 transition-all"
              >
                Sign in
              </Link>
            )}
          </motion.div>
        </div>
      </VideoHero>

      {/* DEPTH SLIDER */}
      <section className="relative z-10 bg-[#0A0A0B] py-16 px-6 border-t border-white/8">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <AetherDepthSlider />
          </motion.div>
        </div>
      </section>

      {/* THREE MODELS */}
      <section className="relative z-10 bg-[#0A0A0B] py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/35 mb-3">Three models</p>
            <h2 className="text-2xl sm:text-3xl font-medium text-white tracking-tight">
              One family. Three levels of depth.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4">
            {AETHER_MODELS.map((m, i) => {
              const flagship = Boolean(m.flagship);
              return (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-3xl p-6 flex flex-col"
                  style={{
                    background: flagship ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.03)",
                    border: `1px solid ${flagship ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.08)"}`,
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5 text-white">
                      <AetherLogo size={26} state={flagship ? "idle" : "static"} />
                      <div className="leading-tight">
                        <p className="text-base font-medium">{m.name}</p>
                        <p className="text-white/40 text-[10px] uppercase tracking-[0.2em]">{m.verb}</p>
                      </div>
                    </div>
                    <span
                      className="text-[9px] uppercase tracking-[0.2em] px-2 py-1 rounded-full"
                      style={{
                        color: m.access === "free" ? "#9fe7b0" : "rgba(255,255,255,0.6)",
                        background: m.access === "free" ? "rgba(80,200,120,0.12)" : "rgba(255,255,255,0.06)",
                      }}
                    >
                      {m.access === "free" ? "Free" : m.tier}
                    </span>
                  </div>

                  <p className="text-white/60 text-[13px] leading-relaxed mb-4">{m.blurb}</p>

                  <ul className="space-y-2 mb-6 flex-1">
                    {m.capabilities.map((c) => (
                      <li key={c} className="flex items-start gap-2 text-white/55 text-[12.5px]">
                        <Check size={13} className="text-white/40 mt-0.5 shrink-0" /> {c}
                      </li>
                    ))}
                  </ul>

                  {m.access === "free" ? (
                    <Link
                      to={approved ? "/chat" : "/signup"}
                      className="w-full flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-white text-black text-[13px] font-medium hover:bg-white/90 transition-all"
                    >
                      {approved ? "Open Ora" : "Start with Ora"} <ArrowRight size={13} />
                    </Link>
                  ) : (
                    <Link
                      to="/contact"
                      className="w-full flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-[13px] text-white/70 hover:text-white border border-white/12 hover:bg-white/5 transition-all"
                    >
                      <Lock size={12} /> Talk to upgrade
                    </Link>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AGENT ORBIT INFOGRAPHIC */}
      <section className="relative z-10 bg-[#0A0A0B] py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/35 mb-3">The flagship, at work</p>
            <h2 className="text-2xl sm:text-3xl font-medium text-white tracking-tight mb-4">One model. Every online job.</h2>
            <p className="text-white/55 text-sm leading-relaxed">
              The Aether model builds and runs the agents that operate your business online, the storefront,
              outreach, support, voice, pipeline, and partners, autonomously. The work happens without waiting
              on anyone.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <AgentOrbit />
          </motion.div>
        </div>
      </section>

      {/* TEASER / ACCESS */}
      <section className="relative z-10 bg-[#0A0A0B] pb-20 pt-8 px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto rounded-3xl p-8 sm:p-10 text-center"
          style={{
            background: "rgba(12,12,14,0.85)",
            backdropFilter: "blur(28px)",
            WebkitBackdropFilter: "blur(28px)",
            border: "1px solid rgba(255,255,255,0.10)",
            boxShadow: "0 24px 80px rgba(0,0,0,0.5)",
          }}
        >
          <div className="flex justify-center mb-5 text-white">
            <AetherLogo size={44} />
          </div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/35 mb-3">Private access</p>
          <h2 className="text-2xl font-medium text-white tracking-tight mb-3">Access is granted individually.</h2>
          <p className="text-white/55 text-sm leading-relaxed max-w-md mx-auto mb-7">
            Create a free account to apply for Ora. Applications are reviewed by our team. If Aether is a fit
            for where you are right now, you will hear from us directly.
          </p>
          <Link
            to={approved ? "/chat" : "/signup"}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-all"
          >
            {approved ? "Open Ora" : "Request access"} <ArrowRight size={14} />
          </Link>
        </motion.div>
      </section>

      <div className="relative z-10 px-6 pb-10 max-w-7xl mx-auto">
        <Footer />
      </div>
    </main>
  );
}
