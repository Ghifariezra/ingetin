import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import { TurnstileInstance } from "@marsidev/react-turnstile";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { createClient } from "@/lib/supabase/supabase.client";
import { createRegisterSchema, RegisterValues } from "@/schema/auth/register.schema";

export const useRegister = () => {
    const t = useTranslations("Register");
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [captchaToken, setCaptchaToken] = useState<string | null>(null);

    // Ref untuk kontrol Turnstile (reset)
    const recaptchaRef = useRef<TurnstileInstance>(null);

    const supabase = createClient();

    // Generate schema with current translations
    const RegisterSchema = createRegisterSchema(t);

    const form = useForm<RegisterValues>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: { name: "", email: "", password: "" },
        mode: "onChange",
    });

    const onCaptchaChange = (token: string | null) => {
        setCaptchaToken(token);
    };

    async function onSubmit(data: RegisterValues) {
        setIsLoading(true);

        // 1. CAPTCHA Validation
        if (!captchaToken) {
            toast.error(t("toast.captcha_required"));
            setIsLoading(false);
            return;
        }

        try {
            // 2. Call Supabase SignUp
            const { error } = await supabase.auth.signUp({
                email: data.email,
                password: data.password,
                options: {
                    data: {
                        full_name: data.name,
                    },
                    captchaToken: captchaToken,
                },
            });

            if (error) throw error;

            // 3. Success Handling
            toast.success(t("alerts.success"));

            // Cleanup
            form.reset();
            recaptchaRef.current?.reset();
            setCaptchaToken(null);

        } catch (error) {
            console.error("Registration error:", error);

            // Handle specific Supabase errors if needed
            if (error instanceof Error) {
                if (error.message?.includes("already registered")) {
                    toast.error(t("validation.email_taken") || "Email already taken");
                } else {
                    toast.error(error.message || t("toast.error_generic"));
                }
            }

            // Reset captcha on error so user can try again
            recaptchaRef.current?.reset();
            setCaptchaToken(null);

        } finally {
            setIsLoading(false);
        }
    }

    async function submitGoogleRegister() {
        setIsLoading(true); // Mulai loading agar tombol disable

        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/callback`,
                queryParams: {
                    access_type: 'offline',
                    prompt: 'consent',
                },
            },
        });

        if (error) {
            console.error("Google OAuth error:", error);
            toast.error(t("toast.error_generic"));
            setIsLoading(false); // Matikan loading jika error
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
        submitGoogleRegister,
    };
};