import { spawn } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";

const baseURL = process.env.PROBE_BASE_URL || "http://127.0.0.1:3100";
const nextCli = path.resolve("node_modules/next/dist/bin/next");
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
const templateRoutes = routes.filter((route) => route.startsWith("/templates/"));
const server = spawn(process.execPath, [nextCli, "start", "-H", "127.0.0.1", "-p", "3100"], {
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
const output = {
  generatedAt: new Date().toISOString(),
  baseURL,
  headers: {},
  timings: {},
  postRefreshCache: {},
  imageCache: {},
};

try {
  await waitForServer();
  for (const route of routes) {
    const response = await fetch(`${baseURL}${route}`);
    await response.arrayBuffer();
    output.headers[route] = {
      status: response.status,
      cacheControl: response.headers.get("cache-control"),
      contentSecurityPolicy: response.headers.get("content-security-policy"),
      strictTransportSecurity: response.headers.get("strict-transport-security"),
      xFrameOptions: response.headers.get("x-frame-options"),
      xContentTypeOptions: response.headers.get("x-content-type-options"),
      referrerPolicy: response.headers.get("referrer-policy"),
      permissionsPolicy: response.headers.get("permissions-policy"),
      nextCache: response.headers.get("x-nextjs-cache"),
    };
  }

  for (const route of templateRoutes) {
    await fetch(`${baseURL}${route}`);
    const runs = [];
    for (let index = 0; index < 5; index += 1) {
      const start = performance.now();
      const response = await fetch(`${baseURL}${route}`);
      await response.arrayBuffer();
      runs.push(Math.round((performance.now() - start) * 10) / 10);
    }
    output.timings[route] = { runsMs: runs, medianMs: median(runs) };
  }

  await new Promise((resolve) => setTimeout(resolve, 12_000));
  for (const route of templateRoutes) {
    const response = await fetch(`${baseURL}${route}`);
    await response.arrayBuffer();
    output.postRefreshCache[route] = response.headers.get("x-nextjs-cache");
  }

  const localImage = "/placeholder_images/gym-adminsheet/settings-brand-d12.jpg";
  const imageRequests = {
    direct: localImage,
    optimized: `/_next/image?url=${encodeURIComponent(localImage)}&w=1200&q=75`,
    versioned: `/_next/image?url=${encodeURIComponent("/placeholder_images/gym-adminsheet/settings-brand-d12-v2.jpg")}&w=1200&q=75`,
  };
  for (const [name, requestPath] of Object.entries(imageRequests)) {
    const first = await fetch(`${baseURL}${requestPath}`);
    await first.arrayBuffer();
    const second = await fetch(`${baseURL}${requestPath}`);
    await second.arrayBuffer();
    output.imageCache[name] = {
      path: requestPath,
      status: second.status,
      cacheControl: second.headers.get("cache-control"),
      etag: second.headers.get("etag"),
      nextCache: second.headers.get("x-nextjs-cache"),
      age: second.headers.get("age"),
    };
  }

  const apiResponse = await fetch(`${baseURL}/api/gym-content`);
  output.api = { status: apiResponse.status, body: await apiResponse.json() };
  const missingResponse = await fetch(`${baseURL}/__production_readiness_missing_route__`);
  output.notFoundStatus = missingResponse.status;

  const outputPath = path.resolve("reports/production-readiness/production-probes.json");
  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, JSON.stringify(output, null, 2));
  console.table(output.timings);
  console.log(`Wrote ${outputPath}`);
} finally {
  server.kill();
}
