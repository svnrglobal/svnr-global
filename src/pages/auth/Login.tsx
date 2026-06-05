import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthShell, { authInput } from "../../components/auth/AuthShell";
import SEO from "../../components/SEO";
import { supabase, isSupabaseConfigured } from "../../lib/supabase";

export default function Login() {
  const nav = useNavigate();
  const [f, setF] = useState({ email: "", password: "" });
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr("");
    if (!isSupabaseConfigured) {
      setErr("Sign-in is being switched on. Please check back shortly.");
      return;
    }
    setBusy(true);
    const { error } = await supabase.auth.signInWithPassword({ email: f.email, password: f.password });
    setBusy(false);
    if (error) {
      setErr(error.message);
      return;
    }
    nav("/dashboard");
  };

  return (
    <>
      <SEO title="Sign in" description="Sign in to your SVNR account." canonical="/login" noindex />
      <AuthShell
        title="Sign in"
        subtitle="Welcome back. Sign in to your SVNR™ account."
        footer={<>No account? <Link to="/signup" className="text-white/80 hover:text-white underline underline-offset-2">Create one</Link></>}
      >
        <form onSubmit={submit} className="space-y-3 auth-stagger">
          <input className={authInput} type="email" placeholder="Email address" required value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} />
          <input className={authInput} type="password" placeholder="Password" required value={f.password} onChange={(e) => setF({ ...f, password: e.target.value })} />
          {err && <p className="text-red-300/80 text-xs leading-relaxed">{err}</p>}
          <button disabled={busy} className="w-full px-5 py-2.5 rounded-lg bg-white text-black text-sm font-medium hover:bg-white/90 transition-all disabled:opacity-50">
            {busy ? "Signing in…" : "Sign in"}
          </button>
        </form>
      </AuthShell>
    </>
  );
}
