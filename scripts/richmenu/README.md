# LINE公式アカウント リッチメニュー

Puppily Hills LINE公式アカウント用のリッチメニュー(2500×1686px / タップ領域6分割)一式です。
サイトの配色(アイボリー / ベージュ / ブラッシュピンク / チャコール)とタイポグラフィに合わせてデザインしています。

## ファイル構成

| ファイル | 内容 |
| --- | --- |
| `richmenu-large.html` | デザインソース(HTML/CSS)。文言・配色・アイコンの編集はここで行う |
| `generate-richmenu.mjs` | 上記HTMLをPlaywrightでスクリーンショットし、画像を書き出すスクリプト |
| `richmenu-large.json` | LINE Messaging APIに渡すリッチメニュー定義(タップ領域とリンク先) |
| `../../public/line/richmenu-large.png` | 生成済みの画像(2500×1686px, PNG, 1MB未満) |

## タップ領域(6分割)

```
┌──────────────┬──────────────────┬──────────────────┐
│ TRIMMING     │ ANIMAL HOSPITAL  │ PUPPILY DELICA    │
│ 美容          │ 医療              │ 食                 │
├──────────────┼──────────────────┼──────────────────┤
│ MEMORY&PHOTO │ ご予約はこちら(CTA)│ ACCESS / SHOP     │
│ 記憶と記録     │                  │ 店舗案内           │
└──────────────┴──────────────────┴──────────────────┘
```

4つの柱(医療×美容×食×記憶と記録)を上段・下段左に配置し、中央下に「ご予約」を最も目立つCTAとして、
右下に「アクセス/店舗一覧」を配置しています。リンク先は `content/site.ts` のページ構成に合わせています。

## 画像の再生成

デザイン(文言・色・アイコン)を変更したら、`richmenu-large.html` を編集して以下を実行してください。

```bash
npm install --no-save playwright   # 未インストールの場合のみ
node scripts/richmenu/generate-richmenu.mjs
```

`public/line/richmenu-large.png` が上書き生成されます。

## LINE公式アカウントへの反映方法

### 方法A: LINE Official Account Manager から手動設定(おすすめ・API不要)

1. https://manager.line.biz/ にログイン → 対象アカウントを選択
2. 左メニュー「トーク」→「リッチメニュー」→「作成」
3. 「テンプレートを選ぶ」で 6分割(2×3)テンプレートを選択
4. 画像に `public/line/richmenu-large.png` をアップロード
5. 各タップ領域に、`richmenu-large.json` の `areas[].action` を参考にリンク先URLを設定
   (例: 左上 → `/trimming` ページURL)
6. メニューバーのテキストに「メニュー」などを設定し、「公開」

### 方法B: Messaging API から設定(要 チャネルアクセストークン)

```bash
export LINE_CHANNEL_ACCESS_TOKEN="xxxxx"

# 1. リッチメニューを作成(IDが返る)
RICHMENU_ID=$(curl -s -X POST https://api.line.me/v2/bot/richmenu \
  -H "Authorization: Bearer $LINE_CHANNEL_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d @scripts/richmenu/richmenu-large.json | jq -r '.richMenuId')

# 2. 画像をアップロード
curl -s -X POST "https://api-data.line.me/v2/bot/richmenu/$RICHMENU_ID/content" \
  -H "Authorization: Bearer $LINE_CHANNEL_ACCESS_TOKEN" \
  -H "Content-Type: image/png" \
  --data-binary @public/line/richmenu-large.png

# 3. 全ユーザーのデフォルトリッチメニューとして設定
curl -s -X POST "https://api.line.me/v2/bot/user/all/richmenu/$RICHMENU_ID" \
  -H "Authorization: Bearer $LINE_CHANNEL_ACCESS_TOKEN"
```

`LINE_CHANNEL_ACCESS_TOKEN` は LINE Developers コンソール(https://developers.line.biz/)の
チャネル設定 → Messaging API → チャネルアクセストークン から発行できます。このトークンは
リポジトリにコミットせず、環境変数やシークレットストアで管理してください。

## 本番URLについて

`richmenu-large.json` のリンク先は `content/site.ts` の `siteConfig.url`
(`https://www.puppilyhills.com`)を前提にしています。実際のドメインが異なる場合は
`richmenu-large.json` 内のURLを差し替えてください。
