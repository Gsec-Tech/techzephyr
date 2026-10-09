"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
    const { resolvedTheme, toggleTheme, mounted } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            aria-label={
                mounted && resolvedTheme === "dark"
                    ? "Switch to light mode"
                    : "Switch to dark mode"
            }
            title={
                mounted && resolvedTheme === "dark"
                    ? "Light mode"
                    : "Dark mode"
            }
            className="
                fixed
                bottom-6
                right-6
                z-[9999]
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-black/60
                text-white
                shadow-[0_8px_30px_rgba(0,0,0,.35)]
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-amber-400/40
                hover:bg-black/80
                dark:border-white/10
                dark:bg-black/60
                dark:text-white
                light:border-black/10
                light:bg-white/80
                light:text-black
                light:hover:bg-white
            "
        >
            {mounted ? (
                resolvedTheme === "dark" ? (
                    <Sun size={19} strokeWidth={2} />
                ) : (
                    <Moon size={19} strokeWidth={2} />
                )
            ) : (
                <Sun size={19} strokeWidth={2} />
            )}
        </button>
    );
}