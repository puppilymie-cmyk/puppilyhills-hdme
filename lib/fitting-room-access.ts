import "server-only";
import { createHmac, timingSafeEqual } from "node:crypto";

// LINE限定お試着ルームの入室判定。
// 合言葉は環境変数 FITTING_ROOM_PASSCODE で管理し、リポジトリには書かないでください。
// 合言葉を変更すると、以前の合言葉で入室した方のCookieは自動的に無効になります。

export const ACCESS_COOKIE = "puppily_fitting_room";
export const ACCESS_MAX_AGE = 60 * 60 * 24 * 30;

function passcode() {
  return process.env.FITTING_ROOM_PASSCODE?.trim() || null;
}

export function isFittingRoomConfigured() {
  return passcode() !== null;
}

export function accessToken() {
  const code = passcode();
  if (!code) return null;
  const secret = process.env.FITTING_ROOM_SECRET || code;
  return createHmac("sha256", secret).update(`fitting-room:${code}`).digest("hex");
}

function safeEqual(a: string, b: string) {
  const left = Buffer.from(a);
  const right = Buffer.from(b);
  return left.length === right.length && timingSafeEqual(left, right);
}

export function isValidPasscode(input: string) {
  const code = passcode();
  if (!code) return false;
  return safeEqual(input.trim().normalize("NFKC"), code.normalize("NFKC"));
}

export function hasAccess(cookieValue: string | undefined) {
  const token = accessToken();
  return Boolean(token && cookieValue && safeEqual(cookieValue, token));
}
