import { cn } from "@/_lib/utils"; // Pastikan path utils benar

interface ProblemSectionProps {
    title: string;
    items: string[];
    hrefSection: string;
}

// Bank emoji (Tetap sama)
const PROBLEM_EMOJIS = ["😩", "📉", "🫣", "💸", "😤", "🤔"];

// Update Warna Icon Background:
// Menambahkan dukungan Dark Mode (dark:...) agar tidak terlalu terang di mode gelap.
const ICON_COLORS = [
    "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
    "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400",
    "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400",
    "bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400",
    "bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400",
    "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400",
];

export default function ProblemSection({ title, items, hrefSection }: ProblemSectionProps) {
    return (
        // SECTION BG:
        // Light: bg-[#FAFAFA] (abu sangat muda)
        // Dark: bg-slate-950 (hampir hitam, memberikan kontras bagus dengan kartu)
        <section id={hrefSection.replace("#", "")} className="w-full py-20 lg:py-28 bg-[#FAFAFA] dark:bg-slate-950 overflow-hidden transition-colors duration-300">
            <div className="flex flex-col justify-center px-4 sm:px-6 lg:px-8">

                {/* --- Header Section --- */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    {/* TITLE: Slate-900 (Hitam) di Light, Slate-50 (Putih) di Dark */}
                    <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl md:text-5xl">
                        {title}
                        <span className="text-red-500 ml-2">?!</span>
                    </h2>

                    {/* SVG Garis: Merah muda di Light, Merah agak gelap di Dark agar tidak silau */}
                    <div className="relative h-4 w-full flex justify-center">
                        <svg className="w-32 h-4 text-red-400 dark:text-red-500/80" viewBox="0 0 100 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 5C15 5 15 2 28 2C41 2 41 8 54 8C67 8 67 3 80 3C93 3 93 7 98 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                    </div>
                </div>

                {/* --- Grid Cards Layout --- */}
                <div className="grid gap-6 lg:grid-cols-3">
                    {items.map((item, index) => {
                        const emoji = PROBLEM_EMOJIS[index % PROBLEM_EMOJIS.length];
                        const colorClass = ICON_COLORS[index % ICON_COLORS.length];

                        return (
                            <div
                                key={index}
                                // CARD CONTAINER STYLE:
                                // Light: bg-white, border-slate-100
                                // Dark: bg-slate-900 (sedikit lebih terang dari bg section), border-slate-800
                                // Hover Dark: border-blue-500/50 (Memberikan kesan "Blue Primary" saat di-hover di dark mode)
                                className="group relative p-8 rounded-3xl transition-all duration-300 ease-in-out cursor-default
                                    bg-white border-2 border-slate-100/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]
                                    hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:border-red-100 hover:-translate-y-2
                                    
                                    dark:bg-slate-900 dark:border-slate-800 dark:shadow-none
                                    dark:hover:border-blue-500/30 dark:hover:bg-slate-800/80
                                "
                            >
                                {/* Header Kartu */}
                                <div className="flex items-start justify-between mb-6">
                                    <div className={cn(
                                        "w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-sm transition-transform group-hover:scale-110 group-hover:rotate-3",
                                        colorClass // Warna icon otomatis menyesuaikan dark mode dari array ICON_COLORS
                                    )}>
                                        {emoji}
                                    </div>

                                    {/* Nomor Urut: Slate-100 (Light) -> Slate-800 (Dark) */}
                                    <span className="text-4xl font-black text-slate-100 dark:text-slate-800 select-none transition-colors">
                                        0{index + 1}
                                    </span>
                                </div>

                                {/* Text Content */}
                                <div className="relative z-10">
                                    {/* Text: Slate-700 -> Slate-300 (Dark) agar mudah dibaca tapi tidak menyilaukan */}
                                    {/* Hover Text Dark: Menjadi putih (Slate-50) */}
                                    <p className="text-lg font-medium leading-relaxed transition-colors
                                        text-slate-700 group-hover:text-slate-900
                                        dark:text-slate-300 dark:group-hover:text-slate-50
                                    ">
                                        {item}
                                    </p>
                                </div>

                                {/* Dekorasi Hover (Blob) */}
                                {/* Light: Red/Orange Glow */}
                                {/* Dark: Blue Glow (Sesuai request Primary Blue) */}
                                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500
                                    bg-linear-to-br from-red-50 to-orange-50
                                    dark:from-blue-900/20 dark:to-blue-600/10
                                " />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}