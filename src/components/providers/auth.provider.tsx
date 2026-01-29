"use client";

import { createContext, useContext } from "react";
import { useAuth } from "@/_hooks/auth/useAuth";

const AuthContext = createContext<ReturnType<typeof useAuth>>({
    user: null,
    isLoading: true,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const { user, isLoading } = useAuth();

    return (
        <AuthContext.Provider value={{ user, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom Hook biar gampang dipanggil
export const useUser = () => {
    return useContext(AuthContext);
};