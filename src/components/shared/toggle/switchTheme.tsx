"use client"

import React, { useState } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun, Laptop } from "lucide-react"
import { PopoverPicker, PickerOption } from "@/components/shared/popover/popoverPicker"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"

export function SwitchTheme() {
    const t = useTranslations("ThemeSwitcher")
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false);

    const THEME_OPTIONS: PickerOption[] = [
        { value: "light", label: t("current_light"), icon: Sun },
        { value: "dark", label: t("current_dark"), icon: Moon },
        { value: "system", label: t("current_system"), icon: Laptop },
    ]

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <Button variant="ghost" size="sm" disabled>
                ...
            </Button>
        )
    }

    return (
        <PopoverPicker
            title={t("label")}
            options={THEME_OPTIONS}
            activeValue={theme || "system"}
            onSelect={setTheme}
        />
    )
}