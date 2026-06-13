import { j as e } from "../ui/_uiVendor.js";
import { H as g } from "../ui/Landing_UI/Header.js";
import { F as p } from "../ui/Landing_UI/Footer.js";
import { a as h } from "../ui/_reactVendor.js";
import { A as d, m as l } from "../ui/_animationVendor.js";
import { P as u } from "../ui/Landing_UI/PaperBackground.js";
import "../ui/Landing_UI/MenuToggleIcon.js";
import "../ui/AppShell.js";
import "../ui/_iconsVendor.js";
import "../ui/Landing_UI/ConnectDropdown.js";
import "../ui/_sharedIndex.js";
const f = [
    {
      title: "The Foundation",
      yearRange: "2021-2025",
      story: {
        short:
          "I started at Jyothy Institute of Technology aiming to become a software engineer, but I was drawn toward the friction people experienced with software. I explored usability inside class projects, ran quick tests with friends, and graduated with an 8.7 CGPA and a clear interest in designing for clarity, not complexity.",
        medium: `I joined Jyothy Institute of Technology expecting to spend my four years inside code. But somewhere between algorithms and data structures, I became fascinated by the gap between how systems work and how people experience them. I ran small usability walkthroughs for class projects, refined flows based on peer reactions, and slowly drifted toward product thinking.

By the time I graduated with an 8.7 CGPA, I realized that good software isn't defined by how efficiently the code runs, but by how intuitively it guides the person using it.`,
        long: `I entered Jyothy Institute of Technology with a straightforward plan: become a software engineer. But in the middle of algorithms and data structures, I discovered a different kind of bug, the one that appears when people struggle with something that's technically correct. While my peers optimized logic, I found myself adjusting flows, simplifying interactions, and observing how tiny design changes affected people.

I started running informal usability sessions with friends, tweaking prototypes, and building an intuition for clarity. These experiments quietly shaped my direction.

Graduating with an 8.7 CGPA proved I could build technology, but understanding how it should feel became the part that mattered most.`,
      },
      list: {
        short: [
          "Studied CS at Jyothy Institute of Technology",
          "Explored usability through class projects",
          "Graduated with 8.7 CGPA",
        ],
        medium: [
          "Studied Computer Science while exploring how users interact with software",
          "Ran quick usability walkthroughs and refined class project flows",
          "Graduated with an 8.7 CGPA",
        ],
        long: [
          "Studied Computer Science at Jyothy Institute of Technology and became fascinated by the gap between technical correctness and user experience",
          "Ran informal usability sessions for class projects and experimented with interface clarity",
          "Graduated with an 8.7 CGPA, grounding my approach in people-first design thinking",
        ],
      },
    },
    {
      title: "The Awakening",
      yearRange: "Early 2023",
      story: {
        short:
          "At Varcons Technologies, a “perfect” flow collapsed under user testing. Iterating on it improved engagement by 15 percent and taught me the value of designing with evidence, not assumptions.",
        medium:
          "Varcons Technologies was where theory finally met reality. A flow I had diagrammed flawlessly broke down the moment users interacted with it. Running tests, mapping journeys, and iterating quickly helped lift engagement by 15 percent and taught me to design with evidence rather than intuition.",
        long: "My internship at Varcons Technologies reshaped how I thought about design. I built a feature I believed was airtight, then watched real users struggle with it. That moment shifted everything. I conducted moderated tests, mapped user journeys, fixed friction points, and rebuilt the flow. Those changes increased engagement by 15 percent and taught me one of the biggest lessons in product design: the real work begins after first contact with users.",
      },
      list: {
        short: ["UX intern at Varcons", "Improved engagement by 15 percent"],
        medium: [
          "Conducted user testing at Varcons Technologies",
          "Improved onboarding flow, increasing engagement by 15 percent",
        ],
        long: [
          "Joined Varcons Technologies as a UX intern and learned to validate assumptions through testing",
          "Redesigned a critical flow based on research insights, increasing engagement by 15 percent",
        ],
      },
    },
    {
      title: "The Growth",
      yearRange: "Mid 2024",
      story: {
        short:
          "At WinWire Technologies, I interviewed 18 plus enterprise users and refined booking workflows, improving efficiency by 35 percent.",
        medium:
          "At WinWire, I led usability evaluations for enterprise workflows. Conducting 18 plus interviews and collaborating closely with engineering helped refine the booking experience and drove a 35 percent efficiency lift.",
        long: "WinWire Technologies taught me how to design at enterprise scale. I interviewed over 18 users across multiple teams, mapped bottlenecks in booking workflows, and worked with engineering to balance feasibility with clarity. Through iteration cycles and fast validation loops, we improved booking efficiency by 35 percent and created a reusable testing framework for future features.",
      },
      list: {
        short: [
          "UX work at WinWire",
          "Improved booking efficiency by 35 percent",
        ],
        medium: [
          "Conducted user research at WinWire",
          "Improved booking efficiency by 35 percent with iterative testing",
        ],
        long: [
          "Led usability evaluations at WinWire Technologies, interviewing 18 plus enterprise users",
          "Improved booking workflows by 35 percent through research-led iteration",
        ],
      },
    },
    {
      title: "The Innovation",
      yearRange: "Late 2024",
      story: {
        short:
          "Park EZ started as a personal frustration and grew into a validated product that reached the Smart India Hackathon finals with 95 percent satisfaction.",
        medium:
          "Park EZ was built from a simple pain point: finding parking. Interviews, prototypes, and pilots helped validate the concept. It reached the Smart India Hackathon finals with 95 percent satisfaction and reduced search time by 60 percent.",
        long: "Park EZ began with a frustration I experienced daily: circling for parking. I turned that irritation into a design challenge by interviewing drivers, mapping journeys, prototyping flows, and validating the concept through pilots. The solution reached the Smart India Hackathon finals, earned 95 percent satisfaction, and reduced parking search time by 60 percent during testing.",
      },
      list: {
        short: ["Built Park EZ", "Hackathon finalist"],
        medium: [
          "Created Park EZ to solve parking friction",
          "Reached Smart India Hackathon finals",
        ],
        long: [
          "Designed Park EZ from personal frustration, validating it through interviews and pilots",
          "Reached Smart India Hackathon finals with 95 percent satisfaction and 60 percent faster search time",
        ],
      },
    },
    {
      title: "What's Next",
      yearRange: "2025-Present",
      story: {
        short:
          "I’m now focused on scalable, user-centered systems backed by toolkits for research and fast validation.",
        medium:
          "With certifications from Google, Microsoft, and Meta, I'm now building toolkits like scripts, maps, and facilitation methods to help teams move faster from idea to validated user experience.",
        long: "After earning certifications from Google, Microsoft, and Meta and building experience across consumer and enterprise, I'm now creating research scripts, facilitation tools, and service maps to help teams validate ideas quickly and confidently. My focus is on solving problems that need scalable, human-centered design.",
      },
      list: {
        short: ["UX certifications", "Building research toolkits"],
        medium: [
          "Earned certifications from Google, Microsoft, and Meta",
          "Building toolkits for scalable design",
        ],
        long: [
          "Completed UX certifications from Google, Microsoft, and Meta",
          "Developing reusable research and facilitation toolkits for scalable, user-centered product design",
        ],
      },
    },
  ],
  y = [
    { year: "2021", label: "Started CS Degree" },
    { year: "2022", label: "Discovered UX" },
    { year: "2023", label: "Varcons Internship" },
    { year: "2024", label: "WinWire Internship" },
    { year: "2024", label: "Park EZ Project" },
    { year: "2024", label: "Hackathon Finalist" },
    { year: "2025", label: "Certifications" },
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
      [i, t] = h.useState("short"),
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
        e.jsxs("main", {
          id: "main-content",
          className: "container mx-auto px-4 md:px-6 lg:px-8 relative z-10",
          children: [e.jsx(g, {}), e.jsx(N, {})],
        }),
        e.jsx(p, {}),
      ],
    });
export { J as default };

