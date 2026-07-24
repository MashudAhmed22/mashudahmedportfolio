import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// ─── Transporter ──────────────────────────────────────────────────────────────
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  debug: true,
});

// Verify transporter on startup
transporter.verify((error) => {
  if (error) {
    console.error("[contact] Email config error:", error);
  } else {
    console.log("[contact] Email server ready");
  }
});

// ─── Types ────────────────────────────────────────────────────────────────────
interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

function isError(err: unknown): err is Error {
  return err instanceof Error;
}

// ─── Email templates ──────────────────────────────────────────────────────────
function ownerMailOptions(data: ContactPayload): nodemailer.SendMailOptions {
  const currentDate = new Date().toLocaleString("en-US", {
    dateStyle: "full",
    timeStyle: "short",
  });

  return {
    from: process.env.EMAIL_USER,
    to: process.env.ADMIN_EMAIL,
    replyTo: `"${data.name}" <${data.email}>`,
    subject: `📩 New Contact Us Message from ${data.name}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
          .section { background: white; padding: 20px; margin: 20px 0; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
          .section h3 { color: #667eea; margin-top: 0; }
          .info-row { margin: 8px 0; }
          .info-label { font-weight: bold; color: #4b5563; }
          .footer { text-align: center; color: #6b7280; font-size: 12px; margin-top: 30px; border-top: 1px solid #e5e7eb; padding-top: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>📩 New Contact Message</h1>
            <p>A new message has been submitted via your portfolio contact form.</p>
          </div>
          <div class="content">
            <div class="section">
              <h3>👤 Sender Information</h3>
              <div class="info-row"><span class="info-label">Name:</span> ${data.name}</div>
              <div class="info-row"><span class="info-label">Email:</span> <a href="mailto:${data.email}">${data.email}</a></div>
            </div>
            <div class="section">
              <h3>📝 Message</h3>
              <p>${data.message}</p>
            </div>
            <div class="footer">
              <p><strong>Date:</strong> ${currentDate}</p>
              <p>This is an automated notification from your portfolio.</p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `,
  };
}

function customerMailOptions(data: ContactPayload): nodemailer.SendMailOptions {
  const currentDate = new Date().toLocaleString("en-US", {
    dateStyle: "full",
    timeStyle: "short",
  });

  return {
    from: process.env.EMAIL_USER,
    to: data.email,
    subject: "✅ We Received Your Message",
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
          .section { background: white; padding: 20px; margin: 20px 0; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
          .footer { text-align: center; color: #6b7280; font-size: 12px; margin-top: 30px; border-top: 1px solid #e5e7eb; padding-top: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>✅ Message Received</h1>
            <p>Thank you for reaching out, ${data.name}!</p>
          </div>
          <div class="content">
            <div class="section">
              <p>Hi ${data.name},</p>
              <p>I have received your message and will get back to you as soon as possible — usually within 24–48 hours.</p>
              <p>Here's a copy of what you sent:</p>
              <blockquote style="border-left:3px solid #667eea;margin:12px 0;padding:12px 16px;background:#f3f4f6;border-radius:0 6px 6px 0;color:#374151;">
                ${data.message}
              </blockquote>
            </div>
            <div class="footer">
              <p>Submitted on: ${currentDate}</p>
              <p>Please do not reply directly to this automated email.</p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `,
  };
}

// ─── Route handler ─────────────────────────────────────────────────────────────
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body as ContactPayload;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // Send both emails in parallel
    await Promise.all([
      transporter.sendMail(ownerMailOptions({ name, email, message })),
      transporter.sendMail(customerMailOptions({ name, email, message })),
    ]);

    return NextResponse.json(
      { message: "Message sent! I'll be in touch soon." },
      { status: 200 }
    );
  } catch (error: unknown) {
    if (isError(error)) {
      console.error("[contact] Error sending emails:", error);
      return NextResponse.json(
        { error: error.message || "Failed to send message. Please try again later." },
        { status: 500 }
      );
    }
    console.error("[contact] Unknown error:", error);
    return NextResponse.json(
      { error: "An unknown error occurred." },
      { status: 500 }
    );
  }
}
