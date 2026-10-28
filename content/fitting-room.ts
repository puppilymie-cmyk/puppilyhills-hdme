// LINE限定「お試着ルーム」のデータ。
// Instagramで新作を発表したら、ここに1着ずつ追加してください(手順は knowledge/FITTING_ROOM.md)。
//
// 公開前の確認事項:
// - 価格・数量・入荷日は、確定した情報だけを入力してください。未確定なら null のままにします。
// - 写真はオーナーが提供・承認したものだけを使用してください。
// - sample: true の項目は表示確認用のサンプルです。実際の新作に差し替えたら削除してください。

export interface FittingItem {
  id: string;
  name: string;
  description: string;
  // 試着用の背景透過画像(PNG推奨)。お洋服だけが写っている画像を使います。
  overlayImage: string;
  // 商品写真(一覧表示用)。Instagramに投稿した写真と同じもので構いません。
  photo: string;
  photoAlt: string;
  // 新作を紹介したInstagram投稿のURL
  instagramUrl: string | null;
  // 税込価格(円)。未確定なら null
  price: number | null;
  // 確定している販売数量。未確定なら null(数を推測で書かないこと)
  limitedQuantity: number | null;
  sizes: string[];
  sample?: boolean;
}

// LINE公式アカウントのID(@から始まるもの)。公開前に実際のIDと一致しているか確認してください。
export const lineAccountId = "@puppilyhills";
export const lineAddFriendUrl = `https://line.me/R/ti/p/${lineAccountId}`;

export function lineMessageUrl(text: string) {
  return `https://line.me/R/oaMessage/${lineAccountId}/?${encodeURIComponent(text)}`;
}

export const fittingItems: FittingItem[] = [
  {
    id: "sample-blush-dress",
    name: "ブラッシュピンク リボンワンピース",
    description: "表示確認用のサンプルです。実際の新作情報に差し替えてください。",
    overlayImage: "/images/fitting/sample-dress-blush.svg",
    photo: "/images/fitting/sample-photo-blush.svg",
    photoAlt: "ブラッシュピンクのワンピース(サンプル)",
    instagramUrl: null,
    price: null,
    limitedQuantity: null,
    sizes: ["XS", "S", "M"],
    sample: true,
  },
  {
    id: "sample-ivory-knit",
    name: "アイボリー ケーブルニット",
    description: "表示確認用のサンプルです。実際の新作情報に差し替えてください。",
    overlayImage: "/images/fitting/sample-knit-ivory.svg",
    photo: "/images/fitting/sample-photo-ivory.svg",
    photoAlt: "アイボリーのニット(サンプル)",
    instagramUrl: null,
    price: null,
    limitedQuantity: null,
    sizes: ["XS", "S", "M"],
    sample: true,
  },
];

export const fittingRoomCopy = {
  eyebrow: "LINE MEMBERS FITTING ROOM",
  heading: "新作のお洋服を、この子の写真で。",
  lead: "Instagramでご紹介した新作は、数に限りがあります。LINEにご登録いただいた皆様だけに、ご自宅でこの子の写真に重ねてお試着いただけるお部屋をご用意しました。",
  steps: [
    {
      title: "LINEで友だち追加",
      body: "Puppily HillsのLINE公式アカウントを友だち追加してください。",
    },
    {
      title: "届いた合言葉を入力",
      body: "LINEでお届けする合言葉を、このページに入力してください。",
    },
    {
      title: "この子の写真でお試着",
      body: "お写真にお洋服を重ねて、似合う一着をゆっくりお選びください。",
    },
    {
      title: "LINEでご相談・お取り置き",
      body: "気に入った一着は、そのままLINEでサイズのご相談やお取り置きをお申し付けください。",
    },
  ],
  privacy:
    "お試着に使うお写真は、お使いの端末の中だけで処理されます。Puppily Hillsのサーバーに送信・保存されることはありません。",
  fitNote:
    "画面上のお試着はイメージです。着心地やサイズは一頭一頭違うため、ご来店時にスタッフが実際に着せて、体に負担がないかを一緒に確かめます。",
};
