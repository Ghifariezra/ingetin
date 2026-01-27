import { DocsHeader } from "@/components/shared/section/docs/docs-header";
import { DocsAccordion } from "@/components/shared/section/docs/docs-accordion";
import { DocsContact } from "@/components/shared/section/docs/docs-contact";
import { MainContainer } from "@/components/shared/section/main";

export default function DocsPage() {
    return (
        <MainContainer className="mx-auto max-w-3xl px-6 py-24 min-h-[80vh]">
            <DocsHeader />
            <DocsAccordion />
            <DocsContact />
        </MainContainer>
    );
}