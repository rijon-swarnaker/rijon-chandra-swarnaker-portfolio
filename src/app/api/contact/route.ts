import { NextResponse } from "next/server";

interface ContactRequestBody {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body: ContactRequestBody = await request.json();
    const { name, email, subject, message } = body;

    // Field validations
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Name must be at least 2 characters long." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !EMAIL_REGEX.test(email.trim())) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!subject || typeof subject !== "string" || subject.trim().length < 3) {
      return NextResponse.json(
        { error: "Subject must be at least 3 characters long." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters long." },
        { status: 400 }
      );
    }

    const sanitizedData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject.trim(),
      message: message.trim(),
    };

    const resendApiKey = process.env.RESEND_API_KEY;
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "rijonswarnaker@gmail.com";
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

    // If real email service key is configured, send through Resend API
    if (resendApiKey) {
      const resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [receiverEmail],
          reply_to: sanitizedData.email,
          subject: `Portfolio Contact: ${sanitizedData.subject} (${sanitizedData.name})`,
          text: `New contact form submission:\n\nName: ${sanitizedData.name}\nEmail: ${sanitizedData.email}\nSubject: ${sanitizedData.subject}\n\nMessage:\n${sanitizedData.message}`,
        }),
      });

      if (!resendResponse.ok) {
        const errorData = await resendResponse.json().catch(() => ({}));
        console.error("Resend API error:", errorData);
        return NextResponse.json(
          { error: "Failed to dispatch email. Please reach out directly to rijonswarnaker@gmail.com." },
          { status: 502 }
        );
      }

      return NextResponse.json({
        success: true,
        message: "Thank you! Your message has been sent successfully.",
      });
    }

    // When credentials are not configured in environment
    if (process.env.NODE_ENV !== "production") {
      console.log("==========================================");
      console.log("[Contact API] Submission received (Dev Mode):");
      console.log(`From:    ${sanitizedData.name} <${sanitizedData.email}>`);
      console.log(`Subject: ${sanitizedData.subject}`);
      console.log(`Message: ${sanitizedData.message}`);
      console.log("Note: To send live emails, set RESEND_API_KEY in .env.local");
      console.log("==========================================");

      return NextResponse.json({
        success: true,
        message: "Message received! (Development mode: credentials not yet configured in .env)",
      });
    }

    // In production without configured credentials, do not falsely succeed
    return NextResponse.json(
      {
        error: "Email delivery service is currently not configured. Please email rijonswarnaker@gmail.com directly.",
      },
      { status: 503 }
    );
  } catch (error) {
    console.error("Contact API internal error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
