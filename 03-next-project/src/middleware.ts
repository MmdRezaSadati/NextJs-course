import { NextRequest, NextResponse } from "next/server";

export const middleware = async (request: NextRequest) => {
  const token = request.cookies.get("my-token");
  if (request.nextUrl.pathname.startsWith("/dashboard") && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (request.nextUrl.pathname.startsWith("/dashboard/products")) {
    return NextResponse.rewrite(new URL("/api/products", request.url));
  }
  return NextResponse.next();
};

export const config = {
  matcher: ["/dashboard/:path", "/dashboard"],
};
