import { LegalLayout } from "@/components/shared/section/legal/legal";

export default function PrivacyPage() {
    return (
        <LegalLayout
            namespace="Privacy"
            variant="blue"
            sectionKeys={["collection", "usage", "security", "contact"]}
        />
    );
}