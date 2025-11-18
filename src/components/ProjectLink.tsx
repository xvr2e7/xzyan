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
  onHoverChange?: (isHovered: boolean) => void;
}

export default function ProjectLink({
  keyword,
  title,
  description,
  tags,
  imageSrc,
  link,
  onHoverChange,
}: ProjectLinkProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHoverChange?.(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onHoverChange?.(false);
  };

  return (
    <>
      {/* Spotlight overlay - dims everything when this project is hovered */}
      {isHovered && (
        <div className="fixed inset-0 bg-black/60 transition-opacity duration-300 pointer-events-none z-[200]" />
      )}

      {/* Project keyword link */}
      <div className="relative inline-block whitespace-nowrap">
        <a
          href={link}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative inline-block text-lg md:text-xl font-mono cursor-pointer transition-all duration-200 z-[201]"
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
            className="fixed z-[202] pointer-events-none"
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              maxHeight: "60vh",
              maxWidth: "min(80vw, 340px)",
              width: "clamp(240px, 28vw, 340px)",
            }}
          >
            <div className="bg-[#FFFBEF] dark:bg-[#302D29] rounded-2xl overflow-hidden border border-[#295BA8]/20 dark:border-[#9B7FC9]/20 shadow-2xl flex flex-col h-full">
              {/* Image */}
              <div className="relative w-full aspect-[4/3] flex-shrink-0">
                <Image
                  src={imageSrc}
                  alt={title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Info - scrollable if needed */}
              <div className="p-3 overflow-y-auto flex-1 min-h-0">
                <h3 className="text-sm font-semibold mb-1.5 leading-tight line-clamp-2">
                  {title}
                </h3>

                {description && (
                  <p className="text-[11px] opacity-80 mb-2 leading-relaxed line-clamp-3">
                    {description}
                  </p>
                )}

                <div className="flex gap-1 flex-wrap">
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-[9px] px-1.5 py-0.5 rounded-md bg-[#295BA8]/10 dark:bg-[#9B7FC9]/10 border border-[#295BA8]/20 dark:border-[#9B7FC9]/20 whitespace-nowrap"
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
