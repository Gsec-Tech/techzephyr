"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    Trophy,
    Clock,
    Users,
    Gauge,
    ExternalLink,
} from "lucide-react";

import Silk from "@/components/animated_bg/Silk";
import { competitions } from "@/data/competitions";
import { useTheme } from "@/components/ThemeProvider";

function formatMarkdownText(text, isDark = false) {
    if (!text || typeof text !== "string") return text;
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
            const content = part.slice(2, -2);
            return (
                <strong
                    key={i}
                    className={`font-bold transition-colors ${
                        isDark ? "text-amber-300 font-semibold" : "text-amber-700 font-bold"
                    }`}
                >
                    {content}
                </strong>
            );
        }
        return part;
    });
}

export default function CompetitionDetails() {
    const { slug } = useParams();
    const { resolvedTheme } = useTheme();
    const isDark = resolvedTheme === "dark";

    const competition = competitions.find(
        (item) => item.slug === slug
    );

    const [order, setOrder] = useState([0, 1, 2, 3]);
    const [flashKey, setFlashKey] = useState(0);

    const cycleStack = () => {
        setOrder((prev) => [...prev.slice(1), prev[0]]);
        setFlashKey((key) => key + 1);
    };

    const stats = [
        {
            title: "Prize Pool",
            value: competition?.prize,
            icon: Trophy,
            color: "#fde68a",
            rotate: "-rotate-3",
            baseRotate: -3,
        },
        {
            title: "Duration",
            value: competition?.duration,
            icon: Clock,
            color: "#fca5a5",
            rotate: "rotate-2",
            baseRotate: 2,
        },
        {
            title: "Team Size",
            value: competition?.teamSize,
            icon: Users,
            color: "#86efac",
            rotate: "-rotate-2",
            baseRotate: -2,
        },
        {
            title: "Difficulty",
            value: competition?.difficulty,
            icon: Gauge,
            color: "#93c5fd",
            rotate: "rotate-3",
            baseRotate: 3,
        },
    ];

    return (
        <main className="min-h-screen overflow-hidden bg-background text-foreground transition-colors duration-300">
            {/* =========================================================
                HERO
            ========================================================= */}

            <section className="relative min-h-[85vh] overflow-hidden">

                <div className="absolute inset-0">
                    <Silk
                        speed={3}
                        scale={1.1}
                        noiseIntensity={0.2}
                        rotation={0}
                    />
                </div>

                <div className="absolute right-0 top-20 h-125 w-125 rounded-full bg-amber-400/10 blur-[160px]" />

                <div className="absolute inset-0 bg-linear-to-b from-transparent via-background/20 to-background" />

                <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-20">

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 50,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.8,
                        }}
                    >

                        <div className="flex flex-wrap items-center gap-3">

                            <p className="uppercase tracking-[0.5em] text-xs font-semibold text-amber-600 dark:text-amber-300">
                                {competition.tag}
                            </p>

                            <span className="h-px w-12 bg-amber-400/40" />

                            <span className={`text-[10px] uppercase tracking-[0.3em] font-medium ${
                                isDark ? "text-white/30" : "text-[#7A2E24]/60"
                            }`}>
                                Tech Zephyr 4.0
                            </span>

                        </div>

                        <h1 className={`mt-6 text-5xl font-black leading-none bg-clip-text text-transparent md:text-7xl lg:text-8xl ${
                            isDark 
                                ? "bg-linear-to-b from-white via-zinc-300 to-zinc-700" 
                                : "bg-linear-to-b from-[#2A1D17] via-[#5C2B1D] to-[#8B3A2E]"
                        }`}>
                            {competition.title}
                        </h1>

                        <p className={`mt-8 max-w-3xl text-lg leading-9 ${
                            isDark ? "text-white/60" : "text-[#4A3328]/85 font-medium"
                        }`}>
                            {formatMarkdownText(competition.description, isDark)}
                        </p>

                        {/* Basic event metadata */}

                        <div className={`mt-10 flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase tracking-[0.2em] font-semibold ${
                            isDark ? "text-white/35" : "text-[#4A3328]/70"
                        }`}>

                            <span>
                                {competition.domain}
                            </span>

                            <span>
                                {competition.mode}
                            </span>

                            <span>
                                {competition.venue}
                            </span>

                            <span>
                                Deadline — {competition.registrationDeadline}
                            </span>

                        </div>

                    </motion.div>


                    {/* =====================================================
                        FLAPPY PAPER CARDS — ORIGINAL DESIGN PRESERVED
                    ===================================================== */}

                    <div className="mt-24 hidden gap-x-10 gap-y-14 md:grid md:grid-cols-2 lg:grid-cols-4">

                        {stats.map((item, index) => {

                            const Icon = item.icon;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{
                                        opacity: 0,
                                        y: 30,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                    whileHover={{
                                        rotate: 0,
                                        scale: 1.06,
                                        y: -8,
                                    }}
                                    transition={{
                                        duration: 0.45,
                                        delay: index * 0.1,
                                        ease: "easeOut",
                                    }}
                                    className={`relative ${item.rotate} rounded-sm p-6 pt-9 shadow-[0_14px_30px_rgba(0,0,0,0.55)]`}
                                    style={{
                                        backgroundColor: item.color,
                                    }}
                                >

                                    <div className="absolute -top-3 left-1/2 h-5 w-16 -translate-x-1/2 rotate-[-4deg] border border-white/40 bg-white/50 shadow-sm backdrop-blur-sm" />

                                    <div
                                        className="absolute bottom-0 right-0 h-0 w-0"
                                        style={{
                                            borderBottom:
                                                "24px solid rgba(0,0,0,0.15)",
                                            borderLeft:
                                                "24px solid transparent",
                                        }}
                                    />

                                    <Icon
                                        className="text-black/50"
                                        size={22}
                                        strokeWidth={2.2}
                                    />

                                    <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-black/50">
                                        {item.title}
                                    </p>

                                    <h3 className="mt-2 text-2xl font-black text-black/80">
                                        {item.value}
                                    </h3>

                                </motion.div>
                            );
                        })}

                    </div>


                    {/* =====================================================
                        MOBILE FLAPPY STACK
                    ===================================================== */}

                    <div className="mt-20 flex flex-col items-center md:hidden">

                        <motion.div
                            onClick={cycleStack}
                            animate={{
                                rotate: [0, -1.2, 0, 1, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="relative h-52 w-full max-w-52.5 cursor-pointer select-none"
                        >

                            {order.map((statIndex, position) => {

                                const item = stats[statIndex];

                                const Icon = item.icon;

                                const isTop = position === 0;

                                const offsetX = position * 16;
                                const offsetY = position * 14;

                                const fanRotate =
                                    item.baseRotate + position * 6;

                                return (
                                    <motion.div
                                        key={statIndex}
                                        animate={{
                                            x: offsetX,
                                            y: offsetY,
                                            rotate: fanRotate,
                                            scale:
                                                1 -
                                                position * 0.06,
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 260,
                                            damping: 24,
                                            mass: 0.9,
                                        }}
                                        className="absolute inset-0 rounded-sm p-6 pt-9 shadow-[0_14px_30px_rgba(0,0,0,0.55)]"
                                        style={{
                                            backgroundColor:
                                                item.color,
                                            zIndex:
                                                stats.length -
                                                position,
                                        }}
                                    >

                                        <div className="absolute -top-3 left-1/2 h-5 w-16 -translate-x-1/2 rotate-[-4deg] border border-white/40 bg-white/50 shadow-sm backdrop-blur-sm" />

                                        <div
                                            className="absolute bottom-0 right-0 h-0 w-0"
                                            style={{
                                                borderBottom:
                                                    "24px solid rgba(0,0,0,0.15)",
                                                borderLeft:
                                                    "24px solid transparent",
                                            }}
                                        />

                                        {isTop ? (
                                            <motion.div
                                                key={`flash-${statIndex}-${flashKey}`}
                                                initial={{
                                                    opacity: 0,
                                                    scale: 0.85,
                                                    y: 6,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    scale: 1,
                                                    y: 0,
                                                }}
                                                transition={{
                                                    duration: 0.35,
                                                    ease: [
                                                        0.22,
                                                        1,
                                                        0.36,
                                                        1,
                                                    ],
                                                }}
                                            >

                                                <Icon
                                                    className="text-black/50"
                                                    size={22}
                                                    strokeWidth={2.2}
                                                />

                                                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-black/50">
                                                    {item.title}
                                                </p>

                                                <h3 className="mt-2 text-2xl font-black text-black/80">
                                                    {item.value}
                                                </h3>

                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                animate={{
                                                    opacity:
                                                        1 -
                                                        position *
                                                        0.15,
                                                }}
                                                transition={{
                                                    duration: 0.3,
                                                }}
                                            >
                                                <Icon
                                                    className="text-black/40"
                                                    size={20}
                                                    strokeWidth={2.2}
                                                />
                                            </motion.div>
                                        )}

                                    </motion.div>
                                );
                            })}

                        </motion.div>

                        <div className="mt-8 flex gap-2">

                            {stats.map((_, i) => (
                                 <div
                                     key={i}
                                     className={`h-1.5 rounded-full transition-all duration-300 ${order[0] === i
                                         ? "w-6 bg-amber-300"
                                         : isDark ? "w-1.5 bg-white/25" : "w-1.5 bg-[#7A2E24]/25"
                                         }`}
                                 />
                            ))}

                        </div>

                        <p className={`mt-4 text-[10px] uppercase tracking-[0.3em] font-medium ${
                            isDark ? "text-white/40" : "text-[#7A2E24]/60"
                        }`}>
                            Tap the stack to flip through
                        </p>

                    </div>

                </div>
            </section>


            {/* =========================================================
                REGISTRATION
            ========================================================= */}

            <section className="mx-auto max-w-7xl px-6">

                <div className={`rounded-3xl border p-10 md:flex md:items-center md:justify-between transition-colors duration-300 ${
                    isDark 
                        ? "border-amber-400/20 bg-amber-400/5 text-white" 
                        : "border-[#7A2E24]/20 bg-amber-500/10 text-[#2A1D17] shadow-xl shadow-amber-950/5"
                }`}>

                    <div>

                        <p className="uppercase tracking-[0.4em] text-xs font-semibold text-amber-600 dark:text-amber-300">
                            Registration
                        </p>

                        <h2 className="mt-4 text-4xl font-black">
                            Ready to participate?
                        </h2>

                        <p className={`mt-4 max-w-2xl leading-7 ${
                            isDark ? "text-white/60" : "text-[#4A3328]/85 font-medium"
                        }`}>
                            {competition.buttonText === "Register on Unstop" || competition.registrationUrl?.includes("unstop.com")
                                ? `Register through the official Unstop listing for ${competition.title}. All registration, eligibility and submission instructions are handled through the official event page.`
                                : `Confirm your registration slot for ${competition.title}. Complete your submission through the official registration form.`}
                        </p>

                        <div className={`mt-5 flex flex-wrap gap-5 text-xs uppercase tracking-[0.2em] font-semibold ${
                            isDark ? "text-white/35" : "text-[#4A3328]/70"
                        }`}>

                            <span>
                                Venue — {competition.venue}
                            </span>

                            <span>
                                Deadline — {competition.registrationDeadline}
                            </span>

                        </div>

                    </div>

                    <div className="mt-8 flex flex-col items-center md:items-end gap-2.5 self-center md:mt-0">
                        <a
                            href={competition.registrationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex shrink-0 items-center gap-3 rounded-xl bg-amber-400 px-8 py-4 font-bold text-black transition hover:bg-amber-300 hover:shadow-[0_0_30px_rgba(251,191,36,.2)]"
                        >
                            {competition.buttonText || (competition.registrationUrl?.includes("unstop.com") ? "Register on Unstop" : "Confirm Your Slot")}

                            <ExternalLink size={17} />
                        </a>

                        {competition.buttonText === "Confirm Your Slot" && (
                            <p className="text-[11px] font-mono font-semibold text-amber-600 dark:text-amber-300 flex items-center gap-1.5 text-center md:text-right">
                                <span>⚠️</span>
                                <span>Only for participants shortlisted after Round 1</span>
                            </p>
                        )}
                    </div>

                </div>

            </section>


            {/* =========================================================
                HIGHLIGHTS
            ========================================================= */}

            <section className="mx-auto mt-20 max-w-7xl px-6">

                {/* Heading */}
                <div>
                    <p className="text-[10px] uppercase tracking-[0.4em] font-semibold text-amber-600 dark:text-amber-300">
                        The Challenge
                    </p>

                    <h2 className={`mt-2 text-3xl font-black tracking-tight md:text-4xl ${
                        isDark ? "text-white" : "text-[#2A1D17]"
                    }`}>
                        Highlights
                    </h2>
                </div>


                {/* Single Large Container */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 25,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.15,
                    }}
                    transition={{
                        duration: 0.6,
                        ease: "easeOut",
                    }}
                    className={`group relative mt-8 overflow-hidden rounded-3xl border backdrop-blur-xl transition-colors duration-300 ${
                        isDark 
                            ? "border-white/10 bg-white/[0.025]" 
                            : "border-[#7A2E24]/15 bg-white/70 shadow-xl shadow-amber-950/5"
                    }`}
                >

                    {/* Ambient Glow */}
                    <div className="pointer-events-none absolute -right-40 -top-40 h-80 w-80 rounded-full bg-amber-400/10 blur-[110px]" />

                    <div className="pointer-events-none absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-orange-400/5 blur-[110px]" />

                    <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-amber-400/[0.035] via-transparent to-transparent" />


                    {/* Header */}
                    <div className={`relative flex flex-col gap-3 border-b px-6 py-5 sm:px-8 md:flex-row md:items-center md:justify-between ${
                        isDark ? "border-white/10" : "border-[#7A2E24]/10"
                    }`}>

                        <div>
                            <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-amber-600 dark:text-amber-300">
                                Key Highlights
                            </p>

                            <h3 className={`mt-1.5 text-lg font-bold tracking-tight md:text-xl ${
                                isDark ? "text-white" : "text-[#2A1D17]"
                            }`}>
                                What Makes This Competition Different
                            </h3>
                        </div>

                        <div className={`w-fit rounded-full border px-3 py-1.5 ${
                            isDark ? "border-white/10 bg-white/[0.035]" : "border-[#7A2E24]/15 bg-amber-500/10"
                        }`}>
                            <span className={`font-mono text-[8px] uppercase tracking-[0.25em] font-semibold ${
                                isDark ? "text-white/30" : "text-[#7A2E24]/80"
                            }`}>
                                {competition.highlights.length} Key Points
                            </span>
                        </div>

                    </div>


                    {/* Highlights */}
                    <div className="relative">

                        {competition.highlights.map((item, index) => (

                            <motion.div
                                key={index}
                                initial={{
                                    opacity: 0,
                                    x: -12,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    duration: 0.35,
                                    delay: index * 0.06,
                                    ease: "easeOut",
                                }}
                                className={`group/highlight relative border-b last:border-b-0 ${
                                    isDark ? "border-white/10" : "border-[#7A2E24]/10"
                                }`}
                            >

                                <div className="flex items-center gap-4 px-6 py-4 sm:px-8 md:py-5">

                                    {/* Number */}
                                    <div className="flex shrink-0 items-center gap-3">

                                        <span className={`font-mono text-[10px] tracking-[0.2em] font-bold ${
                                            isDark ? "text-amber-300/80" : "text-[#7A2E24]"
                                        }`}>
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        <div className={`h-px w-6 transition-all duration-300 group-hover/highlight:w-10 ${
                                            isDark ? "bg-amber-400/20 group-hover/highlight:bg-amber-400/50" : "bg-[#7A2E24]/20 group-hover/highlight:bg-[#7A2E24]/60"
                                        }`} />

                                    </div>


                                    {/* Highlight */}
                                    <h3 className={`flex-1 text-sm font-semibold leading-5 transition-colors duration-300 sm:text-base ${
                                        isDark 
                                            ? "text-white/65 group-hover/highlight:text-white" 
                                            : "text-[#3A2A24] group-hover/highlight:text-[#7A2E24]"
                                    }`}>
                                        {item}
                                    </h3>


                                    {/* Index */}
                                    <span className={`hidden text-[8px] uppercase tracking-[0.25em] font-semibold sm:block ${
                                        isDark ? "text-white/20" : "text-[#7A2E24]/40"
                                    }`}>
                                        Highlight
                                    </span>

                                </div>


                                {/* Hover Line */}
                                <div className={`absolute bottom-0 left-0 h-px w-0 transition-all duration-500 group-hover/highlight:w-full ${
                                    isDark 
                                        ? "bg-linear-to-r from-amber-400/60 to-transparent" 
                                        : "bg-linear-to-r from-[#7A2E24]/60 to-transparent"
                                }`} />

                            </motion.div>

                        ))}

                    </div>


                    {/* Footer */}
                    <div className={`relative flex items-center justify-between px-6 py-3.5 sm:px-8 ${
                        isDark ? "bg-black/20" : "bg-[#7A2E24]/5"
                    }`}>

                        <span className={`text-[8px] uppercase tracking-[0.25em] font-semibold ${
                            isDark ? "text-white/20" : "text-[#7A2E24]/60"
                        }`}>
                            {competition.title}
                        </span>

                        <span className={`text-[8px] uppercase tracking-[0.25em] font-semibold ${
                            isDark ? "text-amber-300/40" : "text-[#7A2E24]/80"
                        }`}>
                            Key Features
                        </span>

                    </div>

                </motion.div>

            </section>

            {/* =========================================================
                WHAT TO EXPECT
            ========================================================= */}

            <section className="mx-auto mt-20 max-w-7xl px-6">

                {/* Heading */}

                <div className="text-center">

                    <p className="text-[10px] uppercase tracking-[0.4em] font-semibold text-amber-600 dark:text-amber-300">
                        Experience
                    </p>

                    <h2 className={`mt-2 text-3xl font-black tracking-tight md:text-4xl ${
                        isDark ? "text-white" : "text-[#2A1D17]"
                    }`}>
                        What To Expect
                    </h2>

                </div>


                {/* Single Large Container */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 25,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.15,
                    }}
                    transition={{
                        duration: 0.6,
                        ease: "easeOut",
                    }}
                    className={`group relative mt-12 overflow-hidden rounded-3xl border backdrop-blur-xl transition-colors duration-300 ${
                        isDark 
                            ? "border-white/10 bg-white/[0.025]" 
                            : "border-[#7A2E24]/15 bg-white/70 shadow-xl shadow-amber-950/5"
                    }`}
                >

                    {/* Ambient background */}

                    <div className="pointer-events-none absolute -right-40 -top-40 h-80 w-80 rounded-full bg-amber-400/10 blur-[110px]" />

                    <div className="pointer-events-none absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-orange-400/5 blur-[110px]" />

                    <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-amber-400/[0.035] via-transparent to-transparent" />


                    {/* Header */}

                    <div className={`relative flex flex-col gap-3 border-b px-6 py-5 sm:px-8 md:flex-row md:items-center md:justify-between ${
                        isDark ? "border-white/10" : "border-[#7A2E24]/10"
                    }`}>

                        <div>

                            <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-amber-600 dark:text-amber-300">
                                Competition Experience
                            </p>

                            <h3 className={`mt-1.5 text-xl font-bold tracking-tight md:text-2xl ${
                                isDark ? "text-white" : "text-[#2A1D17]"
                            }`}>
                                Built To Challenge You
                            </h3>

                        </div>


                        <div className={`w-fit rounded-full border px-3 py-1.5 ${
                            isDark ? "border-white/10 bg-white/[0.035]" : "border-[#7A2E24]/15 bg-amber-500/10"
                        }`}>

                            <span className={`font-mono text-[8px] uppercase tracking-[0.25em] font-semibold ${
                                isDark ? "text-white/30" : "text-[#7A2E24]/80"
                            }`}>
                                {competition.details.length} Experiences
                            </span>

                        </div>

                    </div>


                    {/* Details */}

                    <div className="relative">

                        {competition.details.map((item, index) => (

                            <motion.div
                                key={index}
                                initial={{
                                    opacity: 0,
                                    x: -12,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    duration: 0.35,
                                    delay: index * 0.06,
                                    ease: "easeOut",
                                }}
                                className={`group/item relative border-b last:border-b-0 ${
                                    isDark ? "border-white/10" : "border-[#7A2E24]/10"
                                }`}
                            >

                                <div className="flex flex-col gap-3 px-6 py-5 sm:px-8 md:flex-row md:items-center md:py-6">

                                    {/* Number */}

                                    <div className="flex shrink-0 items-center gap-3 md:w-28">

                                        <span className={`font-mono text-[10px] tracking-[0.25em] font-bold ${
                                            isDark ? "text-amber-300/70" : "text-[#7A2E24]"
                                        }`}>
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        <div className={`h-px w-8 transition-all duration-300 group-hover/item:w-12 ${
                                            isDark ? "bg-amber-400/20 group-hover/item:bg-amber-400/50" : "bg-[#7A2E24]/20 group-hover/item:bg-[#7A2E24]/60"
                                        }`} />

                                    </div>


                                    {/* Main text */}

                                    <div className="flex-1">

                                        <p className={`text-sm font-semibold leading-6 transition-colors duration-300 md:text-base ${
                                            isDark 
                                                ? "text-white/70 group-hover/item:text-white" 
                                                : "text-[#3A2A24] group-hover/item:text-[#7A2E24]"
                                        }`}>
                                            {item}
                                        </p>

                                    </div>


                                    {/* Stage label */}

                                    <div className="hidden shrink-0 md:block">

                                        <span className={`rounded-full border px-3 py-1.5 text-[8px] uppercase tracking-[0.25em] font-semibold transition-all duration-300 ${
                                            isDark 
                                                ? "border-white/10 bg-white/[0.025] text-white/25 group-hover/item:border-amber-400/20 group-hover/item:bg-amber-400/5 group-hover/item:text-amber-300/70" 
                                                : "border-[#7A2E24]/15 bg-amber-500/10 text-[#7A2E24]/80 group-hover/item:border-[#7A2E24]/30 group-hover/item:bg-[#7A2E24]/10 group-hover/item:text-[#7A2E24]"
                                        }`}>
                                            Stage {index + 1}
                                        </span>

                                    </div>

                                </div>


                                {/* Hover line */}

                                <div className={`absolute bottom-0 left-0 h-px w-0 transition-all duration-500 group-hover/item:w-full ${
                                    isDark 
                                        ? "bg-linear-to-r from-amber-400/60 to-transparent" 
                                        : "bg-linear-to-r from-[#7A2E24]/60 to-transparent"
                                }`} />

                            </motion.div>

                        ))}

                    </div>


                    {/* Footer */}

                    <div className={`relative flex flex-col gap-2 px-6 py-4 sm:px-8 md:flex-row md:items-center md:justify-between ${
                        isDark ? "bg-black/20" : "bg-[#7A2E24]/5"
                    }`}>

                        <p className={`text-[9px] uppercase tracking-[0.25em] font-semibold ${
                            isDark ? "text-white/20" : "text-[#7A2E24]/60"
                        }`}>
                            {competition.title}
                        </p>

                        <p className={`text-[9px] uppercase tracking-[0.25em] font-semibold ${
                            isDark ? "text-amber-300/45" : "text-[#7A2E24]/80"
                        }`}>
                            Challenge · Build · Compete
                        </p>

                    </div>

                </motion.div>

            </section>

            {/* =========================================================
                JUDGING CRITERIA
            ========================================================= */}
            {competition.judgingCriteria?.length > 0 && (
                <section className="mx-auto mt-20 max-w-7xl px-6">

                    {/* UNIFIED EVALUATION CARD */}
                    <div className={`overflow-hidden rounded-3xl border backdrop-blur-xl transition-colors duration-300 ${
                        isDark 
                            ? "border-white/10 bg-white/[0.025]" 
                            : "border-[#7A2E24]/15 bg-white/70 shadow-xl shadow-amber-950/5"
                    }`}>

                        {/* HEADER */}
                        <div className={`border-b px-6 py-5 md:px-8 ${
                            isDark ? "border-white/10" : "border-[#7A2E24]/10"
                        }`}>

                            <p className="text-[9px] uppercase tracking-[0.4em] font-semibold text-amber-600 dark:text-amber-300">
                                Evaluation
                            </p>

                            <h2 className={`mt-1.5 text-2xl font-black tracking-tight md:text-3xl ${
                                isDark ? "text-white" : "text-[#2A1D17]"
                            }`}>
                                How You Will Be Judged
                            </h2>

                        </div>


                        {/* CRITERIA */}
                        <div className={`divide-y ${
                            isDark ? "divide-white/[0.07]" : "divide-[#7A2E24]/10"
                        }`}>

                            {competition.judgingCriteria.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{
                                        opacity: 0,
                                        x: -12,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        x: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                        margin: "-50px",
                                    }}
                                    transition={{
                                        duration: 0.35,
                                        delay: index * 0.05,
                                        ease: "easeOut",
                                    }}
                                    className={`group grid gap-3 px-6 py-4 transition-colors md:grid-cols-[55px_180px_100px_1fr] md:items-center md:px-8 ${
                                        isDark ? "hover:bg-white/[0.025]" : "hover:bg-[#7A2E24]/5"
                                    }`}
                                >

                                    {/* NUMBER */}
                                    <span className={`font-mono text-[10px] font-semibold tracking-wider ${
                                        isDark ? "text-amber-300/80" : "text-[#7A2E24]"
                                    }`}>
                                        {String(index + 1).padStart(2, "0")}
                                    </span>


                                    {/* TITLE */}
                                    <h3 className={`text-sm font-bold ${
                                        isDark ? "text-white/85" : "text-[#2A1D17]"
                                    }`}>
                                        {item.title}
                                    </h3>


                                    {/* VALUE */}
                                    <span className={`text-[10px] font-bold uppercase tracking-[0.15em] ${
                                        isDark ? "text-white/30" : "text-[#7A2E24]/70"
                                    }`}>
                                        {item.value}
                                    </span>


                                    {/* DESCRIPTION */}
                                    <p className={`text-xs leading-5 transition-colors ${
                                        isDark 
                                            ? "text-white/40 group-hover:text-white/55" 
                                            : "text-[#4A3328]/85 font-medium group-hover:text-[#2A1D17]"
                                    }`}>
                                        {item.description}
                                    </p>

                                </motion.div>
                            ))}

                        </div>


                        {/* BOTTOM ACCENT */}
                        <div className={`h-px w-full ${
                            isDark 
                                ? "bg-linear-to-r from-transparent via-amber-400/25 to-transparent" 
                                : "bg-linear-to-r from-transparent via-[#7A2E24]/20 to-transparent"
                        }`} />

                    </div>

                </section>
            )}

            {/* =========================================================
                TIMELINE
            ========================================================= */}

            <section className="mx-auto mt-24 max-w-7xl px-5 pb-6 sm:px-6 md:mt-32 md:pb-8">

                {/* Heading */}
                <div className="text-center">

                    <p className="text-xs uppercase tracking-[0.35em] font-semibold text-amber-600 dark:text-amber-300 sm:tracking-[0.45em]">
                        Schedule
                    </p>

                    <h2 className={`mt-3 text-3xl font-black sm:text-4xl md:mt-4 md:text-5xl ${
                        isDark ? "text-white" : "text-[#2A1D17]"
                    }`}>
                        Competition Timeline
                    </h2>

                </div>

                {/* Timeline */}
                <div className="relative mt-12 sm:mt-16 md:mt-24">

                    {/* Desktop horizontal line */}
                    <div className={`absolute left-0 right-0 top-2.5 hidden h-px md:block ${
                        isDark 
                            ? "bg-linear-to-r from-transparent via-white/20 to-transparent" 
                            : "bg-linear-to-r from-transparent via-[#7A2E24]/20 to-transparent"
                    }`} />

                    {/* Mobile vertical line */}
                    <div className={`absolute bottom-0 left-[9px] top-0 w-px md:hidden ${
                        isDark 
                            ? "bg-linear-to-b from-amber-400/40 via-white/15 to-transparent" 
                            : "bg-linear-to-b from-[#7A2E24]/50 via-[#7A2E24]/15 to-transparent"
                    }`} />

                    <div className="grid gap-6 md:grid-cols-4 md:gap-14">

                        {competition.timeline.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{
                                    opacity: 0,
                                    y: 20,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.2,
                                }}
                                transition={{
                                    duration: 0.4,
                                    delay: index * 0.08,
                                }}
                                className="relative flex items-center md:block"
                            >

                                {/* Timeline dot */}
                                <div className="relative z-10 flex shrink-0 justify-center">

                                    <div className="h-5 w-5 rounded-full bg-amber-400 shadow-[0_0_18px_rgba(251,191,36,.7)] md:h-5 md:w-5" />

                                    <motion.div
                                        animate={{
                                            scale: [1, 1.7, 1],
                                            opacity: [0.6, 0, 0.6],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: index * 0.2,
                                        }}
                                        className="absolute inset-0 rounded-full border border-amber-300"
                                    />

                                </div>

                                {/* Content */}
                                <div className="ml-5 flex min-w-0 flex-1 items-center justify-between gap-4 md:ml-0 md:mt-7 md:block md:text-center">

                                    <div className="min-w-0">

                                        <h3 className={`text-base font-bold leading-tight sm:text-lg md:text-xl ${
                                            isDark ? "text-white" : "text-[#2A1D17]"
                                        }`}>
                                            {item.title}
                                        </h3>

                                    </div>

                                    <span className={`shrink-0 rounded-full border px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] font-semibold sm:px-4 sm:text-xs md:mt-4 md:inline-block md:px-5 md:py-2 md:tracking-[0.3em] ${
                                        isDark 
                                            ? "border-amber-400/30 bg-amber-400/10 text-amber-300" 
                                            : "border-[#7A2E24]/30 bg-amber-500/15 text-[#7A2E24]"
                                    }`}>
                                        {item.date}
                                    </span>

                                </div>

                            </motion.div>
                        ))}

                    </div>

                </div>

            </section>
            {/* =========================================================
                PRIZES
            ========================================================= */}
            {competition.prizeBreakdown?.length > 0 && (
                <section className="mx-auto mt-20 max-w-7xl px-6">

                    {/* UNIFIED REWARDS CARD */}
                    <div className={`overflow-hidden rounded-3xl border backdrop-blur-xl transition-colors duration-300 ${
                        isDark 
                            ? "border-white/10 bg-white/[0.025]" 
                            : "border-[#7A2E24]/15 bg-white/70 shadow-xl shadow-amber-950/5"
                    }`}>

                        <div className="grid md:grid-cols-[0.8fr_1.2fr]">

                            {/* LEFT — INTRO */}
                            <div className={`border-b px-6 py-6 md:border-b-0 md:border-r md:px-8 ${
                                isDark ? "border-white/10" : "border-[#7A2E24]/10"
                            }`}>

                                <p className="text-[10px] uppercase tracking-[0.4em] font-semibold text-amber-600 dark:text-amber-300">
                                    Rewards
                                </p>

                                <h2 className={`mt-2 text-3xl font-black tracking-tight md:text-4xl ${
                                    isDark ? "text-white" : "text-[#2A1D17]"
                                }`}>
                                    What&apos;s At Stake
                                </h2>

                            </div>


                            {/* RIGHT — PRIZE BREAKDOWN */}
                            <div className={`divide-y ${
                                isDark ? "divide-white/[0.07]" : "divide-[#7A2E24]/10"
                            }`}>

                                {competition.prizeBreakdown.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`group flex items-center gap-5 px-6 py-4 transition-colors md:px-8 ${
                                            isDark ? "hover:bg-white/[0.025]" : "hover:bg-[#7A2E24]/5"
                                        }`}
                                    >

                                        {/* NUMBER */}
                                        <span className={`shrink-0 font-mono text-[10px] font-semibold tracking-wider ${
                                            isDark ? "text-amber-300/80" : "text-[#7A2E24]"
                                        }`}>
                                            {String(index + 1).padStart(2, "0")}
                                        </span>


                                        {/* PRIZE */}
                                        <span className={`flex-1 text-right text-sm font-medium transition-colors ${
                                            isDark 
                                                ? "text-white/65 group-hover:text-white/85" 
                                                : "text-[#2A1D17] font-semibold group-hover:text-[#7A2E24]"
                                        }`}>
                                            {item}
                                        </span>

                                    </div>
                                ))}

                            </div>

                        </div>


                        {/* BOTTOM ACCENT */}
                        <div className={`h-px w-full ${
                            isDark 
                                ? "bg-linear-to-r from-transparent via-amber-400/30 to-transparent" 
                                : "bg-linear-to-r from-transparent via-[#7A2E24]/20 to-transparent"
                        }`} />

                    </div>

                </section>
            )}
            {/* =========================================================
                RULES
            ========================================================= */}

            <section className="mx-auto mt-24 max-w-7xl px-6 pb-20">

                {/* UNIFIED RULES CARD */}
                <div className={`overflow-hidden rounded-3xl border backdrop-blur-xl transition-colors duration-300 ${
                    isDark 
                        ? "border-white/10 bg-white/[0.025]" 
                        : "border-[#7A2E24]/15 bg-white/70 shadow-xl shadow-amber-950/5"
                    }`}>

                    {/* HEADER */}
                    <div className={`flex items-end justify-between gap-6 border-b px-6 py-6 md:px-8 ${
                        isDark ? "border-white/10" : "border-[#7A2E24]/10"
                    }`}>

                        <div>
                            <p className="text-[10px] uppercase tracking-[0.4em] font-semibold text-amber-600 dark:text-amber-300">
                                Guidelines
                            </p>

                            <h2 className={`mt-2 text-3xl font-black tracking-tight md:text-4xl ${
                                isDark ? "text-white" : "text-[#2A1D17]"
                            }`}>
                                Rules & Regulations
                            </h2>
                        </div>

                        {/* Small decorative indicator */}
                        <div className="hidden items-center gap-2 md:flex">
                            <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                            <span className={`text-[9px] uppercase tracking-[0.3em] font-medium ${
                                isDark ? "text-white/25" : "text-[#7A2E24]/60"
                            }`}>
                                Please Read Carefully
                            </span>
                        </div>

                    </div>


                    {/* RULES */}
                    <div className={`divide-y ${
                        isDark ? "divide-white/[0.07]" : "divide-[#7A2E24]/10"
                    }`}>

                        {competition.rules.map((rule, index) => (
                            <div
                                key={index}
                                className={`group flex gap-5 px-6 py-4 transition-colors md:px-8 ${
                                    isDark ? "hover:bg-white/[0.025]" : "hover:bg-[#7A2E24]/5"
                                }`}
                            >

                                {/* NUMBER */}
                                <span className={`mt-0.5 shrink-0 font-mono text-[10px] font-semibold tracking-wider ${
                                    isDark ? "text-amber-300/80" : "text-[#7A2E24]"
                                }`}>
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                {/* RULE */}
                                <p className={`text-sm leading-6 transition-colors ${
                                    isDark 
                                        ? "text-white/55 group-hover:text-white/75" 
                                        : "text-[#3A2A24] font-medium group-hover:text-[#2A1D17]"
                                }`}>
                                    {rule}
                                </p>

                            </div>
                        ))}

                    </div>


                    {/* ACTIONS */}
                    <div className={`flex flex-wrap gap-3 border-t px-6 py-5 md:px-8 ${
                        isDark ? "border-white/10" : "border-[#7A2E24]/10"
                    }`}>

                        <Link
                            href="/Competitions"
                            className={`inline-flex items-center rounded-full border px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] transition ${
                                isDark 
                                    ? "border-white/15 text-white/70 hover:border-white/30 hover:bg-white/5 hover:text-white" 
                                    : "border-[#7A2E24]/30 text-[#4A3328] hover:border-[#7A2E24] hover:bg-[#7A2E24]/5 hover:text-[#7A2E24]"
                            }`}
                        >
                            Back To Competitions
                        </Link>

                        <div className="flex flex-col items-center sm:items-end gap-1.5">
                            <a
                                href={competition.registrationUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition hover:bg-amber-300"
                            >
                                {competition.buttonText || (competition.registrationUrl?.includes("unstop.com") ? "Register on Unstop" : "Confirm Your Slot")}
                                <ExternalLink size={14} />
                            </a>

                            {competition.buttonText === "Confirm Your Slot" && (
                                <p className="text-[10px] font-mono font-semibold text-amber-600 dark:text-amber-400 flex items-center gap-1">
                                    <span>⚠️</span>
                                    <span>Only for participants shortlisted after Round 1</span>
                                </p>
                            )}
                        </div>

                    </div>

                </div>

            </section>

        </main>
    );
}