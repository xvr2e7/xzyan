import { Analytics } from "@vercel/analytics/react";
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
    >
      <head>
        <title>XZY</title>
      </head>
      <body className={recursiveMono.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}