import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useRef, useState } from "react";
import ProseMark from "../components/prose/ProseMark";
import VideoHero from "../components/VideoHero";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { VIDEOS } from "../data/content";

const PROSE_LEVELS = [
  {
    name: "Answers",
    pos: 1 / 6,
    line: "Responds to questions about SVNR, your sector, and how an engagement actually works.",
  },
  {
    name: "Advises",
    pos: 0.5,
    line: "Learns your market, your ICP, and your proof, then gives guidance built on your context.",
  },
  {
    name: "Operates",
    pos: 5 / 6,
    line: "Thinks like your acquisition team: pipeline logic, outreach reasoning, and the next move.",
  },
];

/**
 * PROSE depth slider — same dot-matrix idea as the How We Work engagement
 * slider, restyled: circular dots, a cooler white→blue gradient, and the PROSE
 * mark riding the handle.
 */
function ProseDepthSlider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(1);
  const [drag, setDrag] = useState<number | null>(null);
  const fill = drag ?? PROSE_LEVELS[active].pos;
  const level = PROSE_LEVELS[active];

  const COLS = 28;
  const ROWS = 5;

  const fracFromX = (clientX: number) => {
    const el = trackRef.current;
    if (!el) return 0;
    const rect = el.getBoundingClientRect();
    return Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
  };
  const nearest = (f: number) => {
    let best = 0;
    let bd = Infinity;
    PROSE_LEVELS.forEach((l, i) => {
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

  const dots = [];
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const colFrac = c / (COLS - 1);
      const on = colFrac <= fill + 0.0001;
      const t = on ? colFrac / Math.max(fill, 0.0001) : 0;
      const cr = Math.round(150 + 78 * t);
      const cg = Math.round(190 + 48 * t);
      const a = on ? 0.16 + 0.84 * t : 0.06;
      dots.push(
        <span
          key={`${r}-${c}`}
          style={{ background: `rgba(${cr},${cg},255,${a})`, borderRadius: 9999 }}
        />
      );
    }
  }

  return (
    <div
      className="rounded-3xl p-6 sm:p-8 select-none"
      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div className="flex items-center justify-between mb-1">
        <span className="text-white/85 text-sm font-medium">
          What PROSE does <span className="text-white/45 font-normal">· {level.name}</span>
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
        aria-label="What PROSE does"
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onKeyDown={onKey}
        className="relative cursor-pointer rounded-2xl p-3 outline-none focus-visible:ring-1 focus-visible:ring-white/30"
        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
      >
        <div
          className="grid gap-[4px]"
          style={{ gridTemplateColumns: `repeat(${COLS}, 1fr)`, gridAutoRows: "6px" }}
        >
          {dots}
        </div>

        <motion.div
          className="absolute top-1/2 pointer-events-none flex items-center justify-center rounded-full bg-white text-[#161618]"
          initial={false}
          animate={{ left: `calc(${fill * 100}% - 17px)`, y: "-50%" }}
          transition={drag === null ? { type: "spring", bounce: 0.2, duration: 0.5 } : { duration: 0 }}
          style={{ width: 34, height: 34, boxShadow: "0 2px 12px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.25)" }}
        >
          <ProseMark size={16} idle={false} />
        </motion.div>
      </div>

      <div className="flex items-center justify-between mt-3 px-0.5 mb-5">
        {PROSE_LEVELS.map((l, i) => (
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

export default function Prose() {
  return (
    <main className="relative w-full bg-[#0A0A0B] font-sans selection:bg-white/20 selection:text-white">
      <SEO
        title="PROSE — SVNR Global's Private AI Consultant"
        description="PROSE is SVNR Global's private AI consultant for members. Apply for access and it learns your market, handles the hard questions, and points to the next move."
        canonical="/prose"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "PROSE", url: "/prose" },
        ]}
        schema={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "PROSE — SVNR Global's Private AI Consultant",
          url: "https://svnrglobal.com/prose",
          description:
            "PROSE is SVNR Global's private AI consultant for members. Apply for access to client acquisition guidance built on your market and context.",
        }}
      />

      {/* HERO */}
      <VideoHero src={VIDEOS.prose} minHeight="min-h-[78vh]">
        <div className="max-w-3xl mx-auto px-6 text-center pt-20 sm:pt-28 pb-14 sm:pb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1 }}
            className="flex justify-center mb-6 text-white"
          >
            <ProseMark size={48} thinking />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.25 }}
            className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-5"
          >
            Meet PROSE
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
            PROSE is SVNR's private consultant for members. Apply for access and
            it learns your market, handles the hard questions, and points to the
            next move.
          </motion.p>
        </div>
      </VideoHero>

      {/* DEPTH SLIDER */}
      <section className="relative z-10 bg-[#0A0A0B] py-16 px-6 border-t border-white/8">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <ProseDepthSlider />
          </motion.div>
        </div>
      </section>

      {/* TEASER / ACCESS */}
      <section className="relative z-10 bg-[#0A0A0B] pb-20 px-6">
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
            <ProseMark size={42} />
          </div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/35 mb-3">
            Private access
          </p>
          <h2 className="text-2xl font-medium text-white tracking-tight mb-3">
            PROSE is confirmed individually.
          </h2>
          <p className="text-white/55 text-sm leading-relaxed max-w-md mx-auto mb-7">
            Create a free account to apply for access. Applications are reviewed
            personally by Hamza. If PROSE is a fit for where you are right now,
            you will hear from him directly.
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-all"
          >
            Request access <ArrowRight size={14} />
          </Link>
        </motion.div>
      </section>

      <div className="relative z-10 px-6 pb-10 max-w-7xl mx-auto">
        <Footer />
      </div>
    </main>
  );
}
