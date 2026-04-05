"use client";
import Link from "next/link";

export default function SkillsHighlight() {
  const featuredTech = [
  { 
    name: "Next.js / React", 
    level: "Full-Stack Development", 
    detail: "Building scalable & modern web applications",
    icon: "/icons/nextjs.svg" 
  },
  { 
    name: "Python", 
    level: "AI & Intelligent Systems", 
    detail: "Machine Learning, AI & Scripting",
    icon: "/icons/python.svg" 
  },
  { 
    name: "C & C++", 
    level: "Systems Programming", 
    detail: "High-performance & low-level logic",
    icon: "/icons/cpp.svg" 
  },
  { 
    name: "Data Structures & Algorithms", 
    level: "Problem Solving", 
    detail: "Efficient & optimized algorithmic solutions",
    icon: "/icons/dsa.svg" 
  },
  { 
    name: "Docker / Kubernetes", 
    level: "DevOps & Cloud", 
    detail: "Containerization & scalable deployment",
    icon: "/icons/docker.svg" 
  },
  { 
    name: "DBMS", 
    level: "Data Architecture", 
    detail: "MySQL & MongoDB management",
    icon: "/icons/sql.svg" 
  }
];

  return (
    <section className="bg-black py-12 px-6 border-t border-white/5 font-jakarta">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        
        {/* CENTERED HEADING (Minimal Hover) */}
        <div className="flex justify-center">
          <Link 
            href="/developer/tech-stacks" 
            className="group inline-flex items-center gap-3 transition-opacity duration-300 hover:opacity-80"
          >
            <h2 className="text-[#fe424d] font-black tracking-[0.3em] uppercase text-lg md:text-xl">
              Tech Stacks
            </h2>
          
          </Link>
        </div>
        
        {/* TECH GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredTech.map((tech, i) => (
            <div 
              key={i} 
              className="px-6 py-6 bg-zinc-900/40 border border-white/10 rounded-3xl hover:border-[#fe424d]/35 transition-all duration-500 group flex items-start gap-5"
            >
              {/* ICON BOX */}
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-2xl bg-black border border-white/10 group-hover:border-[#fe424d]/30 transition-colors">
                <img 
                  src={tech.icon} 
                  alt={tech.name} 
                  className="w-6 h-6 object-contain opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all" 
                />
              </div>

              {/* INFO */}
              <div className="flex flex-col">
                <span className="text-[#fe424d] font-bold block text-[9px] uppercase tracking-widest mb-1 opacity-100">
                  {tech.level}
                </span>
                <h3 className="text-gray-300 font-bold text-lg mb-1">
                  {tech.name}
                </h3>
                <p className="text-gray-500 text-[11px] leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {tech.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}