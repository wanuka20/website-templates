import { describe, expect, it } from "vitest";
import {
  CANONICAL_TIME_ZONE,
  formatOperationalTimestamp,
  OPERATIONAL_TIME_ZONE,
  toCanonicalUtcTimestamp,
} from "@/lib/operational-time";

describe("operational timestamps", () => {
  it("stores equivalent inputs as the same canonical UTC timestamp", () => {
    expect(CANONICAL_TIME_ZONE).toBe("UTC");
    expect(toCanonicalUtcTimestamp("2026-08-02T00:30:00+05:30")).toBe(
      "2026-08-01T19:00:00.000Z",
    );
    expect(toCanonicalUtcTimestamp(new Date("2026-08-01T19:00:00Z"))).toBe(
      "2026-08-01T19:00:00.000Z",
    );
  });

  it("displays the operational date across Colombo midnight", () => {
    expect(OPERATIONAL_TIME_ZONE).toBe("Asia/Colombo");
    expect(formatOperationalTimestamp("2026-08-01T18:29:59Z")).toBe(
      "2026-08-01 23:59:59 +05:30",
    );
    expect(formatOperationalTimestamp("2026-08-01T18:30:00Z")).toBe(
      "2026-08-02 00:00:00 +05:30",
    );
  });

  it("rejects invalid timestamps instead of displaying misleading dates", () => {
    expect(() => toCanonicalUtcTimestamp("not-a-date")).toThrow(
      "Invalid timestamp",
    );
    expect(() => formatOperationalTimestamp(Number.NaN)).toThrow(
      "Invalid timestamp",
    );
  });

  it("rejects timezone-less strings instead of using the machine timezone", () => {
    expect(() => toCanonicalUtcTimestamp("2026-08-02 00:30:00")).toThrow(
      "Timestamp strings must include Z or a UTC offset",
    );
    expect(() => formatOperationalTimestamp("2026-08-02")).toThrow(
      "Timestamp strings must include Z or a UTC offset",
    );
  });
});
