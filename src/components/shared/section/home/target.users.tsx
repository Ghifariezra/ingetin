import { Briefcase, Store, Zap, CheckCircle2 } from "lucide-react";
import { cn } from "@/_lib/utils";

// Mapping Icon berdasarkan urutan di JSON
// 0: Freelancer -> Briefcase/Laptop
// 1: UMKM -> Store
// 2: Side Hustler -> Zap (Cepat/Sampingan)
const USER_ICONS = [Briefcase, Store, Zap];
type TargetUserItem = {
    title: string;
    desc: string;
};

export default function TargetUserSection({
    label,
    title,
    description,
    hrefSection,
    items
}: {
    label: string;
    title: string;
    description: string;
    hrefSection: string;
    items: TargetUserItem[];
}) {
    return (
        <section
            id={hrefSection.replace("#", "")}
            className="relative w-full py-20 lg:py-28 bg-white dark:bg-slate-950 transition-colors duration-300"
        >
            {/* Dekorasi Background Halus */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* --- Header Section --- */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-800 dark:border-blue-800 dark:bg-blue-900/30 dark:text-blue-300 mb-2">
                        {label}
                    </div>

                    <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
                        {title}
                    </h2>

                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* --- Cards Grid --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {items.map((item, index) => {
                        const Icon = USER_ICONS[index];

                        return (
                            <div
                                key={index}
                                className={cn(
                                    "group relative flex flex-col p-8 rounded-[2rem] border transition-all duration-300",
                                    // Light Mode
                                    "bg-slate-50 border-slate-200 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 hover:border-blue-200",
                                    // Dark Mode
                                    "dark:bg-slate-900 dark:border-slate-800 dark:hover:bg-slate-800 dark:hover:border-blue-500/30"
                                )}
                            >
                                {/* Icon Header */}
                                <div className="mb-6 flex items-center justify-between">
                                    <div className={cn(
                                        "h-14 w-14 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 transition-colors",
                                        "bg-white border border-slate-200 shadow-sm group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600",
                                        "dark:bg-slate-950 dark:border-slate-700 dark:group-hover:bg-blue-600 dark:group-hover:text-white"
                                    )}>
                                        <Icon className="h-7 w-7" strokeWidth={1.5} />
                                    </div>

                                    {/* Hiasan Check di kanan atas */}
                                    <CheckCircle2 className="h-6 w-6 text-slate-200 dark:text-slate-800 group-hover:text-blue-500/50 transition-colors" />
                                </div>

                                {/* Content */}
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                                        {item.title as string}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                                        {item.desc as string}
                                    </p>
                                </div>

                                {/* Bottom Line Decoration (muncul pas hover) */}
                                <div className="absolute bottom-0 left-8 right-8 h-1 bg-linear-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}