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

function mapsQueryUrl(postalCode: string, address: string, embed = false) {
  const query = encodeURIComponent(`${postalCode} ${address}`);
  return `https://www.google.com/maps?q=${query}${embed ? "&output=embed" : ""}`;
}

const tokyoAddress = { postalCode: "〒152-0035", address: "東京都目黒区自由が丘2丁目8-5 ヴィラカトレア" };
const osakaAddress = { postalCode: "〒543-0034", address: "大阪府大阪市天王寺区松ケ鼻町4-7" };
const hospitalAddress = { postalCode: "〒547-0003", address: "大阪府大阪市平野区加美南4丁目4-3" };

export const stores: StoreInfo[] = [
  {
    id: "tokyo",
    type: "salon",
    name: "Puppily Hills Tokyo",
    nameJa: "パピリーヒルズ 東京(自由が丘)",
    catch: "自由が丘の閑静な住宅街にあるフラッグシップサロン",
    description:
      "トイプードルをはじめとした小型犬・超小型犬専門のトリミングサロン。落ち着いた自由が丘の街並みの中で、美容と記録撮影をワンストップで体験いただけます。",
    postalCode: tokyoAddress.postalCode,
    address: tokyoAddress.address,
    tel: "03-6421-1371",
    hours: "10:00〜19:00",
    holiday: "年末年始のみ休業",
    mapEmbedUrl: mapsQueryUrl(tokyoAddress.postalCode, tokyoAddress.address, true),
    mapUrl: mapsQueryUrl(tokyoAddress.postalCode, tokyoAddress.address),
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
    postalCode: osakaAddress.postalCode,
    address: osakaAddress.address,
    tel: "06-6774-4015",
    hours: "10:00〜19:00",
    holiday: "お盆・年末年始休業",
    mapEmbedUrl: mapsQueryUrl(osakaAddress.postalCode, osakaAddress.address, true),
    mapUrl: mapsQueryUrl(osakaAddress.postalCode, osakaAddress.address),
    image: "/images/store-osaka.svg",
    href: "/access#osaka",
  },
  {
    id: "hospital",
    type: "hospital",
    name: "Puppily Animal Hospital",
    nameJa: "パピリー動物病院",
    catch: "CT・MRI・C-ARMを備えた動物病院",
    description:
      "高度医療機器と専門性の高い獣医師による診療体制で、トリミングサロンでの気づきを健康診断・早期発見・治療へとつなげます。年中無休で大切な命に向き合います。",
    postalCode: hospitalAddress.postalCode,
    address: hospitalAddress.address,
    tel: "06-4305-7581",
    hours: "診療時間はお問い合わせください",
    holiday: "年中無休",
    mapEmbedUrl: mapsQueryUrl(hospitalAddress.postalCode, hospitalAddress.address, true),
    mapUrl: mapsQueryUrl(hospitalAddress.postalCode, hospitalAddress.address),
    image: "/images/store-hospital.svg",
    href: "/access#hospital",
  },
];
