import { useState, useCallback } from "react"
import { useLocale } from "next-intl"
import { usePathname, useRouter } from "@/i18n/navigation"

export function useLanguageSwitcher() {
    const [isOpen, setIsOpen] = useState(false)
    const locale = useLocale()
    const router = useRouter()
    const pathname = usePathname()

    // Fungsi untuk mengganti bahasa
    const changeLanguage = useCallback((value: string) => {
        // Jika memilih bahasa yang sama, tutup saja
        if (value === locale) {
            setIsOpen(false)
            return
        }

        // Ganti URL dengan locale baru (replace agar history aman)
        router.replace(pathname, { locale: value })
        setIsOpen(false)
    }, [locale, pathname, router])

    return {
        isOpen,
        setIsOpen,
        currentLocale: locale,
        changeLanguage,
    }
}