"use client";

import { useReveal } from "@/hooks/useReveal";

/**
 * Mounts once and wires up the global IntersectionObserver that adds
 * `.is-visible` to every `.reveal` element. Rendered at the page root.
 */
export default function RevealOnScroll() {
  useReveal();
  return null;
}
