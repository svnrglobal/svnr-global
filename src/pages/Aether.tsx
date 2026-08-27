import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Lock, Check } from "lucide-react";
import AetherLogo from "../components/aether/AetherLogo";
import AgentOrbit from "../components/aether/AgentOrbit";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import OpticalType from "../components/OpticalType";
import { CASSIAN_MODELS } from "../data/aetherContent";
import { useAuth } from "../lib/useAuth";
import { AskSurface, ColdAccountReroute, StackDiff } from "../components/console/builder";

const MONO = { fontFamily: "var(--font-mono)" };
const EASE = [0.16, 1, 0.3, 1] as const;

const LEVELS = [
  {
    name: "Answers",
    line: "Ora responds to questions about SVNR, your sector, and how an engagement actually works.",
  },
  {
    name: "Knows",
    line: "Prose connects to your company's documents and knows your business at scale, then gives guidance built on your real context.",
  },
  {
    name: "Operates",
    line: "Soleth thinks like your acquisition team: pipeline logic, outreach reasoning, and the next move, then operates it for you.",
  },
];

export default function Aether() {
  const { session, profile } = useAuth();
  const approved = Boolean(session && profile?.prose_access_granted);

  return (
    <main className="relative w-full bg-black font-sans selection:bg-white/20 selection:text-white">
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
      <section className="relative z-10 px-6 md:px-12 pt-32 md:pt-44 pb-16 md:pb-24">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-start">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="text-[10px] tracking-[0.28em] text-white/40 mb-6"
                style={MONO}
              >
                CASSIAN
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.08, ease: EASE }}>
                <OpticalType className="text-4xl sm:text-5xl md:text-[64px] font-medium text-white leading-[1.05] tracking-tight">
                  The fastest way to know whether SVNR fits.
                </OpticalType>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.22 }}
                className="text-white/45 text-base md:text-lg mt-6 max-w-xl leading-relaxed"
              >
                Cassian is SVNR's AI. Talk to Ora free about your market, ask the hard questions, and see the
                next move. Prose and Soleth go deeper for members.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-3 mt-9"
              >
                <Link
                  to={approved ? "/chat" : "/signup"}
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors"
                >
                  {approved ? "Open Ora" : "Request access"} <ArrowRight size={14} />
                </Link>
                {!approved && (
                  <Link
                    to="/login"
                    className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/[0.14] text-white/80 text-sm hover:border-white/30 hover:text-white transition-colors"
                  >
                    Sign in
                  </Link>
                )}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
            >
              <AskSurface />
            </motion.div>
          </div>
        </div>
      </section>

      {/* THE STACK DIFF */}
      <section className="relative z-10 px-6 md:px-12 py-20 md:py-28 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <p className="text-[10px] tracking-[0.28em] text-white/40 mb-5" style={MONO}>
              THE ARGUMENT
            </p>
            <h2 className="text-2xl md:text-4xl font-medium text-white tracking-tight leading-tight mb-5">
              One system, instead of a stack.
            </h2>
            <p className="text-white/45 text-sm leading-relaxed">
              An SDR retainer, a database seat, a research VA, stitched together by hand. Cassian replaces the
              stack with one system that sources, qualifies, and re-approaches on its own.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.08, ease: EASE }}
          >
            <StackDiff />
          </motion.div>
        </div>
      </section>

      {/* COLD ACCOUNT REROUTE */}
      <section className="relative z-10 px-6 md:px-12 py-20 md:py-28 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: EASE }}
            className="mb-10 max-w-2xl"
          >
            <p className="text-[10px] tracking-[0.28em] text-white/40 mb-5" style={MONO}>
              PERSISTENCE
            </p>
            <h2 className="text-2xl md:text-4xl font-medium text-white tracking-tight leading-tight mb-5">
              A cold account is not a closed one.
            </h2>
            <p className="text-white/45 text-sm leading-relaxed">
              When a primary channel goes quiet, Cassian does not stop, it reroutes through a different channel,
              angle, or moment, and keeps the account moving.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.08, ease: EASE }}
          >
            <ColdAccountReroute />
          </motion.div>
        </div>
      </section>

      {/* THREE MODELS */}
      <section className="relative z-10 px-6 md:px-12 py-20 md:py-28 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: EASE }}
            className="mb-10"
          >
            <p className="text-[10px] tracking-[0.28em] text-white/40 mb-5" style={MONO}>
              THREE MODELS
            </p>
            <h2 className="text-2xl md:text-4xl font-medium text-white tracking-tight">
              One family. Three levels of depth.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CASSIAN_MODELS.map((m, i) => {
              const flagship = Boolean(m.flagship);
              return (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.08, duration: 0.5, ease: EASE }}
                  className={`rounded-2xl border p-7 flex flex-col transition-colors duration-300 ${
                    flagship
                      ? "border-rose-400/25 bg-rose-400/[0.03] hover:border-rose-400/40"
                      : "border-white/[0.08] bg-white/[0.015] hover:border-white/[0.14] hover:bg-white/[0.028]"
                  }`}
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
                        color: m.access === "free" ? "rgb(52,211,153)" : "rgba(255,255,255,0.6)",
                        background: m.access === "free" ? "rgba(52,211,153,0.12)" : "rgba(255,255,255,0.06)",
                      }}
                    >
                      {m.access === "free" ? "Free" : m.tier}
                    </span>
                  </div>

                  <p className="text-white/45 text-[13px] leading-relaxed mb-4">{m.blurb}</p>

                  <ul className="space-y-2 mb-6 flex-1">
                    {m.capabilities.map((c) => (
                      <li key={c} className="flex items-start gap-2 text-white/45 text-[12.5px]">
                        <Check size={13} className={`mt-0.5 shrink-0 ${flagship ? "text-rose-400/60" : "text-white/40"}`} /> {c}
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
      <section className="relative z-10 px-6 md:px-12 py-20 md:py-28 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, ease: EASE }}>
            <p className="text-[10px] tracking-[0.28em] text-white/40 mb-5" style={MONO}>
              THE FLAGSHIP, AT WORK
            </p>
            <h2 className="text-2xl md:text-4xl font-medium text-white tracking-tight mb-5">One model. Every online job.</h2>
            <p className="text-white/45 text-sm leading-relaxed">
              Cassian Soleth builds and runs the agents that operate your business online, the storefront,
              outreach, support, voice, pipeline, and partners, autonomously. The work happens without waiting
              on anyone.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, ease: EASE }}>
            <AgentOrbit />
          </motion.div>
        </div>
      </section>

      {/* SIGNAL INTELLIGENCE TEASER */}
      <section className="relative z-10 px-6 md:px-12 py-20 md:py-28 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: EASE }}
            className="rounded-2xl p-8 sm:p-12 overflow-hidden relative border border-white/[0.08] bg-white/[0.015]"
          >
            <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
              <div>
                <p className="text-[10px] tracking-[0.28em] text-rose-400/70 mb-5" style={MONO}>
                  SOLETH · SIGNAL INTELLIGENCE
                </p>
                <h2 className="text-2xl sm:text-3xl font-medium text-white tracking-tight mb-4 leading-tight">
                  It watches the world so your next move is early.
                </h2>
                <p className="text-white/45 text-sm leading-relaxed mb-4">
                  Markets move, policy shifts, supply chains reroute. Soleth reads the signals as they appear,
                  news, filings, rates, and sanctions, and connects them to your pipeline, so an opening lands
                  on your desk before it is obvious to everyone else.
                </p>
                <p className="text-white/45 text-sm leading-relaxed mb-6">
                  Find importers in a new market before a tariff lands. Reposition before the rest of your
                  sector reacts. The thinking is continuous, and the call is still yours.
                </p>
                <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest text-white/40 border border-white/12 rounded-full px-4 py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400/70" /> In private preview for engagement members
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
                      className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-[12px] text-white/70 border border-white/[0.08] bg-white/[0.04]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-400/70 flex-shrink-0" /> {s}
                    </motion.div>
                  ))}
                </div>
                <div className="flex justify-center text-white/25 text-lg leading-none">↓</div>
                <div className="rounded-xl px-5 py-4 text-center border border-rose-400/25 bg-rose-400/[0.06]">
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
                  className="rounded-xl px-4 py-3 text-[12px] text-white/80 border border-white/[0.12] bg-white/[0.06]"
                >
                  <span className="text-rose-400/80 font-medium">Move:</span> reach 40 importers in Vietnam this
                  week, before the duty change is priced in.
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="relative z-10 px-6 md:px-12 py-20 md:py-28 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: EASE }}
            className="max-w-2xl"
          >
            <p className="text-[10px] tracking-[0.28em] text-white/40 mb-5" style={MONO}>
              PRIVATE ACCESS
            </p>
            <h2 className="text-2xl md:text-4xl font-medium text-white tracking-tight leading-tight mb-5">
              Access is granted individually.
            </h2>
            <p className="text-white/45 text-base leading-relaxed mb-9">
              Create a free account to apply for Ora. Applications are reviewed by our team. If Cassian is a
              fit for where you are right now, you will hear from us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to={approved ? "/chat" : "/signup"}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors"
              >
                {approved ? "Open Ora" : "Request access"} <ArrowRight size={14} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/[0.14] text-white/80 text-sm hover:border-white/30 hover:text-white transition-colors"
              >
                All systems <ArrowRight size={14} />
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
