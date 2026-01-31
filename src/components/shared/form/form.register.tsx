"use client";

import { Eye, EyeOff, Loader2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { BadgeManager } from "@/components/shared/badge/badge";
import { PatternHero } from "@/components/shared/decoration/pattern";
import { cn } from "@/_lib/utils";
import { useTheme } from "next-themes";
import { useRegister } from "@/_hooks/auth/useRegister";
import Link from "next/link";
import React, { useState } from "react";
import { RecaptchaField } from "@/components/shared/form/recaptcha/recaptcha"; // Pastikan path sesuai
import { toast } from "sonner";
import { Checkbox } from "@/components/ui/checkbox";
import { ContactManager } from "../contact/contact";

export default function RegisterForm() {
    const {
        t,
        showPassword,
        setShowPassword,
        isLoading,
        recaptchaRef,
        onCaptchaChange,
        form,
        onSubmit,
        submitGoogleRegister,
    } = useRegister();

    // Fix: Hydration mismatch untuk theme
    const { theme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    // Tentukan tema aktual (jika system, ambil dari systemTheme)
    const currentTheme = mounted
        ? (theme === 'system' ? systemTheme : theme)
        : 'light';

    return (
        <div className="relative min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
            <PatternHero />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-125 bg-blue-400/20 dark:bg-blue-900/20 rounded-full blur-3xl -z-10 animate-pulse" />

            <div className="relative w-full max-w-md space-y-8 animate-in fade-in zoom-in-95 duration-500">
                <div className="flex flex-col items-center text-center">
                    <BadgeManager className="mb-4 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-800">
                        👋 {t("title")}
                    </BadgeManager>
                    <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                        {t("title")}
                    </h2>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-xs">
                        {t("description")}
                    </p>
                </div>

                <div className={cn(
                    "bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl",
                    "border border-slate-200 dark:border-slate-800",
                    "rounded-3xl shadow-2xl shadow-slate-200/50 dark:shadow-none",
                    "p-8 sm:p-10"
                )}>
                    {/* Social Login Buttons Here... */}
                    <Button variant="outline" className="w-full h-12 rounded-xl text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all" disabled={isLoading} onClick={
                        () => {
                            if (process.env.NEXT_PUBLIC_ENABLE_2FA === 'true') {
                                toast.info(
                                    "Sabar yaa... Halaman Dashboard Lagi dalam pengembangan. jadi pantau terus yaa 😁"
                                );
                                return;
                            }
                            submitGoogleRegister();
                        }
                    }>
                        <svg className="mr-2 h-5 w-5" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                        {t("social.google")}
                    </Button>

                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200 dark:border-slate-800" /></div>
                        <div className="relative flex justify-center text-xs uppercase"><span className="bg-white dark:bg-slate-900 px-2 text-slate-400 dark:text-slate-500 font-medium tracking-wider">{t("social.divider")}</span></div>
                    </div>

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                            {/* Name Field */}
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-slate-700 dark:text-slate-300">{t("form.name.label")}</FormLabel>
                                        <FormControl>
                                            <Input placeholder={t("form.name.placeholder")} className="h-11 rounded-xl bg-slate-50 dark:bg-slate-950/50 border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-blue-500/20 transition-all" disabled={isLoading} {...field} />
                                        </FormControl>
                                        <FormMessage className="text-xs" />
                                    </FormItem>
                                )}
                            />

                            {/* Email Field */}
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-slate-700 dark:text-slate-300">{t("form.email.label")}</FormLabel>
                                        <FormControl>
                                            <Input type="email" placeholder={t("form.email.placeholder")} className="h-11 rounded-xl bg-slate-50 dark:bg-slate-950/50 border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-blue-500/20 transition-all" disabled={isLoading} {...field} />
                                        </FormControl>
                                        <FormMessage className="text-xs" />
                                    </FormItem>
                                )}
                            />

                            {/* Password Field */}
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-slate-700 dark:text-slate-300">{t("form.password.label")}</FormLabel>
                                        <FormControl>
                                            <div className="relative">
                                                <Input
                                                    type={showPassword ? "text" : "current-password"}
                                                    placeholder={t("form.password.placeholder")}
                                                    className="h-11 pr-10 rounded-xl bg-slate-50 dark:bg-slate-950/50 border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-blue-500/20 transition-all"
                                                    disabled={isLoading}
                                                    {...field}
                                                />
                                                <Button
                                                    type="button"
                                                    variant="ghost"
                                                    size="sm"
                                                    className="absolute right-1 top-1 h-9 w-9 p-0 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg text-slate-400"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    tabIndex={-1}
                                                >
                                                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                                </Button>
                                            </div>
                                        </FormControl>
                                        <FormMessage className="text-xs" />
                                    </FormItem>
                                )}
                            />

                            {/* CAPTCHA Field */}
                            {
                                form.formState.isValidating || form.formState.isValid ? (
                                    <RecaptchaField
                                        ref={recaptchaRef}
                                        isVisible={true} // Selalu tampilkan di login, atau bisa pakai form.formState.isDirty
                                        onChange={onCaptchaChange}
                                        theme={currentTheme as "light" | "dark"}
                                    />
                                ) : null
                            }

                            
                            {/* Terms Field */}
                            <FormField
                                control={form.control}
                                name="terms"
                                render={({ field }) => (
                                    <FormItem className="flex flex-row items-center space-x-2">
                                        <FormControl>
                                            <Checkbox
                                                disabled={isLoading}
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        </FormControl>
                                        <div className="flex flex-col gap-0">
                                            <FormLabel className="text-sm text-slate-700 dark:text-slate-300">
                                                <ContactManager
                                                    content={t.raw("checkbox_terms")}
                                                />
                                            </FormLabel>
                                            <FormMessage className="text-xs" />
                                        </div>
                                    </FormItem>
                                )}
                            />

                            {/* Submit Button */}
                            <Button
                                type={process.env.NEXT_PUBLIC_ENABLE_2FA === 'true' ? "button" : "submit"}
                                className="w-full h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all hover:-translate-y-0.5 mt-2 font-semibold text-base"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        {t("buttons.submitting")}
                                    </>
                                ) : (
                                    <>
                                        {t("buttons.submit")} <ArrowRight className="ml-2 h-4 w-4" />
                                    </>
                                )}
                            </Button>
                        </form>
                    </Form>
                </div>

                <p className="text-center text-sm text-slate-600 dark:text-slate-400">
                    {t("footer.text")}{" "}
                    <Link href="/auth/login" className="font-semibold text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 hover:underline transition-all">
                        {t("footer.link")}
                    </Link>
                </p>
            </div>
        </div>
    );
}