"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Hero() {
  const images = [
    "/home/animation1.png",
    "/home/animation2.png",
    "/home/animation3.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  return (
    <section className="relative w-full overflow-hidden bg-black group">
      
      {/* 1. Image Container */}
      <div className="w-full relative">
        {images.map((src, index) => (
          <div
            key={src}
            className={`transition-opacity duration-1000 ease-in-out ${
              index === currentIndex 
                ? "opacity-100 relative z-10" 
                : "opacity-0 absolute inset-0 z-0"
            }`}
          >
            <img 
              src={src} 
              alt={`Hero Slide ${index + 1}`} 
              className="w-full h-auto block"
            />
          </div>
        ))}
      </div>

      <button 
        onClick={prevSlide}
        className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-30 
                   bg-black/30 hover:bg-black/60 text-white 
                   p-1.5 md:p-3 rounded-full backdrop-blur-sm 
                   transition-all duration-300
                   active:scale-95
                   md:opacity-0 md:group-hover:opacity-100" 
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-5 h-5 md:w-10 md:h-10" />
      </button>

      <button 
        onClick={nextSlide}
        className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-30 
                   bg-black/30 hover:bg-black/60 text-white 
                   p-1.5 md:p-3 rounded-full backdrop-blur-sm 
                   transition-all duration-300
                   active:scale-95
                   md:opacity-0 md:group-hover:opacity-100"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-5 h-5 md:w-10 md:h-10" />
      </button>

      <div className="absolute inset-0 bg-black/5 z-20 pointer-events-none" />
    </section>
  );
}