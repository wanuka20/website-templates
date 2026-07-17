import { rm } from "node:fs/promises";
import { resolve } from "node:path";

const projectRoot = process.cwd();
const cacheDirectory = resolve(projectRoot, ".next", "cache");
const expectedDirectory = resolve(projectRoot, ".next", "cache");

if (cacheDirectory !== expectedDirectory) {
  throw new Error("Refusing to remove a directory outside .next/cache.");
}

await rm(cacheDirectory, { recursive: true, force: true });
console.log("Cleared local Next.js cache: .next/cache");
