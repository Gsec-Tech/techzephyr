import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, ShieldX, BadgeCheck, Award, CalendarDays, Building2, Hash, User } from "lucide-react";
import Silk from "@/components/animated_bg/Silk";
import CertificateView from "@/components/certificate/CertificateView";
import { findCertificateById } from "@/lib/server/certificates";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
    const { id } = await params;
    const cert = findCertificateById(id);
    return {
        title: cert ? `Verified · ${cert.name} · TechZephyr 4.0` : "Certificate not found · TechZephyr 4.0",
        robots: { index: false, follow: false },
    };
}

const IITBBS_LOGO = "https://upload.wikimedia.org/wikipedia/en/8/82/Indian_Institute_of_Technology_Bhubaneswar_Logo.svg";

function Logos() {
    return (
        <div className="flex items-center justify-center gap-3 sm:gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={IITBBS_LOGO} alt="IIT Bhubaneswar" className="h-11 w-11 rounded-lg bg-white object-contain p-1 sm:h-14 sm:w-14 sm:p-1.5" />
            <span className="h-8 w-px bg-white/15" />
            <span className="relative h-11 w-11 overflow-hidden rounded-lg bg-white sm:h-14 sm:w-14">
                <Image src="/stc.jpg" alt="Science & Technology Council" fill sizes="56px" className="object-contain" />
            </span>
            <span className="h-8 w-px bg-white/15" />
            <span className="relative h-11 w-11 overflow-hidden rounded-lg sm:h-14 sm:w-14">
                <Image src="/logo.jpeg" alt="TechZephyr 4.0" fill sizes="56px" className="object-cover" />
            </span>
        </div>
    );
}

function Row({ icon: Icon, label, value, mono = false, accent = false }) {
    return (
        <div className="flex items-start gap-3 py-3">
            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-amber-300">
                <Icon size={15} />
            </span>
            <div className="min-w-0">
                <p className="text-[9px] uppercase tracking-[0.3em] text-white/35">{label}</p>
                <p className={`mt-0.5 break-words text-sm font-semibold sm:text-base ${mono ? "font-mono" : ""} ${accent ? "text-amber-300" : "text-white"}`}>
                    {value}
                </p>
            </div>
        </div>
    );
}

export default async function VerifyPage({ params }) {
    const { id } = await params;
    const cert = findCertificateById(decodeURIComponent(id));

    return (
        <main className="min-h-screen overflow-hidden bg-black pb-32 text-white">
            <section className="relative overflow-hidden">
                <div className="absolute inset-0">
                    <Silk speed={5} scale={1} color="#262626" noiseIntensity={1.2} rotation={0} />
                </div>
                <div
                    className={`absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full blur-[150px] ${
                        cert ? "bg-emerald-400/15" : "bg-red-500/15"
                    }`}
                />
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/30 to-black" />

                <div className="relative z-10 mx-auto max-w-5xl px-4 pb-8 pt-20 sm:px-6">
                    <Logos />

                    {cert ? (
                        <>
                            {/* ---------- VERIFIED HEADER ---------- */}
                            <div className="mt-8 flex flex-col items-center text-center">
                                <span className="relative flex h-20 w-20 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-400/10 shadow-[0_0_60px_rgba(52,211,153,.35)]">
                                    <span className="absolute inset-0 animate-ping rounded-full border border-emerald-400/30 [animation-duration:2.5s]" />
                                    <ShieldCheck size={40} className="text-emerald-300" strokeWidth={1.8} />
                                </span>
                                <span className="mt-5 inline-flex items-center gap-2 rounded-md border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-300">
                                    <BadgeCheck size={13} />
                                    Verified Authentic
                                </span>
                                <h1 className="mt-4 bg-linear-to-b from-white via-zinc-200 to-zinc-400 bg-clip-text text-[1.9rem] font-black leading-tight text-transparent sm:text-5xl">
                                    Official Finalist Certificate
                                </h1>
                                <p className="mt-3 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
                                    This certificate is genuine and was issued by the Science &amp; Technology
                                    Council, IIT Bhubaneswar, for <span className="text-white">TechZephyr 4.0</span>.
                                </p>
                            </div>

                            {/* ---------- DETAILS ---------- */}
                            <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-[0.9fr_1.1fr] [&>*]:min-w-0">
                                <div className="rounded-xl border border-emerald-400/20 bg-black/50 p-4 backdrop-blur-2xl sm:p-5">
                                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                                        <p className="text-[10px] uppercase tracking-[0.35em] text-white/40">Certificate Details</p>
                                        <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-300">
                                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,.9)]" />
                                            Valid
                                        </span>
                                    </div>
                                    <div className="divide-y divide-white/[0.06]">
                                        <Row icon={User} label="Awarded to" value={cert.name} />
                                        <Row icon={Award} label="Competition" value={cert.competition} accent />
                                        <Row icon={CalendarDays} label="Event" value="TechZephyr 4.0 · IIT Bhubaneswar" />
                                        <Row
                                            icon={Building2}
                                            label="Issued by"
                                            value="Science & Technology Council, Students' Gymkhana, IIT Bhubaneswar"
                                        />
                                        <Row icon={Hash} label="Certificate ID" value={cert.id} mono />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-3">
                                    <CertificateView cert={cert} showActions={false} showVerifyLink={false} />
                                    <p className="text-center text-[11px] leading-5 text-white/35">
                                        Compare the name, competition and ID above with the certificate shown to you.
                                    </p>
                                </div>
                            </div>
                        </>
                    ) : (
                        /* ---------- NOT FOUND ---------- */
                        <div className="mx-auto mt-10 flex max-w-xl flex-col items-center text-center">
                            <span className="flex h-20 w-20 items-center justify-center rounded-full border border-red-400/40 bg-red-500/10 shadow-[0_0_60px_rgba(239,68,68,.3)]">
                                <ShieldX size={40} className="text-red-300" strokeWidth={1.8} />
                            </span>
                            <span className="mt-5 rounded-md border border-red-400/30 bg-red-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.3em] text-red-300">
                                Not Verified
                            </span>
                            <h1 className="mt-4 text-3xl font-black sm:text-4xl">Certificate not found</h1>
                            <p className="mt-3 text-sm leading-7 text-white/55">
                                No TechZephyr 4.0 certificate exists with the ID{" "}
                                <span className="break-all font-mono text-white/80">{decodeURIComponent(id)}</span>. This certificate
                                may be altered or invalid. Please contact the TechZephyr team.
                            </p>
                            <Link
                                href="/Certificate"
                                className="mt-6 rounded-lg bg-amber-400 px-6 py-3 text-sm font-bold text-black transition hover:bg-amber-300"
                            >
                                Go to Certificate Portal
                            </Link>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}
