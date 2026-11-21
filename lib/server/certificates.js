/* Server-only certificate store.
   Import this ONLY from route handlers / server components —
   it contains participant emails and roll numbers. */
import data from "./certificates.json";
import { EVENT_NAME } from "@/data/certificates/config.mjs";

const norm = (v) => String(v || "").toLowerCase().replace(/[^a-z0-9]/g, "");

/* Fields that are safe to send to the browser */
export const toPublic = (c) => ({
    id: c.id,
    name: c.name,
    competition: c.competition,
    slug: c.slug,
    event: EVENT_NAME,
});

export function findCertificatesByLogin(email, password) {
    const p = data.participants[String(email || "").trim().toLowerCase()];
    if (!p) return null;

    const input = String(password || "");
    const ok =
        (norm(input) && p.passwords.includes(norm(input))) ||
        p.passwords.includes(`raw:${input.trim().toLowerCase()}`);

    if (!ok) return null;
    return { name: p.name, certificates: p.certificates.map(toPublic) };
}

export function findCertificateById(id) {
    const c = data.byId[String(id || "").trim().toUpperCase()];
    return c ? toPublic(c) : null;
}

/* ---------- Tiny in-memory rate limiter (per server instance) ---------- */
const attempts = new Map();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_ATTEMPTS = 12;

export function rateLimited(key) {
    const now = Date.now();
    const list = (attempts.get(key) || []).filter((t) => now - t < WINDOW_MS);
    list.push(now);
    attempts.set(key, list);
    if (attempts.size > 5000) attempts.clear();
    return list.length > MAX_ATTEMPTS;
}
