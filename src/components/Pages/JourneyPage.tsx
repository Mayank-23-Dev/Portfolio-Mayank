import { j as e } from "../ui/_uiVendor.js";
import { H as g } from "../ui/Landing_UI/Header.js";
import { F as p } from "../ui/Landing_UI/Footer.js";
import { a as h, L as m } from "../ui/_reactVendor.js";
import { A as d, m as l } from "../ui/_animationVendor.js";
import { P as u } from "../ui/Landing_UI/PaperBackground.js";
import "../ui/Landing_UI/MenuToggleIcon.js";
import "../ui/AppShell.js";
import "../ui/_iconsVendor.js";
import "../ui/Landing_UI/ConnectDropdown.js";
import "../ui/_sharedIndex.js";
const f = [
    {
      title: "The Window",
      yearRange: "2014 - 2022",
      story: {
        short: "Started with my father's PC in 2014, learned typing to help him, and soon got obsessed with understanding how the machine worked from the inside out.",
        medium: "My journey began in 2014 on my father's work computer. I learned to type to help him, but soon I was obsessed—learning to swap system files like Utilman with CMD and reinstalling Windows from scratch. It wasn't about being a hacker; I just loved those machines and needed to know how they worked. It was my first lesson in technical autonomy.",
        long: "I remember the first computer I ever touched in 2014. It belonged to my father, who taught me how to type so I could help with his files. Once I had access, I couldn't stop. I found GTA, learned to hide games, and eventually got obsessed with CMD and system files. Swapping Utilman with CMD or reinstalling Windows from a pendrive became my way of exploring. I showed these tricks to friends in the school lab, just loving the discovery of it all. There was never a moment where someone handed me the door; I've always been the kid finding the window.",
      },
      list: {
        short: [
          "First PC experience in 2014",
          "Got obsessed with CMD and system-level discovery",
          "Developed a 'finding the window' mentality",
        ],
        medium: [
          "Self-taught system management and OS installation by age 10",
          "Learned to swap system files like Utilman to understand the OS",
          "Built a foundation of curiosity and a deep love for machines",
        ],
        long: [
          "Started with my father's PC in 2014, learning Kruti Dev 010 for Hindi typing",
          "Explored the machine's limits through games like GTA and IGI",
          "Mastered CMD tricks and system file swaps (Utilman) out of pure obsession",
          "Gained a reputation in school as the kid who actually understood how PCs worked",
        ],
      },
    },
    {
      title: "The Pivot",
      yearRange: "2023 - 2025",
      story: {
        short: "Built a YouTube channel to 15k subscribers, pivoted to Fiverr (2023-25) after monetization rejection, and spent 2025 reclaiming my health and technical focus at Angirasoft.",
        medium: "During 2023-2025, I built GamerzReact to 15k subscribers. After monetization was rejected, I sold the channel and started freelancing on Fiverr. This period was also about personal recalibration—dropping from 107kg through a 5 AM gym routine and starting a software apprenticeship at Angirasoft in 2025 (during the break between 12th boards and college) to master C++ foundations.",
        long: "By 10th grade (2023), I built GamerzReact to 15,000 subscribers. When YouTube rejected monetization, I sold the channel and moved to Fiverr, where I freelanced until 2025. Parallel to this, I had to fix my own direction. I had touched 107kg and was drifting; I spent the break between 12th boards and college (2025) hitting the gym at 5 AM and apprenticing at Angirasoft. It wasn't about a heroic comeback, just the quiet work of learning C++, mastering OOP, and getting back into my own corner.",
      },
      list: {
        short: [
          "Completed 10th in 2023 and 12th in 2025",
          "Fiverr freelancing (2023-2025)",
          "Angirasoft apprenticeship (2025 break)",
        ],
        medium: [
          "Built and sold a 15k subscriber YouTube channel",
          "Reclaimed health (from 107kg) through 5 AM gym discipline",
          "Mastered C++ and OOP foundations at Angirasoft before college",
        ],
        long: [
          "Navigated YouTube monetization rejection by selling the channel and moving to Fiverr (2023-2025)",
          "Fixed a period of drift by losing weight (from 107kg) and establishing a 5 AM routine in 2025",
          "Completed a software apprenticeship at Angirasoft Pvt. Ltd. during the board-to-college transition",
          "Developed a foundation in algorithmic thinking to solve LeetCode problems without panic",
        ],
      },
    },
    {
      title: "The Builder",
      yearRange: "2025 - Present",
      story: {
        short: "Enrolled at PSIT Kanpur, built Hactiq and FinEase, won 2nd in Protech Hackathon, and reached millions on YouTube through data experiments.",
        medium: "At PSIT Kanpur, I built Hactiq (habit tracker) and FinEase (AI finance dashboard), winning 2nd in the Protech Hackathon. I also ran cinematic Minecraft experiments that hit 2.2M views, focusing on understanding algorithms through data.",
        long: "I walked into PSIT Kanpur with a new focus. I built Hactiq, a free habit tracker, because I saw others selling templates for profit. In Sem 1, I built FinEase, an AI-powered finance aggregator, and won 2nd place at the Protech Hackathon. I also ran a 100-video experiment (CoreByte) to understand the YouTube algorithm, hitting 2.2 million views. I ended Sem 1 with an 8.5 CGPA, finally feeling like I was competing in the field.",
      },
      list: {
        short: [
          "8.5 CGPA at PSIT Kanpur",
          "Built Hactiq and FinEase (Hackathon 2nd place)",
          "CoreByte experiment reached 2.2M views",
        ],
        medium: [
          "Achieved 8.5 CGPA in the first semester after 12th",
          "Developed and deployed FinEase as a PWA with AI analysis",
          "Hit 2.2 million views on YouTube through CoreByte experiment",
        ],
        long: [
          "Successfully transitioned to BTech at PSIT Kanpur with an 8.5 CGPA",
          "Developed Hactiq with full authentication and real-time stats",
          "Won 2nd place at the PSIT Protech Hackathon with FinEase",
          "Conducted large-scale algorithm experiments through CoreByte",
        ],
      },
    },
    {
      title: "Current Focus",
      yearRange: "Sem 3 - Future",
      story: {
        short: "Developing VaultDL and Shiq, while mastering cinematography and deep-diving into DSA.",
        medium: "I'm currently building VaultDL (Windows media downloader) and Shiq (content production pipeline for creators). I'm also learning cinematography and practicing DSA daily to become a developer who thinks through problems cleanly.",
        long: "Now in Sem 3, I'm diving deep into desktop development with VaultDL, a Windows application for media downloading with high-performance queue management. I'm also working on Shiq, a production pipeline for solo creators. Beyond code, I'm learning the physics of light and cinematography. My goal is to be a developer who doesn't just find solutions, but thinks through them cleanly, passing everything I learn forward.",
      },
      list: {
        short: [
          "Building VaultDL (Desktop App) and Shiq",
          "Learning cinematography and advanced DSA",
          "Mentoring others through content",
        ],
        medium: [
          "Mastering local file handling and performance in desktop apps",
          "Developing a comprehensive production pipeline for creators (Shiq)",
          "Sharpening problem-solving skills through daily DSA practice",
        ],
        long: [
          "Building VaultDL to solve the complexity of media downloading",
          "Architecting Shiq to cover the entire content production lifecycle",
          "Exploring the intersection of technology and filmmaking",
          "Commitment to daily DSA to master clean, algorithmic thinking",
        ],
      },
    },
  ],
  y = [
    { year: "2014", label: "First PC and getting obsessed with machines" },
    { year: "2023", label: "GamerzReact YouTube channel (15k subscribers)" },
    { year: "2023", label: "Professional video editing freelance on Fiverr" },
    { year: "2025", label: "Software engineering apprenticeship at Angirasoft" },
    { year: "2025", label: "Starting BTech CSE at PSIT Kanpur" },
    { year: "2025", label: "CoreByte cinematic Minecraft data experiment" },
    { year: "2026", label: "FinEase AI-powered finance aggregator" },
    { year: "2026", label: "VaultDL high-performance desktop application" },
  ],
  x = { chapters: f, timeline: y },
  b = { prose: "Story", list: "List", timeline: "Timeline" },
  w = ({ value: n, onChange: a }) => {
    const i = ["prose", "list", "timeline"];
    return e.jsx("div", {
      className: "flex items-center gap-6 text-sm",
      children: i.map((t) => {
        const s = n === t;
        return e.jsx(
          "button",
          {
            type: "button",
            className: [
              "transition-colors duration-200",
              s
                ? "font-medium text-zinc-900"
                : "text-zinc-400 hover:text-zinc-600",
            ].join(" "),
            onClick: () => a(t),
            children: b[t],
          },
          t,
        );
      }),
    });
  },
  j = ({ value: n, onChange: a }) => {
    const i = ["short", "medium", "long"],
      t = i.indexOf(n),
      s = () => {
        t > 0 && a(i[t - 1]);
      },
      r = () => {
        t < i.length - 1 && a(i[t + 1]);
      };
    return e.jsxs("div", {
      className: "flex items-center gap-4 text-sm",
      children: [
        e.jsx("span", { className: "text-zinc-400", children: "Length" }),
        e.jsxs("div", {
          className: "flex items-center gap-3",
          children: [
            e.jsx("button", {
              type: "button",
              className: [
                "flex h-5 w-5 items-center justify-center transition-colors",
                t > 0
                  ? "text-zinc-900 hover:text-zinc-600"
                  : "text-zinc-300 cursor-not-allowed",
              ].join(" "),
              onClick: s,
              disabled: t === 0,
              "aria-label": "Decrease length",
              children: e.jsx("span", {
                className: "text-lg leading-none",
                children: "−",
              }),
            }),
            e.jsx("div", {
              className: "flex gap-1",
              children: i.map((o) =>
                e.jsx(
                  "div",
                  {
                    className: `h-1 w-1 rounded-full transition-colors ${o === n ? "bg-zinc-900" : "bg-zinc-200"}`,
                  },
                  o,
                ),
              ),
            }),
            e.jsx("button", {
              type: "button",
              className: [
                "flex h-5 w-5 items-center justify-center transition-colors",
                t < i.length - 1
                  ? "text-zinc-900 hover:text-zinc-600"
                  : "text-zinc-300 cursor-not-allowed",
              ].join(" "),
              onClick: r,
              disabled: t === i.length - 1,
              "aria-label": "Increase length",
              children: e.jsx("span", {
                className: "text-lg leading-none",
                children: "+",
              }),
            }),
          ],
        }),
      ],
    });
  },
  v = ({ chapters: n, lengthMode: a }) =>
    e.jsx("div", {
      className: "space-y-12",
      children: n.map((i) => {
        const t = i.story[a];
        return e.jsxs(
          "article",
          {
            className: "group",
            children: [
              e.jsxs("div", {
                className: "mb-3 flex items-baseline gap-3",
                children: [
                  e.jsx("span", {
                    className:
                      "text-xs font-medium uppercase tracking-wider text-zinc-400",
                    children: i.yearRange,
                  }),
                  e.jsx("h3", {
                    className: "text-sm font-medium text-zinc-900",
                    children: i.title,
                  }),
                ],
              }),
              e.jsx("div", {
                className: "relative",
                children: e.jsx(d, {
                  mode: "wait",
                  children: e.jsx(
                    l.div,
                    {
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      exit: { opacity: 0 },
                      transition: { duration: 0.3 },
                      children: t
                        .split(
                          `

`,
                        )
                        .map((s, r) =>
                          e.jsx(
                            "p",
                            {
                              className:
                                "mb-4 max-w-2xl text-left text-lg leading-relaxed text-zinc-600 transition-colors group-hover:text-zinc-900 last:mb-0 sm:text-justify",
                              children: s,
                            },
                            r,
                          ),
                        ),
                    },
                    a,
                  ),
                }),
              }),
            ],
          },
          i.title,
        );
      }),
    }),
  k = ({ chapters: n, lengthMode: a }) => {
    const i = [
      "bg-daisy-yellow",
      "bg-daisy-green",
      "bg-daisy-purple",
      "bg-daisy-light-blue",
      "bg-daisy-blue",
      "bg-daisy-orange",
    ];
    return e.jsx("div", {
      className: "space-y-10",
      children: n.map((t) => {
        const s = i[t.title.length % i.length],
          r = t.list[a];
        return e.jsxs(
          "section",
          {
            className: "space-y-3",
            children: [
              e.jsxs("div", {
                className: "flex items-baseline gap-3",
                children: [
                  e.jsx("span", {
                    className:
                      "text-xs font-medium uppercase tracking-wider text-zinc-400",
                    children: t.yearRange,
                  }),
                  e.jsx("h3", {
                    className: "text-sm font-medium text-zinc-900",
                    children: t.title,
                  }),
                ],
              }),
              e.jsx("ul", {
                className: "space-y-3 max-w-2xl",
                children: e.jsx(d, {
                  mode: "wait",
                  children: e.jsx(
                    l.div,
                    {
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      exit: { opacity: 0 },
                      transition: { duration: 0.2 },
                      children: r.map((o, m) =>
                        e.jsxs(
                          "li",
                          {
                            className:
                              "flex items-start gap-3 text-base text-zinc-600 mb-3 last:mb-0",
                            children: [
                              e.jsx("span", {
                                className: `mt-2 h-2 w-2 shrink-0 rounded-full border border-black ${s}`,
                              }),
                              e.jsx("span", {
                                className: "leading-relaxed",
                                children: o,
                              }),
                            ],
                          },
                          m,
                        ),
                      ),
                    },
                    a,
                  ),
                }),
              }),
            ],
          },
          t.title,
        );
      }),
    });
  },
  I = ({ events: n }) => {
    const a = [
      "bg-daisy-yellow",
      "bg-daisy-green",
      "bg-daisy-purple",
      "bg-daisy-light-blue",
      "bg-daisy-blue",
      "bg-daisy-orange",
    ];
    return e.jsx("div", {
      className: "relative border-l border-zinc-200 ml-3 space-y-8 py-2",
      children: n.map((i, t) =>
        e.jsxs(
          l.div,
          {
            initial: { opacity: 0, x: -10 },
            animate: { opacity: 1, x: 0 },
            transition: { delay: t * 0.05, duration: 0.3 },
            className: "relative pl-8",
            children: [
              e.jsx("div", {
                className: `absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full border border-black ${a[t % a.length]}`,
              }),
              e.jsx("div", {
                className: "flex flex-col gap-1",
                children: e.jsxs("div", {
                  className: "flex items-baseline gap-3",
                  children: [
                    e.jsx("span", {
                      className: "text-sm font-medium text-zinc-900",
                      children: i.label,
                    }),
                    e.jsx("span", {
                      className: "text-xs text-zinc-400",
                      children: i.year,
                    }),
                  ],
                }),
              }),
            ],
          },
          `${i.year}-${i.label}-${t}`,
        ),
      ),
    });
  },
  c = x,
  N = () => {
    const [n, a] = h.useState("prose"),
      [i, t] = h.useState("medium"),
      s = c.timeline;
    return e.jsx("section", {
      id: "journey",
      className: "mx-auto max-w-7xl px-6 pt-4 pb-24",
      children: e.jsxs("div", {
        className: "grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-24",
        children: [
          e.jsx("div", {
            className: "lg:col-span-3",
            children: e.jsx("h2", {
              className: "sticky top-24 text-2xl font-normal text-zinc-900",
              children: "Journey",
            }),
          }),
          e.jsxs("div", {
            className: "lg:col-span-9",
            children: [
              e.jsxs("div", {
                className:
                  "mb-12 flex w-full max-w-2xl flex-wrap items-center gap-8 border-b border-zinc-200 pb-6",
                children: [
                  e.jsx(w, { value: n, onChange: a }),
                  n !== "timeline" &&
                    e.jsxs(e.Fragment, {
                      children: [
                        e.jsx("div", { className: "h-4 w-px bg-zinc-300" }),
                        e.jsx(j, { value: i, onChange: t }),
                      ],
                    }),
                ],
              }),
              e.jsx("div", {
                className: "min-h-[400px]",
                children: e.jsx(d, {
                  mode: "wait",
                  children: e.jsxs(
                    l.div,
                    {
                      initial: { opacity: 0, y: 10 },
                      animate: { opacity: 1, y: 0 },
                      exit: { opacity: 0, y: -10 },
                      transition: { duration: 0.3, ease: "easeInOut" },
                      children: [
                        n === "prose" &&
                          e.jsx(v, { chapters: c.chapters, lengthMode: i }),
                        n === "list" &&
                          e.jsx(k, { chapters: c.chapters, lengthMode: i }),
                        n === "timeline" && e.jsx(I, { events: s }),
                      ],
                    },
                    n,
                  ),
                }),
              }),
            ],
          }),
        ],
      }),
    });
  },
  J = () =>
    e.jsxs(u, {
      children: [
        e.jsx("div", {
          className: "container mx-auto px-4 md:px-6 lg:px-8 relative",
          children: e.jsx(g, {}),
        }),
        e.jsxs("main", {
          id: "main-content",
          className: "container mx-auto px-4 md:px-6 lg:px-8 relative z-10",
          children: [
            e.jsx(N, {}),
            e.jsxs("div", {
              className:
                "mx-auto max-w-7xl px-6 mt-20 flex flex-col items-center gap-3 border-t border-zinc-200 pt-10 sm:flex-row sm:justify-between pb-24",
              children: [
                e.jsx("p", {
                  className:
                    "text-[11px] uppercase tracking-[0.3em] text-zinc-400",
                  children: "WANT THE EDITORIAL VERSION?",
                }),
                e.jsxs("div", {
                  className: "flex gap-3",
                  children: [
                    e.jsx(m, {
                      to: "/life",
                      className:
                        "rounded-full border border-zinc-900 px-5 py-2 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-900 hover:text-white",
                      children: "Life",
                    }),
                    e.jsx(m, {
                      to: "/projects",
                      className:
                        "rounded-full border border-zinc-300 px-5 py-2 text-sm font-semibold text-zinc-500 transition-colors hover:border-zinc-900 hover:text-zinc-900",
                      children: "Projects",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        e.jsx(p, {}),
      ],
    });
export { J as default };

