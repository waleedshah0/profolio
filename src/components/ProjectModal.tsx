"use client";

import { useEffect, useState } from "react";
import type { Project } from "@/data/content";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const [imgIdx, setImgIdx] = useState(0);

  useEffect(() => {
    setImgIdx(0);
  }, [project]);

  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.name} details`}
    >
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-ink-950/80 backdrop-blur-md"
        onClick={onClose}
      />

      {/* panel */}
      <div
        className="relative z-10 flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-t-3xl border border-white/10 bg-ink-900 shadow-2xl sm:rounded-3xl"
        style={{ animation: "fadeUp 0.35s cubic-bezier(0.16,1,0.3,1)" }}
      >
        {/* close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-ink-950/70 text-slate-300 backdrop-blur transition-colors hover:bg-ink-950 hover:text-white"
          aria-label="Close"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* scrollable content */}
        <div className="overflow-y-auto no-scrollbar">
          {/* image gallery */}
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-ink-800">
            <div
              className={`absolute inset-0 bg-gradient-to-br ${project.accent}`}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.images[imgIdx]}
              alt={`${project.name} screenshot ${imgIdx + 1}`}
              className="relative h-full w-full object-cover object-top"
            />
            {project.images.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setImgIdx((i) =>
                      i === 0 ? project.images.length - 1 : i - 1
                    )
                  }
                  className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-ink-950/70 text-white backdrop-blur transition-colors hover:bg-ink-950"
                  aria-label="Previous image"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button
                  onClick={() =>
                    setImgIdx((i) =>
                      i === project.images.length - 1 ? 0 : i + 1
                    )
                  }
                  className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-ink-950/70 text-white backdrop-blur transition-colors hover:bg-ink-950"
                  aria-label="Next image"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
                {/* dots */}
                <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                  {project.images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setImgIdx(i)}
                      className={`h-1.5 rounded-full transition-all ${
                        i === imgIdx
                          ? "w-6 bg-brand-400"
                          : "w-1.5 bg-white/40 hover:bg-white/70"
                      }`}
                      aria-label={`Go to image ${i + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* text */}
          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-brand-300">
              {project.category}
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-3">
              <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                {project.name}
              </h3>
              {project.live && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-lime-400/40 bg-lime-400/10 px-2.5 py-0.5 text-[11px] font-semibold text-lime-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />
                  Live in production
                </span>
              )}
            </div>

            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              {project.description}
            </p>

            <h4 className="mt-6 font-display text-sm font-semibold uppercase tracking-wider text-slate-300">
              Key highlights
            </h4>
            <ul className="mt-3 space-y-2">
              {project.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-lime-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <h4 className="mt-6 font-display text-sm font-semibold uppercase tracking-wider text-slate-300">
              Tech stack
            </h4>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.stack.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="btn-primary mt-7 w-full sm:w-auto"
              >
                Visit {project.name}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
