"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";

export default function CTA() {
    const { resolvedTheme } = useTheme();
    const isDark = resolvedTheme === "dark";

    return (
        <section className={`relative overflow-hidden py-20 sm:py-24 md:py-32 transition-colors duration-300 ${
            isDark ? "bg-[#090706] border-t border-white/10" : "bg-transparent border-t border-[#7A2E24]/10"
        }`}>

            {/* Background atmosphere */}
            <div className="pointer-events-none absolute inset-0">

                {/* Main glow */}
                <motion.div
                    animate={{
                        scale: [1, 1.08, 1],
                        opacity: [0.35, 0.55, 0.35],
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C84B2F]/15 blur-[130px] sm:h-[550px] sm:w-[550px] md:h-[700px] md:w-[700px]"
                />

                {/* Top-right glow */}
                <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#E06A4F]/10 blur-[120px] sm:h-96 sm:w-96" />

                {/* Bottom-left glow */}
                <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#8F3020]/10 blur-[120px] sm:h-96 sm:w-96" />

                {/* Radial gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(200,75,47,0.12),transparent_55%)]" />

                {/* Vignette */}
                {isDark && (
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#090706_90%)]" />
                )}

            </div>


            {/* Main content */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6"
            >

                {/* CTA Card */}
                <div className={`relative overflow-hidden rounded-[26px] border px-5 py-14 backdrop-blur-2xl sm:rounded-[32px] sm:px-8 sm:py-16 md:px-16 md:py-20 transition-colors duration-300 ${
                    isDark 
                        ? "border-white/10 bg-[#15100D]/90 shadow-[0_30px_100px_rgba(0,0,0,0.55)]" 
                        : "border-[#7A2E24]/20 bg-white/80 shadow-[0_20px_60px_rgba(122,46,36,0.08)]"
                }`}>

                    {/* Card glow */}
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(200,75,47,0.10),transparent_55%)]" />

                    <div className="pointer-events-none absolute -right-32 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#C84B2F]/8 blur-[120px]" />

                    <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-[#E06A4F]/5 blur-[120px]" />


                    {/* Top accent */}
                    <motion.div
                        animate={{
                            opacity: [0.5, 1, 0.5],
                            scaleX: [0.8, 1, 0.8],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute left-1/2 top-0 h-[2px] w-24 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#E06A4F] to-transparent shadow-[0_0_20px_rgba(200,75,47,0.8)] sm:w-32"
                    />


                    {/* Content */}
                    <div className="relative z-10 text-center">

                        {/* Small heading */}
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#E06A4F] sm:text-xs sm:tracking-[0.45em]"
                        >
                            TECHZEPHYR 2026
                        </motion.p>


                        {/* Main heading */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className={`mt-5 bg-clip-text text-5xl font-black leading-[0.88] tracking-[-0.04em] text-transparent sm:text-6xl md:mt-6 md:text-7xl ${
                                isDark 
                                    ? "bg-gradient-to-b from-[#FFF8F2] via-[#E8D8CE] to-[#8E6557]" 
                                    : "bg-gradient-to-b from-[#2A1D17] via-[#5C2B1D] to-[#C84B2F]"
                            }`}
                        >
                            Build.
                            <br />
                            Compete.
                            <br />
                            Innovate.
                        </motion.h2>


                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className={`mx-auto mt-7 max-w-3xl text-sm leading-7 sm:mt-8 sm:text-base sm:leading-8 md:text-lg md:leading-9 ${
                                isDark ? "text-white/50" : "text-[#4A3328]/85 font-medium"
                            }`}
                        >
                            Join hundreds of innovators, developers, designers,
                            entrepreneurs and researchers for the flagship
                            technology festival of IIT Bhubaneswar.
                        </motion.p>


                        {/* Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="mt-10 flex flex-col justify-center gap-3 sm:mt-12 sm:flex-row sm:gap-4"
                        >

                            {/* Register button */}
                            <Link
                                href="/Register"
                                className="group relative overflow-hidden rounded-xl bg-[#C84B2F] px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-[0_10px_35px_rgba(200,75,47,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E06A4F] hover:shadow-[0_15px_45px_rgba(200,75,47,0.4)] sm:px-10 sm:py-4"
                            >
                                <span className="relative z-10">
                                    Register Now
                                </span>

                                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                            </Link>


                            {/* Sponsor button - Directly opens email */}
                            <a
                                href="mailto:gsecsnt.sg@iitbbs.ac.in?subject=TechZephyr%202026%20Sponsorship%20Inquiry"
                                className={`rounded-xl border px-8 py-3.5 text-sm font-medium uppercase tracking-[0.2em] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 sm:px-10 sm:py-4 ${
                                    isDark 
                                        ? "border-white/15 bg-white/[0.025] text-white/75 hover:border-[#E06A4F]/60 hover:bg-[#C84B2F]/10 hover:text-[#E06A4F]" 
                                        : "border-[#7A2E24]/30 bg-[#7A2E24]/5 text-[#4A3328] hover:border-[#7A2E24] hover:bg-[#7A2E24]/10 hover:text-[#7A2E24]"
                                }`}
                            >
                                Become a Sponsor
                            </a>

                        </motion.div>


                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className={`mx-auto mt-12 grid max-w-3xl grid-cols-2 divide-y sm:grid-cols-4 sm:divide-y-0 sm:divide-x border-t pt-8 sm:mt-14 sm:pt-10 ${
                                isDark ? "divide-white/10 border-white/10" : "divide-[#7A2E24]/15 border-[#7A2E24]/15"
                            }`}
                        >

                            {/* Events */}
                            <div className="px-2 py-3 sm:py-0">
                                <h3 className="text-2xl font-black tracking-tight text-[#E06A4F] sm:text-3xl">
                                    10
                                </h3>

                                <p className={`mt-1.5 text-[9px] uppercase tracking-[0.15em] font-medium sm:mt-2 sm:text-xs sm:tracking-widest ${
                                    isDark ? "text-white/35" : "text-[#4A3328]/70"
                                }`}>
                                    Events
                                </p>
                            </div>


                            {/* Societies */}
                            <div className="px-2 py-3 sm:py-0">
                                <h3 className="text-2xl font-black tracking-tight text-[#E06A4F] sm:text-3xl">
                                    5
                                </h3>

                                <p className={`mt-1.5 text-[9px] uppercase tracking-[0.15em] font-medium sm:mt-2 sm:text-xs sm:tracking-widest ${
                                    isDark ? "text-white/35" : "text-[#4A3328]/70"
                                }`}>
                                    Societies
                                </p>
                            </div>


                            {/* Participants */}
                            <div className="px-2 py-3 sm:py-0">
                                <h3 className="text-2xl font-black tracking-tight text-[#E06A4F] sm:text-3xl">
                                    20,000+
                                </h3>

                                <p className={`mt-1.5 text-[9px] uppercase tracking-[0.15em] font-medium sm:mt-2 sm:text-xs sm:tracking-widest ${
                                    isDark ? "text-white/35" : "text-[#4A3328]/70"
                                }`}>
                                    Participants
                                </p>
                            </div>


                            {/* Prize Pool */}
                            <div className="px-2 py-3 sm:py-0">
                                <h3 className="text-2xl font-black tracking-tight text-[#E06A4F] sm:text-3xl">
                                    ₹3.2L+
                                </h3>

                                <p className={`mt-1.5 text-[9px] uppercase tracking-[0.15em] font-medium sm:mt-2 sm:text-xs sm:tracking-widest ${
                                    isDark ? "text-white/35" : "text-[#4A3328]/70"
                                }`}>
                                    Prize Pool
                                </p>
                            </div>

                        </motion.div>

                    </div>


                    {/* Decorative corners */}
                    <div className="pointer-events-none absolute bottom-5 left-5 h-10 w-10 border-b border-l border-[#C84B2F]/20 sm:bottom-7 sm:left-7 sm:h-14 sm:w-14" />

                    <div className="pointer-events-none absolute right-5 top-5 h-10 w-10 border-r border-t border-[#C84B2F]/20 sm:right-7 sm:top-7 sm:h-14 sm:w-14" />

                </div>

            </motion.div>

        </section>
    );
}