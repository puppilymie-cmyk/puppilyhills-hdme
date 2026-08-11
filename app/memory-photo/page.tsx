import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { TextImageSection } from "@/components/sections/TextImageSection";
import { StepsList } from "@/components/sections/StepsList";
import { CtaBand } from "@/components/sections/CtaBand";
import { StructuredData } from "@/components/StructuredData";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { memoryHero, philosophy, experience, forFamily } from "@/content/pages/memory";

export const metadata: Metadata = {
  title: "MEMORY & PHOTO | 愛犬の写真と記憶を残す撮影会",
  description:
    "トリミング後、洋服やアクセサリーを選び、世界観のある撮影セットで愛犬の写真を残すPuppily Hillsの記憶と記録の体験。短い一生の中の大切な一瞬を、一生の宝物に。",
  alternates: { canonical: "/memory-photo" },
};

export default function MemoryPhotoPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbJsonLd([
          { name: "TOP", path: "/" },
          { name: "MEMORY & PHOTO", path: "/memory-photo" },
        ])}
      />

      <PageHero
        eyebrow={memoryHero.eyebrow}
        heading={memoryHero.heading}
        lead={memoryHero.lead}
        image={memoryHero.image}
        imageAlt={memoryHero.imageAlt}
      />

      <TextImageSection
        eyebrow={philosophy.eyebrow}
        heading={philosophy.heading}
        body={philosophy.body}
        image={philosophy.image}
        imageAlt={philosophy.imageAlt}
      />

      <StepsList
        eyebrow={experience.eyebrow}
        heading={experience.heading}
        steps={experience.steps}
        tone="ivory"
      />

      <TextImageSection
        eyebrow="MEMORY"
        heading="撮影された、特別な一枚。"
        body="世界観のある撮影セットで残す写真は、その日の愛犬の表情や仕草をそのまま記録します。"
        image={experience.image}
        imageAlt={experience.imageAlt}
        reverse
      />

      <CtaBand
        heading={[forFamily.heading]}
        lead={forFamily.body}
        buttons={[{ label: forFamily.cta.label, href: forFamily.cta.href, variant: "primary" }]}
      />
    </>
  );
}
