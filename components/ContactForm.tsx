"use client";

import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormData } from "@/lib/schemas/contact";
import { Turnstile } from '@marsidev/react-turnstile';

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [serverError, setServerError] = useState<string | null>(null);
  const turnstileRef = useRef<any>(null);
  const [turnstileToken, setTurnstileToken] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    if (!turnstileToken) {
      setServerError("Please complete the security check.");
      return;
    }

    setStatus("submitting");
    setServerError(null);

    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("subject", data.subject);
    formData.append("description", data.description);
    formData.append("turnstileToken", turnstileToken);
    formData.append("company", ""); // Honeypot

    if (data.attachment && data.attachment instanceof FileList && data.attachment.length > 0) {
      formData.append("attachment", data.attachment[0]);
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit form");
      }

      setStatus("success");
      reset();
      if (turnstileRef.current) turnstileRef.current.reset();
      
    } catch (error) {
      setStatus("error");
      setServerError(error instanceof Error ? error.message : "An unexpected error occurred");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-paper border border-oxford/10 p-8 text-center rounded-lg h-full flex flex-col justify-center">
        <h3 className="text-xl font-medium text-oxford mb-4">Message Sent</h3>
        <p className="text-oxford/70 mb-6">
          Thank you for your inquiry. I review new matters daily and will respond if there is a potential fit for representation.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-sm font-bold uppercase tracking-widest text-bronze hover:text-oxford transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      
      {/* Honeypot */}
      <input
        type="text"
        {...register("company")}
        className="hidden"
        autoComplete="off"
        tabIndex={-1}
      />

      {/* From Field */}
      <div className="flex flex-col sm:flex-row sm:items-baseline border-b border-oxford/10 pb-2 gap-1 sm:gap-0">
        <label className="text-sm text-oxford/60 w-16 flex-shrink-0">From:</label>
        <div className="flex-grow min-w-0">
          <input
            type="email"
            {...register("email")}
            className="w-full bg-transparent focus:outline-none text-oxford text-sm placeholder:text-oxford/20"
            placeholder="your.email@firm.com"
          />
          {errors.email && (
            <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Subject Field */}
      <div className="flex flex-col sm:flex-row sm:items-baseline border-b border-oxford/10 pb-2 gap-1 sm:gap-0">
        <label className="text-sm text-oxford/60 w-16 flex-shrink-0">Subject:</label>
        <div className="flex-grow min-w-0">
          <input
            type="text"
            {...register("subject")}
            className="w-full bg-transparent focus:outline-none text-oxford text-sm placeholder:text-oxford/20"
            placeholder="Case Caption / Order / Referral"
          />
          {errors.subject && (
            <p className="text-xs text-red-600 mt-1">{errors.subject.message}</p>
          )}
        </div>
      </div>

      {/* Message Body */}
      <div className="pt-2">
        <textarea
          rows={8}
          {...register("description")}
          className="w-full bg-transparent focus:outline-none text-oxford text-base leading-relaxed placeholder:text-oxford/20 resize-none min-h-[150px]"
          placeholder="Brief description of procedural posture, deadlines, or assistance needed..."
        />
        {errors.description && (
          <p className="text-xs text-red-600 mt-1">{errors.description.message}</p>
        )}
      </div>

      {/* Attachment UI */}
      <div className="pt-2 border-t border-oxford/5">
        <label className="text-oxford/40 hover:text-bronze flex items-center gap-2 text-xs font-medium py-2 px-3 rounded hover:bg-paper transition-colors cursor-pointer w-fit">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
          </svg>
          Attach Order/Brief
          <input
            type="file"
            accept=".pdf,.jpg,.jpeg,.png,.docx"
            className="hidden"
            {...(() => {
              const { onChange, ...rest } = register("attachment");
              return {
                ...rest,
                onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                  if (e.target.files?.[0]?.size! > 10 * 1024 * 1024) {
                    alert("File too large. Max 10MB.");
                    e.target.value = "";
                    return;
                  }
                  onChange(e);
                }
              };
            })()}
          />
        </label>
        <p className="text-[10px] text-oxford/30 italic ml-3 mt-1">(.pdf, .docx, .jpg, .png)</p>
      </div>

      {/* Turnstile */}
      <div className="pt-2">
        <Turnstile
          ref={turnstileRef}
          siteKey={process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY || ""}
          onSuccess={(token) => {
            setTurnstileToken(token);
            setValue("turnstileToken", token);
          }}
          options={{
             theme: 'light',
             size: 'flexible'
          }}
        />
      </div>

      {/* Errors */}
      {serverError && (
        <div className="p-3 bg-red-50 border border-red-100 text-red-600 text-sm rounded">
          {serverError}
        </div>
      )}

      {/* Footer Actions */}
      <div className="flex justify-end pt-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="bg-oxford text-paper px-6 py-2 text-xs uppercase tracking-widest font-bold hover:bg-bronze transition-colors rounded shadow-sm w-full sm:w-auto disabled:opacity-70"
        >
          {status === "submitting" ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
}
