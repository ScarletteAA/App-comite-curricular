'use client';

import { ReactNode, createContext, useCallback, useContext, useMemo } from "react";
import Cookies from 'js-cookie';

type AuthContextType = {
    token: string;
    refreshToken: string;
};

export const AuthContext = createContext({
    login: (authTokens: AuthContextType) => { },
    logout: () => { },
});

export default function AuthContextProvider({
    children,
}: {
    children: ReactNode;

}) {
    const authTokensInLocalStorage = Cookies.get('authTokens');

    const login = useCallback(function (authTokens: AuthContextType) {
        Cookies.set('authTokens', JSON.stringify(authTokens));
    }, []);

    const logout = useCallback(function () {
        Cookies.remove('authTokens');
    }, []);

    const value = useMemo(
        () => ({
            login,
            logout,
        }),
        [login, logout]
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
    return useContext(AuthContext);
}
