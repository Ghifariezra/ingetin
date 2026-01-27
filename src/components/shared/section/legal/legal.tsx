import { BadgeManager } from "@/components/shared/badge/badge";
import { useTranslations } from "next-intl";
import { cn } from "@/_lib/utils";
import React from "react";

interface LegalLayoutProps {
    namespace: string; // "Privacy" | "Terms" | "Cookies"
    sectionKeys: string[]; // ["collection", "usage", ...]
    icon?: React.ReactNode;
    variant?: "blue" | "orange";
}

export function LegalLayout({
    namespace,
    sectionKeys,
    icon,
    variant = "blue"
}: LegalLayoutProps) {
    const t = useTranslations(namespace);
    const currentDate = new Date().toLocaleDateString();

    // Konfigurasi warna berdasarkan variant
    const theme = {
        blue: {
            iconBg: "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400",
            marker: "marker:text-blue-500",
            link: "text-blue-600 hover:text-blue-500 dark:text-blue-400",
        },
        orange: {
            iconBg: "bg-orange-100 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400",
            marker: "marker:text-orange-500",
            link: "text-orange-600 hover:text-orange-500 dark:text-orange-400",
        },
    }[variant];

    return (
        <div className="mx-auto max-w-3xl px-6 py-24">
            {/* --- HEADER --- */}
            <div className="mb-12 border-b border-slate-200 dark:border-slate-800 pb-8">

                {/* Icon */}
                {icon && (
                    <div className={cn("mb-6 flex h-20 w-20 items-center justify-center rounded-2xl", theme.iconBg)}>
                        {icon}
                    </div>
                )}

                <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl mb-4">
                    {t("title")}
                </h1>

                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <span>{t("last_updated")}</span>
                    <BadgeManager className="px-2.5 py-0.5 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-md">
                        {currentDate}
                    </BadgeManager>
                </div>
            </div>

            {/* --- CONTENT --- */}
            <div className={cn(
                "prose prose-slate dark:prose-invert max-w-none prose-headings:font-bold",
                `prose-a:${theme.link}` // Dynamic link color
            )}>

                {/* Intro */}
                <p
                    className="lead text-lg text-slate-600 dark:text-slate-300 mb-10"
                    dangerouslySetInnerHTML={{ __html: t.raw("intro") }}
                />

                {/* Dynamic Sections Loop */}
                {sectionKeys.map((key) => {
                    // Cek apakah section ini punya list items di JSON
                    // Next-intl raw() bisa mengembalikan array jika struktur JSON-nya array
                    let listItems: string[] = [];
                    const listKey = `sections.${key}.list`;

                    if (t.has(listKey)) {
                        const rawList = t.raw(listKey);
                        if (Array.isArray(rawList)) {
                            listItems = rawList;
                        }
                    }

                    return (
                        <div key={key}>
                            <h3 className="text-2xl mt-12 mb-4 text-slate-900 dark:text-white">
                                {t(`sections.${key}.title`)}
                            </h3>

                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                {/* Support HTML di content (untuk link email dsb) */}
                                <span
                                    className="
                [&_a]:text-blue-600 
                [&_a]:font-semibold 
                [&_a]:underline 
                [&_a]:underline-offset-4 
                hover:[&_a]:text-blue-500 
                dark:[&_a]:text-blue-400
                transition-colors
            "
                                dangerouslySetInnerHTML={{ __html: t.raw(`sections.${key}.content`) }} />
                            </p>

                            {/* Render List jika ada */}
                            {listItems.length > 0 && (
                                <ul className={cn("list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-400", theme.marker)}>
                                    {listItems.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}