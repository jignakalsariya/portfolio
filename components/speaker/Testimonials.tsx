"use client";

import { Quote } from "lucide-react"; // Quote icon ke liye

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "Aryan Sharma",
      role: "GDSC Lead, SVNIT",
      quote: "Jigna's session on youth leadership was a game-changer for our community. Her ability to break down complex tech concepts into actionable leadership traits is rare and impactful.",
      image: "/testimonials/p1.jpg"
    },
    {
      id: 2,
      name: "Dr. Rajesh V.",
      role: "Professor, CSE Dept",
      quote: "It's rare to see a 2nd-year student with such clarity of thought and public speaking confidence. Her workshop on ROS2 was highly professional and well-received by her peers.",
      image: "/testimonials/p2.jpg"
    },
    {
      id: 3,
      name: "Sneha Patel",
      role: "Student Attendee",
      quote: "I attended her 'Growth Mindset' talk last month. The energy she brings to the stage is infectious. She doesn't just speak; she actually connects with the students.",
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
                  <img 
                    src={rev.image} 
                    alt={rev.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                  />
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