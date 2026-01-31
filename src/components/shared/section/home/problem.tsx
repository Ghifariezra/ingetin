import { cn } from "@/_lib/utils";
import { PatternProblem } from "@/components/shared/decoration/pattern";

interface ProblemSectionProps {
    title: string;
    items: string[];
    hrefSection: string;
}

const PROBLEM_EMOJIS = ["😩", "📉", "🫣", "💸", "😤", "🤔"];

// Konfigurasi Warna yang lebih detail untuk Hover Effects
const COLOR_THEMES = [
    { bg: "bg-red-100 dark:bg-red-500/10", text: "text-red-600 dark:text-red-400", border: "group-hover:border-red-200 dark:group-hover:border-red-500/30" },
    { bg: "bg-orange-100 dark:bg-orange-500/10", text: "text-orange-600 dark:text-orange-400", border: "group-hover:border-orange-200 dark:group-hover:border-orange-500/30" },
    { bg: "bg-amber-100 dark:bg-amber-500/10", text: "text-amber-600 dark:text-amber-400", border: "group-hover:border-amber-200 dark:group-hover:border-amber-500/30" },
    { bg: "bg-rose-100 dark:bg-rose-500/10", text: "text-rose-600 dark:text-rose-400", border: "group-hover:border-rose-200 dark:group-hover:border-rose-500/30" },
    { bg: "bg-pink-100 dark:bg-pink-500/10", text: "text-pink-600 dark:text-pink-400", border: "group-hover:border-pink-200 dark:group-hover:border-pink-500/30" },
    { bg: "bg-slate-100 dark:bg-slate-500/10", text: "text-slate-600 dark:text-slate-400", border: "group-hover:border-slate-200 dark:group-hover:border-slate-500/30" },
];

export default function ProblemSection({ title, items, hrefSection }: ProblemSectionProps) {
    return (
        <section
            id={hrefSection.replace("#", "")}
            className="w-full py-24 lg:py-32 bg-white dark:bg-slate-950 overflow-hidden transition-colors duration-500 relative"
        >
            {/* --- Background Decorations (Matching TargetUserSection) --- */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 right-0 w-125 h-125 bg-red-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-125 h-125 bg-orange-500/5 rounded-full blur-[120px]" />
            </div>

            <PatternProblem />

            <div className="flex flex-col justify-center px-4 sm:px-6 lg:px-8 relative z-10 w-full">

                {/* --- Header Section --- */}
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
                        {title}
                        <span className="text-red-500 ml-2 inline-block animate-pulse">?!</span>
                    </h2>

                    {/* Stylized Underline */}
                    <div className="relative h-6 w-full flex justify-center">
                        <svg className="w-48 h-4 text-red-400 dark:text-red-500/60" viewBox="0 0 100 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 5C15 5 15 2 28 2C41 2 41 8 54 8C67 8 67 3 80 3C93 3 93 7 98 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                    </div>
                </div>

                {/* --- Grid Cards --- */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {items.map((item, index) => {
                        const emoji = PROBLEM_EMOJIS[index % PROBLEM_EMOJIS.length];
                        const theme = COLOR_THEMES[index % COLOR_THEMES.length];

                        return (
                            <div
                                key={index}
                                className={cn(
                                    "group relative p-8 sm:p-10 rounded-[2.5rem] transition-all duration-300 ease-out cursor-default border",
                                    // Light Mode: Clean & Crisp
                                    "bg-slate-50 border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-2",
                                    // Dark Mode: Glassy & Deep
                                    "dark:bg-slate-900/40 dark:border-slate-800 dark:hover:bg-slate-900/80",
                                    // Dynamic Hover Border Color
                                    theme.border
                                )}
                            >
                                {/* Header: Number & Emoji */}
                                <div className="flex items-start justify-between mb-8">
                                    <div className={cn(
                                        "w-16 h-16 rounded-3xl flex items-center justify-center text-4xl shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6",
                                        theme.bg,
                                        theme.text
                                    )}>
                                        {emoji}
                                    </div>
                                    <span className="text-5xl font-black text-slate-200 dark:text-slate-800/50 select-none transition-colors group-hover:text-slate-300 dark:group-hover:text-slate-700">
                                        0{index + 1}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <p className="text-xl font-semibold leading-relaxed transition-colors
                                        text-slate-700 group-hover:text-slate-900
                                        dark:text-slate-300 dark:group-hover:text-white
                                    ">
                                        {item}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}