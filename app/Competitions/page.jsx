"use client";

// import { motion } from "framer-motion";
import Link from "next/link";
import Silk from "@/components/animated_bg/Silk";
import SectionHeading from "@/components/SectionHeading";
import CompetitionCard from "@/components/CompetitionCard";
import CTA from "@/components/CTA";
import { competitions } from "@/data/competitions";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Trophy, BriefcaseBusiness, Gift, Users, GraduationCap, Award, Rocket, Brain, UserPlus, Lightbulb, Presentation, } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

export default function Competitions() {
    const { resolvedTheme } = useTheme();
    const isDark = resolvedTheme === "dark";

    const dashboardEvents = [
        {
            society: "FEBS",
            title: "ML Hackathon",
            description:
                "Take on the ML challenge. Clear the online screening round, reach the offline finale, and turn your ideas into a real-world machine learning solution.",
            date: "10 SEP",
            duration: "2 Rounds",
            venue: "IIT Bhubaneswar",
            prize: "₹35,000",
            difficulty: "Advanced",
            number: "01",
        },

        {
            society: "RISC",
            title: "CADathon",
            description:
                "Enter the CAD arena where speed, precision, modelling accuracy, and engineering judgement decide who comes out on top.",
            date: "10 SEP",
            duration: "2 Rounds",
            venue: "IIT Bhubaneswar",
            prize: "₹25,000",
            difficulty: "Advanced",
            number: "02",
        },

        {
            society: "FEBS",
            title: "B-Plan Competition",
            description:
                "Turn bold ideas into winning business plans by mastering strategy, understanding the market, and delivering a pitch that stands out.",
            date: "10 SEP",
            duration: "2 Rounds",
            venue: "IIT Bhubaneswar",
            prize: "₹30,000",
            difficulty: "Intermediate",
            number: "03",
        },

        {
            society: "WebnD",
            title: "Web Hackathon",
            description:
                "Build fast. Build smart. Ship it. Push your web development skills to the limit as you race from a constrained first round to the offline finale.",
            date: "10 SEP",
            duration: "2 Rounds",
            venue: "IIT Bhubaneswar",
            prize: "₹35,000",
            difficulty: "Intermediate",
            number: "04",
        },

        {
            society: "RISC",
            title: "TurtleBot Pursuit & Evasion Challenge",
            description:
                "Catch or escape. Your algorithm decides. Build smarter autonomous strategies and battle it out in a high-stakes pursuit and evasion challenge.",
            date: "10 SEP",
            duration: "2 Rounds",
            venue: "Simulation Environment",
            prize: "₹25,000",
            difficulty: "Advanced",
            number: "05",
        },

        {
            society: "WebnD",
            title: "Design Marathon",
            description:
                "Create without limits. Race against time, turn ideas into striking designs, and prove your creativity when the pressure is on.",
            date: "10 SEP",
            duration: "2 Rounds",
            venue: "IIT Bhubaneswar",
            prize: "₹25,000",
            difficulty: "Intermediate",
            number: "06",
        },

        {
            society: "FEBS",
            title: "Agentic AI Hackathon",
            description:
                "Don't just build AI. Set it in motion. Create intelligent agents that observe, reason, decide, adapt, and take action to get the job done.",
            date: "10 SEP",
            duration: "2 Rounds",
            venue: "IIT Bhubaneswar",
            prize: "₹35,000",
            difficulty: "Advanced",
            number: "07",
        },

        {
            society: "Neuromancers",
            title: "CP Contest",
            description:
                "135 minutes. Zero room for hesitation. Take on a fierce programming battle where speed, logic, and algorithmic thinking separate the best from the rest.",
            date: "30 OCT",
            duration: "135 Minutes",
            venue: "Online",
            prize: "₹15,000",
            difficulty: "Advanced",
            number: "08",
        },

        {
            society: "Nakshatra",
            title: "Math-O-Stellar",
            description:
                "Forget the usual math. Think beyond the obvious. Take on unconventional problems that challenge your logic, creativity, patterns, and mathematical instincts.",
            date: "29 OCT",
            duration: "120 Minutes",
            venue: "Online",
            prize: "₹15,000",
            difficulty: "Advanced",
            number: "09",
        },

        {
            society: "FEBS",
            title: "Case Study Competition",
            description:
                "The problem is real. The solution is yours. Decode a real-world business challenge, build a winning strategy, and defend your solution under pressure.",
            date: "TBD",
            duration: "As per Competition Schedule",
            venue: "Online",
            prize: "₹15,000",
            difficulty: "Intermediate",
            number: "10",
        },
    ];
    const [activeDashboardEvent, setActiveDashboardEvent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveDashboardEvent(
                (prev) => (prev + 1) % dashboardEvents.length
            );
        }, 3500); // 6 seconds per event

        return () => clearInterval(interval);
    }, [dashboardEvents.length]);

    const currentEvent = dashboardEvents[activeDashboardEvent];

    const nextEvent =
        dashboardEvents[
        (activeDashboardEvent + 1) % dashboardEvents.length
        ];
    return (
        <main className="bg-background text-foreground overflow-hidden transition-colors duration-300">
            <section className="relative min-h-[78vh] overflow-hidden flex items-center ">
                {/* Background */}
                <div className="absolute inset-0">
                    <Silk
                        speed={3}
                        scale={1.1}
                        noiseIntensity={0.2}
                        rotation={0}
                    />
                </div>

                {/* Ambient glow */}
                <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-amber-400/10 blur-[150px]" />

                {/* Bottom gradient */}
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-background/10 to-background" />

                {/* Content */}
                <div className="relative z-10 mx-auto max-w-7xl px-6 w-full">
                    <div className="grid lg:grid-cols-[1.05fr_0.95fr] items-center gap-10 lg:gap-14">

                        {/* =========================================================
                LEFT SIDE
            ========================================================= */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                ease: "easeOut"
                            }}
                        >
                            <p className="uppercase tracking-[0.45em] text-xs text-amber-500 dark:text-amber-300 mb-5 pt-5">
                                TECHZEPHYR 2026
                            </p>

                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight landing-heading bg-gradient-to-b from-amber-400 via-amber-600 to-black bg-clip-text text-transparent dark:from-white dark:via-zinc-300 dark:to-zinc-700">
                                COMPETE.
                            </h1>

                            <h2 className="mt-5 text-2xl md:text-4xl font-semibold">
                                Challenge Ideas.
                                <br />
                                Build Solutions.
                            </h2>

                            <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-9">
                                Explore hackathons, programming contests, robotics
                                competitions, finance challenges, astronomy events and
                                much more.
                            </p>

                            <div className="mt-12 flex gap-5 flex-wrap">
                                <Link
                                    href="/Register"
                                    className="rounded-xl bg-amber-400 px-8 py-4 text-black font-semibold uppercase hover:bg-amber-300 transition duration-300 shadow-sm"
                                >
                                    Register
                                </Link>

                                <Link
                                    href="/AboutUs"
                                    className="rounded-xl border border-border px-8 py-4 uppercase hover:border-amber-400 hover:text-amber-500 dark:hover:text-amber-300 transition duration-300 bg-card/50"
                                >
                                    About
                                </Link>
                            </div>
                        </motion.div>


                        {/* =========================================================
                RIGHT SI```jsx
{/* =========================================================
    DE — UPCOMING EVENTS DASHBOARD
========================================================= */}
                        <motion.div
                            initial={{
                                opacity: 0,
                                x: 30,
                                scale: 0.97
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                                scale: 1
                            }}
                            transition={{
                                duration: 0.4,
                                delay: 0.1,
                                ease: "easeOut"
                            }}
                            className="relative flex w-full items-center justify-center lg:h-[460px]"
                        >
                            {/* Ambient glow */}
                            <div className="absolute h-72 w-72 rounded-full bg-amber-400/10 blur-[120px]" />

                            {/* DASHBOARD */}
                            <div className={`relative w-full max-w-[420px] overflow-hidden rounded-[28px] border backdrop-blur-2xl transition-colors duration-300 ${
                                isDark 
                                    ? "border-white/10 bg-black/50 shadow-[0_0_70px_rgba(251,191,36,.07)]" 
                                    : "border-[#7A2E24]/15 bg-white/70 shadow-xl shadow-amber-950/5 text-[#2A1D17]"
                            }`}>

                                {/* Decorative glow */}
                                <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-amber-400/10 blur-[90px]" />

                                {/* =================================================
            HEADER
        ================================================= */}
                                <div className={`relative flex items-center justify-between border-b px-5 py-4 ${
                                    isDark ? "border-white/10" : "border-[#7A2E24]/10"
                                }`}>

                                    <div>
                                        <p className={`text-[8px] uppercase tracking-[0.35em] font-semibold ${
                                            isDark ? "text-white/30" : "text-[#7A2E24]/70"
                                        }`}>
                                            TechZephyr
                                        </p>

                                        <h3 className={`mt-1 text-lg font-bold tracking-tight ${
                                            isDark ? "text-white" : "text-[#2A1D17]"
                                        }`}>
                                            Event Dashboard
                                        </h3>
                                    </div>

                                    {/* LIVE */}
                                    <div className="flex items-center gap-2 rounded-full border border-red-400/20 bg-red-400/5 px-2.5 py-1">

                                        <motion.span
                                            animate={{
                                                opacity: [1, 0.35, 1],
                                                scale: [1, 0.75, 1]
                                            }}
                                            transition={{
                                                duration: 1.1,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                            className="h-1.5 w-1.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,.8)]"
                                        />

                                        <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-red-400">
                                            Live
                                        </span>

                                    </div>

                                </div>


                                {/* =================================================
            CONTENT
        ================================================= */}
                                <div className="relative px-5 py-5">

                                    {/* UPCOMING LABEL */}
                                    <div className="flex items-center gap-3">

                                        <span className={`text-[8px] uppercase tracking-[0.35em] font-semibold ${
                                            isDark ? "text-amber-300" : "text-[#8B3A2E]"
                                        }`}>
                                            Upcoming Event
                                        </span>

                                        <div className={`h-px flex-1 ${
                                            isDark 
                                                ? "bg-linear-to-r from-amber-400/40 to-transparent" 
                                                : "bg-linear-to-r from-[#7A2E24]/30 to-transparent"
                                        }`} />

                                    </div>


                                    {/* =================================================
                CURRENT EVENT
            ================================================= */}

                                    <AnimatePresence mode="wait">

                                        <motion.div
                                            key={currentEvent.number}
                                            initial={{
                                                opacity: 0,
                                                y: 12,
                                                filter: "blur(6px)"
                                            }}
                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                                filter: "blur(0px)"
                                            }}
                                            exit={{
                                                opacity: 0,
                                                y: -12,
                                                filter: "blur(6px)"
                                            }}
                                            transition={{
                                                duration: 0.9,
                                                ease: "easeInOut"
                                            }}
                                            className="mt-4"
                                        >

                                            {/* EVENT HEADER */}

                                            <div className="flex items-start justify-between gap-4">

                                                <div className="min-w-0">

                                                    <p className={`text-[9px] uppercase tracking-[0.25em] font-semibold ${
                                                        isDark ? "text-white/30" : "text-[#7A2E24]/70"
                                                    }`}>
                                                        {currentEvent.society}
                                                    </p>

                                                    <h4 className={`mt-1 text-2xl font-bold tracking-tight ${
                                                        isDark ? "text-white" : "text-[#2A1D17]"
                                                    }`}>
                                                        {currentEvent.title}
                                                    </h4>

                                                    <p className={`mt-1 text-xs leading-relaxed ${
                                                        isDark ? "text-white/40" : "text-[#4A3328]/80 font-medium"
                                                    }`}>
                                                        {currentEvent.description}
                                                    </p>

                                                </div>


                                                {/* EVENT NUMBER */}

                                                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${
                                                    isDark 
                                                        ? "border-amber-400/20 bg-amber-400/5 text-amber-300" 
                                                        : "border-[#7A2E24]/20 bg-[#7A2E24]/10 text-[#7A2E24]"
                                                }`}>

                                                    <span className="font-mono text-sm font-bold">
                                                        {currentEvent.number}
                                                    </span>

                                                </div>

                                            </div>


                                            {/* =================================================
                        EVENT DETAILS
                    ================================================= */}

                                            <div className={`mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-y py-4 ${
                                                isDark ? "border-white/10" : "border-[#7A2E24]/10"
                                            }`}>

                                                {/* DATE */}

                                                <div>

                                                    <p className={`text-[7px] uppercase tracking-[0.25em] font-semibold ${
                                                        isDark ? "text-white/25" : "text-[#7A2E24]/60"
                                                    }`}>
                                                        Date
                                                    </p>

                                                    <p className={`mt-1 text-xs font-semibold ${
                                                        isDark ? "text-white" : "text-[#2A1D17]"
                                                    }`}>
                                                        {currentEvent.date}
                                                    </p>

                                                </div>


                                                <div className={`h-6 w-px ${isDark ? "bg-white/10" : "bg-[#7A2E24]/15"}`} />


                                                {/* DURATION */}

                                                <div>

                                                    <p className={`text-[7px] uppercase tracking-[0.25em] font-semibold ${
                                                        isDark ? "text-white/25" : "text-[#7A2E24]/60"
                                                    }`}>
                                                        Duration
                                                    </p>

                                                    <p className={`mt-1 text-xs font-semibold ${
                                                        isDark ? "text-white" : "text-[#2A1D17]"
                                                    }`}>
                                                        {currentEvent.duration}
                                                    </p>

                                                </div>


                                                <div className={`h-6 w-px ${isDark ? "bg-white/10" : "bg-[#7A2E24]/15"}`} />


                                                {/* VENUE */}

                                                <div className="min-w-0 flex-1">

                                                    <p className={`text-[7px] uppercase tracking-[0.25em] font-semibold ${
                                                        isDark ? "text-white/25" : "text-[#7A2E24]/60"
                                                    }`}>
                                                        Venue
                                                    </p>

                                                    <p className={`mt-1 truncate text-xs font-semibold ${
                                                        isDark ? "text-white" : "text-[#2A1D17]"
                                                    }`}>
                                                        {currentEvent.venue}
                                                    </p>

                                                </div>

                                            </div>


                                            {/* =================================================
                        PRIZE + DIFFICULTY
                    ================================================= */}

                                            <div className="mt-4 flex items-center justify-between">

                                                <div>

                                                    <p className={`text-[7px] uppercase tracking-[0.25em] font-semibold ${
                                                        isDark ? "text-white/25" : "text-[#7A2E24]/60"
                                                    }`}>
                                                        Prize Pool
                                                    </p>

                                                    <p className={`mt-1 text-sm font-bold ${
                                                        isDark ? "text-amber-300" : "text-[#8B3A2E]"
                                                    }`}>
                                                        {currentEvent.prize}
                                                    </p>

                                                </div>


                                                <div className="text-right">

                                                    <p className={`text-[7px] uppercase tracking-[0.25em] font-semibold ${
                                                        isDark ? "text-white/25" : "text-[#7A2E24]/60"
                                                    }`}>
                                                        Difficulty
                                                    </p>

                                                    <p className={`mt-1 text-xs font-semibold ${
                                                        isDark ? "text-white" : "text-[#2A1D17]"
                                                    }`}>
                                                        {currentEvent.difficulty}
                                                    </p>

                                                </div>

                                            </div>

                                        </motion.div>

                                    </AnimatePresence>


                                    {/* =================================================
                NEXT EVENT
            ================================================= */}

                                    <div className="mt-5">

                                        <div className="flex items-center justify-between">

                                            <p className={`text-[8px] uppercase tracking-[0.35em] font-semibold ${
                                                isDark ? "text-white/25" : "text-[#7A2E24]/60"
                                            }`}>
                                                Next Up
                                            </p>

                                            <span className={`text-[8px] uppercase tracking-[0.2em] font-medium ${
                                                isDark ? "text-white/20" : "text-[#7A2E24]/50"
                                            }`}>
                                                {nextEvent.date}
                                            </span>

                                        </div>


                                        <AnimatePresence mode="wait">

                                            <motion.div
                                                key={`next-${nextEvent.number}`}
                                                initial={{
                                                    opacity: 0,
                                                    x: 8
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    x: 0
                                                }}
                                                exit={{
                                                    opacity: 0,
                                                    x: -8
                                                }}
                                                transition={{
                                                    duration: 0.8,
                                                    ease: "easeInOut"
                                                }}
                                                className="mt-3 flex items-center gap-3"
                                            >

                                                {/* ICON */}

                                                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${
                                                    isDark ? "border-white/10 bg-white/5 text-amber-300" : "border-[#7A2E24]/15 bg-[#7A2E24]/5 text-[#7A2E24]"
                                                }`}>

                                                    <span className="font-mono text-sm font-bold">
                                                        {nextEvent.number}
                                                    </span>

                                                </div>


                                                {/* EVENT */}

                                                <div className="min-w-0 flex-1">

                                                    <h4 className={`truncate text-sm font-semibold ${
                                                        isDark ? "text-white" : "text-[#2A1D17]"
                                                    }`}>
                                                        {nextEvent.title}
                                                    </h4>

                                                    <p className={`mt-1 truncate text-[10px] ${
                                                        isDark ? "text-white/35" : "text-[#4A3328]/70"
                                                    }`}>
                                                        {nextEvent.society}
                                                        {" · "}
                                                        {nextEvent.duration}
                                                        {" · "}
                                                        {nextEvent.venue}
                                                    </p>

                                                </div>


                                                <span className={`text-sm ${
                                                    isDark ? "text-white/20" : "text-[#7A2E24]/40"
                                                }`}>
                                                    →
                                                </span>

                                            </motion.div>

                                        </AnimatePresence>

                                    </div>


                                    {/* =================================================
                STATS
            ================================================= */}

                                    <div className={`mt-5 flex items-center gap-8 border-t pt-4 ${
                                        isDark ? "border-white/10" : "border-[#7A2E24]/10"
                                    }`}>

                                        <div className="flex items-center gap-2">

                                            <span className={`h-1.5 w-1.5 rounded-full ${isDark ? "bg-amber-300" : "bg-[#8B3A2E]"}`} />

                                            <div>

                                                <span className={`text-base font-bold ${isDark ? "text-white" : "text-[#2A1D17]"}`}>
                                                    05
                                                </span>

                                                <span className={`ml-2 text-[7px] uppercase tracking-[0.2em] font-semibold ${
                                                    isDark ? "text-white/25" : "text-[#7A2E24]/60"
                                                }`}>
                                                    Societies
                                                </span>

                                            </div>

                                        </div>


                                        <div className="flex items-center gap-2">

                                            <span className={`h-1.5 w-1.5 rounded-full ${isDark ? "bg-white/30" : "bg-[#7A2E24]/30"}`} />

                                            <div>

                                                <span className={`text-base font-bold ${isDark ? "text-white" : "text-[#2A1D17]"}`}>
                                                    {dashboardEvents.length.toString().padStart(2, "0")}+
                                                </span>

                                                <span className={`ml-2 text-[7px] uppercase tracking-[0.2em] font-semibold ${
                                                    isDark ? "text-white/25" : "text-[#7A2E24]/60"
                                                }`}>
                                                    Events
                                                </span>

                                            </div>

                                        </div>

                                    </div>

                                </div>


                                {/* =================================================
            BOTTOM ACCENT
        ================================================= */}

                                <div className={`h-px w-full ${
                                    isDark 
                                        ? "bg-linear-to-r from-transparent via-amber-400/40 to-transparent" 
                                        : "bg-linear-to-r from-transparent via-[#7A2E24]/30 to-transparent"
                                }`} />

                            </div>

                        </motion.div>
                    </div>
                </div>
            </section>
            <section className="py-10">
                <div className="mx-auto max-w-7xl px-6">
                    <SectionHeading subtitle="Events & Challenges" title="Explore Competitions" />
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {competitions.map((competition, index) => (
                            <CompetitionCard
                                key={index}
                                number={competition.number}
                                tag={competition.tag}
                                title={competition.title}
                                description={competition.shortDescription}
                                slug={competition.slug}
                                bgImage={competition.bgImage}
                            />
                        ))}
                    </div>
                </div>
            </section>
            {/*  */}
            <section className={`border-t py-8 overflow-hidden sm:py-10 ${
                isDark ? "border-white/10" : "border-[#7A2E24]/10"
            }`}>
                <div className="mx-auto max-w-7xl px-5 sm:px-6">

                    <SectionHeading
                        subtitle="Experience"
                        title="Why You Should Join"
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className={`relative mt-10 overflow-hidden rounded-3xl border backdrop-blur-xl sm:mt-14 sm:rounded-[40px] transition-colors duration-300 ${
                            isDark 
                                ? "border-white/10 bg-white/[0.035]" 
                                : "border-[#7A2E24]/15 bg-white/70 shadow-xl shadow-amber-950/5"
                        }`}
                    >

                        {/* Ambient glow */}
                        <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-amber-400/10 blur-[100px]" />
                        <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-amber-400/5 blur-[100px]" />

                        <div className="relative z-10 grid md:grid-cols-2 xl:grid-cols-4">

                            {[
                                {
                                    icon: Trophy,
                                    title: "Compete Nationally",
                                    description:
                                        "Challenge yourself against talented participants from institutes across the country."
                                },
                                {
                                    icon: BriefcaseBusiness,
                                    title: "Industry Exposure",
                                    description:
                                        "Interact with experts, mentors and companies while exploring emerging technologies."
                                },
                                {
                                    icon: Gift,
                                    title: "Exciting Prizes",
                                    description:
                                        "Win attractive prizes and gain recognition for your innovation and technical excellence."
                                },
                                {
                                    icon: Users,
                                    title: "Professional Network",
                                    description:
                                        "Connect with innovators, founders and professionals from various technical domains."
                                },
                                {
                                    icon: GraduationCap,
                                    title: "Hands-on Learning",
                                    description:
                                        "Experience practical workshops, hackathons and engineering challenges."
                                },
                                {
                                    icon: Award,
                                    title: "Certificates",
                                    description:
                                        "Receive valuable certificates that strengthen your academic and professional profile."
                                },
                                {
                                    icon: Rocket,
                                    title: "Internship Access",
                                    description:
                                        "Discover internship opportunities through company collaborations and networking."
                                },
                                {
                                    icon: Brain,
                                    title: "Develop Skills",
                                    description:
                                        "Improve technical knowledge, teamwork, communication and leadership abilities."
                                }
                            ].map((item, index) => {

                                const Icon = item.icon;

                                return (
                                    <motion.div
                                        key={item.title}
                                        initial={{
                                            opacity: 0,
                                            y: 20
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            y: 0
                                        }}
                                        viewport={{
                                            once: true
                                        }}
                                        transition={{
                                            duration: 0.4,
                                            delay: index * 0.04
                                        }}
                                        whileHover={{
                                            backgroundColor: isDark 
                                                ? "rgba(255,255,255,0.025)" 
                                                : "rgba(122,46,36,0.03)"
                                        }}
                                        className={`
                                group relative
                                p-5 sm:p-7 xl:p-8
                                transition-all duration-300
                                ${isDark ? "border-white/10" : "border-[#7A2E24]/10"}

                                ${index % 4 !== 3
                                                ? "xl:border-r"
                                                : ""
                                            }

                                ${index < 4
                                                ? "xl:border-b"
                                                : ""
                                            }

                                ${index % 2 !== 1
                                                ? "md:border-r xl:border-r-0"
                                                : ""
                                            }

                                ${index < 6
                                                ? "md:border-b xl:border-b-0"
                                                : ""
                                            }
                            `}
                                    >

                                        {/* Hover glow */}
                                        <div
                                            className="
                                    absolute -right-16 -top-16
                                    h-32 w-32
                                    rounded-full
                                    bg-amber-400/10
                                    blur-[70px]
                                    opacity-0
                                    transition-opacity duration-300
                                    group-hover:opacity-100
                                "
                                        />

                                        {/* MOBILE LAYOUT */}
                                        <div className="flex items-center gap-4 md:block">

                                            {/* Icon */}
                                            <motion.div
                                                whileHover={{
                                                    scale: 1.08,
                                                    rotate: 4
                                                }}
                                                transition={{
                                                    duration: 0.2
                                                }}
                                                className={`
                                        relative
                                        flex h-11 w-11 shrink-0
                                        items-center justify-center
                                        rounded-xl
                                        border
                                        md:mb-6
                                        md:h-14 md:w-14
                                        md:rounded-2xl
                                        ${isDark 
                                            ? "border-amber-400/20 bg-linear-to-br from-amber-400/15 to-transparent text-amber-300" 
                                            : "border-[#7A2E24]/25 bg-[#7A2E24]/10 text-[#7A2E24]"
                                        }
                                    `}
                                            >
                                                <div className={`absolute inset-2 rounded-lg blur-md ${
                                                    isDark ? "bg-amber-400/10" : "bg-[#7A2E24]/10"
                                                }`} />

                                                <Icon
                                                    size={22}
                                                    strokeWidth={1.8}
                                                    className={`
                                            relative
                                            md:hidden
                                            ${isDark ? "text-amber-300" : "text-[#7A2E24]"}
                                        `}
                                                />

                                                <Icon
                                                    size={27}
                                                    strokeWidth={1.8}
                                                    className={`
                                            relative hidden
                                            md:block
                                            ${isDark ? "text-amber-300" : "text-[#7A2E24]"}
                                        `}
                                                />
                                            </motion.div>

                                            {/* Content */}
                                            <div className="min-w-0">

                                                <h3 className={`
                                        text-base
                                        font-bold
                                        leading-tight
                                        sm:text-lg
                                        md:text-xl
                                        ${isDark ? "text-white" : "text-[#2A1D17]"}
                                    `}>
                                                    {item.title}
                                                </h3>

                                                {/* Description hidden on mobile */}
                                                <p className={`
                                        mt-3
                                        hidden
                                        text-sm
                                        leading-7
                                        md:block
                                        ${isDark ? "text-white/60" : "text-[#4A3328]/85 font-medium"}
                                    `}>
                                                    {item.description}
                                                </p>

                                            </div>

                                            {/* Number */}
                                            <span className={`
                                    ml-auto
                                    shrink-0
                                    text-[10px]
                                    font-bold
                                    tracking-[0.15em]
                                    transition-colors
                                    duration-300
                                    md:absolute
                                    md:right-8
                                    md:top-8
                                    md:text-xs
                                    md:tracking-[0.2em]
                                    ${isDark 
                                        ? "text-white/15 group-hover:text-amber-300/30" 
                                        : "text-[#7A2E24]/30 group-hover:text-[#7A2E24]"
                                    }
                                `}>
                                                0{index + 1}
                                            </span>

                                        </div>

                                        {/* Bottom accent */}
                                        <div className={`
                                mt-4
                                h-px
                                w-6
                                transition-all
                                duration-300
                                group-hover:w-12
                                md:mt-6
                                md:w-8
                                ${isDark ? "bg-amber-400/40" : "bg-[#7A2E24]/40 group-hover:bg-[#7A2E24]"}
                            `} />

                                    </motion.div>
                                );
                            })}

                        </div>
                    </motion.div>

                </div>
            </section>
            
            <section className="py-10">
                <div className="mx-auto max-w-7xl px-6">

                    <SectionHeading
                        subtitle="Competition Flow"
                        title="Your Journey"
                    />

                    <div className="relative mt-20">

                        {/* Timeline */}
                        <div className={`absolute left-7 top-0 bottom-0 w-px ${
                            isDark 
                                ? "bg-linear-to-b from-amber-400/70 via-amber-400/20 to-transparent" 
                                : "bg-linear-to-b from-[#7A2E24]/70 via-[#7A2E24]/20 to-transparent"
                        } md:left-1/2 md:-translate-x-1/2`} />

                        {[
                            {
                                title: "Register",
                                description: "Choose your preferred competition and complete your registration.",
                                icon: UserPlus,
                            },
                            {
                                title: "Innovate",
                                description: "Collaborate with your team to build creative and impactful solutions.",
                                icon: Lightbulb,
                            },
                            {
                                title: "Present",
                                description: "Showcase your project before judges, mentors and industry experts.",
                                icon: Presentation,
                            },
                            {
                                title: "Win",
                                description: "Earn prizes, certificates, recognition and exciting opportunities.",
                                icon: Trophy,
                            },
                        ].map((item, index) => {

                            const Icon = item.icon;
                            const isLeft = index % 2 === 0;

                            return (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{
                                        duration: 0.35,
                                        delay: index * 0.07,
                                        ease: "easeOut",
                                    }}
                                    className="relative mb-14 flex items-center md:mb-20"
                                >

                                    {/* Desktop connector */}
                                    <div
                                        className={
                                            "absolute top-1/2 hidden h-px w-24 md:block " +
                                            (isDark 
                                                ? "bg-linear-to-r from-amber-400/50 to-transparent " 
                                                : "bg-linear-to-r from-[#7A2E24]/40 to-transparent ") +
                                            (isLeft ? "right-1/2" : "left-1/2 rotate-180")
                                        }
                                    />

                                    {/* Timeline icon */}
                                    <motion.div
                                        whileHover={{ scale: 1.08 }}
                                        transition={{ duration: 0.18 }}
                                        className={`absolute left-7 top-1/2 z-20 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border shadow-md md:left-1/2 md:h-16 md:w-16 ${
                                            isDark 
                                                ? "border-amber-400/30 bg-black text-amber-300 shadow-[0_0_25px_rgba(251,191,36,.15)]" 
                                                : "border-[#7A2E24]/30 bg-[#FAF7F2] text-[#7A2E24]"
                                        }`}
                                    >
                                        <div className={`absolute inset-2 rounded-full blur-md ${
                                            isDark ? "bg-amber-400/10" : "bg-[#7A2E24]/10"
                                        }`} />

                                        <Icon
                                            size={24}
                                            strokeWidth={1.8}
                                            className="relative"
                                        />
                                    </motion.div>

                                    {/* Card */}
                                    <motion.div
                                        whileHover={{ y: -4 }}
                                        transition={{ duration: 0.2 }}
                                        className={`group relative ml-16 w-[calc(100%-4rem)] overflow-hidden rounded-[28px] border p-7 backdrop-blur-xl transition-all duration-300 md:ml-0 md:w-[45%] ${
                                            isDark 
                                                ? "border-white/10 bg-white/[0.035] hover:border-amber-400/25 hover:bg-white/[0.05]" 
                                                : "border-[#7A2E24]/15 bg-white/70 hover:border-[#7A2E24]/30 hover:bg-white/95 shadow-lg shadow-amber-950/5"
                                        } ${
                                            isLeft
                                                ? "md:mr-auto md:pr-12 md:text-right"
                                                : "md:ml-auto md:pl-12 md:text-left"
                                        }`}
                                    >

                                        {/* Hover glow */}
                                        <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-amber-400/10 blur-[70px] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                        {/* Step */}
                                        <span className={`relative text-xs font-semibold uppercase tracking-[0.3em] ${
                                            isDark ? "text-amber-300/50" : "text-[#7A2E24]"
                                        }`}>
                                            Step 0{index + 1}
                                        </span>

                                        {/* Title */}
                                        <h3 className={`relative mt-3 text-2xl font-bold md:text-3xl ${
                                            isDark ? "text-white" : "text-[#2A1D17]"
                                        }`}>
                                            {item.title}
                                        </h3>

                                        {/* Description */}
                                        <p className={`relative mt-4 text-sm leading-7 md:text-[15px] ${
                                            isDark ? "text-white/55" : "text-[#4A3328]/85 font-medium"
                                        }`}>
                                            {item.description}
                                        </p>

                                        {/* Accent */}
                                        <div
                                            className={`mt-6 h-px w-10 transition-all duration-300 group-hover:w-20 ${
                                                isDark ? "bg-amber-400/60" : "bg-[#7A2E24]/60"
                                            } ${isLeft ? "md:ml-auto" : ""}`}
                                        />

                                    </motion.div>

                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>
            <section className={`border-t ${isDark ? "border-white/10" : "border-[#7A2E24]/10"}`}><CTA /></section>
        </main>)
}