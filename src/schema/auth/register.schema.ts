import { z } from "zod";

export const createRegisterSchema = (t: (arg: string) => string) => z.object({
    name: z.string().min(2, { message: t("validation.name_min") }),
    email: z.string().email({ message: t("validation.email_invalid") }),
    password: z
        .string()
        .min(8, { message: t("validation.password_min") })
        .regex(/[A-Z]/, { message: t("validation.password_uppercase") })
        .regex(/[0-9]/, { message: t("validation.password_number") }),
});

export type RegisterValues = z.infer<ReturnType<typeof createRegisterSchema>>;