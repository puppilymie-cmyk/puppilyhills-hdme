---
workflow: product-launch-video
flow: automation
storyboard: yes
message: "毎日の食事も、愛情のひとつ。Puppily Delicaは「健康」という視点から設計された、毎日のごはん。"
destination: instagram-reel
aspect: 1080x1920
language: ja
audience: 小型犬と暮らす40代以上の飼い主。食事の質、愛犬の健康、上質さを重視する層。
length: 30s
angle: concept
---

## Intent

Puppily Delicaというプレミアム犬用食事ブランドの理念を伝える、Instagram Reels向けの30秒コマーシャル動画。
「食事も愛情のひとつ」という考え方、ヒューマングレード原材料へのこだわり、機能性成分、嗜好性への配慮という
既に承認済みのウェブサイトコピー(content/pages/delica.ts)の内容のみを使う。上品で温かく、医療的にも誠実な
Puppilyのブランドトーン(knowledge/BRAND_VOICE.md)を守ること。

## Assets

No real product/dog photography or video footage exists in this repository — only abstract placeholder
SVG graphics (public/images/delica-*.svg, literally labeled "Photo: placeholder"). Do NOT use AI-generated
or fabricated imagery of dogs, food, or packaging to stand in for real photography — this would violate
project content-safety rules (knowledge/CONTENT_SAFETY.md, knowledge/INSTAGRAM_STRATEGY.md: use only
owner-supplied or explicitly approved photos/video).

This is therefore a **typographic / motion-graphics concept cut only** — text on brand-colored backgrounds,
standing in for the final commercial until the owner supplies real approved product and dog photography/video.

## Customizations

- No narration voiceover (silent, on-screen animated Japanese text only). Reason: no HeyGen account signed
  in and no local TTS engine installed in this environment; also avoids any "synthetic voice speaking for
  the brand" question that would otherwise need owner approval per knowledge/CONTENT_SAFETY.md.
- `music: none` — fully silent draft (no BGM either), for the same reason (no signed-in provider, no local
  MusicGen deps installed).
- Brand palette only, taken from app/globals.css: ivory #faf6f1, beige #efe4d6, beige-deep #ddc9ac,
  blush #f6e3e1, blush-deep #e6b8bb, charcoal #2c2925, charcoal-soft #55504a, line #e7ddce.
- Elegant Japanese serif (Mincho-style) typography; calm pacing; no emoji, no decorative clutter
  (knowledge/BRAND_VOICE.md).
- Required functional-ingredient disclaimer, verbatim from content/pages/delica.ts, must appear on screen
  if functional ingredients (FK-23, グリーンリップドマッセル, サラブレッド由来プラセンタ) are mentioned:
  "Puppily Delicaは食事として健康的な毎日をサポートするものであり、病気の治療や治癒を目的・保証するもの
  ではありません。持病や体調に不安がある場合は、獣医師にご相談の上でお与えください。"

## Notes

- No product/site URL to capture — this repo's site is not yet deployed to a public URL. Proceed via the
  no-capture path, using this project's own approved brand tokens and copy directly instead of crawling.
- Approval status under this project's own workflow (knowledge/DAILY_WORKFLOW.md): this render is a DRAFT
  for owner review. It must not be published to Instagram or any public channel until explicitly approved,
  and real photography must replace the placeholder typographic treatment before final publish.
- Do not invent any fact, price, spec, or claim beyond what content/pages/delica.ts already states.
