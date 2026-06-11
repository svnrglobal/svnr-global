import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import SEO from "../../components/SEO";
import AdminShell from "../../components/admin/AdminShell";
import { supabase } from "../../lib/supabase";

interface App {
  id: string;
  user_id: string;
  full_name: string;
  company_name: string;
  industry: string;
  current_acquisition: string;
  prose_goal: string;
  status: string;
  created_at: string;
}
type Filter = "pending" | "reviewed" | "ignored" | "all";

const badge: Record<string, string> = {
  pending: "rgba(255,255,255,0.55)",
  reviewed: "#9fd8a0",
  ignored: "rgba(255,255,255,0.30)",
};

export default function Admin() {
  const [apps, setApps] = useState<App[]>([]);
  const [filter, setFilter] = useState<Filter>("pending");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [busyId, setBusyId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    const { data } = await supabase
      .from("prose_applications")
      .select("*")
      .order("created_at", { ascending: false });
    setApps((data as App[]) ?? []);
    setLoading(false);
  };
  useEffect(() => {
    void load();
  }, []);

  const grant = async (a: App) => {
    if (!window.confirm(`Grant Cassian access to ${a.full_name} (${a.company_name})?`)) return;
    setBusyId(a.id);
    const {
      data: { session },
    } = await supabase.auth.getSession();
    const res = await fetch("/api/admin-access", {
      method: "POST",
      headers: { "content-type": "application/json", authorization: `Bearer ${session?.access_token ?? ""}` },
      body: JSON.stringify({ action: "grant", user_id: a.user_id }),
    });
    setBusyId(null);
    if (res.ok) {
      void load();
      return;
    }
    const info = await res.json().catch(() => ({}));
    alert(`Grant failed (${res.status}): ${info.error ?? "unknown error"}`);
  };

  const ignore = async (a: App) => {
    setBusyId(a.id);
    await supabase
      .from("prose_applications")
      .update({ status: "ignored", reviewed_at: new Date().toISOString() })
      .eq("id", a.id);
    setBusyId(null);
    void load();
  };

  const shown = apps.filter((a) => (filter === "all" ? true : a.status === filter));
  const pending = apps.filter((a) => a.status === "pending").length;
  const tabs: Filter[] = ["pending", "reviewed", "ignored", "all"];

  return (
    <AdminShell>
      <SEO title="Admin — Applications" description="Cassian admin." canonical="/admin" noindex />
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-white text-xl font-medium">
          Applications
          {pending > 0 && (
            <span className="ml-2 text-xs text-black bg-white rounded-full px-2 py-0.5 align-middle">{pending}</span>
          )}
        </h1>
        <div className="flex gap-1">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className="px-3 py-1.5 rounded-lg text-xs capitalize transition-colors"
              style={{
                color: filter === t ? "#fff" : "rgba(255,255,255,0.4)",
                background: filter === t ? "rgba(255,255,255,0.08)" : "transparent",
              }}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <p className="text-white/40 text-sm">Loading…</p>
      ) : shown.length === 0 ? (
        <p className="text-white/40 text-sm">No {filter === "all" ? "" : filter} applications.</p>
      ) : (
        <div className="space-y-2">
          {shown.map((a) => (
            <div key={a.id} className="glass rounded-2xl overflow-hidden">
              <button
                onClick={() => setExpanded(expanded === a.id ? null : a.id)}
                className="w-full flex items-center gap-4 px-5 py-4 text-left"
              >
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-medium truncate">
                    {a.full_name} <span className="text-white/40 font-normal">· {a.company_name}</span>
                  </p>
                  <p className="text-white/35 text-xs truncate">
                    {a.industry} · {new Date(a.created_at).toLocaleDateString()}
                  </p>
                </div>
                <span
                  className="text-[10px] uppercase tracking-wider shrink-0"
                  style={{ color: badge[a.status] ?? "#fff" }}
                >
                  {a.status}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {expanded === a.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-5 pb-5 overflow-hidden"
                  >
                    <div className="space-y-3 text-sm border-t border-white/8 pt-4">
                      <div>
                        <p className="text-white/35 text-[10px] uppercase tracking-wider mb-1">Current acquisition</p>
                        <p className="text-white/70 leading-relaxed">{a.current_acquisition}</p>
                      </div>
                      <div>
                        <p className="text-white/35 text-[10px] uppercase tracking-wider mb-1">What they want from Cassian</p>
                        <p className="text-white/70 leading-relaxed">{a.prose_goal}</p>
                      </div>
                      <div className="flex gap-2 pt-2">
                        <button
                          disabled={busyId === a.id}
                          onClick={() => grant(a)}
                          className="px-4 py-2 rounded-lg bg-white text-black text-xs font-medium hover:bg-white/90 disabled:opacity-50"
                        >
                          Grant access
                        </button>
                        <button
                          disabled={busyId === a.id}
                          onClick={() => ignore(a)}
                          className="px-4 py-2 rounded-lg text-white/50 hover:text-white text-xs disabled:opacity-50"
                        >
                          Ignore
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      )}
    </AdminShell>
  );
}
