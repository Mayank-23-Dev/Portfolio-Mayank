var P = Object.defineProperty,
  z = Object.defineProperties;
var B = Object.getOwnPropertyDescriptors;
var f = Object.getOwnPropertySymbols;
var y = Object.prototype.hasOwnProperty,
  v = Object.prototype.propertyIsEnumerable;
var j = (e, t, s) =>
    t in e
      ? P(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (e[t] = s),
  m = (e, t) => {
    for (var s in t || (t = {})) y.call(t, s) && j(e, s, t[s]);
    if (f) for (var s of f(t)) v.call(t, s) && j(e, s, t[s]);
    return e;
  },
  N = (e, t) => z(e, B(t));
var w = (e, t) => {
  var s = {};
  for (var o in e) y.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
  if (e != null && f)
    for (var o of f(e)) t.indexOf(o) < 0 && v.call(e, o) && (s[o] = e[o]);
  return s;
};
import { j as a } from "../_uiVendor";
import { a as n, R as I, b as $ } from "../_reactVendor";
import { c as k } from "../AppShell";
import { m as g, A as R } from "../_animationVendor";
const _ = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  M = (e) =>
    e.replace(/^([A-Z])|[\s-_]+(\w)/g, (t, s, o) =>
      o ? o.toUpperCase() : s.toLowerCase(),
    ),
  C = (e) => {
    const t = M(e);
    return t.charAt(0).toUpperCase() + t.slice(1);
  },
  A = (...e) =>
    e
      .filter((t, s, o) => !!t && t.trim() !== "" && o.indexOf(t) === s)
      .join(" ")
      .trim(),
  S = (e) => {
    for (const t in e)
      if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
  };
var Y = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
const D = n.forwardRef((b, c) => {
  var x = b,
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: s = 2,
      absoluteStrokeWidth: o,
      className: l = "",
      children: r,
      iconNode: p,
    } = x,
    i = w(x, [
      "color",
      "size",
      "strokeWidth",
      "absoluteStrokeWidth",
      "className",
      "children",
      "iconNode",
    ]);
  return n.createElement(
    "svg",
    m(
      m(
        N(m({ ref: c }, Y), {
          width: t,
          height: t,
          stroke: e,
          strokeWidth: o ? (Number(s) * 24) / Number(t) : s,
          className: A("lucide", l),
        }),
        !r && !S(i) && { "aria-hidden": "true" },
      ),
      i,
    ),
    [
      ...p.map(([h, u]) => n.createElement(h, u)),
      ...(Array.isArray(r) ? r : [r]),
    ],
  );
});
const L = (e, t) => {
  const s = n.forwardRef((p, r) => {
    var i = p,
      { className: o } = i,
      l = w(i, ["className"]);
    return n.createElement(
      D,
      m(
        {
          ref: r,
          iconNode: t,
          className: A(`lucide-${_(C(e))}`, `lucide-${e}`, o),
        },
        l,
      ),
    );
  });
  return ((s.displayName = C(e)), s);
};
const O = [
    ["path", { d: "M12 7v14", key: "1akyts" }],
    [
      "path",
      {
        d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
        key: "ruj8y",
      },
    ],
  ],
  E = L("book-open", O);
const U = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  W = L("x", U),
  Z = I.memo(
    ({
      src: e,
      largeSrc: t,
      title: s,
      author: o,
      rotation: l = 0,
      className: r,
      loading: p = "lazy",
    }) => {
      const [i, c] = n.useState(!1),
        [b, x] = n.useState(!1),
        [h, u] = n.useState(!1);
      return a.jsxs(a.Fragment, {
        children: [
          a.jsxs(g.div, {
            className: k("relative cursor-pointer select-none group", r),
            style: { transform: `rotate(${l}deg)`, width: 140 },
            whileHover: { scale: 1.08, rotate: l - 2, zIndex: 50 },
            whileTap: { scale: 0.95 },
            onClick: (d) => {
              (d.stopPropagation(), c(!0));
            },
            onPointerDown: (d) => d.stopPropagation(),
            children: [
              a.jsx("div", {
                className: "absolute inset-0 bg-black/20 rounded-sm blur-md",
                style: { transform: "translate(4px, 4px)" },
              }),
              a.jsxs("div", {
                className:
                  "relative bg-white rounded-sm overflow-hidden shadow-lg border border-stone-300",
                children: [
                  a.jsx("div", {
                    className:
                      "absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-stone-400/30 to-transparent",
                  }),
                  a.jsxs("div", {
                    className: "aspect-[2/3] bg-stone-100 relative",
                    children: [
                      !h &&
                        !b &&
                        a.jsx("div", {
                          className:
                            "absolute inset-0 bg-gradient-to-br from-stone-200 via-stone-100 to-stone-200 animate-pulse",
                          children: a.jsx("div", {
                            className:
                              "w-full h-full flex items-center justify-center",
                            children: a.jsx(E, {
                              className: "w-8 h-8 text-stone-300 animate-pulse",
                            }),
                          }),
                        }),
                      b
                        ? a.jsxs("div", {
                            className:
                              "w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-br from-stone-200 to-stone-300",
                            children: [
                              a.jsx(E, {
                                className: "w-8 h-8 text-stone-400 mb-2",
                              }),
                              a.jsx("p", {
                                className:
                                  "text-xs text-stone-500 text-center font-medium",
                                children: s,
                              }),
                            ],
                          })
                        : a.jsx("img", {
                            src: e,
                            alt: s,
                            className: k(
                              "w-full h-full object-cover transition-opacity duration-300",
                              h ? "opacity-100" : "opacity-0",
                            ),
                            onLoad: () => u(!0),
                            onError: () => {
                              (x(!0), u(!0));
                            },
                            loading: p,
                            decoding: "async",
                            draggable: !1,
                            width: 140,
                            height: 210,
                          }),
                    ],
                  }),
                  a.jsx("div", {
                    className:
                      "absolute right-0 top-2 bottom-2 w-1 bg-gradient-to-r from-transparent via-stone-200 to-stone-100",
                  }),
                ],
              }),
              a.jsx(g.div, {
                className:
                  "absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-50",
                children: a.jsx("span", {
                  className:
                    "text-xs font-handwritten text-stone-500 bg-white px-2 py-1 rounded shadow-md",
                  children: s,
                }),
              }),
            ],
          }),
          a.jsx(R, {
            children:
              i &&
              $.createPortal(
                a.jsx(g.div, {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  className:
                    "fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-8",
                  style: { perspective: "1000px" },
                  onClick: () => c(!1),
                  children: a.jsxs(g.div, {
                    initial: { scale: 0.8, opacity: 0, rotateY: -30 },
                    animate: { scale: 1, opacity: 1, rotateY: 0 },
                    exit: { scale: 0.8, opacity: 0, rotateY: 30 },
                    transition: { type: "spring", damping: 20 },
                    className: "relative max-w-sm",
                    onClick: (d) => d.stopPropagation(),
                    children: [
                      a.jsx("button", {
                        onClick: () => c(!1),
                        className:
                          "absolute -top-3 -right-3 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-stone-100 transition-colors z-10",
                        children: a.jsx(W, { className: "w-4 h-4" }),
                      }),
                      a.jsx("div", {
                        className: "bg-white p-2 rounded-lg shadow-2xl",
                        children: a.jsx("img", {
                          src: t || e,
                          alt: s,
                          className: "w-64 h-auto object-contain rounded",
                          loading: "lazy",
                        }),
                      }),
                      a.jsxs("div", {
                        className: "mt-4 text-center",
                        children: [
                          a.jsx("h3", {
                            className: "text-xl font-bold text-white",
                            children: s,
                          }),
                          o &&
                            a.jsxs("p", {
                              className: "text-stone-300 mt-1",
                              children: ["by ", o],
                            }),
                        ],
                      }),
                    ],
                  }),
                }),
                document.body,
              ),
          }),
        ],
      });
    },
  );
Z.displayName = "BookCover";
export { Z as B, W as X, L as c };

