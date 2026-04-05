"use client";
import Link from "next/link";

export default function Certificates() {
  const credentials = [
    {
      title: "Meta Front-End Developer",
      issuer: "Coursera / Meta",
      date: "2024",
      type: "Certification",
      link: "#", // Add your certificate link here
      icon: "/icons/meta.svg" 
    },
    {
      title: "Google Data Analytics",
      issuer: "Google",
      date: "2023",
      type: "Certification",
      link: "#",
      icon: "/icons/google.svg"
    },
    {
      title: "LeetCode: Top 10% Badge",
      issuer: "LeetCode",
      date: "Active",
      type: "Achievement",
      link: "https://leetcode.com/yourusername",
      icon: "/icons/leetcode.svg"
    },
    {
      title: "Global Rank 500 (Sample Contest)",
      issuer: "Codeforces",
      date: "2024",
      type: "Achievement",
      link: "#",
      icon: "/icons/codeforces.svg"
    }
  ];

  return (
    <section className="bg-black py-12 px-6 border-t border-white/5 font-jakarta">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* CENTERED HEADING */}
        <div className="flex justify-center">
          <div className="group inline-flex items-center gap-3">
            <h2 className="text-[#fe424d] font-black tracking-[0.3em] uppercase text-lg md:text-xl">
              Certificates & Achievements
            </h2>
          </div>
        </div>

        {/* CREDENTIALS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {credentials.map((item, i) => (
            <div 
              key={i} 
              className="group relative p-6 bg-zinc-900/30 border border-white/10 rounded-3xl hover:border-[#fe424d]/35 transition-all duration-500"
            >
              {/* Type Badge (Top Right) */}
              <span className="absolute top-4 right-4 text-[7px] font-black uppercase tracking-[0.2em] text-white/30 group-hover:text-[#fe424d] transition-colors">
                {item.type}
              </span>

              {/* Icon & Content */}
              <div className="flex flex-col gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-black border border-white/5 group-hover:border-[#fe424d]/20 transition-all">
                  <img src={item.icon} alt={item.issuer} className="w-5 h-5 opacity-50 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all" />
                </div>

                <div>
                  <h3 className="text-gray-300 font-bold text-sm leading-tight mb-1 group-hover:text-gray-200">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-[10px] font-bold uppercase tracking-wider">
                    {item.issuer} • {item.date}
                  </p>
                </div>

                {/* Verify Link */}
                <a 
                  href={item.link} 
                  target="_blank" 
                  className="mt-2 inline-flex items-center gap-2 text-[#fe424d] text-[9px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0"
                >
                  Verify Credential
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}