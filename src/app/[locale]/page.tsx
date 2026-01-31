import HeroSection from "@/components/shared/section/home/hero";
import ProblemSection from "@/components/shared/section/home/problem";
import SolutionSection, { StepItem } from "@/components/shared/section/home/solution";
import { useTranslations } from "next-intl";
import { ClipboardList, LayoutDashboard, BadgeCheck } from "lucide-react";
import { MainContainer } from "@/components/shared/section/main";
import TargetUserSection from "@/components/shared/section/home/target.users";

export default function HomePage() {
    const app = useTranslations("App");
    const t = useTranslations("Home");
    const links = useTranslations("Links.register");

    const problemItems = t.raw("Problem.items") as string[];

    const solutionSteps: StepItem[] = [
        {
            title: t("Solution.step_1"),
            description: t("Solution.step_1_desc"),
            icon: ClipboardList,
        },
        {
            title: t("Solution.step_2"),
            description: t("Solution.step_2_desc"),
            icon: LayoutDashboard,
        },
        {
            title: t("Solution.step_3"),
            description: t("Solution.step_3_desc"),
            icon: BadgeCheck,
        },
    ];

    return (
        <MainContainer className="relative flex flex-col w-full overflow-x-hidden">
            <HeroSection
                title={t("Introduction.title")}
                subtitle={t("Introduction.subtitle")}
                cta_primary={t("Introduction.cta_primary")}
                cta_secondary={t("Introduction.cta_secondary")}
                cta_secondary_href={t("Introduction.cta_secondary_href")}
                hrefSection={t("Introduction.href")}
                href={links("href")}
                version={app("version")}
            />

            <ProblemSection
                title={t("Problem.title")}
                items={problemItems}
                hrefSection={t("Problem.href")}
            />

            <TargetUserSection
                label={t("TargetUsers.label")}
                title={t("TargetUsers.title")}
                description={t("TargetUsers.description")}
                hrefSection={t("TargetUsers.href")}
                items={t.raw("TargetUsers.items")}
            />

            <SolutionSection
                title={t("Solution.title")}
                description={t("Solution.description")}
                hrefSection={t("Solution.href")}
                steps={solutionSteps}
            />
        </MainContainer>
    );
}