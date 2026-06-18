import type { ContactFormData } from "@/types";

export type LeadTemplate = "gym" | "salon" | "restaurant" | "realestate" | "tuition";

interface SubmitLeadOptions {
  template: LeadTemplate;
  businessName: string;
  data: ContactFormData;
}

const GOOGLE_APPS_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL;

export async function submitLeadToGoogleSheet({
  template,
  businessName,
  data,
}: SubmitLeadOptions) {
  if (!GOOGLE_APPS_SCRIPT_URL) {
    throw new Error("Missing NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL");
  }

  await fetch(GOOGLE_APPS_SCRIPT_URL, {
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
