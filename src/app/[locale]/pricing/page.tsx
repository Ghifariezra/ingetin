import { useTranslations } from "next-intl";
import { Check, Sparkles, ShieldCheck, Info } from "lucide-react";
import Link from "next/link";
import { cn } from "@/_lib/utils";
import { PatternHero } from "@/components/shared/decoration/pattern";

export default function PricingPage() {
    const t = useTranslations("Pricing");
    const planKeys = ["Free", "Pro", "Business"] as const;

    return (
        <div className="relative min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">

            {/* --- Ambient Background Glow --- */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-500/10 dark:bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
            <PatternHero />

            {/* --- Header Section --- */}
            <div className="relative z-10 text-center max-w-3xl mx-auto mb-20">
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold text-blue-700 bg-blue-50/80 dark:bg-blue-900/30 dark:text-blue-200 border border-blue-100 dark:border-blue-800/50 backdrop-blur-sm mb-8 shadow-sm">
                    <Sparkles className="h-4 w-4 text-orange-500 animate-pulse" />
                    {t("subtitle")}
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
                    {t("title")}
                </h1>

                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                    {t("description")}
                </p>
            </div>

            {/* --- Pricing Cards Container --- */}
            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                    {planKeys.map((planKey) => {
                        const isBusiness = planKey === "Business";
                        const isPro = planKey === "Pro"; // Opsional jika mau highlight Pro beda

                        // Data Translation
                        const name = t(`Plans.${planKey}.name`);
                        const price = t(`Plans.${planKey}.price`);
                        const period = t(`Plans.${planKey}.period`);
                        const description = t(`Plans.${planKey}.description`);
                        const ctaLabel = t(`Plans.${planKey}.cta`);
                        const badge = isBusiness ? t(`Plans.${planKey}.badge`) : null;
                        const disclaimer = isBusiness ? t(`Plans.${planKey}.disclaimer`) : null;

                        return (
                            <div
                                key={planKey}
                                className={cn(
                                    "relative flex flex-col p-8 rounded-3xl border transition-all duration-300 group h-full",
                                    // Light Mode Base
                                    "bg-white border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1",
                                    // Dark Mode Base
                                    "dark:bg-slate-900/40 dark:border-slate-800 dark:backdrop-blur-xl",
                                    // Business Plan Highlight
                                    isBusiness
                                        ? "ring-2 ring-blue-500/50 dark:ring-blue-500/50 shadow-2xl shadow-blue-500/10 dark:shadow-blue-900/20 scale-100 md:-translate-y-4 md:hover:-translate-y-5 z-10"
                                        : "hover:border-blue-200 dark:hover:border-slate-700"
                                )}
                            >
                                {/* "Most Popular" Badge */}
                                {isBusiness && (
                                    <div className="absolute top-0 right-0 -mt-4 mr-6">
                                        <div className="relative px-4 py-1.5 bg-linear-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold rounded-full shadow-lg uppercase tracking-wider">
                                            {badge || "Popular"}
                                            {/* Glow effect di badge */}
                                            <div className="absolute inset-0 rounded-full bg-white/20 blur-sm -z-10" />
                                        </div>
                                    </div>
                                )}

                                <div className="mb-6">
                                    <h3 className={cn("text-xl font-bold mb-2", isBusiness ? "text-blue-600 dark:text-blue-400" : "text-slate-900 dark:text-white")}>
                                        {name}
                                    </h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 min-h-10 leading-relaxed">
                                        {description}
                                    </p>
                                </div>

                                <div className="flex items-baseline gap-x-1 mb-6">
                                    <span className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                                        {price}
                                    </span>
                                    <span className="text-sm font-medium text-slate-500 dark:text-slate-500">
                                        {period}
                                    </span>
                                </div>

                                {/* Divider */}
                                <div className="h-px w-full bg-slate-100 dark:bg-slate-800 mb-6" />

                                {/* Features List */}
                                <ul role="list" className="space-y-4 mb-8 text-sm font-medium leading-6 text-slate-600 dark:text-slate-300 grow">
                                    <FeatureListHelper t={t} planKey={planKey} isHighlight={isBusiness} />
                                </ul>

                                {/* Disclaimer Box (Business) */}
                                {disclaimer && (
                                    <div className="mb-6 p-3 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/50 text-[11px] leading-tight text-blue-700 dark:text-blue-300 flex gap-2 items-start">
                                        <Info className="h-3.5 w-3.5 shrink-0 mt-0.5 opacity-70" />
                                        <span>{disclaimer}</span>
                                    </div>
                                )}

                                {/* CTA Button */}
                                <Link
                                    href={`/auth/register?plan=${planKey.toLowerCase()}`}
                                    className={cn(
                                        "block w-full rounded-xl px-6 py-3.5 text-center text-sm font-bold transition-all duration-300 transform active:scale-95",
                                        isBusiness
                                            ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
                                            : "bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 border border-transparent dark:border-slate-700"
                                    )}
                                >
                                    {ctaLabel}
                                </Link>
                            </div>
                        );
                    })}
                </div>

                {/* --- WhatsApp Safety Notice (Bottom) --- */}
                <div className="mt-20 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 p-6 text-center backdrop-blur-sm">
                        <div className="flex justify-center mb-4">
                            <div className="h-10 w-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center ring-1 ring-slate-200 dark:ring-slate-700">
                                <ShieldCheck className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                            </div>
                        </div>
                        <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-2">
                            {t("WhatsAppSafety.title")}
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 max-w-lg mx-auto leading-relaxed">
                            {t("WhatsAppSafety.content")}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function FeatureListHelper({ t, planKey, isHighlight }: { t: (key: string) => string, planKey: string, isHighlight: boolean }) {
    let count = 3;
    if (planKey === "Pro") count = 5;
    if (planKey === "Business") count = 6;

    const items = Array.from({ length: count }, (_, i) => i);

    return (
        <>
            {items.map((i) => (
                <li key={i} className="flex items-start gap-x-3 group/item">
                    <div className={cn(
                        "flex h-5 w-5 flex-none items-center justify-center rounded-full mt-0.5 ring-1 ring-inset",
                        isHighlight
                            ? "bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 ring-blue-200 dark:ring-blue-800"
                            : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 ring-slate-200 dark:ring-slate-700"
                    )}>
                        <Check className="h-3 w-3" strokeWidth={3} />
                    </div>
                    <span className="group-hover/item:translate-x-1 transition-transform duration-300 group-hover/item:text-slate-900 dark:group-hover/item:text-slate-100">
                        {t(`Plans.${planKey}.features.${i}`)}
                    </span>
                </li>
            ))}
        </>
    );
}