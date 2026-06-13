import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, company, phone, service, message } = await request.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Missing required fields (Name, Email, or Message)." },
        { status: 400 }
      );
    }

    const apiKey = process.env.BREVO_API_KEY;
    const senderEmail = process.env.BREVO_SENDER_EMAIL;
    const senderName = process.env.BREVO_SENDER_NAME || "Megastone Website";
    const recipientEmail = process.env.BREVO_RECIPIENT_EMAIL;

    // Check if configuration is present
    if (!apiKey || apiKey === "YOUR_BREVO_API_KEY_HERE" || !senderEmail || !recipientEmail) {
      console.error("Missing Brevo server configuration. Please check your environment variables.");
      return NextResponse.json(
        { 
          success: false, 
          message: "Email service is currently misconfigured. Please check back later." 
        },
        { status: 500 }
      );
    }

    // Human-readable service label mapping
    const serviceLabels: Record<string, string> = {
      "computer-security": "Computer Security",
      "qa-testing": "Software Quality Assurance Testing",
      "penetration-testing": "Penetration Testing",
      "vulnerability-assessment": "Vulnerability Assessment",
      "consulting": "Cybersecurity Consulting",
      "data-recovery": "Data Recovery",
      "other": "Other Services",
    };
    const serviceLabel = serviceLabels[service] || "None Selected";

    // Build the beautifully designed HTML body
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Megastone Contact Message</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      background-color: #f3f4f6;
      margin: 0;
      padding: 20px;
      color: #1f2937;
    }
    .container {
      max-width: 600px;
      background-color: #ffffff;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      margin: 0 auto;
      border: 1px solid #e5e7eb;
    }
    .header {
      background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
      color: #ffffff;
      padding: 30px 20px;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
      font-weight: 700;
      letter-spacing: -0.025em;
    }
    .header p {
      margin: 5px 0 0 0;
      font-size: 14px;
      color: #bfdbfe;
    }
    .content {
      padding: 30px 20px;
    }
    .field-card {
      background-color: #f9fafb;
      border: 1px solid #f3f4f6;
      border-radius: 8px;
      padding: 15px;
      margin-bottom: 15px;
    }
    .field-label {
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #6b7280;
      margin-bottom: 4px;
    }
    .field-value {
      font-size: 15px;
      color: #111827;
      font-weight: 500;
    }
    .message-card {
      background-color: #eff6ff;
      border: 1px solid #dbeafe;
      border-radius: 8px;
      padding: 20px;
      margin-top: 20px;
    }
    .message-label {
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #2563eb;
      margin-bottom: 8px;
    }
    .message-content {
      font-size: 15px;
      line-height: 1.6;
      color: #1e3a8a;
      white-space: pre-wrap;
    }
    .footer {
      background-color: #f9fafb;
      padding: 20px;
      text-align: center;
      font-size: 12px;
      color: #9ca3af;
      border-top: 1px solid #f3f4f6;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Website Message</h1>
      <p>Megastone Contact Submission</p>
    </div>
    <div class="content">
      <div class="field-card">
        <div class="field-label">Sender Name</div>
        <div class="field-value">${name}</div>
      </div>
      <div class="field-card">
        <div class="field-label">Email Address</div>
        <div class="field-value">${email}</div>
      </div>
      <div class="field-card">
        <div class="field-label">Company</div>
        <div class="field-value">${company || 'Not Provided'}</div>
      </div>
      <div class="field-card">
        <div class="field-label">Phone Number</div>
        <div class="field-value">${phone || 'Not Provided'}</div>
      </div>
      <div class="field-card">
        <div class="field-label">Service of Interest</div>
        <div class="field-value">${serviceLabel}</div>
      </div>
      <div class="message-card">
        <div class="message-label">Message Details</div>
        <div class="message-content">${message}</div>
      </div>
    </div>
    <div class="footer">
      This email was sent dynamically from the Megastone website contact form.
    </div>
  </div>
</body>
</html>
`;

    // Make the API request to Brevo
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "content-type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        sender: {
          name: senderName,
          email: senderEmail,
        },
        to: [
          {
            email: recipientEmail,
            name: "Megastone Support",
          },
        ],
        replyTo: {
          email: email,
          name: name,
        },
        subject: `New Megastone Contact Message from ${name}`,
        htmlContent: htmlContent,
      }),
    });

    if (response.ok) {
      return NextResponse.json({ success: true, message: "Message sent successfully!" });
    } else {
      const errorData = await response.json();
      console.error("Brevo API Error:", errorData);
      return NextResponse.json(
        { 
          success: false, 
          message: errorData.message || "Failed to deliver message via Brevo." 
        },
        { status: response.status }
      );
    }
  } catch (error: any) {
    console.error("Server error handling contact submission:", error);
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred on the server." },
      { status: 500 }
    );
  }
}
