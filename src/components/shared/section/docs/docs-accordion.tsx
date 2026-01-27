import { useTranslations } from "next-intl";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqKeys = ["item_1", "item_2", "item_3", "item_4", "item_5"] as const;

export function DocsAccordion() {
    const t = useTranslations("Docs");

    return (
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
    );
}