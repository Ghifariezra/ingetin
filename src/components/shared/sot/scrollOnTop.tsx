"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/_lib/utils";
import { TooltipManager } from "../tooltip/tooltipManager";
import { useTranslations } from "next-intl";

export function ScrollToTopButton() {
    const t = useTranslations("SOT");
    const [isVisible, setIsVisible] = useState(false);

    // Logic untuk memantau scroll
    useEffect(() => {
        const toggleVisibility = () => {
            // Tombol muncul jika user sudah scroll lebih dari 300px
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    // Fungsi scroll yang kamu minta
    const scrollToTop = () => {
        if (typeof window !== "undefined") {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    };

    // Jangan render apa-apa jika belum discroll (supaya bersih)
    if (!isVisible) {
        return null;
    }

    return (
        <TooltipManager
            title={t("scroll_to_top")}
        >
            <button
                onClick={scrollToTop}
                aria-label={t("scroll_to_top")}
                className={cn(
                    // Posisi & Layout
                    // bottom-24: Agar posisinya DI ATAS tombol FloatingPreferences (yang bottom-6)
                    "fixed bottom-20 right-6 z-40 flex items-center justify-center p-3 rounded-full",

                    // Animation Entrance
                    "animate-in fade-in zoom-in slide-in-from-bottom-4 duration-500",

                    // Transition
                    "transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl",

                    // LIGHT MODE STYLE (Glassmorphism + Border Halus)
                    "bg-white/80 backdrop-blur-md border border-slate-200 text-slate-950 shadow-lg shadow-slate-200/50",
                    "hover:text-blue-600 hover:border-blue-200 hover:bg-white",

                    // DARK MODE STYLE
                    "dark:bg-slate-950 dark:border-slate-800 dark:text-white dark:shadow-slate-950/50",
                    "dark:hover:text-blue-400 dark:hover:border-blue-900 dark:hover:bg-slate-950"
                )}
            >
                <ArrowUp className="h-5 w-5" />
            </button>
        </TooltipManager>
    );
}