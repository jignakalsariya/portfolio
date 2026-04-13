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

      <div className="relative flex overflow-hidden">
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
              sizes="(max-width: 768px) 300px, 400px" 
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              <a 
                href={src} 
                download 
                className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20"
              >
                <div className="w-14 h-14 bg-black/60 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-500">
                  <Download className="text-[#fe424d] w-6 h-6" strokeWidth={3} />
                </div>
              </a>

              <div className="absolute inset-0 bg-gradient-to-t from-[#fe424d]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
