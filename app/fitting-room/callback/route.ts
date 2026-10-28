import { NextResponse, type NextRequest } from "next/server";
import { exchangeCode, isFriend, verifyIdToken } from "@/lib/line-login";
import {
  ACCESS_COOKIE,
  ACCESS_MAX_AGE,
  LOGIN_COOKIE,
  cookieOptions,
  createAccessToken,
  readLoginCookie,
  stateMatches,
} from "@/lib/fitting-room-access";

function back(request: NextRequest, status?: string) {
  const url = new URL("/fitting-room", request.url);
  if (status) url.searchParams.set("status", status);
  const response = NextResponse.redirect(url);
  response.cookies.delete({ name: LOGIN_COOKIE, path: cookieOptions.path });
  return response;
}

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;

  // ログイン画面でキャンセルされた場合など
  if (params.get("error")) return back(request, "cancelled");

  const login = readLoginCookie(request.cookies.get(LOGIN_COOKIE)?.value);
  const code = params.get("code");
  if (!login || !code || !stateMatches(login.state, params.get("state"))) {
    return back(request, "expired");
  }

  try {
    const origin = request.nextUrl.origin;
    const tokens = await exchangeCode(code, origin);
    await verifyIdToken(tokens.id_token, login.nonce);
    if (!(await isFriend(tokens.access_token))) return back(request, "not_friend");
  } catch (error) {
    console.error("[fitting-room] LINE login failed", error);
    return back(request, "error");
  }

  const response = back(request);
  response.cookies.set(ACCESS_COOKIE, createAccessToken(), {
    ...cookieOptions,
    maxAge: ACCESS_MAX_AGE,
  });
  return response;
}
