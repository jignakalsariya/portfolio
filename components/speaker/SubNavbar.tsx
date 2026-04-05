"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SpeakerSubNavbar() {
  const pathname = usePathname();

  const subLinks = [
    { name: "Home", path: "/speaker" },
    { name: "Videos", path: "/speaker/videos" },
    { name: "About", path: "/speaker/about" },
    { name: "Book a session", path: "/speaker/book" },
    { name: "Contact", path: "/speaker/contact" },
  ];

  return (
    <div className="w-full bg-black border-y border-white/10 sticky top-[72px] md:top-[80px] z-40 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto flex overflow-x-auto no-scrollbar justify-start md:justify-center items-center">
        {subLinks.map((link, index) => {
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
                
                /* Active state: Red (#fe424d), Inactive: White 70% */
                ${isActive 
                  ? "text-[#fe424d] opacity-100" 
                  : "text-white opacity-70 hover:opacity-100 hover:text-[#fe424d]"
                }

                /* Divider between links */
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