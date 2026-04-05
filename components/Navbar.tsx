"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react"; 

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Developer", path: "/developer" },
    { name: "Speaker", path: "/speaker" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full px-6 md:px-12 py-4 flex justify-between items-center bg-black shadow-lg sticky top-0 z-50 border-b border-white/5">
      
      {/* 1. Logo Section */}
      <div className="flex items-center gap-2">
        <Link href="/">
          <img
            src="/logo.png" 
            alt="JK Logo"
            className="h-10 md:h-12 w-auto object-contain cursor-pointer transition-transform hover:scale-105"
          />
        </Link>
      </div>

      {/* 2. Desktop Links (Now with #fe424d touch) */}
      <div className="hidden md:flex items-center gap-10 text-[17px] font-medium">
        {navLinks.map((link) => {
          const isActive = pathname === link.path;

          return (
            <Link
              key={link.name}
              href={link.path}
              className={`transition-all duration-300 ${
                isActive 
                  ? "text-[#fe424d] opacity-100 font-bold" 
                  : "text-gray-400 opacity-70 hover:opacity-100 hover:text-[#fe424d]"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>

      {/* 3. Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-400 hover:text-[#fe424d] transition-colors focus:outline-none"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* 4. Mobile Menu Overlay (Smooth Slide Down) */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black/98 backdrop-blur-md flex flex-col items-center gap-8 py-12 md:hidden border-b border-[#fe424d]/20 animate-in fade-in slide-in-from-top-2 duration-300">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setIsOpen(false)} 
                className={`text-xl hover:text-[#fe424d] transition-all duration-300 ${
                  isActive 
                    ? "text-[#fe424d] opacity-100 font-bold tracking-widest" 
                    : "text-gray-400 opacity-70 hover:opacity-100"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
         
        </div>
      )}
    </nav>
  );
}