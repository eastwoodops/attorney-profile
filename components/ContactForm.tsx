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
    
    // Honeypot (managed manually to avoid Zod schema conflict if we want strict typing)
    // Actually schema has it as max(0), so empty string is valid.
    formData.append("company", ""); 

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
      <div className="bg-paper border border-oxford/10 p-8 text-center rounded-lg">
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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      
      {/* Honeypot - visually hidden */}
      <input
        type="text"
        {...register("company")}
        className="hidden"
        autoComplete="off"
        tabIndex={-1}
      />

      {/* Email */}
      <div>
        <label className="block text-xs uppercase tracking-widest text-bronze font-semibold mb-2">
          Email Address
        </label>
        <input
          type="email"
          {...register("email")}
          className="w-full bg-white border border-oxford/20 p-3 text-oxford focus:border-bronze focus:outline-none transition-colors rounded-none"
          placeholder="attorney@firm.com"
        />
        {errors.email && (
          <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Subject */}
      <div>
        <label className="block text-xs uppercase tracking-widest text-bronze font-semibold mb-2">
          Subject / Case Caption
        </label>
        <input
          type="text"
          {...register("subject")}
          className="w-full bg-white border border-oxford/20 p-3 text-oxford focus:border-bronze focus:outline-none transition-colors rounded-none"
          placeholder="Smith v. Jones (10th Cir.)"
        />
        {errors.subject && (
          <p className="text-xs text-red-600 mt-1">{errors.subject.message}</p>
        )}
      </div>

      {/* Description */}
      <div>
        <label className="block text-xs uppercase tracking-widest text-bronze font-semibold mb-2">
          Message
        </label>
        <textarea
          rows={5}
          {...register("description")}
          className="w-full bg-white border border-oxford/20 p-3 text-oxford focus:border-bronze focus:outline-none transition-colors rounded-none resize-y"
          placeholder="Brief description of procedural posture and assistance needed..."
        />
        {errors.description && (
          <p className="text-xs text-red-600 mt-1">{errors.description.message}</p>
        )}
      </div>

      {/* Attachment */}
      <div>
        <label className="block text-xs uppercase tracking-widest text-bronze font-semibold mb-2">
          Attachment (Optional)
        </label>
        <input
          type="file"
          accept=".pdf,.jpg,.jpeg,.png,.docx"
          {...register("attachment")}
          onChange={(e) => {
             // Basic client side check
             if (e.target.files?.[0]?.size! > 10 * 1024 * 1024) {
                alert("File too large. Max 10MB.");
                e.target.value = "";
             }
          }}
          className="block w-full text-sm text-oxford/70
            file:mr-4 file:py-2 file:px-4
            file:rounded-none file:border-0
            file:text-xs file:font-semibold
            file:bg-oxford/5 file:text-oxford
            hover:file:bg-oxford/10 transition-colors"
        />
        <p className="text-[10px] text-oxford/40 mt-1">
          Max 10MB. PDF, DOCX, JPG, PNG allowed.
        </p>
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
        {/* Hidden field for Zod validation hookup if needed, 
            though we handle token via state + setValue manually above */}
      </div>

      {/* Errors & Submit */}
      {serverError && (
        <div className="p-3 bg-red-50 border border-red-100 text-red-600 text-sm">
          {serverError}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-oxford text-paper py-4 text-xs uppercase tracking-widest font-semibold hover:bg-bronze transition-colors disabled:opacity-70"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>

      <p className="text-center text-[10px] text-oxford/30 pt-2">
        Protected by Turnstile and internal security policies.
      </p>
    </form>
  );
}
