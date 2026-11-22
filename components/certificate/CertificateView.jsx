"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Download, FileText, ShieldCheck, Loader2, AlertTriangle } from "lucide-react";
import { renderCertificate, downloadPNG, downloadPDF } from "@/lib/certificateRenderer";

export default function CertificateView({ cert, showActions = true, showVerifyLink = true }) {
    const canvasRef = useRef(null);
    const [state, setState] = useState("loading"); // loading | ready | error
    const [busy, setBusy] = useState("");

    useEffect(() => {
        let alive = true;
        renderCertificate(canvasRef.current, cert)
            .then(() => alive && setState("ready"))
            .catch(() => alive && setState("error"));
        return () => {
            alive = false;
        };
    }, [cert]);

    const run = async (kind) => {
        setBusy(kind);
        try {
            if (kind === "png") await downloadPNG(canvasRef.current, cert);
            else await downloadPDF(canvasRef.current, cert);
        } finally {
            setBusy("");
        }
    };

    return (
        <div className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] backdrop-blur-xl">
            <div className="relative aspect-[2000/1414] w-full bg-white/[0.03]">
                <canvas
                    ref={canvasRef}
                    className={`h-full w-full transition-opacity duration-300 ${state === "ready" ? "opacity-100" : "opacity-0"}`}
                />
                {state === "loading" && (
                    <div className="absolute inset-0 flex items-center justify-center gap-2 text-sm text-white/50">
                        <Loader2 size={16} className="animate-spin" />
                        Generating certificate…
                    </div>
                )}
                {state === "error" && (
                    <div className="absolute inset-0 flex items-center justify-center gap-2 text-sm text-red-300">
                        <AlertTriangle size={16} />
                        Could not generate the certificate. Please refresh.
                    </div>
                )}
            </div>

            {showActions && (
                <div className="flex flex-col gap-3 border-t border-white/10 p-3 sm:p-4">
                    <div className="min-w-0">
                        <p className="text-[9px] uppercase tracking-[0.3em] text-amber-300">{cert.event}</p>
                        <h3 className="truncate text-base font-bold text-white">{cert.competition}</h3>
                        <p className="font-mono text-[11px] text-white/40">ID · {cert.id}</p>
                    </div>
                    <div className="grid grid-cols-3 gap-2 sm:flex sm:flex-wrap">
                        <button
                            onClick={() => run("pdf")}
                            disabled={state !== "ready" || !!busy}
                            className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-amber-400 px-3 py-2.5 sm:gap-2 sm:px-4 text-xs font-bold text-black transition hover:bg-amber-300 disabled:opacity-50"
                        >
                            {busy === "pdf" ? <Loader2 size={14} className="animate-spin" /> : <FileText size={14} />}
                            <span className="sm:hidden">PDF</span>
                            <span className="hidden sm:inline">Download PDF</span>
                        </button>
                        <button
                            onClick={() => run("png")}
                            disabled={state !== "ready" || !!busy}
                            className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-white/15 px-3 py-2.5 sm:gap-2 sm:px-4 text-xs font-semibold text-white/80 transition hover:border-amber-400 hover:text-amber-300 disabled:opacity-50"
                        >
                            {busy === "png" ? <Loader2 size={14} className="animate-spin" /> : <Download size={14} />}
                            PNG
                        </button>
                        {showVerifyLink && (
                            <Link
                                href={`/verify/${cert.id}`}
                                target="_blank"
                                className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-emerald-400/30 px-3 py-2.5 sm:gap-2 sm:px-4 text-xs font-semibold text-emerald-300 transition hover:bg-emerald-400/10"
                            >
                                <ShieldCheck size={14} />
                                Verify
                            </Link>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
