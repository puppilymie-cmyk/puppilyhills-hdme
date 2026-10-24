// 投稿パッケージを検査します。引数なしで全投稿、IDを渡すとその投稿のみ。
//   npm run ig:check [-- 2026-10-25-01] [--as "READY FOR REVIEW"]
import { checkPost, loadAllPosts, loadPost, requiredApprovals, requiredLevel } from "./lib.mjs";

const args = process.argv.slice(2);
const asIdx = args.indexOf("--as");
const target = asIdx === -1 ? undefined : args[asIdx + 1];
const ids = args.filter((a, i) => !a.startsWith("--") && (asIdx === -1 || i !== asIdx + 1));
const posts = ids.length ? ids.map(loadPost) : loadAllPosts();

let failed = 0;
for (const post of posts) {
  const status = target ?? post.status;
  const { errors, warnings } = checkPost(post, status);
  const mark = errors.length ? "NG" : "OK";
  console.log(`\n[${mark}] ${post.id}  (${status} として検査 / 必要レベル: ${requiredLevel(post)} / 必要承認: ${requiredApprovals(post.approvalLevel).join(", ")})`);
  for (const e of errors) console.log(`  ✗ ${e}`);
  for (const w of warnings) console.log(`  ! ${w}`);
  if (errors.length) failed++;
}
if (!posts.length) console.log("投稿はまだありません。npm run ig:new で作成してください。");
console.log(`\n${posts.length} 件中 ${failed} 件にエラー`);
process.exit(failed ? 1 : 0);
