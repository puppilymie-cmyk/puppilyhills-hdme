// 投稿の状況一覧と、直近の柱バランスを表示します。
// --export を付けると、APPROVED の投稿を予約用にまとめて instagram/out/ に書き出します。
//   npm run ig:queue [-- --export]
import { mkdirSync } from "node:fs";
import { join } from "node:path";
import { IG_DIR, PILLARS, STATUSES, checkPost, loadAllPosts, loadConfig, writeJson } from "./lib.mjs";

const posts = loadAllPosts();
for (const status of STATUSES) {
  const group = posts.filter((p) => p.status === status);
  console.log(`\n■ ${status} (${group.length})`);
  for (const p of group) {
    const { errors } = checkPost(p);
    const flag = errors.length ? `  ⚠ 要対応 ${errors.length} 件` : "";
    console.log(`  ${p.id}  ${p.proposedPublishAt}  [${p.pillar} / ${p.contentType}] ${p.approvalLevel}${flag}`);
  }
}

const recent = posts.slice(-14);
console.log(`\n■ 直近 ${recent.length} 件の柱バランス`);
for (const pillar of PILLARS) {
  console.log(`  ${pillar.padEnd(8, "　")} ${"●".repeat(recent.filter((p) => p.pillar === pillar).length)}`);
}

if (process.argv.includes("--export")) {
  if (!loadConfig().publishingEnabled) {
    console.error("\nconfig.json の publishingEnabled が false(停止スイッチ)のため、書き出しません。");
    process.exit(1);
  }
  const approved = posts.filter((p) => p.status === "APPROVED" && !checkPost(p, "APPROVED").errors.length);
  const outDir = join(IG_DIR, "out");
  mkdirSync(outDir, { recursive: true });
  const file = join(outDir, "schedule.json");
  writeJson(
    file,
    approved.map((p) => ({
      id: p.id,
      publishAt: p.proposedPublishAt,
      caption: [p.caption, p.hashtags.map((h) => (h.startsWith("#") ? h : `#${h}`)).join(" ")].filter(Boolean).join("\n\n"),
      thumbnailText: p.thumbnailText,
      assets: p.assets.map((a) => a.ref),
      usesAvatar: p.usesAvatar,
    })),
  );
  console.log(`\n予約用に ${approved.length} 件を書き出しました: instagram/out/schedule.json`);
}
