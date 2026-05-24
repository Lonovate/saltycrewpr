import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      firstName,
      lastName,
      phone,
      email,
      route,
      communicationMethod,
      groupSize,
      message,
    } = body;

    // Validate required fields
    if (
      !firstName?.trim() ||
      !lastName?.trim() ||
      !phone?.trim() ||
      !email?.trim() ||
      !route ||
      !communicationMethod ||
      !groupSize
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const routeLabels: Record<string, string> = {
      icacos: "Icacos Island",
      culebra: "Culebra Experience",
      vieques: "Vieques Escape",
      sunset: "Sunset Route",
      private: "Private Tropical Tour",
    };

    const commLabels: Record<string, string> = {
      email: "Email",
      phone: "Phone Call",
      whatsapp: "WhatsApp",
      sms: "SMS/Text Message",
    };

    const routeName = routeLabels[route] || route;
    const commName = commLabels[communicationMethod] || communicationMethod;
    const notifyTo = process.env.NOTIFY_EMAIL || "Gmonserrat18@gmail.com";
    const fromEmail = process.env.GMAIL_USER || "crewsaltypr@gmail.com";

    // 1. Send notification email to business owner
    const notificationHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #0a2540; padding: 24px; text-align: center;">
          <h1 style="color: #d4af37; margin: 0; font-size: 24px;">New Booking Inquiry</h1>
          <p style="color: #ffffff; margin: 8px 0 0;">Salty Crew PR</p>
        </div>
        <div style="padding: 24px; background: #f8f9fa;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; font-weight: bold; color: #0a2540;">Name:</td><td style="padding: 8px 0;">${firstName} ${lastName}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; color: #0a2540;">Phone:</td><td style="padding: 8px 0;">${phone}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; color: #0a2540;">Email:</td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; color: #0a2540;">Preferred Route:</td><td style="padding: 8px 0;">${routeName}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; color: #0a2540;">Communication Method:</td><td style="padding: 8px 0;">${commName}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; color: #0a2540;">Group Size:</td><td style="padding: 8px 0;">${groupSize}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; color: #0a2540;">Message:</td><td style="padding: 8px 0;">${message || "N/A"}</td></tr>
          </table>
        </div>
        <div style="padding: 16px; text-align: center; color: #666; font-size: 12px;">
          This inquiry was submitted via the Salty Crew PR website.
        </div>
      </div>
    `;

    // 2. Send thank-you email to the customer
    const thankYouHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #0a2540; padding: 32px; text-align: center;">
          <h1 style="color: #d4af37; margin: 0; font-size: 28px;">Salty Crew PR</h1>
          <p style="color: #ffffff; margin: 12px 0 0; font-size: 16px;">Thank you for your inquiry!</p>
        </div>
        <div style="padding: 32px; background: #ffffff;">
          <p style="color: #333; font-size: 16px; line-height: 1.6;">
            Hi ${firstName},
          </p>
          <p style="color: #333; font-size: 16px; line-height: 1.6;">
            Thank you for reaching out to Salty Crew PR! We've received your booking inquiry for the <strong>${routeName}</strong> route and our team will get back to you shortly.
          </p>
          <p style="color: #333; font-size: 16px; line-height: 1.6;">
            Here's a summary of your request:
          </p>
          <div style="background: #f8f9fa; padding: 16px; border-radius: 8px; margin: 16px 0;">
            <p style="margin: 4px 0; color: #555;"><strong>Route:</strong> ${routeName}</p>
            <p style="margin: 4px 0; color: #555;"><strong>Group Size:</strong> ${groupSize}</p>
            <p style="margin: 4px 0; color: #555;"><strong>Preferred Contact:</strong> ${commName}</p>
          </div>
          <p style="color: #333; font-size: 16px; line-height: 1.6;">
            We look forward to creating an unforgettable experience for you in Puerto Rico!
          </p>
          <p style="color: #333; font-size: 16px; line-height: 1.6;">
            Warm regards,<br/>
            <strong style="color: #0a2540;">The Salty Crew PR Team</strong>
          </p>
        </div>
        <div style="padding: 16px; text-align: center; background: #0a2540;">
          <p style="color: #d4af37; margin: 0; font-size: 14px;">Experience Puerto Rico From The Sea</p>
          <p style="color: #ffffff80; margin: 8px 0 0; font-size: 12px;">Fajardo, Puerto Rico | (787) 550-6017 | crewsaltypr@gmail.com</p>
        </div>
      </div>
    `;

    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      // Log when Gmail is not configured
      console.log("=== NEW BOOKING INQUIRY ===");
      console.log(`Name: ${firstName} ${lastName}`);
      console.log(`Phone: ${phone}`);
      console.log(`Email: ${email}`);
      console.log(`Route: ${routeName}`);
      console.log(`Communication: ${commName}`);
      console.log(`Group Size: ${groupSize}`);
      console.log(`Message: ${message || "N/A"}`);
      console.log("===========================");
      console.log(
        "To enable email delivery, set GMAIL_USER and GMAIL_APP_PASSWORD in .env.local"
      );
      return NextResponse.json({ success: true });
    }

    // Send both emails in parallel
    await Promise.all([
      // Notification to business owner
      transporter.sendMail({
        from: `"Salty Crew PR" <${fromEmail}>`,
        to: notifyTo,
        subject: `New Booking Inquiry: ${firstName} ${lastName} - ${routeName}`,
        html: notificationHtml,
        replyTo: email,
      }),
      // Thank-you to customer
      transporter.sendMail({
        from: `"Salty Crew PR" <${fromEmail}>`,
        to: email,
        subject: "Thank you for your inquiry! - Salty Crew PR",
        html: thankYouHtml,
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
