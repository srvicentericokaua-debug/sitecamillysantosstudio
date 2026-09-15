"use client";

import { useCallback, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const FRAME_COUNT = 194;
const EAGER_FRAMES = 16;
const BATCH_SIZE = 6;
const IMAGE_SCALE = 1.0;
const SCROLL_VH = 380;

type SideCaption = {
  id: string;
  text: string;
  enter: number;
  leave: number;
  position: "bottom-left" | "bottom-right" | "top-right";
};

const FADE_RANGE = 0.06;

const sideCaptions: SideCaption[] = [
  {
    id: "c1",
    text: "Cada gesto é pensado com técnica e cuidado.",
    enter: 0.2,
    leave: 0.4,
    position: "bottom-right",
  },
  {
    id: "c2",
    text: "Precisão que valoriza o seu olhar, em cada detalhe.",
    enter: 0.48,
    leave: 0.68,
    position: "bottom-left",
  },
  {
    id: "c3",
    text: "Técnica, cuidado e propósito em cada gesto.",
    enter: 0.76,
    leave: 0.94,
    position: "top-right",
  },
];

function frameSrc(index: number) {
  return `/frames/frame-${String(index + 1).padStart(4, "0")}.webp`;
}

export function FrameScrollSection() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasWrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const captionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(FRAME_COUNT).fill(null));
  const loadingRef = useRef<Set<number>>(new Set());
  const currentFrameRef = useRef(0);
  const drawFrameRef = useRef<(index: number) => void>(() => {});

  const loadFrame = useCallback((index: number): Promise<void> => {
    if (index < 0 || index >= FRAME_COUNT) return Promise.resolve();
    if (imagesRef.current[index] || loadingRef.current.has(index)) return Promise.resolve();
    loadingRef.current.add(index);
    return new Promise((resolve) => {
      const img = new window.Image();
      img.decoding = "async";
      img.onload = () => {
        imagesRef.current[index] = img;
        loadingRef.current.delete(index);
        resolve();
      };
      img.onerror = () => {
        loadingRef.current.delete(index);
        resolve();
      };
      img.src = frameSrc(index);
    });
  }, []);

  const drawFrame = useCallback(
    (index: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      let img = imagesRef.current[index];
      if (!img) {
        loadFrame(index);
        let offset = 1;
        while (!img && offset < FRAME_COUNT) {
          img = imagesRef.current[index - offset] ?? imagesRef.current[index + offset] ?? null;
          offset++;
        }
        if (!img) return;
      }

      const cw = canvas.width;
      const ch = canvas.height;
      const iw = img.naturalWidth;
      const ih = img.naturalHeight;
      // Full cover with a hair of overscan so rounding never leaves a sliver gap.
      const scale = Math.max(cw / iw, ch / ih) * IMAGE_SCALE * 1.002;
      const dw = iw * scale;
      const dh = ih * scale;
      const dx = (cw - dw) / 2;
      const dy = (ch - dh) / 2;

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(img, dx, dy, dw, dh);
    },
    [loadFrame],
  );

  useEffect(() => {
    drawFrameRef.current = drawFrame;
  }, [drawFrame]);

  useEffect(() => {
    let cancelled = false;

    function resizeCanvas() {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      drawFrameRef.current(currentFrameRef.current);
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    async function bootstrap() {
      await Promise.all(
        Array.from({ length: EAGER_FRAMES }, (_, i) => i).map((i) => loadFrame(i)),
      );
      if (cancelled) return;
      drawFrameRef.current(0);

      let cursor = EAGER_FRAMES;
      function loadNextBatch() {
        if (cancelled || cursor >= FRAME_COUNT) return;
        const batch: Promise<void>[] = [];
        for (let n = 0; n < BATCH_SIZE && cursor < FRAME_COUNT; n++, cursor++) {
          batch.push(loadFrame(cursor));
        }
        Promise.all(batch).then(() => {
          if (cancelled) return;
          const ric = (window as unknown as { requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number }).requestIdleCallback;
          if (ric) ric(loadNextBatch, { timeout: 500 });
          else setTimeout(loadNextBatch, 60);
        });
      }
      loadNextBatch();
    }
    bootstrap();

    return () => {
      cancelled = true;
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [loadFrame]);

  useEffect(() => {
    let frameId: number;
    let ticking = false;

    function onScroll() {
      if (ticking) return;
      ticking = true;
      frameId = requestAnimationFrame(() => {
        ticking = false;
        const wrapper = wrapperRef.current;
        if (!wrapper) return;
        const rect = wrapper.getBoundingClientRect();
        const total = rect.height - window.innerHeight;
        const progress = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0;

        const index = Math.min(Math.floor(progress * FRAME_COUNT), FRAME_COUNT - 1);
        if (index !== currentFrameRef.current) {
          currentFrameRef.current = index;
          drawFrameRef.current(index);
        }

        sideCaptions.forEach((caption) => {
          const el = captionRefs.current[caption.id];
          if (!el) return;
          let opacity = 0;
          if (progress >= caption.enter - FADE_RANGE && progress <= caption.enter) {
            opacity = (progress - (caption.enter - FADE_RANGE)) / FADE_RANGE;
          } else if (progress > caption.enter && progress < caption.leave) {
            opacity = 1;
          } else if (progress >= caption.leave && progress <= caption.leave + FADE_RANGE) {
            opacity = 1 - (progress - caption.leave) / FADE_RANGE;
          }
          el.style.opacity = String(opacity);
        });

        const wipeProgress = Math.min(1, Math.max(0, progress / 0.08));

        if (canvasWrapRef.current) {
          const radius = wipeProgress * 150;
          canvasWrapRef.current.style.clipPath = `circle(${radius}% at 50% 50%)`;
        }

        if (headingRef.current) {
          const headingProgress = Math.min(1, Math.max(0, progress / 0.1));
          headingRef.current.style.opacity = String(headingProgress);
          headingRef.current.style.transform = `translateY(${20 * (1 - headingProgress)}px)`;
        }
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <section ref={wrapperRef} className="relative" style={{ height: `${SCROLL_VH}vh` }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[var(--color-blush)]">
        <div
          ref={canvasWrapRef}
          className="absolute inset-0"
          style={{ clipPath: "circle(0% at 50% 50%)" }}
        >
          <canvas ref={canvasRef} className="h-full w-full" />
        </div>

        <div
          ref={headingRef}
          style={{ opacity: 0, transform: "translateY(20px)" }}
          className="pointer-events-none absolute left-0 top-0 h-full w-full md:w-3/5"
        >
          <div className="px-6 pt-28 md:px-16 md:pt-36">
            <div className="relative w-fit">
              <div
                aria-hidden
                className="absolute -inset-6 md:-inset-10"
                style={{
                  background:
                    "radial-gradient(closest-side, rgba(253,243,241,0.92) 0%, rgba(253,243,241,0.55) 55%, transparent 80%)",
                }}
              />
              <span className="relative block text-xs uppercase tracking-[0.35em] text-[var(--color-rose-deep)]">
                O processo
              </span>
              <h2 className="font-display relative mt-4 max-w-md text-3xl leading-[1.15] text-[var(--color-ink)] md:text-5xl">
                Cada detalhe, em movimento.
              </h2>
            </div>
          </div>
        </div>

        {sideCaptions.map((caption) => {
          const isRight = caption.position === "top-right" || caption.position === "bottom-right";
          return (
            <div
              key={caption.id}
              ref={(el) => {
                captionRefs.current[caption.id] = el;
              }}
              className={cn(
                "pointer-events-none absolute w-full max-w-md px-6 opacity-0 md:px-16",
                caption.position === "top-right"
                  ? "right-0 top-0 pt-28 text-right md:pt-36"
                  : "bottom-16",
                caption.position === "bottom-left" && "left-0 text-left",
                caption.position === "bottom-right" && "right-0 text-right",
              )}
            >
              <div className={cn("relative w-fit", isRight && "ml-auto")}>
                <div
                  aria-hidden
                  className="absolute -inset-6 md:-inset-8"
                  style={{
                    background:
                      "radial-gradient(closest-side, rgba(253,243,241,0.92) 0%, rgba(253,243,241,0.5) 55%, transparent 80%)",
                  }}
                />
                <p className="font-display relative text-2xl leading-snug text-[var(--color-ink)] md:text-3xl">
                  {caption.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
