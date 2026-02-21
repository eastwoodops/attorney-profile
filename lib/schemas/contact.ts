import { z } from "zod";

// file validation constants
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ALLOWED_MIME_TYPES = [
  "application/pdf",
  "image/jpeg",
  "image/png",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // .docx
];

export const contactFormSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  subject: z
    .string()
    .min(5, "Subject must be at least 5 characters.")
    .max(100, "Subject must be less than 100 characters."),
  description: z
    .string()
    .min(20, "Please provide at least 20 characters of description.")
    .max(5000, "Description allows up to 5000 characters."),
  // Client-side file validation (server-side will handle the buffer)
  attachment: z.any().optional(), 
  turnstileToken: z.string().min(1, "Security check required."),
  company: z.string().max(0, "Bot detected."), // Honeypot
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
