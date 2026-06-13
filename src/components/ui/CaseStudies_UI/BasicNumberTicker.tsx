var I = Object.defineProperty,
  M = Object.defineProperties;
var R = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var j = Object.prototype.hasOwnProperty,
  k = Object.prototype.propertyIsEnumerable;
var l = (s, e, t) =>
    e in s
      ? I(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (s[e] = t),
  p = (s, e) => {
    for (var t in e || (e = {})) j.call(e, t) && l(s, t, e[t]);
    if (i) for (var t of i(e)) k.call(e, t) && l(s, t, e[t]);
    return s;
  },
  d = (s, e) => M(s, R(e));
var w = (s, e) => {
  var t = {};
  for (var r in s) j.call(s, r) && e.indexOf(r) < 0 && (t[r] = s[r]);
  if (s != null && i)
    for (var r of i(s)) e.indexOf(r) < 0 && k.call(s, r) && (t[r] = s[r]);
  return t;
};
import { j as g } from "../_uiVendor";
import { a as o } from "../_reactVendor";
import { c as v } from "../AppShell";
import { a as A, b as F, c as H, m as O } from "../_animationVendor";
const V = o.forwardRef((q, T) => {
  var b = q,
    {
      from: s = 0,
      target: e = 100,
      transition: t = { duration: 3, type: "tween", ease: "easeInOut" },
      className: r,
      onStart: u,
      onComplete: m,
      autoStart: x = !0,
      decimalPlaces: N = 0,
    } = b,
    E = w(b, [
      "from",
      "target",
      "transition",
      "className",
      "onStart",
      "onComplete",
      "autoStart",
      "decimalPlaces",
    ]);
  const c = A(s),
    h = F(c, (n) => (N > 0 ? n.toFixed(N) : Math.round(n).toString())),
    [a, y] = o.useState(null),
    f = o.useCallback(() => {
      (a && a.stop(), u == null || u(), c.set(s));
      const n = H(
        c,
        e,
        d(p({}, t), {
          onComplete: () => {
            m == null || m();
          },
        }),
      );
      y(n);
    }, []);
  return (
    o.useImperativeHandle(T, () => ({ startAnimation: f })),
    o.useEffect(
      () => (x && f(), () => (a == null ? void 0 : a.stop())),
      [x, f],
    ),
    g.jsx(O.span, d(p({ className: v(r) }, E), { children: h }))
  );
});
V.displayName = "NumberTicker";
export { V as N };

