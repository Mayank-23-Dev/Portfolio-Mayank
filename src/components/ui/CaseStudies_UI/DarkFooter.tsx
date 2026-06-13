var p = (o, a, t) =>
  new Promise((c, l) => {
    var r = (i) => {
        try {
          m(t.next(i));
        } catch (n) {
          l(n);
        }
      },
      s = (i) => {
        try {
          m(t.throw(i));
        } catch (n) {
          l(n);
        }
      },
      m = (i) => (i.done ? c(i.value) : Promise.resolve(i.value).then(r, s));
    m((t = t.apply(o, a)).next());
  });
import { j as e } from "../_uiVendor.js";
import { L as d, a as h } from "../_reactVendor.js";
import { M as v } from "../Landing_UI/MenuToggleIcon.js";
import { C as y } from "../Landing_UI/ConnectDropdown.js";
import { b as w } from "../_sharedIndex.js";
import { p as u } from "../AppShell.js";
import { w as k, d as j, G as N, L as C, F as S } from "../_iconsVendor.js";
const F = () =>
    e.jsx(d, {
      to: "/",
      className: "hover:opacity-80 transition-opacity duration-300",
      children: e.jsx("span", {
        className:
          "font-bold text-xl md:text-2xl text-white hover:text-gray-300 transition-colors duration-300",
        children: "Mayank Dev",
      }),
    }),
  b = "connect@mayank-dev.in",
  $ = () => {
    const [o, a] = h.useState(!1),
      [t, c] = h.useState(!1),
      [l, r] = h.useState(!1),
      s = () => {
        (r(!0),
          u("success"),
          setTimeout(() => {
            r(!1);
          }, 2e3));
      },
      m = () =>
        p(null, null, function* () {
          try {
            (yield navigator.clipboard.writeText(b), s());
          } catch (n) {
            const x = document.createElement("textarea");
            ((x.value = b),
              document.body.appendChild(x),
              x.select(),
              document.execCommand("copy"),
              document.body.removeChild(x),
              s());
          }
        }),
      i = () => {
        const n = !o;
        (a(n), u(n ? "open" : "close"));
      };
    return (
      h.useEffect(() => {
        const n = () => {
          const f = window.scrollY > 100;
          f !== t && c(f);
        };
        return (
          window.addEventListener("scroll", n, { passive: !0 }),
          () => window.removeEventListener("scroll", n)
        );
      }, [t]),
      e.jsxs(e.Fragment, {
        children: [
          e.jsx("a", {
            href: "#main-content",
            className:
              "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[10000] focus:bg-black focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:border-2 focus:border-white focus:no-underline",
            children: "Skip to main content",
          }),
          t && e.jsx("div", { className: "h-16 md:h-20" }),
          e.jsxs("header", {
            className: `
          flex justify-between items-center z-50
          ${t ? "fixed top-2 md:top-3 left-1/2 w-[96%] md:w-[95%] max-w-6xl px-4 md:px-6 py-2 md:py-2.5 bg-black border border-white" : "relative py-4 md:py-6 px-4 md:px-6 lg:px-8"}
        `,
            style: t
              ? {
                  transform: "translate(-50%, 0)",
                  animation:
                    "slideInFromTop 0.35s cubic-bezier(0.23, 1, 0.32, 1) forwards",
                }
              : {},
            children: [
              e.jsx("div", {
                className: `smooth-60fps ${t ? "scale-[0.85]" : "scale-100"}`,
                style: {
                  transition: "transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
                  willChange: "transform",
                },
                children: e.jsx(F, {}),
              }),
              e.jsxs("nav", {
                className:
                  "hidden md:flex items-center space-x-1 lg:space-x-2 absolute left-1/2 transform -translate-x-1/2",
                children: [
                  e.jsx(d, {
                    to: "/projects",
                    className: `nav-link-hover nav-link-hover-dark text-white font-medium px-3 py-1.5 relative ${t ? "text-sm" : "text-sm lg:text-base"}`,
                    style: {
                      transition: "all 0.25s cubic-bezier(0.23, 1, 0.32, 1)",
                    },
                    children: "Work",
                  }),
                  e.jsx(d, {
                    to: "/playground",
                    className: `nav-link-hover nav-link-hover-dark text-white font-medium px-3 py-1.5 relative ${t ? "text-sm" : "text-sm lg:text-base"}`,
                    style: {
                      transition: "all 0.25s cubic-bezier(0.23, 1, 0.32, 1)",
                    },
                    children: "Play",
                  }),
                  e.jsx("a", {
                    href: "https://blog.nischalskanda.tech/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    "data-sound": "nav",
                    className: `nav-link-hover nav-link-hover-dark text-white font-medium px-3 py-1.5 relative ${t ? "text-sm" : "text-sm lg:text-base"}`,
                    style: {
                      transition: "all 0.25s cubic-bezier(0.23, 1, 0.32, 1)",
                    },
                    children: "Blog",
                  }),
                ],
              }),
              e.jsx("div", {
                className: `hidden md:block flex-shrink-0 smooth-60fps ${t ? "scale-[0.9]" : "scale-100"}`,
                style: {
                  transition: "transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
                },
                children: e.jsx(y, { isScrolled: t, darkMode: !0 }),
              }),
              e.jsx("div", {
                className: "md:hidden",
                children: e.jsx("button", {
                  onClick: i,
                  "data-sound": "off",
                  className:
                    "mobile-menu-button p-2 relative transition-all duration-200 focus:outline-none active:scale-95 cursor-pointer",
                  style: {
                    background: "transparent",
                    border: "none",
                    outline: "none",
                    WebkitTapHighlightColor: "transparent",
                  },
                  "aria-label": o
                    ? "Close navigation menu"
                    : "Open navigation menu",
                  "aria-expanded": o,
                  "aria-controls": "mobile-navigation",
                  children: e.jsx(v, {
                    open: o,
                    className: "size-7 text-white",
                    duration: 400,
                    strokeWidth: 2.5,
                  }),
                }),
              }),
              o &&
                e.jsx("div", {
                  id: "mobile-navigation",
                  role: "navigation",
                  "aria-label": "Mobile navigation",
                  className: `
            absolute md:hidden z-50 transition-all duration-300 ease-out left-0 right-0 
            animate-fadeInUp cursor-auto bg-black border border-white
            ${t ? "top-full mt-3 mx-3" : "top-full mt-3 mx-4"}
          `,
                  children: e.jsx("div", {
                    className: "p-5 cursor-auto",
                    children: e.jsxs("nav", {
                      className: "flex flex-col space-y-1",
                      children: [
                        e.jsx(d, {
                          to: "/projects",
                          className:
                            "text-white font-semibold py-3 px-4 transition-all duration-150 hover:bg-white hover:text-black focus:outline-none active:scale-[0.98] text-lg cursor-pointer border-b border-white/20",
                          onClick: () => a(!1),
                          style: { fontFamily: "'Sora', sans-serif" },
                          children: "Work",
                        }),
                        e.jsx(d, {
                          to: "/playground",
                          className:
                            "text-white font-semibold py-3 px-4 transition-all duration-150 hover:bg-white hover:text-black focus:outline-none active:scale-[0.98] text-lg cursor-pointer border-b border-white/20",
                          onClick: () => a(!1),
                          style: { fontFamily: "'Sora', sans-serif" },
                          children: "Play",
                        }),
                        e.jsx("a", {
                          href: "https://blog.nischalskanda.tech/",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          "data-sound": "nav",
                          className:
                            "text-white font-semibold py-3 px-4 transition-all duration-150 hover:bg-white hover:text-black focus:outline-none active:scale-[0.98] text-lg cursor-pointer",
                          onClick: () => a(!1),
                          style: { fontFamily: "'Sora', sans-serif" },
                          children: "Blog",
                        }),
                        e.jsxs("div", {
                          className: "pt-4 mt-2 border-t border-white/20",
                          children: [
                            e.jsx("p", {
                              className:
                                "text-xs font-semibold text-white/50 uppercase tracking-wider mb-3 px-4",
                              style: { fontFamily: "'Sora', sans-serif" },
                              children: "Connect with me",
                            }),
                            e.jsx("div", {
                              className: "px-4 mb-2",
                              children: e.jsx("button", {
                                onClick: m,
                                "data-sound": "off",
                                className: `
                        border-2 border-white font-semibold
                        px-4 py-3 text-sm flex items-center justify-center gap-2 w-full cursor-pointer
                        transition-all duration-150 ease-out
                        active:scale-[0.98]
                        ${l ? "bg-green-100 text-green-700 border-green-600" : "bg-daisy-green text-black hover:bg-white hover:text-black"}
                      `,
                                style: {
                                  borderRadius: 0,
                                  fontFamily: "'Sora', sans-serif",
                                },
                                children: l
                                  ? e.jsxs(e.Fragment, {
                                      children: [
                                        e.jsx(k, { className: "w-4 h-4" }),
                                        e.jsx("span", {
                                          children: "Email Copied!",
                                        }),
                                      ],
                                    })
                                  : e.jsxs(e.Fragment, {
                                      children: [
                                        e.jsx(j, { className: "w-4 h-4" }),
                                        e.jsx("span", {
                                          children: "Copy Email",
                                        }),
                                      ],
                                    }),
                              }),
                            }),
                            e.jsxs("div", {
                              className: "grid grid-cols-2 gap-2 px-4",
                              children: [
                                e.jsxs("a", {
                                  href: "https://x.com/Mayank_Dev23",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className: `
                        bg-black border-2 border-white font-semibold text-white
                        px-3 py-3 text-sm flex items-center justify-center gap-2 cursor-pointer
                        transition-all duration-150 ease-out
                        hover:bg-white hover:text-black 
                        active:scale-[0.98]
                      `,
                                  style: {
                                    borderRadius: 0,
                                    fontFamily: "'Sora', sans-serif",
                                  },
                                  onClick: () => a(!1),
                                  children: [
                                    e.jsx(w, { className: "w-4 h-4" }),
                                    e.jsx("span", { children: "X" }),
                                  ],
                                }),
                                e.jsxs("a", {
                                  href: "https://leetcode.com/u/Mayank_Dev_23/",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className: `
                      px-4 py-3 border-2 border-black bg-white text-black font-medium text-sm
                      hover:bg-[#A2FF86] transition-all duration-200
                      flex items-center gap-2
                    `,
                                  style: {
                                    borderRadius: 0,
                                    fontFamily: "'Sora', sans-serif",
                                  },
                                  onClick: () => a(!1),
                                  children: [
                                    e.jsx(N, { className: "w-4 h-4" }),
                                    e.jsx("span", { children: "LeetCode" }),
                                  ],
                                }),
                                e.jsxs("a", {
                                  href: "https://github.com/Mayank-23-Dev",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className: `
                        bg-black border-2 border-white font-semibold text-white
                        px-3 py-3 text-sm flex items-center justify-center gap-2 cursor-pointer
                        transition-all duration-150 ease-out
                        hover:bg-white hover:text-black 
                        active:scale-[0.98]
                      `,
                                  style: {
                                    borderRadius: 0,
                                    fontFamily: "'Sora', sans-serif",
                                  },
                                  onClick: () => a(!1),
                                  children: [
                                    e.jsx(N, { className: "w-4 h-4" }),
                                    e.jsx("span", { children: "GitHub" }),
                                  ],
                                }),
                                e.jsxs("a", {
                                  href: "https://www.linkedin.com/in/mayankdev23",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className: `
                        col-span-2 bg-black border-2 border-white font-semibold text-white
                        px-3 py-3 text-sm flex items-center justify-center gap-2 cursor-pointer
                        transition-all duration-150 ease-out
                        hover:bg-white hover:text-black 
                        active:scale-[0.98]
                      `,
                                  style: {
                                    borderRadius: 0,
                                    fontFamily: "'Sora', sans-serif",
                                  },
                                  onClick: () => a(!1),
                                  children: [
                                    e.jsx(C, { className: "w-4 h-4" }),
                                    e.jsx("span", { children: "LinkedIn" }),
                                  ],
                                }),
                              ],
                            }),
                            e.jsx("div", {
                              className: "px-4 mt-2",
                              children: e.jsxs("a", {
                                to: "/blog",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: `
                        bg-black border-2 border-white font-semibold text-white
                        px-4 py-3 text-sm flex items-center justify-center gap-2 w-full cursor-pointer
                        transition-all duration-150 ease-out
                        hover:bg-white hover:text-black 
                        active:scale-[0.98]
                      `,
                                style: {
                                  borderRadius: 0,
                                  fontFamily: "'Sora', sans-serif",
                                },
                                onClick: () => a(!1),
                                children: [
                                  e.jsx(S, { className: "w-4 h-4" }),
                                  e.jsx("span", {
                                    children: "Download Resume",
                                  }),
                                ],
                              }),
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
      })
    );
  },
  g = "connect@mayank-dev.in",
  D = () => {
    const [o, a] = h.useState(!1),
      t = [
        { label: "Instagram", href: "https://www.instagram.com/mayankdev.mov/#" },
        { label: "X (Twitter)", href: "https://x.com/Mayank_Dev23" },
        { label: "GitHub", href: "https://github.com/Mayank-23-Dev" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/mayankdev23" },
        { label: "LeetCode", href: "https://leetcode.com/u/Mayank_Dev_23/" },
      ],
      c = () => {
        (a(!0), window.setTimeout(() => a(!1), 1600));
      },
      l = () =>
        p(null, null, function* () {
          try {
            (yield navigator.clipboard.writeText(g), c());
          } catch (r) {
            const s = document.createElement("textarea");
            ((s.value = g),
              s.setAttribute("readonly", ""),
              (s.style.position = "fixed"),
              (s.style.opacity = "0"),
              document.body.appendChild(s),
              s.select(),
              document.execCommand("copy"),
              document.body.removeChild(s),
              c());
          }
        });
    return e.jsx("footer", {
      className:
        "group/footer relative isolate overflow-hidden border-t border-white/8 bg-[#0a0a0a] text-[#e8e0d4]",
      children: e.jsxs("div", {
        className: "footer-scene footer-scene--dark relative z-10",
        children: [
          e.jsx("img", {
            src: "/images/graphics/footer-dark.webp",
            alt: "",
            className: "footer-scene__image footer-art pointer-events-none",
            loading: "eager",
            decoding: "async",
            "aria-hidden": "true",
          }),
          e.jsx("div", {
            className:
              "footer-scene__content container relative z-10 mx-auto px-6",
            children: e.jsxs("div", {
              className: "flex items-start justify-between",
              children: [
                e.jsxs("div", {
                  className: "max-w-md",
                  children: [
                    e.jsx(d, {
                      to: "/",
                      className:
                        "footer-brand inline-block text-xl font-bold leading-none tracking-tight text-[#f0ebe0] transition-transform duration-300 hover:-translate-y-0.5 md:text-3xl lg:text-4xl",
                      children: "Mayank Dev",
                    }),
                    e.jsxs("div", {
                      className:
                        "mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs font-semibold text-[#a89880] md:mt-6 md:gap-x-5 md:gap-y-2 md:text-sm",
                      children: [
                        e.jsx("button", {
                          type: "button",
                          onClick: l,
                          "data-sound": "nav",
                          className:
                            "footer-nav-link footer-nav-link--dark text-left",
                          children: o ? "Copied" : "Email",
                        }),
                        t.map((r) =>
                          e.jsx(
                            "a",
                            {
                              href: r.href,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className:
                                "footer-nav-link footer-nav-link--dark",
                              children: r.label,
                            },
                            r.label,
                          ),
                        ),
                      ],
                    }),
                  ],
                }),
                e.jsx("p", {
                  className: "footer-year footer-year--dark",
                  "aria-label": `Copyright ${new Date().getFullYear()}`,
                  children: new Date().getFullYear(),
                }),
              ],
            }),
          }),
        ],
      }),
    });
  };
export { $ as D, D as a };

