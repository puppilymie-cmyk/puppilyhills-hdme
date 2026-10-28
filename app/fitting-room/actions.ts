"use server";

import { cookies } from "next/headers";
import {
  ACCESS_COOKIE,
  ACCESS_MAX_AGE,
  accessToken,
  isFittingRoomConfigured,
  isValidPasscode,
} from "@/lib/fitting-room-access";

export interface UnlockState {
  message: string;
}

export async function unlockFittingRoom(
  _prevState: UnlockState,
  formData: FormData,
): Promise<UnlockState> {
  if (!isFittingRoomConfigured()) {
    return { message: "お試着ルームは現在準備中です。LINEでのご案内をお待ちください。" };
  }

  const input = String(formData.get("passcode") ?? "");
  if (!isValidPasscode(input)) {
    return {
      message: "合言葉が一致しませんでした。LINEで届いた最新の合言葉をご確認ください。",
    };
  }

  const cookieStore = await cookies();
  cookieStore.set(ACCESS_COOKIE, accessToken()!, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: ACCESS_MAX_AGE,
    path: "/fitting-room",
  });
  return { message: "" };
}
