import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";
import { describe, expect, it } from "vitest";

const scripts = [
  ["gym-google-apps-script.js", "editorial"],
  ["restaurant-google-apps-script.js", "default"],
  ["salon-google-apps-script.js", "liquid-glass"],
  ["realestate-google-apps-script.js", "default"],
  ["tuition-google-apps-script.js", "default"],
] as const;

describe.each(scripts)("%s theme setting", (scriptFile, expectedTheme) => {
  it("includes the Theme Template row in Settings - Brand", () => {
    const source = readFileSync(
      new URL(`../../GoogleAppsScript/${scriptFile}`, import.meta.url),
      "utf8",
    );
    const rowJson = runInNewContext(
      `${source}
      ;JSON.stringify(
        SETTINGS_SHEETS
          .find((sheet) => sheet.name === "Settings - Brand")
          .rows.find((row) => row[1] === "themeTemplate")
      )`,
      {},
      {
        filename: scriptFile,
        contextCodeGeneration: { strings: false, wasm: false },
      },
    );

    expect(JSON.parse(rowJson).slice(0, 4)).toEqual([
      "Theme",
      "themeTemplate",
      "Theme Template",
      expectedTheme,
    ]);
  });
});
