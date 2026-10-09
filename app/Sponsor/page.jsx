"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    ExternalLink,
    Handshake,
    Sparkles,
    Building2,
    ArrowUpRight,
    ShieldCheck,
    Globe,
    Mail,
    Phone,
    MessageSquare,
    Copy,
    Check,
} from "lucide-react";

import Silk from "@/components/animated_bg/Silk.jsx";
import Navbar from "@/components/Navbar.jsx";
import SectionHeading from "@/components/SectionHeading";
import { useTheme } from "@/components/ThemeProvider";

export default function SponsorsPage() {
    const { resolvedTheme } = useTheme();
    const isDark = resolvedTheme === "dark";
    const [copiedField, setCopiedField] = useState("");

    const handleCopy = (text, fieldName) => {
        if (typeof navigator !== "undefined" && navigator.clipboard) {
            navigator.clipboard.writeText(text);
            setCopiedField(fieldName);
            setTimeout(() => setCopiedField(""), 2200);
        }
    };
    /*
    ============================================================
    CURRENT SPONSORS
    ============================================================
    Replace the logo paths with your actual files from /public
    whenever you have them.
    */

    const sponsors = [
        {
            id: "world-technocon",
            name: "World Technocon",
            tier: "Associate Sponsor",
            tag: "ASSOCIATE PARTNER",
            domain: "Tech & Innovation Hub",
            description:
                "Empowering youth innovation through hands-on technical ecosystems, workshops, and industry collaboration.",
            highlights: ["Tech Ecosystem", "Innovation Hub", "Industry Connect"],
            logo: "/World Technocon.webp",
            website: "https://technocon.org/",
            theme: {
                border: "group-hover:border-rose-500/40",
                glow: "bg-rose-500/10 group-hover:bg-rose-500/25",
                tagBg: "bg-rose-500/10 border-rose-500/30 text-rose-300",
                dot: "bg-rose-400 shadow-[0_0_10px_rgba(244,63,94,0.8)]",
                btnHover: "hover:bg-rose-400 hover:shadow-[0_0_30px_rgba(244,63,94,0.35)]",
            },
        },
        {
            id: "goibibo",
            name: "Goibibo",
            tier: "1st Event Sponsor",
            tag: "TRAVEL PARTNER",
            domain: "Travel & Mobility Platform",
            description:
                "India's leading digital travel ecosystem, connecting students and tech innovators seamlessly across the nation.",
            highlights: ["Digital Travel", "Mobility Network", "Youth Journeys"],
            logo: "/Goibibo.png",
            website: "https://www.goibibo.com/",
            theme: {
                border: "group-hover:border-amber-400/40",
                glow: "bg-amber-400/10 group-hover:bg-amber-400/25",
                tagBg: "bg-amber-400/10 border-amber-400/30 text-amber-300",
                dot: "bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.8)]",
                btnHover: "hover:bg-amber-300 hover:shadow-[0_0_30px_rgba(251,191,36,0.35)]",
            },
        },
        {
            id: "fin-maverick",
            name: "Fin Maverick",
            tier: "2nd Event Sponsor",
            tag: "FINANCE PARTNER",
            domain: "Financial Markets & Insights",
            description:
                "Fostering financial awareness, market intelligence, and practical investment strategies for future innovators.",
            highlights: ["FinTech Literacy", "Market Insights", "Wealth Strategy"],
            logo: "/Fin Maverick.png",
            website: "https://www.finmaverick.com/",
            theme: {
                border: "group-hover:border-emerald-400/40",
                glow: "bg-emerald-400/10 group-hover:bg-emerald-400/25",
                tagBg: "bg-emerald-400/10 border-emerald-400/30 text-emerald-300",
                dot: "bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]",
                btnHover: "hover:bg-emerald-300 hover:shadow-[0_0_30px_rgba(52,211,153,0.35)]",
            },
        },
    ];

    /*
    ============================================================
    PAST SPONSORS
    ============================================================
    Add/remove names whenever required.
    */

    const pastSponsors = [
        {
            name: "GeeksforGeeks",
            logo: "https://upload.wikimedia.org/wikipedia/commons/e/eb/GeeksForGeeks_logo.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
        },
        {
            name: "Hostinger",
            logo: "https://upload.wikimedia.org/wikipedia/commons/8/82/Hostinger_logo.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
        },
        {
            name: "AceInt",
            logo: "https://aceint-website.s3.ap-south-1.amazonaws.com/productlogo/combinePrimary.png",
        },
        {
            name: "Unstop",
            logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/branding-guidelines/logos/blue/Unstop-Logo-Blue-Large.png",
        },
        {
            name: "RedString",
            logo: "https://www.redstring.co.in/opengraph-image?b991850bcbebc296",
        },
        {
            name: "WorldQuant",
            logo: "https://upload.wikimedia.org/wikipedia/commons/b/bf/WorldQuant_Text_Logo_2022.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
        },
        {
            name: "Naxxatra",
            logo: "https://www.naxxatra.com/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fimages%2Fcommon%2Fnaxxatra-header-negative.25d71fc1baa36bd1f0b9d15f9e7a09f1.png&w=3840&q=75",
        },
        {
            name: "Zerodha",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Zerodha_logo.svg/960px-Zerodha_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
        },
        {
            name: "Wadhwani Foundation",
            logo: "https://wadhwanifoundation.org/wp-content/uploads/2023/10/Wadhwani-Foundation-Logo.png",
        },
        {
            name: "ISB",
            logo: "https://images.indianexpress.com/2024/11/Untitled-design-60.jpg",
        },
        {
            name: "StockGro",
            logo: "https://shop.stockgro.club/cdn/shop/files/Group_43782_280x.svg?v=1693126447",
        },
        {
            name: "EncodersPro",
            logo: "https://encoderspro.com/store/1/enpro_logo%20(1).png",
        },
        {
            name: "ISRO",
            logo: "https://i.pinimg.com/736x/53/90/cc/5390cc763267fcdf77044bb570805350.jpg",
        },
        {
            name: "Pathway",
            logo: "https://sg-imgs.dealroom.co/27f5be6a034528c54c59d7a1df317177.png",
        },
    ];

    const sponsorStats = [
        {
            value: "03",
            label: "Current Partners",
        },
        {
            value: "01",
            label: "Associate Partner",
        },
        {
            value: "02",
            label: "Event Sponsors",
        },
        {
            value: "10k+",
            label: "Our Ecosystem",
        },
    ];

    return (
        <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground transition-colors duration-300">
            {/* =========================================================
          BACKGROUND
      ========================================================= */}

            <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
                <Silk
                    speed={3}
                    scale={1.2}
                    noiseIntensity={0.2}
                    rotation={0}
                />
            </div>

            <div className="fixed inset-0 z-0 pointer-events-none bg-linear-to-b from-transparent via-background/20 to-background" />

            <div className="fixed left-1/4 top-20 z-0 h-96 w-96 rounded-full bg-amber-400/5 blur-[140px]" />

            {/* =========================================================
          MAIN CONTENT
      ========================================================= */}

            <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 pt-24 pb-32">

                {/* =======================================================
            HERO
        ======================================================= */}

                <section className="flex min-h-[72vh] flex-col items-center justify-center text-center">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-6 flex items-center justify-center gap-2 sm:gap-3 max-w-full"
                    >
                        <span className="h-px w-6 sm:w-10 shrink-0 bg-linear-to-r from-transparent to-amber-400" />

                        <p className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.2em] sm:tracking-[0.4em] text-amber-500 dark:text-amber-300">
                            TechZephyr 2026 · Partnerships
                        </p>

                        <span className="h-px w-6 sm:w-10 shrink-0 bg-linear-to-l from-transparent to-amber-400" />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.08 }}
                        className="max-w-5xl text-4xl sm:text-6xl md:text-8xl font-black tracking-tight landing-heading bg-gradient-to-b from-amber-400 via-amber-600 to-black bg-clip-text text-transparent dark:from-white dark:via-zinc-300 dark:to-zinc-700"
                    >
                        OUR
                        <span>
                            {" "}
                            SPONSORS
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.18 }}
                        className="mt-7 max-w-2xl text-sm leading-8 text-muted-foreground sm:text-base"
                    >
                        TechZephyr is powered by organisations that believe in innovation,
                        technology, entrepreneurship and the potential of the next
                        generation of innovators.
                    </motion.p>

                    {/* Hero badge */}

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.28 }}
                        className={`mt-12 flex items-center gap-3 rounded-full border px-5 py-2.5 backdrop-blur-xl ${
                            isDark 
                                ? "border-amber-400/20 bg-amber-400/5 text-white" 
                                : "border-[#7A2E24]/20 bg-[#7A2E24]/5 text-[#7A2E24]"
                        }`}
                    >
                        <Handshake size={15} className={isDark ? "text-amber-300" : "text-[#7A2E24]"} />

                        <span className={`text-[10px] font-semibold uppercase tracking-[0.35em] ${
                            isDark ? "text-white/60" : "text-[#7A2E24]"
                        }`}>
                            Building Partnerships · Creating Impact
                        </span>
                    </motion.div>

                    {/* Hero stats */}

                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.38 }}
                        className={`mt-20 grid w-full max-w-3xl grid-cols-2 border backdrop-blur-xl md:grid-cols-4 rounded-2xl overflow-hidden transition-colors duration-300 ${
                            isDark 
                                ? "border-white/10 bg-white/[0.025]" 
                                : "border-[#7A2E24]/15 bg-white/70 shadow-xl shadow-amber-950/5"
                        }`}
                    >
                        {sponsorStats.map((stat, index) => (
                            <div
                                key={stat.label}
                                className={`p-6 ${index !== sponsorStats.length - 1
                                    ? isDark ? "border-b border-white/10 md:border-b-0 md:border-r" : "border-b border-[#7A2E24]/10 md:border-b-0 md:border-r"
                                    : ""
                                    }`}
                            >
                                <p className={`text-3xl font-black ${isDark ? "text-amber-300" : "text-[#8B3A2E]"}`}>
                                    {stat.value}
                                </p>

                                <p className={`mt-2 text-[9px] uppercase tracking-[0.25em] font-semibold ${
                                    isDark ? "text-white/35" : "text-[#4A3328]/70"
                                }`}>
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </motion.div>
                </section>

                {/* =======================================================
            CURRENT SPONSORS
        ======================================================= */}

                <section className={`border-t pt-20 ${isDark ? "border-white/10" : "border-[#7A2E24]/10"}`}>

                    <SectionHeading
                        subtitle="TechZephyr 2026"
                        title="Our Partners"
                    />

                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8 items-stretch">

                        {sponsors.map((sponsor, index) => (
                            <motion.div
                                key={sponsor.id}
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
                                    amount: 0.2,
                                }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                className={`group relative flex flex-col justify-between overflow-hidden rounded-[28px] border p-7 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2.5 hover:shadow-2xl ${
                                    isDark 
                                        ? `border-white/10 bg-linear-to-b from-white/[0.05] via-white/[0.02] to-transparent ${sponsor.theme.border}` 
                                        : `border-[#7A2E24]/15 bg-white/80 shadow-xl shadow-amber-950/5 hover:border-[#7A2E24]/30`
                                }`}
                            >

                                {/* Ambient dynamic background glow */}
                                <div className={`pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full blur-[90px] transition-all duration-700 ${sponsor.theme.glow}`} />
                                <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-white/[0.02] blur-[80px]" />

                                {/* Top Bar: Tag Badge + Index */}
                                <div className="relative z-10 flex items-center justify-between">
                                    <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] backdrop-blur-md ${sponsor.theme.tagBg}`}>
                                        <span className={`h-1.5 w-1.5 rounded-full ${sponsor.theme.dot}`} />
                                        {sponsor.tag}
                                    </span>

                                    <span className={`font-mono text-xs font-semibold tracking-widest transition-colors ${
                                        isDark 
                                            ? "text-white/30 group-hover:text-white/60" 
                                            : "text-[#7A2E24]/40 group-hover:text-[#7A2E24]"
                                    }`}>
                                        0{index + 1}
                                    </span>
                                </div>

                                {/* Logo Showcase Podium */}
                                <div className={`relative z-10 my-6 flex h-36 w-full items-center justify-center rounded-2xl border p-4 backdrop-blur-md transition-all duration-500 ${
                                    isDark 
                                        ? "border-white/10 bg-black/40 group-hover:border-white/20 group-hover:bg-black/60 group-hover:shadow-[0_0_30px_rgba(0,0,0,0.6)]" 
                                        : "border-[#7A2E24]/15 bg-white group-hover:border-[#7A2E24]/30 group-hover:shadow-md"
                                }`}>
                                    <div className="absolute inset-0 bg-linear-to-tr from-white/[0.02] to-transparent pointer-events-none" />
                                    <img
                                        src={sponsor.logo}
                                        alt={`${sponsor.name} logo`}
                                        className="relative z-10 max-h-20 max-w-[170px] object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
                                    />
                                </div>

                                {/* Details / Identity Area */}
                                <div className="relative z-10 flex flex-1 flex-col justify-between">
                                    <div>
                                        <h3 className={`text-2xl sm:text-3xl font-black tracking-tight transition-colors ${
                                            isDark 
                                                ? "text-white group-hover:text-amber-200" 
                                                : "text-[#2A1D17] group-hover:text-[#8B3A2E]"
                                        }`}>
                                            {sponsor.name}
                                        </h3>

                                        <p className={`mt-1 text-[11px] font-mono uppercase tracking-[0.2em] font-bold ${
                                            isDark ? "text-amber-400/80" : "text-[#8B3A2E]"
                                        }`}>
                                            {sponsor.domain}
                                        </p>

                                        {/* Concise Value Description */}
                                        <p className={`mt-3.5 text-xs sm:text-[13px] leading-relaxed ${
                                            isDark ? "text-white/65" : "text-[#4A3328]/85 font-medium"
                                        }`}>
                                            {sponsor.description}
                                        </p>

                                        {/* Minimalist Highlight Chips */}
                                        <div className="mt-5 flex flex-wrap gap-1.5">
                                            {sponsor.highlights.map((highlight) => (
                                                <span
                                                    key={highlight}
                                                    className={`rounded-lg border px-2.5 py-1 text-[10px] font-medium tracking-wide transition-colors ${
                                                        isDark 
                                                            ? "border-white/10 bg-white/[0.03] text-white/60 group-hover:border-white/20 group-hover:text-white/85" 
                                                            : "border-[#7A2E24]/15 bg-[#7A2E24]/5 text-[#4A3328] group-hover:border-[#7A2E24]/30 group-hover:text-[#2A1D17]"
                                                    }`}
                                                >
                                                    {highlight}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Footer Action */}
                                    <div className={`mt-7 pt-5 border-t ${isDark ? "border-white/10" : "border-[#7A2E24]/10"}`}>
                                        <a
                                            href={sponsor.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`group/btn inline-flex w-full items-center justify-center gap-2 rounded-xl bg-amber-400 px-5 py-3.5 text-xs font-black uppercase tracking-[0.2em] text-black transition-all duration-300 ${sponsor.theme.btnHover}`}
                                        >
                                            <span>Visit Website</span>
                                            <ArrowUpRight
                                                size={15}
                                                className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                                            />
                                        </a>
                                    </div>
                                </div>

                            </motion.div>
                        ))}

                    </div>

                </section>

                {/* =======================================================
            WHY PARTNERS MATTER
        ======================================================= */}

                <section className={`mt-28 border-t pt-20 ${isDark ? "border-white/10" : "border-[#7A2E24]/10"}`}>

                    <SectionHeading
                        subtitle="Beyond Sponsorship"
                        title="Partnerships That Create Impact"
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 35 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className={`group relative overflow-hidden rounded-[32px] border backdrop-blur-xl transition-colors duration-300 ${
                            isDark 
                                ? "border-white/10 bg-white/[0.025]" 
                                : "border-[#7A2E24]/15 bg-white/70 shadow-xl shadow-amber-950/5"
                        }`}
                    >

                        {/* Ambient glow */}
                        <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-amber-400/5 blur-[120px]" />
                        <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-amber-400/5 blur-[120px]" />

                        <div className="relative">

                            {/* Card Header */}
                            <div className={`border-b px-8 py-7 sm:px-10 ${
                                isDark ? "border-white/10 bg-zinc-950/30" : "border-[#7A2E24]/10 bg-amber-500/5"
                            }`}>

                                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                                    <div>
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-amber-600 dark:text-amber-300">
                                            Our Partnership Philosophy
                                        </p>

                                        <p className={`mt-2 max-w-2xl text-sm leading-7 ${
                                            isDark ? "text-white/40" : "text-[#4A3328]/85 font-medium"
                                        }`}>
                                            Our sponsors and collaborators are more than supporters.
                                            They help us create opportunities, connect students with
                                            industry and inspire the next generation of innovators.
                                        </p>
                                    </div>

                                    <span className={`w-fit rounded-md border px-3 py-1.5 text-[9px] font-mono uppercase tracking-widest font-bold ${
                                        isDark 
                                            ? "border-amber-400/20 bg-amber-400/5 text-amber-300" 
                                            : "border-[#7A2E24]/20 bg-[#7A2E24]/10 text-[#7A2E24]"
                                    }`}>
                                        IMPACT / 03
                                    </span>

                                </div>

                            </div>


                            {/* Impact Items */}
                            <div className="grid md:grid-cols-3">

                                {[
                                    {
                                        number: "01",
                                        title: "Enable",
                                        text:
                                            "Our partners help us create larger opportunities for students through competitions, workshops and technical experiences.",
                                    },
                                    {
                                        number: "02",
                                        title: "Connect",
                                        text:
                                            "Industry partnerships bring students closer to professionals, organisations, technologies and real-world challenges.",
                                    },
                                    {
                                        number: "03",
                                        title: "Inspire",
                                        text:
                                            "Strong collaborations encourage students to transform technical knowledge into ideas, products and meaningful impact.",
                                    },
                                ].map((item, index) => (

                                    <motion.div
                                        key={item.number}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.45,
                                            delay: index * 0.1,
                                        }}
                                        className={`group/item relative p-8 sm:p-10 ${index !== 2
                                            ? isDark ? "border-b border-white/10 md:border-b-0 md:border-r" : "border-b border-[#7A2E24]/10 md:border-b-0 md:border-r"
                                            : ""
                                            }`}
                                    >

                                        {/* Number */}
                                        <div className="flex items-center gap-4">

                                            <span className={`text-xs font-mono tracking-[0.3em] font-bold ${
                                                isDark ? "text-amber-300" : "text-[#7A2E24]"
                                            }`}>
                                                {item.number}
                                            </span>

                                            <span className={`h-px w-12 transition-all duration-300 group-hover/item:w-20 ${
                                                isDark 
                                                    ? "bg-linear-to-r from-amber-400/50 to-transparent" 
                                                    : "bg-linear-to-r from-[#7A2E24]/50 to-transparent"
                                            }`} />

                                        </div>


                                        {/* Title */}
                                        <h3 className={`mt-10 text-2xl font-bold tracking-tight ${
                                            isDark ? "text-white" : "text-[#2A1D17]"
                                        }`}>
                                            {item.title}
                                        </h3>


                                        {/* Description */}
                                        <p className={`mt-4 text-sm leading-7 ${
                                            isDark ? "text-white/45" : "text-[#4A3328]/85 font-medium"
                                        }`}>
                                            {item.text}
                                        </p>


                                        {/* Bottom Accent */}
                                        <div className={`mt-8 h-px w-10 transition-all duration-300 group-hover/item:w-24 ${
                                            isDark ? "bg-amber-400/40" : "bg-[#7A2E24]/40"
                                        }`} />

                                    </motion.div>

                                ))}

                            </div>


                            {/* Bottom Label */}
                            <div className={`border-t px-8 py-5 sm:px-10 ${
                                isDark ? "border-white/5 bg-black/20" : "border-[#7A2E24]/10 bg-[#7A2E24]/5"
                            }`}>

                                <p className={`text-[9px] uppercase tracking-[0.4em] font-semibold ${
                                    isDark ? "text-white/25" : "text-[#7A2E24]/70"
                                }`}>
                                    Science • Technology • Innovation • Collaboration
                                </p>

                            </div>

                        </div>

                    </motion.div>

                </section>

                {/* =======================================================
            PAST SPONSORS
        ======================================================= */}

                <section className={`mt-28 border-t pt-20 ${isDark ? "border-white/10" : "border-[#7A2E24]/10"}`}>

                    <SectionHeading
                        subtitle="Legacy & Archives"
                        title="Past Sponsors & Collaborators"
                    />

                    <motion.div
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
                            amount: 0.15,
                        }}
                        transition={{
                            duration: 0.6,
                        }}
                        className={`relative overflow-hidden rounded-[30px] border p-7 backdrop-blur-xl sm:p-10 transition-colors duration-300 ${
                            isDark 
                                ? "border-white/10 bg-white/[0.025]" 
                                : "border-[#7A2E24]/15 bg-white/70 shadow-xl shadow-amber-950/5"
                        }`}
                    >

                        {/* Ambient background */}

                        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-amber-400/5 blur-[110px]" />

                        <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-orange-400/5 blur-[100px]" />

                        <div className="relative">

                            {/* Header */}

                            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

                                <div>

                                    <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-amber-600 dark:text-amber-300">
                                        Our Legacy
                                    </p>

                                    <h3 className={`mt-3 text-2xl font-bold tracking-tight sm:text-3xl ${
                                        isDark ? "text-white" : "text-[#2A1D17]"
                                    }`}>
                                        Previous Partners
                                    </h3>

                                    <p className={`mt-3 max-w-2xl text-sm leading-7 ${
                                        isDark ? "text-white/40" : "text-[#4A3328]/85 font-medium"
                                    }`}>
                                        Organisations and communities that have supported TechZephyr
                                        throughout its journey and contributed to the growth of our
                                        technical ecosystem.
                                    </p>

                                </div>

                                <div className={`w-fit shrink-0 rounded-md border px-3 py-1.5 ${
                                    isDark ? "border-white/10 bg-white/5" : "border-[#7A2E24]/15 bg-amber-500/10"
                                }`}>
                                    <span className={`font-mono text-[9px] uppercase tracking-widest font-bold ${
                                        isDark ? "text-white/35" : "text-[#7A2E24]/80"
                                    }`}>
                                        ARCHIVE / PARTNERS
                                    </span>
                                </div>

                            </div>


                            {/* Divider */}

                            <div className={`my-8 h-px ${
                                isDark 
                                    ? "bg-linear-to-r from-amber-400/30 via-white/10 to-transparent" 
                                    : "bg-linear-to-r from-[#7A2E24]/30 via-[#7A2E24]/10 to-transparent"
                            }`} />


                            {/* Sponsor Grid */}

                            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">

                                {pastSponsors.map((sponsor, index) => (
                                    <motion.div
                                        key={sponsor.name}
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
                                        }}
                                        transition={{
                                            duration: 0.35,
                                            delay: index * 0.04,
                                        }}
                                        className={`group relative overflow-hidden rounded-2xl border p-4 transition-all duration-300 ${
                                            isDark 
                                                ? "border-white/10 bg-white/[0.025] hover:border-amber-400/20 hover:bg-amber-400/[0.035]" 
                                                : "border-[#7A2E24]/15 bg-white hover:border-[#7A2E24]/35 shadow-xs"
                                        }`}
                                    >

                                        {/* Card glow */}

                                        <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-amber-400/5 blur-2xl" />

                                        {/* Logo */}

                                        <div className={`relative flex h-24 items-center justify-center rounded-xl border p-4 ${
                                            isDark ? "border-white/5 bg-black/30" : "border-[#7A2E24]/10 bg-[#FAF7F2]"
                                        }`}>

                                            <img
                                                src={sponsor.logo}
                                                alt={`${sponsor.name} logo`}
                                                className="max-h-16 max-w-full object-contain"
                                            />

                                        </div>

                                        {/* Name */}

                                        <div className="mt-4 text-center">

                                            <p className={`text-[11px] font-semibold tracking-wide ${
                                                isDark ? "text-white/70" : "text-[#2A1D17]"
                                            }`}>
                                                {sponsor.name}
                                            </p>

                                        </div>

                                    </motion.div>
                                ))}

                            </div>


                            {/* Bottom label */}

                            <div className="mt-8 flex items-center gap-4">

                                <div className={`h-px flex-1 ${isDark ? "bg-linear-to-r from-amber-400/20 to-transparent" : "bg-linear-to-r from-[#7A2E24]/20 to-transparent"}`} />

                                <p className={`shrink-0 text-[9px] uppercase tracking-[0.3em] font-semibold ${
                                    isDark ? "text-white/20" : "text-[#7A2E24]/60"
                                }`}>
                                    TechZephyr · Previous Editions
                                </p>

                                <div className={`h-px flex-1 ${isDark ? "bg-linear-to-l from-amber-400/20 to-transparent" : "bg-linear-to-l from-[#7A2E24]/20 to-transparent"}`} />

                            </div>

                        </div>

                    </motion.div>

                </section>

                {/* =======================================================
            BECOME A PARTNER & SPONSORSHIP INQUIRIES
        ======================================================= */}

                <section className="mt-28">

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 35,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 0.6,
                        }}
                        className={`relative overflow-hidden rounded-[35px] border p-8 sm:p-12 lg:p-16 transition-all duration-300 ${
                            isDark 
                                ? "border-amber-400/20 bg-linear-to-br from-amber-400/[0.08] via-white/[0.025] to-transparent text-white shadow-[0_0_50px_rgba(245,158,11,0.05)]" 
                                : "border-[#7A2E24]/20 bg-linear-to-br from-amber-500/10 via-white/90 to-white/70 text-[#2A1D17] shadow-2xl shadow-amber-950/5"
                        }`}
                    >

                        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-amber-400/10 blur-[120px]" />
                        <div className="pointer-events-none absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-orange-400/10 blur-[120px]" />

                        <div className="relative">

                            {/* Header Row */}
                            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-8 border-b border-border/60">

                                <div className="max-w-3xl">

                                    <p className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-[0.35em] text-amber-600 dark:text-amber-300">
                                        <Handshake size={14} />
                                        Partner With TechZephyr 2026
                                    </p>

                                    <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                                        Build the next generation of innovators with us.
                                    </h2>

                                    <p className={`mt-4 text-sm leading-8 ${
                                        isDark ? "text-white/60" : "text-[#4A3328]/85 font-medium"
                                    }`}>
                                        Partner with TechZephyr to connect your organisation with
                                        talented students, emerging technologies, technical
                                        communities and a growing innovation ecosystem at IIT
                                        Bhubaneswar.
                                    </p>

                                </div>

                                <a
                                    href="mailto:gsecsnt.sg@iitbbs.ac.in?subject=TechZephyr%202026%20Sponsorship%20Inquiry"
                                    className="group inline-flex shrink-0 w-fit items-center justify-center gap-3 rounded-xl bg-amber-400 px-7 py-4 text-xs font-bold uppercase tracking-[0.22em] text-black transition-all duration-300 hover:bg-amber-300 hover:shadow-[0_0_35px_rgba(251,191,36,.3)] active:scale-[0.98]"
                                >
                                    <span>Become a Partner</span>

                                    <ArrowUpRight
                                        size={16}
                                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                    />
                                </a>

                            </div>

                            {/* DIRECT CONTACT & SPONSORSHIP DESK CARDS */}
                            <div className="mt-10">
                                <p className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-amber-600 dark:text-amber-400 mb-5">
                                    Direct Sponsorship Contacts & Inquiries
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
                                    {/* EMAIL CARD */}
                                    <div className={`relative overflow-hidden rounded-2xl border p-5 sm:p-6 backdrop-blur-xl transition-all duration-300 ${
                                        isDark
                                            ? "border-white/10 bg-white/[0.03] hover:border-amber-400/40 hover:bg-white/[0.05]"
                                            : "border-[#7A2E24]/15 bg-white/85 shadow-lg shadow-amber-950/5 hover:border-[#7A2E24]/35 hover:bg-white"
                                    }`}>
                                        <div className="flex items-center justify-between gap-3">
                                            <div className="flex items-center gap-3 min-w-0">
                                                <div className={`flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl border ${
                                                    isDark
                                                        ? "border-amber-400/30 bg-amber-400/10 text-amber-300"
                                                        : "border-[#7A2E24]/20 bg-[#7A2E24]/5 text-[#7A2E24]"
                                                }`}>
                                                    <Mail size={18} />
                                                </div>
                                                <div className="min-w-0">
                                                    <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground font-semibold">
                                                        Official Email
                                                    </p>
                                                </div>
                                            </div>

                                            <button
                                                onClick={() => handleCopy("gsecsnt.sg@iitbbs.ac.in", "email")}
                                                title="Copy email address"
                                                className={`shrink-0 flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-[11px] font-mono font-medium transition-all ${
                                                    copiedField === "email"
                                                        ? "border-emerald-500/50 bg-emerald-500/20 text-emerald-400"
                                                        : isDark
                                                        ? "border-white/10 bg-white/5 text-white/70 hover:border-white/20 hover:text-white"
                                                        : "border-[#7A2E24]/15 bg-[#7A2E24]/5 text-[#4A3328] hover:border-[#7A2E24]/30 hover:text-[#2A1D17]"
                                                }`}
                                            >
                                                {copiedField === "email" ? (
                                                    <>
                                                        <Check size={13} className="text-emerald-400" />
                                                        <span>Copied!</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <Copy size={13} />
                                                        <span>Copy</span>
                                                    </>
                                                )}
                                            </button>
                                        </div>

                                        <p className={`mt-3 text-sm sm:text-base font-bold font-mono tracking-tight select-all break-all ${
                                            isDark ? "text-white" : "text-[#2A1D17]"
                                        }`}>
                                            gsecsnt.sg@iitbbs.ac.in
                                        </p>

                                        <p className={`mt-3 text-xs leading-relaxed ${isDark ? "text-white/50" : "text-[#4A3328]/75 font-medium"}`}>
                                            Direct channel to the General Secretary, Science & Technology Council, IIT Bhubaneswar for formal sponsorship proposals, deliverable decks, and partnerships.
                                        </p>

                                        <div className="mt-5 pt-4 border-t border-border/50 flex items-center justify-between gap-3">
                                            <span className="text-[10px] font-mono text-muted-foreground">General Secretary &middot; STC</span>
                                            <a
                                                href="mailto:gsecsnt.sg@iitbbs.ac.in?subject=TechZephyr%202026%20Sponsorship%20Inquiry"
                                                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-amber-600 dark:text-amber-400 hover:underline"
                                            >
                                                <span>Send Email</span>
                                                <ExternalLink size={12} />
                                            </a>
                                        </div>
                                    </div>

                                    {/* PHONE / WHATSAPP CARD */}
                                    <div className={`relative overflow-hidden rounded-2xl border p-5 sm:p-6 backdrop-blur-xl transition-all duration-300 ${
                                        isDark
                                            ? "border-white/10 bg-white/[0.03] hover:border-amber-400/40 hover:bg-white/[0.05]"
                                            : "border-[#7A2E24]/15 bg-white/85 shadow-lg shadow-amber-950/5 hover:border-[#7A2E24]/35 hover:bg-white"
                                    }`}>
                                        <div className="flex items-center justify-between gap-3">
                                            <div className="flex items-center gap-3 min-w-0">
                                                <div className={`flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl border ${
                                                    isDark
                                                        ? "border-amber-400/30 bg-amber-400/10 text-amber-300"
                                                        : "border-[#7A2E24]/20 bg-[#7A2E24]/5 text-[#7A2E24]"
                                                }`}>
                                                    <Phone size={18} />
                                                </div>
                                                <div className="min-w-0">
                                                    <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground font-semibold">
                                                        Sponsorship Hotline
                                                    </p>
                                                </div>
                                            </div>

                                            <button
                                                onClick={() => handleCopy("9801888417", "phone")}
                                                title="Copy phone number"
                                                className={`shrink-0 flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-[11px] font-mono font-medium transition-all ${
                                                    copiedField === "phone"
                                                        ? "border-emerald-500/50 bg-emerald-500/20 text-emerald-400"
                                                        : isDark
                                                        ? "border-white/10 bg-white/5 text-white/70 hover:border-white/20 hover:text-white"
                                                        : "border-[#7A2E24]/15 bg-[#7A2E24]/5 text-[#4A3328] hover:border-[#7A2E24]/30 hover:text-[#2A1D17]"
                                                }`}
                                            >
                                                {copiedField === "phone" ? (
                                                    <>
                                                        <Check size={13} className="text-emerald-400" />
                                                        <span>Copied!</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <Copy size={13} />
                                                        <span>Copy</span>
                                                    </>
                                                )}
                                            </button>
                                        </div>

                                        <p className={`mt-3 text-sm sm:text-base font-bold font-mono tracking-tight select-all ${
                                            isDark ? "text-white" : "text-[#2A1D17]"
                                        }`}>
                                            +91 98018 88417
                                        </p>

                                        <p className={`mt-3 text-xs leading-relaxed ${isDark ? "text-white/50" : "text-[#4A3328]/75 font-medium"}`}>
                                            For immediate discussions, customized deliverable packages, stall spaces, and quick queries regarding TechZephyr 2026 sponsorship.
                                        </p>

                                        <div className="mt-5 pt-4 border-t border-border/50 flex items-center justify-between gap-3">
                                            <a
                                                href="https://wa.me/919801888417?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20sponsoring%20TechZephyr%202026%20at%20IIT%20Bhubaneswar."
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-emerald-500 dark:text-emerald-400 hover:underline"
                                            >
                                                <MessageSquare size={12} />
                                                <span>WhatsApp Us</span>
                                            </a>
                                            <a
                                                href="tel:+919801888417"
                                                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-amber-600 dark:text-amber-400 hover:underline"
                                            >
                                                <span>Call Desk</span>
                                                <ExternalLink size={12} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className={`relative mt-10 h-px ${
                                isDark 
                                    ? "bg-linear-to-r from-amber-400/40 via-white/10 to-transparent" 
                                    : "bg-linear-to-r from-[#7A2E24]/30 via-[#7A2E24]/10 to-transparent"
                            }`} />

                            {/* Footer metadata */}
                            <div className="relative mt-5 flex flex-wrap items-center gap-x-4 sm:gap-x-8 gap-y-2">

                                <p className={`text-[9px] uppercase tracking-[0.2em] sm:tracking-[0.35em] font-semibold ${
                                    isDark ? "text-white/35" : "text-[#7A2E24]/70"
                                }`}>
                                    IIT Bhubaneswar
                                </p>

                                <span className={`h-1 w-1 rounded-full ${isDark ? "bg-amber-400/40" : "bg-[#7A2E24]/40"}`} />

                                <p className={`text-[9px] uppercase tracking-[0.2em] sm:tracking-[0.35em] font-semibold ${
                                    isDark ? "text-white/35" : "text-[#7A2E24]/70"
                                }`}>
                                    Science & Technology Council
                                </p>

                                <span className={`h-1 w-1 rounded-full ${isDark ? "bg-amber-400/40" : "bg-[#7A2E24]/40"}`} />

                                <p className={`text-[9px] uppercase tracking-[0.2em] sm:tracking-[0.35em] font-semibold ${
                                    isDark ? "text-white/35" : "text-[#7A2E24]/70"
                                }`}>
                                    TechZephyr 2026
                                </p>

                            </div>

                        </div>

                    </motion.div>

                </section>

            </div>

            <Navbar />
        </main>
    );
}