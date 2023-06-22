"use client";

import { useEffect } from "react";
import { useAuthContext } from "@/Contexts/authContext";
import { useRouter } from "next/navigation";

export default function Page() {
    const { logout } = useAuthContext();
    const router = useRouter();

    useEffect(() => {
        logout();
        router.push('/login');
    });

    return null;
}