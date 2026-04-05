"use client";
import Image from "next/image";

export default function About() {
  return (
    <section className="bg-black py-24 px-6 font-jakarta text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT SIDE: THE IMAGE BOX */}
          <div className="relative group">
            {/* Decorative Background Element */}
            <div className="absolute -inset-4 bg-[#fe424d]/10 rounded-[2.5rem] blur-2xl group-hover:bg-[#fe424d]/20 transition-all duration-700"></div>
            
            {/* Main Image Container */}
            <div className="relative aspect-[4/5] md:aspect-square overflow-hidden rounded-[2rem] border border-white/10 grayscale-[30%] group-hover:grayscale-0 transition-all duration-700">
              <Image 
                src="/jigna-about.jpg" // Apni professional photo yahan lagayein
                alt="Jigna Kalsariya"
                fill
                className="object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Floating Stat Badge */}
              <div className="absolute bottom-8 right-8 bg-black/60 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl">
                <p className="text-[#fe424d] text-3xl font-black italic leading-none">100+</p>
                <p className="text-gray-400 text-[10px] uppercase tracking-widest mt-1">Seminars Delivered</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: THE CONTENT */}
          <div className="flex flex-col gap-8">
            <div className="space-y-4">
              <h2 className="text-[#fe424d] font-black tracking-[0.4em] uppercase text-sm">
                The Voice & The Vision
              </h2>
              <h3 className="text-4xl md:text-6xl font-black italic leading-tight">
                Beyond the <span className="text-[#fe424d]">Stage.</span>
              </h3>
            </div>

            <div className="space-y-6 text-gray-400 text-base md:text-lg leading-relaxed tracking-wide">
              <p>
                I am <span className="text-white font-bold">Jigna Kalsariya</span>, a Computer Science student at <span className="text-white">NIT Surat</span> who discovered that my greatest tool isn't just code—it's communication. 
              </p>
              
              <p>
                What started as a small talk in a classroom has transformed into a journey across 100+ stages. My mission is to bridge the gap between human potential and real-world success. I don't just speak; I build blueprints for students to master their goals and for families to reconnect with their values.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="border-l-2 border-[#fe424d] pl-4">
                  <h4 className="text-white font-bold text-sm uppercase tracking-wider">Mission</h4>
                  <p className="text-xs mt-1">Empowering the youth to lead with clarity and purpose.</p>
                </div>
                <div className="border-l-2 border-[#fe424d] pl-4">
                  <h4 className="text-white font-bold text-sm uppercase tracking-wider">Education</h4>
                  <p className="text-xs mt-1">Pursuing B.Tech in CSE at SVNIT, Surat.</p>
                </div>
              </div>
            </div>

            {/* Signature / Quote */}
            <div className="pt-8 border-t border-white/5">
              <p className="italic text-gray-500 text-sm italic">
                "Leadership is not a title; it is the courage to stand up and speak for those who are still finding their voice."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}