import type { ContactFormData } from "@/types";

export type LeadTemplate = "gym" | "salon" | "restaurant" | "realestate" | "tuition";

interface SubmitLeadOptions {
  template: LeadTemplate;
  businessName: string;
  data: ContactFormData;
}

const GOOGLE_APPS_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL;
const TEMPLATE_GOOGLE_APPS_SCRIPT_URLS: Partial<Record<LeadTemplate, string | undefined>> = {
  gym: process.env.NEXT_PUBLIC_GYM_GOOGLE_APPS_SCRIPT_URL,
  salon: process.env.NEXT_PUBLIC_SALON_GOOGLE_APPS_SCRIPT_URL,
  restaurant: process.env.NEXT_PUBLIC_RESTAURANT_GOOGLE_APPS_SCRIPT_URL,
  realestate: process.env.NEXT_PUBLIC_REALESTATE_GOOGLE_APPS_SCRIPT_URL,
  tuition: process.env.NEXT_PUBLIC_TUITION_GOOGLE_APPS_SCRIPT_URL,
};

export async function submitLeadToGoogleSheet({
  template,
  businessName,
  data,
}: SubmitLeadOptions) {
  const webAppUrl = TEMPLATE_GOOGLE_APPS_SCRIPT_URLS[template] || GOOGLE_APPS_SCRIPT_URL;

  if (!webAppUrl) {
    throw new Error(`Missing Google Apps Script URL for ${template}`);
  }

  await fetch(webAppUrl, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
    body: JSON.stringify({
      template,
      businessName,
      sourcePage:
        typeof window !== "undefined"
          ? window.location.pathname
          : "",
      ...data,
    }),
  });
}
