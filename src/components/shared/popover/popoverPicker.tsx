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
                            // BASE STYLE: Flex layout
                            "w-full flex justify-between gap-2 px-2 transition-all duration-200",

                            // LIGHT MODE:
                            "text-slate-600 hover:text-blue-600 hover:bg-blue-50",

                            // DARK MODE: 
                            // Text jadi Slate-300 (silver), Hover jadi Biru Transparan Gelap
                            "dark:text-slate-300 dark:hover:text-blue-400 dark:hover:bg-blue-900/20",

                            className
                        )}
                    >
                        {DisplayIcon && (
                            <div
                                className={cn(
                                    "relative flex items-center justify-center transition-colors",
                                    isCircleIcon
                                        ? "h-5 w-5 rounded-full border border-slate-200 shadow-sm overflow-hidden dark:border-slate-700" // Flag Style
                                        : "h-5 w-5" // Icon Style
                                )}
                            >
                                <DisplayIcon className={cn("h-full w-full", isCircleIcon ? "object-cover" : "")} />
                            </div>
                        )}

                        <span className="hidden text-xs font-medium sm:inline-block">
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

            {/* POPOVER CONTENT */}
            {/* Border Slate-100 -> Slate-800 di Dark Mode */}
            <PopoverContent align="end" className="w-37.5 p-0 shadow-lg border-slate-100 dark:border-slate-800 dark:bg-slate-950">
                <Command>
                    <CommandList>
                        <CommandGroup heading={title}>
                            {options.map((option) => (
                                <CommandItem
                                    key={option.value}
                                    value={option.value}
                                    onSelect={() => {
                                        onSelect(option.value)
                                        setOpen(false)
                                    }}
                                    // Item Hover: Dark mode menggunakan style default CommandItem (biasanya sudah handle dark mode),
                                    // tapi kita pastikan cursor pointer.
                                    className="cursor-pointer gap-3 py-2.5"
                                >
                                    <div
                                        className={cn(
                                            "relative flex items-center justify-center",
                                            isCircleIcon
                                                // Border Icon di dalam dropdown
                                                ? "h-5 w-5 rounded-full border border-slate-100 overflow-hidden dark:border-slate-700"
                                                : "h-4 w-4"
                                        )}
                                    >
                                        <option.icon className={cn("h-full w-full", isCircleIcon ? "object-cover" : "")} />
                                    </div>

                                    <span className="flex-1 text-sm font-medium leading-none">
                                        {option.label}
                                    </span>

                                    {activeValue === option.value && (
                                        // Check Icon: Blue-600 -> Blue-500 di Dark Mode
                                        <Check className="h-4 w-4 text-blue-600 dark:text-blue-500" />
                                    )}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}