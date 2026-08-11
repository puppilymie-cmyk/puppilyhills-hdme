import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { CtaBand } from "@/components/sections/CtaBand";
import { StructuredData } from "@/components/StructuredData";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { shopHero, categories, shopNote } from "@/content/pages/shop";

export const metadata: Metadata = {
  title: "SHOP / STORE | 商品紹介",
  description:
    "Puppily Delicaや洋服・アクセサリー、ケア用品など、Puppily Hills店舗でお取り扱いしている商品をご紹介します。",
  alternates: { canonical: "/shop" },
};

export default function ShopPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbJsonLd([
          { name: "TOP", path: "/" },
          { name: "SHOP / STORE", path: "/shop" },
        ])}
      />

      <PageHero
        eyebrow={shopHero.eyebrow}
        heading={shopHero.heading}
        lead={shopHero.lead}
        image={shopHero.image}
        imageAlt={shopHero.imageAlt}
      />

      <section className="bg-white">
        <Container className="py-16 sm:py-24">
          <SectionHeading eyebrow="CATEGORY" heading="お取り扱い商品" align="center" />
          <div className="mt-12 grid grid-cols-1 gap-10 sm:mt-16 sm:grid-cols-3">
            {categories.map((category) => (
              <div key={category.title} className="flex flex-col gap-5">
                <PhotoFrame src={category.image} alt={category.imageAlt} aspect="aspect-[4/5]" />
                <div>
                  <h3 className="font-heading text-[17px] tracking-wide text-charcoal">
                    {category.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-[1.8] text-charcoal-soft">
                    {category.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        heading={[shopNote.heading]}
        lead={shopNote.body}
        buttons={[{ label: shopNote.cta.label, href: shopNote.cta.href, variant: "primary" }]}
      />
    </>
  );
}
