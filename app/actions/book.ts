"use server";

import nodemailer from "nodemailer";

export async function sendBookingEmail(formData: any) {
  // 1. Transporter Create Karein (Gmail Configuration)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // 2. Email Content Design Karein
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    replyTo: formData.email,
    subject: `New Booking Request for ${formData.topic} from ${formData.firstName} ${formData.lastName}`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; border: 1px solid #eee; border-radius: 10px; overflow: hidden;">
        <div style="background: #fe424d; color: white; padding: 20px; text-align: center;">
          <h2 style="margin: 0;">New Booking Inquiry</h2>
        </div>
        <div style="padding: 20px;">
          <p><strong>From:</strong> ${formData.firstName} ${formData.lastName}</p>
          <p><strong>Organization:</strong> ${formData.orgName}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone}</p>
          <hr style="border: none; border-top: 1px solid #eee;" />
          <p><strong>Topic:</strong> ${formData.topic}</p>
          <p><strong>Audience Size:</strong> ${formData.audienceSize}</p>
          <p><strong>Event Date:</strong> ${formData.eventDate}</p>
          <p><strong>Address:</strong> ${formData.address}</p>
        </div>
        <div style="background: #f9f9f9; padding: 15px; text-align: center; font-size: 12px; color: #999;">
          This email was sent from your portfolio booking form.
        </div>
      </div>
    `,
  };

  try {
    // 3. Email Send Karein
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Nodemailer Error:", error);
    return { success: false, error: "Failed to send email" };
  }
}