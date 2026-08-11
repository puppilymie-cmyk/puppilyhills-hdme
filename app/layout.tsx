import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StructuredData } from "@/components/StructuredData";
import { organizationJsonLd } from "@/lib/structured-data";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | 小型犬・超小型犬のための医療×美容×食×記憶と記録`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "小型犬 トリミング",
    "トイプードル トリミング",
    "自由が丘 トリミング",
    "大阪 トリミング",
    "小型犬 動物病院",
    "犬 CT MRI",
    "犬 健康診断",
    "犬 手作りごはん",
    "犬 フード",
    "犬 撮影会",
    "愛犬 写真",
  ],
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | 医療×美容×食×記憶と記録`,
    description: siteConfig.description,
    url: siteConfig.url,
    images: [{ url: "/images/og-image.svg", width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/images/og-image.svg"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja" className="h-full">
      <body className="flex min-h-full flex-col bg-white text-charcoal antialiased">
        <StructuredData data={organizationJsonLd()} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
