import { Link } from "react-router-dom";
import AuthShell from "../../components/auth/AuthShell";
import SEO from "../../components/SEO";

export default function Verify() {
  return (
    <>
      <SEO title="Verify your email" description="Check your email to verify your SVNR account." canonical="/verify" noindex />
      <AuthShell
        title="Check your email"
        subtitle="We sent you a verification link. Click it to confirm your account, then sign in."
        footer={<>Verified already? <Link to="/login" className="text-white/80 hover:text-white underline underline-offset-2">Sign in</Link></>}
      >
        <div className="rounded-lg bg-white/[0.04] border border-white/8 px-4 py-3">
          <p className="text-white/55 text-[13px] leading-relaxed">
            Once verified, you will land on your dashboard where you can apply for
            PROSE access. Applications are reviewed personally by Hamza.
          </p>
        </div>
      </AuthShell>
    </>
  );
}
