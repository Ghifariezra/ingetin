import { useTranslations } from "next-intl";
import { FileText, BarChart3, Mail, MessageCircle, LucideIcon } from "lucide-react";
import { cn } from "@/_lib/utils";

type FeatureItem = {
    key: string;
    icon: LucideIcon;
    // Kita pisahkan class warna agar lebih mudah di-manage untuk dark mode hover
    colorClass: string;
    bgClass: string;
    shadowClass: string; // Utk efek glow
    span: string;
    hasTag?: boolean;
    hasNote?: boolean;
};

const FEATURE_LIST: FeatureItem[] = [
    {
        key: "tracking",
        icon: FileText,
        colorClass: "text-blue-600 dark:text-blue-400",
        bgClass: "bg-blue-50 dark:bg-blue-500/10",
        shadowClass: "group-hover:shadow-blue-500/20 dark:group-hover:border-blue-500/50",
        span: "md:col-span-2",
    },
    {
        key: "email_reminder",
        icon: Mail,
        colorClass: "text-purple-600 dark:text-purple-400",
        bgClass: "bg-purple-50 dark:bg-purple-500/10",
        shadowClass: "group-hover:shadow-purple-500/20 dark:group-hover:border-purple-500/50",
        hasTag: true,
        span: "md:col-span-1",
    },
    {
        key: "whatsapp_reminder",
        icon: MessageCircle,
        colorClass: "text-green-600 dark:text-green-400",
        bgClass: "bg-green-50 dark:bg-green-500/10",
        shadowClass: "group-hover:shadow-green-500/20 dark:group-hover:border-green-500/50",
        hasTag: true,
        hasNote: true,
        span: "md:col-span-1",
    },
    {
        key: "dashboard",
        icon: BarChart3,
        colorClass: "text-emerald-600 dark:text-emerald-400",
        bgClass: "bg-emerald-50 dark:bg-emerald-500/10",
        shadowClass: "group-hover:shadow-emerald-500/20 dark:group-hover:border-emerald-500/50",
        span: "md:col-span-2",
    },
];

export function FeaturesGrid() {
    const t = useTranslations("Features");

    return (
        <section className="py-12 px-4 sm:px-6 lg:px-8 w-full relative z-10">
            <div className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
                    {FEATURE_LIST.map((feature) => {
                        const titleKey = `List.${feature.key}.title`;
                        const descKey = `List.${feature.key}.description`;
                        const Icon = feature.icon;

                        return (
                            <div
                                key={feature.key}
                                className={cn(
                                    "group relative overflow-hidden rounded-[2rem] p-8 transition-all duration-500 flex flex-col h-full",
                                    // Light Mode Styles
                                    "bg-white border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-1",
                                    // Dark Mode Styles (Glassmorphism & Depth)
                                    "dark:bg-slate-900/60 dark:border-slate-800 dark:backdrop-blur-xl",
                                    // Hover Glow Effect (Dynamic based on color)
                                    feature.shadowClass,
                                    feature.span
                                )}
                            >
                                {/* Decorative Gradient Blob (Subtle) */}
                                <div className={cn(
                                    "absolute -top-24 -right-24 h-64 w-64 rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none",
                                    feature.bgClass.replace("bg-", "bg-").replace("/10", "") // Hack dikit biar warnanya solid untuk blur
                                )} />

                                <div className="relative z-10 flex flex-col h-full">
                                    {/* Header: Icon & Tag */}
                                    <div className="flex items-start justify-between mb-6">
                                        <div className={cn(
                                            "h-14 w-14 rounded-2xl flex items-center justify-center transition-colors duration-300",
                                            // Light & Dark backgrounds handled in config
                                            feature.bgClass,
                                            "ring-1 ring-inset ring-black/5 dark:ring-white/5"
                                        )}>
                                            <Icon className={cn("h-7 w-7", feature.colorClass)} strokeWidth={2} />
                                        </div>

                                        {feature.hasTag && (
                                            <span className="inline-flex items-center rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-[11px] uppercase tracking-wider font-bold text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                                                {t(`List.${feature.key}.tag`)}
                                            </span>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {t(titleKey)}
                                    </h3>

                                    <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400 grow">
                                        {t(descKey)}
                                    </p>

                                    {/* Warning/Note Section (Khusus WA) */}
                                    {feature.hasNote && (
                                        <div className="mt-6 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50">
                                            <p className="text-xs text-slate-500 dark:text-slate-400 italic flex gap-2">
                                                <span className="text-amber-500 font-bold not-italic">!</span>
                                                {t(`List.${feature.key}.note`)}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}