var f = (i, o, t) =>
  new Promise((s, m) => {
    var x = (a) => {
        try {
          r(t.next(a));
        } catch (c) {
          m(c);
        }
      },
      b = (a) => {
        try {
          r(t.throw(a));
        } catch (c) {
          m(c);
        }
      },
      r = (a) => (a.done ? s(a.value) : Promise.resolve(a.value).then(x, b));
    r((t = t.apply(i, o)).next());
  });
import { j as e } from "../_uiVendor";
import { L as n, a as p } from "../_reactVendor";
import { M as v } from "./MenuToggleIcon";
import { C as y } from "./ConnectDropdown";
import { b as k } from "../_sharedIndex";
import { p as h } from "../AppShell";
import { w as j, d as w, G as N, L as C, F as S } from "../_iconsVendor";
const F = () =>
    e.jsx(n, {
      to: "/",
      className: "hover:opacity-80 transition-opacity duration-300",
      children: e.jsx("span", {
        className:
          "font-bold text-xl md:text-2xl text-black hover:text-gray-700 transition-colors duration-300",
        children: "Mayank Dev",
      }),
    }),
  g = "connect@mayank-dev.in",
  H = ({ disableSticky: i = !1 }) => {
    const [o, t] = p.useState(!1),
      [s, m] = p.useState(!1),
      [x, b] = p.useState(!1),
      r = () => {
        (b(!0),
          h("success"),
          setTimeout(() => {
            b(!1);
          }, 2e3));
      },
      a = () =>
        f(null, null, function* () {
          try {
            (yield navigator.clipboard.writeText(g), r());
          } catch (l) {
            const d = document.createElement("textarea");
            ((d.value = g),
              document.body.appendChild(d),
              d.select(),
              document.execCommand("copy"),
              document.body.removeChild(d),
              r());
          }
        }),
      c = () => {
        const l = !o;
        (t(l), h(l ? "open" : "close"));
      };
    return (
      p.useEffect(() => {
        if (i) return;
        const l = () => {
          const u = window.scrollY > 100;
          u !== s && m(u);
        };
        return (
          window.addEventListener("scroll", l, { passive: !0 }),
          () => window.removeEventListener("scroll", l)
        );
      }, [s, i]),
      e.jsxs(e.Fragment, {
        children: [
          e.jsx("a", {
            href: "#main-content",
            className:
              "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[10000] focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded-md focus:border-2 focus:border-black focus:no-underline",
            children: "Skip to main content",
          }),
          !i && s && e.jsx("div", { className: "h-16 md:h-20" }),
          e.jsxs("header", {
            className: `
          flex justify-between items-center z-50
          ${s ? "fixed top-2 md:top-3 left-1/2 w-[96%] md:w-[95%] max-w-6xl px-4 md:px-6 py-2 md:py-2.5 bg-white border-2 border-black" : "relative py-4 md:py-6 px-4 md:px-6 lg:px-8"}
        `,
            style: s
              ? {
                  transform: "translate(-50%, 0)",
                  animation:
                    "slideInFromTop 0.35s cubic-bezier(0.23, 1, 0.32, 1) forwards",
                }
              : {},
            children: [
              e.jsx("div", {
                className: `smooth-60fps ${s ? "scale-[0.85]" : "scale-100"}`,
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
                  e.jsx(n, {
                    to: "/projects",
                    className: `nav-link-hover font-semibold px-3 py-1.5 relative ${s ? "text-sm" : "text-base lg:text-lg"}`,
                    style: {
                      transition: "all 0.25s cubic-bezier(0.23, 1, 0.32, 1)",
                    },
                    children: "Work",
                  }),
                  e.jsx(n, {
                    to: "/life",
                    className: `nav-link-hover font-semibold px-3 py-1.5 relative ${s ? "text-sm" : "text-base lg:text-lg"}`,
                    style: {
                      transition: "all 0.25s cubic-bezier(0.23, 1, 0.32, 1)",
                    },
                    children: "Life",
                  }),
                  e.jsx(n, {
                    to: "/playground",
                    className: `nav-link-hover font-semibold px-3 py-1.5 relative ${s ? "text-sm" : "text-base lg:text-lg"}`,
                    style: {
                      transition: "all 0.25s cubic-bezier(0.23, 1, 0.32, 1)",
                    },
                    children: "Play",
                  }),
                  e.jsx(n, {
                    to: "/blog",
                    "data-sound": "nav",
                    className: `nav-link-hover font-semibold px-3 py-1.5 relative ${s ? "text-sm" : "text-base lg:text-lg"}`,
                    style: {
                      transition: "all 0.25s cubic-bezier(0.23, 1, 0.32, 1)",
                    },
                    children: "Blogs",
                  }),
                ],
              }),
              e.jsx("div", {
                className: `hidden md:block flex-shrink-0 smooth-60fps ${s ? "scale-[0.9]" : "scale-100"}`,
                style: {
                  transition: "transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
                },
                children: e.jsx(y, { isScrolled: s }),
              }),
              e.jsx("div", {
                className: "md:hidden",
                children: e.jsx("button", {
                  onClick: c,
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
                    className: "size-7 text-black",
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
            animate-fadeInUp cursor-auto bg-[#faf9f6] border-2 border-black
            ${s ? "top-full mt-3 mx-3" : "top-full mt-3 mx-4"}
          `,
                  children: e.jsx("div", {
                    className: "p-5 cursor-auto",
                    children: e.jsxs("nav", {
                      className: "flex flex-col space-y-1",
                      children: [
                        e.jsx(n, {
                          to: "/projects",
                          className:
                            "text-black font-semibold py-3 px-4 transition-all duration-150 hover:bg-black hover:text-white focus:outline-none active:scale-[0.98] text-lg cursor-pointer border-b border-black/10",
                          onClick: () => t(!1),
                          style: { fontFamily: "'Sora', sans-serif" },
                          children: "Work",
                        }),
                        e.jsx(n, {
                          to: "/life",
                          className:
                            "text-black font-semibold py-3 px-4 transition-all duration-150 hover:bg-black hover:text-white focus:outline-none active:scale-[0.98] text-lg cursor-pointer border-b border-black/10",
                          onClick: () => t(!1),
                          style: { fontFamily: "'Sora', sans-serif" },
                          children: "Life",
                        }),
                        e.jsx(n, {
                          to: "/playground",
                          className:
                            "text-black font-semibold py-3 px-4 transition-all duration-150 hover:bg-black hover:text-white focus:outline-none active:scale-[0.98] text-lg cursor-pointer border-b border-black/10",
                          onClick: () => t(!1),
                          style: { fontFamily: "'Sora', sans-serif" },
                          children: "Play",
                        }),
                        e.jsx(n, {
                          to: "/blog",
                          "data-sound": "nav",
                          className:
                            "text-black font-semibold py-3 px-4 transition-all duration-150 hover:bg-black hover:text-white focus:outline-none active:scale-[0.98] text-lg cursor-pointer border-b border-black/10",
                          onClick: () => t(!1),
                          style: { fontFamily: "'Sora', sans-serif" },
                          children: "Blogs",
                        }),
                        e.jsx(n, {
                          to: "/contact",
                          "data-sound": "nav",
                          className:
                            "text-black font-semibold py-3 px-4 transition-all duration-150 hover:bg-black hover:text-white focus:outline-none active:scale-[0.98] text-lg cursor-pointer",
                          onClick: () => t(!1),
                          style: { fontFamily: "'Sora', sans-serif" },
                          children: "Contact",
                        }),
                        e.jsxs("div", {
                          className: "pt-4 mt-2 border-t border-black/10",
                          children: [
                            e.jsx("p", {
                              className:
                                "text-xs font-semibold text-black/50 uppercase tracking-wider mb-3 px-4",
                              style: { fontFamily: "'Sora', sans-serif" },
                              children: "Connect with me",
                            }),
                            e.jsx("div", {
                              className: "px-4 mb-2",
                              children: e.jsx("button", {
                                onClick: a,
                                "data-sound": "off",
                                className: `
                        border-2 border-black font-semibold
                        px-4 py-3 text-sm flex items-center justify-center gap-2 w-full cursor-pointer
                        transition-all duration-150 ease-out
                        active:scale-[0.98]
                        ${x ? "bg-green-100 text-green-700 border-green-600" : "bg-daisy-green text-black hover:bg-black hover:text-white"}
                      `,
                                style: {
                                  borderRadius: 0,
                                  fontFamily: "'Sora', sans-serif",
                                },
                                children: x
                                  ? e.jsxs(e.Fragment, {
                                      children: [
                                        e.jsx(j, { className: "w-4 h-4" }),
                                        e.jsx("span", {
                                          children: "Email Copied!",
                                        }),
                                      ],
                                    })
                                  : e.jsxs(e.Fragment, {
                                      children: [
                                        e.jsx(w, { className: "w-4 h-4" }),
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
                                  href: "https://www.instagram.com/mayankdev.mov/#",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className: `
                        bg-white border-2 border-black font-semibold text-black
                        px-3 py-3 text-sm flex items-center justify-center gap-2 cursor-pointer
                        transition-all duration-150 ease-out
                        hover:bg-black hover:text-white 
                        active:scale-[0.98]
                      `,
                                  style: {
                                    borderRadius: 0,
                                    fontFamily: "'Sora', sans-serif",
                                  },
                                  onClick: () => t(!1),
                                  children: [
                                    e.jsxs("svg", {
                                      className: "w-4 h-4",
                                      viewBox: "0 0 24 24",
                                      fill: "none",
                                      stroke: "currentColor",
                                      strokeWidth: "2",
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      children: [
                                        e.jsx("rect", {
                                          x: "2",
                                          y: "2",
                                          width: "20",
                                          height: "20",
                                          rx: "5",
                                          ry: "5",
                                        }),
                                        e.jsx("path", {
                                          d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
                                        }),
                                        e.jsx("line", {
                                          x1: "17.5",
                                          y1: "6.5",
                                          x2: "17.51",
                                          y2: "6.5",
                                        }),
                                      ],
                                    }),
                                    e.jsx("span", { children: "Instagram" }),
                                  ],
                                }),
                                e.jsxs("a", {
                                  href: "https://x.com/Mayank_Dev23",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className: `
                        bg-white border-2 border-black font-semibold text-black
                        px-3 py-3 text-sm flex items-center justify-center gap-2 cursor-pointer
                        transition-all duration-150 ease-out
                        hover:bg-black hover:text-white 
                        active:scale-[0.98]
                      `,
                                  style: {
                                    borderRadius: 0,
                                    fontFamily: "'Sora', sans-serif",
                                  },
                                  onClick: () => t(!1),
                                  children: [
                                    e.jsx(k, { className: "w-4 h-4" }),
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
                                  onClick: () => t(!1),
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
                        bg-white border-2 border-black font-semibold text-black
                        px-3 py-3 text-sm flex items-center justify-center gap-2 cursor-pointer
                        transition-all duration-150 ease-out
                        hover:bg-black hover:text-white 
                        active:scale-[0.98]
                      `,
                                  style: {
                                    borderRadius: 0,
                                    fontFamily: "'Sora', sans-serif",
                                  },
                                  onClick: () => t(!1),
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
                        bg-white border-2 border-black font-semibold text-black
                        px-3 py-3 text-sm flex items-center justify-center gap-2 cursor-pointer
                        transition-all duration-150 ease-out
                        hover:bg-black hover:text-white 
                        active:scale-[0.98]
                      `,
                                  style: {
                                    borderRadius: 0,
                                    fontFamily: "'Sora', sans-serif",
                                  },
                                  onClick: () => t(!1),
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
                                href: "/resume",
                                className: `
                        bg-white border-2 border-black font-semibold text-black
                        px-4 py-3 text-sm flex items-center justify-center gap-2 w-full cursor-pointer
                        transition-all duration-150 ease-out
                        hover:bg-black hover:text-white 
                        active:scale-[0.98]
                      `,
                                style: {
                                  borderRadius: 0,
                                  fontFamily: "'Sora', sans-serif",
                                },
                                onClick: () => t(!1),
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
  };
export { H };


