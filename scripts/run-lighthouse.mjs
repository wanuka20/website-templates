import fs from "node:fs/promises";
import path from "node:path";
import { spawn } from "node:child_process";
import lighthouse from "lighthouse";
import { launch } from "chrome-launcher";

const baseURL = process.env.LIGHTHOUSE_BASE_URL || "http://127.0.0.1:3100";
const routes = [
  "/",
  "/templates",
  "/pricing",
  "/contact",
  "/templates/gym",
  "/templates/restaurant",
  "/templates/salon",
  "/templates/realestate",
  "/templates/tuition",
];
const outputDir = path.resolve("reports/production-readiness/lighthouse/raw");
await fs.mkdir(outputDir, { recursive: true });

const nextCli = path.resolve("node_modules/next/dist/bin/next");
const server = process.env.LIGHTHOUSE_SKIP_SERVER
  ? null
  : spawn(process.execPath, [nextCli, "start", "-H", "127.0.0.1", "-p", "3100"], {
      stdio: "ignore",
      env: process.env,
    });

async function waitForServer() {
  const deadline = Date.now() + 120_000;
  while (Date.now() < deadline) {
    try {
      if ((await fetch(baseURL)).ok) return;
    } catch {
      // Still starting.
    }
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error(`Production server did not become ready at ${baseURL}.`);
}

const median = (values) => [...values].sort((a, b) => a - b)[Math.floor(values.length / 2)];
const summary = {};
await waitForServer();
const chrome = await launch({ chromeFlags: ["--headless", "--no-sandbox"] });

try {
  for (const route of routes) {
    const slug = route === "/" ? "home" : route.slice(1).replaceAll("/", "-");
    const runs = [];
    await fetch(`${baseURL}${route}`);

    for (let run = 1; run <= 3; run += 1) {
      const result = await lighthouse(`${baseURL}${route}`, {
        port: chrome.port,
        output: "json",
        logLevel: "error",
        onlyCategories: ["performance", "accessibility", "best-practices", "seo"],
      });
      if (!result?.lhr || !result.report) throw new Error(`Lighthouse failed for ${route}`);
      const report = Array.isArray(result.report) ? result.report[0] : result.report;
      await fs.writeFile(path.join(outputDir, `${slug}-run-${run}.json`), report);
      const scriptSummary = result.lhr.audits["resource-summary"].details.items.find(
        (item) => item.resourceType === "script",
      );
      runs.push({
        performance: Math.round((result.lhr.categories.performance.score || 0) * 100),
        accessibility: Math.round((result.lhr.categories.accessibility.score || 0) * 100),
        bestPractices: Math.round((result.lhr.categories["best-practices"].score || 0) * 100),
        seo: Math.round((result.lhr.categories.seo.score || 0) * 100),
        lcpMs: result.lhr.audits["largest-contentful-paint"].numericValue,
        cls: result.lhr.audits["cumulative-layout-shift"].numericValue,
        tbtMs: result.lhr.audits["total-blocking-time"].numericValue,
        scriptTransferBytes: scriptSummary?.transferSize || 0,
        scriptRequestCount: scriptSummary?.requestCount || 0,
        unusedJavaScriptBytes: (result.lhr.audits["unused-javascript"].details.items || [])
          .reduce((total, item) => total + (item.wastedBytes || 0), 0),
      });
    }

    summary[route] = Object.fromEntries(
      Object.keys(runs[0]).map((key) => [key, median(runs.map((run) => run[key]))]),
    );
  }
} finally {
  try {
    await chrome.kill();
  } catch (error) {
    console.warn(`Chrome cleanup warning: ${error.message}`);
  } finally {
    server?.kill();
  }
}

await fs.writeFile(
  path.resolve("reports/production-readiness/lighthouse/summary.json"),
  JSON.stringify({ generatedAt: new Date().toISOString(), baseURL, routes: summary }, null, 2),
);
console.table(summary);
