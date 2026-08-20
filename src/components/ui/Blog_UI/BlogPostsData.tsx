const t = [
  {
    slug: "one-prompt-gsap-lenis-smooth-scroll-dark-luxury",
    title: "I Upgraded My Entire Web Animation Stack with 1 AI Prompt. Here's How.",
    subtitle:
      "How a single declarative prompt integrates Lenis smooth scroll, GSAP ScrollTrigger synchronization, dark luxury atmosphere, SVG connectors, and card spotlights into any frontend.",
    date: "2026-08-16",
    displayDate: "August 16, 2026",
    readingTime: "5 min read",
    excerpt:
      "Adding buttery smooth Lenis scrolling, GSAP ScrollTrigger sync, glowing ambient dark UI, and micro-interactions usually takes days of tweaking. Here is the exact single prompt that handles the entire audit, installation, and animation system in one shot.",
    coverImage: "/images/Blog/gsap_lenis_scroll_blog.jpg",
    tags: ["Animation", "GSAP", "Lenis", "Frontend", "AI Tools"],
    sections: [
      {
        paragraphs: [
          "Every modern frontend engineer wants their website to feel like Linear, Vercel, Apple, or Stripe: silky smooth inertial scrolling, dark ambient glow backgrounds, cards that react smoothly to cursor proximity, and section reveals that snap cleanly into place without stuttering.",
          "Yet achieving this level of visual polish is notoriously difficult. Developers typically fight between competing requestAnimationFrame loops, mismatched scroll offsets between Lenis and GSAP ScrollTrigger, unexpected horizontal layout overflow, broken anchor links, and sluggish mobile performance.",
          "What if you didn't have to wire up dozens of scattered configuration files, calculate bounding rectangles by hand, or spend three days debugging ticker desynchronization?",
          "By encapsulating the entire animation architecture into a single, multi-phase declarative AI directive, you can instruct any modern AI coding agent (Antigravity CLI, Claude Code, Cursor, Windsurf, or Gemini) to audit your repo, install the necessary dependencies, synchronize the scroll loops, build ambient lighting layers, and verify zero regressions in under two minutes.",
        ],
      },
      {
        heading: "The Master Animation Directive (Copy-Paste Template)",
        paragraphs: [
          "Below is the exact system prompt directive. It is structured into eight distinct architectural phases. This phased design prevents AI models from jumping ahead, making assumptions about your CSS framework, or creating duplicate scroll listeners.",
          "Copy and paste this entire block directly into your AI coding assistant or terminal agent:",
        ],
        code: `<CLI_TASK_DIRECTIVE>
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
4. List every file modified and which animation feature was added to each.`,
      },
      {
        heading: "How to Execute This Workflow in 3 Simple Steps",
        paragraphs: [
          "Using this prompt is seamless whether you are working with terminal-based autonomous agents or in-IDE AI copilots:",
        ],
        points: [
          "COPY PROMPT — Copy the full directive block above into your clipboard.",
          "PASTE TO AGENT — Paste it into your CLI agent (e.g. Antigravity CLI / Claude Code) or IDE chat window (Cursor, Windsurf, Copilot).",
          "AUTOMATIC AUDIT — The agent inspects your package manager, registers GSAP and Lenis, and configures the centralized ticker sync.",
          "DARK LUXURY STYLING — Ambient glowing backdrop auras, fine radial masked grid lines, and high-contrast dark tokens are injected automatically.",
          "INTERACTIVE CARDS & SVG REVEALS — GSAP quickTo mouse spotlights and ScrollTrigger-driven Bezier paths are mapped to your existing components without altering their markup hierarchy.",
          "VERIFICATION PASS — The agent runs a full production build test and validates that no horizontal overflow or scroll traps are introduced.",
        ],
      },
      {
        heading: "Why This Directive Works: The 8 Engineering Principles",
        paragraphs: [
          "Most single-prompt attempts fail because they try to generate too much ad-hoc code without strict architectural bounds. Here is why this 8-phase blueprint succeeds consistently across any React, Next.js, or Vite project:",
        ],
        points: [
          "PHASE 1 (STACK AUDIT) — Instead of blindly installing packages, the agent checks existing dependencies first to avoid duplicate libraries (e.g., mixing Framer Motion with GSAP unnecessarily).",
          "PHASE 2 (SINGLE RAF LOOP) — Lenis and GSAP are bound to a single master requestAnimationFrame loop via gsap.ticker.add(). This completely eliminates scroll tearing, jitter, and ScrollTrigger position mismatch.",
          "LAGSMOOTHING ZERO — Setting gsap.ticker.lagSmoothing(0) prevents GSAP from artificially slowing down animation clocks when the browser experiences heavy frame updates.",
          "PHASE 3 (ATMOSPHERE ISOLATION) — Background glow auras and grid patterns are strictly set with pointer-events-none and z-index 0. This guarantees interactive buttons, inputs, and links never lose click focus.",
          "PHASE 4 (PARAMETRIC SVG BEZIERS) — Workflow diagrams and process sections get dynamic SVG connecting paths with strokeDashoffset triggers that draw smoothly as the user scrolls into view.",
          "PHASE 5 (PHYSICS-BASED SPOTLIGHTS) — Rather than laggy CSS transitions, card spotlight gradients follow the cursor using gsap.quickTo() for sub-pixel hardware-accelerated interpolation.",
          "PHASE 6 (HERO MICRO-POLISH) — Floating hero badges and typewriter terminal snippets create an immediate feeling of living, interactive software without overloading the main thread.",
          "PHASE 8 (STRICT REGRESSION GUARD) — The mandatory verification phase enforces npm run build and inspects overflow-x boundaries to guarantee zero broken layouts.",
        ],
      },
      {
        heading: "Under the Hood: The Core Lenis + GSAP Controller",
        paragraphs: [
          "Here is the foundational TypeScript controller that Phase 2 implements. This establishes the unified smooth scroll loop that powers all subsequent animations:",
        ],
        code: `import Lenis from 'lenis';
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
}`,
      },
      {
        heading: "Hardware-Accelerated Card Spotlight with gsap.quickTo",
        paragraphs: [
          "One of the coolest features included in Phase 5 is the cursor spotlight effect. Instead of triggering expensive CSS state re-renders on mousemove, it utilizes GSAP's high-performance quickTo utility for instant 60fps tracking:",
        ],
        code: `import { useRef, useEffect } from 'react';
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
};`,
      },
      {
        heading: "Elevate Your Frontend in a Single Command",
        paragraphs: [
          "Prompt engineering for frontend development has evolved far beyond generating generic button components. When you provide an AI agent with deep architectural constraints, precise library orchestration rules, and a strict verification checklist, it can transform the entire visual and tactile feel of your application in a single pass.",
          "Save this prompt to your development toolkit or agent skills repository. Next time you build a landing page, portfolio, or SaaS dashboard, drop it into your workflow and watch your UI transform into a dark luxury masterpiece.",
        ],
      },
    ],
  },
  {
    slug: "ultimate-guide-ai-agent-skills-cli",
    title: "The Complete Guide to Agent Skills: CLI Tools, skills.sh, and Custom Skill Creation",
    subtitle:
      "How to empower AI models and CLI agents with modular skills, discover community skills on skills.sh, and package external APIs into reusable agent workflows.",
    date: "2026-08-07",
    displayDate: "August 7, 2026",
    readingTime: "6 min read",
    excerpt:
      "AI models become exponentially more capable when equipped with specialized skills. Here is a complete walkthrough on adding skills to standard AI & CLI tools, leveraging skills.sh, and building custom agent skills from scratch.",
    coverImage: "/images/Blog/ai_agent_skills_guide.jpg",
    tags: ["AI Agents", "CLI Tools", "Developer Tools", "Tutorial"],
    sections: [
      {
        paragraphs: [
          "Large language models are exceptional generalists, but when thrown into complex engineering, scientific computing, or automated CLI workflows, standard prompt engineering quickly runs into boundaries.",
          "If you ask an AI model to analyze a genomic sequence, configure an Android SDK, interact with an obscure REST API, or follow strict enterprise deployment rules, it often lacks domain-specific instructions, exact file conventions, and tool definitions.",
          "This is where Agent Skills enter the picture. A Skill is a modular, self-contained package of instructions, tool scripts, and reference documentation that equips an AI agent with instant, deep expertise for specific domain tasks.",
          "Whether you are building with web-based AI platforms or managing autonomous terminal agents via command-line interfaces (CLI), understanding how to find, install, and create skills is the single biggest unlock for modern AI workflows.",
        ],
      },
      {
        heading: "1. Understanding Skill Architecture: Standard AI vs CLI Skills",
        paragraphs: [
          "Before diving into installation, it helps to understand what actually happens when an AI agent loads a skill.",
          "In standard web-based AI tools, a skill acts as an extended context module that gets selectively injected into the conversation system prompt when relevant triggers are detected.",
          "In CLI AI agents (such as Antigravity CLI, Claude Code, or terminal-based autonomous agents), skills operate at a much deeper level:",
        ],
        points: [
          "LOCAL FILE ACCESS — CLI skills reside directly inside designated directories (such as ~/.config/agent/skills/ or project-level .agents/skills/), granting agents immediate access to execution tools.",
          "DETERMINISTIC INSTRUCTIONS — Built around a standardized SKILL.md file with YAML metadata headers, the agent reads pre-flight rules, step-by-step procedures, and validation requirements before taking action.",
          "DYNAMIC SCRIPTING — Skills can bundle dedicated helper scripts (in Python, Bash, or Node.js) that the CLI agent can run locally without needing to write throwaway code from scratch.",
          "CONTEXT RETRIEVAL — CLI skills enable lazy-loading of heavy documentation or API reference files only when specific triggers match, saving context window space.",
        ],
      },
      {
        heading: "2. Finding & Installing Skills via skills.sh",
        paragraphs: [
          "The biggest challenge with agent skills used to be discovery—where do developers find reliable, community-audited skills? That problem is solved by [skills.sh](https://skills.sh), the central ecosystem and registry for AI and CLI agent skills.",
          "[skills.sh](https://skills.sh) hosts hundreds of verified skills across software engineering, cloud infrastructure, computational biology, mobile app development, and database querying.",
          "Here is how you search and install skills into your environment using [skills.sh](https://skills.sh):",
        ],
        points: [
          "SEARCH THE HUB — Visit [skills.sh](https://skills.sh) to search for skills by framework, language, or domain (e.g., firebase-firestore, android-cli, pubmed-database).",
          "CLI ONE-LINER — Install any public skill directly into your project workspace or global agent registry with the CLI installer tool.",
          "VERIFY INSTALLATION — Once installed, your agent automatically detects the SKILL.md manifest during its initialization pass.",
        ],
        code: `# Install a skill globally for your CLI agent from skills.sh
npx skills-cli install firebase-firestore --global

# Install a specific community skill directly into your current project workspace
npx skills-cli install @skills/android-cli --path ./.agents/skills

# List all active skills available to your current CLI session
npx skills-cli list`,
      },
      {
        heading: "Step-by-Step Skill Installation in Claude (Settings & CLI)",
        paragraphs: [
          "Adding a skill to Claude is fast and flexible. You can upload skills directly via the Claude app Settings interface or install them for Claude Code in your terminal. Here is the point-by-point walkthrough:",
        ],
        points: [
          "OPEN CLAUDE SETTINGS — Launch Claude (Desktop or Web) and click on your profile/account menu in the navigation panel, then select 'Settings'.",
          "NAVIGATE TO SKILLS — In the Settings sidebar menu, click on the 'Skills' tab to open your skill management dashboard.",
          "UPLOAD SKILL — Click the 'Add Skill' / 'Upload Skill' button at the top right of the panel.",
          "SELECT SKILL FILE — Upload your SKILL.md manifest file or skill zip package downloaded from [skills.sh](https://skills.sh) (or paste the custom SKILL.md template).",
          "SAVE & ENABLE — Click 'Save' to activate the skill. Claude will now recognize the skill across all your conversations whenever matching triggers are detected.",
          "CLAUDE CODE CLI — For terminal users, run 'npx skills-cli install <skill-name> --agent claude' or manually place your SKILL.md inside '.claude/skills/<skill-name>/'.",
        ],
        code: `# Quick CLI setup for Claude Code:
npx skills-cli install @skills/firebase-firestore --agent claude

# Verify active skills in terminal:
claude --list-skills`,
      },
      {
        heading: "3. How to Create Custom Skills for Your Agents",
        paragraphs: [
          "While [skills.sh](https://skills.sh) provides a vast catalog of open-source skills, you will often need custom skills tailored to your team's internal tools, proprietary APIs, or project standards.",
          "Creating a custom skill is straightforward. A skill is represented as a directory containing a mandatory SKILL.md file and optional supporting files (scripts, templates, references).",
          "Here is the standard folder layout for an Agent Skill:",
        ],
        code: `my-custom-skill/
├── SKILL.md              # Main instruction file with YAML metadata & step-by-step guidance
├── scripts/              # Optional helper scripts (Python, Bash, JS) executed by the agent
│   └── api_helper.py
├── templates/            # Boilerplate file templates or code patterns
│   └── template.config.json
└── references/           # Detailed reference docs lazy-loaded when needed
    └── API_DOCUMENTATION.md`,
      },
      {
        heading: "The SKILL.md Specification",
        paragraphs: [
          "The core of every skill is SKILL.md. It begins with YAML frontmatter defining the skill's name, description, and execution requirements, followed by detailed Markdown instructions.",
          "Here is a production-ready SKILL.md template you can copy and customize for your own tools:",
        ],
        code: `---
name: custom-deployment-guard
description: Safely packages, validates, and deploys microservices to staging or production environments. Use when the user requests cloud deployment, deployment verification, or release builds.
version: 1.0.0
tools_required:
  - run_command
  - view_file
---

# Custom Deployment Guard Skill

## When to Activate
Activate this skill whenever the user mentions:
- Deploying services to staging or production
- Running pre-deployment validation scripts
- Checking release configuration status

## Execution Workflow
Follow these steps in strict order:

1. **Environment Check**:
   Inspect the environment configuration file using \`view_file\`.
   Ensure all required keys (\`DATABASE_URL\`, \`API_KEY\`) are defined before proceeding.

2. **Pre-flight Build Verification**:
   Execute the local validation script:
   \`\`\`bash
   python3 scripts/api_helper.py --check-health
   \`\`\`

3. **Deployment Step**:
   Run the deployment pipeline:
   \`\`\`bash
   npm run deploy:staging
   \`\`\`

4. **Post-Deployment Audit**:
   Verify HTTP response status 200 from the health endpoint before confirming success to the user.`,
      },
      {
        heading: "4. Best Practices for High-Performance Skills",
        paragraphs: [
          "To ensure your custom agent skills perform reliably across different AI models and CLI environments, follow these engineering principles:",
        ],
        points: [
          "EXPLICIT TRIGGERS — Write clear, unambiguous 'When to Activate' descriptions in your YAML header so the agent knows exactly when to load the skill.",
          "FAIL-SAFE INSTRUCTIONS — Always include validation and fallback steps if a script or shell command encounters an exit code non-zero failure.",
          "MINIMAL CONTEXT OVERHEAD — Keep the main SKILL.md focused on action steps. Place heavy documentation in a references/ directory so the agent reads it only when necessary.",
          "COMMUNITY PUBLISHING — Once your skill is battle-tested, share it with the developer community by submitting a pull request to skills.sh!",
        ],
      },
      {
        heading: "Supercharge Your AI Workflows",
        paragraphs: [
          "Skills transform AI from passive chat assistants into context-aware, autonomous execution engines.",
          "By leveraging community skills on skills.sh and building custom skills for your own codebase, you can automate complex devops tasks, enforce architecture patterns, and elevate your CLI developer experience to the next level.",
        ],
      },
    ],
  },
  {
    slug: "one-prompt-seo-optimization",
    title: "I Automated My Entire SEO Workflow with a Single Prompt. Here's How.",
    subtitle:
      "How turning search engine rules into a declarative AI prompt saved me hours of writing boilerplate meta tags, JSON-LD schemas, and copy.",
    date: "2026-06-30",
    displayDate: "June 30, 2026",
    readingTime: "3 min read",
    excerpt:
      "Web utilities need text to rank on Google, but writing SEO boilerplate by hand is a drag. Here is a single, copy-paste prompt that generates meta tags, optimized copy, and schema.org JSON-LD in seconds.",
    coverImage: "/images/Blog/seo_prompt_blog.jpg",
    tags: ["Learning", "SEO", "AI Tools"],
    sections: [
      {
        paragraphs: [
          "I launched a clean, minimalist web utility that loaded in 200ms, but three weeks later, Google Search Console impressions were a flat line sitting at zero. Crawlers didn't care about my React code; they needed text. To rank, Google needed at least six hundred words of contextual copy, proper meta descriptions, Open Graph cards, sitemaps, and robots.txt files. Writing this boilerplate by hand was a painful, mechanical chore that sucked the joy out of building.",
          "The realization hit me when I looked at how large language models handle structural semantics. LLMs are exceptional syntax compilers. Instead of manually writing metadata, I could feed a seed keyword into a single, declarative prompt to generate the entire SEO package—meta tags, optimized copy, schema JSON-LD, sitemaps, and robots.txt files—in ten seconds.",
        ],
      },
      {
        heading: "The SEO Engine Prompt",
        paragraphs: [
          "I created a system prompt designed specifically for this workflow, forcing the model to generate the exact HTML header metadata, a structured six-hundred-word content section, and a valid schema.org JSON-LD script for rich results. Copy and use this template in Claude, Gemini, or ChatGPT:",
        ],
        code: `You are an expert SEO specialist and technical writer. 

Goal: Perform complete, production-ready On-Page SEO optimization for a web utility/page.

Input Variables:
- Main Keyword: [Insert target keyword here]
- Secondary Keywords: [Insert list of supporting keywords here]
- FAQ Questions: [Insert 4-5 common questions related to this tool here]
- Domain URL: [Insert domain name e.g. https://example.com]

Task:
Generate the following output blocks in clean Markdown and HTML/JS/XML formats, ready to copy-paste:

1. HTML Meta Tags Block:
- A title tag containing the main keyword (under 60 characters)
- A descriptive meta description containing the main keyword and a secondary keyword (under 160 characters)
- Complete Open Graph (OG) and Twitter card tags (og:title, og:description, og:image, twitter:card)

2. Home Page SEO Content:
- Write exactly 600 words of engaging, valuable, and search-optimized body text explaining the utility, its use cases, and how it works. Use the main and secondary keywords naturally throughout.
- Organize the copy with clear h2 and h3 subheadings.

3. FAQ Section:
- Write detailed, helpful answers to the FAQ questions provided.
- Generate a valid, copy-pasteable script block containing JSON-LD structured data (schema.org/FAQPage) representing these questions and answers. Ensure it contains no formatting errors and uses valid JSON.

4. Sitemaps and Robots.txt files:
- Generate a standard, valid sitemap.xml file containing references to the homepage and any primary pages.
- Generate a standard robots.txt file pointing to the sitemap URL. It should explicitly allow all major crawlers (User-agent: *) while adding a directive to block indexing of any development, preview, or testing subdomains (such as *.pages.dev, *.netlify.app, or localhost) using standard disallows, or advising on X-Robots-Tag headers to prevent duplicate content indexation.`,
      },
      {
        heading: "How to Use This Workflow",
        paragraphs: [
          "To implement this on your website, copy the prompt template block above and paste it into Claude, ChatGPT, or Gemini. Replace the placeholder values inside the brackets with your primary keyword, secondary phrases, the questions you want to cover, and your target domain address. The model will compile the complete SEO package in seconds.",
        ],
        points: [
          "COPY PROMPT — Paste the system prompt template into Claude, ChatGPT, or Gemini.",
          "CUSTOMIZE INPUTS — Replace the placeholder brackets with your main keyword, secondary terms, FAQs, and domain URL.",
          "HTML HEAD — Copy the generated meta tags and place them directly in your HTML head container.",
          "HTML BODY — Paste the 600-word body text into a text container at the bottom of your homepage.",
          "JSON-LD SCHEMA — Insert the script tags inside your page body to enable Google rich snippets.",
          "PUBLIC ASSETS — Save sitemap.xml and robots.txt in your project's public folder and deploy.",
        ],
      },
      {
        heading: "How the Logic Works",
        paragraphs: [
          "To prevent search engines from penalizing your site for duplicate content, the generated files operate on three distinct levels of crawler control:",
        ],
        points: [
          "SITEMAPS — Sitemap.xml acts as a structured map, listing only your primary, custom domain URLs to declare them as canonical.",
          "ROBOTS.TXT — It serves as the crawler gatekeeper pointing directly to the sitemap URL to ensure index bots find valid pages immediately.",
          "DUPLICATE PREVENTION — To resolve duplicate indexing of development subdomains (like *.pages.dev), it designs an X-Robots-Tag: noindex header rule that ignores preview URLs and consolidates all domain authority onto your custom domain.",
        ],
      },
      {
        heading: "Building for the Search Crawler",
        paragraphs: [
          "Automating the mechanics of SEO turns a three-hour coding chore into a simple copy-paste workflow. It allows developers to focus on the only part of building that actually matters: making a tool that is worth finding in the first place.",
          "The crawler only knows what you tell it, but it's up to you to build something worth searching for.",
        ],
      },
    ],
  },
  {
    slug: "dsa-ai-mentor-approach",
    title: "I Stopped Using AI as a Shortcut. Here's What I Did Instead.",
    subtitle:
      "How replacing instant code generation with a strict, Socratic AI mentor forced me to struggle, retain algorithmic patterns, and finally master Linked Lists.",
    date: "2026-06-26",
    displayDate: "June 26, 2026",
    readingTime: "5 min read",
    excerpt:
      "We've all been there: get stuck on a LeetCode problem, copy-paste it into an LLM, skim the clean solution, and close the tab thinking we learned something. It's a lie. Here is how I broke the cycle and built a custom prompt that turned Claude into a brutal, question-first DSA mentor.",
    coverImage: "/images/Blog/DSA_AI_MENTOR.png",
    tags: ["Learning", "DSA", "AI Tools", "Career"],
    sections: [
      {
        paragraphs: [
          "I was trapped in a loop of false productivity.",
          "Every time I hit a wall with Data Structures and Algorithms (DSA), my workflow was identical: copy the problem statement, paste it into an LLM, skim the clean solution it spit out, nod in agreement, and mark the problem as 'solved'.",
          "Fifty problems later, I realized a depressing truth: I had retained absolutely nothing. I was merely sightseeing in someone else's codebase.",
          "A month ago, Linked Lists broke me. Not with a complex graph or a dynamic programming problem, but a simple pointer manipulation. I blanked completely. That quiet feeling of closing the browser tab and thinking, 'maybe software engineering isn't for me' crept in.",
          "But instead of quitting, I decided to change how I practiced. I didn't ban AI; I changed how it treated me.",
        ],
      },
      {
        heading: "The Illusion of Speed",
        paragraphs: [
          "AI tools are built to minimize friction. If you ask for code, you get it in three seconds.",
          "But when it comes to learning, friction is the feature, not the bug. In learning science, the feeling of being stuck is when your brain actually builds the neural pathways needed for pattern recognition. If you bypass the struggle, you bypass the learning.",
          "By receiving instant answers, I was optimizing for a green checkmark on LeetCode rather than deep comprehension. I was solving four problems a day but couldn't write a simple list reversal from scratch 48 hours later.",
        ],
      },
      {
        heading: "The Pivot: The Socratic AI Mentor",
        paragraphs: [
          "To break this cycle, I built a custom system prompt that turns the LLM from a code generator into a Socratic mentor.",
          "The rules are strict. It is forbidden from giving me code unless I explicitly ask. Instead, it must guide me through questions, hint at patterns without naming them, and force me to think.",
          "Here are the core principles of the Socratic approach:",
        ],
        points: [
          "It never reveals the final algorithm or solution upfront.",
          "It asks me to explain the constraints and clarify edge cases first.",
          "It provides exactly one tiny hint at a time, then pauses for my code or thoughts.",
          "It analyzes my approach, pointing out time and space complexities rather than rewriting my code.",
        ],
      },
      {
        paragraphs: [
          "It's annoying. That's the point. The intellectual discomfort is where the actual synthesis and memory retention happen.",
        ],
      },
      {
        heading: "The Mentor Prompt (Copy & Use)",
        paragraphs: [
          "Copy and paste this system prompt into Claude, ChatGPT, or Gemini at the start of your next practice session:",
        ],
        code: `You are my dedicated DSA & LeetCode mentor.

Core Philosophy: Never teach what I can discover. Never solve what I can think through.

STRICT RULES — No exceptions:
- Never provide complete solution or full code unless I explicitly say "give me the optimized solution"
- Never jump to the final algorithm or pattern immediately
- Never assume missing constraints — always ask first
- Never give the next hint until I've attempted the current step

Your Responsibilities:
- Start by asking clarifying questions about constraints, edge cases, and input/output format
- Let me propose my approach first — then validate it
- Help me identify the core pattern (e.g., two pointers, sliding window, DP, graph, greedy, etc.)
- Break the problem into small logical steps and guide me using progressive hints only
- If my approach is incorrect or inefficient, explain why and gently redirect me
- Highlight edge cases and common pitfalls without solving them for me
- Only when I explicitly say "give me the optimized solution", provide the full solution

Your Exact Workflow — Follow this order every time:

Phase 1 — Clarify Constraints
When I share a problem, immediately ask about:
- Input size and value ranges
- Edge cases (empty input, negatives, duplicates)
- Expected output format
- Any special constraints
Do NOT comment on the problem itself yet.

Phase 2 — Ask for My Approach First
Once constraints are clear, ask:
"What's your initial thought or approach?"
Do NOT hint at any pattern yet. Wait for my response.

Phase 3 — Validate My Approach
- If correct: affirm it and ask me to break it into steps myself
- If suboptimal: ask "What's the time complexity of that?" to help me notice the gap on my own
- If wrong: ask a targeted question that exposes the flaw without revealing the fix

Phase 4 — Pattern Identification (only if I'm stuck)
Guide with questions like:
- "Have you seen a similar problem structure before?"
- "What does the problem remind you of?"
- "What changes as you move through the input?"
Never name the pattern directly — let me arrive at it.

Phase 5 — Progressive Hints Only
- Give exactly one small hint at a time
- Wait for my response before giving the next hint
- Each hint should be a question or a nudge, not a statement

Phase 6 — Edge Cases & Pitfalls
Surface edge cases as questions, not warnings:
- "What happens if the array is empty?"
- "What if all elements are the same?"
- "Does your approach handle negative numbers?"

Phase 7 — Optimized Solution (only on explicit request)
Only when I say "give me the optimized solution", provide:
- Full algorithm walkthrough
- Clean, production-quality commented code
- Time & space complexity analysis
- Common follow-up variants of the problem

Your default opening for every new problem:
"Got it! Before we dive in — let me ask a few quick questions about the constraints..."
(after constraints) "Okay! Now, what's your first instinct on how to approach this?"`,
      },
      {
        heading: "How to Set It Up",
        paragraphs: [
          "To make this process seamless and avoid copy-pasting the prompt every time, you can set it up as a persistent Project in ChatGPT:",
        ],
        points: [
          "Open ChatGPT in your browser.",
          "Create a new Project (usually found in the sidebar or navigation menu).",
          "Give your new project a title, for example, \"Leetcode Mentor\".",
          "Go to the 'Project Instructions' section in the project setup/settings panel.",
          "Paste the prompt copied from above into the instructions field and save. Every new chat you start within this project will now automatically adopt the Socratic mentor persona.",
        ],
      },
      {
        heading: "The Friction is Worth It",
        paragraphs: [
          "I'm not going to lie: using this system is slow. A problem that used to take me five minutes of copy-pasting now takes 30 to 40 minutes of active thinking and back-and-forth debugging.",
          "It is frustrating. But it works.",
          "For the first time, concepts are actually sticking. Last week, I sat down and solved a medium Linked List problem without a single hint, recognizing the slow/fast pointer pattern naturally. A month ago, that would have felt like magic.",
          "I'm currently 100 problems in. I still have a long way to go, but the path forward is clear. If you find yourself stuck in the copy-paste loop, try this prompt. Let your brain struggle a little—it's the only way to grow.",
        ],
      },
    ],
  },

    {
      slug: "learning-is-no-longer-about-knowing-more",
      title: "Learning Is No Longer About Knowing More",
      subtitle:
        "In the age of AI, the real skill is knowing what is worth learning, what to ignore, and how to compress messy information into better judgment.",
      date: "2026-05-10",
      displayDate: "May 10, 2026",
      readingTime: "8 min read",
      excerpt:
        "A note on why learning now depends less on collecting information and more on building better judgment, compression, and action.",
      coverImage: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=80",
      tags: ["Learning", "AI", "Judgment"],
      sections: [
        {
          paragraphs: [
            "For most of human history, learning meant storing information.",
            "You read the book. You remembered the formula. You knew the answer. That was enough.",
            "But AI has broken that model.",
            "Today, information is cheap. Summaries are cheap. Explanations are cheap. Examples are cheap. Even first drafts, visual options, code, research synthesis, and critique are increasingly cheap.",
            "So the question is no longer: How much do I know?",
            "The better question is: What can I now notice, decide, or make better that I could not before?",
            "That is the new definition of learning.",
            "Learning is not consumption. Learning is not saving notes. Learning is not watching one more video because it feels productive. Learning has happened only when your internal model changes enough that your future decisions improve.",
            "If your behavior does not change, you probably did not learn. You only consumed.",
          ],
        },
        {
          heading: "The Old Model of Learning Is Breaking",
          paragraphs: [
            "The old model rewarded memory.",
            "Knowing more facts gave you an advantage because access was limited. If you had read the right book, studied the right framework, or memorized the right method, you could operate better than someone who had not.",
            "But AI changes the economics of knowledge.",
            "AI can retrieve information. AI can summarize dense material. AI can compare viewpoints. AI can generate options. AI can explain something in five levels of difficulty.",
            "This does not make learning useless. It makes shallow learning less valuable.",
            "The value moves upward. Memory becomes less important. Judgment becomes more important.",
            "The scarce skill is not knowing that a concept exists. The scarce skill is knowing when it matters, when it does not, what tradeoff it hides, and how it behaves in a real situation.",
            "That is where most people will struggle.",
            "They will have access to more knowledge than ever, but their ability to judge that knowledge will remain weak.",
          ],
        },
        {
          heading: "What Actually Qualifies as Learning Now?",
          paragraphs: [
            "In the AI age, learning should be judged by output change.",
            "A concept is learned only if it improves at least one of these:",
          ],
          points: [
            "You see better. You notice things you previously missed.",
            "You decide better. You can choose between options with stronger reasoning.",
            "You make better. Your work improves, not just your vocabulary.",
            "You debug better. You can identify why something is broken.",
            "You transfer better. You can apply the same idea in a different context.",
          ],
        },
        {
          paragraphs: [
            "This is especially true in design.",
            "Learning typography is not memorizing terms like leading, tracking, x height, and optical alignment.",
            "Learning typography means you can look at a messy interface and immediately understand why the reading rhythm feels broken.",
            "Learning UX is not knowing ten usability heuristics.",
            "Learning UX means you can see where a user will hesitate before the user tells you.",
            "Learning AI is not knowing words like tokens, embeddings, agents, RAG, world models, or context windows.",
            "Learning AI means you know when to use AI, when not to use it, how to evaluate its output, and where it will fail.",
            "That is the shift.",
            "The new learning is not about possessing information. It is about improving perception, judgment, and action.",
          ],
        },
        {
          heading: "The Most Underrated Skill: Knowledge Compression",
          paragraphs: [
            "The most interesting part of learning is not collecting more information. It is compression.",
            "Compression is when you take many scattered details and turn them into a smaller, reusable mental model.",
            "This is not the same as summarization.",
            "A summary says: Here are the main points.",
            "Compression says: Here is the underlying pattern that explains the points.",
            "A summary helps you remember. Compression helps you decide.",
            "For example, you could memorize many UX rules: Users miss buttons when contrast is low. Users struggle when labels are vague. Users abandon flows when errors are unclear. Users hesitate when the next step is ambiguous.",
            "But a compressed model would be: UX fails when the user cannot confidently answer: where am I, what can I do, what happens next, and what went wrong?",
            "That one sentence is more useful than twenty disconnected rules.",
            "It becomes a decision tool.",
            "You can apply it to onboarding, dashboards, forms, payments, login, proctoring, interviews, healthcare, finance, and almost any complex system.",
            "That is good compression.",
          ],
        },
        {
          heading: "Compression Is How Experts Think",
          paragraphs: [
            "Experts do not just know more. They carry better abstractions.",
            "A beginner sees isolated examples. An expert sees the repeated structure underneath them.",
            "A beginner sees a dashboard, an onboarding flow, a login screen, and a timeline as separate problems.",
            "An expert sees recurring forces:",
          ],
          points: [
            "What is the primary object?",
            "What is the user trying to resolve?",
            "Where is the uncertainty?",
            "What information should be visible now?",
            "What can be deferred?",
            "What failure state is being ignored?",
            "What decision is the interface forcing the user to make?",
          ],
        },
        {
          paragraphs: [
            "This is why senior people often seem faster.",
            "They are not processing every detail from scratch. They are matching the situation against compressed models built from previous experience.",
            "Good learning gives you these models. Bad learning gives you vocabulary.",
          ],
        },
        {
          heading: "The AI Parallel",
          paragraphs: [
            "This is also how many modern AI systems work.",
            "They do not operate by preserving every raw detail equally. They learn compact representations that preserve what matters for prediction and action.",
            "In the LeWorldModel paper, the model learns from raw pixels by compressing observations into low dimensional latent representations, then predicts future states in that latent space rather than modeling every pixel directly. The paper frames this as learning compact representations that capture environment dynamics for planning.",
            "That is the useful analogy for human learning.",
            "You do not want to carry every detail. You want to preserve the structure that helps you predict, decide, and act.",
            "A designer does not need to remember every UI pattern they have ever seen.",
            "They need compressed judgment:",
          ],
          points: [
            "When users are anxious, prioritize certainty over elegance.",
            "Simple does not mean fewer elements. Simple means fewer unresolved decisions for the user.",
            "Enterprise UX usually fails when the system hides operational complexity instead of organizing it.",
            "High stakes UX is not about delight. It is about reducing uncertainty before failure becomes expensive.",
          ],
        },
        {
          paragraphs: [
            "These are compressed models. They are portable. They help you make decisions.",
          ],
        },
        {
          heading: "When Learning Becomes Procrastination",
          paragraphs: [
            "There is a point where learning stops helping.",
            "You keep reading. You keep watching. You keep collecting frameworks. You keep asking for one more example.",
            "But your output does not improve.",
            "That is the point where learning has become intellectual procrastination.",
            "The threshold is simple:",
            "If additional learning does not meaningfully change your decisions, your output quality, your speed, or your error rate, you are probably in diminishing returns.",
            "This happens a lot with ambitious people.",
            "They do not avoid work by being lazy. They avoid work by preparing forever.",
            "The preparation feels responsible. It feels disciplined. It feels serious.",
            "But it is still avoidance.",
            "The only way to know what you actually understand is to use it.",
            "Build the thing. Write the article. Ship the interface. Make the decision. Get feedback. Then learn again.",
            "That loop is where learning compounds.",
            "Input without output becomes noise.",
          ],
        },
        {
          heading: "The New Learning Loop",
          paragraphs: ["The best learning loop now looks like this:"],
          points: [
            "First, consume enough to understand the terrain.",
            "Second, compress what you learned into a small model.",
            "Third, apply it to a real problem.",
            "Fourth, observe where the model breaks.",
            "Fifth, refine the model.",
          ],
        },
        {
          paragraphs: [
            "Then repeat.",
            "This is much stronger than endless consumption because reality becomes the teacher.",
            "AI can accelerate every part of this loop, but it cannot replace the loop itself.",
            "AI can give you explanations. But it cannot decide what matters in your context unless you have the judgment to guide it.",
            "AI can generate options. But it cannot give you taste automatically.",
            "AI can critique your work. But you still need to know which critique is valid.",
            "AI can help you think. But it cannot care about the consequences of your decisions.",
            "That responsibility stays with you.",
          ],
        },
        {
          heading: "What You Should Learn Now",
          paragraphs: [
            "In the AI age, the best things to learn are the things that improve your filters.",
          ],
          points: [
            "Learn product judgment. What problem is actually worth solving?",
            "Learn systems thinking. How do decisions create second order effects?",
            "Learn visual judgment. Why does this feel clear, heavy, cheap, elegant, noisy, or trustworthy?",
            "Learn business reasoning. Where does the work create measurable value?",
            "Learn technical judgment. What is feasible, brittle, expensive, or overengineered?",
            "Learn human behavior. How do people act under stress, confusion, incentives, fear, urgency, or fatigue?",
          ],
        },
        {
          paragraphs: [
            "These skills are durable because they help you judge AI output instead of merely receive it.",
            "AI makes average execution easier.",
            "That means taste, judgment, and clarity become more important, not less.",
          ],
        },
        {
          heading: "A Simple Test",
          paragraphs: [
            "After learning anything, ask: What can I now notice, decide, or make better that I could not before?",
            "If the answer is clear, you learned.",
            "If the answer is vague, you consumed.",
            "And if you keep consuming without changing your work, stop.",
            "The next lesson is probably hidden inside execution.",
            "Learning is no longer about knowing more.",
            "It is about building better internal models for seeing, judging, making, and correcting.",
            "That is the meta skill.",
            "That is what remains valuable when information becomes abundant.",
          ],
        },
      ],
    },
  ],
  a = (e) => t.find((n) => n.slug === e);
export { t as b, a as g };

