"use client";
import Image from "next/image";
import { Download } from "lucide-react";

export default function MediaKit() {
  const images = [
    "/speaker/photo1.jpg",
    "/speaker/photo2.jpg",
    "/speaker/photo3.jpg",
    "/speaker/photo4.jpg",
    "/speaker/photo5.jpg",
    "/speaker/photo6.jpg",
    "/speaker/photo7.jpg",
  ];

  // Infinite loop ke liye repeat
  const repeatedImages = [...images, ...images, ...images];

  return (
    <section className="bg-black w-full py-15 overflow-hidden border-t border-white/5 font-jakarta">
      {/* Title Section (Same as VideoGrid) */}
      <div className="max-w-7xl mx-auto flex flex-col gap-12 mb-12 px-6">
            <div className="flex justify-center">
              <div className="group inline-flex items-center gap-3">
                <h2 className="text-[#fe424d] font-black tracking-[0.3em] uppercase text-lg md:text-xl">
              Media Kit
                </h2>
              </div>
            </div>
      </div>

      <div className="relative flex">
        {/* Animation class applied to your exact layout */}
        <div className="flex animate-infinite-scroll gap-6 md:gap-10 hover:[animation-play-state:paused]">
          {repeatedImages.map((src, index) => (
            <div 
              key={index} 
              className="relative flex-none w-[300px] h-[200px] md:w-[400px] md:h-[280px] rounded-2xl overflow-hidden group border border-white/10 transition-all duration-500 hover:border-[#fe424d]/50"
            >
              <Image
                src={src}
                alt={`Gallery photo ${index}`}
                fill
                className="object-cover grayscale-[20%] group-hover:grayscale-0 transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Download Button Overlay */}
              <a 
                href={src} 
                download 
                className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 cursor-pointer"
              >
                <div className="w-14 h-14 bg-black/60 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center shadow-2xl transform scale-75 group-hover:scale-100 transition-transform duration-500">
                  <Download className="text-[#fe424d] w-6 h-6" strokeWidth={3} />
                </div>
              </a>

              {/* Your original Red Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#fe424d]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>

      {/* Your original Button Style */}
      <div className="flex justify-center mt-16">
        <button className="px-10 py-4 border border-white/14 text-gray-300 font-black uppercase tracking-[0.2em] text-[12px] rounded-xl hover:border-[#fe424d]/35 transition-all hover:bg-[#fe424d]/5 hover:text-gray-100">
          Download Entire Press Kit
        </button>
      </div>
    </section>
  );
}