export default function TechStacks() {
  const stacks = [
    {
      title: "Languages",
      items: ["C++", "Python", "JavaScript"],
      icons: ["/icons/cpp.png", "/icons/python.png", "/icons/js.png"]
    },
    {
      title: "Robotics/AI",
      items: ["ROS2", "OpenCV", "Genetic Algorithms"],
      icons: ["/icons/ros.png", "/icons/opencv.png", "/icons/ai.png"]
    },
    {
      title: "Tools",
      items: ["Git", "Linux"],
      icons: ["/icons/git.png", "/icons/linux.png"]
    }
  ];

  return (
    <section id="tech" className="py-20 bg-zinc-950 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 italic">Tech Stacks</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stacks.map((stack, i) => (
            <div key={i} className="bg-black border border-white/5 p-8 rounded-[2rem] text-center hover:border-[#fe424d]/30 transition-all">
              <h3 className="text-xl font-bold mb-8 text-[#fe424d]">{stack.title}</h3>
              <div className="flex justify-center gap-6">
                {stack.items.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center p-2">
                      <span className="text-xs font-bold text-gray-400">{item[0]}</span> {/* Placeholder for Icons */}
                    </div>
                    <span className="text-xs text-gray-400">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}