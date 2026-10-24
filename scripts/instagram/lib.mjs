// Instagram投稿パッケージの共通ルール。
// knowledge/DAILY_WORKFLOW.md と knowledge/CONTENT_SAFETY.md の承認ルールをコードで強制します。
import { createHash } from "node:crypto";
import { existsSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
export const ROOT = join(__dirname, "..", "..");
export const IG_DIR = join(ROOT, "instagram");
export const POSTS_DIR = join(IG_DIR, "posts");
export const CONFIG_PATH = join(IG_DIR, "config.json");
export const TEMPLATE_PATH = join(IG_DIR, "templates", "post-package.json");

export const STATUSES = ["DRAFT", "READY FOR REVIEW", "APPROVED", "SCHEDULED", "PUBLISHED"];
export const LEVELS = ["LOW RISK", "REVIEW", "VETERINARY REVIEW", "OWNER FINAL APPROVAL"];
export const PILLARS = ["医療", "美容", "食", "記憶と記録", "オーナーの声", "リアルストーリー"];
export const CONTENT_TYPES = [
  "educational",
  "emotional story",
  "behind the scenes",
  "child-centered experience",
  "product or event",
  "frequently asked question",
  "founder message",
  "staff learning or care practice",
];
export const CLAIM_TYPES = [
  "philosophy",
  "operational",
  "product",
  "medical",
  "nutrition",
  "superiority",
  "story",
  "personal",
];
export const LOCATIONS = ["東京", "大阪", "両店舗", "店舗なし"];

// 主張の種類ごとに最低限必要な承認レベル
const CLAIM_MIN_LEVEL = {
  philosophy: "LOW RISK",
  operational: "REVIEW",
  product: "REVIEW",
  story: "REVIEW",
  superiority: "REVIEW",
  medical: "VETERINARY REVIEW",
  nutrition: "VETERINARY REVIEW",
  personal: "OWNER FINAL APPROVAL",
};

// 公開できない表現(エラー)
const BLOCKED_PHRASES = [
  { re: /バイツサージ/, why: "専門用語として使用しない(BRAND_VOICE.md)。施術者確認後に正確な用語へ" },
  { re: /完治|必ず治|絶対(に)?治|治ります|治せます|治療できます/, why: "絶対的な医療の約束は禁止" },
  { re: /予防できます|防げます|病気になりません|長生きでき(ます|る)/, why: "予防・長寿の約束は禁止(PUPPILY_DELICA.md)" },
  { re: /これだけで(大丈夫|十分|健康)|すべて解決|全部解決/, why: "一つで全て解決する表現は禁止" },
  { re: /副作用(は|が)?(一切)?(ありません|なし|ゼロ)/, why: "安全性の断定は禁止" },
];

// 要確認の表現(警告。claims に superiority として出典つきで記録すれば解消)
const SUPERIORITY_RE = /国内初|日本初|世界初|業界初|唯一|No\.?\s?1|ナンバーワン|最高峰|最新鋭|日本一/;
const PRESSURE_RE = /残りわずか|今だけ|急いで|売り切れ必至|ラストチャンス|先着\d+/;
const EMOJI_RE = /\p{Extended_Pictographic}/gu;

// Instagramの仕様値。変更されるため公開前に公式ヘルプで再確認してください。
export const CAPTION_MAX = 2200;
export const HASHTAG_MAX = 30;

// 承認後に内容が変わったら承認を無効にするための対象フィールド
const HASHED_FIELDS = [
  "proposedPublishAt",
  "location",
  "script",
  "onScreenText",
  "caption",
  "hashtags",
  "thumbnailText",
  "visualPlan",
  "assets",
  "claims",
  "usesAvatar",
];

export function readJson(path) {
  return JSON.parse(readFileSync(path, "utf8"));
}

export function writeJson(path, data) {
  writeFileSync(path, JSON.stringify(data, null, 2) + "\n");
}

export function loadConfig() {
  return readJson(CONFIG_PATH);
}

export function postPath(id) {
  return join(POSTS_DIR, `${id}.json`);
}

export function loadPost(id) {
  const path = postPath(id);
  if (!existsSync(path)) throw new Error(`投稿が見つかりません: ${id}`);
  return readJson(path);
}

export function loadAllPosts() {
  if (!existsSync(POSTS_DIR)) return [];
  return readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".json"))
    .sort()
    .map((f) => readJson(join(POSTS_DIR, f)));
}

export function contentHash(post) {
  const subset = Object.fromEntries(HASHED_FIELDS.map((k) => [k, post[k] ?? null]));
  return createHash("sha256").update(JSON.stringify(subset)).digest("hex").slice(0, 16);
}

function levelIndex(level) {
  return LEVELS.indexOf(level);
}

export function requiredLevel(post) {
  let idx = 0;
  for (const claim of post.claims ?? []) {
    idx = Math.max(idx, levelIndex(CLAIM_MIN_LEVEL[claim.type] ?? "REVIEW"));
  }
  if (post.usesAvatar) idx = levelIndex("OWNER FINAL APPROVAL");
  if (post.pillar === "リアルストーリー") idx = Math.max(idx, levelIndex("REVIEW"));
  return LEVELS[idx];
}

// レベルごとに必要な承認。オーナーの最終承認は全投稿で必須(DAILY_WORKFLOW.md 手順10)。
export function requiredApprovals(level) {
  const roles = [];
  if (levelIndex(level) >= levelIndex("REVIEW")) roles.push("review");
  if (level === "VETERINARY REVIEW") roles.push("veterinary");
  roles.push("owner");
  return roles;
}

function isBlank(value) {
  if (value == null) return true;
  if (typeof value === "string") return value.trim() === "";
  if (Array.isArray(value)) return value.length === 0;
  return false;
}

function allText(post) {
  return [post.script, post.caption, post.thumbnailText, ...(post.onScreenText ?? [])]
    .filter(Boolean)
    .join("\n");
}

// 投稿を検査し、{ errors, warnings } を返す。targetStatus はその状態に進めるかどうかの判定。
export function checkPost(post, targetStatus = post.status) {
  const errors = [];
  const warnings = [];
  const stage = STATUSES.indexOf(targetStatus);

  if (stage === -1) errors.push(`status が不正です: ${targetStatus}`);
  if (!PILLARS.includes(post.pillar)) errors.push(`pillar は ${PILLARS.join(" / ")} のいずれか`);
  if (!CONTENT_TYPES.includes(post.contentType)) errors.push(`contentType は ${CONTENT_TYPES.join(" / ")} のいずれか`);
  if (!LEVELS.includes(post.approvalLevel)) errors.push(`approvalLevel は ${LEVELS.join(" / ")} のいずれか`);
  if (!LOCATIONS.includes(post.location)) errors.push(`location は ${LOCATIONS.join(" / ")} のいずれか`);

  const text = allText(post);
  for (const { re, why } of BLOCKED_PHRASES) {
    const m = text.match(re);
    if (m) errors.push(`禁止表現「${m[0]}」: ${why}`);
  }

  const claims = post.claims ?? [];
  for (const [i, c] of claims.entries()) {
    if (!CLAIM_TYPES.includes(c.type)) errors.push(`claims[${i}].type は ${CLAIM_TYPES.join(" / ")} のいずれか`);
  }

  const sup = text.match(SUPERIORITY_RE);
  if (sup && !claims.some((c) => c.type === "superiority")) {
    errors.push(`優位性の表現「${sup[0]}」があります。claims に superiority として出典つきで記録してください`);
  }
  const pressure = text.match(PRESSURE_RE);
  if (pressure) warnings.push(`煽り表現「${pressure[0]}」: 偽の希少性・焦らせる販売は避ける(BRAND_VOICE.md)`);

  const emoji = (text.match(EMOJI_RE) ?? []).length;
  if (emoji > 3) warnings.push(`絵文字が ${emoji} 個あります。上品さのため3個以内を推奨`);

  if ((post.caption ?? "").length > CAPTION_MAX) errors.push(`キャプションが ${CAPTION_MAX} 文字を超えています`);
  if ((post.hashtags ?? []).length > HASHTAG_MAX) errors.push(`ハッシュタグが ${HASHTAG_MAX} 個を超えています`);

  const need = requiredLevel(post);
  if (levelIndex(post.approvalLevel) < levelIndex(need)) {
    errors.push(`approvalLevel が不足しています: 内容から最低「${need}」が必要`);
  }

  const cfg = loadConfig();
  if (cfg.autoPublish) {
    const missing = Object.entries(cfg.autoPublishPrerequisites).filter(([, ok]) => !ok).map(([k]) => k);
    if (missing.length) errors.push(`config.json: 前提条件が未達のまま autoPublish が有効です (${missing.join(", ")})`);
  }

  // READY FOR REVIEW 以降: 中身が揃っていること
  if (stage >= 1) {
    for (const field of ["purpose", "audience", "script", "caption", "thumbnailText", "visualPlan", "proposedPublishAt"]) {
      if (isBlank(post[field])) errors.push(`${field} が未記入です`);
    }
    if (post.proposedPublishAt && Number.isNaN(Date.parse(post.proposedPublishAt))) {
      errors.push("proposedPublishAt は ISO 8601 形式(例: 2026-10-25T19:00:00+09:00)");
    }
    if (isBlank(post.assets)) errors.push("assets が空です。素材の出所を記録してください");
    for (const [i, a] of (post.assets ?? []).entries()) {
      if (isBlank(a.ref) || isBlank(a.source)) errors.push(`assets[${i}]: ref と source が必要です`);
      if (isBlank(a.consent)) errors.push(`assets[${i}]: 同意の記録(consent)が必要です`);
    }
    for (const [i, c] of claims.entries()) {
      if (isBlank(c.source)) errors.push(`claims[${i}]「${c.text}」: 出典(source)が必要です`);
    }
    if (post.usesAvatar && isBlank(post.avatarConsentRef)) {
      errors.push("アバター使用時は avatarConsentRef(オーナー承認済みの素材・同意記録)が必要です");
    }
  }

  // APPROVED 以降: すべて確認済み + 承認が現在の内容と一致していること
  if (stage >= 2) {
    for (const [i, c] of claims.entries()) {
      if (!c.verified) errors.push(`claims[${i}]「${c.text}」が未確認です`);
    }
    if (!isBlank(post.openQuestions)) errors.push(`未解決の確認事項が ${post.openQuestions.length} 件あります`);
    const hash = contentHash(post);
    for (const role of requiredApprovals(post.approvalLevel)) {
      const a = post.approvals?.[role];
      if (!a) errors.push(`承認が不足しています: ${role}`);
      else if (a.contentHash !== hash) errors.push(`承認後に内容が変更されています。${role} の再承認が必要です`);
    }
  }

  if (targetStatus === "PUBLISHED") {
    for (const field of ["url", "publishedAt", "assetVersion"]) {
      if (isBlank(post.publication?.[field])) errors.push(`publication.${field} を記録してください`);
    }
  }

  return { errors, warnings };
}

export function today() {
  // 日本時間の日付
  return new Date(Date.now() + 9 * 3600 * 1000).toISOString().slice(0, 10);
}
