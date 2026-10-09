"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ExternalLink,
    ArrowUpRight,
    Trophy,
    Users,
    Clock,
    Sparkles,
    CheckCircle2,
    Search,
    SlidersHorizontal,
    Globe,
    Building2,
    X,
} from "lucide-react";
import Link from "next/link";

import Silk from "@/components/animated_bg/Silk";
import Navbar from "@/components/Navbar";
import SectionHeading from "@/components/SectionHeading";
import { competitions } from "@/data/competitions";
import { useTheme } from "@/components/ThemeProvider";

export default function RegisterPage() {
    const { resolvedTheme } = useTheme();
    const isDark = resolvedTheme === "dark";

    const [selectedCategory, setSelectedCategory] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");

    const categories = [
        { id: "all", label: "All Events", count: competitions.length },
        {
            id: "hackathons",
            label: "Hackathons & AI",
            count: competitions.filter((c) =>
                ["machine-learning-hackathon", "agentic-ai-hackathon", "web-hackathon"].includes(c.slug)
            ).length,
        },
        {
            id: "robotics-design",
            label: "Robotics & Design",
            count: competitions.filter((c) =>
                ["turtlebot-pursuit-evasion", "cadathon", "design-marathon"].includes(c.slug)
            ).length,
        },
        {
            id: "business-strategy",
            label: "Business & Strategy",
            count: competitions.filter((c) =>
                ["b-plan-competition", "case-study-competition"].includes(c.slug)
            ).length,
        },
        {
            id: "coding-math",
            label: "Coding & Math",
            count: competitions.filter((c) =>
                ["cp-contest", "math-o-stellar"].includes(c.slug)
            ).length,
        },
    ];

    const filteredCompetitions = competitions.filter((comp) => {
        const matchesSearch =
            comp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            comp.domain.toLowerCase().includes(searchQuery.toLowerCase()) ||
            comp.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
            comp.society.toLowerCase().includes(searchQuery.toLowerCase());

        if (!matchesSearch) return false;

        if (selectedCategory === "all") return true;
        if (selectedCategory === "hackathons") {
            return ["machine-learning-hackathon", "agentic-ai-hackathon", "web-hackathon"].includes(comp.slug);
        }
        if (selectedCategory === "robotics-design") {
            return ["turtlebot-pursuit-evasion", "cadathon", "design-marathon"].includes(comp.slug);
        }
        if (selectedCategory === "business-strategy") {
            return ["b-plan-competition", "case-study-competition"].includes(comp.slug);
        }
        if (selectedCategory === "coding-math") {
            return ["cp-contest", "math-o-stellar"].includes(comp.slug);
        }
        return true;
    });

    return (
        <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground transition-colors duration-300">
            {/* Animated Silk Background */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-35">
                <Silk
                    speed={3}
                    scale={1.2}
                    noiseIntensity={0.2}
                    rotation={0}
                />
            </div>

            <div className="fixed inset-0 z-0 pointer-events-none bg-linear-to-b from-transparent via-background/30 to-background" />
            <div className="fixed left-1/3 top-24 z-0 h-96 w-96 rounded-full bg-amber-400/5 blur-[150px]" />

            {/* Main Content */}
            <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 pt-10 sm:pt-14 pb-28">
                {/* HERO SECTION */}
                <section className="flex flex-col items-center justify-center text-center pt-2 sm:pt-4 pb-6 sm:pb-8">
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-4 sm:mb-5 flex items-center justify-center gap-2 sm:gap-3 max-w-full"
                    >
                        <span className="h-px w-6 sm:w-10 shrink-0 bg-linear-to-r from-transparent to-amber-400" />
                        <p className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.2em] sm:tracking-[0.4em] text-amber-500 dark:text-amber-300">
                            TechZephyr 2026 · Direct Access
                        </p>
                        <span className="h-px w-6 sm:w-10 shrink-0 bg-linear-to-l from-transparent to-amber-400" />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.08 }}
                        className="max-w-5xl text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight landing-heading bg-gradient-to-b from-amber-400 via-amber-600 to-black bg-clip-text text-transparent dark:from-white dark:via-zinc-300 dark:to-zinc-700 leading-tight"
                    >
                        EVENT
                        <span>
                            {" "}
                            REGISTRATIONS
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.18 }}
                        className="mt-4 sm:mt-5 max-w-2xl text-xs leading-6 sm:text-base sm:leading-8 text-muted-foreground px-2"
                    >
                        Select your event and confirm your registration slot instantly. Direct registration forms and official listings are available below.
                    </motion.p>

                    {/* Search & Filter Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.28 }}
                        className="mt-6 sm:mt-8 w-full max-w-4xl"
                    >
                        {/* Search Input */}
                        <div className="relative flex items-center">
                            <Search className="pointer-events-none absolute left-4.5 z-10 text-amber-500/80 dark:text-amber-400/80" size={19} />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search by competition name, domain, or society..."
                                className="w-full rounded-2xl border border-border/80 bg-card/85 py-4 pl-12 pr-11 text-sm text-foreground placeholder:text-muted-foreground/75 backdrop-blur-xl transition-all duration-300 focus:border-amber-500/50 focus:bg-card focus:outline-none focus:ring-2 focus:ring-amber-500/20 shadow-xs"
                            />
                            {searchQuery && (
                                <button
                                    type="button"
                                    onClick={() => setSearchQuery("")}
                                    className="absolute right-4 z-10 rounded-full p-1 text-muted-foreground hover:bg-foreground/10 hover:text-foreground transition-colors"
                                    title="Clear search"
                                >
                                    <X size={16} />
                                </button>
                            )}
                        </div>

                        {/* Category Filter Pills */}
                        <div className="mt-4 sm:mt-5 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                            {categories.map((cat) => {
                                const active = selectedCategory === cat.id;
                                return (
                                    <button
                                        key={cat.id}
                                        onClick={() => setSelectedCategory(cat.id)}
                                        className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                                            active
                                                ? "bg-amber-400 text-black shadow-[0_0_20px_rgba(251,191,36,0.3)] font-bold"
                                                : "border border-border bg-card/60 text-muted-foreground hover:border-border hover:bg-card hover:text-foreground"
                                        }`}
                                    >
                                        <span>{cat.label}</span>
                                        <span
                                            className={`rounded-md px-1.5 py-0.5 text-[10px] font-mono ${
                                                active ? "bg-black/20 text-black font-bold" : "bg-foreground/10 text-muted-foreground"
                                            }`}
                                        >
                                            {cat.count}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </motion.div>
                </section>

                {/* COMPETITIONS REGISTRATION GRID */}
                <section className="border-t border-border pt-10 sm:pt-12">
                    <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-amber-500 dark:text-amber-300">
                                Direct Slot Booking
                            </p>
                            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                                Available Competitions ({filteredCompetitions.length})
                            </h2>
                        </div>
                        <p className="text-xs text-muted-foreground font-mono">
                            ⚡ Instant Confirmation Available
                        </p>
                    </div>

                    {filteredCompetitions.length === 0 ? (
                        <div className="flex flex-col items-center justify-center rounded-3xl border border-border bg-card/50 p-16 text-center">
                            <Search size={36} className="text-muted-foreground mb-4" />
                            <h3 className="text-lg font-bold text-foreground">No competitions found</h3>
                            <p className="mt-1 text-sm text-muted-foreground">
                                Try searching for another keyword or clear the active filter.
                            </p>
                            <button
                                onClick={() => {
                                    setSelectedCategory("all");
                                    setSearchQuery("");
                                }}
                                className="mt-6 rounded-xl bg-amber-400 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-black transition hover:bg-amber-300"
                            >
                                Reset Filters
                            </button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 items-stretch">
                            {filteredCompetitions.map((comp, index) => {
                                const isUnstop =
                                    comp.buttonText === "Register on Unstop" ||
                                    comp.registrationUrl?.includes("unstop.com");

                                return (
                                    <motion.div
                                        key={comp.slug}
                                        initial={{ opacity: 0, y: 25 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.15 }}
                                        transition={{ duration: 0.45, delay: index * 0.05 }}
                                        className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-amber-900/10 bg-card/85 p-6 sm:p-7 backdrop-blur-md transition-all duration-300 hover:border-amber-500/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/10 dark:border-white/10 dark:bg-zinc-950/85 dark:hover:border-amber-400/35 dark:hover:shadow-[0_15px_35px_rgba(0,0,0,0.7)]"
                                    >
                                        {/* Ambient Card Glow */}
                                        <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-amber-400/5 blur-[70px] transition-all duration-500 group-hover:bg-amber-400/10" />

                                        {/* Card Top: Number, Domain Pill, Society */}
                                        <div className="relative z-10 flex flex-col">
                                            <div className="flex items-center justify-between gap-2 mb-4">
                                                <div className="flex items-center gap-2">
                                                    <span className="font-mono text-xs font-bold text-amber-500 dark:text-amber-400">
                                                        {comp.number}
                                                    </span>
                                                    <span className="h-3 w-px bg-foreground/20" />
                                                    <span className="rounded-md border border-border bg-background/60 px-2 py-0.5 text-[10px] font-mono font-medium uppercase tracking-wider text-muted-foreground backdrop-blur-xs">
                                                        {comp.tag}
                                                    </span>
                                                </div>

                                                <span className="rounded-md border border-amber-400/30 bg-amber-400/10 px-2.5 py-0.5 text-[10px] font-mono font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-300 backdrop-blur-xs">
                                                    {comp.society}
                                                </span>
                                            </div>

                                            {/* Competition Title */}
                                            <h3 className={`text-xl sm:text-2xl font-extrabold tracking-tight transition-colors ${
                                                isDark
                                                    ? "text-white group-hover:text-amber-200 drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)]"
                                                    : "text-[#2A1D17] group-hover:text-[#7A2E24]"
                                            }`}>
                                                {comp.title}
                                            </h3>

                                            <p className="mt-1 text-[11px] font-mono uppercase tracking-wider font-bold text-amber-600 dark:text-amber-300/85">
                                                {comp.domain}
                                            </p>

                                            {/* Short Description */}
                                            <p className={`mt-3 text-xs leading-relaxed line-clamp-3 ${
                                                isDark ? "text-white/60" : "text-[#4A3328]/85 font-medium"
                                            }`}>
                                                {comp.shortDescription}
                                            </p>

                                            {/* Meta Highlights Chips */}
                                            <div className={`mt-5 grid grid-cols-2 gap-2 rounded-xl border p-3 text-xs backdrop-blur-md ${
                                                isDark ? "border-white/10 bg-white/5" : "border-[#7A2E24]/15 bg-white/80"
                                            }`}>
                                                <div className="flex items-center gap-2">
                                                    <Trophy size={13} className="text-amber-500 dark:text-amber-400 shrink-0" />
                                                    <span className={`font-bold ${isDark ? "text-amber-300" : "text-amber-700 font-bold"}`}>{comp.prize}</span>
                                                </div>

                                                <div className={`flex items-center gap-2 ${isDark ? "text-white/80" : "text-[#2A1D17]"}`}>
                                                    <Users size={13} className={isDark ? "text-white/40 shrink-0" : "text-[#7A2E24]/70 shrink-0"} />
                                                    <span className="truncate font-medium">{comp.teamSize}</span>
                                                </div>

                                                <div className={`flex items-center gap-2 ${isDark ? "text-white/80" : "text-[#2A1D17]"}`}>
                                                    <Globe size={13} className={isDark ? "text-white/40 shrink-0" : "text-[#7A2E24]/70 shrink-0"} />
                                                    <span className="font-medium">{comp.mode}</span>
                                                </div>

                                                <div className={`flex items-center gap-2 ${isDark ? "text-white/80" : "text-[#2A1D17]"}`}>
                                                    <Clock size={13} className={isDark ? "text-white/40 shrink-0" : "text-[#7A2E24]/70 shrink-0"} />
                                                    <span className="truncate font-medium">{comp.duration}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Actions: Direct Registration + Details Link */}
                                        <div className="relative z-10 mt-6 pt-4 border-t border-border flex flex-col gap-2.5">
                                            {!isUnstop && (
                                                <div className={`flex items-center justify-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-[10px] sm:text-[10.5px] font-mono font-semibold text-center ${
                                                    isDark 
                                                        ? "border-amber-400/30 bg-amber-400/10 text-amber-300" 
                                                        : "border-amber-600/25 bg-amber-500/10 text-amber-900"
                                                }`}>
                                                    <span className="shrink-0 text-xs">⚠️</span>
                                                    <span>Only for participants shortlisted after Round 1</span>
                                                </div>
                                            )}

                                            <a
                                                href={comp.registrationUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group/btn relative inline-flex w-full items-center justify-center gap-2 rounded-xl bg-amber-400 hover:bg-amber-300 px-5 py-3 text-xs font-bold uppercase tracking-wider text-black shadow-sm transition-all duration-300 active:scale-[0.98]"
                                            >
                                                <span>
                                                    {comp.buttonText || (isUnstop ? "Register on Unstop" : "Confirm Your Slot")}
                                                </span>
                                                <ExternalLink
                                                    size={14}
                                                    className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                                                />
                                            </a>

                                            <Link
                                                href={`/Competitions/${comp.slug}`}
                                                className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl border border-border bg-background/50 backdrop-blur-xs py-2.5 text-xs font-medium uppercase tracking-wider text-muted-foreground transition-all duration-300 hover:border-foreground/20 hover:bg-background/80 hover:text-foreground"
                                            >
                                                <span>View Competition Details</span>
                                                <ArrowUpRight size={13} className="text-muted-foreground" />
                                            </Link>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    )}
                </section>
            </div>

            <Navbar />
        </main>
    );
}
