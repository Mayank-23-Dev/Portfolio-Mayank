import { g as Ye, a as f, R as l } from "./_reactVendor";
var p = { exports: {} },
  c,
  ne;
function Je() {
  if (ne) return c;
  ne = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ((c = e), c);
}
var u, oe;
function Ke() {
  if (oe) return u;
  oe = 1;
  var e = Je();
  function i() {}
  function n() {}
  return (
    (n.resetWarningCache = i),
    (u = function () {
      function t(s, Cr, Sr, Rr, Br, Xe) {
        if (Xe !== e) {
          var re = new Error(
            "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
          );
          throw ((re.name = "Invariant Violation"), re);
        }
      }
      t.isRequired = t;
      function r() {
        return t;
      }
      var o = {
        array: t,
        bigint: t,
        bool: t,
        func: t,
        number: t,
        object: t,
        string: t,
        symbol: t,
        any: t,
        arrayOf: r,
        element: t,
        elementType: t,
        instanceOf: r,
        node: t,
        objectOf: r,
        oneOf: r,
        oneOfType: r,
        shape: r,
        exact: r,
        checkPropTypes: n,
        resetWarningCache: i,
      };
      return ((o.PropTypes = o), o);
    }),
    u
  );
}
var ie;
function Qe() {
  return (ie || ((ie = 1), (p.exports = Ke()())), p.exports);
}
var et = Qe();
const a = Ye(et);
function g() {
  return (
    (g =
      Object.assign ||
      function (e) {
        for (var i = 1; i < arguments.length; i++) {
          var n = arguments[i];
          for (var t in n)
            Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
        }
        return e;
      }),
    g.apply(this, arguments)
  );
}
function tt(e, i) {
  if (e == null) return {};
  var n = rt(e, i),
    t,
    r;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++)
      ((t = o[r]),
        !(i.indexOf(t) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, t) &&
          (n[t] = e[t]));
  }
  return n;
}
function rt(e, i) {
  if (e == null) return {};
  var n = {},
    t = Object.keys(e),
    r,
    o;
  for (o = 0; o < t.length; o++)
    ((r = t[o]), !(i.indexOf(r) >= 0) && (n[r] = e[r]));
  return n;
}
var ae = f.forwardRef(function (e, i) {
  var n = e.color,
    t = n === void 0 ? "currentColor" : n,
    r = e.size,
    o = r === void 0 ? 24 : r,
    s = tt(e, ["color", "size"]);
  return l.createElement(
    "svg",
    g(
      {
        ref: i,
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: o,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      s,
    ),
    l.createElement("path", {
      d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z",
    }),
    l.createElement("line", { x1: "12", y1: "9", x2: "12", y2: "13" }),
    l.createElement("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" }),
  );
});
ae.propTypes = { color: a.string, size: a.oneOfType([a.string, a.number]) };
ae.displayName = "AlertTriangle";
function v() {
  return (
    (v =
      Object.assign ||
      function (e) {
        for (var i = 1; i < arguments.length; i++) {
          var n = arguments[i];
          for (var t in n)
            Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
        }
        return e;
      }),
    v.apply(this, arguments)
  );
}
function nt(e, i) {
  if (e == null) return {};
  var n = ot(e, i),
    t,
    r;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++)
      ((t = o[r]),
        !(i.indexOf(t) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, t) &&
          (n[t] = e[t]));
  }
  return n;
}
function ot(e, i) {
  if (e == null) return {};
  var n = {},
    t = Object.keys(e),
    r,
    o;
  for (o = 0; o < t.length; o++)
    ((r = t[o]), !(i.indexOf(r) >= 0) && (n[r] = e[r]));
  return n;
}
var le = f.forwardRef(function (e, i) {
  var n = e.color,
    t = n === void 0 ? "currentColor" : n,
    r = e.size,
    o = r === void 0 ? 24 : r,
    s = nt(e, ["color", "size"]);
  return l.createElement(
    "svg",
    v(
      {
        ref: i,
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: o,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      s,
    ),
    l.createElement("line", { x1: "19", y1: "12", x2: "5", y2: "12" }),
    l.createElement("polyline", { points: "12 19 5 12 12 5" }),
  );
});
le.propTypes = { color: a.string, size: a.oneOfType([a.string, a.number]) };
le.displayName = "ArrowLeft";
function y() {
  return (
    (y =
      Object.assign ||
      function (e) {
        for (var i = 1; i < arguments.length; i++) {
          var n = arguments[i];
          for (var t in n)
            Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
        }
        return e;
      }),
    y.apply(this, arguments)
  );
}
function it(e, i) {
  if (e == null) return {};
  var n = at(e, i),
    t,
    r;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++)
      ((t = o[r]),
        !(i.indexOf(t) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, t) &&
          (n[t] = e[t]));
  }
  return n;
}
function at(e, i) {
  if (e == null) return {};
  var n = {},
    t = Object.keys(e),
    r,
    o;
  for (o = 0; o < t.length; o++)
    ((r = t[o]), !(i.indexOf(r) >= 0) && (n[r] = e[r]));
  return n;
}
var se = f.forwardRef(function (e, i) {
  var n = e.color,
    t = n === void 0 ? "currentColor" : n,
    r = e.size,
    o = r === void 0 ? 24 : r,
    s = it(e, ["color", "size"]);
  return l.createElement(
    "svg",
    y(
      {
        ref: i,
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: o,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      s,
    ),
    l.createElement("circle", { cx: "12", cy: "8", r: "7" }),
    l.createElement("polyline", {
      points: "8.21 13.89 7 23 12 20 17 23 15.79 13.88",
    }),
  );
});
se.propTypes = { color: a.string, size: a.oneOfType([a.string, a.number]) };
se.displayName = "Award";
function h() {
  return (
    (h =
      Object.assign ||
      function (e) {
        for (var i = 1; i < arguments.length; i++) {
          var n = arguments[i];
          for (var t in n)
            Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
        }
        return e;
      }),
    h.apply(this, arguments)
  );
}
function lt(e, i) {
  if (e == null) return {};
  var n = st(e, i),
    t,
    r;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++)
      ((t = o[r]),
        !(i.indexOf(t) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, t) &&
          (n[t] = e[t]));
  }
  return n;
}
function st(e, i) {
  if (e == null) return {};
  var n = {},
    t = Object.keys(e),
    r,
    o;
  for (o = 0; o < t.length; o++)
    ((r = t[o]), !(i.indexOf(r) >= 0) && (n[r] = e[r]));
  return n;
}
var fe = f.forwardRef(function (e, i) {
  var n = e.color,
    t = n === void 0 ? "currentColor" : n,
    r = e.size,
    o = r === void 0 ? 24 : r,
    s = lt(e, ["color", "size"]);
  return l.createElement(
    "svg",
    h(
      {
        ref: i,
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: o,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      s,
    ),
    l.createElement("line", { x1: "18", y1: "20", x2: "18", y2: "10" }),
    l.createElement("line", { x1: "12", y1: "20", x2: "12", y2: "4" }),
    l.createElement("line", { x1: "6", y1: "20", x2: "6", y2: "14" }),
  );
});
fe.propTypes = { color: a.string, size: a.oneOfType([a.string, a.number]) };
fe.displayName = "BarChart2";
function m() {
  return (
    (m =
      Object.assign ||
      function (e) {
        for (var i = 1; i < arguments.length; i++) {
          var n = arguments[i];
          for (var t in n)
            Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
        }
        return e;
      }),
    m.apply(this, arguments)
  );
}
function ft(e, i) {
  if (e == null) return {};
  var n = pt(e, i),
    t,
    r;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++)
      ((t = o[r]),
        !(i.indexOf(t) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, t) &&
          (n[t] = e[t]));
  }
  return n;
}
function pt(e, i) {
  if (e == null) return {};
  var n = {},
    t = Object.keys(e),
    r,
    o;
  for (o = 0; o < t.length; o++)
    ((r = t[o]), !(i.indexOf(r) >= 0) && (n[r] = e[r]));
  return n;
}
var pe = f.forwardRef(function (e, i) {
  var n = e.color,
    t = n === void 0 ? "currentColor" : n,
    r = e.size,
    o = r === void 0 ? 24 : r,
    s = ft(e, ["color", "size"]);
  return l.createElement(
    "svg",
    m(
      {
        ref: i,
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: o,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      s,
    ),
    l.createElement("rect", {
      x: "2",
      y: "7",
      width: "20",
      height: "14",
      rx: "2",
      ry: "2",
    }),
    l.createElement("path", {
      d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",
    }),
  );
});
pe.propTypes = { color: a.string, size: a.oneOfType([a.string, a.number]) };
pe.displayName = "Briefcase";
function O() {
  return (
    (O =
      Object.assign ||
      function (e) {
        for (var i = 1; i < arguments.length; i++) {
          var n = arguments[i];
          for (var t in n)
            Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
        }
        return e;
      }),
    O.apply(this, arguments)
  );
}
function ct(e, i) {
  if (e == null) return {};
  var n = ut(e, i),
    t,
    r;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++)
      ((t = o[r]),
        !(i.indexOf(t) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, t) &&
          (n[t] = e[t]));
  }
  return n;
}
function ut(e, i) {
  if (e == null) return {};
  var n = {},
    t = Object.keys(e),
    r,
    o;
  for (o = 0; o < t.length; o++)
    ((r = t[o]), !(i.indexOf(r) >= 0) && (n[r] = e[r]));
  return n;
}
var ce = f.forwardRef(function (e, i) {
  var n = e.color,
    t = n === void 0 ? "currentColor" : n,
    r = e.size,
    o = r === void 0 ? 24 : r,
    s = ct(e, ["color", "size"]);
  return l.createElement(
    "svg",
    O(
      {
        ref: i,
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: o,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      s,
    ),
    l.createElement("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
    l.createElement("polyline", { points: "22 4 12 14.01 9 11.01" }),
  );
});
ce.propTypes = { color: a.string, size: a.oneOfType([a.string, a.number]) };
ce.displayName = "CheckCircle";
function b() {
  return (
    (b =
      Object.assign ||
      function (e) {
        for (var i = 1; i < arguments.length; i++) {
          var n = arguments[i];
          for (var t in n)
            Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
        }
        return e;
      }),
    b.apply(this, arguments)
  );
}
function gt(e, i) {
  if (e == null) return {};
  var n = vt(e, i),
    t,
    r;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++)
      ((t = o[r]),
        !(i.indexOf(t) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, t) &&
          (n[t] = e[t]));
  }
  return n;
}
function vt(e, i) {
  if (e == null) return {};
  var n = {},
    t = Object.keys(e),
    r,
    o;
  for (o = 0; o < t.length; o++)
    ((r = t[o]), !(i.indexOf(r) >= 0) && (n[r] = e[r]));
  return n;
}
var ue = f.forwardRef(function (e, i) {
  var n = e.color,
    t = n === void 0 ? "currentColor" : n,
    r = e.size,
    o = r === void 0 ? 24 : r,
    s = gt(e, ["color", "size"]);
  return l.createElement(
    "svg",
    b(
      {
        ref: i,
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: o,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      s,
    ),
    l.createElement("polyline", { points: "20 6 9 17 4 12" }),
  );
});
ue.propTypes = { color: a.string, size: a.oneOfType([a.string, a.number]) };
ue.displayName = "Check";
function w() {
  return (
    (w =
      Object.assign ||
      function (e) {
        for (var i = 1; i < arguments.length; i++) {
          var n = arguments[i];
          for (var t in n)
            Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
        }
        return e;
      }),
    w.apply(this, arguments)
  );
}
function yt(e, i) {
  if (e == null) return {};
  var n = ht(e, i),
    t,
    r;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++)
      ((t = o[r]),
        !(i.indexOf(t) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, t) &&
          (n[t] = e[t]));
  }
  return n;
}
function ht(e, i) {
  if (e == null) return {};
  var n = {},
    t = Object.keys(e),
    r,
    o;
  for (o = 0; o < t.length; o++)
    ((r = t[o]), !(i.indexOf(r) >= 0) && (n[r] = e[r]));
  return n;
}
var ge = f.forwardRef(function (e, i) {
  var n = e.color,
    t = n === void 0 ? "currentColor" : n,
    r = e.size,
    o = r === void 0 ? 24 : r,
    s = yt(e, ["color", "size"]);
  return l.createElement(
    "svg",
    w(
      {
        ref: i,
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: o,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      s,
    ),
    l.createElement("polyline", { points: "9 18 15 12 9 6" }),
  );
});
ge.propTypes = { color: a.string, size: a.oneOfType([a.string, a.number]) };
ge.displayName = "ChevronRight";
function d() {
  return (
    (d =
      Object.assign ||
      function (e) {
        for (var i = 1; i < arguments.length; i++) {
          var n = arguments[i];
          for (var t in n)
            Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
        }
        return e;
      }),
    d.apply(this, arguments)
  );
}
function mt(e, i) {
  if (e == null) return {};
  var n = Ot(e, i),
    t,
    r;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++)
      ((t = o[r]),
        !(i.indexOf(t) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, t) &&
          (n[t] = e[t]));
  }
  return n;
}
function Ot(e, i) {
  if (e == null) return {};
  var n = {},
    t = Object.keys(e),
    r,
    o;
  for (o = 0; o < t.length; o++)
    ((r = t[o]), !(i.indexOf(r) >= 0) && (n[r] = e[r]));
  return n;
}
var ve = f.forwardRef(function (e, i) {
  var n = e.color,
    t = n === void 0 ? "currentColor" : n,
    r = e.size,
    o = r === void 0 ? 24 : r,
    s = mt(e, ["color", "size"]);
  return l.createElement(
    "svg",
    d(
      {
        ref: i,
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: o,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      s,
    ),
    l.createElement("circle", { cx: "12", cy: "12", r: "10" }),
    l.createElement("polyline", { points: "12 6 12 12 16 14" }),
  );
});
ve.propTypes = { color: a.string, size: a.oneOfType([a.string, a.number]) };
ve.displayName = "Clock";
function j() {
  return (
    (j =
      Object.assign ||
      function (e) {
        for (var i = 1; i < arguments.length; i++) {
          var n = arguments[i];
          for (var t in n)
            Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
        }
        return e;
      }),
    j.apply(this, arguments)
  );
}
function bt(e, i) {
  if (e == null) return {};
  var n = wt(e, i),
    t,
    r;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++)
      ((t = o[r]),
        !(i.indexOf(t) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, t) &&
          (n[t] = e[t]));
  }
  return n;
}
function wt(e, i) {
  if (e == null) return {};
  var n = {},
    t = Object.keys(e),
    r,
    o;
  for (o = 0; o < t.length; o++)
    ((r = t[o]), !(i.indexOf(r) >= 0) && (n[r] = e[r]));
  return n;
}
var ye = f.forwardRef(function (e, i) {
  var n = e.color,
    t = n === void 0 ? "currentColor" : n,
    r = e.size,
    o = r === void 0 ? 24 : r,
    s = bt(e, ["color", "size"]);
  return l.createElement(
    "svg",
    j(
      {
        ref: i,
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: o,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      s,
    ),
    l.createElement("polyline", { points: "16 18 22 12 16 6" }),
    l.createElement("polyline", { points: "8 6 2 12 8 18" }),
  );
});
ye.propTypes = { color: a.string, size: a.oneOfType([a.string, a.number]) };
ye.displayName = "Code";
function x() {
  return (
    (x =
      Object.assign ||
      function (e) {
        for (var i = 1; i < arguments.length; i++) {
          var n = arguments[i];
          for (var t in n)
            Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
        }
        return e;
      }),
    x.apply(this, arguments)
  );
}
function dt(e, i) {
  if (e == null) return {};
  var n = jt(e, i),
    t,
    r;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++)
      ((t = o[r]),
        !(i.indexOf(t) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, t) &&
          (n[t] = e[t]));
  }
  return n;
}
function jt(e, i) {
  if (e == null) return {};
  var n = {},
    t = Object.keys(e),
    r,
    o;
  for (o = 0; o < t.length; o++)
    ((r = t[o]), !(i.indexOf(r) >= 0) && (n[r] = e[r]));
  return n;
}
var he = f.forwardRef(function (e, i) {
  var n = e.color,
    t = n === void 0 ? "currentColor" : n,
    r = e.size,
    o = r === void 0 ? 24 : r,
    s = dt(e, ["color", "size"]);
  return l.createElement(
    "svg",
    x(
      {
        ref: i,
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: o,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      s,
    ),
    l.createElement("path", { d: "M18 8h1a4 4 0 0 1 0 8h-1" }),
    l.createElement("path", {
      d: "M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z",
    }),
    l.createElement("line", { x1: "6", y1: "1", x2: "6", y2: "4" }),
    l.createElement("line", { x1: "10", y1: "1", x2: "10", y2: "4" }),
    l.createElement("line", { x1: "14", y1: "1", x2: "14", y2: "4" }),
  );
});
he.propTypes = { color: a.string, size: a.oneOfType([a.string, a.number]) };
he.displayName = "Coffee";
function k() {
  return (
    (k =
      Object.assign ||
      function (e) {
        for (var i = 1; i < arguments.length; i++) {
          var n = arguments[i];
          for (var t in n)
            Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
        }
        return e;
      }),
    k.apply(this, arguments)
  );
}
function xt(e, i) {
  if (e == null) return {};
  var n = kt(e, i),
    t,
    r;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++)
      ((t = o[r]),
        !(i.indexOf(t) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, t) &&
          (n[t] = e[t]));
  }
  return n;
}
function kt(e, i) {
  if (e == null) return {};
  var n = {},
    t = Object.keys(e),
    r,
    o;
  for (o = 0; o < t.length; o++)
    ((r = t[o]), !(i.indexOf(r) >= 0) && (n[r] = e[r]));
  return n;
}
var me = f.forwardRef(function (e, i) {
  var n = e.color,
    t = n === void 0 ? "currentColor" : n,
    r = e.size,
    o = r === void 0 ? 24 : r,
    s = xt(e, ["color", "size"]);
  return l.createElement(
    "svg",
    k(
      {
        ref: i,
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: o,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      s,
    ),
    l.createElement("rect", {
      x: "4",
      y: "4",
      width: "16",
      height: "16",
      rx: "2",
      ry: "2",
    }),
    l.createElement("rect", { x: "9", y: "9", width: "6", height: "6" }),
    l.createElement("line", { x1: "9", y1: "1", x2: "9", y2: "4" }),
    l.createElement("line", { x1: "15", y1: "1", x2: "15", y2: "4" }),
    l.createElement("line", { x1: "9", y1: "20", x2: "9", y2: "23" }),
    l.createElement("line", { x1: "15", y1: "20", x2: "15", y2: "23" }),
    l.createElement("line", { x1: "20", y1: "9", x2: "23", y2: "9" }),
    l.createElement("line", { x1: "20", y1: "14", x2: "23", y2: "14" }),
    l.createElement("line", { x1: "1", y1: "9", x2: "4", y2: "9" }),
    l.createElement("line", { x1: "1", y1: "14", x2: "4", y2: "14" }),
  );
});
me.propTypes = { color: a.string, size: a.oneOfType([a.string, a.number]) };
me.displayName = "Cpu";
function P() {
  return (
    (P =
      Object.assign ||
      function (e) {
        for (var i = 1; i < arguments.length; i++) {
          var n = arguments[i];
          for (var t in n)
            Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
        }
        return e;
      }),
    P.apply(this, arguments)
  );
}
function Pt(e, i) {
  if (e == null) return {};
  var n = zt(e, i),
    t,
    r;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++)
      ((t = o[r]),
        !(i.indexOf(t) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, t) &&
          (n[t] = e[t]));
  }
  return n;
}
function zt(e, i) {
  if (e == null) return {};
  var n = {},
    t = Object.keys(e),
    r,
    o;
  for (o = 0; o < t.length; o++)
    ((r = t[o]), !(i.indexOf(r) >= 0) && (n[r] = e[r]));
  return n;
}
var Oe = f.forwardRef(function (e, i) {
  var n = e.color,
    t = n === void 0 ? "currentColor" : n,
    r = e.size,
    o = r === void 0 ? 24 : r,
    s = Pt(e, ["color", "size"]);
  return l.createElement(
    "svg",
    P(
      {
        ref: i,
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: o,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      s,
    ),
    l.createElement("rect", {
      x: "1",
      y: "4",
      width: "22",
      height: "16",
      rx: "2",
      ry: "2",
    }),
    l.createElement("line", { x1: "1", y1: "10", x2: "23", y2: "10" }),
  );
});
Oe.propTypes = { color: a.string, size: a.oneOfType([a.string, a.number]) };
Oe.displayName = "CreditCard";
function z() {
  return (
    (z =
      Object.assign ||
      function (e) {
        for (var i = 1; i < arguments.length; i++) {
          var n = arguments[i];
          for (var t in n)
            Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
        }
        return e;
      }),
    z.apply(this, arguments)
  );
}
function Et(e, i) {
  if (e == null) return {};
  var n = $t(e, i),
    t,
    r;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++)
      ((t = o[r]),
        !(i.indexOf(t) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, t) &&
          (n[t] = e[t]));
  }
  return n;
}
function $t(e, i) {
  if (e == null) return {};
  var n = {},
    t = Object.keys(e),
    r,
    o;
  for (o = 0; o < t.length; o++)
    ((r = t[o]), !(i.indexOf(r) >= 0) && (n[r] = e[r]));
  return n;
}
var be = f.forwardRef(function (e, i) {
  var n = e.color,
    t = n === void 0 ? "currentColor" : n,
    r = e.size,
    o = r === void 0 ? 24 : r,
    s = Et(e, ["color", "size"]);
  return l.createElement(
    "svg",
    z(
      {
        ref: i,
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: o,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      s,
    ),
    l.createElement("ellipse", { cx: "12", cy: "5", rx: "9", ry: "3" }),
    l.createElement("path", { d: "M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" }),
    l.createElement("path", { d: "M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" }),
  );
});
be.propTypes = { color: a.string, size: a.oneOfType([a.string, a.number]) };
be.displayName = "Database";
function E() {
  return (
    (E =
      Object.assign ||
      function (e) {
        for (var i = 1; i < arguments.length; i++) {
          var n = arguments[i];
          for (var t in n)
            Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
        }
        return e;
      }),
    E.apply(this, arguments)
  );
}
function Lt(e, i) {
  if (e == null) return {};
  var n = _t(e, i),
    t,
    r;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++)
      ((t = o[r]),
        !(i.indexOf(t) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, t) &&
          (n[t] = e[t]));
  }
  return n;
}
function _t(e, i) {
  if (e == null) return {};
  var n = {},
    t = Object.keys(e),
    r,
    o;
  for (o = 0; o < t.length; o++)
    ((r = t[o]), !(i.indexOf(r) >= 0) && (n[r] = e[r]));
  return n;
}
var we = f.forwardRef(function (e, i) {
  var n = e.color,
    t = n === void 0 ? "currentColor" : n,
    r = e.size,
    o = r === void 0 ? 24 : r,
    s = Lt(e, ["color", "size"]);
  return l.createElement(
    "svg",
    E(
      {
        ref: i,
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: o,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      s,
    ),
    l.createElement("path", {
      d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
    }),
    l.createElement("polyline", { points: "15 3 21 3 21 9" }),
    l.createElement("line", { x1: "10", y1: "14", x2: "21", y2: "3" }),
  );
});
we.propTypes = { color: a.string, size: a.oneOfType([a.string, a.number]) };
we.displayName = "ExternalLink";
function $() {
  return (
    ($ =
      Object.assign ||
      function (e) {
        for (var i = 1; i < arguments.length; i++) {
          var n = arguments[i];
          for (var t in n)
            Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
        }
        return e;
      }),
    $.apply(this, arguments)
  );
}
function Wt(e, i) {
  if (e == null) return {};
  var n = Tt(e, i),
    t,
    r;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++)
      ((t = o[r]),
        !(i.indexOf(t) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, t) &&
          (n[t] = e[t]));
  }
  return n;
}
function Tt(e, i) {
  if (e == null) return {};
  var n = {},
    t = Object.keys(e),
    r,
    o;
  for (o = 0; o < t.length; o++)
    ((r = t[o]), !(i.indexOf(r) >= 0) && (n[r] = e[r]));
  return n;
}
var de = f.forwardRef(function (e, i) {
  var n = e.color,
    t = n === void 0 ? "currentColor" : n,
    r = e.size,
    o = r === void 0 ? 24 : r,
    s = Wt(e, ["color", "size"]);
  return l.createElement(
    "svg",
    $(
      {
        ref: i,
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: o,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      s,
    ),
    l.createElement("path", {
      d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z",
    }),
    l.createElement("circle", { cx: "12", cy: "12", r: "3" }),
  );
});
de.propTypes = { color: a.string, size: a.oneOfType([a.string, a.number]) };
de.displayName = "Eye";
function L() {
  return (
    (L =
      Object.assign ||
      function (e) {
        for (var i = 1; i < arguments.length; i++) {
          var n = arguments[i];
          for (var t in n)
            Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
        }
        return e;
      }),
    L.apply(this, arguments)
  );
}
function Ct(e, i) {
  if (e == null) return {};
  var n = St(e, i),
    t,
    r;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++)
      ((t = o[r]),
        !(i.indexOf(t) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, t) &&
          (n[t] = e[t]));
  }
  return n;
}
function St(e, i) {
  if (e == null) return {};
  var n = {},
    t = Object.keys(e),
    r,
    o;
  for (o = 0; o < t.length; o++)
    ((r = t[o]), !(i.indexOf(r) >= 0) && (n[r] = e[r]));
  return n;
}
var je = f.forwardRef(function (e, i) {
  var n = e.color,
    t = n === void 0 ? "currentColor" : n,
    r = e.size,
    o = r === void 0 ? 24 : r,
    s = Ct(e, ["color", "size"]);
  return l.createElement(
    "svg",
    L(
      {
        ref: i,
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: o,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      s,
    ),
    l.createElement("path", {
      d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z",
    }),
    l.createElement("polyline", { points: "14 2 14 8 20 8" }),
    l.createElement("line", { x1: "16", y1: "13", x2: "8", y2: "13" }),
    l.createElement("line", { x1: "16", y1: "17", x2: "8", y2: "17" }),
    l.createElement("polyline", { points: "10 9 9 9 8 9" }),
  );
});
je.propTypes = { color: a.string, size: a.oneOfType([a.string, a.number]) };
je.displayName = "FileText";
function _() {
  return (
    (_ =
      Object.assign ||
      function (e) {
        for (var i = 1; i < arguments.length; i++) {
          var n = arguments[i];
          for (var t in n)
            Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
        }
        return e;
      }),
    _.apply(this, arguments)
  );
}
function Rt(e, i) {
  if (e == null) return {};
  var n = Bt(e, i),
    t,
    r;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++)
      ((t = o[r]),
        !(i.indexOf(t) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, t) &&
          (n[t] = e[t]));
  }
  return n;
}
function Bt(e, i) {
  if (e == null) return {};
  var n = {},
    t = Object.keys(e),
    r,
    o;
  for (o = 0; o < t.length; o++)
    ((r = t[o]), !(i.indexOf(r) >= 0) && (n[r] = e[r]));
  return n;
}
var xe = f.forwardRef(function (e, i) {
  var n = e.color,
    t = n === void 0 ? "currentColor" : n,
    r = e.size,
    o = r === void 0 ? 24 : r,
    s = Rt(e, ["color", "size"]);
  return l.createElement(
    "svg",
    _(
      {
        ref: i,
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: o,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      s,
    ),
    l.createElement("line", { x1: "6", y1: "3", x2: "6", y2: "15" }),
    l.createElement("circle", { cx: "18", cy: "6", r: "3" }),
    l.createElement("circle", { cx: "6", cy: "18", r: "3" }),
    l.createElement("path", { d: "M18 9a9 9 0 0 1-9 9" }),
  );
});
xe.propTypes = { color: a.string, size: a.oneOfType([a.string, a.number]) };
xe.displayName = "GitBranch";
function W() {
  return (
    (W =
      Object.assign ||
      function (e) {
        for (var i = 1; i < arguments.length; i++) {
          var n = arguments[i];
          for (var t in n)
            Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
        }
        return e;
      }),
    W.apply(this, arguments)
  );
}
function Nt(e, i) {
  if (e == null) return {};
  var n = It(e, i),
    t,
    r;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++)
      ((t = o[r]),
        !(i.indexOf(t) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, t) &&
          (n[t] = e[t]));
  }
  return n;
}
function It(e, i) {
  if (e == null) return {};
  var n = {},
    t = Object.keys(e),
    r,
    o;
  for (o = 0; o < t.length; o++)
    ((r = t[o]), !(i.indexOf(r) >= 0) && (n[r] = e[r]));
  return n;
}
var ke = f.forwardRef(function (e, i) {
  var n = e.color,
    t = n === void 0 ? "currentColor" : n,
    r = e.size,
    o = r === void 0 ? 24 : r,
    s = Nt(e, ["color", "size"]);
  return l.createElement(
    "svg",
    W(
      {
        ref: i,
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: o,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      s,
    ),
    l.createElement("path", {
      d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22",
    }),
  );
});
ke.propTypes = { color: a.string, size: a.oneOfType([a.string, a.number]) };
ke.displayName = "GitHub";
function T() {
  return (
    (T =
      Object.assign ||
      function (e) {
        for (var i = 1; i < arguments.length; i++) {
          var n = arguments[i];
          for (var t in n)
            Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
        }
        return e;
      }),
    T.apply(this, arguments)
  );
}
function Mt(e, i) {
  if (e == null) return {};
  var n = At(e, i),
    t,
    r;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++)
      ((t = o[r]),
        !(i.indexOf(t) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, t) &&
          (n[t] = e[t]));
  }
  return n;
}
function At(e, i) {
  if (e == null) return {};
  var n = {},
    t = Object.keys(e),
    r,
    o;
  for (o = 0; o < t.length; o++)
    ((r = t[o]), !(i.indexOf(r) >= 0) && (n[r] = e[r]));
  return n;
}
var Pe = f.forwardRef(function (e, i) {
  var n = e.color,
    t = n === void 0 ? "currentColor" : n,
    r = e.size,
    o = r === void 0 ? 24 : r,
    s = Mt(e, ["color", "size"]);
  return l.createElement(
    "svg",
    T(
      {
        ref: i,
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: o,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      s,
    ),
    l.createElement("circle", { cx: "12", cy: "12", r: "10" }),
    l.createElement("line", { x1: "2", y1: "12", x2: "22", y2: "12" }),
    l.createElement("path", {
      d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",
    }),
  );
});
Pe.propTypes = { color: a.string, size: a.oneOfType([a.string, a.number]) };
Pe.displayName = "Globe";
function C() {
  return (
    (C =
      Object.assign ||
      function (e) {
        for (var i = 1; i < arguments.length; i++) {
          var n = arguments[i];
          for (var t in n)
            Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
        }
        return e;
      }),
    C.apply(this, arguments)
  );
}
function qt(e, i) {
  if (e == null) return {};
  var n = Ft(e, i),
    t,
    r;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++)
      ((t = o[r]),
        !(i.indexOf(t) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, t) &&
          (n[t] = e[t]));
  }
  return n;
}
function Ft(e, i) {
  if (e == null) return {};
  var n = {},
    t = Object.keys(e),
    r,
    o;
  for (o = 0; o < t.length; o++)
    ((r = t[o]), !(i.indexOf(r) >= 0) && (n[r] = e[r]));
  return n;
}
var ze = f.forwardRef(function (e, i) {
  var n = e.color,
    t = n === void 0 ? "currentColor" : n,
    r = e.size,
    o = r === void 0 ? 24 : r,
    s = qt(e, ["color", "size"]);
  return l.createElement(
    "svg",
    C(
      {
        ref: i,
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: o,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      s,
    ),
    l.createElement("polygon", { points: "12 2 2 7 12 12 22 7 12 2" }),
    l.createElement("polyline", { points: "2 17 12 22 22 17" }),
    l.createElement("polyline", { points: "2 12 12 17 22 12" }),
  );
});
ze.propTypes = { color: a.string, size: a.oneOfType([a.string, a.number]) };
ze.displayName = "Layers";
function S() {
  return (
    (S =
      Object.assign ||
      function (e) {
        for (var i = 1; i < arguments.length; i++) {
          var n = arguments[i];
          for (var t in n)
            Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
        }
        return e;
      }),
    S.apply(this, arguments)
  );
}
function Vt(e, i) {
  if (e == null) return {};
  var n = Gt(e, i),
    t,
    r;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++)
      ((t = o[r]),
        !(i.indexOf(t) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, t) &&
          (n[t] = e[t]));
  }
  return n;
}
function Gt(e, i) {
  if (e == null) return {};
  var n = {},
    t = Object.keys(e),
    r,
    o;
  for (o = 0; o < t.length; o++)
    ((r = t[o]), !(i.indexOf(r) >= 0) && (n[r] = e[r]));
  return n;
}
var Ee = f.forwardRef(function (e, i) {
  var n = e.color,
    t = n === void 0 ? "currentColor" : n,
    r = e.size,
    o = r === void 0 ? 24 : r,
    s = Vt(e, ["color", "size"]);
  return l.createElement(
    "svg",
    S(
      {
        ref: i,
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: o,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      s,
    ),
    l.createElement("path", {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
    }),
    l.createElement("rect", { x: "2", y: "9", width: "4", height: "12" }),
    l.createElement("circle", { cx: "4", cy: "4", r: "2" }),
  );
});
Ee.propTypes = { color: a.string, size: a.oneOfType([a.string, a.number]) };
Ee.displayName = "Linkedin";
function R() {
  return (
    (R =
      Object.assign ||
      function (e) {
        for (var i = 1; i < arguments.length; i++) {
          var n = arguments[i];
          for (var t in n)
            Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
        }
        return e;
      }),
    R.apply(this, arguments)
  );
}
function Ht(e, i) {
  if (e == null) return {};
  var n = Dt(e, i),
    t,
    r;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++)
      ((t = o[r]),
        !(i.indexOf(t) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, t) &&
          (n[t] = e[t]));
  }
  return n;
}
function Dt(e, i) {
  if (e == null) return {};
  var n = {},
    t = Object.keys(e),
    r,
    o;
  for (o = 0; o < t.length; o++)
    ((r = t[o]), !(i.indexOf(r) >= 0) && (n[r] = e[r]));
  return n;
}
var $e = f.forwardRef(function (e, i) {
  var n = e.color,
    t = n === void 0 ? "currentColor" : n,
    r = e.size,
    o = r === void 0 ? 24 : r,
    s = Ht(e, ["color", "size"]);
  return l.createElement(
    "svg",
    R(
      {
        ref: i,
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: o,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      s,
    ),
    l.createElement("path", {
      d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z",
    }),
    l.createElement("polyline", { points: "22,6 12,13 2,6" }),
  );
});
$e.propTypes = { color: a.string, size: a.oneOfType([a.string, a.number]) };
$e.displayName = "Mail";
function B() {
  return (
    (B =
      Object.assign ||
      function (e) {
        for (var i = 1; i < arguments.length; i++) {
          var n = arguments[i];
          for (var t in n)
            Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
        }
        return e;
      }),
    B.apply(this, arguments)
  );
}
function Ut(e, i) {
  if (e == null) return {};
  var n = Zt(e, i),
    t,
    r;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++)
      ((t = o[r]),
        !(i.indexOf(t) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, t) &&
          (n[t] = e[t]));
  }
  return n;
}
function Zt(e, i) {
  if (e == null) return {};
  var n = {},
    t = Object.keys(e),
    r,
    o;
  for (o = 0; o < t.length; o++)
    ((r = t[o]), !(i.indexOf(r) >= 0) && (n[r] = e[r]));
  return n;
}
var Le = f.forwardRef(function (e, i) {
  var n = e.color,
    t = n === void 0 ? "currentColor" : n,
    r = e.size,
    o = r === void 0 ? 24 : r,
    s = Ut(e, ["color", "size"]);
  return l.createElement(
    "svg",
    B(
      {
        ref: i,
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: o,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      s,
    ),
    l.createElement("path", {
      d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z",
    }),
    l.createElement("circle", { cx: "12", cy: "10", r: "3" }),
  );
});
Le.propTypes = { color: a.string, size: a.oneOfType([a.string, a.number]) };
Le.displayName = "MapPin";
function N() {
  return (
    (N =
      Object.assign ||
      function (e) {
        for (var i = 1; i < arguments.length; i++) {
          var n = arguments[i];
          for (var t in n)
            Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
        }
        return e;
      }),
    N.apply(this, arguments)
  );
}
function Xt(e, i) {
  if (e == null) return {};
  var n = Yt(e, i),
    t,
    r;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++)
      ((t = o[r]),
        !(i.indexOf(t) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, t) &&
          (n[t] = e[t]));
  }
  return n;
}
function Yt(e, i) {
  if (e == null) return {};
  var n = {},
    t = Object.keys(e),
    r,
    o;
  for (o = 0; o < t.length; o++)
    ((r = t[o]), !(i.indexOf(r) >= 0) && (n[r] = e[r]));
  return n;
}
var _e = f.forwardRef(function (e, i) {
  var n = e.color,
    t = n === void 0 ? "currentColor" : n,
    r = e.size,
    o = r === void 0 ? 24 : r,
    s = Xt(e, ["color", "size"]);
  return l.createElement(
    "svg",
    N(
      {
        ref: i,
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: o,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      s,
    ),
    l.createElement("polygon", {
      points: "1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6",
    }),
    l.createElement("line", { x1: "8", y1: "2", x2: "8", y2: "18" }),
    l.createElement("line", { x1: "16", y1: "6", x2: "16", y2: "22" }),
  );
});
_e.propTypes = { color: a.string, size: a.oneOfType([a.string, a.number]) };
_e.displayName = "Map";
function I() {
  return (
    (I =
      Object.assign ||
      function (e) {
        for (var i = 1; i < arguments.length; i++) {
          var n = arguments[i];
          for (var t in n)
            Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
        }
        return e;
      }),
    I.apply(this, arguments)
  );
}
function Jt(e, i) {
  if (e == null) return {};
  var n = Kt(e, i),
    t,
    r;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++)
      ((t = o[r]),
        !(i.indexOf(t) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, t) &&
          (n[t] = e[t]));
  }
  return n;
}
function Kt(e, i) {
  if (e == null) return {};
  var n = {},
    t = Object.keys(e),
    r,
    o;
  for (o = 0; o < t.length; o++)
    ((r = t[o]), !(i.indexOf(r) >= 0) && (n[r] = e[r]));
  return n;
}
var We = f.forwardRef(function (e, i) {
  var n = e.color,
    t = n === void 0 ? "currentColor" : n,
    r = e.size,
    o = r === void 0 ? 24 : r,
    s = Jt(e, ["color", "size"]);
  return l.createElement(
    "svg",
    I(
      {
        ref: i,
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: o,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      s,
    ),
    l.createElement("line", { x1: "3", y1: "12", x2: "21", y2: "12" }),
    l.createElement("line", { x1: "3", y1: "6", x2: "21", y2: "6" }),
    l.createElement("line", { x1: "3", y1: "18", x2: "21", y2: "18" }),
  );
});
We.propTypes = { color: a.string, size: a.oneOfType([a.string, a.number]) };
We.displayName = "Menu";
function M() {
  return (
    (M =
      Object.assign ||
      function (e) {
        for (var i = 1; i < arguments.length; i++) {
          var n = arguments[i];
          for (var t in n)
            Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
        }
        return e;
      }),
    M.apply(this, arguments)
  );
}
function Qt(e, i) {
  if (e == null) return {};
  var n = er(e, i),
    t,
    r;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++)
      ((t = o[r]),
        !(i.indexOf(t) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, t) &&
          (n[t] = e[t]));
  }
  return n;
}
function er(e, i) {
  if (e == null) return {};
  var n = {},
    t = Object.keys(e),
    r,
    o;
  for (o = 0; o < t.length; o++)
    ((r = t[o]), !(i.indexOf(r) >= 0) && (n[r] = e[r]));
  return n;
}
var Te = f.forwardRef(function (e, i) {
  var n = e.color,
    t = n === void 0 ? "currentColor" : n,
    r = e.size,
    o = r === void 0 ? 24 : r,
    s = Qt(e, ["color", "size"]);
  return l.createElement(
    "svg",
    M(
      {
        ref: i,
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: o,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      s,
    ),
    l.createElement("path", {
      d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
    }),
  );
});
Te.propTypes = { color: a.string, size: a.oneOfType([a.string, a.number]) };
Te.displayName = "MessageSquare";
function A() {
  return (
    (A =
      Object.assign ||
      function (e) {
        for (var i = 1; i < arguments.length; i++) {
          var n = arguments[i];
          for (var t in n)
            Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
        }
        return e;
      }),
    A.apply(this, arguments)
  );
}
function tr(e, i) {
  if (e == null) return {};
  var n = rr(e, i),
    t,
    r;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++)
      ((t = o[r]),
        !(i.indexOf(t) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, t) &&
          (n[t] = e[t]));
  }
  return n;
}
function rr(e, i) {
  if (e == null) return {};
  var n = {},
    t = Object.keys(e),
    r,
    o;
  for (o = 0; o < t.length; o++)
    ((r = t[o]), !(i.indexOf(r) >= 0) && (n[r] = e[r]));
  return n;
}
var Ce = f.forwardRef(function (e, i) {
  var n = e.color,
    t = n === void 0 ? "currentColor" : n,
    r = e.size,
    o = r === void 0 ? 24 : r,
    s = tr(e, ["color", "size"]);
  return l.createElement(
    "svg",
    A(
      {
        ref: i,
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: o,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      s,
    ),
    l.createElement("rect", {
      x: "2",
      y: "3",
      width: "20",
      height: "14",
      rx: "2",
      ry: "2",
    }),
    l.createElement("line", { x1: "8", y1: "21", x2: "16", y2: "21" }),
    l.createElement("line", { x1: "12", y1: "17", x2: "12", y2: "21" }),
  );
});
Ce.propTypes = { color: a.string, size: a.oneOfType([a.string, a.number]) };
Ce.displayName = "Monitor";
function q() {
  return (
    (q =
      Object.assign ||
      function (e) {
        for (var i = 1; i < arguments.length; i++) {
          var n = arguments[i];
          for (var t in n)
            Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
        }
        return e;
      }),
    q.apply(this, arguments)
  );
}
function nr(e, i) {
  if (e == null) return {};
  var n = or(e, i),
    t,
    r;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++)
      ((t = o[r]),
        !(i.indexOf(t) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, t) &&
          (n[t] = e[t]));
  }
  return n;
}
function or(e, i) {
  if (e == null) return {};
  var n = {},
    t = Object.keys(e),
    r,
    o;
  for (o = 0; o < t.length; o++)
    ((r = t[o]), !(i.indexOf(r) >= 0) && (n[r] = e[r]));
  return n;
}
var Se = f.forwardRef(function (e, i) {
  var n = e.color,
    t = n === void 0 ? "currentColor" : n,
    r = e.size,
    o = r === void 0 ? 24 : r,
    s = nr(e, ["color", "size"]);
  return l.createElement(
    "svg",
    q(
      {
        ref: i,
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: o,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      s,
    ),
    l.createElement("polygon", { points: "3 11 22 2 13 21 11 13 3 11" }),
  );
});
Se.propTypes = { color: a.string, size: a.oneOfType([a.string, a.number]) };
Se.displayName = "Navigation";
function F() {
  return (
    (F =
      Object.assign ||
      function (e) {
        for (var i = 1; i < arguments.length; i++) {
          var n = arguments[i];
          for (var t in n)
            Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
        }
        return e;
      }),
    F.apply(this, arguments)
  );
}
function ir(e, i) {
  if (e == null) return {};
  var n = ar(e, i),
    t,
    r;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++)
      ((t = o[r]),
        !(i.indexOf(t) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, t) &&
          (n[t] = e[t]));
  }
  return n;
}
function ar(e, i) {
  if (e == null) return {};
  var n = {},
    t = Object.keys(e),
    r,
    o;
  for (o = 0; o < t.length; o++)
    ((r = t[o]), !(i.indexOf(r) >= 0) && (n[r] = e[r]));
  return n;
}
var Re = f.forwardRef(function (e, i) {
  var n = e.color,
    t = n === void 0 ? "currentColor" : n,
    r = e.size,
    o = r === void 0 ? 24 : r,
    s = ir(e, ["color", "size"]);
  return l.createElement(
    "svg",
    F(
      {
        ref: i,
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: o,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      s,
    ),
    l.createElement("polygon", { points: "5 3 19 12 5 21 5 3" }),
  );
});
Re.propTypes = { color: a.string, size: a.oneOfType([a.string, a.number]) };
Re.displayName = "Play";
function V() {
  return (
    (V =
      Object.assign ||
      function (e) {
        for (var i = 1; i < arguments.length; i++) {
          var n = arguments[i];
          for (var t in n)
            Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
        }
        return e;
      }),
    V.apply(this, arguments)
  );
}
function lr(e, i) {
  if (e == null) return {};
  var n = sr(e, i),
    t,
    r;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++)
      ((t = o[r]),
        !(i.indexOf(t) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, t) &&
          (n[t] = e[t]));
  }
  return n;
}
function sr(e, i) {
  if (e == null) return {};
  var n = {},
    t = Object.keys(e),
    r,
    o;
  for (o = 0; o < t.length; o++)
    ((r = t[o]), !(i.indexOf(r) >= 0) && (n[r] = e[r]));
  return n;
}
var Be = f.forwardRef(function (e, i) {
  var n = e.color,
    t = n === void 0 ? "currentColor" : n,
    r = e.size,
    o = r === void 0 ? 24 : r,
    s = lr(e, ["color", "size"]);
  return l.createElement(
    "svg",
    V(
      {
        ref: i,
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: o,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      s,
    ),
    l.createElement("line", { x1: "22", y1: "2", x2: "11", y2: "13" }),
    l.createElement("polygon", { points: "22 2 15 22 11 13 2 9 22 2" }),
  );
});
Be.propTypes = { color: a.string, size: a.oneOfType([a.string, a.number]) };
Be.displayName = "Send";
function G() {
  return (
    (G =
      Object.assign ||
      function (e) {
        for (var i = 1; i < arguments.length; i++) {
          var n = arguments[i];
          for (var t in n)
            Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
        }
        return e;
      }),
    G.apply(this, arguments)
  );
}
function fr(e, i) {
  if (e == null) return {};
  var n = pr(e, i),
    t,
    r;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++)
      ((t = o[r]),
        !(i.indexOf(t) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, t) &&
          (n[t] = e[t]));
  }
  return n;
}
function pr(e, i) {
  if (e == null) return {};
  var n = {},
    t = Object.keys(e),
    r,
    o;
  for (o = 0; o < t.length; o++)
    ((r = t[o]), !(i.indexOf(r) >= 0) && (n[r] = e[r]));
  return n;
}
var Ne = f.forwardRef(function (e, i) {
  var n = e.color,
    t = n === void 0 ? "currentColor" : n,
    r = e.size,
    o = r === void 0 ? 24 : r,
    s = fr(e, ["color", "size"]);
  return l.createElement(
    "svg",
    G(
      {
        ref: i,
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: o,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      s,
    ),
    l.createElement("rect", {
      x: "2",
      y: "2",
      width: "20",
      height: "8",
      rx: "2",
      ry: "2",
    }),
    l.createElement("rect", {
      x: "2",
      y: "14",
      width: "20",
      height: "8",
      rx: "2",
      ry: "2",
    }),
    l.createElement("line", { x1: "6", y1: "6", x2: "6.01", y2: "6" }),
    l.createElement("line", { x1: "6", y1: "18", x2: "6.01", y2: "18" }),
  );
});
Ne.propTypes = { color: a.string, size: a.oneOfType([a.string, a.number]) };
Ne.displayName = "Server";
function H() {
  return (
    (H =
      Object.assign ||
      function (e) {
        for (var i = 1; i < arguments.length; i++) {
          var n = arguments[i];
          for (var t in n)
            Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
        }
        return e;
      }),
    H.apply(this, arguments)
  );
}
function cr(e, i) {
  if (e == null) return {};
  var n = ur(e, i),
    t,
    r;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++)
      ((t = o[r]),
        !(i.indexOf(t) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, t) &&
          (n[t] = e[t]));
  }
  return n;
}
function ur(e, i) {
  if (e == null) return {};
  var n = {},
    t = Object.keys(e),
    r,
    o;
  for (o = 0; o < t.length; o++)
    ((r = t[o]), !(i.indexOf(r) >= 0) && (n[r] = e[r]));
  return n;
}
var Ie = f.forwardRef(function (e, i) {
  var n = e.color,
    t = n === void 0 ? "currentColor" : n,
    r = e.size,
    o = r === void 0 ? 24 : r,
    s = cr(e, ["color", "size"]);
  return l.createElement(
    "svg",
    H(
      {
        ref: i,
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: o,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      s,
    ),
    l.createElement("path", {
      d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    }),
  );
});
Ie.propTypes = { color: a.string, size: a.oneOfType([a.string, a.number]) };
Ie.displayName = "Shield";
function D() {
  return (
    (D =
      Object.assign ||
      function (e) {
        for (var i = 1; i < arguments.length; i++) {
          var n = arguments[i];
          for (var t in n)
            Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
        }
        return e;
      }),
    D.apply(this, arguments)
  );
}
function gr(e, i) {
  if (e == null) return {};
  var n = vr(e, i),
    t,
    r;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++)
      ((t = o[r]),
        !(i.indexOf(t) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, t) &&
          (n[t] = e[t]));
  }
  return n;
}
function vr(e, i) {
  if (e == null) return {};
  var n = {},
    t = Object.keys(e),
    r,
    o;
  for (o = 0; o < t.length; o++)
    ((r = t[o]), !(i.indexOf(r) >= 0) && (n[r] = e[r]));
  return n;
}
var Me = f.forwardRef(function (e, i) {
  var n = e.color,
    t = n === void 0 ? "currentColor" : n,
    r = e.size,
    o = r === void 0 ? 24 : r,
    s = gr(e, ["color", "size"]);
  return l.createElement(
    "svg",
    D(
      {
        ref: i,
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: o,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      s,
    ),
    l.createElement("rect", {
      x: "5",
      y: "2",
      width: "14",
      height: "20",
      rx: "2",
      ry: "2",
    }),
    l.createElement("line", { x1: "12", y1: "18", x2: "12.01", y2: "18" }),
  );
});
Me.propTypes = { color: a.string, size: a.oneOfType([a.string, a.number]) };
Me.displayName = "Smartphone";
function U() {
  return (
    (U =
      Object.assign ||
      function (e) {
        for (var i = 1; i < arguments.length; i++) {
          var n = arguments[i];
          for (var t in n)
            Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
        }
        return e;
      }),
    U.apply(this, arguments)
  );
}
function yr(e, i) {
  if (e == null) return {};
  var n = hr(e, i),
    t,
    r;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++)
      ((t = o[r]),
        !(i.indexOf(t) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, t) &&
          (n[t] = e[t]));
  }
  return n;
}
function hr(e, i) {
  if (e == null) return {};
  var n = {},
    t = Object.keys(e),
    r,
    o;
  for (o = 0; o < t.length; o++)
    ((r = t[o]), !(i.indexOf(r) >= 0) && (n[r] = e[r]));
  return n;
}
var Ae = f.forwardRef(function (e, i) {
  var n = e.color,
    t = n === void 0 ? "currentColor" : n,
    r = e.size,
    o = r === void 0 ? 24 : r,
    s = yr(e, ["color", "size"]);
  return l.createElement(
    "svg",
    U(
      {
        ref: i,
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: o,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      s,
    ),
    l.createElement("polygon", {
      points:
        "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
    }),
  );
});
Ae.propTypes = { color: a.string, size: a.oneOfType([a.string, a.number]) };
Ae.displayName = "Star";
function Z() {
  return (
    (Z =
      Object.assign ||
      function (e) {
        for (var i = 1; i < arguments.length; i++) {
          var n = arguments[i];
          for (var t in n)
            Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
        }
        return e;
      }),
    Z.apply(this, arguments)
  );
}
function mr(e, i) {
  if (e == null) return {};
  var n = Or(e, i),
    t,
    r;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++)
      ((t = o[r]),
        !(i.indexOf(t) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, t) &&
          (n[t] = e[t]));
  }
  return n;
}
function Or(e, i) {
  if (e == null) return {};
  var n = {},
    t = Object.keys(e),
    r,
    o;
  for (o = 0; o < t.length; o++)
    ((r = t[o]), !(i.indexOf(r) >= 0) && (n[r] = e[r]));
  return n;
}
var qe = f.forwardRef(function (e, i) {
  var n = e.color,
    t = n === void 0 ? "currentColor" : n,
    r = e.size,
    o = r === void 0 ? 24 : r,
    s = mr(e, ["color", "size"]);
  return l.createElement(
    "svg",
    Z(
      {
        ref: i,
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: o,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      s,
    ),
    l.createElement("circle", { cx: "12", cy: "12", r: "10" }),
    l.createElement("circle", { cx: "12", cy: "12", r: "6" }),
    l.createElement("circle", { cx: "12", cy: "12", r: "2" }),
  );
});
qe.propTypes = { color: a.string, size: a.oneOfType([a.string, a.number]) };
qe.displayName = "Target";
function X() {
  return (
    (X =
      Object.assign ||
      function (e) {
        for (var i = 1; i < arguments.length; i++) {
          var n = arguments[i];
          for (var t in n)
            Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
        }
        return e;
      }),
    X.apply(this, arguments)
  );
}
function br(e, i) {
  if (e == null) return {};
  var n = wr(e, i),
    t,
    r;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++)
      ((t = o[r]),
        !(i.indexOf(t) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, t) &&
          (n[t] = e[t]));
  }
  return n;
}
function wr(e, i) {
  if (e == null) return {};
  var n = {},
    t = Object.keys(e),
    r,
    o;
  for (o = 0; o < t.length; o++)
    ((r = t[o]), !(i.indexOf(r) >= 0) && (n[r] = e[r]));
  return n;
}
var Fe = f.forwardRef(function (e, i) {
  var n = e.color,
    t = n === void 0 ? "currentColor" : n,
    r = e.size,
    o = r === void 0 ? 24 : r,
    s = br(e, ["color", "size"]);
  return l.createElement(
    "svg",
    X(
      {
        ref: i,
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: o,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      s,
    ),
    l.createElement("path", {
      d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
    }),
  );
});
Fe.propTypes = { color: a.string, size: a.oneOfType([a.string, a.number]) };
Fe.displayName = "Tool";
function Y() {
  return (
    (Y =
      Object.assign ||
      function (e) {
        for (var i = 1; i < arguments.length; i++) {
          var n = arguments[i];
          for (var t in n)
            Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
        }
        return e;
      }),
    Y.apply(this, arguments)
  );
}
function dr(e, i) {
  if (e == null) return {};
  var n = jr(e, i),
    t,
    r;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++)
      ((t = o[r]),
        !(i.indexOf(t) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, t) &&
          (n[t] = e[t]));
  }
  return n;
}
function jr(e, i) {
  if (e == null) return {};
  var n = {},
    t = Object.keys(e),
    r,
    o;
  for (o = 0; o < t.length; o++)
    ((r = t[o]), !(i.indexOf(r) >= 0) && (n[r] = e[r]));
  return n;
}
var Ve = f.forwardRef(function (e, i) {
  var n = e.color,
    t = n === void 0 ? "currentColor" : n,
    r = e.size,
    o = r === void 0 ? 24 : r,
    s = dr(e, ["color", "size"]);
  return l.createElement(
    "svg",
    Y(
      {
        ref: i,
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: o,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      s,
    ),
    l.createElement("polyline", { points: "23 6 13.5 15.5 8.5 10.5 1 18" }),
    l.createElement("polyline", { points: "17 6 23 6 23 12" }),
  );
});
Ve.propTypes = { color: a.string, size: a.oneOfType([a.string, a.number]) };
Ve.displayName = "TrendingUp";
function J() {
  return (
    (J =
      Object.assign ||
      function (e) {
        for (var i = 1; i < arguments.length; i++) {
          var n = arguments[i];
          for (var t in n)
            Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
        }
        return e;
      }),
    J.apply(this, arguments)
  );
}
function xr(e, i) {
  if (e == null) return {};
  var n = kr(e, i),
    t,
    r;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++)
      ((t = o[r]),
        !(i.indexOf(t) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, t) &&
          (n[t] = e[t]));
  }
  return n;
}
function kr(e, i) {
  if (e == null) return {};
  var n = {},
    t = Object.keys(e),
    r,
    o;
  for (o = 0; o < t.length; o++)
    ((r = t[o]), !(i.indexOf(r) >= 0) && (n[r] = e[r]));
  return n;
}
var Ge = f.forwardRef(function (e, i) {
  var n = e.color,
    t = n === void 0 ? "currentColor" : n,
    r = e.size,
    o = r === void 0 ? 24 : r,
    s = xr(e, ["color", "size"]);
  return l.createElement(
    "svg",
    J(
      {
        ref: i,
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: o,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      s,
    ),
    l.createElement("rect", { x: "1", y: "3", width: "15", height: "13" }),
    l.createElement("polygon", { points: "16 8 20 8 23 11 23 16 16 16 16 8" }),
    l.createElement("circle", { cx: "5.5", cy: "18.5", r: "2.5" }),
    l.createElement("circle", { cx: "18.5", cy: "18.5", r: "2.5" }),
  );
});
Ge.propTypes = { color: a.string, size: a.oneOfType([a.string, a.number]) };
Ge.displayName = "Truck";
function K() {
  return (
    (K =
      Object.assign ||
      function (e) {
        for (var i = 1; i < arguments.length; i++) {
          var n = arguments[i];
          for (var t in n)
            Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
        }
        return e;
      }),
    K.apply(this, arguments)
  );
}
function Pr(e, i) {
  if (e == null) return {};
  var n = zr(e, i),
    t,
    r;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++)
      ((t = o[r]),
        !(i.indexOf(t) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, t) &&
          (n[t] = e[t]));
  }
  return n;
}
function zr(e, i) {
  if (e == null) return {};
  var n = {},
    t = Object.keys(e),
    r,
    o;
  for (o = 0; o < t.length; o++)
    ((r = t[o]), !(i.indexOf(r) >= 0) && (n[r] = e[r]));
  return n;
}
var He = f.forwardRef(function (e, i) {
  var n = e.color,
    t = n === void 0 ? "currentColor" : n,
    r = e.size,
    o = r === void 0 ? 24 : r,
    s = Pr(e, ["color", "size"]);
  return l.createElement(
    "svg",
    K(
      {
        ref: i,
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: o,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      s,
    ),
    l.createElement("path", { d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }),
    l.createElement("circle", { cx: "8.5", cy: "7", r: "4" }),
    l.createElement("polyline", { points: "17 11 19 13 23 9" }),
  );
});
He.propTypes = { color: a.string, size: a.oneOfType([a.string, a.number]) };
He.displayName = "UserCheck";
function Q() {
  return (
    (Q =
      Object.assign ||
      function (e) {
        for (var i = 1; i < arguments.length; i++) {
          var n = arguments[i];
          for (var t in n)
            Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
        }
        return e;
      }),
    Q.apply(this, arguments)
  );
}
function Er(e, i) {
  if (e == null) return {};
  var n = $r(e, i),
    t,
    r;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++)
      ((t = o[r]),
        !(i.indexOf(t) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, t) &&
          (n[t] = e[t]));
  }
  return n;
}
function $r(e, i) {
  if (e == null) return {};
  var n = {},
    t = Object.keys(e),
    r,
    o;
  for (o = 0; o < t.length; o++)
    ((r = t[o]), !(i.indexOf(r) >= 0) && (n[r] = e[r]));
  return n;
}
var De = f.forwardRef(function (e, i) {
  var n = e.color,
    t = n === void 0 ? "currentColor" : n,
    r = e.size,
    o = r === void 0 ? 24 : r,
    s = Er(e, ["color", "size"]);
  return l.createElement(
    "svg",
    Q(
      {
        ref: i,
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: o,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      s,
    ),
    l.createElement("path", { d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }),
    l.createElement("circle", { cx: "9", cy: "7", r: "4" }),
    l.createElement("path", { d: "M23 21v-2a4 4 0 0 0-3-3.87" }),
    l.createElement("path", { d: "M16 3.13a4 4 0 0 1 0 7.75" }),
  );
});
De.propTypes = { color: a.string, size: a.oneOfType([a.string, a.number]) };
De.displayName = "Users";
function ee() {
  return (
    (ee =
      Object.assign ||
      function (e) {
        for (var i = 1; i < arguments.length; i++) {
          var n = arguments[i];
          for (var t in n)
            Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
        }
        return e;
      }),
    ee.apply(this, arguments)
  );
}
function Lr(e, i) {
  if (e == null) return {};
  var n = _r(e, i),
    t,
    r;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++)
      ((t = o[r]),
        !(i.indexOf(t) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, t) &&
          (n[t] = e[t]));
  }
  return n;
}
function _r(e, i) {
  if (e == null) return {};
  var n = {},
    t = Object.keys(e),
    r,
    o;
  for (o = 0; o < t.length; o++)
    ((r = t[o]), !(i.indexOf(r) >= 0) && (n[r] = e[r]));
  return n;
}
var Ue = f.forwardRef(function (e, i) {
  var n = e.color,
    t = n === void 0 ? "currentColor" : n,
    r = e.size,
    o = r === void 0 ? 24 : r,
    s = Lr(e, ["color", "size"]);
  return l.createElement(
    "svg",
    ee(
      {
        ref: i,
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: o,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      s,
    ),
    l.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    l.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
  );
});
Ue.propTypes = { color: a.string, size: a.oneOfType([a.string, a.number]) };
Ue.displayName = "X";
function te() {
  return (
    (te =
      Object.assign ||
      function (e) {
        for (var i = 1; i < arguments.length; i++) {
          var n = arguments[i];
          for (var t in n)
            Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
        }
        return e;
      }),
    te.apply(this, arguments)
  );
}
function Wr(e, i) {
  if (e == null) return {};
  var n = Tr(e, i),
    t,
    r;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++)
      ((t = o[r]),
        !(i.indexOf(t) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, t) &&
          (n[t] = e[t]));
  }
  return n;
}
function Tr(e, i) {
  if (e == null) return {};
  var n = {},
    t = Object.keys(e),
    r,
    o;
  for (o = 0; o < t.length; o++)
    ((r = t[o]), !(i.indexOf(r) >= 0) && (n[r] = e[r]));
  return n;
}
var Ze = f.forwardRef(function (e, i) {
  var n = e.color,
    t = n === void 0 ? "currentColor" : n,
    r = e.size,
    o = r === void 0 ? 24 : r,
    s = Wr(e, ["color", "size"]);
  return l.createElement(
    "svg",
    te(
      {
        ref: i,
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: o,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      s,
    ),
    l.createElement("polygon", {
      points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2",
    }),
  );
});
Ze.propTypes = { color: a.string, size: a.oneOfType([a.string, a.number]) };
Ze.displayName = "Zap";
export {
  le as A,
  pe as B,
  ye as C,
  be as D,
  de as E,
  je as F,
  ke as G,
  Ee as L,
  Le as M,
  Se as N,
  Re as P,
  Be as S,
  qe as T,
  De as U,
  Ue as X,
  Ze as Z,
  Ae as a,
  ve as b,
  he as c,
  $e as d,
  ae as e,
  ce as f,
  Me as g,
  ge as h,
  we as i,
  Ve as j,
  se as k,
  Te as l,
  _e as m,
  Ie as n,
  Oe as o,
  He as p,
  Ce as q,
  me as r,
  Ne as s,
  xe as t,
  ze as u,
  Pe as v,
  ue as w,
  We as x,
};
