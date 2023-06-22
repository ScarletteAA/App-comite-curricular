import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    const authTokens = req.cookies.get("authTokens")?.value;

    if (!req.nextUrl.pathname.startsWith("/login") && !authTokens) {
        const res = NextResponse.redirect(new URL("/login", req.url));
        res.cookies.delete("authTokens");
        return res;
    }
    if (authTokens && req.nextUrl.pathname.startsWith("/login")) {
        const res = NextResponse.redirect(new URL("/homes", req.url));
        return res;
    }
}

export const config = {
    matcher: ["/homes(.*)", "/login", "/sede(.*)"]
};
