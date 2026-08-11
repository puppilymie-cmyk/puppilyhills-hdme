export const shopHero = {
  eyebrow: "SHOP / STORE",
  heading: "愛犬の毎日を彩る、選び抜いたアイテム。",
  lead: "Puppily Delicaをはじめ、洋服・アクセサリーなど、店舗で取り扱う商品をご紹介します。",
  image: "/images/shop-hero.svg",
  imageAlt: "Puppily Hillsの店頭商品",
};

export interface ShopCategory {
  title: string;
  body: string;
  image: string;
  imageAlt: string;
}

export const categories: ShopCategory[] = [
  {
    title: "Puppily Delica",
    body: "人間も食べられるレベルの原材料と機能性成分を配合した、毎日の食事。店舗にて量り売り・パック販売を行っています。",
    image: "/images/shop-product-1.svg",
    imageAlt: "Puppily Delicaの商品",
  },
  {
    title: "洋服・アクセサリー",
    body: "撮影にも使用する、上質な素材の洋服やアクセサリーを取り揃えています。トリミング後のスタイリングにもおすすめです。",
    image: "/images/shop-product-2.svg",
    imageAlt: "洋服・アクセサリーの商品",
  },
  {
    title: "ケア用品",
    body: "自宅でのブラッシングやデンタルケアに使える、専門性の高いケアアイテムをセレクトしています。",
    image: "/images/shop-product-3.svg",
    imageAlt: "ケア用品の商品",
  },
];

export const shopNote = {
  eyebrow: "PURCHASE",
  heading: "お求めについて",
  body: "商品は各店舗にてお取り扱いしています。在庫状況や価格については、店舗まで直接お問い合わせください。オンラインでのご購入をご希望の場合もお気軽にご相談ください。",
  cta: { label: "店舗情報・アクセスを見る", href: "/access" },
};
