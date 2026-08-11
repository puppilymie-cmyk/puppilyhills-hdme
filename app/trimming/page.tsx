import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { TextImageSection } from "@/components/sections/TextImageSection";
import { PointsGrid } from "@/components/sections/PointsGrid";
import { CtaBand } from "@/components/sections/CtaBand";
import { StructuredData } from "@/components/StructuredData";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import {
  trimmingHero,
  approach,
  noticing,
  afterTrimming,
  menuNote,
} from "@/content/pages/trimming";

export const metadata: Metadata = {
  title: "TRIMMING | 小型犬・トイプードル専門のトリミング",
  description:
    "自由が丘・大阪のPuppily Hillsで行う、小型犬・超小型犬・トイプードル専門のトリミング。一頭ごとのカウンセリングと、全身のチェックによる健康管理まで一体で提供します。",
  alternates: { canonical: "/trimming" },
};

export default function TrimmingPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbJsonLd([
          { name: "TOP", path: "/" },
          { name: "TRIMMING", path: "/trimming" },
        ])}
      />

      <PageHero
        eyebrow={trimmingHero.eyebrow}
        heading={trimmingHero.heading}
        lead={trimmingHero.lead}
        image={trimmingHero.image}
        imageAlt={trimmingHero.imageAlt}
      />

      <TextImageSection
        eyebrow={approach.eyebrow}
        heading={approach.heading}
        body={approach.body}
        image={approach.image}
        imageAlt={approach.imageAlt}
      />

      <PointsGrid
        eyebrow={noticing.eyebrow}
        heading={noticing.heading}
        lead={noticing.body}
        items={noticing.points.map((p) => ({ title: p.label, body: p.body }))}
        columns={4}
        note={noticing.note}
        tone="ivory"
      />

      <TextImageSection
        eyebrow={afterTrimming.eyebrow}
        heading={afterTrimming.heading}
        body={afterTrimming.body}
        image={afterTrimming.image}
        imageAlt={afterTrimming.imageAlt}
        cta={afterTrimming.cta}
        reverse
      />

      <CtaBand
        heading={[menuNote.heading]}
        lead={menuNote.body}
        buttons={[{ label: menuNote.cta.label, href: menuNote.cta.href, variant: "primary" }]}
      />
    </>
  );
}
