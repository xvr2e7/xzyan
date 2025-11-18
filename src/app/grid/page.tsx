import ThemeToggle from "@/components/ThemeToggle";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";

export default function GridPage() {
  const projects = [
    {
      title: "Stereokinetic trefoil in VR",
      tags: ["VR", "Perception", "Psychophysics"],
      size: "square" as const,
      imageSrc: "/trefoil.gif",
      link: "/wip",
    },
    {
      title: "Gamification on visual analytics in VR",
      tags: ["VR", "Gamification", "Data-Viz", "HCI"],
      size: "wide" as const,
      imageSrc: "/mushroom.jpg",
      link: "/wip",
    },
    {
      title: "POiT: words connecting worlds",
      tags: ["Web", "Poetry", "HCI"],
      size: "tall" as const,
      imageSrc: "/poit.gif",
      link: "https://poit.xzyan.com",
    },
    {
      title:
        "Motion-based geometric optimization with perceptual constraints for SOTA video models",
      tags: ["CV", "Video", "Optimization", "ML"],
      size: "wide" as const,
      imageSrc: "/mopp.gif",
      link: "/wip",
    },
    {
      title: "The Questions Concerning Video Game",
      tags: ["Teaching", "Video Game", "Media Studies"],
      size: "square" as const,
      imageSrc: "/88s.gif",
      link: "https://xvr2e7.github.io/elts-88s/",
    },
    {
      title: "Chairness",
      tags: ["Generative", "3D", "ML", "Art"],
      size: "square" as const,
      imageSrc: "/chairs.gif",
      link: "/wip",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Theme toggle */}
      <div className="fixed top-5 right-5 z-50">
        <ThemeToggle />
      </div>

      {/* Back link - top-left */}
      <div className="fixed top-8 left-8 z-20">
        <Link
          href="/"
          className="block text-sm font-semibold tracking-wide opacity-70 hover:opacity-100 transition-opacity"
        >
          ← HOME
        </Link>
      </div>

      <main className="flex-1 overflow-hidden p-4 sm:p-6 md:p-8 pb-20">
        <div className="max-w-[1400px] mx-auto h-full">
          {/* Grid of projects */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px] md:auto-rows-[220px] lg:auto-rows-[240px]">
            {projects.map((p, i) => (
              <ProjectCard
                key={i}
                title={p.title}
                tags={p.tags}
                imageSrc={p.imageSrc}
                link={p.link}
                size={p.size}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed inset-x-0 bottom-2 text-center text-[11px] opacity-40 pointer-events-none">
        &copy; 2025 Ziyan Xie
      </footer>
    </div>
  );
}
