var C = Object.defineProperty;
var S = Object.getOwnPropertySymbols;
var k = Object.prototype.hasOwnProperty,
  E = Object.prototype.propertyIsEnumerable;
var T = (r, a, n) =>
    a in r
      ? C(r, a, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (r[a] = n),
  $ = (r, a) => {
    for (var n in a || (a = {})) k.call(a, n) && T(r, n, a[n]);
    if (S) for (var n of S(a)) E.call(a, n) && T(r, n, a[n]);
    return r;
  };
import { j as t } from "../_uiVendor.js";
import { a as d } from "../_reactVendor.js";
import { p as R } from "../AppShell.js";
import { X as O, x as A, h as B } from "../_iconsVendor.js";
const M = ({ className: r = "" }) => {
    const [a, n] = d.useState([]),
      [b, j] = d.useState(""),
      [f, y] = d.useState(!1),
      [p, w] = d.useState(!1),
      m = d.useCallback((e, o) => {
        let s = e
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "");
        s || (s = "section");
        let l = s,
          u = 1;
        for (; o.has(l); ) ((l = `${s}-${u}`), u++);
        return l;
      }, []);
    d.useEffect(() => {
      const e = document.querySelectorAll("h2"),
        o = [],
        s = new Set(),
        l = new Set();
      (e.forEach((u) => {
        var v;
        const c = u,
          x = ((v = c.textContent) == null ? void 0 : v.trim()) || "";
        if (!x || l.has(x)) return;
        const I = 2;
        let g;
        (c.id
          ? ((g = c.id), s.has(g) && ((g = m(x, s)), (c.id = g)))
          : ((g = m(x, s)), (c.id = g)),
          s.add(g),
          l.add(x),
          o.push({ id: g, title: x, level: I, element: c }));
      }),
        n(o));
    }, [m]);
    const i = d.useMemo(
      () =>
        [...a].sort((e, o) => {
          const s = e.element.getBoundingClientRect(),
            l = o.element.getBoundingClientRect();
          return s.top + window.pageYOffset - (l.top + window.pageYOffset);
        }),
      [a],
    );
    d.useEffect(() => {
      let e = !1;
      const o = () => {
        (e ||
          requestAnimationFrame(() => {
            const s = window.scrollY,
              l = window.innerHeight;
            y(s > l * 0.25);
            let u = "";
            for (let c = i.length - 1; c >= 0; c--) {
              const x = i[c],
                v =
                  x.element.getBoundingClientRect().top +
                  window.pageYOffset -
                  120;
              if (s >= v) {
                u = x.id;
                break;
              }
            }
            (j(u), (e = !1));
          }),
          (e = !0));
      };
      return (
        window.addEventListener("scroll", o, { passive: !0 }),
        o(),
        () => window.removeEventListener("scroll", o)
      );
    }, [i]);
    const N = d.useCallback((e) => {
        const o = document.getElementById(e);
        if (o) {
          const u = o.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({ top: u, behavior: "smooth" });
        }
        setTimeout(() => w(!1), 100);
      }, []),
      h = d.useCallback(() => {
        const e = !p;
        (w(e), R(e ? "open" : "close"));
      }, [p]);
    return !i.length || !f
      ? null
      : t.jsxs("div", {
          className: `fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block ${r}`,
          children: [
            t.jsx("button", {
              onClick: h,
              "data-sound": "off",
              className: `group flex items-center justify-center w-12 h-12 rounded-full shadow-lg transition-all duration-300 ease-out hover:scale-105 active:scale-95 ${p ? "scale-105 shadow-xl" : "hover:shadow-xl"}`,
              style: {
                backdropFilter: "blur(20px) saturate(140%)",
                background: p ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0.6)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                boxShadow: p
                  ? "0 12px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
                  : "0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
              },
              "aria-label": "Toggle Table of Contents",
              children: p
                ? t.jsx(O, {
                    className:
                      "h-5 w-5 text-white transition-all duration-300 ease-out",
                  })
                : t.jsx(A, {
                    className:
                      "h-5 w-5 text-white transition-all duration-300 ease-out group-hover:scale-110",
                  }),
            }),
            t.jsxs("div", {
              className: `absolute right-16 top-1/2 -translate-y-1/2 w-72 rounded-xl shadow-2xl transition-all duration-300 ease-out ${p ? "opacity-100 translate-x-0 scale-100 visible" : "opacity-0 translate-x-6 scale-95 invisible pointer-events-none"}`,
              style: {
                backdropFilter: "blur(30px) saturate(150%)",
                background: "rgba(0, 0, 0, 0.75)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                boxShadow:
                  "0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
              },
              children: [
                t.jsx("div", {
                  className: "px-6 py-4 border-b border-white/20",
                  children: t.jsx("h3", {
                    className: "text-lg font-bold text-white",
                    children: "Contents",
                  }),
                }),
                t.jsx("div", {
                  className: "max-h-80 overflow-y-auto custom-scrollbar",
                  children: t.jsx("nav", {
                    className: "p-4 space-y-2",
                    children: i.map((e, o) => {
                      const s = b === e.id;
                      return t.jsxs(
                        "button",
                        {
                          onClick: () => N(e.id),
                          className: `group relative w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ease-out hover:bg-gray-800/60 ${s ? "bg-gray-800/80 text-white" : "text-gray-300 hover:text-white"}`,
                          children: [
                            t.jsxs("div", {
                              className: "flex items-center gap-3",
                              children: [
                                t.jsx(B, {
                                  className: `h-4 w-4 transition-all duration-200 ease-out ${s ? "text-orange-400 rotate-90" : "text-gray-500 group-hover:text-gray-400 group-hover:rotate-90"}`,
                                }),
                                t.jsx("span", {
                                  className: `text-sm leading-relaxed transition-all duration-200 ease-out ${s ? "font-medium" : "group-hover:text-white"}`,
                                  children: e.title,
                                }),
                              ],
                            }),
                            s &&
                              t.jsx("div", {
                                className:
                                  "absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-orange-400 rounded-r-full",
                              }),
                          ],
                        },
                        `${e.id}-${o}`,
                      );
                    }),
                  }),
                }),
                t.jsx("div", {
                  className: "px-6 py-3 border-t border-white/20",
                  children: t.jsxs("div", {
                    className:
                      "flex items-center justify-between text-xs text-gray-400",
                    children: [
                      t.jsxs("span", {
                        children: [
                          Math.max(1, i.findIndex((e) => e.id === b) + 1),
                          " of ",
                          i.length,
                        ],
                      }),
                      t.jsx("div", {
                        className:
                          "w-2 h-2 bg-green-400 rounded-full animate-pulse",
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
  },
  P = ({
    src: r,
    alt: a,
    className: n = "",
    loading: b = "lazy",
    onClick: j,
    style: f,
    "data-critical": y,
  }) => {
    const p = (h) => {
        const e = h.split(".").pop(),
          o = h.substring(0, h.lastIndexOf("."));
        return {
          mobileWebP: `${o}-mobile.webp`,
          mobile: `${o}-mobile.${e}`,
          desktop: h,
        };
      },
      { mobileWebP: w, mobile: m, desktop: i } = p(r),
      N = (h) => {
        const e = h.currentTarget;
        e.src !== i && (e.src = i);
      };
    return t.jsxs("picture", {
      style: f,
      children: [
        t.jsx("source", {
          media: "(max-width: 767px)",
          srcSet: w,
          type: "image/webp",
        }),
        t.jsx("source", {
          media: "(max-width: 767px)",
          srcSet: m,
          type: `image/${r.split(".").pop()}`,
        }),
        t.jsx("source", {
          media: "(min-width: 768px)",
          srcSet: i,
          type: `image/${r.split(".").pop()}`,
        }),
        t.jsx(
          "img",
          $(
            {
              src: i,
              alt: a,
              className: n,
              loading: b,
              onClick: j,
              style: f,
              onError: N,
            },
            y ? { "data-critical": "true" } : {},
          ),
        ),
      ],
    });
  };
export { M as F, P as R };

