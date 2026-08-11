import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { Button } from "@/components/ui/Button";
import type { StoreInfo } from "@/content/stores";

export function StoreCard({ store, id }: { store: StoreInfo; id?: string }) {
  return (
    <div id={id} className="flex scroll-mt-24 flex-col overflow-hidden border border-line bg-white">
      <PhotoFrame src={store.image} alt={store.name} aspect="aspect-[4/3]" />
      <div className="flex flex-1 flex-col gap-4 p-7">
        <div>
          <span className="font-display text-xs tracking-[0.2em] text-blush-deep">
            {store.type === "hospital" ? "ANIMAL HOSPITAL" : "SALON"}
          </span>
          <h3 className="mt-2 font-heading text-[19px] tracking-wide text-charcoal">
            {store.name}
          </h3>
          <p className="mt-1 text-[13px] text-charcoal-soft/80">{store.nameJa}</p>
        </div>
        <p className="text-[14px] leading-[1.85] text-charcoal-soft">{store.catch}</p>
        <dl className="flex flex-col gap-2 border-t border-line pt-4 text-[13px] leading-[1.8] text-charcoal-soft">
          <div className="flex gap-3">
            <dt className="w-16 shrink-0 text-charcoal-soft/60">住所</dt>
            <dd>
              {store.postalCode} {store.address}
            </dd>
          </div>
          <div className="flex gap-3">
            <dt className="w-16 shrink-0 text-charcoal-soft/60">電話</dt>
            <dd>{store.tel}</dd>
          </div>
          {store.hours ? (
            <div className="flex gap-3">
              <dt className="w-16 shrink-0 text-charcoal-soft/60">営業時間</dt>
              <dd>{store.hours}</dd>
            </div>
          ) : null}
          <div className="flex gap-3">
            <dt className="w-16 shrink-0 text-charcoal-soft/60">休み</dt>
            <dd>{store.holiday}</dd>
          </div>
        </dl>
        <div className="mt-2 flex flex-wrap gap-3">
          <Button href={store.mapUrl} variant="outline" className="!px-5 !py-2.5 text-[12px]">
            地図で見る
          </Button>
          <Button href="/contact" variant="ghost" className="!px-5 !py-2.5 text-[12px]">
            予約・問い合わせ
          </Button>
        </div>
      </div>
    </div>
  );
}
