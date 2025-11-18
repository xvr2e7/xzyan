"use client";

import ThemeToggle from "@/components/ThemeToggle";
import ProjectLink from "@/components/ProjectLink";
import Image from "next/image";

export default function BioPage() {
  const projects = [
    {
      keyword: "cycloid",
      title: "Stereokinetic trefoil in VR",
      description: "Exploring depth perception through rotating 2D patterns",
      tags: ["VR", "Perception", "Psychophysics"],
      imageSrc: "/trefoil.gif",
      link: "/wip",
    },
    {
      keyword: "mushroom",
      title: "Gamification on visual analytics in VR",
      description: "Making data exploration playful through collection mechanics",
      tags: ["VR", "Gamification", "Data-Viz", "HCI"],
      imageSrc: "/mushroom.jpg",
      link: "/wip",
    },
    {
      keyword: "poodle",
      title: "POiT: words connecting worlds",
      description: "A poetic interface for serendipitous discovery",
      tags: ["Web", "Poetry", "HCI"],
      imageSrc: "/poit.gif",
      link: "https://poit.xzyan.com",
    },
    {
      keyword: "rotorelief",
      title: "Motion-based geometric optimization for video models",
      description: "Perceptual constraints inspired by Duchamp's rotating discs",
      tags: ["CV", "Video", "Optimization", "ML"],
      imageSrc: "/mopp.gif",
      link: "/wip",
    },
    {
      keyword: "questioning",
      title: "The Questions Concerning Video Game",
      description: "Heidegger meets gaming: embodiment, virtuality, resistance",
      tags: ["Teaching", "Video Game", "Media Studies"],
      imageSrc: "/88s.gif",
      link: "https://xvr2e7.github.io/elts-88s/",
    },
    {
      keyword: "chairness",
      title: "Chairness",
      description: "Generated explorations of what makes a chair a chair",
      tags: ["Generative", "3D", "ML", "Art"],
      imageSrc: "/chairs.gif",
      link: "/wip",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Theme toggle */}
      <div className="fixed top-5 right-5 z-50">
        <ThemeToggle />
      </div>

      {/* Bio card - top-left */}
      <div className="fixed top-8 left-8 z-20 w-[280px]">
        <div className="rounded-2xl p-6 border border-[#295BA8]/10 dark:border-[#9B7FC9]/10 bg-[#FFFBEF] dark:bg-[#302D29]">
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 relative rounded-full overflow-hidden border border-[#295BA8]/20 dark:border-[#9B7FC9]/20 mb-3">
              <Image
                src="/portrait.jpg"
                alt="Ziyan Xie"
                fill
                className="object-cover"
              />
            </div>
            <h1 className="text-xl font-semibold mb-1">Ziyan Xie</h1>
            <p className="text-xs opacity-60 mb-2">Senior Undergraduate at UCLA</p>
            <p className="text-xs leading-relaxed opacity-90">
              human/machine perception · mediated realities · interaction design
            </p>
          </div>

          <div className="flex gap-3 justify-center mt-4">
            <a
              href="mailto:xvr2e7@gmail.com"
              title="Email"
              className="w-9 h-9 rounded-lg flex items-center justify-center border border-[#295BA8]/20 dark:border-[#9B7FC9]/20 bg-[#F6F4ED] dark:bg-[#1A1816] hover:border-[#295BA8]/40 dark:hover:border-[#9B7FC9]/40 transition-colors"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </a>

            <a
              href="https://github.com/xvr2e7"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="w-9 h-9 rounded-lg flex items-center justify-center border border-[#295BA8]/20 dark:border-[#9B7FC9]/20 bg-[#F6F4ED] dark:bg-[#1A1816] hover:border-[#295BA8]/40 dark:hover:border-[#9B7FC9]/40 transition-colors"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/ziyanx/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="w-9 h-9 rounded-lg flex items-center justify-center border border-[#295BA8]/20 dark:border-[#9B7FC9]/20 bg-[#F6F4ED] dark:bg-[#1A1816] hover:border-[#295BA8]/40 dark:hover:border-[#9B7FC9]/40 transition-colors"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>

            <a
              href="/CV_zx.pdf"
              target="_blank"
              title="CV"
              className="w-9 h-9 rounded-lg flex items-center justify-center border border-[#295BA8]/20 dark:border-[#9B7FC9]/20 bg-[#F6F4ED] dark:bg-[#1A1816] hover:border-[#295BA8]/40 dark:hover:border-[#9B7FC9]/40 transition-colors"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* NOW - top-right */}
      <div className="fixed top-8 right-20 z-20">
        <a
          href="/wip"
          className="block text-sm font-semibold tracking-wide opacity-70 hover:opacity-100 transition-opacity"
        >
          NOW →
        </a>
      </div>

      {/* Projects - center scattered */}
      <main className="relative min-h-screen flex items-center justify-center p-20">
        <div className="relative w-full max-w-5xl">
          {/* Organic scatter positioning */}
          <div className="absolute top-[5%] left-[15%]">
            <ProjectLink {...projects[0]} />
          </div>

          <div className="absolute top-[25%] right-[20%]">
            <ProjectLink {...projects[1]} />
          </div>

          <div className="absolute top-[45%] left-[10%]">
            <ProjectLink {...projects[2]} />
          </div>

          <div className="absolute top-[35%] left-[45%]">
            <ProjectLink {...projects[3]} />
          </div>

          <div className="absolute top-[65%] right-[25%]">
            <ProjectLink {...projects[4]} />
          </div>

          <div className="absolute top-[15%] right-[5%]">
            <ProjectLink {...projects[5]} />
          </div>
        </div>
      </main>

      {/* Blog - bottom-right */}
      <div className="fixed bottom-8 right-8 z-20 text-right">
        <div className="text-xs opacity-50 mb-2">blog ↓</div>
        <div className="space-y-2">
          <a
            href="/wip"
            className="block text-sm hover:opacity-70 transition-opacity"
          >
            Does word exist if we are not making it?
          </a>
          <a
            href="/wip"
            className="block text-sm hover:opacity-70 transition-opacity"
          >
            Autopilot, Autocorrect, Automatica
          </a>
          <a
            href="/wip"
            className="block text-sm hover:opacity-70 transition-opacity"
          >
            In search of lost time
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="fixed inset-x-0 bottom-2 text-center text-[11px] opacity-40 pointer-events-none">
        &copy; 2025 Ziyan Xie
      </footer>
    </div>
  );
}
