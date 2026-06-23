"use client";

import { useEffect, useState } from "react";
import { profile, stats } from "@/data/content";

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [typed, setTyped] = useState("");
  const [deleting, setDeleting] = useState(false);

  // Typewriter effect cycling through roles
  useEffect(() => {
    const full = profile.roles[roleIdx];
    let delay = deleting ? 45 : 90;

    if (!deleting && typed === full) {
      delay = 1600; // pause at full word
    } else if (deleting && typed === "") {
      delay = 250;
    }

    const t = setTimeout(() => {
      if (!deleting) {
        if (typed.length < full.length) {
          setTyped(full.slice(0, typed.length + 1));
        } else {
          setDeleting(true);
        }
      } else {
        if (typed.length > 0) {
          setTyped(full.slice(0, typed.length - 1));
        } else {
          setDeleting(false);
          setRoleIdx((i) => (i + 1) % profile.roles.length);
        }
      }
    }, delay);

    return () => clearTimeout(t);
  }, [typed, deleting, roleIdx]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      <div className="container-px">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left: copy */}
          <div>
            <div className="reveal is-visible inline-flex items-center gap-2 rounded-full border border-lime-400/30 bg-lime-400/10 px-3 py-1 text-xs font-medium text-lime-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-lime-400" />
              </span>
              Available for AI engineering roles
            </div>

            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              <span className="block text-slate-400 text-2xl font-medium sm:text-3xl">
                Hi, I&apos;m
              </span>
              <span className="mt-1 block">Muhammad</span>
              <span className="text-gradient block">Waleed Ahmad</span>
            </h1>

            {/* Typewriter role */}
            <div className="mt-5 flex h-9 items-center gap-1 font-display text-2xl font-semibold text-slate-200 sm:text-3xl">
              <span className="text-brand-400">&gt;</span>
              <span>{typed}</span>
              <span className="ml-0.5 inline-block h-7 w-[3px] animate-blink bg-brand-400" />
            </div>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
              {profile.tagline} I ship real products — from real-time surveillance
              to autonomous agents — across the full MLOps stack.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="btn-primary">
                View my work
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#contact" className="btn-ghost">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16v16H4z" opacity="0" />
                  <path d="M22 6l-10 7L2 6" />
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                </svg>
                Get in touch
              </a>
            </div>

            {/* Social row */}
            <div className="mt-8 flex items-center gap-5 text-sm text-slate-500">
              <a href={profile.github} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-1.5 transition-colors hover:text-slate-200">
                <GithubIcon className="h-4 w-4" />
                <span className="font-mono">{profile.githubHandle}</span>
              </a>
              <span className="h-3 w-px bg-white/10" />
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-1.5 transition-colors hover:text-slate-200">
                <LinkedinIcon className="h-4 w-4 text-[#0a66c2]" />
                <span className="font-mono">in/{profile.linkedinHandle}</span>
              </a>
              <span className="h-3 w-px bg-white/10" />
              <span className="inline-flex items-center gap-1.5">
                <PinIcon className="h-4 w-4" />
                {profile.location}
              </span>
            </div>
          </div>

          {/* Right: visual / terminal card */}
          <div className="reveal is-visible relative" data-reveal-delay="150">
            <HeroVisual />
          </div>
        </div>

        {/* Stats bar */}
        <div className="reveal is-visible mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-4" data-reveal-delay="300">
          {stats.map((s) => (
            <div key={s.label} className="bg-ink-900/40 p-5 text-center sm:p-6">
              <div className="font-display text-3xl font-bold text-white sm:text-4xl">
                {s.value}
                <span className="text-gradient">{s.suffix}</span>
              </div>
              <div className="mt-1 text-xs text-slate-400 sm:text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-500 transition-colors hover:text-slate-300 lg:flex"
        aria-label="Scroll down"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="flex h-9 w-5 justify-center rounded-full border border-white/20 p-1">
          <span className="h-2 w-1 animate-bounce rounded-full bg-brand-400" />
        </span>
      </a>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto max-w-md">
      {/* Glow ring behind */}
      <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-500/20 via-transparent to-accent-500/20 blur-2xl" />

      {/* Terminal card */}
      <div className="glass-strong overflow-hidden rounded-2xl shadow-2xl shadow-black/50">
        {/* Title bar */}
        <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
          <span className="h-3 w-3 rounded-full bg-green-400/80" />
          <span className="ml-2 font-mono text-xs text-slate-400">waleed@ai-engine: ~</span>
        </div>

        {/* Body */}
        <div className="space-y-3 p-5 font-mono text-[13px] leading-relaxed">
          <p>
            <span className="text-lime-400">waleed@ai</span>
            <span className="text-slate-500">:</span>
            <span className="text-brand-400">~$</span>{" "}
            <span className="text-slate-200">whoami --stack</span>
          </p>
          <p className="text-slate-400">
            <span className="text-brand-300">→</span> AI Engineer crafting
            intelligent systems
          </p>

          <div className="mt-3 space-y-1.5">
            {[
              ["models", "YOLOv11/v26 · LLMs · VLMs"],
              ["agents", "LangChain · LangGraph · RAG"],
              ["deploy", "FastAPI · Docker · AWS"],
              ["infra", "CI/CD · Kubernetes · 99.5% uptime"],
            ].map(([k, v]) => (
              <p key={k} className="flex gap-2">
                <span className="w-14 shrink-0 text-accent-400">{k}</span>
                <span className="text-slate-500">=</span>
                <span className="text-slate-300">{v}</span>
              </p>
            ))}
          </div>

          <p className="pt-2">
            <span className="text-lime-400">waleed@ai</span>
            <span className="text-slate-500">:</span>
            <span className="text-brand-400">~$</span>{" "}
            <span className="text-slate-200">deploy --prod fortix sprixle</span>
          </p>
          <p className="text-lime-300">
            ✓ 2 products live · serving real clients
          </p>
          <p>
            <span className="text-lime-400">waleed@ai</span>
            <span className="text-slate-500">:</span>
            <span className="text-brand-400">~$</span>{" "}
            <span className="inline-block h-4 w-2 animate-blink bg-brand-400 align-middle" />
          </p>
        </div>
      </div>

      {/* Floating badge */}
      <div className="absolute -right-3 -top-3 rotate-3 rounded-xl border border-lime-400/30 bg-ink-900/90 px-3 py-1.5 text-xs font-semibold text-lime-300 shadow-lg backdrop-blur">
        2× prod ships
      </div>
      <div className="absolute -bottom-3 -left-3 -rotate-3 rounded-xl border border-brand-400/30 bg-ink-900/90 px-3 py-1.5 text-xs font-semibold text-brand-300 shadow-lg backdrop-blur">
        &gt;92% mAP
      </div>
    </div>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14C2.2 0 0 2.2 0 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zM8 19H5V8h3v11zM6.5 6.7a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6zM20 19h-3v-5.6c0-1.4-.5-2.3-1.7-2.3-.9 0-1.5.6-1.7 1.2-.1.2-.1.5-.1.8V19h-3V8h3v1.3c.4-.6 1.1-1.5 2.7-1.5 2 0 3.5 1.3 3.5 4.1V19z" />
    </svg>
  );
}

function PinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
