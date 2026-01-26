import { NextIntlClientProvider, hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { getMessages } from "next-intl/server";
import Navbar from "@/components/shared/navbar/navbar";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/locale";
import { MetadataBuilder } from "@/_lib/metadata/metadataBuilder";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import { Toaster } from "@/components/ui/sonner";
import { Cursor, CursorProvider } from "@/components/animate-ui/components/animate/cursor";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { QuickAccess } from "@/components/shared/floating/quckAccess";

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
        notFound();
    }

    return new MetadataBuilder({
        locale,
        namespace: "Metadata",
    }).build();
}

export default async function LocaleLayout({ children, params }: Props) {
    const { locale } = await params;

    if (!isLocale(locale) || !hasLocale(routing.locales, locale)) {
        return notFound();
    }

    const messages = await getMessages({ locale });

    return (
        <html lang={locale} className="no-scrollbar scroll-smooth" suppressHydrationWarning>
            <body className={`${inter.variable} antialiased overflow-x-hidden`} >
                <NextIntlClientProvider locale={locale} messages={messages}>
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
                            toastOptions={{
                                duration: 4000,
                                closeButton: true,
                                descriptionClassName: "font-medium",
                                toasterId: "global-toaster",
                            }}
                        />
                        <CursorProvider>
                            <Cursor
                                className="text-blue-600 dark:text-blue-400"
                            />
                        </CursorProvider>
                        <QuickAccess />
                    </ThemeProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}