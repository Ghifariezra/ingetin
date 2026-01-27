import { BlobFeatures } from "@/components/shared/decoration/blob";
// import { PatternHero } from "@/components/shared/decoration/pattern";
import { FeaturesCTA } from "@/components/shared/section/features/features-cta";
import { FeaturesGrid } from "@/components/shared/section/features/features-grid";
import { FeaturesHero } from "@/components/shared/section/features/features-hero";
import { MainContainer } from "@/components/shared/section/main";

export default function FeaturesPage() {
    return (
        <MainContainer className="bg-white dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
            {/* --- DECORATIVE BACKGROUND BLOBS --- */}
            {/* <PatternHero /> */}
            <BlobFeatures />

            {/* --- MAIN CONTENT --- */}
            <FeaturesHero />
            <FeaturesGrid />
            <FeaturesCTA />
        </MainContainer>
    );
}