import { spawn } from "node:child_process";
import path from "node:path";

const child = spawn(
  process.execPath,
  [
    path.resolve("scripts/run-playwright.mjs"),
    "tests/e2e/live-leads.spec.ts",
    "--project=chromium",
    "--workers=1",
  ],
  {
    stdio: "inherit",
    env: { ...process.env, RUN_PRODUCTION_LEAD_TESTS: "1" },
  },
);

child.on("exit", (code) => process.exit(code ?? 1));
