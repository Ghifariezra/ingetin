import Link from "next/link";
import {
    Github,
    Twitter,
    Linkedin,
    Instagram,
    Globe,
    LucideIcon
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Logo } from "@/components/shared/logo/logo";

export default function Footer() {
    const t = useTranslations("Footer");
    const links = useTranslations("Links");
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full border-t border-slate-200 bg-white dark:bg-slate-950 dark:border-slate-800 transition-colors duration-300">
            <div className="flex flex-col items-center px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8 w-full">
                    {/* --- KOLOM 1: BRANDING --- */}
                    <div className="space-y-8 xl:col-span-1">
                        <Logo title="Ingetin" />
                        <p className="w-full text-sm leading-6 text-slate-600 dark:text-slate-400">
                            {t("branding.description")}
                        </p>
                        <div className="flex space-x-5">
                            <SocialLink href="https://github.com/Ghifariezra" icon={Github} label={t("social.github")} />
                            <SocialLink href="#" icon={Twitter} label={t("social.twitter")} />
                            <SocialLink href="#" icon={Linkedin} label={t("social.linkedin")} />
                            <SocialLink href="#" icon={Instagram} label={t("social.instagram")} />
                        </div>
                    </div>

                    {/* --- KOLOM 2, 3, 4: LINKS GRID --- */}
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">

                            {/* Product Column */}
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-slate-900 dark:text-white">
                                    {t("columns.product.title")}
                                </h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <FooterLink href={
                                        process.env.NODE_ENV === 'development'
                                            ? `http://localhost:3000/${links("features.href")}`
                                            : `https://ingetin-one.vercel.app/${links("features.href")}`
                                    }>{t("columns.product.features")}</FooterLink>
                                    <FooterLink href={
                                        process.env.NODE_ENV === 'development'
                                            ? `http://localhost:3000/${links("pricing.href")}`
                                            : `https://ingetin-one.vercel.app/${links("pricing.href")}`
                                    }>{t("columns.product.pricing")}</FooterLink>
                                    {/* Roadmap & Changelog lebih relevan buat SaaS baru dibanding Testimonial kosong */}
                                    <FooterLink href="https://github.com/users/Ghifariezra/projects/8/views/1">{t("columns.product.roadmap")}</FooterLink>
                                    <FooterLink href="https://github.com/Ghifariezra/ingetin/releases">{t("columns.product.changelog")}</FooterLink>
                                </ul>
                            </div>

                            {/* Support Column (Ganti Company -> Support) */}
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-slate-900 dark:text-white">
                                    {t("columns.support.title")}
                                </h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <FooterLink href={
                                        process.env.NODE_ENV === 'development'
                                            ? 'http://localhost:3000/docs'
                                            : 'https://ingetin-one.vercel.app/docs'
                                    }>{t("columns.support.docs")}</FooterLink>
                                    <FooterLink href="https://tally.so/r/pbD1vq">{t("columns.support.contact")}</FooterLink>
                                    <FooterLink href="https://tally.so/r/pbD1vq">{t("columns.support.feedback")}</FooterLink>
                                    <FooterLink href="https://status.ingetin.app">{t("columns.support.api")}</FooterLink>
                                </ul>
                            </div>
                        </div>

                        <div className="md:grid md:grid-cols-2 md:gap-8">

                            {/* Legal Column */}
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-slate-900 dark:text-white">
                                    {t("columns.legal.title")}
                                </h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <FooterLink href={
                                        process.env.NODE_ENV === 'development'
                                            ? 'http://localhost:3000/legal/privacy'
                                            : 'https://ingetin-one.vercel.app/legal/privacy'
                                    }>{t("columns.legal.privacy")}</FooterLink>
                                    <FooterLink href={
                                        process.env.NODE_ENV === 'development'
                                            ? 'http://localhost:3000/terms'
                                            : 'https://ingetin-one.vercel.app/terms'
                                    }>{t("columns.legal.terms")}</FooterLink>
                                    <FooterLink href={
                                        process.env.NODE_ENV === 'development'
                                            ? 'http://localhost:3000/cookies'
                                            : 'https://ingetin-one.vercel.app/cookies'
                                    }>{t("columns.legal.cookies")}</FooterLink>
                                </ul>
                            </div>

                            {/* Status Column */}
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-slate-900 dark:text-white">
                                    {t("columns.status.title")}
                                </h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li className="flex items-center space-x-2">
                                        <span className="relative flex h-2.5 w-2.5">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                                        </span>
                                        <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                                            {t("columns.status.system_normal")}
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- BOTTOM BAR --- */}
                <div className="mt-16 border-t border-slate-900/10 dark:border-white/10 pt-8 sm:mt-20 lg:mt-24 flex flex-col md:flex-row justify-between items-center gap-4 w-full">
                    <p className="text-xs leading-5 text-slate-500 dark:text-slate-400">
                        &copy; {currentYear} {t("copyright.text")}
                    </p>

                    <div className="flex items-center space-x-2 text-xs text-slate-500 dark:text-slate-400">
                        <Globe className="h-3 w-3" />
                        <span>{t("language_label")}</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

// Sub-components tetap sama
function SocialLink({ href, icon: Icon, label }: { href: string; icon: LucideIcon; label: string }) {
    return (
        <Link 
            href={href} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-slate-400 hover:text-slate-500 dark:hover:text-slate-300 transition-colors" 
            aria-label={label}>
            <Icon className="h-5 w-5" aria-hidden="true" />
        </Link>
    );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <li>
            <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm leading-6 text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors">
                {children}
            </Link>
        </li>
    );
}