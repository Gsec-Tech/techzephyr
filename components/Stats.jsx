"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

const stats = [
    {
        value: 10,
        title: "Events",
        description: "Flagship competitions",
    },
    {
        value: 5,
        title: "STC Societies",
        description: "Technical communities",
    },
    {
        value: 20000,
        suffix: "+",
        separator: ",",
        title: "Participants",
        description: "Expected participants",
    },
    {
        value: 3.2,
        decimals: 1,
        prefix: "₹",
        suffix: "L+",
        title: "Prize Pool",
        description: "Cash prizes & awards",
    },
];

export default function Stats() {
    return (
        <section className="relative overflow-hidden py-24 bg-[#F5F0E8] dark:bg-[#17120F]">

            {/* Soft background atmosphere */}
            <div className="pointer-events-none absolute left-1/4 top-10 h-80 w-80 rounded-full bg-[#C84B2F]/8 blur-[130px]" />
            <div className="pointer-events-none absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-[#E06A4F]/6 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl px-6">

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.45 }}
                    className="overflow-hidden rounded-[32px] border border-[#2B211C]/10 bg-[#FAF8F4]/80 backdrop-blur-xl dark:border-[#F5F0E8]/10 dark:bg-[#2B211C]/65"
                >

                    {/* Header */}
                    <div className="border-b border-[#2B211C]/10 px-8 py-8 dark:border-[#F5F0E8]/10 md:px-10">

                        <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-[#C84B2F] dark:text-[#E06A4F]">
                            TechZephyr 4.0
                        </p>

                        <div className="mt-3 flex flex-col justify-between gap-3 md:flex-row md:items-end">

                            <h2 className="text-2xl font-semibold text-[#2B211C] dark:text-[#F5F0E8] md:text-3xl">
                                The Scale of TechZephyr
                            </h2>

                            <p className="max-w-md text-sm leading-6 text-[#6F6962] dark:text-[#B4ADA5] md:text-right">
                                A growing ecosystem connecting students,
                                institutions and technology communities.
                            </p>

                        </div>
                    </div>


                    {/* Statistics */}
                    <div className="grid grid-cols-2 md:grid-cols-4">

                        {stats.map((item, index) => (
                            <div
                                key={item.title}
                                className={
                                    "group relative px-6 py-9 md:px-8 md:py-10 " +
                                    (
                                        index !== 0
                                            ? "border-l border-[#2B211C]/10 dark:border-[#F5F0E8]/10"
                                            : ""
                                    )
                                }
                            >

                                <div className="text-3xl font-bold tracking-tight text-[#2B211C] dark:text-[#F5F0E8] sm:text-4xl md:text-5xl">
                                    <CountUp
                                        end={item.value}
                                        decimals={item.decimals || 0}
                                        prefix={item.prefix || ""}
                                        duration={1.5}
                                        separator={item.separator}
                                        suffix={item.suffix}
                                        enableScrollSpy
                                        scrollSpyOnce
                                    />
                                </div>

                                <h3 className="mt-4 text-sm font-semibold text-[#2B211C] dark:text-[#F5F0E8] md:text-base">
                                    {item.title}
                                </h3>

                                <p className="mt-1 text-xs leading-5 text-[#7B746C] dark:text-[#A9A199]">
                                    {item.description}
                                </p>

                                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#C84B2F] transition-all duration-500 group-hover:w-full" />

                            </div>
                        ))}

                    </div>

                </motion.div>

            </div>
        </section>
    );
}