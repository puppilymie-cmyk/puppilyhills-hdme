# Instagram 投稿ドラフト

このフォルダは、Instagram投稿の「下書き作成〜承認依頼」を補助するためのものです。
`knowledge/DAILY_WORKFLOW.md` の運用ルールに従います。

## 運用モード

現在は **assisted production（補助制作）** のみです。**自動公開は行いません。**

1. 毎日決まった時間に、Claudeがこのリポジトリの `knowledge/` 配下のブランドナレッジと、
   Googleドライブの「Puppily 日報」フォルダ（各スタッフの日報）を確認する。
2. 使えそうな出来事・気づきが見つかれば、それを元に1本分の投稿案を
   `knowledge/DAILY_WORKFLOW.md` の「Daily output format」に沿って作成する。
   見つからない場合は、チャットでMieさんに直接その日の出来事・使いたい写真を尋ねる。
3. 作成した下書きは、まずこのチャット上に提示する（ファイルへの保存はまだ行わない）。
4. Mieさんが内容を確認し、承認・修正依頼・却下のいずれかを返す。
5. **承認された場合のみ**、`instagram-drafts/YYYY-MM-DD.md` としてこのリポジトリに保存し、
   ステータスを `APPROVED` にしてコミット・プッシュする。
6. 実際のInstagramへの投稿は、承認後も **Mieさんが手動で行う**（または将来、正式なAPI連携が
   整った時点で予約投稿ツールに登録する）。Claude Code がInstagramへ直接投稿することはない。

## ファイル

- `TEMPLATE.md` — 1投稿分のドラフト雛形（`knowledge/DAILY_WORKFLOW.md` の出力フォーマットに準拠）。
- `YYYY-MM-DD.md` — 承認された日付ごとの投稿ドラフト。

## 自動化の境界（再掲）

`knowledge/DAILY_WORKFLOW.md` の「Automation boundary」の通り、以下が揃うまでは
完全自動公開を行いません。

- Instagram公式APIの接続
- 素材・アバター同意の記録
- アカウントセキュリティレビュー
- エラー処理とキルスイッチ
- オーナー・獣医承認の技術的強制
- 試験運用期間の成功

それまでは「下書き作成・整理・リマインド・投稿準備」までを自動化対象とします。
