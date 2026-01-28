import { z } from "zod";

export const RegisterSchema = z.object({
    name: z.string().min(2, {
        message: "Nama minimal 2 karakter.",
    }),
    email: z.string().email({
        message: "Harap masukkan email yang valid.",
    }),
    password: z
        .string()
        .min(8, {
            message: "Password minimal 8 karakter.",
        })
        // Validasi tambahan:
        .regex(/[A-Z]/, { message: "Harus ada minimal 1 huruf besar." })
        .regex(/[0-9]/, { message: "Harus ada minimal 1 angka." }),
});

export type RegisterValues = z.infer<typeof RegisterSchema>;