---
title: "I Upgraded My Entire Web Animation Stack with 1 AI Prompt. Here's How."
date: "2026-08-16"
readTime: "5 min read"
category: "ANIMATION"
subtitle: "How a single declarative prompt integrates Lenis smooth scroll, GSAP ScrollTrigger synchronization, dark luxury atmosphere, SVG connectors, and card spotlights into any frontend."
coverImage: "/images/Blog/gsap_lenis_scroll_blog.jpg"
tags: ["Animation", "GSAP", "Lenis", "Frontend", "AI Tools"]
---

Every modern frontend engineer wants their website to feel like Linear, Vercel, Apple, or Stripe: silky smooth inertial scrolling, dark ambient glow backgrounds, cards that react smoothly to cursor proximity, and section reveals that snap cleanly into place without stuttering.

Yet achieving this level of visual polish is notoriously difficult. Developers typically fight between competing requestAnimationFrame loops, mismatched scroll offsets between Lenis and GSAP ScrollTrigger, unexpected horizontal layout overflow, broken anchor links, and sluggish mobile performance.

What if you didn't have to wire up dozens of scattered configuration files, calculate bounding rectangles by hand, or spend three days debugging ticker desynchronization?

By encapsulating the entire animation architecture into a single, multi-phase declarative AI directive, you can instruct any modern AI coding agent (Antigravity CLI, Claude Code, Cursor, Windsurf, or Gemini) to audit your repo, install the necessary dependencies, synchronize the scroll loops, build ambient lighting layers, and verify zero regressions in under two minutes.

## The Master Animation Directive (Copy-Paste Template)

Below is the exact system prompt directive. It is structured into eight distinct architectural phases. This phased design prevents AI models from jumping ahead, making assumptions about your CSS framework, or creating duplicate scroll listeners.

Copy and paste this entire block directly into your AI coding assistant or terminal agent:

```markdown
<CLI_TASK_DIRECTIVE>
Role: Principal Frontend Engineer specializing in GSAP, ScrollTrigger, Lenis smooth scroll, and dark luxury UI (Linear / Vercel / Stripe aesthetic).
Task: Audit this codebase, install the required animation stack, and implement a complete dark ambient scroll-animation system across the site without breaking any existing functionality or layout.
</CLI_TASK_DIRECTIVE>

<PHASE_1 — AUDIT & INSTALL>
1. Detect the framework (Next.js / Vite / plain React), package manager (npm/pnpm/yarn), and CSS system (Tailwind or plain CSS).
2. Check package.json for gsap and lenis. If missing, install:
   npm install gsap lenis
3. Do not install framer-motion or duplicate animation libraries if one is already present — reuse what exists.

<PHASE_2 — SMOOTH SCROLL + SCROLLTRIGGER SYNC>
1. Create a single global scroll controller (e.g. src/lib/smoothScroll.ts or a SmoothScrollProvider component) so Lenis is initialized exactly once app-wide — never per-page.
2. Configure Lenis:
   duration: 0.8
   easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
   wheelMultiplier: 1.2
   touchMultiplier: 1.5
3. Sync with GSAP:
   gsap.registerPlugin(ScrollTrigger);
   lenis.on('scroll', ScrollTrigger.update);
   gsap.ticker.add((time) => lenis.raf(time * 1000));
   gsap.ticker.lagSmoothing(0);
4. Ensure anchor links (#section-id) still scroll correctly through Lenis.

<PHASE_3 — DARK ATMOSPHERE BACKGROUND SYSTEM>
1. Base colors: page #0f0f0f, cards #141414/#1a1a1a, borders #2a2a2a.
2. Add fixed, non-blocking ambient glow auras (pointer-events-none, z-0) using radial/linear gradients with heavy blur (blur-[150px]).
3. Add a masked fine grid background layer (4rem x 4rem lines) faded via a radial mask so it's strongest near the top/center and fades at the edges.
4. All background layers must be pointer-events-none and sit behind content (z-0), never blocking clicks or scroll.

<PHASE_4 — SVG CONNECTOR LINES (for any "how it works" / step / process sections)>
1. Only apply this to sections that have sequential steps or connected nodes — skip if none exist.
2. Add an SVG overlay with cubic Bezier paths connecting nodes/cards.
3. Apply colored drop-shadow glow filters matching each section's accent color.
4. Animate stroke drawing (strokeDasharray/strokeDashoffset) via GSAP ScrollTrigger as the user scrolls into view.
5. Add glowing endpoint circles that light up once a path finishes drawing.

<PHASE_5 — CARD ENHANCEMENTS>
For all feature/step/pricing cards site-wide:
1. Add a top-positioned radial gradient overlay (accent color, 0.25 opacity idle -> 0.6 on hover), contained with overflow-hidden.
2. Optional: large low-opacity watermark numbers/icons in a back corner (text-7xl, ~10-20% opacity, select-none).
3. Hover state: lift (-translate-y-1.5), border brightens to accent color, add a soft colored shadow-2xl glow.
4. Optional mouse-follow spotlight inside cards using cursor x/y tracked via a mousemove listener + GSAP quickTo for smooth interpolation.

<PHASE_6 — HERO ENHANCEMENTS (if applicable)>
1. Any floating badges/pills near the hero: animate a subtle infinite float loop (y: 0 -> -8 -> 0, ~4s, staggered).
2. Any code/terminal showcase blocks: add a dark header bar with control dots, subtle CRT scanline overlay, and a GSAP-driven typewriter effect for displayed text.

<PHASE_7 — GENERAL SCROLL REVEALS>
Apply consistent entrance animations to section titles and card grids site-wide:
gsap.from(elements, {
  opacity: 0, y: 40, duration: 0.8, stagger: 0.15, ease: "power3.out",
  scrollTrigger: { trigger: section, start: "top 80%" }
});

<PHASE_8 — VERIFICATION (mandatory, do not skip)>
1. Confirm no layout shift or horizontal overflow (overflow-x-hidden on the body/root where needed).
2. Run the production build (npm run build) — zero TypeScript/lint/build errors required.
3. Load every modified page on the live localhost URL and visually confirm: animations play, no broken layouts, no console errors, page is scrollable normally.
4. List every file modified and which animation feature was added to each.
```

## How to Execute This Workflow in 3 Simple Steps

Using this prompt is seamless whether you are working with terminal-based autonomous agents or in-IDE AI copilots:

- COPY PROMPT — Copy the full directive block above into your clipboard.
- PASTE TO AGENT — Paste it into your CLI agent (e.g. Antigravity CLI / Claude Code) or IDE chat window (Cursor, Windsurf, Copilot).
- AUTOMATIC AUDIT — The agent inspects your package manager, registers GSAP and Lenis, and configures the centralized ticker sync.
- DARK LUXURY STYLING — Ambient glowing backdrop auras, fine radial masked grid lines, and high-contrast dark tokens are injected automatically.
- INTERACTIVE CARDS & SVG REVEALS — GSAP quickTo mouse spotlights and ScrollTrigger-driven Bezier paths are mapped to your existing components without altering their markup hierarchy.
- VERIFICATION PASS — The agent runs a full production build test and validates that no horizontal overflow or scroll traps are introduced.

## Why This Directive Works: The 8 Engineering Principles

Most single-prompt attempts fail because they try to generate too much ad-hoc code without strict architectural bounds. Here is why this 8-phase blueprint succeeds consistently across any React, Next.js, or Vite project:

- PHASE 1 (STACK AUDIT) — Instead of blindly installing packages, the agent checks existing dependencies first to avoid duplicate libraries (e.g., mixing Framer Motion with GSAP unnecessarily).
- PHASE 2 (SINGLE RAF LOOP) — Lenis and GSAP are bound to a single master requestAnimationFrame loop via gsap.ticker.add(). This completely eliminates scroll tearing, jitter, and ScrollTrigger position mismatch.
- LAGSMOOTHING ZERO — Setting gsap.ticker.lagSmoothing(0) prevents GSAP from artificially slowing down animation clocks when the browser experiences heavy frame updates.
- PHASE 3 (ATMOSPHERE ISOLATION) — Background glow auras and grid patterns are strictly set with pointer-events-none and z-index 0. This guarantees interactive buttons, inputs, and links never lose click focus.
- PHASE 4 (PARAMETRIC SVG BEZIERS) — Workflow diagrams and process sections get dynamic SVG connecting paths with strokeDashoffset triggers that draw smoothly as the user scrolls into view.
- PHASE 5 (PHYSICS-BASED SPOTLIGHTS) — Rather than laggy CSS transitions, card spotlight gradients follow the cursor using gsap.quickTo() for sub-pixel hardware-accelerated interpolation.
- PHASE 6 (HERO MICRO-POLISH) — Floating hero badges and typewriter terminal snippets create an immediate feeling of living, interactive software without overloading the main thread.
- PHASE 8 (STRICT REGRESSION GUARD) — The mandatory verification phase enforces npm run build and inspects overflow-x boundaries to guarantee zero broken layouts.

## Under the Hood: The Core Lenis + GSAP Controller

Here is the foundational TypeScript controller that Phase 2 implements. This establishes the unified smooth scroll loop that powers all subsequent animations:

```typescript
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let lenisInstance: Lenis | null = null;

export function initSmoothScroll(): Lenis {
  if (lenisInstance) return lenisInstance;

  lenisInstance = new Lenis({
    duration: 0.8,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    wheelMultiplier: 1.2,
    touchMultiplier: 1.5,
  });

  // Synchronize Lenis scroll updates with GSAP ScrollTrigger
  lenisInstance.on('scroll', ScrollTrigger.update);

  // Drive Lenis RAF entirely via GSAP's optimized ticker
  gsap.ticker.add((time: number) => {
    lenisInstance?.raf(time * 1000);
  });

  // Turn off lagSmoothing to avoid ticker desync
  gsap.ticker.lagSmoothing(0);

  return lenisInstance;
}
```

## Hardware-Accelerated Card Spotlight with gsap.quickTo

One of the coolest features included in Phase 5 is the cursor spotlight effect. Instead of triggering expensive CSS state re-renders on mousemove, it utilizes GSAP's high-performance quickTo utility for instant 60fps tracking:

```typescript
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export const useCardSpotlight = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const spotlight = spotlightRef.current;
    if (!card || !spotlight) return;

    // Create fast direct setters for sub-pixel translation
    const xTo = gsap.quickTo(spotlight, "x", { duration: 0.3, ease: "power2.out" });
    const yTo = gsap.quickTo(spotlight, "y", { duration: 0.3, ease: "power2.out" });

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      xTo(e.clientX - rect.left);
      yTo(e.clientY - rect.top);
    };

    card.addEventListener("mousemove", handleMouseMove);
    return () => card.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return { cardRef, spotlightRef };
};
```

## Elevate Your Frontend in a Single Command

Prompt engineering for frontend development has evolved far beyond generating generic button components. When you provide an AI agent with deep architectural constraints, precise library orchestration rules, and a strict verification checklist, it can transform the entire visual and tactile feel of your application in a single pass.

Save this prompt to your development toolkit or agent skills repository. Next time you build a landing page, portfolio, or SaaS dashboard, drop it into your workflow and watch your UI transform into a dark luxury masterpiece.
