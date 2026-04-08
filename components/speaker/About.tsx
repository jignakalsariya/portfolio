"use client";
import Image from "next/image";

export default function About() {
  return (
    <section className="bg-black py-15 px-6 font-jakarta text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
       
          <div className="relative group overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
            <div className="relative aspect-[4/5] md:aspect-square overflow-hidden">
              <Image 
                src="/speaker/jigna-about.png" 
                alt="Jigna Kalsariya"
                fill
                className="object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
              />
    
              <div className="absolute bottom-8 right-8 bg-black/60 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl">
                <p className="text-[#fe424d] text-3xl font-black leading-none text-right">100+</p>
                <p className="text-gray-400 text-[10px] uppercase tracking-widest mt-1 text-right">
                  Seminars Delivered
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="space-y-4">
              <h2 className="text-[#fe424d] font-black tracking-[0.2em] uppercase text-sm">
                About Jigna Kalsariya
              </h2>
            </div>

            <div className="space-y-6 text-gray-400 text-base md:text-lg leading-relaxed tracking-wide">
              <p>
                Jigna Kalsariya is a <span className="text-white font-bold underline-offset-8 decoration-[#fe424d]/40">Youth Motivational Speaker</span> dedicated to inspiring students to unlock their true potential. As a <span className="text-white font-bold">Gujarat State Topper</span> in both SSC and HSC, she combines academic excellence with a deep passion for guiding others toward success.
              </p>
  
              <p>
                Currently pursuing <span className="text-white font-medium">B.Tech in Computer Science at NIT Surat</span>, Jigna has conducted <span className="text-[#fe424d] font-black">100+ seminars</span>, impacting students across various platforms. Her sessions specialize in <span className="text-white font-semibold">Goal Setting</span>, <span className="text-white font-semibold">Self-Confidence</span>, and developing a <span className="text-white font-semibold">Growth Mindset</span>.
              </p>

              <p>
                Beyond academics, she addresses themes of <span className="text-white">Family Values</span> and <span className="text-white">Social Awareness</span>, aiming to nurture a responsible generation. Through her <span className="text-white">engaging and relatable</span> style, Jigna empowers individuals to move forward with <span className="text-[#fe424d] font-black uppercase tracking-widest text-sm">Clarity, Confidence, & Purpose</span>.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}