import { NextResponse, type NextRequest } from "next/server";
import { authorizeUrl } from "@/lib/line-login";
import {
  LOGIN_COOKIE,
  LOGIN_MAX_AGE,
  cookieOptions,
  createLoginCookie,
  isFittingRoomConfigured,
  randomToken,
} from "@/lib/fitting-room-access";

export async function GET(request: NextRequest) {
  if (!isFittingRoomConfigured()) {
    return NextResponse.redirect(new URL("/fitting-room", request.url));
  }

  const state = randomToken();
  const nonce = randomToken();
  const response = NextResponse.redirect(
    authorizeUrl({ origin: request.nextUrl.origin, state, nonce }),
  );
  response.cookies.set(LOGIN_COOKIE, createLoginCookie(state, nonce), {
    ...cookieOptions,
    maxAge: LOGIN_MAX_AGE,
  });
  return response;
}
