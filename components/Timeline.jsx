"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

const achievements = [
    {
        year: "2024",
        title: "ICPC World Finals",
        description: "World Rank 75 at the ICPC World Finals in Kazakhstan, the third-highest ranked Indian team.",
    },
    {
        year: "2024",
        title: "e-Yantra Gold Medal",
        description: "Gold Medal at IIT Bombay's prestigious e-Yantra Robotics Competition.",
    },
    {
        year: "2025",
        title: "ICPC Asia West",
        description: "Qualification to ICPC Asia West by the Neuromancers team.",
    },
    {
        year: "2025",
        title: "Code Relay",
        description: "A flagship 36-hour hackathon receiving more than 880 team registrations across Web2 and Web3 tracks.",
    },
    {
        year: "2025",
        title: "ML Hackathon",
        description: "Campus-wide AI hackathon with 50+ teams solving real-world machine learning challenges.",
    },
    {
        year: "2025",
        title: "Flipkart GRID Robotics",
        description: "Four teams qualified for the national finals in the Robotics Track.",
    },
];

export default function Timeline() {
    const { resolvedTheme } = useTheme();
    const isDark = resolvedTheme === "dark";

    return (
        <section className="py-24">
            <div className="max-w-5xl mx-auto px-6">
                {achievements.map((item, index) => (
                    <motion.div key={index} initial={{ opacity: 0, x: index % 2 ? 80 : -80 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                        transition={{ duration: 0.7 }} className="relative flex gap-8 pb-16">
                        <div className="relative flex flex-col items-center">
                            <div className={`w-4 h-4 rounded-full ${isDark ? "bg-white" : "bg-[#7A2E24]"}`} />
                            {index !== achievements.length - 1 && (
                                <div className={`w-px flex-1 mt-2 ${isDark ? "bg-white/20" : "bg-[#7A2E24]/20"}`} />
                            )}
                        </div>
                        <motion.div whileHover={{ y: -5, scale: 1.02 }} className={`flex-1 rounded-3xl border backdrop-blur-xl p-8 transition-all duration-500 ${
                            isDark
                                ? "border-white/10 bg-white/3"
                                : "border-[#7A2E24]/15 bg-white/80 shadow-xl shadow-amber-950/5"
                        }`}>
                            <span className={`text-xs uppercase tracking-[0.35em] font-mono font-bold ${
                                isDark ? "text-white/40" : "text-[#7A2E24]"
                            }`}>{item.year}</span>
                            <h3 className={`text-3xl font-bold mt-3 ${
                                isDark ? "text-white" : "text-[#2A1D17]"
                            }`}>{item.title}</h3>
                            <p className={`mt-4 leading-7 ${
                                isDark ? "text-white/60" : "text-[#4A3328]/85"
                            }`}>{item.description}</p>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}