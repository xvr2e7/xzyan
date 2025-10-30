"use client";

import { useTheme } from "@/contexts/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="w-12 h-12 rounded-full bg-[#FFFBEF] dark:bg-[#302D29] border-[#295BA8]/20 dark:border-[#9B7FC9]/20 hover:border-[#295BA8]/40 dark:hover:border-[#9B7FC9]/40 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95"
      aria-label="Toggle theme"
    >
      <div className="relative w-8 h-8">
        {/* Open eye for light mode */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          className={`absolute top-0 left-[1px] w-8 h-8 text-[#295BA8] transition-all duration-500 ease-in-out ${
            theme === "light"
              ? "opacity-100 scale-100 rotate-0"
              : "opacity-0 scale-75 rotate-12"
          }`}
        >
          <path
            fill="currentColor"
            d="M4 9h3V8h1V5H7V4h1v1h1v1h1V4H9V3H8V2H3v1H2v1H1v2h1V5h1V4h1v1H3v3h1Zm-2 1h1V9H2ZM1 9h1V8H1ZM0 8h1V6H0Zm3 3h5v-1H3Zm5-1h1V9H8ZM6 7V6H5V5h1v1h1v1Zm3 2h1V8H9Zm1-1h1V6h-1Zm0 0"
          />
        </svg>

        {/* Closed eye for dark mode */}
        <svg
          width="47"
          height="47"
          viewBox="0 0 47 47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`absolute top-0 left-[1px] w-8 h-8 transition-all duration-500 ease-in-out ${
            theme === "dark"
              ? "opacity-100 scale-100 rotate-0"
              : "opacity-0 scale-75 -rotate-12"
          }`}
        >
          <path
            d="M0 13.7084H3.91667V17.625H0V13.7084ZM7.83333 21.5417H3.91667V17.625H7.83333V21.5417ZM15.6667 25.4584V21.5417H7.83333V25.4584H3.91667V29.375H7.83333V25.4584H15.6667ZM31.3333 25.4584H15.6667V29.375H11.75V33.2917H15.6667V29.375H31.3333V33.2917H35.25V29.375H31.3333V25.4584ZM39.1667 21.5417H31.3333V25.4584H39.1667V29.375H43.0833V25.4584H39.1667V21.5417ZM43.0833 17.625V21.5417H39.1667V17.625H43.0833ZM43.0833 17.625V13.7084H47V17.625H43.0833Z"
            fill="#B3A6C9"
          />
        </svg>
      </div>
    </button>
  );
}
