import Image from "next/image";
import Link from "next/link";

export function Logo({ title }: { title: string }) {
    return (
        <div className="flex items-center gap-2 select-none">
            <Image
                src="/chat.png"
                alt="Logo"
                width={28}
                height={28}
                // Logo: Brightness naik sedikit di dark mode agar lebih pop
                className="opacity-90 hover:opacity-100 transition-all dark:brightness-110"
            />
            <Link
                href="/"
                // Text Logo: Slate-900 -> Slate-50 (Putih)
                // Hover: Blue-600 -> Blue-500 (Lebih terang dikit di dark mode)
                className="text-xl font-bold tracking-tight text-slate-900 transition-colors 
                            hover:text-blue-600 
                            dark:text-slate-50 dark:hover:text-blue-500"
            >
                {title.toLowerCase()}
            </Link>
        </div>
    )
}