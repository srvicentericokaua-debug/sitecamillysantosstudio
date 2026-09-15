import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

type MarqueeStripProps = {
  items: string[];
  direction?: "left" | "right";
  duration?: number;
  className?: string;
  textClassName?: string;
  style?: CSSProperties;
};

export function MarqueeStrip({
  items,
  direction = "left",
  duration = 30,
  className,
  textClassName,
  style,
}: MarqueeStripProps) {
  const track = items.join("   •   ");
  const repeated = Array.from({ length: 4 }, () => track).join("   •   ");

  return (
    <div
      className={cn("relative flex w-full overflow-hidden py-3", className)}
      style={style}
    >
      <div
        className="flex w-max shrink-0"
        style={{
          animation: `${direction === "left" ? "marquee-left" : "marquee-right"} ${duration}s linear infinite`,
        }}
      >
        {[0, 1].map((i) => (
          <span
            key={i}
            aria-hidden={i === 1}
            className={cn(
              "shrink-0 whitespace-nowrap px-4 text-sm font-medium leading-none md:text-base",
              textClassName,
            )}
          >
            {repeated}
          </span>
        ))}
      </div>
    </div>
  );
}
