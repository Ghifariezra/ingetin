import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { ChartNoAxesGantt } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/_lib/utils"; // Pastikan import cn
import { BadgeManager } from "@/components/shared/badge/badge";
import { BlobHero } from "@/components/shared/decoration/blob";
import { PatternHero } from "@/components/shared/decoration/pattern";

export default function HeroSection({
    title,
    subtitle,
    cta_primary,
    cta_secondary,
    cta_secondary_href,
    hrefSection,
    href,
    version,
}: {
    title: string;
    subtitle: string;
    cta_primary: string;
    cta_secondary: string;
    cta_secondary_href: string;
    hrefSection: string;
    href: string;
    version: string;
}) {

    // Helper untuk menangani logika Highlight Kata
    // Ini membuat Return statement di bawah jauh lebih bersih
    const renderTitle = () => {
        const highlightWords = ["Awkwardness", "'Ga Enakan'"];
        const foundWord = highlightWords.find(word => title.includes(word));

        if (!foundWord) return title;

        const [prefix, suffix] = title.split(foundWord);

        return (
            <>
                {prefix}
                <span className="relative whitespace-nowrap text-blue-600 dark:text-blue-500 mx-2">
                    {/* SVG Underline Decoration */}
                    <svg
                        aria-hidden="true"
                        viewBox="0 0 418 42"
                        className="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300/70 dark:fill-blue-500/50 -z-10"
                        preserveAspectRatio="none"
                    >
                        <path d="M203.371.916c-26.013-2.078-76.686 1.963-103.314 9.081C51.79 22.01-7.966 54.03 0 61.662c8.134 7.888 78.512-19.641 111.381-24.03 34.935-4.703 87.21-1.712 119.654-7.49C271.36 25.65 305.14 5.956 313.6 0c8.456-5.955-39.956 4.995-110.229.916Z" />
                    </svg>
                    <span className="relative italic font-black">{foundWord}</span>
                </span>
                {suffix}
            </>
        );
    };

    return (
        <section
            id={hrefSection.replace("#", "")}
            className="relative w-full overflow-hidden py-24 lg:py-32 bg-white dark:bg-slate-950 transition-colors duration-300"
        >
            {/* --- BACKGROUND PATTERN (Modern SaaS Look) --- */}
            <PatternHero />

            <div className="flex justify-center px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 xl:flex xl:justify-between xl:w-full items-center">

                    {/* --- Left Column: Text Content --- */}
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-700">
                        <div className="space-y-6">

                            {/* Optional: Small Badge "New Feature" or "v1.0" */}
                            <BadgeManager className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-800 dark:border-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                                {`🚀 ${version} is Live`}
                            </BadgeManager>

                            <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 sm:text-5xl xl:text-6xl leading-tight">
                                {renderTitle()}
                            </h1>

                            <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-400 sm:leading-relaxed">
                                {subtitle}
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            {/* CTA PRIMARY */}
                            <Button
                                asChild
                                size="lg"
                                className="h-12 px-8 rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/25 hover:bg-blue-700 hover:-translate-y-0.5 transition-all cursor-pointer dark:hover:bg-blue-500 font-semibold"
                            >
                                <Link href={href}>
                                    {cta_primary}
                                </Link>
                            </Button>

                            {/* CTA SECONDARY */}
                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="h-12 px-8 rounded-full border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 cursor-pointer 
                                dark:bg-transparent dark:text-slate-300 dark:border-slate-800 dark:hover:bg-slate-800 dark:hover:text-blue-400"
                            >
                                <Link
                                    scroll={true}
                                    href={cta_secondary_href}
                                    className="flex items-center gap-2"
                                >
                                    <ChartNoAxesGantt className="h-4 w-4" />
                                    {cta_secondary}
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* --- Right Column: Visual/Image --- */}
                    <div className="relative mx-auto w-full max-w-md lg:max-w-125 xl:max-w-150 lg:ml-auto animate-in fade-in slide-in-from-right-5 duration-1000 delay-200">
                        {/* Decorative blob belakang gambar */}
                        <BlobHero />

                        <div className="h-8 w-full border-b rounded-t-2xl border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 flex items-center px-4 space-x-2">
                            <div className="h-3 w-3 rounded-full bg-red-400" />
                            <div className="h-3 w-3 rounded-full bg-yellow-400" />
                            <div className="h-3 w-3 rounded-full bg-green-400" />
                        </div>
                        {/* Image Container */}
                        <div className={cn(
                            "relative overflow-hidden rounded-b-2xl border z-20",
                            // Light Mode Styles
                            "border-slate-200 bg-white/50 backdrop-blur-sm shadow-2xl shadow-slate-200/50",
                            // Dark Mode Styles (Glow Effect)
                            "dark:border-slate-800 dark:bg-slate-900/50 dark:shadow-2xl dark:shadow-blue-900/20"
                        )}>
                            <AspectRatio
                                ratio={16 / 9}
                                className="bg-slate-100 dark:bg-slate-800"
                            >
                                <Image
                                    src="/banner.png"
                                    alt="Ingetin Dashboard Preview"
                                    fill
                                    className="object-cover object-top transition-transform duration-700 hover:scale-[1.02]"
                                    priority
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                                />
                            </AspectRatio>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}