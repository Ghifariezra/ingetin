import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { createClient } from "@/lib/supabase/supabase.client";
import { useRouter } from "next/navigation";
import { TurnstileInstance } from "@marsidev/react-turnstile";
import { createLoginSchema, LoginValues } from "@/schema/auth/login.schema";

export const useLogin = () => {
    const t = useTranslations("Login");
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // State & Ref untuk Captcha
    const [captchaToken, setCaptchaToken] = useState<string | null>(null);
    const recaptchaRef = useRef<TurnstileInstance>(null);

    const supabase = createClient();
    const LoginSchema = createLoginSchema(t);

    const form = useForm<LoginValues>({
        resolver: zodResolver(LoginSchema),
        defaultValues: { email: "", password: "" },
    });

    const onCaptchaChange = (token: string | null) => {
        setCaptchaToken(token);
    };

    async function onSubmit(data: LoginValues) {
        setIsLoading(true);

        // 1. Validasi Captcha
        if (!captchaToken) {
            toast.error(t("toast.captcha_required") || "Please complete the captcha");
            setIsLoading(false);
            return;
        }

        try {
            // 2. Login ke Supabase
            const { error } = await supabase.auth.signInWithPassword({
                email: data.email,
                password: data.password,
                options: {
                    captchaToken: captchaToken,
                },
            });

            if (error) throw error;

            // 3. Sukses
            toast.success(t("alerts.success"));
            form.reset();
            recaptchaRef.current?.reset();

            // 4. Refresh router & Redirect ke Home/Dashboard
            router.refresh();
            router.push("/");
        } catch (error) {
            if (error instanceof Error) {
                console.error("Login error:", error);
                toast.error(error.message || t("toast.error_generic"));
            }

            // Reset captcha jika gagal agar user bisa mencoba lagi
            recaptchaRef.current?.reset();
            setCaptchaToken(null);
        } finally {
            setIsLoading(false);
        }
    }

    async function onGoogleLogin() {
        setIsLoading(true);
        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: `${window.location.origin}/api/auth/callback`,
                queryParams: {
                    access_type: 'offline',
                    prompt: 'consent',
                },
            },
        });

        if (error) {
            console.error("Google OAuth error:", error);
            toast.error(t("toast.error_generic"));
            setIsLoading(false);
        }
    }

    return {
        t,
        showPassword,
        setShowPassword,
        isLoading,
        recaptchaRef,
        onCaptchaChange,
        form,
        onSubmit,
        onGoogleLogin,
    };
}