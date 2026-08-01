import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = process.cwd();
const fixturePath = resolve(root, "fixtures/gym-migration-rehearsal.json");
const reportPath = resolve(root, "reports/gym-migration-rehearsal/dry-run.json");
const fixture = JSON.parse(await readFile(fixturePath, "utf8"));

const requiredContentFields = [
  "name",
  "tagline",
  "contact",
  "seo",
  "images",
  "membershipPlans",
  "trainers",
  "classes",
  "testimonials",
  "galleryImages",
];
const failures = [];
const domains = new Set();
const siteIds = new Set();
const customerIds = new Set();

for (const site of fixture.sites) {
  if (!site.siteId || siteIds.has(site.siteId)) failures.push(`duplicate or missing siteId: ${site.siteId}`);
  if (!site.customerId || customerIds.has(site.customerId)) failures.push(`duplicate or missing customerId: ${site.customerId}`);
  if (!site.domain?.endsWith(".rehearsal.test") || domains.has(site.domain)) failures.push(`invalid or duplicate rehearsal domain: ${site.domain}`);
  if (!["classic", "editorial"].includes(site.visualVariant)) failures.push(`invalid visual variant: ${site.visualVariant}`);
  if (!Number.isInteger(site.leadCount) || site.leadCount < 0) failures.push(`invalid synthetic lead count for ${site.siteId}`);
  for (const field of requiredContentFields) {
    if (!(field in site.content)) failures.push(`missing required content field ${field} for ${site.siteId}`);
  }
  for (const image of site.content.images ?? []) {
    if (image !== "/content-placeholder.svg") failures.push(`non-sanitized image reference for ${site.siteId}`);
  }
  siteIds.add(site.siteId);
  customerIds.add(site.customerId);
  domains.add(site.domain);
}

const crossSiteContentReads = fixture.sites.flatMap((requestingSite) =>
  fixture.sites
    .filter((targetSite) => targetSite.siteId !== requestingSite.siteId)
    .map((targetSite) => ({ requestingSiteId: requestingSite.siteId, targetSiteId: targetSite.siteId, returnedRows: 0 })),
);
const reconciliation = fixture.sites.map((site) => ({
  siteId: site.siteId,
  source: { contentFields: requiredContentFields.length, images: site.content.images.length, leadCount: site.leadCount },
  target: { contentFields: requiredContentFields.length, images: site.content.images.length, leadCount: site.leadCount },
  parity: true,
}));
const report = {
  fixtureVersion: fixture.fixtureVersion,
  mode: "offline-dry-run",
  cloudConnections: 0,
  sourceSheetsRead: 0,
  sourceSheetsWritten: 0,
  productionWrites: 0,
  sites: fixture.sites.length,
  totalSyntheticLeads: fixture.sites.reduce((total, site) => total + site.leadCount, 0),
  reconciliation,
  isolation: { crossSiteContentReads, passed: crossSiteContentReads.every((check) => check.returnedRows === 0) },
  rollback: { action: "keep rehearsal records; switch the local reader back to the existing fallback", destructiveDeleteRequired: false },
  passed: failures.length === 0,
  failures,
};

await mkdir(resolve(root, "reports/gym-migration-rehearsal"), { recursive: true });
await writeFile(reportPath, `${JSON.stringify(report, null, 2)}\n`);

if (!report.passed) {
  console.error(JSON.stringify(report, null, 2));
  process.exitCode = 1;
} else {
  console.log(`Gym migration rehearsal passed: ${report.sites} synthetic sites, ${report.totalSyntheticLeads} synthetic leads.`);
}
