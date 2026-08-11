// 店舗情報。住所・営業時間・電話番号などは決まり次第ここを更新してください。
export interface StoreInfo {
  id: string;
  type: "salon" | "hospital";
  name: string;
  nameJa: string;
  catch: string;
  description: string;
  postalCode: string;
  address: string;
  tel: string;
  hours: string;
  holiday: string;
  mapEmbedUrl: string;
  mapUrl: string;
  image: string;
  href: string;
}

export const stores: StoreInfo[] = [
  {
    id: "tokyo",
    type: "salon",
    name: "Puppily Hills Tokyo",
    nameJa: "パピリーヒルズ 東京(自由が丘)",
    catch: "自由が丘の閑静な住宅街にあるフラッグシップサロン",
    description:
      "トイプードルをはじめとした小型犬・超小型犬専門のトリミングサロン。落ち着いた自由が丘の街並みの中で、美容と記録撮影をワンストップで体験いただけます。",
    postalCode: "〒152-0035",
    address: "東京都目黒区自由が丘0-00-00 Puppily Hills Bldg. 1F",
    tel: "03-0000-0000",
    hours: "10:00〜19:00(最終受付 17:00)",
    holiday: "火曜定休 ※祝日を除く",
    mapEmbedUrl: "https://www.google.com/maps?q=自由が丘駅&output=embed",
    mapUrl: "https://maps.google.com/?q=自由が丘駅",
    image: "/images/store-tokyo.svg",
    href: "/access#tokyo",
  },
  {
    id: "osaka",
    type: "salon",
    name: "Puppily Hills Osaka",
    nameJa: "パピリーヒルズ 大阪",
    catch: "関西エリアの大切な家族に寄り添うサロン",
    description:
      "大阪エリアで小型犬・超小型犬に特化したトリミングと撮影体験を提供。東京店と同じ思想・技術基準で、安心して任せられる時間をお届けします。",
    postalCode: "〒530-0001",
    address: "大阪府大阪市北区梅田0-00-00 Puppily Hills Osaka Bldg. 2F",
    tel: "06-0000-0000",
    hours: "10:00〜19:00(最終受付 17:00)",
    holiday: "火曜定休 ※祝日を除く",
    mapEmbedUrl: "https://www.google.com/maps?q=大阪駅&output=embed",
    mapUrl: "https://maps.google.com/?q=大阪駅",
    image: "/images/store-osaka.svg",
    href: "/access#osaka",
  },
  {
    id: "hospital",
    type: "hospital",
    name: "Puppily Animal Hospital",
    nameJa: "パピリー動物病院",
    catch: "CT・MRI・C-ARMを備えた併設の動物病院",
    description:
      "高度医療機器と専門性の高い獣医師による診療体制で、トリミングサロンでの気づきを健康診断・早期発見・治療へとつなげます。年中無休で大切な命に向き合います。",
    postalCode: "〒152-0035",
    address: "東京都目黒区自由が丘0-00-00 Puppily Hills Bldg. 2F",
    tel: "03-0000-0001",
    hours: "9:00〜18:00(診療時間)",
    holiday: "年中無休 ※急患は要問合せ",
    mapEmbedUrl: "https://www.google.com/maps?q=自由が丘駅&output=embed",
    mapUrl: "https://maps.google.com/?q=自由が丘駅",
    image: "/images/store-hospital.svg",
    href: "/access#hospital",
  },
];
