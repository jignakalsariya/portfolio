"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, CheckCircle, User, Mail, MessageSquare } from "lucide-react";
import { sendContactEmail } from "@/app/actions/contact";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setLoading(true);
    const result = await sendContactEmail(data);
    setLoading(false);

    if (result.success) {
      setIsSubmitted(true);
      reset();
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center space-y-6 animate-in fade-in zoom-in duration-500">
              <div className="w-20 h-20 bg-[#fe424d]/10 rounded-full flex items-center justify-center">
                <CheckCircle className="text-[#fe424d] w-12 h-12" />
              </div>
              <h2 className="text-3xl font-black">Message Sent!</h2>
              <p className="text-gray-400 max-w-sm">
                Thank you for reaching out. Jigna Kalsariya's team will get back to you within 24-48 hours.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)} 
                className="text-[#fe424d] font-bold uppercase tracking-widest text-xs underline underline-offset-8 cursor-pointer hover:opacity-80 transition-opacity"
              >
                Send another request
              </button>
            </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-2xl mx-auto">
      
      {/* NAME */}
      <div className="space-y-2">
        <label className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-500 ml-1">Your Name</label>
        <div className="relative">
          <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-700 w-4 h-4" />
          <input 
            {...register("name")}
            placeholder="Rohan Patel"
            className="w-full bg-black/50 border border-white/10 rounded-xl pl-12 pr-5 py-4 focus:outline-none focus:border-[#fe424d]/50 text-white transition-all"
          />
        </div>
        {errors.name && <p className="text-[#fe424d] text-[10px]">{errors.name.message}</p>}
      </div>

      {/* EMAIL */}
      <div className="space-y-2">
        <label className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-500 ml-1">Email Address</label>
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-700 w-4 h-4" />
          <input 
            {...register("email")}
            placeholder="rohan@gmail.com"
            className="w-full bg-black/50 border border-white/10 rounded-xl pl-12 pr-5 py-4 focus:outline-none focus:border-[#fe424d]/50 text-white transition-all"
          />
        </div>
        {errors.email && <p className="text-[#fe424d] text-[10px]">{errors.email.message}</p>}
      </div>

      {/* MESSAGE */}
      <div className="space-y-2">
        <label className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-500 ml-1">Your Message</label>
        <div className="relative">
          <MessageSquare className="absolute left-4 top-6 text-gray-700 w-4 h-4" />
          <textarea 
            {...register("message")}
            placeholder="Write your message here..."
            rows={5}
            className="w-full bg-black/50 border border-white/10 rounded-xl pl-12 pr-5 py-4 focus:outline-none focus:border-[#fe424d]/50 text-white transition-all resize-none"
          />
        </div>
        {errors.message && <p className="text-[#fe424d] text-[10px]">{errors.message.message}</p>}
      </div>

      <button 
        type="submit" 
        disabled={loading}
        className="w-full border border-white/10 text-gray-400 font-black uppercase tracking-[0.3em] py-5 rounded-2xl flex items-center justify-center gap-3 transition-all duration-500 hover:border-[#fe424d]/35 hover:text-gray-200 hover:bg-[#fe424d]/5 disabled:opacity-50 group"
      >
        {loading ? "Sending..." : "Send Message"}
        {!loading && <Send size={16} className="group-hover:text-[#fe424d]/50" />}
      </button>
    </form>
  );
}