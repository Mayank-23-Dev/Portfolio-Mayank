import { j as e } from "../ui/_uiVendor";
import { a as r, L as T } from "../ui/_reactVendor";
import { H as E } from "../ui/Landing_UI/Header";
import { S as k } from "../ui/Landing_UI/ScribbleUnderline";
import { S as I } from "../ui/Landing_UI/StickyNote";
import { F as M } from "../ui/Landing_UI/Footer";
import { P } from "../ui/Landing_UI/PaperBackground";
import { c as C } from "../ui/AppShell";
import { m as D } from "../ui/_animationVendor";
import "../ui/Landing_UI/MenuToggleIcon";
import "../ui/Landing_UI/ConnectDropdown";
import "../ui/_sharedIndex";
import "../ui/_iconsVendor";
const R = ({
  title: c,
  description: o,
  color: p,
  rotate: i = "none",
  className: l = "",
  img: t,
  video: s,
  badge: B,
}) => {
  const d = r.useRef(null),
    g = r.useRef(null),
    [h, v] = r.useState(!1),
    [u, m] = r.useState(!1),
    [f, L] = r.useState(!1),
    y = r.useRef(null);
  (r.useEffect(() => {
    if (!s || !g.current) return;
    const a = new IntersectionObserver(
      (N) => {
        N.forEach((A) => {
          A.isIntersecting && (m(!0), a.disconnect());
        });
      },
      { rootMargin: "100px" },
    );
    return (a.observe(g.current), () => a.disconnect());
  }, [s]),
    r.useEffect(() => {
      if (!s || !u) return;
      const a = d.current;
      if (a)
        return (
          h
            ? (y.current = window.setTimeout(() => {
                (f || a.load(), a.play().catch(() => {}));
              }, 300))
            : (y.current && clearTimeout(y.current),
              a.pause(),
              (a.currentTime = 0)),
          () => {
            y.current && clearTimeout(y.current);
          }
        );
    }, [h, s, f, u]));
  const S = (a) =>
      ({
        yellow: "text-yellow-600",
        green: "text-emerald-600",
        purple: "text-purple-600",
        blue: "text-blue-600",
        orange: "text-orange-600",
        dark: "text-gray-800",
        black: "text-black",
      })[a] || "text-gray-800",
    n = (a) =>
      ({
        yellow: "#ca8a04",
        green: "#059669",
        purple: "#9333ea",
        blue: "#2563eb",
        orange: "#ea580c",
        dark: "#1f2937",
        black: "#000000",
      })[a] || "#1f2937",
    x = S(p),
    b = n(p);
  return e.jsxs("div", {
    ref: g,
    className: `modern-card micro-tilt-card ${l} flex flex-col h-full group overflow-hidden bg-white pb-4`,
    onMouseEnter: () => v(!0),
    onMouseLeave: () => v(!1),
    onFocusCapture: () => v(!0),
    onBlurCapture: (a) => {
      a.currentTarget.contains(a.relatedTarget) || v(!1);
    },
    children: [
      t &&
        e.jsxs("div", {
          className:
            "relative mb-5 overflow-hidden rounded-none bg-gray-100 aspect-[4/3] flex-shrink-0 transition-transform duration-500 ease-out group-hover:scale-[1.02] micro-image",
          children: [
            e.jsx("img", {
              src: t,
              alt: c,
              loading: "lazy",
              decoding: "async",
              className: "w-full h-full object-cover",
            }),
            s &&
              u &&
              e.jsx("video", {
                ref: d,
                src: s,
                muted: !0,
                playsInline: !0,
                preload: "none",
                onLoadedData: () => L(!0),
                className: `absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${h && f ? "opacity-100" : "opacity-0"}`,
              }),
          ],
        }),
      e.jsxs("div", {
  className: "flex-grow flex flex-col min-h-0 justify-between",
  children: [
    e.jsxs("div", {
      children: [                          // ← this wrapping div needs to stay
        e.jsxs("div", {
          className: "flex items-center gap-2 mb-2 flex-wrap",
          children: [
            e.jsx("h3", {
              className: `text-xl font-bold leading-tight transition-colors duration-200 ${h ? x : "text-gray-900"}`,
              children: c,
            }),
            B && e.jsx("span", {
              className: "inline-block border border-green-700 bg-green-100 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.18em] text-green-800 whitespace-nowrap",
              children: B,
            }),
          ],
        }),
        e.jsx("p", {
          className: "font-sans text-sm leading-relaxed text-gray-500 line-clamp-2 h-[2.8rem] overflow-hidden",
          children: o,
        }),
      ],
    }),
    e.jsx("div", {
      className: "mt-auto pt-4 flex items-center text-sm font-medium",  // mt-auto pushes to bottom
      children: e.jsx(k, {
        color: b,
        trigger: "hover",
        active: h,
        className: `transition-colors duration-300 ${h ? x : "text-gray-400"}`,
        children: e.jsxs("span", {
          className: "flex items-center gap-2",
          children: [
            "View Case Study",
            e.jsxs("svg", {
              width: "16",
              height: "16",
              viewBox: "0 0 16 16",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              className: `transition-transform duration-300 ${h ? "translate-x-1" : ""}`,
              children: [
                e.jsx("path", {
                  d: "M3.33337 8H12.6667",
                  stroke: "currentColor",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                e.jsx("path", {
                  d: "M8 3.33331L12.6667 7.99998L8 12.6666",
                  stroke: "currentColor",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
              ],
            }),
          ],
        }),
      }),
    }),
      ],
    }),
        ],   
      });    
    };       

function H() {
  const c = r.useRef(null);
  return (
    r.useEffect(() => {
      const o = c.current;
      if (!o || !window.registerReady) return;
      const p = Array.from(o.querySelectorAll("img")),
        i = (s) =>
          s.decode
            ? s.decode().catch(() => {})
            : new Promise((d) =>
                s.complete ? d() : (s.onload = s.onerror = () => d()),
              ),
        l = p.filter((s) => {
          const d = s.getBoundingClientRect(),
            g = Math.max(
              document.documentElement.clientHeight,
              window.innerHeight || 0,
            );
          return d.top < g && d.bottom > 0;
        }),
        t = Promise.allSettled(l.map(i));
      window.registerReady(t);
    }, []),
    c
  );
}
function z({
  children: c,
  hoverContent: o,
  className: p,
  circleSize: i = 400,
}) {
  const l = r.useRef(null),
    t = r.useRef(null),
    s = r.useRef(null),
    [d, g] = r.useState(!1),
    [h, v] = r.useState({ width: 0, height: 0 }),
    u = r.useRef({ x: 0, y: 0 }),
    m = r.useRef({ x: 0, y: 0 }),
    f = r.useRef();
  (r.useEffect(() => {
    const n = () => {
      l.current &&
        v({ width: l.current.offsetWidth, height: l.current.offsetHeight });
    };
    return (
      n(),
      window.addEventListener("resize", n),
      () => window.removeEventListener("resize", n)
    );
  }, []),
    r.useEffect(() => {
      const n = (b, a, N) => b + (a - b) * N,
        x = () => {
          ((m.current.x = n(m.current.x, u.current.x, 0.15)),
            (m.current.y = n(m.current.y, u.current.y, 0.15)),
            t.current &&
              (t.current.style.transform = `translate(${m.current.x}px, ${m.current.y}px) translate(-50%, -50%)`),
            s.current &&
              (s.current.style.transform = `translate(${-m.current.x}px, ${-m.current.y}px)`),
            (f.current = requestAnimationFrame(x)));
        };
      return (
        (f.current = requestAnimationFrame(x)),
        () => {
          f.current && cancelAnimationFrame(f.current);
        }
      );
    }, []));
  const L = r.useCallback((n) => {
      if (!l.current) return;
      const x = l.current.getBoundingClientRect();
      u.current = { x: n.clientX - x.left, y: n.clientY - x.top };
    }, []),
    y = r.useCallback((n) => {
      if (!l.current) return;
      const x = l.current.getBoundingClientRect(),
        b = n.clientX - x.left,
        a = n.clientY - x.top;
      ((u.current = { x: b, y: a }), (m.current = { x: b, y: a }), g(!0));
    }, []),
    S = r.useCallback(() => {
      g(!1);
    }, []);
  return e.jsxs("div", {
    ref: l,
    onMouseMove: L,
    onMouseEnter: y,
    onMouseLeave: S,
    className: C("relative select-none", p),
    children: [
      c,
      e.jsx("div", {
        ref: t,
        className:
          "absolute top-0 left-0 pointer-events-none rounded-full overflow-hidden z-50 hidden md:block",
        style: {
          width: d ? i : 0,
          height: d ? i : 0,
          backgroundColor: "#1a1a1a",
          transition:
            "width 0.5s cubic-bezier(0.33, 1, 0.68, 1), height 0.5s cubic-bezier(0.33, 1, 0.68, 1)",
          willChange: "transform, width, height",
        },
        children: e.jsx("div", {
          ref: s,
          className: "absolute flex items-center justify-center",
          style: {
            width: h.width,
            height: h.height,
            top: "50%",
            left: "50%",
            willChange: "transform",
          },
          children: o,
        }),
      }),
    ],
  });
}
function B({ children: c, revealContent: o, className: p }) {
  const [i, l] = r.useState(!1);
  return e.jsxs("div", {
    className: C("relative", p),
    onClick: () => l(!i),
    children: [
      e.jsx("div", {
        className: "absolute -top-6 left-1/2 -translate-x-1/2 z-10",
        children: e.jsx("span", {
          className: "text-xs text-gray-400/70 tracking-wider",
          children: i ? "tap to go back" : "tap to reveal",
        }),
      }),
      e.jsx("div", {
        className: "relative",
        style: { perspective: "1000px" },
        children: e.jsxs("div", {
          className: "transition-all duration-500 ease-out",
          style: {
            transform: i ? "rotateY(180deg)" : "rotateY(0deg)",
            transformStyle: "preserve-3d",
          },
          children: [
            e.jsx("div", {
              className: C(
                "transition-opacity duration-300",
                i ? "opacity-0 pointer-events-none" : "opacity-100",
              ),
              style: { backfaceVisibility: "hidden" },
              children: c,
            }),
            e.jsx("div", {
              className: C(
                "absolute inset-0 flex items-center justify-center transition-opacity duration-300",
                i ? "opacity-100" : "opacity-0 pointer-events-none",
              ),
              style: {
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              },
              children: e.jsx("div", {
                className: "text-gray-900 text-left",
                children: o,
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
const $ = e.jsxs("svg", {
    className: "block w-5 h-5 text-cyan-400 mb-2",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    children: [
      e.jsx("path", {
        d: "M12 0L13.5 8.5L22 10L13.5 11.5L12 20L10.5 11.5L2 10L10.5 8.5L12 0Z",
      }),
      e.jsx("path", {
        d: "M18 14L18.75 17.25L22 18L18.75 18.75L18 22L17.25 18.75L14 18L17.25 17.25L18 14Z",
        opacity: "0.6",
      }),
    ],
  }),
  F = e.jsxs("svg", {
    className:
      "inline-block w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-cyan-400 mr-1 align-top mt-2 md:mt-3 lg:mt-4",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    children: [
      e.jsx("path", {
        d: "M12 0L13.5 8.5L22 10L13.5 11.5L12 20L10.5 11.5L2 10L10.5 8.5L12 0Z",
      }),
      e.jsx("path", {
        d: "M18 14L18.75 17.25L22 18L18.75 18.75L18 22L17.25 18.75L14 18L17.25 17.25L18 14Z",
        opacity: "0.6",
      }),
    ],
  }),
  O = e.jsx("svg", {
    className:
      "absolute -top-1 -left-1 w-5 h-5 text-orange-500 transform -rotate-12 z-10",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    children: e.jsx("path", {
      d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
    }),
  }),
  Z = e.jsx("svg", {
    className:
      "absolute -top-1 md:-top-2 lg:-top-3 -left-1 md:-left-2 lg:-left-3 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-orange-500 transform -rotate-12 z-10 hover:scale-110 transition-transform duration-300",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    style: { filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.15))" },
    children: e.jsx("path", {
      d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
    }),
  }),
  V = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.11'/%3E%3C/svg%3E")`,
  j = "#ffffff",
  w = `${V}, linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(247, 244, 238, 0.42))`,
  re = () => {
    const c = H(),
      o = [
      {
        title: "VaultDL",
        description:
          "High-performance Windows desktop app for downloading media from hundreds of platforms — four modes, full quality control, queue management, no terminal needed.",
        color: "orange",
        rotate: "left",
        img: "/images/case%20studies/VaultDL/thumbnail.webp",
        link: "/projects/vaultdl",
        isDevelopment: !0,
        badge: "LIVE",
      },
      {
        title: "Shiq",
        description:
          "A personal content production studio for solo creators — from idea capture and scripting to scheduling and publishing, all in one place.",
        color: "purple",
        rotate: "right",
        img: "/images/case%20studies/Shiq/thumbnail.webp",
        link: "/projects/shiq",
        isDevelopment: !0,
        badge: "In Production",
      },
      {
        title: "FinEase",
        description:
          "AI-powered personal finance dashboard for smarter tracking, budgeting, and insight generation.",
        color: "green",
        rotate: "left",
        img: "/images/case%20studies/postyai/thumbnail.webp",
        link: "/projects/finease",
        isDevelopment: !0,
      },
    ],
      p = [
        {
          content: `React &
Vite`,
          color: "mint",
          rotate: "left",
          pinType: "tape",
        },
        {
          content: `Node.js &
Express`,
          color: "lavender",
          rotate: "right",
          pinType: "tape",
        },
        {
          content: `JavaScript
& DSA`,
          color: "coral",
          rotate: "none",
          pinType: "tape",
        },
        {
          content: `Supabase &
Firebase`,
          color: "sky",
          rotate: "left",
          pinType: "tape",
        },
        {
          content: `Git &
GitHub`,
          color: "peach",
          rotate: "right",
          pinType: "tape",
        },
        {
          content: `Figma &
UI Design`,
          color: "lime",
          rotate: "none",
          pinType: "tape",
        },
        {
          content: `Content Creation`,
          color: "rose",
          rotate: "right",
          pinType: "tape",
        },
        {
          content: `Problem
Solving & DSA`,
          color: "cyan",
          rotate: "left",
          pinType: "tape",
        },
      ],
      [i, l] = r.useState(!1);
    return (
      r.useEffect(() => {
        if (i) return;
        const t = setTimeout(() => {
          l(!0);
        }, 400);
        return () => clearTimeout(t);
      }, [i]),
      e.jsxs(P, {
        children: [
          e.jsxs("div", {
            className: "container mx-auto px-4 md:px-6 lg:px-8 relative",
            children: [
              e.jsx(E, {}),
              e.jsxs("main", {
                id: "main-content",
                children: [
                  e.jsxs("section", {
                    ref: c,
                    "aria-label": "Hero introduction",
                    className:
                      "py-6 md:py-10 lg:py-12 mt-8 md:mt-12 lg:mt-16 text-center relative",
                    children: [
                      e.jsx(B, {
                        className: `md:hidden relative z-20 mb-12 transition-all duration-700 ${i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`,
                        revealContent: e.jsxs("div", {
                          className: "text-left space-y-3",
                          children: [
                            e.jsx("p", {
                              className: "text-base font-medium leading-snug",
                              children: "Second-year BTech CSE @ PSIT Kanpur.",
                            }),
                            e.jsx("p", {
                              className: "text-base font-medium leading-snug",
                              children:
                                "Exploring AI, full-stack dev & scalable systems.",
                            }),
                            e.jsx("p", {
                              className: "text-base font-medium leading-snug",
                              children:
                                "Currently building Shiq & sharpening DSA + React.",
                            }),
                          ],
                        }),
                        children: e.jsxs("h1", {
                          className: "text-left leading-[1.15]",
                          children: [
                            $,
                            e.jsxs("span", {
                              className:
                                "block text-[2.2rem] font-semibold tracking-tight text-gray-900 mb-1",
                              children:
                                "Ideas are cheap. Shipping is the skill.",
                            }),
                            e.jsxs("span", {
                              className:
                                "block text-[2.5rem] font-semibold tracking-tight text-gray-900 mb-1",
                              children:
                                "Turning ideas into products people use.",
                            }),
                            e.jsx("span", {
                              className:
                                "block text-[2.5rem] font-semibold tracking-tight text-gray-900",
                              children:
                                "Obsessed with building things that matter.",
                            }),
                          ],
                        }),
                      }),
                      e.jsx(z, {
                        className: `hidden md:block relative z-20 mb-16 lg:mb-20 transition-all duration-700 ${i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`,
                        circleSize: 275,
                        hoverContent: e.jsxs("div", {
                          className: "text-center text-white space-y-3 px-6",
                          children: [
                            e.jsx("p", {
                              className:
                                "text-lg lg:text-xl font-medium leading-snug",
                              children: "Second-year BTech CSE @ PSIT Kanpur.",
                            }),
                            e.jsx("p", {
                              className:
                                "text-lg lg:text-xl font-medium leading-snug",
                              children:
                                "Exploring AI, full-stack dev & scalable systems.",
                            }),
                            e.jsx("p", {
                              className:
                                "text-lg lg:text-xl font-medium leading-snug",
                              children:
                                "Currently building Shiq & sharpening DSA + React.",
                            }),
                          ],
                        }),
                        children: e.jsxs("h1", {
                          className: "text-center leading-[1.1]",
                          children: [
                            e.jsxs("span", {
                              className:
                                "block text-[2.5rem] md:text-[4rem] lg:text-[8vw] xl:text-[9vw] font-semibold tracking-tight text-gray-900 mb-2 relative",
                              children:
                                "Ideas are cheap. Shipping is the skill.",
                            }),
                            e.jsxs("span", {
                              className:
                                "block text-[2.5rem] md:text-[4rem] lg:text-[8vw] xl:text-[9vw] font-semibold tracking-tight text-gray-900 mb-2",
                              children:
                                "Turning ideas into products people use.",
                            }),
                            e.jsx("span", {
                              className:
                                "block text-[2.5rem] md:text-[4rem] lg:text-[8vw] xl:text-[9vw] font-semibold tracking-tight text-gray-900",
                              children:
                                "Obsessed with building things that matter.",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  e.jsxs("section", {
                    id: "projects",
                    "aria-label": "Featured projects",
                    className: "py-4 md:py-8 relative",
                    children: [
                      e.jsx("div", {
                        className:
                          "absolute top-1/4 -right-12 opacity-50 hidden lg:block transform rotate-12",
                        children: e.jsx("img", {
                          src: "/images/graphics/Small-Flowers-Doodle--Streamline-Beveled-Scribbles.png",
                          alt: "",
                          "aria-hidden": "true",
                          className: "w-32 h-32 mix-blend-multiply",
                          loading: "lazy",
                        }),
                      }),
                      e.jsx("h2", {
                        className: `text-2xl md:text-3xl font-bold mb-8 md:mb-16 text-center transition-all duration-500 delay-200 ${i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`,
                        children: e.jsx(k, {
                          color: "#1D4ED8",
                          children: "BEST WORKS",
                        }),
                      }),
                      e.jsxs("div", {
                        className: `transition-all duration-600 delay-300 ${i ? "opacity-100" : "opacity-0"}`,
                        children: [
                          e.jsx("div", {
                            className:
                              "lg:hidden overflow-x-auto scrollbar-hide artboard-horizontal-scroll -mx-4 px-4",
                            children: e.jsx("div", {
                              className: "flex gap-4 md:gap-6 pb-4 w-max",
                              children: o.map((t, s) =>
                                e.jsx(
                                  "div",
                                  {
                                    className: `transition-all duration-300 hover:scale-[1.02] flex-shrink-0 w-[280px] sm:w-[320px] md:w-[340px] min-h-[420px] ${s === 0 ? "ml-0" : ""} ${s === o.length - 1 ? "mr-4" : ""}`,
                                    style: {
                                      animationDelay: `${s * 200 + 400}ms`,
                                    },
                                    children: e.jsx(T, {
                                      to: t.link,
                                      className: "block group h-[380px]",
                                      children: e.jsx(R, {
                                        title: t.title,
                                        description: t.description,
                                        color: t.color,
                                        rotate: t.rotate,
                                        img: t.img,
                                        video: t.video,
                                        badge: t.badge,
                                        className:
                                          "h-full transition-all duration-300 cursor-pointer group-hover:shadow-xl",
                                      }),
                                    }),
                                  },
                                  s,
                                ),
                              ),
                            }),
                          }),
                          e.jsx("div", {
                            className:
                              "hidden lg:block max-w-6xl mx-auto px-4 py-2",
                            children: e.jsx("div", {
                              className:
                                "grid grid-cols-3 gap-8 items-start max-w-6xl mx-auto",
                              children: o.map((t, s) =>
                                e.jsx(
                                  "div",
                                  {
                                    className:
                                      "transition-all duration-300 hover:scale-[1.02]",
                                    style: {
                                      animationDelay: `${s * 200 + 400}ms`,
                                    },
                                    children: e.jsx(T, {
                                      to: t.link,
                                      className: "block group",
                                      children: e.jsx(R, {
                                        title: t.title,
                                        description: t.description,
                                        color: t.color,
                                        rotate: t.rotate,
                                        img: t.img,
                                        video: t.video,
                                        badge: t.badge,
                                        className:
                                          "h-[440px] transition-all duration-300 cursor-pointer group-hover:shadow-xl",
                                      }),
                                    }),
                                  },
                                  s,
                                ),
                              ),
                            }),
                          }),
                        ],
                      }),
                      e.jsx("div", {
                        className: "text-center mt-12 md:mt-16 px-4",
                        children: e.jsx(T, {
                          to: "/projects",
                          className:
                            "daisy-button text-sm md:text-base px-6 md:px-8 py-3 md:py-4 inline-block",
                          children: "VIEW ALL PROJECTS",
                        }),
                      }),
                    ],
                  }),
                  e.jsxs("section", {
                    id: "skills",
                    "aria-label": "Skills and expertise",
                    className: "py-8 md:py-16 relative",
                    children: [
                      e.jsx("div", {
                        className:
                          "absolute top-8 -left-8 opacity-70 hidden lg:block",
                        children: e.jsx("img", {
                          src: "/images/graphics/Idea-Light-Bulb--Streamline-Beveled-Scribbles.png",
                          alt: "",
                          "aria-hidden": "true",
                          className:
                            "w-28 h-28 transform -rotate-12 mix-blend-multiply",
                          loading: "lazy",
                        }),
                      }),
                      e.jsx("h2", {
                        className:
                          "text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center",
                        children: e.jsx(k, {
                          color: "#1D4ED8",
                          children: "My SkillJar",
                        }),
                      }),
                      e.jsx("div", {
                        className: "max-w-6xl mx-auto",
                        children: e.jsx("div", {
                          className:
                            "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8",
                          children: p.map((t, s) =>
                            e.jsx(
                              "div",
                              {
                                className: "flex justify-center",
                                children: e.jsx(I, {
                                  content: t.content,
                                  color: t.color,
                                  rotate: t.rotate,
                                  pinType: t.pinType,
                                  className:
                                    "w-36 h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 text-xs md:text-sm lg:text-base font-bold text-center flex items-center justify-center hover:scale-[1.02] transition-all duration-200 cursor-default",
                                }),
                              },
                              s,
                            ),
                          ),
                        }),
                      }),
                    ],
                  }),
                  e.jsxs("section", {
                    id: "about",
                    "aria-label": "About Mayank Dev",
                    className: "py-8 md:py-16 pb-24 md:pb-32 relative",
                    children: [
                      e.jsx("div", {
                        className:
                          "absolute top-1/4 -left-10 opacity-70 hidden lg:block",
                        children: e.jsx("img", {
                          src: "/images/graphics/Music-Headphone--Streamline-Beveled-Scribbles.png",
                          alt: "",
                          "aria-hidden": "true",
                          className:
                            "w-28 h-28 transform -rotate-12 mix-blend-multiply",
                          loading: "lazy",
                        }),
                      }),
                      e.jsxs("div", {
                        className: "max-w-5xl mx-auto px-4 pb-24 md:pb-32",
                        children: [
                          e.jsx("h2", {
                            className:
                              "text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center",
                            children: e.jsx(k, {
                              color: "#1D4ED8",
                              children: "About Me",
                            }),
                          }),
                          e.jsxs("div", {
                            className:
                              "hidden md:grid md:grid-cols-12 md:gap-6 lg:gap-8 relative",
                            children: [
                              e.jsx("div", {
                                className:
                                  "col-span-4 flex flex-col justify-start items-start",
                                children: e.jsxs("div", {
                                  className:
                                    "transform rotate-3 hover:rotate-6 hover:scale-105 transition-all duration-500 ease-out cursor-pointer group relative",
                                  children: [
                                    e.jsxs("div", {
                                      className:
                                        "bg-white p-3 shadow-lg hover:shadow-2xl border border-gray-200 w-48 lg:w-56 transition-shadow duration-300",
                                      children: [
                                        e.jsx("img", {
                                          src: "/images/feed/memory-04.webp",
                                          alt: "Mayank Dev - Product Designer",
                                          className:
                                            "w-full h-32 lg:h-40 object-cover bg-gray-100 transition-all duration-300 group-hover:brightness-110",
                                          loading: "eager",
                                          "data-critical": "true",
                                        }),
                                        e.jsx("div", {
                                          className: "mt-2 text-center",
                                          children: e.jsx("p", {
                                            className:
                                              "font-mono text-xs lg:text-sm text-gray-600 group-hover:text-gray-800 transition-colors",
                                            children: "That's me! 📸",
                                          }),
                                        }),
                                      ],
                                    }),
                                    e.jsx("div", {
                                      className:
                                        "absolute -top-7 left-1/2 -translate-x-1/2 z-10 cursor-pointer",
                                      style: { perspective: "500px" },
                                      children: e.jsx(D.div, {
                                        initial: {
                                          rotateZ: 12,
                                          rotateX: 20,
                                          y: 0,
                                        },
                                        whileHover: {
                                          rotateZ: 14,
                                          rotateX: 20,
                                          y: -8,
                                        },
                                        style: {
                                          transformStyle: "preserve-3d",
                                          transformOrigin: "50% 85%",
                                        },
                                        transition: {
                                          type: "spring",
                                          stiffness: 320,
                                          damping: 22,
                                        },
                                        children: e.jsxs("svg", {
                                          width: "24",
                                          height: "50",
                                          viewBox: "0 0 24 50",
                                          fill: "none",
                                          xmlns: "http://www.w3.org/2000/svg",
                                          style: {
                                            filter:
                                              "drop-shadow(1px 2px 4px rgba(0,0,0,0.35))",
                                          },
                                          children: [
                                            e.jsx("rect", {
                                              x: "10",
                                              y: "18",
                                              width: "4",
                                              height: "22",
                                              rx: "1.5",
                                              fill: "#8A9099",
                                            }),
                                            e.jsx("rect", {
                                              x: "10.5",
                                              y: "18",
                                              width: "1.5",
                                              height: "22",
                                              rx: "1",
                                              fill: "rgba(255,255,255,0.45)",
                                            }),
                                            e.jsx("rect", {
                                              x: "10",
                                              y: "18",
                                              width: "4",
                                              height: "22",
                                              rx: "1.5",
                                              stroke: "#5C6470",
                                              strokeWidth: "0.4",
                                            }),
                                            e.jsx("path", {
                                              d: "M10 40 L12 48 L14 40 Z",
                                              fill: "#6B7280",
                                            }),
                                            e.jsx("circle", {
                                              cx: "12",
                                              cy: "11",
                                              r: "10",
                                              fill: "#D93025",
                                            }),
                                            e.jsx("circle", {
                                              cx: "12",
                                              cy: "11",
                                              r: "10",
                                              fill: "url(#pinHeadGradD)",
                                            }),
                                            e.jsx("ellipse", {
                                              cx: "8",
                                              cy: "7",
                                              rx: "4",
                                              ry: "2.5",
                                              fill: "rgba(255,255,255,0.4)",
                                              transform: "rotate(-25 8 7)",
                                            }),
                                            e.jsx("defs", {
                                              children: e.jsxs(
                                                "radialGradient",
                                                {
                                                  id: "pinHeadGradD",
                                                  cx: "36%",
                                                  cy: "30%",
                                                  r: "65%",
                                                  children: [
                                                    e.jsx("stop", {
                                                      offset: "0%",
                                                      stopColor: "#FF6060",
                                                      stopOpacity: "0.55",
                                                    }),
                                                    e.jsx("stop", {
                                                      offset: "60%",
                                                      stopColor: "#B02020",
                                                      stopOpacity: "0.45",
                                                    }),
                                                    e.jsx("stop", {
                                                      offset: "100%",
                                                      stopColor: "#7A0000",
                                                      stopOpacity: "0.35",
                                                    }),
                                                  ],
                                                },
                                              ),
                                            }),
                                          ],
                                        }),
                                      }),
                                    }),
                                    e.jsx("div", {
                                      className:
                                        "absolute inset-0 rounded-lg bg-gradient-to-br from-yellow-200/20 to-orange-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none",
                                    }),
                                  ],
                                }),
                              }),
                              e.jsxs("div", {
                                className: "col-span-8 space-y-6 flex flex-col",
                                children: [
                                  e.jsx("div", {
                                    className: "-rotate-[0.7deg]",
                                    children: e.jsx("div", {
                                      className: "px-7 pt-10 pb-9",
                                      style: {
                                        backgroundColor: j,
                                        backgroundImage: w,
                                        clipPath:
                                          "polygon(0% 14%, 2.5% 3%, 5% 13%, 7.5% 1%, 10% 14%, 12.5% 4%, 15% 12%, 17.5% 0%, 20% 14%, 22.5% 3%, 25% 13%, 27.5% 2%, 30% 14%, 32.5% 1%, 35% 13%, 37.5% 4%, 40% 14%, 42.5% 0%, 45% 13%, 47.5% 3%, 50% 14%, 52.5% 2%, 55% 13%, 57.5% 0%, 60% 14%, 62.5% 4%, 65% 12%, 67.5% 1%, 70% 14%, 72.5% 3%, 75% 13%, 77.5% 0%, 80% 14%, 82.5% 2%, 85% 13%, 87.5% 1%, 90% 14%, 92.5% 3%, 95% 12%, 97.5% 2%, 100% 14%, 100% 86%, 97.5% 97%, 95% 86%, 92.5% 99%, 90% 87%, 87.5% 100%, 85% 86%, 82.5% 98%, 80% 87%, 77.5% 100%, 75% 87%, 72.5% 99%, 70% 86%, 67.5% 98%, 65% 87%, 62.5% 100%, 60% 86%, 57.5% 99%, 55% 87%, 52.5% 100%, 50% 86%, 47.5% 98%, 45% 87%, 42.5% 100%, 40% 86%, 37.5% 99%, 35% 87%, 32.5% 100%, 30% 86%, 27.5% 98%, 25% 87%, 22.5% 100%, 20% 87%, 17.5% 99%, 15% 86%, 12.5% 98%, 10% 87%, 7.5% 100%, 5% 86%, 2.5% 98%, 0% 86%)",
                                      },
                                      children: e.jsxs("p", {
                                        className:
                                          "text-sm lg:text-base leading-relaxed font-medium text-black",
                                        children: [
                                          e.jsx("span", {
                                            className:
                                              "bg-yellow-200 px-1 rounded",
                                            children: "Plot twist:",
                                          }),
                                          " Second-year BTech CSE who loves turning ideas into real products. 💡",
                                        ],
                                      }),
                                    }),
                                  }),
                                  e.jsx("div", {
                                    className: "rotate-[0.6deg]",
                                    children: e.jsx("div", {
                                      className: "px-7 pt-10 pb-9",
                                      style: {
                                        backgroundColor: j,
                                        backgroundImage: w,
                                        clipPath:
                                          "polygon(0% 12%, 2.5% 2%, 5% 14%, 7.5% 3%, 10% 12%, 12.5% 0%, 15% 14%, 17.5% 2%, 20% 12%, 22.5% 4%, 25% 14%, 27.5% 1%, 30% 12%, 32.5% 3%, 35% 14%, 37.5% 0%, 40% 13%, 42.5% 2%, 45% 14%, 47.5% 1%, 50% 12%, 52.5% 4%, 55% 14%, 57.5% 2%, 60% 12%, 62.5% 0%, 65% 14%, 67.5% 3%, 70% 12%, 72.5% 1%, 75% 14%, 77.5% 2%, 80% 12%, 82.5% 4%, 85% 14%, 87.5% 1%, 90% 12%, 92.5% 3%, 95% 14%, 97.5% 1%, 100% 12%, 100% 88%, 97.5% 99%, 95% 87%, 92.5% 100%, 90% 88%, 87.5% 98%, 85% 86%, 82.5% 99%, 80% 88%, 77.5% 100%, 75% 87%, 72.5% 99%, 70% 88%, 67.5% 100%, 65% 87%, 62.5% 98%, 60% 88%, 57.5% 100%, 55% 87%, 52.5% 99%, 50% 88%, 47.5% 100%, 45% 87%, 42.5% 98%, 40% 88%, 37.5% 100%, 35% 87%, 32.5% 99%, 30% 88%, 27.5% 100%, 25% 87%, 22.5% 99%, 20% 88%, 17.5% 100%, 15% 87%, 12.5% 99%, 10% 88%, 7.5% 100%, 5% 87%, 2.5% 99%, 0% 88%)",
                                      },
                                      children: e.jsxs("p", {
                                        className:
                                          "text-sm lg:text-base leading-relaxed text-black",
                                        children: [
                                          "Deep into React, JavaScript, backend dev & DSA — while building ",
                                          e.jsx("span", {
                                            className:
                                              "bg-green-200 px-1 rounded",
                                            children:
                                              "FinEase and real-world projects",
                                          }),
                                          " on the side. 🚀",
                                        ],
                                      }),
                                    }),
                                  }),
                                  e.jsx("div", {
                                    className: "-rotate-[0.45deg]",
                                    children: e.jsx("div", {
                                      className: "px-7 pt-10 pb-9",
                                      style: {
                                        backgroundColor: j,
                                        backgroundImage: w,
                                        clipPath:
                                          "polygon(0% 13%, 2.5% 1%, 5% 14%, 7.5% 2%, 10% 13%, 12.5% 4%, 15% 14%, 17.5% 1%, 20% 13%, 22.5% 3%, 25% 14%, 27.5% 0%, 30% 13%, 32.5% 4%, 35% 14%, 37.5% 2%, 40% 12%, 42.5% 0%, 45% 14%, 47.5% 3%, 50% 13%, 52.5% 1%, 55% 14%, 57.5% 4%, 60% 13%, 62.5% 0%, 65% 14%, 67.5% 2%, 70% 13%, 72.5% 4%, 75% 14%, 77.5% 1%, 80% 13%, 82.5% 3%, 85% 14%, 87.5% 0%, 90% 13%, 92.5% 2%, 95% 14%, 97.5% 3%, 100% 13%, 100% 87%, 97.5% 98%, 95% 86%, 92.5% 99%, 90% 87%, 87.5% 100%, 85% 87%, 82.5% 99%, 80% 86%, 77.5% 98%, 75% 87%, 72.5% 100%, 70% 86%, 67.5% 99%, 65% 87%, 62.5% 100%, 60% 86%, 57.5% 99%, 55% 87%, 52.5% 100%, 50% 86%, 47.5% 98%, 45% 87%, 42.5% 100%, 40% 87%, 37.5% 99%, 35% 86%, 32.5% 100%, 30% 87%, 27.5% 99%, 25% 86%, 22.5% 98%, 20% 87%, 17.5% 100%, 15% 87%, 12.5% 99%, 10% 86%, 7.5% 98%, 5% 87%, 2.5% 100%, 0% 87%)",
                                      },
                                      children: e.jsxs("p", {
                                        className:
                                          "text-sm lg:text-base leading-relaxed text-black",
                                        children: [
                                          "Good products aren't just about code — they're about making life simpler. I build ",
                                          e.jsx("span", {
                                            className:
                                              "bg-purple-200 px-1 rounded",
                                            children:
                                              "clean, useful, user-focused experiences",
                                          }),
                                          ". 🎯",
                                        ],
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "md:hidden space-y-5",
                            children: [
                              e.jsx("div", {
                                className: "flex justify-center",
                                children: e.jsxs("div", {
                                  className:
                                    "transform rotate-2 hover:rotate-4 transition-transform duration-300 cursor-pointer group relative",
                                  children: [
                                    e.jsxs("div", {
                                      className:
                                        "bg-white p-3 shadow-lg border border-gray-200 w-48",
                                      children: [
                                        e.jsx("img", {
                                          src: "/images/feed/memory-04.webp",
                                          alt: "Mayank Dev - Product Designer",
                                          className:
                                            "w-full h-32 object-cover bg-gray-100",
                                          loading: "eager",
                                        }),
                                        e.jsx("div", {
                                          className: "mt-2 text-center",
                                          children: e.jsx("p", {
                                            className:
                                              "font-mono text-xs text-gray-600",
                                            children: "That's me! 📸",
                                          }),
                                        }),
                                      ],
                                    }),
                                    e.jsx("div", {
                                      className:
                                        "absolute -top-6 left-1/2 -translate-x-1/2 z-10 cursor-pointer",
                                      style: { perspective: "500px" },
                                      children: e.jsx(D.div, {
                                        initial: {
                                          rotateZ: 12,
                                          rotateX: 20,
                                          y: 0,
                                        },
                                        whileHover: {
                                          rotateZ: 14,
                                          rotateX: 20,
                                          y: -6,
                                        },
                                        style: {
                                          transformStyle: "preserve-3d",
                                          transformOrigin: "50% 85%",
                                        },
                                        transition: {
                                          type: "spring",
                                          stiffness: 320,
                                          damping: 22,
                                        },
                                        children: e.jsxs("svg", {
                                          width: "20",
                                          height: "42",
                                          viewBox: "0 0 24 50",
                                          fill: "none",
                                          xmlns: "http://www.w3.org/2000/svg",
                                          style: {
                                            filter:
                                              "drop-shadow(1px 2px 4px rgba(0,0,0,0.35))",
                                          },
                                          children: [
                                            e.jsx("rect", {
                                              x: "10",
                                              y: "18",
                                              width: "4",
                                              height: "22",
                                              rx: "1.5",
                                              fill: "#8A9099",
                                            }),
                                            e.jsx("rect", {
                                              x: "10.5",
                                              y: "18",
                                              width: "1.5",
                                              height: "22",
                                              rx: "1",
                                              fill: "rgba(255,255,255,0.45)",
                                            }),
                                            e.jsx("rect", {
                                              x: "10",
                                              y: "18",
                                              width: "4",
                                              height: "22",
                                              rx: "1.5",
                                              stroke: "#5C6470",
                                              strokeWidth: "0.4",
                                            }),
                                            e.jsx("path", {
                                              d: "M10 40 L12 48 L14 40 Z",
                                              fill: "#6B7280",
                                            }),
                                            e.jsx("circle", {
                                              cx: "12",
                                              cy: "11",
                                              r: "10",
                                              fill: "#D93025",
                                            }),
                                            e.jsx("circle", {
                                              cx: "12",
                                              cy: "11",
                                              r: "10",
                                              fill: "url(#pinHeadGradM)",
                                            }),
                                            e.jsx("ellipse", {
                                              cx: "8",
                                              cy: "7",
                                              rx: "4",
                                              ry: "2.5",
                                              fill: "rgba(255,255,255,0.4)",
                                              transform: "rotate(-25 8 7)",
                                            }),
                                            e.jsx("defs", {
                                              children: e.jsxs(
                                                "radialGradient",
                                                {
                                                  id: "pinHeadGradM",
                                                  cx: "36%",
                                                  cy: "30%",
                                                  r: "65%",
                                                  children: [
                                                    e.jsx("stop", {
                                                      offset: "0%",
                                                      stopColor: "#FF6060",
                                                      stopOpacity: "0.55",
                                                    }),
                                                    e.jsx("stop", {
                                                      offset: "60%",
                                                      stopColor: "#B02020",
                                                      stopOpacity: "0.45",
                                                    }),
                                                    e.jsx("stop", {
                                                      offset: "100%",
                                                      stopColor: "#7A0000",
                                                      stopOpacity: "0.35",
                                                    }),
                                                  ],
                                                },
                                              ),
                                            }),
                                          ],
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                              e.jsx("div", {
                                className: "-rotate-[0.8deg]",
                                children: e.jsx("div", {
                                  className: "px-5 pt-9 pb-8",
                                  style: {
                                    backgroundColor: j,
                                    backgroundImage: w,
                                    clipPath:
                                      "polygon(0% 14%, 5% 2%, 10% 14%, 15% 1%, 20% 14%, 25% 3%, 30% 14%, 35% 0%, 40% 14%, 45% 3%, 50% 14%, 55% 1%, 60% 14%, 65% 4%, 70% 14%, 75% 0%, 80% 14%, 85% 2%, 90% 14%, 95% 3%, 100% 14%, 100% 86%, 95% 99%, 90% 87%, 85% 100%, 80% 86%, 75% 99%, 70% 87%, 65% 100%, 60% 86%, 55% 99%, 50% 87%, 45% 100%, 40% 86%, 35% 99%, 30% 87%, 25% 100%, 20% 86%, 15% 99%, 10% 87%, 5% 100%, 0% 86%)",
                                  },
                                  children: e.jsxs("p", {
                                    className:
                                      "text-sm leading-relaxed font-medium text-black",
                                    children: [
                                      e.jsx("span", {
                                        className: "bg-yellow-200 px-1 rounded",
                                        children: "Plot twist:",
                                      }),
                                      " Second-year BTech CSE who loves turning ideas into real products. 💡",
                                    ],
                                  }),
                                }),
                              }),
                              e.jsx("div", {
                                className: "rotate-[0.65deg]",
                                children: e.jsx("div", {
                                  className: "px-5 pt-9 pb-8",
                                  style: {
                                    backgroundColor: j,
                                    backgroundImage: w,
                                    clipPath:
                                      "polygon(0% 12%, 5% 3%, 10% 14%, 15% 0%, 20% 13%, 25% 4%, 30% 14%, 35% 1%, 40% 13%, 45% 4%, 50% 14%, 55% 0%, 60% 13%, 65% 3%, 70% 14%, 75% 1%, 80% 13%, 85% 4%, 90% 14%, 95% 2%, 100% 12%, 100% 88%, 95% 100%, 90% 87%, 85% 99%, 80% 86%, 75% 100%, 70% 87%, 65% 99%, 60% 86%, 55% 100%, 50% 87%, 45% 99%, 40% 86%, 35% 100%, 30% 87%, 25% 99%, 20% 86%, 15% 100%, 10% 87%, 5% 99%, 0% 88%)",
                                  },
                                  children: e.jsxs("p", {
                                    className:
                                      "text-sm leading-relaxed text-black",
                                    children: [
                                      "Deep into React, JavaScript, backend dev & DSA — while building ",
                                      e.jsx("span", {
                                        className: "bg-green-200 px-1 rounded",
                                        children:
                                          "FinEase and real-world projects",
                                      }),
                                      " on the side. 🚀",
                                    ],
                                  }),
                                }),
                              }),
                              e.jsx("div", {
                                className: "-rotate-[0.5deg]",
                                children: e.jsx("div", {
                                  className: "px-5 pt-9 pb-8",
                                  style: {
                                    backgroundColor: j,
                                    backgroundImage: w,
                                    clipPath:
                                      "polygon(0% 13%, 5% 1%, 10% 14%, 15% 3%, 20% 14%, 25% 0%, 30% 13%, 35% 4%, 40% 14%, 45% 1%, 50% 13%, 55% 4%, 60% 14%, 65% 0%, 70% 13%, 75% 3%, 80% 14%, 85% 1%, 90% 13%, 95% 4%, 100% 13%, 100% 87%, 95% 100%, 90% 86%, 85% 99%, 80% 87%, 75% 100%, 70% 86%, 65% 99%, 60% 87%, 55% 100%, 50% 86%, 45% 99%, 40% 87%, 35% 100%, 30% 86%, 25% 99%, 20% 87%, 15% 100%, 10% 86%, 5% 99%, 0% 87%)",
                                  },
                                  children: e.jsxs("p", {
                                    className:
                                      "text-sm leading-relaxed text-black",
                                    children: [
                                      "Good products aren't just about code — they're about making life simpler. I build ",
                                      e.jsx("span", {
                                        className: "bg-purple-200 px-1 rounded",
                                        children:
                                          "clean, useful, user-focused experiences",
                                      }),
                                      ". 🎯",
                                    ],
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          e.jsx(M, {}),
        ],
      })
    );
  };
export { re as default };


