/**
 * Creates a Google Maps search destination for a displayed address.
 * Returns undefined when there is no usable location, so callers can render
 * the contact detail as plain text instead of a misleading link.
 */
export function getGoogleMapsSearchUrl(...parts: Array<string | undefined>): string | undefined {
  const query = parts
    .map((part) => part?.trim())
    .filter((part): part is string => Boolean(part))
    .join(", ");

  if (!query) {
    return undefined;
  }

  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
