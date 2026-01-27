import { LucideIcon } from "lucide-react";

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
            // CHANGE 1: Section Background
            // Light: Slate-50 (Abu sangat muda) -> Kontras dengan ProblemSection yang Putih
            // Dark: Slate-950/40 atau #020617 (Lebih gelap/berbeda tint dari ProblemSection)
            className="w-full py-20 lg:py-28 bg-slate-50 dark:bg-[#020617] transition-colors duration-300 border-t border-slate-100 dark:border-slate-800"
        >
            <div className="flex flex-col justify-center px-4 md:px-6">

                {/* Header */}
                <div className="flex flex-col items-center text-center space-y-4 mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900 dark:text-white">
                        {title}
                    </h2>
                    <p className="mx-auto max-w-175 text-slate-600 md:text-xl dark:text-slate-400">
                        {description}
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Garis Penghubung */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-blue-200 dark:via-blue-900 to-transparent -z-10 opacity-50" />

                    {steps.map((step, index) => (
                        <div
                            key={index}
                            // CHANGE 2: Card Background
                            // Light: White (Pop out dari bg-slate-50)
                            // Dark: Slate-900 (Pop out dari bg-[#020617])
                            className="group relative flex flex-col items-center text-center 
                                bg-white dark:bg-slate-900 
                                p-8 rounded-2xl shadow-sm border border-slate-200/60 dark:border-slate-800 
                                transition-all duration-300 
                                hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/5 dark:hover:shadow-blue-900/20 hover:border-blue-200 dark:hover:border-blue-800"
                        >
                            {/* Icon Wrapper */}
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 shadow-inner dark:bg-blue-950 dark:text-blue-400">
                                <step.icon className="h-8 w-8 transition-transform duration-300 group-hover:scale-110" />
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-3">
                                {step.title}
                            </h3>
                            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}