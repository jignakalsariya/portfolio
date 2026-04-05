"use client";
import Link from "next/link";

export default function FeaturedProjects() {
  const projects = [
    {
      title: "NexMart - Full-Stack E-commerce",
      date: "Jan 2024",
      description: "A scalable online marketplace featuring secure user auth, real-time inventory management, and Stripe integration.",
      image: "/projects/ecommerce.png", 
      tech: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
      link: "/developer/projects/nexmart",
      github: "https://github.com/yourusername/project", 
      demo: "https://project-demo.com" 
    },
    {
      title: "CoEdit - Real-time Collaborative Tool",
      date: "Nov 2023",
      description: "A collaborative web application allowing multiple users to edit code simultaneously with live syntax highlighting.",
      image: "/projects/collab.png", 
      tech: ["React", "Socket.io", "Redis", "Tailwind"],
      link: "/developer/projects/coedit",
      github: "https://github.com/yourusername/project",
      demo: "https://project-demo.com"
    },
    {
      title: "DevAnalytics - Activity Dashboard",
      date: "Sep 2023",
      description: "An integrated dashboard visualizing GitHub commit histories and coding activity using D3.js and GitHub API.",
      image: "/projects/dashboard.png", 
      tech: ["Next.js", "D3.js", "GitHub API", "PostgreSQL"],
      link: "/developer/projects/devanalytics",
      github: "https://github.com/yourusername/project",
      demo: "https://project-demo.com"
    }
  ];

  return (
    <section className="bg-black py-12 px-6 border-t border-white/5 font-jakarta">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* CENTERED CLICKABLE HEADING */}
        <div className="flex justify-center">
          <Link 
            href="/developer/projects" 
            className="group inline-flex items-center gap-3 transition-opacity duration-300 hover:opacity-80"
          >
            <h2 className="text-[#fe424d] font-black tracking-[0.3em] uppercase text-lg md:text-xl">
              Featured Projects
            </h2>
          </Link>
        </div>

        {/* Projects Grid: Snap from 1 column to 3 columns directly */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div 
              key={i} 
              className="group flex flex-col bg-zinc-900/40 border border-white/10 rounded-3xl overflow-hidden hover:border-[#fe424d]/35 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden bg-zinc-900">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                   <a href={project.github} target="_blank" className="p-2 bg-black/60 backdrop-blur-md border border-white/10 rounded-full hover:bg-[#fe424d] transition-colors">
                      <svg className="w-4 h-4 text-gray-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                   </a>
                   <a href={project.demo} target="_blank" className="p-2 bg-black/60 backdrop-blur-md border border-white/10 rounded-full hover:bg-[#fe424d] transition-colors">
                      <svg className="w-4 h-4 text-gray-400 hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                   </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex flex-col mb-3">
                  <span className="text-[#fe424d]/80 text-[9px] font-bold uppercase tracking-widest mb-1">
                    {project.date}
                  </span>
                  <h4 className="text-lg font-bold text-gray-300 group-hover:text-gray-200 transition-colors">
                    {project.title}
                  </h4>
                </div>
                
                <p className="text-gray-500 text-xs leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, ti) => (
                    <span key={ti} className="px-2 py-1 bg-white/5 border border-white/10 rounded-lg text-[8px] font-bold text-gray-400 uppercase tracking-wider">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Link to Case Study */}
                <Link 
                  href={project.link}
                  className="inline-flex items-center gap-2 text-gray-300 font-black uppercase tracking-widest text-[9px] hover:text-gray-100 transition-all"
                >
                  View Case Study 
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}