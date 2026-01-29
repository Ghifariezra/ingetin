import { z } from "zod";

export const createLoginSchema = (t: (arg: string) => string) => z.object({
    email: z
        .string()
        .min(1, { message: t("validation.email_required") })
        .email({ message: t("validation.email_invalid") }),
    password: z.string().min(1, { message: t("validation.password_required") }),
});

export type LoginValues = z.infer<ReturnType<typeof createLoginSchema>>;