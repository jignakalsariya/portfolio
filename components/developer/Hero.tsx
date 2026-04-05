"use client";

export default function Hero() {
  return (
    <section className="bg-black w-full flex flex-col overflow-hidden font-jakarta">
      
      {/* 1. Container: Items-center and justify-center ensures everything stays in the visual middle */}
      <div className="max-w-6xl mx-auto px-6 pt-10 sm:pt-14 md:pt-16 lg:pt-20 pb-10 md:pb-16 flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-16">
        
        {/* LEFT SIDE: Image Container */}
        {/* 'flex justify-center' ensures image is centered in its half, removing the 'left-heavy' feel */}
        <div className="w-full md:w-1/2 flex justify-center relative group">
          <div className="absolute -inset-4 bg-[#fe424d]/5 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          
          <div className="relative aspect-[4/3] sm:aspect-video md:aspect-square lg:aspect-[16/10] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-zinc-900/50">
            <img 
              src="/developer/jigna-intro.png" 
              alt="Jigna Kalsariya" 
              className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-700 hover:scale-[1.03]"
            />
          </div>
        </div>

        {/* RIGHT SIDE: Text Content */}
        {/* 'md:items-start' keeps text left-aligned while the container itself is centered */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left justify-center">
          <p className="text-gray-400 text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl">
            I am <span className="text-[#fe424d] font-bold">Jigna Kalsariya, </span>
            currently pursuing Computer Science and Engineering at <span className="text-[#fe424d] font-bold">NIT Surat. </span>
            I am a tech enthusiast driven by curiosity, problem-solving, and creating projects that make a difference in the real world.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
            <a 
              href="/developer/projects" 
              className="px-6 py-2.5 md:px-8 md:py-3 bg-black border border-gray-600 text-white/70 font-bold uppercase tracking-widest rounded-full hover:border-[#fe424d] hover:text-[#fe424d] transition-all duration-300 text-[10px] md:text-xs"
            >
              View Projects
            </a>
            <a 
              href="/developer/contact" 
              className="px-6 py-2.5 md:px-8 md:py-3 bg-black border border-gray-600 text-white/70 font-bold uppercase tracking-widest rounded-full hover:border-[#fe424d] hover:text-[#fe424d] transition-all duration-300 text-[10px] md:text-xs"
            >
              Contact Me
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}