var M = Object.defineProperty,
  g = Object.defineProperties;
var k = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var u = Object.prototype.hasOwnProperty,
  l = Object.prototype.propertyIsEnumerable;
var m = (s, t, r) =>
    t in s
      ? M(s, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (s[t] = r),
  c = (s, t) => {
    for (var r in t || (t = {})) u.call(t, r) && m(s, r, t[r]);
    if (a) for (var r of a(t)) l.call(t, r) && m(s, r, t[r]);
    return s;
  },
  x = (s, t) => g(s, k(t));
var d = (s, t) => {
  var r = {};
  for (var o in s) u.call(s, o) && t.indexOf(o) < 0 && (r[o] = s[o]);
  if (s != null && a)
    for (var o of a(s)) t.indexOf(o) < 0 && l.call(s, o) && (r[o] = s[o]);
  return r;
};
import { j as n } from "../_uiVendor";
import { c as f } from "../AppShell";
function N(C) {
  var i = C,
    {
      open: s,
      className: t,
      fill: r = "none",
      stroke: o = "currentColor",
      strokeWidth: h = 2.5,
      strokeLinecap: p = "round",
      strokeLinejoin: j = "round",
      duration: e = 500,
    } = i,
    y = d(i, [
      "open",
      "className",
      "fill",
      "stroke",
      "strokeWidth",
      "strokeLinecap",
      "strokeLinejoin",
      "duration",
    ]);
  return n.jsxs(
    "svg",
    x(
      c(
        {
          strokeWidth: h,
          fill: r,
          stroke: o,
          viewBox: "0 0 32 32",
          strokeLinecap: p,
          strokeLinejoin: j,
          className: f(
            "transition-transform ease-in-out",
            s && "-rotate-45",
            t,
          ),
          style: { transitionDuration: `${e}ms` },
        },
        y,
      ),
      {
        children: [
          n.jsx("path", {
            className: f(
              "transition-all ease-in-out",
              s
                ? "[stroke-dasharray:20_300] [stroke-dashoffset:-32.42px]"
                : "[stroke-dasharray:12_63]",
            ),
            style: { transitionDuration: `${e}ms` },
            d: "M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22",
          }),
          n.jsx("path", { d: "M7 16 27 16" }),
        ],
      },
    ),
  );
}
export { N as M };

