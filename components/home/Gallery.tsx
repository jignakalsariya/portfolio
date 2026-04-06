"use client";
import Image from "next/image";

export default function PhotoGallery() {
  // Aapki 5 photos ki list
  const images = [
    "/home/gallery1.png", 
    "/home/gallery2.png",
    "/home/gallery3.png",
    "/home/gallery4.png",
    "/home/gallery5.png",
  ];

  // Seamless loop ke liye exact 2 baar repeat karein
  const repeatedImages = [...images, ...images];

  return (
    <section className="bg-black w-full py-20 overflow-hidden border-t border-white/5">
      
      {/* Outer Wrapper */}
      <div className="relative flex w-full overflow-hidden">
        
        {/* Animated Track: 'w-max' aur 'flex-nowrap' zaroori hain */}
        <div className="animate-infinite-scroll flex flex-nowrap gap-6 md:gap-10 w-max">
          {repeatedImages.map((src, index) => (
            <div 
              key={index} 
              className="relative flex-none w-[300px] h-[200px] md:w-[400px] md:h-[280px] rounded-2xl overflow-hidden group border border-white/10 transition-all duration-500 hover:border-[#fe424d]/50 shadow-2xl"
            >
              <Image
                src={src}
                alt={`Gallery photo ${index}`}
                fill
                // Performance optimize karne ke liye:
                sizes="(max-width: 768px) 300px, 400px" 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Vibrant Red Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#fe424d]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}