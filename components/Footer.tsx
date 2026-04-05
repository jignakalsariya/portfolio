"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Social Icons as SVG Paths (Cleaner & No Errors)
  const socialIcons = [
    { 
      name: "Youtube", 
      link: "https://www.youtube.com/@jigna_kalsariya_official", 
      svg: <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33zM9.75 15.02V8.48L15.45 11.75l-5.7 3.27z" />
    },
    { 
      name: "Instagram", 
      link: "https://www.instagram.com/jigna_kalsariya_official", 
      svg: <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></g>
    },
    { 
      name: "Facebook", 
      link: "https://www.facebook.com/share/14Y6b6uNrW9", 
      svg: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    },
    { 
      name: "Linkedin", 
      link: "https://www.linkedin.com/in/jigna-kalsariya-40914332a", 
      svg: <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></g>
    }
  ];

  return (
    <footer className="bg-black text-white py-15 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* 1. Brand Section */}
          <div className="space-y-4">
            <Link href="/">
               <img src="/logo.png" alt="JK Logo" className="h-10 w-auto opacity-90" />
            </Link>
            <p className="text-gray-400 max-w-xs text-sm leading-relaxed">
              Empowering the youth and students to achieve academic excellence through proven strategies and a winner's mindset.
            </p>
          </div>

          {/* 2. Contact Section */}
          <div className="space-y-6">
              <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors">
                <h3 className="text-lg font-bold text-[#fe424d] uppercase tracking-widest">Contact</h3>
              </Link>
            <div className="space-y-4">
              
              <div className="flex items-center gap-3 text-gray-400 hover:text-gray-300 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <span>+91 91860 37798</span>
              </div>
              
              <div className="flex items-center gap-3 text-gray-400 hover:text-gray-300 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <span>jignakalsariya.contact@gmail.com</span>
              </div>
            </div>
          </div>

          {/* 3. Get in Touch (Socials) */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-[#fe424d] uppercase tracking-widest">Get In Touch</h3>
            <div className="flex gap-5">
              {socialIcons.map((social) => (
                <a 
                  key={social.name}
                  href={social.link} 
                  target="_blank" 
                  className="p-2.5 bg-white/5 rounded-full hover:bg-[#fe424d] transition-all duration-300 flex items-center justify-center text-white"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-gray-400 hover:text-white">
                    {social.svg}
                  </svg>
                </a>
              ))}
            </div>
          </div>

        </div>

        <div className="h-[1px] w-full bg-white/10 mb-8"></div>

        <div className="text-center text-gray-400 text-sm md:text-base tracking-wide">
          <p>
            Copyright © {currentYear} | All Rights Reserved <br /> 
            <span className="text-[#fe424d] font-semibold ml-1 underline underline-offset-4 decoration-white/10">Designed by Jigna Kalsariya</span>
          </p>
        </div>

      </div>
    </footer>
  );
}