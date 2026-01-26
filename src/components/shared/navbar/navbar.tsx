'use client';

import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { NavigationManager } from "../navigation/navigationManager";

export default function Navbar() {
    const t = useTranslations("App");
    const navigation = useTranslations("Home");
    const links = useTranslations("Links");
    const linksItem = [
        {
            label: links("home.label"),
            labelNavs: [
                "Introduction",
                "Problem",
                "Solution",
            ],
            href: links("home.href"),
        },
        {
            label: links("features.label"),
            labelNavs: [],
            href: links("features.href"),
        },
        {
            label: links("pricing.label"),
            labelNavs: [],
            href: links("pricing.href"),
        }
    ];

    // Data menu navigasi tengah
    const dataNav = linksItem.map((item) => {
        const content = item.labelNavs.map((labelNav) => ({
            title: navigation(`${labelNav}.title`),
            href: `${navigation(`${labelNav}.href`)}`,
            description: navigation(`${labelNav}.description`),
        }));
        return {
            label: item.label,
            content: content,
            href: item.href,
        };
    });

    return (
        // Wrapper utama: 
        // Light: bg-white/80 (Transparan)
        // Dark: bg-slate-950/80 (Transparan Gelap - Matching Hero Section)
        // Border: border-gray-100 -> dark:border-slate-800
        <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md transition-colors duration-300
            dark:bg-slate-950/80 dark:border-slate-800"
        >

            {/* Container */}
            <div className="mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">

                {/* --- Logo Section --- */}
                <div className="flex items-center gap-2 select-none">
                    <Image
                        src="/chat.png"
                        alt="Logo"
                        width={28}
                        height={28}
                        // Logo: Brightness naik sedikit di dark mode agar lebih pop
                        className="opacity-90 hover:opacity-100 transition-all dark:brightness-110"
                    />
                    <Link
                        href="/"
                        // Text Logo: Slate-900 -> Slate-50 (Putih)
                        // Hover: Blue-600 -> Blue-500 (Lebih terang dikit di dark mode)
                        className="text-xl font-bold tracking-tight text-slate-900 transition-colors 
                            hover:text-blue-600 
                            dark:text-slate-50 dark:hover:text-blue-500"
                    >
                        {t("title").toLowerCase()}
                    </Link>
                </div>

                {/* --- Center Navigation --- */}
                {/* <ul className="hidden md:flex items-center gap-8 select-none">
                    {navItems.map((item, index) => {
                        const isActive = pathname === item.href;
                        return (
                            <li key={index}>
                                <Link
                                    href={item.href}
                                    // Logic Warna Link:
                                    // Active: Blue-600 -> Dark: Blue-500
                                    // Inactive: Slate-600 -> Dark: Slate-300
                                    // Hover: Blue-600 -> Dark: Blue-400
                                    className={`text-sm font-medium transition-colors duration-200 ease-in-out
                                        ${isActive
                                            ? "text-blue-600 dark:text-blue-500"
                                            : "text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
                                        }
                                    `}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul> */}
                <NavigationManager
                    navItems={dataNav}
                />

                {/* --- Right Actions (Auth) --- */}
                <div className="hidden md:flex items-center gap-4 select-none">
                    {/* Login Button (Ghost Variant) */}
                    {/* Light: Text Slate-600, Hover BG Blue-50 */}
                    {/* Dark: Text Slate-300, Hover BG Blue-900/20 (Biru transparan gelap) */}
                    <Button
                        asChild
                        variant="ghost"
                        className="text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all
                            dark:text-slate-300 dark:hover:text-blue-400 dark:hover:bg-blue-900/20"
                    >
                        <Link href={links("login.href")}>
                            {links("login.label")}
                        </Link>
                    </Button>

                    {/* Register Button (Primary) */}
                    {/* Dark Mode: Tetap Blue-600, tapi hover menjadi Blue-500 agar terlihat 'menyala' */}
                    <Button
                        asChild
                        className="bg-blue-600 text-white rounded-full px-6 shadow-lg shadow-blue-500/20 transition-all duration-300
                            hover:bg-blue-700 hover:shadow-blue-500/40 hover:-translate-y-0.5
                            dark:bg-blue-600 dark:hover:bg-blue-500 dark:shadow-blue-900/20"
                    >
                        <Link href={links("register.href")}>
                            {links("register.label")}
                        </Link>
                    </Button>
                </div>
            </div>
        </nav>
    );
}