"use client";

import { skillGroups } from "@/data/content";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="container-px">
        <div className="reveal section-eyebrow">
          <span className="h-px w-8 bg-brand-400" />
          03 — Capabilities
        </div>
        <h2 className="reveal mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
          The tools behind the{" "}
          <span className="text-gradient">intelligence.</span>
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {skillGroups.map((group, gi) => (
            <div
              key={group.title}
              className="reveal glass card-hover relative overflow-hidden rounded-3xl p-6 sm:p-7"
              data-reveal-delay={gi * 90}
            >
              {/* glow */}
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-500/10 blur-3xl" />

              <div className="relative flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500/20 to-accent-500/10 text-brand-300">
                  <SkillIcon name={group.icon} />
                </span>
                <h3 className="font-display text-lg font-semibold text-white">
                  {group.title}
                </h3>
                <span className="ml-auto font-mono text-xs text-slate-500">
                  {group.skills.length} items
                </span>
              </div>

              <div className="relative mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillIcon({ name }: { name: string }) {
  const c = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "brain":
      return (
        <svg {...c}>
          <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
          <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
        </svg>
      );
    case "layers":
      return (
        <svg {...c}>
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      );
    case "cloud":
      return (
        <svg {...c}>
          <path d="M17.5 19a4.5 4.5 0 0 0 .5-9 6 6 0 0 0-11.7-1.5A4 4 0 0 0 6 19h11.5z" />
        </svg>
      );
    default:
      return (
        <svg {...c}>
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
  }
}
