import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { TextImageSection } from "@/components/sections/TextImageSection";
import { PointsGrid } from "@/components/sections/PointsGrid";
import { CtaBand } from "@/components/sections/CtaBand";
import { StructuredData } from "@/components/StructuredData";
import { breadcrumbJsonLd, productJsonLd } from "@/lib/structured-data";
import {
  delicaHero,
  concept,
  ingredients,
  functionalIngredients,
  taste,
  howToOrder,
} from "@/content/pages/delica";

export const metadata: Metadata = {
  title: "PUPPILY DELICA | 愛犬のための手作りごはん・機能性フード",
  description:
    "Puppily Delicaは、人間も食べられるレベルの原材料とFK-23・グリーンリップドマッセル・サラブレッド由来プラセンタを配合した、毎日の健康を支える愛犬の手作りごはん・フードです。",
  alternates: { canonical: "/puppily-delica" },
};

export default function DelicaPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbJsonLd([
          { name: "TOP", path: "/" },
          { name: "PUPPILY DELICA", path: "/puppily-delica" },
        ])}
      />
      <StructuredData data={productJsonLd()} />

      <PageHero
        eyebrow={delicaHero.eyebrow}
        heading={delicaHero.heading}
        lead={delicaHero.lead}
        image={delicaHero.image}
        imageAlt={delicaHero.imageAlt}
      />

      <TextImageSection
        eyebrow={concept.eyebrow}
        heading={concept.heading}
        body={concept.body}
        image={concept.image}
        imageAlt={concept.imageAlt}
      />

      <TextImageSection
        eyebrow={ingredients.eyebrow}
        heading={ingredients.heading}
        body={ingredients.body}
        image={ingredients.image}
        imageAlt={ingredients.imageAlt}
        reverse
        tone="ivory"
      />

      <PointsGrid
        eyebrow={functionalIngredients.eyebrow}
        heading={functionalIngredients.heading}
        items={functionalIngredients.items}
        note={functionalIngredients.disclaimer}
        columns={3}
      />

      <TextImageSection
        eyebrow={taste.eyebrow}
        heading={taste.heading}
        body={taste.body}
        image={taste.image}
        imageAlt={taste.imageAlt}
        tone="ivory"
      />

      <CtaBand
        heading={[howToOrder.heading]}
        lead={howToOrder.body}
        buttons={[{ label: howToOrder.cta.label, href: howToOrder.cta.href, variant: "primary" }]}
      />
    </>
  );
}
