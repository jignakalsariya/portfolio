import SubNavbar from "@/components/developer/SubNavbar";
import Hero from "@/components/developer/Hero";
import TechStacks from "@/components/developer/TechStacks";
import Projects from "@/components/developer/Projects";
import Experience from "@/components/developer/Experience";

export default function DeveloperPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      
      <SubNavbar/>
      <Hero />
      <TechStacks />
      <Projects />
      <Experience />

    </main>
  );
}