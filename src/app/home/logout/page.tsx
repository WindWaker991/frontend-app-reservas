"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/context/AuthContext";

export default function Page() {
    const { logout } = useAuthContext();
    const router = useRouter();

    useEffect(() => {
        logout();
        router.push('/login');
    });

    return null;
}