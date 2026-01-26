import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { TooltipManager } from "../tooltip/tooltipManager";
import { cn } from "@/_lib/utils";

interface DropdownPickerProps {
    title: string;
    trigger: React.ReactNode;
    children: React.ReactNode;
    align?: "center" | "end" | "start"; // Opsi alignment agar fleksibel di navbar
    className?: string;
}

export function DropdownPicker({
    title,
    trigger,
    children,
    align = "end", // Default ke 'end' biasanya lebih rapi untuk navbar kanan
    className
}: DropdownPickerProps) {
    return (
        <DropdownMenu modal={false}>
            <TooltipManager title={title}>
                <DropdownMenuTrigger asChild className="outline-none focus-visible:ring-0">
                    {/* Wrapper span agar trigger menerima ref dengan benar */}
                    <span>{trigger}</span>
                </DropdownMenuTrigger>
            </TooltipManager>

            <DropdownMenuContent
                align={align}
                className={cn(
                    // BASE & LIGHT MODE:
                    "w-48 p-1 rounded-xl shadow-lg border-slate-100 bg-white",

                    // DARK MODE IMPROVEMENT:
                    // Background Slate-950 (sama dengan Navbar/Hero)
                    // Border Slate-800 (abu gelap halus)
                    "dark:bg-slate-950 dark:border-slate-800",

                    className
                )}
            >
                <DropdownMenuLabel
                    className="px-2 py-2 text-xs font-semibold text-center uppercase tracking-wider text-slate-500 dark:text-slate-400"
                >
                    {title}
                </DropdownMenuLabel>

                {/* Garis pemisah halus di bawah label */}
                <DropdownMenuSeparator className="bg-slate-100 dark:bg-slate-800 m-1" />

                <div className="flex flex-col gap-1">
                    {children}
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}