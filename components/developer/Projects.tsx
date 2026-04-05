export default function Projects() {
  const projects = [
    { title: "Genetic Algorithm Optimiser", tag1: "Tech", tag2: "Python", img: "/proj1.png" },
    { title: "ROS2 Robotic Arm", tag1: "Tech", tag2: "Robotics", img: "/proj2.png" },
    { title: "RIAC Portal", tag1: "Tech", tag2: "Algorithm", img: "/proj3.png" },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 italic">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="bg-zinc-900/50 rounded-[2rem] overflow-hidden border border-white/5 group">
              <div className="h-48 bg-zinc-800 relative">
                 <img src={p.img} alt={p.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">{p.title}</h3>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-[#fe424d]/10 text-[#fe424d] text-xs rounded-full font-bold">{p.tag1}</span>
                  <span className="px-3 py-1 bg-white/5 text-gray-400 text-xs rounded-full">{p.tag2}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}