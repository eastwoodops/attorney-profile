import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/schemas/contact";
import { checkRateLimit } from "@/lib/rate-limit";
import { verifyTurnstileToken } from "@/lib/verify-turnstile";
import { validateAndSanitizeFile } from "@/lib/file-validation";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Force Node runtime for file buffer handling (Edge has size limits)
export const runtime = 'nodejs'; 

export async function POST(req: NextRequest) {
  try {
    // 1. Safe IP Extraction
    const ip = (req.headers.get("x-forwarded-for") ?? "127.0.0.1").split(",")[0];

    // 2. Rate Limiting (Upstash)
    const { success: rateLimitSuccess } = await checkRateLimit(ip);
    if (!rateLimitSuccess) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // 3. Parse Form Data
    const formData = await req.formData();
    const rawData = {
      email: formData.get("email"),
      subject: formData.get("subject"),
      description: formData.get("description"),
      turnstileToken: formData.get("turnstileToken"),
      company: formData.get("company"), // Honeypot
      attachment: formData.get("attachment"),
    };

    // 4. Honeypot Check
    if (rawData.company) {
      console.warn(`Honeypot triggered by IP: ${ip}`);
      // Return fake success to confuse bots
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // 5. Zod Validation (Fields only first)
    const result = contactFormSchema.safeParse(rawData);
    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const { email, subject, description, turnstileToken } = result.data;

    // 6. Turnstile Verification
    const turnstileValid = await verifyTurnstileToken(turnstileToken, ip);
    if (!turnstileValid) {
      return NextResponse.json(
        { error: "Security check failed. Please refresh." },
        { status: 403 }
      );
    }

    // 7. File Processing
    let emailAttachments: any[] = [];
    const file = rawData.attachment as File | null;

    if (file && file.size > 0) {
      const fileValidation = await validateAndSanitizeFile(file);
      
      if (!fileValidation.valid) {
        return NextResponse.json(
          { error: fileValidation.error || "Invalid file" },
          { status: 400 }
        );
      }

      // Prepare attachment for Resend
      if (fileValidation.buffer && fileValidation.sanitizedName) {
        emailAttachments.push({
          filename: fileValidation.sanitizedName,
          content: fileValidation.buffer,
        });
      }
    }

    // 8. Email Delivery (Resend)
    const { data: emailData, error: emailError } = await resend.emails.send({
      from: "Contact Form <website@kimberlyrufe.com>", // Ensure domain is verified in Resend
      to: [process.env.BUSINESS_EMAIL_RECIPIENT || "kimberly@aldermanlawfirm.com"],
      reply_to: email,
      subject: `[New Inquiry] ${subject}`,
      text: `
New Contact Inquiry

From: ${email}
Subject: ${subject}

Description:
${description}

--------------------------
Meta:
IP: ${ip}
Time: ${new Date().toISOString()}
      `,
      attachments: emailAttachments,
    });

    if (emailError) {
      console.error("Resend API Error:", emailError);
      return NextResponse.json(
        { error: "Failed to send message. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: emailData?.id });

  } catch (error) {
    console.error("Unexpected API Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
