import { LegalLayout } from "@/components/shared/section/legal/legal";

export default function TermsPage() {
    return (
        <LegalLayout
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