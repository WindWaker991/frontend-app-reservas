"use client";
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
} from "react";
import Cookies from "js-cookie";

type AuthContextType = {
  token: string;
  refreshToken: string;
};

export const AuthContext = createContext({
  login: () => {},
  logout: () => {},
});

const TOKEN_NAME = "access_token";
export default function AuthContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const login = useCallback(function () {
    const token = Cookies.get(TOKEN_NAME);
    Cookies.set(TOKEN_NAME, JSON.stringify(token));
  }, []);

  const logout = useCallback(function () {
    Cookies.remove(TOKEN_NAME);
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
