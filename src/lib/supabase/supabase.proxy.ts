import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest, response: NextResponse) {
    // Kita pakai response yang dikirim dari next-intl (parameter ke-2)
    // Jangan buat NextResponse.next() baru disini, nanti cookie bahasa hilang.

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
        {
            cookies: {
                getAll() {
                    return request.cookies.getAll()
                },
                setAll(cookiesToSet) {
                    // 1. Update di request (untuk server component)
                    cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))

                    // 2. Update di response (untuk browser)
                    // Kita tempel cookie auth ke response yang sudah membawa cookie bahasa
                    cookiesToSet.forEach(({ name, value, options }) =>
                        response.cookies.set(name, value, options)
                    )
                },
            },
        }
    )

    // Refresh session agar token tidak mati
    await supabase.auth.getUser()

    // Kembalikan response asli (yang sudah ditambah cookie auth)
    return response
}