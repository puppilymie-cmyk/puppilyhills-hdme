import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { PointsGrid } from "@/components/sections/PointsGrid";
import { TextImageSection } from "@/components/sections/TextImageSection";
import { CtaBand } from "@/components/sections/CtaBand";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StructuredData } from "@/components/StructuredData";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { aboutHero, philosophy, story, forWhom } from "@/content/pages/about";

export const metadata: Metadata = {
  title: "ABOUT | ブランドコンセプト",
  description:
    "Puppily Hillsは、小型犬・超小型犬の一生に寄り添う「医療×美容×食×記憶と記録」のブランドです。私たちの思想とブランドストーリーをご紹介します。",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbJsonLd([
          { name: "TOP", path: "/" },
          { name: "ABOUT", path: "/about" },
        ])}
      />

      <PageHero
        eyebrow={aboutHero.eyebrow}
        heading={aboutHero.heading}
        lead={aboutHero.lead}
        image={aboutHero.image}
        imageAlt={aboutHero.imageAlt}
      />

      <TextImageSection
        eyebrow={story.eyebrow}
        heading={story.heading}
        body={story.body}
        image={story.image}
        imageAlt={story.imageAlt}
      />

      <PointsGrid
        eyebrow={philosophy.eyebrow}
        heading={philosophy.heading}
        items={philosophy.items}
        columns={3}
        tone="ivory"
      />

      <section className="bg-white">
        <Container className="py-16 sm:py-24">
          <SectionHeading
            eyebrow={forWhom.eyebrow}
            heading={forWhom.heading}
            align="center"
          />
          <ul className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2">
            {forWhom.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 border border-line bg-ivory/60 p-5 text-[14px] leading-[1.8] text-charcoal-soft"
              >
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blush-deep" />
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand
        heading={["大切な家族のために、", "できることを、すべて。"]}
        buttons={[
          { label: "トリミングを予約する", href: "/contact", variant: "primary" },
          { label: "TRIMMINGを見る", href: "/trimming", variant: "outline-light" },
        ]}
      />
    </>
  );
}
