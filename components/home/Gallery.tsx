import Image from "next/image";

export default function PhotoGallery() {
  const images = [
    "/gallery1.jpg", 
    "/gallery2.jpg",
    "/gallery3.jpg",
    "/gallery4.jpg",
    "/gallery5.jpg",
  ];

  // Infinite loop ke liye hum 3-4 baar repeat kar sakte hain taaki gap na dikhe
  const repeatedImages = [...images, ...images, ...images];

  return (
    <section className="bg-black w-full py-10 overflow-hidden border-t border-white/5">
      <div className="relative flex">
        
        {/* Ye class ab seedha globals.css se animation legi */}
        <div className="animate-infinite-scroll gap-6 md:gap-10">
          {repeatedImages.map((src, index) => (
            <div 
              key={index} 
              className="relative flex-none w-[300px] h-[200px] md:w-[400px] md:h-[280px] rounded-2xl overflow-hidden group border border-white/10 transition-all duration-500 hover:border-[#fe424d]/50"
            >
              <Image
                src={src}
                alt={`Gallery photo ${index}`}
                fill
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