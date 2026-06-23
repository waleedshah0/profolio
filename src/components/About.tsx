"use client";

import { profile } from "@/data/content";

const marqueeItems = [
  "PyTorch", "LangChain", "LangGraph", "YOLOv11", "YOLOv26", "Hugging Face",
  "FastAPI", "Docker", "AWS", "RAG", "Computer Vision", "Agentic AI",
  "TensorRT", "ByteTrack", "OpenCV", "Kubernetes", "CI/CD", "LLM Fine-Tuning",
];

const pillars = [
  {
    title: "Research-oriented",
    desc: "Custom model architectures, SLAM-based 3D reconstruction, vision transformers.",
    icon: "flask",
  },
  {
    title: "Product-oriented",
    desc: "APIs, MLOps, CI/CD pipelines — shipping models to production at 99.5% uptime.",
    icon: "rocket",
  },
  {
    title: "Full AI stack",
    desc: "Data collection → training → fine-tuning → deployment → monitoring.",
    icon: "layers",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="container-px">
        <div className="reveal section-eyebrow">
          <span className="h-px w-8 bg-brand-400" />
          01 — About
        </div>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          {/* Left: narrative */}
          <div className="reveal" data-reveal-delay="80">
            <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
              Turning research-grade AI into{" "}
              <span className="text-gradient">real, shipped products.</span>
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-400">
              <p>{profile.summary}</p>
              <p>
                I thrive across the entire AI lifecycle — from collecting and
                annotating data, training and fine-tuning models, to deploying
                them as resilient production services. My work powers live
                platforms serving real clients, where latency, accuracy, and
                uptime aren&apos;t optional.
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {pillars.map((p) => (
                <div
                  key={p.title}
                  className="glass card-hover rounded-2xl p-5"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/20 to-accent-500/10 text-brand-300">
                    <PillarIcon name={p.icon} />
                  </div>
                  <h3 className="font-display text-sm font-semibold text-white">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-400">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: highlight cards */}
          <div className="reveal space-y-4" data-reveal-delay="160">
            <HighlightCard
              index="01"
              title="Delivered 2 live AI products"
              desc="Fortix AI & Sprixle shipped within my first year as a professional."
              accent="from-lime-400/20"
            />
            <HighlightCard
              index="02"
              title="End-to-end MLOps ownership"
              desc="Data → training → fine-tuning → deployment → monitoring, fully owned."
              accent="from-brand-400/20"
            />
            <HighlightCard
              index="03"
              title="Production scale"
              desc="50,000+ frames/day, 500+ concurrent conversations, 99.5% uptime."
              accent="from-violet-400/20"
            />

            <a
              href="/Muhammad_Waleed_Ahmad_Resume.pdf"
              className="glass card-hover flex items-center justify-between rounded-2xl p-5"
            >
              <div>
                <div className="font-display text-sm font-semibold text-white">
                  Full Résumé
                </div>
                <div className="mt-0.5 text-xs text-slate-400">
                  Download the PDF for details
                </div>
              </div>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500/15 text-brand-300 transition-transform group-hover:translate-x-1">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Tech marquee */}
      <div className="relative mt-20 overflow-hidden border-y border-white/5 bg-white/[0.015] py-6">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink-950 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink-950 to-transparent" />
        <div className="marquee-track gap-4">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="flex shrink-0 items-center gap-2 font-mono text-sm text-slate-500"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500/60" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function HighlightCard({
  index,
  title,
  desc,
  accent,
}: {
  index: string;
  title: string;
  desc: string;
  accent: string;
}) {
  return (
    <div className={`glass card-hover group relative overflow-hidden rounded-2xl p-5`}>
      <div
        className={`absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br ${accent} to-transparent blur-2xl`}
      />
      <div className="relative flex items-start gap-4">
        <span className="font-mono text-2xl font-bold text-white/10">{index}</span>
        <div>
          <h3 className="font-display text-base font-semibold text-white">{title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-slate-400">{desc}</p>
        </div>
      </div>
    </div>
  );
}

function PillarIcon({ name }: { name: string }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  if (name === "flask")
    return (
      <svg {...common}>
        <path d="M9 3h6M10 3v6.5L4.5 18a2 2 0 0 0 1.7 3h11.6a2 2 0 0 0 1.7-3L14 9.5V3" />
        <path d="M7.5 14h9" />
      </svg>
    );
  if (name === "rocket")
    return (
      <svg {...common}>
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    );
  return (
    <svg {...common}>
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
}
