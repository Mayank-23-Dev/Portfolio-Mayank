var me = Object.defineProperty,
  pe = Object.defineProperties;
var ue = Object.getOwnPropertyDescriptors;
var se = Object.getOwnPropertySymbols;
var ge = Object.prototype.hasOwnProperty,
  fe = Object.prototype.propertyIsEnumerable;
var ne = (r, s, a) =>
    s in r
      ? me(r, s, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (r[s] = a),
  I = (r, s) => {
    for (var a in s || (s = {})) ge.call(s, a) && ne(r, a, s[a]);
    if (se) for (var a of se(s)) fe.call(s, a) && ne(r, a, s[a]);
    return r;
  },
  z = (r, s) => pe(r, ue(s));
import { c as N } from "../ui/AppShell";
import { j as e } from "../ui/_uiVendor";
import { a as n, R as W, b as be, L as je } from "../ui/_reactVendor";
import { S as oe } from "../ui/_sharedIndex";
import { m, u as ve, A as re } from "../ui/_animationVendor";
import { c as O, X as we, B as ie } from "../ui/Playground_UI/BookCover";
import { S as M } from "../ui/Landing_UI/StickyNote";
import { A as Ne } from "../ui/_iconsVendor";
const ke = [
    [
      "rect",
      {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2",
        ry: "2",
        key: "1m3agn",
      },
    ],
    ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
    ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }],
  ],
  ae = O("image", ke);
const Ie = [
    ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
    ["path", { d: "m21 3-7 7", key: "1l2asr" }],
    ["path", { d: "m3 21 7-7", key: "tjx5ai" }],
    ["path", { d: "M9 21H3v-6", key: "wtvkvv" }],
  ],
  Me = O("maximize-2", Ie);
const Ce = [
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
    ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
    ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
    ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }],
  ],
  Le = O("zoom-in", Ce);
const De = [
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
    ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
    ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }],
  ],
  ze = O("zoom-out", De);
// ─── NAV ITEMS ────────────────────────────────────────────────────────────────
const Pe = [
  {
    label: "Components",
    x: 1050,
    y: 400,
    hoverColor: "hover:bg-green-100 hover:text-green-700",
  },
  {
    label: "Books",
    x: 2150,
    y: 350,
    hoverColor: "hover:bg-yellow-100 hover:text-yellow-700",
  },
  {
    label: "Photos",
    x: 2950,
    y: 400,
    hoverColor: "hover:bg-purple-100 hover:text-purple-700",
  },
  {
    label: "Digital Stack",
    x: 3550,
    y: 350,
    hoverColor: "hover:bg-orange-100 hover:text-orange-700",
  },
];
// ─── INFINITE CANVAS SHELL (original logic — untouched) ──────────────────────
const Ee = ({
  children: r,
  className: s,
  initialPosition: a = { x: 0, y: 0 },
  initialZoom: i = 1,
  minZoom: c = 0.3,
  maxZoom: u = 2,
  navItems: $ = Pe,
}) => {
  const E = n.useRef(null),
    [y, v] = n.useState(a),
    [p, k] = n.useState(i),
    [S, C] = n.useState(!1),
    L = n.useRef({ x: 0, y: 0 }),
    D = n.useRef({ x: 0, y: 0 }),
    b = n.useRef({ x: 0, y: 0 }),
    g = n.useRef({ x: 0, y: 0 }),
    R = n.useRef(Date.now()),
    x = n.useRef(),
    q = n.useCallback(
      (t) => {
        (t.target.setPointerCapture(t.pointerId),
          C(!0),
          (L.current = { x: t.clientX, y: t.clientY }),
          (D.current = I({}, y)),
          (g.current = { x: t.clientX, y: t.clientY }),
          (R.current = Date.now()),
          (b.current = { x: 0, y: 0 }),
          x.current && cancelAnimationFrame(x.current));
      },
      [y],
    ),
    X = n.useCallback(
      (t) => {
        if (!S) return;
        const o = t.clientX - L.current.x,
          d = t.clientY - L.current.y,
          l = Date.now(),
          j = Math.max(l - R.current, 1);
        ((b.current = {
          x: ((t.clientX - g.current.x) / j) * 16,
          y: ((t.clientY - g.current.y) / j) * 16,
        }),
          (g.current = { x: t.clientX, y: t.clientY }),
          (R.current = l),
          v({ x: D.current.x + o, y: D.current.y + d }));
      },
      [S],
    ),
    T = n.useCallback((t) => {
      (t.target.releasePointerCapture(t.pointerId), C(!1));
      const o = 0.92,
        d = 0.5,
        l = () => {
          ((b.current.x *= o),
            (b.current.y *= o),
            (Math.abs(b.current.x) > d || Math.abs(b.current.y) > d) &&
              (v((j) => ({ x: j.x + b.current.x, y: j.y + b.current.y })),
              (x.current = requestAnimationFrame(l))));
        };
      (Math.abs(b.current.x) > d || Math.abs(b.current.y) > d) &&
        (x.current = requestAnimationFrame(l));
    }, []),
    F = n.useCallback(
      (t) => {
        if (!t.ctrlKey && !t.metaKey) return;
        t.preventDefault();
        const o = E.current;
        if (!o) return;
        const d = o.getBoundingClientRect(),
          l = t.clientX - d.left,
          j = t.clientY - d.top,
          _ = -t.deltaY * 0.01,
          ee = Math.min(u, Math.max(c, p + _)),
          te = ee / p,
          xe = l - (l - y.x) * te,
          he = j - (j - y.y) * te;
        (k(ee), v({ x: xe, y: he }));
      },
      [p, y, c, u],
    );
  (n.useEffect(() => {
    const t = E.current;
    if (t)
      return (
        t.addEventListener("wheel", F, { passive: !1 }),
        () => t.removeEventListener("wheel", F)
      );
  }, [F]),
    n.useRef([]));
  const Y = n.useRef(0),
    V = n.useRef(1),
    w = n.useCallback(
      (t) => {
        if (t.touches.length === 2) {
          const o = t.touches[0],
            d = t.touches[1];
          ((Y.current = Math.hypot(
            d.clientX - o.clientX,
            d.clientY - o.clientY,
          )),
            (V.current = p));
        }
      },
      [p],
    ),
    de = n.useCallback(
      (t) => {
        if (t.touches.length === 2) {
          const o = t.touches[0],
            d = t.touches[1],
            j =
              Math.hypot(d.clientX - o.clientX, d.clientY - o.clientY) /
              Y.current,
            _ = Math.min(u, Math.max(c, V.current * j));
          k(_);
        }
      },
      [c, u],
    );
  n.useEffect(
    () => () => {
      x.current && cancelAnimationFrame(x.current);
    },
    [],
  );
  const H = n.useCallback(() => {
      k((t) => Math.min(u, t + 0.15));
    }, [u]),
    Z = n.useCallback(() => {
      k((t) => Math.max(c, t - 0.15));
    }, [c]),
    G = n.useCallback(() => {
      (v(a), k(i));
    }, [a, i]),
    A = n.useCallback(
      (t, o) => {
        const d = E.current;
        if (!d) return;
        const l = d.getBoundingClientRect(),
          j = l.width / 2,
          _ = l.height / 2;
        v({ x: j - t * p, y: _ - o * p });
      },
      [p],
    );
  return (
    n.useEffect(() => {
      const t = (o) => {
        if (
          o.target instanceof HTMLInputElement ||
          o.target instanceof HTMLTextAreaElement
        )
          return;
        const d = 80;
        switch (o.key) {
          case "ArrowUp":
            (v((l) => z(I({}, l), { y: l.y + d })), o.preventDefault());
            break;
          case "ArrowDown":
            (v((l) => z(I({}, l), { y: l.y - d })), o.preventDefault());
            break;
          case "ArrowLeft":
            (v((l) => z(I({}, l), { x: l.x + d })), o.preventDefault());
            break;
          case "ArrowRight":
            (v((l) => z(I({}, l), { x: l.x - d })), o.preventDefault());
            break;
          case "+":
          case "=":
            (H(), o.preventDefault());
            break;
          case "-":
          case "_":
            (Z(), o.preventDefault());
            break;
          case "0":
            (G(), o.preventDefault());
            break;
          case "1":
            (A(1050, 400), o.preventDefault());
            break;
          case "2":
            (A(2150, 350), o.preventDefault());
            break;
          case "3":
            (A(2950, 400), o.preventDefault());
            break;
          case "4":
            (A(3550, 350), o.preventDefault());
            break;
        }
      };
      return (
        window.addEventListener("keydown", t),
        () => window.removeEventListener("keydown", t)
      );
    }, [H, Z, G, A]),
    e.jsxs("div", {
      ref: E,
      className: N(
        "relative w-full h-screen overflow-hidden touch-none",
        S ? "cursor-grabbing" : "cursor-grab",
        s,
      ),
      onPointerDown: q,
      onPointerMove: X,
      onPointerUp: T,
      onPointerLeave: T,
      onTouchStart: w,
      onTouchMove: de,
      children: [
        e.jsx("div", {
          className: "absolute inset-0 bg-[#faf9f6] pointer-events-none",
        }),
        e.jsx("div", {
          className: "absolute pointer-events-none",
          style: {
            backgroundImage:
              "radial-gradient(circle, rgba(0,0,0,0.12) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
            backgroundPosition: `${y.x}px ${y.y}px`,
            inset: 0,
          },
        }),
        e.jsx("div", {
          className: "absolute top-0 left-0 pointer-events-none",
          style: {
            transform: `translate(${y.x}px, ${y.y}px) scale(${p})`,
            transformOrigin: "0 0",
          },
          children: e.jsx("div", {
            className: "pointer-events-auto",
            children: r,
          }),
        }),
        e.jsx(m.div, {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.3 },
          className:
            "fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4",
          children: e.jsxs("div", {
            className:
              "flex items-center gap-1.5 px-3 py-2.5 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-stone-200",
            children: [
              e.jsx("button", {
                onClick: Z,
                className:
                  "p-2 hover:bg-stone-100 rounded-xl transition-colors",
                title: "Zoom out (-)",
                children: e.jsx(ze, { className: "w-4 h-4 text-stone-600" }),
              }),
              e.jsx("div", {
                className:
                  "px-2.5 py-1 bg-stone-100 rounded-lg min-w-[48px] text-center",
                children: e.jsxs("span", {
                  className: "text-xs font-mono font-medium text-stone-600",
                  children: [Math.round(p * 100), "%"],
                }),
              }),
              e.jsx("button", {
                onClick: H,
                className:
                  "p-2 hover:bg-stone-100 rounded-xl transition-colors",
                title: "Zoom in (+)",
                children: e.jsx(Le, { className: "w-4 h-4 text-stone-600" }),
              }),
              e.jsx("div", { className: "w-px h-5 bg-stone-200 mx-1" }),
              e.jsx("button", {
                onClick: G,
                className:
                  "p-2 hover:bg-stone-100 rounded-xl transition-colors",
                title: "Reset view (0)",
                children: e.jsx(Me, { className: "w-4 h-4 text-stone-600" }),
              }),
              e.jsx("div", { className: "w-px h-5 bg-stone-200 mx-1" }),
              e.jsx("div", {
                className: "flex items-center gap-1",
                children: $.map((t) =>
                  e.jsx(
                    "button",
                    {
                      onClick: () => A(t.x, t.y),
                      className: N(
                        "px-2 py-1 text-xs font-medium text-stone-500 rounded-lg transition-colors",
                        t.hoverColor ||
                          "hover:bg-stone-100 hover:text-stone-700",
                      ),
                      children: t.label,
                    },
                    t.label,
                  ),
                ),
              }),
            ],
          }),
        }),
        e.jsx("div", {
          className: "fixed bottom-6 right-4 z-40 hidden lg:block",
          children: e.jsx("div", {
            className: "text-xs text-stone-400",
            children: "Pinch to zoom • Drag to pan",
          }),
        }),
      ],
    })
  );
};
// ─── CANVAS ITEM WRAPPER ──────────────────────────────────────────────────────
const h = ({
  children: r,
  x: s,
  y: a,
  rotation: i = 0,
  className: c,
  zIndex: u = 1,
}) =>
  e.jsx("div", {
    className: N("absolute", c),
    style: { left: s, top: a, transform: `rotate(${i}deg)`, zIndex: u },
    children: r,
  });
// ─── POLAROID (original — completely untouched) ───────────────────────────────
const U = W.memo(
  ({
    src: r,
    fallback: s,
    alt: a = "Photo",
    caption: i,
    rotation: c = 0,
    className: u,
    onClick: $,
    loading: E = "lazy",
    developDelay: y = 0,
  }) => {
    const [v, p] = n.useState(!1),
      [k, S] = n.useState(!1),
      [C, L] = n.useState(!1),
      [D, b] = n.useState(r),
      [g, R] = n.useState(!1),
      [x, q] = n.useState(!1),
      X = n.useRef(null),
      T = ve(X, { once: !0, margin: "-50px" });
    n.useEffect(() => {
      if (T && C && !g && !x) {
        const w = setTimeout(() => {
          (R(!0),
            setTimeout(() => {
              q(!0);
            }, 2500));
        }, y);
        return () => clearTimeout(w);
      }
    }, [T, C, g, x, y]);
    const F = (w) => {
        (w.stopPropagation(), $ ? $() : p(!0));
      },
      Y = (w) => {
        w.stopPropagation();
      },
      V = {
        x: [0, -2, 2, -2, 2, -1, 1, 0],
        rotate: [c, c - 1, c + 1, c - 0.5, c + 0.5, c],
      };
    return e.jsxs(e.Fragment, {
      children: [
        e.jsxs(m.div, {
          ref: X,
          className: N(
            "bg-white p-3 pb-8 shadow-lg cursor-pointer select-none",
            "hover:shadow-xl transition-shadow duration-300",
            "border border-stone-200",
            u,
          ),
          style: { transform: `rotate(${c}deg)`, width: 150 },
          animate: g && !x ? V : {},
          transition:
            g && !x
              ? {
                  duration: 0.5,
                  repeat: 4,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }
              : {},
          whileHover: x ? { scale: 1.05, rotate: c + 2, zIndex: 50 } : {},
          whileTap: x ? { scale: 0.98 } : {},
          onClick: F,
          onPointerDown: Y,
          children: [
            e.jsxs("div", {
              className: "aspect-square bg-stone-100 overflow-hidden relative",
              children: [
                e.jsx("div", {
                  className: N(
                    "absolute inset-0 z-10 transition-opacity pointer-events-none",
                    "bg-gradient-to-br from-[#f5f0e6] via-[#e8e4d9] to-[#f0ebe0]",
                  ),
                  style: {
                    opacity: g ? 0 : 1,
                    transitionDuration: "2.5s",
                    transitionTimingFunction: "ease-out",
                  },
                }),
                e.jsx(m.div, {
                  className:
                    "absolute inset-0 z-20 pointer-events-none mix-blend-overlay",
                  initial: { opacity: 0 },
                  animate: { opacity: g && !x ? [0, 0.6, 0.3, 0] : 0 },
                  transition: {
                    duration: 2.5,
                    times: [0, 0.2, 0.6, 1],
                    ease: "easeOut",
                  },
                  style: {
                    background:
                      "linear-gradient(135deg, #a8d5ba 0%, #f5deb3 50%, #d4a574 100%)",
                  },
                }),
                !C &&
                  !k &&
                  e.jsx("div", {
                    className:
                      "absolute inset-0 bg-gradient-to-br from-stone-200 via-stone-100 to-stone-200 animate-pulse z-0",
                    children: e.jsx(ae, {
                      className: "w-6 h-6 text-stone-300",
                    }),
                  }),
                k
                  ? e.jsx("div", {
                      className:
                        "w-full h-full flex items-center justify-center text-stone-400 text-xs bg-stone-200",
                      children: e.jsx(ae, { className: "w-6 h-6" }),
                    })
                  : e.jsx(m.img, {
                      src: D,
                      alt: a,
                      className: N(
                        "w-full h-full object-cover",
                        C ? "opacity-100" : "opacity-0",
                      ),
                      initial: {
                        filter: "saturate(0) brightness(1.2) contrast(0.8)",
                      },
                      animate: {
                        filter: g
                          ? "saturate(1) brightness(1) contrast(1)"
                          : "saturate(0) brightness(1.2) contrast(0.8)",
                      },
                      transition: { duration: 2.5, ease: "easeOut" },
                      onLoad: () => L(!0),
                      onError: () => {
                        s && D !== s ? (b(s), L(!1)) : (S(!0), L(!0));
                      },
                      loading: E,
                      decoding: "async",
                      draggable: !1,
                      width: 150,
                      height: 150,
                    }),
                e.jsx(re, {
                  children:
                    g &&
                    !x &&
                    e.jsx(m.div, {
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      exit: { opacity: 0 },
                      className:
                        "absolute bottom-2 left-0 right-0 z-30 flex justify-center",
                      children: e.jsx("span", {
                        className:
                          "text-[10px] font-handwritten text-stone-500 bg-white/80 px-2 py-0.5 rounded",
                        children: "developing...",
                      }),
                    }),
                }),
              ],
            }),
            i &&
              e.jsx(m.p, {
                className:
                  "mt-3 text-center font-handwritten text-stone-600 text-sm truncate",
                initial: { opacity: 0 },
                animate: { opacity: x ? 1 : 0.3 },
                transition: { duration: 0.5, delay: x ? 0 : 2 },
                children: i,
              }),
            e.jsx("div", {
              className:
                "absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-5 bg-yellow-100/80 opacity-70",
              style: {
                transform: `translateX(-50%) rotate(${-c + 3}deg)`,
                boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
              },
            }),
          ],
        }),
        e.jsx(re, {
          children:
            v &&
            be.createPortal(
              e.jsx(m.div, {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                className:
                  "fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-8",
                onClick: () => p(!1),
                children: e.jsxs(m.div, {
                  initial: { scale: 0.8, opacity: 0 },
                  animate: { scale: 1, opacity: 1 },
                  exit: { scale: 0.8, opacity: 0 },
                  className:
                    "relative bg-white p-4 pb-16 max-w-2xl max-h-[80vh] shadow-2xl",
                  onClick: (w) => w.stopPropagation(),
                  children: [
                    e.jsx("button", {
                      onClick: () => p(!1),
                      className:
                        "absolute -top-3 -right-3 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-stone-100 transition-colors",
                      children: e.jsx(we, { className: "w-4 h-4" }),
                    }),
                    e.jsx("img", {
                      src: D,
                      alt: a,
                      className: "max-w-full max-h-[60vh] object-contain",
                      loading: "lazy",
                    }),
                    i &&
                      e.jsx("p", {
                        className:
                          "mt-4 text-center font-handwritten text-stone-700 text-lg",
                        children: i,
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
U.displayName = "Polaroid";
// ─── ZONE LABEL (original) ────────────────────────────────────────────────────
const P = W.memo(({ children: r, color: s = "#A2FF86", className: a }) =>
  e.jsxs("div", {
    className: N("relative inline-block", a),
    children: [
      e.jsx("div", {
        className: "absolute inset-0 -inset-x-2 -inset-y-1 -z-10 rounded",
        style: {
          background: s,
          transform: "rotate(-1deg)",
          borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px",
        },
      }),
      e.jsx("h2", {
        className:
          "text-2xl md:text-3xl font-bold font-handwritten text-stone-800 px-2",
        children: r,
      }),
    ],
  }),
);
P.displayName = "ZoneLabel";
// ─── DOODLE (original) ────────────────────────────────────────────────────────
const f = W.memo(
  ({ type: r, size: s = 40, color: a = "#9ca3af", className: i }) => {
    const c = {
      star: e.jsx("svg", {
        width: s,
        height: s,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: a,
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: e.jsx("path", {
          d: "M12 2L15 8.5L22 9.5L17 14.5L18 22L12 18.5L6 22L7 14.5L2 9.5L9 8.5L12 2Z",
        }),
      }),
      heart: e.jsx("svg", {
        width: s,
        height: s,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: a,
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: e.jsx("path", {
          d: "M12 21C12 21 4 14.5 4 9C4 6 6.5 4 9 4C10.5 4 11.5 4.5 12 5.5C12.5 4.5 13.5 4 15 4C17.5 4 20 6 20 9C20 14.5 12 21 12 21Z",
        }),
      }),
      circle: e.jsx("svg", {
        width: s,
        height: s,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: a,
        strokeWidth: "1.5",
        strokeLinecap: "round",
        children: e.jsx("circle", {
          cx: "12",
          cy: "12",
          r: "9",
          strokeDasharray: "4,2",
        }),
      }),
      squiggle: e.jsx("svg", {
        width: s * 2,
        height: s,
        viewBox: "0 0 48 24",
        fill: "none",
        stroke: a,
        strokeWidth: "2",
        strokeLinecap: "round",
        children: e.jsx("path", {
          d: "M2 12 C10 4, 14 20, 24 12 C34 4, 38 20, 46 12",
        }),
      }),
      sparkle: e.jsx("svg", {
        width: s,
        height: s,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: a,
        strokeWidth: "1.5",
        strokeLinecap: "round",
        children: e.jsx("path", {
          d: "M12 2V6M12 18V22M2 12H6M18 12H22M5 5L8 8M16 16L19 19M19 5L16 8M8 16L5 19",
        }),
      }),
      coffee: e.jsxs("svg", {
        width: s,
        height: s,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: a,
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
          e.jsx("path", { d: "M18 8h1a4 4 0 0 1 0 8h-1" }),
          e.jsx("path", { d: "M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" }),
          e.jsx("path", { d: "M6 1v3M10 1v3M14 1v3" }),
        ],
      }),
    };
    return e.jsx("div", { className: N("opacity-40", i), children: c[r] });
  },
);
f.displayName = "Doodle";
// ─── WASHI TAPE (original) ────────────────────────────────────────────────────
const ce = W.memo(
  ({ color: r = "#fef08a", rotation: s = -5, width: a = 80, className: i }) =>
    e.jsx("div", {
      className: N("h-6 opacity-70", i),
      style: {
        width: a,
        background: `repeating-linear-gradient(45deg,${r},${r} 10px,transparent 10px,transparent 12px), ${r}`,
        transform: `rotate(${s}deg)`,
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
      },
    }),
);
ce.displayName = "WashiTape";
// ─── DATA ─────────────────────────────────────────────────────────────────────
const le = n.lazy(() => import("../ui/Playground_UI/ComponentsShowcase"));
const J = [
  { src: "/images/feed/memory-02.webp" },
  { src: "/images/feed/memory-03.webp" },
  { src: "/images/feed/memory-04.webp" },
  { src: "/images/feed/memory-07.webp" },
  { src: "/images/feed/memory-08.webp" },
  { src: "/images/feed/memory-09.webp" },
];
const Q = [
  {
    src: "https://covers.openlibrary.org/b/isbn/9781544514215-M.jpg",
    largeSrc: "https://covers.openlibrary.org/b/isbn/9781544514215-L.jpg",
    title: "Almanack of Naval",
    author: "Eric Jorgenson",
  },
  {
    src: "https://covers.openlibrary.org/b/isbn/9780761169253-M.jpg",
    largeSrc: "https://covers.openlibrary.org/b/isbn/9780761169253-L.jpg",
    title: "Steal Like an Artist",
    author: "Austin Kleon",
  },
  {
    src: "https://covers.openlibrary.org/b/isbn/9781949759228-M.jpg",
    largeSrc: "https://covers.openlibrary.org/b/isbn/9781949759228-L.jpg",
    title: "The Mountain Is You",
    author: "Brianna Wiest",
  },
];
const WORKFLOW_TOOLS = [
  {
    src: "https://cdn.simpleicons.org/notion/000000",
    largeSrc: "https://cdn.simpleicons.org/notion/000000",
    title: "Notion",
    author: "Workspace OS",
  },
  {
    src: "https://cdn.simpleicons.org/discord/5865F2",
    largeSrc: "https://cdn.simpleicons.org/discord/5865F2",
    title: "Discord",
    author: "Collaboration",
  },
  {
    src: "/images/play/antigravity-color.svg",
    largeSrc: "/images/play/antigravity-color.svg",
    title: "Antigravity",
    author: "Primary IDE",
  },
  {
    src: "https://cdn.simpleicons.org/figma/F24E1E",
    largeSrc: "https://cdn.simpleicons.org/figma/F24E1E",
    title: "Figma",
    author: "Product Design",
  },
  {
    src: "https://cdn.simpleicons.org/github/181717",
    largeSrc: "https://cdn.simpleicons.org/github/181717",
    title: "GitHub",
    author: "Open Source",
  },
  {
    src: "/images/play/geminicli-color.svg",
    largeSrc: "/images/play/geminicli-color.svg",
    title: "Gemini CLI",
    author: "AI Assistant",
  },
];
const B = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const Re = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const Te = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
const K = 768;
function Se() {
  const [r, s] = n.useState(void 0);
  return (
    n.useEffect(() => {
      const a = window.matchMedia(`(max-width: ${K - 1}px)`),
        i = () => { s(window.innerWidth < K); };
      return (
        a.addEventListener("change", i),
        s(window.innerWidth < K),
        () => a.removeEventListener("change", i)
      );
    }, []),
    !!r
  );
}
const Fe = () =>
  e.jsxs("div", {
    className: "min-h-screen bg-[#f8f6f1]",
    children: [
      e.jsx("div", {
        className: "fixed inset-0 pointer-events-none z-0",
        style: {
          backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        },
      }),
      e.jsxs("div", {
        className: "relative z-10 px-4 pb-12 pt-20",
        children: [
          e.jsx(m.section, {
            initial: "hidden", animate: "visible", variants: B, className: "mb-8",
            children: e.jsxs("div", {
              className: "rounded-[1.75rem] border-2 border-stone-200 bg-white p-5 shadow-lg",
              children: [
                e.jsxs("div", {
                  className: "mb-3 flex items-center gap-2",
                  children: [
                    e.jsx(oe, { className: "h-5 w-5 text-yellow-500" }),
                    e.jsx("h1", {
                      className: "text-xl text-stone-800 font-handwritten",
                      children: "Welcome to the Playground",
                    }),
                  ],
                }),
                e.jsx("p", {
                  className: "text-sm leading-7 text-stone-600",
                  children: "This page is the focused lab for interface experiments, component ideas, and interaction patterns.",
                }),
              ],
            }),
          }),
          e.jsxs(m.section, {
            initial: "hidden", whileInView: "visible", viewport: { once: !0, margin: "-60px" }, variants: B, className: "mb-10",
            children: [
              e.jsxs("div", {
                className: "mb-4 flex items-center gap-3",
                children: [
                  e.jsx(P, { color: "#A2FF86", children: "Components" }),
                  e.jsx(f, { type: "sparkle", size: 24, color: "#A2FF86" }),
                ],
              }),
              e.jsx("div", {
                className: "rounded-[1.75rem] border border-stone-200 bg-white/90 p-4 shadow-xl backdrop-blur-sm",
                children: e.jsx(n.Suspense, {
                  fallback: e.jsx("div", { className: "flex items-center justify-center p-12", children: e.jsx("div", { className: "h-8 w-8 animate-spin rounded-full border-b-2 border-stone-800" }) }),
                  children: e.jsx(le, {}),
                }),
              }),
            ],
          }),
          e.jsxs(m.section, {
            initial: "hidden", whileInView: "visible", viewport: { once: !0, margin: "-60px" }, variants: B, className: "mb-10",
            children: [
              e.jsxs("div", {
                className: "mb-4 flex items-center gap-3",
                children: [
                  e.jsx(P, { color: "#FFDE59", children: "Books" }),
                  e.jsx(f, { type: "coffee", size: 24, color: "#d4a574" }),
                ],
              }),
              e.jsxs("div", {
                className: "rounded-[1.75rem] border border-stone-200 bg-white/90 p-6 shadow-xl backdrop-blur-sm",
                children: [
                  e.jsx(m.div, {
                    variants: Re, initial: "hidden", whileInView: "visible", viewport: { once: !0 },
                    className: "flex flex-wrap items-end justify-center gap-4",
                    children: Q.map((r) =>
                      e.jsx(m.div, { variants: Te, className: "transform transition-transform active:scale-95", children: e.jsx(ie, z(I({}, r), { loading: "eager" })) }, r.title),
                    ),
                  }),
                  e.jsx("div", {
                    className: "mt-6 flex justify-center",
                    children: e.jsx(M, { content: "Books that shaped my thinking on design, wealth & self-improvement", color: "yellow", pinType: "tape", className: "h-auto w-full max-w-xs p-3 text-xs" }),
                  }),
                ],
              }),
            ],
          }),
          e.jsxs(m.section, {
            initial: "hidden", whileInView: "visible", viewport: { once: !0, margin: "-60px" }, variants: B, className: "mb-10",
            children: [
              e.jsxs("div", {
                className: "mb-4 flex items-center gap-3",
                children: [
                  e.jsx(P, { color: "#E5C1F0", children: "Photography" }),
                  e.jsx(f, { type: "heart", size: 24, color: "#f472b6" }),
                ],
              }),
              e.jsxs("div", {
                className: "rounded-[1.75rem] border border-stone-200 bg-white/90 p-4 shadow-xl backdrop-blur-sm",
                children: [
                  e.jsx("div", {
                    className: "grid grid-cols-2 gap-3 justify-items-center",
                    children: J.map((r, s) =>
                      e.jsx(U, { src: r.src, rotation: [-2, 3, -1, 4, -3, 2][s % 6], loading: "eager", developDelay: s * 250 }, r.src),
                    ),
                  }),
                  e.jsx("div", {
                    className: "mt-6 flex justify-center",
                    children: e.jsx(M, { content: "Moments captured with intention", color: "pink", pinType: "tape", className: "h-auto w-48 p-3 text-xs" }),
                  }),
                ],
              }),
            ],
          }),
          e.jsxs(m.section, {
            initial: "hidden", whileInView: "visible", viewport: { once: !0, margin: "-60px" }, variants: B, className: "mb-10",
            children: [
              e.jsxs("div", {
                className: "mb-4 flex items-center gap-3",
                children: [
                  e.jsx(P, { color: "#FFA07A", children: "Digital Stack" }),
                  e.jsx(f, { type: "sparkle", size: 24, color: "#f97316" }),
                ],
              }),
              e.jsxs("div", {
                className: "rounded-[1.75rem] border border-stone-200 bg-white/90 p-6 shadow-xl backdrop-blur-sm",
                children: [
                  e.jsx(m.div, {
                    variants: Re, initial: "hidden", whileInView: "visible", viewport: { once: !0 },
                    className: "flex flex-wrap items-end justify-center gap-x-4 gap-y-24",
                    children: WORKFLOW_TOOLS.map((r) =>
                      e.jsx(m.div, { variants: Te, className: "transform transition-transform active:scale-95", children: e.jsx(ie, z(I({}, r), { loading: "eager" })) }, r.title),
                    ),
                  }),
                  e.jsx("div", {
                    className: "mt-6 flex justify-center",
                    children: e.jsx(M, { content: "Tools that enhance my productivity and collaboration", color: "orange", pinType: "tape", className: "h-auto w-full max-w-xs p-3 text-xs" }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });

const Ae = () =>
  e.jsxs(Ee, {
    initialPosition: { x: 50, y: 100 }, initialZoom: 0.45, minZoom: 0.2, maxZoom: 1.5,
    children: [
      e.jsx(h, {
        x: 50, y: 120, zIndex: 10,
        children: e.jsxs("div", {
          className: "w-64 rounded-xl border-2 border-stone-200 bg-white p-5 shadow-lg",
          children: [
            e.jsx("h3", { className: "mb-2 font-handwritten text-lg text-stone-800", children: "Welcome!" }),
            e.jsx("p", { className: "text-sm leading-relaxed text-stone-600", children: "Drag to pan. Pinch to zoom. Click items to expand." }),
            e.jsxs("div", {
              className: "mt-3 flex flex-wrap gap-2",
              children: [
                e.jsx("span", { className: "rounded-full bg-green-100  px-2 py-1 text-xs text-green-700", children: "1 → Components" }),
                e.jsx("span", { className: "rounded-full bg-yellow-100 px-2 py-1 text-xs text-yellow-700", children: "2 → Books" }),
                e.jsx("span", { className: "rounded-full bg-purple-100 px-2 py-1 text-xs text-purple-700", children: "3 → Photos" }),
                e.jsx("span", { className: "rounded-full bg-orange-100 px-2 py-1 text-xs text-orange-700", children: "4 → Digital Stack" }),
              ],
            }),
          ],
        }),
      }),
      e.jsx(h, { x: 350, y: 50, zIndex: 5, children: e.jsx(P, { color: "#A2FF86", children: "Components" }) }),
      e.jsx(h, { x: 310, y: 180, zIndex: 2, children: e.jsx(f, { type: "sparkle", size: 28, color: "#A2FF86" }) }),
      e.jsx(h, {
        x: 350, y: 120, zIndex: 4,
        children: e.jsx("div", {
          className: "w-[1400px] rounded-2xl border border-stone-200 bg-white/90 p-6 shadow-xl backdrop-blur-sm",
          children: e.jsx(n.Suspense, {
            fallback: e.jsx("div", { className: "flex items-center justify-center p-12", children: e.jsx("div", { className: "h-8 w-8 animate-spin rounded-full border-b-2 border-stone-800" }) }),
            children: e.jsx(le, {}),
          }),
        }),
      }),
      e.jsx(h, { x: 1850, y: 50, zIndex: 5, children: e.jsx(P, { color: "#FFDE59", children: "Books" }) }),
      e.jsx(h, { x: 1810, y: 180, zIndex: 2, children: e.jsx(f, { type: "coffee", size: 36, color: "#d4a574" }) }),
      e.jsx(h, {
        x: 1850, y: 120, zIndex: 4,
        children: e.jsxs("div", {
          className: "w-[600px] rounded-2xl border border-stone-200 bg-white/90 p-8 pb-12 shadow-xl backdrop-blur-sm",
          children: [
            e.jsx("div", {
              className: "mb-16 flex items-end justify-center gap-12",
              children: Q.map((r) =>
                e.jsx("div", { className: "relative transform transition-transform hover:scale-105", children: e.jsx(ie, z(I({}, r), { loading: "eager" })) }, r.title),
              ),
            }),
            e.jsx("div", {
              className: "flex justify-center",
              children: e.jsx(M, { content: "Books that shaped my thinking on design, wealth & self-improvement", color: "yellow", pinType: "tape", className: "h-28 w-64 p-3 text-xs" }),
            }),
          ],
        }),
      }),
      e.jsx(h, { x: 2550, y: 50, zIndex: 5, children: e.jsx(P, { color: "#E5C1F0", children: "Photography" }) }),
      e.jsx(h, { x: 2510, y: 180, zIndex: 2, children: e.jsx(f, { type: "heart", size: 30, color: "#f472b6" }) }),
      e.jsx(h, {
        x: 2550, y: 120, zIndex: 4,
        children: e.jsxs("div", {
          className: "w-[660px] h-[850px] rounded-2xl border border-stone-200 bg-white/90 p-8 shadow-xl backdrop-blur-sm",
          children: [
            e.jsx("div", {
              className: "grid grid-cols-2 gap-8 justify-items-center",
              children: J.map((r, s) =>
                e.jsx(U, { src: r.src, rotation: [-2, 3, -1, 4, -3, 2][s], loading: "eager", developDelay: s * 300 }, r.src),
              ),
            }),
            e.jsx("div", {
              className: "mt-auto flex justify-center",
              children: e.jsx(M, { content: "Moments captured with intention", color: "pink", pinType: "tape", className: "h-24 w-48 p-3 text-xs" }),
            }),
          ],
        }),
      }),
      e.jsx(h, { x: 3450, y: 50, zIndex: 5, children: e.jsx(P, { color: "#FFA07A", children: "Digital Stack" }) }),
      e.jsx(h, { x: 3410, y: 180, zIndex: 2, children: e.jsx(f, { type: "sparkle", size: 36, color: "#f97316" }) }),
      e.jsx(h, {
        x: 3450, y: 120, zIndex: 4,
        children: e.jsxs("div", {
          className: "w-[660px] h-[850px] rounded-2xl border border-stone-200 bg-white/90 p-8 pb-12 shadow-xl backdrop-blur-sm",
          children: [
            e.jsxs("div", {
              className: "flex flex-col mb-16",
              style: { gap: "80px" },
              children: [
                e.jsx("div", {
                  className: "flex justify-center gap-12",
                  children: WORKFLOW_TOOLS.slice(0, 3).map((r) =>
                    e.jsx("div", { className: "relative transform transition-transform hover:scale-105", children: e.jsx(ie, z(I({}, r), { loading: "eager" })) }, r.title),
                  ),
                }),
                e.jsx("div", {
                  className: "flex justify-center gap-12",
                  children: WORKFLOW_TOOLS.slice(3, 6).map((r) =>
                    e.jsx("div", { className: "relative transform transition-transform hover:scale-105", children: e.jsx(ie, z(I({}, r), { loading: "eager" })) }, r.title),
                  ),
                }),
              ],
            }),
            e.jsx("div", {
              className: "mt-auto flex justify-center",
              children: e.jsx(M, { content: "Tools that enhance my productivity and collaboration", color: "orange", pinType: "tape", className: "h-28 w-64 p-3 text-xs" }),
            }),
          ],
        }),
      }),
    ],
  });

const _e = () => {
  const r = Se();
  return (
    n.useEffect(() => {
      const s = Q.map((i) => {
          const c = new Image();
          c.src = i.src;
          const u = new Image();
          return ((u.src = i.largeSrc), [c, u]);
        }),
        a = J.slice(0, 3).map((i) => {
          const c = new Image();
          return ((c.src = i.src), c);
        });
      return () => {
        s.flat().forEach((i) => { i.src = ""; });
        a.forEach((i) => { i.src = ""; });
      };
    }, []),
    e.jsxs("div", {
      className: "relative",
      children: [
        e.jsx(m.header, {
          initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 },
          className: "fixed left-0 right-0 top-0 z-50 px-4 py-3 md:px-6 md:py-4",
          children: e.jsxs("div", {
            className: "mx-auto flex max-w-7xl items-center justify-between",
            children: [
              e.jsxs(je, {
                to: "/",
                className: "group flex items-center gap-2 rounded-full border border-stone-200 bg-white/95 px-3 py-2 shadow-md backdrop-blur-sm transition-all hover:shadow-lg md:px-4",
                children: [
                  e.jsx(Ne, { className: "h-4 w-4 text-stone-600 transition-transform group-hover:-translate-x-1" }),
                  e.jsx("span", { className: "text-sm font-medium text-stone-700", children: "Back" }),
                ],
              }),
              e.jsxs("div", {
                className: "flex items-center gap-2 rounded-full border border-stone-200 bg-white/95 px-3 py-2 shadow-md backdrop-blur-sm md:px-4",
                children: [
                  e.jsx(oe, { className: "h-4 w-4 text-yellow-500" }),
                  e.jsx("span", { className: "text-sm font-medium text-stone-700", children: "Playground" }),
                ],
              }),
            ],
          }),
        }),
        r ? e.jsx(Fe, {}) : e.jsx(Ae, {}),
      ],
    })
  );
};
const Ze = Object.freeze(Object.defineProperty({ __proto__: null, default: _e }, Symbol.toStringTag, { value: "Module" }));
const et = Ze.default;
export { Ze as P, Se as u };
export { et as default };
