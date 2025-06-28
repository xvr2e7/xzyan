"use client";

import { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";

export default function IsometricInterface() {
  const [activeMode, setActiveMode] = useState<"hand" | "cursor" | "tldr">(
    "cursor"
  );
  const { theme } = useTheme();

  const getIconFill = (isActive: boolean) => {
    if (theme === "dark") {
      return isActive ? "black" : "white";
    }
    return isActive ? "white" : "black";
  };

  return (
    <div className="min-h-screen bg-[#F6F4ED] dark:bg-[#1A1816] flex items-center justify-center relative">
      {/* Control Icons - Top Left */}
      <div className="absolute top-8 left-8 flex gap-3">
        <button
          onClick={() => setActiveMode("hand")}
          className={`w-12 h-12 rounded-lg border-4 flex items-center justify-center transition-all ${
            activeMode === "hand"
              ? "bg-[#3674D1] dark:bg-[#9B7FC9] text-white"
              : "bg-[#FFFBEF] dark:bg-[#302D29] hover:border-[#295BA8]/20 dark:hover:border-[#B3A6C9]/20"
          }`}
          aria-label="3D manipulation mode"
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.66667 11.8333H10.8333V3.16667H13V11.8333H15.1667V3.16667H17.3333V1H6.5V3.16667H8.66667V11.8333ZM2.16667 22.6667H4.33333V18.3333H2.16667V22.6667ZM4.33333 24.8333H17.3333V22.6667H4.33333V24.8333ZM0 18.3333H2.16667V5.33333H0V18.3333ZM4.33333 14H6.5V3.16667H2.16667V5.33333H4.33333V14ZM17.3333 22.6667H19.5V20.5H17.3333V22.6667ZM19.5 20.5H21.6667V18.3333H19.5V20.5ZM21.6667 18.3333H23.8333V9.66667H19.5V3.16667H17.3333V14H19.5V11.8333H21.6667V18.3333Z"
              fill={getIconFill(activeMode === "hand")}
              fillOpacity={activeMode === "hand" ? "1" : "0.7"}
            />
          </svg>
        </button>

        <button
          onClick={() => setActiveMode("cursor")}
          className={`w-12 h-12 rounded-lg border-4 flex items-center justify-center transition-all ${
            activeMode === "cursor"
              ? "bg-[#3674D1] dark:bg-[#9B7FC9] text-white"
              : "bg-[#FFFBEF] dark:bg-[#302D29] hover:border-[#295BA8]/20 dark:hover:border-[#B3A6C9]/20"
          }`}
          aria-label="Panel selection mode"
        >
          <svg
            width="16"
            height="25"
            viewBox="0 0 16 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 22.7273H2.28571V20.4545H6.85714V15.9091H4.57143V18.1818H2.28571V4.54545H4.57143V2.27273H2.28571V0H0V22.7273ZM6.85714 25H13.7143V18.1818H11.4286V22.7273H9.14286V20.4545H6.85714V25ZM9.14286 18.1818H11.4286V15.9091H16V13.6364H13.7143V11.3636H11.4286V13.6364H9.14286V18.1818ZM4.57143 6.81818H6.85714V4.54545H4.57143V6.81818ZM6.85714 9.09091H9.14286V6.81818H6.85714V9.09091ZM9.14286 11.3636H11.4286V9.09091H9.14286V11.3636Z"
              fill={getIconFill(activeMode === "cursor")}
              fillOpacity={activeMode === "cursor" ? "1" : "0.7"}
            />
          </svg>
        </button>

        <button
          onClick={() => setActiveMode("tldr")}
          className={`px-4 h-12 rounded-lg border-4 flex items-center justify-center transition-all ${
            activeMode === "tldr"
              ? "bg-[#3674D1] dark:bg-[#9B7FC9] text-white"
              : "bg-[#FFFBEF] dark:bg-[#302D29] hover:border-[#295BA8]/20 dark:hover:border-[#B3A6C9]/20"
          }`}
          aria-label="Condensed overview mode"
        >
          <span
            className="font-bold tracking-tight"
            style={{
              fontFamily: "var(--font-recursive-sans)",
              fontSize: "20px",
              fontVariationSettings: '"MONO" 0, "CASL" 1.5, "CRSV" 0',
            }}
          >
            TL;DR
          </span>
        </button>
      </div>

      {/* Main Isometric Coordinate System */}
      <div className="relative">
        <svg
          width="900"
          height="700"
          viewBox="0 0 900 700"
          className="w-full h-auto max-w-5xl"
        >
          {/* Y-axis (vertical) */}
          <g transform="translate(450, 150)">
            {/* Diamond end */}
            <g transform="translate(0, -100)">
              <path
                d="M0 -15 L15 0 L0 15 L-15 0 Z"
                fill="#70DF99"
                fillOpacity="0.8"
              />
            </g>
            {/* Dashed line */}
            <line
              x1="0"
              y1="-100"
              x2="0"
              y2="300"
              stroke="#70DF99"
              strokeWidth="8"
              strokeDasharray="10,10"
              strokeOpacity="0.8"
              strokeLinecap="round"
            />
          </g>

          {/* X-axis (bottom-left) */}
          <g transform="translate(95, 635)">
            {/* Diamond end */}
            <g transform="translate(0, 0)">
              <path
                d="M0 -15 L15 0 L0 15 L-15 0 Z"
                fill="#DF7070"
                fillOpacity="0.8"
              />
            </g>
            {/* Dashed line */}
            <line
              x1="0"
              y1="0"
              x2="355"
              y2="-185"
              stroke="#DF7070"
              strokeWidth="8"
              strokeDasharray="10,10"
              strokeOpacity="0.8"
              strokeLinecap="round"
            />
          </g>

          {/* Z-axis (bottom-right) */}
          <g transform="translate(805, 635)">
            {/* Diamond end */}
            <g transform="translate(0, 0)">
              <path
                d="M0 -15 L15 0 L0 15 L-15 0 Z"
                fill="#7095DF"
                fillOpacity="0.8"
              />
            </g>
            {/* Dashed line */}
            <line
              x1="0"
              y1="0"
              x2="-355"
              y2="-185"
              stroke="#7095DF"
              strokeWidth="8"
              strokeDasharray="10,10"
              strokeOpacity="0.8"
              strokeLinecap="round"
            />
          </g>

          {/* Axis labels */}
          <text
            x="450"
            y="25"
            textAnchor="middle"
            fill={theme === "dark" ? "#B3A6C9" : "#295BA8"}
            style={{
              fontFamily: "var(--font-recursive-sans)",
              fontSize: "36px",
              fontWeight: 800,
              fontVariationSettings: '"MONO" 0, "CASL" 1.5, "CRSV" 0',
            }}
          >
            y<tspan style={{ fontSize: "18px" }}>an</tspan>
          </text>

          <text
            x="50"
            y="645"
            textAnchor="middle"
            fill={theme === "dark" ? "#B3A6C9" : "#295BA8"}
            style={{
              fontFamily: "var(--font-recursive-sans)",
              fontSize: "36px",
              fontWeight: 800,
              fontVariationSettings: '"MONO" 0, "CASL" 1.5, "CRSV" 0',
            }}
          >
            x<tspan style={{ fontSize: "18px" }}>ie</tspan>
          </text>

          <text
            x="845"
            y="645"
            textAnchor="middle"
            fill={theme === "dark" ? "#B3A6C9" : "#295BA8"}
            style={{
              fontFamily: "var(--font-recursive-sans)",
              fontSize: "36px",
              fontWeight: 800,
              fontVariationSettings: '"MONO" 0, "CASL" 1.5, "CRSV" 0',
            }}
          >
            z<tspan style={{ fontSize: "18px" }}>i</tspan>
          </text>
        </svg>
      </div>
    </div>
  );
}
