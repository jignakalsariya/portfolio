import SubNavbar from "@/components/speaker/SubNavbar";
import Hero from "@/components/speaker/Hero";
import VideoGrid from "@/components/speaker/VideoGrid";
import MediaKit from "@/components/speaker/MediaKit";
import Testimonials from "@/components/speaker/Testimonials";

export default function DeveloperPage() {
  return (
    // Background pure black aur text white taaki consistency bani rahe
    <main className="bg-black text-white min-h-screen">
      
      <SubNavbar/>
  
      <Hero />

      <VideoGrid />

      <MediaKit />

      <Testimonials />

    </main>
  );
}