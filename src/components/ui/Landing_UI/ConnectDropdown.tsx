var v = (m, f, n) =>
  new Promise((a, i) => {
    var u = (r) => {
        try {
          o(n.next(r));
        } catch (l) {
          i(l);
        }
      },
      d = (r) => {
        try {
          o(n.throw(r));
        } catch (l) {
          i(l);
        }
      },
      o = (r) => (r.done ? a(r.value) : Promise.resolve(r.value).then(u, d));
    o((n = n.apply(m, f)).next());
  });
import { j as t } from "../_uiVendor";
import { a as c } from "../_reactVendor";
import { b as _ } from "../_sharedIndex";
import { p as h } from "../AppShell";
import { m as x, A as j } from "../_animationVendor";
import { d as N, G as C, L as E, F as L } from "../_iconsVendor";
const y = "connect@mayank-dev.in",
  w = [
    {
      label: "Email",
      Icon: t.jsx(N, { className: "w-4 h-4" }),
      action: "copy-email",
    },
    {
      label: "Contact",
      href: "/contact",
      Icon: t.jsxs("svg", {
        className: "w-4 h-4",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
          t.jsx("path", {
            d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
          }),
        ],
      }),
      external: !1,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/mayankdev.mov/#",
      Icon: t.jsxs("svg", {
        className: "w-4 h-4",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
          t.jsx("rect", {
            x: "2",
            y: "2",
            width: "20",
            height: "20",
            rx: "5",
            ry: "5",
          }),
          t.jsx("path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" }),
          t.jsx("line", { x1: "17.5", y1: "6.5", x2: "17.51", y2: "6.5" }),
        ],
      }),
      external: !0,
    },
    {
      label: "X (Twitter)",
      href: "https://x.com/Mayank_Dev23",
      Icon: t.jsx(_, { className: "w-4 h-4" }),
      external: !0,
      tag: "active",
    },
    {
      label: "GitHub",
      href: "https://github.com/Mayank-23-Dev",
      Icon: t.jsx(C, { className: "w-4 h-4" }),
      external: !0,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mayankdev23",
      Icon: t.jsx(E, { className: "w-4 h-4" }),
      external: !0,
    },
    {
      label: "LeetCode",
      href: "https://leetcode.com/u/Mayank_Dev_23/",
      Icon: t.jsx(C, { className: "w-4 h-4" }),
      external: !0,
    },
    {
      label: "Resume",
      href: "/resume",
      Icon: t.jsx(L, { className: "w-4 h-4" }),
      external: !1,
    },
  ],
  W = ({ className: m = "", isScrolled: f = !1, darkMode: n = !1 }) => {
    const [a, i] = c.useState(!1),
      [u, d] = c.useState(!1),
      o = c.useRef(null),
      r = () => {
        const e = !a;
        (i(e), h(e ? "open" : "close"));
      },
      l = () => {
        (d(!0),
          h("success"),
          setTimeout(() => {
            d(!1);
          }, 2e3));
      },
      k = () =>
        v(null, null, function* () {
          try {
            (yield navigator.clipboard.writeText(y), l());
          } catch (e) {
            const s = document.createElement("textarea");
            ((s.value = y),
              document.body.appendChild(s),
              s.select(),
              document.execCommand("copy"),
              document.body.removeChild(s),
              l());
          }
        }),
      b = (e) => {
        e.action === "copy-email"
          ? (k(),
            setTimeout(() => {
              i(!1);
            }, 1500))
          : i(!1);
      };
    return (
      c.useEffect(() => {
        const e = (s) => {
          o.current && !o.current.contains(s.target) && (h("close"), i(!1));
        };
        return (
          a && document.addEventListener("mousedown", e),
          () => {
            document.removeEventListener("mousedown", e);
          }
        );
      }, [a]),
      c.useEffect(() => {
        const e = (s) => {
          s.key === "Escape" && (h("close"), i(!1));
        };
        return (
          a && document.addEventListener("keydown", e),
          () => {
            document.removeEventListener("keydown", e);
          }
        );
      }, [a]),
      c.useEffect(() => {
        a || d(!1);
      }, [a]),
      t.jsxs("div", {
        ref: o,
        className: `relative ${m}`,
        children: [
          t.jsxs("button", {
            onClick: r,
            "data-sound": "off",
            "aria-expanded": a,
            "aria-haspopup": "true",
            className: `
          inline-flex items-center gap-1.5
          px-3 lg:px-4 py-1.5 text-sm font-semibold
          ${
            n
              ? `bg-daisy-green border-2 border-white text-black
               shadow-[3px_3px_0px_0px_rgba(255,255,255,0.9)] 
               hover:translate-x-[3px] hover:translate-y-[3px] 
               hover:shadow-[0px_0px_0px_0px_rgba(255,255,255,0.9)] hover:bg-white 
               active:translate-x-[3px] active:translate-y-[3px] 
               active:shadow-[0px_0px_0px_0px_rgba(255,255,255,0.9)]
               focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black`
              : `bg-daisy-green border-2 border-black text-black
               shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] 
               hover:translate-x-[3px] hover:translate-y-[3px] 
               hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] hover:bg-white 
               active:translate-x-[3px] active:translate-y-[3px] 
               active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)]
               focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2`
          }
        `,
            style: {
              transition: "all 0.15s cubic-bezier(0.23, 1, 0.32, 1)",
              borderRadius: 0,
              letterSpacing: "0.025em",
              fontFamily: "'Sora', sans-serif",
            },
            children: [
              t.jsx("span", { children: "CV & Socials" }),
              t.jsx(x.svg, {
                animate: { rotate: a ? 180 : 0 },
                transition: {
                  duration: 0.3,
                  ease: "easeInOut",
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                },
                className: "w-3.5 h-3.5",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                strokeWidth: 2.5,
                children: t.jsx("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "M19 9l-7 7-7-7",
                }),
              }),
            ],
          }),
          t.jsx(j, {
            children:
              a &&
              t.jsx(x.div, {
                initial: { opacity: 0, y: -10, scale: 0.95 },
                animate: { opacity: 1, y: 0, scale: 1 },
                exit: { opacity: 0, y: -10, scale: 0.95 },
                transition: {
                  duration: 0.2,
                  type: "spring",
                  stiffness: 400,
                  damping: 25,
                },
                className: "absolute top-full right-0 mt-2 z-50",
                children: t.jsx("div", {
                  className: `overflow-hidden ${n ? "bg-black border-2 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,0.9)]" : "bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"}`,
                  style: { minWidth: "180px" },
                  children: w.map((e, s) => {
                    const g = e.action === "copy-email",
                      p = g && u;
                    return g
                      ? t.jsxs(
                          x.button,
                          {
                            initial: { opacity: 0, x: 10 },
                            animate: { opacity: 1, x: 0 },
                            exit: { opacity: 0, x: 10 },
                            transition: { duration: 0.15, delay: s * 0.05 },
                            onClick: () => b(e),
                            "data-sound": "off",
                            className: `
                        flex items-center gap-3 px-4 py-3 w-full
                        text-sm font-medium 
                        transition-colors duration-150
                        ${n ? "border-b border-white/20" : "border-b border-black/10"}
                        ${p ? "bg-green-100 text-green-700" : n ? "text-white hover:bg-daisy-green hover:text-black" : "text-black hover:bg-daisy-green"}
                      `,
                            style: { fontFamily: "'Sora', sans-serif" },
                            children: [
                              t.jsx("span", {
                                className: "flex-shrink-0",
                                children: p
                                  ? t.jsx(
                                      x.svg,
                                      {
                                        initial: { scale: 0, rotate: -180 },
                                        animate: { scale: 1, rotate: 0 },
                                        transition: {
                                          duration: 0.3,
                                          type: "spring",
                                          stiffness: 400,
                                          damping: 15,
                                        },
                                        className: "w-4 h-4 text-green-600",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        strokeWidth: 2.5,
                                        children: t.jsx("path", {
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round",
                                          d: "M5 13l4 4L19 7",
                                        }),
                                      },
                                      "check",
                                    )
                                  : e.Icon,
                              }),
                              t.jsx("span", {
                                className: "flex-1 text-left",
                                children: p ? "Copied!" : e.label,
                              }),
                              !p &&
                                t.jsx("svg", {
                                  className: "w-3 h-3 ml-auto opacity-40",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  stroke: "currentColor",
                                  strokeWidth: 2,
                                  children: t.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z",
                                  }),
                                }),
                            ],
                          },
                          e.label,
                        )
                      : t.jsxs(
                          x.a,
                          {
                            href: e.href,
                            target: e.external ? "_blank" : void 0,
                            rel: e.external ? "noopener noreferrer" : void 0,
                            initial: { opacity: 0, x: 10 },
                            animate: { opacity: 1, x: 0 },
                            exit: { opacity: 0, x: 10 },
                            transition: { duration: 0.15, delay: s * 0.05 },
                            onClick: () => b(e),
                            className: `
                      flex items-center gap-3 px-4 py-3 
                      text-sm font-medium 
                      transition-colors duration-150
                      ${n ? "text-white hover:bg-daisy-green hover:text-black" : "text-black hover:bg-daisy-green"}
                      ${s !== w.length - 1 ? (n ? "border-b border-white/20" : "border-b border-black/10") : ""}
                    `,
                            style: { fontFamily: "'Sora', sans-serif" },
                            children: [
                              t.jsx("span", {
                                className: "flex-shrink-0",
                                children: e.Icon,
                              }),
                              t.jsxs("span", {
                                className: "relative",
                                children: [
                                  e.label,
                                  e.tag &&
                                    t.jsx("span", {
                                      className:
                                        "absolute -top-2 -right-8 text-[7px] font-semibold uppercase px-1 py-px bg-daisy-green text-black rounded-[2px] leading-none",
                                      children: e.tag,
                                    }),
                                ],
                              }),
                              e.external &&
                                t.jsx("svg", {
                                  className: "w-3 h-3 ml-auto opacity-40",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  stroke: "currentColor",
                                  strokeWidth: 2,
                                  children: t.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14",
                                  }),
                                }),
                            ],
                          },
                          e.label,
                        );
                  }),
                }),
              }),
          }),
        ],
      })
    );
  };
export { W as C };

