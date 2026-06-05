// Admin-only: grant or revoke PROSE access for a member.
// Uses the Supabase service role (bypasses RLS) but ONLY after verifying the
// caller's JWT belongs to an admin. The service key never reaches the browser.

import { createClient } from "@supabase/supabase-js";

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json", "cache-control": "no-store" },
  });
}

export default async (req) => {
  if (req.method !== "POST") return json({ error: "method_not_allowed" }, 405);

  const url = process.env.VITE_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceKey) return json({ error: "not_configured" }, 500);

  const token = (req.headers.get("authorization") || "").replace(/^Bearer\s+/i, "").trim();
  if (!token) return json({ error: "unauthorized" }, 401);

  const admin = createClient(url, serviceKey, { auth: { persistSession: false } });

  // 1) Verify the caller and that they are an admin.
  const { data: userData, error: userErr } = await admin.auth.getUser(token);
  if (userErr || !userData?.user) return json({ error: "unauthorized" }, 401);

  const { data: caller } = await admin
    .from("profiles")
    .select("is_admin")
    .eq("id", userData.user.id)
    .single();
  if (!caller?.is_admin) return json({ error: "forbidden" }, 403);

  // 2) Perform the privileged change.
  let body;
  try {
    body = await req.json();
  } catch {
    return json({ error: "bad_request" }, 400);
  }
  const action = body?.action;
  const userId = body?.user_id;
  if (!userId || (action !== "grant" && action !== "revoke")) {
    return json({ error: "bad_request" }, 400);
  }

  const grant = action === "grant";
  const { error: updErr } = await admin
    .from("profiles")
    .update({
      prose_access_granted: grant,
      prose_access_granted_at: grant ? new Date().toISOString() : null,
    })
    .eq("id", userId);
  if (updErr) return json({ error: updErr.message }, 500);

  if (grant) {
    await admin
      .from("prose_applications")
      .update({ status: "reviewed", reviewed_at: new Date().toISOString() })
      .eq("user_id", userId);
  }

  // (Approval email to the applicant goes here once Resend is configured.)

  return json({ success: true });
};
