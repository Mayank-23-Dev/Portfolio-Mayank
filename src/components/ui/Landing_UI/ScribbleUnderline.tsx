var O = Object.defineProperty;
var k = Object.getOwnPropertySymbols;
var R = Object.prototype.hasOwnProperty,
  C = Object.prototype.propertyIsEnumerable;
var j = (t, e, s) =>
    e in t
      ? O(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (t[e] = s),
  g = (t, e) => {
    for (var s in e || (e = {})) R.call(e, s) && j(t, s, e[s]);
    if (k) for (var s of k(e)) C.call(e, s) && j(t, s, e[s]);
    return t;
  };
import { j as n } from "../_uiVendor.js";
import { a as l } from "../_reactVendor.js";
function T(t) {
  const e = l.useRef(null),
    [s, r] = l.useState(!1);
  return (
    l.useEffect(() => {
      const i = e.current;
      if (!i) return;
      const o = new IntersectionObserver(
        ([u]) => {
          u.isIntersecting && (r(!0), o.disconnect());
        },
        g({ threshold: 0.1, rootMargin: "0px" }, t),
      );
      return (
        o.observe(i),
        () => {
          o.disconnect();
        }
      );
    }, [t]),
    { ref: e, inView: s }
  );
}
function I() {
  const [t, e] = l.useState(!1);
  return (
    l.useEffect(() => {
      const s = window.matchMedia("(prefers-reduced-motion: reduce)");
      e(s.matches);
      const r = (i) => {
        e(i.matches);
      };
      return (
        s.addEventListener("change", r),
        () => s.removeEventListener("change", r)
      );
    }, []),
    t
  );
}
function B({
  children: t,
  color: e = "#1D4ED8",
  className: s,
  trigger: r = "inView",
  display: i = "inline-block",
  active: o,
}) {
  const { ref: u, inView: E } = T(),
    c = I(),
    [S, f] = l.useState(!1),
    h = i === "inline-flex" ? "inline-flex" : "inline-block",
    M = s ? `${h} ${s}` : h,
    D = { position: "relative", display: i, paddingBottom: "0.15em" },
    d = c
      ? !0
      : r === "hover"
        ? o != null
          ? o
          : S
        : r === "always"
          ? !0
          : r === "controlled"
            ? !!o
            : E,
    b = c || d ? 0 : 100,
    L = c || d ? 0.35 : 0,
    $ = c || d ? 1 : 0,
    p = "cubic-bezier(0.16, 1, 0.3, 1)",
    m = "cubic-bezier(0.16, 1, 0.3, 1)",
    x = c ? "0ms" : "650ms",
    y = c ? "0ms" : "420ms",
    a = r === "hover" && o === void 0,
    v = () => f(!0),
    w = () => f(!1);
  return n.jsxs("span", {
    ref: u,
    className: M,
    style: D,
    onMouseEnter: a ? v : void 0,
    onMouseLeave: a ? w : void 0,
    onFocus: a ? v : void 0,
    onBlur: a ? w : void 0,
    children: [
      t,
      n.jsxs("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 100 20",
        preserveAspectRatio: "none",
        style: {
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: "0.7em",
          width: "100%",
          pointerEvents: "none",
          overflow: "visible",
        },
        children: [
          n.jsxs("defs", {
            children: [
              n.jsxs("filter", {
                id: "scribble-wobble",
                x: "-50%",
                y: "-50%",
                width: "200%",
                height: "200%",
                children: [
                  n.jsx("feTurbulence", {
                    baseFrequency: "0.04 0.08",
                    numOctaves: "2",
                    result: "turbulence",
                    seed: "1",
                  }),
                  n.jsx("feDisplacementMap", {
                    in: "SourceGraphic",
                    in2: "turbulence",
                    scale: "1.5",
                    xChannelSelector: "R",
                    yChannelSelector: "G",
                  }),
                ],
              }),
              n.jsxs("filter", {
                id: "scribble-wobble-strong",
                x: "-50%",
                y: "-50%",
                width: "200%",
                height: "200%",
                children: [
                  n.jsx("feTurbulence", {
                    baseFrequency: "0.05 0.1",
                    numOctaves: "2",
                    result: "turbulence",
                    seed: "2",
                  }),
                  n.jsx("feDisplacementMap", {
                    in: "SourceGraphic",
                    in2: "turbulence",
                    scale: "2",
                    xChannelSelector: "R",
                    yChannelSelector: "G",
                  }),
                ],
              }),
            ],
          }),
          n.jsx("path", {
            d: "M2,15 Q18,19 34,15 T66,15 T98,15",
            pathLength: 100,
            style: {
              fill: "none",
              stroke: e,
              strokeOpacity: 0.25,
              strokeWidth: 9,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              filter: "url(#scribble-wobble)",
              strokeDasharray: 100,
              strokeDashoffset: b,
              opacity: L,
              transition: `stroke-dashoffset ${x} ${p}, opacity ${y} ${m}`,
            },
          }),
          n.jsxs("g", {
            style: {
              transformOrigin: "50px 10px",
              animation: c ? void 0 : "scribble-wiggle 6s ease-in-out infinite",
            },
            children: [
              n.jsx("style", {
                children: `
            @keyframes scribble-wiggle { 
              0%, 100% { filter: url(#scribble-wobble) }
              50% { filter: url(#scribble-wobble-strong) } 
            }
          `,
              }),
              n.jsx("path", {
                d: "M2,14 Q18,18 34,14 T66,14 T98,14",
                pathLength: 100,
                style: {
                  fill: "none",
                  stroke: e,
                  strokeWidth: 6,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  filter: "url(#scribble-wobble)",
                  strokeDasharray: 100,
                  strokeDashoffset: b,
                  opacity: $,
                  transition: `stroke-dashoffset ${x} ${p} 40ms, opacity ${y} ${m} 40ms`,
                },
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
export { B as S };

