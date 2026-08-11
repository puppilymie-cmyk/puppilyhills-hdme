import { siteConfig } from "@/content/site";
import { stores } from "@/content/stores";

// Google検索・生成AI双方に理解されやすいよう、Schema.orgのLocalBusiness系を出し分ける。

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    alternateName: siteConfig.nameJa,
    url: siteConfig.url,
    description: siteConfig.description,
    sameAs: [siteConfig.sns.instagram],
  };
}

export function petGroomingJsonLd(storeId: "tokyo" | "osaka") {
  const store = stores.find((s) => s.id === storeId)!;
  return {
    "@context": "https://schema.org",
    "@type": "PetGroomingService",
    name: store.name,
    description: store.description,
    url: `${siteConfig.url}/access#${store.id}`,
    telephone: store.tel,
    address: {
      "@type": "PostalAddress",
      streetAddress: store.address,
      postalCode: store.postalCode,
      addressCountry: "JP",
    },
    openingHours: store.hours,
    image: `${siteConfig.url}${store.image}`,
    priceRange: "$$$",
  };
}

export function veterinaryCareJsonLd() {
  const hospital = stores.find((s) => s.id === "hospital")!;
  return {
    "@context": "https://schema.org",
    "@type": "VeterinaryCare",
    name: hospital.name,
    description: hospital.description,
    url: `${siteConfig.url}/animal-hospital`,
    telephone: hospital.tel,
    address: {
      "@type": "PostalAddress",
      streetAddress: hospital.address,
      postalCode: hospital.postalCode,
      addressCountry: "JP",
    },
    image: `${siteConfig.url}${hospital.image}`,
  };
}

export function productJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Puppily Delica",
    brand: {
      "@type": "Brand",
      name: "Puppily Hills",
    },
    description:
      "人間も食べられるレベルの原材料と、FK-23、グリーンリップドマッセル、サラブレッド由来プラセンタなどの機能性成分を配合した、小型犬・超小型犬のための毎日の食事。",
    category: "犬用フード",
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
