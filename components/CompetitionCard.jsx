"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";

export default function CompetitionCard({ number, title, description, tag, slug, bgImage, image }) {
    const cardBg = bgImage || image;
    const { resolvedTheme } = useTheme();
    const isDark = resolvedTheme === "dark";

    return (
        <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6, scale: 1.015 }}
            whileTap={{ scale: 0.99 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-amber-900/10 bg-card/85 p-7 sm:p-8 backdrop-blur-md transition-all duration-300 hover:border-amber-500/40 hover:shadow-xl hover:shadow-amber-500/10 dark:border-white/10 dark:bg-zinc-950/85 dark:hover:border-amber-400/35 dark:hover:shadow-[0_15px_35px_rgba(0,0,0,0.7)]"
        >
            {/* Thematic Domain Background Image with crisp light/dark mode visibility */}
            {cardBg && (
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                    <img
                        src={cardBg}
                        alt={`${title} domain background`}
                        className="h-full w-full object-cover object-center opacity-70 saturate-[1.15] contrast-[1.05] transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-85 dark:opacity-35 dark:group-hover:opacity-50"
                    />
                    {/* Theme adaptive gradient overlay - smoothly blends to card background for readable text */}
                    <div className="absolute inset-0 bg-linear-to-t from-card via-card/80 via-50% to-card/15 dark:from-zinc-950 dark:via-zinc-950/80 dark:via-50% dark:to-zinc-950/20" />
                    {/* Top ambient warm sheen */}
                    <div className="absolute inset-0 bg-linear-to-b from-amber-500/5 via-transparent to-transparent pointer-events-none" />
                </div>
            )}

            {/* Glowing top line & subtle ambient glow */}
            <div className="absolute top-0 left-0 h-1 w-full bg-linear-to-r from-transparent via-amber-400/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10" />
            <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-amber-400/10 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10 pointer-events-none" />

            {/* Content Body */}
            <div className="relative z-10 flex flex-1 flex-col justify-between">
                <div>
                    <div className="flex items-start justify-between gap-3">
                        <span className="font-mono text-5xl sm:text-6xl font-black text-amber-500/35 dark:text-amber-400/20 transition-colors duration-300 group-hover:text-amber-500/55 dark:group-hover:text-amber-400/35 select-none">
                            {number}
                        </span>
                        <span className="rounded-full border border-amber-500/30 bg-amber-500/15 px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-amber-700 dark:border-amber-400/30 dark:bg-amber-400/10 dark:text-amber-300 backdrop-blur-md shadow-xs">
                            {tag}
                        </span>
                    </div>

                    <h2 className="mt-6 text-2xl sm:text-3xl font-black tracking-tight text-foreground transition-colors duration-300 group-hover:text-amber-600 dark:group-hover:text-amber-300 dark:drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                        {title}
                    </h2>

                    <p className="mt-3.5 text-xs sm:text-sm leading-relaxed text-foreground/80 dark:text-zinc-400 line-clamp-3 group-hover:text-foreground transition-colors">
                        {description}
                    </p>
                </div>

                <div className="mt-8 pt-4 border-t border-border/80 dark:border-white/10 flex items-center justify-between">
                    <Link
                        href={`/Competitions/${slug}`}
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 transition-all duration-300 hover:text-amber-700 dark:hover:text-amber-300 group-hover:text-amber-600 dark:group-hover:text-amber-300"
                    >
                        <span>Explore Competition</span>
                        <ArrowUpRight
                            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                            size={16}
                        />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}


