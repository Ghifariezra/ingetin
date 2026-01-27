import { useTranslations } from "next-intl";
import { FileText, BarChart3, Mail, LucideIcon } from "lucide-react";
import { cn } from "@/_lib/utils";

type FeatureItem = {
    key: string;
    icon: LucideIcon;
    color: string;
    bg: string;
    span: string;
    hasTag?: boolean;
};

// Data Statis (Bisa dipindah ke file constant jika mau)
const FEATURE_LIST: FeatureItem[] = [
    {
        key: "tracking",
        icon: FileText,
        color: "text-blue-600 dark:text-blue-400",
        bg: "bg-blue-50 dark:bg-blue-900/20",
        span: "md:col-span-2",
    },
    {
        key: "email_reminder",
        icon: Mail,
        color: "text-purple-600 dark:text-purple-400",
        bg: "bg-purple-50 dark:bg-purple-900/20",
        hasTag: true,
        span: "md:col-span-1",
    },
    {
        key: "dashboard",
        icon: BarChart3,
        color: "text-emerald-600 dark:text-emerald-400",
        bg: "bg-emerald-50 dark:bg-emerald-900/20",
        span: "md:col-span-3",
    },
];


export function FeaturesGrid() {
    const t = useTranslations("Features");

    return (
        <section className="py-8 px-6 lg:px-8 w-full relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                {FEATURE_LIST.map((feature) => {
                    const titleKey = `List.${feature.key}.title`;
                    const descKey = `List.${feature.key}.description`;
                    const tagKey = `List.${feature.key}.tag`;
                    const Icon = feature.icon;

                    return (
                        <div
                            key={feature.key}
                            className={cn(
                                "group relative overflow-hidden rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-8 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1 duration-300",
                                feature.span
                            )}
                        >
                            {/* Background Gradient Decoration */}
                            <div
                                className={cn(
                                    "absolute top-0 right-0 -mt-4 -mr-4 h-32 w-32 rounded-full blur-3xl opacity-20 transition-opacity group-hover:opacity-40",
                                    feature.color.split(" ")[0].replace("text", "bg")
                                )}
                            ></div>

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex items-start justify-between mb-6">
                                    <div
                                        className={cn(
                                            "h-14 w-14 rounded-2xl flex items-center justify-center shadow-sm",
                                            feature.bg
                                        )}
                                    >
                                        <Icon className={cn("h-7 w-7", feature.color)} />
                                    </div>
                                    {feature.hasTag && (
                                        <span className="inline-flex items-center rounded-full bg-linear-to-r from-purple-500 to-indigo-500 px-3 py-1 text-xs font-bold text-white shadow-lg shadow-purple-500/30">
                                            {t(tagKey)}
                                        </span>
                                    )}
                                </div>

                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                                    {t(titleKey)}
                                </h3>

                                <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400 grow">
                                    {t(descKey)}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

