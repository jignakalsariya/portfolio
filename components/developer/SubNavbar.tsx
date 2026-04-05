"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"; // Ye check karega hum kis page par hain

export default function SubNavbar() {
  const pathname = usePathname(); // Current URL nikalne ke liye

  const subLinks = [
    { name: "Academics", path: "/developer/academics" },
    { name: "Tech Stacks", path: "/developer/tech-stacks" },
    { name: "Projects", path: "/developer/projects" },
    { name: "About", path: "/developer/about" },
    { name: "Contact", path: "/developer/contact" },
  ];

  return (
    <div className="w-full bg-black border-y border-white/10 sticky top-[72px] md:top-[80px] z-40 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto flex overflow-x-auto no-scrollbar justify-start md:justify-center items-center">
        {subLinks.map((link, index) => {
          // Check if this link is currently active
          const isActive = pathname === link.path;

          return (
            <Link
              key={index}
              href={link.path}
              className={`
                px-5 md:px-8 py-4 
                text-[10px] md:text-[13px] 
                font-bold uppercase tracking-[0.15em] 
                transition-all duration-300
                flex-shrink-0
                
                /* Agar active hai toh Red, nahi toh White 70% opacity */
                ${isActive 
                  ? "text-[#fe424d] opacity-100" 
                  : "text-white opacity-70 hover:opacity-100 hover:text-[#fe424d]"
                }

                ${index !== subLinks.length - 1 ? 'border-r border-white/5' : ''}
              `}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}