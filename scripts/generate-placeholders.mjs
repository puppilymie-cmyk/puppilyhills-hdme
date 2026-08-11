// 仮画像(SVG)を生成するスクリプト。
// 実際の写真に差し替える際は public/images 内の同名ファイルを差し替えるか、
// content/*.ts の image パスを新しい画像に変更してください。
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "..", "public", "images");
mkdirSync(outDir, { recursive: true });

// ブランドカラーに寄せたグラデーションパレット
const palettes = [
  ["#F6E9DE", "#EFD8CE"], // ivory -> beige
  ["#F7E3E1", "#F1CDD1"], // blush pink
  ["#EFE7DA", "#E3D6C4"], // warm beige
  ["#F8EFE7", "#EAD9CE"], // soft ivory
  ["#F4E0DE", "#E9C9CE"], // dusty pink
  ["#EFEAE2", "#DCCFC0"], // sand
];

function paletteFor(seed) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return palettes[h % palettes.length];
}

function svgFor({ id, label, w = 1200, h = 900 }) {
  const [c1, c2] = paletteFor(id);
  const paw = `
    <g opacity="0.16" fill="#6b5a4d">
      <circle cx="${w / 2 - 34}" cy="${h / 2 - 6}" r="12"/>
      <circle cx="${w / 2 - 10}" cy="${h / 2 - 22}" r="12"/>
      <circle cx="${w / 2 + 14}" cy="${h / 2 - 22}" r="12"/>
      <circle cx="${w / 2 + 38}" cy="${h / 2 - 6}" r="12"/>
      <ellipse cx="${w / 2 + 2}" cy="${h / 2 + 22}" rx="26" ry="20"/>
    </g>`;
  return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${label}">
  <defs>
    <linearGradient id="g-${id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${c1}"/>
      <stop offset="100%" stop-color="${c2}"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#g-${id})"/>
  ${paw}
  <text x="50%" y="92%" text-anchor="middle" font-family="'Hiragino Mincho ProN','Yu Mincho',serif" font-size="${Math.round(w * 0.024)}" fill="#5c5044" opacity="0.55">${label}</text>
</svg>`;
}

const images = [
  { id: "hero-main", label: "Photo: トップページ ヒーロー画像", w: 1600, h: 2000 },
  { id: "brand-concept", label: "Photo: ブランドコンセプト", w: 1200, h: 1500 },
  { id: "pillar-beauty", label: "Photo: 美容", w: 900, h: 1100 },
  { id: "pillar-medical", label: "Photo: 医療", w: 900, h: 1100 },
  { id: "pillar-food", label: "Photo: 食", w: 900, h: 1100 },
  { id: "pillar-memory", label: "Photo: 記憶と記録", w: 900, h: 1100 },
  { id: "trimming-1", label: "Photo: トリミング風景1", w: 1200, h: 1500 },
  { id: "trimming-2", label: "Photo: トリミング風景2", w: 1000, h: 1250 },
  { id: "trimming-3", label: "Photo: トリミング後の犬", w: 1000, h: 1250 },
  { id: "medical-link", label: "Photo: 医療との連携", w: 1400, h: 1000 },
  { id: "hospital-1", label: "Photo: Puppily Animal Hospital 外観", w: 1400, h: 1000 },
  { id: "hospital-2", label: "Photo: 診察室", w: 1000, h: 1250 },
  { id: "hospital-3", label: "Photo: 医療機器", w: 1000, h: 1250 },
  { id: "delica-1", label: "Photo: Puppily Delica 商品", w: 1200, h: 1500 },
  { id: "delica-2", label: "Photo: 手作りごはん", w: 1000, h: 1250 },
  { id: "delica-3", label: "Photo: 原材料", w: 1000, h: 1250 },
  { id: "memory-1", label: "Photo: 撮影セット1", w: 1200, h: 1500 },
  { id: "memory-2", label: "Photo: 撮影セット2", w: 1000, h: 1250 },
  { id: "memory-3", label: "Photo: 撮影された愛犬", w: 1000, h: 1250 },
  { id: "store-tokyo", label: "Photo: Puppily Hills Tokyo", w: 1200, h: 900 },
  { id: "store-osaka", label: "Photo: Puppily Hills Osaka", w: 1200, h: 900 },
  { id: "store-hospital", label: "Photo: Puppily Animal Hospital", w: 1200, h: 900 },
  { id: "instagram-1", label: "Instagram 投稿1", w: 800, h: 800 },
  { id: "instagram-2", label: "Instagram 投稿2", w: 800, h: 800 },
  { id: "instagram-3", label: "Instagram 投稿3", w: 800, h: 800 },
  { id: "instagram-4", label: "Instagram 投稿4", w: 800, h: 800 },
  { id: "instagram-5", label: "Instagram 投稿5", w: 800, h: 800 },
  { id: "instagram-6", label: "Instagram 投稿6", w: 800, h: 800 },
  { id: "about-hero", label: "Photo: ABOUT ページ", w: 1600, h: 1000 },
  { id: "about-story", label: "Photo: ブランドストーリー", w: 1200, h: 1500 },
  { id: "trimming-hero", label: "Photo: TRIMMING ページ", w: 1600, h: 1000 },
  { id: "hospital-hero", label: "Photo: ANIMAL HOSPITAL ページ", w: 1600, h: 1000 },
  { id: "delica-hero", label: "Photo: PUPPILY DELICA ページ", w: 1600, h: 1000 },
  { id: "memory-hero", label: "Photo: MEMORY & PHOTO ページ", w: 1600, h: 1000 },
  { id: "shop-hero", label: "Photo: SHOP / STORE ページ", w: 1600, h: 1000 },
  { id: "shop-product-1", label: "Photo: 物販商品1", w: 900, h: 1100 },
  { id: "shop-product-2", label: "Photo: 物販商品2", w: 900, h: 1100 },
  { id: "shop-product-3", label: "Photo: 物販商品3", w: 900, h: 1100 },
  { id: "access-hero", label: "Photo: ACCESS ページ", w: 1600, h: 1000 },
  { id: "contact-hero", label: "Photo: CONTACT ページ", w: 1600, h: 1000 },
  { id: "og-image", label: "Puppily Hills", w: 1200, h: 630 },
];

for (const img of images) {
  const svg = svgFor(img);
  writeFileSync(join(outDir, `${img.id}.svg`), svg, "utf-8");
}

console.log(`Generated ${images.length} placeholder images in ${outDir}`);
