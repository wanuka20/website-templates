import { NextResponse } from "next/server";
import { z } from "zod";

const leadTemplates = [
  "gym",
  "salon",
  "restaurant",
  "realestate",
  "tuition",
] as const;

type LeadTemplate = (typeof leadTemplates)[number];

const leadSchema = z.object({
  template: z.enum(leadTemplates),
  businessName: z.string().trim().min(1).max(200),
  sourcePage: z.string().trim().startsWith("/").max(300),
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().max(50).optional(),
  subject: z.string().trim().min(3).max(200),
  message: z.string().trim().min(10).max(5_000),
  website: z.string().optional(),
});

const honeypotSchema = z.object({
  website: z.string().optional(),
}).passthrough();

const templateEnvironmentKeys: Record<LeadTemplate, string> = {
  gym: "GYM_GOOGLE_SHEET_WEB_APP_URL",
  salon: "SALON_GOOGLE_SHEET_WEB_APP_URL",
  restaurant: "RESTAURANT_GOOGLE_SHEET_WEB_APP_URL",
  realestate: "REALESTATE_GOOGLE_SHEET_WEB_APP_URL",
  tuition: "TUITION_GOOGLE_SHEET_WEB_APP_URL",
};

const legacyTemplateEnvironmentKeys: Record<LeadTemplate, string> = {
  gym: "NEXT_PUBLIC_GYM_GOOGLE_APPS_SCRIPT_URL",
  salon: "NEXT_PUBLIC_SALON_GOOGLE_APPS_SCRIPT_URL",
  restaurant: "NEXT_PUBLIC_RESTAURANT_GOOGLE_APPS_SCRIPT_URL",
  realestate: "NEXT_PUBLIC_REALESTATE_GOOGLE_APPS_SCRIPT_URL",
  tuition: "NEXT_PUBLIC_TUITION_GOOGLE_APPS_SCRIPT_URL",
};

function getAppsScriptUrl(template: LeadTemplate) {
  return (
    process.env[templateEnvironmentKeys[template]] ||
    process.env.GOOGLE_SHEET_WEB_APP_URL ||
    process.env[legacyTemplateEnvironmentKeys[template]] ||
    process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL
  );
}

function isAllowedAppsScriptUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" && url.hostname === "script.google.com";
  } catch {
    return false;
  }
}

function upstreamFailure(template: LeadTemplate, reason: string, status?: number) {
  console.error("Lead submission upstream failure", {
    template,
    reason,
    ...(status ? { status } : {}),
  });

  return NextResponse.json(
    { ok: false, error: "The message service is temporarily unavailable." },
    { status: 502 },
  );
}

export async function POST(request: Request) {
  let requestBody: unknown;

  try {
    requestBody = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  const honeypot = honeypotSchema.safeParse(requestBody);

  if (honeypot.success && honeypot.data.website?.trim()) {
    return NextResponse.json({ ok: true });
  }

  const parsed = leadSchema.safeParse(requestBody);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Please check the submitted form fields." },
      { status: 400 },
    );
  }

  const { website, ...lead } = parsed.data;
  const { template } = lead;

  if (website?.trim()) {
    return NextResponse.json({ ok: true });
  }

  const webAppUrl = getAppsScriptUrl(template);

  if (!webAppUrl || !isAllowedAppsScriptUrl(webAppUrl)) {
    console.error("Lead submission configuration error", { template });
    return NextResponse.json(
      { ok: false, error: "The message service is not configured." },
      { status: 503 },
    );
  }

  let response: Response;

  try {
    response = await fetch(webAppUrl, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(lead),
      cache: "no-store",
      redirect: "follow",
    });
  } catch {
    return upstreamFailure(template, "network-error");
  }

  if (!response.ok) {
    return upstreamFailure(template, "http-error", response.status);
  }

  let payload: unknown;

  try {
    payload = await response.json();
  } catch {
    return upstreamFailure(template, "invalid-json");
  }

  if (
    !payload ||
    typeof payload !== "object" ||
    !("ok" in payload) ||
    payload.ok !== true
  ) {
    return upstreamFailure(template, "rejected-response");
  }

  return NextResponse.json({ ok: true });
}
