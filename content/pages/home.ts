// TOPページの文章データ。ここを編集するだけで本文を差し替えられます。

export const hero = {
  eyebrow: "PUPPILY HILLS",
  headline: ["美しくすること。", "守ること。", "残すこと。"],
  subhead:
    "医療・美容・食。大切な家族の一生に寄り添う場所。Puppily Hills",
  image: "/images/hero-main.svg",
  imageAlt: "美しくトリミングされた小型犬とPuppily Hillsの上質な空間",
  ctaPrimary: { label: "Puppily Hillsを知る", href: "/about" },
  ctaSecondary: { label: "トリミングを予約する", href: "/contact" },
};

export const brandConcept = {
  eyebrow: "BRAND CONCEPT",
  heading: "可愛くするだけでは、終わらない。",
  body: [
    "Puppily Hillsは、小型犬・超小型犬のためのトリミングサロンです。けれど私たちが向き合っているのは、美容だけではありません。",
    "日々全身に触れるからこそ気づける小さな変化を健康へつなげ、必要であれば併設の動物病院へ。そして、トリミングで美しく整った瞬間を、写真という記憶と記録へ残す。",
    "美容、健康、医療、食事、記録。ひとつずつ切り離すのではなく、愛犬の一生という一本の時間軸の中で一体として考える。それが、Puppily Hillsという場所です。",
  ],
  image: "/images/brand-concept.svg",
  imageAlt: "Puppily Hillsのブランドコンセプトを表す上質な空間",
};

export const trimmingTeaser = {
  eyebrow: "TRIMMING",
  heading: "その子らしい可愛さを、いちばん美しい形に。",
  body: "一頭一頭の骨格や被毛、性格に合わせたトリミング。全身を触れるトリマーだからこそ気づける、皮膚・しこり・耳・目・口腔・体重・体型・歩き方の小さな変化を大切にしています。",
  points: [
    "小型犬・超小型犬に特化した専門技術",
    "一頭ごとにカウンセリングを行うオーダーメイドの仕上がり",
    "全身のチェックによる健康状態の把握",
    "仕上がり後は、そのまま撮影ブースへ",
  ],
  image: "/images/trimming-1.svg",
  imageAlt: "小型犬の繊細なトリミングの様子",
  cta: { label: "TRIMMINGについて詳しく見る", href: "/trimming" },
};

export const medicalLink = {
  eyebrow: "MEDICAL LINK",
  heading: "美しく整える時間が、健康を守る時間にもなる。",
  body: "Puppily Hillsには、Puppily Animal Hospitalが併設されています。トリミング中に気づいた小さな変化は、必要に応じてそのまま専門医の診察へ。特別なことではなく、日常の中で早く気づき、早く相談できる。その安心感を大切にしています。",
  image: "/images/medical-link.svg",
  imageAlt: "トリミングサロンと動物病院がつながる安心感",
  cta: { label: "医療との連携について見る", href: "/animal-hospital" },
};

export const hospitalTeaser = {
  eyebrow: "PUPPILY ANIMAL HOSPITAL",
  heading: "大切な命に、人と同じ真剣さで向き合う。",
  body: "CT、MRI、C-ARMなどの高度医療機器と、専門性の高い獣医師による診療体制。大切な命を守るために、必要な医療を惜しまない。それがPuppily Animal Hospitalの考え方です。",
  points: ["高度医療機器による精密な検査", "専門性の高い獣医師による診療", "年中無休の診療体制"],
  image: "/images/hospital-1.svg",
  imageAlt: "Puppily Animal Hospitalの診療風景",
  cta: { label: "ANIMAL HOSPITALを見る", href: "/animal-hospital" },
};

export const delicaTeaser = {
  eyebrow: "PUPPILY DELICA",
  heading: "小型犬には、これしかない。",
  body: "Puppily Delicaは、人間も食べられるレベルの原材料を使い、小型犬・超小型犬のためだけに健康を考えて設計された食事です。毎日の食事から、おいしさと機能性を両立しながら健康を支えます。",
  image: "/images/delica-1.svg",
  imageAlt: "Puppily Delicaの食事",
  cta: { label: "PUPPILY DELICAを見る", href: "/puppily-delica" },
};

export const memory = {
  eyebrow: "MEMORY & PHOTO",
  heading: "今日のこの子を、一生の宝物に。",
  body: [
    "トリミングを終え、美しく整った姿で洋服やアクセサリーを選び、世界観のある撮影セットで写真を残す。",
    "それは「可愛いから撮る」のではありません。寿命の短い愛犬との時間の中で、今日という一日は二度と戻らない一瞬だから。何年経っても見返せる記憶と記録として、大切に残しています。",
  ],
  image: "/images/memory-1.svg",
  imageAlt: "撮影セットで写真を残す愛犬",
  cta: { label: "MEMORY & PHOTOを見る", href: "/memory-photo" },
};

export const storesSection = {
  eyebrow: "STORES",
  heading: "店舗紹介",
  body: "東京・大阪のサロンと、併設のPuppily Animal Hospital。",
};

export const instagramSection = {
  eyebrow: "INSTAGRAM",
  heading: "Puppily Hillsの日常",
  body: "サロンでの時間や、撮影された愛犬たちの姿をお届けしています。",
};

export const finalCta = {
  heading: ["大切な家族のために、", "できることを、すべて。"],
  buttons: [
    { label: "トリミングを予約する", href: "/contact", variant: "primary" as const },
    { label: "お問い合わせ", href: "/contact", variant: "outline-light" as const },
    { label: "Puppily Delicaを見る", href: "/puppily-delica", variant: "outline-light" as const },
  ],
};
