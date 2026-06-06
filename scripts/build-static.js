import { copyFileSync, existsSync } from "fs";
import { join } from "path";

// Copy index.html to 404.html so GitHub Pages serves the SPA shell for
// deep links / refreshes on unknown paths.
const dist = "dist-spa";
const src = join(dist, "index.html");
const dst = join(dist, "404.html");

if (!existsSync(src)) {
  console.error(`Missing ${src}`);
  process.exit(1);
}

copyFileSync(src, dst);
console.log(`Wrote ${dst}`);
