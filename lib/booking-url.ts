export function resolveBookingUrl(value?: string) {
  const candidate = value?.trim();

  if (!candidate) {
    return "#contact";
  }

  // Earlier Salon sheets used #booking before a booking section existed.
  // Keep those existing sheets working while directing visitors to the contact form.
  if (candidate === "#booking") {
    return "#contact";
  }

  if (candidate.startsWith("#")) {
    return candidate;
  }

  try {
    const url = new URL(candidate);
    return url.protocol === "https:" || url.protocol === "http:"
      ? url.toString()
      : "#contact";
  } catch {
    return "#contact";
  }
}

export function isExternalBookingUrl(url: string) {
  return url.startsWith("https://") || url.startsWith("http://");
}
