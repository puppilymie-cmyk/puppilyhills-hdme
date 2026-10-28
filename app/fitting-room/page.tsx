import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Container } from "@/components/ui/Container";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { FittingStudio } from "@/components/fitting-room/FittingStudio";
import { ACCESS_COOKIE, hasAccess, isFittingRoomConfigured } from "@/lib/fitting-room-access";
import { fittingItems, fittingRoomCopy, lineAddFriendUrl } from "@/content/fitting-room";

export const metadata: Metadata = {
  title: "LINE限定 お試着ルーム",
  description:
    "Instagramでご紹介したPuppily Hillsの新作のお洋服を、LINEにご登録の皆様だけが愛犬の写真でお試着いただけるページです。",
  alternates: { canonical: "/fitting-room" },
  robots: { index: false, follow: false },
};

export default async function FittingRoomPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string | string[] }>;
}) {
  const cookieStore = await cookies();
  const unlocked = hasAccess(cookieStore.get(ACCESS_COOKIE)?.value);
  const { status } = await searchParams;
  const statusMessage = typeof status === "string" ? fittingRoomCopy.status[status] : undefined;

  return (
    <>
      <section className="bg-ivory">
        <Container className="flex flex-col gap-3 py-14 text-center sm:py-20">
          <span className="font-display text-sm tracking-[0.3em] text-charcoal-soft/70">
            {fittingRoomCopy.eyebrow}
          </span>
          <h1 className="font-heading text-[28px] leading-snug tracking-wide text-charcoal sm:text-4xl lg:text-[42px]">
            {fittingRoomCopy.heading}
          </h1>
          <p className="mx-auto mt-2 max-w-2xl text-[15px] leading-[1.9] text-charcoal-soft sm:text-base">
            {fittingRoomCopy.lead}
          </p>
        </Container>
      </section>

      {unlocked ? (
        <section className="bg-white">
          <Container className="py-14 sm:py-20">
            <FittingStudio items={fittingItems} />
            <div className="mx-auto mt-14 flex max-w-3xl flex-col gap-3 border-t border-line pt-8 text-[13px] leading-[1.9] text-charcoal-soft">
              <p>{fittingRoomCopy.fitNote}</p>
              <p>{fittingRoomCopy.privacy}</p>
              <form action="/fitting-room/logout" method="post" className="mt-2">
                <button
                  type="submit"
                  className="text-[12px] tracking-[0.1em] text-charcoal-soft underline underline-offset-4 hover:text-charcoal"
                >
                  お試着ルームから退出する
                </button>
              </form>
            </div>
          </Container>
        </section>
      ) : (
        <>
          <section className="bg-white">
            <Container className="py-14 sm:py-20">
              <ol className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {fittingRoomCopy.steps.map((step, index) => (
                  <li key={step.title} className="flex flex-col gap-2">
                    <span className="font-display text-sm tracking-[0.3em] text-charcoal-soft/70">
                      STEP {index + 1}
                    </span>
                    <h2 className="font-heading text-[17px] tracking-wide text-charcoal">
                      {step.title}
                    </h2>
                    <p className="text-[14px] leading-[1.8] text-charcoal-soft">{step.body}</p>
                  </li>
                ))}
              </ol>

              <div className="mx-auto mt-14 flex max-w-md flex-col items-center gap-6 text-center">
                {statusMessage ? (
                  <p
                    role="status"
                    className="w-full rounded-sm bg-blush px-5 py-4 text-[14px] leading-[1.8] text-charcoal"
                  >
                    {statusMessage}
                  </p>
                ) : null}
                {isFittingRoomConfigured() ? (
                  <>
                    <a
                      href="/fitting-room/login"
                      className="inline-flex w-full items-center justify-center rounded-sm border border-charcoal bg-charcoal px-8 py-4 text-[13px] tracking-[0.15em] text-white transition-colors hover:bg-charcoal/85"
                    >
                      LINEでログインして入る
                    </a>
                    {status === "not_friend" ? (
                      <a
                        href={lineAddFriendUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-center rounded-sm border border-charcoal/60 px-8 py-4 text-[13px] tracking-[0.15em] text-charcoal transition-colors hover:border-charcoal hover:bg-charcoal/5"
                      >
                        LINE公式アカウントを友だち追加する
                      </a>
                    ) : null}
                    <p className="text-[12px] leading-[1.8] text-charcoal-soft">
                      {fittingRoomCopy.loginNote}
                    </p>
                  </>
                ) : (
                  <p className="text-[14px] leading-[1.9] text-charcoal-soft">
                    お試着ルームは現在準備中です。オープンはLINEでお知らせします。
                  </p>
                )}
              </div>
            </Container>
          </section>

          {fittingItems.length > 0 ? (
            <section className="bg-ivory">
              <Container className="py-14 sm:py-20">
                <div className="text-center">
                  <span className="font-display text-sm tracking-[0.3em] text-charcoal-soft/70">
                    NEW ARRIVALS
                  </span>
                  <h2 className="mt-3 font-heading text-[24px] tracking-wide text-charcoal sm:text-3xl">
                    お試着いただける新作
                  </h2>
                </div>
                <ul className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-6 sm:grid-cols-3">
                  {fittingItems.map((item) => (
                    <li key={item.id} className="flex flex-col gap-3">
                      <PhotoFrame
                        src={item.photo}
                        alt={item.photoAlt}
                        aspect="aspect-[4/5]"
                        sizes="(min-width: 640px) 33vw, 50vw"
                      />
                      <p className="text-[13px] leading-[1.7] text-charcoal">{item.name}</p>
                    </li>
                  ))}
                </ul>
              </Container>
            </section>
          ) : null}
        </>
      )}
    </>
  );
}
