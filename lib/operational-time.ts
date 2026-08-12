export const CANONICAL_TIME_ZONE = "UTC";
export const OPERATIONAL_TIME_ZONE = "Asia/Colombo";

function asValidDate(value: Date | string | number) {
  const date = value instanceof Date ? new Date(value.getTime()) : new Date(value);

  if (Number.isNaN(date.getTime())) {
    throw new RangeError("Invalid timestamp");
  }

  if (
    typeof value === "string"
    && !/(?:z|[+-]\d{2}:?\d{2})$/i.test(value.trim())
  ) {
    throw new RangeError("Timestamp strings must include Z or a UTC offset");
  }

  return date;
}

export function toCanonicalUtcTimestamp(value: Date | string | number) {
  return asValidDate(value).toISOString();
}

export function formatOperationalTimestamp(value: Date | string | number) {
  const formatter = new Intl.DateTimeFormat("en-CA-u-ca-iso8601", {
    timeZone: OPERATIONAL_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
    timeZoneName: "longOffset",
  });
  const parts = Object.fromEntries(
    formatter
      .formatToParts(asValidDate(value))
      .filter((part) => part.type !== "literal")
      .map((part) => [part.type, part.value]),
  );
  const offset = parts.timeZoneName?.replace("GMT", "");

  if (!offset) {
    throw new RangeError("Unable to resolve the Asia/Colombo UTC offset");
  }

  return `${parts.year}-${parts.month}-${parts.day} ${parts.hour}:${parts.minute}:${parts.second} ${offset}`;
}
