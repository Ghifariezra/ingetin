import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function NotFound() {
    return (
        <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-slate-950 text-white overflow-hidden">

            {/* --- BACKGROUND STARS (CSS Animation) --- */}
            {/* Kamu bisa ganti ini dengan gambar background bintang statis jika mau simpel */}
            <div className="absolute inset-0 w-full h-full">
                <div className="absolute top-10 left-10 w-1 h-1 bg-white rounded-full animate-pulse" />
                <div className="absolute top-1/4 right-20 w-1.5 h-1.5 bg-blue-200 rounded-full animate-bounce duration-3000" />
                <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-white rounded-full animate-ping duration-5000" />
                <div className="absolute top-1/2 left-1/2 w-0.5 h-0.5 bg-white rounded-full" />
                {/* Tambahkan div titik-titik putih lain sesuka hati untuk efek bintang */}
            </div>

            {/* --- MAIN CONTENT --- */}
            <div className="relative z-10 flex flex-col items-center text-center space-y-6 px-4">

                {/* Gambar 3D (Simpan gambar astronautmu di public/images/404.png) */}
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 animate-in fade-in zoom-in duration-700">
                    {/* Ganti src dengan gambar yang kamu download dari Shapefest/Freepik */}
                    <Image
                        src="/images/404-astronaut.png"
                        alt="404 Astronaut"
                        fill
                        className="object-contain drop-shadow-2xl"
                        priority
                    />
                </div>

                {/* Teks Besar */}
                <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
                    <span className="text-pink-500">4</span>
                    <span className="text-amber-400 mx-1">0</span>
                    <span className="text-pink-500">4</span>
                </h1>

                {/* Deskripsi */}
                <div className="space-y-2 max-w-md mx-auto">
                    <p className="text-lg text-slate-300 font-medium">
                        Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
                    </p>
                </div>

                {/* Tombol Kembali */}
                <Button
                    asChild
                    className="bg-white text-slate-950 hover:bg-slate-200 rounded-full px-8 py-6 text-base font-bold shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all hover:scale-105"
                >
                    <Link href="/">
                        Go back home
                    </Link>
                </Button>
            </div>
        </div>
    );
}