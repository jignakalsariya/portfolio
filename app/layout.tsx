import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Plus_Jakarta_Sans } from "next/font/google"; // 1. Font import karein
import "./globals.css";

// 2. Font configuration
const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"], // Saare zaroori weights
  variable: "--font-jakarta", // CSS Variable banaya
});

// app/layout.tsx

export const metadata = {
  title: "JIGNA KALSARIYA",
  description: "Official Website of Jigna Kalsariya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jakarta.className} bg-black text-white antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
