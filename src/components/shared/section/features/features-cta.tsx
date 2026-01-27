import { useTranslations } from "next-intl";
import Link from "next/link";

export function FeaturesCTA() {
    const tHome = useTranslations("Home.Introduction");

    return (
        <section className="py-20 px-6 lg:px-8 relative z-10">
            <div className="w-full relative mx-auto">
                <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-indigo-600 rounded-[2.5rem] rotate-1 opacity-50 blur-sm scale-95 translate-y-4"></div>
                <div className="relative bg-slate-900 dark:bg-blue-600 rounded-[2rem] p-8 sm:p-16 text-center shadow-2xl overflow-hidden">
                    {/* Grid Pattern Overlay */}
                    <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>

                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl mb-6">
                            {tHome("title")}
                        </h2>
                        <p className="mx-auto max-w-xl text-lg text-slate-300 dark:text-blue-100 mb-10">
                            {tHome("subtitle")}
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/register"
                                className="rounded-full bg-white px-8 py-4 text-base font-bold text-slate-900 shadow-lg hover:shadow-xl hover:bg-slate-50 transition-all w-full sm:w-auto transform hover:-translate-y-1"
                            >
                                {tHome("cta_primary")}
                            </Link>
                            <Link
                                href="/pricing"
                                className="px-8 py-4 text-base font-semibold text-white border border-white/20 rounded-full hover:bg-white/10 transition-colors w-full sm:w-auto"
                            >
                                See Pricing
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}