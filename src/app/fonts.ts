import { Recursive } from "next/font/google";

// Recursive Sans
export const recursiveSans = Recursive({
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
  variable: "--font-recursive-sans",
  axes: ["MONO", "CASL", "slnt", "CRSV"],
  fallback: ["system-ui", "sans-serif"],
});

// Recursive Mono
export const recursiveMono = Recursive({
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
  variable: "--font-recursive-mono",
  axes: ["MONO", "CASL", "slnt", "CRSV"],
  fallback: ["Menlo", "Monaco", "Courier New", "monospace"],
});
