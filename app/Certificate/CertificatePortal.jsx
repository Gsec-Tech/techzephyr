"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Award, Eye, EyeOff, Loader2, LogOut, Mail, KeyRound, ShieldCheck, QrCode, AlertTriangle, Inbox } from "lucide-react";
import Silk from "@/components/animated_bg/Silk";
import CertificateView from "@/components/certificate/CertificateView";

const points = [
    { icon: Mail, title: "Registered email", text: "Use the email you registered with." },
    { icon: KeyRound, title: "Roll number as password", text: "Your college roll number from registration." },
    { icon: QrCode, title: "QR verified", text: "Every certificate carries a unique, scannable QR." },
];

export default function CertificatePortal() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [result, setResult] = useState(null); // { name, certificates }

    const submit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);
        try {
            const res = await fetch("/api/certificates", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });
            const json = await res.json().catch(() => ({}));
            if (!res.ok || !json.ok) {
                setError(json.error || "Something went wrong. Please try again.");
            } else {
                setResult({ name: json.name, certificates: json.certificates });
                setPassword("");
            }
        } catch {
            setError("Network error. Check your connection and try again.");
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        setResult(null);
        setEmail("");
        setPassword("");
        setError("");
    };

    return (
        <main className="min-h-screen overflow-hidden bg-black pb-32 text-white">
            {/* =========================================================
                HERO
            ========================================================= */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0">
                    <Silk speed={5} scale={1} color="#262626" noiseIntensity={1.2} rotation={0} />
                </div>
                <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-amber-400/10 blur-[150px]" />
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/10 to-black" />

                <div className="relative z-10 mx-auto max-w-7xl px-4 pb-8 pt-20 sm:px-6 sm:pb-10 lg:pt-28">
                    {!result ? (
                        <div className="grid grid-cols-1 items-center gap-6 sm:gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="min-w-0">
                                <p className="mb-4 pr-14 text-[10px] uppercase tracking-[0.3em] text-amber-300 sm:mb-5 sm:pr-0 sm:text-xs sm:tracking-[0.45em]">TechZephyr 4.0 · IIT Bhubaneswar</p>
                                <h1 className="bg-linear-to-b from-white via-zinc-300 to-zinc-600 bg-clip-text text-[min(2.6rem,10vw)] font-black leading-none tracking-tight text-transparent sm:text-6xl md:text-7xl">
                                    CERTIFICATES
                                </h1>
                                <h2 className="mt-2 text-xl font-semibold sm:mt-3 sm:text-2xl md:text-4xl">
                                    Download yours<span className="text-amber-300">.</span>
                                </h2>
                                <p className="mt-4 max-w-xl text-sm leading-7 text-white/60 sm:mt-6 sm:text-base sm:leading-8">
                                    Sign in with your registered email and roll number to download every
                                    certificate you earned at TechZephyr 4.0 — each one verifiable by QR.
                                </p>

                                <ul className="mt-8 hidden gap-3 sm:grid sm:grid-cols-3">
                                    {points.map(({ icon: Icon, title, text }) => (
                                        <li key={title} className="rounded-lg border border-white/10 bg-white/[0.035] p-3 backdrop-blur-xl">
                                            <Icon size={16} className="text-amber-300" />
                                            <p className="mt-2 text-xs font-bold">{title}</p>
                                            <p className="mt-0.5 text-[11px] leading-4 text-white/45">{text}</p>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* Login card */}
                            <motion.form
                                onSubmit={submit}
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 0.1 }}
                                className="relative min-w-0 overflow-hidden rounded-xl border border-white/10 bg-black/60 p-5 shadow-[0_0_70px_rgba(251,191,36,.07)] backdrop-blur-2xl sm:p-7"
                            >
                                <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-amber-400/10 blur-[90px]" />

                                <div className="relative flex items-center gap-3">
                                    <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-amber-400/20 bg-amber-400/10 text-amber-300">
                                        <Award size={20} />
                                    </span>
                                    <div>
                                        <p className="text-[9px] uppercase tracking-[0.35em] text-white/35">Certificate Portal</p>
                                        <h3 className="text-lg font-bold">Sign in to download</h3>
                                    </div>
                                </div>

                                <label className="relative mt-6 block">
                                    <span className="text-[10px] uppercase tracking-[0.25em] text-white/45">Email</span>
                                    <div className="relative mt-2">
                                        <Mail size={15} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
                                        <input
                                            type="email"
                                            required
                                            autoComplete="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="you@example.com"
                                            className="h-12 w-full rounded-lg border border-white/10 bg-white/[0.04] pl-10 pr-3 text-base text-white sm:text-sm outline-none transition placeholder:text-white/25 focus:border-amber-400"
                                        />
                                    </div>
                                </label>

                                <label className="relative mt-4 block">
                                    <span className="text-[10px] uppercase tracking-[0.25em] text-white/45">Password (Roll number)</span>
                                    <div className="relative mt-2">
                                        <KeyRound size={15} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
                                        <input
                                            type={show ? "text" : "password"}
                                            required
                                            autoComplete="current-password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Your roll number"
                                            className="h-12 w-full rounded-lg border border-white/10 bg-white/[0.04] pl-10 pr-11 text-base text-white sm:text-sm outline-none transition placeholder:text-white/25 focus:border-amber-400"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShow((s) => !s)}
                                            aria-label={show ? "Hide password" : "Show password"}
                                            className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md text-white/40 transition hover:text-amber-300"
                                        >
                                            {show ? <EyeOff size={15} /> : <Eye size={15} />}
                                        </button>
                                    </div>
                                </label>

                                {error && (
                                    <div className="mt-4 flex items-start gap-2 rounded-lg border border-red-400/30 bg-red-400/5 p-3 text-xs leading-5 text-red-300">
                                        <AlertTriangle size={14} className="mt-0.5 shrink-0" />
                                        {error}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-amber-400 text-sm font-bold text-black transition hover:bg-amber-300 hover:shadow-[0_0_30px_rgba(251,191,36,.2)] disabled:opacity-60"
                                >
                                    {loading ? <Loader2 size={16} className="animate-spin" /> : <Award size={16} />}
                                    {loading ? "Checking…" : "Get My Certificates"}
                                </button>

                                <p className="mt-4 text-center text-[11px] leading-5 text-white/35">
                                    Roll number is not case-sensitive; spaces, “/” and “-” are ignored.
                                </p>

                                <ul className="mt-5 grid gap-2 border-t border-white/10 pt-4 sm:hidden">
                                    {points.map(({ icon: Icon, title, text }) => (
                                        <li key={title} className="flex items-start gap-2.5">
                                            <Icon size={14} className="mt-0.5 shrink-0 text-amber-300" />
                                            <p className="text-[11px] leading-4 text-white/45">
                                                <span className="font-semibold text-white/75">{title}.</span> {text}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </motion.form>
                        </div>
                    ) : (
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                                <div>
                                    <p className="flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-emerald-300">
                                        <ShieldCheck size={14} />
                                        Signed in
                                    </p>
                                    <h1 className="mt-3 break-words text-2xl font-black tracking-tight sm:text-3xl md:text-5xl">
                                        Hi, <span className="text-amber-300">{result.name}</span>
                                    </h1>
                                    <p className="mt-2 text-sm text-white/55">
                                        {result.certificates.length
                                            ? `You have ${result.certificates.length} certificate${result.certificates.length > 1 ? "s" : ""} from TechZephyr 4.0.`
                                            : "No certificate has been issued to this account yet."}
                                    </p>
                                </div>
                                <button
                                    onClick={logout}
                                    className="inline-flex w-fit items-center gap-2 rounded-lg border border-white/15 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-white/70 transition hover:border-amber-400 hover:text-amber-300"
                                >
                                    <LogOut size={14} />
                                    Sign out
                                </button>
                            </div>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* =========================================================
                CERTIFICATES
            ========================================================= */}
            {result && (
                <section className="mx-auto max-w-7xl px-4 sm:px-6">
                    {result.certificates.length ? (
                        <div className={`grid grid-cols-1 gap-4 ${result.certificates.length > 1 ? "lg:grid-cols-2" : "mx-auto max-w-4xl"}`}>
                            {result.certificates.map((c) => (
                                <CertificateView key={c.id} cert={c} />
                            ))}
                        </div>
                    ) : (
                        <div className="mx-auto flex max-w-xl flex-col items-center rounded-lg border border-white/10 bg-white/[0.025] p-10 text-center">
                            <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-amber-400/20 bg-amber-400/5 text-amber-300">
                                <Inbox size={20} />
                            </span>
                            <p className="mt-4 font-bold">No certificates found</p>
                            <p className="mt-1 text-sm text-white/45">
                                Our records don&apos;t show a competition for this account. If you believe this is
                                a mistake, contact the TechZephyr team with your registered email.
                            </p>
                        </div>
                    )}
                </section>
            )}
        </main>
    );
}
