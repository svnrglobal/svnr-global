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
import { CASSIAN_MODELS } from "../data/aetherContent";
import { useAuth } from "../lib/useAuth";

const LEVELS = [
  {
    name: "Answers",
    pos: 1 / 6,
    line: "Ora responds to questions about SVNR, your sector, and how an engagement actually works.",
  },
  {
    name: "Knows",
    pos: 0.5,
    line: "Prose connects to your company's documents and knows your business at scale, then gives guidance built on your real context.",
  },
  {
    name: "Operates",
    pos: 5 / 6,
    line: "Soleth thinks like your acquisition team: pipeline logic, outreach reasoning, and the next move, then operates it for you.",
  },
];

// Cassian depth slider — dot-matrix, white→blue gradient, the mark on the handle.
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

  // The flagship (Soleth) turns the whole track into a living, twinkling pixel
  // matrix. Ora and Prose keep the clean gradient-to-handle fill. While dragging,
  // preview the flagship state as soon as the pointer is nearest it.
  const previewActive = drag !== null ? nearest(drag) : active;
  const isTop = previewActive === LEVELS.length - 1;

  const SPACING = Math.max(4, Math.round(COLS / 6));
  const dots = [];
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const colFrac = c / (COLS - 1);
      if (isTop) {
        const baseAlpha = 0.3 + 0.6 * colFrac; // dim left → bright right
        const h = r * COLS + c;
        const dur = 1.3 + ((h * 7) % 11) / 10; // 1.3s..2.3s
        const delay = ((h * 13) % 21) / 10; // 0s..2s
        dots.push(
          <span
            key={`${r}-${c}`}
            className="matrix-px"
            style={{
              background: `rgba(139,125,255,${baseAlpha.toFixed(2)})`,
              borderRadius: 1.5,
              animation: `matrixTwinkle ${dur}s ease-in-out ${delay}s infinite`,
            }}
          />
        );
      } else {
        // Ora / Prose: calm neutral fill. The purple lives only at the flagship.
        let bg = "transparent";
        if (colFrac <= fill + 0.0001) {
          const t = colFrac / Math.max(fill, 0.0001);
          bg = `rgba(255,255,255,${(0.14 + 0.4 * t).toFixed(2)})`;
        } else if (c === COLS - 1) {
          bg = "rgba(139,125,255,0.85)"; // hint of Soleth's matrix at the far end
        } else if (c % SPACING === 0) {
          bg = "rgba(255,255,255,0.12)";
        }
        dots.push(<span key={`${r}-${c}`} style={{ background: bg, borderRadius: 1.5 }} />);
      }
    }
  }

  return (
    <div
      className="rounded-3xl p-6 sm:p-8 select-none"
      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div className="flex items-center justify-between mb-1">
        <span className="text-white/85 text-sm font-medium">
          What Cassian does{" "}
          <span
            className="font-normal transition-colors duration-300"
            style={{ color: isTop ? "#a78bff" : "rgba(255,255,255,0.45)" }}
          >
            · {level.name}
          </span>
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
        aria-label="What Cassian does"
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

      {/* Model cards — tap to switch; each shows who it is and what it does */}
      <div className="grid grid-cols-3 gap-2 mt-3 mb-5">
        {LEVELS.map((l, i) => {
          const m = CASSIAN_MODELS[i];
          const on = active === i;
          const flagship = i === LEVELS.length - 1;
          return (
            <button
              key={m.id}
              onClick={() => setActive(i)}
              className="rounded-2xl px-2.5 sm:px-3.5 py-3 text-left transition-all duration-300"
              style={{
                background: on
                  ? flagship
                    ? "rgba(139,125,255,0.10)"
                    : "rgba(255,255,255,0.06)"
                  : "rgba(255,255,255,0.02)",
                border: `1px solid ${
                  on
                    ? flagship
                      ? "rgba(139,125,255,0.45)"
                      : "rgba(255,255,255,0.22)"
                    : "rgba(255,255,255,0.07)"
                }`,
              }}
            >
              <span
                className="block text-[12px] sm:text-[13px] font-medium"
                style={{ color: on ? "#fff" : "rgba(255,255,255,0.55)" }}
              >
                {m.name}
              </span>
              <span
                className="block text-[9.5px] sm:text-[10px] mt-0.5 uppercase tracking-wider"
                style={{
                  color: on
                    ? flagship
                      ? "#a78bff"
                      : "rgba(255,255,255,0.5)"
                    : "rgba(255,255,255,0.28)",
                }}
              >
                {l.name} · {m.tier}
              </span>
            </button>
          );
        })}
      </div>

      <motion.div
        key={active}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        className="border-t border-white/8 pt-5"
      >
        <p className="text-white/55 text-sm leading-relaxed">{level.line}</p>
        <div className="mt-4 space-y-2">
          {CASSIAN_MODELS[active].capabilities.slice(0, 3).map((cap) => (
            <div key={cap} className="flex items-start gap-2.5">
              <Check
                size={12}
                className="mt-[3px] flex-shrink-0"
                style={{ color: active === LEVELS.length - 1 ? "#a78bff" : "rgba(255,255,255,0.45)" }}
              />
              <span className="text-white/45 text-[12.5px] leading-relaxed">{cap}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default function Aether() {
  const { session, profile } = useAuth();
  const approved = Boolean(session && profile?.prose_access_granted);

  return (
    <main className="relative w-full bg-[#0A0A0B] font-sans selection:bg-white/20 selection:text-white">
      <SEO
        title="Cassian — SVNR Global's AI"
        description="Cassian is SVNR Global's AI. Three models, Ora, Prose, and Soleth, that answer, know your company, and operate alongside premium teams. Apply for access to Ora free."
        canonical="/cassian"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Cassian", url: "/cassian" },
        ]}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Cassian — SVNR Global's AI",
            url: "https://svnrglobal.com/cassian",
            description:
              "Cassian is SVNR Global's AI, with three models that answer, know your company, and operate alongside premium teams.",
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              { q: "What is Cassian Ora?", a: LEVELS[0].line },
              { q: "How is Cassian Prose different from Ora?", a: LEVELS[1].line },
              { q: "What does Cassian Soleth do?", a: LEVELS[2].line },
            ].map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
        ]}
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
            Meet Cassian
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
            Cassian is SVNR's AI. Talk to Ora free about your market, ask the hard questions, and see the
            next move. Prose and Soleth go deeper for members.
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
            {CASSIAN_MODELS.map((m, i) => {
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
                        <p className="text-base font-medium">{m.fullName}</p>
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
              Cassian Soleth builds and runs the agents that operate your business online, the storefront,
              outreach, support, voice, pipeline, and partners, autonomously. The work happens without waiting
              on anyone.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <AgentOrbit />
          </motion.div>
        </div>
      </section>

      {/* SIGNAL INTELLIGENCE TEASER */}
      <section className="relative z-10 bg-[#0A0A0B] py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl p-8 sm:p-12 overflow-hidden relative"
            style={{
              background: "linear-gradient(135deg, rgba(108,108,255,0.08), rgba(255,255,255,0.02))",
              border: "1px solid rgba(255,255,255,0.10)",
            }}
          >
            <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#8b7dff] mb-3">Soleth · Signal intelligence</p>
                <h2 className="text-2xl sm:text-3xl font-medium text-white tracking-tight mb-4 leading-tight">
                  It watches the world so your next move is early.
                </h2>
                <p className="text-white/55 text-sm leading-relaxed mb-4">
                  Markets move, policy shifts, supply chains reroute. Soleth reads the signals as they appear,
                  news, filings, rates, and sanctions, and connects them to your pipeline, so an opening lands
                  on your desk before it is obvious to everyone else.
                </p>
                <p className="text-white/55 text-sm leading-relaxed mb-6">
                  Find importers in a new market before a tariff lands. Reposition before the rest of your
                  sector reacts. The thinking is continuous, and the call is still yours.
                </p>
                <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest text-white/40 border border-white/12 rounded-full px-4 py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8b7dff]" /> In private preview for engagement members
                </span>
              </div>

              {/* Infographic: signal sources pulse into Soleth, out comes a decision */}
              <div className="flex flex-col gap-3">
                <div className="grid grid-cols-2 gap-2.5">
                  {["News", "Policy", "Markets", "Sanctions"].map((s, i) => (
                    <motion.div
                      key={s}
                      initial={{ opacity: 0.35 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
                      className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-[12px] text-white/70"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8b7dff] flex-shrink-0" /> {s}
                    </motion.div>
                  ))}
                </div>
                <div className="flex justify-center text-white/25 text-lg leading-none">↓</div>
                <div
                  className="rounded-2xl px-5 py-4 text-center"
                  style={{ background: "rgba(108,108,255,0.12)", border: "1px solid rgba(139,125,255,0.25)" }}
                >
                  <div className="flex items-center justify-center gap-2 mb-1.5 text-white">
                    <AetherLogo size={18} />
                    <span className="text-sm font-medium">Cassian Soleth</span>
                  </div>
                  <p className="text-white/45 text-[11px] leading-relaxed">
                    Reads the signal, weighs it against your pipeline, and surfaces the move.
                  </p>
                </div>
                <div className="flex justify-center text-white/25 text-lg leading-none">↓</div>
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="rounded-xl px-4 py-3 text-[12px] text-white/80"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}
                >
                  <span className="text-[#8b7dff] font-medium">Move:</span> reach 40 importers in Vietnam this
                  week, before the duty change is priced in.
                </motion.div>
              </div>
            </div>
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
            Create a free account to apply for Ora. Applications are reviewed by our team. If Cassian is a fit
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
