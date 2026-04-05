"use client";

import { Quote, User } from "lucide-react"; // Quote icon ke liye

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "Mitali Jivrajai",
      role: "Student Attendee",
      quote: "Jigna’s session was truly inspiring. The way she explained goal setting and self-discipline made it very easy to understand and apply in real life. I left the seminar feeling more focused and motivated than ever.",
      image: "/testimonials/p1.jpg"
    },
    {
      id: 2,
      name: "Ramesh Mehta",
      role: "School Faculty Member",
      quote: "Her talk on confidence and mindset created a lasting impact on our students. Jigna has a unique ability to connect with young minds and guide them in the right direction.",
      image: "/testimonials/p2.jpg"
    },
    {
      id: 3,
      name: "Khush Patel",
      role: "Seminar Participant",
      quote: "The session was not just motivational, but also very practical. Her insights on balancing academics, personal growth, and family values were extremely valuable.",
      image: "/testimonials/p3.jpg"
    }
  ];

  return (
    <section className="bg-black py-15 px-6 border-t border-white/5 font-jakarta text-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* CENTERED HEADING (Consistent with MediaKit) */}
        <div className="flex justify-center">
          <div className="group inline-flex items-center gap-3">
            <h2 className="text-[#fe424d] font-black tracking-[0.3em] uppercase text-lg md:text-xl">
              Testimonials
            </h2>
          </div>
        </div>

        {/* 3-COLUMN TESTIMONIAL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <div 
              key={rev.id} 
              className="group flex flex-col bg-zinc-900/40 border border-white/10 rounded-3xl p-8 md:p-10 hover:border-[#fe424d]/35 transition-all duration-500 relative overflow-hidden"
            >
              {/* Subtle Quote Icon Background */}
              <Quote className="absolute -top-4 -right-4 w-24 h-24 text-white/5 group-hover:text-[#fe424d]/5 transition-colors duration-500" />

              {/* Quote Text */}
              <div className="relative z-10 flex-1">
                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 group-hover:text-gray-300 transition-colors">
                  "{rev.quote}"
                </p>
              </div>

              {/* Reviewer Info */}
              <div className="relative z-10 flex items-center gap-4 border-t border-white/5 pt-6">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-[#fe424d]/40 transition-all">
                  {/* <img 
                    src={rev.image} 
                    alt={rev.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                  /> */}
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <User className="text-gray-500 w-6 h-6" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <h4 className="text-gray-300 font-bold text-sm md:text-base group-hover:text-gray-100 transition-colors">
                    {rev.name}
                  </h4>
                  <span className="text-[#fe424d] text-[9px] font-black uppercase tracking-widest leading-none mt-1">
                    {rev.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}