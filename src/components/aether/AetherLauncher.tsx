import { useEffect, useRef, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, X, ArrowRight } from "lucide-react";
import AetherLogo from "./AetherLogo";
import OraThread from "./OraThread";
import OraComposer from "./OraComposer";
import { useOra } from "../../lib/useOra";
import { useAuth } from "../../lib/useAuth";
import { CASSIAN_TIPS, getCassianContent } from "../../data/aetherContent";

const DISMISS_KEY = "aether_card_dismissed";

// Routes with their own treatment.
const HIDE_PREFIXES = [
  "/aether",
  "/chat",
  "/dashboard",
  "/admin",
  "/login",
  "/signup",
  "/verify",
  "/settings",
  "/member",
];

// The tip card never opens over a hero or a conversion step. It waits for the
// reader to show intent — scrolling past the fold — and stays out of the way on
// pages where any extra friction costs a booking.
const NO_TEASER_PREFIXES = ["/contact", "/cassian"];
const SCROLL_INTENT_PX = 600;

export default function AetherLauncher() {
  const { pathname } = useLocation();
  const { session, profile } = useAuth();
  const approved = Boolean(session && profile?.prose_access_granted);

  if (HIDE_PREFIXES.some((p) => pathname.startsWith(p))) return null;
  return approved ? (
    <ChatLauncher pathname={pathname} />
  ) : (
    <TeaserLauncher
      teaseOk={!NO_TEASER_PREFIXES.some((p) => pathname.startsWith(p))}
      pathname={pathname}
    />
  );
}

// ── Approved: inline Ora chat ────────────────────────────────────────
function ChatLauncher({ pathname }: { pathname: string }) {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const greeting = getCassianContent(pathname).greeting;
  const { messages, ask, thinking, remaining, blocked, resetAt } = useOra(greeting);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 800);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, thinking, open]);

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3 pointer-events-none">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ type: "spring", bounce: 0.16, duration: 0.45 }}
            className="pointer-events-auto w-[min(92vw,400px)] h-[min(70vh,560px)] rounded-3xl overflow-hidden flex flex-col"
            style={{
              background: "rgba(12,12,14,0.95)",
              backdropFilter: "blur(28px)",
              WebkitBackdropFilter: "blur(28px)",
              border: "1px solid rgba(255,255,255,0.10)",
              boxShadow: "0 24px 80px rgba(0,0,0,0.55)",
            }}
          >
            <div className="shrink-0 flex items-center justify-between px-5 py-3.5 border-b border-white/8">
              <div className="flex items-center gap-2.5 text-white">
                <AetherLogo size={20} state={thinking ? "thinking" : "idle"} />
                <div className="leading-tight">
                  <p className="text-sm font-medium tracking-tight">Ora</p>
                  <p className="text-white/35 text-[10px]">Free Cassian model · {remaining} of 20 left</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Link to="/chat" onClick={() => setOpen(false)} className="text-white/40 hover:text-white text-[11px] transition-colors">
                  Open full
                </Link>
                <button onClick={() => setOpen(false)} aria-label="Close" className="text-white/40 hover:text-white transition-colors">
                  <X size={18} />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-4">
              <OraThread messages={messages} thinking={thinking} />
              <div ref={bottomRef} className="h-1" />
            </div>

            <div className="shrink-0 p-3 border-t border-white/8">
              <OraComposer onSubmit={ask} disabled={blocked} />
              {blocked && (
                <p className="text-[10px] text-white/30 mt-1.5 px-1">
                  Limit reached. Refills in {fmtReset(resetAt)}.
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Fab open={open} thinking={thinking} onClick={() => setOpen((v) => !v)} mounted={mounted} />
    </div>
  );
}

// ── Not approved: teaser ─────────────────────────────────────────────
function TeaserLauncher({ teaseOk, pathname }: { teaseOk: boolean; pathname: string }) {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);
  const [hover, setHover] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [openedTip, setOpenedTip] = useState<string | null>(null);
  const [engaged, setEngaged] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 900);
    try {
      if (sessionStorage.getItem(DISMISS_KEY) === "1") setDismissed(true);
    } catch {
      /* ignore */
    }
    return () => clearTimeout(t);
  }, []);

  // Intent gate: the card only appears once the reader has scrolled past the
  // fold. Re-armed on navigation so a fresh page starts clean again.
  //
  // Two independent signals, because neither alone covers every route. Lenis
  // owns the scroll position on marketing routes but drives real native
  // scrolling underneath, so the scroll listener fires there and under
  // reduced-motion alike; the sentinel covers any route that scrolls inside a
  // container instead of the window. Whichever trips first wins, then both
  // tear down.
  useEffect(() => {
    setEngaged(false);
    if (!teaseOk) return;

    let done = false;
    const trip = () => {
      if (done) return;
      done = true;
      setEngaged(true);
      cleanup();
    };

    const onScroll = () => {
      if (window.scrollY > SCROLL_INTENT_PX) trip();
    };

    const sentinel = document.createElement("div");
    sentinel.setAttribute("aria-hidden", "true");
    sentinel.style.cssText = `position:absolute;top:0;left:0;width:1px;height:${SCROLL_INTENT_PX}px;pointer-events:none;visibility:hidden;`;
    document.body.appendChild(sentinel);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) trip();
      },
      { threshold: 0 },
    );

    function cleanup() {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
      sentinel.remove();
    }

    io.observe(sentinel);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // deep-link / restored scroll position

    return cleanup;
  }, [teaseOk, pathname]);

  useEffect(() => {
    if (open || dismissed || hover || !engaged) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % CASSIAN_TIPS.length), 4800);
    return () => clearInterval(id);
  }, [open, dismissed, hover, engaged]);

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

  const showCard = mounted && engaged && !open && !dismissed;

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3 pointer-events-none">
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
              boxShadow: "0 24px 80px rgba(0,0,0,0.55)",
            }}
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/8">
              <div className="flex items-center gap-2.5 text-white">
                <AetherLogo size={20} />
                <div className="leading-tight">
                  <p className="text-sm font-medium tracking-tight">Cassian</p>
                  <p className="text-white/35 text-[10px]">SVNR intelligence · private access</p>
                </div>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Close" className="text-white/40 hover:text-white transition-colors">
                <X size={18} />
              </button>
            </div>

            <div className="px-5 py-5">
              {openedTip && (
                <div className="mb-4 rounded-2xl bg-white/[0.05] border border-white/8 px-4 py-3">
                  <div className="flex items-center gap-1.5 mb-1.5 text-white/40">
                    <AetherLogo size={11} state="static" />
                    <span className="text-[9px] uppercase tracking-[0.25em]">Cassian tip</span>
                  </div>
                  <p className="text-white/80 text-[13px] leading-relaxed">{openedTip}</p>
                </div>
              )}

              <p className="text-white/75 text-[13.5px] leading-relaxed">Cassian is currently in private access.</p>
              <p className="text-white/55 text-[13px] leading-relaxed mt-2">
                Create a free account to apply for access to Ora, the free model. Applications are reviewed by
                our team.
              </p>

              <Link
                to="/signup"
                onClick={() => setOpen(false)}
                className="mt-5 w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-black text-[13px] font-medium hover:bg-white/90 transition-all"
              >
                Request access <ArrowRight size={14} />
              </Link>
              <p className="text-[10px] text-white/25 text-center mt-3">
                Already a member?{" "}
                <Link to="/login" className="underline underline-offset-2 hover:text-white/50">
                  Sign in
                </Link>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
            <button onClick={dismiss} aria-label="Dismiss" className="absolute top-2.5 right-2.5 text-white/30 hover:text-white/70 transition-colors">
              <X size={14} />
            </button>

            <div className="flex items-center gap-2 mb-3 text-white">
              <AetherLogo size={16} />
              <span className="text-[12px] font-medium tracking-tight">Cassian</span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-white/30 ml-1">tip</span>
            </div>

            <button onClick={() => openPanel(CASSIAN_TIPS[idx])} className="text-left block w-full">
              <p className="text-white text-[14.5px] leading-snug font-medium pr-3 mb-3 hover:text-white/80 transition-colors">
                {CASSIAN_TIPS[idx]}
              </p>
            </button>

            <button
              onClick={() => openPanel(CASSIAN_TIPS[idx])}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white text-black text-[12px] font-medium hover:bg-white/90 transition-all mb-3"
            >
              See how Cassian helps <ArrowRight size={13} />
            </button>

            <div className="flex items-center justify-between">
              <button onClick={() => setIdx((i) => (i - 1 + CASSIAN_TIPS.length) % CASSIAN_TIPS.length)} aria-label="Previous tip" className="text-white/30 hover:text-white/70 transition-colors">
                <ChevronLeft size={16} />
              </button>
              <div className="flex items-center gap-1.5">
                {CASSIAN_TIPS.map((_, i) => (
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
              <button onClick={() => setIdx((i) => (i + 1) % CASSIAN_TIPS.length)} aria-label="Next tip" className="text-white/30 hover:text-white/70 transition-colors">
                <ChevronRight size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Fab open={open} thinking={false} onClick={() => (open ? setOpen(false) : openPanel())} mounted={mounted} />
    </div>
  );
}

// ── Shared floating button ───────────────────────────────────────────
function Fab({
  open,
  thinking,
  onClick,
  mounted = true,
}: {
  open: boolean;
  thinking: boolean;
  onClick: () => void;
  mounted?: boolean;
}) {
  return (
    <AnimatePresence>
      {mounted && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
          onClick={onClick}
          aria-label={open ? "Close Cassian" : "Open Cassian"}
          className="pointer-events-auto relative w-14 h-14 rounded-full flex items-center justify-center text-white/90"
          style={{
            background: "linear-gradient(135deg, #1c1c22 0%, #0e0e11 100%)",
            boxShadow:
              "0 10px 30px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08), 0 0 0 1px rgba(255,255,255,0.08)",
          }}
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.span key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }}>
                <X size={22} />
              </motion.span>
            ) : (
              <motion.span key="mark" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <AetherLogo size={30} state={thinking ? "thinking" : "idle"} />
              </motion.span>
            )}
          </AnimatePresence>
          {!open && (
            <motion.span
              className="absolute inset-0 rounded-full"
              style={{ border: "1px solid rgba(255,255,255,0.35)" }}
              animate={{ scale: [1, 1.35], opacity: [0.5, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
            />
          )}
        </motion.button>
      )}
    </AnimatePresence>
  );
}

function fmtReset(resetAt: number | null): string {
  if (!resetAt) return "a few hours";
  const ms = resetAt - Date.now();
  if (ms <= 0) return "now";
  const h = Math.floor(ms / 3_600_000);
  const m = Math.floor((ms % 3_600_000) / 60_000);
  return h > 0 ? `${h}h ${m}m` : `${m}m`;
}
