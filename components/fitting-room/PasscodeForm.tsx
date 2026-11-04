"use client";

import { useActionState } from "react";
import { unlockFittingRoom, type UnlockState } from "@/app/fitting-room/actions";

const initialState: UnlockState = { message: "" };

export function PasscodeForm() {
  const [state, formAction, pending] = useActionState(unlockFittingRoom, initialState);

  return (
    <form action={formAction} className="mx-auto flex w-full max-w-md flex-col gap-4">
      <label htmlFor="passcode" className="text-[13px] tracking-[0.1em] text-charcoal-soft">
        LINEで届いた合言葉
      </label>
      <input
        id="passcode"
        name="passcode"
        type="text"
        required
        autoComplete="off"
        autoCapitalize="none"
        className="rounded-sm border border-line bg-white px-4 py-3.5 text-[15px] text-charcoal outline-none transition-colors focus:border-charcoal"
      />
      <button
        type="submit"
        disabled={pending}
        className="rounded-sm border border-charcoal bg-charcoal px-8 py-3.5 text-[13px] tracking-[0.15em] text-white transition-colors hover:bg-charcoal/85 disabled:opacity-60"
      >
        {pending ? "確認しています…" : "お試着ルームに入る"}
      </button>
      <p aria-live="polite" className="min-h-[1.5em] text-[13px] leading-[1.8] text-charcoal-soft">
        {state.message}
      </p>
    </form>
  );
}
