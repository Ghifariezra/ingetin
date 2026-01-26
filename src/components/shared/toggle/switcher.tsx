import { Settings } from "lucide-react";
import { SwitchLang } from "./switchLang";
import { SwitchTheme } from "./switchTheme";
import { useTranslations } from "next-intl";
import { DropdownPicker } from "../dropdown/dropdownPicker";
import { cn } from "@/_lib/utils"; // Gunakan cn untuk merge class dengan rapi

export function Switcher() {
    const t = useTranslations("Preferences");

    return (
        <div>
            <DropdownPicker
                title={t("title")}
                trigger={
                    // WRAPPER ICON:
                    // Kita bungkus icon dengan div agar punya area klik (touch target) yang nyaman
                    // dan background hover yang bulat.
                    <div className={cn(
                        "flex items-center justify-center p-3 rounded-full transition-all duration-300",

                        // LIGHT MODE:
                        // Text abu-abu, Hover jadi Biru & Background Biru tipis
                        "text-slate-600 hover:text-blue-600 hover:bg-blue-50",

                        // DARK MODE IMPROVEMENT:
                        // Text Silver (Slate-300), Hover jadi Biru Muda (Blue-400)
                        // Background hover jadi transparan biru gelap
                        "dark:text-slate-300 dark:hover:text-blue-400 dark:hover:bg-blue-900/20 group"
                    )}>
                        <Settings
                            // ANIMASI GEAR:
                            // Saat di-hover, gear akan berputar 90 derajat
                            className="h-5 w-5 transition-transform duration-500 ease-in-out group-hover:rotate-90"
                        />
                    </div>
                }
            >
                <div className="flex flex-col gap-2">
                    <SwitchLang />
                    <SwitchTheme />
                </div>
            </DropdownPicker>
        </div>
    );
}