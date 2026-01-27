import { useTranslations } from "next-intl";
import { ContactManager } from "@/components/shared/contact/contact";

export function DocsContact() {
    const t = useTranslations("Docs");

    return (
        <div className="mt-12 text-center">
            <ContactManager content={t.raw("contact")} />
        </div>
    );
}