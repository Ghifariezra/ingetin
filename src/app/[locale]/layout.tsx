import { NextIntlClientProvider, hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { getMessages } from "next-intl/server";
import Navbar from "@/components/shared/navbar/navbar";
import { isLocale } from "@/i18n/locale";
import { MetadataBuilder } from "@/_lib/metadata/metadataBuilder";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import { Toaster } from "@/components/ui/sonner";
import { Cursor, CursorProvider } from "@/components/animate-ui/components/animate/cursor";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { QuickAccess } from "@/components/shared/floating/quckAccess";
import Footer from "@/components/shared/footer/footer";
import { AuthProvider } from "@/components/providers/auth.provider";
import { notFound } from "next/navigation";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

type Props = {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;

    if (!isLocale(locale) || !hasLocale(routing.locales, locale)) {
        return {};
    }

    return new MetadataBuilder({
        locale,
        namespace: "Metadata",
    }).build();
}

export default async function LocaleLayout({ children, params }: Props) {
    const { locale } = await params;

    if (!isLocale(locale) || !hasLocale(routing.locales, locale)) {
        notFound();
    }

    const messages = await getMessages({ locale });

    return (
        <html lang={locale} className="no-scrollbar scroll-smooth" suppressHydrationWarning>
            <body className={`${inter.variable} antialiased overflow-x-hidden`} >
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <AuthProvider>
                        <ThemeProvider
                            attribute="class"
                            defaultTheme="light"
                            enableSystem
                            disableTransitionOnChange
                        >
                            <Navbar />
                            {children}
                            <Toaster
                                position="top-right"
                                richColors // ✅ Wajib: Agar warna sukses=hijau, error=merah otomatis
                                closeButton // ✅ Wajib: Agar user bisa menutup notif manual
                                theme="light"
                                toastOptions={{
                                    duration: 4000,
                                    // Kustomisasi Class Tailwind
                                    classNames: {
                                        // Bagian utama kartu Toast
                                        toast: "group toast group-[.toaster]:bg-white group-[.toaster]:dark:bg-slate-950 group-[.toaster]:border-slate-200 group-[.toaster]:dark:border-slate-800 group-[.toaster]:shadow-lg group-[.toaster]:dark:shadow-slate-900/50",

                                        // Teks Deskripsi
                                        description: "group-[.toast]:text-slate-500 group-[.toast]:dark:text-slate-400 font-medium",

                                        // Tombol Action (jika ada)
                                        actionButton: "group-[.toast]:bg-blue-600 group-[.toast]:text-slate-50",

                                        // Tombol Cancel (jika ada)
                                        cancelButton: "group-[.toast]:bg-slate-100 group-[.toast]:text-slate-500 dark:group-[.toast]:bg-slate-800",

                                        // Tombol Close (X)
                                        closeButton: "group-[.toast]:bg-slate-50 group-[.toast]:dark:bg-slate-900 group-[.toast]:text-slate-500 group-[.toast]:dark:text-slate-400 group-[.toast]:border-slate-200 group-[.toast]:dark:border-slate-800 hover:group-[.toast]:text-slate-900 dark:hover:group-[.toast]:text-slate-50 transition-colors"
                                    },
                                }}
                            />
                            <CursorProvider >
                                <Cursor
                                    className="text-blue-600 dark:text-blue-400 shadow-blue-600/20 dark:shadow-blue-400/20"
                                    lang={locale}
                                />

                            </CursorProvider>
                            <QuickAccess />
                            <Footer />
                        </ThemeProvider>
                    </AuthProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}