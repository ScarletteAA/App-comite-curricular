'use client';
import { Sede } from "@/interfaces";
import React from "react";
import { createContext, useContext } from "react";


type SedeContextType = {
    sede: Sede | null;
    setSede: (sede: Sede) => void;
};

export const SedeContext = createContext<SedeContextType | null>(null);

export default function SedeContextProvider({
    children,
}: {
    children: React.ReactNode;

}) {
    const [Sede, setSede] = React.useState<Sede | null>(null);

    return <SedeContext.Provider value={{
        sede: Sede,
        setSede: setSede
    }}>{children}</SedeContext.Provider>;
}

export function useSedeContext() {
    return useContext(SedeContext);
}
