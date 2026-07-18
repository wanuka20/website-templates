import type { ContactFormData } from "@/types";

export type LeadTemplate = "gym" | "salon" | "restaurant" | "realestate" | "tuition";

const DEFAULT_LEAD_SUBMISSION_TIMEOUT_MS = 15_000;

export class LeadSubmissionTimeoutError extends Error {
  constructor() {
    super("The message request timed out.");
    this.name = "LeadSubmissionTimeoutError";
  }
}

interface SubmitLeadOptions {
  template: LeadTemplate;
  businessName: string;
  data: ContactFormData;
}

function getLeadSubmissionTimeoutMs() {
  const configuredValue = Number(
    process.env.NEXT_PUBLIC_LEAD_SUBMISSION_TIMEOUT_MS ??
      DEFAULT_LEAD_SUBMISSION_TIMEOUT_MS,
  );

  return Number.isInteger(configuredValue) && configuredValue > 0
    ? configuredValue
    : DEFAULT_LEAD_SUBMISSION_TIMEOUT_MS;
}

export async function submitLeadToGoogleSheet({
  template,
  businessName,
  data,
}: SubmitLeadOptions) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), getLeadSubmissionTimeoutMs());

  let response: Response;

  try {
    response = await fetch("/api/leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
      signal: controller.signal,
    });
  } catch (error) {
    if (controller.signal.aborted) {
      throw new LeadSubmissionTimeoutError();
    }

    throw error;
  } finally {
    clearTimeout(timeout);
  }

  let payload: unknown;

  try {
    payload = await response.json();
  } catch {
    throw new Error("The message service returned an invalid response.");
  }

  if (
    !response.ok ||
    !payload ||
    typeof payload !== "object" ||
    !("ok" in payload) ||
    payload.ok !== true
  ) {
    throw new Error("The message could not be sent.");
  }
}
