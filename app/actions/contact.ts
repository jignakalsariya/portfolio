"use server";

import nodemailer from "nodemailer";

export async function sendContactEmail(formData: { name: string; email: string; message: string }) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"${formData.name}" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    replyTo: formData.email, // Isse aap seedha user ko reply de payengi
    subject: `New Message from ${formData.name}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; border: 1px solid #eee; border-radius: 10px; padding: 20px;">
        <h2 style="color: #fe424d;">New Message</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <div style="background: #f4f4f4; padding: 15px; border-radius: 5px; margin-top: 10px;">
          <strong>Message:</strong><br/>
          ${formData.message}
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Contact Error:", error);
    return { success: false };
  }
}