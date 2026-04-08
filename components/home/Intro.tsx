import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="py-15 bg-black flex justify-center items-center border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center space-y-10">
        
        <div className="relative w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden border-[6px] border-[#fe424d] shadow-[0_0_50px_rgba(254,66,77,0.15)] transition-all duration-500 hover:scale-105">
          <Image 
  src="/home/jigna-intro.png" 
  alt="Jigna Kalsariya"
  fill
  className="object-cover"
  priority 
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
/>
        </div>

        <div className="space-y-6">
          <h2 className="text-[#fe424d] font-black tracking-[0.3em] uppercase text-xs md:text-sm">
            The Journey
          </h2>

          <p className="text-xl md:text-2xl lg:text-2xl text-gray-300 leading-[1.3] font-bold max-w-4xl mx-auto">
            <span className="text-[#fe424d]">Jigna Kalsariya</span> is a Computer Science student at NIT Surat  who achieved the prestige of being a Gujarat State Topper in both her 10th (SSC) and 12th (HSC) board exams.
          </p>
          
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto font-medium">
            Since she’s already walked that path to the top herself, she knows exactly what kind of discipline and strategy it takes for a student to hit those high percentages. 
          </p>

          <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
            Today, alongside her engineering journey, she also works as a <span className="text-[#fe424d] font-bold">Motivational Speaker,</span> breaking down the secrets of academic success and helping the youth move toward their goals with a clear, solid plan.
          </p>
        </div>
      </div>
    </section>
  );
}