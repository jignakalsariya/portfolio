"use server";

import { Resend } from "resend";

// Apni API Key yahan dalein (Resend.com se milegi)
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendBookingEmail(formData: any) {
  try {
    const { data, error } = await resend.emails.send({
      from: "Booking Request <onboarding@resend.dev>", // Shuruat mein yahi rahega
      to: ["jignakalsariya.contact@gmail.com"], // <--- Yahan apna asli email ID dalein
      subject: `New Booking Request: ${formData.topic}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #fe424d;">New Booking Inquiry from ${formData.firstName} ${formData.lastName}</h2>
          <p><strong>Organization:</strong> ${formData.orgName}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone}</p>
          <p><strong>Topic:</strong> ${formData.topic}</p>
          <p><strong>Expected Audience:</strong> ${formData.audienceSize}</p>
          <p><strong>Date:</strong> ${formData.eventDate}</p>
          <p><strong>Address:</strong> ${formData.address}</p>
        </div>
      `,
    });

    if (error) {
      return { success: false, error };
    }

    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
}