var q = Object.defineProperty,
  Q = Object.defineProperties;
var J = Object.getOwnPropertyDescriptors;
var C = Object.getOwnPropertySymbols;
var T = Object.prototype.hasOwnProperty,
  z = Object.prototype.propertyIsEnumerable;
var R = (t, n, s) =>
    n in t
      ? q(t, n, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (t[n] = s),
  B = (t, n) => {
    for (var s in n || (n = {})) T.call(n, s) && R(t, s, n[s]);
    if (C) for (var s of C(n)) z.call(n, s) && R(t, s, n[s]);
    return t;
  },
  V = (t, n) => Q(t, J(n));
var $ = (t, n) => {
  var s = {};
  for (var o in t) T.call(t, o) && n.indexOf(o) < 0 && (s[o] = t[o]);
  if (t != null && C)
    for (var o of C(t)) n.indexOf(o) < 0 && z.call(t, o) && (s[o] = t[o]);
  return s;
};
var A = (t, n, s) =>
  new Promise((o, l) => {
    var c = (a) => {
        try {
          h(s.next(a));
        } catch (x) {
          l(x);
        }
      },
      d = (a) => {
        try {
          h(s.throw(a));
        } catch (x) {
          l(x);
        }
      },
      h = (a) => (a.done ? o(a.value) : Promise.resolve(a.value).then(c, d));
    h((s = s.apply(t, n)).next());
  });
import { j as e } from "../_uiVendor";
import { a as i, R as Y } from "../_reactVendor";
import { C as Z, E as ee } from "../_iconsVendor";
import { m as y, u as te, A as se } from "../_animationVendor";
import { S as ne } from "../Landing_UI/ScribbleUnderline";
import { c as oe } from "../AppShell";
import { S as _ } from "../Landing_UI/StickyNote";
import { C as ie } from "../Landing_UI/ConnectDropdown";
import { u as re } from "../../Pages/PlaygroundPage";
import { c as U } from "./BookCover";
import "../_sharedIndex";
const ae = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]],
  le = U("chevron-left", ae);
const ce = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]],
  de = U("chevron-right", ce),
  F = ({
    title: t,
    description: n,
    children: s,
    code: o,
    language: l = "tsx",
  }) => {
    const [c, d] = i.useState(50),
      [h, a] = i.useState(!1),
      [x, D] = i.useState(!1),
      g = i.useRef(null),
      N = (r) => {
        (r.stopPropagation(), a(!0));
      },
      E = (r) => {
        (r.stopPropagation(), a(!0));
      },
      v = (r) => {
        r.stopPropagation();
      },
      H = () =>
        A(null, null, function* () {
          try {
            (yield navigator.clipboard.writeText(o),
              D(!0),
              setTimeout(() => D(!1), 2e3));
          } catch (r) {
            console.error("Failed to copy code:", r);
          }
        });
    i.useEffect(() => {
      const r = (m) => {
          if (!h || !g.current) return;
          const j = g.current.getBoundingClientRect(),
            I = (Math.max(0, Math.min(m - j.left, j.width)) / j.width) * 100;
          d(I);
        },
        p = (m) => r(m.clientX),
        S = (m) => r(m.touches[0].clientX),
        b = () => a(!1);
      return (
        h &&
          (window.addEventListener("mousemove", p),
          window.addEventListener("mouseup", b),
          window.addEventListener("touchmove", S),
          window.addEventListener("touchend", b)),
        () => {
          (window.removeEventListener("mousemove", p),
            window.removeEventListener("mouseup", b),
            window.removeEventListener("touchmove", S),
            window.removeEventListener("touchend", b));
        }
      );
    }, [h]);
    const k = o
      .split(
        `
`,
      )
      .map((r, p) =>
        e.jsxs(
          "div",
          {
            className: "table-row",
            children: [
              e.jsx("span", {
                className:
                  "table-cell text-right pr-4 select-none text-stone-400 text-xs w-8",
                children: p + 1,
              }),
              e.jsx("span", {
                className:
                  "table-cell whitespace-pre-wrap font-mono text-sm text-stone-300 break-all",
                children: r,
              }),
            ],
          },
          p,
        ),
      );
    return e.jsxs("div", {
      className: "w-full scroll-mt-24",
      id: t.toLowerCase().replace(/\s+/g, "-"),
      children: [
        e.jsxs("div", {
          className: "mb-3",
          children: [
            e.jsx("h3", {
              className: "text-lg font-bold text-stone-900 font-sora",
              children: t,
            }),
            n &&
              e.jsx("p", {
                className: "text-stone-600 mt-1 text-sm",
                children: n,
              }),
          ],
        }),
        e.jsxs("div", {
          ref: g,
          className:
            "relative h-[280px] w-full rounded-xl overflow-hidden border border-stone-200 shadow-lg bg-white select-none",
          onPointerDown: v,
          children: [
            e.jsxs("div", {
              className:
                "absolute inset-0 bg-[#1e1e1e] overflow-auto custom-scrollbar p-6",
              children: [
                e.jsxs("div", {
                  className:
                    "absolute top-4 right-4 text-stone-500 flex items-center gap-3 text-xs font-mono uppercase tracking-wider",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [e.jsx(Z, { size: 14 }), l],
                    }),
                    e.jsx(y.button, {
                      onClick: H,
                      className:
                        "flex items-center justify-center w-8 h-8 rounded-md bg-stone-700 hover:bg-stone-600 text-stone-300 hover:text-white",
                      title: x ? "Copied!" : "Copy code",
                      animate: {
                        scale: x ? [1, 0.95, 1] : 1,
                        filter: x
                          ? ["blur(0px)", "blur(2px)", "blur(0px)"]
                          : "blur(0px)",
                      },
                      transition: { duration: 0.3, ease: "easeOut" },
                      whileHover: { scale: 1.05 },
                      whileTap: { scale: 0.95 },
                      children: e.jsx(
                        y.div,
                        {
                          initial: {
                            opacity: 0,
                            scale: 0.5,
                            filter: "blur(4px)",
                          },
                          animate: {
                            opacity: 1,
                            scale: 1,
                            filter: "blur(0px)",
                          },
                          exit: { opacity: 0, scale: 0.5, filter: "blur(4px)" },
                          transition: { duration: 0.2 },
                          children: x
                            ? e.jsx("svg", {
                                width: "16",
                                height: "16",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "#4ade80",
                                strokeWidth: "2.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: e.jsx("polyline", {
                                  points: "20 6 9 17 4 12",
                                }),
                              })
                            : e.jsxs("svg", {
                                width: "16",
                                height: "16",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: [
                                  e.jsx("rect", {
                                    x: "9",
                                    y: "9",
                                    width: "13",
                                    height: "13",
                                    rx: "2",
                                    ry: "2",
                                  }),
                                  e.jsx("path", {
                                    d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1",
                                  }),
                                ],
                              }),
                        },
                        x ? "check" : "copy",
                      ),
                    }),
                  ],
                }),
                e.jsx("div", { className: "table w-full", children: k }),
              ],
            }),
            e.jsxs("div", {
              className:
                "absolute inset-0 bg-stone-50 flex items-center justify-center overflow-hidden",
              style: { clipPath: `inset(0 ${100 - c}% 0 0)` },
              children: [
                e.jsxs("div", {
                  className:
                    "absolute top-4 left-4 text-stone-400 flex items-center gap-2 text-xs font-mono uppercase tracking-wider z-10",
                  children: [e.jsx(ee, { size: 14 }), "Preview"],
                }),
                e.jsx("div", {
                  className: "absolute inset-0 opacity-[0.03]",
                  style: {
                    backgroundImage:
                      "radial-gradient(#000 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  },
                }),
                e.jsx("div", {
                  className:
                    "relative z-10 p-8 w-full h-full flex items-center justify-center",
                  children: s,
                }),
              ],
            }),
            e.jsx("div", {
              className:
                "absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_10px_rgba(0,0,0,0.2)] hover:bg-blue-500 transition-colors",
              style: { left: `${c}%` },
              onMouseDown: N,
              onTouchStart: E,
              onPointerDown: v,
              children: e.jsx("div", {
                className:
                  "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center border border-stone-200 text-stone-400",
                children: e.jsx("svg", {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  children: e.jsx("path", { d: "M9 18l6-6-6-6" }),
                }),
              }),
            }),
          ],
        }),
        e.jsxs("div", {
          className:
            "mt-2 flex justify-between text-xs text-stone-400 font-mono",
          children: [
            e.jsx("span", { children: "Preview" }),
            e.jsx("span", { children: "Code" }),
          ],
        }),
      ],
    });
  },
  G = i.forwardRef((D, x) => {
    var g = D,
      {
        children: t,
        as: n = "span",
        triggerType: s = "inView",
        transition: o = { type: "spring", duration: 1, delay: 0, bounce: 0 },
        useInViewOptions: l = { once: !0, initial: !1, amount: 0.1 },
        className: c,
        highlightColor: d = "hsl(25, 90%, 80%)",
        direction: h = "ltr",
      } = g,
      a = $(g, [
        "children",
        "as",
        "triggerType",
        "transition",
        "useInViewOptions",
        "className",
        "highlightColor",
        "direction",
      ]);
    const N = i.useRef(null),
      [E, v] = i.useState(!1),
      [H, k] = i.useState(!1),
      [r, p] = i.useState(h);
    i.useEffect(() => {
      p(h);
    }, [h]);
    const S = te(N, l),
      b = s === "inView" ? S : !1,
      [m, j] = i.useState(0);
    i.useImperativeHandle(x, () => ({
      animate: (u) => {
        (u && p(u), v(!0));
      },
      reset: () => {
        (v(!1), j((u) => u + 1));
      },
    }));
    const M =
        s === "hover" ? H : s === "inView" ? b : s === "ref" ? E : s === "auto",
      I = n || "span",
      L = (u) => {
        switch (r) {
          case "ltr":
            return u ? "100% 100%" : "0% 100%";
          case "rtl":
            return u ? "100% 100%" : "0% 100%";
          case "ttb":
            return u ? "100% 100%" : "100% 0%";
          case "btt":
            return u ? "100% 100%" : "100% 0%";
          default:
            return u ? "100% 100%" : "0% 100%";
        }
      },
      W = () => {
        switch (r) {
          case "ltr":
            return "0% 0%";
          case "rtl":
            return "100% 0%";
          case "ttb":
            return "0% 0%";
          case "btt":
            return "0% 100%";
          default:
            return "0% 0%";
        }
      },
      P = i.useMemo(() => L(M), [M, r]),
      X = i.useMemo(() => L(!1), [r]),
      K = i.useMemo(() => W(), [r]),
      O = {
        backgroundImage: `linear-gradient(${d}, ${d})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: K,
        backgroundSize: P,
        boxDecorationBreak: "clone",
        WebkitBoxDecorationBreak: "clone",
      };
    return e.jsx(
      I,
      V(
        B(
          {
            ref: N,
            onMouseEnter: () => s === "hover" && k(!0),
            onMouseLeave: () => s === "hover" && k(!1),
          },
          a,
        ),
        {
          children: e.jsx(
            y.span,
            {
              className: oe("inline", c),
              style: O,
              animate: { backgroundSize: P },
              initial: { backgroundSize: X },
              transition: o,
              children: t,
            },
            m,
          ),
        },
      ),
    );
  });
G.displayName = "TextHighlighter";
const he = () => {
    const [t, n] = i.useState(0),
      s = () => n((o) => o + 1);
    return e.jsxs("div", {
      className: "flex flex-col items-center gap-3",
      children: [
        e.jsxs("h2", {
          className:
            "text-2xl md:text-3xl font-bold text-stone-900 leading-tight",
          children: [
            "Text",
            " ",
            e.jsx(
              "span",
              {
                className:
                  "relative inline-block handwritten-highlight transform rotate-1 animate-highlight cursor-pointer",
                "data-text": "Highlight",
                style: { "--highlight-color": "#86efac" },
                onClick: s,
                title: "Click to replay",
                children: "Highlight",
              },
              t,
            ),
          ],
        }),
        e.jsx("button", {
          onClick: s,
          className:
            "text-xs text-stone-500 hover:text-stone-800 underline decoration-stone-300 underline-offset-4",
          children: "Replay",
        }),
      ],
    });
  },
  xe = () => {
    const t = i.useRef(null);
    Y.useEffect(() => {
      const s = setTimeout(() => {
        var o;
        (o = t.current) == null || o.animate();
      }, 300);
      return () => clearTimeout(s);
    }, []);
    const n = () => {
      var s;
      ((s = t.current) == null || s.reset(),
        setTimeout(() => {
          var o;
          (o = t.current) == null || o.animate();
        }, 100));
    };
    return e.jsxs("div", {
      className: "flex flex-col items-center gap-3",
      children: [
        e.jsxs("p", {
          className: "text-base text-stone-700 text-center leading-relaxed",
          children: [
            "Products built on",
            " ",
            e.jsx(G, {
              ref: t,
              highlightColor: "#FFE4B8",
              triggerType: "ref",
              children: "solid research",
            }),
          ],
        }),
        e.jsx("button", {
          onClick: n,
          className:
            "text-xs text-stone-500 hover:text-stone-800 underline decoration-stone-300 underline-offset-4",
          children: "Replay",
        }),
      ],
    });
  },
  w = {
    scribbleUnderline: `// SVG filters create the "wobble" texture
<filter id="scribble-wobble">
  <feTurbulence baseFrequency="0.04 0.08" />
  <feDisplacementMap scale="1.5" />
</filter>

// The stroke animation
<path
  d="M2,15 Q18,19 34,15 T66,15"
  style={{
    strokeDashoffset: isHovered ? 0 : 100,
    filter: 'url(#scribble-wobble)',
  }}
/>`,
    textHighlighter: `// Animated background gradient
const highlightStyle = {
  backgroundImage: \`linear-gradient(\${color}, \${color})\`,
  backgroundSize: isInView ? "100% 100%" : "0% 100%",
  transition: "background-size 0.5s ease-out",
};`,
    stickyNote: `// Tape Effect
<div className="w-12 h-4 bg-yellow-100
     opacity-80 transform -rotate-12">
</div>

// Peel animation on scroll
.peel-animate {
  animation: peelNote 0.9s ease-out forwards;
}`,
    button: `// Daisy Button - Brutalist Style
.daisy-button {
  box-shadow: 4px 4px 0px 0px rgba(0,0,0,1);
}

.daisy-button:hover {
  transform: translate(4px, 4px);
  box-shadow: 0px 0px 0px 0px rgba(0,0,0,1);
}`,
    dropdown: `// Animated Dropdown
<motion.div
  initial={{ opacity: 0, y: -10, scale: 0.95 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 400,
    damping: 25,
  }}
/>`,
    obsessed: `// CSS Handwritten Highlight
.handwritten-highlight::before {
  background: var(--highlight-color);
  transform: scaleX(0);
  border-radius: 255px 15px 225px 15px /
                15px 225px 15px 255px;
}

.animate-highlight::before {
  animation: highlight-swipe 0.6s forwards;
}`,
  },
  f = [
    {
      title: "Scribble Underline",
      description: "Hand-drawn style underline with SVG wobble filter.",
      code: w.scribbleUnderline,
      content: e.jsx("h2", {
        className: "text-2xl font-bold text-stone-800 text-center",
        children: e.jsx(ne, {
          trigger: "hover",
          color: "#1D4ED8",
          children: "Design with purpose",
        }),
      }),
    },
    {
      title: "Handwritten Highlight",
      description: "Marker-style highlight with CSS transforms.",
      code: w.obsessed,
      content: e.jsx(he, {}),
    },
    {
      title: "Text Highlighter",
      description: "Animated marker effect on scroll.",
      code: w.textHighlighter,
      content: e.jsx(xe, {}),
    },
    {
      title: "Sticky Note",
      description: "Interactive notes with tape and peel animation.",
      code: w.stickyNote,
      content: e.jsxs("div", {
        className: "flex gap-4 justify-center items-center p-4",
        children: [
          e.jsx(_, {
            content: "UX Research",
            color: "yellow",
            rotate: "left",
            pinType: "tape",
            className:
              "w-28 h-28 text-xs font-bold text-center flex items-center justify-center",
          }),
          e.jsx(_, {
            content: "Visual Design",
            color: "mint",
            rotate: "right",
            pinType: "tape",
            className:
              "w-28 h-28 text-xs font-bold text-center flex items-center justify-center",
          }),
        ],
      }),
    },
    {
      title: "Daisy Button",
      description: "Neo-brutalist press effect.",
      code: w.button,
      content: e.jsxs("a", {
        href: "#",
        onClick: (t) => t.preventDefault(),
        className: "daisy-button inline-flex items-center gap-2",
        children: [
          e.jsx("span", { children: "Let's work together" }),
          e.jsx("span", { children: "→" }),
        ],
      }),
    },
    {
      title: "Connect Dropdown",
      description: "Spring-animated dropdown with staggered reveals.",
      code: w.dropdown,
      content: e.jsx("div", {
        className: "flex justify-center",
        children: e.jsx(ie, {}),
      }),
    },
  ],
  ue = () => {
    const [t, n] = i.useState(0),
      s = () => {
        n((c) => (c + 1) % f.length);
      },
      o = () => {
        n((c) => (c - 1 + f.length) % f.length);
      },
      l = f[t];
    return e.jsxs("div", {
      className: "relative",
      children: [
        e.jsx("div", {
          className: "relative min-h-[320px]",
          children: e.jsx(se, {
            mode: "wait",
            children: e.jsx(
              y.div,
              {
                initial: { opacity: 0, scale: 0.98 },
                animate: { opacity: 1, scale: 1 },
                exit: { opacity: 0, scale: 0.98 },
                transition: { duration: 0.2, ease: "easeOut" },
                className: "w-full",
                children: e.jsx(F, {
                  title: l.title,
                  description: l.description,
                  code: l.code,
                  children: l.content,
                }),
              },
              t,
            ),
          }),
        }),
        e.jsxs("div", {
          className: "flex items-center justify-between mt-4 px-2",
          children: [
            e.jsx("button", {
              onClick: o,
              className:
                "p-2 rounded-full bg-stone-100 hover:bg-stone-200 active:bg-stone-300 transition-colors",
              "aria-label": "Previous component",
              children: e.jsx(le, { className: "w-5 h-5 text-stone-600" }),
            }),
            e.jsx("div", {
              className: "flex items-center gap-2",
              children: f.map((c, d) =>
                e.jsx(
                  "button",
                  {
                    onClick: () => n(d),
                    className: `h-2 rounded-full transition-all duration-200 ${d === t ? "bg-stone-800 w-4" : "bg-stone-300 hover:bg-stone-400 w-2"}`,
                    "aria-label": `Go to component ${d + 1}`,
                  },
                  d,
                ),
              ),
            }),
            e.jsx("button", {
              onClick: s,
              className:
                "p-2 rounded-full bg-stone-100 hover:bg-stone-200 active:bg-stone-300 transition-colors",
              "aria-label": "Next component",
              children: e.jsx(de, { className: "w-5 h-5 text-stone-600" }),
            }),
          ],
        }),
        e.jsxs("p", {
          className: "text-center text-xs text-stone-400 mt-2",
          children: [t + 1, " / ", f.length],
        }),
      ],
    });
  },
  pe = () =>
    e.jsx("div", {
      className: "grid grid-cols-3 gap-8",
      children: f.map((t, n) =>
        e.jsx(
          y.div,
          {
            initial: { opacity: 0, scale: 0.95 },
            animate: { opacity: 1, scale: 1 },
            transition: { duration: 0.4, delay: n * 0.1, ease: "easeOut" },
            children: e.jsx(F, {
              title: t.title,
              description: t.description,
              code: t.code,
              children: t.content,
            }),
          },
          t.title,
        ),
      ),
    }),
  De = ({ className: t }) => {
    const n = re();
    return e.jsx("div", {
      className: t,
      children: n ? e.jsx(ue, {}) : e.jsx(pe, {}),
    });
  };
export { De as ComponentsShowcase, De as default };


