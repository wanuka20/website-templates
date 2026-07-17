import fs from "node:fs/promises";
import path from "node:path";

const rawDir = path.resolve("reports/production-readiness/lighthouse/raw");
const outputPath = path.resolve("reports/production-readiness/lighthouse/summary.json");
const routeBySlug = {
  home: "/",
  templates: "/templates",
  pricing: "/pricing",
  contact: "/contact",
  "templates-gym": "/templates/gym",
  "templates-restaurant": "/templates/restaurant",
  "templates-salon": "/templates/salon",
  "templates-realestate": "/templates/realestate",
  "templates-tuition": "/templates/tuition",
};
const median = (values) => [...values].sort((a, b) => a - b)[Math.floor(values.length / 2)];
const grouped = {};

for (const filename of await fs.readdir(rawDir)) {
  const match = filename.match(/^(.*)-run-[123]\.json$/);
  if (!match) continue;
  const lhr = JSON.parse(await fs.readFile(path.join(rawDir, filename), "utf8"));
  const route = routeBySlug[match[1]];
  if (!route) continue;
  const scriptSummary = lhr.audits["resource-summary"].details.items.find(
    (item) => item.resourceType === "script",
  );
  grouped[route] ||= [];
  grouped[route].push({
    performance: Math.round((lhr.categories.performance.score || 0) * 100),
    accessibility: Math.round((lhr.categories.accessibility.score || 0) * 100),
    bestPractices: Math.round((lhr.categories["best-practices"].score || 0) * 100),
    seo: Math.round((lhr.categories.seo.score || 0) * 100),
    lcpMs: lhr.audits["largest-contentful-paint"].numericValue,
    cls: lhr.audits["cumulative-layout-shift"].numericValue,
    tbtMs: lhr.audits["total-blocking-time"].numericValue,
    scriptTransferBytes: scriptSummary?.transferSize || 0,
    scriptRequestCount: scriptSummary?.requestCount || 0,
    unusedJavaScriptBytes: (lhr.audits["unused-javascript"].details.items || [])
      .reduce((total, item) => total + (item.wastedBytes || 0), 0),
  });
}

const routes = {};
for (const [route, runs] of Object.entries(grouped)) {
  if (runs.length !== 3) throw new Error(`Expected three Lighthouse reports for ${route}.`);
  routes[route] = Object.fromEntries(
    Object.keys(runs[0]).map((key) => [key, median(runs.map((run) => run[key]))]),
  );
}

const summary = {
  generatedAt: new Date().toISOString(),
  source: "Three local production Lighthouse runs per route; values are medians.",
  routes,
};
await fs.writeFile(outputPath, JSON.stringify(summary, null, 2));
console.table(routes);
console.log(`Wrote ${outputPath}`);
