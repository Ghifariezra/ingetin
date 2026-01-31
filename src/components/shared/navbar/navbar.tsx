'use client';

import * as React from "react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { NavigationManager } from "@/components/shared/navigation/navigationManager";
import { Logo } from "@/components/shared/logo/logo";
import { PanelRightOpen } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { usePathname } from "@/i18n/navigation";

// Definisi Tipe Data (Agar bisa dipassing ke Mobile Menu)
type NavItemContent = {
    title: string;
    href: string;
    description: string;
};

type NavItem = {
    label: string;
    content: NavItemContent[];
    href: string;
};

export default function Navbar() {
    const t = useTranslations("App");
    const navigation = useTranslations("Home");
    const links = useTranslations("Links");
    const pathName = usePathname();

    if (pathName.split('/')[1] === 'auth') {
        return;
    }

    // --- SETUP DATA NAVIGATION ---
    const linksItem = [
        {
            label: links("home.label"),
            labelNavs: [
                "Introduction",
                "Problem",
                "TargetUsers",
                "Solution"
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

    const dataNav: NavItem[] = linksItem.map((item) => {
        const content = item.labelNavs.map((labelNav) => {
            const rawHref = navigation(`${labelNav}.href`);
            const safeHref = rawHref.startsWith("#") ? `/${rawHref}` : rawHref;

            return {
                title: navigation(`${labelNav}.title`),
                href: safeHref,
                description: navigation(`${labelNav}.description`),
            };
        });

        return {
            label: item.label,
            content: content,
            href: item.href,
        };
    });

    return (
        <nav id="navbar" className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md transition-colors duration-300 dark:bg-slate-950/80 dark:border-slate-800">
            <div className="mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-6">

                {/* 1. LOGO */}
                <Logo title={t("title")} />

                {/* 2. DESKTOP NAVIGATION (Hidden di Mobile) */}
                <div className="hidden md:block">
                    <NavigationManager navItems={dataNav} />
                </div>

                {/* 3. DESKTOP CTA (Hidden di Mobile) */}
                <div className="hidden md:flex">
                    <NavbarCTA links={links} />
                </div>

                {/* 4. MOBILE MENU TRIGGER (Visible Only di Mobile) */}
                <div className="flex md:hidden">
                    <MobileMenu navItems={dataNav} links={links} title={t("title")} />
                </div>
            </div>
        </nav>
    );
}

// --- KOMPONEN BUTTON CTA (Reusable) ---
function NavbarCTA({ links }: { links: (key: string) => string }) {
    return (
        <div className="flex items-center gap-4 select-none">
            <Button
                asChild
                variant="ghost"
                className="text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all dark:text-slate-300 dark:hover:text-blue-400 dark:hover:bg-blue-900/20"
            >
                <Link href={links("login.href")}>
                    {links("login.label")}
                </Link>
            </Button>

            <Button
                asChild
                className="bg-blue-600 text-white rounded-full px-6 shadow-lg shadow-blue-500/20 transition-all duration-300 hover:bg-blue-700 hover:shadow-blue-500/40 hover:-translate-y-0.5 dark:bg-blue-600 dark:hover:bg-blue-500 dark:shadow-blue-900/20"
            >
                <Link href={links("register.href")}>
                    {links("register.label")}
                </Link>
            </Button>
        </div>
    );
}

// --- KOMPONEN MOBILE MENU (Sheet + Accordion) ---
function MobileMenu({ navItems, links, title }: { navItems: NavItem[], links: (key: string) => string, title: string }) {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden text-slate-900 dark:text-white">
                    <PanelRightOpen className="size-6 text-slate-950 dark:text-white" />
                    <span className="sr-only">Toggle menu</span>
                </Button>
            </SheetTrigger>

            <SheetContent
                side="right"
                className="w-75 sm:w-100 bg-white dark:bg-slate-950 border-l border-slate-200 dark:border-slate-800"
            >
                <SheetHeader className="text-left mb-6">
                    <SheetTitle>
                        <Logo
                            title={title}
                            hideText
                        />
                    </SheetTitle>
                </SheetHeader>

                {/* Mobile Navigation Links */}
                <div className="flex flex-col gap-6 px-4">
                    <div className="flex flex-col space-y-2">
                        {navItems.map((item, index) => {
                            // Jika item punya sub-menu (seperti Home), pakai Accordion
                            if (item.content.length > 0) {
                                return (
                                    <Accordion key={index} type="single" collapsible className="w-full">
                                        <AccordionItem value={`item-${index}`} className="border-b-0">
                                            <AccordionTrigger className="py-2 text-base font-medium hover:no-underline text-slate-700 dark:text-slate-200">
                                                {item.label}
                                            </AccordionTrigger>
                                            <AccordionContent className="flex flex-col space-y-2 pl-4">
                                                {item.content.map((subItem, subIndex) => (
                                                    <Link
                                                        key={subIndex}
                                                        href={subItem.href}
                                                        onClick={() => setIsOpen(false)} // Tutup menu saat diklik
                                                        className="text-sm text-slate-600 dark:text-slate-400 py-2 hover:text-blue-600 dark:hover:text-blue-400 block"
                                                    >
                                                        {subItem.title}
                                                    </Link>
                                                ))}
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                );
                            }

                            // Jika item biasa (single link), pakai Link biasa
                            return (
                                <Link
                                    key={index}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="py-2 text-base font-medium text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-slate-200 dark:bg-slate-800 w-full" />

                    {/* Mobile CTA (Login/Register) */}
                    <div className="flex flex-col gap-3">
                        <Button
                            asChild
                            variant="outline"
                            size={"icon-lg"}
                            className="w-full justify-center rounded-full border-slate-200 dark:border-slate-800 dark:text-white"
                            onClick={() => setIsOpen(false)}
                        >
                            <Link href={links("login.href")}>
                                {links("login.label")}
                            </Link>
                        </Button>
                        <Button
                            asChild
                            className="w-full justify-center rounded-full bg-blue-600 hover:bg-blue-700 text-white"
                            onClick={() => setIsOpen(false)}
                        >
                            <Link href={links("register.href")}>
                                {links("register.label")}
                            </Link>
                        </Button>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}