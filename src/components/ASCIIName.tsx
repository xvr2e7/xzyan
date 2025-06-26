"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const BLOCK_PATTERNS = [
  "█▓▒░",
  "▓▒░█",
  "▒░█▓",
  "░█▓▒",
  "▓░▒█",
  "▒█░▓",
] as const;

const ROW_PATTERN_COUNT = 20;
const FRAME_SKIP = 48;

const CELL_WIDTH = BLOCK_PATTERNS[0].length; // 4
const ROW_LEN = ROW_PATTERN_COUNT * CELL_WIDTH + (ROW_PATTERN_COUNT - 1); // 99
const INNER_WIDTH = ROW_LEN + 2; // 101
const BORDER_LINE = "═".repeat(INNER_WIDTH);

export default function ASCIIName() {
  const [visible, setVisible] = useState(false);
  const [frame, setFrame] = useState(0);
  const raf = useRef<number | null>(null);

  /* Animation loop --------------------------------------------------------- */
  useEffect(() => {
    setVisible(true);

    let tick = 0;
    const loop = () => {
      tick++;
      if (tick % FRAME_SKIP === 0) {
        setFrame((f) => (f + 1) % BLOCK_PATTERNS.length);
      }
      raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);

    return () => {
      if (raf.current !== null) cancelAnimationFrame(raf.current);
    };
  }, []);

  /* Helpers ---------------------------------------------------------------- */
  const makeRow = (offset = 0) =>
    Array.from(
      { length: ROW_PATTERN_COUNT },
      (_, i) => BLOCK_PATTERNS[(frame + i + offset) % BLOCK_PATTERNS.length]
    ).join(" ");

  const padRow = (content = "") =>
    `║ ${content.padEnd(INNER_WIDTH - 2, " ")} ║`;

  /* Heavy string only recomputed when `frame` changes ---------------------- */
  const art = useMemo(() => {
    const topRow = makeRow();
    const bottomRow = makeRow();

    return [
      `╔${BORDER_LINE}╗`,
      padRow(topRow),
      `╠${BORDER_LINE}╣`,
      padRow(""),
      padRow(
        "   █████ █████ █████ ██████████    ███████████ █████    █████ █████   █████████   ██████   █████   "
      ),
      padRow(
        "  ░░███ ░░███ ░░███ ░░███░░░░░█   ░█░░░░░░███ ░░███    ░░███ ░░███   ███░░░░░███ ░░██████ ░░███    "
      ),
      padRow(
        "   ░░███ ███   ░███  ░███  █ ░    ░     ███░   ░███     ░░███ ███   ░███    ░███  ░███░███ ░███    "
      ),
      padRow(
        "    ░░█████    ░███  ░██████           ███     ░███      ░░█████    ░███████████  ░███░░███░███    "
      ),
      padRow(
        "     ███░███   ░███  ░███░░█          ███      ░███       ░░███     ░███░░░░░███  ░███ ░░██████    "
      ),
      padRow(
        "    ███ ░░███  ░███  ░███ ░   █     ████     █ ░███        ░███     ░███    ░███  ░███  ░░█████    "
      ),
      padRow(
        "   █████ █████ █████ ██████████    ███████████ █████       █████    █████   █████ █████  ░░█████   "
      ),
      padRow(
        "  ░░░░░ ░░░░░ ░░░░░ ░░░░░░░░░░    ░░░░░░░░░░░ ░░░░░       ░░░░░    ░░░░░   ░░░░░ ░░░░░    ░░░░░    "
      ),
      padRow(""),
      `╠${BORDER_LINE}╣`,
      padRow(bottomRow),
      `╚${BORDER_LINE}╝`,
    ].join("\n");
  }, [frame]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-8">
      <div className="relative">
        <pre
          className={`text-[0.5rem] sm:text-[0.6rem] md:text-xs lg:text-sm xl:text-base leading-tight font-mono transition-all duration-1000 transform overflow-x-auto ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {art}
        </pre>

        {/* corner accents -------------------------------------- */}
        {([0, 1, 2, 3] as const).map((i) => (
          <div
            key={i}
            className={[
              "absolute text-xs opacity-10",
              i === 0
                ? "-top-6 -left-6"
                : i === 1
                ? "-top-6 -right-6"
                : i === 2
                ? "-bottom-6 -left-6"
                : "-bottom-6 -right-6",
            ].join(" ")}
          >
            {BLOCK_PATTERNS[(frame + i) % BLOCK_PATTERNS.length]}
          </div>
        ))}
      </div>
    </div>
  );
}
