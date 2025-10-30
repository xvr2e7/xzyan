import ThemeToggle from "@/components/ThemeToggle";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";

export default function BioPage() {
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
      <div className="fixed top-5 right-5 z-50">
        <ThemeToggle />
      </div>

      <main className="flex-1 overflow-hidden p-4 sm:p-6 md:p-8 pb-20">
        <div className="max-w-[1400px] mx-auto h-full min-h-0">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(220px,340px)_1fr] gap-6 h-full min-h-0">
            {/* LEFT COLUMN */}
            <div className="grid grid-rows-[auto_1fr_auto] gap-4 h-full min-h-0">
              {/* Profile card */}
              <div className="rounded-2xl p-6 md:p-8 border border-[#295BA8]/10 dark:border-[#9B7FC9]/10 bg-[#FFFBEF] dark:bg-[#302D29]">
                <div className="flex flex-col items-center text-center mb-4">
                  <div className="w-20 h-20 md:w-24 md:h-24 relative rounded-full overflow-hidden border border-[#295BA8]/20 dark:border-[#9B7FC9]/20 mb-3">
                    <Image
                      src="/portrait.jpg"
                      alt="Ziyan Xie"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h1 className="text-xl md:text-2xl font-semibold mb-1">
                    Ziyan Xie
                  </h1>
                  <p className="text-xs md:text-sm opacity-60 mb-2">
                    Senior Undergraduate at UCLA
                  </p>
                  <p className="text-xs leading-relaxed opacity-90">
                    human/machine perception · mediated realities · interaction
                    design
                  </p>
                </div>

                <div className="flex gap-3 justify-center mt-3">
                  <a
                    href="mailto:xvr2e7@gmail.com"
                    title="Email"
                    className="w-9 h-9 md:w-10 md:h-10 rounded-lg flex items-center justify-center border border-[#295BA8]/20 dark:border-[#9B7FC9]/20 bg-[#F6F4ED] dark:bg-[#1A1816]"
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
                    className="w-9 h-9 md:w-10 md:h-10 rounded-lg flex items-center justify-center border border-[#295BA8]/20 dark:border-[#9B7FC9]/20 bg-[#F6F4ED] dark:bg-[#1A1816]"
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
                    className="w-9 h-9 md:w-10 md:h-10 rounded-lg flex items-center justify-center border border-[#295BA8]/20 dark:border-[#9B7FC9]/20 bg-[#F6F4ED] dark:bg-[#1A1816]"
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
                    className="w-9 h-9 md:w-10 md:h-10 rounded-lg flex items-center justify-center border border-[#295BA8]/20 dark:border-[#9B7FC9]/20 bg-[#F6F4ED] dark:bg-[#1A1816]"
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

              {/* Recent Blogs */}
              <div className="rounded-2xl p-4 md:p-6 border border-[#295BA8]/10 dark:border-[#9B7FC9]/10 bg-[#FFFBEF] dark:bg-[#302D29] h-56 md:h-64 overflow-auto">
                <h2 className="text-sm font-semibold mb-3 opacity-60">
                  Recent Blogs
                </h2>
                <div className="space-y-4">
                  <a href="/wip" className="block group">
                    <h3 className="text-sm font-medium group-hover:opacity-80 transition-opacity mb-1">
                      Does word exist if we are not making it?
                    </h3>
                    <p className="text-xs opacity-50">Oct 2025</p>
                  </a>
                  <a href="/wip" className="block group">
                    <h3 className="text-sm font-medium group-hover:opacity-80 transition-opacity mb-1">
                      Autopilot, Autocorrect, Automatica
                    </h3>
                    <p className="text-xs opacity-50">Sep 2025</p>
                  </a>
                  <a href="/wip" className="block group">
                    <h3 className="text-sm font-medium group-hover:opacity-80 transition-opacity mb-1">
                      In search of lost time: a kind of anterograde blindness
                    </h3>
                    <p className="text-xs opacity-50">Jul 2025</p>
                  </a>
                </div>
              </div>

              {/* NOW / ARCHIVE */}
              <div className="flex items-end">
                <nav className="text-[13px] md:text-sm font-semibold tracking-wide opacity-80 hover:opacity-100 transition">
                  <a href="/wip" className="hover:underline">
                    NOW
                  </a>
                  <span className="mx-2">/</span>
                  <a href="/wip" className="hover:underline">
                    ARCHIVE
                  </a>
                </nav>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <section className="flex flex-col min-h-0">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px] md:auto-rows-[220px] lg:auto-rows-[240px] min-h-0">
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
            </section>
          </div>
        </div>
      </main>

      <footer className="fixed inset-x-0 bottom-2 text-center text-[11px] opacity-40 pointer-events-none">
        &copy; 2025 Ziyan Xie
      </footer>
    </div>
  );
}
