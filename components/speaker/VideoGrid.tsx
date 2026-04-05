"use client";
import Link from "next/link";

export default function VideoGrid() {
  const videos = [
    {
      id: "vid1",
      title: "NYP Parliament on Youth Talks",
      description: "Addressing the national assembly on the importance of youth-led innovation and leadership.",
      youtubeId: "YOUR_VIDEO_ID_1",
      date: "MAR 2024",
      category: "Leadership"
    },
    {
      id: "vid2",
      title: "SVNIT: The Future of Tech",
      description: "A keynote session at NIT Surat discussing how student developers can bridge the gap to industry.",
      youtubeId: "YOUR_VIDEO_ID_2",
      date: "JAN 2024",
      category: "Tech Talk"
    },
    {
      id: "vid3",
      title: "Mastering the Growth Mindset",
      description: "Practical strategies for students to build confidence and transform their career trajectory.",
      youtubeId: "YOUR_VIDEO_ID_3",
      date: "NOV 2023",
      category: "Motivational"
    }
  ];

  return (
    <section className="bg-black py-15 px-6 border-t border-white/5 font-jakarta text-white">
      {/* Container width ko 7xl rakha hai taaki 1 row mein space achhi mile */}
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* CENTERED HEADING */}
        <div className="flex justify-center">
          <Link 
            href="/speaker/videos" 
            className="group inline-flex items-center gap-3 transition-opacity duration-300 hover:opacity-80"
          >
            <h2 className="text-[#fe424d] font-black tracking-[0.3em] uppercase text-lg md:text-xl">
              Featured Videos
            </h2>
          </Link>
        </div>

        {/* 1 ROW GRID (md:grid-cols-3 ensures all 3 items stay in one row from tablet upwards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          {videos.map((vid) => (
            <div 
              key={vid.id} 
              className="group flex flex-col bg-zinc-900/40 border border-white/10 rounded-3xl overflow-hidden hover:border-[#fe424d]/35 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden bg-zinc-900">
                <img 
                  src={`https://img.youtube.com/vi/${vid.youtubeId}/maxresdefault.jpg`} 
                  alt={vid.title}
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                
                {/* Date Badge */}
                <div className="absolute top-4 right-4 px-2 py-1.5 bg-black/50 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white/80 text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] leading-none">
                    {vid.date}
                  </span>
                </div>

                {/* Play Button */}
                <a 
                  href={`https://www.youtube.com/watch?v=${vid.youtubeId}`}
                  target="_blank"
                  className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/0 transition-all duration-500"
                >
                  <div className="w-12 h-12 bg-[#fe424d] rounded-full flex items-center justify-center shadow-2xl transform scale-90 group-hover:scale-100 transition-transform duration-500">
                    <div className="w-0 h-0 border-t-[7px] border-t-transparent border-l-[12px] border-l-white border-b-[7px] border-b-transparent ml-1"></div>
                  </div>
                </a>
              </div>

              {/* Content Area */}
              <div className="p-6 lg:p-8 flex flex-col flex-1">
                <span className="text-[#fe424d] text-[9px] font-black uppercase tracking-[0.2em] mb-2">
                  {vid.category}
                </span>
                <h4 className="text-lg font-bold text-gray-300 group-hover:text-gray-200 transition-colors leading-tight mb-4">
                  {vid.title}
                </h4>
                
                <p className="text-gray-500 text-xs leading-relaxed mb-6 flex-1">
                  {vid.description}
                </p>

                <a 
                  href={`https://www.youtube.com/watch?v=${vid.youtubeId}`}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-gray-300 font-black uppercase tracking-widest text-[12px] hover:text-gray-100 transition-all"
                >
                  Watch Video
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}