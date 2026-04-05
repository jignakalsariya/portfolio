"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  Calendar, 
  Users, 
  MapPin, 
  Mail, 
  Phone, 
  Send, 
  CheckCircle, 
  ChevronDown 
} from "lucide-react";
import { sendBookingEmail } from "@/app/actions/book"; // Make sure to create this action

// 1. VALIDATION SCHEMA (Zod)
const bookingSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Enter a valid phone number"),
  orgName: z.string().min(3, "Organization/College name is required"),
  audienceSize: z.string().min(1, "Select audience size"),
  topic: z.string().min(1, "Please enter a topic"),
  eventDate: z.string().min(1, "Event date is required"),
  address: z.string().min(5, "Please provide city or venue address"),
});

type BookingFormData = z.infer<typeof bookingSchema>;

export default function BookingForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  // 2. BACKEND HANDLER
  const onSubmit = async (data: BookingFormData) => {
    setLoading(true);
    
    try {
      const result = await sendBookingEmail(data);
      if (result.success) {
        setIsSubmitted(true);
        reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission Error:", error);
    } finally {
      setLoading(false);
    }
  };

  // SUCCESS STATE VIEW
  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center space-y-6 animate-in fade-in zoom-in duration-500">
        <div className="w-20 h-20 bg-[#fe424d]/10 rounded-full flex items-center justify-center">
          <CheckCircle className="text-[#fe424d] w-12 h-12" />
        </div>
        <h2 className="text-3xl font-black">Booking Request Sent!</h2>
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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 bg-zinc-900/30 p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* FIRST NAME */}
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-500 ml-1">First Name</label>
          <input 
            {...register("firstName")}
            placeholder="Rohan"
            className={`w-full bg-black/50 border ${errors.firstName ? 'border-red-500' : 'border-white/10'} rounded-xl px-5 py-4 focus:outline-none focus:border-[#fe424d]/50 transition-all text-white placeholder:text-gray-700`}
          />
          {errors.firstName && <p className="text-[#fe424d] text-[10px] mt-1">{errors.firstName.message}</p>}
        </div>

        {/* LAST NAME */}
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-500 ml-1">Last Name</label>
          <input 
            {...register("lastName")}
            placeholder="Patel"
            className={`w-full bg-black/50 border ${errors.lastName ? 'border-red-500' : 'border-white/10'} rounded-xl px-5 py-4 focus:outline-none focus:border-[#fe424d]/50 transition-all text-white placeholder:text-gray-700`}
          />
          {errors.lastName && <p className="text-[#fe424d] text-[10px] mt-1">{errors.lastName.message}</p>}
        </div>

        {/* EMAIL */}
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-500 ml-1">Email Address</label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-700 w-4 h-4" />
            <input 
              {...register("email")}
              placeholder="contact@gmail.com"
              className="w-full bg-black/50 border border-white/10 rounded-xl pl-12 pr-5 py-4 focus:outline-none focus:border-[#fe424d]/50 text-white placeholder:text-gray-700"
            />
          </div>
          {errors.email && <p className="text-[#fe424d] text-[10px] mt-1">{errors.email.message}</p>}
        </div>

        {/* PHONE */}
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-500 ml-1">Phone Number</label>
          <div className="relative">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-700 w-4 h-4" />
            <input 
              {...register("phone")}
              placeholder="+91 XXXXX XXXXX"
              className="w-full bg-black/50 border border-white/10 rounded-xl pl-12 pr-5 py-4 focus:outline-none focus:border-[#fe424d]/50 text-white placeholder:text-gray-700"
            />
          </div>
          {errors.phone && <p className="text-[#fe424d] text-[10px] mt-1">{errors.phone.message}</p>}
        </div>

        {/* ORGANIZATION NAME */}
        <div className="md:col-span-2 space-y-2">
          <label className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-500 ml-1">Organization Name</label>
          <input 
            {...register("orgName")}
            placeholder="e.g. SVNIT Surat"
            className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-[#fe424d]/50 text-white placeholder:text-gray-700"
          />
          {errors.orgName && <p className="text-[#fe424d] text-[10px] mt-1">{errors.orgName.message}</p>}
        </div>

        {/* AUDIENCE SIZE (Custom Dropdown) */}
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-500 ml-1">Expected Audience</label>
          <div className="relative group flex items-center">
            <Users className="absolute left-4 text-gray-700 group-focus-within:text-[#fe424d] transition-colors w-4 h-4 pointer-events-none z-10" />
            <select 
              {...register("audienceSize")}
              className="w-full bg-black/50 border border-white/10 rounded-xl pl-12 pr-12 py-4 focus:outline-none focus:border-[#fe424d]/50 text-gray-500 appearance-none cursor-pointer hover:border-white/20 transition-all relative z-0"
            >
              <option value="" className="bg-[#121212] text-gray-500">Select Size</option>
              <option value="50-200" className="bg-[#121212] text-gray-500">50 - 200 People</option>
              <option value="200-500" className="bg-[#121212] text-gray-500">200 - 500 People</option>
              <option value="500-1000" className="bg-[#121212] text-gray-500">500 - 1000 People</option>
              <option value="1000+" className="bg-[#121212] text-gray-500">1000+ People (Large Event)</option>
            </select>
            <ChevronDown className="absolute right-4 text-gray-700 group-hover:text-gray-400 transition-colors w-4 h-4 pointer-events-none z-10" />
          </div>
          {errors.audienceSize && <p className="text-[#fe424d] text-[10px] mt-1">{errors.audienceSize.message}</p>}
        </div>

        {/* TOPIC (Text Input) */}
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-500 ml-1">Topic / Keynote Subject</label>
          <input 
            type="text"
            {...register("topic")}
            placeholder="e.g. Students Seminar"
            className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-[#fe424d]/50 text-white placeholder:text-gray-700 transition-all"
          />
          {errors.topic && <p className="text-[#fe424d] text-[10px] mt-1">{errors.topic.message}</p>}
        </div>

        {/* DATE */}
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-500 ml-1">Preferred Date</label>
          <div className="relative">
            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-700 w-4 h-4" />
            <input 
              type="date"
              {...register("eventDate")}
              className="w-full bg-black/50 border border-white/10 rounded-xl pl-12 pr-5 py-4 focus:outline-none focus:border-[#fe424d]/50 text-gray-500 inverted-calendar-icon"
            />
          </div>
          {errors.eventDate && <p className="text-[#fe424d] text-[10px] mt-1">{errors.eventDate.message}</p>}
        </div>

        {/* ADDRESS */}
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-500 ml-1">City / Venue Address</label>
          <div className="relative">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-700 w-4 h-4" />
            <input 
              {...register("address")}
              placeholder="e.g. Surat, Gujarat"
              className="w-full bg-black/50 border border-white/10 rounded-xl pl-12 pr-5 py-4 focus:outline-none focus:border-[#fe424d]/50 text-white placeholder:text-gray-700"
            />
          </div>
          {errors.address && <p className="text-[#fe424d] text-[10px] mt-1">{errors.address.message}</p>}
        </div>
      </div>

      {/* SUBMIT BUTTON */}
      <button 
        type="submit" 
        disabled={loading}
        className="w-full border border-white/10 text-gray-400 font-black uppercase tracking-[0.3em] py-5 rounded-2xl flex items-center justify-center gap-3 transition-all duration-500 hover:border-[#fe424d]/35 hover:text-gray-200 hover:bg-[#fe424d]/5 disabled:opacity-50 disabled:cursor-not-allowed group cursor-pointer"
      >
        {loading ? (
          <div className="w-5 h-5 border-2 border-white/30 border-t-[#fe424d] rounded-full animate-spin"></div>
        ) : (
          <>
            Request Booking 
            <Send size={18} className="transition-colors group-hover:text-[#fe424d]/35" />
          </>
        )}
      </button>
    </form>
  );
}