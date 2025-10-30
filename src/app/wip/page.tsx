import ThemeToggle from "@/components/ThemeToggle";
import Link from "next/link";

export default function WIPPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="fixed top-8 right-8 z-50">
        <ThemeToggle />
      </div>

      <div className="w-full max-w-4xl flex flex-col items-center">
        <div className="text-center space-y-6">
          <div className="space-y-2">
            <p className="text-base md:text-lg opacity-80">
              Not ready for encounter yet.
            </p>
            <p className="text-sm opacity-60">Check back soon.</p>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-[#295BA8]/20 dark:border-[#9B7FC9]/20 bg-[#FFFBEF] dark:bg-[#302D29] hover:border-[#295BA8]/40 dark:hover:border-[#9B7FC9]/40 transition-all hover:scale-105 active:scale-95"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Bio
          </Link>
        </div>
      </div>
    </div>
  );
}
