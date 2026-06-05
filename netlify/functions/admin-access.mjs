// Admin-only: grant or revoke PROSE access for a member.
// Calls Supabase's REST/Auth endpoints directly with fetch (no SDK) so there is
// nothing to bundle and nothing that can crash the function on cold start.
// The service key bypasses RLS, but ONLY after we verify the caller is an admin.
// The service key never reaches the browser.

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json", "cache-control": "no-store" },
  });
}

export default async (req) => {
  try {
    if (req.method !== "POST") return json({ error: "method_not_allowed" }, 405);

    const url = process.env.VITE_SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!url || !key) return json({ error: "not_configured" }, 500);

    const token = (req.headers.get("authorization") || "").replace(/^Bearer\s+/i, "").trim();
    if (!token) return json({ error: "unauthorized: no token" }, 401);

    const svc = { apikey: key, Authorization: `Bearer ${key}` };

    // 1) Verify the caller from their access token.
    const uRes = await fetch(`${url}/auth/v1/user`, {
      headers: { apikey: key, Authorization: `Bearer ${token}` },
    });
    if (!uRes.ok) return json({ error: `auth failed: ${uRes.status}` }, 401);
    const user = await uRes.json();
    const callerId = user?.id;
    if (!callerId) return json({ error: "auth failed: no user id" }, 401);

    // 2) Confirm the caller is an admin (service key bypasses RLS).
    const pRes = await fetch(
      `${url}/rest/v1/profiles?id=eq.${callerId}&select=is_admin`,
      { headers: { ...svc, Accept: "application/json" } }
    );
    if (!pRes.ok) return json({ error: `profile read: ${pRes.status}` }, 500);
    const rows = await pRes.json();
    if (!rows?.[0]?.is_admin) return json({ error: "forbidden: not an admin" }, 403);

    // 3) Parse the requested change.
    let body;
    try {
      body = await req.json();
    } catch {
      return json({ error: "bad_request: invalid json" }, 400);
    }
    const action = body?.action;
    const userId = body?.user_id;
    if (!userId || (action !== "grant" && action !== "revoke")) {
      return json({ error: "bad_request: missing action/user_id" }, 400);
    }
    const grant = action === "grant";

    // 4) Update the target profile.
    const upRes = await fetch(`${url}/rest/v1/profiles?id=eq.${userId}`, {
      method: "PATCH",
      headers: { ...svc, "content-type": "application/json", Prefer: "return=minimal" },
      body: JSON.stringify({
        prose_access_granted: grant,
        prose_access_granted_at: grant ? new Date().toISOString() : null,
      }),
    });
    if (!upRes.ok) {
      return json({ error: `update failed: ${upRes.status} ${await upRes.text()}` }, 500);
    }

    // 5) Mark the application reviewed when granting.
    if (grant) {
      await fetch(`${url}/rest/v1/prose_applications?user_id=eq.${userId}`, {
        method: "PATCH",
        headers: { ...svc, "content-type": "application/json", Prefer: "return=minimal" },
        body: JSON.stringify({ status: "reviewed", reviewed_at: new Date().toISOString() }),
      });
    }

    return json({ success: true });
  } catch (e) {
    console.error("admin-access crash:", e);
    return json({ error: `server: ${String(e?.message ?? e)}` }, 500);
  }
};
