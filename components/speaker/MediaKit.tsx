"use client";

import { Download } from "lucide-react";

export default function MediaKit() {
  const photos = [
    { id: 1, title: "Official Portrait", url: "/speaker/photo1.jpg" },
    { id: 2, title: "Stage Action", url: "/speaker/photo2.jpg" },
    { id: 3, title: "Keynote Session", url: "/speaker/photo3.jpg" },
    { id: 4, title: "Speaker Headshot", url: "/speaker/photo4.jpg" },
  ];

  return (
    <section className="bg-black py-15 px-6 border-t border-white/5 font-jakarta text-white">
      {/* Container width 7xl is perfect for a 4-column row */}
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* CENTERED HEADING */}
        <div className="flex justify-center">
          <div className="group inline-flex items-center gap-3">
            <h2 className="text-[#fe424d] font-black tracking-[0.3em] uppercase text-lg md:text-xl">
              Media Kit
            </h2>
          </div>
        </div>

        {/* 4-COLUMN GRID (All in 1 Row on Desktop) */}
        {/* md:grid-cols-2 (Tablet) | lg:grid-cols-4 (Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {photos.map((photo) => (
            <div 
              key={photo.id} 
              className="group flex flex-col bg-zinc-900/40 border border-white/10 rounded-3xl overflow-hidden hover:border-[#fe424d]/35 transition-all duration-500 shadow-2xl"
            >
              {/* Image Container with fixed Portrait Aspect Ratio */}
              <div className="relative aspect-[1/1] overflow-hidden bg-zinc-900">
                <img 
                  src={photo.url} 
                  alt={photo.title}
                  className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                
                {/* Download Button Overlay */}
                <a 
                  href={photo.url} 
                  download 
                  className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 cursor-pointer"
                >
                  <div className="w-16 h-16 bg-black/60 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center shadow-2xl transform scale-75 group-hover:scale-100 transition-transform duration-500">
                    <Download className="text-[#fe424d] w-7 h-7" strokeWidth={2.5} />
                  </div>
                </a>
              </div>

              {/* Content Area */}
              {/* <div className="p-4 flex flex-col items-center text-center"> */}
                {/* <h4 className="text-[14px] md:text-[16px] font-bold text-gray-300 group-hover:text-white transition-colors leading-tight mb-3">
                  {photo.title}
                </h4> */}
                
                {/* Subtle Hover Action Link */}
                <a 
                  href={photo.url} 
                  download
                  className="text-[#fe424d] font-black uppercase tracking-widest text-[12px] opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 flex items-center gap-2"
                >
                </a>
              {/* </div> */}
            </div>
          ))}
        </div>

        {/* DOWNLOAD ALL BUTTON */}
        <div className="flex justify-center">
          <button className="px-10 py-4 border border-white/14 text-gray-300 font-black uppercase tracking-[0.2em] text-[12px] rounded-xl hover:border-[#fe424d]/35 transition-all hover:bg-[#fe424d]/5 hover:text-gray-100">
            Download Entire Press Kit
          </button>
        </div>

      </div>
    </section>
  );
}