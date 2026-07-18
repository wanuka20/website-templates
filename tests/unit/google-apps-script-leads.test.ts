import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";
import { describe, expect, it } from "vitest";

const scriptFiles = [
  "gym-google-apps-script.js",
  "restaurant-google-apps-script.js",
  "salon-google-apps-script.js",
  "realestate-google-apps-script.js",
  "tuition-google-apps-script.js",
];

describe.each(scriptFiles)("%s lead storage", (scriptFile) => {
  const source = readFileSync(
    new URL(`../../GoogleAppsScript/${scriptFile}`, import.meta.url),
    "utf8",
  );

  const toSheetText = (value: unknown) =>
    runInNewContext(
      `${source}\n;toSheetText(${JSON.stringify(value)})`,
      {},
      {
        filename: scriptFile,
        contextCodeGeneration: { strings: false, wasm: false },
      },
    );

  it("escapes values that Google Sheets could interpret as formulas", () => {
    expect(toSheetText("+94 77 000 0000")).toBe("'+94 77 000 0000");
    expect(toSheetText("=SUM(1, 2)")).toBe("'=SUM(1, 2)");
    expect(toSheetText("  @unsafe")).toBe("'  @unsafe");
    expect(toSheetText("Ordinary text")).toBe("Ordinary text");
  });

  it("writes the submitted phone through the text-safe helper", () => {
    expect(source).toContain('toSheetText(data.phone || "")');
    expect(source).toContain('sheet.getRange("F:F").setNumberFormat("@")');
  });
});
