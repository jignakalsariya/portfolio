export default function Experience() {
  return (
    <section className="py-20 px-6 bg-zinc-950">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 italic">Experience</h2>
        <div className="space-y-6 text-left">
          <div className="flex gap-4 items-start">
            <div className="w-2 h-2 rounded-full bg-[#fe424d] mt-2 shrink-0"></div>
            <p className="text-gray-300 text-lg">
              <span className="font-bold text-white">Leadership Roles</span> - Leading & coordinating Computer Science Engineering seminars and tech-events at SVNIT.
            </p>
          </div>
          <div className="flex gap-4 items-start">
            <div className="w-2 h-2 rounded-full bg-[#fe424d] mt-2 shrink-0"></div>
            <p className="text-gray-300 text-lg">
              <span className="font-bold text-white">Research & Development</span> - Active member at RIAC, working on advanced algorithmic solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}