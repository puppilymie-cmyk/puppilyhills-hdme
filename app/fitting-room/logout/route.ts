import { NextResponse, type NextRequest } from "next/server";
import { ACCESS_COOKIE, cookieOptions } from "@/lib/fitting-room-access";

export async function POST(request: NextRequest) {
  const response = NextResponse.redirect(new URL("/fitting-room", request.url), 303);
  response.cookies.delete({ name: ACCESS_COOKIE, path: cookieOptions.path });
  return response;
}
