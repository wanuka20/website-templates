"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle, Loader2, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ContactFormData } from "@/types";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

interface ContactFormProps {
  className?: string;
  onSubmit?: (data: ContactFormData) => Promise<void>;
  accentColor?: string;
  light?: boolean;
}

export function ContactForm({
  className,
  onSubmit: externalSubmit,
  accentColor,
  light = false,
}: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true);
    setSubmitError("");
    try {
      if (externalSubmit) {
        await externalSubmit(data);
      } else {
        // Default: log to console. Replace with email integration (e.g. Resend, SendGrid)
        console.log("Contact form submission:", data);
        await new Promise((r) => setTimeout(r, 800)); // Simulate network
      }
      setSubmitted(true);
      reset();
    } catch (err) {
      console.error("Form submission error:", err);
      setSubmitError("Something went wrong. Please try again in a moment.");
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

  if (submitted) {
    return (
      <div className={cn("flex flex-col items-center justify-center py-12 text-center", className)}>
        <CheckCircle className={cn("mb-4 h-16 w-16", light ? "text-green-400" : "text-green-500")} />
        <h3 className={cn("text-xl font-semibold", light ? "text-white" : "text-foreground")}>
          Message Sent!
        </h3>
        <p className={cn("mt-2 text-sm", light ? "text-white/70" : "text-muted-foreground")}>
          Thank you for reaching out. We&apos;ll get back to you within 24 hours.
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
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name" className={labelClass}>
            Full Name <span className="text-red-400">*</span>
          </Label>
          <Input
            id="name"
            placeholder="John Smith"
            className={inputClass}
            {...register("name")}
          />
          {errors.name && (
            <p className={errorClass}>{errors.name.message}</p>
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
            {...register("email")}
          />
          {errors.email && (
            <p className={errorClass}>{errors.email.message}</p>
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
            Subject <span className="text-red-400">*</span>
          </Label>
          <Input
            id="subject"
            placeholder="How can we help?"
            className={inputClass}
            {...register("subject")}
          />
          {errors.subject && (
            <p className={errorClass}>{errors.subject.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className={labelClass}>
          Message <span className="text-red-400">*</span>
        </Label>
        <Textarea
          id="message"
          placeholder="Tell us more about what you need..."
          rows={5}
          className={inputClass}
          {...register("message")}
        />
        {errors.message && (
          <p className={errorClass}>{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isLoading}
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
            Send Message
          </>
        )}
      </Button>
      {submitError && (
        <p className={cn("text-sm font-medium", light ? "text-red-200" : "text-red-500")}>
          {submitError}
        </p>
      )}
    </form>
  );
}
