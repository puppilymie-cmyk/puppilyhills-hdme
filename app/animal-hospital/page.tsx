import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { TextImageSection } from "@/components/sections/TextImageSection";
import { PointsGrid } from "@/components/sections/PointsGrid";
import { StepsList } from "@/components/sections/StepsList";
import { CtaBand } from "@/components/sections/CtaBand";
import { StructuredData } from "@/components/StructuredData";
import { breadcrumbJsonLd, veterinaryCareJsonLd } from "@/lib/structured-data";
import {
  hospitalHero,
  philosophy,
  equipment,
  team,
  careFlow,
  hours,
} from "@/content/pages/animal-hospital";

export const metadata: Metadata = {
  title: "ANIMAL HOSPITAL | Puppily Animal Hospital",
  description:
    "Puppily Hillsに併設された動物病院。CT・MRI・C-ARMなどの高度医療機器と専門性の高い獣医師が、小型犬の健康診断・早期発見・治療を支えます。",
  alternates: { canonical: "/animal-hospital" },
};

export default function AnimalHospitalPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbJsonLd([
          { name: "TOP", path: "/" },
          { name: "ANIMAL HOSPITAL", path: "/animal-hospital" },
        ])}
      />
      <StructuredData data={veterinaryCareJsonLd()} />

      <PageHero
        eyebrow={hospitalHero.eyebrow}
        heading={hospitalHero.heading}
        lead={hospitalHero.lead}
        image={hospitalHero.image}
        imageAlt={hospitalHero.imageAlt}
      />

      <TextImageSection
        eyebrow={philosophy.eyebrow}
        heading={philosophy.heading}
        body={philosophy.body}
        image={philosophy.image}
        imageAlt={philosophy.imageAlt}
      />

      <PointsGrid
        eyebrow={equipment.eyebrow}
        heading={equipment.heading}
        items={equipment.items}
        note={equipment.note}
        columns={3}
        tone="ivory"
      />

      <TextImageSection
        eyebrow={team.eyebrow}
        heading={team.heading}
        body={team.body}
        image={team.image}
        imageAlt={team.imageAlt}
        reverse
      />

      <StepsList
        eyebrow={careFlow.eyebrow}
        heading={careFlow.heading}
        steps={careFlow.steps}
        tone="ivory"
      />

      <CtaBand
        heading={[hours.heading]}
        lead={hours.body}
        buttons={[{ label: hours.cta.label, href: hours.cta.href, variant: "primary" }]}
      />
    </>
  );
}
