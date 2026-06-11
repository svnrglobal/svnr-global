import { useEffect, useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, Check, LogOut } from "lucide-react";
import SEO from "../../components/SEO";
import AetherLogo from "../../components/aether/AetherLogo";
import { useAuth } from "../../lib/useAuth";
import { supabase } from "../../lib/supabase";

const input =
  "w-full bg-white/5 border border-white/10 rounded-lg px-3.5 py-2.5 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors";
const label = "block text-[11px] uppercase tracking-[0.18em] text-white/35 mb-1.5";

export default function Account() {
  const { profile, session, signOut, refreshProfile } = useAuth();

  const [f, setF] = useState({ full_name: "", company_name: "", industry: "" });
  const [savingP, setSavingP] = useState(false);
  const [savedP, setSavedP] = useState(false);
  const [pErr, setPErr] = useState("");

  const [pw, setPw] = useState({ next: "", confirm: "" });
  const [savingPw, setSavingPw] = useState(false);
  const [savedPw, setSavedPw] = useState(false);
  const [pwErr, setPwErr] = useState("");

  useEffect(() => {
    if (profile) {
      setF({
        full_name: profile.full_name ?? "",
        company_name: profile.company_name ?? "",
        industry: profile.industry ?? "",
      });
    }
  }, [profile]);

  const saveProfile = async (e: FormEvent) => {
    e.preventDefault();
    if (!session?.user) return;
    setSavingP(true);
    setPErr("");
    setSavedP(false);
    const { error } = await supabase
      .from("profiles")
      .update({ full_name: f.full_name, company_name: f.company_name, industry: f.industry })
      .eq("id", session.user.id);
    setSavingP(false);
    if (error) {
      setPErr(error.message);
      return;
    }
    setSavedP(true);
    await refreshProfile();
    window.setTimeout(() => setSavedP(false), 2500);
  };

  const savePassword = async (e: FormEvent) => {
    e.preventDefault();
    setPwErr("");
    setSavedPw(false);
    if (pw.next.length < 8) {
      setPwErr("Use at least 8 characters.");
      return;
    }
    if (pw.next !== pw.confirm) {
      setPwErr("Those passwords do not match.");
      return;
    }
    setSavingPw(true);
    const { error } = await supabase.auth.updateUser({ password: pw.next });
    setSavingPw(false);
    if (error) {
      setPwErr(error.message);
      return;
    }
    setSavedPw(true);
    setPw({ next: "", confirm: "" });
    window.setTimeout(() => setSavedPw(false), 2500);
  };

  return (
    <main className="relative w-full min-h-screen bg-[#0A0A0B] font-sans text-white selection:bg-white/20">
      <SEO title="Account" description="Your SVNR account settings." canonical="/settings" noindex />

      {/* member top bar */}
      <div className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 py-4 bg-[#0A0A0B]/80 backdrop-blur border-b border-white/8">
        <Link to="/dashboard" className="flex items-center gap-2 text-white">
          <AetherLogo size={22} />
          <span className="text-sm font-medium tracking-tight">Cassian</span>
        </Link>
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            to="/dashboard"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-white/55 hover:text-white text-xs border border-white/10 hover:bg-white/5 transition-colors"
          >
            <ArrowLeft size={13} /> <span className="hidden sm:inline">Dashboard</span>
          </Link>
          <button
            onClick={signOut}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-white/70 hover:text-white text-xs border border-white/12 hover:bg-white/5 transition-colors"
          >
            <LogOut size={13} /> Log out
          </button>
        </div>
      </div>

      <section className="max-w-2xl mx-auto px-6 pt-28 pb-20">
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-medium tracking-tight mb-1"
        >
          Account
        </motion.h1>
        <p className="text-white/45 text-sm mb-8">
          Manage your SVNR profile, your sign-in, and your details.
        </p>

        {/* profile */}
        <form onSubmit={saveProfile} className="glass rounded-3xl p-6 sm:p-7 mb-6">
          <h2 className="text-white text-base font-medium mb-1">Your details</h2>
          <p className="text-white/40 text-[13px] mb-5">This is what our team sees on your account.</p>
          <div className="space-y-4">
            <div>
              <label className={label}>Full name</label>
              <input
                className={input}
                value={f.full_name}
                onChange={(e) => setF({ ...f, full_name: e.target.value })}
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className={label}>Company</label>
              <input
                className={input}
                value={f.company_name}
                onChange={(e) => setF({ ...f, company_name: e.target.value })}
                placeholder="Your company"
              />
            </div>
            <div>
              <label className={label}>Industry</label>
              <input
                className={input}
                value={f.industry}
                onChange={(e) => setF({ ...f, industry: e.target.value })}
                placeholder="Your industry"
              />
            </div>
            <div>
              <label className={label}>Email</label>
              <input className={`${input} opacity-60 cursor-not-allowed`} value={profile?.email ?? ""} disabled readOnly />
              <p className="text-white/25 text-[11px] mt-1.5">
                Email is tied to your sign-in. Contact the team to change it.
              </p>
            </div>
          </div>
          {pErr && <p className="text-red-300/80 text-xs mt-3">{pErr}</p>}
          <button
            disabled={savingP}
            className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black text-sm font-medium hover:bg-white/90 transition-all disabled:opacity-50"
          >
            {savedP ? (
              <>
                <Check size={15} /> Saved
              </>
            ) : savingP ? (
              "Saving…"
            ) : (
              "Save changes"
            )}
          </button>
        </form>

        {/* password */}
        <form onSubmit={savePassword} className="glass rounded-3xl p-6 sm:p-7">
          <h2 className="text-white text-base font-medium mb-1">Password</h2>
          <p className="text-white/40 text-[13px] mb-5">Set a new password for signing in.</p>
          <div className="space-y-4">
            <div>
              <label className={label}>New password</label>
              <input
                type="password"
                className={input}
                value={pw.next}
                onChange={(e) => setPw({ ...pw, next: e.target.value })}
                placeholder="At least 8 characters"
                autoComplete="new-password"
              />
            </div>
            <div>
              <label className={label}>Confirm new password</label>
              <input
                type="password"
                className={input}
                value={pw.confirm}
                onChange={(e) => setPw({ ...pw, confirm: e.target.value })}
                placeholder="Re-enter new password"
                autoComplete="new-password"
              />
            </div>
          </div>
          {pwErr && <p className="text-red-300/80 text-xs mt-3">{pwErr}</p>}
          <button
            disabled={savingPw}
            className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black text-sm font-medium hover:bg-white/90 transition-all disabled:opacity-50"
          >
            {savedPw ? (
              <>
                <Check size={15} /> Updated
              </>
            ) : savingPw ? (
              "Updating…"
            ) : (
              "Update password"
            )}
          </button>
        </form>
      </section>
    </main>
  );
}
