import { NextResponse } from "next/server";
import { Resend } from "resend";

const MAX_FIELD_LENGTHS = {
  name: 120,
  company: 160,
  email: 254,
  phone: 50,
  projectType: 100,
  budget: 100,
  timeline: 100,
  description: 5000,
  problem: 5000,
} as const;

type ContactRequest = {
  name?: unknown;
  company?: unknown;
  email?: unknown;
  phone?: unknown;
  projectType?: unknown;
  budget?: unknown;
  timeline?: unknown;
  description?: unknown;
  problem?: unknown;
  turnstileToken?: unknown;
};

function getString(value: unknown, maxLength: number): string | null {
  if (typeof value !== "string") {
    return null;
  }

  const normalized = value.trim();

  if (normalized.length > maxLength) {
    return null;
  }

  return normalized;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function emailRow(label: string, value: string): string {
  return `
    <tr>
      <td
        style="
          width: 160px;
          padding: 10px 14px;
          border-bottom: 1px solid #e5e7eb;
          vertical-align: top;
          font-weight: 600;
          color: #111827;
        "
      >
        ${escapeHtml(label)}
      </td>

      <td
        style="
          padding: 10px 14px;
          border-bottom: 1px solid #e5e7eb;
          vertical-align: top;
          color: #374151;
        "
      >
        ${escapeHtml(value || "—")}
      </td>
    </tr>
  `;
}

async function verifyTurnstile(token: string): Promise<boolean> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;

  if (!secretKey) {
    console.error("TURNSTILE_SECRET_KEY is missing.");
    return false;
  }

  try {
    const response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: secretKey,
          response: token,
        }),
      },
    );

    if (!response.ok) {
      console.error("Turnstile verification request failed:", response.status);

      return false;
    }

    const result = (await response.json()) as {
      success?: boolean;
      "error-codes"?: string[];
    };

    if (!result.success) {
      console.warn("Turnstile verification rejected:", result["error-codes"]);

      return false;
    }

    return true;
  } catch (error) {
    console.error("Turnstile verification error:", error);
    return false;
  }
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.NOVARIS_CONTACT_EMAIL;

    if (!apiKey || !contactEmail) {
      console.error("Contact form email configuration is missing.");

      return NextResponse.json(
        {
          error: "Contact form is temporarily unavailable.",
        },
        {
          status: 500,
        },
      );
    }

    let body: ContactRequest;

    try {
      body = (await request.json()) as ContactRequest;
    } catch {
      return NextResponse.json(
        {
          error: "Invalid request.",
        },
        {
          status: 400,
        },
      );
    }

    const name = getString(body.name, MAX_FIELD_LENGTHS.name);

    const company = getString(body.company, MAX_FIELD_LENGTHS.company);

    const email = getString(body.email, MAX_FIELD_LENGTHS.email);

    const phone = getString(body.phone, MAX_FIELD_LENGTHS.phone);

    const projectType = getString(
      body.projectType,
      MAX_FIELD_LENGTHS.projectType,
    );

    const budget = getString(body.budget, MAX_FIELD_LENGTHS.budget);

    const timeline = getString(body.timeline, MAX_FIELD_LENGTHS.timeline);

    const description = getString(
      body.description,
      MAX_FIELD_LENGTHS.description,
    );

    const problem = getString(body.problem, MAX_FIELD_LENGTHS.problem);

    if (
      name === null ||
      company === null ||
      email === null ||
      phone === null ||
      projectType === null ||
      budget === null ||
      timeline === null ||
      description === null ||
      problem === null
    ) {
      return NextResponse.json(
        {
          error: "One or more fields are invalid.",
        },
        {
          status: 400,
        },
      );
    }

    if (!name || !email || !problem) {
      return NextResponse.json(
        {
          error: "Name, email, and problem are required.",
        },
        {
          status: 400,
        },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        {
          error: "Please enter a valid email address.",
        },
        {
          status: 400,
        },
      );
    }

    const turnstileToken = getString(body.turnstileToken, 2048);

    if (!turnstileToken) {
      return NextResponse.json(
        {
          error: "Security verification is required.",
        },
        {
          status: 400,
        },
      );
    }

    const turnstileValid = await verifyTurnstile(turnstileToken);

    if (!turnstileValid) {
      return NextResponse.json(
        {
          error: "Security verification failed. Please try again.",
        },
        {
          status: 403,
        },
      );
    }

    const resend = new Resend(apiKey);

    const subject = company
      ? `New Novaris inquiry — ${company}`
      : `New Novaris inquiry — ${name}`;

    const { error } = await resend.emails.send({
      from: "Novaris Website <website@mail.novaristechus.com>",
      to: [contactEmail],
      replyTo: email,
      subject,

      text: [
        "New project inquiry from novaristechus.com",
        "",
        "01 — WHO YOU ARE",
        `Name: ${name}`,
        `Company: ${company || "—"}`,
        `Email: ${email}`,
        `Phone: ${phone || "—"}`,
        "",
        "02 — SCOPE",
        `Project Type: ${projectType || "—"}`,
        `Estimated Budget: ${budget || "—"}`,
        `Timeline: ${timeline || "—"}`,
        "",
        "03 — THE WORK",
        `Project Description: ${description || "—"}`,
        "",
        "What problem are you trying to solve?",
        problem,
      ].join("\n"),

      html: `
        <div
          style="
            margin: 0;
            padding: 32px;
            background: #f3f4f6;
            font-family: Arial, Helvetica, sans-serif;
          "
        >
          <div
            style="
              max-width: 720px;
              margin: 0 auto;
              overflow: hidden;
              border: 1px solid #e5e7eb;
              border-radius: 12px;
              background: #ffffff;
            "
          >
            <div
              style="
                padding: 24px;
                background: #0a0d12;
                color: #ffffff;
              "
            >
              <div
                style="
                  margin-bottom: 8px;
                  font-size: 12px;
                  letter-spacing: 0.16em;
                  text-transform: uppercase;
                  color: #8abfff;
                "
              >
                Novaris Technologies
              </div>

              <h1
                style="
                  margin: 0;
                  font-size: 24px;
                  line-height: 1.25;
                "
              >
                New Project Inquiry
              </h1>
            </div>

            <div style="padding: 24px;">
              <h2
                style="
                  margin: 0 0 14px;
                  font-size: 14px;
                  text-transform: uppercase;
                  letter-spacing: 0.08em;
                  color: #6b7280;
                "
              >
                01 — Who you are
              </h2>

              <table
                style="
                  width: 100%;
                  border-collapse: collapse;
                  margin-bottom: 28px;
                "
              >
                ${emailRow("Name", name)}
                ${emailRow("Company", company)}
                ${emailRow("Email", email)}
                ${emailRow("Phone", phone)}
              </table>

              <h2
                style="
                  margin: 0 0 14px;
                  font-size: 14px;
                  text-transform: uppercase;
                  letter-spacing: 0.08em;
                  color: #6b7280;
                "
              >
                02 — Scope
              </h2>

              <table
                style="
                  width: 100%;
                  border-collapse: collapse;
                  margin-bottom: 28px;
                "
              >
                ${emailRow("Project Type", projectType)}
                ${emailRow("Estimated Budget", budget)}
                ${emailRow("Timeline", timeline)}
              </table>

              <h2
                style="
                  margin: 0 0 14px;
                  font-size: 14px;
                  text-transform: uppercase;
                  letter-spacing: 0.08em;
                  color: #6b7280;
                "
              >
                03 — The work
              </h2>

              <div style="margin-bottom: 22px;">
                <div
                  style="
                    margin-bottom: 6px;
                    font-weight: 600;
                    color: #111827;
                  "
                >
                  Project Description
                </div>

                <div
                  style="
                    white-space: pre-wrap;
                    line-height: 1.6;
                    color: #374151;
                  "
                >
                  ${escapeHtml(description || "—")}
                </div>
              </div>

              <div>
                <div
                  style="
                    margin-bottom: 6px;
                    font-weight: 600;
                    color: #111827;
                  "
                >
                  What problem are you trying to solve?
                </div>

                <div
                  style="
                    white-space: pre-wrap;
                    line-height: 1.6;
                    color: #374151;
                  "
                >
                  ${escapeHtml(problem)}
                </div>
              </div>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend contact email error:", error);

      return NextResponse.json(
        {
          error: "Unable to send your inquiry right now.",
        },
        {
          status: 502,
        },
      );
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        error: "Unable to send your inquiry right now.",
      },
      {
        status: 500,
      },
    );
  }
}
