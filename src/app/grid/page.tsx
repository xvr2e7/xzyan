import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";

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
    <div className="min-h-screen p-4 sm:p-6 md:p-8">
      {/* Back arrow - top-left */}
      <div className="fixed top-4 right-4 z-20">
        <Link
          href="/"
          className="block text-sm opacity-70 hover:opacity-100 transition-opacity"
          aria-label="Back to home"
        >
          back
        </Link>
      </div>

      {/* Grid of projects */}
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px] md:auto-rows-[220px] lg:auto-rows-[240px]">
          {projects.map((p, i) => (
            <ProjectCard
              key={i}
              title={p.title}
              tags={p.tags}
              imageSrc={p.imageSrc}
              link={p.link}
              size={p.size}
              priority={i < 3}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
