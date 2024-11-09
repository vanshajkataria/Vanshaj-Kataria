import Navbar from "@/components/navbar";
import Photo from "@/components/photo";
import Bio from "@/components/bio";
import Experiences from "@/components/experience";
import Socials from "@/components/socials";
import Projects from "@/components/project";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex h-full w-full items-center justify-center p-4">
      <div className="grid h-full w-full grid-cols-1 grid-rows-12 gap-4">
        <div className="row-span-1 bg-white/10 glass-blur rounded-xl flex justify-center items-center px-4 py-4">
          <Navbar />
        </div>
        <div className="row-span-11 grid h-full w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-12 lg:grid-rows-12 gap-4 relative">
          <div className="lg:col-span-5 lg:row-span-6 bg-white/10 glass-blur rounded-xl flex justify-start items-end lg:justify-center lg:items-center lg:text-center px-6 py-6">
            <Bio />
          </div>
          <div className="lg:col-span-3 lg:row-span-6 bg-white/10 glass-blur rounded-xl flex justify-center items-center overflow-hidden">
            <Photo />
          </div>
          <div className="md:col-span-2 lg:col-span-4 lg:row-span-11 bg-white/10 glass-blur rounded-xl flex justify-start items-start px-6 py-6 overflow-scroll no-scrollbar scroll-smooth">
            <Experiences />
          </div>
          <div className="lg:col-span-4 lg:row-span-6 bg-white/10 glass-blur rounded-xl h-full px-6 py-6">
            <Skills />
          </div>
          <div className="lg:col-span-4 lg:row-span-6 bg-white/10 glass-blur rounded-xl h-full px-6 py-6">
            <Projects />
          </div>
          <div className="md:col-span-2 lg:col-span-4 lg:row-span-1 bg-white/10 glass-blur rounded-xl flex justify-center items-center px-6 py-6">
            <Socials />
          </div>
        </div>
      </div>
    </main>
  );
}
