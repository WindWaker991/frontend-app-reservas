import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest, res: NextResponse) {
    const a = req.cookies.getAll();
    const b = res.cookies?.getAll();

}

export const config = {
    matcher: ["/login", "/home"]
};
