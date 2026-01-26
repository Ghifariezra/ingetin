import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export function TooltipManager({
    children,
    title,
}: {
    children: React.ReactNode;
    title: string;
}) {
    const isLang = title.includes("Change") || title.includes("Ganti");

    return (
        <Tooltip
            delayDuration={300}
        >
            <TooltipTrigger asChild>
                {children}
            </TooltipTrigger>
            <TooltipContent
                side={
                    isLang ? "left" : "top"
                }
            >
                <p className="text-xs">{title}</p>
            </TooltipContent>
        </Tooltip>
    )
}
