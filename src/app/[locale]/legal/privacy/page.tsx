import { LegalSection } from "@/components/shared/section/legal/legal";

export default function PrivacyPage() {
    return (
        <LegalSection
            namespace="Privacy"
            variant="blue"
            sectionKeys={["collection", "usage", "security", "contact"]}
        />
    );
}