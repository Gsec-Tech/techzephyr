/* =========================================================
   Builds lib/server/certificates.json from data/certificates/sheet1.csv
   Run:  npm run certs
   - one certificate per (participant × competition)
   - IDs are deterministic (same sheet row → same ID every build),
     so QR codes already printed/shared keep working.
========================================================= */

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { createHash } from "node:crypto";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { COMPETITIONS, SKIP_LABELS, ID_SALT } from "../data/certificates/config.mjs";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const SRC = resolve(root, "data/certificates/sheet1.csv");
const OUT = resolve(root, "lib/server/certificates.json");

/* ---------- CSV parser (quotes, commas, CRLF) ---------- */
function parseCSV(text) {
    const rows = [];
    let row = [];
    let field = "";
    let q = false;
    const s = text.replace(/^﻿/, "");
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (q) {
            if (c === '"') {
                if (s[i + 1] === '"') {
                    field += '"';
                    i++;
                } else q = false;
            } else field += c;
        } else if (c === '"') q = true;
        else if (c === ",") {
            row.push(field);
            field = "";
        } else if (c === "\n" || c === "\r") {
            if (c === "\r" && s[i + 1] === "\n") i++;
            row.push(field);
            rows.push(row);
            row = [];
            field = "";
        } else field += c;
    }
    if (field !== "" || row.length) {
        row.push(field);
        rows.push(row);
    }
    return rows.filter((r) => r.some((v) => v.trim() !== ""));
}

const norm = (v) => String(v || "").toLowerCase().replace(/[^a-z0-9]/g, "");

/* Title-case only names typed fully in UPPER or lower case */
function tidyName(raw) {
    const name = String(raw || "").replace(/\s+/g, " ").trim();
    const letters = name.replace(/[^A-Za-z]/g, "");
    if (!letters) return name;
    const allUpper = letters === letters.toUpperCase();
    const allLower = letters === letters.toLowerCase();
    if (!allUpper && !allLower) return name;
    return name
        .toLowerCase()
        .replace(/(^|[\s.\-'])([a-z])/g, (_, p, ch) => p + ch.toUpperCase());
}

/* Password variants: whole roll + each comma/slash-separated part */
function passwordsFor(roll) {
    const whole = norm(roll);
    const parts = String(roll || "")
        .split(/[,;&]| and /i)
        .map(norm)
        .filter(Boolean);
    const list = Array.from(new Set([whole, ...parts].filter(Boolean)));
    // Rolls with no letters/digits (e.g. "-") are matched literally
    if (!list.length && String(roll || "").trim()) list.push(`raw:${String(roll).trim().toLowerCase()}`);
    return list;
}

function certId(email, code) {
    const h = createHash("sha256").update(`${ID_SALT}|${email}|${code}`).digest("hex").toUpperCase();
    return `TZ4-${code}-${h.slice(0, 8)}`;
}

const table = parseCSV(readFileSync(SRC, "utf8"));
const header = table[0].map((h) => norm(h));
const col = (names) => header.findIndex((h) => names.includes(h));
const iName = col(["name", "fullname"]);
const iEmail = col(["email", "emailaddress"]);
const iComp = col(["competition", "competitions", "event"]);
const iRoll = col(["rollnumber", "roll", "rollno"]);

if ([iName, iEmail, iComp, iRoll].some((i) => i < 0)) {
    throw new Error("sheet1.csv must have columns: Name, Email, Competition, Roll Number");
}

const participants = {}; // email -> { name, passwords, certificates[] }
const unknownLabels = new Set();
let certCount = 0;

for (const r of table.slice(1)) {
    const email = String(r[iEmail] || "").trim().toLowerCase();
    if (!email) continue;

    const name = tidyName(r[iName]);
    const p =
        participants[email] ||
        (participants[email] = { name, passwords: [], certificates: [] });

    p.passwords = Array.from(new Set([...p.passwords, ...passwordsFor(r[iRoll])]));

    const labels = String(r[iComp] || "")
        .split(",")
        .map((s) => s.trim().toLowerCase());

    for (const label of labels) {
        if (SKIP_LABELS.includes(label)) continue;
        const comp = COMPETITIONS[label];
        if (!comp) {
            unknownLabels.add(label);
            continue;
        }
        if (p.certificates.some((c) => c.code === comp.code)) continue;
        p.certificates.push({
            id: certId(email, comp.code),
            name,
            code: comp.code,
            slug: comp.slug,
            competition: comp.title,
        });
        certCount++;
    }
}

/* Index by certificate ID for the public verify page */
const byId = {};
for (const p of Object.values(participants)) {
    for (const c of p.certificates) {
        if (byId[c.id]) throw new Error(`Duplicate certificate ID ${c.id}`);
        byId[c.id] = c;
    }
}

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, JSON.stringify({ generatedAt: new Date().toISOString(), participants, byId }, null, 0));

console.log(
    `✓ ${Object.keys(participants).length} participants, ${certCount} certificates → lib/server/certificates.json`
);
if (unknownLabels.size) {
    console.warn(`⚠ Unknown competition labels (add to data/certificates/config.mjs): ${[...unknownLabels].join(", ")}`);
}
