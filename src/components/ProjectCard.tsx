"use client";

import Image from "next/image";

interface ProjectCardProps {
  title: string;
  tags: string[];
  imageSrc?: string;
  link?: string;
  size?: "square" | "wide" | "tall" | "large";
}

export default function ProjectCard({
  title,
  tags,
  imageSrc,
  link = "#",
  size = "square",
}: ProjectCardProps) {
  const sizeClasses = {
    square: "",
    wide: "col-span-2",
    tall: "row-span-2",
    large: "col-span-2 row-span-2",
  };

  return (
    <a
      href={link}
      className={`group relative overflow-hidden rounded-2xl bg-[#295BA8]/5 dark:bg-[#9B7FC9]/5 border border-[#295BA8]/10 dark:border-[#9B7FC9]/10 hover:border-[#295BA8]/30 dark:hover:border-[#9B7FC9]/30 transition-all ${sizeClasses[size]} min-h-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#295BA8]/30`}
      aria-label={title}
    >
      {/* Image (behind overlay) */}
      <div className="absolute inset-0">
        {imageSrc ? (
          <div className="absolute inset-0 transform-gpu transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:transform-none">
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
            />
          </div>
        ) : (
          <div className="flex items-center justify-center h-full w-full text-xs opacity-30">
            Image
          </div>
        )}
      </div>

      {/* Hover overlay */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-t from-black/80 via-black/40 to-transparent
          opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100
          transition-opacity duration-300
          flex flex-col justify-end p-4
        "
        aria-hidden={false}
      >
        <h3 className="text-white text-sm font-medium mb-1">{title}</h3>
        <div className="flex gap-1.5 flex-wrap">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-[10px] px-2 py-0.5 rounded-full bg-white/20 text-white"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
