"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    Home,
    Trophy,
    Ticket,
    Users,
    Handshake,
    History,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {

    const pathname = usePathname();
    const [open, setOpen] = useState(false);


    /* =========================================================
       NAVIGATION LINKS
    ========================================================== */

    const links = [
        {
            href: "/",
            label: "Home",
            icon: Home,
        },
        {
            href: "/Competitions",
            label: "Competitions",
            icon: Trophy,
        },
        {
            href: "/Register",
            label: "Register",
            icon: Ticket,
        },
        {
            href: "/AboutUs",
            label: "About",
            icon: Users,
        },
        {
            href: "/Sponsor",
            label: "Sponsors",
            icon: Handshake,
        },
        {
            href: "/LastEdition",
            label: "Archive",
            icon: History,
        },
    ];


    return (
        <>
            {/* =========================================================
                MOBILE NAVIGATION
            ========================================================== */}

            <div className="pointer-events-none fixed inset-0 z-50 md:hidden">

                {/* =====================================================
                    BACKDROP
                ====================================================== */}

                <AnimatePresence>

                    {open && (

                        <motion.div
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{
                                opacity: 0,
                            }}
                            transition={{
                                duration: 0.3,
                                ease: "easeOut",
                            }}
                            onClick={() =>
                                setOpen(false)
                            }
                            className="
                                pointer-events-auto
                                absolute
                                inset-0
                                bg-black/40
                                backdrop-blur-sm
                                dark:bg-black/60
                            "
                        />

                    )}

                </AnimatePresence>


                {/* =====================================================
                    MOBILE MENU BUTTON
                ====================================================== */}

                <motion.button
                    type="button"
                    onClick={() =>
                        setOpen(!open)
                    }
                    aria-label={
                        open
                            ? "Close menu"
                            : "Open menu"
                    }
                    aria-expanded={open}
                    whileTap={{
                        scale: 0.92,
                    }}
                    className={`
                        pointer-events-auto
                        absolute
                        right-5
                        top-5
                        z-[70]

                        flex
                        h-12
                        w-12
                        items-center
                        justify-center

                        rounded-2xl

                        border
                        border-foreground/10

                        bg-background/80
                        text-foreground

                        shadow-[0_0_35px_rgba(0,0,0,.12)]

                        backdrop-blur-2xl

                        transition-all
                        duration-300

                        hover:border-amber-400/40
                        hover:shadow-[0_0_35px_rgba(245,158,11,.15)]

                        dark:bg-black/70
                    `}
                >

                    <span className="relative flex h-5 w-6 flex-col justify-center">

                        {/* Top line */}

                        <span
                            className={`
                                absolute
                                left-0
                                h-[2px]
                                rounded-full
                                bg-amber-400

                                transition-all
                                duration-300
                                ease-in-out

                                ${
                                    open
                                        ? "top-[9px] w-6 rotate-45"
                                        : "top-[3px] w-6"
                                }
                            `}
                        />


                        {/* Middle line */}

                        <span
                            className={`
                                absolute
                                left-0
                                top-[9px]
                                h-[2px]
                                rounded-full
                                bg-amber-400

                                transition-all
                                duration-200

                                ${
                                    open
                                        ? "w-0 opacity-0"
                                        : "w-4 opacity-100"
                                }
                            `}
                        />


                        {/* Bottom line */}

                        <span
                            className={`
                                absolute
                                left-0
                                h-[2px]
                                rounded-full
                                bg-amber-400

                                transition-all
                                duration-300
                                ease-in-out

                                ${
                                    open
                                        ? "top-[9px] w-6 -rotate-45"
                                        : "top-[15px] w-5"
                                }
                            `}
                        />

                    </span>

                </motion.button>


                {/* =====================================================
                    MOBILE DRAWER
                ====================================================== */}

                <AnimatePresence>

                    {open && (

                        <motion.aside
                            initial={{
                                x: "-100%",
                            }}
                            animate={{
                                x: 0,
                            }}
                            exit={{
                                x: "-100%",
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 280,
                                damping: 28,
                                mass: 0.8,
                            }}
                            className="
                                pointer-events-auto
                                absolute
                                left-0
                                top-0

                                flex
                                h-full
                                w-[82%]
                                max-w-[340px]
                                flex-col

                                overflow-hidden

                                border-r
                                border-foreground/10

                                bg-background/95

                                px-5
                                pb-6
                                pt-7

                                text-foreground

                                shadow-[20px_0_60px_rgba(0,0,0,.18)]

                                backdrop-blur-2xl

                                dark:bg-black/90
                                dark:shadow-[20px_0_60px_rgba(0,0,0,.55)]
                            "
                        >

                            {/* =================================================
                                DRAWER HEADER
                            ================================================== */}

                            <div className="mb-8 flex items-center justify-between px-2">

                                <div>

                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                            x: -15,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            x: 0,
                                        }}
                                        transition={{
                                            delay: 0.12,
                                            duration: 0.3,
                                        }}
                                        className="
                                            flex items-center gap-2.5
                                            text-xl
                                            font-extrabold
                                            tracking-wider
                                            text-foreground
                                        "
                                    >
                                        <img src="/techzephyr-logo.png" alt="TechZephyr" className="h-8 w-8 object-contain" />
                                        <span>TechZephyr</span>
                                    </motion.div>


                                    <motion.div
                                        initial={{
                                            width: 0,
                                            opacity: 0,
                                        }}
                                        animate={{
                                            width: 64,
                                            opacity: 1,
                                        }}
                                        transition={{
                                            delay: 0.2,
                                            duration: 0.4,
                                        }}
                                        className="
                                            mt-3
                                            h-px
                                            bg-amber-400
                                        "
                                    />

                                </div>

                            </div>


                            {/* =================================================
                                NAVIGATION
                            ================================================== */}

                            <nav className="flex flex-col gap-2">

                                {links.map(
                                    (item, index) => {

                                        const Icon =
                                            item.icon;

                                        const active =
                                            pathname ===
                                            item.href;


                                        return (

                                            <motion.div
                                                key={
                                                    item.href
                                                }
                                                initial={{
                                                    opacity: 0,
                                                    x: -25,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    x: 0,
                                                }}
                                                transition={{
                                                    delay:
                                                        0.12 +
                                                        index *
                                                            0.07,
                                                    duration: 0.35,
                                                    ease: "easeOut",
                                                }}
                                            >

                                                <Link
                                                    href={
                                                        item.href
                                                    }
                                                    onClick={() =>
                                                        setOpen(
                                                            false
                                                        )
                                                    }
                                                    className={`
                                                        group
                                                        flex
                                                        items-center
                                                        gap-4
                                                        rounded-2xl
                                                        px-4
                                                        py-4

                                                        transition-all
                                                        duration-200

                                                        ${
                                                            active
                                                                ? `
                                                                    bg-amber-400
                                                                    text-black
                                                                    shadow-[0_8px_25px_rgba(245,158,11,.15)]
                                                                `
                                                                : `
                                                                    text-foreground
                                                                    hover:bg-foreground/5
                                                                `
                                                        }
                                                    `}
                                                >

                                                    <Icon
                                                        size={19}
                                                        className={`
                                                            transition-transform
                                                            duration-200

                                                            ${
                                                                active
                                                                    ? "text-black"
                                                                    : "text-amber-500 group-hover:scale-110"
                                                            }
                                                        `}
                                                    />


                                                    <span className="text-sm font-medium">
                                                        {
                                                            item.label
                                                        }
                                                    </span>

                                                </Link>

                                            </motion.div>

                                        );
                                    }
                                )}

                            </nav>


                            {/* =================================================
                                FLEXIBLE SPACE
                            ================================================== */}

                            <div className="flex-1" />


                            {/* =================================================
                                MOBILE FOOTER
                            ================================================== */}

                            <div className="
                                px-2
                                text-[9px]
                                uppercase
                                tracking-[0.3em]
                                text-muted-foreground
                            ">
                                TechZephyr 4.0
                            </div>

                        </motion.aside>

                    )}

                </AnimatePresence>

            </div>


            {/* =========================================================
                DESKTOP NAVBAR
            ========================================================== */}

            <div className="
                fixed
                bottom-6
                left-1/2
                z-50
                hidden
                -translate-x-1/2
                md:block
            ">

                <div className="
                    flex
                    items-center
                    gap-2

                    rounded-full

                    border
                    border-foreground/10

                    bg-background/75

                    px-3
                    py-3

                    text-foreground

                    backdrop-blur-2xl

                    shadow-[0_0_40px_rgba(0,0,0,.12)]

                    transition-all
                    duration-300

                    dark:bg-black/70
                    dark:shadow-[0_0_40px_rgba(251,191,36,.12)]
                ">

                    {links.map((item) => {
                        const Icon = item.icon;
                        const active = pathname === item.href;

                        return (
                            <motion.div
                                key={item.href}
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.96 }}
                                className="relative"
                            >
                                <Link
                                    href={item.href}
                                    className={`
                                        relative
                                        z-10
                                        flex
                                        items-center
                                        gap-2
                                        rounded-full
                                        px-5
                                        py-3
                                        text-sm
                                        font-medium
                                        transition-colors
                                        duration-200
                                        ${
                                            active
                                                ? "text-black font-semibold"
                                                : "text-foreground/80 hover:text-foreground"
                                        }
                                    `}
                                >
                                    <Icon size={18} className={`transition-transform duration-200 ${active ? "scale-105" : "group-hover:scale-110"}`} />
                                    <span>{item.label}</span>
                                </Link>

                                {active && (
                                    <motion.div
                                        layoutId="desktop-navbar-pill"
                                        transition={{
                                            type: "spring",
                                            stiffness: 380,
                                            damping: 30,
                                        }}
                                        className="absolute inset-0 rounded-full bg-amber-400 shadow-[0_0_20px_rgba(245,158,11,.35)] z-0"
                                    />
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>

        </>
    );
}