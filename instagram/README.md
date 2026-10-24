# Instagram 投稿パイプライン

「下書きから予約の準備まで」を自動化し、**公開だけは必ず人の承認を通す**仕組みです。
ルールの根拠は `knowledge/DAILY_WORKFLOW.md` と `knowledge/CONTENT_SAFETY.md` です。

## 流れ

```
DRAFT ──▶ READY FOR REVIEW ──▶ APPROVED ──▶ SCHEDULED ──▶ PUBLISHED
 Claudeが下書き   内容と出典が揃う    必要な承認が揃う   停止スイッチOFF時のみ  URLを記録
```

| やること | コマンド |
|---|---|
| 新しい下書きを作る(柱とタイプは自動ローテーション) | `npm run ig:new -- --date 2026-10-25` |
| 検査する | `npm run ig:check` / `npm run ig:check -- <id> --as "READY FOR REVIEW"` |
| 状態を進める | `npm run ig:status -- <id> "READY FOR REVIEW"` |
| 承認を記録する | `npm run ig:approve -- <id> owner --by owner --note "承認の根拠"` |
| 一覧と柱バランス | `npm run ig:queue` |
| 予約用に書き出す | `npm run ig:queue -- --export` → `instagram/out/schedule.json` |

## 自動で守られること

- **禁止表現で止まる**:「完治」「必ず治る」「予防できます」「これだけで十分」「バイツサージ」など。
- **優位性の表現**(国内初・唯一・No.1 など)は、出典つきの記録がないと進めません。
- **承認レベルの自動判定**: 医療・栄養の主張があれば VETERINARY REVIEW、アバターや個人的な話は OWNER FINAL APPROVAL。宣言したレベルが足りなければ止まります。
- **オーナー承認は全投稿で必須**です。
- **承認後に内容を変えると承認が無効**になります(内容のハッシュで照合)。
- **素材ごとに出所と同意の記録が必須**。アバター使用時は同意記録(`avatarConsentRef`)も必須です。
- **停止スイッチ**: `config.json` の `publishingEnabled` が `false` の間は、予約・公開・書き出しのすべてが止まります。
- `autoPublish` は、`autoPublishPrerequisites` の6項目がすべて `true` になるまで有効にできません。

## 承認の記録について(正直な限界)

承認はこのリポジトリ内の記録なので、本人確認まではできません。そのため次の運用にします。

- Claude が承認を記録するのは、**承認者本人が会話の中で投稿IDを明示して承認したとき**だけです。`--note` にその旨を残します。
- 獣医師の承認は、獣医師本人の確認が取れたことをオーナーが伝えた場合のみ記録します。
- 完全な自動公開に進む前に、承認を本人認証つきの仕組み(GitHubのレビュー承認など)へ移すことを推奨します。

## 公開リポジトリでの注意

このリポジトリは公開されています。`posts/` に置くのは**公開予定の文章と素材の参照名だけ**にしてください。

- 写真・動画の実ファイル、お客様のお名前、カルテ、未承認のストーリーは置かない。
- `assets[].ref` には、非公開の保存場所での管理名だけを書く。
- 公開前の下書きを外に見せたくない場合は、`posts/` を非公開リポジトリに移すことを検討してください。

## 投稿パッケージの項目

`templates/post-package.json` を参照してください。主な項目:

- `claims[]`: 文章に含まれる事実・医療・栄養・営業情報の主張。`type`(philosophy / operational / product / medical / nutrition / superiority / story / personal)、`source`(出典)、`verified`(確認済みか)。
- `assets[]`: `ref`(管理名)、`source`(誰が提供したか)、`consent`(同意の記録)。
- `openQuestions[]`: 未解決の確認事項。1件でも残っていると APPROVED になりません。

Instagram の仕様値(キャプション2,200文字、ハッシュタグ30個)は変わることがあるため、公開前に公式ヘルプで確認してください。
