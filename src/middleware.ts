import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get("access_token");

  if (!pathname.startsWith("/login") && !token) {
    const res = NextResponse.redirect(new URL("/login", req.url));
    res.cookies.delete("access_token");
    return res;
  }
  if (pathname.startsWith("/login") && token) {
    const res = NextResponse.redirect(new URL("/home", req.url));
    return res;
  }

  //logout
  if (pathname.startsWith("/home/logout")) {
    const res = NextResponse.redirect(new URL("/login", req.url));
    res.cookies.delete("access_token");
    return res;
  }
}
export const config = {
  matcher: ["/login", "/home(.*)"],
};
