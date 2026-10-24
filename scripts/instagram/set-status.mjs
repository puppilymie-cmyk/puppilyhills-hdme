// 投稿の状態を進めます。検査に通らない場合は変更しません。
//   npm run ig:status -- 2026-10-25-01 "READY FOR REVIEW"
//   npm run ig:status -- 2026-10-25-01 PUBLISHED --url https://... --asset-version v1
import { STATUSES, checkPost, loadConfig, loadPost, postPath, writeJson } from "./lib.mjs";

const [id, status] = process.argv.slice(2);
if (!id || !STATUSES.includes(status)) {
  console.error(`使い方: npm run ig:status -- <id> "<${STATUSES.join(" | ")}>"`);
  process.exit(1);
}
function arg(name) {
  const i = process.argv.indexOf(`--${name}`);
  return i === -1 ? undefined : process.argv[i + 1];
}

const post = loadPost(id);
const from = STATUSES.indexOf(post.status);
const to = STATUSES.indexOf(status);
if (to > from + 1) {
  console.error(`${post.status} から ${status} へは飛ばせません。順番に進めてください。`);
  process.exit(1);
}
if (status === "APPROVED") {
  console.error("APPROVED へは npm run ig:approve で承認を記録すると自動で進みます。");
  process.exit(1);
}
if (to >= STATUSES.indexOf("SCHEDULED") && !loadConfig().publishingEnabled) {
  console.error("config.json の publishingEnabled が false(停止スイッチ)のため、予約・公開に進めません。");
  process.exit(1);
}
if (status === "PUBLISHED") {
  post.publication = {
    url: arg("url") ?? post.publication?.url ?? "",
    publishedAt: arg("published-at") ?? post.publication?.publishedAt ?? new Date().toISOString(),
    assetVersion: arg("asset-version") ?? post.publication?.assetVersion ?? "",
  };
}

const { errors, warnings } = checkPost(post, status);
for (const w of warnings) console.log(`! ${w}`);
if (errors.length) {
  console.error(`${status} に進めません:`);
  for (const e of errors) console.error(`  ✗ ${e}`);
  process.exit(1);
}
post.status = status;
post.history = [...(post.history ?? []), { at: new Date().toISOString(), status }];
writeJson(postPath(id), post);
console.log(`${id}: ${STATUSES[from]} → ${status}`);
