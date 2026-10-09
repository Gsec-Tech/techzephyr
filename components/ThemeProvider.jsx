"use client";

import { createContext, useContext, useEffect, useSyncExternalStore, useCallback } from "react";

const ThemeContext = createContext(null);

let listeners = [];
function emitChange() {
    for (const listener of listeners) {
        listener();
    }
}

const themeStore = {
    getSnapshot() {
        if (typeof window === "undefined") return "light";
        try {
            const saved = localStorage.getItem("techzephyr-theme");
            if (saved === "light" || saved === "dark" || saved === "system") {
                return saved;
            }
        } catch (e) {
            console.error(e);
        }
        return "system";
    },
    getServerSnapshot() {
        return "system";
    },
    subscribe(listener) {
        listeners = [...listeners, listener];
        if (typeof window !== "undefined") {
            window.addEventListener("storage", listener);
        }
        return () => {
            listeners = listeners.filter((l) => l !== listener);
            if (typeof window !== "undefined") {
                window.removeEventListener("storage", listener);
            }
        };
    },
    setTheme(newTheme) {
        if (typeof window !== "undefined") {
            try {
                localStorage.setItem("techzephyr-theme", newTheme);
            } catch (e) {
                console.error(e);
            }
        }
        emitChange();
    },
};

function emptySubscribe() {
    return () => {};
}

function getClientMountedSnapshot() {
    return true;
}

function getServerMountedSnapshot() {
    return false;
}

function subscribeMedia(callback) {
    if (typeof window === "undefined") return () => {};
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", callback);
    return () => mediaQuery.removeEventListener("change", callback);
}

function getSystemThemeSnapshot() {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function getServerSystemThemeSnapshot() {
    return false;
}

export function ThemeProvider({ children, defaultTheme = "system" }) {
    const mounted = useSyncExternalStore(
        emptySubscribe,
        getClientMountedSnapshot,
        getServerMountedSnapshot
    );

    const theme = useSyncExternalStore(
        themeStore.subscribe,
        themeStore.getSnapshot,
        themeStore.getServerSnapshot
    );

    const isSystemDark = useSyncExternalStore(
        subscribeMedia,
        getSystemThemeSnapshot,
        getServerSystemThemeSnapshot
    );

    const resolvedTheme = !mounted
        ? defaultTheme === "system"
            ? (isSystemDark ? "dark" : "light")
            : defaultTheme
        : theme === "system"
            ? (isSystemDark ? "dark" : "light")
            : (theme || defaultTheme);

    useEffect(() => {
        if (!mounted) return;
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(resolvedTheme);
        document.documentElement.setAttribute("data-theme", resolvedTheme);
    }, [resolvedTheme, mounted]);

    const setTheme = useCallback((newTheme) => {
        themeStore.setTheme(newTheme);
    }, []);

    const toggleTheme = useCallback(() => {
        const current = themeStore.getSnapshot();
        const active = current === "system" ? (isSystemDark ? "dark" : "light") : (current || "light");
        const next = active === "dark" ? "light" : "dark";
        themeStore.setTheme(next);
    }, [isSystemDark]);

    return (
        <ThemeContext.Provider
            value={{
                theme,
                resolvedTheme,
                mounted,
                setTheme,
                toggleTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("useTheme must be used inside ThemeProvider");
    }

    return context;
}