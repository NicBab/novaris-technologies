"use client";

import { useEffect, useRef } from "react";

type Props = {
  className?: string;
  density?: number;
  interactive?: boolean;
};

/**
 * Animated constellation of connected nodes —
 * the Novaris signature motif.
 */
export function NovaNetwork({
  className,
  density = 46,
  interactive = true,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const mobile = window.matchMedia("(max-width: 768px)").matches;
    const count = Math.round(mobile ? density * 0.5 : density);

    let width = 0;
    let height = 0;
    let raf = 0;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const pointer = {
      x: -9999,
      y: -9999,
    };

    const hues = [190, 260, 300, 340, 80, 145];

    type Node = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      h: number;
    };

    let nodes: Node[] = [];

    const seed = () => {
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: Math.random() * 1.6 + 0.6,
        h: hues[Math.floor(Math.random() * hues.length)]!,
      }));
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();

      width = rect.width;
      height = rect.height;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      seed();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const linkDist = mobile ? 110 : 150;
      const dark = document.documentElement.classList.contains("dark");

      for (const node of nodes) {
        if (!reduced) {
          node.x += node.vx;
          node.y += node.vy;
        }

        if (node.x < 0 || node.x > width) {
          node.vx *= -1;
        }

        if (node.y < 0 || node.y > height) {
          node.vy *= -1;
        }
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]!;
          const b = nodes[j]!;

          const distance = Math.hypot(a.x - b.x, a.y - b.y);

          if (distance > linkDist) {
            continue;
          }

          const near =
            interactive &&
            Math.min(
              Math.hypot(a.x - pointer.x, a.y - pointer.y),
              Math.hypot(b.x - pointer.x, b.y - pointer.y),
            ) < 160;

          const alpha =
            (1 - distance / linkDist) * (near ? 0.85 : 0.3);

          const hue = (a.h + b.h) / 2;

          ctx.strokeStyle = `oklch(${dark ? 0.82 : 0.6} ${
            near ? 0.22 : 0.16
          } ${hue} / ${alpha})`;

          ctx.lineWidth = near ? 1.2 : 0.7;

          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      for (const node of nodes) {
        const near =
          interactive &&
          Math.hypot(node.x - pointer.x, node.y - pointer.y) < 160;

        ctx.beginPath();

        ctx.arc(
          node.x,
          node.y,
          node.r * (near ? 1.8 : 1),
          0,
          Math.PI * 2,
        );

        ctx.fillStyle = `oklch(${dark ? 0.85 : 0.58} ${
          near ? 0.26 : 0.2
        } ${node.h} / ${near ? 0.98 : 0.7})`;

        ctx.shadowBlur = near ? 16 : 8;

        ctx.shadowColor = `oklch(${
          dark ? 0.85 : 0.6
        } 0.24 ${node.h} / 0.8)`;

        ctx.fill();

        ctx.shadowBlur = 0;
      }

      raf = requestAnimationFrame(draw);
    };

    const onPointer = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();

      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
    };

    const onLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
    };

    resize();
    draw();

    window.addEventListener("resize", resize);

    if (interactive) {
      window.addEventListener("pointermove", onPointer, {
        passive: true,
      });

      window.addEventListener("pointerleave", onLeave);
    }

    return () => {
      cancelAnimationFrame(raf);

      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("pointerleave", onLeave);
    };
  }, [density, interactive]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
    />
  );
}