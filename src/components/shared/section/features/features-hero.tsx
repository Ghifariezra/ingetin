import { useTranslations } from "next-intl";

export function FeaturesHero() {
    const t = useTranslations("Features");

    return (
        <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-20 px-6 lg:px-8 z-10">
            <div className="mx-auto max-w-3xl text-center">
                <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-300 mb-6 border border-blue-100 dark:border-blue-800">
                    ✨ {t("subtitle")}
                </div>
                <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-7xl mb-6 bg-clip-text bg-linear-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-200 dark:to-slate-400">
                    {t("title")}
                </h1>
                <p className="mt-6 text-xl leading-8 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                    {t("description")}
                </p>
            </div>
        </section>
    );
}

