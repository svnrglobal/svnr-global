import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthShell, { authInput } from "../../components/auth/AuthShell";
import SEO from "../../components/SEO";
import { supabase, isSupabaseConfigured } from "../../lib/supabase";

export default function Signup() {
  const nav = useNavigate();
  const [f, setF] = useState({ full_name: "", company_name: "", industry: "", email: "", password: "" });
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement>) => setF({ ...f, [k]: e.target.value });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr("");
    if (!isSupabaseConfigured) {
      setErr("Sign-up is being switched on. Please check back shortly.");
      return;
    }
    setBusy(true);
    const { data, error } = await supabase.auth.signUp({
      email: f.email,
      password: f.password,
      options: {
        data: { full_name: f.full_name, company_name: f.company_name, industry: f.industry },
        emailRedirectTo: `${window.location.origin}/dashboard`,
      },
    });
    setBusy(false);
    if (error) {
      setErr(error.message);
      return;
    }
    // If email confirmation is off, Supabase returns a session immediately —
    // go straight to the dashboard. Otherwise, send them to verify their email.
    nav(data.session ? "/dashboard" : "/verify");
  };

  return (
    <>
      <SEO title="Create your SVNR account" description="Create a free SVNR account to apply for PROSE access." canonical="/signup" noindex />
      <AuthShell
        title="Create your SVNR™ account"
        subtitle="Sign up with any email. PROSE access is confirmed individually — you will be notified when yours is active."
        footer={<>Have an account? <Link to="/login" className="text-white/80 hover:text-white underline underline-offset-2">Sign in</Link></>}
      >
        <form onSubmit={submit} className="space-y-3 auth-stagger">
          <input className={authInput} type="text" placeholder="Full name" required value={f.full_name} onChange={set("full_name")} />
          <input className={authInput} type="text" placeholder="Company name" required value={f.company_name} onChange={set("company_name")} />
          <input className={authInput} type="text" placeholder="Industry" required value={f.industry} onChange={set("industry")} />
          <input className={authInput} type="email" placeholder="Email address" required value={f.email} onChange={set("email")} />
          <input className={authInput} type="password" placeholder="Password (8+ characters)" required minLength={8} value={f.password} onChange={set("password")} />
          {err && <p className="text-red-300/80 text-xs leading-relaxed">{err}</p>}
          <button disabled={busy} className="w-full px-5 py-2.5 rounded-lg bg-white text-black text-sm font-medium hover:bg-white/90 transition-all disabled:opacity-50">
            {busy ? "Creating…" : "Create account"}
          </button>
        </form>
      </AuthShell>
    </>
  );
}
