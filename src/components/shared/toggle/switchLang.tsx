"use client"

import { useTranslations } from "next-intl"
import { useLanguageSwitcher } from "@/_hooks/toggle/lang"
import { PopoverPicker, PickerOption } from "@/components/shared/popover/popoverPicker"
import { FlagID, FlagUS } from "@/components/shared/svg/flags"

export function SwitchLang() {
    const t = useTranslations("LanguageSwitcher")
    const { currentLocale, changeLanguage } = useLanguageSwitcher()

    const LANGUAGES: PickerOption[] = [
        { value: "id", label: t("current_id"), icon: FlagID },
        { value: "en", label: t("current_en"), icon: FlagUS },
    ]

    return (
        <PopoverPicker
            title={t("label")}
            options={LANGUAGES}
            activeValue={currentLocale}
            onSelect={changeLanguage}
            isCircleIcon={true} // Aktifkan mode bulat untuk bendera
        />
    )
}