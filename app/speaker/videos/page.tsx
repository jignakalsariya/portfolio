import SubNavbar from "@/components/speaker/SubNavbar";
import Video from "@/components/speaker/videos/Video";

export default function SpeakerVideosPage() {
  return (
    // Background pure black aur text white taaki consistency bani rahe
    <main className="bg-black text-white min-h-screen">
      <SubNavbar />
      <div className="pt-10"> {/* SubNavbar ke baad thoda space */}
        <Video />
      </div>
    </main>
  );
}