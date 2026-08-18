---
format: 1080x1920
duration: 31s
message: "毎日の食事も、愛情のひとつ。Puppily Delicaは「健康」という視点から設計された、毎日のごはん。"
arc: Future Pacing (imagine → name product → mechanism → outcome → CTA)
audience: 小型犬と暮らす40代以上の飼い主。食事の質、愛犬の健康、上質さを重視する層。
music: none
---

## Video direction

**Palette system** (from `frame.md`, cartesian preset remixed onto Puppily brand tokens): canvas/ink pairs only, no invented colors. Canvas = ivory `#faf6f1` (primary) / beige `#efe4d6` (alternate frames, for rhythm). Ink = charcoal `#2c2925` (primary text) / charcoal-soft `#55504a` (secondary/qualifier text, e.g. the Frame 5 disclaimer). Sole accent = beige-deep `#ddc9ac` (hairline rules, the Frame 8 wordmark underline). Blush `#f6e3e1` / blush-deep `#e6b8bb` reserved for Frame 8's brand card only, so the palette doesn't dilute across 8 frames. Alternate canvas ivory/beige frame-to-frame so consecutive crossfades never sit on an identical field (avoids the blur-crossfade need).

**Motion grammar + reveal model**: every frame is the `titlecard-reveal` blueprint's single-restrained-move contract — one clean line (or two, slide-up-crossfade) revealed once, then a still hold. No spoken VO exists, so "paced to the VO" becomes **paced to reading rhythm**: nothing appears before its natural reading beat, each clause gets its own window, and the final state holds long enough to read the full line comfortably aloud (~2.5–3.5 characters/sec Japanese reading pace). Long-tail eases only (`power3`, smooth ease-out); no bounce, no spring chains. During any hold, at most a barely-perceptible breathing scale (`sine-wave-loop`, ≤1.5% amplitude) — never a camera drift/pan.

**Rhythm / held-frame allocation**: Frames 4 and 7 are the video's deliberate breathers — shorter, single-line, no crossfade phase, pure fade-in-and-hold — so the two-clause frames (1, 2, 3, 6) and the busier Frame 5 (main line + disclaimer) don't read as uniformly dense. Frame 8 is the terminal hold — once the wordmark lockup settles it does not move again.

**Negative list**: no photographic or AI-generated imagery of dogs, food, or packaging (none exists yet — typography only, see `BRIEF.md`). No drop shadows, no rounded-pill chrome, no bright/saturated accent colors beyond the palette above, no emoji, no decorative ornament. No slideshow failure (never dump the full line at t=0 for multi-clause frames). No screensaver failure (nothing drifts independently of the one named move). No urgency/scarcity language anywhere, including Frame 8's CTA (brand voice rule).

**Caption-band keep-out**: N/A — no captions in a silent, no-narration video; all content still planned into the top ~83% for bottom-edge consistency with other Puppily video assets.

## Frame 1 — Hook

- scene: 毎日の食事も、愛情のひとつ。
- voiceover:
- duration: 4s
- transition_in: cut
- status: outline
- src: compositions/frames/01-hook.html
- type: hook
- persuasion: Pain validation (an everyday habit reframed as something that matters)
- beat: curiosity
- blueprint: titlecard-reveal (Reproduce — Benefits two-line variant)
- asset_candidates:

narrativeRole: Open cold on the emotional truth — food as an act of love, not a chore. Sets the whole film's register: quiet, warm, serious.
keyMessage: Daily feeding is a form of love.

Scene 1 (0.0–0.4s): static ivory canvas `#faf6f1`, empty — establishing beat, nothing on screen yet.
Scene 2 (0.4–1.6s): 「毎日の食事も、」 fades in centered, upper-third, while scaling ~95%→100% on a smooth power3 ease-out; holds.
Scene 3 (1.6–4.0s): the line translates up slightly and fades out as 「愛情のひとつ。」 slide-up-crossfades in to take center (the one move); holds still to the end — no further motion, no breathing needed at this short duration.

## Frame 2 — Product intro

- scene: Puppily Delicaは、ただのドッグフードではありません。
- voiceover:
- duration: 3.5s
- transition_in: crossfade
- status: outline
- src: compositions/frames/02-product-intro.html
- type: product_intro
- persuasion: Negative contrast (not X)
- beat: intrigue
- blueprint: titlecard-reveal (Reproduce — Benefits two-line variant)
- asset_candidates:

narrativeRole: Name the brand and immediately set it apart from "just dog food."
keyMessage: This is a different category of product.

Scene 1 (0.0–0.3s): static beige canvas `#efe4d6`, empty.
Scene 2 (0.3–1.4s): 「Puppily Delicaは、」 fades in centered, upper-third, scale ~95%→100%; holds.
Scene 3 (1.4–3.5s): line translates up and fades as 「ただのドッグフードではありません。」 slide-up-crossfades to center and holds to the end.

## Frame 3 — The design philosophy

- scene: 美容や医療と同じように、「健康」という視点から設計された、毎日のごはんです。
- voiceover:
- duration: 4.5s
- transition_in: crossfade
- status: outline
- src: compositions/frames/03-philosophy.html
- type: benefit_highlight
- persuasion: Authority by association (medicine/beauty rigor extended to food)
- beat: trust
- blueprint: titlecard-reveal (Reproduce — Benefits two-line variant)
- asset_candidates:

narrativeRole: Connect Delica to the same health-first standard as Puppily's medical and grooming pillars — this is the "mechanism" beat of the arc.
keyMessage: Designed with the same seriousness as medicine and beauty care.

Scene 1 (0.0–0.4s): static ivory canvas, empty.
Scene 2 (0.4–1.8s): 「美容や医療と同じように、」 fades in centered, upper-third, scale ~95%→100%; holds.
Scene 3 (1.8–4.5s): line translates up and fades as 「『健康』という視点から設計された、毎日のごはんです。」 slide-up-crossfades to center (two short internal lines stacked, same single move) and holds to the end.

## Frame 4 — Ingredients

- scene: 人間も食べられるレベルの原材料を厳選し、
- voiceover:
- duration: 3.5s
- transition_in: crossfade
- status: outline
- src: compositions/frames/04-ingredients.html
- type: feature_showcase
- persuasion: Feature-to-benefit translation (human-grade sourcing)
- beat: confidence
- blueprint: titlecard-reveal (Reproduce — single-card variant; deliberate breather, no crossfade phase)
- asset_candidates:

narrativeRole: First concrete proof point — ingredient quality standard. Deliberately the video's first breather (see Video direction rhythm note).
keyMessage: Human-grade ingredients, selected with care.

Scene 1 (0.0–0.4s): static beige canvas, empty.
Scene 2 (0.4–1.6s): the full line fades in centered, scale ~95%→100%, power3 ease-out — the one move.
Scene 3 (1.6–3.5s): holds still, dead-center — no second phase, no crossfade (this frame is a single held card by design).

## Frame 5 — Functional ingredients (with required disclaimer)

- scene: 毎日おいしく食べ続けられることを大切にしながら、健やかな毎日を支える機能性成分を配合しました。
- voiceover:
- duration: 5.5s
- transition_in: crossfade
- status: outline
- src: compositions/frames/05-functional.html
- type: feature_showcase
- persuasion: Feature-to-benefit translation (functional nutrition)
- beat: confidence
- blueprint: titlecard-reveal (Adapt — Benefits shape, but the "qualifier" is the disclaimer, so both lines end up co-resident rather than replacing one another)
- asset_candidates:
- disclaimer: "Puppily Delicaは食事として健康的な毎日をサポートするものであり、病気の治療や治癒を目的・保証するものではありません。持病や体調に不安がある場合は、獣医師にご相談の上でお与えください。"

narrativeRole: Second proof point — functional ingredients supporting daily wellbeing. The disclaimer (from content/pages/delica.ts, already owner-approved) MUST render as small, legible on-screen print in this frame, co-resident with the main line for the whole hold — this is a hard content-safety requirement (knowledge/CONTENT_SAFETY.md, knowledge/PUPPILY_DELICA.md), not optional styling. Adapt rationale: keep the signature slide-up-crossfade move, but change its destination — the second line ADDS beneath the first instead of replacing it, because the disclaimer must stay on screen with the claim it qualifies, not flash and vanish.
keyMessage: Functional ingredients support daily wellbeing — this is not a medical treatment.

Scene 1 (0.0–0.4s): static ivory canvas, empty.
Scene 2 (0.4–2.2s): the main line fades in centered, scale ~95%→100%; holds alone, upper-middle.
Scene 3 (2.2–3.2s): main line translates up to upper-third (making room, not exiting); the disclaimer fades in beneath it in small charcoal-soft `#55504a` type, ~40% the main line's size — the one additional move.
Scene 4 (3.2–5.5s): both lines hold together, fully legible, to the end — no further motion.

## Frame 6 — Taste and palatability

- scene: どれだけ身体によくても、食べてもらえなければ意味がありません。愛犬の嗜好性に配慮した、味と香りと食感を追求しています。
- voiceover:
- duration: 4.5s
- transition_in: crossfade
- status: outline
- src: compositions/frames/06-taste.html
- type: benefit_highlight
- persuasion: Rule of three (味・香り・食感)
- beat: warmth
- blueprint: titlecard-reveal (Reproduce — Benefits two-line variant)
- asset_candidates:

narrativeRole: Address the obvious objection — good-for-you food is worthless if the dog won't eat it — and resolve it.
keyMessage: Health and palatability are both taken seriously.

Scene 1 (0.0–0.4s): static beige canvas, empty.
Scene 2 (0.4–1.8s): 「どれだけ身体によくても、食べてもらえなければ意味がありません。」 fades in centered, upper-third, scale ~95%→100%; holds.
Scene 3 (1.8–4.5s): line translates up and fades as 「愛犬の嗜好性に配慮した、味と香りと食感を追求しています。」 slide-up-crossfades to center — the 味・香り・食感 rule-of-three reads as one phrase, no per-word stagger — and holds to the end.

## Frame 7 — Emotional payoff

- scene: 今日のごはんが、明日の元気につながるように。
- voiceover:
- duration: 3s
- transition_in: crossfade
- status: outline
- src: compositions/frames/07-payoff.html
- type: benefit_highlight
- persuasion: Future pacing
- beat: peace of mind
- blueprint: titlecard-reveal (Reproduce — single-card variant; deliberate breather before the CTA)
- asset_candidates:

narrativeRole: The "outcome" beat of the arc — today's meal, tomorrow's wellbeing. Quiet emotional high point before the CTA; the video's second breather, mirroring Frame 4 for rhythm.
keyMessage: Today's care becomes tomorrow's health.

Scene 1 (0.0–0.3s): static ivory canvas, empty.
Scene 2 (0.3–1.4s): the full line fades in centered, scale ~95%→100% — the one move.
Scene 3 (1.4–3.0s): holds still, dead-center, to the end.

## Frame 8 — Brand outro / CTA

- scene: "Puppily Delica" ワードマーク + 「詳しくはプロフィールのリンクから」
- voiceover:
- duration: 3s
- transition_in: zoom-through
- status: outline
- src: compositions/frames/08-cta.html
- type: cta
- persuasion: Friction reduction (one clear next step)
- beat: inevitability
- blueprint: titlecard-reveal (Adapt — Social_Proof lockup shape without the app-collage wipe, since there is no collage to reveal)
- asset_candidates:

narrativeRole: Calm end-card — brand mark holds, one small directive line beneath it. No urgency language, per brand voice rules (no false scarcity). Terminal frame: once settled, nothing moves again.
keyMessage: Puppily Delica — learn more via the link in bio.

Scene 1 (0.0–0.3s): static blush `#f6e3e1` canvas (the one frame that breaks from ivory/beige, marking this as the closing card), empty.
Scene 2 (0.3–1.3s): "Puppily Delica" wordmark spring-settles to center (small, restrained settle — not a bounce), beige-deep hairline rule draws in beneath it left-to-right.
Scene 3 (1.3–3.0s): 「詳しくはプロフィールのリンクから」 fades in below the hairline rule, small charcoal-soft type; both hold static to the final frame — no further motion.
