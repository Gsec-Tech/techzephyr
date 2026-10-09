"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
    title,
    subtitle,
    center = true,
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className={`mb-14 ${
                center ? "text-center" : "text-left"
            }`}
        >
            <div
                className={`mb-4 flex items-center gap-3 ${
                    center ? "justify-center" : "justify-start"
                }`}
            >
                <span className="h-px w-8 bg-[#C84B2F]" />

                <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#C84B2F] dark:text-[#E06A4F]">
                    {subtitle}
                </p>

                <span className="h-px w-8 bg-[#C84B2F]" />
            </div>

            <h2 className="text-3xl font-semibold tracking-tight text-[#2B211C] dark:text-[#F5F0E8] sm:text-4xl md:text-5xl">
                {title}
            </h2>

            <p
                className={`mt-4 max-w-xl text-sm leading-7 text-[#6F6962] dark:text-[#B4ADA5] ${
                    center ? "mx-auto" : ""
                }`}
            >
                Technology, innovation and ideas shaping the future.
            </p>
        </motion.div>
    );
}