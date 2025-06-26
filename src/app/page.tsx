import ASCIIName from "@/components/ASCIIName";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <ThemeToggle />
      <ASCIIName />
    </main>
  );
}
