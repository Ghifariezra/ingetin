import { useTranslations } from "next-intl";

export function DocsHeader() {
    const t = useTranslations("Docs");

    return (
        <div className="text-center mb-16 space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                {t("title")}
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                {t("subtitle")}
            </p>
        </div>
    );
}