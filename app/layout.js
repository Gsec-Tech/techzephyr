
import { Lexend } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";

const lexend = Lexend({
    variable: "--font-lexend",
    subsets: ["latin"],
    display: "swap",
});

export const metadata = {
    title: "TechZephyr 4.0",
    description: "TechZephyr website",
    icons: {
        icon: "/favicon.png",
    },
};

export default function RootLayout({ children }) {
    return (
        <html
            lang="en"
            data-scroll-behavior="smooth"
            className={`${lexend.variable} h-full antialiased`}
            suppressHydrationWarning
        >
            <head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function() {
                                var saved = null;
                                try {
                                    saved = localStorage.getItem('techzephyr-theme');
                                } catch (e) {}
                                var isDark = saved === 'dark' || (
                                    saved !== 'light' &&
                                    window.matchMedia('(prefers-color-scheme: dark)').matches
                                );
                                if (isDark) {
                                    document.documentElement.classList.add('dark');
                                    document.documentElement.classList.remove('light');
                                    document.documentElement.setAttribute('data-theme', 'dark');
                                } else {
                                    document.documentElement.classList.add('light');
                                    document.documentElement.classList.remove('dark');
                                    document.documentElement.setAttribute('data-theme', 'light');
                                }
                            })();
                        `,
                    }}
                />
            </head>
            <body className="min-h-full flex flex-col" suppressHydrationWarning>
                <ThemeProvider defaultTheme="system">
                    {children}

                    <Navbar />

                    <ThemeToggle />
                </ThemeProvider>
            </body>
        </html>
    );
}