"use client";
import Link from "next/link";

export default function Topics() {
  const topics = [
  {
    id: "topic1",
    title: "Youth Leadership & Policy",
    description: "National Youth Parliament ke experience se seekha hua—kaise young leaders technology aur governance mein impact la sakte hain.",
    youtubeId: "z5pHXqcIl4o",
    date: "MAR 2026",
    category: "Leadership"
  },
  {
    id: "topic2",
    title: "Tech Innovation at SVNIT",
    description: "Engineering students ke liye roadmap: Kaise classroom projects ko industry-level products mein transform karein.",
    youtubeId: "Ay1D399k3NU",
    date: "FEB 2026",
    category: "Speech"
  },
  {
    id: "topic3",
    title: "The Growth Mindset Strategy",
    description: "Practical strategies for students to build confidence, handle academic pressure, and transform their career trajectory.",
    youtubeId: "7JQbmvALmkE",
    date: "JAN 2026",
    category: "Speech"
  },
  {
    id: "topic4",
    title: "Robotics & The ROS2 Ecosystem",
    description: "Deep dive into the world of robotics. Understanding why open-source is the future of hardware innovation.",
    youtubeId: "HTTE5yZC1dk",
    date: "JUN 2025",
    category: "Motivational"
  },
  {
    id: "topic5",
    title: "Empowering Women in STEM",
    description: "Addressing the challenges and opportunities for women in tech. Inspiring the next generation of female engineers.",
    youtubeId: "c1SFjRaTsxE",
    date: "DEC 2024",
    category: "Speech"
  },
  {
    id: "topic6",
    title: "Building GDSC Communities",
    description: "The art of community building: How to lead a tech club and foster a culture of peer-to-peer learning.",
    youtubeId: "1kO5Q1Jsk0w",
    date: "NOV 2024",
    category: "Speech"
  },
  {
    id: "topic7",
    title: "Open Source Contribution 101",
    description: "Why contributing to open source is the best way to learn software engineering and build a global network.",
    youtubeId: "kBavN0LK0P8",
    date: "AUG 2024",
    category: "Speech"
  },
  {
    id: "topic8",
    title: "Public Speaking for Introverts",
    description: "Kaise stage fear ko overcome karein aur apni voice ko ek powerful tool ki tarah use karein effectively.",
    youtubeId: "3s9F47yC62s",
    date: "APR 2022",
    category: "Community"
  },
  {
    id: "topic9",
    title: "The Future of AI & Ethics",
    description: "Exploring the impact of Artificial Intelligence on our daily lives and the importance of ethical development.",
    youtubeId: "ubpEtG9TM8s",
    date: "FEB 2020",
    category: "Speech"
  }
];

  return (
    <section className="bg-black px-6 border-t border-white/5 font-jakarta text-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* CENTERED HEADING (Matches VideoGrid) */}
        <div className="flex flex-col items-center text-center gap-6 px-4 md:px-0">
  {/* TOP LABEL / HEADING */}
  <div className="flex flex-col gap-3">
    <h2 className="text-[#fe424d] font-black tracking-[0.3em] uppercase text-sm md:text-lg lg:text-xl">
      Signature Keynotes
    </h2>
    
  </div>

  {/* DESCRIPTION SECTION */}
  <div className="max-w-4xl flex flex-col gap-6">

    <p className="text-gray-400 text-sm md:text-base lg:text-lg leading-relaxed md:leading-loose tracking-wide">
      Jigna Kalsariya is a passionate motivational speaker who has delivered impactful speeches across a wide range of platforms. 
      She has conducted <span className="text-white font-bold underline underline-offset-4 decoration-[#fe424d]/50">100+ seminars</span>, 
      guiding students on how to set meaningful goals, stay focused, and achieve success in their academic and personal journeys.
    </p>

    <p className="text-gray-400 text-sm md:text-base lg:text-lg leading-relaxed max-w-4xl mx-auto px-6 tracking-wide">
  Her sessions also extend to family values and social awareness, where she shares 
  practical insights to build stronger relationships and a responsible mindset. 
  Through her engaging talks, Jigna continues to inspire individuals to grow with 
  <span className="text-white font-medium"> confidence, clarity, and purpose.</span>
</p>
  </div>
</div>

        {/* 1 ROW GRID (Exact Same Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          {topics.map((topic) => (
            <div 
              key={topic.id} 
              className="group flex flex-col bg-zinc-900/40 border border-white/10 rounded-3xl overflow-hidden hover:border-[#fe424d]/35 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden bg-zinc-900">
                <img 
                  src={`https://img.youtube.com/vi/${topic.youtubeId}/hqdefault.jpg`} 
                  alt={topic.title}
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                
                {/* Date Badge (Used as Topic Index) */}
                <div className="absolute top-4 right-4 px-2 py-1.5 bg-black/50 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white/80 text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] leading-none">
                    {topic.date}
                  </span>
                </div>

                {/* Play Button */}
                <a 
                  href={`https://www.youtube.com/watch?v=${topic.youtubeId}`}
                  target="_blank"
                  className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/0 transition-all duration-500"
                >
                  <div className="w-12 h-12 bg-[#fe424d] rounded-full flex items-center justify-center shadow-2xl transform scale-90 group-hover:scale-100 transition-transform duration-500">
                    <div className="w-0 h-0 border-t-[7px] border-t-transparent border-l-[12px] border-l-white border-b-[7px] border-b-transparent ml-1"></div>
                  </div>
                </a>
              </div>

              {/* Content Area */}
              {/* <div className="p-6 lg:p-8 flex flex-col flex-1">
                <span className="text-[#fe424d] text-[9px] font-black uppercase tracking-[0.2em] mb-2">
                  {topic.category}
                </span>
                <h4 className="text-lg font-bold text-gray-300 group-hover:text-gray-200 transition-colors leading-tight mb-4">
                  {topic.title}
                </h4>
                
                <p className="text-gray-500 text-xs leading-relaxed mb-6 flex-1">
                  {topic.description}
                </p>

                <a 
                  href={`https://www.youtube.com/watch?v=${topic.youtubeId}`}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-gray-300 font-black uppercase tracking-widest text-[12px] hover:text-gray-100 transition-all"
                >
                  Watch Video
                </a>
              </div> */}
            </div>
          ))}
        </div>

        <div className="flex justify-center">
            <Link 
                href="/speaker/book"
                className="inline-flex items-center justify-center px-10 py-4 border border-white/14 text-gray-300 font-black uppercase tracking-[0.2em] text-[12px] rounded-xl hover:border-[#fe424d]/35 transition-all hover:bg-[#fe424d]/5 hover:text-gray-100"
            >
                Book a session now
            </Link>
        </div>

      </div>
    </section>
  );
}