import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  if (path.startsWith("/api/proxy") || path.startsWith("/_next") || path === "/favicon.ico") return NextResponse.next();
  const destination = request.nextUrl.clone();
  destination.pathname = `/api/proxy${path === "/" ? "" : path}`;
  return NextResponse.rewrite(destination);
}

export const config = {
  matcher: ["/((?!api/proxy|_next/static|_next/image|favicon.ico).*)"],
};
