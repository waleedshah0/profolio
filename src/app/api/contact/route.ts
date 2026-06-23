import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type SendEmailResult = {
  ok: boolean;
  provider?: "sendgrid" | "smtp";
  authIssue?: boolean;
};

async function sendEmail(payload: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): Promise<SendEmailResult> {
  const emailTo = process.env.EMAIL_TO;
  const smtpUser = process.env.EMAIL_USER;
  const smtpPass = process.env.EMAIL_PASS;
  const sendgridKey = process.env.SENDGRID_API_KEY;
  const sendgridFrom = process.env.SENDGRID_FROM || process.env.EMAIL_USER;

  const displaySubject = payload.subject
    ? `[Portfolio Contact] ${payload.subject}`
    : "[Portfolio Contact] New message from your website";

  const htmlBody = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#05070d;font-family:'Segoe UI',system-ui,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#05070d;padding:32px 24px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#11162a;border:1px solid rgba(255,255,255,0.1);border-radius:16px;overflow:hidden;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#1a468f,#06b6d4);padding:28px 32px;">
              <h1 style="margin:0;color:#fff;font-size:20px;font-weight:700;">
                📬 New Contact Message
              </h1>
              <p style="margin:6px 0 0;color:rgba(255,255,255,0.7);font-size:13px;">
                From your portfolio website
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:28px 32px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:10px 14px;background:rgba(255,255,255,0.04);border-radius:8px;border-left:3px solid #2d9bff;margin-bottom:12px;">
                    <p style="margin:0 0 4px;color:#8ed5ff;font-size:11px;text-transform:uppercase;letter-spacing:1px;font-weight:600;">From</p>
                    <p style="margin:0;color:#e7ecf5;font-size:15px;font-weight:600;">${escapeHtml(payload.name)}</p>
                    <p style="margin:2px 0 0;color:#94a3b8;font-size:13px;">${escapeHtml(payload.email)}</p>
                  </td>
                </tr>
                <tr><td height="12"></td></tr>
                ${payload.subject ? `
                <tr>
                  <td style="padding:10px 14px;background:rgba(255,255,255,0.04);border-radius:8px;border-left:3px solid #22d3ee;">
                    <p style="margin:0 0 4px;color:#22d3ee;font-size:11px;text-transform:uppercase;letter-spacing:1px;font-weight:600;">Subject</p>
                    <p style="margin:0;color:#e7ecf5;font-size:15px;">${escapeHtml(payload.subject)}</p>
                  </td>
                </tr>
                <tr><td height="12"></td></tr>` : ""}
                <tr>
                  <td style="padding:10px 14px;background:rgba(255,255,255,0.04);border-radius:8px;border-left:3px solid #a3e635;">
                    <p style="margin:0 0 4px;color:#a3e635;font-size:11px;text-transform:uppercase;letter-spacing:1px;font-weight:600;">Message</p>
                    <p style="margin:0;color:#cbd5e1;font-size:14px;line-height:1.7;white-space:pre-wrap;">${escapeHtml(payload.message)}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:16px 32px 24px;text-align:center;border-top:1px solid rgba(255,255,255,0.06);">
              <p style="margin:0;color:#64748b;font-size:12px;">
                Sent on ${new Date().toLocaleString("en-US", { dateStyle: "full", timeStyle: "short" })} · Portfolio Contact Form
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const textBody = `New message from your portfolio:\n\nName: ${payload.name}\nEmail: ${payload.email}\nSubject: ${payload.subject || "(none)"}\n\nMessage:\n${payload.message}`;

  if (sendgridKey) {
    if (!emailTo) {
      console.error("[contact] Missing EMAIL_TO env var required for SendGrid.");
      return { ok: false, authIssue: false };
    }

    try {
      const sgMail = (await import("@sendgrid/mail")).default;
      sgMail.setApiKey(sendgridKey);
      await sgMail.send({
        to: emailTo,
        from: sendgridFrom || emailTo,
        replyTo: `${payload.name} <${payload.email}>`,
        subject: displaySubject,
        html: htmlBody,
        text: textBody,
      });
      console.log(`[contact] Email sent to ${emailTo} via SendGrid from ${payload.name} <${payload.email}>`);
      return { ok: true, provider: "sendgrid" };
    } catch (err) {
      console.error("[contact] SendGrid send failed:", err);
      const anyErr = err as any;
      if (anyErr?.response?.statusCode === 401 || anyErr?.code === "Unauthorized" || anyErr?.message?.includes("Unauthorized")) {
        return { ok: false, authIssue: true };
      }
      // fall through to SMTP fallback if configured
    }
  }

  if (!smtpUser || !smtpPass || !emailTo) {
    console.error("[contact] Missing required SMTP env vars: EMAIL_USER, EMAIL_PASS, or EMAIL_TO.");
    return { ok: false, authIssue: false };
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${smtpUser}>`,
      to: emailTo,
      replyTo: `${payload.name} <${payload.email}>`,
      subject: displaySubject,
      html: htmlBody,
      text: textBody,
    });
    console.log(`[contact] Email sent to ${emailTo} from ${payload.name} <${payload.email}>`);
    return { ok: true, provider: "smtp" };
  } catch (err) {
    console.error("[contact] Failed to send email via SMTP:", err);
    const anyErr = err as any;
    if (anyErr && anyErr.code === "EAUTH") {
      if (anyErr.responseCode === 534) {
        console.error("[contact] Gmail requires an App Password. Go to https://myaccount.google.com/apppasswords and generate one, then update EMAIL_PASS in .env.local.");
      } else {
        console.error("[contact] Authentication error: check Gmail credentials or use an App Password (enable 2FA). Plain Gmail passwords are often rejected.");
      }
      return { ok: false, authIssue: true };
    }
    return { ok: false, authIssue: false };
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const subject = (body.subject ?? "").trim();
  const message = (body.message ?? "").trim();

  // Validation
  const errors: string[] = [];
  if (name.length < 2) errors.push("Name must be at least 2 characters.");
  if (!EMAIL_RE.test(email)) errors.push("A valid email is required.");
  if (message.length < 10) errors.push("Message must be at least 10 characters.");
  if (name.length > 100) errors.push("Name is too long.");
  if (email.length > 200) errors.push("Email is too long.");
  if (subject.length > 200) errors.push("Subject is too long.");
  if (message.length > 5000) errors.push("Message is too long (max 5000 chars).");

  if (errors.length) {
    return NextResponse.json({ error: errors.join(" ") }, { status: 422 });
  }

  const result = await sendEmail({ name, email, subject, message });

  if (!result.ok) {
    const errorMessage = result.authIssue
      ? "Failed to send the message due to email authentication issues. Check your SMTP or SendGrid credentials and try again."
      : "Failed to send the message. Please try again later or email me directly at syedwaleedahmadshah@gmail.com.";

    return NextResponse.json(
      { error: errorMessage },
      { status: 502 }
    );
  }

  return NextResponse.json(
    {
      ok: true,
      message: "Thanks for reaching out! Your message has been sent. I'll get back to you within 24 hours.",
    },
    { status: 200 }
  );
}

export async function GET() {
  return NextResponse.json(
    { error: "Method not allowed. Use POST." },
    { status: 405 }
  );
}
