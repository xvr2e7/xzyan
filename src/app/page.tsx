import IsometricInterface from "@/components/IsometricInterface";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <>
      <IsometricInterface />
      <div className="fixed top-8 right-8 z-50">
        <ThemeToggle />
      </div>
    </>
  );
}
