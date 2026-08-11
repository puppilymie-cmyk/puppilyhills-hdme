export interface Pillar {
  id: string;
  number: string;
  title: string;
  titleEn: string;
  description: string;
  image: string;
  href: string;
}

export const pillars: Pillar[] = [
  {
    id: "beauty",
    number: "01",
    title: "美容",
    titleEn: "Beauty",
    description: "小型犬・超小型犬に特化した、繊細で丁寧なトリミング。",
    image: "/images/pillar-beauty.svg",
    href: "/trimming",
  },
  {
    id: "medical",
    number: "02",
    title: "医療",
    titleEn: "Medical",
    description: "日々の小さな変化を見逃さず、必要に応じて病院へつなぐ。",
    image: "/images/pillar-medical.svg",
    href: "/animal-hospital",
  },
  {
    id: "food",
    number: "03",
    title: "食",
    titleEn: "Food",
    description: "毎日の食事から健康を支えるPuppily Delica。",
    image: "/images/pillar-food.svg",
    href: "/puppily-delica",
  },
  {
    id: "memory",
    number: "04",
    title: "記憶と記録",
    titleEn: "Memory",
    description: "一番美しい瞬間を、写真として残す。",
    image: "/images/pillar-memory.svg",
    href: "/memory-photo",
  },
];
