// LINEリッチメニュー画像(public/line/richmenu-large.png)を
// richmenu-large.html からPlaywrightでレンダリングして生成するスクリプト。
// 文言・配色・アイコンを変更する場合は richmenu-large.html を編集してから再実行してください。
//
//   node scripts/richmenu/generate-richmenu.mjs
import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { mkdirSync } from "node:fs";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const __dirname = dirname(fileURLToPath(import.meta.url));
const htmlPath = join(__dirname, "richmenu-large.html");
const outDir = join(__dirname, "..", "..", "public", "line");
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "richmenu-large.png");

const WIDTH = 2500;
const HEIGHT = 1686;

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: WIDTH, height: HEIGHT },
  deviceScaleFactor: 1,
});
await page.goto(pathToFileURL(htmlPath).href);
await page.screenshot({ path: outPath, type: "png" });
await browser.close();

console.log(`generated: ${outPath}`);
