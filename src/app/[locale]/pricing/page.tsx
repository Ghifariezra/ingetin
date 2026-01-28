import { useTranslations } from "next-intl";
import { Check, Sparkles } from "lucide-react";
import Link from "next/link";
import { cn } from "@/_lib/utils";
import { PatternHero } from "@/components/shared/decoration/pattern";

export default function PricingPage() {
    const t = useTranslations("Pricing");
    const planKeys = ["Free", "Pro"] as const;

    return (
        <div className="relative min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">

            {/* --- Background Pattern --- */}
            <PatternHero />

            {/* --- Header Section --- */}
            <div className="relative z-10 text-center max-w-3xl mx-auto mb-20">
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold text-blue-700 bg-blue-50 dark:bg-blue-900/40 dark:text-blue-200 border border-blue-100 dark:border-blue-800 mb-8 shadow-sm">
                    <Sparkles className="h-4 w-4 text-orange-500" />
                    {t("subtitle")}
                </div>

                <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-6xl mb-6">
                    {t("title")}
                </h1>

                <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
                    {t("description")}
                </p>
            </div>

            {/* --- Pricing Cards --- */}
            <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-start">
                {planKeys.map((planKey) => {
                    const isPro = planKey === "Pro";
                    const name = t(`Plans.${planKey}.name`);
                    const price = t(`Plans.${planKey}.price`);
                    const period = t(`Plans.${planKey}.period`);
                    const description = t(`Plans.${planKey}.description`);
                    const ctaLabel = t(`Plans.${planKey}.cta`);

                    return (
                        <div
                            key={planKey}
                            className={cn(
                                "relative flex flex-col p-8 sm:p-10 rounded-[2.5rem] border transition-all duration-500 group",
                                isPro
                                    ? "bg-slate-900 dark:bg-blue-600 border-slate-900 dark:border-blue-500 shadow-2xl shadow-blue-900/20 text-white scale-100 md:scale-105 z-10 hover:-translate-y-2"
                                    : "bg-white dark:bg-slate-900/60 backdrop-blur-sm border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-xl hover:-translate-y-1"
                            )}
                        >
                            {/* Pro Badge */}
                            {isPro && (
                                <div className="absolute top-0 right-0 -mt-5 mr-8 px-4 py-1.5 bg-linear-to-r from-orange-500 to-pink-500 text-white text-xs font-bold rounded-full shadow-lg uppercase tracking-wider transform rotate-2 group-hover:rotate-0 transition-transform">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className={cn("text-2xl font-bold mb-2", isPro ? "text-white" : "text-slate-900 dark:text-white")}>
                                    {name}
                                </h3>
                                <p className={cn("text-sm mb-6 min-h-10", isPro ? "text-blue-100" : "text-slate-500 dark:text-slate-400")}>
                                    {description}
                                </p>

                                <div className="flex items-baseline gap-x-1">
                                    <span className={cn("text-5xl font-extrabold tracking-tight", isPro ? "text-white" : "text-slate-900 dark:text-white")}>
                                        {price}
                                    </span>
                                    <span className={cn("text-base font-medium", isPro ? "text-blue-200" : "text-slate-500 dark:text-slate-400")}>
                                        {period}
                                    </span>
                                </div>
                            </div>

                            {/* Divider Line */}
                            <div className={cn("h-px w-full mb-8", isPro ? "bg-white/10" : "bg-slate-100 dark:bg-slate-800")} />

                            {/* Features List */}
                            <ul role="list" className={cn("space-y-4 mb-8 text-sm font-medium leading-6", isPro ? "text-blue-50" : "text-slate-600 dark:text-slate-300")}>
                                <FeatureListHelper t={t} planKey={planKey} isPro={isPro} />
                            </ul>

                            {/* CTA Button */}
                            <Link
                                href={isPro ? "/auth/register?plan=pro" : "/auth/register?plan=free"}
                                className={cn(
                                    "mt-auto block w-full rounded-2xl px-6 py-4 text-center text-base font-bold shadow-sm transition-all duration-300 transform active:scale-95",
                                    isPro
                                        ? "bg-white text-blue-700 hover:bg-blue-50 hover:shadow-lg hover:shadow-white/10"
                                        : "bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 border border-transparent hover:border-slate-300 dark:hover:border-slate-600"
                                )}
                            >
                                {ctaLabel}
                            </Link>
                        </div>
                    );
                })}
            </div>

            {/* --- Trust Badge / Footer Note --- */}
            {/* <div className="mt-20 text-center relative z-10">
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                    Trusted by freelancers & SMEs across Indonesia 🇮🇩
                </p>
            </div> */}
        </div>
    );
}

function FeatureListHelper({ t, planKey, isPro }: { t: (key: string) => string, planKey: string, isPro: boolean }) {
    const count = planKey === "Free" ? 3 : 4;
    const items = Array.from({ length: count }, (_, i) => i);

    return (
        <>
            {items.map((i) => (
                <li key={i} className="flex items-start gap-x-3 group/item">
                    <div className={cn(
                        "flex h-6 w-6 flex-none items-center justify-center rounded-full",
                        isPro ? "bg-blue-500/30 text-white" : "bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400"
                    )}>
                        <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </div>
                    <span className="group-hover/item:translate-x-1 transition-transform duration-300">
                        {t(`Plans.${planKey}.features.${i}`)}
                    </span>
                </li>
            ))}
        </>
    );
}