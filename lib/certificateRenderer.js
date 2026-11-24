"use client";

import { SITE_URL } from "@/data/certificates/config.mjs";

/* =========================================================
   Draws a TechZephyr 4.0 certificate on a <canvas>.
   Coordinates are for public/certificates/template.png (2000×1414).
========================================================= */

export const CERT_W = 2000;
export const CERT_H = 1414;

const LAYOUT = {
    name: { cx: 1000, baseline: 718, maxWidth: 1020, size: 86, min: 44 },
    competition: { cx: 1337, baseline: 843, maxWidth: 470, size: 46, min: 22 },
    qr: { x: 1702, y: 418, card: 216, qr: 176 },
};

let fontsPromise;
function loadFonts() {
    if (fontsPromise) return fontsPromise;
    const faces = [
        new FontFace("TZCertName", "url(/fonts/playfair-display-latin-700-italic.woff2)", { style: "italic", weight: "700" }),
        new FontFace("TZCertTitle", "url(/fonts/playfair-display-latin-700-normal.woff2)", { weight: "700" }),
        new FontFace("TZCertLabel", "url(/fonts/playfair-display-latin-600-normal.woff2)", { weight: "600" }),
    ];
    fontsPromise = Promise.all(
        faces.map((f) =>
            f
                .load()
                .then((loaded) => document.fonts.add(loaded))
                .catch(() => null)
        )
    );
    return fontsPromise;
}

const imageCache = {};
function loadImage(src) {
    if (!imageCache[src]) {
        imageCache[src] = new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.onerror = () => {
                delete imageCache[src];
                reject(new Error("Could not load the certificate template."));
            };
            img.src = src;
        });
    }
    return imageCache[src];
}

export function verifyUrl(id) {
    let base = (SITE_URL || (typeof window !== "undefined" ? window.location.origin : "")).trim().replace(/\/$/, "");
    if (base && !/^https?:\/\//i.test(base)) base = `https://${base}`;
    return `${base}/verify/${encodeURIComponent(id)}`;
}

function fitText(ctx, text, family, style, { size, min, maxWidth }) {
    let s = size;
    ctx.font = `${style} ${s}px ${family}`;
    while (ctx.measureText(text).width > maxWidth && s > min) {
        s -= 2;
        ctx.font = `${style} ${s}px ${family}`;
    }
    return s;
}

function roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
}

export async function renderCertificate(canvas, cert) {
    const [{ default: QRCode }, template] = await Promise.all([
        import("qrcode"),
        loadImage("/certificates/template.png"),
        loadFonts(),
    ]);

    canvas.width = CERT_W;
    canvas.height = CERT_H;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, CERT_W, CERT_H);
    ctx.drawImage(template, 0, 0, CERT_W, CERT_H);

    ctx.textAlign = "center";
    ctx.textBaseline = "alphabetic";

    /* ---------- Name (first blank) ---------- */
    fitText(ctx, cert.name, "TZCertName, Georgia, serif", "italic 700", LAYOUT.name);
    ctx.fillStyle = "#141414";
    ctx.fillText(cert.name, LAYOUT.name.cx, LAYOUT.name.baseline);

    /* ---------- Competition (second blank) ---------- */
    fitText(ctx, cert.competition, "TZCertTitle, Georgia, serif", "700", LAYOUT.competition);
    ctx.fillStyle = "#c2410c";
    ctx.fillText(cert.competition, LAYOUT.competition.cx, LAYOUT.competition.baseline);

    /* ---------- QR verification card ---------- */
    const { x, y, card, qr } = LAYOUT.qr;
    const cardH = card + 70;

    ctx.save();
    ctx.shadowColor = "rgba(0,0,0,0.12)";
    ctx.shadowBlur = 18;
    ctx.shadowOffsetY = 4;
    roundRect(ctx, x, y, card, cardH, 10);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
    ctx.restore();

    roundRect(ctx, x, y, card, cardH, 10);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#f0f0f0";
    ctx.stroke();

    // orange accent strip
    ctx.fillStyle = "#f7931e";
    roundRect(ctx, x, y, card, 8, 4);
    ctx.fill();

    const qrCanvas = document.createElement("canvas");
    await QRCode.toCanvas(qrCanvas, verifyUrl(cert.id), {
        width: qr,
        margin: 0,
        errorCorrectionLevel: "M",
        color: { dark: "#111111", light: "#ffffff" },
    });
    ctx.drawImage(qrCanvas, x + (card - qr) / 2, y + 22, qr, qr);

    ctx.fillStyle = "#111111";
    ctx.font = "600 19px TZCertLabel, Georgia, serif";
    ctx.fillText("Scan to verify", x + card / 2, y + qr + 52);

    ctx.fillStyle = "#6b6b6b";
    ctx.font = "600 15px 'Courier New', monospace";
    ctx.fillText(cert.id, x + card / 2, y + qr + 76);

    return canvas;
}

const safe = (s) => String(s).replace(/[^a-z0-9]+/gi, "_").replace(/^_|_$/g, "");

export function certificateFileName(cert, ext) {
    return `TechZephyr4.0_${safe(cert.competition)}_${safe(cert.name)}.${ext}`;
}

function triggerDownload(href, filename) {
    const a = document.createElement("a");
    a.href = href;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
}

export async function downloadPNG(canvas, cert) {
    const blob = await new Promise((r) => canvas.toBlob(r, "image/png"));
    const url = URL.createObjectURL(blob);
    triggerDownload(url, certificateFileName(cert, "png"));
    setTimeout(() => URL.revokeObjectURL(url), 2000);
}

export async function downloadPDF(canvas, cert) {
    const { jsPDF } = await import("jspdf");
    const pdf = new jsPDF({ orientation: "landscape", unit: "px", format: [CERT_W, CERT_H], hotfixes: ["px_scaling"] });
    pdf.addImage(canvas.toDataURL("image/jpeg", 0.95), "JPEG", 0, 0, CERT_W, CERT_H);
    pdf.setProperties({
        title: `${cert.competition} — ${cert.name}`,
        subject: `TechZephyr 4.0 certificate ${cert.id}`,
        author: "Science & Technology Council, IIT Bhubaneswar",
    });
    pdf.save(certificateFileName(cert, "pdf"));
}
