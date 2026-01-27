"use client"

import * as React from "react"
import { Check, ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "@/_lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandGroup,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { TooltipManager } from "../tooltip/tooltipManager"
import { Separator } from "@/components/ui/separator"

export interface PickerOption {
    value: string
    label: string
    icon: React.ElementType
}

interface PopoverPickerProps {
    title: string
    icon?: React.ElementType
    label?: string
    options: PickerOption[]
    activeValue: string
    onSelect: (value: string) => void
    className?: string
    isCircleIcon?: boolean
}

export function PopoverPicker({
    title,
    icon: ActiveIcon,
    label,
    options,
    activeValue,
    onSelect,
    className,
    isCircleIcon = false,
}: PopoverPickerProps) {
    const [open, setOpen] = React.useState(false)

    const activeOption = options.find((opt) => opt.value === activeValue)
    const DisplayIcon = ActiveIcon || activeOption?.icon

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <TooltipManager title={title}>
                <PopoverTrigger asChild>
                    <Button
                        variant="ghost"
                        size="sm"
                        role="combobox"
                        aria-expanded={open}
                        className={cn(
                            "w-full flex justify-between gap-2 px-2 transition-all duration-200",
                            "text-slate-600 hover:text-blue-600 hover:bg-blue-50",
                            "dark:text-slate-300 dark:hover:text-blue-400 dark:hover:bg-blue-900/20",
                            className
                        )}
                    >
                        {DisplayIcon && (
                            <div
                                className={cn(
                                    "relative flex items-center justify-center transition-colors",
                                    isCircleIcon
                                        ? "h-5 w-5 rounded-full border border-slate-200 shadow-sm overflow-hidden dark:border-slate-700"
                                        : "h-5 w-5"
                                )}
                            >
                                <DisplayIcon className={cn("h-full w-full", isCircleIcon ? "object-cover" : "")} />
                            </div>
                        )}

                        <span className="text-xs font-medium inline-block">
                            {label || activeOption?.label}
                        </span>
                        {open ? (
                            <ChevronUp className="h-4 w-4 text-slate-400" />
                        ) : (
                            <ChevronDown className="h-4 w-4 text-slate-400" />
                        )}
                    </Button>
                </PopoverTrigger>
            </TooltipManager>

            <PopoverContent align="end" className="w-48 p-0 shadow-lg border-slate-100 dark:border-slate-800 dark:bg-slate-950">
                <Command 
                    defaultValue={activeValue}
                    className="bg-slate-50 dark:bg-slate-950">
                    <div className="px-3 py-2 text-xs font-semibold text-muted-foreground">
                        {title}
                    </div>
                    <Separator />

                    <CommandList>
                        <CommandGroup className="p-1">
                            {options.map((option) => {
                                const isSelected = activeValue === option.value;

                                return (
                                    <CommandItem
                                        key={option.value}
                                        value={option.value}
                                        onSelect={() => {
                                            onSelect(option.value)
                                            setOpen(false)
                                        }}
                                        className={cn(
                                            "cursor-pointer gap-3 py-2.5 rounded-sm px-2 mb-1",

                                            // 1. Matikan gaya hover/fokus bawaan agar tidak bertumpuk
                                            "aria-selected:bg-transparent data-[selected=true]:bg-transparent",

                                            // 2. Terapkan logika gaya kustom
                                            isSelected
                                                ? // Jika DIPILIH (Active):
                                                // - Background selalu biru (baik saat diam maupun saat di-hover/fokus)
                                                // - Teks biru
                                                "bg-blue-50 dark:bg-blue-900/20 data-[selected=true]:bg-blue-50 dark:data-[selected=true]:bg-blue-900/20 text-blue-700 dark:text-blue-400"

                                                : // Jika TIDAK DIPILIH:
                                                // - Background transparan saat diam
                                                // - Background abu-abu HANYA saat di-hover/fokus (data-selected=true)
                                                // - Teks abu-abu
                                                "data-[selected=true]:bg-slate-100 dark:data-[selected=true]:bg-slate-800 text-slate-600 dark:text-slate-400"
                                        )}
                                    >
                                        <div
                                            className={cn(
                                                "relative flex items-center justify-center",
                                                isCircleIcon
                                                    ? "h-5 w-5 rounded-full border border-slate-100 overflow-hidden dark:border-slate-700"
                                                    : "h-4 w-4"
                                            )}
                                        >
                                            <option.icon className={cn("h-full w-full", isCircleIcon ? "object-cover" : "")} />
                                        </div>

                                        <span className="flex-1 text-sm font-medium leading-none">
                                            {option.label}
                                        </span>

                                        {isSelected && (
                                            <Check className="h-4 w-4 text-blue-600 dark:text-blue-500" />
                                        )}
                                    </CommandItem>
                                )
                            })}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}