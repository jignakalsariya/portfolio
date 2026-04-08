import SubNavbar from "@/components/speaker/SubNavbar";
import Video from "@/components/speaker/Video";

export default function SpeakerVideosPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <SubNavbar />
      <div className="pt-10"> 
        <Video />
      </div>
    </main>
  );
}