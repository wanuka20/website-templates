import { spawn } from "node:child_process";
import path from "node:path";

const baseURL = process.env.PLAYWRIGHT_BASE_URL || "http://127.0.0.1:3100";
const nextCli = path.resolve("node_modules/next/dist/bin/next");
const playwrightCli = path.resolve("node_modules/@playwright/test/cli.js");
const server = spawn(process.execPath, [nextCli, "start", "-H", "127.0.0.1", "-p", "3100"], {
  stdio: "ignore",
  env: process.env,
});

async function waitForServer() {
  const deadline = Date.now() + 120_000;
  while (Date.now() < deadline) {
    try {
      const response = await fetch(baseURL);
      if (response.ok) return;
    } catch {
      // The production server is still starting.
    }
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error(`Production server did not become ready at ${baseURL}.`);
}

function runPlaywright() {
  return new Promise((resolve) => {
    const child = spawn(process.execPath, [playwrightCli, "test", ...process.argv.slice(2)], {
      stdio: "inherit",
      env: {
        ...process.env,
        PLAYWRIGHT_BASE_URL: baseURL,
        PLAYWRIGHT_SKIP_WEBSERVER: "1",
      },
    });
    child.on("exit", (code) => resolve(code ?? 1));
  });
}

let exitCode = 1;
try {
  await waitForServer();
  exitCode = await runPlaywright();
} finally {
  server.kill();
}
process.exit(exitCode);
