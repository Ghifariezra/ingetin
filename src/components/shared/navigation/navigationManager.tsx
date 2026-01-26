"use client"

import * as React from "react"
import Link from "next/link"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/_lib/utils" // Pastikan import cn

interface NavigationManagerProps {
    title: string;
    href: string;
    description: string;
}

interface NavigationManagerContentProps {
    label: string;
    content: NavigationManagerProps[];
    href: string;
}

type NavigationManagerType = {
    navItems: NavigationManagerContentProps[];
}

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
    title: string;
    href: string;
}

export function NavigationManager({ navItems }: NavigationManagerType) {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                {navItems.map((navItem, index) => (
                    <NavigationMenuItem key={index}>
                        {navItem.content.length > 0 ? (
                            <>
                                {/* Trigger Button */}
                                <NavigationMenuTrigger className="bg-transparent dark:bg-transparent dark:text-slate-200 dark:hover:text-white dark:data-[state=open]:bg-slate-800">
                                    {navItem.label}
                                </NavigationMenuTrigger>

                                {/* Dropdown Content Wrapper */}
                                <NavigationMenuContent>
                                    {/* Tambahkan padding (p-4) dan atur background list.
                                      Note: Background utama dropdown biasanya diatur di components/ui/navigation-menu 
                                      tapi kita pastikan listnya rapi disini.
                                    */}
                                    <ul className="grid w-75 gap-2 md:w-100">
                                        {navItem.content.map((item, idx) => (
                                            <ListItem
                                                key={idx}
                                                title={item.title}
                                                href={item.href}
                                            >
                                                {item.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </>
                        ) : (
                            <NavigationMenuLink asChild>
                                <Link
                                    href={navItem.href}
                                    className={cn(
                                        navigationMenuTriggerStyle(),
                                        // Custom style untuk link biasa agar match dark mode
                                        "bg-transparent dark:bg-transparent dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-white"
                                    )}
                                >
                                    {navItem.label}
                                </Link>
                            </NavigationMenuLink>
                        )}
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    )
}

function ListItem({
    title,
    children,
    href,
    // className,
    ...props // Props ini sekarang diasumsikan untuk elemen <a> (Link)
}: ListItemProps) {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    href={href}
                    scroll={true}
                    className={cn(
                        // BASE STYLES:
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",

                        // LIGHT MODE HOVER:
                        "hover:bg-blue-50 hover:text-blue-700",

                        // DARK MODE STYLES:
                        "dark:hover:bg-slate-800/80 dark:focus:bg-slate-800/80"
                    )}
                    {...props} // Props disebar ke Link (<a> tag) bukan ke <li>
                >
                    <div className="flex flex-col gap-1">
                        <div className="text-sm font-medium leading-none text-slate-900 dark:text-slate-100 group-hover:text-blue-700 dark:group-hover:text-blue-400">
                            {title}
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
                            {children}
                        </p>
                    </div>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}