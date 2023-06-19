'use client'
import {
    ReactNode,
    createContext,
    useCallback,
    useContext,
    useMemo,
} from "react";

type AuthTokens = {
    token: string;
    refresh_token: string;
};

const AUTH_TOKENS_KEY = "NEXT_JS_AUTH";

export const AuthContext = createContext({
    login: (authTokens: AuthTokens) => { },
    logout: () => { },
});
