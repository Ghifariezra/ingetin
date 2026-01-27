import { useTranslations } from "next-intl";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function DocsPage() {
    const t = useTranslations("Docs");

    // List key FAQ sesuai urutan di JSON
    const faqKeys = ["item_1", "item_2", "item_3", "item_4", "item_5"] as const;

    return (
        <div className="mx-auto max-w-3xl px-6 py-24 min-h-[80vh]">
            {/* --- Header Section --- */}
            <div className="text-center mb-16 space-y-4">
                <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                    {t("title")}
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                    {t("subtitle")}
                </p>
            </div>

            {/* --- Accordion Content --- */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 sm:p-10">
                <Accordion type="single" collapsible className="w-full">
                    {faqKeys.map((key) => (
                        <AccordionItem key={key} value={key} className="border-b-slate-200 dark:border-b-slate-800">
                            <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                {t(`faq.${key}.question`)}
                            </AccordionTrigger>
                            <AccordionContent className="text-slate-600 dark:text-slate-400 leading-relaxed text-base pt-2 pb-6">
                                {t(`faq.${key}.answer`)}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>

            {/* --- Footer Note (Opsional) --- */}
            <div className="mt-12 text-center">
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    <span
                        className="
                [&_a]:text-blue-600 
                [&_a]:font-semibold 
                [&_a]:underline 
                [&_a]:underline-offset-4 
                hover:[&_a]:text-blue-500 
                dark:[&_a]:text-blue-400
                transition-colors
            "
                        dangerouslySetInnerHTML={{ __html: t.raw(`content`) }}
                    />
                </p>
            </div>
        </div>
    );
}