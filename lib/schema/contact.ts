import { z } from "zod";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ALLOWED_FILE_TYPES = [
  "application/pdf",
  "image/jpeg",
  "image/png",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // .docx
];

export const contactFormSchema = z.object({
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  description: z.string().min(20, "Description must be at least 20 characters"),
  turnstileToken: z.string().min(1, "Verification required"),
  company: z.string().max(0, "Bot detected"), // Honeypot
  // File validation happens on the server with FormData, but we define the shape here
  // client-side validation for file is handled separately or via refinement if using controlled input
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
