var no = Object.defineProperty,
  so = Object.defineProperties;
var io = Object.getOwnPropertyDescriptors;
var Jt = Object.getOwnPropertySymbols;
var _n = Object.prototype.hasOwnProperty,
  zn = Object.prototype.propertyIsEnumerable;
var ve = Math.pow,
  Hn = (t, e, n) =>
    e in t
      ? no(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[e] = n),
  y = (t, e) => {
    for (var n in e || (e = {})) _n.call(e, n) && Hn(t, n, e[n]);
    if (Jt) for (var n of Jt(e)) zn.call(e, n) && Hn(t, n, e[n]);
    return t;
  },
  M = (t, e) => so(t, io(e));
var W = (t, e) => {
  var n = {};
  for (var s in t) _n.call(t, s) && e.indexOf(s) < 0 && (n[s] = t[s]);
  if (t != null && Jt)
    for (var s of Jt(t)) e.indexOf(s) < 0 && zn.call(t, s) && (n[s] = t[s]);
  return n;
};
import { j as tt } from "./_uiVendor";
import { a as A } from "./_reactVendor";
const nn = A.createContext({});
function Gt(t) {
  const e = A.useRef(null);
  return (e.current === null && (e.current = t()), e.current);
}
const sn = typeof window != "undefined",
  rn = sn ? A.useLayoutEffect : A.useEffect,
  fe = A.createContext(null);
function on(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function de(t, e) {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}
const et = (t, e, n) => (n > e ? e : n < t ? t : n);
let an = () => { };
const nt = {},
  fi = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
function di(t) {
  return typeof t == "object" && t !== null;
}
const mi = (t) => /^0[^.\s]+$/u.test(t);
function ln(t) {
  let e;
  return () => (e === void 0 && (e = t()), e);
}
const X = (t) => t,
  ro = (t, e) => (n) => e(t(n)),
  Ht = (...t) => t.reduce(ro),
  Pt = (t, e, n) => {
    const s = e - t;
    return s === 0 ? 1 : (n - t) / s;
  };
class un {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    return (on(this.subscriptions, e), () => de(this.subscriptions, e));
  }
  notify(e, n, s) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](e, n, s);
      else
        for (let o = 0; o < i; o++) {
          const r = this.subscriptions[o];
          r && r(e, n, s);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const J = (t) => t * 1e3,
  z = (t) => t / 1e3;
function pi(t, e) {
  return e ? t * (1e3 / e) : 0;
}
const oo = (t, e, n) => {
  const s = e - t;
  return ((((n - t) % s) + s) % s) + t;
},
  gi = (t, e, n) =>
    (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t,
  ao = 1e-7,
  lo = 12;
function uo(t, e, n, s, i) {
  let o,
    r,
    a = 0;
  do ((r = e + (n - e) / 2), (o = gi(r, s, i) - t), o > 0 ? (n = r) : (e = r));
  while (Math.abs(o) > ao && ++a < lo);
  return r;
}
function _t(t, e, n, s) {
  if (t === e && n === s) return X;
  const i = (o) => uo(o, 0, 1, t, n);
  return (o) => (o === 0 || o === 1 ? o : gi(i(o), e, s));
}
const yi = (t) => (e) => (e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2),
  vi = (t) => (e) => 1 - t(1 - e),
  xi = _t(0.33, 1.53, 0.69, 0.99),
  cn = vi(xi),
  Ti = yi(cn),
  Ai = (t) =>
    (t *= 2) < 1 ? 0.5 * cn(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
  hn = (t) => 1 - Math.sin(Math.acos(t)),
  Si = vi(hn),
  Pi = yi(hn),
  co = _t(0.42, 0, 1, 1),
  ho = _t(0, 0, 0.58, 1),
  bi = _t(0.42, 0, 0.58, 1),
  wi = (t) => Array.isArray(t) && typeof t[0] != "number";
function Vi(t, e) {
  return wi(t) ? t[oo(0, t.length, e)] : t;
}
const Ci = (t) => Array.isArray(t) && typeof t[0] == "number",
  fo = {
    linear: X,
    easeIn: co,
    easeInOut: bi,
    easeOut: ho,
    circIn: hn,
    circInOut: Pi,
    circOut: Si,
    backIn: cn,
    backInOut: Ti,
    backOut: xi,
    anticipate: Ai,
  },
  mo = (t) => typeof t == "string",
  Xn = (t) => {
    if (Ci(t)) {
      an(t.length === 4);
      const [e, n, s, i] = t;
      return _t(e, n, s, i);
    } else if (mo(t)) return fo[t];
    return t;
  },
  Qt = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender",
  ];
function po(t, e) {
  let n = new Set(),
    s = new Set(),
    i = !1,
    o = !1;
  const r = new WeakSet();
  let a = { delta: 0, timestamp: 0, isProcessing: !1 };
  function l(u) {
    (r.has(u) && (c.schedule(u), t()), u(a));
  }
  const c = {
    schedule: (u, h = !1, f = !1) => {
      const m = f && i ? n : s;
      return (h && r.add(u), m.has(u) || m.add(u), u);
    },
    cancel: (u) => {
      (s.delete(u), r.delete(u));
    },
    process: (u) => {
      if (((a = u), i)) {
        o = !0;
        return;
      }
      ((i = !0),
        ([n, s] = [s, n]),
        n.forEach(l),
        n.clear(),
        (i = !1),
        o && ((o = !1), c.process(u)));
    },
  };
  return c;
}
const go = 40;
function Mi(t, e) {
  let n = !1,
    s = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    o = () => (n = !0),
    r = Qt.reduce((x, P) => ((x[P] = po(o)), x), {}),
    {
      setup: a,
      read: l,
      resolveKeyframes: c,
      preUpdate: u,
      update: h,
      preRender: f,
      render: d,
      postRender: m,
    } = r,
    p = () => {
      const x = nt.useManualTiming ? i.timestamp : performance.now();
      ((n = !1),
        nt.useManualTiming ||
        (i.delta = s ? 1e3 / 60 : Math.max(Math.min(x - i.timestamp, go), 1)),
        (i.timestamp = x),
        (i.isProcessing = !0),
        a.process(i),
        l.process(i),
        c.process(i),
        u.process(i),
        h.process(i),
        f.process(i),
        d.process(i),
        m.process(i),
        (i.isProcessing = !1),
        n && e && ((s = !1), t(p)));
    },
    g = () => {
      ((n = !0), (s = !0), i.isProcessing || t(p));
    };
  return {
    schedule: Qt.reduce((x, P) => {
      const S = r[P];
      return (
        (x[P] = (w, C = !1, b = !1) => (n || g(), S.schedule(w, C, b))),
        x
      );
    }, {}),
    cancel: (x) => {
      for (let P = 0; P < Qt.length; P++) r[Qt[P]].cancel(x);
    },
    state: i,
    steps: r,
  };
}
const {
  schedule: D,
  cancel: st,
  state: U,
  steps: xe,
} = Mi(
  typeof requestAnimationFrame != "undefined" ? requestAnimationFrame : X,
  !0,
);
let se;
function yo() {
  se = void 0;
}
const H = {
  now: () => (
    se === void 0 &&
    H.set(
      U.isProcessing || nt.useManualTiming
        ? U.timestamp
        : performance.now(),
    ),
    se
  ),
  set: (t) => {
    ((se = t), queueMicrotask(yo));
  },
},
  Di = (t) => (e) => typeof e == "string" && e.startsWith(t),
  Ei = Di("--"),
  vo = Di("var(--"),
  fn = (t) => (vo(t) ? xo.test(t.split("/*")[0].trim()) : !1),
  xo =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  wt = {
    test: (t) => typeof t == "number",
    parse: parseFloat,
    transform: (t) => t,
  },
  jt = M(y({}, wt), { transform: (t) => et(0, 1, t) }),
  te = M(y({}, wt), { default: 1 }),
  Ft = (t) => Math.round(t * 1e5) / 1e5,
  dn = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function To(t) {
  return t == null;
}
const Ao =
  /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  mn = (t, e) => (n) =>
    !!(
      (typeof n == "string" && Ao.test(n) && n.startsWith(t)) ||
      (e && !To(n) && Object.prototype.hasOwnProperty.call(n, e))
    ),
  Ri = (t, e, n) => (s) => {
    if (typeof s != "string") return s;
    const [i, o, r, a] = s.match(dn);
    return {
      [t]: parseFloat(i),
      [e]: parseFloat(o),
      [n]: parseFloat(r),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  So = (t) => et(0, 255, t),
  Te = M(y({}, wt), { transform: (t) => Math.round(So(t)) }),
  ct = {
    test: mn("rgb", "red"),
    parse: Ri("red", "green", "blue"),
    transform: ({ red: t, green: e, blue: n, alpha: s = 1 }) =>
      "rgba(" +
      Te.transform(t) +
      ", " +
      Te.transform(e) +
      ", " +
      Te.transform(n) +
      ", " +
      Ft(jt.transform(s)) +
      ")",
  };
function Po(t) {
  let e = "",
    n = "",
    s = "",
    i = "";
  return (
    t.length > 5
      ? ((e = t.substring(1, 3)),
        (n = t.substring(3, 5)),
        (s = t.substring(5, 7)),
        (i = t.substring(7, 9)))
      : ((e = t.substring(1, 2)),
        (n = t.substring(2, 3)),
        (s = t.substring(3, 4)),
        (i = t.substring(4, 5)),
        (e += e),
        (n += n),
        (s += s),
        (i += i)),
    {
      red: parseInt(e, 16),
      green: parseInt(n, 16),
      blue: parseInt(s, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const Ie = { test: mn("#"), parse: Po, transform: ct.transform },
  zt = (t) => ({
    test: (e) =>
      typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
    parse: parseFloat,
    transform: (e) => `${e}${t}`,
  }),
  it = zt("deg"),
  Q = zt("%"),
  V = zt("px"),
  bo = zt("vh"),
  wo = zt("vw"),
  Yn = M(y({}, Q), {
    parse: (t) => Q.parse(t) / 100,
    transform: (t) => Q.transform(t * 100),
  }),
  yt = {
    test: mn("hsl", "hue"),
    parse: Ri("hue", "saturation", "lightness"),
    transform: ({ hue: t, saturation: e, lightness: n, alpha: s = 1 }) =>
      "hsla(" +
      Math.round(t) +
      ", " +
      Q.transform(Ft(e)) +
      ", " +
      Q.transform(Ft(n)) +
      ", " +
      Ft(jt.transform(s)) +
      ")",
  },
  B = {
    test: (t) => ct.test(t) || Ie.test(t) || yt.test(t),
    parse: (t) =>
      ct.test(t) ? ct.parse(t) : yt.test(t) ? yt.parse(t) : Ie.parse(t),
    transform: (t) =>
      typeof t == "string"
        ? t
        : t.hasOwnProperty("red")
          ? ct.transform(t)
          : yt.transform(t),
    getAnimatableNone: (t) => {
      const e = B.parse(t);
      return ((e.alpha = 0), B.transform(e));
    },
  },
  Vo =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Co(t) {
  var e, n;
  return (
    isNaN(t) &&
    typeof t == "string" &&
    (((e = t.match(dn)) == null ? void 0 : e.length) || 0) +
    (((n = t.match(Vo)) == null ? void 0 : n.length) || 0) >
    0
  );
}
const Li = "number",
  Fi = "color",
  Mo = "var",
  Do = "var(",
  qn = "${}",
  Eo =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Nt(t) {
  const e = t.toString(),
    n = [],
    s = { color: [], number: [], var: [] },
    i = [];
  let o = 0;
  const a = e
    .replace(
      Eo,
      (l) => (
        B.test(l)
          ? (s.color.push(o), i.push(Fi), n.push(B.parse(l)))
          : l.startsWith(Do)
            ? (s.var.push(o), i.push(Mo), n.push(l))
            : (s.number.push(o), i.push(Li), n.push(parseFloat(l))),
        ++o,
        qn
      ),
    )
    .split(qn);
  return { values: n, split: a, indexes: s, types: i };
}
function Ii(t) {
  return Nt(t).values;
}
function ki(t) {
  const { split: e, types: n } = Nt(t),
    s = e.length;
  return (i) => {
    let o = "";
    for (let r = 0; r < s; r++)
      if (((o += e[r]), i[r] !== void 0)) {
        const a = n[r];
        a === Li
          ? (o += Ft(i[r]))
          : a === Fi
            ? (o += B.transform(i[r]))
            : (o += i[r]);
      }
    return o;
  };
}
const Ro = (t) =>
  typeof t == "number" ? 0 : B.test(t) ? B.getAnimatableNone(t) : t;
function Lo(t) {
  const e = Ii(t);
  return ki(t)(e.map(Ro));
}
const rt = {
  test: Co,
  parse: Ii,
  createTransformer: ki,
  getAnimatableNone: Lo,
};
function Ae(t, e, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? t + (e - t) * 6 * n
      : n < 1 / 2
        ? e
        : n < 2 / 3
          ? t + (e - t) * (2 / 3 - n) * 6
          : t
  );
}
function Fo({ hue: t, saturation: e, lightness: n, alpha: s }) {
  ((t /= 360), (e /= 100), (n /= 100));
  let i = 0,
    o = 0,
    r = 0;
  if (!e) i = o = r = n;
  else {
    const a = n < 0.5 ? n * (1 + e) : n + e - n * e,
      l = 2 * n - a;
    ((i = Ae(l, a, t + 1 / 3)), (o = Ae(l, a, t)), (r = Ae(l, a, t - 1 / 3)));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(r * 255),
    alpha: s,
  };
}
function ae(t, e) {
  return (n) => (n > 0 ? e : t);
}
const L = (t, e, n) => t + (e - t) * n,
  Se = (t, e, n) => {
    const s = t * t,
      i = n * (e * e - s) + s;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  Io = [Ie, ct, yt],
  ko = (t) => Io.find((e) => e.test(t));
function Zn(t) {
  const e = ko(t);
  if (!e) return !1;
  let n = e.parse(t);
  return (e === yt && (n = Fo(n)), n);
}
const Jn = (t, e) => {
  const n = Zn(t),
    s = Zn(e);
  if (!n || !s) return ae(t, e);
  const i = y({}, n);
  return (o) => (
    (i.red = Se(n.red, s.red, o)),
    (i.green = Se(n.green, s.green, o)),
    (i.blue = Se(n.blue, s.blue, o)),
    (i.alpha = L(n.alpha, s.alpha, o)),
    ct.transform(i)
  );
},
  ke = new Set(["none", "hidden"]);
function Bo(t, e) {
  return ke.has(t) ? (n) => (n <= 0 ? t : e) : (n) => (n >= 1 ? e : t);
}
function Oo(t, e) {
  return (n) => L(t, e, n);
}
function pn(t) {
  return typeof t == "number"
    ? Oo
    : typeof t == "string"
      ? fn(t)
        ? ae
        : B.test(t)
          ? Jn
          : Uo
      : Array.isArray(t)
        ? Bi
        : typeof t == "object"
          ? B.test(t)
            ? Jn
            : jo
          : ae;
}
function Bi(t, e) {
  const n = [...t],
    s = n.length,
    i = t.map((o, r) => pn(o)(o, e[r]));
  return (o) => {
    for (let r = 0; r < s; r++) n[r] = i[r](o);
    return n;
  };
}
function jo(t, e) {
  const n = y(y({}, t), e),
    s = {};
  for (const i in n)
    t[i] !== void 0 && e[i] !== void 0 && (s[i] = pn(t[i])(t[i], e[i]));
  return (i) => {
    for (const o in s) n[o] = s[o](i);
    return n;
  };
}
function No(t, e) {
  var i;
  const n = [],
    s = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < e.values.length; o++) {
    const r = e.types[o],
      a = t.indexes[r][s[r]],
      l = (i = t.values[a]) != null ? i : 0;
    ((n[o] = l), s[r]++);
  }
  return n;
}
const Uo = (t, e) => {
  const n = rt.createTransformer(e),
    s = Nt(t),
    i = Nt(e);
  return s.indexes.var.length === i.indexes.var.length &&
    s.indexes.color.length === i.indexes.color.length &&
    s.indexes.number.length >= i.indexes.number.length
    ? (ke.has(t) && !i.values.length) || (ke.has(e) && !s.values.length)
      ? Bo(t, e)
      : Ht(Bi(No(s, i), i.values), n)
    : ae(t, e);
};
function Oi(t, e, n) {
  return typeof t == "number" && typeof e == "number" && typeof n == "number"
    ? L(t, e, n)
    : pn(t)(t, e);
}
const Ko = (t) => {
  const e = ({ timestamp: n }) => t(n);
  return {
    start: (n = !0) => D.update(e, n),
    stop: () => st(e),
    now: () => (U.isProcessing ? U.timestamp : H.now()),
  };
},
  ji = (t, e, n = 10) => {
    let s = "";
    const i = Math.max(Math.round(e / n), 2);
    for (let o = 0; o < i; o++)
      s += Math.round(t(o / (i - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${s.substring(0, s.length - 2)})`;
  },
  le = 2e4;
function gn(t) {
  let e = 0;
  const n = 50;
  let s = t.next(e);
  for (; !s.done && e < le;) ((e += n), (s = t.next(e)));
  return e >= le ? 1 / 0 : e;
}
function Ni(t, e = 100, n) {
  const s = n(M(y({}, t), { keyframes: [0, e] })),
    i = Math.min(gn(s), le);
  return {
    type: "keyframes",
    ease: (o) => s.next(i * o).value / e,
    duration: z(i),
  };
}
const Wo = 5;
function Ui(t, e, n) {
  const s = Math.max(e - Wo, 0);
  return pi(n - t(s), e - s);
}
const F = {
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  duration: 800,
  bounce: 0.3,
  visualDuration: 0.3,
  restSpeed: { granular: 0.01, default: 2 },
  restDelta: { granular: 0.005, default: 0.5 },
  minDuration: 0.01,
  maxDuration: 10,
  minDamping: 0.05,
  maxDamping: 1,
},
  Pe = 0.001;
function $o({
  duration: t = F.duration,
  bounce: e = F.bounce,
  velocity: n = F.velocity,
  mass: s = F.mass,
}) {
  let i,
    o,
    r = 1 - e;
  ((r = et(F.minDamping, F.maxDamping, r)),
    (t = et(F.minDuration, F.maxDuration, z(t))),
    r < 1
      ? ((i = (c) => {
        const u = c * r,
          h = u * t,
          f = u - n,
          d = Be(c, r),
          m = Math.exp(-h);
        return Pe - (f / d) * m;
      }),
        (o = (c) => {
          const h = c * r * t,
            f = h * n + n,
            d = Math.pow(r, 2) * Math.pow(c, 2) * t,
            m = Math.exp(-h),
            p = Be(Math.pow(c, 2), r);
          return ((-i(c) + Pe > 0 ? -1 : 1) * ((f - d) * m)) / p;
        }))
      : ((i = (c) => {
        const u = Math.exp(-c * t),
          h = (c - n) * t + 1;
        return -Pe + u * h;
      }),
        (o = (c) => {
          const u = Math.exp(-c * t),
            h = (n - c) * (t * t);
          return u * h;
        })));
  const a = 5 / t,
    l = Ho(i, o, a);
  if (((t = J(t)), isNaN(l)))
    return { stiffness: F.stiffness, damping: F.damping, duration: t };
  {
    const c = Math.pow(l, 2) * s;
    return { stiffness: c, damping: r * 2 * Math.sqrt(s * c), duration: t };
  }
}
const Go = 12;
function Ho(t, e, n) {
  let s = n;
  for (let i = 1; i < Go; i++) s = s - t(s) / e(s);
  return s;
}
function Be(t, e) {
  return t * Math.sqrt(1 - e * e);
}
const _o = ["duration", "bounce"],
  zo = ["stiffness", "damping", "mass"];
function Qn(t, e) {
  return e.some((n) => t[n] !== void 0);
}
function Xo(t) {
  let e = y(
    {
      velocity: F.velocity,
      stiffness: F.stiffness,
      damping: F.damping,
      mass: F.mass,
      isResolvedFromDuration: !1,
    },
    t,
  );
  if (!Qn(t, zo) && Qn(t, _o))
    if (t.visualDuration) {
      const n = t.visualDuration,
        s = (2 * Math.PI) / (n * 1.2),
        i = s * s,
        o = 2 * et(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(i);
      e = M(y({}, e), { mass: F.mass, stiffness: i, damping: o });
    } else {
      const n = $o(t);
      ((e = M(y(y({}, e), n), { mass: F.mass })),
        (e.isResolvedFromDuration = !0));
    }
  return e;
}
function Ut(t = F.visualDuration, e = F.bounce) {
  const n =
    typeof t != "object"
      ? { visualDuration: t, keyframes: [0, 1], bounce: e }
      : t;
  let { restSpeed: s, restDelta: i } = n;
  const o = n.keyframes[0],
    r = n.keyframes[n.keyframes.length - 1],
    a = { done: !1, value: o },
    {
      stiffness: l,
      damping: c,
      mass: u,
      duration: h,
      velocity: f,
      isResolvedFromDuration: d,
    } = Xo(M(y({}, n), { velocity: -z(n.velocity || 0) })),
    m = f || 0,
    p = c / (2 * Math.sqrt(l * u)),
    g = r - o,
    v = z(Math.sqrt(l / u)),
    T = Math.abs(g) < 5;
  (s || (s = T ? F.restSpeed.granular : F.restSpeed.default),
    i || (i = T ? F.restDelta.granular : F.restDelta.default));
  let x;
  if (p < 1) {
    const S = Be(v, p);
    x = (w) => {
      const C = Math.exp(-p * v * w);
      return (
        r - C * (((m + p * v * g) / S) * Math.sin(S * w) + g * Math.cos(S * w))
      );
    };
  } else if (p === 1) x = (S) => r - Math.exp(-v * S) * (g + (m + v * g) * S);
  else {
    const S = v * Math.sqrt(p * p - 1);
    x = (w) => {
      const C = Math.exp(-p * v * w),
        b = Math.min(S * w, 300);
      return (
        r - (C * ((m + p * v * g) * Math.sinh(b) + S * g * Math.cosh(b))) / S
      );
    };
  }
  const P = {
    calculatedDuration: (d && h) || null,
    next: (S) => {
      const w = x(S);
      if (d) a.done = S >= h;
      else {
        let C = S === 0 ? m : 0;
        p < 1 && (C = S === 0 ? J(m) : Ui(x, S, w));
        const b = Math.abs(C) <= s,
          E = Math.abs(r - w) <= i;
        a.done = b && E;
      }
      return ((a.value = a.done ? r : w), a);
    },
    toString: () => {
      const S = Math.min(gn(P), le),
        w = ji((C) => P.next(S * C).value, S, 30);
      return S + "ms " + w;
    },
    toTransition: () => { },
  };
  return P;
}
Ut.applyToOptions = (t) => {
  const e = Ni(t, 100, Ut);
  return (
    (t.ease = e.ease),
    (t.duration = J(e.duration)),
    (t.type = "keyframes"),
    t
  );
};
function Oe({
  keyframes: t,
  velocity: e = 0,
  power: n = 0.8,
  timeConstant: s = 325,
  bounceDamping: i = 10,
  bounceStiffness: o = 500,
  modifyTarget: r,
  min: a,
  max: l,
  restDelta: c = 0.5,
  restSpeed: u,
}) {
  const h = t[0],
    f = { done: !1, value: h },
    d = (b) => (a !== void 0 && b < a) || (l !== void 0 && b > l),
    m = (b) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - b) < Math.abs(l - b)
          ? a
          : l;
  let p = n * e;
  const g = h + p,
    v = r === void 0 ? g : r(g);
  v !== g && (p = v - h);
  const T = (b) => -p * Math.exp(-b / s),
    x = (b) => v + T(b),
    P = (b) => {
      const E = T(b),
        I = x(b);
      ((f.done = Math.abs(E) <= c), (f.value = f.done ? v : I));
    };
  let S, w;
  const C = (b) => {
    d(f.value) &&
      ((S = b),
        (w = Ut({
          keyframes: [f.value, m(f.value)],
          velocity: Ui(x, b, f.value),
          damping: i,
          stiffness: o,
          restDelta: c,
          restSpeed: u,
        })));
  };
  return (
    C(0),
    {
      calculatedDuration: null,
      next: (b) => {
        let E = !1;
        return (
          !w && S === void 0 && ((E = !0), P(b), C(b)),
          S !== void 0 && b >= S ? w.next(b - S) : (!E && P(b), f)
        );
      },
    }
  );
}
function Yo(t, e, n) {
  const s = [],
    i = n || nt.mix || Oi,
    o = t.length - 1;
  for (let r = 0; r < o; r++) {
    let a = i(t[r], t[r + 1]);
    if (e) {
      const l = Array.isArray(e) ? e[r] || X : e;
      a = Ht(l, a);
    }
    s.push(a);
  }
  return s;
}
function Ki(t, e, { clamp: n = !0, ease: s, mixer: i } = {}) {
  const o = t.length;
  if ((an(o === e.length), o === 1)) return () => e[0];
  if (o === 2 && e[0] === e[1]) return () => e[1];
  const r = t[0] === t[1];
  t[0] > t[o - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
  const a = Yo(e, s, i),
    l = a.length,
    c = (u) => {
      if (r && u < t[0]) return e[0];
      let h = 0;
      if (l > 1) for (; h < t.length - 2 && !(u < t[h + 1]); h++);
      const f = Pt(t[h], t[h + 1], u);
      return a[h](f);
    };
  return n ? (u) => c(et(t[0], t[o - 1], u)) : c;
}
function Wi(t, e) {
  const n = t[t.length - 1];
  for (let s = 1; s <= e; s++) {
    const i = Pt(0, e, s);
    t.push(L(n, 1, i));
  }
}
function $i(t) {
  const e = [0];
  return (Wi(e, t.length - 1), e);
}
function qo(t, e) {
  return t.map((n) => n * e);
}
function Zo(t, e) {
  return t.map(() => e || bi).splice(0, t.length - 1);
}
function It({
  duration: t = 300,
  keyframes: e,
  times: n,
  ease: s = "easeInOut",
}) {
  const i = wi(s) ? s.map(Xn) : Xn(s),
    o = { done: !1, value: e[0] },
    r = qo(n && n.length === e.length ? n : $i(e), t),
    a = Ki(r, e, { ease: Array.isArray(i) ? i : Zo(e, i) });
  return {
    calculatedDuration: t,
    next: (l) => ((o.value = a(l)), (o.done = l >= t), o),
  };
}
const Jo = (t) => t !== null;
function yn(t, { repeat: e, repeatType: n = "loop" }, s, i = 1) {
  const o = t.filter(Jo),
    a = i < 0 || (e && n !== "loop" && e % 2 === 1) ? 0 : o.length - 1;
  return !a || s === void 0 ? o[a] : s;
}
const Qo = { decay: Oe, inertia: Oe, tween: It, keyframes: It, spring: Ut };
function Gi(t) {
  typeof t.type == "string" && (t.type = Qo[t.type]);
}
class vn {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((e) => {
      this.resolve = e;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(e, n) {
    return this.finished.then(e, n);
  }
}
const ta = (t) => t / 100;
class xn extends vn {
  constructor(e) {
    (super(),
      (this.state = "idle"),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.stop = () => {
        var s, i;
        const { motionValue: n } = this.options;
        (n && n.updatedAt !== H.now() && this.tick(H.now()),
          (this.isStopped = !0),
          this.state !== "idle" &&
          (this.teardown(),
            (i = (s = this.options).onStop) == null || i.call(s)));
      }),
      (this.options = e),
      this.initAnimation(),
      this.play(),
      e.autoplay === !1 && this.pause());
  }
  initAnimation() {
    const { options: e } = this;
    Gi(e);
    const {
      type: n = It,
      repeat: s = 0,
      repeatDelay: i = 0,
      repeatType: o,
      velocity: r = 0,
    } = e;
    let { keyframes: a } = e;
    const l = n || It;
    l !== It &&
      typeof a[0] != "number" &&
      ((this.mixKeyframes = Ht(ta, Oi(a[0], a[1]))), (a = [0, 100]));
    const c = l(M(y({}, e), { keyframes: a }));
    (o === "mirror" &&
      (this.mirroredGenerator = l(
        M(y({}, e), { keyframes: [...a].reverse(), velocity: -r }),
      )),
      c.calculatedDuration === null && (c.calculatedDuration = gn(c)));
    const { calculatedDuration: u } = c;
    ((this.calculatedDuration = u),
      (this.resolvedDuration = u + i),
      (this.totalDuration = this.resolvedDuration * (s + 1) - i),
      (this.generator = c));
  }
  updateTime(e) {
    const n = Math.round(e - this.startTime) * this.playbackSpeed;
    this.holdTime !== null
      ? (this.currentTime = this.holdTime)
      : (this.currentTime = n);
  }
  tick(e, n = !1) {
    const {
      generator: s,
      totalDuration: i,
      mixKeyframes: o,
      mirroredGenerator: r,
      resolvedDuration: a,
      calculatedDuration: l,
    } = this;
    if (this.startTime === null) return s.next(0);
    const {
      delay: c = 0,
      keyframes: u,
      repeat: h,
      repeatType: f,
      repeatDelay: d,
      type: m,
      onUpdate: p,
      finalKeyframe: g,
    } = this.options;
    (this.speed > 0
      ? (this.startTime = Math.min(this.startTime, e))
      : this.speed < 0 &&
      (this.startTime = Math.min(e - i / this.speed, this.startTime)),
      n ? (this.currentTime = e) : this.updateTime(e));
    const v = this.currentTime - c * (this.playbackSpeed >= 0 ? 1 : -1),
      T = this.playbackSpeed >= 0 ? v < 0 : v > i;
    ((this.currentTime = Math.max(v, 0)),
      this.state === "finished" &&
      this.holdTime === null &&
      (this.currentTime = i));
    let x = this.currentTime,
      P = s;
    if (h) {
      const b = Math.min(this.currentTime, i) / a;
      let E = Math.floor(b),
        I = b % 1;
      (!I && b >= 1 && (I = 1),
        I === 1 && E--,
        (E = Math.min(E, h + 1)),
        E % 2 &&
        (f === "reverse"
          ? ((I = 1 - I), d && (I -= d / a))
          : f === "mirror" && (P = r)),
        (x = et(0, 1, I) * a));
    }
    const S = T ? { done: !1, value: u[0] } : P.next(x);
    o && (S.value = o(S.value));
    let { done: w } = S;
    !T &&
      l !== null &&
      (w =
        this.playbackSpeed >= 0
          ? this.currentTime >= i
          : this.currentTime <= 0);
    const C =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && w));
    return (
      C && m !== Oe && (S.value = yn(u, this.options, g, this.speed)),
      p && p(S.value),
      C && this.finish(),
      S
    );
  }
  then(e, n) {
    return this.finished.then(e, n);
  }
  get duration() {
    return z(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: e = 0 } = this.options || {};
    return this.duration + z(e);
  }
  get time() {
    return z(this.currentTime);
  }
  set time(e) {
    var n;
    ((e = J(e)),
      (this.currentTime = e),
      this.startTime === null ||
        this.holdTime !== null ||
        this.playbackSpeed === 0
        ? (this.holdTime = e)
        : this.driver &&
        (this.startTime = this.driver.now() - e / this.playbackSpeed),
      (n = this.driver) == null || n.start(!1));
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(e) {
    this.updateTime(H.now());
    const n = this.playbackSpeed !== e;
    ((this.playbackSpeed = e), n && (this.time = z(this.currentTime)));
  }
  play() {
    var i, o;
    if (this.isStopped) return;
    const { driver: e = Ko, startTime: n } = this.options;
    (this.driver || (this.driver = e((r) => this.tick(r))),
      (o = (i = this.options).onPlay) == null || o.call(i));
    const s = this.driver.now();
    (this.state === "finished"
      ? (this.updateFinished(), (this.startTime = s))
      : this.holdTime !== null
        ? (this.startTime = s - this.holdTime)
        : this.startTime || (this.startTime = n != null ? n : s),
      this.state === "finished" &&
      this.speed < 0 &&
      (this.startTime += this.calculatedDuration),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start());
  }
  pause() {
    ((this.state = "paused"),
      this.updateTime(H.now()),
      (this.holdTime = this.currentTime));
  }
  complete() {
    (this.state !== "running" && this.play(),
      (this.state = "finished"),
      (this.holdTime = null));
  }
  finish() {
    var e, n;
    (this.notifyFinished(),
      this.teardown(),
      (this.state = "finished"),
      (n = (e = this.options).onComplete) == null || n.call(e));
  }
  cancel() {
    var e, n;
    ((this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      (n = (e = this.options).onCancel) == null || n.call(e));
  }
  teardown() {
    ((this.state = "idle"),
      this.stopDriver(),
      (this.startTime = this.holdTime = null));
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(e) {
    return ((this.startTime = 0), this.tick(e, !0));
  }
  attachTimeline(e) {
    var n;
    return (
      this.options.allowFlatten &&
      ((this.options.type = "keyframes"),
        (this.options.ease = "linear"),
        this.initAnimation()),
      (n = this.driver) == null || n.stop(),
      e.observe(this)
    );
  }
}
function ea(t) {
  var e;
  for (let n = 1; n < t.length; n++) (e = t[n]) != null || (t[n] = t[n - 1]);
}
const ht = (t) => (t * 180) / Math.PI,
  je = (t) => {
    const e = ht(Math.atan2(t[1], t[0]));
    return Ne(e);
  },
  na = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
    rotate: je,
    rotateZ: je,
    skewX: (t) => ht(Math.atan(t[1])),
    skewY: (t) => ht(Math.atan(t[2])),
    skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2,
  },
  Ne = (t) => ((t = t % 360), t < 0 && (t += 360), t),
  ts = je,
  es = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]),
  ns = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]),
  sa = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: es,
    scaleY: ns,
    scale: (t) => (es(t) + ns(t)) / 2,
    rotateX: (t) => Ne(ht(Math.atan2(t[6], t[5]))),
    rotateY: (t) => Ne(ht(Math.atan2(-t[2], t[0]))),
    rotateZ: ts,
    rotate: ts,
    skewX: (t) => ht(Math.atan(t[4])),
    skewY: (t) => ht(Math.atan(t[1])),
    skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2,
  };
function Ue(t) {
  return t.includes("scale") ? 1 : 0;
}
function Ke(t, e) {
  if (!t || t === "none") return Ue(e);
  const n = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let s, i;
  if (n) ((s = sa), (i = n));
  else {
    const a = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    ((s = na), (i = a));
  }
  if (!i) return Ue(e);
  const o = s[e],
    r = i[1].split(",").map(ra);
  return typeof o == "function" ? o(r) : r[o];
}
const ia = (t, e) => {
  const { transform: n = "none" } = getComputedStyle(t);
  return Ke(n, e);
};
function ra(t) {
  return parseFloat(t.trim());
}
const Vt = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY",
],
  Ct = new Set(Vt),
  ss = (t) => t === wt || t === V,
  oa = new Set(["x", "y", "z"]),
  aa = Vt.filter((t) => !oa.has(t));
function la(t) {
  const e = [];
  return (
    aa.forEach((n) => {
      const s = t.getValue(n);
      s !== void 0 &&
        (e.push([n, s.get()]), s.set(n.startsWith("scale") ? 1 : 0));
    }),
    e
  );
}
const ft = {
  width: ({ x: t }, { paddingLeft: e = "0", paddingRight: n = "0" }) =>
    t.max - t.min - parseFloat(e) - parseFloat(n),
  height: ({ y: t }, { paddingTop: e = "0", paddingBottom: n = "0" }) =>
    t.max - t.min - parseFloat(e) - parseFloat(n),
  top: (t, { top: e }) => parseFloat(e),
  left: (t, { left: e }) => parseFloat(e),
  bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
  right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
  x: (t, { transform: e }) => Ke(e, "x"),
  y: (t, { transform: e }) => Ke(e, "y"),
};
ft.translateX = ft.x;
ft.translateY = ft.y;
const dt = new Set();
let We = !1,
  $e = !1,
  Ge = !1;
function Hi() {
  if ($e) {
    const t = Array.from(dt).filter((s) => s.needsMeasurement),
      e = new Set(t.map((s) => s.element)),
      n = new Map();
    (e.forEach((s) => {
      const i = la(s);
      i.length && (n.set(s, i), s.render());
    }),
      t.forEach((s) => s.measureInitialState()),
      e.forEach((s) => {
        s.render();
        const i = n.get(s);
        i &&
          i.forEach(([o, r]) => {
            var a;
            (a = s.getValue(o)) == null || a.set(r);
          });
      }),
      t.forEach((s) => s.measureEndState()),
      t.forEach((s) => {
        s.suspendedScrollY !== void 0 && window.scrollTo(0, s.suspendedScrollY);
      }));
  }
  (($e = !1), (We = !1), dt.forEach((t) => t.complete(Ge)), dt.clear());
}
function _i() {
  dt.forEach((t) => {
    (t.readKeyframes(), t.needsMeasurement && ($e = !0));
  });
}
function ua() {
  ((Ge = !0), _i(), Hi(), (Ge = !1));
}
class Tn {
  constructor(e, n, s, i, o, r = !1) {
    ((this.state = "pending"),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...e]),
      (this.onComplete = n),
      (this.name = s),
      (this.motionValue = i),
      (this.element = o),
      (this.isAsync = r));
  }
  scheduleResolve() {
    ((this.state = "scheduled"),
      this.isAsync
        ? (dt.add(this), We || ((We = !0), D.read(_i), D.resolveKeyframes(Hi)))
        : (this.readKeyframes(), this.complete()));
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: e,
      name: n,
      element: s,
      motionValue: i,
    } = this;
    if (e[0] === null) {
      const o = i == null ? void 0 : i.get(),
        r = e[e.length - 1];
      if (o !== void 0) e[0] = o;
      else if (s && n) {
        const a = s.readValue(n, r);
        a != null && (e[0] = a);
      }
      (e[0] === void 0 && (e[0] = r), i && o === void 0 && i.set(e[0]));
    }
    ea(e);
  }
  setFinalKeyframe() { }
  measureInitialState() { }
  renderEndStyles() { }
  measureEndState() { }
  complete(e = !1) {
    ((this.state = "complete"),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e),
      dt.delete(this));
  }
  cancel() {
    this.state === "scheduled" && (dt.delete(this), (this.state = "pending"));
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const ca = (t) => t.startsWith("--");
function ha(t, e, n) {
  ca(e) ? t.style.setProperty(e, n) : (t.style[e] = n);
}
const fa = ln(() => window.ScrollTimeline !== void 0),
  da = {};
function ma(t, e) {
  const n = ln(t);
  return () => {
    var s;
    return (s = da[e]) != null ? s : n();
  };
}
const zi = ma(() => {
  try {
    document
      .createElement("div")
      .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch (t) {
    return !1;
  }
  return !0;
}, "linearEasing"),
  Lt = ([t, e, n, s]) => `cubic-bezier(${t}, ${e}, ${n}, ${s})`,
  is = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Lt([0, 0.65, 0.55, 1]),
    circOut: Lt([0.55, 0, 1, 0.45]),
    backIn: Lt([0.31, 0.01, 0.66, -0.59]),
    backOut: Lt([0.33, 1.53, 0.69, 0.99]),
  };
function Xi(t, e) {
  if (t)
    return typeof t == "function"
      ? zi()
        ? ji(t, e)
        : "ease-out"
      : Ci(t)
        ? Lt(t)
        : Array.isArray(t)
          ? t.map((n) => Xi(n, e) || is.easeOut)
          : is[t];
}
function pa(
  t,
  e,
  n,
  {
    delay: s = 0,
    duration: i = 300,
    repeat: o = 0,
    repeatType: r = "loop",
    ease: a = "easeOut",
    times: l,
  } = {},
  c = void 0,
) {
  const u = { [e]: n };
  l && (u.offset = l);
  const h = Xi(a, i);
  Array.isArray(h) && (u.easing = h);
  const f = {
    delay: s,
    duration: i,
    easing: Array.isArray(h) ? "linear" : h,
    fill: "both",
    iterations: o + 1,
    direction: r === "reverse" ? "alternate" : "normal",
  };
  return (c && (f.pseudoElement = c), t.animate(u, f));
}
function An(t) {
  return typeof t == "function" && "applyToOptions" in t;
}
function ga(n) {
  var s = n,
    { type: t } = s,
    e = W(s, ["type"]);
  var i, o;
  return An(t) && zi()
    ? t.applyToOptions(e)
    : ((i = e.duration) != null || (e.duration = 300),
      (o = e.ease) != null || (e.ease = "easeOut"),
      e);
}
class ya extends vn {
  constructor(e) {
    if ((super(), (this.finishedTime = null), (this.isStopped = !1), !e))
      return;
    const {
      element: n,
      name: s,
      keyframes: i,
      pseudoElement: o,
      allowFlatten: r = !1,
      finalKeyframe: a,
      onComplete: l,
    } = e;
    ((this.isPseudoElement = !!o),
      (this.allowFlatten = r),
      (this.options = e),
      an(typeof e.type != "string"));
    const c = ga(e);
    ((this.animation = pa(n, s, i, c, o)),
      c.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !o)) {
          const u = yn(i, this.options, a, this.speed);
          (this.updateMotionValue ? this.updateMotionValue(u) : ha(n, s, u),
            this.animation.cancel());
        }
        (l == null || l(), this.notifyFinished());
      }));
  }
  play() {
    this.isStopped ||
      (this.animation.play(),
        this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    var e, n;
    (n = (e = this.animation).finish) == null || n.call(e);
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch (e) { }
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: e } = this;
    e === "idle" ||
      e === "finished" ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
        this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    var e, n;
    this.isPseudoElement ||
      (n = (e = this.animation).commitStyles) == null ||
      n.call(e);
  }
  get duration() {
    var n, s;
    const e =
      ((s =
        (n = this.animation.effect) == null ? void 0 : n.getComputedTiming) ==
        null
        ? void 0
        : s.call(n).duration) || 0;
    return z(Number(e));
  }
  get iterationDuration() {
    const { delay: e = 0 } = this.options || {};
    return this.duration + z(e);
  }
  get time() {
    return z(Number(this.animation.currentTime) || 0);
  }
  set time(e) {
    ((this.finishedTime = null), (this.animation.currentTime = J(e)));
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(e) {
    (e < 0 && (this.finishedTime = null), (this.animation.playbackRate = e));
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return Number(this.animation.startTime);
  }
  set startTime(e) {
    this.animation.startTime = e;
  }
  attachTimeline({ timeline: e, observe: n }) {
    var s;
    return (
      this.allowFlatten &&
      ((s = this.animation.effect) == null ||
        s.updateTiming({ easing: "linear" })),
      (this.animation.onfinish = null),
      e && fa() ? ((this.animation.timeline = e), X) : n(this)
    );
  }
}
const Yi = { anticipate: Ai, backInOut: Ti, circInOut: Pi };
function va(t) {
  return t in Yi;
}
function xa(t) {
  typeof t.ease == "string" && va(t.ease) && (t.ease = Yi[t.ease]);
}
const rs = 10;
class Ta extends ya {
  constructor(e) {
    (xa(e),
      Gi(e),
      super(e),
      e.startTime && (this.startTime = e.startTime),
      (this.options = e));
  }
  updateMotionValue(e) {
    var u;
    const c = this.options,
      { motionValue: n, onUpdate: s, onComplete: i, element: o } = c,
      r = W(c, ["motionValue", "onUpdate", "onComplete", "element"]);
    if (!n) return;
    if (e !== void 0) {
      n.set(e);
      return;
    }
    const a = new xn(M(y({}, r), { autoplay: !1 })),
      l = J((u = this.finishedTime) != null ? u : this.time);
    (n.setWithVelocity(a.sample(l - rs).value, a.sample(l).value, rs),
      a.stop());
  }
}
const os = (t, e) =>
  e === "zIndex"
    ? !1
    : !!(
      typeof t == "number" ||
      Array.isArray(t) ||
      (typeof t == "string" &&
        (rt.test(t) || t === "0") &&
        !t.startsWith("url("))
    );
function Aa(t) {
  const e = t[0];
  if (t.length === 1) return !0;
  for (let n = 0; n < t.length; n++) if (t[n] !== e) return !0;
}
function Sa(t, e, n, s) {
  const i = t[0];
  if (i === null) return !1;
  if (e === "display" || e === "visibility") return !0;
  const o = t[t.length - 1],
    r = os(i, e),
    a = os(o, e);
  return !r || !a ? !1 : Aa(t) || ((n === "spring" || An(n)) && s);
}
function He(t) {
  ((t.duration = 0), (t.type = "keyframes"));
}
const Pa = new Set(["opacity", "clipPath", "filter", "transform"]),
  ba = ln(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function wa(t) {
  var u;
  const {
    motionValue: e,
    name: n,
    repeatDelay: s,
    repeatType: i,
    damping: o,
    type: r,
  } = t;
  if (
    !(
      ((u = e == null ? void 0 : e.owner) == null
        ? void 0
        : u.current) instanceof HTMLElement
    )
  )
    return !1;
  const { onUpdate: l, transformTemplate: c } = e.owner.getProps();
  return (
    ba() &&
    n &&
    Pa.has(n) &&
    (n !== "transform" || !c) &&
    !l &&
    !s &&
    i !== "mirror" &&
    o !== 0 &&
    r !== "inertia"
  );
}
const Va = 40;
class Ca extends vn {
  constructor(f) {
    var d = f,
      {
        autoplay: e = !0,
        delay: n = 0,
        type: s = "keyframes",
        repeat: i = 0,
        repeatDelay: o = 0,
        repeatType: r = "loop",
        keyframes: a,
        name: l,
        motionValue: c,
        element: u,
      } = d,
      h = W(d, [
        "autoplay",
        "delay",
        "type",
        "repeat",
        "repeatDelay",
        "repeatType",
        "keyframes",
        "name",
        "motionValue",
        "element",
      ]);
    var g;
    (super(),
      (this.stop = () => {
        var v, T;
        (this._animation &&
          (this._animation.stop(),
            (v = this.stopTimeline) == null || v.call(this)),
          (T = this.keyframeResolver) == null || T.cancel());
      }),
      (this.createdAt = H.now()));
    const m = y(
      {
        autoplay: e,
        delay: n,
        type: s,
        repeat: i,
        repeatDelay: o,
        repeatType: r,
        name: l,
        motionValue: c,
        element: u,
      },
      h,
    ),
      p = (u == null ? void 0 : u.KeyframeResolver) || Tn;
    ((this.keyframeResolver = new p(
      a,
      (v, T, x) => this.onKeyframesResolved(v, T, m, !x),
      l,
      c,
      u,
    )),
      (g = this.keyframeResolver) == null || g.scheduleResolve());
  }
  onKeyframesResolved(e, n, s, i) {
    this.keyframeResolver = void 0;
    const {
      name: o,
      type: r,
      velocity: a,
      delay: l,
      isHandoff: c,
      onUpdate: u,
    } = s;
    ((this.resolvedAt = H.now()),
      Sa(e, o, r, a) ||
      ((nt.instantAnimations || !l) && (u == null || u(yn(e, s, n))),
        (e[0] = e[e.length - 1]),
        He(s),
        (s.repeat = 0)));
    const h = i
      ? this.resolvedAt
        ? this.resolvedAt - this.createdAt > Va
          ? this.resolvedAt
          : this.createdAt
        : this.createdAt
      : void 0,
      f = M(y({ startTime: h, finalKeyframe: n }, s), { keyframes: e }),
      d =
        !c && wa(f)
          ? new Ta(M(y({}, f), { element: f.motionValue.owner.current }))
          : new xn(f);
    (d.finished.then(() => this.notifyFinished()).catch(X),
      this.pendingTimeline &&
      ((this.stopTimeline = d.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = d));
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(e, n) {
    return this.finished.finally(e).then(() => { });
  }
  get animation() {
    var e;
    return (
      this._animation ||
      ((e = this.keyframeResolver) == null || e.resume(), ua()),
      this._animation
    );
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(e) {
    this.animation.time = e;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(e) {
    this.animation.speed = e;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(e) {
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(e))
        : (this.pendingTimeline = e),
      () => this.stop()
    );
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    var e;
    (this._animation && this.animation.cancel(),
      (e = this.keyframeResolver) == null || e.cancel());
  }
}
class Ma {
  constructor(e) {
    ((this.stop = () => this.runAll("stop")),
      (this.animations = e.filter(Boolean)));
  }
  get finished() {
    return Promise.all(this.animations.map((e) => e.finished));
  }
  getAll(e) {
    return this.animations[0][e];
  }
  setAll(e, n) {
    for (let s = 0; s < this.animations.length; s++) this.animations[s][e] = n;
  }
  attachTimeline(e) {
    const n = this.animations.map((s) => s.attachTimeline(e));
    return () => {
      n.forEach((s, i) => {
        (s && s(), this.animations[i].stop());
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(e) {
    this.setAll("time", e);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(e) {
    this.setAll("speed", e);
  }
  get state() {
    return this.getAll("state");
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    return as(this.animations, "duration");
  }
  get iterationDuration() {
    return as(this.animations, "iterationDuration");
  }
  runAll(e) {
    this.animations.forEach((n) => n[e]());
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
function as(t, e) {
  let n = 0;
  for (let s = 0; s < t.length; s++) {
    const i = t[s][e];
    i !== null && i > n && (n = i);
  }
  return n;
}
class Da extends Ma {
  then(e, n) {
    return this.finished.finally(e).then(() => { });
  }
}
const Ea = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Ra(t) {
  const e = Ea.exec(t);
  if (!e) return [,];
  const [, n, s, i] = e;
  return [`--${n != null ? n : s}`, i];
}
function qi(t, e, n = 1) {
  const [s, i] = Ra(t);
  if (!s) return;
  const o = window.getComputedStyle(e).getPropertyValue(s);
  if (o) {
    const r = o.trim();
    return fi(r) ? parseFloat(r) : r;
  }
  return fn(i) ? qi(i, e, n + 1) : i;
}
function Sn(t, e) {
  var n, s;
  return (s =
    (n = t == null ? void 0 : t[e]) != null
      ? n
      : t == null
        ? void 0
        : t.default) != null
    ? s
    : t;
}
const Zi = new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...Vt,
]),
  La = { test: (t) => t === "auto", parse: (t) => t },
  Ji = (t) => (e) => e.test(t),
  Qi = [wt, V, Q, it, wo, bo, La],
  ls = (t) => Qi.find(Ji(t));
function Fa(t) {
  return typeof t == "number"
    ? t === 0
    : t !== null
      ? t === "none" || t === "0" || mi(t)
      : !0;
}
const Ia = new Set(["brightness", "contrast", "saturate", "opacity"]);
function ka(t) {
  const [e, n] = t.slice(0, -1).split("(");
  if (e === "drop-shadow") return t;
  const [s] = n.match(dn) || [];
  if (!s) return t;
  const i = n.replace(s, "");
  let o = Ia.has(e) ? 1 : 0;
  return (s !== n && (o *= 100), e + "(" + o + i + ")");
}
const Ba = /\b([a-z-]*)\(.*?\)/gu,
  _e = M(y({}, rt), {
    getAnimatableNone: (t) => {
      const e = t.match(Ba);
      return e ? e.map(ka).join(" ") : t;
    },
  }),
  us = M(y({}, wt), { transform: Math.round }),
  Oa = {
    rotate: it,
    rotateX: it,
    rotateY: it,
    rotateZ: it,
    scale: te,
    scaleX: te,
    scaleY: te,
    scaleZ: te,
    skew: it,
    skewX: it,
    skewY: it,
    distance: V,
    translateX: V,
    translateY: V,
    translateZ: V,
    x: V,
    y: V,
    z: V,
    perspective: V,
    transformPerspective: V,
    opacity: jt,
    originX: Yn,
    originY: Yn,
    originZ: V,
  },
  Pn = M(
    y(
      {
        borderWidth: V,
        borderTopWidth: V,
        borderRightWidth: V,
        borderBottomWidth: V,
        borderLeftWidth: V,
        borderRadius: V,
        radius: V,
        borderTopLeftRadius: V,
        borderTopRightRadius: V,
        borderBottomRightRadius: V,
        borderBottomLeftRadius: V,
        width: V,
        maxWidth: V,
        height: V,
        maxHeight: V,
        top: V,
        right: V,
        bottom: V,
        left: V,
        padding: V,
        paddingTop: V,
        paddingRight: V,
        paddingBottom: V,
        paddingLeft: V,
        margin: V,
        marginTop: V,
        marginRight: V,
        marginBottom: V,
        marginLeft: V,
        backgroundPositionX: V,
        backgroundPositionY: V,
      },
      Oa,
    ),
    { zIndex: us, fillOpacity: jt, strokeOpacity: jt, numOctaves: us },
  ),
  ja = M(y({}, Pn), {
    color: B,
    backgroundColor: B,
    outlineColor: B,
    fill: B,
    stroke: B,
    borderColor: B,
    borderTopColor: B,
    borderRightColor: B,
    borderBottomColor: B,
    borderLeftColor: B,
    filter: _e,
    WebkitFilter: _e,
  }),
  tr = (t) => ja[t];
function er(t, e) {
  let n = tr(t);
  return (
    n !== _e && (n = rt),
    n.getAnimatableNone ? n.getAnimatableNone(e) : void 0
  );
}
const Na = new Set(["auto", "none", "0"]);
function Ua(t, e, n) {
  let s = 0,
    i;
  for (; s < t.length && !i;) {
    const o = t[s];
    (typeof o == "string" && !Na.has(o) && Nt(o).values.length && (i = t[s]),
      s++);
  }
  if (i && n) for (const o of e) t[o] = er(n, i);
}
class Ka extends Tn {
  constructor(e, n, s, i, o) {
    super(e, n, s, i, o, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, element: n, name: s } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let l = 0; l < e.length; l++) {
      let c = e[l];
      if (typeof c == "string" && ((c = c.trim()), fn(c))) {
        const u = qi(c, n.current);
        (u !== void 0 && (e[l] = u),
          l === e.length - 1 && (this.finalKeyframe = c));
      }
    }
    if ((this.resolveNoneKeyframes(), !Zi.has(s) || e.length !== 2)) return;
    const [i, o] = e,
      r = ls(i),
      a = ls(o);
    if (r !== a)
      if (ss(r) && ss(a))
        for (let l = 0; l < e.length; l++) {
          const c = e[l];
          typeof c == "string" && (e[l] = parseFloat(c));
        }
      else ft[s] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: e, name: n } = this,
      s = [];
    for (let i = 0; i < e.length; i++) (e[i] === null || Fa(e[i])) && s.push(i);
    s.length && Ua(e, s, n);
  }
  measureInitialState() {
    const { element: e, unresolvedKeyframes: n, name: s } = this;
    if (!e || !e.current) return;
    (s === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = ft[s](
        e.measureViewportBox(),
        window.getComputedStyle(e.current),
      )),
      (n[0] = this.measuredOrigin));
    const i = n[n.length - 1];
    i !== void 0 && e.getValue(s, i).jump(i, !1);
  }
  measureEndState() {
    var a;
    const { element: e, name: n, unresolvedKeyframes: s } = this;
    if (!e || !e.current) return;
    const i = e.getValue(n);
    i && i.jump(this.measuredOrigin, !1);
    const o = s.length - 1,
      r = s[o];
    ((s[o] = ft[n](e.measureViewportBox(), window.getComputedStyle(e.current))),
      r !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = r),
      (a = this.removedTransforms) != null &&
      a.length &&
      this.removedTransforms.forEach(([l, c]) => {
        e.getValue(l).set(c);
      }),
      this.resolveNoneKeyframes());
  }
}
function bn(t, e, n) {
  var s;
  if (t instanceof EventTarget) return [t];
  if (typeof t == "string") {
    let i = document;
    const o =
      (s = n == null ? void 0 : n[t]) != null ? s : i.querySelectorAll(t);
    return o ? Array.from(o) : [];
  }
  return Array.from(t);
}
const nr = (t, e) => (e && typeof t == "number" ? e.transform(t) : t);
function sr(t) {
  return di(t) && "offsetHeight" in t;
}
const cs = 30,
  Wa = (t) => !isNaN(parseFloat(t)),
  kt = { current: void 0 };
class $a {
  constructor(e, n = {}) {
    ((this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (s) => {
        var o;
        const i = H.now();
        if (
          (this.updatedAt !== i && this.setPrevFrameValue(),
            (this.prev = this.current),
            this.setCurrent(s),
            this.current !== this.prev &&
            ((o = this.events.change) == null || o.notify(this.current),
              this.dependents))
        )
          for (const r of this.dependents) r.dirty();
      }),
      (this.hasAnimated = !1),
      this.setCurrent(e),
      (this.owner = n.owner));
  }
  setCurrent(e) {
    ((this.current = e),
      (this.updatedAt = H.now()),
      this.canTrackVelocity === null &&
      e !== void 0 &&
      (this.canTrackVelocity = Wa(this.current)));
  }
  setPrevFrameValue(e = this.current) {
    ((this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt));
  }
  onChange(e) {
    return this.on("change", e);
  }
  on(e, n) {
    this.events[e] || (this.events[e] = new un());
    const s = this.events[e].add(n);
    return e === "change"
      ? () => {
        (s(),
          D.read(() => {
            this.events.change.getSize() || this.stop();
          }));
      }
      : s;
  }
  clearListeners() {
    for (const e in this.events) this.events[e].clear();
  }
  attach(e, n) {
    ((this.passiveEffect = e), (this.stopPassiveEffect = n));
  }
  set(e) {
    this.passiveEffect
      ? this.passiveEffect(e, this.updateAndNotify)
      : this.updateAndNotify(e);
  }
  setWithVelocity(e, n, s) {
    (this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = e),
      (this.prevUpdatedAt = this.updatedAt - s));
  }
  jump(e, n = !0) {
    (this.updateAndNotify(e),
      (this.prev = e),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
  dirty() {
    var e;
    (e = this.events.change) == null || e.notify(this.current);
  }
  addDependent(e) {
    (this.dependents || (this.dependents = new Set()), this.dependents.add(e));
  }
  removeDependent(e) {
    this.dependents && this.dependents.delete(e);
  }
  get() {
    return (kt.current && kt.current.push(this), this.current);
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const e = H.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      e - this.updatedAt > cs
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, cs);
    return pi(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(e) {
    return (
      this.stop(),
      new Promise((n) => {
        ((this.hasAnimated = !0),
          (this.animation = e(n)),
          this.events.animationStart && this.events.animationStart.notify());
      }).then(() => {
        (this.events.animationComplete &&
          this.events.animationComplete.notify(),
          this.clearAnimation());
      })
    );
  }
  stop() {
    (this.animation &&
      (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation());
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    var e, n;
    ((e = this.dependents) == null || e.clear(),
      (n = this.events.destroy) == null || n.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
}
function mt(t, e) {
  return new $a(t, e);
}
const { schedule: wn } = Mi(queueMicrotask, !1),
  Z = { x: !1, y: !1 };
function ir() {
  return Z.x || Z.y;
}
function Ga(t) {
  return t === "x" || t === "y"
    ? Z[t]
      ? null
      : ((Z[t] = !0),
        () => {
          Z[t] = !1;
        })
    : Z.x || Z.y
      ? null
      : ((Z.x = Z.y = !0),
        () => {
          Z.x = Z.y = !1;
        });
}
function rr(t, e) {
  const n = bn(t),
    s = new AbortController(),
    i = M(y({ passive: !0 }, e), { signal: s.signal });
  return [n, i, () => s.abort()];
}
function hs(t) {
  return !(t.pointerType === "touch" || ir());
}
function Ha(t, e, n = {}) {
  const [s, i, o] = rr(t, n),
    r = (a) => {
      if (!hs(a)) return;
      const { target: l } = a,
        c = e(l, a);
      if (typeof c != "function" || !l) return;
      const u = (h) => {
        hs(h) && (c(h), l.removeEventListener("pointerleave", u));
      };
      l.addEventListener("pointerleave", u, i);
    };
  return (
    s.forEach((a) => {
      a.addEventListener("pointerenter", r, i);
    }),
    o
  );
}
const or = (t, e) => (e ? (t === e ? !0 : or(t, e.parentElement)) : !1),
  Vn = (t) =>
    t.pointerType === "mouse"
      ? typeof t.button != "number" || t.button <= 0
      : t.isPrimary !== !1,
  _a = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function za(t) {
  return _a.has(t.tagName) || t.tabIndex !== -1;
}
const ie = new WeakSet();
function fs(t) {
  return (e) => {
    e.key === "Enter" && t(e);
  };
}
function be(t, e) {
  t.dispatchEvent(
    new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 }),
  );
}
const Xa = (t, e) => {
  const n = t.currentTarget;
  if (!n) return;
  const s = fs(() => {
    if (ie.has(n)) return;
    be(n, "down");
    const i = fs(() => {
      be(n, "up");
    }),
      o = () => be(n, "cancel");
    (n.addEventListener("keyup", i, e), n.addEventListener("blur", o, e));
  });
  (n.addEventListener("keydown", s, e),
    n.addEventListener("blur", () => n.removeEventListener("keydown", s), e));
};
function ds(t) {
  return Vn(t) && !ir();
}
function Ya(t, e, n = {}) {
  const [s, i, o] = rr(t, n),
    r = (a) => {
      const l = a.currentTarget;
      if (!ds(a)) return;
      ie.add(l);
      const c = e(l, a),
        u = (d, m) => {
          (window.removeEventListener("pointerup", h),
            window.removeEventListener("pointercancel", f),
            ie.has(l) && ie.delete(l),
            ds(d) && typeof c == "function" && c(d, { success: m }));
        },
        h = (d) => {
          u(
            d,
            l === window ||
            l === document ||
            n.useGlobalTarget ||
            or(l, d.target),
          );
        },
        f = (d) => {
          u(d, !1);
        };
      (window.addEventListener("pointerup", h, i),
        window.addEventListener("pointercancel", f, i));
    };
  return (
    s.forEach((a) => {
      ((n.useGlobalTarget ? window : a).addEventListener("pointerdown", r, i),
        sr(a) &&
        (a.addEventListener("focus", (c) => Xa(c, i)),
          !za(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0)));
    }),
    o
  );
}
function Cn(t) {
  return di(t) && "ownerSVGElement" in t;
}
function ar(t) {
  return Cn(t) && t.tagName === "svg";
}
function qa(...t) {
  const e = !Array.isArray(t[0]),
    n = e ? 0 : -1,
    s = t[0 + n],
    i = t[1 + n],
    o = t[2 + n],
    r = t[3 + n],
    a = Ki(i, o, r);
  return e ? a(s) : a;
}
const N = (t) => !!(t && t.getVelocity),
  Za = [...Qi, B, rt],
  Ja = (t) => Za.find(Ji(t)),
  me = A.createContext({
    transformPagePoint: (t) => t,
    isStatic: !1,
    reducedMotion: "never",
  });
function ms(t, e) {
  if (typeof t == "function") return t(e);
  t != null && (t.current = e);
}
function Qa(...t) {
  return (e) => {
    let n = !1;
    const s = t.map((i) => {
      const o = ms(i, e);
      return (!n && typeof o == "function" && (n = !0), o);
    });
    if (n)
      return () => {
        for (let i = 0; i < s.length; i++) {
          const o = s[i];
          typeof o == "function" ? o() : ms(t[i], null);
        }
      };
  };
}
function tl(...t) {
  return A.useCallback(Qa(...t), t);
}
class el extends A.Component {
  getSnapshotBeforeUpdate(e) {
    const n = this.props.childRef.current;
    if (n && e.isPresent && !this.props.isPresent) {
      const s = n.offsetParent,
        i = (sr(s) && s.offsetWidth) || 0,
        o = this.props.sizeRef.current;
      ((o.height = n.offsetHeight || 0),
        (o.width = n.offsetWidth || 0),
        (o.top = n.offsetTop),
        (o.left = n.offsetLeft),
        (o.right = i - o.width - o.left));
    }
    return null;
  }
  componentDidUpdate() { }
  render() {
    return this.props.children;
  }
}
function nl({ children: t, isPresent: e, anchorX: n, root: s }) {
  const i = A.useId(),
    o = A.useRef(null),
    r = A.useRef({ width: 0, height: 0, top: 0, left: 0, right: 0 }),
    { nonce: a } = A.useContext(me),
    l = tl(o, t == null ? void 0 : t.ref);
  return (
    A.useInsertionEffect(() => {
      const { width: c, height: u, top: h, left: f, right: d } = r.current;
      if (e || !o.current || !c || !u) return;
      const m = n === "left" ? `left: ${f}` : `right: ${d}`;
      o.current.dataset.motionPopId = i;
      const p = document.createElement("style");
      a && (p.nonce = a);
      const g = s != null ? s : document.head;
      return (
        g.appendChild(p),
        p.sheet &&
        p.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${u}px !important;
            ${m}px !important;
            top: ${h}px !important;
          }
        `),
        () => {
          g.contains(p) && g.removeChild(p);
        }
      );
    }, [e]),
    tt.jsx(el, {
      isPresent: e,
      childRef: o,
      sizeRef: r,
      children: A.cloneElement(t, { ref: l }),
    })
  );
}
const sl = ({
  children: t,
  initial: e,
  isPresent: n,
  onExitComplete: s,
  custom: i,
  presenceAffectsLayout: o,
  mode: r,
  anchorX: a,
  root: l,
}) => {
  const c = Gt(il),
    u = A.useId();
  let h = !0,
    f = A.useMemo(
      () => (
        (h = !1),
        {
          id: u,
          initial: e,
          isPresent: n,
          custom: i,
          onExitComplete: (d) => {
            c.set(d, !0);
            for (const m of c.values()) if (!m) return;
            s && s();
          },
          register: (d) => (c.set(d, !1), () => c.delete(d)),
        }
      ),
      [n, c, s],
    );
  return (
    o && h && (f = y({}, f)),
    A.useMemo(() => {
      c.forEach((d, m) => c.set(m, !1));
    }, [n]),
    A.useEffect(() => {
      !n && !c.size && s && s();
    }, [n]),
    r === "popLayout" &&
    (t = tt.jsx(nl, { isPresent: n, anchorX: a, root: l, children: t })),
    tt.jsx(fe.Provider, { value: f, children: t })
  );
};
function il() {
  return new Map();
}
function lr(t = !0) {
  const e = A.useContext(fe);
  if (e === null) return [!0, null];
  const { isPresent: n, onExitComplete: s, register: i } = e,
    o = A.useId();
  A.useEffect(() => {
    if (t) return i(o);
  }, [t]);
  const r = A.useCallback(() => t && s && s(o), [o, s, t]);
  return !n && s ? [!1, r] : [!0];
}
const ee = (t) => t.key || "";
function ps(t) {
  const e = [];
  return (
    A.Children.forEach(t, (n) => {
      A.isValidElement(n) && e.push(n);
    }),
    e
  );
}
const nh = ({
  children: t,
  custom: e,
  initial: n = !0,
  onExitComplete: s,
  presenceAffectsLayout: i = !0,
  mode: o = "sync",
  propagate: r = !1,
  anchorX: a = "left",
  root: l,
}) => {
  const [c, u] = lr(r),
    h = A.useMemo(() => ps(t), [t]),
    f = r && !c ? [] : h.map(ee),
    d = A.useRef(!0),
    m = A.useRef(h),
    p = Gt(() => new Map()),
    [g, v] = A.useState(h),
    [T, x] = A.useState(h);
  rn(() => {
    ((d.current = !1), (m.current = h));
    for (let w = 0; w < T.length; w++) {
      const C = ee(T[w]);
      f.includes(C) ? p.delete(C) : p.get(C) !== !0 && p.set(C, !1);
    }
  }, [T, f.length, f.join("-")]);
  const P = [];
  if (h !== g) {
    let w = [...h];
    for (let C = 0; C < T.length; C++) {
      const b = T[C],
        E = ee(b);
      f.includes(E) || (w.splice(C, 0, b), P.push(b));
    }
    return (o === "wait" && P.length && (w = P), x(ps(w)), v(h), null);
  }
  const { forceRender: S } = A.useContext(nn);
  return tt.jsx(tt.Fragment, {
    children: T.map((w) => {
      const C = ee(w),
        b = r && !c ? !1 : h === T || f.includes(C),
        E = () => {
          if (p.has(C)) p.set(C, !0);
          else return;
          let I = !0;
          (p.forEach((R) => {
            R || (I = !1);
          }),
            I &&
            (S == null || S(),
              x(m.current),
              r && (u == null || u()),
              s && s()));
        };
      return tt.jsx(
        sl,
        {
          isPresent: b,
          initial: !d.current || n ? void 0 : !1,
          custom: e,
          presenceAffectsLayout: i,
          mode: o,
          root: l,
          onExitComplete: b ? void 0 : E,
          anchorX: a,
          children: w,
        },
        C,
      );
    }),
  });
},
  ur = A.createContext({ strict: !1 }),
  gs = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  bt = {};
for (const t in gs) bt[t] = { isEnabled: (e) => gs[t].some((n) => !!e[n]) };
function rl(t) {
  for (const e in t) bt[e] = y(y({}, bt[e]), t[e]);
}
const ol = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function ue(t) {
  return (
    t.startsWith("while") ||
    (t.startsWith("drag") && t !== "draggable") ||
    t.startsWith("layout") ||
    t.startsWith("onTap") ||
    t.startsWith("onPan") ||
    t.startsWith("onLayout") ||
    ol.has(t)
  );
}
let cr = (t) => !ue(t);
function al(t) {
  typeof t == "function" && (cr = (e) => (e.startsWith("on") ? !ue(e) : t(e)));
}
try {
  al(require("@emotion/is-prop-valid").default);
} catch (t) { }
function ll(t, e, n) {
  const s = {};
  for (const i in t)
    (i === "values" && typeof t.values == "object") ||
      ((cr(i) ||
        (n === !0 && ue(i)) ||
        (!e && !ue(i)) ||
        (t.draggable && i.startsWith("onDrag"))) &&
        (s[i] = t[i]));
  return s;
}
const pe = A.createContext({});
function ge(t) {
  return t !== null && typeof t == "object" && typeof t.start == "function";
}
function Kt(t) {
  return typeof t == "string" || Array.isArray(t);
}
const Mn = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit",
],
  Dn = ["initial", ...Mn];
function ye(t) {
  return ge(t.animate) || Dn.some((e) => Kt(t[e]));
}
function hr(t) {
  return !!(ye(t) || t.variants);
}
function ul(t, e) {
  if (ye(t)) {
    const { initial: n, animate: s } = t;
    return {
      initial: n === !1 || Kt(n) ? n : void 0,
      animate: Kt(s) ? s : void 0,
    };
  }
  return t.inherit !== !1 ? e : {};
}
function cl(t) {
  const { initial: e, animate: n } = ul(t, A.useContext(pe));
  return A.useMemo(() => ({ initial: e, animate: n }), [ys(e), ys(n)]);
}
function ys(t) {
  return Array.isArray(t) ? t.join(" ") : t;
}
function vs(t, e) {
  return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
}
const Rt = {
  correct: (t, e) => {
    if (!e.target) return t;
    if (typeof t == "string")
      if (V.test(t)) t = parseFloat(t);
      else return t;
    const n = vs(t, e.target.x),
      s = vs(t, e.target.y);
    return `${n}% ${s}%`;
  },
},
  hl = {
    correct: (t, { treeScale: e, projectionDelta: n }) => {
      const s = t,
        i = rt.parse(t);
      if (i.length > 5) return s;
      const o = rt.createTransformer(t),
        r = typeof i[0] != "number" ? 1 : 0,
        a = n.x.scale * e.x,
        l = n.y.scale * e.y;
      ((i[0 + r] /= a), (i[1 + r] /= l));
      const c = L(a, l, 0.5);
      return (
        typeof i[2 + r] == "number" && (i[2 + r] /= c),
        typeof i[3 + r] == "number" && (i[3 + r] /= c),
        o(i)
      );
    },
  },
  ze = {
    borderRadius: M(y({}, Rt), {
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    }),
    borderTopLeftRadius: Rt,
    borderTopRightRadius: Rt,
    borderBottomLeftRadius: Rt,
    borderBottomRightRadius: Rt,
    boxShadow: hl,
  };
function fr(t, { layout: e, layoutId: n }) {
  return (
    Ct.has(t) ||
    t.startsWith("origin") ||
    ((e || n !== void 0) && (!!ze[t] || t === "opacity"))
  );
}
const fl = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective",
},
  dl = Vt.length;
function ml(t, e, n) {
  let s = "",
    i = !0;
  for (let o = 0; o < dl; o++) {
    const r = Vt[o],
      a = t[r];
    if (a === void 0) continue;
    let l = !0;
    if (
      (typeof a == "number"
        ? (l = a === (r.startsWith("scale") ? 1 : 0))
        : (l = parseFloat(a) === 0),
        !l || n)
    ) {
      const c = nr(a, Pn[r]);
      if (!l) {
        i = !1;
        const u = fl[r] || r;
        s += `${u}(${c}) `;
      }
      n && (e[r] = c);
    }
  }
  return ((s = s.trim()), n ? (s = n(e, i ? "" : s)) : i && (s = "none"), s);
}
function En(t, e, n) {
  const { style: s, vars: i, transformOrigin: o } = t;
  let r = !1,
    a = !1;
  for (const l in e) {
    const c = e[l];
    if (Ct.has(l)) {
      r = !0;
      continue;
    } else if (Ei(l)) {
      i[l] = c;
      continue;
    } else {
      const u = nr(c, Pn[l]);
      l.startsWith("origin") ? ((a = !0), (o[l] = u)) : (s[l] = u);
    }
  }
  if (
    (e.transform ||
      (r || n
        ? (s.transform = ml(e, t.transform, n))
        : s.transform && (s.transform = "none")),
      a)
  ) {
    const { originX: l = "50%", originY: c = "50%", originZ: u = 0 } = o;
    s.transformOrigin = `${l} ${c} ${u}`;
  }
}
const Rn = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function dr(t, e, n) {
  for (const s in e) !N(e[s]) && !fr(s, n) && (t[s] = e[s]);
}
function pl({ transformTemplate: t }, e) {
  return A.useMemo(() => {
    const n = Rn();
    return (En(n, e, t), Object.assign({}, n.vars, n.style));
  }, [e]);
}
function gl(t, e) {
  const n = t.style || {},
    s = {};
  return (dr(s, n, t), Object.assign(s, pl(t, e)), s);
}
function yl(t, e) {
  const n = {},
    s = gl(t, e);
  return (
    t.drag &&
    t.dragListener !== !1 &&
    ((n.draggable = !1),
      (s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none"),
      (s.touchAction =
        t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`)),
    t.tabIndex === void 0 &&
    (t.onTap || t.onTapStart || t.whileTap) &&
    (n.tabIndex = 0),
    (n.style = s),
    n
  );
}
const vl = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  xl = { offset: "strokeDashoffset", array: "strokeDasharray" };
function Tl(t, e, n = 1, s = 0, i = !0) {
  t.pathLength = 1;
  const o = i ? vl : xl;
  t[o.offset] = V.transform(-s);
  const r = V.transform(e),
    a = V.transform(n);
  t[o.array] = `${r} ${a}`;
}
function mr(t, h, l, c, u) {
  var f = h,
    {
      attrX: e,
      attrY: n,
      attrScale: s,
      pathLength: i,
      pathSpacing: o = 1,
      pathOffset: r = 0,
    } = f,
    a = W(f, [
      "attrX",
      "attrY",
      "attrScale",
      "pathLength",
      "pathSpacing",
      "pathOffset",
    ]);
  var p, g;
  if ((En(t, a, c), l)) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  ((t.attrs = t.style), (t.style = {}));
  const { attrs: d, style: m } = t;
  (d.transform && ((m.transform = d.transform), delete d.transform),
    (m.transform || d.transformOrigin) &&
    ((m.transformOrigin = (p = d.transformOrigin) != null ? p : "50% 50%"),
      delete d.transformOrigin),
    m.transform &&
    ((m.transformBox =
      (g = u == null ? void 0 : u.transformBox) != null ? g : "fill-box"),
      delete d.transformBox),
    e !== void 0 && (d.x = e),
    n !== void 0 && (d.y = n),
    s !== void 0 && (d.scale = s),
    i !== void 0 && Tl(d, i, o, r, !1));
}
const pr = () => M(y({}, Rn()), { attrs: {} }),
  gr = (t) => typeof t == "string" && t.toLowerCase() === "svg";
function Al(t, e, n, s) {
  const i = A.useMemo(() => {
    const o = pr();
    return (
      mr(o, e, gr(s), t.transformTemplate, t.style),
      M(y({}, o.attrs), { style: y({}, o.style) })
    );
  }, [e]);
  if (t.style) {
    const o = {};
    (dr(o, t.style, t), (i.style = y(y({}, o), i.style)));
  }
  return i;
}
const Sl = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Ln(t) {
  return typeof t != "string" || t.includes("-")
    ? !1
    : !!(Sl.indexOf(t) > -1 || /[A-Z]/u.test(t));
}
function Pl(t, e, n, { latestValues: s }, i, o = !1) {
  const a = (Ln(t) ? Al : yl)(e, s, i, t),
    l = ll(e, typeof t == "string", o),
    c = t !== A.Fragment ? M(y(y({}, l), a), { ref: n }) : {},
    { children: u } = e,
    h = A.useMemo(() => (N(u) ? u.get() : u), [u]);
  return A.createElement(t, M(y({}, c), { children: h }));
}
function xs(t) {
  const e = [{}, {}];
  return (
    t == null ||
    t.values.forEach((n, s) => {
      ((e[0][s] = n.get()), (e[1][s] = n.getVelocity()));
    }),
    e
  );
}
function Fn(t, e, n, s) {
  if (typeof e == "function") {
    const [i, o] = xs(s);
    e = e(n !== void 0 ? n : t.custom, i, o);
  }
  if (
    (typeof e == "string" && (e = t.variants && t.variants[e]),
      typeof e == "function")
  ) {
    const [i, o] = xs(s);
    e = e(n !== void 0 ? n : t.custom, i, o);
  }
  return e;
}
function re(t) {
  return N(t) ? t.get() : t;
}
function bl({ scrapeMotionValuesFromProps: t, createRenderState: e }, n, s, i) {
  return { latestValues: wl(n, s, i, t), renderState: e() };
}
function wl(t, e, n, s) {
  const i = {},
    o = s(t, {});
  for (const d in o) i[d] = re(o[d]);
  let { initial: r, animate: a } = t;
  const l = ye(t),
    c = hr(t);
  e &&
    c &&
    !l &&
    t.inherit !== !1 &&
    (r === void 0 && (r = e.initial), a === void 0 && (a = e.animate));
  let u = n ? n.initial === !1 : !1;
  u = u || r === !1;
  const h = u ? a : r;
  if (h && typeof h != "boolean" && !ge(h)) {
    const d = Array.isArray(h) ? h : [h];
    for (let m = 0; m < d.length; m++) {
      const p = Fn(t, d[m]);
      if (p) {
        const f = p,
          { transitionEnd: g, transition: v } = f,
          T = W(f, ["transitionEnd", "transition"]);
        for (const x in T) {
          let P = T[x];
          if (Array.isArray(P)) {
            const S = u ? P.length - 1 : 0;
            P = P[S];
          }
          P !== null && (i[x] = P);
        }
        for (const x in g) i[x] = g[x];
      }
    }
  }
  return i;
}
const yr = (t) => (e, n) => {
  const s = A.useContext(pe),
    i = A.useContext(fe),
    o = () => bl(t, e, s, i);
  return n ? o() : Gt(o);
};
function In(t, e, n) {
  var o;
  const { style: s } = t,
    i = {};
  for (const r in s)
    (N(s[r]) ||
      (e.style && N(e.style[r])) ||
      fr(r, t) ||
      ((o = n == null ? void 0 : n.getValue(r)) == null
        ? void 0
        : o.liveStyle) !== void 0) &&
      (i[r] = s[r]);
  return i;
}
const Vl = yr({ scrapeMotionValuesFromProps: In, createRenderState: Rn });
function vr(t, e, n) {
  const s = In(t, e, n);
  for (const i in t)
    if (N(t[i]) || N(e[i])) {
      const o =
        Vt.indexOf(i) !== -1
          ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
          : i;
      s[o] = t[i];
    }
  return s;
}
const Cl = yr({ scrapeMotionValuesFromProps: vr, createRenderState: pr }),
  Ml = Symbol.for("motionComponentSymbol");
function vt(t) {
  return (
    t &&
    typeof t == "object" &&
    Object.prototype.hasOwnProperty.call(t, "current")
  );
}
function Dl(t, e, n) {
  return A.useCallback(
    (s) => {
      (s && t.onMount && t.onMount(s),
        e && (s ? e.mount(s) : e.unmount()),
        n && (typeof n == "function" ? n(s) : vt(n) && (n.current = s)));
    },
    [e],
  );
}
const kn = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  El = "framerAppearId",
  xr = "data-" + kn(El),
  Tr = A.createContext({});
function Rl(t, e, n, s, i) {
  var p, g;
  const { visualElement: o } = A.useContext(pe),
    r = A.useContext(ur),
    a = A.useContext(fe),
    l = A.useContext(me).reducedMotion,
    c = A.useRef(null);
  ((s = s || r.renderer),
    !c.current &&
    s &&
    (c.current = s(t, {
      visualState: e,
      parent: o,
      props: n,
      presenceContext: a,
      blockInitialAnimation: a ? a.initial === !1 : !1,
      reducedMotionConfig: l,
    })));
  const u = c.current,
    h = A.useContext(Tr);
  u &&
    !u.projection &&
    i &&
    (u.type === "html" || u.type === "svg") &&
    Ll(c.current, n, i, h);
  const f = A.useRef(!1);
  A.useInsertionEffect(() => {
    u && f.current && u.update(n, a);
  });
  const d = n[xr],
    m = A.useRef(
      !!d &&
      !((p = window.MotionHandoffIsComplete) != null && p.call(window, d)) &&
      ((g = window.MotionHasOptimisedAnimation) == null
        ? void 0
        : g.call(window, d)),
    );
  return (
    rn(() => {
      u &&
        ((f.current = !0),
          (window.MotionIsMounted = !0),
          u.updateFeatures(),
          u.scheduleRenderMicrotask(),
          m.current && u.animationState && u.animationState.animateChanges());
    }),
    A.useEffect(() => {
      u &&
        (!m.current && u.animationState && u.animationState.animateChanges(),
          m.current &&
          (queueMicrotask(() => {
            var v;
            (v = window.MotionHandoffMarkAsComplete) == null ||
              v.call(window, d);
          }),
            (m.current = !1)),
          (u.enteringChildren = void 0));
    }),
    u
  );
}
function Ll(t, e, n, s) {
  const {
    layoutId: i,
    layout: o,
    drag: r,
    dragConstraints: a,
    layoutScroll: l,
    layoutRoot: c,
    layoutCrossfade: u,
  } = e;
  ((t.projection = new n(
    t.latestValues,
    e["data-framer-portal-id"] ? void 0 : Ar(t.parent),
  )),
    t.projection.setOptions({
      layoutId: i,
      layout: o,
      alwaysMeasureLayout: !!r || (a && vt(a)),
      visualElement: t,
      animationType: typeof o == "string" ? o : "both",
      initialPromotionConfig: s,
      crossfade: u,
      layoutScroll: l,
      layoutRoot: c,
    }));
}
function Ar(t) {
  if (t) return t.options.allowProjection !== !1 ? t.projection : Ar(t.parent);
}
function we(t, { forwardMotionProps: e = !1 } = {}, n, s) {
  var a, l;
  n && rl(n);
  const i = Ln(t) ? Cl : Vl;
  function o(c, u) {
    let h;
    const f = M(y(y({}, A.useContext(me)), c), { layoutId: Fl(c) }),
      { isStatic: d } = f,
      m = cl(c),
      p = i(c, d);
    if (!d && sn) {
      Il();
      const g = kl(f);
      ((h = g.MeasureLayout),
        (m.visualElement = Rl(t, p, f, s, g.ProjectionNode)));
    }
    return tt.jsxs(pe.Provider, {
      value: m,
      children: [
        h && m.visualElement
          ? tt.jsx(h, y({ visualElement: m.visualElement }, f))
          : null,
        Pl(t, c, Dl(p, m.visualElement, u), p, d, e),
      ],
    });
  }
  o.displayName = `motion.${typeof t == "string" ? t : `create(${(l = (a = t.displayName) != null ? a : t.name) != null ? l : ""})`}`;
  const r = A.forwardRef(o);
  return ((r[Ml] = t), r);
}
function Fl({ layoutId: t }) {
  const e = A.useContext(nn).id;
  return e && t !== void 0 ? e + "-" + t : t;
}
function Il(t, e) {
  A.useContext(ur).strict;
}
function kl(t) {
  const { drag: e, layout: n } = bt;
  if (!e && !n) return {};
  const s = y(y({}, e), n);
  return {
    MeasureLayout:
      (e != null && e.isEnabled(t)) || (n != null && n.isEnabled(t))
        ? s.MeasureLayout
        : void 0,
    ProjectionNode: s.ProjectionNode,
  };
}
function Bl(t, e) {
  if (typeof Proxy == "undefined") return we;
  const n = new Map(),
    s = (o, r) => we(o, r, t, e),
    i = (o, r) => s(o, r);
  return new Proxy(i, {
    get: (o, r) =>
      r === "create"
        ? s
        : (n.has(r) || n.set(r, we(r, void 0, t, e)), n.get(r)),
  });
}
function Sr({ top: t, left: e, right: n, bottom: s }) {
  return { x: { min: e, max: n }, y: { min: t, max: s } };
}
function Ol({ x: t, y: e }) {
  return { top: e.min, right: t.max, bottom: e.max, left: t.min };
}
function jl(t, e) {
  if (!e) return t;
  const n = e({ x: t.left, y: t.top }),
    s = e({ x: t.right, y: t.bottom });
  return { top: n.y, left: n.x, bottom: s.y, right: s.x };
}
function Ve(t) {
  return t === void 0 || t === 1;
}
function Xe({ scale: t, scaleX: e, scaleY: n }) {
  return !Ve(t) || !Ve(e) || !Ve(n);
}
function ut(t) {
  return (
    Xe(t) ||
    Pr(t) ||
    t.z ||
    t.rotate ||
    t.rotateX ||
    t.rotateY ||
    t.skewX ||
    t.skewY
  );
}
function Pr(t) {
  return Ts(t.x) || Ts(t.y);
}
function Ts(t) {
  return t && t !== "0%";
}
function ce(t, e, n) {
  const s = t - n,
    i = e * s;
  return n + i;
}
function As(t, e, n, s, i) {
  return (i !== void 0 && (t = ce(t, i, s)), ce(t, n, s) + e);
}
function Ye(t, e = 0, n = 1, s, i) {
  ((t.min = As(t.min, e, n, s, i)), (t.max = As(t.max, e, n, s, i)));
}
function br(t, { x: e, y: n }) {
  (Ye(t.x, e.translate, e.scale, e.originPoint),
    Ye(t.y, n.translate, n.scale, n.originPoint));
}
const Ss = 0.999999999999,
  Ps = 1.0000000000001;
function Nl(t, e, n, s = !1) {
  const i = n.length;
  if (!i) return;
  e.x = e.y = 1;
  let o, r;
  for (let a = 0; a < i; a++) {
    ((o = n[a]), (r = o.projectionDelta));
    const { visualElement: l } = o.options;
    (l && l.props.style && l.props.style.display === "contents") ||
      (s &&
        o.options.layoutScroll &&
        o.scroll &&
        o !== o.root &&
        Tt(t, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
        r && ((e.x *= r.x.scale), (e.y *= r.y.scale), br(t, r)),
        s && ut(o.latestValues) && Tt(t, o.latestValues));
  }
  (e.x < Ps && e.x > Ss && (e.x = 1), e.y < Ps && e.y > Ss && (e.y = 1));
}
function xt(t, e) {
  ((t.min = t.min + e), (t.max = t.max + e));
}
function bs(t, e, n, s, i = 0.5) {
  const o = L(t.min, t.max, i);
  Ye(t, e, n, o, s);
}
function Tt(t, e) {
  (bs(t.x, e.x, e.scaleX, e.scale, e.originX),
    bs(t.y, e.y, e.scaleY, e.scale, e.originY));
}
function wr(t, e) {
  return Sr(jl(t.getBoundingClientRect(), e));
}
function Ul(t, e, n) {
  const s = wr(t, n),
    { scroll: i } = e;
  return (i && (xt(s.x, i.offset.x), xt(s.y, i.offset.y)), s);
}
const ws = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  At = () => ({ x: ws(), y: ws() }),
  Vs = () => ({ min: 0, max: 0 }),
  k = () => ({ x: Vs(), y: Vs() }),
  qe = { current: null },
  Vr = { current: !1 };
function Kl() {
  if (((Vr.current = !0), !!sn))
    if (window.matchMedia) {
      const t = window.matchMedia("(prefers-reduced-motion)"),
        e = () => (qe.current = t.matches);
      (t.addEventListener("change", e), e());
    } else qe.current = !1;
}
const Wt = new WeakMap();
function Wl(t, e, n) {
  for (const s in e) {
    const i = e[s],
      o = n[s];
    if (N(i)) t.addValue(s, i);
    else if (N(o)) t.addValue(s, mt(i, { owner: t }));
    else if (o !== i)
      if (t.hasValue(s)) {
        const r = t.getValue(s);
        r.liveStyle === !0 ? r.jump(i) : r.hasAnimated || r.set(i);
      } else {
        const r = t.getStaticValue(s);
        t.addValue(s, mt(r !== void 0 ? r : i, { owner: t }));
      }
  }
  for (const s in n) e[s] === void 0 && t.removeValue(s);
  return e;
}
const Cs = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class Cr {
  scrapeMotionValuesFromProps(e, n, s) {
    return {};
  }
  constructor(
    {
      parent: e,
      props: n,
      presenceContext: s,
      reducedMotionConfig: i,
      blockInitialAnimation: o,
      visualState: r,
    },
    a = {},
  ) {
    ((this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = Tn),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
            this.renderInstance(
              this.current,
              this.renderState,
              this.props.style,
              this.projection,
            ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const d = H.now();
        this.renderScheduledAt < d &&
          ((this.renderScheduledAt = d), D.render(this.render, !1, !0));
      }));
    const { latestValues: l, renderState: c } = r;
    ((this.latestValues = l),
      (this.baseTarget = y({}, l)),
      (this.initialValues = n.initial ? y({}, l) : {}),
      (this.renderState = c),
      (this.parent = e),
      (this.props = n),
      (this.presenceContext = s),
      (this.depth = e ? e.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = a),
      (this.blockInitialAnimation = !!o),
      (this.isControllingVariants = ye(n)),
      (this.isVariantNode = hr(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(e && e.current)));
    const f = this.scrapeMotionValuesFromProps(n, {}, this),
      { willChange: u } = f,
      h = W(f, ["willChange"]);
    for (const d in h) {
      const m = h[d];
      l[d] !== void 0 && N(m) && m.set(l[d]);
    }
  }
  mount(e) {
    var n;
    ((this.current = e),
      Wt.set(e, this),
      this.projection && !this.projection.instance && this.projection.mount(e),
      this.parent &&
      this.isVariantNode &&
      !this.isControllingVariants &&
      (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((s, i) => this.bindToMotionValue(i, s)),
      Vr.current || Kl(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
            ? !0
            : qe.current),
      (n = this.parent) == null || n.addChild(this),
      this.update(this.props, this.presenceContext));
  }
  unmount() {
    var e;
    (this.projection && this.projection.unmount(),
      st(this.notifyUpdate),
      st(this.render),
      this.valueSubscriptions.forEach((n) => n()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      (e = this.parent) == null || e.removeChild(this));
    for (const n in this.events) this.events[n].clear();
    for (const n in this.features) {
      const s = this.features[n];
      s && (s.unmount(), (s.isMounted = !1));
    }
    this.current = null;
  }
  addChild(e) {
    var n;
    (this.children.add(e),
      (n = this.enteringChildren) != null ||
      (this.enteringChildren = new Set()),
      this.enteringChildren.add(e));
  }
  removeChild(e) {
    (this.children.delete(e),
      this.enteringChildren && this.enteringChildren.delete(e));
  }
  bindToMotionValue(e, n) {
    this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
    const s = Ct.has(e);
    s && this.onBindTransform && this.onBindTransform();
    const i = n.on("change", (r) => {
      ((this.latestValues[e] = r),
        this.props.onUpdate && D.preRender(this.notifyUpdate),
        s && this.projection && (this.projection.isTransformDirty = !0),
        this.scheduleRender());
    });
    let o;
    (window.MotionCheckAppearSync &&
      (o = window.MotionCheckAppearSync(this, e, n)),
      this.valueSubscriptions.set(e, () => {
        (i(), o && o(), n.owner && n.stop());
      }));
  }
  sortNodePosition(e) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== e.type
      ? 0
      : this.sortInstanceNodePosition(this.current, e.current);
  }
  updateFeatures() {
    let e = "animation";
    for (e in bt) {
      const n = bt[e];
      if (!n) continue;
      const { isEnabled: s, Feature: i } = n;
      if (
        (!this.features[e] &&
          i &&
          s(this.props) &&
          (this.features[e] = new i(this)),
          this.features[e])
      ) {
        const o = this.features[e];
        o.isMounted ? o.update() : (o.mount(), (o.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : k();
  }
  getStaticValue(e) {
    return this.latestValues[e];
  }
  setStaticValue(e, n) {
    this.latestValues[e] = n;
  }
  update(e, n) {
    ((e.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = e),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n));
    for (let s = 0; s < Cs.length; s++) {
      const i = Cs[s];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
          delete this.propEventSubscriptions[i]);
      const o = "on" + i,
        r = e[o];
      r && (this.propEventSubscriptions[i] = this.on(i, r));
    }
    ((this.prevMotionValues = Wl(
      this,
      this.scrapeMotionValuesFromProps(e, this.prevProps, this),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue());
  }
  getProps() {
    return this.props;
  }
  getVariant(e) {
    return this.props.variants ? this.props.variants[e] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
  }
  addVariantChild(e) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(e),
        () => n.variantChildren.delete(e)
      );
  }
  addValue(e, n) {
    const s = this.values.get(e);
    n !== s &&
      (s && this.removeValue(e),
        this.bindToMotionValue(e, n),
        this.values.set(e, n),
        (this.latestValues[e] = n.get()));
  }
  removeValue(e) {
    this.values.delete(e);
    const n = this.valueSubscriptions.get(e);
    (n && (n(), this.valueSubscriptions.delete(e)),
      delete this.latestValues[e],
      this.removeValueFromRenderState(e, this.renderState));
  }
  hasValue(e) {
    return this.values.has(e);
  }
  getValue(e, n) {
    if (this.props.values && this.props.values[e]) return this.props.values[e];
    let s = this.values.get(e);
    return (
      s === void 0 &&
      n !== void 0 &&
      ((s = mt(n === null ? void 0 : n, { owner: this })),
        this.addValue(e, s)),
      s
    );
  }
  readValue(e, n) {
    var i;
    let s =
      this.latestValues[e] !== void 0 || !this.current
        ? this.latestValues[e]
        : (i = this.getBaseTargetFromProps(this.props, e)) != null
          ? i
          : this.readValueFromInstance(this.current, e, this.options);
    return (
      s != null &&
      (typeof s == "string" && (fi(s) || mi(s))
        ? (s = parseFloat(s))
        : !Ja(s) && rt.test(n) && (s = er(e, n)),
        this.setBaseTarget(e, N(s) ? s.get() : s)),
      N(s) ? s.get() : s
    );
  }
  setBaseTarget(e, n) {
    this.baseTarget[e] = n;
  }
  getBaseTarget(e) {
    var o;
    const { initial: n } = this.props;
    let s;
    if (typeof n == "string" || typeof n == "object") {
      const r = Fn(
        this.props,
        n,
        (o = this.presenceContext) == null ? void 0 : o.custom,
      );
      r && (s = r[e]);
    }
    if (n && s !== void 0) return s;
    const i = this.getBaseTargetFromProps(this.props, e);
    return i !== void 0 && !N(i)
      ? i
      : this.initialValues[e] !== void 0 && s === void 0
        ? void 0
        : this.baseTarget[e];
  }
  on(e, n) {
    return (
      this.events[e] || (this.events[e] = new un()),
      this.events[e].add(n)
    );
  }
  notify(e, ...n) {
    this.events[e] && this.events[e].notify(...n);
  }
  scheduleRenderMicrotask() {
    wn.render(this.render);
  }
}
class Mr extends Cr {
  constructor() {
    (super(...arguments), (this.KeyframeResolver = Ka));
  }
  sortInstanceNodePosition(e, n) {
    return e.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(e, n) {
    return e.style ? e.style[n] : void 0;
  }
  removeValueFromRenderState(e, { vars: n, style: s }) {
    (delete n[e], delete s[e]);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: e } = this.props;
    N(e) &&
      (this.childSubscription = e.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
function Dr(t, { style: e, vars: n }, s, i) {
  const o = t.style;
  let r;
  for (r in e) o[r] = e[r];
  i == null || i.applyProjectionStyles(o, s);
  for (r in n) o.setProperty(r, n[r]);
}
function $l(t) {
  return window.getComputedStyle(t);
}
class Er extends Mr {
  constructor() {
    (super(...arguments), (this.type = "html"), (this.renderInstance = Dr));
  }
  readValueFromInstance(e, n) {
    var s;
    if (Ct.has(n))
      return (s = this.projection) != null && s.isProjecting ? Ue(n) : ia(e, n);
    {
      const i = $l(e),
        o = (Ei(n) ? i.getPropertyValue(n) : i[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(e, { transformPagePoint: n }) {
    return wr(e, n);
  }
  build(e, n, s) {
    En(e, n, s.transformTemplate);
  }
  scrapeMotionValuesFromProps(e, n, s) {
    return In(e, n, s);
  }
}
const Rr = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function Gl(t, e, n, s) {
  Dr(t, e, void 0, s);
  for (const i in e.attrs) t.setAttribute(Rr.has(i) ? i : kn(i), e.attrs[i]);
}
class Lr extends Mr {
  constructor() {
    (super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = k));
  }
  getBaseTargetFromProps(e, n) {
    return e[n];
  }
  readValueFromInstance(e, n) {
    if (Ct.has(n)) {
      const s = tr(n);
      return (s && s.default) || 0;
    }
    return ((n = Rr.has(n) ? n : kn(n)), e.getAttribute(n));
  }
  scrapeMotionValuesFromProps(e, n, s) {
    return vr(e, n, s);
  }
  build(e, n, s) {
    mr(e, n, this.isSVGTag, s.transformTemplate, s.style);
  }
  renderInstance(e, n, s, i) {
    Gl(e, n, s, i);
  }
  mount(e) {
    ((this.isSVGTag = gr(e.tagName)), super.mount(e));
  }
}
const Hl = (t, e) =>
  Ln(t) ? new Lr(e) : new Er(e, { allowProjection: t !== A.Fragment });
function St(t, e, n) {
  const s = t.getProps();
  return Fn(s, e, n !== void 0 ? n : s.custom, t);
}
const Ze = (t) => Array.isArray(t);
function _l(t, e, n) {
  t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, mt(n));
}
function zl(t) {
  return Ze(t) ? t[t.length - 1] || 0 : t;
}
function Xl(t, e) {
  let r = St(t, e) || {},
    { transitionEnd: s = {}, transition: i = {} } = r,
    o = W(r, ["transitionEnd", "transition"]);
  o = y(y({}, o), s);
  for (const a in o) {
    const l = zl(o[a]);
    _l(t, a, l);
  }
}
function Yl(t) {
  return !!(N(t) && t.add);
}
function Je(t, e) {
  const n = t.getValue("willChange");
  if (Yl(n)) return n.add(e);
  if (!n && nt.WillChange) {
    const s = new nt.WillChange("auto");
    (t.addValue("willChange", s), s.add(e));
  }
}
function Fr(t) {
  return t.props[xr];
}
const ql = (t) => t !== null;
function Zl(t, { repeat: e, repeatType: n = "loop" }, s) {
  const i = t.filter(ql),
    o = e && n !== "loop" && e % 2 === 1 ? 0 : i.length - 1;
  return i[o];
}
const Jl = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  Ql = (t) => ({
    type: "spring",
    stiffness: 550,
    damping: t === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  tu = { type: "keyframes", duration: 0.8 },
  eu = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  nu = (t, { keyframes: e }) =>
    e.length > 2
      ? tu
      : Ct.has(t)
        ? t.startsWith("scale")
          ? Ql(e[1])
          : Jl
        : eu;
function su(h) {
  var f = h,
    {
      when: t,
      delay: e,
      delayChildren: n,
      staggerChildren: s,
      staggerDirection: i,
      repeat: o,
      repeatType: r,
      repeatDelay: a,
      from: l,
      elapsed: c,
    } = f,
    u = W(f, [
      "when",
      "delay",
      "delayChildren",
      "staggerChildren",
      "staggerDirection",
      "repeat",
      "repeatType",
      "repeatDelay",
      "from",
      "elapsed",
    ]);
  return !!Object.keys(u).length;
}
const Bn =
  (t, e, n, s = {}, i, o) =>
    (r) => {
      const a = Sn(s, t) || {},
        l = a.delay || s.delay || 0;
      let { elapsed: c = 0 } = s;
      c = c - J(l);
      const u = M(
        y(
          {
            keyframes: Array.isArray(n) ? n : [null, n],
            ease: "easeOut",
            velocity: e.getVelocity(),
          },
          a,
        ),
        {
          delay: -c,
          onUpdate: (f) => {
            (e.set(f), a.onUpdate && a.onUpdate(f));
          },
          onComplete: () => {
            (r(), a.onComplete && a.onComplete());
          },
          name: t,
          motionValue: e,
          element: o ? void 0 : i,
        },
      );
      (su(a) || Object.assign(u, nu(t, u)),
        u.duration && (u.duration = J(u.duration)),
        u.repeatDelay && (u.repeatDelay = J(u.repeatDelay)),
        u.from !== void 0 && (u.keyframes[0] = u.from));
      let h = !1;
      if (
        ((u.type === !1 || (u.duration === 0 && !u.repeatDelay)) &&
          (He(u), u.delay === 0 && (h = !0)),
          (nt.instantAnimations || nt.skipAnimations) &&
          ((h = !0), He(u), (u.delay = 0)),
          (u.allowFlatten = !a.type && !a.ease),
          h && !o && e.get() !== void 0)
      ) {
        const f = Zl(u.keyframes, a);
        if (f !== void 0) {
          D.update(() => {
            (u.onUpdate(f), u.onComplete());
          });
          return;
        }
      }
      return a.isSync ? new xn(u) : new Ca(u);
    };
function iu({ protectedKeys: t, needsAnimating: e }, n) {
  const s = t.hasOwnProperty(n) && e[n] !== !0;
  return ((e[n] = !1), s);
}
function On(t, e, { delay: n = 0, transitionOverride: s, type: i } = {}) {
  var h;
  let u = e,
    { transition: o = t.getDefaultTransition(), transitionEnd: r } = u,
    a = W(u, ["transition", "transitionEnd"]);
  s && (o = s);
  const l = [],
    c = i && t.animationState && t.animationState.getState()[i];
  for (const f in a) {
    const d = t.getValue(f, (h = t.latestValues[f]) != null ? h : null),
      m = a[f];
    if (m === void 0 || (c && iu(c, f))) continue;
    const p = y({ delay: n }, Sn(o || {}, f)),
      g = d.get();
    if (
      g !== void 0 &&
      !d.isAnimating &&
      !Array.isArray(m) &&
      m === g &&
      !p.velocity
    )
      continue;
    let v = !1;
    if (window.MotionHandoffAnimation) {
      const x = Fr(t);
      if (x) {
        const P = window.MotionHandoffAnimation(x, f, D);
        P !== null && ((p.startTime = P), (v = !0));
      }
    }
    (Je(t, f),
      d.start(
        Bn(f, d, m, t.shouldReduceMotion && Zi.has(f) ? { type: !1 } : p, t, v),
      ));
    const T = d.animation;
    T && l.push(T);
  }
  return (
    r &&
    Promise.all(l).then(() => {
      D.update(() => {
        r && Xl(t, r);
      });
    }),
    l
  );
}
function Ir(t, e, n, s = 0, i = 1) {
  const o = Array.from(t)
    .sort((c, u) => c.sortNodePosition(u))
    .indexOf(e),
    r = t.size,
    a = (r - 1) * s;
  return typeof n == "function" ? n(o, r) : i === 1 ? o * s : a - o * s;
}
function Qe(t, e, n = {}) {
  var l;
  const s = St(
    t,
    e,
    n.type === "exit"
      ? (l = t.presenceContext) == null
        ? void 0
        : l.custom
      : void 0,
  );
  let { transition: i = t.getDefaultTransition() || {} } = s || {};
  n.transitionOverride && (i = n.transitionOverride);
  const o = s ? () => Promise.all(On(t, s, n)) : () => Promise.resolve(),
    r =
      t.variantChildren && t.variantChildren.size
        ? (c = 0) => {
          const {
            delayChildren: u = 0,
            staggerChildren: h,
            staggerDirection: f,
          } = i;
          return ru(t, e, c, u, h, f, n);
        }
        : () => Promise.resolve(),
    { when: a } = i;
  if (a) {
    const [c, u] = a === "beforeChildren" ? [o, r] : [r, o];
    return c().then(() => u());
  } else return Promise.all([o(), r(n.delay)]);
}
function ru(t, e, n = 0, s = 0, i = 0, o = 1, r) {
  const a = [];
  for (const l of t.variantChildren)
    (l.notify("AnimationStart", e),
      a.push(
        Qe(
          l,
          e,
          M(y({}, r), {
            delay:
              n +
              (typeof s == "function" ? 0 : s) +
              Ir(t.variantChildren, l, s, i, o),
          }),
        ).then(() => l.notify("AnimationComplete", e)),
      ));
  return Promise.all(a);
}
function ou(t, e, n = {}) {
  t.notify("AnimationStart", e);
  let s;
  if (Array.isArray(e)) {
    const i = e.map((o) => Qe(t, o, n));
    s = Promise.all(i);
  } else if (typeof e == "string") s = Qe(t, e, n);
  else {
    const i = typeof e == "function" ? St(t, e, n.custom) : e;
    s = Promise.all(On(t, i, n));
  }
  return s.then(() => {
    t.notify("AnimationComplete", e);
  });
}
function kr(t, e) {
  if (!Array.isArray(e)) return !1;
  const n = e.length;
  if (n !== t.length) return !1;
  for (let s = 0; s < n; s++) if (e[s] !== t[s]) return !1;
  return !0;
}
const au = Dn.length;
function Br(t) {
  if (!t) return;
  if (!t.isControllingVariants) {
    const n = t.parent ? Br(t.parent) || {} : {};
    return (t.props.initial !== void 0 && (n.initial = t.props.initial), n);
  }
  const e = {};
  for (let n = 0; n < au; n++) {
    const s = Dn[n],
      i = t.props[s];
    (Kt(i) || i === !1) && (e[s] = i);
  }
  return e;
}
const lu = [...Mn].reverse(),
  uu = Mn.length;
function cu(t) {
  return (e) =>
    Promise.all(e.map(({ animation: n, options: s }) => ou(t, n, s)));
}
function hu(t) {
  let e = cu(t),
    n = Ms(),
    s = !0;
  const i = (l) => (c, u) => {
    var f;
    const h = St(
      t,
      u,
      l === "exit"
        ? (f = t.presenceContext) == null
          ? void 0
          : f.custom
        : void 0,
    );
    if (h) {
      const d = h,
        { transition: m, transitionEnd: p } = d,
        g = W(d, ["transition", "transitionEnd"]);
      c = y(y(y({}, c), g), p);
    }
    return c;
  };
  function o(l) {
    e = l(t);
  }
  function r(l) {
    const { props: c } = t,
      u = Br(t.parent) || {},
      h = [],
      f = new Set();
    let d = {},
      m = 1 / 0;
    for (let g = 0; g < uu; g++) {
      const v = lu[g],
        T = n[v],
        x = c[v] !== void 0 ? c[v] : u[v],
        P = Kt(x),
        S = v === l ? T.isActive : null;
      S === !1 && (m = g);
      let w = x === u[v] && x !== c[v] && P;
      if (
        (w && s && t.manuallyAnimateOnMount && (w = !1),
          (T.protectedKeys = y({}, d)),
          (!T.isActive && S === null) ||
          (!x && !T.prevProp) ||
          ge(x) ||
          typeof x == "boolean")
      )
        continue;
      const C = fu(T.prevProp, x);
      let b = C || (v === l && T.isActive && !w && P) || (g > m && P),
        E = !1;
      const I = Array.isArray(x) ? x : [x];
      let R = I.reduce(i(v), {});
      S === !1 && (R = {});
      const { prevResolvedValues: pt = {} } = T,
        Y = y(y({}, pt), R),
        gt = (O) => {
          ((b = !0),
            f.has(O) && ((E = !0), f.delete(O)),
            (T.needsAnimating[O] = !0));
          const G = t.getValue(O);
          G && (G.liveStyle = !1);
        };
      for (const O in Y) {
        const G = R[O],
          K = pt[O];
        if (d.hasOwnProperty(O)) continue;
        let j = !1;
        (Ze(G) && Ze(K) ? (j = !kr(G, K)) : (j = G !== K),
          j
            ? G != null
              ? gt(O)
              : f.add(O)
            : G !== void 0 && f.has(O)
              ? gt(O)
              : (T.protectedKeys[O] = !0));
      }
      ((T.prevProp = x),
        (T.prevResolvedValues = R),
        T.isActive && (d = y(y({}, d), R)),
        s && t.blockInitialAnimation && (b = !1));
      const at = w && C;
      b &&
        (!at || E) &&
        h.push(
          ...I.map((O) => {
            const G = { type: v };
            if (
              typeof O == "string" &&
              s &&
              !at &&
              t.manuallyAnimateOnMount &&
              t.parent
            ) {
              const { parent: K } = t,
                j = St(K, O);
              if (K.enteringChildren && j) {
                const { delayChildren: Yt } = j.transition || {};
                G.delay = Ir(K.enteringChildren, t, Yt);
              }
            }
            return { animation: O, options: G };
          }),
        );
    }
    if (f.size) {
      const g = {};
      if (typeof c.initial != "boolean") {
        const v = St(t, Array.isArray(c.initial) ? c.initial[0] : c.initial);
        v && v.transition && (g.transition = v.transition);
      }
      (f.forEach((v) => {
        const T = t.getBaseTarget(v),
          x = t.getValue(v);
        (x && (x.liveStyle = !0), (g[v] = T != null ? T : null));
      }),
        h.push({ animation: g }));
    }
    let p = !!h.length;
    return (
      s &&
      (c.initial === !1 || c.initial === c.animate) &&
      !t.manuallyAnimateOnMount &&
      (p = !1),
      (s = !1),
      p ? e(h) : Promise.resolve()
    );
  }
  function a(l, c) {
    var h;
    if (n[l].isActive === c) return Promise.resolve();
    ((h = t.variantChildren) == null ||
      h.forEach((f) => {
        var d;
        return (d = f.animationState) == null ? void 0 : d.setActive(l, c);
      }),
      (n[l].isActive = c));
    const u = r(l);
    for (const f in n) n[f].protectedKeys = {};
    return u;
  }
  return {
    animateChanges: r,
    setActive: a,
    setAnimateFunction: o,
    getState: () => n,
    reset: () => {
      n = Ms();
    },
  };
}
function fu(t, e) {
  return typeof e == "string" ? e !== t : Array.isArray(e) ? !kr(e, t) : !1;
}
function lt(t = !1) {
  return {
    isActive: t,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Ms() {
  return {
    animate: lt(!0),
    whileInView: lt(),
    whileHover: lt(),
    whileTap: lt(),
    whileDrag: lt(),
    whileFocus: lt(),
    exit: lt(),
  };
}
class ot {
  constructor(e) {
    ((this.isMounted = !1), (this.node = e));
  }
  update() { }
}
class du extends ot {
  constructor(e) {
    (super(e), e.animationState || (e.animationState = hu(e)));
  }
  updateAnimationControlsSubscription() {
    const { animate: e } = this.node.getProps();
    ge(e) && (this.unmountControls = e.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: e } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    e !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var e;
    (this.node.animationState.reset(),
      (e = this.unmountControls) == null || e.call(this));
  }
}
let mu = 0;
class pu extends ot {
  constructor() {
    (super(...arguments), (this.id = mu++));
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: e, onExitComplete: n } = this.node.presenceContext,
      { isPresent: s } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || e === s) return;
    const i = this.node.animationState.setActive("exit", !e);
    n &&
      !e &&
      i.then(() => {
        n(this.id);
      });
  }
  mount() {
    const { register: e, onExitComplete: n } = this.node.presenceContext || {};
    (n && n(this.id), e && (this.unmount = e(this.id)));
  }
  unmount() { }
}
const gu = { animation: { Feature: du }, exit: { Feature: pu } };
function $t(t, e, n, s = { passive: !0 }) {
  return (t.addEventListener(e, n, s), () => t.removeEventListener(e, n));
}
function Xt(t) {
  return { point: { x: t.pageX, y: t.pageY } };
}
const yu = (t) => (e) => Vn(e) && t(e, Xt(e));
function Bt(t, e, n, s) {
  return $t(t, e, yu(n), s);
}
const Or = 1e-4,
  vu = 1 - Or,
  xu = 1 + Or,
  jr = 0.01,
  Tu = 0 - jr,
  Au = 0 + jr;
function $(t) {
  return t.max - t.min;
}
function Su(t, e, n) {
  return Math.abs(t - e) <= n;
}
function Ds(t, e, n, s = 0.5) {
  ((t.origin = s),
    (t.originPoint = L(e.min, e.max, t.origin)),
    (t.scale = $(n) / $(e)),
    (t.translate = L(n.min, n.max, t.origin) - t.originPoint),
    ((t.scale >= vu && t.scale <= xu) || isNaN(t.scale)) && (t.scale = 1),
    ((t.translate >= Tu && t.translate <= Au) || isNaN(t.translate)) &&
    (t.translate = 0));
}
function Ot(t, e, n, s) {
  (Ds(t.x, e.x, n.x, s ? s.originX : void 0),
    Ds(t.y, e.y, n.y, s ? s.originY : void 0));
}
function Es(t, e, n) {
  ((t.min = n.min + e.min), (t.max = t.min + $(e)));
}
function Pu(t, e, n) {
  (Es(t.x, e.x, n.x), Es(t.y, e.y, n.y));
}
function Rs(t, e, n) {
  ((t.min = e.min - n.min), (t.max = t.min + $(e)));
}
function he(t, e, n) {
  (Rs(t.x, e.x, n.x), Rs(t.y, e.y, n.y));
}
function _(t) {
  return [t("x"), t("y")];
}
const Nr = ({ current: t }) => (t ? t.ownerDocument.defaultView : null),
  Ls = (t, e) => Math.abs(t - e);
function bu(t, e) {
  const n = Ls(t.x, e.x),
    s = Ls(t.y, e.y);
  return Math.sqrt(ve(n, 2) + ve(s, 2));
}
class Ur {
  constructor(
    e,
    n,
    {
      transformPagePoint: s,
      contextWindow: i = window,
      dragSnapToOrigin: o = !1,
      distanceThreshold: r = 3,
    } = {},
  ) {
    if (
      ((this.startEvent = null),
        (this.lastMoveEvent = null),
        (this.lastMoveEventInfo = null),
        (this.handlers = {}),
        (this.contextWindow = window),
        (this.updatePoint = () => {
          if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
          const f = Me(this.lastMoveEventInfo, this.history),
            d = this.startEvent !== null,
            m = bu(f.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
          if (!d && !m) return;
          const { point: p } = f,
            { timestamp: g } = U;
          this.history.push(M(y({}, p), { timestamp: g }));
          const { onStart: v, onMove: T } = this.handlers;
          (d ||
            (v && v(this.lastMoveEvent, f),
              (this.startEvent = this.lastMoveEvent)),
            T && T(this.lastMoveEvent, f));
        }),
        (this.handlePointerMove = (f, d) => {
          ((this.lastMoveEvent = f),
            (this.lastMoveEventInfo = Ce(d, this.transformPagePoint)),
            D.update(this.updatePoint, !0));
        }),
        (this.handlePointerUp = (f, d) => {
          this.end();
          const { onEnd: m, onSessionEnd: p, resumeAnimation: g } = this.handlers;
          if (
            (this.dragSnapToOrigin && g && g(),
              !(this.lastMoveEvent && this.lastMoveEventInfo))
          )
            return;
          const v = Me(
            f.type === "pointercancel"
              ? this.lastMoveEventInfo
              : Ce(d, this.transformPagePoint),
            this.history,
          );
          (this.startEvent && m && m(f, v), p && p(f, v));
        }),
        !Vn(e))
    )
      return;
    ((this.dragSnapToOrigin = o),
      (this.handlers = n),
      (this.transformPagePoint = s),
      (this.distanceThreshold = r),
      (this.contextWindow = i || window));
    const a = Xt(e),
      l = Ce(a, this.transformPagePoint),
      { point: c } = l,
      { timestamp: u } = U;
    this.history = [M(y({}, c), { timestamp: u })];
    const { onSessionStart: h } = n;
    (h && h(e, Me(l, this.history)),
      (this.removeListeners = Ht(
        Bt(this.contextWindow, "pointermove", this.handlePointerMove),
        Bt(this.contextWindow, "pointerup", this.handlePointerUp),
        Bt(this.contextWindow, "pointercancel", this.handlePointerUp),
      )));
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    (this.removeListeners && this.removeListeners(), st(this.updatePoint));
  }
}
function Ce(t, e) {
  return e ? { point: e(t.point) } : t;
}
function Fs(t, e) {
  return { x: t.x - e.x, y: t.y - e.y };
}
function Me({ point: t }, e) {
  return {
    point: t,
    delta: Fs(t, Kr(e)),
    offset: Fs(t, wu(e)),
    velocity: Vu(e, 0.1),
  };
}
function wu(t) {
  return t[0];
}
function Kr(t) {
  return t[t.length - 1];
}
function Vu(t, e) {
  if (t.length < 2) return { x: 0, y: 0 };
  let n = t.length - 1,
    s = null;
  const i = Kr(t);
  for (; n >= 0 && ((s = t[n]), !(i.timestamp - s.timestamp > J(e)));) n--;
  if (!s) return { x: 0, y: 0 };
  const o = z(i.timestamp - s.timestamp);
  if (o === 0) return { x: 0, y: 0 };
  const r = { x: (i.x - s.x) / o, y: (i.y - s.y) / o };
  return (r.x === 1 / 0 && (r.x = 0), r.y === 1 / 0 && (r.y = 0), r);
}
function Cu(t, { min: e, max: n }, s) {
  return (
    e !== void 0 && t < e
      ? (t = s ? L(e, t, s.min) : Math.max(t, e))
      : n !== void 0 && t > n && (t = s ? L(n, t, s.max) : Math.min(t, n)),
    t
  );
}
function Is(t, e, n) {
  return {
    min: e !== void 0 ? t.min + e : void 0,
    max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0,
  };
}
function Mu(t, { top: e, left: n, bottom: s, right: i }) {
  return { x: Is(t.x, n, i), y: Is(t.y, e, s) };
}
function ks(t, e) {
  let n = e.min - t.min,
    s = e.max - t.max;
  return (
    e.max - e.min < t.max - t.min && ([n, s] = [s, n]),
    { min: n, max: s }
  );
}
function Du(t, e) {
  return { x: ks(t.x, e.x), y: ks(t.y, e.y) };
}
function Eu(t, e) {
  let n = 0.5;
  const s = $(t),
    i = $(e);
  return (
    i > s
      ? (n = Pt(e.min, e.max - s, t.min))
      : s > i && (n = Pt(t.min, t.max - i, e.min)),
    et(0, 1, n)
  );
}
function Ru(t, e) {
  const n = {};
  return (
    e.min !== void 0 && (n.min = e.min - t.min),
    e.max !== void 0 && (n.max = e.max - t.min),
    n
  );
}
const tn = 0.35;
function Lu(t = tn) {
  return (
    t === !1 ? (t = 0) : t === !0 && (t = tn),
    { x: Bs(t, "left", "right"), y: Bs(t, "top", "bottom") }
  );
}
function Bs(t, e, n) {
  return { min: Os(t, e), max: Os(t, n) };
}
function Os(t, e) {
  return typeof t == "number" ? t : t[e] || 0;
}
const Fu = new WeakMap();
class Iu {
  constructor(e) {
    ((this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = k()),
      (this.latestPointerEvent = null),
      (this.latestPanInfo = null),
      (this.visualElement = e));
  }
  start(e, { snapToCursor: n = !1, distanceThreshold: s } = {}) {
    const { presenceContext: i } = this.visualElement;
    if (i && i.isPresent === !1) return;
    const o = (h) => {
      const { dragSnapToOrigin: f } = this.getProps();
      (f ? this.pauseAnimation() : this.stopAnimation(),
        n && this.snapToCursor(Xt(h).point));
    },
      r = (h, f) => {
        const { drag: d, dragPropagation: m, onDragStart: p } = this.getProps();
        if (
          d &&
          !m &&
          (this.openDragLock && this.openDragLock(),
            (this.openDragLock = Ga(d)),
            !this.openDragLock)
        )
          return;
        ((this.latestPointerEvent = h),
          (this.latestPanInfo = f),
          (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
          ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          _((v) => {
            let T = this.getAxisMotionValue(v).get() || 0;
            if (Q.test(T)) {
              const { projection: x } = this.visualElement;
              if (x && x.layout) {
                const P = x.layout.layoutBox[v];
                P && (T = $(P) * (parseFloat(T) / 100));
              }
            }
            this.originPoint[v] = T;
          }),
          p && D.postRender(() => p(h, f)),
          Je(this.visualElement, "transform"));
        const { animationState: g } = this.visualElement;
        g && g.setActive("whileDrag", !0);
      },
      a = (h, f) => {
        ((this.latestPointerEvent = h), (this.latestPanInfo = f));
        const {
          dragPropagation: d,
          dragDirectionLock: m,
          onDirectionLock: p,
          onDrag: g,
        } = this.getProps();
        if (!d && !this.openDragLock) return;
        const { offset: v } = f;
        if (m && this.currentDirection === null) {
          ((this.currentDirection = ku(v)),
            this.currentDirection !== null && p && p(this.currentDirection));
          return;
        }
        (this.updateAxis("x", f.point, v),
          this.updateAxis("y", f.point, v),
          this.visualElement.render(),
          g && g(h, f));
      },
      l = (h, f) => {
        ((this.latestPointerEvent = h),
          (this.latestPanInfo = f),
          this.stop(h, f),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null));
      },
      c = () =>
        _((h) => {
          var f;
          return (
            this.getAnimationState(h) === "paused" &&
            ((f = this.getAxisMotionValue(h).animation) == null
              ? void 0
              : f.play())
          );
        }),
      { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new Ur(
      e,
      {
        onSessionStart: o,
        onStart: r,
        onMove: a,
        onSessionEnd: l,
        resumeAnimation: c,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        distanceThreshold: s,
        contextWindow: Nr(this.visualElement),
      },
    );
  }
  stop(e, n) {
    const s = e || this.latestPointerEvent,
      i = n || this.latestPanInfo,
      o = this.isDragging;
    if ((this.cancel(), !o || !i || !s)) return;
    const { velocity: r } = i;
    this.startAnimation(r);
    const { onDragEnd: a } = this.getProps();
    a && D.postRender(() => a(s, i));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: e, animationState: n } = this.visualElement;
    (e && (e.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0));
    const { dragPropagation: s } = this.getProps();
    (!s &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      n && n.setActive("whileDrag", !1));
  }
  updateAxis(e, n, s) {
    const { drag: i } = this.getProps();
    if (!s || !ne(e, i, this.currentDirection)) return;
    const o = this.getAxisMotionValue(e);
    let r = this.originPoint[e] + s[e];
    (this.constraints &&
      this.constraints[e] &&
      (r = Cu(r, this.constraints[e], this.elastic[e])),
      o.set(r));
  }
  resolveConstraints() {
    var o;
    const { dragConstraints: e, dragElastic: n } = this.getProps(),
      s =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (o = this.visualElement.projection) == null
            ? void 0
            : o.layout,
      i = this.constraints;
    (e && vt(e)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : e && s
        ? (this.constraints = Mu(s.layoutBox, e))
        : (this.constraints = !1),
      (this.elastic = Lu(n)),
      i !== this.constraints &&
      s &&
      this.constraints &&
      !this.hasMutatedConstraints &&
      _((r) => {
        this.constraints !== !1 &&
          this.getAxisMotionValue(r) &&
          (this.constraints[r] = Ru(s.layoutBox[r], this.constraints[r]));
      }));
  }
  resolveRefConstraints() {
    const { dragConstraints: e, onMeasureDragConstraints: n } = this.getProps();
    if (!e || !vt(e)) return !1;
    const s = e.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const o = Ul(s, i.root, this.visualElement.getTransformPagePoint());
    let r = Du(i.layout.layoutBox, o);
    if (n) {
      const a = n(Ol(r));
      ((this.hasMutatedConstraints = !!a), a && (r = Sr(a)));
    }
    return r;
  }
  startAnimation(e) {
    const {
      drag: n,
      dragMomentum: s,
      dragElastic: i,
      dragTransition: o,
      dragSnapToOrigin: r,
      onDragTransitionEnd: a,
    } = this.getProps(),
      l = this.constraints || {},
      c = _((u) => {
        if (!ne(u, n, this.currentDirection)) return;
        let h = (l && l[u]) || {};
        r && (h = { min: 0, max: 0 });
        const f = i ? 200 : 1e6,
          d = i ? 40 : 1e7,
          m = y(
            y(
              {
                type: "inertia",
                velocity: s ? e[u] : 0,
                bounceStiffness: f,
                bounceDamping: d,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
              },
              o,
            ),
            h,
          );
        return this.startAxisValueAnimation(u, m);
      });
    return Promise.all(c).then(a);
  }
  startAxisValueAnimation(e, n) {
    const s = this.getAxisMotionValue(e);
    return (
      Je(this.visualElement, e),
      s.start(Bn(e, s, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    _((e) => this.getAxisMotionValue(e).stop());
  }
  pauseAnimation() {
    _((e) => {
      var n;
      return (n = this.getAxisMotionValue(e).animation) == null
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(e) {
    var n;
    return (n = this.getAxisMotionValue(e).animation) == null
      ? void 0
      : n.state;
  }
  getAxisMotionValue(e) {
    const n = `_drag${e.toUpperCase()}`,
      s = this.visualElement.getProps(),
      i = s[n];
    return (
      i ||
      this.visualElement.getValue(e, (s.initial ? s.initial[e] : void 0) || 0)
    );
  }
  snapToCursor(e) {
    _((n) => {
      const { drag: s } = this.getProps();
      if (!ne(n, s, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: r, max: a } = i.layout.layoutBox[n];
        o.set(e[n] - L(r, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: e, dragConstraints: n } = this.getProps(),
      { projection: s } = this.visualElement;
    if (!vt(n) || !s || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    _((r) => {
      const a = this.getAxisMotionValue(r);
      if (a && this.constraints !== !1) {
        const l = a.get();
        i[r] = Eu({ min: l, max: l }, this.constraints[r]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    ((this.visualElement.current.style.transform = o ? o({}, "") : "none"),
      s.root && s.root.updateScroll(),
      s.updateLayout(),
      this.resolveConstraints(),
      _((r) => {
        if (!ne(r, e, null)) return;
        const a = this.getAxisMotionValue(r),
          { min: l, max: c } = this.constraints[r];
        a.set(L(l, c, i[r]));
      }));
  }
  addListeners() {
    if (!this.visualElement.current) return;
    Fu.set(this.visualElement, this);
    const e = this.visualElement.current,
      n = Bt(e, "pointerdown", (l) => {
        const { drag: c, dragListener: u = !0 } = this.getProps();
        c && u && this.start(l);
      }),
      s = () => {
        const { dragConstraints: l } = this.getProps();
        vt(l) && l.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      o = i.addEventListener("measure", s);
    (i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
      D.read(s));
    const r = $t(window, "resize", () => this.scalePositionWithinConstraints()),
      a = i.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: c }) => {
          this.isDragging &&
            c &&
            (_((u) => {
              const h = this.getAxisMotionValue(u);
              h &&
                ((this.originPoint[u] += l[u].translate),
                  h.set(h.get() + l[u].translate));
            }),
              this.visualElement.render());
        },
      );
    return () => {
      (r(), n(), o(), a && a());
    };
  }
  getProps() {
    const e = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: s = !1,
        dragPropagation: i = !1,
        dragConstraints: o = !1,
        dragElastic: r = tn,
        dragMomentum: a = !0,
      } = e;
    return M(y({}, e), {
      drag: n,
      dragDirectionLock: s,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: r,
      dragMomentum: a,
    });
  }
}
function ne(t, e, n) {
  return (e === !0 || e === t) && (n === null || n === t);
}
function ku(t, e = 10) {
  let n = null;
  return (Math.abs(t.y) > e ? (n = "y") : Math.abs(t.x) > e && (n = "x"), n);
}
class Bu extends ot {
  constructor(e) {
    (super(e),
      (this.removeGroupControls = X),
      (this.removeListeners = X),
      (this.controls = new Iu(e)));
  }
  mount() {
    const { dragControls: e } = this.node.getProps();
    (e && (this.removeGroupControls = e.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || X));
  }
  unmount() {
    (this.removeGroupControls(), this.removeListeners());
  }
}
const js = (t) => (e, n) => {
  t && D.postRender(() => t(e, n));
};
class Ou extends ot {
  constructor() {
    (super(...arguments), (this.removePointerDownListener = X));
  }
  onPointerDown(e) {
    this.session = new Ur(e, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Nr(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: e,
      onPanStart: n,
      onPan: s,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: js(e),
      onStart: js(n),
      onMove: s,
      onEnd: (o, r) => {
        (delete this.session, i && D.postRender(() => i(o, r)));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Bt(this.node.current, "pointerdown", (e) =>
      this.onPointerDown(e),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    (this.removePointerDownListener(), this.session && this.session.end());
  }
}
const oe = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
let De = !1;
class ju extends A.Component {
  componentDidMount() {
    const {
      visualElement: e,
      layoutGroup: n,
      switchLayoutGroup: s,
      layoutId: i,
    } = this.props,
      { projection: o } = e;
    (o &&
      (n.group && n.group.add(o),
        s && s.register && i && s.register(o),
        De && o.root.didUpdate(),
        o.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        o.setOptions(
          M(y({}, o.options), { onExitComplete: () => this.safeToRemove() }),
        )),
      (oe.hasEverUpdated = !0));
  }
  getSnapshotBeforeUpdate(e) {
    const {
      layoutDependency: n,
      visualElement: s,
      drag: i,
      isPresent: o,
    } = this.props,
      { projection: r } = s;
    return (
      r &&
      ((r.isPresent = o),
        (De = !0),
        i || e.layoutDependency !== n || n === void 0 || e.isPresent !== o
          ? r.willUpdate()
          : this.safeToRemove(),
        e.isPresent !== o &&
        (o
          ? r.promote()
          : r.relegate() ||
          D.postRender(() => {
            const a = r.getStack();
            (!a || !a.members.length) && this.safeToRemove();
          }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: e } = this.props.visualElement;
    e &&
      (e.root.didUpdate(),
        wn.postRender(() => {
          !e.currentAnimation && e.isLead() && this.safeToRemove();
        }));
  }
  componentWillUnmount() {
    const {
      visualElement: e,
      layoutGroup: n,
      switchLayoutGroup: s,
    } = this.props,
      { projection: i } = e;
    ((De = !0),
      i &&
      (i.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(i),
        s && s.deregister && s.deregister(i)));
  }
  safeToRemove() {
    const { safeToRemove: e } = this.props;
    e && e();
  }
  render() {
    return null;
  }
}
function Wr(t) {
  const [e, n] = lr(),
    s = A.useContext(nn);
  return tt.jsx(
    ju,
    M(y({}, t), {
      layoutGroup: s,
      switchLayoutGroup: A.useContext(Tr),
      isPresent: e,
      safeToRemove: n,
    }),
  );
}
function $r(t, e, n) {
  const s = N(t) ? t : mt(t);
  return (s.start(Bn("", s, e, n)), s.animation);
}
const Nu = (t, e) => t.depth - e.depth;
class Uu {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(e) {
    (on(this.children, e), (this.isDirty = !0));
  }
  remove(e) {
    (de(this.children, e), (this.isDirty = !0));
  }
  forEach(e) {
    (this.isDirty && this.children.sort(Nu),
      (this.isDirty = !1),
      this.children.forEach(e));
  }
}
function Ku(t, e) {
  const n = H.now(),
    s = ({ timestamp: i }) => {
      const o = i - n;
      o >= e && (st(s), t(o - e));
    };
  return (D.setup(s, !0), () => st(s));
}
const Gr = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  Wu = Gr.length,
  Ns = (t) => (typeof t == "string" ? parseFloat(t) : t),
  Us = (t) => typeof t == "number" || V.test(t);
function $u(t, e, n, s, i, o) {
  var r, a, l, c;
  i
    ? ((t.opacity = L(0, (r = n.opacity) != null ? r : 1, Gu(s))),
      (t.opacityExit = L((a = e.opacity) != null ? a : 1, 0, Hu(s))))
    : o &&
    (t.opacity = L(
      (l = e.opacity) != null ? l : 1,
      (c = n.opacity) != null ? c : 1,
      s,
    ));
  for (let u = 0; u < Wu; u++) {
    const h = `border${Gr[u]}Radius`;
    let f = Ks(e, h),
      d = Ks(n, h);
    if (f === void 0 && d === void 0) continue;
    (f || (f = 0),
      d || (d = 0),
      f === 0 || d === 0 || Us(f) === Us(d)
        ? ((t[h] = Math.max(L(Ns(f), Ns(d), s), 0)),
          (Q.test(d) || Q.test(f)) && (t[h] += "%"))
        : (t[h] = d));
  }
  (e.rotate || n.rotate) && (t.rotate = L(e.rotate || 0, n.rotate || 0, s));
}
function Ks(t, e) {
  return t[e] !== void 0 ? t[e] : t.borderRadius;
}
const Gu = Hr(0, 0.5, Si),
  Hu = Hr(0.5, 0.95, X);
function Hr(t, e, n) {
  return (s) => (s < t ? 0 : s > e ? 1 : n(Pt(t, e, s)));
}
function Ws(t, e) {
  ((t.min = e.min), (t.max = e.max));
}
function q(t, e) {
  (Ws(t.x, e.x), Ws(t.y, e.y));
}
function $s(t, e) {
  ((t.translate = e.translate),
    (t.scale = e.scale),
    (t.originPoint = e.originPoint),
    (t.origin = e.origin));
}
function Gs(t, e, n, s, i) {
  return (
    (t -= e),
    (t = ce(t, 1 / n, s)),
    i !== void 0 && (t = ce(t, 1 / i, s)),
    t
  );
}
function _u(t, e = 0, n = 1, s = 0.5, i, o = t, r = t) {
  if (
    (Q.test(e) && ((e = parseFloat(e)), (e = L(r.min, r.max, e / 100) - r.min)),
      typeof e != "number")
  )
    return;
  let a = L(o.min, o.max, s);
  (t === o && (a -= e),
    (t.min = Gs(t.min, e, n, a, i)),
    (t.max = Gs(t.max, e, n, a, i)));
}
function Hs(t, e, [n, s, i], o, r) {
  _u(t, e[n], e[s], e[i], e.scale, o, r);
}
const zu = ["x", "scaleX", "originX"],
  Xu = ["y", "scaleY", "originY"];
function _s(t, e, n, s) {
  (Hs(t.x, e, zu, n ? n.x : void 0, s ? s.x : void 0),
    Hs(t.y, e, Xu, n ? n.y : void 0, s ? s.y : void 0));
}
function zs(t) {
  return t.translate === 0 && t.scale === 1;
}
function _r(t) {
  return zs(t.x) && zs(t.y);
}
function Xs(t, e) {
  return t.min === e.min && t.max === e.max;
}
function Yu(t, e) {
  return Xs(t.x, e.x) && Xs(t.y, e.y);
}
function Ys(t, e) {
  return (
    Math.round(t.min) === Math.round(e.min) &&
    Math.round(t.max) === Math.round(e.max)
  );
}
function zr(t, e) {
  return Ys(t.x, e.x) && Ys(t.y, e.y);
}
function qs(t) {
  return $(t.x) / $(t.y);
}
function Zs(t, e) {
  return (
    t.translate === e.translate &&
    t.scale === e.scale &&
    t.originPoint === e.originPoint
  );
}
class qu {
  constructor() {
    this.members = [];
  }
  add(e) {
    (on(this.members, e), e.scheduleRender());
  }
  remove(e) {
    if (
      (de(this.members, e),
        e === this.prevLead && (this.prevLead = void 0),
        e === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(e) {
    const n = this.members.findIndex((i) => e === i);
    if (n === 0) return !1;
    let s;
    for (let i = n; i >= 0; i--) {
      const o = this.members[i];
      if (o.isPresent !== !1) {
        s = o;
        break;
      }
    }
    return s ? (this.promote(s), !0) : !1;
  }
  promote(e, n) {
    const s = this.lead;
    if (e !== s && ((this.prevLead = s), (this.lead = e), e.show(), s)) {
      (s.instance && s.scheduleRender(),
        e.scheduleRender(),
        (e.resumeFrom = s),
        n && (e.resumeFrom.preserveOpacity = !0),
        s.snapshot &&
        ((e.snapshot = s.snapshot),
          (e.snapshot.latestValues = s.animationValues || s.latestValues)),
        e.root && e.root.isUpdating && (e.isLayoutDirty = !0));
      const { crossfade: i } = e.options;
      i === !1 && s.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      const { options: n, resumingFrom: s } = e;
      (n.onExitComplete && n.onExitComplete(),
        s && s.options.onExitComplete && s.options.onExitComplete());
    });
  }
  scheduleRender() {
    this.members.forEach((e) => {
      e.instance && e.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function Zu(t, e, n) {
  let s = "";
  const i = t.x.translate / e.x,
    o = t.y.translate / e.y,
    r = (n == null ? void 0 : n.z) || 0;
  if (
    ((i || o || r) && (s = `translate3d(${i}px, ${o}px, ${r}px) `),
      (e.x !== 1 || e.y !== 1) && (s += `scale(${1 / e.x}, ${1 / e.y}) `),
      n)
  ) {
    const {
      transformPerspective: c,
      rotate: u,
      rotateX: h,
      rotateY: f,
      skewX: d,
      skewY: m,
    } = n;
    (c && (s = `perspective(${c}px) ${s}`),
      u && (s += `rotate(${u}deg) `),
      h && (s += `rotateX(${h}deg) `),
      f && (s += `rotateY(${f}deg) `),
      d && (s += `skewX(${d}deg) `),
      m && (s += `skewY(${m}deg) `));
  }
  const a = t.x.scale * e.x,
    l = t.y.scale * e.y;
  return ((a !== 1 || l !== 1) && (s += `scale(${a}, ${l})`), s || "none");
}
const Ee = ["", "X", "Y", "Z"],
  Ju = 1e3;
let Qu = 0;
function Re(t, e, n, s) {
  const { latestValues: i } = e;
  i[t] && ((n[t] = i[t]), e.setStaticValue(t, 0), s && (s[t] = 0));
}
function Xr(t) {
  if (((t.hasCheckedOptimisedAppear = !0), t.root === t)) return;
  const { visualElement: e } = t.options;
  if (!e) return;
  const n = Fr(e);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: o } = t.options;
    window.MotionCancelOptimisedAnimation(n, "transform", D, !(i || o));
  }
  const { parent: s } = t;
  s && !s.hasCheckedOptimisedAppear && Xr(s);
}
function Yr({
  attachResizeListener: t,
  defaultParent: e,
  measureScroll: n,
  checkIsScrollRoot: s,
  resetTransform: i,
}) {
  return class {
    constructor(r = {}, a = e == null ? void 0 : e()) {
      ((this.id = Qu++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.layoutVersion = 0),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            this.nodes.forEach(nc),
            this.nodes.forEach(oc),
            this.nodes.forEach(ac),
            this.nodes.forEach(sc));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.linkedParentVersion = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = r),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0));
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Uu());
    }
    addEventListener(r, a) {
      return (
        this.eventHandlers.has(r) || this.eventHandlers.set(r, new un()),
        this.eventHandlers.get(r).add(a)
      );
    }
    notifyListeners(r, ...a) {
      const l = this.eventHandlers.get(r);
      l && l.notify(...a);
    }
    hasListeners(r) {
      return this.eventHandlers.has(r);
    }
    mount(r) {
      if (this.instance) return;
      ((this.isSVG = Cn(r) && !ar(r)), (this.instance = r));
      const { layoutId: a, layout: l, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(r),
          this.root.nodes.add(this),
          this.parent && this.parent.children.add(this),
          this.root.hasTreeAnimated && (l || a) && (this.isLayoutDirty = !0),
          t)
      ) {
        let u,
          h = 0;
        const f = () => (this.root.updateBlockedByResize = !1);
        (D.read(() => {
          h = window.innerWidth;
        }),
          t(r, () => {
            const d = window.innerWidth;
            d !== h &&
              ((h = d),
                (this.root.updateBlockedByResize = !0),
                u && u(),
                (u = Ku(f, 250)),
                oe.hasAnimatedSinceResize &&
                ((oe.hasAnimatedSinceResize = !1), this.nodes.forEach(ti)));
          }));
      }
      (a && this.root.registerSharedNode(a, this),
        this.options.animate !== !1 &&
        c &&
        (a || l) &&
        this.addEventListener(
          "didUpdate",
          ({
            delta: u,
            hasLayoutChanged: h,
            hasRelativeLayoutChanged: f,
            layout: d,
          }) => {
            if (this.isTreeAnimationBlocked()) {
              ((this.target = void 0), (this.relativeTarget = void 0));
              return;
            }
            const m =
              this.options.transition || c.getDefaultTransition() || fc,
              { onLayoutAnimationStart: p, onLayoutAnimationComplete: g } =
                c.getProps(),
              v = !this.targetLayout || !zr(this.targetLayout, d),
              T = !h && f;
            if (
              this.options.layoutRoot ||
              this.resumeFrom ||
              T ||
              (h && (v || !this.currentAnimation))
            ) {
              this.resumeFrom &&
                ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
              const x = M(y({}, Sn(m, "layout")), {
                onPlay: p,
                onComplete: g,
              });
              ((c.shouldReduceMotion || this.options.layoutRoot) &&
                ((x.delay = 0), (x.type = !1)),
                this.startAnimation(x),
                this.setAnimationOrigin(u, T));
            } else
              (h || ti(this),
                this.isLead() &&
                this.options.onExitComplete &&
                this.options.onExitComplete());
            this.targetLayout = d;
          },
        ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(),
        this.root.nodes.remove(this));
      const r = this.getStack();
      (r && r.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        st(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
          this.nodes && this.nodes.forEach(lc),
          this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: r } = this.options;
      return r && r.getProps().transformTemplate;
    }
    willUpdate(r = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          Xr(this),
          !this.root.isUpdating && this.root.startUpdate(),
          this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let u = 0; u < this.path.length; u++) {
        const h = this.path[u];
        ((h.shouldResetTransform = !0),
          h.updateScroll("snapshot"),
          h.options.layoutRoot && h.willUpdate(!1));
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const c = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = c
        ? c(this.latestValues, "")
        : void 0),
        this.updateSnapshot(),
        r && this.notifyListeners("willUpdate"));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        (this.unblockUpdate(),
          this.clearAllSnapshots(),
          this.nodes.forEach(Js));
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(Qs);
        return;
      }
      ((this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(rc),
            this.nodes.forEach(tc),
            this.nodes.forEach(ec))
          : this.nodes.forEach(Qs),
        this.clearAllSnapshots());
      const a = H.now();
      ((U.delta = et(0, 1e3 / 60, a - U.timestamp)),
        (U.timestamp = a),
        (U.isProcessing = !0),
        xe.update.process(U),
        xe.preRender.process(U),
        xe.render.process(U),
        (U.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), wn.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(ic), this.sharedNodes.forEach(uc));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
          D.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      D.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
          this.snapshot &&
          !$(this.snapshot.measuredBox.x) &&
          !$(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
          !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const r = this.layout;
      ((this.layout = this.measure(!1)),
        this.layoutVersion++,
        (this.layoutCorrected = k()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox));
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          r ? r.layoutBox : void 0,
        );
    }
    updateScroll(r = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === r &&
          (a = !1),
          a && this.instance)
      ) {
        const l = s(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: r,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      const r =
        this.isLayoutDirty ||
        this.shouldResetTransform ||
        this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !_r(this.projectionDelta),
        l = this.getTransformTemplate(),
        c = l ? l(this.latestValues, "") : void 0,
        u = c !== this.prevTransformTemplateValue;
      r &&
        this.instance &&
        (a || ut(this.latestValues) || u) &&
        (i(this.instance, c),
          (this.shouldResetTransform = !1),
          this.scheduleRender());
    }
    measure(r = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        r && (l = this.removeTransform(l)),
        dc(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var c;
      const { visualElement: r } = this.options;
      if (!r) return k();
      const a = r.measureViewportBox();
      if (
        !(
          ((c = this.scroll) == null ? void 0 : c.wasRoot) || this.path.some(mc)
        )
      ) {
        const { scroll: u } = this.root;
        u && (xt(a.x, u.offset.x), xt(a.y, u.offset.y));
      }
      return a;
    }
    removeElementScroll(r) {
      var l;
      const a = k();
      if ((q(a, r), (l = this.scroll) != null && l.wasRoot)) return a;
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c],
          { scroll: h, options: f } = u;
        u !== this.root &&
          h &&
          f.layoutScroll &&
          (h.wasRoot && q(a, r), xt(a.x, h.offset.x), xt(a.y, h.offset.y));
      }
      return a;
    }
    applyTransform(r, a = !1) {
      const l = k();
      q(l, r);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c];
        (!a &&
          u.options.layoutScroll &&
          u.scroll &&
          u !== u.root &&
          Tt(l, { x: -u.scroll.offset.x, y: -u.scroll.offset.y }),
          ut(u.latestValues) && Tt(l, u.latestValues));
      }
      return (ut(this.latestValues) && Tt(l, this.latestValues), l);
    }
    removeTransform(r) {
      const a = k();
      q(a, r);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l];
        if (!c.instance || !ut(c.latestValues)) continue;
        Xe(c.latestValues) && c.updateSnapshot();
        const u = k(),
          h = c.measurePageBox();
        (q(u, h),
          _s(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, u));
      }
      return (ut(this.latestValues) && _s(a, this.latestValues), a);
    }
    setTargetDelta(r) {
      ((this.targetDelta = r),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0));
    }
    setOptions(r) {
      this.options = M(y(y({}, this.options), r), {
        crossfade: r.crossfade !== void 0 ? r.crossfade : !0,
      });
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== U.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(r = !1) {
      var d;
      const a = this.getLead();
      (this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
        this.isSharedProjectionDirty ||
        (this.isSharedProjectionDirty = a.isSharedProjectionDirty));
      const l = !!this.resumingFrom || this !== a;
      if (
        !(
          r ||
          (l && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          ((d = this.parent) != null && d.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: u, layoutId: h } = this.options;
      if (!this.layout || !(u || h)) return;
      this.resolvedRelativeTargetAt = U.timestamp;
      const f = this.getClosestProjectingParent();
      (f &&
        this.linkedParentVersion !== f.layoutVersion &&
        !f.options.layoutRoot &&
        this.removeRelativeTarget(),
        !this.targetDelta &&
        !this.relativeTarget &&
        (f && f.layout
          ? this.createRelativeTarget(
            f,
            this.layout.layoutBox,
            f.layout.layoutBox,
          )
          : this.removeRelativeTarget()),
        !(!this.relativeTarget && !this.targetDelta) &&
        (this.target ||
          ((this.target = k()), (this.targetWithTransforms = k())),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              Pu(this.target, this.relativeTarget, this.relativeParent.target))
            : this.targetDelta
              ? (this.resumingFrom
                ? (this.target = this.applyTransform(this.layout.layoutBox))
                : q(this.target, this.layout.layoutBox),
                br(this.target, this.targetDelta))
              : q(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget &&
          ((this.attemptToResolveRelativeTarget = !1),
            f &&
              !!f.resumingFrom == !!this.resumingFrom &&
              !f.options.layoutScroll &&
              f.target &&
              this.animationProgress !== 1
              ? this.createRelativeTarget(f, this.target, f.target)
              : (this.relativeParent = this.relativeTarget = void 0))));
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Xe(this.parent.latestValues) ||
          Pr(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    createRelativeTarget(r, a, l) {
      ((this.relativeParent = r),
        (this.linkedParentVersion = r.layoutVersion),
        this.forceRelativeParentToResolveTarget(),
        (this.relativeTarget = k()),
        (this.relativeTargetOrigin = k()),
        he(this.relativeTargetOrigin, a, l),
        q(this.relativeTarget, this.relativeTargetOrigin));
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      var m;
      const r = this.getLead(),
        a = !!this.resumingFrom || this !== r;
      let l = !0;
      if (
        ((this.isProjectionDirty ||
          ((m = this.parent) != null && m.isProjectionDirty)) &&
          (l = !1),
          a &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (l = !1),
          this.resolvedRelativeTargetAt === U.timestamp && (l = !1),
          l)
      )
        return;
      const { layout: c, layoutId: u } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
          this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
          !this.layout || !(c || u))
      )
        return;
      q(this.layoutCorrected, this.layout.layoutBox);
      const h = this.treeScale.x,
        f = this.treeScale.y;
      (Nl(this.layoutCorrected, this.treeScale, this.path, a),
        r.layout &&
        !r.target &&
        (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
        ((r.target = r.layout.layoutBox), (r.targetWithTransforms = k())));
      const { target: d } = r;
      if (!d) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : ($s(this.prevProjectionDelta.x, this.projectionDelta.x),
          $s(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Ot(this.projectionDelta, this.layoutCorrected, d, this.latestValues),
        (this.treeScale.x !== h ||
          this.treeScale.y !== f ||
          !Zs(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Zs(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
        ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", d)));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(r = !0) {
      var a;
      if (((a = this.options.visualElement) == null || a.scheduleRender(), r)) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = At()),
        (this.projectionDelta = At()),
        (this.projectionDeltaWithTransform = At()));
    }
    setAnimationOrigin(r, a = !1) {
      const l = this.snapshot,
        c = l ? l.latestValues : {},
        u = y({}, this.latestValues),
        h = At();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a));
      const f = k(),
        d = l ? l.source : void 0,
        m = this.layout ? this.layout.source : void 0,
        p = d !== m,
        g = this.getStack(),
        v = !g || g.members.length <= 1,
        T = !!(p && !v && this.options.crossfade === !0 && !this.path.some(hc));
      this.animationProgress = 0;
      let x;
      ((this.mixTargetDelta = (P) => {
        const S = P / 1e3;
        (ei(h.x, r.x, S),
          ei(h.y, r.y, S),
          this.setTargetDelta(h),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.layout &&
          this.relativeParent &&
          this.relativeParent.layout &&
          (he(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            cc(this.relativeTarget, this.relativeTargetOrigin, f, S),
            x && Yu(this.relativeTarget, x) && (this.isProjectionDirty = !1),
            x || (x = k()),
            q(x, this.relativeTarget)),
          p &&
          ((this.animationValues = u), $u(u, c, this.latestValues, S, T, v)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = S));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(r) {
      var a, l, c;
      (this.notifyListeners("animationStart"),
        (a = this.currentAnimation) == null || a.stop(),
        (c = (l = this.resumingFrom) == null ? void 0 : l.currentAnimation) ==
        null || c.stop(),
        this.pendingAnimation &&
        (st(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = D.update(() => {
          ((oe.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = mt(0)),
            (this.currentAnimation = $r(
              this.motionValue,
              [0, 1e3],
              M(y({}, r), {
                velocity: 0,
                isSync: !0,
                onUpdate: (u) => {
                  (this.mixTargetDelta(u), r.onUpdate && r.onUpdate(u));
                },
                onStop: () => { },
                onComplete: () => {
                  (r.onComplete && r.onComplete(), this.completeAnimation());
                },
              }),
            )),
            this.resumingFrom &&
            (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
          (this.resumingFrom.preserveOpacity = void 0));
      const r = this.getStack();
      (r && r.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
          void 0),
        this.notifyListeners("animationComplete"));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Ju),
          this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      const r = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: c,
        latestValues: u,
      } = r;
      if (!(!a || !l || !c)) {
        if (
          this !== r &&
          this.layout &&
          c &&
          qr(this.options.animationType, this.layout.layoutBox, c.layoutBox)
        ) {
          l = this.target || k();
          const h = $(this.layout.layoutBox.x);
          ((l.x.min = r.target.x.min), (l.x.max = l.x.min + h));
          const f = $(this.layout.layoutBox.y);
          ((l.y.min = r.target.y.min), (l.y.max = l.y.min + f));
        }
        (q(a, l),
          Tt(a, u),
          Ot(this.projectionDeltaWithTransform, this.layoutCorrected, a, u));
      }
    }
    registerSharedNode(r, a) {
      (this.sharedNodes.has(r) || this.sharedNodes.set(r, new qu()),
        this.sharedNodes.get(r).add(a));
      const c = a.options.initialPromotionConfig;
      a.promote({
        transition: c ? c.transition : void 0,
        preserveFollowOpacity:
          c && c.shouldPreserveFollowOpacity
            ? c.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const r = this.getStack();
      return r ? r.lead === this : !0;
    }
    getLead() {
      var a;
      const { layoutId: r } = this.options;
      return r
        ? ((a = this.getStack()) == null ? void 0 : a.lead) || this
        : this;
    }
    getPrevLead() {
      var a;
      const { layoutId: r } = this.options;
      return r ? ((a = this.getStack()) == null ? void 0 : a.prevLead) : void 0;
    }
    getStack() {
      const { layoutId: r } = this.options;
      if (r) return this.root.sharedNodes.get(r);
    }
    promote({ needsReset: r, transition: a, preserveFollowOpacity: l } = {}) {
      const c = this.getStack();
      (c && c.promote(this, l),
        r && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a }));
    }
    relegate() {
      const r = this.getStack();
      return r ? r.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: r } = this.options;
      if (!r) return;
      let a = !1;
      const { latestValues: l } = r;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (a = !0),
          !a)
      )
        return;
      const c = {};
      l.z && Re("z", r, c, this.animationValues);
      for (let u = 0; u < Ee.length; u++)
        (Re(`rotate${Ee[u]}`, r, c, this.animationValues),
          Re(`skew${Ee[u]}`, r, c, this.animationValues));
      r.render();
      for (const u in c)
        (r.setStaticValue(u, c[u]),
          this.animationValues && (this.animationValues[u] = c[u]));
      r.scheduleRender();
    }
    applyProjectionStyles(r, a) {
      var m, p;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        r.visibility = "hidden";
        return;
      }
      const l = this.getTransformTemplate();
      if (this.needsReset) {
        ((this.needsReset = !1),
          (r.visibility = ""),
          (r.opacity = ""),
          (r.pointerEvents = re(a == null ? void 0 : a.pointerEvents) || ""),
          (r.transform = l ? l(this.latestValues, "") : "none"));
        return;
      }
      const c = this.getLead();
      if (!this.projectionDelta || !this.layout || !c.target) {
        (this.options.layoutId &&
          ((r.opacity =
            this.latestValues.opacity !== void 0
              ? this.latestValues.opacity
              : 1),
            (r.pointerEvents = re(a == null ? void 0 : a.pointerEvents) || "")),
          this.hasProjected &&
          !ut(this.latestValues) &&
          ((r.transform = l ? l({}, "") : "none"), (this.hasProjected = !1)));
        return;
      }
      r.visibility = "";
      const u = c.animationValues || c.latestValues;
      this.applyTransformsToTarget();
      let h = Zu(this.projectionDeltaWithTransform, this.treeScale, u);
      (l && (h = l(u, h)), (r.transform = h));
      const { x: f, y: d } = this.projectionDelta;
      ((r.transformOrigin = `${f.origin * 100}% ${d.origin * 100}% 0`),
        c.animationValues
          ? (r.opacity =
            c === this
              ? (p =
                (m = u.opacity) != null ? m : this.latestValues.opacity) !=
                null
                ? p
                : 1
              : this.preserveOpacity
                ? this.latestValues.opacity
                : u.opacityExit)
          : (r.opacity =
            c === this
              ? u.opacity !== void 0
                ? u.opacity
                : ""
              : u.opacityExit !== void 0
                ? u.opacityExit
                : 0));
      for (const g in ze) {
        if (u[g] === void 0) continue;
        const { correct: v, applyTo: T, isCSSVariable: x } = ze[g],
          P = h === "none" ? u[g] : v(u[g], c);
        if (T) {
          const S = T.length;
          for (let w = 0; w < S; w++) r[T[w]] = P;
        } else
          x ? (this.options.visualElement.renderState.vars[g] = P) : (r[g] = P);
      }
      this.options.layoutId &&
        (r.pointerEvents =
          c === this ? re(a == null ? void 0 : a.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((r) => {
        var a;
        return (a = r.currentAnimation) == null ? void 0 : a.stop();
      }),
        this.root.nodes.forEach(Js),
        this.root.sharedNodes.clear());
    }
  };
}
function tc(t) {
  t.updateLayout();
}
function ec(t) {
  var n;
  const e = ((n = t.resumeFrom) == null ? void 0 : n.snapshot) || t.snapshot;
  if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
    const { layoutBox: s, measuredBox: i } = t.layout,
      { animationType: o } = t.options,
      r = e.source !== t.layout.source;
    o === "size"
      ? _((h) => {
        const f = r ? e.measuredBox[h] : e.layoutBox[h],
          d = $(f);
        ((f.min = s[h].min), (f.max = f.min + d));
      })
      : qr(o, e.layoutBox, s) &&
      _((h) => {
        const f = r ? e.measuredBox[h] : e.layoutBox[h],
          d = $(s[h]);
        ((f.max = f.min + d),
          t.relativeTarget &&
          !t.currentAnimation &&
          ((t.isProjectionDirty = !0),
            (t.relativeTarget[h].max = t.relativeTarget[h].min + d)));
      });
    const a = At();
    Ot(a, s, e.layoutBox);
    const l = At();
    r ? Ot(l, t.applyTransform(i, !0), e.measuredBox) : Ot(l, s, e.layoutBox);
    const c = !_r(a);
    let u = !1;
    if (!t.resumeFrom) {
      const h = t.getClosestProjectingParent();
      if (h && !h.resumeFrom) {
        const { snapshot: f, layout: d } = h;
        if (f && d) {
          const m = k();
          he(m, e.layoutBox, f.layoutBox);
          const p = k();
          (he(p, s, d.layoutBox),
            zr(m, p) || (u = !0),
            h.options.layoutRoot &&
            ((t.relativeTarget = p),
              (t.relativeTargetOrigin = m),
              (t.relativeParent = h)));
        }
      }
    }
    t.notifyListeners("didUpdate", {
      layout: s,
      snapshot: e,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: c,
      hasRelativeLayoutChanged: u,
    });
  } else if (t.isLead()) {
    const { onExitComplete: s } = t.options;
    s && s();
  }
  t.options.transition = void 0;
}
function nc(t) {
  t.parent &&
    (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
      t.isSharedProjectionDirty ||
      (t.isSharedProjectionDirty = !!(
        t.isProjectionDirty ||
        t.parent.isProjectionDirty ||
        t.parent.isSharedProjectionDirty
      )),
      t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
}
function sc(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
}
function ic(t) {
  t.clearSnapshot();
}
function Js(t) {
  t.clearMeasurements();
}
function Qs(t) {
  t.isLayoutDirty = !1;
}
function rc(t) {
  const { visualElement: e } = t.options;
  (e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"),
    t.resetTransform());
}
function ti(t) {
  (t.finishAnimation(),
    (t.targetDelta = t.relativeTarget = t.target = void 0),
    (t.isProjectionDirty = !0));
}
function oc(t) {
  t.resolveTargetDelta();
}
function ac(t) {
  t.calcProjection();
}
function lc(t) {
  t.resetSkewAndRotation();
}
function uc(t) {
  t.removeLeadSnapshot();
}
function ei(t, e, n) {
  ((t.translate = L(e.translate, 0, n)),
    (t.scale = L(e.scale, 1, n)),
    (t.origin = e.origin),
    (t.originPoint = e.originPoint));
}
function ni(t, e, n, s) {
  ((t.min = L(e.min, n.min, s)), (t.max = L(e.max, n.max, s)));
}
function cc(t, e, n, s) {
  (ni(t.x, e.x, n.x, s), ni(t.y, e.y, n.y, s));
}
function hc(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const fc = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  si = (t) =>
    typeof navigator != "undefined" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(t),
  ii = si("applewebkit/") && !si("chrome/") ? Math.round : X;
function ri(t) {
  ((t.min = ii(t.min)), (t.max = ii(t.max)));
}
function dc(t) {
  (ri(t.x), ri(t.y));
}
function qr(t, e, n) {
  return (
    t === "position" || (t === "preserve-aspect" && !Su(qs(e), qs(n), 0.2))
  );
}
function mc(t) {
  var e;
  return t !== t.root && ((e = t.scroll) == null ? void 0 : e.wasRoot);
}
const pc = Yr({
  attachResizeListener: (t, e) => $t(t, "resize", e),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop,
  }),
  checkIsScrollRoot: () => !0,
}),
  Le = { current: void 0 },
  Zr = Yr({
    measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
    defaultParent: () => {
      if (!Le.current) {
        const t = new pc({});
        (t.mount(window), t.setOptions({ layoutScroll: !0 }), (Le.current = t));
      }
      return Le.current;
    },
    resetTransform: (t, e) => {
      t.style.transform = e !== void 0 ? e : "none";
    },
    checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed",
  }),
  gc = {
    pan: { Feature: Ou },
    drag: { Feature: Bu, ProjectionNode: Zr, MeasureLayout: Wr },
  };
function oi(t, e, n) {
  const { props: s } = t;
  t.animationState &&
    s.whileHover &&
    t.animationState.setActive("whileHover", n === "Start");
  const i = "onHover" + n,
    o = s[i];
  o && D.postRender(() => o(e, Xt(e)));
}
class yc extends ot {
  mount() {
    const { current: e } = this.node;
    e &&
      (this.unmount = Ha(
        e,
        (n, s) => (oi(this.node, s, "Start"), (i) => oi(this.node, i, "End")),
      ));
  }
  unmount() { }
}
class vc extends ot {
  constructor() {
    (super(...arguments), (this.isActive = !1));
  }
  onFocus() {
    let e = !1;
    try {
      e = this.node.current.matches(":focus-visible");
    } catch (n) {
      e = !0;
    }
    !e ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
        (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
        (this.isActive = !1));
  }
  mount() {
    this.unmount = Ht(
      $t(this.node.current, "focus", () => this.onFocus()),
      $t(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() { }
}
function ai(t, e, n) {
  const { props: s } = t;
  if (t.current instanceof HTMLButtonElement && t.current.disabled) return;
  t.animationState &&
    s.whileTap &&
    t.animationState.setActive("whileTap", n === "Start");
  const i = "onTap" + (n === "End" ? "" : n),
    o = s[i];
  o && D.postRender(() => o(e, Xt(e)));
}
class xc extends ot {
  mount() {
    const { current: e } = this.node;
    e &&
      (this.unmount = Ya(
        e,
        (n, s) => (
          ai(this.node, s, "Start"),
          (i, { success: o }) => ai(this.node, i, o ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget },
      ));
  }
  unmount() { }
}
const en = new WeakMap(),
  Fe = new WeakMap(),
  Tc = (t) => {
    const e = en.get(t.target);
    e && e(t);
  },
  Ac = (t) => {
    t.forEach(Tc);
  };
function Sc(n) {
  var s = n,
    { root: t } = s,
    e = W(s, ["root"]);
  const i = t || document;
  Fe.has(i) || Fe.set(i, {});
  const o = Fe.get(i),
    r = JSON.stringify(e);
  return (
    o[r] || (o[r] = new IntersectionObserver(Ac, y({ root: t }, e))),
    o[r]
  );
}
function Pc(t, e, n) {
  const s = Sc(e);
  return (
    en.set(t, n),
    s.observe(t),
    () => {
      (en.delete(t), s.unobserve(t));
    }
  );
}
const bc = { some: 0, all: 1 };
class wc extends ot {
  constructor() {
    (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
  }
  startObserver() {
    this.unmount();
    const { viewport: e = {} } = this.node.getProps(),
      { root: n, margin: s, amount: i = "some", once: o } = e,
      r = {
        root: n ? n.current : void 0,
        rootMargin: s,
        threshold: typeof i == "number" ? i : bc[i],
      },
      a = (l) => {
        const { isIntersecting: c } = l;
        if (
          this.isInView === c ||
          ((this.isInView = c), o && !c && this.hasEnteredView)
        )
          return;
        (c && (this.hasEnteredView = !0),
          this.node.animationState &&
          this.node.animationState.setActive("whileInView", c));
        const { onViewportEnter: u, onViewportLeave: h } = this.node.getProps(),
          f = c ? u : h;
        f && f(l);
      };
    return Pc(this.node.current, r, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver == "undefined") return;
    const { props: e, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Vc(e, n)) && this.startObserver();
  }
  unmount() { }
}
function Vc({ viewport: t = {} }, { viewport: e = {} } = {}) {
  return (n) => t[n] !== e[n];
}
const Cc = {
  inView: { Feature: wc },
  tap: { Feature: xc },
  focus: { Feature: vc },
  hover: { Feature: yc },
},
  Mc = { layout: { ProjectionNode: Zr, MeasureLayout: Wr } },
  Dc = y(y(y(y({}, gu), Cc), gc), Mc),
  ih = Bl(Dc, Hl);
function Ec(t) {
  const e = Gt(() => mt(t)),
    { isStatic: n } = A.useContext(me);
  if (n) {
    const [, s] = A.useState(t);
    A.useEffect(() => e.on("change", s), []);
  }
  return e;
}
function Jr(t, e) {
  const n = Ec(e()),
    s = () => n.set(e());
  return (
    s(),
    rn(() => {
      const i = () => D.preRender(s, !1, !0),
        o = t.map((r) => r.on("change", i));
      return () => {
        (o.forEach((r) => r()), st(s));
      };
    }),
    n
  );
}
function Rc(t) {
  ((kt.current = []), t());
  const e = Jr(kt.current, t);
  return ((kt.current = void 0), e);
}
function rh(t, e, n, s) {
  if (typeof t == "function") return Rc(t);
  const i = typeof e == "function" ? e : qa(e, n, s);
  return Array.isArray(t) ? li(t, i) : li([t], ([o]) => i(o));
}
function li(t, e) {
  const n = Gt(() => []);
  return Jr(t, () => {
    n.length = 0;
    const s = t.length;
    for (let i = 0; i < s; i++) n[i] = t[i].get();
    return e(n);
  });
}
function jn(t) {
  return typeof t == "object" && !Array.isArray(t);
}
function Qr(t, e, n, s) {
  return typeof t == "string" && jn(e)
    ? bn(t, n, s)
    : t instanceof NodeList
      ? Array.from(t)
      : Array.isArray(t)
        ? t
        : [t];
}
function Lc(t, e, n) {
  return t * (e + 1);
}
function ui(t, e, n, s) {
  var i;
  return typeof e == "number"
    ? e
    : e.startsWith("-") || e.startsWith("+")
      ? Math.max(0, t + parseFloat(e))
      : e === "<"
        ? n
        : e.startsWith("<")
          ? Math.max(0, n + parseFloat(e.slice(1)))
          : (i = s.get(e)) != null
            ? i
            : t;
}
function Fc(t, e, n) {
  for (let s = 0; s < t.length; s++) {
    const i = t[s];
    i.at > e && i.at < n && (de(t, i), s--);
  }
}
function Ic(t, e, n, s, i, o) {
  Fc(t, i, o);
  for (let r = 0; r < e.length; r++)
    t.push({ value: e[r], at: L(i, o, s[r]), easing: Vi(n, r) });
}
function kc(t, e) {
  for (let n = 0; n < t.length; n++) t[n] = t[n] / (e + 1);
}
function Bc(t, e) {
  return t.at === e.at
    ? t.value === null
      ? 1
      : e.value === null
        ? -1
        : 0
    : t.at - e.at;
}
const Oc = "easeInOut";
function jc(t, o = {}, s, i) {
  var r = o,
    { defaultTransition: e = {} } = r,
    n = W(r, ["defaultTransition"]);
  const a = e.duration || 0.3,
    l = new Map(),
    c = new Map(),
    u = {},
    h = new Map();
  let f = 0,
    d = 0,
    m = 0;
  for (let p = 0; p < t.length; p++) {
    const g = t[p];
    if (typeof g == "string") {
      h.set(g, d);
      continue;
    } else if (!Array.isArray(g)) {
      h.set(g.name, ui(d, g.at, f, h));
      continue;
    }
    let [v, T, x = {}] = g;
    x.at !== void 0 && (d = ui(d, x.at, f, h));
    let P = 0;
    const S = (w, C, b, E = 0, I = 0) => {
      const R = Nc(w),
        Gn = C,
        {
          delay: pt = 0,
          times: Y = $i(R),
          type: gt = "keyframes",
          repeat: at,
          repeatType: eo,
          repeatDelay: O = 0,
        } = Gn,
        G = W(Gn, [
          "delay",
          "times",
          "type",
          "repeat",
          "repeatType",
          "repeatDelay",
        ]);
      let { ease: K = e.ease || "easeOut", duration: j } = C;
      const Yt = typeof pt == "function" ? pt(E, I) : pt,
        Nn = R.length,
        Un = An(gt) ? gt : i == null ? void 0 : i[gt || "keyframes"];
      if (Nn <= 2 && Un) {
        let Mt = 100;
        if (Nn === 2 && Wc(R)) {
          const Dt = R[1] - R[0];
          Mt = Math.abs(Dt);
        }
        const qt = y({}, G);
        j !== void 0 && (qt.duration = J(j));
        const Zt = Ni(qt, Mt, Un);
        ((K = Zt.ease), (j = Zt.duration));
      }
      j != null || (j = a);
      const Kn = d + Yt;
      Y.length === 1 && Y[0] === 0 && (Y[1] = 1);
      const Wn = Y.length - R.length;
      if ((Wn > 0 && Wi(Y, Wn), R.length === 1 && R.unshift(null), at)) {
        j = Lc(j, at);
        const Mt = [...R],
          qt = [...Y];
        K = Array.isArray(K) ? [...K] : [K];
        const Zt = [...K];
        for (let Dt = 0; Dt < at; Dt++) {
          R.push(...Mt);
          for (let Et = 0; Et < Mt.length; Et++)
            (Y.push(qt[Et] + (Dt + 1)),
              K.push(Et === 0 ? "linear" : Vi(Zt, Et - 1)));
        }
        kc(Y, at);
      }
      const $n = Kn + j;
      (Ic(b, R, K, Y, Kn, $n),
        (P = Math.max(Yt + j, P)),
        (m = Math.max($n, m)));
    };
    if (N(v)) {
      const w = ci(v, c);
      S(T, x, hi("default", w));
    } else {
      const w = Qr(v, T, s, u),
        C = w.length;
      for (let b = 0; b < C; b++) {
        ((T = T), (x = x));
        const E = w[b],
          I = ci(E, c);
        for (const R in T) S(T[R], Uc(x, R), hi(R, I), b, C);
      }
    }
    ((f = d), (d += P));
  }
  return (
    c.forEach((p, g) => {
      for (const v in p) {
        const T = p[v];
        T.sort(Bc);
        const x = [],
          P = [],
          S = [];
        for (let C = 0; C < T.length; C++) {
          const { at: b, value: E, easing: I } = T[C];
          (x.push(E), P.push(Pt(0, m, b)), S.push(I || "easeOut"));
        }
        (P[0] !== 0 && (P.unshift(0), x.unshift(x[0]), S.unshift(Oc)),
          P[P.length - 1] !== 1 && (P.push(1), x.push(null)),
          l.has(g) || l.set(g, { keyframes: {}, transition: {} }));
        const w = l.get(g);
        ((w.keyframes[v] = x),
          (w.transition[v] = y(
            M(y({}, e), { duration: m, ease: S, times: P }),
            n,
          )));
      }
    }),
    l
  );
}
function ci(t, e) {
  return (!e.has(t) && e.set(t, {}), e.get(t));
}
function hi(t, e) {
  return (e[t] || (e[t] = []), e[t]);
}
function Nc(t) {
  return Array.isArray(t) ? t : [t];
}
function Uc(t, e) {
  return t && t[e] ? y(y({}, t), t[e]) : y({}, t);
}
const Kc = (t) => typeof t == "number",
  Wc = (t) => t.every(Kc);
function $c(t, e) {
  return t in e;
}
class Gc extends Cr {
  constructor() {
    (super(...arguments), (this.type = "object"));
  }
  readValueFromInstance(e, n) {
    if ($c(n, e)) {
      const s = e[n];
      if (typeof s == "string" || typeof s == "number") return s;
    }
  }
  getBaseTargetFromProps() { }
  removeValueFromRenderState(e, n) {
    delete n.output[e];
  }
  measureInstanceViewportBox() {
    return k();
  }
  build(e, n) {
    Object.assign(e.output, n);
  }
  renderInstance(e, { output: n }) {
    Object.assign(e, n);
  }
  sortInstanceNodePosition() {
    return 0;
  }
}
function Hc(t) {
  const e = {
    presenceContext: null,
    props: {},
    visualState: {
      renderState: {
        transform: {},
        transformOrigin: {},
        style: {},
        vars: {},
        attrs: {},
      },
      latestValues: {},
    },
  },
    n = Cn(t) && !ar(t) ? new Lr(e) : new Er(e);
  (n.mount(t), Wt.set(t, n));
}
function _c(t) {
  const e = {
    presenceContext: null,
    props: {},
    visualState: { renderState: { output: {} }, latestValues: {} },
  },
    n = new Gc(e);
  (n.mount(t), Wt.set(t, n));
}
function zc(t, e) {
  return N(t) || typeof t == "number" || (typeof t == "string" && !jn(e));
}
function to(t, e, n, s) {
  const i = [];
  if (zc(t, e)) i.push($r(t, (jn(e) && e.default) || e, n && (n.default || n)));
  else {
    const o = Qr(t, e, s),
      r = o.length;
    for (let a = 0; a < r; a++) {
      const l = o[a],
        c = l instanceof Element ? Hc : _c;
      Wt.has(l) || c(l);
      const u = Wt.get(l),
        h = y({}, n);
      ("delay" in h &&
        typeof h.delay == "function" &&
        (h.delay = h.delay(a, r)),
        i.push(...On(u, M(y({}, e), { transition: h }), {})));
    }
  }
  return i;
}
function Xc(t, e, n) {
  const s = [];
  return (
    jc(t, e, n, { spring: Ut }).forEach(
      ({ keyframes: o, transition: r }, a) => {
        s.push(...to(a, o, r));
      },
    ),
    s
  );
}
function Yc(t) {
  return Array.isArray(t) && t.some(Array.isArray);
}
function qc(t) {
  function e(n, s, i) {
    let o = [],
      r;
    if (Yc(n)) o = Xc(n, s, t);
    else {
      const l = i || {},
        { onComplete: c } = l,
        u = W(l, ["onComplete"]);
      (typeof c == "function" && (r = c), (o = to(n, s, u, t)));
    }
    const a = new Da(o);
    return (r && a.finished.then(r), a);
  }
  return e;
}
const oh = qc(),
  Zc = { some: 0, all: 1 };
function Jc(t, e, { root: n, margin: s, amount: i = "some" } = {}) {
  const o = bn(t),
    r = new WeakMap(),
    a = (c) => {
      c.forEach((u) => {
        const h = r.get(u.target);
        if (u.isIntersecting !== !!h)
          if (u.isIntersecting) {
            const f = e(u.target, u);
            typeof f == "function" ? r.set(u.target, f) : l.unobserve(u.target);
          } else typeof h == "function" && (h(u), r.delete(u.target));
      });
    },
    l = new IntersectionObserver(a, {
      root: n,
      rootMargin: s,
      threshold: typeof i == "number" ? i : Zc[i],
    });
  return (o.forEach((c) => l.observe(c)), () => l.disconnect());
}
function ah(
  t,
  { root: e, margin: n, amount: s, once: i = !1, initial: o = !1 } = {},
) {
  const [r, a] = A.useState(o);
  return (
    A.useEffect(() => {
      if (!t.current || (i && r)) return;
      const l = () => (a(!0), i ? void 0 : () => a(!1)),
        c = { root: (e && e.current) || void 0, margin: n, amount: s };
      return Jc(t.current, l, c);
    }, [e, t, n, i, s]),
    r
  );
}
export { nh as A, Ec as a, rh as b, oh as c, ih as m, ah as u };
