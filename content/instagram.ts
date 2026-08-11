// Instagram投稿の仮データ。将来的にはInstagram Graph APIやRSS連携に置き換え可能です。
export interface InstagramPost {
  id: string;
  image: string;
  caption: string;
  url: string;
}

export const instagramPosts: InstagramPost[] = [
  {
    id: "1",
    image: "/images/instagram-1.svg",
    caption: "トリミング後、撮影セットでの一枚。",
    url: "https://www.instagram.com/puppilyhills/",
  },
  {
    id: "2",
    image: "/images/instagram-2.svg",
    caption: "今日のご来店、ありがとうございました。",
    url: "https://www.instagram.com/puppilyhills/",
  },
  {
    id: "3",
    image: "/images/instagram-3.svg",
    caption: "Puppily Delicaを美味しそうに。",
    url: "https://www.instagram.com/puppilyhills/",
  },
  {
    id: "4",
    image: "/images/instagram-4.svg",
    caption: "健康診断で元気をチェック。",
    url: "https://www.instagram.com/puppilyhills/",
  },
  {
    id: "5",
    image: "/images/instagram-5.svg",
    caption: "新作アクセサリーで撮影会。",
    url: "https://www.instagram.com/puppilyhills/",
  },
  {
    id: "6",
    image: "/images/instagram-6.svg",
    caption: "自由が丘店のトリミングルームより。",
    url: "https://www.instagram.com/puppilyhills/",
  },
];
