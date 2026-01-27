import { LegalSection } from "@/components/shared/section/legal/legal";

export default function TermsPage() {
    return (
        <LegalSection
            namespace="Terms"
            variant="blue" 
            sectionKeys={[
                "account",
                "usage",
                "payment",
                "termination",
                "limitation",
                "contact"
            ]}
        />
    );
}