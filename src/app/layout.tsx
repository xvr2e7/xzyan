import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { recursiveSans, recursiveMono } from "./fonts";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${recursiveSans.variable} ${recursiveMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <title>xz</title>
      </head>
      <body className={recursiveMono.className}>
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
