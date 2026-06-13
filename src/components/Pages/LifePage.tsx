var h = Object.defineProperty,
  p = Object.defineProperties;
var x = Object.getOwnPropertyDescriptors;
var c = Object.getOwnPropertySymbols;
var g = Object.prototype.hasOwnProperty,
  u = Object.prototype.propertyIsEnumerable;
var d = (n, r, o) =>
    r in n
      ? h(n, r, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (n[r] = o),
  t = (n, r) => {
    for (var o in r || (r = {})) g.call(r, o) && d(n, o, r[o]);
    if (c) for (var o of c(r)) u.call(r, o) && d(n, o, r[o]);
    return n;
  },
  s = (n, r) => p(n, x(r));
import { j as e } from "../ui/_uiVendor";
import { L as m } from "../ui/_reactVendor";
import { H as b } from "../ui/Landing_UI/Header";
import { F as f } from "../ui/Landing_UI/Footer";
import { P as j } from "../ui/Landing_UI/PaperBackground";
import { B as y } from "../ui/Playground_UI/BookCover";
import { m as a } from "../ui/_animationVendor";
import "../ui/Landing_UI/MenuToggleIcon";
import "../ui/AppShell";
import "../ui/_iconsVendor";
import "../ui/Landing_UI/ConnectDropdown";
import "../ui/_sharedIndex";
const w = [
    {
      src: "https://covers.openlibrary.org/b/isbn/9781544514215-M.jpg",
      largeSrc: "https://covers.openlibrary.org/b/isbn/9781544514215-L.jpg",
      title: "Almanack of Naval",
      author: "Eric Jorgenson",
    },
    {
      src: "https://covers.openlibrary.org/b/isbn/9780465050659-M.jpg",
      largeSrc: "https://covers.openlibrary.org/b/isbn/9780465050659-L.jpg",
      title: "Design of Everyday Things",
      author: "Don Norman",
    },
    {
      src: "https://covers.openlibrary.org/b/isbn/9781949759228-M.jpg",
      largeSrc: "https://covers.openlibrary.org/b/isbn/9781949759228-L.jpg",
      title: "The Mountain Is You",
      author: "Brianna Wiest",
    },
  ],
  i = (n = 0) => ({
    initial: { opacity: 0, y: 14 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: !0, margin: "-40px" },
    transition: { duration: 0.6, delay: n, ease: [0.25, 0.1, 0.25, 1] },
  }),
  l = () =>
    e.jsxs("div", {
      className: "my-14 flex items-center justify-center gap-4 md:my-16",
      children: [
        e.jsx("span", { className: "h-px w-16 bg-zinc-300/60" }),
        e.jsx("img", {
          src: "/images/life/stamp-star.svg",
          alt: "",
          "aria-hidden": "true",
          className: "h-5 w-5 opacity-40",
        }),
        e.jsx("span", { className: "h-px w-16 bg-zinc-300/60" }),
      ],
    }),
  D = () =>
    e.jsxs(j, {
      children: [
        e.jsx("div", {
          className: "container mx-auto px-4 md:px-6 lg:px-8 relative",
          children: e.jsx(b, {}),
        }),
        e.jsxs("main", {
          id: "main-content",
          className: "relative overflow-hidden",
          children: [
            e.jsx("div", {
              className:
                "absolute top-8 -left-6 opacity-50 hidden lg:block transform -rotate-12",
              children: e.jsx("img", {
                src: "/images/graphics/Music-Headphone--Streamline-Beveled-Scribbles.png",
                alt: "",
                "aria-hidden": "true",
                className: "w-28 h-28 mix-blend-multiply",
                loading: "lazy",
              }),
            }),
            e.jsx("div", {
              className:
                "absolute top-12 -right-8 opacity-50 hidden lg:block transform rotate-12",
              children: e.jsx("img", {
                src: "/images/graphics/Small-Flowers-Doodle--Streamline-Beveled-Scribbles.png",
                alt: "",
                "aria-hidden": "true",
                className: "w-32 h-32 mix-blend-multiply",
                loading: "lazy",
              }),
            }),
            e.jsx("section", {
              className: "pb-4 pt-10 md:pt-16",
              children: e.jsxs("div", {
                className: "mx-auto max-w-2xl px-6 text-center md:px-4",
                children: [
                  e.jsx(
                    a.p,
                    s(t({}, i(0)), {
                      className:
                        "text-[11px] uppercase tracking-[0.35em] text-zinc-400",
                      children: "A personal note",
                    }),
                  ),
                  e.jsxs(
                    a.h1,
                    s(t({}, i(0.1)), {
                      className:
                        "mt-6 font-handwritten text-5xl leading-[1.15] text-zinc-900 md:text-6xl lg:text-7xl",
                      children: [
                        "Life, beyond",
                        e.jsx("br", {}),
                        "the portfolio",
                      ],
                    }),
                  ),
                  e.jsx(
                    a.p,
                    s(t({}, i(0.2)), {
                      className:
                        "mx-auto mt-6 max-w-md text-[15px] leading-relaxed text-zinc-500 md:text-base",
                      children:
                        "Not a résumé. Not a timeline. Just the story underneath the work.",
                    }),
                  ),
                  e.jsx(
                    a.div,
                    s(t({}, i(0.3)), {
                      className: "mt-8",
                      children: e.jsx("img", {
                        src: "/images/life/divider-stitch.svg",
                        alt: "",
                        "aria-hidden": "true",
                        className: "mx-auto w-48 opacity-30 md:w-56",
                      }),
                    }),
                  ),
                ],
              }),
            }),
            e.jsxs("section", {
              className: "relative mx-auto max-w-xl px-6 pb-24 pt-8 md:px-4",
              children: [
                e.jsx("div", {
                  className:
                    "absolute -right-16 top-0 opacity-50 hidden lg:block transform -rotate-6",
                  children: e.jsx("img", {
                    src: "/images/graphics/Idea-Light-Bulb--Streamline-Beveled-Scribbles.png",
                    alt: "",
                    "aria-hidden": "true",
                    className: "w-24 h-24 mix-blend-multiply",
                    loading: "lazy",
                  }),
                }),
                e.jsx(
                  a.div,
                  s(t({}, i()), {
                    className: "mb-14 flex justify-center",
                    children: e.jsxs("div", {
                      className:
                        "rotate-[2deg] bg-white p-2.5 shadow-[0_2px_20px_rgba(0,0,0,0.08)] transition-transform duration-500 hover:rotate-0",
                      children: [
                        e.jsx("img", {
                          src: "/images/feed/IMG_9007_optimized.webp",
                          alt: "Mayank Dev",
                          className: "h-56 w-44 object-cover md:h-64 md:w-52",
                          loading: "eager",
                        }),
                        e.jsx("p", {
                          className:
                            "mt-1.5 text-center font-handwritten text-[11px] text-zinc-400",
                          children: "Graduation day, 2025",
                        }),
                      ],
                    }),
                  }),
                ),
                e.jsxs("div", {
                  className:
                    "space-y-6 text-left text-[15px] leading-[1.85] text-zinc-700 sm:text-justify md:text-base md:leading-[1.9]",
                  children: [
                    e.jsx(
                      a.p,
                      s(t({}, i()), {
                        children: "Hey, thanks for being here.",
                      }),
                    ),
                    e.jsx(
                      a.p,
                      s(t({}, i()), {
                        children:
                          "I'm Mayank Dev. I studied Computer Science at Jyothy Institute of Technology in Bangalore. Went in thinking I'd write code for a living. Came out realizing I care more about how software feels than how it runs.",
                      }),
                    ),
                    e.jsx(
                      a.p,
                      s(t({}, i()), {
                        children:
                          "Somewhere between algorithms and data structures, I started noticing the gaps, the places where something technically correct still managed to confuse everyone who touched it. I'd pull friends aside, watch them use my class projects, and quietly rewrite the parts that tripped them up. That habit never stopped.",
                      }),
                    ),
                  ],
                }),
                e.jsx(l, {}),
                e.jsxs("div", {
                  className: "relative",
                  children: [
                    e.jsx("div", {
                      className:
                        "absolute -left-40 top-4 opacity-50 hidden lg:block transform rotate-6",
                      children: e.jsx("img", {
                        src: "/images/graphics/Book-Glasses--Streamline-Beveled-Scribbles.png",
                        alt: "",
                        "aria-hidden": "true",
                        className: "w-28 h-28 mix-blend-multiply",
                        loading: "lazy",
                      }),
                    }),
                    e.jsxs("div", {
                      className:
                        "space-y-6 text-left text-[15px] leading-[1.85] text-zinc-700 sm:text-justify md:text-base md:leading-[1.9]",
                      children: [
                        e.jsx(
                          a.p,
                          s(t({}, i()), {
                            children:
                              "My first internship at Varcons Technologies humbled me fast. I built a flow I thought was perfect. Users broke it in minutes. That was the moment I stopped trusting my own assumptions and started trusting the people using the thing.",
                          }),
                        ),
                        e.jsx(
                          a.p,
                          s(t({}, i()), {
                            children:
                              "At WinWire, I got to work on enterprise stuff, booking workflows and internal tools. I interviewed 18+ users, sat with engineers, and learned that clarity isn't decoration. It's the difference between a tool people tolerate and one they actually reach for.",
                          }),
                        ),
                      ],
                    }),
                  ],
                }),
                e.jsx(l, {}),
                e.jsxs("div", {
                  className: "relative",
                  children: [
                    e.jsx("div", {
                      className:
                        "absolute -right-36 top-8 opacity-40 hidden lg:block transform -rotate-12",
                      children: e.jsx("img", {
                        src: "/images/graphics/stars.png",
                        alt: "",
                        "aria-hidden": "true",
                        className: "w-16 h-16 mix-blend-multiply",
                        loading: "lazy",
                      }),
                    }),
                    e.jsxs("div", {
                      className:
                        "space-y-6 text-left text-[15px] leading-[1.85] text-zinc-700 sm:text-justify md:text-base md:leading-[1.9]",
                      children: [
                        e.jsx(
                          a.p,
                          s(t({}, i()), {
                            children:
                              "Park EZ started because I was tired of circling for parking. I turned that frustration into interviews, prototypes, pilots, the whole thing. It reached the Smart India Hackathon finals. That project taught me what happens when you take a personal annoyance seriously enough to research it properly.",
                          }),
                        ),
                        e.jsx(
                          a.p,
                          s(t({}, i()), {
                            children:
                              "These days I'm at Talview, designing core systems. I've picked up certifications from Google, Microsoft, and Meta along the way, not because credentials matter that much, but because I genuinely wanted to learn the frameworks behind the intuition I'd been building.",
                          }),
                        ),
                        e.jsx(
                          a.p,
                          s(t({}, i()), {
                            children:
                              "I'm not trying to be the designer with the flashiest portfolio. I just want to make things that work well and feel right. If you're here, you probably care about the same stuff.",
                          }),
                        ),
                        e.jsx(
                          a.p,
                          s(t({}, i()), {
                            className:
                              "pt-6 text-center font-handwritten text-xl text-zinc-500",
                            children: "Mayank Dev",
                          }),
                        ),
                      ],
                    }),
                  ],
                }),
                e.jsx(l, {}),
                e.jsxs(
                  a.div,
                  s(t({}, i()), {
                    className: "text-center",
                    children: [
                      e.jsx("p", {
                        className:
                          "text-[11px] uppercase tracking-[0.35em] text-zinc-400",
                        children: "Books that changed how I see things",
                      }),
                      e.jsx("div", {
                        className: "mt-8 flex justify-center gap-8 md:gap-12",
                        children: w.map((n, r) =>
                          e.jsx(
                            y,
                            s(t({}, n), {
                              rotation: r === 0 ? -3 : r === 1 ? 1 : 4,
                            }),
                            n.title,
                          ),
                        ),
                      }),
                    ],
                  }),
                ),
                e.jsxs(
                  a.div,
                  s(t({}, i()), {
                    className:
                      "mt-20 flex flex-col items-center gap-3 border-t border-zinc-200 pt-10 sm:flex-row sm:justify-between",
                    children: [
                      e.jsx("p", {
                        className:
                          "text-[11px] uppercase tracking-[0.3em] text-zinc-400",
                        children: "Want the structured version?",
                      }),
                      e.jsxs("div", {
                        className: "flex gap-3",
                        children: [
                          e.jsx(m, {
                            to: "/journey",
                            className:
                              "rounded-full border border-zinc-900 px-5 py-2 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-900 hover:text-white",
                            children: "Journey",
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
                ),
              ],
            }),
          ],
        }),
        e.jsx(f, {}),
      ],
    });
export { D as default };

