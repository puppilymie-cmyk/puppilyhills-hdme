// 新しい投稿パッケージ(DRAFT)を作成します。
// 柱と投稿タイプは、指定がなければ最近使われていないものを自動で選びます。
//   npm run ig:new -- --date 2026-10-25 [--pillar 食] [--type educational]
import { existsSync, mkdirSync } from "node:fs";
import {
  CONTENT_TYPES,
  PILLARS,
  POSTS_DIR,
  TEMPLATE_PATH,
  loadAllPosts,
  loadConfig,
  postPath,
  readJson,
  today,
  writeJson,
} from "./lib.mjs";

function arg(name) {
  const i = process.argv.indexOf(`--${name}`);
  return i === -1 ? undefined : process.argv[i + 1];
}

// 最後に使われた日が最も古い候補を選ぶ(未使用が最優先)
function leastRecent(candidates, posts, key) {
  const lastUsed = new Map(candidates.map((c) => [c, ""]));
  for (const p of posts) {
    if (lastUsed.has(p[key]) && p.createdAt > lastUsed.get(p[key])) lastUsed.set(p[key], p.createdAt);
  }
  return [...lastUsed.entries()].sort((a, b) => a[1].localeCompare(b[1]))[0][0];
}

const date = arg("date") ?? today();
if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) throw new Error("--date は YYYY-MM-DD 形式");

const posts = loadAllPosts();
// リアルストーリーは許可と事実確認が前提のため、自動では選ばない
const autoPillars = PILLARS.filter((p) => p !== "リアルストーリー");
const pillar = arg("pillar") ?? leastRecent(autoPillars, posts, "pillar");
const contentType = arg("type") ?? leastRecent(CONTENT_TYPES, posts, "contentType");
if (!PILLARS.includes(pillar)) throw new Error(`--pillar は ${PILLARS.join(" / ")}`);
if (!CONTENT_TYPES.includes(contentType)) throw new Error(`--type は ${CONTENT_TYPES.join(" / ")}`);

mkdirSync(POSTS_DIR, { recursive: true });
let n = 1;
while (existsSync(postPath(`${date}-${String(n).padStart(2, "0")}`))) n++;
const id = `${date}-${String(n).padStart(2, "0")}`;

const cfg = loadConfig();
const post = readJson(TEMPLATE_PATH);
Object.assign(post, {
  id,
  createdAt: new Date().toISOString(),
  proposedPublishAt: `${date}T${cfg.defaultPublishTime}:00${cfg.timezoneOffset}`,
  pillar,
  contentType,
  history: [{ at: new Date().toISOString(), status: "DRAFT", note: "作成" }],
});
writeJson(postPath(id), post);

console.log(`作成しました: instagram/posts/${id}.json`);
console.log(`  柱: ${pillar} / タイプ: ${contentType} / 予定: ${post.proposedPublishAt}`);
