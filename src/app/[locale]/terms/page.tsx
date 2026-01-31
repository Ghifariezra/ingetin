import { LegalSection } from "@/components/shared/section/legal/legal";

export default function TermsPage() {
    return (
        <LegalSection
            namespace="Terms"
            variant="blue" 
            sectionKeys={[
                "disclaimer",
                "account",
                "anti_spam",
                "usage",
                "payment",
                "termination",
                "liability",
            ]}
        />
    );
}