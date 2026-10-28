import "server-only";

// LINEログイン(v2.1)と友だち状態の確認。
// LINE DevelopersでLINEログインチャネルを作成し、Puppily HillsのLINE公式アカウントを
// 「リンクされたLINE公式アカウント」に設定しておく必要があります(手順は knowledge/FITTING_ROOM.md)。

const AUTHORIZE_URL = "https://access.line.me/oauth2/v2.1/authorize";
const TOKEN_URL = "https://api.line.me/oauth2/v2.1/token";
const VERIFY_URL = "https://api.line.me/oauth2/v2.1/verify";
const FRIENDSHIP_URL = "https://api.line.me/friendship/v1/status";

function channel() {
  const id = process.env.LINE_LOGIN_CHANNEL_ID?.trim();
  const secret = process.env.LINE_LOGIN_CHANNEL_SECRET?.trim();
  return id && secret ? { id, secret } : null;
}

export function isLineLoginConfigured() {
  return channel() !== null;
}

// LINE Developersに登録したコールバックURLと完全に一致させる必要があります。
export function redirectUri(origin: string) {
  return process.env.LINE_LOGIN_REDIRECT_URI?.trim() || `${origin}/fitting-room/callback`;
}

export function authorizeUrl({
  origin,
  state,
  nonce,
}: {
  origin: string;
  state: string;
  nonce: string;
}) {
  const ch = channel();
  if (!ch) throw new Error("LINE login is not configured");
  const params = new URLSearchParams({
    response_type: "code",
    client_id: ch.id,
    redirect_uri: redirectUri(origin),
    state,
    scope: "profile openid",
    nonce,
    // ログイン画面で、リンクしたLINE公式アカウントの友だち追加をあわせてご案内します
    bot_prompt: "aggressive",
  });
  return `${AUTHORIZE_URL}?${params}`;
}

export async function exchangeCode(code: string, origin: string) {
  const ch = channel();
  if (!ch) throw new Error("LINE login is not configured");
  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: redirectUri(origin),
      client_id: ch.id,
      client_secret: ch.secret,
    }),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`LINE token exchange failed: ${res.status}`);
  return (await res.json()) as { access_token: string; id_token: string };
}

// IDトークンをLINEのサーバーで検証し、ログイン時に発行したnonceと一致するか確かめます。
export async function verifyIdToken(idToken: string, nonce: string) {
  const ch = channel();
  if (!ch) throw new Error("LINE login is not configured");
  const res = await fetch(VERIFY_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ id_token: idToken, client_id: ch.id, nonce }),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`LINE ID token verification failed: ${res.status}`);
  return (await res.json()) as { sub: string };
}

export async function isFriend(accessToken: string) {
  const res = await fetch(FRIENDSHIP_URL, {
    headers: { Authorization: `Bearer ${accessToken}` },
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`LINE friendship check failed: ${res.status}`);
  const data = (await res.json()) as { friendFlag?: boolean };
  return data.friendFlag === true;
}
