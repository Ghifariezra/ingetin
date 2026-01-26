import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { ChartNoAxesGantt } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection({
    title,
    subtitle,
    cta_primary,
    cta_secondary,
    cta_secondary_href,
    hrefSection,
    href,
}: {
    title: string;
    subtitle: string;
    cta_primary: string;
    cta_secondary: string;
    cta_secondary_href: string;
    hrefSection: string;
    href: string;
}) {

    return (
        // SECTION BG:
        // Light: Gradient radial putih ke biru tipis
        // Dark: Solid Slate-950 (Deep Blue/Black) agar elegan
        <section id={hrefSection.replace("#", "")} className="relative w-full overflow-hidden py-20 lg:py-28 transition-colors duration-300
            bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#eff6ff_100%)]
            dark:bg-slate-950 dark:[background:none]
        ">
            <div className="flex justify-center px-4 sm:px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 xl:flex xl:justify-between xl:w-full items-center">

                    {/* --- Left Column: Text Content --- */}
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-8">
                        <div className="space-y-4">
                            {/* TITLE: Slate-900 (Light) -> Slate-50 (Dark) */}
                            <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 sm:text-5xl xl:text-6xl">
                                {title.includes("Awkwardness") ? (
                                    <>
                                        {title.split("Awkwardness")[0]}
                                        {/* Highlight Text: Blue-600 (Light) -> Blue-500 (Dark) agar lebih pop */}
                                        <span className="relative whitespace-nowrap text-blue-600 dark:text-blue-500">
                                            <svg
                                                aria-hidden="true"
                                                viewBox="0 0 418 42"
                                                // SVG Underline: Biru muda transparan -> Biru gelap transparan di dark mode
                                                className="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300/70 dark:fill-blue-500/50"
                                                preserveAspectRatio="none"
                                            >
                                                <path d="M203.371.916c-26.013-2.078-76.686 1.963-103.314 9.081C51.79 22.01-7.966 54.03 0 61.662c8.134 7.888 78.512-19.641 111.381-24.03 34.935-4.703 87.21-1.712 119.654-7.49C271.36 25.65 305.14 5.956 313.6 0c8.456-5.955-39.956 4.995-110.229.916Z" />
                                            </svg>
                                            <span className="relative italic font-bold">Awkwardness</span>
                                        </span>
                                        {title.split("Awkwardness")[1]}
                                    </>
                                ) : title.includes("'Ga Enakan'") ? (
                                    <>
                                        {title.split("'Ga Enakan'")[0]}
                                        <span className="relative whitespace-nowrap text-blue-600 dark:text-blue-500">
                                            <svg
                                                aria-hidden="true"
                                                viewBox="0 0 418 42"
                                                className="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300/70 dark:fill-blue-500/50"
                                                preserveAspectRatio="none"
                                            >
                                                <path d="M203.371.916c-26.013-2.078-76.686 1.963-103.314 9.081C51.79 22.01-7.966 54.03 0 61.662c8.134 7.888 78.512-19.641 111.381-24.03 34.935-4.703 87.21-1.712 119.654-7.49C271.36 25.65 305.14 5.956 313.6 0c8.456-5.955-39.956 4.995-110.229.916Z" />
                                            </svg>
                                            <span className="relative italic font-bold">Ga Enakan</span>
                                        </span>
                                        {title.split("'Ga Enakan'")[1]}
                                    </>
                                ) : title}
                            </h1>

                            {/* SUBTITLE: Slate-600 -> Slate-300 (Dark) */}
                            <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-300 sm:leading-relaxed">
                                {subtitle}
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            {/* CTA PRIMARY */}
                            <Button
                                asChild
                                size="lg"
                                className="rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700 hover:-translate-y-0.5 transition-all cursor-pointer dark:hover:bg-blue-500"
                            >
                                {/* Pass href ke Link, bukan onClick */}
                                <Link href={href}>
                                    {cta_primary}
                                </Link>
                            </Button>

                            {/* CTA SECONDARY */}
                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="rounded-full text-slate-600 shadow-lg hover:text-blue-600 hover:bg-blue-50 cursor-pointer 
        dark:bg-transparent dark:text-slate-300 dark:border-slate-700 dark:hover:bg-blue-900/20 dark:hover:text-blue-400"
                            >
                                <Link 
                                    scroll={true}
                                href={cta_secondary_href}>
                                    <ChartNoAxesGantt />
                                    {cta_secondary}
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* --- Right Column: Visual/Image --- */}
                    <div className="relative mx-auto w-full max-w-md lg:max-w-125 xl:max-w-150 lg:ml-auto">
                        {/* Decorative blob: Blue-400 (Light) -> Blue-600 (Dark) supaya lebih dalam */}
                        <div className="absolute -top-8 -right-8 z-10 h-64 w-64 rounded-full bg-blue-400/40 blur-3xl dark:bg-blue-600/20" />

                        {/* Image Container */}
                        {/* Border Slate-100 -> Slate-800 */}
                        {/* Bg White -> Bg Slate-900 */}
                        <div className="relative overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-2xl shadow-slate-200/50 z-20 
                            dark:border-slate-800 dark:bg-slate-900 dark:shadow-none"
                        >
                            <AspectRatio
                                ratio={16 / 9}
                                className="bg-slate-50 dark:bg-slate-800"
                            >
                                <Image
                                    src="/banner.png"
                                    alt="Dashboard Preview"
                                    fill
                                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                                    priority
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                                />
                            </AspectRatio>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}