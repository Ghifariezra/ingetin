import { cn } from "@/_lib/utils";

interface ProblemSectionProps {
    title: string;
    items: string[];
    hrefSection: string;
}

const PROBLEM_EMOJIS = ["😩", "📉", "🫣", "💸", "😤", "🤔"];

const ICON_COLORS = [
    "bg-red-100 text-red-600 dark:bg-red-500/10 dark:text-red-400",
    "bg-orange-100 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400",
    "bg-amber-100 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400",
    "bg-rose-100 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400",
    "bg-pink-100 text-pink-600 dark:bg-pink-500/10 dark:text-pink-400",
    "bg-slate-100 text-slate-600 dark:bg-slate-500/10 dark:text-slate-400",
];

export default function ProblemSection({ title, items, hrefSection }: ProblemSectionProps) {
    return (
        <section
            id={hrefSection.replace("#", "")}
            // CHANGE 1: Section Background
            // Light: White (Base)
            // Dark: Slate-950 (Deep Black)
            className="w-full py-20 lg:py-28 bg-white dark:bg-slate-950 overflow-hidden transition-colors duration-300 relative"
        >
            {/* Dekorasi Background Opsional (Grid Pattern) agar tidak terlalu polos */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            <div className="flex flex-col justify-center px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
                        {title}
                        <span className="text-red-500 ml-2">?!</span>
                    </h2>

                    <div className="relative h-4 w-full flex justify-center">
                        <svg className="w-32 h-4 text-red-400 dark:text-red-500/80" viewBox="0 0 100 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 5C15 5 15 2 28 2C41 2 41 8 54 8C67 8 67 3 80 3C93 3 93 7 98 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                    </div>
                </div>

                {/* Grid Cards */}
                <div className="grid gap-6 lg:grid-cols-3">
                    {items.map((item, index) => {
                        const emoji = PROBLEM_EMOJIS[index % PROBLEM_EMOJIS.length];
                        const colorClass = ICON_COLORS[index % ICON_COLORS.length];

                        return (
                            <div
                                key={index}
                                // CHANGE 2: Card Styling untuk Kontras di atas Putih/Hitam
                                // Light: Slate-50 (Sedikit abu) + Border
                                // Dark: Slate-900 (Sedikit lebih terang dari bg section)
                                className="group relative p-8 rounded-3xl transition-all duration-300 ease-in-out cursor-default
                                    bg-slate-50 border border-slate-200 shadow-xs
                                    hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 hover:border-red-200 hover:-translate-y-1
                                    
                                    dark:bg-slate-900 dark:border-slate-800 dark:shadow-none
                                    dark:hover:bg-slate-800 dark:hover:border-blue-500/30
                                "
                            >
                                <div className="flex items-start justify-between mb-6">
                                    <div className={cn(
                                        "w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-sm transition-transform group-hover:scale-110 group-hover:rotate-3",
                                        colorClass
                                    )}>
                                        {emoji}
                                    </div>
                                    <span className="text-4xl font-black text-slate-200 dark:text-slate-800 select-none transition-colors group-hover:text-slate-300 dark:group-hover:text-slate-700">
                                        0{index + 1}
                                    </span>
                                </div>

                                <div className="relative z-10">
                                    <p className="text-lg font-medium leading-relaxed transition-colors
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