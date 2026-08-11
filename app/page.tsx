import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { FourPillars } from "@/components/home/FourPillars";
import { StoresSection } from "@/components/home/StoresSection";
import { InstagramSection } from "@/components/home/InstagramSection";
import { TextImageSection } from "@/components/sections/TextImageSection";
import { CtaBand } from "@/components/sections/CtaBand";
import { StructuredData } from "@/components/StructuredData";
import { organizationJsonLd, faqJsonLd } from "@/lib/structured-data";
import {
  brandConcept,
  trimmingTeaser,
  medicalLink,
  hospitalTeaser,
  delicaTeaser,
  memory,
  finalCta,
} from "@/content/pages/home";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} | 小型犬・超小型犬のためのトリミング×動物病院×食×記憶`,
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

const homeFaq = [
  {
    question: "Puppily Hillsは、普通のトリミングサロンと何が違いますか?",
    answer:
      "Puppily Hillsは、美容(トリミング)・医療・食事・記憶と記録を一体で考える小型犬・超小型犬専門ブランドです。トリミング中に気づいた身体の変化を、併設のPuppily Animal Hospitalでの健康診断や治療につなげ、整った姿を撮影で記録に残すところまでを一つの体験として提供しています。",
  },
  {
    question: "トリミングの予約はどのようにすればよいですか?",
    answer:
      "お問い合わせページのフォーム、またはお電話にてご予約いただけます。初めての方は、事前にカウンセリングのご相談も可能です。",
  },
  {
    question: "Puppily Animal Hospitalではどのような医療機器がありますか?",
    answer:
      "CT、MRI、C-ARM(術中X線透視装置)などの高度医療機器を備え、専門性の高い獣医師が精密な検査・診療を行っています。",
  },
];

export default function Home() {
  return (
    <>
      <StructuredData data={organizationJsonLd()} />
      <StructuredData data={faqJsonLd(homeFaq)} />

      <Hero />

      <TextImageSection
        eyebrow={brandConcept.eyebrow}
        heading={brandConcept.heading}
        body={brandConcept.body}
        image={brandConcept.image}
        imageAlt={brandConcept.imageAlt}
      />

      <FourPillars />

      <TextImageSection
        eyebrow={trimmingTeaser.eyebrow}
        heading={trimmingTeaser.heading}
        body={trimmingTeaser.body}
        image={trimmingTeaser.image}
        imageAlt={trimmingTeaser.imageAlt}
        points={trimmingTeaser.points}
        cta={trimmingTeaser.cta}
      />

      <TextImageSection
        eyebrow={medicalLink.eyebrow}
        heading={medicalLink.heading}
        body={medicalLink.body}
        image={medicalLink.image}
        imageAlt={medicalLink.imageAlt}
        cta={medicalLink.cta}
        reverse
        tone="ivory"
      />

      <TextImageSection
        eyebrow={hospitalTeaser.eyebrow}
        heading={hospitalTeaser.heading}
        body={hospitalTeaser.body}
        image={hospitalTeaser.image}
        imageAlt={hospitalTeaser.imageAlt}
        points={hospitalTeaser.points}
        cta={hospitalTeaser.cta}
      />

      <TextImageSection
        eyebrow={delicaTeaser.eyebrow}
        heading={delicaTeaser.heading}
        body={delicaTeaser.body}
        image={delicaTeaser.image}
        imageAlt={delicaTeaser.imageAlt}
        cta={delicaTeaser.cta}
        reverse
        tone="ivory"
      />

      <TextImageSection
        eyebrow={memory.eyebrow}
        heading={memory.heading}
        body={memory.body}
        image={memory.image}
        imageAlt={memory.imageAlt}
        cta={memory.cta}
      />

      <StoresSection />
      <InstagramSection />

      <CtaBand heading={finalCta.heading} buttons={finalCta.buttons} />
    </>
  );
}
