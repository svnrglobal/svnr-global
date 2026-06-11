import { Link, useLocation } from "react-router-dom";
import { LogOut } from "lucide-react";
import AetherLogo from "../aether/AetherLogo";
import { useAuth } from "../../lib/useAuth";

const tabs = [
  { label: "Applications", href: "/admin" },
  { label: "Members", href: "/admin/members" },
];

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  const { signOut } = useAuth();

  return (
    <main className="min-h-screen bg-[#0A0A0B] font-sans selection:bg-white/20">
      <div className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-[#0A0A0B]/80 backdrop-blur border-b border-white/8">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2 text-white">
            <AetherLogo size={22} />
            <span className="text-sm font-medium tracking-tight">Cassian Admin</span>
          </Link>
          <nav className="flex items-center gap-1">
            {tabs.map((t) => {
              const active = pathname === t.href;
              return (
                <Link
                  key={t.href}
                  to={t.href}
                  className="px-3 py-1.5 rounded-lg text-xs transition-colors"
                  style={{
                    color: active ? "#fff" : "rgba(255,255,255,0.45)",
                    background: active ? "rgba(255,255,255,0.08)" : "transparent",
                  }}
                >
                  {t.label}
                </Link>
              );
            })}
          </nav>
        </div>
        <button
          onClick={signOut}
          className="flex items-center gap-1.5 text-white/50 hover:text-white text-xs transition-colors"
        >
          <LogOut size={14} /> Sign out
        </button>
      </div>
      <div className="max-w-5xl mx-auto px-6 py-10">{children}</div>
    </main>
  );
}
