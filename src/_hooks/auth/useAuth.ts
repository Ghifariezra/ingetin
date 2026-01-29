import { createClient } from "@/lib/supabase/supabase.client";
import { User } from "@supabase/supabase-js";
import { useRouter } from "next/dist/client/components/navigation";
import { useEffect, useState } from "react";

export const useAuth = () => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();
    const supabase = createClient();

    useEffect(() => {
        // 1. Cek session awal saat aplikasi dimuat
        const checkUser = async () => {
            try {
                const { data: { user } } = await supabase.auth.getUser();
                setUser(user);
            } catch (error) {
                console.error("Auth check failed", error);
            } finally {
                setIsLoading(false);
            }
        };

        checkUser();

        // 2. Pasang Listener untuk memantau Login/Logout
        const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
            setUser(session?.user ?? null);
            setIsLoading(false);

            // PENTING: Refresh server component saat status login berubah
            // Supaya cookie di server sinkron dengan state di client
            if (event === 'SIGNED_IN' || event === 'SIGNED_OUT') {
                router.refresh();
            }
        });

        return () => {
            subscription.unsubscribe();
        };
    }, [router, supabase]);

    return { user, isLoading };
}