// サイト全体の基本設定。
// 本番URLやSNSアカウントが決まり次第、ここを差し替えてください。
export const siteConfig = {
  name: "Puppily Hills",
  nameJa: "パピリーヒルズ",
  brandStatement: "医療 × 美容 × 食 × 記憶と記録",
  url: "https://www.puppilyhills.com",
  description:
    "Puppily Hillsは、小型犬・超小型犬のための「医療・美容・食・記憶と記録」を一体で提供するブランドです。自由が丘・大阪のトリミングサロンと併設のPuppily Animal Hospitalが、愛犬の一生に寄り添います。",
  locale: "ja_JP",
  themeColor: "#F6E9DE",
  sns: {
    instagram: "https://www.instagram.com/puppilyhills/",
    line: "https://line.me/R/ti/p/@puppilyhills",
  },
  contact: {
    email: "info@puppilyhills.com",
    reservationUrl: "/contact",
  },
} as const;

export const navigation = [
  { label: "ABOUT", href: "/about" },
  { label: "TRIMMING", href: "/trimming" },
  { label: "ANIMAL HOSPITAL", href: "/animal-hospital" },
  { label: "PUPPILY DELICA", href: "/puppily-delica" },
  { label: "MEMORY & PHOTO", href: "/memory-photo" },
  { label: "SHOP / STORE", href: "/shop" },
  { label: "ACCESS", href: "/access" },
  { label: "CONTACT", href: "/contact" },
] as const;

export const footerNavigation = [
  {
    heading: "Puppily Hillsについて",
    links: [
      { label: "ABOUT", href: "/about" },
      { label: "TRIMMING", href: "/trimming" },
      { label: "ANIMAL HOSPITAL", href: "/animal-hospital" },
      { label: "PUPPILY DELICA", href: "/puppily-delica" },
      { label: "MEMORY & PHOTO", href: "/memory-photo" },
    ],
  },
  {
    heading: "ご利用案内",
    links: [
      { label: "SHOP / STORE", href: "/shop" },
      { label: "ACCESS", href: "/access" },
      { label: "CONTACT", href: "/contact" },
    ],
  },
] as const;

export const primaryCta = {
  label: "トリミングを予約する",
  href: "/contact",
} as const;

export const secondaryCta = {
  label: "Puppily Hillsを知る",
  href: "/about",
} as const;
