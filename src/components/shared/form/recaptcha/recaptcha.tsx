"use client";

import { Turnstile, TurnstileInstance } from "@marsidev/react-turnstile";
import { forwardRef } from "react";

interface RecaptchaFieldProps {
    isVisible: boolean;
    onChange: (token: string | null) => void;
    theme?: "light" | "dark" | "auto";
}

export const RecaptchaField = forwardRef<TurnstileInstance, RecaptchaFieldProps>(
    ({ isVisible, onChange, theme = "light" }, ref) => {
        if (!isVisible) return null;

        return (
            <div className="flex justify-center mt-4 animate-in fade-in slide-in-from-top-2 duration-300">
                <Turnstile
                    ref={ref}
                    siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                    onSuccess={onChange}
                    onError={() => onChange(null)}
                    onExpire={() => onChange(null)}
                    options={{
                        theme: theme,
                        size: "flexible",
                    }}
                />
            </div>
        );
    }
);

RecaptchaField.displayName = "RecaptchaField";