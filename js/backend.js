/* ===================== Shanti Health Care — backend.js ===================== */
/* Connects the static site to its Supabase Edge Functions backend, so every
   booking is saved in a real shared database instead of just the visitor's
   own browser. The anon key below is meant to be public (it grants no direct
   database access — every request is checked by the Edge Functions). */
const BACKEND_URL = "https://zieqjalifyrokgaolsto.supabase.co/functions/v1";
const BACKEND_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InppZXFqYWxpZnlyb2tnYW9sc3RvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTU1MzczNjMsImV4cCI6MjExMTExMzM2M30.HGOd8YXn95UzcnqovXrSCwKRJhL0bDpk7VYa2AUjDQg";

async function backendCall(fn, payload){
  const res = await fetch(`${BACKEND_URL}/${fn}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${BACKEND_ANON_KEY}`,
    },
    body: JSON.stringify(payload || {}),
  });
  let data = {};
  try{ data = await res.json(); }catch(e){ /* ignore */ }
  if(!res.ok){
    throw new Error(data.error || `Request failed (${res.status})`);
  }
  return data;
}
