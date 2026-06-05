import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const anon = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

/** True when the Supabase env vars are present (i.e. on the deployed site). */
export const isSupabaseConfigured = Boolean(url && anon);

// Placeholders keep createClient from throwing during local builds / prerender
// where the env vars are absent. Real auth calls only run client-side at
// runtime, where the deployed bundle has the real values inlined.
export const supabase = createClient(
  url || "https://placeholder.supabase.co",
  anon || "public-anon-placeholder"
);
