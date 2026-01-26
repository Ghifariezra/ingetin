import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

type MetadataOptions = {
    locale: string;
    namespace?: string;
    titleKey?: string;
    descriptionKey?: string;
    title?: string;
    description?: string;
    path?: string;
    noIndex?: boolean;
};

export class MetadataBuilder {
    private locale: string;
    private namespace: string;
    private titleKey: string;
    private descriptionKey: string;
    private customTitle?: string;
    private customDescription?: string;
    private path?: string;
    private noIndex?: boolean;

    constructor(options: MetadataOptions) {
        this.locale = options.locale;
        this.namespace = options.namespace ?? "Metadata";
        this.titleKey = options.titleKey ?? "title";
        this.descriptionKey = options.descriptionKey ?? "description";
        this.customTitle = options.title;
        this.customDescription = options.description;
        this.path = options.path;
        this.noIndex = options.noIndex;
    }

    async build(): Promise<Metadata> {
        const t = await getTranslations({
            locale: this.locale,
            namespace: this.namespace,
        });

        const title = this.customTitle ?? t(this.titleKey);
        const description =
            this.customDescription ?? t(this.descriptionKey);

        return {
            title: {
                default: title,
                template: `%s | Ingetin`,
            },
            description,
            applicationName: "Ingetin",
            metadataBase: new URL("https://ingetin.id"), // ganti nanti
            alternates: this.path
                ? {
                    canonical: this.path,
                }
                : undefined,
            robots: this.noIndex
                ? { index: false, follow: false }
                : undefined,
            openGraph: {
                title,
                description,
                siteName: "Ingetin",
                locale: this.locale,
                type: "website",
            },
        };
    }
}
