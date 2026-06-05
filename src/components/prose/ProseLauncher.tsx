import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, X, ArrowRight } from "lucide-react";
import ProseMark from "./ProseMark";
import { PROSE_TIPS } from "../../data/proseContent";

const DISMISS_KEY = "prose_card_dismissed";

// Routes where the floating teaser should not appear (member/admin/auth + the
// dedicated PROSE page have their own treatment).
const HIDE_PREFIXES = [
  "/prose",
  "/dashboard",
  "/admin",
  "/login",
  "/signup",
  "/verify",
  "/settings",
  "/member",
];

export default function ProseLauncher() {
  const { pathname } = useLocation();

  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);
  const [hover, setHover] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [openedTip, setOpenedTip] = useState<string | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 900);
    try {
      if (sessionStorage.getItem(DISMISS_KEY) === "1") setDismissed(true);
    } catch {
      /* ignore */
    }
    return () => clearTimeout(t);
  }, []);

  // Rotate tips while the card is idle.
  useEffect(() => {
    if (open || dismissed || hover) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % PROSE_TIPS.length), 4800);
    return () => clearInterval(id);
  }, [open, dismissed, hover]);

  if (HIDE_PREFIXES.some((p) => pathname.startsWith(p))) return null;

  const openPanel = (tip?: string) => {
    setOpenedTip(tip ?? null);
    setOpen(true);
  };
  const dismiss = () => {
    setDismissed(true);
    try {
      sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {
      /* ignore */
    }
  };

  const showCard = mounted && !open && !dismissed;

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3 pointer-events-none">
      {/* ── Teaser panel ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ type: "spring", bounce: 0.18, duration: 0.45 }}
            className="pointer-events-auto w-[min(92vw,380px)] rounded-3xl overflow-hidden"
            style={{
              background: "rgba(12,12,14,0.93)",
              backdropFilter: "blur(28px)",
              WebkitBackdropFilter: "blur(28px)",
              border: "1px solid rgba(255,255,255,0.10)",
              boxShadow: "0 24px 80px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.05)",
            }}
          >
            {/* header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/8">
              <div className="flex items-center gap-2.5 text-white">
                <ProseMark size={20} />
                <div className="leading-tight">
                  <p className="text-sm font-medium tracking-tight">PROSE</p>
                  <p className="text-white/35 text-[10px]">SVNR consultant · private access</p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="text-white/40 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* body */}
            <div className="px-5 py-5">
              {openedTip && (
                <div className="mb-4 rounded-2xl bg-white/[0.05] border border-white/8 px-4 py-3">
                  <div className="flex items-center gap-1.5 mb-1.5 text-white/40">
                    <ProseMark size={11} idle={false} />
                    <span className="text-[9px] uppercase tracking-[0.25em]">PROSE tip</span>
                  </div>
                  <p className="text-white/80 text-[13px] leading-relaxed">{openedTip}</p>
                </div>
              )}

              <p className="text-white/75 text-[13.5px] leading-relaxed">
                PROSE is currently in private access.
              </p>
              <p className="text-white/55 text-[13px] leading-relaxed mt-2">
                Create a free account to apply for access. Applications are
                reviewed personally by Hamza.
              </p>

              <Link
                to="/signup"
                onClick={() => setOpen(false)}
                className="mt-5 w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-black text-[13px] font-medium hover:bg-white/90 transition-all"
              >
                Request access <ArrowRight size={14} />
              </Link>
              <p className="text-[10px] text-white/25 text-center mt-3">
                Already a member? <Link to="/login" className="underline underline-offset-2 hover:text-white/50">Sign in</Link>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Tips carousel card ── */}
      <AnimatePresence mode="wait">
        {showCard && (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="pointer-events-auto w-[min(86vw,300px)] rounded-2xl p-4 relative"
            style={{
              background: "rgba(14,14,16,0.9)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: "1px solid rgba(255,255,255,0.10)",
              boxShadow: "0 16px 48px rgba(0,0,0,0.5)",
            }}
          >
            <button
              onClick={dismiss}
              aria-label="Dismiss"
              className="absolute top-2.5 right-2.5 text-white/30 hover:text-white/70 transition-colors"
            >
              <X size={14} />
            </button>

            {/* brand lockup: logo + name */}
            <div className="flex items-center gap-2 mb-3 text-white">
              <ProseMark size={16} />
              <span className="text-[12px] font-medium tracking-tight">PROSE</span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-white/30 ml-1">tip</span>
            </div>

            <button onClick={() => openPanel(PROSE_TIPS[idx])} className="text-left block w-full">
              <p className="text-white text-[14.5px] leading-snug font-medium pr-3 mb-3 hover:text-white/80 transition-colors">
                {PROSE_TIPS[idx]}
              </p>
            </button>

            <button
              onClick={() => openPanel(PROSE_TIPS[idx])}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white text-black text-[12px] font-medium hover:bg-white/90 transition-all mb-3"
            >
              See how PROSE helps <ArrowRight size={13} />
            </button>

            {/* carousel controls */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => setIdx((i) => (i - 1 + PROSE_TIPS.length) % PROSE_TIPS.length)}
                aria-label="Previous tip"
                className="text-white/30 hover:text-white/70 transition-colors"
              >
                <ChevronLeft size={16} />
              </button>
              <div className="flex items-center gap-1.5">
                {PROSE_TIPS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIdx(i)}
                    aria-label={`Tip ${i + 1}`}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: i === idx ? 16 : 6,
                      height: 6,
                      background: i === idx ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.22)",
                    }}
                  />
                ))}
              </div>
              <button
                onClick={() => setIdx((i) => (i + 1) % PROSE_TIPS.length)}
                aria-label="Next tip"
                className="text-white/30 hover:text-white/70 transition-colors"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Floating launch button (the logo) ── */}
      <AnimatePresence>
        {mounted && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
            onClick={() => (open ? setOpen(false) : openPanel())}
            aria-label={open ? "Close PROSE" : "Open PROSE"}
            className="pointer-events-auto relative w-14 h-14 rounded-full flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, #d7d7dd 100%)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.15)",
            }}
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.span
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  className="text-[#161618]"
                >
                  <X size={22} />
                </motion.span>
              ) : (
                <motion.span
                  key="mark"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-[#161618]"
                >
                  <ProseMark size={26} />
                </motion.span>
              )}
            </AnimatePresence>
            {!open && (
              <motion.span
                className="absolute inset-0 rounded-full"
                style={{ border: "1px solid rgba(255,255,255,0.5)" }}
                animate={{ scale: [1, 1.35], opacity: [0.5, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
              />
            )}
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
