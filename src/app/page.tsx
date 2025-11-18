"use client";

import { useState, useEffect } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import ProjectLink from "@/components/ProjectLink";
import Image from "next/image";

export default function BioPage() {
  const [showPortrait, setShowPortrait] = useState(false);
  const [isAnyHovered, setIsAnyHovered] = useState(false);
  const [currentRotation, setCurrentRotation] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const projects = [
    {
      keyword: "cycloid",
      title: "Stereokinetic trefoil in VR",
      description: "Measuring perceived depth of rotating 2D shape",
      tags: ["VR", "Perception", "Psychophysics"],
      imageSrc: "/trefoil.gif",
      link: "/wip",
    },
    {
      keyword: "mushroom",
      title: "Gamification on visual analytics in VR",
      description: "Eye-tracking study of playful data exploration",
      tags: ["VR", "Gamification", "Data-Viz", "HCI"],
      imageSrc: "/mushroom.jpg",
      link: "/wip",
    },
    {
      keyword: "poodle",
      title: "POiT: words connecting worlds",
      description: "Interface for poetic connections",
      tags: ["Web", "Poetry", "HCI"],
      imageSrc: "/poit.gif",
      link: "https://poit.xzyan.com",
    },
    {
      keyword: "rotorelief",
      title: "3D illusion recovery for vision models",
      description: "Teaching machines to have visual illusions",
      tags: ["CV", "Optimization", "ML"],
      imageSrc: "/mopp.gif",
      link: "/wip",
    },
    {
      keyword: "questioning",
      title: "The Questions Concerning Video Game",
      description: "Teaching an undergrad seminar at UCLA",
      tags: ["Teaching", "Video Game", "Media Studies"],
      imageSrc: "/88s.gif",
      link: "https://xvr2e7.github.io/elts-88s/",
    },
    {
      keyword: "chair",
      title: "Chairness",
      description: "What makes a chair a chair for GAN",
      tags: ["Generative", "3D", "ML", "Art"],
      imageSrc: "/chairs.gif",
      link: "/wip",
    },
  ];

  // Calculate positions for ferris wheel arrangement
  const radius = 320; // Distance from center
  const angleStep = (Math.PI * 2) / projects.length;

  // Track mouse position for subtle rotation influence
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2; // -1 to 1
      const y = (e.clientY / window.innerHeight - 0.5) * 2; // -1 to 1
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Auto-rotation when not hovered
  useEffect(() => {
    let animationFrame: number;
    let lastTime = Date.now();

    const animate = () => {
      if (!isAnyHovered) {
        const now = Date.now();
        const delta = (now - lastTime) / 1000;
        lastTime = now;

        // Very slow base rotation + subtle mouse influence (clamped)
        const mouseInfluence = Math.max(
          -0.05,
          Math.min(0.05, mousePosition.x * 0.05)
        );
        setCurrentRotation((prev) => prev + delta * (0.08 + mouseInfluence));
      } else {
        lastTime = Date.now(); // Keep time updated when paused
      }
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isAnyHovered, mousePosition]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Theme toggle */}
      <div className="fixed top-5 right-5 z-50">
        <ThemeToggle />
      </div>

      {/* NOW - top-left */}
      <div className="fixed top-8 left-8 z-20">
        <a
          href="/wip"
          className="block text-sm font-semibold tracking-wide opacity-70 hover:opacity-100 transition-opacity"
        >
          NOW
        </a>
      </div>

      {/* Central bio section */}
      <main className="relative min-h-screen flex items-center justify-center">
        <div className="relative">
          {/* Bio text - center */}
          <div className="text-center">
            <h1
              className="text-4xl md:text-5xl font-semibold mb-4 cursor-pointer relative inline-block"
              onMouseEnter={() => setShowPortrait(true)}
              onMouseLeave={() => setShowPortrait(false)}
            >
              Ziyan Xie
              {/* Portrait on hover */}
              {showPortrait && (
                <div className="absolute left-1/2 -translate-x-1/2 -top-32 w-24 h-24 rounded-full overflow-hidden border-2 border-[#295BA8]/30 dark:border-[#9B7FC9]/30 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
                  <Image
                    src="/portrait.jpg"
                    alt="Ziyan Xie"
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </h1>

            <p className="text-sm opacity-60 mb-4">
              Senior Undergraduate at UCLA
            </p>

            <p className="text-sm leading-relaxed opacity-90 mb-6 max-w-md mx-auto">
              human/machine vision · mediated realities
            </p>

            {/* Contact links */}
            <div className="flex gap-4 justify-center">
              <a
                href="mailto:xvr2e7@gmail.com"
                title="Email"
                className="text-xs opacity-70 hover:opacity-100 transition-opacity"
              >
                email
              </a>
              <a
                href="https://github.com/xvr2e7"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="text-xs opacity-70 hover:opacity-100 transition-opacity"
              >
                github
              </a>
              <a
                href="https://www.linkedin.com/in/ziyanx/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="text-xs opacity-70 hover:opacity-100 transition-opacity"
              >
                linkedin
              </a>
              <a
                href="/CV_zx.pdf"
                target="_blank"
                title="CV"
                className="text-xs opacity-70 hover:opacity-100 transition-opacity"
              >
                cv
              </a>
            </div>
          </div>

          {/* Ferris wheel - projects rotating around bio */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              transform: `rotate(${currentRotation}rad)`,
              transition: "none",
            }}
          >
            {projects.map((project, index) => {
              const angle = angleStep * index - Math.PI / 2; // Start from top
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <div
                  key={index}
                  className="absolute pointer-events-auto"
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${-currentRotation}rad)`,
                  }}
                >
                  <ProjectLink {...project} onHoverChange={setIsAnyHovered} />
                </div>
              );
            })}
          </div>
        </div>
      </main>

      {/* Straight-on view link - bottom-left */}
      <div className="fixed bottom-8 left-8 z-20">
        <a
          href="/grid"
          className="block text-sm font-semibold tracking-wide opacity-70 hover:opacity-100 transition-opacity"
        >
          STRAIGHT-ON
        </a>
      </div>

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
