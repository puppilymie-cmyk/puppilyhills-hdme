// 承認を記録します。承認は現在の内容のハッシュと結びつき、内容が変わると無効になります。
// 必要な承認がすべて揃い、検査に通ると APPROVED に進みます。
//   npm run ig:approve -- <id> <review|veterinary|owner> --by <役割> --note "<承認の根拠>"
// Claude が代理で記録するのは、承認者本人が会話の中でこの投稿IDを明示して承認した場合のみです。
import { checkPost, contentHash, loadPost, postPath, requiredApprovals, writeJson } from "./lib.mjs";

const [id, role] = process.argv.slice(2);
function arg(name) {
  const i = process.argv.indexOf(`--${name}`);
  return i === -1 ? undefined : process.argv[i + 1];
}
const by = arg("by");
const note = arg("note");
if (!id || !["review", "veterinary", "owner"].includes(role) || !by || !note) {
  console.error('使い方: npm run ig:approve -- <id> <review|veterinary|owner> --by <役割> --note "<承認の根拠>"');
  process.exit(1);
}

const post = loadPost(id);
if (post.status !== "READY FOR REVIEW") {
  console.error(`承認できるのは READY FOR REVIEW の投稿のみです(現在: ${post.status})`);
  process.exit(1);
}
const ready = checkPost(post, "READY FOR REVIEW");
if (ready.errors.length) {
  console.error("内容が承認可能な状態ではありません:");
  for (const e of ready.errors) console.error(`  ✗ ${e}`);
  process.exit(1);
}
if (!requiredApprovals(post.approvalLevel).includes(role)) {
  console.log(`(注意) この投稿のレベル ${post.approvalLevel} では ${role} 承認は必須ではありませんが、記録します。`);
}

post.approvals = { ...post.approvals, [role]: { by, note, at: new Date().toISOString(), contentHash: contentHash(post) } };
post.history = [...(post.history ?? []), { at: new Date().toISOString(), status: post.status, note: `${role} 承認 (${by})` }];

const final = checkPost(post, "APPROVED");
if (!final.errors.length) {
  post.status = "APPROVED";
  post.history.push({ at: new Date().toISOString(), status: "APPROVED" });
}
writeJson(postPath(id), post);
console.log(`${id}: ${role} 承認を記録しました`);
if (final.errors.length) {
  console.log("APPROVED まで残り:");
  for (const e of final.errors) console.log(`  - ${e}`);
} else {
  console.log("すべての承認が揃いました → APPROVED");
}
