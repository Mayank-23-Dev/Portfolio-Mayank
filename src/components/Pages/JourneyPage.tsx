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
    title: "The Spark",
    yearRange: "2014 - 2022",
    story: {
      short: "Dad's PC. Typing lessons in Kruti Dev 010. Fell in love with machines before I even knew what to call it.",
      medium: "The first computer I ever touched, in 2014, belonged to my father. He taught me to type so I could help him organize files—though he had no idea what he was setting in motion. Once I had access, there was no going back. I discovered GTA and IGI, learned to download games I had no business downloading, and quietly filled drives with things my father never knew existed.",
      long: "The first computer I ever touched, in 2014, belonged to my father, who used it for work documents. He taught me to type so I could help him organize files — though he had no idea what he was setting in motion. Once I had access, there was no going back. I discovered GTA and IGI, learned to download games I had no business downloading, and quietly filled drives with things my father never knew existed. That cycle — find a way in, get caught, find another way — has been the throughline of my story from the very beginning.",
    },
    list: {
      short: [
        "Dad's PC. Typing lessons in Kruti Dev 010. Never really left that chair after.",
        "Found GTA. Found piracy. Got caught every time. Found a new route every time.",
        "Fell in love with machines before I even knew what to call it.",
      ],
      medium: [
        "First computer experience in 2014 via Dad's work machine",
        "Mastered Kruti Dev 010 to help with father's professional files",
        "Entered a loop of downloading games, getting caught, and finding new routes",
        "Developed a foundational obsession with machine functionality",
      ],
      long: [
        "Started with my father's PC in 2014, learning Kruti Dev 010 for Hindi typing",
        "Mastered the machine's file system to hide gaming downloads like GTA and IGI",
        "Spent years in a loop of discovery, restriction, and technical bypasses",
        "Gained a reputation as the kid who knew machine secrets others didn't",
      ],
    },
  },
  {
    title: "Under The Hood",
    yearRange: "2022 - 2023",
    story: {
      short: "Cracked Windows login through CMD at 10. No tutorial. Just needed access badly enough.",
      medium: "At ten, I wasn't just using computers — I was trying to take them apart and put them back together. I learned to swap out system files like Utilman for CMD to bypass the Windows login screen. I was reinstalling entire operating systems from pendrives I built myself, and chasing activation workarounds just to keep machines running.",
      long: "At ten, I wasn't just using computers — I was trying to take them apart and put them back together. I learned to swap out system files like Utilman for CMD to bypass the Windows login screen. I was reinstalling entire operating systems from pendrives I built myself, and chasing activation workarounds just to keep machines running. I'd bring these tricks into the school computer lab to show friends, fascinated by what was happening underneath the interface.",
    },
    list: {
      short: [
        "Cracked Windows login through CMD at 10. No tutorial. Just needed access badly enough.",
        "Built bootable pendrives. Reinstalled OS. Activated everything from scratch.",
        "Started showing the tricks to friends in the school lab. Realised knowledge is its own kind of power.",
      ],
      medium: [
        "Swapped system files (Utilman with CMD) to bypass Windows security",
        "Self-taught OS reinstallation and manual activation methods",
        "Built bootable pendrives and managed system-level recovery",
        "Gained reputation in school for technical knowledge and problem-solving",
      ],
      long: [
        "Developed deep familiarity with Windows system architecture early on",
        "Used Utilman to CMD swaps as a gateway to system administration",
        "Provided technical solutions for friends' hardware and software issues",
        "Internalized that there is always a way through if you understand the system",
      ],
    },
  },
  {
    title: "The Pivot",
    yearRange: "2023 - 2025",
    story: {
      short: "NotGamerzReact hit millions of views. YouTube rejected monetization. Sold the channel. Opened Fiverr same week.",
      medium: "By Class 11, I had my own laptop and started teaching myself video editing in Premiere Pro. I launched NotGamerzReact — high-energy gaming montages and meme edits — and grew it to 15,000 subscribers and millions of views. When monetization got rejected, I sold the channel and opened a Fiverr account the same week.",
      long: "By Class 11, I had my own laptop and started teaching myself video editing in Premiere Pro. I launched NotGamerzReact — high-energy gaming montages and meme edits — and grew it to 15,000 subscribers and millions of views. When monetization got rejected over content eligibility, I made a quick calculation: sold the channel, and opened a Fiverr account the same week. I started editing for major creators and learned early that when one door closes, the next is usually already open.",
    },
    list: {
      short: [
        "Taught myself Premiere Pro CC 2014. Laptop could just about run it without lagging.",
        "NotGamerzReact hit thousands of subscribers and millions of views. YouTube rejected monetization.",
        "Sold the channel. Opened Fiverr the same week. Edited for creators with 300K+ subscribers.",
      ],
      medium: [
        "Mastered professional editing workflows under hardware constraints",
        "Built and sold a digital asset after monetization rejection",
        "Started professional freelancing on Fiverr in 2023",
        "Worked with major creators like savvy_bg (300k+ subscribers)",
      ],
      long: [
        "Developed professional editing workflows under hardware constraints",
        "Managed high-volume content production for NotGamerzReact",
        "Built a successful freelance business on Fiverr in 2023-2025",
        "Learned asset valuation by selling my first digital channel asset",
      ],
    },
  },
  {
    title: "The Drift",
    yearRange: "2025",
    story: {
      short: "Looked in the mirror and didn't like who was looking back. Gym at 5 AM. Apprenticeship. Changed the circle.",
      medium: "Then came a quiet drift — I gained weight I wasn't proud of and nearly failed Class 11. So I made a deliberate set of choices to take my health and self-respect back. I saw a dietician, started hitting the gym at 5 AM, and landed an apprenticeship at Angirasoft.",
      long: "Then came a quiet drift — I gained weight I wasn't proud of and nearly failed Class 11. So I made a deliberate set of choices to take my health and self-respect back. I saw a dietician, started hitting the gym at 5 AM, and landed an apprenticeship at Angirasoft, where I trained in C++, OOP, and DSA until LeetCode problems stopped feeling like panic attacks. The stretch between boards and college is what actually changed me — by the end of it, I finally felt like I was back in my own corner.",
    },
    list: {
      short: [
        "Technically doing things. Not really present in any of it.",
        "Looked in the mirror one day and genuinely didn't like who was looking back.",
        "Dietician. Gym at 5 AM. Angirasoft apprenticeship. Books. Changed the circle. Changed the weight.",
      ],
      medium: [
        "Reclaimed physical health and self-respect through rigorous discipline",
        "Completed software apprenticeship at Angirasoft Pvt. Ltd.",
        "Mastered C++ foundations, OOP, and started deep-diving into DSA",
        "Shifted mindset from passive consumption to active building",
      ],
      long: [
        "Completed a professional software apprenticeship in 2025",
        "Transformed physical health and discipline during the gap year",
        "Built a strong foundation in C++ and object-oriented programming",
        "Adopted a 'doing the work' mindset inspired by Naval and Austin Kleon",
      ],
    },
  },
  {
    title: "Building",
    yearRange: "2025 - Present",
    story: {
      short: "Built Hactiq, won 2nd in Hackathon with FinEase, and hit millions through data experiments.",
      medium: "I walked into PSIT Kanpur for my first semester carrying that new discipline with me. I built Hactiq for free and the next semester, I built FinEase, which won 2nd place at the Protech Hackathon. Alongside that, I ran CoreByte on YouTube and Instagram, racking up millions of views through experimentation.",
      long: "I walked into PSIT Kanpur for my first semester carrying that new discipline with me. I built Hactiq because I saw people charging for what should've been free templates — so I made it free. The next semester, I built FinEase to untangle the mess of scattered digital payments, and it won 2nd place at the Protech Hackathon. Alongside that, I ran CoreByte on YouTube and Instagram, racking up millions of views purely through data-driven experimentation. After a stretch where I thought I'd burned myself out, I came out the other end with strong grades and a real sense of finally competing in the right field.",
    },
    list: {
      short: [
        "First sem: built Hactiq from scratch, made it free, ended with strong grades.",
        "Ran 100-video experiments on YouTube and Instagram. Millions of views. Pure data collection.",
        "FinEase → PSIT Protech Hackathon 2nd place. Only team with a working deployed product in the room.",
      ],
      medium: [
        "Developed Hactiq as a free consistency tool for students",
        "Won 2nd place at PSIT Protech Hackathon with FinEase",
        "Reached millions through algorithmic experiments on CoreByte",
        "Achieved strong academic performance in BTech first year",
      ],
      long: [
        "Successfully transitioned to BTech at PSIT Kanpur with strong grades",
        "Developed FinEase to centralize Indian digital payments",
        "Conducted algorithm experiments through CoreByte purely for data",
        "Proved my ability to ship functional products under pressure",
      ],
    },
  },
  {
    title: "Right Now",
    yearRange: "Sem 3 - Now",
    story: {
      short: "DSA daily. Built VaultDL. Shiq in progress. Figuring things out and passing it forward.",
      medium: "The work keeps widening. I'm deep into desktop development with VaultDL and building Shiq — the tool I wish I'd had on day one. Beyond code, I'm studying film and lighting. The pattern stays the same: learn something, use it, and pass it forward as fast as I can.",
      long: "The work keeps widening. I'm deep into desktop application development with VaultDL, which supports hundreds of platforms through high-performance queue management. I'm also building Shiq — the tool I wish I'd had on day one, a full production pipeline for creators. Beyond code, I'm studying the physics of film and lighting. The pattern stays the same: learn something, use it, and pass it forward as fast as I can — for everyone sitting where I once sat.",
    },
    list: {
      short: [
        "DSA every day. Not for exams. To actually think through problems cleanly.",
        "Built VaultDL — a Windows desktop app because everything existing needed a terminal or felt bad.",
        "Shiq in progress. Learning to film properly. Whatever I figure out, I pass it forward immediately.",
      ],
      medium: [
        "Mastering desktop development with VaultDL (yt-dlp based)",
        "Architecting Shiq: the production pipeline tool for solo creators",
        "Deepening filmmaking knowledge: light, composition, intentionality",
        "Mentoring others by sharing real-time technical discoveries",
      ],
      long: [
        "Architecting VaultDL to solve the complexity of media downloading",
        "Building Shiq to cover the entire content production lifecycle",
        "Exploring the intersection of storytelling, film, and engineering",
        "Commitment to daily DSA to master clean, algorithmic thinking",
      ],
    },
  },
];

const y = [
  { year: "2014", label: "First PC and getting obsessed with machines" },
  { year: "2023", label: "NotGamerzReact YouTube channel (15k subscribers)" },
  { year: "2023", label: "Professional video editing freelance on Fiverr" },
  { year: "2025", label: "Software engineering apprenticeship at Angirasoft" },
  { year: "2025", label: "Starting BTech CSE at PSIT Kanpur" },
  { year: "2025", label: "CoreByte cinematic Minecraft data experiment" },
  { year: "2026", label: "FinEase AI-powered finance aggregator" },
  { year: "2026", label: "VaultDL high-performance desktop application" },
];

const x = { chapters: f, timeline: y };
const b_data = { prose: "Story", list: "List", timeline: "Timeline" };

const w_comp = ({ value: n, onChange: a }) => {
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
            s ? "font-medium text-zinc-900" : "text-zinc-400 hover:text-zinc-600",
          ].join(" "),
          onClick: () => a(t),
          children: b_data[t],
        },
        t
      );
    }),
  });
};

const j_comp = ({ value: n, onChange: a }) => {
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
              t > 0 ? "text-zinc-900 hover:text-zinc-600" : "text-zinc-300 cursor-not-allowed",
            ].join(" "),
            onClick: s,
            disabled: t === 0,
            "aria-label": "Decrease length",
            children: e.jsx("span", { className: "text-lg leading-none", children: "−" }),
          }),
          e.jsx("div", {
            className: "flex gap-1",
            children: i.map((o) =>
              e.jsx(
                "div",
                {
                  key: o,
                  className: `h-1 w-1 rounded-full transition-colors ${o === n ? "bg-zinc-900" : "bg-zinc-200"}`,
                },
              )
            ),
          }),
          e.jsx("button", {
            type: "button",
            className: [
              "flex h-5 w-5 items-center justify-center transition-colors",
              t < i.length - 1 ? "text-zinc-900 hover:text-zinc-600" : "text-zinc-300 cursor-not-allowed",
            ].join(" "),
            onClick: r,
            disabled: t === i.length - 1,
            "aria-label": "Increase length",
            children: e.jsx("span", { className: "text-lg leading-none", children: "+" }),
          }),
        ],
      }),
    ],
  });
};

const v_comp = ({ chapters: n, lengthMode: a }) =>
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
                  className: "text-xs font-medium uppercase tracking-wider text-zinc-400",
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
                    children: t.split("\n\n").map((s, r) =>
                      e.jsx(
                        "p",
                        {
                          className: "mb-4 max-w-2xl text-left text-lg leading-relaxed text-zinc-600 transition-colors group-hover:text-zinc-900 last:mb-0 sm:text-justify",
                          children: s,
                        },
                        r
                      )
                    ),
                  },
                  a
                ),
              }),
            }),
          ],
        },
        i.title
      );
    }),
  });

const k_comp = ({ chapters: n, lengthMode: a }) => {
  const i_colors = [
    "bg-daisy-yellow",
    "bg-daisy-green",
    "bg-daisy-purple",
    "bg-daisy-light-blue",
    "bg-daisy-blue",
    "bg-daisy-orange",
  ];
  return e.jsx("div", {
    className: "space-y-10",
    children: n.map((t, idx) => {
      const s_color = i_colors[idx % i_colors.length],
        r_list = t.list[a];
      return e.jsxs(
        "section",
        {
          className: "space-y-3",
          children: [
            e.jsxs("div", {
              className: "flex items-baseline gap-3",
              children: [
                e.jsx("span", {
                  className: "text-xs font-medium uppercase tracking-wider text-zinc-400",
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
                    children: r_list.map((o, m_idx) =>
                      e.jsxs(
                        "li",
                        {
                          key: m_idx,
                          className: "flex items-start gap-3 text-base text-zinc-600 mb-3 last:mb-0",
                          children: [
                            e.jsx("span", {
                              className: `mt-2 h-2 w-2 shrink-0 rounded-full border border-black ${s_color}`,
                            }),
                            e.jsx("span", {
                              className: "leading-relaxed text-left",
                              children: o,
                            }),
                          ],
                        },
                      )
                    ),
                  },
                  a
                ),
              }),
            }),
          ],
        },
        t.title
      );
    }),
  });
};

const I_comp = ({ events: n }) => {
  const a_colors = [
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
              className: `absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full border border-black ${a_colors[t % a_colors.length]}`,
            }),
            e.jsx("div", {
              className: "flex flex-col gap-1",
              children: e.jsxs("div", {
                className: "flex items-baseline gap-3",
                children: [
                  e.jsx("span", {
                    className: "text-sm font-medium text-zinc-900 text-left",
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
        `${i.year}-${i.label}-${t}`
      )
    ),
  });
};

const c_data = x;

const N_comp = () => {
  const [n, a] = h.useState("prose"),
    [i, t] = h.useState("medium"),
    s = c_data.timeline;
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
              className: "mb-12 flex w-full max-w-2xl flex-wrap items-center gap-8 border-b border-zinc-200 pb-6",
              children: [
                e.jsx(w_comp, { value: n, onChange: a }),
                n !== "timeline" &&
                e.jsxs(e.Fragment, {
                  children: [
                    e.jsx("div", { className: "h-4 w-px bg-zinc-300" }),
                    e.jsx(j_comp, { value: i, onChange: t }),
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
                      n === "prose" && e.jsx(v_comp, { chapters: c_data.chapters, lengthMode: i }),
                      n === "list" && e.jsx(k_comp, { chapters: c_data.chapters, lengthMode: i }),
                      n === "timeline" && e.jsx(I_comp, { events: s }),
                    ],
                  },
                  n
                ),
              }),
            }),
          ],
        }),
      ],
    }),
  });
};

const J = () =>
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
          e.jsx(N_comp, {}),
          e.jsxs("div", {
            className: "mx-auto max-w-7xl px-6 mt-20 flex flex-col items-center gap-3 border-t border-zinc-200 pt-10 sm:flex-row sm:justify-between pb-24",
            children: [
              e.jsx("p", {
                className: "text-[11px] uppercase tracking-[0.3em] text-zinc-400",
                children: "WANT THE EDITORIAL VERSION?",
              }),
              e.jsxs("div", {
                className: "flex gap-3",
                children: [
                  e.jsx(m, {
                    to: "/life",
                    className: "rounded-full border border-zinc-900 px-5 py-2 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-900 hover:text-white",
                    children: "Life",
                  }),
                  e.jsx(m, {
                    to: "/projects",
                    className: "rounded-full border border-zinc-300 px-5 py-2 text-sm font-semibold text-zinc-500 transition-colors hover:border-zinc-900 hover:text-zinc-900",
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
