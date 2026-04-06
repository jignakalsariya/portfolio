"use client";
import Image from "next/image";
import { Download } from "lucide-react";

export default function MediaKit() {
  const images = [
    "/speaker/photo1.png", "/speaker/photo2.png", "/speaker/photo3.png",
    "/speaker/photo4.png", "/speaker/photo5.png", "/speaker/photo6.png",
    "/speaker/photo7.png", "/speaker/photo8.png", "/speaker/photo9.png",
    "/speaker/photo10.png", "/speaker/photo11.png", "/speaker/photo12.png",
    "/speaker/photo13.png", "/speaker/photo14.png", "/speaker/photo15.png",
    "/speaker/photo16.png", "/speaker/photo17.png", "/speaker/photo18.png",
    "/speaker/photo19.png", "/speaker/photo20.png", "/speaker/photo21.png",
    "/speaker/photo22.png", "/speaker/photo23.png"
  ];

  // Seamless loop ke liye array ko sirf ek baar duplicate karna kaafi hai
  const repeatedImages = [...images, ...images];

  return (
    <section className="bg-black w-full py-20 overflow-hidden border-t border-white/5 font-jakarta">
      <div className="max-w-7xl mx-auto mb-12 px-6">
        <div className="flex justify-center">
          <h2 className="text-[#fe424d] font-black tracking-[0.3em] uppercase text-lg md:text-xl">
            Media Kit
          </h2>
        </div>
      </div>

      {/* Main Slider Container */}
      <div className="relative flex overflow-hidden">
        {/* whitespace-nowrap aur flex-nowrap zaroori hain seamless loop ke liye */}
        <div className="flex flex-nowrap animate-infinite-scroll-speaker gap-6 md:gap-10 hover:[animation-play-state:paused] w-max">
          {repeatedImages.map((src, index) => (
            <div 
              key={index} 
              className="relative flex-none w-[300px] h-[200px] md:w-[400px] md:h-[280px] rounded-2xl overflow-hidden group border border-white/10 transition-all duration-500 hover:border-[#fe424d]/50 shadow-2xl"
            >
              <Image
              src={src}
              alt={`Gallery photo ${index}`}
              fill
              // Ye line add karein:
              sizes="(max-width: 768px) 300px, 400px" 
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Download Button Overlay */}
              <a 
                href={src} 
                download 
                className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20"
              >
                <div className="w-14 h-14 bg-black/60 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-500">
                  <Download className="text-[#fe424d] w-6 h-6" strokeWidth={3} />
                </div>
              </a>

              {/* Red Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#fe424d]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-16">
  <a 
    href="/speaker/jigna-kalsariya-media-kit.zip" // Aapki zip file ka sahi path
    download="Jigna_Kalsariya_Media_Kit.zip" // Download hone par file ka jo naam dikhega
    className="px-10 py-4 border border-white/10 text-gray-300 font-black uppercase tracking-[0.2em] text-[12px] rounded-xl hover:border-[#fe424d]/35 transition-all hover:bg-[#fe424d]/5 hover:text-gray-100 group inline-block text-center"
  >
    Download Entire Press Kit
  </a>
</div>
    </section>
  );
}