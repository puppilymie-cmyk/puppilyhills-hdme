import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { StoreCard } from "@/components/sections/StoreCard";
import { CtaBand } from "@/components/sections/CtaBand";
import { StructuredData } from "@/components/StructuredData";
import { breadcrumbJsonLd, petGroomingJsonLd, veterinaryCareJsonLd } from "@/lib/structured-data";
import { accessHero } from "@/content/pages/access";
import { stores } from "@/content/stores";

export const metadata: Metadata = {
  title: "ACCESS | 店舗情報・アクセス",
  description:
    "Puppily Hills Tokyo(自由が丘)、Puppily Hills Osaka、Puppily Animal Hospitalの住所・営業時間・電話番号・アクセス情報をご案内します。",
  alternates: { canonical: "/access" },
};

export default function AccessPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbJsonLd([
          { name: "TOP", path: "/" },
          { name: "ACCESS", path: "/access" },
        ])}
      />
      <StructuredData data={petGroomingJsonLd("tokyo")} />
      <StructuredData data={petGroomingJsonLd("osaka")} />
      <StructuredData data={veterinaryCareJsonLd()} />

      <PageHero
        eyebrow={accessHero.eyebrow}
        heading={accessHero.heading}
        lead={accessHero.lead}
        image={accessHero.image}
        imageAlt={accessHero.imageAlt}
      />

      <section className="bg-white">
        <Container className="flex flex-col gap-20 py-16 sm:py-24">
          {stores.map((store) => (
            <div key={store.id} id={store.id} className="scroll-mt-24">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
                <StoreCard store={store} />
                <div className="aspect-[4/3] overflow-hidden rounded-sm border border-line lg:aspect-auto">
                  <iframe
                    title={`${store.name}の地図`}
                    src={store.mapEmbedUrl}
                    loading="lazy"
                    className="h-full min-h-[280px] w-full"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          ))}
        </Container>
      </section>

      <CtaBand
        heading={["ご不明な点は、", "お気軽にお問い合わせください。"]}
        buttons={[{ label: "お問い合わせ", href: "/contact", variant: "primary" }]}
      />
    </>
  );
}
