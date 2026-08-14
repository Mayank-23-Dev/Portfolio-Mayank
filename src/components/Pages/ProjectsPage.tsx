import { j as e } from "../ui/_uiVendor";
import { a as t, L as N } from "../ui/_reactVendor";
import { H as _ } from "../ui/Landing_UI/Header";
import { F as S } from "../ui/Landing_UI/Footer";
import { P as I } from "../ui/_sharedIndex";
import { P as R } from "../ui/Landing_UI/PaperBackground";
import { Z as A, C } from "../ui/_iconsVendor";
import { m as P } from "../ui/_animationVendor";
import "../ui/Landing_UI/MenuToggleIcon";
import "../ui/AppShell";
import "../ui/Landing_UI/ConnectDropdown";
const V = () => {
  const [i, u] = t.useState("all"),
    h = [
      {
        name: "Figma",
        description: "First idea sketching & wireframes before touching code",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        color: "bg-purple-100",
        tag: "Design",
      },
      {
        name: "Antigravity",
        description: "Primary AI-native IDE for rapid development",
        icon: "/images/play/antigravity-color.svg",
        color: "bg-blue-100",
        tag: "IDE",
      },
      {
        name: "React + Vite",
        description: "Fast, component-driven frontend builds",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        color: "bg-cyan-100",
        tag: "Frontend",
      },
      {
        name: "Node.js + Express",
        description: "APIs and server-side logic",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        color: "bg-green-100",
        tag: "Backend",
      },
      {
        name: "Supabase",
        description: "PostgreSQL database & auth layer",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/supabase.svg",
        color: "bg-emerald-100",
        tag: "Database",
      },
      {
        name: "Firebase + Vercel",
        description: "Hosting, auth & realtime features",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        color: "bg-yellow-100",
        tag: "Deploy",
      },
      {
        name: "GitHub",
        description: "Version Control",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        color: "bg-slate-100",
        tag: "Version control",
      },
      {
        name: "LeetCode",
        description: "Daily problem solving & DSA practice",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/leetcode.svg",
        color: "bg-red-100",
        tag: "DSA",
      },
      {
        name: "Android Studio",
        description: "Mobile app development & testing",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",
        color: "bg-emerald-100",
        tag: "Mobile",
      },
      {
        name: "Gemini CLI",
        description: "AI-powered terminal assistant for workflow automation",
        icon: "/images/play/geminicli-color.svg",
        color: "bg-orange-100",
        tag: "AI",
      },
    ],
    r = [
      {
        id: "vaultdl",
        type: "development",
        title: "VaultDL",
        category: "High-performance desktop media downloader for Windows",
        summary:
          "Built VaultDL to replace sketchy ad-filled download sites with a clean desktop app. Powered by yt-dlp and FFmpeg, it supports four download modes, granular quality & format control, concurrent queue management, and automated engine updates — no terminal needed.",
        image: "/images/case studies/VaultDL/thumbnail.webp",
        link: "/projects/vaultdl",
        badge: "LIVE",
      },
      {
        id: "shiq",
        type: "development",
        title: "Shiq",
        category: "A Personal Content Production Studio Dashboard for Creators",
        summary: "Built Shiq to eliminate the chaos of managing content ideas, scripts, assets, and publishing schedules across platforms. It gives solo creators a unified studio — from first draft to published post.",
        image: "/images/case%20studies/Shiq/thumbnail.webp",
        link: "/projects/shiq",
        badge: "IN PRODUCTION",
      },
      {
        id: "finease",
        type: "development",
        title: "FinEase",
        category: "AI-powered personal financial dashboard",
        summary:
          "Built FinEase to solve scattered spending visibility across UPI apps, wallets, subscriptions, and cash. It combines smart tracking, budgeting, analytics, receipt scanning, recurring transaction monitoring, and AI-generated financial insights.",
        image: "/images/case studies/postyai/thumbnail.webp",
        link: "/projects/finease",
        badge: "LIVE",
      },
      {
        id: "hactiq",
        type: "development",
        title: "Hactiq",
        category: "Clarity-first habit tracker",
        summary:
          "Built Hactiq from a personal need to understand daily consistency without streak pressure. It uses a clean monthly trend view, habit heatmap, and lightweight insights to help students and professionals stay aware and improve steadily.",
        image: "/images/case studies/couriermgmt/thumbnail.webp",
        link: "/projects/hactiq",
        badge: "LIVE",
      },
    ],
    b = [
      {
        id: "all",
        title: "All Projects",
        icon: e.jsx(A, { className: "h-4 w-4" }),
        accent: "bg-daisy-yellow",
        count: r.length,
      },
      {
        id: "development",
        title: "Products",
        icon: e.jsx(C, { className: "h-4 w-4" }),
        accent: "bg-daisy-blue",
        count: r.filter((s) => s.type === "development").length,
      },
    ],
    f = t.useMemo(() => (i === "all" ? r : r.filter((s) => s.type === i)), [i]),
    y = ({ project: s, index: d }) => {
      const p = t.useRef(null),
        l = t.useRef(null),
        [c, g] = t.useState(!1),
        [m, v] = t.useState(!1),
        [x, w] = t.useState(!1),
        n = t.useRef(null),
        o = s.status === "coming-soon";
      return (
        t.useEffect(() => {
          if (!s.video || !l.current) return;
          const a = new IntersectionObserver(
            (j) => {
              j.forEach((k) => {
                k.isIntersecting && (v(!0), a.disconnect());
              });
            },
            { rootMargin: "100px" },
          );
          return (a.observe(l.current), () => a.disconnect());
        }, [s.video]),
        t.useEffect(() => {
          if (!s.video || !m) return;
          const a = p.current;
          if (a)
            return (
              c
                ? (n.current = window.setTimeout(() => {
                    (x || a.load(), a.play().catch(() => {}));
                  }, 300))
                : (n.current && clearTimeout(n.current),
                  a.pause(),
                  (a.currentTime = 0)),
              () => {
                n.current && clearTimeout(n.current);
              }
            );
        }, [c, s.video, x, m]),
        e.jsx(P.div, {
          ref: l,
          initial: { opacity: 0, y: 60 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0, margin: "-50px" },
          transition: {
            duration: 0.6,
            delay: d * 0.1,
            ease: [0.21, 0.47, 0.32, 0.98],
          },
          className: "relative",
          onMouseEnter: () => g(!0),
          onMouseLeave: () => g(!1),
          children: e.jsx("div", {
            className: `border-2 border-black bg-white p-6 md:p-8 lg:p-10 text-black transition-all duration-300 ease-out transform shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] ${o ? "" : "hover:-translate-y-1"}`,
            children: e.jsxs("div", {
              className:
                "grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center",
              children: [
                e.jsxs("div", {
                  className: "order-2 lg:order-1",
                  children: [
                    e.jsxs("div", {
                      className:
                        "mb-4 flex flex-col gap-3 md:flex-row md:items-start md:justify-between",
                      children: [
                        e.jsx("h3", {
                          className:
                            "text-2xl md:text-3xl font-bold text-gray-900",
                          children: s.title,
                        }),
                         o &&
                            e.jsx("span", {
                              className:
                                "inline-flex w-fit shrink-0 border-2 border-black bg-daisy-yellow px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-black",
                              children: "Coming Soon",
                            }),
                          !o && s.badge &&
                            (() => {
                              const colors = {
                                LIVE: "bg-green-100 text-green-900 border-green-700",
                                "IN PRODUCTION": "bg-yellow-50 text-yellow-700 border-yellow-400",
                                OFFLINE: "bg-red-500 text-white border-red-600 font-bold",
                              };
                              const colorClass = colors[s.badge.toUpperCase()] || "bg-green-100 text-green-900 border-black";
                              return e.jsx("span", {
                                className: `inline-flex w-fit shrink-0 border-2 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] ${colorClass}`,
                                children: s.badge,
                              });
                            })(),
                        ],
                      }),
                    e.jsx("p", {
                      className:
                        "text-sm md:text-base mb-6 uppercase tracking-[0.18em] text-stone-500",
                      children: s.category,
                    }),
                    e.jsx("p", {
                      className:
                        "mb-8 max-w-xl text-sm md:text-[15px] leading-6 md:leading-7 text-stone-700",
                      children: s.summary,
                    }),
                    e.jsxs("div", {
                      className:
                        "flex flex-col sm:flex-row gap-4 sm:items-center relative z-50",
                      children: [
                        o || !s.link
                          ? e.jsx("span", {
                              "aria-disabled": "true",
                              className:
                                "inline-block px-7 py-3.5 font-semibold border-2 border-black bg-stone-100 text-stone-500 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-not-allowed",
                              style: {
                                position: "relative",
                                zIndex: 1e3,
                                borderRadius: 0,
                                letterSpacing: "0.025em",
                                fontFamily: "'Sora', sans-serif",
                              },
                              children: "Case Study Coming Soon",
                            })
                          : e.jsx(N, {
                              to: s.link,
                              className:
                                "inline-block px-7 py-3.5 font-semibold border-2 border-black bg-white text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 ease-out pointer-events-auto hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none active:translate-x-[4px] active:translate-y-[4px] active:shadow-none",
                              style: {
                                position: "relative",
                                zIndex: 1e3,
                                borderRadius: 0,
                                letterSpacing: "0.025em",
                                fontFamily: "'Sora', sans-serif",
                              },
                              children: "Open Work",
                            }),
                        o &&
                          s.launchStage &&
                          e.jsx("p", {
                            className:
                              "text-xs font-medium uppercase tracking-[0.18em] text-stone-500",
                            children: s.launchStage,
                          }),
                      ],
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: "relative order-1 lg:order-2 group",
                  children: s.image
                    ? e.jsxs("div", {
                        className:
                          "relative aspect-[4/3] transform group-hover:scale-[1.01] transition-transform duration-300 ease-out overflow-hidden border-2 border-black bg-stone-100",
                        children: [
                          e.jsx("img", {
                            src: s.image,
                            alt: `${s.title} preview`,
                            loading: "lazy",
                            decoding: "async",
                            className: "h-full w-full object-cover",
                          }),
                          s.video &&
                            m &&
                            e.jsx(
                              "video",
                              {
                                ref: p,
                                src: s.video,
                                muted: !0,
                                playsInline: !0,
                                preload: "metadata",
                                onLoadedData: () => w(!0),
                                className: `absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${c && x ? "opacity-100" : "opacity-0"}`,
                              },
                              s.video,
                            ),
                        ],
                      })
                    : e.jsx("div", {
                        className:
                          "relative aspect-[4/3] overflow-hidden border-2 border-black bg-stone-100 flex items-center justify-center",
                        children: e.jsx("p", {
                          className: "text-stone-400 text-sm",
                          children: "No preview available",
                        }),
                      }),
                }),
              ],
            }),
          }),
        })
      );
    };
  return e.jsxs(R, {
    children: [
      e.jsxs("div", {
        className: "container mx-auto px-4 md:px-6 lg:px-8 relative z-10",
        children: [
          e.jsx(_, {}),
          /* ── HERO SECTION ── */
          e.jsx("section", {
            className: "pt-10 pb-8 md:pt-14 md:pb-10",
            children: e.jsxs("div", {
              className: "max-w-5xl mx-auto text-center",
              children: [
                e.jsx("p", {
                  className:
                    "text-xs uppercase tracking-[0.28em] text-stone-500 mb-4",
                  children: "Selected Works",
                }),
                e.jsx("h1", {
                  className:
                    "headline-text text-4xl md:text-5xl lg:text-6xl leading-tight mb-5",
                  children: "Projects I built to solve real problems",
                }),
                e.jsx("p", {
                  className:
                    "text-base md:text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed px-4",
                  children:
                    "A focused set of product builds around personal finance clarity and sustainable habit improvement.",
                }),
                e.jsx("p", {
                  className:
                    "mt-4 text-sm md:text-base text-stone-500 max-w-3xl mx-auto leading-relaxed px-4",
                  children:
                    "These are live products that started from personal pain points and evolved into useful tools.",
                }),
                e.jsxs("p", {
                  className:
                    "mt-6 text-sm md:text-base font-medium uppercase tracking-[0.18em] text-stone-500",
                  children: [r.length, " projects live now"],
                }),
              ],
            }),
          }),
          /* ── FILTER BAR ── */
          e.jsx("section", {
            className: "py-4 md:py-6 relative",
            children: e.jsx("div", {
              className: "max-w-5xl mx-auto",
              children: e.jsx("div", {
                className:
                  "bg-white/90 border-2 border-black rounded-none p-4 md:p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
                children: e.jsxs("div", {
                  className:
                    "flex flex-col gap-4 md:flex-row md:items-center md:justify-between",
                  children: [
                    e.jsxs("div", {
                      children: [
                        e.jsx("p", {
                          className:
                            "text-xs uppercase tracking-[0.24em] text-stone-500 mb-2",
                          children: "Browse",
                        }),
                        e.jsx("h2", {
                          className:
                            "text-xl md:text-2xl font-bold text-stone-900",
                          children: "Filter projects",
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      className: "flex flex-wrap gap-3",
                      children: b.map((s) =>
                        e.jsxs(
                          "button",
                          {
                            onClick: () => u(s.id),
                            className: `inline-flex items-center gap-3 border-2 px-4 py-3 transition-all duration-150 ease-out ${i === s.id ? "border-black bg-black text-white" : "border-black bg-white text-black hover:bg-stone-50"}`,
                            style: {
                              borderRadius: 0,
                              fontFamily: "'Sora', sans-serif",
                              letterSpacing: "0.025em",
                              fontWeight: 600,
                            },
                            children: [
                              e.jsx("span", {
                                className: `flex h-8 w-8 items-center justify-center ${i === s.id ? "bg-white/10" : `${s.accent} text-black`}`,
                                children: s.icon,
                              }),
                              e.jsx("span", { children: s.title }),
                              e.jsx("span", {
                                className: `text-xs ${i === s.id ? "text-white/70" : "text-stone-500"}`,
                                children: s.count,
                              }),
                            ],
                          },
                          s.id,
                        ),
                      ),
                    }),
                  ],
                }),
              }),
            }),
          }),
          /* ── PROJECTS LIST ── */
          e.jsx("section", {
            className: "py-8 md:py-12 relative",
            children: e.jsx("div", {
              className: "max-w-6xl mx-auto",
              children: e.jsx("div", {
                className: "space-y-8 md:space-y-10",
                children: f.map((s, d) =>
                  e.jsx(y, { project: s, index: d }, s.id),
                ),
              }),
            }),
          }),
          /* ── TOOLKIT SECTION ── */
          e.jsx("section", {
            className: "py-8 md:py-12 relative",
            children: e.jsxs("div", {
              className: "max-w-5xl mx-auto",
              children: [
                e.jsxs("div", {
                  className: "text-center max-w-3xl mx-auto mb-8 md:mb-10",
                  children: [
                    e.jsx("p", {
                      className:
                        "text-xs uppercase tracking-[0.24em] text-stone-500 mb-3",
                      children: "Toolkit",
                    }),
                    e.jsx("h2", {
                      className:
                        "text-2xl md:text-3xl font-bold text-stone-900 mb-3",
                      children: "How I build things",
                    }),
                    e.jsx("p", {
                      className: "text-base md:text-lg text-stone-600 px-4",
                      children:
                        "From first idea in Figma to shipped product — tools I actually reach for every day.",
                    }),
                  ],
                }),
                e.jsx("div", {
                  className:
                    "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5",
                  children: h.map((s, d) =>
                    e.jsx(
                      P.div,
                      {
                        initial: { opacity: 0, y: 20 },
                        whileInView: { opacity: 1, y: 0 },
                        viewport: { once: true },
                        transition: { duration: 0.4, delay: d * 0.06 },
                        children: e.jsxs("div", {
                          className: `border-2 border-black bg-white p-4 md:p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group cursor-default`,
                          children: [
                            e.jsx("div", {
                              className: `${s.color} h-1.5 w-10 mb-4 border border-black/10`,
                            }),
                            e.jsx("div", {
                              className:
                                "w-10 h-10 mb-3 bg-stone-100 border-2 border-black flex items-center justify-center",
                              children: e.jsx("img", {
                                src: s.icon,
                                alt: s.name,
                                className: "w-6 h-6 object-contain",
                                onError: (ev) => {
                                  ev.target.style.display = "none";
                                },
                              }),
                            }),
                            e.jsx("span", {
                              className:
                                "inline-block text-[9px] font-bold uppercase tracking-[0.18em] text-stone-400 mb-1 border border-stone-200 px-1.5 py-0.5",
                              children: s.tag,
                            }),
                            e.jsx("h3", {
                              className:
                                "font-bold text-sm md:text-base mt-1 mb-1 text-stone-900 leading-tight",
                              children: s.name,
                            }),
                            e.jsx("p", {
                              className:
                                "text-[11px] md:text-xs text-stone-500 leading-snug",
                              children: s.description,
                            }),
                          ],
                        }),
                      },
                      s.name,
                    ),
                  ),
                }),
              ],
            }),
          }),
          /* ── GITHUB SECTION ── */
          e.jsx("section", {
            className: "py-8 md:py-12 relative",
            children: e.jsx("div", {
              className: "max-w-5xl mx-auto px-4",
              children: e.jsxs("div", {
                className:
                  "bg-white p-6 md:p-8 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]",
                children: [
                  e.jsxs("div", {
                    className:
                      "flex flex-col md:flex-row justify-between md:items-end mb-8 gap-4",
                    children: [
                      e.jsxs("div", {
                        className: "text-center md:text-left",
                        children: [
                          e.jsx("p", {
                            className:
                              "text-xs uppercase tracking-[0.24em] text-stone-500 mb-2",
                            children: "GitHub",
                          }),
                          e.jsx("h2", {
                            className:
                              "text-2xl md:text-3xl font-bold mb-2 text-stone-900",
                            children: "Current build rhythm",
                          }),
                          e.jsx("p", {
                            className: "text-stone-600",
                            children:
                              "A live snapshot of recent coding consistency and output.",
                          }),
                        ],
                      }),
                      e.jsxs("a", {
                        href: "https://github.com/Mayank-23-Dev",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "daisy-button inline-flex items-center gap-2 text-sm md:text-base",
                        children: [
                          e.jsx("span", { children: "Visit @Mayank-23-Dev" }),
                          e.jsx("span", { children: "→" }),
                        ],
                      }),
                    ],
                  }),
                  e.jsx("div", {
                    className:
                      "overflow-x-auto pb-4 scrollbar-hide border-2 border-black bg-stone-50 p-4",
                    children: e.jsx("img", {
                      src: "https://ghchart.rshah.org/008000/Mayank-23-Dev",
                      alt: "GitHub Contributions Chart",
                      loading: "lazy",
                      decoding: "async",
                      className: "w-full min-w-[800px]",
                    }),
                  }),
                  e.jsxs("div", {
                    className:
                      "mt-6 pt-6 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-stone-500",
                    children: [
                      e.jsx("p", { children: "Contribution graph" }),
                      e.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [
                          e.jsx("span", { children: "Less" }),
                          e.jsxs("div", {
                            className: "flex gap-1",
                            children: [
                              e.jsx("span", {
                                className: "w-3 h-3 bg-gray-100 rounded-[2px]",
                              }),
                              e.jsx("span", {
                                className: "w-3 h-3 bg-green-200 rounded-[2px]",
                              }),
                              e.jsx("span", {
                                className: "w-3 h-3 bg-green-500 rounded-[2px]",
                              }),
                              e.jsx("span", {
                                className: "w-3 h-3 bg-green-800 rounded-[2px]",
                              }),
                            ],
                          }),
                          e.jsx("span", { children: "More" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
          /* ── LEETCODE SECTION ── */
          e.jsx("section", {
            className: "py-8 md:py-12 relative",
            children: e.jsx("div", {
              className: "max-w-5xl mx-auto px-4",
              children: e.jsxs("div", {
                className:
                  "bg-white p-6 md:p-8 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]",
                children: [
                  e.jsxs("div", {
                    className:
                      "flex flex-col md:flex-row justify-between md:items-end mb-8 gap-4",
                    children: [
                      e.jsxs("div", {
                        className: "text-center md:text-left",
                        children: [
                          e.jsx("p", {
                            className:
                              "text-xs uppercase tracking-[0.24em] text-stone-500 mb-2",
                            children: "LeetCode",
                          }),
                          e.jsx("h2", {
                            className:
                              "text-2xl md:text-3xl font-bold mb-2 text-stone-900",
                            children: "Problem solving rhythm",
                          }),
                          e.jsx("p", {
                            className: "text-stone-600",
                            children:
                              "A real-time snapshot of algorithmic consistency and progress.",
                          }),
                        ],
                      }),
                      e.jsxs("a", {
                        href: "https://leetcode.com/u/Mayank_Dev_23/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "daisy-button inline-flex items-center gap-2 text-sm md:text-base",
                        children: [
                          e.jsx("span", { children: "Visit @Mayank_Dev_23" }),
                          e.jsx("span", { children: "→" }),
                        ],
                      }),
                    ],
                  }),
                  e.jsx("div", {
                    className:
                      "overflow-x-auto pb-4 scrollbar-hide border-2 border-black bg-stone-50 p-4",
                    children: e.jsx("img", {
                      src: "https://leetcard.jacoblin.cool/Mayank_Dev_23?theme=light&font=Sora",
                      alt: "LeetCode Activity Card",
                      loading: "lazy",
                      decoding: "async",
                      className: "w-full min-w-[500px] md:min-w-[600px] mx-auto",
                    }),
                  }),
                  e.jsxs("div", {
                    className:
                      "mt-6 pt-6 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-stone-500",
                    children: [
                      e.jsx("p", { children: "Consistency graph" }),
                      e.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [
                          e.jsx("span", { children: "Easy" }),
                          e.jsxs("div", {
                            className: "flex gap-1",
                            children: [
                              e.jsx("span", {
                                className: "w-3 h-3 bg-emerald-100 rounded-[2px]",
                              }),
                              e.jsx("span", {
                                className: "w-3 h-3 bg-emerald-500 rounded-[2px]",
                              }),
                            ],
                          }),
                          e.jsx("span", { className: "ml-2", children: "Hard" }),
                          e.jsxs("div", {
                            className: "flex gap-1",
                            children: [
                              e.jsx("span", {
                                className: "w-3 h-3 bg-red-100 rounded-[2px]",
                              }),
                              e.jsx("span", {
                                className: "w-3 h-3 bg-red-500 rounded-[2px]",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        ],
      }),
      e.jsx(S, {}),
    ],
  });
};
export { V as default };


