import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { LogOut, ArrowRight } from "lucide-react";
import SEO from "../../components/SEO";
import VideoHero from "../../components/VideoHero";
import AetherLogo from "../../components/aether/AetherLogo";
import { VIDEOS } from "../../data/content";
import { useAuth } from "../../lib/useAuth";
import { supabase } from "../../lib/supabase";

const input =
  "w-full bg-white/5 border border-white/10 rounded-lg px-3.5 py-2.5 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors";

export default function Dashboard() {
  const { profile, session, signOut } = useAuth();
  const [applied, setApplied] = useState<boolean | null>(null);
  const [f, setF] = useState({ full_name: "", company_name: "", industry: "", current_acquisition: "", prose_goal: "" });
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");

  useEffect(() => {
    if (profile) {
      setF((p) => ({
        ...p,
        full_name: profile.full_name ?? "",
        company_name: profile.company_name ?? "",
        industry: profile.industry ?? "",
      }));
    }
  }, [profile]);

  useEffect(() => {
    if (!session?.user) return;
    supabase
      .from("prose_applications")
      .select("id")
      .eq("user_id", session.user.id)
      .maybeSingle()
      .then(({ data }) => setApplied(Boolean(data)));
  }, [session]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!session?.user) return;
    setBusy(true);
    setErr("");
    const { error } = await supabase.from("prose_applications").insert({
      user_id: session.user.id,
      full_name: f.full_name,
      company_name: f.company_name,
      industry: f.industry,
      current_acquisition: f.current_acquisition,
      prose_goal: f.prose_goal,
    });
    setBusy(false);
    if (error) {
      setErr(error.message);
      return;
    }
    setApplied(true);
  };

  const granted = profile?.prose_access_granted;

  return (
    <main className="relative w-full bg-[#0A0A0B] font-sans min-h-screen selection:bg-white/20">
      <SEO title="Dashboard" description="Your SVNR member dashboard." canonical="/dashboard" noindex />

      {/* member top bar */}
      <div className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 py-4 bg-[#0A0A0B]/80 backdrop-blur border-b border-white/8">
        <Link to="/" className="flex items-center gap-2 text-white">
          <AetherLogo size={22} />
          <span className="text-sm font-medium tracking-tight">Aether</span>
        </Link>
        <button onClick={signOut} className="flex items-center gap-1.5 text-white/50 hover:text-white text-xs transition-colors">
          <LogOut size={14} /> Sign out
        </button>
      </div>

      {/* hero */}
      <VideoHero src={VIDEOS.members} minHeight="min-h-[42vh]">
        <div className="max-w-3xl mx-auto px-6 text-center pt-16 pb-10">
          <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.1 }} className="flex justify-center mb-4 text-white">
            <AetherLogo size={40} />
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.25 }} className="text-3xl sm:text-4xl font-medium text-white tracking-tight">
            {profile?.full_name ? `Welcome, ${profile.full_name.split(" ")[0]}.` : "Welcome."}
          </motion.h1>
        </div>
      </VideoHero>

      <section className="relative z-10 px-6 py-14">
        <div className="max-w-2xl mx-auto">
          {granted ? (
            <div className="glass glass-sheen rounded-3xl p-8 text-center">
              <div className="flex justify-center mb-4 text-white"><AetherLogo size={40} state="idle" /></div>
              <h2 className="text-white text-xl font-medium mb-2">Your Aether access is active.</h2>
              <p className="text-white/55 text-sm leading-relaxed max-w-md mx-auto mb-6">
                Ora, the free Aether model, is ready. Open it to ask about your market, your sector fit, and
                exactly what SVNR would build for you.
              </p>
              <Link
                to="/chat"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black text-sm font-medium hover:bg-white/90 transition-all"
              >
                Open Aether <ArrowRight size={15} />
              </Link>
            </div>
          ) : applied === null ? (
            <div className="h-24" />
          ) : applied ? (
            <div className="glass rounded-3xl p-8">
              <h2 className="text-white text-lg font-medium mb-2">Your application has been received.</h2>
              <p className="text-white/55 text-sm leading-relaxed">
                We review applications as a team. If Aether is a fit for where you are right now, you will
                hear from us directly.
              </p>
            </div>
          ) : (
            <div className="glass rounded-3xl p-7 sm:p-8">
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/35 mb-2">Your account is active</p>
              <h2 className="text-white text-lg font-medium mb-2">Apply for Aether access</h2>
              <p className="text-white/50 text-[13px] leading-relaxed mb-6">
                Aether is currently in private access. Applications are reviewed by our team. If it is a fit
                for where you are right now, you will hear from us directly.
              </p>
              <form onSubmit={submit} className="space-y-3 auth-stagger">
                <input className={input} placeholder="Your full name" required value={f.full_name} onChange={(e) => setF({ ...f, full_name: e.target.value })} />
                <input className={input} placeholder="Your company" required value={f.company_name} onChange={(e) => setF({ ...f, company_name: e.target.value })} />
                <input className={input} placeholder="Your industry" required value={f.industry} onChange={(e) => setF({ ...f, industry: e.target.value })} />
                <textarea className={`${input} resize-none`} rows={3} placeholder="What does your current client acquisition look like?" required value={f.current_acquisition} onChange={(e) => setF({ ...f, current_acquisition: e.target.value })} />
                <textarea className={`${input} resize-none`} rows={3} placeholder="What are you hoping Aether helps you with?" required value={f.prose_goal} onChange={(e) => setF({ ...f, prose_goal: e.target.value })} />
                {err && <p className="text-red-300/80 text-xs">{err}</p>}
                <button disabled={busy} className="w-full px-5 py-2.5 rounded-lg bg-white text-black text-sm font-medium hover:bg-white/90 transition-all disabled:opacity-50">
                  {busy ? "Submitting…" : "Submit application"}
                </button>
              </form>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
