import { LucideIcon } from "lucide-react";
import { cn } from "@/_lib/utils";

export interface StepItem {
    title: string;
    description: string;
    icon: LucideIcon;
}

interface SolutionSectionProps {
    title: string;
    description: string;
    hrefSection: string;
    steps: StepItem[];
}

export default function SolutionSection({ title, description, steps, hrefSection }: SolutionSectionProps) {
    return (
        <section
            id={hrefSection.replace("#", "")}
            className="w-full py-24 lg:py-32 bg-slate-50 dark:bg-[#0B1120] transition-colors duration-500 relative overflow-hidden"
        >
            {/* --- Background Elements --- */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                {/* Glow effect di tengah */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="flex flex-col justify-center px-4 md:px-6 relative z-10 w-full">

                {/* --- Header --- */}
                <div className="flex flex-col items-center text-center space-y-6 mb-20">
                    <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-800 dark:border-blue-900/50 dark:bg-blue-900/20 dark:text-blue-300">
                        How It Works
                    </div>

                    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white max-w-3xl leading-tight">
                        {title}
                    </h2>

                    <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* --- Steps Grid --- */}
                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* --- Connector Line (Desktop Only) --- */}
                    <div className="hidden md:block absolute top-16 left-[16%] right-[16%] h-0.5 z-0">
                        {/* Garis Dashed */}
                        <div className="absolute w-full h-full border-t-2 border-dashed border-slate-200 dark:border-slate-800" />
                        {/* Gradient Fade di ujung garis */}
                        <div className="absolute inset-0 bg-linear-to-r from-slate-50 via-transparent to-slate-50 dark:from-[#0B1120] dark:to-[#0B1120]" />
                    </div>

                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={cn(
                                "group relative flex flex-col items-center text-center p-8 rounded-[2.5rem] transition-all duration-300 z-10",
                                // Light Mode
                                "bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 hover:-translate-y-2",
                                // Dark Mode
                                "dark:bg-slate-900/80 dark:backdrop-blur-sm dark:border-slate-800 dark:hover:border-blue-500/30"
                            )}
                        >
                            {/* Step Badge (Floating) */}
                            <div className="absolute -top-4 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 shadow-sm">
                                Step 0{index + 1}
                            </div>

                            {/* Icon Wrapper */}
                            <div className="mb-8 relative">
                                <div className={cn(
                                    "relative flex h-20 w-20 items-center justify-center rounded-3xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3",
                                    "bg-slate-50 text-blue-600 shadow-inner",
                                    "dark:bg-slate-950 dark:text-blue-400 dark:shadow-none dark:ring-1 dark:ring-white/10"
                                )}>
                                    <step.icon className="h-9 w-9" strokeWidth={1.5} />
                                </div>

                                {/* Icon Glow Effect on Hover */}
                                <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                                {step.title}
                            </h3>

                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}