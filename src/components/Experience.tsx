"use client";

import { experiences } from "@/data/content";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="container-px">
        <div className="reveal section-eyebrow">
          <span className="h-px w-8 bg-brand-400" />
          04 — Experience
        </div>
        <h2 className="reveal mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
          Where I&apos;ve{" "}
          <span className="text-gradient">built &amp; deployed.</span>
        </h2>

        <div className="mt-12 relative">
          {/* vertical line */}
          <div className="absolute left-[7px] top-2 h-full w-px bg-gradient-to-b from-brand-500/60 via-white/10 to-transparent sm:left-1/2" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <TimelineItem key={exp.company + exp.role} exp={exp} index={i} />
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="reveal mt-14 glass card-hover rounded-3xl p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-brand-500/10 text-violet-300">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-white">
                  B.S. in Computer Science
                </h3>
                <p className="text-sm text-slate-400">
                  University of Central Punjab · Lahore, Pakistan
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Relevant coursework: ML, Deep Learning, Computer Vision, NLP,
                  Data Structures &amp; Algorithms, Database Systems, AI
                </p>
              </div>
            </div>
            <span className="chip shrink-0 font-mono">Oct 2021 – Jul 2025</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({
  exp,
  index,
}: {
  exp: (typeof experiences)[number];
  index: number;
}) {
  const left = index % 2 === 0;

  return (
    <div className="reveal relative pl-8 sm:pl-0">
      <div
        className={`sm:grid sm:grid-cols-2 sm:gap-8 ${
          left ? "" : ""
        }`}
      >
        {/* node */}
        <span className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center sm:left-1/2 sm:-translate-x-1/2">
          <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-brand-500/40" />
          <span className="relative inline-flex h-3 w-3 rounded-full border-2 border-ink-950 bg-brand-400" />
        </span>

        {/* spacer for alternating layout */}
        {!left && <div className="hidden sm:block" />}

        <div
          className={`glass card-hover rounded-2xl p-5 sm:p-6 ${
            left ? "sm:col-start-1 sm:text-right" : "sm:col-start-2"
          }`}
        >
          <div
            className={`flex flex-wrap items-center gap-2 ${
              left ? "sm:justify-end" : ""
            }`}
          >
            <span className="chip font-mono text-[11px]">{exp.period}</span>
            {exp.current && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-lime-400/40 bg-lime-400/10 px-2.5 py-1 text-[11px] font-semibold text-lime-300">
                <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />
                Current
              </span>
            )}
          </div>

          <h3 className="mt-3 font-display text-lg font-bold text-white">
            {exp.role}
          </h3>
          <div
            className={`mt-0.5 flex flex-wrap items-center gap-x-2 text-sm text-brand-300 ${
              left ? "sm:justify-end" : ""
            }`}
          >
            <span className="font-semibold">{exp.company}</span>
            <span className="text-slate-600">·</span>
            <span className="text-slate-400">{exp.location}</span>
          </div>

          <ul
            className={`mt-4 space-y-2 text-sm leading-relaxed text-slate-400 ${
              left ? "sm:text-right" : ""
            }`}
          >
            {exp.points.map((p) => (
              <li key={p} className="flex gap-2 text-left">
                <svg
                  className={`mt-1 h-3.5 w-3.5 shrink-0 text-brand-400 ${
                    left ? "sm:order-2" : ""
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
