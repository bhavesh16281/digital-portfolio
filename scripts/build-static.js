import { copyFileSync, existsSync, renameSync, mkdirSync } from "fs";
import { join } from "path";

const dist = "dist-spa";
const finalIndex = join(dist, "index.html");
const nested = join(dist, "spa", "index.html");

if (!existsSync(finalIndex) && existsSync(nested)) {
  mkdirSync(dist, { recursive: true });
  renameSync(nested, finalIndex);
  console.log(`Moved ${nested} → ${finalIndex}`);
}

if (!existsSync(finalIndex)) {
  console.error(`Missing ${finalIndex}`);
  process.exit(1);
}

copyFileSync(finalIndex, join(dist, "404.html"));
console.log(`Wrote ${join(dist, "404.html")}`);
