import { Space_Mono } from "next/font/google";

const spaceMono = Space_Mono({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <p
      className={spaceMono.className}
      style={{
        height: "100vh",
        margin: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      xie ziyan
    </p>
  );
}