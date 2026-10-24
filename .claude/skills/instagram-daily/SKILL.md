---
name: instagram-daily
description: Puppily の Instagram 投稿パッケージを毎日下書きし、検査して承認待ちにする。「今日の投稿」「インスタの下書き」「投稿を作って」「承認します」などで使う。
---

# Instagram 毎日の下書き

`instagram/README.md` と `knowledge/` のすべてのファイルに従う。

## 手順

1. `npm run ig:queue` で現状と柱バランスを確認する。
2. `npm run ig:new -- --date <YYYY-MM-DD>` で下書きを作る。柱とタイプは自動で選ばれる。オーナーの指定があれば `--pillar` / `--type` を使う。
3. 作成された `instagram/posts/<id>.json` を、Mie の声(BRAND_VOICE.md)で埋める:
   - `purpose`、`audience`、`script`(60秒以内の話し言葉)、`onScreenText`、`caption`、`hashtags`、`thumbnailText`、`visualPlan`
   - 文章に含まれる事実・医療・栄養・営業情報は、すべて `claims` に記録する。確認できた出典がなければ `verified: false` のままにし、`openQuestions` に書く。
   - `assets` には、オーナーから提供・承認された素材の管理名だけを書く。なければ `openQuestions` に「素材の提供が必要」と書く。
4. `npm run ig:check -- <id> --as "READY FOR REVIEW"` を通し、通ったら `npm run ig:status -- <id> "READY FOR REVIEW"`。
5. オーナーに投稿パッケージ一式(台本・画面テキスト・キャプション・サムネイル・素材・出典・承認レベル・未解決事項・予定日時)を見せる。
6. コミットしてプッシュする。

## 絶対にしないこと

- 事実、医療情報、思い出、お客様の声、症例の結果を作らない。分からないことは `openQuestions` に書く。
- オーナーが会話の中で投稿IDを明示して承認していないのに `ig:approve` を実行しない。承認を推測しない。
- 獣医師の承認を、獣医師本人の確認なしに記録しない。
- `config.json` の `publishingEnabled` や `autoPublish` を、オーナーの明示的な指示なしに変更しない。
- 承認後に内容を変えたら、必ずその旨を伝えて再承認をお願いする。
