import SubNavbar from "@/components/developer/SubNavbar";
import Hero from "@/components/developer/Hero";
import TechStacks from "@/components/developer/TechStacks";
import Projects from "@/components/developer/Projects";
import Experience from "@/components/developer/Experience";

export default function DeveloperPage() {
  return (
    // Background pure black aur text white taaki consistency bani rahe
    <main className="bg-black text-white min-h-screen">
      
      <SubNavbar/>
      {/* 1. Top Section: Header Navigation & Hero Image */}
      <Hero />

      {/* 2. Skills: Languages, Robotics, Tools */}
      <TechStacks />

      {/* 3. Featured Work: 3 Column Grid */}
      <Projects />

      {/* 4. Leadership & Experience Bullets */}
      <Experience />

    </main>
  );
}