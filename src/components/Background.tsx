"use client";

import { useEffect, useRef } from "react";

/**
 * Decorative animated background:
 * - Aurora gradient blobs (CSS)
 * - Canvas particle constellation network (subtle, AI/neural vibe)
 * - Grid + dot overlays
 */
export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let raf = 0;

    const PARTICLES = Math.min(
      70,
      Math.floor((width * height) / 26000)
    );

    type P = { x: number; y: number; vx: number; vy: number };
    const particles: P[] = Array.from({ length: PARTICLES }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
    }));

    const MAX_DIST = 140;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      }

      // links
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.18;
            ctx.strokeStyle = `rgba(45, 155, 255, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // nodes
      for (const p of particles) {
        ctx.beginPath();
        ctx.fillStyle = "rgba(142, 213, 255, 0.55)";
        ctx.arc(p.x, p.y, 1.4, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    if (!reduced) {
      draw();
    } else {
      // static frame
      draw();
      cancelAnimationFrame(raf);
    }

    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink-950">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#0a1326_0%,_#05070d_55%)]" />

      {/* Grid overlay */}
      <div className="grid-bg absolute inset-0" />

      {/* Aurora blobs */}
      <div
        className="aurora left-[-10%] top-[-10%] h-[40rem] w-[40rem] bg-brand-600/30 animate-float"
        style={{ animationDuration: "14s" }}
      />
      <div
        className="aurora right-[-15%] top-[20%] h-[34rem] w-[34rem] bg-accent-500/25 animate-float"
        style={{ animationDuration: "18s", animationDelay: "-4s" }}
      />
      <div
        className="aurora bottom-[-10%] left-[30%] h-[30rem] w-[30rem] bg-violet-600/20 animate-float"
        style={{ animationDuration: "20s", animationDelay: "-8s" }}
      />

      {/* Particle constellation */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-70" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_50%,_#05070d_100%)]" />
    </div>
  );
}
