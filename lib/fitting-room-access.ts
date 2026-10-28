import "server-only";
import { createHmac, randomBytes, timingSafeEqual } from "node:crypto";
import { isLineLoginConfigured } from "@/lib/line-login";

// LINE限定お試着ルームの入室判定。
// LINEログインで友だち登録を確認できた方に、署名付きのCookieを発行します。
// 署名用の文字列は環境変数 FITTING_ROOM_SECRET で管理し、リポジトリには書かないでください。
// FITTING_ROOM_SECRET を変更すると、発行済みのCookieはすべて無効になります。

export const ACCESS_COOKIE = "puppily_fitting_room";
export const LOGIN_COOKIE = "puppily_fitting_login";
// 友だち解除にも追従できるよう、入室の有効期間は短めにしています
export const ACCESS_MAX_AGE = 60 * 60 * 24 * 7;
export const LOGIN_MAX_AGE = 60 * 10;

export const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax" as const,
  path: "/fitting-room",
};

function secret() {
  return process.env.FITTING_ROOM_SECRET?.trim() || null;
}

export function isFittingRoomConfigured() {
  return secret() !== null && isLineLoginConfigured();
}

function sign(value: string) {
  const key = secret();
  if (!key) throw new Error("FITTING_ROOM_SECRET is not set");
  return createHmac("sha256", key).update(value).digest("base64url");
}

function safeEqual(a: string, b: string) {
  const left = Buffer.from(a);
  const right = Buffer.from(b);
  return left.length === right.length && timingSafeEqual(left, right);
}

export function randomToken() {
  return randomBytes(24).toString("base64url");
}

// 入室Cookie: 有効期限と署名だけを持ち、LINEのユーザー情報は保存しません
export function createAccessToken() {
  const exp = Math.floor(Date.now() / 1000) + ACCESS_MAX_AGE;
  return `${exp}.${sign(`access:${exp}`)}`;
}

export function hasAccess(cookieValue: string | undefined) {
  if (!cookieValue || !secret()) return false;
  const [exp, sig] = cookieValue.split(".");
  if (!exp || !sig || Number(exp) < Date.now() / 1000) return false;
  return safeEqual(sig, sign(`access:${exp}`));
}

// ログイン途中のCookie: state(なりすまし防止)とnonce(IDトークン検証用)
export function createLoginCookie(state: string, nonce: string) {
  return `${state}.${nonce}.${sign(`login:${state}.${nonce}`)}`;
}

export function readLoginCookie(cookieValue: string | undefined) {
  if (!cookieValue || !secret()) return null;
  const [state, nonce, sig] = cookieValue.split(".");
  if (!state || !nonce || !sig || !safeEqual(sig, sign(`login:${state}.${nonce}`))) return null;
  return { state, nonce };
}

export function stateMatches(expected: string, actual: string | null) {
  return actual !== null && safeEqual(expected, actual);
}
