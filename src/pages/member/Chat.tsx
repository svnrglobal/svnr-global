import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ChevronDown, Lock, LogOut, Paperclip, X } from "lucide-react";
import SEO from "../../components/SEO";
import AetherLogo from "../../components/aether/AetherLogo";
import AetherPet, { type PetMood } from "../../components/aether/AetherPet";
import ChatBackground from "../../components/aether/ChatBackground";
import OraThread from "../../components/aether/OraThread";
import OraComposer from "../../components/aether/OraComposer";
import { useOra } from "../../lib/useOra";
import { useAuth } from "../../lib/useAuth";
import {
  CASSIAN_MODELS,
  UPGRADE_NOTE,
  getCassianContent,
  type CassianModel,
} from "../../data/aetherContent";

function fmtReset(resetAt: number | null): string {
  if (!resetAt) return "";
  const ms = resetAt - Date.now();
  if (ms <= 0) return "now";
  const h = Math.floor(ms / 3_600_000);
  const m = Math.floor((ms % 3_600_000) / 60_000);
  return h > 0 ? `${h}h ${m}m` : `${m}m`;
}

// Model selector used both in the top bar (opens down) and in the composer next
// to the upload control (opens up). Ora is the active free model; the paid
// models open the upgrade card.
function ModelSwitcher({
  direction = "down",
  onUpgrade,
}: {
  direction?: "down" | "up";
  onUpgrade: (m: CassianModel) => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs text-white/70 hover:text-white hover:bg-white/5 border border-white/10 transition-colors"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Ora
        <ChevronDown size={13} className="text-white/40" />
      </button>
      <AnimatePresence>
        {open && (
          <>
            <div className="fixed inset-0 z-30" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: direction === "up" ? 6 : -6, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: direction === "up" ? 6 : -6, scale: 0.97 }}
              transition={{ duration: 0.16 }}
              className={`absolute left-0 w-64 rounded-2xl overflow-hidden p-1.5 z-40 ${
                direction === "up" ? "bottom-full mb-2" : "top-full mt-2"
              }`}
              style={{
                background: "rgba(16,16,19,0.97)",
                backdropFilter: "blur(28px)",
                WebkitBackdropFilter: "blur(28px)",
                border: "1px solid rgba(255,255,255,0.10)",
                boxShadow: "0 24px 70px rgba(0,0,0,0.6)",
              }}
            >
              {CASSIAN_MODELS.map((m) => {
                const locked = m.access === "paid";
                return (
                  <button
                    key={m.id}
                    onClick={() => {
                      setOpen(false);
                      if (locked) onUpgrade(m);
                    }}
                    className="w-full flex items-start gap-2.5 px-3 py-2.5 rounded-xl text-left hover:bg-white/5 transition-colors"
                  >
                    <AetherLogo size={16} state="static" className="text-white/70 mt-0.5" />
                    <span className="flex-1 min-w-0">
                      <span className="flex items-center gap-1.5">
                        <span className="text-[13px] text-white font-medium">{m.fullName}</span>
                        {locked && <Lock size={11} className="text-white/35" />}
                      </span>
                      <span className="block text-[11.5px] text-white/45 leading-snug">{m.tagline}</span>
                    </span>
                  </button>
                );
              })}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Chat() {
  const { profile, signOut } = useAuth();
  const firstName = profile?.full_name?.split(" ")[0];

  const { messages, ask, thinking, remaining, blocked, resetAt, setMessages } = useOra();
  const prompts = useMemo(() => getCassianContent("/cassian").prompts, []);

  // Onboarding: Ora types out a short welcome sequence on first open.
  const onboarding = useMemo(
    () => [
      `Hey${firstName ? ` ${firstName}` : ""}, I'm Ora, the free Cassian model.`,
      "I know SVNR end to end: the systems we build, your sector, the pricing, all of it.",
      "Ask me anything below, or pick one of these to get going.",
    ],
    [firstName]
  );
  useEffect(() => {
    const timers: number[] = [];
    let delay = 450;
    onboarding.forEach((text, i) => {
      const id = `intro-${i}`;
      timers.push(
        window.setTimeout(() => {
          // idempotent: never double-add the same intro line (StrictMode safe)
          setMessages((m) => (m.some((x) => x.id === id) ? m : [...m, { role: "ora", text, id }]));
        }, delay)
      );
      delay += Math.min(text.length * 14 + 850, 3200);
    });
    return () => timers.forEach((t) => window.clearTimeout(t));
  }, [onboarding, setMessages]);

  const started = messages.some((m) => m.role === "user");
  const [happy, setHappy] = useState(false);
  const lastLen = useRef(0);
  const bottomRef = useRef<HTMLDivElement>(null);

  const [upgrade, setUpgrade] = useState<CassianModel | null>(null);

  // Pet gets happy briefly when Ora answers.
  useEffect(() => {
    const last = messages[messages.length - 1];
    if (last?.role === "ora" && messages.length > 1 && messages.length !== lastLen.current) {
      setHappy(true);
      const t = window.setTimeout(() => setHappy(false), 1300);
      lastLen.current = messages.length;
      return () => window.clearTimeout(t);
    }
    lastLen.current = messages.length;
  }, [messages]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, thinking]);

  const mood: PetMood = thinking ? "thinking" : happy ? "happy" : "idle";

  // ── Gate: signed in but not yet approved ──
  if (profile && !profile.prose_access_granted) {
    return (
      <main className="min-h-screen bg-[#0A0A0B] flex items-center justify-center px-6 selection:bg-white/20 relative overflow-hidden">
        <ChatBackground />
        <SEO title="Cassian" description="The Cassian workspace." canonical="/chat" noindex />
        <div className="glass glass-sheen rounded-3xl p-9 max-w-md text-center relative z-10">
          <div className="flex justify-center mb-5 text-white">
            <AetherPet size={104} mood="idle" />
          </div>
          <h1 className="text-white text-xl font-medium mb-2">
            Cassian is in private access
          </h1>
          <p className="text-white/55 text-sm leading-relaxed mb-6">
            Your account is set up. Once our team approves your application, Ora opens here and you can
            start talking to Cassian.
          </p>
          <Link
            to="/dashboard"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-white text-black text-sm font-medium hover:bg-white/90 transition-all"
          >
            Go to your dashboard
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="h-screen flex flex-col bg-[#0A0A0B] text-white selection:bg-white/20 overflow-hidden relative">
      <SEO title="Cassian — Ora" description="Talk to Ora, the free Cassian model." canonical="/chat" noindex />
      <ChatBackground />

      {/* ── Top bar ── */}
      <header className="shrink-0 flex items-center justify-between px-4 sm:px-6 h-14 border-b border-white/8 bg-[#0A0A0B]/70 backdrop-blur-xl relative z-30">
        <div className="flex items-center gap-3">
          <Link to="/cassian" className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity">
            <AetherLogo size={22} />
            <span className="text-sm font-medium tracking-tight">Cassian</span>
          </Link>
          <ModelSwitcher direction="down" onUpgrade={setUpgrade} />
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <span className="hidden sm:inline text-[11px] text-white/35">{remaining} of 20 left</span>
          <Link
            to="/"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-white/55 hover:text-white text-xs border border-white/10 hover:bg-white/5 transition-colors"
          >
            <ArrowLeft size={13} /> <span className="hidden sm:inline">Site</span>
          </Link>
          <button
            onClick={signOut}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-white/70 hover:text-white text-xs border border-white/12 hover:bg-white/5 transition-colors"
          >
            <LogOut size={13} /> Log out
          </button>
        </div>
      </header>

      {/* ── Conversation / welcome ── */}
      <div className="flex-1 overflow-y-auto relative z-10">
        {!started ? (
          <div className="min-h-full flex flex-col items-center justify-center text-center px-6 py-10">
            <motion.div layoutId="ora-pet" transition={{ type: "spring", bounce: 0.22, duration: 0.9 }}>
              <AetherPet size={124} mood={mood} />
            </motion.div>
            <div className="mt-7 w-full max-w-md text-left">
              <OraThread messages={messages} thinking={thinking} avatar="creature" typeLast />
            </div>
            <div className="flex flex-wrap gap-2 justify-center mt-7 max-w-xl">
              {prompts.map((p) => (
                <button
                  key={p}
                  onClick={() => ask(p)}
                  className="px-3.5 py-2 rounded-full text-[12.5px] text-white/70 border border-white/12 bg-white/[0.03] hover:bg-white/[0.07] hover:text-white transition-all"
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6">
            <OraThread messages={messages} thinking={thinking} avatar="creature" typeLast />
            <div ref={bottomRef} className="h-2" />
          </div>
        )}
      </div>

      {/* drifting pet companion once chatting, flies to the bottom-right */}
      {started && (
        <div className="hidden sm:block fixed right-5 bottom-28 z-20 pointer-events-none">
          <motion.div layoutId="ora-pet" transition={{ type: "spring", bounce: 0.22, duration: 0.9 }}>
            <AetherPet size={60} mood={mood} />
          </motion.div>
        </div>
      )}

      {/* ── Composer ── */}
      <div className="shrink-0 border-t border-white/8 bg-[#0A0A0B]/70 backdrop-blur-xl relative z-30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex items-end gap-2">
            <button
              onClick={() => setUpgrade(CASSIAN_MODELS[1])}
              aria-label="Upload a file (paid)"
              className="shrink-0 mb-0.5 w-9 h-9 rounded-xl flex items-center justify-center text-white/40 hover:text-white/70 border border-white/10 hover:bg-white/5 transition-colors relative"
            >
              <Paperclip size={16} />
              <Lock size={9} className="absolute -top-1 -right-1 text-white/40 bg-[#0A0A0B] rounded-full p-[1px]" />
            </button>
            <div className="shrink-0 mb-0.5 hidden sm:block">
              <ModelSwitcher direction="up" onUpgrade={setUpgrade} />
            </div>
            <div className="flex-1">
              <OraComposer onSubmit={ask} disabled={blocked} autoFocus />
            </div>
          </div>
          <div className="flex items-center justify-between mt-2 px-1">
            <span className="text-[10.5px] text-white/30">
              {blocked
                ? `Limit reached · refills in ${fmtReset(resetAt)}`
                : `${remaining} of 20 questions left`}
            </span>
            <span className="text-[10.5px] text-white/25">Ora answers from SVNR's knowledge.</span>
          </div>
        </div>
      </div>

      {/* ── Upgrade modal ── */}
      <AnimatePresence>
        {upgrade && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-6"
            style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(6px)" }}
            onClick={() => setUpgrade(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.96 }}
              transition={{ type: "spring", bounce: 0.18, duration: 0.45 }}
              onClick={(e) => e.stopPropagation()}
              className="glass glass-sheen rounded-3xl p-7 max-w-sm w-full relative"
            >
              <button
                onClick={() => setUpgrade(null)}
                className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X size={18} />
              </button>
              <div className="flex items-center gap-2.5 mb-3 text-white">
                <AetherLogo size={26} />
                <div>
                  <p className="text-base font-medium leading-tight">{upgrade.fullName}</p>
                  <p className="text-white/40 text-[11px] uppercase tracking-[0.2em]">{upgrade.tier}</p>
                </div>
              </div>
              <p className="text-white/70 text-[13.5px] leading-relaxed mb-4">{upgrade.blurb}</p>
              <ul className="space-y-1.5 mb-5">
                {upgrade.capabilities.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-white/55 text-[12.5px]">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-white/40 shrink-0" /> {c}
                  </li>
                ))}
              </ul>
              <p className="text-white/40 text-[12px] leading-relaxed mb-5">{UPGRADE_NOTE}</p>
              <Link
                to="/contact"
                className="w-full flex items-center justify-center px-5 py-2.5 rounded-xl bg-white text-black text-sm font-medium hover:bg-white/90 transition-all"
              >
                Talk to the team about upgrading
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
