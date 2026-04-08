"use client";

export default function Hero() {
  return (
    <section className="bg-black w-full flex flex-col overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 pt-10 sm:pt-14 md:pt-16 lg:pt-20 pb-10 md:pb-16 flex flex-col-reverse md:flex-row items-center gap-10 lg:gap-16">
    
        <div className="w-full md:w-[55%] lg:w-[50%] flex flex-col text-left justify-center">
          <p className="text-gray-400 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl">
            <span className="text-[#fe424d] font-bold">Jigna Kalsariya </span>is a young leader and <span className="text-[#fe424d] font-bold">Motivational Speaker </span>whose journey inspires students to aim higher and embrace their true potential. Through her talks and workshops, she turns ideas into action and encourages every young individual to aim higher and grow every day.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a 
              href="/speaker/videos" 
              className="px-6 py-2.5 md:px-8 md:py-3 bg-black border border-gray-600 text-white/70 font-bold uppercase tracking-widest rounded-full hover:border-[#fe424d] hover:text-[#fe424d] transition-all duration-300 text-[10px] md:text-xs"
            >
              watch videos
            </a>
            <a 
              href="/speaker/book" 
              className="px-6 py-2.5 md:px-8 md:py-3 bg-black border border-gray-600 text-white/70 font-bold uppercase tracking-widest rounded-full hover:border-[#fe424d] hover:text-[#fe424d] transition-all duration-300 text-[10px] md:text-xs"
            >
              Book a session
            </a>
          </div>
        </div>

        <div className="w-full md:w-[45%] lg:w-[40%] relative group">
          <div className="absolute -inset-4 bg-[#fe424d]/5 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          
          <div className="relative aspect-[4/3] sm:aspect-video md:aspect-square lg:aspect-[16/10] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-zinc-900/50">
            <img 
              src="/speaker/jigna-intro.png" 
              alt="Jigna Kalsariya" 
              className="w-full h-full object-cover grayscale-[15%] transition-all duration-700"
            />
          </div>
        </div>

      </div>
    </section>
  );
}