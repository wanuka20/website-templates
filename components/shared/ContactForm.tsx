"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useId, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle, Loader2, Send } from "lucide-react";
import { LeadSubmissionTimeoutError } from "@/lib/googleSheets";
import { cn } from "@/lib/utils";
import type { ContactFormData } from "@/types";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  website: z.string().optional(),
});

type ContactFormValues = ContactFormData & {
  website: string;
};

export interface ContactFormSubmission {
  data: ContactFormData;
  honeypot: string;
}

interface ContactFormProps {
  className?: string;
  onSubmit?: (submission: ContactFormSubmission) => Promise<void>;
  accentColor?: string;
  light?: boolean;
  copy?: {
    subjectLabel?: string;
    subjectPlaceholder?: string;
    messageLabel?: string;
    messagePlaceholder?: string;
    submitLabel?: string;
    successTitle?: string;
    successMessage?: string;
  };
}

export function ContactForm({
  className,
  onSubmit: externalSubmit,
  accentColor,
  light = false,
  copy,
}: ContactFormProps) {
  const formId = useId();
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { website: "" },
  });

  const onSubmit = async ({ website, ...data }: ContactFormValues) => {
    setIsLoading(true);
    setSubmitError("");
    try {
      if (externalSubmit) {
        await externalSubmit({ data, honeypot: website });
      } else {
        // Default: log to console. Replace with email integration (e.g. Resend, SendGrid)
        console.log("Contact form submission:", data);
        await new Promise((r) => setTimeout(r, 800)); // Simulate network
      }
      setSubmitted(true);
      reset();
    } catch (err) {
      console.error("Form submission error:", err);
      setSubmitError(
        err instanceof LeadSubmissionTimeoutError
          ? "This is taking longer than expected. Please try again."
          : "Something went wrong. Please try again in a moment.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const inputClass = cn(
    light &&
      "border-white/20 bg-white/10 text-white placeholder:text-white/50 focus-visible:ring-white"
  );
  const labelClass = cn(light && "text-white/80");
  const errorClass = "text-red-400 text-sm mt-1";
  const errorId = (field: string) => `${formId}-${field}-error`;

  if (submitted) {
    return (
      <div role="status" aria-live="polite" className={cn("flex flex-col items-center justify-center py-12 text-center", className)}>
        <CheckCircle className={cn("mb-4 h-16 w-16", light ? "text-green-400" : "text-green-500")} />
        <h3 className={cn("text-xl font-semibold", light ? "text-white" : "text-foreground")}>
          {copy?.successTitle ?? "Message Sent!"}
        </h3>
        <p className={cn("mt-2 text-sm", light ? "text-white/70" : "text-muted-foreground")}>
          {copy?.successMessage ??
            "Thank you for reaching out. We'll get back to you within 24 hours."}
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setSubmitted(false)}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("space-y-5", className)}
    >
      <div aria-hidden="true" className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden">
        <Label htmlFor="website">Website</Label>
        <Input
          id="website"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name" className={labelClass}>
            Full Name <span className="text-red-400">*</span>
          </Label>
          <Input
            id="name"
            placeholder="John Smith"
            className={inputClass}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? errorId("name") : undefined}
            {...register("name")}
          />
          {errors.name && (
            <p id={errorId("name")} role="alert" className={errorClass}>{errors.name.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className={labelClass}>
            Email Address <span className="text-red-400">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            className={inputClass}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? errorId("email") : undefined}
            {...register("email")}
          />
          {errors.email && (
            <p id={errorId("email")} role="alert" className={errorClass}>{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="phone" className={labelClass}>
            Phone Number
          </Label>
          <Input
            id="phone"
            placeholder="+94 77 123 4567"
            className={inputClass}
            {...register("phone")}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="subject" className={labelClass}>
            {copy?.subjectLabel ?? "Subject"} <span className="text-red-400">*</span>
          </Label>
          <Input
            id="subject"
            placeholder={copy?.subjectPlaceholder ?? "How can we help?"}
            className={inputClass}
            aria-invalid={errors.subject ? true : undefined}
            aria-describedby={errors.subject ? errorId("subject") : undefined}
            {...register("subject")}
          />
          {errors.subject && (
            <p id={errorId("subject")} role="alert" className={errorClass}>{errors.subject.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className={labelClass}>
          {copy?.messageLabel ?? "Message"} <span className="text-red-400">*</span>
        </Label>
        <Textarea
          id="message"
          placeholder={copy?.messagePlaceholder ?? "Tell us more about what you need..."}
          rows={5}
          className={inputClass}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? errorId("message") : undefined}
          {...register("message")}
        />
        {errors.message && (
          <p id={errorId("message")} role="alert" className={errorClass}>{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isLoading}
        aria-busy={isLoading || undefined}
        className="w-full gap-2"
        style={accentColor ? { backgroundColor: accentColor, borderColor: accentColor } : undefined}
      >
        {isLoading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            {copy?.submitLabel ?? "Send Message"}
          </>
        )}
      </Button>
      {submitError && (
        <p role="alert" aria-live="assertive" className={cn("text-sm font-medium", light ? "text-red-200" : "text-red-500")}>
          {submitError}
        </p>
      )}
    </form>
  );
}
