"use client";

import { useState } from "react";
import Image from "next/image";

interface ProjectLinkProps {
  keyword: string;
  title: string;
  description?: string;
  tags: string[];
  imageSrc: string;
  link: string;
}

export default function ProjectLink({
  keyword,
  title,
  description,
  tags,
  imageSrc,
  link,
}: ProjectLinkProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      {/* Spotlight overlay - dims everything when this project is hovered */}
      {isHovered && (
        <div className="fixed inset-0 bg-black/60 transition-opacity duration-300 pointer-events-none z-[100]" />
      )}

      {/* Project keyword link */}
      <div className="relative inline-block whitespace-nowrap">
        <a
          href={link}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative inline-block text-2xl md:text-3xl font-mono cursor-pointer transition-all duration-200 z-[101]"
          style={{
            opacity: isHovered ? 1 : 0.85,
            textShadow: isHovered ? "0 0 20px currentColor" : "none",
          }}
        >
          {keyword}
        </a>

        {/* Hover reveal - image and info */}
        {isHovered && (
          <div
            className="fixed z-[102] pointer-events-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              width: "clamp(320px, 45vw, 550px)",
            }}
          >
            <div className="bg-[#FFFBEF] dark:bg-[#302D29] rounded-2xl overflow-hidden border border-[#295BA8]/20 dark:border-[#9B7FC9]/20 shadow-2xl">
              {/* Image */}
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={imageSrc}
                  alt={title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{title}</h3>

                {description && (
                  <p className="text-sm opacity-80 mb-3">{description}</p>
                )}

                <div className="flex gap-2 flex-wrap">
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 rounded-md bg-[#295BA8]/10 dark:bg-[#9B7FC9]/10 border border-[#295BA8]/20 dark:border-[#9B7FC9]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
