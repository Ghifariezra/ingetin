import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextRequest } from 'next/server';
import { updateSession } from '@/lib/supabase/supabase.proxy';

// 1. Inisialisasi Middleware Bahasa
const handleI18nRouting = createMiddleware(routing);

export default async function middleware(request: NextRequest) {
    // 2. Jalankan logika Next-Intl dulu
    // Ini akan menentukan locale (misal: /id atau /en) dan membuat response awal
    const response = handleI18nRouting(request);

    // 3. Oper response tersebut ke Supabase untuk pengecekan Auth & Cookie
    // Kita "titip" response next-intl ke dalam updateSession
    return await updateSession(request, response);
}

export const config = {
    // Matcher ini berarti:
    // "Jalankan middleware di semua route, KECUALI yang berawalan /api, /_next, atau file berekstensi (gambar/icon)"
    matcher: ['/((?!api|_next|.*\\..*).*)']
};