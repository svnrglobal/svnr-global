import { useEffect, useState } from "react";
import SEO from "../../components/SEO";
import AdminShell from "../../components/admin/AdminShell";
import { supabase } from "../../lib/supabase";

interface Member {
  id: string;
  email: string;
  company_name: string | null;
  prose_access_granted: boolean;
  is_admin: boolean;
  created_at: string;
}

export default function Members() {
  const [members, setMembers] = useState<Member[]>([]);
  const [busyId, setBusyId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    const { data } = await supabase
      .from("profiles")
      .select("id,email,company_name,prose_access_granted,is_admin,created_at")
      .order("created_at", { ascending: false });
    setMembers((data as Member[]) ?? []);
    setLoading(false);
  };
  useEffect(() => {
    void load();
  }, []);

  const toggle = async (m: Member) => {
    setBusyId(m.id);
    const {
      data: { session },
    } = await supabase.auth.getSession();
    const res = await fetch("/api/admin-access", {
      method: "POST",
      headers: { "content-type": "application/json", authorization: `Bearer ${session?.access_token ?? ""}` },
      body: JSON.stringify({ action: m.prose_access_granted ? "revoke" : "grant", user_id: m.id }),
    });
    setBusyId(null);
    if (res.ok) void load();
    else alert("Update failed.");
  };

  return (
    <AdminShell>
      <SEO title="Admin — Members" description="PROSE admin members." canonical="/admin/members" noindex />
      <h1 className="text-white text-xl font-medium mb-6">Members</h1>
      {loading ? (
        <p className="text-white/40 text-sm">Loading…</p>
      ) : members.length === 0 ? (
        <p className="text-white/40 text-sm">No members yet.</p>
      ) : (
        <div className="glass rounded-2xl divide-y divide-white/8">
          {members.map((m) => (
            <div key={m.id} className="flex items-center gap-4 px-5 py-4">
              <div className="flex-1 min-w-0">
                <p className="text-white text-sm truncate">
                  {m.email}
                  {m.is_admin && (
                    <span className="text-[9px] uppercase tracking-wider text-white/40 ml-1.5">admin</span>
                  )}
                </p>
                <p className="text-white/35 text-xs truncate">
                  {m.company_name ?? "—"} · joined {new Date(m.created_at).toLocaleDateString()}
                </p>
              </div>
              <button
                disabled={busyId === m.id}
                onClick={() => toggle(m)}
                className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all disabled:opacity-50 shrink-0"
                style={
                  m.prose_access_granted
                    ? { background: "rgba(255,255,255,0.10)", color: "#fff" }
                    : { background: "#fff", color: "#000" }
                }
              >
                {m.prose_access_granted ? "Revoke access" : "Grant access"}
              </button>
            </div>
          ))}
        </div>
      )}
    </AdminShell>
  );
}
