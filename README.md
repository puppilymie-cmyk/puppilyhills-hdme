# Puppily Hills 公式サイト

小型犬・超小型犬のための「医療 × 美容 × 食 × 記憶と記録」ブランド、Puppily Hillsの公式サイトです。

## 技術構成

- [Next.js](https://nextjs.org/) (App Router)
- TypeScript
- Tailwind CSS v4

## セットアップ・起動方法

### 1. 依存パッケージのインストール

```bash
npm install
```

### 2. 開発サーバーの起動

```bash
npm run dev
```

起動後、ブラウザで [http://localhost:3000](http://localhost:3000) を開くと確認できます。ファイルを編集すると自動的に反映されます。

### 3. 本番ビルド・起動確認

```bash
npm run build
npm run start
```

### 4. コード品質チェック

```bash
npm run lint       # ESLint
npx tsc --noEmit   # 型チェック
```

## ディレクトリ構成

```
app/                    ページ本体(App Router)
  layout.tsx            全ページ共通レイアウト(ヘッダー・フッター・共通SEO設定)
  page.tsx               TOPページ
  about/page.tsx          ABOUTページ
  trimming/page.tsx       TRIMMINGページ
  animal-hospital/page.tsx  ANIMAL HOSPITALページ
  puppily-delica/page.tsx   PUPPILY DELICAページ
  memory-photo/page.tsx     MEMORY & PHOTOページ
  shop/page.tsx            SHOP / STOREページ
  access/page.tsx          ACCESSページ
  contact/page.tsx         CONTACTページ
  sitemap.ts / robots.ts    SEO用ファイル

components/
  ui/                    汎用UIパーツ(Button, Container, SectionHeading, PhotoFrame)
  layout/                Header, Footer, PageHero(サブページ共通の見出し部)
  sections/              複数ページで使う共通セクション
                         (TextImageSection, PointsGrid, StepsList, CtaBand, StoreCard, InstagramGrid)
  home/                  TOPページ専用セクション(Hero, FourPillars, StoresSection, InstagramSection)
  contact/ContactForm.tsx お問い合わせフォーム(現状はダミー送信。実運用時はAPI連携に置き換え)
  StructuredData.tsx      JSON-LD構造化データ埋め込み用

content/                 文章・店舗情報などのデータ(ここを編集すれば表示内容が変わります)
  site.ts                サイト名、ナビゲーション、CTAなど全体設定
  stores.ts               店舗情報(住所・電話番号・営業時間など)
  pillars.ts               「4つの柱」データ
  instagram.ts             Instagram投稿の仮データ
  pages/home.ts             TOPページの文章
  pages/about.ts             ABOUTページの文章
  pages/trimming.ts          TRIMMINGページの文章
  pages/animal-hospital.ts   ANIMAL HOSPITALページの文章
  pages/delica.ts            PUPPILY DELICAページの文章
  pages/memory.ts             MEMORY & PHOTOページの文章
  pages/shop.ts                SHOP / STOREページの文章
  pages/access.ts              ACCESSページの文章
  pages/contact.ts              CONTACTページの文章・フォーム項目

lib/structured-data.ts    JSON-LD(構造化データ)生成関数

public/images/            仮画像(SVG)。実写に差し替える際はここのファイルを置き換えてください。
scripts/generate-placeholders.mjs  仮画像を生成するスクリプト(参考用)
```

## 写真・文章を差し替える場所

- **文章**: `content/` 以下の各 `.ts` ファイルを編集してください。コンポーネント側の修正は不要です。
- **店舗情報(住所・電話番号・営業時間)**: `content/stores.ts`
- **写真**: 現在は `public/images/` 内の仮画像(SVG)を使用しています。実際の写真に差し替える場合は、
  1. `public/images/` に実写ファイル(jpg / png / webp)を配置
  2. 対応する `content/*.ts` の `image` パスを新しいファイル名に変更
  の2ステップで反映されます。コンポーネントは `next/image` を使用しているため、サイズ指定や表示位置の調整は不要です。

## SEO・構造化データについて

- 各ページに `metadata`(title・description・canonical)を設定し、指定のSEOキーワード(小型犬 トリミング、トイプードル トリミング、自由が丘 トリミング、大阪 トリミング、小型犬 動物病院、犬 CT MRI、犬 健康診断、犬 手作りごはん、犬 フード、犬 撮影会、愛犬 写真 等)を本文中に自然な形で含めています。
- `app/sitemap.ts` / `app/robots.ts` でサイトマップ・クロール設定を出力しています。
- JSON-LD構造化データ(`lib/structured-data.ts`)により、Organization / PetGroomingService / VeterinaryCare / Product / BreadcrumbList / FAQPage を各ページに埋め込み、Google検索だけでなく生成AI(ChatGPT等)からも内容を理解しやすい構成にしています。

## 本番公開前に対応が必要な項目

- `content/site.ts` の `url`・SNSアカウント等を実際の情報に更新
- `content/stores.ts` の住所・電話番号・営業時間を実店舗情報に更新
- `public/images/` の仮画像を実写に差し替え(特に `og-image.svg` はSNSシェア用のため、実写・実ロゴのjpg/pngへの差し替えを推奨)
- `components/contact/ContactForm.tsx` の送信処理を、実際のAPI・メール送信サービスに接続
- `app/access/page.tsx` のGoogle Maps埋め込みURL(`content/stores.ts` の `mapEmbedUrl`)を実店舗の地図に更新
