import { LegalSection } from "@/components/shared/section/legal/legal";
import { Cookie } from "lucide-react";

export default function CookiesPage() {
    return (
        <LegalSection
            namespace="Cookies"
            variant="orange"
            icon={<Cookie className="h-10 w-10" />}
            sectionKeys={["what_are_cookies", "why_we_use", "control", "updates"]}
        />
    );
}