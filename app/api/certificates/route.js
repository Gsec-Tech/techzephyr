import { findCertificatesByLogin, rateLimited } from "@/lib/server/certificates";

/* POST /api/certificates   { email, password }   password = roll number */
export async function POST(request) {
    let body;
    try {
        body = await request.json();
    } catch {
        return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
    }

    const email = String(body?.email || "").trim().toLowerCase();
    const password = String(body?.password || "");

    if (!email || !password) {
        return Response.json({ ok: false, error: "Enter your email and roll number." }, { status: 400 });
    }

    const ip = (request.headers.get("x-forwarded-for") || "local").split(",")[0].trim();
    if (rateLimited(`${ip}|${email}`)) {
        return Response.json(
            { ok: false, error: "Too many attempts. Please wait a few minutes and try again." },
            { status: 429 }
        );
    }

    const result = findCertificatesByLogin(email, password);
    if (!result) {
        return Response.json(
            { ok: false, error: "Email or roll number is incorrect. Use the details you registered with." },
            { status: 401 }
        );
    }

    return Response.json(
        { ok: true, name: result.name, certificates: result.certificates },
        { headers: { "Cache-Control": "no-store" } }
    );
}
