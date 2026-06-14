import {
  j as m,
  V as Xr,
  R as Gr,
  A as Kr,
  C as Zr,
  T as Jr,
  D as Qr,
  P as gs,
  a as Ht,
  u as xn,
  c as eo,
  b as Yt,
  d as ys,
  e as vs,
  f as ws,
  g as bs,
  h as nt,
} from "./_uiVendor";
import {
  d as xs,
  a as g,
  R as x,
  v as Ss,
  b as Es,
  u as qt,
  B as As,
  e as ks,
  f as re,
} from "./_reactVendor";
import { X as Cs } from "./_iconsVendor";
import { A as Ts, m as Ps } from "./_animationVendor";
import { SEOManager } from "./SEOManager";
var ps = Object.defineProperty,
  ms = Object.defineProperties;
var hs = Object.getOwnPropertyDescriptors;
var Lt = Object.getOwnPropertySymbols;
var Jn = Object.prototype.hasOwnProperty,
  Qn = Object.prototype.propertyIsEnumerable;
var ln = (e, t, n) =>
    t in e
      ? ps(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  v = (e, t) => {
    for (var n in t || (t = {})) Jn.call(t, n) && ln(e, n, t[n]);
    if (Lt) for (var n of Lt(t)) Qn.call(t, n) && ln(e, n, t[n]);
    return e;
  },
  C = (e, t) => ms(e, hs(t));
var G = (e, t) => {
  var n = {};
  for (var r in e) Jn.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Lt)
    for (var r of Lt(e)) t.indexOf(r) < 0 && Qn.call(e, r) && (n[r] = e[r]);
  return n;
};
var Ae = (e, t, n) => ln(e, typeof t != "symbol" ? t + "" : t, n);
var Q = (e, t, n) =>
  new Promise((r, o) => {
    var s = (l) => {
        try {
          a(n.next(l));
        } catch (d) {
          o(d);
        }
      },
      i = (l) => {
        try {
          a(n.throw(l));
        } catch (d) {
          o(d);
        }
      },
      a = (l) => (l.done ? r(l.value) : Promise.resolve(l.value).then(s, i));
    a((n = n.apply(e, t)).next());
  });
const tr = 8e3,
  _s = 12e3,
  Is = 1100,
  Sn = 1200,
  Ns = 0.759,
  nr = "Mayank",
  to = "mayank-dev-portfolio:initial-loader-seen",
  rr = document.documentElement,
  ht = document.getElementById("initial-loader-stage");
var Yr, qr;
const js =
    (qr =
      (Yr = window.matchMedia) == null
        ? void 0
        : Yr.call(window, "(prefers-reduced-motion: reduce)").matches) != null
      ? qr
      : !1,
  En = [];
window.registerReady = (e) => {
  En.push(Promise.resolve(e).catch(() => {}));
};
const no = (e) => new Promise((t) => window.setTimeout(t, e));
function Os() {
  try {
    return window.sessionStorage.getItem(to) === "true";
  } catch (e) {
    return !1;
  }
}
function Ms() {
  try {
    window.sessionStorage.setItem(to, "true");
  } catch (e) {}
}
function $e(e, t) {
  return Promise.race([e, no(t).then(() => {})]);
}
function Ds() {
  return document.readyState === "complete"
    ? Promise.resolve()
    : new Promise((e) => {
        window.addEventListener("load", () => e(), { once: !0 });
      });
}
function $s() {
  return window.__APP_HYDRATED__
    ? Promise.resolve()
    : new Promise((e) => {
        const t = window.setInterval(() => {
            window.__APP_HYDRATED__ &&
              (window.clearInterval(t), window.clearTimeout(n), e());
          }, 16),
          n = window.setTimeout(() => {
            (window.clearInterval(t), e());
          }, 3e3);
      });
}
function zs(e) {
  const t = e.getBoundingClientRect(),
    n = Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
    r = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0,
    ),
    o = Math.min(t.right, n) - Math.max(t.left, 0),
    s = Math.min(t.bottom, r) - Math.max(t.top, 0);
  return o > 24 && s > 24;
}
function Bs(e) {
  return e.decode
    ? e.decode().catch(() => {})
    : new Promise((t) => {
        if (e.complete) {
          t();
          return;
        }
        (e.addEventListener("load", () => t(), { once: !0 }),
          e.addEventListener("error", () => t(), { once: !0 }));
      });
}
function Vs() {
  return Q(this, null, function* () {
    const e = Array.from(document.images).filter(zs);
    yield Promise.allSettled(e.map(Bs));
  });
}
function Fs() {
  return Q(this, null, function* () {
    En.length !== 0 && (yield Promise.allSettled([...En]));
  });
}
function An(e, t = 400) {
  return Q(this, null, function* () {
    var n;
    !("fonts" in document) ||
      !((n = document.fonts) != null && n.load) ||
      (yield document.fonts.load(`${t} 1em "${e}"`));
  });
}
let kn = Promise.resolve();
function Us() {
  return Q(this, null, function* () {
    if (((kn = Promise.resolve()), yield $e(An("Kalam"), Sn), js || !ht))
      return "static";
    try {
      const [{ TegakiEngine: e }, t] = yield Promise.all([
        import("./_tegakiEngine"),
        import("./_kalamBundle"),
      ]);
      return (
        (ht.textContent = ""),
        (kn = new Promise((n) => {
          new e(ht, {
            text: nr,
            font: t.default,
            time: { mode: "uncontrolled", speed: Ns, loop: !1 },
            showOverlay: !1,
            onComplete: () => n(),
          });
        })),
        "animated"
      );
    } catch (e) {
      return (ht && (ht.textContent = nr), "static");
    }
  });
}
let or = !1;
function cn() {
  or ||
    ((or = !0),
    Ms(),
    rr.classList.add("app-ready"),
    window.setTimeout(() => {
      rr.classList.add("loader-hidden");
    }, Is));
}
function Ws() {
  return Q(this, null, function* () {
    if (Os()) {
      cn();
      return;
    }
    const e = window.setTimeout(() => {
      cn();
    }, _s);
    try {
      const n = (yield Us()) === "animated" ? $e(kn, tr) : no(tr / 3);
      yield Promise.all([
        n,
        Q(null, null, function* () {
          (yield $e(Ds(), 6e3),
            yield $e($s(), 4e3),
            yield new Promise((r) => {
              window.requestAnimationFrame(() => {
                window.requestAnimationFrame(() => r());
              });
            }),
            yield $e(Vs(), 3e3),
            yield $e(Fs(), 2e3),
            yield $e(An("Sora"), Sn),
            yield $e(An("Kalam"), Sn));
        }),
      ]);
    } finally {
      (window.clearTimeout(e), cn());
    }
  });
}
Ws();
var _t = {},
  sr;
function Hs() {
  if (sr) return _t;
  sr = 1;
  var e = xs();
  return ((_t.createRoot = e.createRoot), (_t.hydrateRoot = e.hydrateRoot), _t);
}
var Ys = Hs();
const qs = 1,
  Xs = 1e6;
let dn = 0;
function Gs() {
  return ((dn = (dn + 1) % Number.MAX_SAFE_INTEGER), dn.toString());
}
const un = new Map(),
  ir = (e) => {
    if (un.has(e)) return;
    const t = setTimeout(() => {
      (un.delete(e), bt({ type: "REMOVE_TOAST", toastId: e }));
    }, Xs);
    un.set(e, t);
  },
  Ks = (e, t) => {
    switch (t.type) {
      case "ADD_TOAST":
        return C(v({}, e), { toasts: [t.toast, ...e.toasts].slice(0, qs) });
      case "UPDATE_TOAST":
        return C(v({}, e), {
          toasts: e.toasts.map((n) =>
            n.id === t.toast.id ? v(v({}, n), t.toast) : n,
          ),
        });
      case "DISMISS_TOAST": {
        const { toastId: n } = t;
        return (
          n
            ? ir(n)
            : e.toasts.forEach((r) => {
                ir(r.id);
              }),
          C(v({}, e), {
            toasts: e.toasts.map((r) =>
              r.id === n || n === void 0 ? C(v({}, r), { open: !1 }) : r,
            ),
          })
        );
      }
      case "REMOVE_TOAST":
        return t.toastId === void 0
          ? C(v({}, e), { toasts: [] })
          : C(v({}, e), { toasts: e.toasts.filter((n) => n.id !== t.toastId) });
    }
  },
  Mt = [];
let Dt = { toasts: [] };
function bt(e) {
  ((Dt = Ks(Dt, e)),
    Mt.forEach((t) => {
      t(Dt);
    }));
}
function Zs(t) {
  var e = G(t, []);
  const n = Gs(),
    r = (s) => bt({ type: "UPDATE_TOAST", toast: C(v({}, s), { id: n }) }),
    o = () => bt({ type: "DISMISS_TOAST", toastId: n });
  return (
    bt({
      type: "ADD_TOAST",
      toast: C(v({}, e), {
        id: n,
        open: !0,
        onOpenChange: (s) => {
          s || o();
        },
      }),
    }),
    { id: n, dismiss: o, update: r }
  );
}
function Js() {
  const [e, t] = g.useState(Dt);
  return (
    g.useEffect(
      () => (
        Mt.push(t),
        () => {
          const n = Mt.indexOf(t);
          n > -1 && Mt.splice(n, 1);
        }
      ),
      [e],
    ),
    C(v({}, e), {
      toast: Zs,
      dismiss: (n) => bt({ type: "DISMISS_TOAST", toastId: n }),
    })
  );
}
function ro(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = ro(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function oo() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = ro(e)) && (r && (r += " "), (r += t));
  return r;
}
const ar = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  lr = oo,
  Qs = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return lr(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className,
      );
    const { variants: o, defaultVariants: s } = t,
      i = Object.keys(o).map((d) => {
        const u = n == null ? void 0 : n[d],
          f = s == null ? void 0 : s[d];
        if (u === null) return null;
        const p = ar(u) || ar(f);
        return o[d][p];
      }),
      a =
        n &&
        Object.entries(n).reduce((d, u) => {
          let [f, p] = u;
          return (p === void 0 || (d[f] = p), d);
        }, {}),
      l =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((d, u) => {
              let y = u,
                { class: f, className: p } = y,
                c = G(y, ["class", "className"]);
              return Object.entries(c).every((h) => {
                let [w, b] = h;
                return Array.isArray(b)
                  ? b.includes(v(v({}, s), a)[w])
                  : v(v({}, s), a)[w] === b;
              })
                ? [...d, f, p]
                : d;
            }, []);
    return lr(
      e,
      i,
      l,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className,
    );
  },
  Mn = "-",
  ei = (e) => {
    const t = ni(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (i) => {
        const a = i.split(Mn);
        return (a[0] === "" && a.length !== 1 && a.shift(), so(a, t) || ti(i));
      },
      getConflictingClassGroupIds: (i, a) => {
        const l = n[i] || [];
        return a && r[i] ? [...l, ...r[i]] : l;
      },
    };
  },
  so = (e, t) => {
    var i;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      o = r ? so(e.slice(1), r) : void 0;
    if (o) return o;
    if (t.validators.length === 0) return;
    const s = e.join(Mn);
    return (i = t.validators.find(({ validator: a }) => a(s))) == null
      ? void 0
      : i.classGroupId;
  },
  cr = /^\[(.+)\]$/,
  ti = (e) => {
    if (cr.test(e)) {
      const t = cr.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  ni = (e) => {
    const { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] };
    return (
      oi(Object.entries(e.classGroups), n).forEach(([s, i]) => {
        Cn(i, r, s, t);
      }),
      r
    );
  },
  Cn = (e, t, n, r) => {
    e.forEach((o) => {
      if (typeof o == "string") {
        const s = o === "" ? t : dr(t, o);
        s.classGroupId = n;
        return;
      }
      if (typeof o == "function") {
        if (ri(o)) {
          Cn(o(r), t, n, r);
          return;
        }
        t.validators.push({ validator: o, classGroupId: n });
        return;
      }
      Object.entries(o).forEach(([s, i]) => {
        Cn(i, dr(t, s), n, r);
      });
    });
  },
  dr = (e, t) => {
    let n = e;
    return (
      t.split(Mn).forEach((r) => {
        (n.nextPart.has(r) ||
          n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(r)));
      }),
      n
    );
  },
  ri = (e) => e.isThemeGetter,
  oi = (e, t) =>
    t
      ? e.map(([n, r]) => {
          const o = r.map((s) =>
            typeof s == "string"
              ? t + s
              : typeof s == "object"
                ? Object.fromEntries(
                    Object.entries(s).map(([i, a]) => [t + i, a]),
                  )
                : s,
          );
          return [n, o];
        })
      : e,
  si = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      n = new Map(),
      r = new Map();
    const o = (s, i) => {
      (n.set(s, i), t++, t > e && ((t = 0), (r = n), (n = new Map())));
    };
    return {
      get(s) {
        let i = n.get(s);
        if (i !== void 0) return i;
        if ((i = r.get(s)) !== void 0) return (o(s, i), i);
      },
      set(s, i) {
        n.has(s) ? n.set(s, i) : o(s, i);
      },
    };
  },
  io = "!",
  ii = (e) => {
    const { separator: t, experimentalParseClassName: n } = e,
      r = t.length === 1,
      o = t[0],
      s = t.length,
      i = (a) => {
        const l = [];
        let d = 0,
          u = 0,
          f;
        for (let w = 0; w < a.length; w++) {
          let b = a[w];
          if (d === 0) {
            if (b === o && (r || a.slice(w, w + s) === t)) {
              (l.push(a.slice(u, w)), (u = w + s));
              continue;
            }
            if (b === "/") {
              f = w;
              continue;
            }
          }
          b === "[" ? d++ : b === "]" && d--;
        }
        const p = l.length === 0 ? a : a.substring(u),
          c = p.startsWith(io),
          y = c ? p.substring(1) : p,
          h = f && f > u ? f - u : void 0;
        return {
          modifiers: l,
          hasImportantModifier: c,
          baseClassName: y,
          maybePostfixModifierPosition: h,
        };
      };
    return n ? (a) => n({ className: a, parseClassName: i }) : i;
  },
  ai = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return (
      e.forEach((r) => {
        r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
      }),
      t.push(...n.sort()),
      t
    );
  },
  li = (e) => v({ cache: si(e.cacheSize), parseClassName: ii(e) }, ei(e)),
  ci = /\s+/,
  di = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: o,
      } = t,
      s = [],
      i = e.trim().split(ci);
    let a = "";
    for (let l = i.length - 1; l >= 0; l -= 1) {
      const d = i[l],
        {
          modifiers: u,
          hasImportantModifier: f,
          baseClassName: p,
          maybePostfixModifierPosition: c,
        } = n(d);
      let y = !!c,
        h = r(y ? p.substring(0, c) : p);
      if (!h) {
        if (!y) {
          a = d + (a.length > 0 ? " " + a : a);
          continue;
        }
        if (((h = r(p)), !h)) {
          a = d + (a.length > 0 ? " " + a : a);
          continue;
        }
        y = !1;
      }
      const w = ai(u).join(":"),
        b = f ? w + io : w,
        E = b + h;
      if (s.includes(E)) continue;
      s.push(E);
      const S = o(h, y);
      for (let A = 0; A < S.length; ++A) {
        const k = S[A];
        s.push(b + k);
      }
      a = d + (a.length > 0 ? " " + a : a);
    }
    return a;
  };
function ui() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = ao(t)) && (r && (r += " "), (r += n));
  return r;
}
const ao = (e) => {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = ao(e[r])) && (n && (n += " "), (n += t));
  return n;
};
function fi(e, ...t) {
  let n,
    r,
    o,
    s = i;
  function i(l) {
    const d = t.reduce((u, f) => f(u), e());
    return ((n = li(d)), (r = n.cache.get), (o = n.cache.set), (s = a), a(l));
  }
  function a(l) {
    const d = r(l);
    if (d) return d;
    const u = di(l, n);
    return (o(l, u), u);
  }
  return function () {
    return s(ui.apply(null, arguments));
  };
}
const K = (e) => {
    const t = (n) => n[e] || [];
    return ((t.isThemeGetter = !0), t);
  },
  lo = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  pi = /^\d+\/\d+$/,
  mi = new Set(["px", "full", "screen"]),
  hi = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  gi =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  yi = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  vi = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  wi =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  ke = (e) => ot(e) || mi.has(e) || pi.test(e),
  Me = (e) => lt(e, "length", Ti),
  ot = (e) => !!e && !Number.isNaN(Number(e)),
  fn = (e) => lt(e, "number", ot),
  gt = (e) => !!e && Number.isInteger(Number(e)),
  bi = (e) => e.endsWith("%") && ot(e.slice(0, -1)),
  N = (e) => lo.test(e),
  De = (e) => hi.test(e),
  xi = new Set(["length", "size", "percentage"]),
  Si = (e) => lt(e, xi, co),
  Ei = (e) => lt(e, "position", co),
  Ai = new Set(["image", "url"]),
  ki = (e) => lt(e, Ai, Ri),
  Ci = (e) => lt(e, "", Pi),
  yt = () => !0,
  lt = (e, t, n) => {
    const r = lo.exec(e);
    return r
      ? r[1]
        ? typeof t == "string"
          ? r[1] === t
          : t.has(r[1])
        : n(r[2])
      : !1;
  },
  Ti = (e) => gi.test(e) && !yi.test(e),
  co = () => !1,
  Pi = (e) => vi.test(e),
  Ri = (e) => wi.test(e),
  Li = () => {
    const e = K("colors"),
      t = K("spacing"),
      n = K("blur"),
      r = K("brightness"),
      o = K("borderColor"),
      s = K("borderRadius"),
      i = K("borderSpacing"),
      a = K("borderWidth"),
      l = K("contrast"),
      d = K("grayscale"),
      u = K("hueRotate"),
      f = K("invert"),
      p = K("gap"),
      c = K("gradientColorStops"),
      y = K("gradientColorStopPositions"),
      h = K("inset"),
      w = K("margin"),
      b = K("opacity"),
      E = K("padding"),
      S = K("saturate"),
      A = K("scale"),
      k = K("sepia"),
      L = K("skew"),
      O = K("space"),
      D = K("translate"),
      ee = () => ["auto", "contain", "none"],
      Z = () => ["auto", "hidden", "clip", "visible", "scroll"],
      B = () => ["auto", N, t],
      R = () => [N, t],
      z = () => ["", ke, Me],
      Y = () => ["auto", ot, N],
      U = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      M = () => ["solid", "dashed", "dotted", "double", "none"],
      V = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      I = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      T = () => ["", "0", N],
      j = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      W = () => [ot, N];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [yt],
        spacing: [ke, Me],
        blur: ["none", "", De, N],
        brightness: W(),
        borderColor: [e],
        borderRadius: ["none", "", "full", De, N],
        borderSpacing: R(),
        borderWidth: z(),
        contrast: W(),
        grayscale: T(),
        hueRotate: W(),
        invert: T(),
        gap: R(),
        gradientColorStops: [e],
        gradientColorStopPositions: [bi, Me],
        inset: B(),
        margin: B(),
        opacity: W(),
        padding: R(),
        saturate: W(),
        scale: W(),
        sepia: T(),
        skew: W(),
        space: R(),
        translate: R(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", N] }],
        container: ["container"],
        columns: [{ columns: [De] }],
        "break-after": [{ "break-after": j() }],
        "break-before": [{ "break-before": j() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...U(), N] }],
        overflow: [{ overflow: Z() }],
        "overflow-x": [{ "overflow-x": Z() }],
        "overflow-y": [{ "overflow-y": Z() }],
        overscroll: [{ overscroll: ee() }],
        "overscroll-x": [{ "overscroll-x": ee() }],
        "overscroll-y": [{ "overscroll-y": ee() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [h] }],
        "inset-x": [{ "inset-x": [h] }],
        "inset-y": [{ "inset-y": [h] }],
        start: [{ start: [h] }],
        end: [{ end: [h] }],
        top: [{ top: [h] }],
        right: [{ right: [h] }],
        bottom: [{ bottom: [h] }],
        left: [{ left: [h] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", gt, N] }],
        basis: [{ basis: B() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", N] }],
        grow: [{ grow: T() }],
        shrink: [{ shrink: T() }],
        order: [{ order: ["first", "last", "none", gt, N] }],
        "grid-cols": [{ "grid-cols": [yt] }],
        "col-start-end": [{ col: ["auto", { span: ["full", gt, N] }, N] }],
        "col-start": [{ "col-start": Y() }],
        "col-end": [{ "col-end": Y() }],
        "grid-rows": [{ "grid-rows": [yt] }],
        "row-start-end": [{ row: ["auto", { span: [gt, N] }, N] }],
        "row-start": [{ "row-start": Y() }],
        "row-end": [{ "row-end": Y() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", N] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", N] }],
        gap: [{ gap: [p] }],
        "gap-x": [{ "gap-x": [p] }],
        "gap-y": [{ "gap-y": [p] }],
        "justify-content": [{ justify: ["normal", ...I()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...I(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...I(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [E] }],
        px: [{ px: [E] }],
        py: [{ py: [E] }],
        ps: [{ ps: [E] }],
        pe: [{ pe: [E] }],
        pt: [{ pt: [E] }],
        pr: [{ pr: [E] }],
        pb: [{ pb: [E] }],
        pl: [{ pl: [E] }],
        m: [{ m: [w] }],
        mx: [{ mx: [w] }],
        my: [{ my: [w] }],
        ms: [{ ms: [w] }],
        me: [{ me: [w] }],
        mt: [{ mt: [w] }],
        mr: [{ mr: [w] }],
        mb: [{ mb: [w] }],
        ml: [{ ml: [w] }],
        "space-x": [{ "space-x": [O] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [O] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", N, t] }],
        "min-w": [{ "min-w": [N, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              N,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [De] },
              De,
            ],
          },
        ],
        h: [{ h: [N, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [N, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [N, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [N, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", De, Me] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              fn,
            ],
          },
        ],
        "font-family": [{ font: [yt] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              N,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", ot, fn] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              ke,
              N,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", N] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", N] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [b] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [b] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...M(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", ke, Me] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", ke, N] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: R() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              N,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", N] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [b] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...U(), Ei] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", Si] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              ki,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [y] }],
        "gradient-via-pos": [{ via: [y] }],
        "gradient-to-pos": [{ to: [y] }],
        "gradient-from": [{ from: [c] }],
        "gradient-via": [{ via: [c] }],
        "gradient-to": [{ to: [c] }],
        rounded: [{ rounded: [s] }],
        "rounded-s": [{ "rounded-s": [s] }],
        "rounded-e": [{ "rounded-e": [s] }],
        "rounded-t": [{ "rounded-t": [s] }],
        "rounded-r": [{ "rounded-r": [s] }],
        "rounded-b": [{ "rounded-b": [s] }],
        "rounded-l": [{ "rounded-l": [s] }],
        "rounded-ss": [{ "rounded-ss": [s] }],
        "rounded-se": [{ "rounded-se": [s] }],
        "rounded-ee": [{ "rounded-ee": [s] }],
        "rounded-es": [{ "rounded-es": [s] }],
        "rounded-tl": [{ "rounded-tl": [s] }],
        "rounded-tr": [{ "rounded-tr": [s] }],
        "rounded-br": [{ "rounded-br": [s] }],
        "rounded-bl": [{ "rounded-bl": [s] }],
        "border-w": [{ border: [a] }],
        "border-w-x": [{ "border-x": [a] }],
        "border-w-y": [{ "border-y": [a] }],
        "border-w-s": [{ "border-s": [a] }],
        "border-w-e": [{ "border-e": [a] }],
        "border-w-t": [{ "border-t": [a] }],
        "border-w-r": [{ "border-r": [a] }],
        "border-w-b": [{ "border-b": [a] }],
        "border-w-l": [{ "border-l": [a] }],
        "border-opacity": [{ "border-opacity": [b] }],
        "border-style": [{ border: [...M(), "hidden"] }],
        "divide-x": [{ "divide-x": [a] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [a] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [b] }],
        "divide-style": [{ divide: M() }],
        "border-color": [{ border: [o] }],
        "border-color-x": [{ "border-x": [o] }],
        "border-color-y": [{ "border-y": [o] }],
        "border-color-s": [{ "border-s": [o] }],
        "border-color-e": [{ "border-e": [o] }],
        "border-color-t": [{ "border-t": [o] }],
        "border-color-r": [{ "border-r": [o] }],
        "border-color-b": [{ "border-b": [o] }],
        "border-color-l": [{ "border-l": [o] }],
        "divide-color": [{ divide: [o] }],
        "outline-style": [{ outline: ["", ...M()] }],
        "outline-offset": [{ "outline-offset": [ke, N] }],
        "outline-w": [{ outline: [ke, Me] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: z() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [b] }],
        "ring-offset-w": [{ "ring-offset": [ke, Me] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", De, Ci] }],
        "shadow-color": [{ shadow: [yt] }],
        opacity: [{ opacity: [b] }],
        "mix-blend": [{ "mix-blend": [...V(), "plus-lighter", "plus-darker"] }],
        "bg-blend": [{ "bg-blend": V() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [l] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", De, N] }],
        grayscale: [{ grayscale: [d] }],
        "hue-rotate": [{ "hue-rotate": [u] }],
        invert: [{ invert: [f] }],
        saturate: [{ saturate: [S] }],
        sepia: [{ sepia: [k] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [n] }],
        "backdrop-brightness": [{ "backdrop-brightness": [r] }],
        "backdrop-contrast": [{ "backdrop-contrast": [l] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [d] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [u] }],
        "backdrop-invert": [{ "backdrop-invert": [f] }],
        "backdrop-opacity": [{ "backdrop-opacity": [b] }],
        "backdrop-saturate": [{ "backdrop-saturate": [S] }],
        "backdrop-sepia": [{ "backdrop-sepia": [k] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [i] }],
        "border-spacing-x": [{ "border-spacing-x": [i] }],
        "border-spacing-y": [{ "border-spacing-y": [i] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              N,
            ],
          },
        ],
        duration: [{ duration: W() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", N] }],
        delay: [{ delay: W() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", N] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [A] }],
        "scale-x": [{ "scale-x": [A] }],
        "scale-y": [{ "scale-y": [A] }],
        rotate: [{ rotate: [gt, N] }],
        "translate-x": [{ "translate-x": [D] }],
        "translate-y": [{ "translate-y": [D] }],
        "skew-x": [{ "skew-x": [L] }],
        "skew-y": [{ "skew-y": [L] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              N,
            ],
          },
        ],
        accent: [{ accent: ["auto", e] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              N,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": R() }],
        "scroll-mx": [{ "scroll-mx": R() }],
        "scroll-my": [{ "scroll-my": R() }],
        "scroll-ms": [{ "scroll-ms": R() }],
        "scroll-me": [{ "scroll-me": R() }],
        "scroll-mt": [{ "scroll-mt": R() }],
        "scroll-mr": [{ "scroll-mr": R() }],
        "scroll-mb": [{ "scroll-mb": R() }],
        "scroll-ml": [{ "scroll-ml": R() }],
        "scroll-p": [{ "scroll-p": R() }],
        "scroll-px": [{ "scroll-px": R() }],
        "scroll-py": [{ "scroll-py": R() }],
        "scroll-ps": [{ "scroll-ps": R() }],
        "scroll-pe": [{ "scroll-pe": R() }],
        "scroll-pt": [{ "scroll-pt": R() }],
        "scroll-pr": [{ "scroll-pr": R() }],
        "scroll-pb": [{ "scroll-pb": R() }],
        "scroll-pl": [{ "scroll-pl": R() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", N] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [ke, Me, fn] }],
        stroke: [{ stroke: [e, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  _i = fi(Li);
function Ke(...e) {
  return _i(oo(e));
}
const Ii = gs,
  uo = g.forwardRef((r, n) => {
    var o = r,
      { className: e } = o,
      t = G(o, ["className"]);
    return m.jsx(
      Xr,
      v(
        {
          ref: n,
          className: Ke(
            "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
            e,
          ),
        },
        t,
      ),
    );
  });
uo.displayName = Xr.displayName;
const Ni = Qs(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    {
      variants: {
        variant: {
          default: "border bg-background text-foreground",
          destructive:
            "destructive group border-destructive bg-destructive text-destructive-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    },
  ),
  fo = g.forwardRef((o, r) => {
    var s = o,
      { className: e, variant: t } = s,
      n = G(s, ["className", "variant"]);
    return m.jsx(Gr, v({ ref: r, className: Ke(Ni({ variant: t }), e) }, n));
  });
fo.displayName = Gr.displayName;
const ji = g.forwardRef((r, n) => {
  var o = r,
    { className: e } = o,
    t = G(o, ["className"]);
  return m.jsx(
    Kr,
    v(
      {
        ref: n,
        className: Ke(
          "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
          e,
        ),
      },
      t,
    ),
  );
});
ji.displayName = Kr.displayName;
const po = g.forwardRef((r, n) => {
  var o = r,
    { className: e } = o,
    t = G(o, ["className"]);
  return m.jsx(
    Zr,
    C(
      v(
        {
          ref: n,
          className: Ke(
            "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
            e,
          ),
          "toast-close": "",
        },
        t,
      ),
      { children: m.jsx(Cs, { className: "h-4 w-4" }) },
    ),
  );
});
po.displayName = Zr.displayName;
const mo = g.forwardRef((r, n) => {
  var o = r,
    { className: e } = o,
    t = G(o, ["className"]);
  return m.jsx(Jr, v({ ref: n, className: Ke("text-sm font-semibold", e) }, t));
});
mo.displayName = Jr.displayName;
const ho = g.forwardRef((r, n) => {
  var o = r,
    { className: e } = o,
    t = G(o, ["className"]);
  return m.jsx(Qr, v({ ref: n, className: Ke("text-sm opacity-90", e) }, t));
});
ho.displayName = Qr.displayName;
function Oi() {
  const { toasts: e } = Js();
  return m.jsxs(Ii, {
    children: [
      e.map(function (i) {
        var a = i,
          { id: t, title: n, description: r, action: o } = a,
          s = G(a, ["id", "title", "description", "action"]);
        return m.jsxs(
          fo,
          C(v({}, s), {
            children: [
              m.jsxs("div", {
                className: "grid gap-1",
                children: [
                  n && m.jsx(mo, { children: n }),
                  r && m.jsx(ho, { children: r }),
                ],
              }),
              o,
              m.jsx(po, {}),
            ],
          }),
          t,
        );
      }),
      m.jsx(uo, {}),
    ],
  });
}
var ur = ["light", "dark"],
  Mi = "(prefers-color-scheme: dark)",
  Di = g.createContext(void 0),
  $i = { setTheme: (e) => {}, themes: [] },
  zi = () => {
    var e;
    return (e = g.useContext(Di)) != null ? e : $i;
  };
g.memo(
  ({
    forcedTheme: e,
    storageKey: t,
    attribute: n,
    enableSystem: r,
    enableColorScheme: o,
    defaultTheme: s,
    value: i,
    attrs: a,
    nonce: l,
  }) => {
    let d = s === "system",
      u =
        n === "class"
          ? `var d=document.documentElement,c=d.classList;${`c.remove(${a.map((y) => `'${y}'`).join(",")})`};`
          : `var d=document.documentElement,n='${n}',s='setAttribute';`,
      f = o
        ? ur.includes(s) && s
          ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${s}'`
          : "if(e==='light'||e==='dark')d.style.colorScheme=e"
        : "",
      p = (y, h = !1, w = !0) => {
        let b = i ? i[y] : y,
          E = h ? y + "|| ''" : `'${b}'`,
          S = "";
        return (
          o &&
            w &&
            !h &&
            ur.includes(y) &&
            (S += `d.style.colorScheme = '${y}';`),
          n === "class"
            ? h || b
              ? (S += `c.add(${E})`)
              : (S += "null")
            : b && (S += `d[s](n,${E})`),
          S
        );
      },
      c = e
        ? `!function(){${u}${p(e)}}()`
        : r
          ? `!function(){try{${u}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${d})){var t='${Mi}',m=window.matchMedia(t);if(m.media!==t||m.matches){${p("dark")}}else{${p("light")}}}else if(e){${i ? `var x=${JSON.stringify(i)};` : ""}${p(i ? "x[e]" : "e", !0)}}${d ? "" : "else{" + p(s, !1, !1) + "}"}${f}}catch(e){}}()`
          : `!function(){try{${u}var e=localStorage.getItem('${t}');if(e){${i ? `var x=${JSON.stringify(i)};` : ""}${p(i ? "x[e]" : "e", !0)}}else{${p(s, !1, !1)};}${f}}catch(t){}}();`;
    return g.createElement("script", {
      nonce: l,
      dangerouslySetInnerHTML: { __html: c },
    });
  },
);
var Bi = (e) => {
    switch (e) {
      case "success":
        return Ui;
      case "info":
        return Hi;
      case "warning":
        return Wi;
      case "error":
        return Yi;
      default:
        return null;
    }
  },
  Vi = Array(12).fill(0),
  Fi = ({ visible: e, className: t }) =>
    x.createElement(
      "div",
      {
        className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
        "data-visible": e,
      },
      x.createElement(
        "div",
        { className: "sonner-spinner" },
        Vi.map((n, r) =>
          x.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${r}`,
          }),
        ),
      ),
    ),
  Ui = x.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    x.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    }),
  ),
  Wi = x.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    x.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    }),
  ),
  Hi = x.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    x.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    }),
  ),
  Yi = x.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    x.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    }),
  ),
  qi = x.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    x.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    x.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
  ),
  Xi = () => {
    let [e, t] = x.useState(document.hidden);
    return (
      x.useEffect(() => {
        let n = () => {
          t(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", n),
          () => window.removeEventListener("visibilitychange", n)
        );
      }, []),
      e
    );
  },
  Tn = 1,
  Gi = class {
    constructor() {
      ((this.subscribe = (e) => (
        this.subscribers.push(e),
        () => {
          let t = this.subscribers.indexOf(e);
          this.subscribers.splice(t, 1);
        }
      )),
        (this.publish = (e) => {
          this.subscribers.forEach((t) => t(e));
        }),
        (this.addToast = (e) => {
          (this.publish(e), (this.toasts = [...this.toasts, e]));
        }),
        (this.create = (e) => {
          var t;
          let a = e,
            { message: n } = a,
            r = G(a, ["message"]),
            o =
              typeof (e == null ? void 0 : e.id) == "number" ||
              ((t = e.id) == null ? void 0 : t.length) > 0
                ? e.id
                : Tn++,
            s = this.toasts.find((l) => l.id === o),
            i = e.dismissible === void 0 ? !0 : e.dismissible;
          return (
            this.dismissedToasts.has(o) && this.dismissedToasts.delete(o),
            s
              ? (this.toasts = this.toasts.map((l) =>
                  l.id === o
                    ? (this.publish(C(v(v({}, l), e), { id: o, title: n })),
                      C(v(v({}, l), e), { id: o, dismissible: i, title: n }))
                    : l,
                ))
              : this.addToast(C(v({ title: n }, r), { dismissible: i, id: o })),
            o
          );
        }),
        (this.dismiss = (e) => (
          this.dismissedToasts.add(e),
          e ||
            this.toasts.forEach((t) => {
              this.subscribers.forEach((n) => n({ id: t.id, dismiss: !0 }));
            }),
          this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })),
          e
        )),
        (this.message = (e, t) => this.create(C(v({}, t), { message: e }))),
        (this.error = (e, t) =>
          this.create(C(v({}, t), { message: e, type: "error" }))),
        (this.success = (e, t) =>
          this.create(C(v({}, t), { type: "success", message: e }))),
        (this.info = (e, t) =>
          this.create(C(v({}, t), { type: "info", message: e }))),
        (this.warning = (e, t) =>
          this.create(C(v({}, t), { type: "warning", message: e }))),
        (this.loading = (e, t) =>
          this.create(C(v({}, t), { type: "loading", message: e }))),
        (this.promise = (e, t) => {
          if (!t) return;
          let n;
          t.loading !== void 0 &&
            (n = this.create(
              C(v({}, t), {
                promise: e,
                type: "loading",
                message: t.loading,
                description:
                  typeof t.description != "function" ? t.description : void 0,
              }),
            ));
          let r = e instanceof Promise ? e : e(),
            o = n !== void 0,
            s,
            i = r
              .then((l) =>
                Q(this, null, function* () {
                  if (((s = ["resolve", l]), x.isValidElement(l)))
                    ((o = !1),
                      this.create({ id: n, type: "default", message: l }));
                  else if (Zi(l) && !l.ok) {
                    o = !1;
                    let d =
                        typeof t.error == "function"
                          ? yield t.error(`HTTP error! status: ${l.status}`)
                          : t.error,
                      u =
                        typeof t.description == "function"
                          ? yield t.description(
                              `HTTP error! status: ${l.status}`,
                            )
                          : t.description;
                    this.create({
                      id: n,
                      type: "error",
                      message: d,
                      description: u,
                    });
                  } else if (t.success !== void 0) {
                    o = !1;
                    let d =
                        typeof t.success == "function"
                          ? yield t.success(l)
                          : t.success,
                      u =
                        typeof t.description == "function"
                          ? yield t.description(l)
                          : t.description;
                    this.create({
                      id: n,
                      type: "success",
                      message: d,
                      description: u,
                    });
                  }
                }),
              )
              .catch((l) =>
                Q(this, null, function* () {
                  if (((s = ["reject", l]), t.error !== void 0)) {
                    o = !1;
                    let d =
                        typeof t.error == "function"
                          ? yield t.error(l)
                          : t.error,
                      u =
                        typeof t.description == "function"
                          ? yield t.description(l)
                          : t.description;
                    this.create({
                      id: n,
                      type: "error",
                      message: d,
                      description: u,
                    });
                  }
                }),
              )
              .finally(() => {
                var l;
                (o && (this.dismiss(n), (n = void 0)),
                  (l = t.finally) == null || l.call(t));
              }),
            a = () =>
              new Promise((l, d) =>
                i.then(() => (s[0] === "reject" ? d(s[1]) : l(s[1]))).catch(d),
              );
          return typeof n != "string" && typeof n != "number"
            ? { unwrap: a }
            : Object.assign(n, { unwrap: a });
        }),
        (this.custom = (e, t) => {
          let n = (t == null ? void 0 : t.id) || Tn++;
          return (this.create(v({ jsx: e(n), id: n }, t)), n);
        }),
        (this.getActiveToasts = () =>
          this.toasts.filter((e) => !this.dismissedToasts.has(e.id))),
        (this.subscribers = []),
        (this.toasts = []),
        (this.dismissedToasts = new Set()));
    }
  },
  ae = new Gi(),
  Ki = (e, t) => {
    let n = (t == null ? void 0 : t.id) || Tn++;
    return (ae.addToast(C(v({ title: e }, t), { id: n })), n);
  },
  Zi = (e) =>
    e &&
    typeof e == "object" &&
    "ok" in e &&
    typeof e.ok == "boolean" &&
    "status" in e &&
    typeof e.status == "number",
  Ji = Ki,
  Qi = () => ae.toasts,
  ea = () => ae.getActiveToasts();
Object.assign(
  Ji,
  {
    success: ae.success,
    info: ae.info,
    warning: ae.warning,
    error: ae.error,
    custom: ae.custom,
    message: ae.message,
    promise: ae.promise,
    dismiss: ae.dismiss,
    loading: ae.loading,
  },
  { getHistory: Qi, getToasts: ea },
);
function ta(e, { insertAt: t } = {}) {
  if (typeof document == "undefined") return;
  let n = document.head || document.getElementsByTagName("head")[0],
    r = document.createElement("style");
  ((r.type = "text/css"),
    t === "top" && n.firstChild
      ? n.insertBefore(r, n.firstChild)
      : n.appendChild(r),
    r.styleSheet
      ? (r.styleSheet.cssText = e)
      : r.appendChild(document.createTextNode(e)));
}
ta(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function It(e) {
  return e.label !== void 0;
}
var na = 3,
  ra = "32px",
  oa = "16px",
  fr = 4e3,
  sa = 356,
  ia = 14,
  aa = 20,
  la = 200;
function me(...e) {
  return e.filter(Boolean).join(" ");
}
function ca(e) {
  let [t, n] = e.split("-"),
    r = [];
  return (t && r.push(t), n && r.push(n), r);
}
var da = (e) => {
  var t, n, r, o, s, i, a, l, d, u, f;
  let {
      invert: p,
      toast: c,
      unstyled: y,
      interacting: h,
      setHeights: w,
      visibleToasts: b,
      heights: E,
      index: S,
      toasts: A,
      expanded: k,
      removeToast: L,
      defaultRichColors: O,
      closeButton: D,
      style: ee,
      cancelButtonStyle: Z,
      actionButtonStyle: B,
      className: R = "",
      descriptionClassName: z = "",
      duration: Y,
      position: U,
      gap: M,
      loadingIcon: V,
      expandByDefault: I,
      classNames: T,
      icons: j,
      closeButtonAriaLabel: W = "Close toast",
      pauseWhenPageIsHidden: $,
    } = e,
    [H, q] = x.useState(null),
    [ie, Re] = x.useState(null),
    [X, Ze] = x.useState(!1),
    [Le, Ue] = x.useState(!1),
    [_e, Je] = x.useState(!1),
    [pt, kt] = x.useState(!1),
    [Ct, Ie] = x.useState(!1),
    [Tt, mt] = x.useState(0),
    [on, Pt] = x.useState(0),
    We = x.useRef(c.duration || Y || fr),
    He = x.useRef(null),
    Ye = x.useRef(null),
    os = S === 0,
    ss = S + 1 <= b,
    de = c.type,
    Qe = c.dismissible !== !1,
    is = c.className || "",
    as = c.descriptionClassName || "",
    Rt = x.useMemo(
      () => E.findIndex((_) => _.toastId === c.id) || 0,
      [E, c.id],
    ),
    ls = x.useMemo(() => {
      var _;
      return (_ = c.closeButton) != null ? _ : D;
    }, [c.closeButton, D]),
    Xn = x.useMemo(() => c.duration || Y || fr, [c.duration, Y]),
    sn = x.useRef(0),
    et = x.useRef(0),
    Gn = x.useRef(0),
    tt = x.useRef(null),
    [cs, ds] = U.split("-"),
    Kn = x.useMemo(
      () => E.reduce((_, F, J) => (J >= Rt ? _ : _ + F.height), 0),
      [E, Rt],
    ),
    Zn = Xi(),
    us = c.invert || p,
    an = de === "loading";
  ((et.current = x.useMemo(() => Rt * M + Kn, [Rt, Kn])),
    x.useEffect(() => {
      We.current = Xn;
    }, [Xn]),
    x.useEffect(() => {
      Ze(!0);
    }, []),
    x.useEffect(() => {
      let _ = Ye.current;
      if (_) {
        let F = _.getBoundingClientRect().height;
        return (
          Pt(F),
          w((J) => [{ toastId: c.id, height: F, position: c.position }, ...J]),
          () => w((J) => J.filter((ue) => ue.toastId !== c.id))
        );
      }
    }, [w, c.id]),
    x.useLayoutEffect(() => {
      if (!X) return;
      let _ = Ye.current,
        F = _.style.height;
      _.style.height = "auto";
      let J = _.getBoundingClientRect().height;
      ((_.style.height = F),
        Pt(J),
        w((ue) =>
          ue.find((fe) => fe.toastId === c.id)
            ? ue.map((fe) =>
                fe.toastId === c.id ? C(v({}, fe), { height: J }) : fe,
              )
            : [{ toastId: c.id, height: J, position: c.position }, ...ue],
        ));
    }, [X, c.title, c.description, w, c.id]));
  let Ne = x.useCallback(() => {
    (Ue(!0),
      mt(et.current),
      w((_) => _.filter((F) => F.toastId !== c.id)),
      setTimeout(() => {
        L(c);
      }, la));
  }, [c, L, w, et]);
  (x.useEffect(() => {
    if (
      (c.promise && de === "loading") ||
      c.duration === 1 / 0 ||
      c.type === "loading"
    )
      return;
    let _;
    return (
      k || h || ($ && Zn)
        ? (() => {
            if (Gn.current < sn.current) {
              let F = new Date().getTime() - sn.current;
              We.current = We.current - F;
            }
            Gn.current = new Date().getTime();
          })()
        : We.current !== 1 / 0 &&
          ((sn.current = new Date().getTime()),
          (_ = setTimeout(() => {
            var F;
            ((F = c.onAutoClose) == null || F.call(c, c), Ne());
          }, We.current))),
      () => clearTimeout(_)
    );
  }, [k, h, c, de, $, Zn, Ne]),
    x.useEffect(() => {
      c.delete && Ne();
    }, [Ne, c.delete]));
  function fs() {
    var _, F, J;
    return j != null && j.loading
      ? x.createElement(
          "div",
          {
            className: me(
              T == null ? void 0 : T.loader,
              (_ = c == null ? void 0 : c.classNames) == null
                ? void 0
                : _.loader,
              "sonner-loader",
            ),
            "data-visible": de === "loading",
          },
          j.loading,
        )
      : V
        ? x.createElement(
            "div",
            {
              className: me(
                T == null ? void 0 : T.loader,
                (F = c == null ? void 0 : c.classNames) == null
                  ? void 0
                  : F.loader,
                "sonner-loader",
              ),
              "data-visible": de === "loading",
            },
            V,
          )
        : x.createElement(Fi, {
            className: me(
              T == null ? void 0 : T.loader,
              (J = c == null ? void 0 : c.classNames) == null
                ? void 0
                : J.loader,
            ),
            visible: de === "loading",
          });
  }
  return x.createElement(
    "li",
    {
      tabIndex: 0,
      ref: Ye,
      className: me(
        R,
        is,
        T == null ? void 0 : T.toast,
        (t = c == null ? void 0 : c.classNames) == null ? void 0 : t.toast,
        T == null ? void 0 : T.default,
        T == null ? void 0 : T[de],
        (n = c == null ? void 0 : c.classNames) == null ? void 0 : n[de],
      ),
      "data-sonner-toast": "",
      "data-rich-colors": (r = c.richColors) != null ? r : O,
      "data-styled": !(c.jsx || c.unstyled || y),
      "data-mounted": X,
      "data-promise": !!c.promise,
      "data-swiped": Ct,
      "data-removed": Le,
      "data-visible": ss,
      "data-y-position": cs,
      "data-x-position": ds,
      "data-index": S,
      "data-front": os,
      "data-swiping": _e,
      "data-dismissible": Qe,
      "data-type": de,
      "data-invert": us,
      "data-swipe-out": pt,
      "data-swipe-direction": ie,
      "data-expanded": !!(k || (I && X)),
      style: v(
        v(
          {
            "--index": S,
            "--toasts-before": S,
            "--z-index": A.length - S,
            "--offset": `${Le ? Tt : et.current}px`,
            "--initial-height": I ? "auto" : `${on}px`,
          },
          ee,
        ),
        c.style,
      ),
      onDragEnd: () => {
        (Je(!1), q(null), (tt.current = null));
      },
      onPointerDown: (_) => {
        an ||
          !Qe ||
          ((He.current = new Date()),
          mt(et.current),
          _.target.setPointerCapture(_.pointerId),
          _.target.tagName !== "BUTTON" &&
            (Je(!0), (tt.current = { x: _.clientX, y: _.clientY })));
      },
      onPointerUp: () => {
        var _, F, J, ue;
        if (pt || !Qe) return;
        tt.current = null;
        let fe = Number(
            ((_ = Ye.current) == null
              ? void 0
              : _.style
                  .getPropertyValue("--swipe-amount-x")
                  .replace("px", "")) || 0,
          ),
          je = Number(
            ((F = Ye.current) == null
              ? void 0
              : F.style
                  .getPropertyValue("--swipe-amount-y")
                  .replace("px", "")) || 0,
          ),
          qe =
            new Date().getTime() -
            ((J = He.current) == null ? void 0 : J.getTime()),
          pe = H === "x" ? fe : je,
          Oe = Math.abs(pe) / qe;
        if (Math.abs(pe) >= aa || Oe > 0.11) {
          (mt(et.current),
            (ue = c.onDismiss) == null || ue.call(c, c),
            Re(
              H === "x" ? (fe > 0 ? "right" : "left") : je > 0 ? "down" : "up",
            ),
            Ne(),
            kt(!0),
            Ie(!1));
          return;
        }
        (Je(!1), q(null));
      },
      onPointerMove: (_) => {
        var F, J, ue, fe;
        if (
          !tt.current ||
          !Qe ||
          ((F = window.getSelection()) == null ? void 0 : F.toString().length) >
            0
        )
          return;
        let je = _.clientY - tt.current.y,
          qe = _.clientX - tt.current.x,
          pe = (J = e.swipeDirections) != null ? J : ca(U);
        !H &&
          (Math.abs(qe) > 1 || Math.abs(je) > 1) &&
          q(Math.abs(qe) > Math.abs(je) ? "x" : "y");
        let Oe = { x: 0, y: 0 };
        (H === "y"
          ? (pe.includes("top") || pe.includes("bottom")) &&
            ((pe.includes("top") && je < 0) ||
              (pe.includes("bottom") && je > 0)) &&
            (Oe.y = je)
          : H === "x" &&
            (pe.includes("left") || pe.includes("right")) &&
            ((pe.includes("left") && qe < 0) ||
              (pe.includes("right") && qe > 0)) &&
            (Oe.x = qe),
          (Math.abs(Oe.x) > 0 || Math.abs(Oe.y) > 0) && Ie(!0),
          (ue = Ye.current) == null ||
            ue.style.setProperty("--swipe-amount-x", `${Oe.x}px`),
          (fe = Ye.current) == null ||
            fe.style.setProperty("--swipe-amount-y", `${Oe.y}px`));
      },
    },
    ls && !c.jsx
      ? x.createElement(
          "button",
          {
            "aria-label": W,
            "data-disabled": an,
            "data-close-button": !0,
            onClick:
              an || !Qe
                ? () => {}
                : () => {
                    var _;
                    (Ne(), (_ = c.onDismiss) == null || _.call(c, c));
                  },
            className: me(
              T == null ? void 0 : T.closeButton,
              (o = c == null ? void 0 : c.classNames) == null
                ? void 0
                : o.closeButton,
            ),
          },
          (s = j == null ? void 0 : j.close) != null ? s : qi,
        )
      : null,
    c.jsx || g.isValidElement(c.title)
      ? c.jsx
        ? c.jsx
        : typeof c.title == "function"
          ? c.title()
          : c.title
      : x.createElement(
          x.Fragment,
          null,
          de || c.icon || c.promise
            ? x.createElement(
                "div",
                {
                  "data-icon": "",
                  className: me(
                    T == null ? void 0 : T.icon,
                    (i = c == null ? void 0 : c.classNames) == null
                      ? void 0
                      : i.icon,
                  ),
                },
                c.promise || (c.type === "loading" && !c.icon)
                  ? c.icon || fs()
                  : null,
                c.type !== "loading"
                  ? c.icon || (j == null ? void 0 : j[de]) || Bi(de)
                  : null,
              )
            : null,
          x.createElement(
            "div",
            {
              "data-content": "",
              className: me(
                T == null ? void 0 : T.content,
                (a = c == null ? void 0 : c.classNames) == null
                  ? void 0
                  : a.content,
              ),
            },
            x.createElement(
              "div",
              {
                "data-title": "",
                className: me(
                  T == null ? void 0 : T.title,
                  (l = c == null ? void 0 : c.classNames) == null
                    ? void 0
                    : l.title,
                ),
              },
              typeof c.title == "function" ? c.title() : c.title,
            ),
            c.description
              ? x.createElement(
                  "div",
                  {
                    "data-description": "",
                    className: me(
                      z,
                      as,
                      T == null ? void 0 : T.description,
                      (d = c == null ? void 0 : c.classNames) == null
                        ? void 0
                        : d.description,
                    ),
                  },
                  typeof c.description == "function"
                    ? c.description()
                    : c.description,
                )
              : null,
          ),
          g.isValidElement(c.cancel)
            ? c.cancel
            : c.cancel && It(c.cancel)
              ? x.createElement(
                  "button",
                  {
                    "data-button": !0,
                    "data-cancel": !0,
                    style: c.cancelButtonStyle || Z,
                    onClick: (_) => {
                      var F, J;
                      It(c.cancel) &&
                        Qe &&
                        ((J = (F = c.cancel).onClick) == null || J.call(F, _),
                        Ne());
                    },
                    className: me(
                      T == null ? void 0 : T.cancelButton,
                      (u = c == null ? void 0 : c.classNames) == null
                        ? void 0
                        : u.cancelButton,
                    ),
                  },
                  c.cancel.label,
                )
              : null,
          g.isValidElement(c.action)
            ? c.action
            : c.action && It(c.action)
              ? x.createElement(
                  "button",
                  {
                    "data-button": !0,
                    "data-action": !0,
                    style: c.actionButtonStyle || B,
                    onClick: (_) => {
                      var F, J;
                      It(c.action) &&
                        ((J = (F = c.action).onClick) == null || J.call(F, _),
                        !_.defaultPrevented && Ne());
                    },
                    className: me(
                      T == null ? void 0 : T.actionButton,
                      (f = c == null ? void 0 : c.classNames) == null
                        ? void 0
                        : f.actionButton,
                    ),
                  },
                  c.action.label,
                )
              : null,
        ),
  );
};
function pr() {
  if (typeof window == "undefined" || typeof document == "undefined")
    return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e
    ? window.getComputedStyle(document.documentElement).direction
    : e;
}
function ua(e, t) {
  let n = {};
  return (
    [e, t].forEach((r, o) => {
      let s = o === 1,
        i = s ? "--mobile-offset" : "--offset",
        a = s ? oa : ra;
      function l(d) {
        ["top", "right", "bottom", "left"].forEach((u) => {
          n[`${i}-${u}`] = typeof d == "number" ? `${d}px` : d;
        });
      }
      typeof r == "number" || typeof r == "string"
        ? l(r)
        : typeof r == "object"
          ? ["top", "right", "bottom", "left"].forEach((d) => {
              r[d] === void 0
                ? (n[`${i}-${d}`] = a)
                : (n[`${i}-${d}`] =
                    typeof r[d] == "number" ? `${r[d]}px` : r[d]);
            })
          : l(a);
    }),
    n
  );
}
var fa = g.forwardRef(function (e, t) {
  let {
      invert: n,
      position: r = "bottom-right",
      hotkey: o = ["altKey", "KeyT"],
      expand: s,
      closeButton: i,
      className: a,
      offset: l,
      mobileOffset: d,
      theme: u = "light",
      richColors: f,
      duration: p,
      style: c,
      visibleToasts: y = na,
      toastOptions: h,
      dir: w = pr(),
      gap: b = ia,
      loadingIcon: E,
      icons: S,
      containerAriaLabel: A = "Notifications",
      pauseWhenPageIsHidden: k,
    } = e,
    [L, O] = x.useState([]),
    D = x.useMemo(
      () =>
        Array.from(
          new Set(
            [r].concat(L.filter(($) => $.position).map(($) => $.position)),
          ),
        ),
      [L, r],
    ),
    [ee, Z] = x.useState([]),
    [B, R] = x.useState(!1),
    [z, Y] = x.useState(!1),
    [U, M] = x.useState(
      u !== "system"
        ? u
        : typeof window != "undefined" &&
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light",
    ),
    V = x.useRef(null),
    I = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
    T = x.useRef(null),
    j = x.useRef(!1),
    W = x.useCallback(($) => {
      O((H) => {
        var q;
        return (
          ((q = H.find((ie) => ie.id === $.id)) != null && q.delete) ||
            ae.dismiss($.id),
          H.filter(({ id: ie }) => ie !== $.id)
        );
      });
    }, []);
  return (
    x.useEffect(
      () =>
        ae.subscribe(($) => {
          if ($.dismiss) {
            O((H) =>
              H.map((q) => (q.id === $.id ? C(v({}, q), { delete: !0 }) : q)),
            );
            return;
          }
          setTimeout(() => {
            Ss.flushSync(() => {
              O((H) => {
                let q = H.findIndex((ie) => ie.id === $.id);
                return q !== -1
                  ? [...H.slice(0, q), v(v({}, H[q]), $), ...H.slice(q + 1)]
                  : [$, ...H];
              });
            });
          });
        }),
      [],
    ),
    x.useEffect(() => {
      if (u !== "system") {
        M(u);
        return;
      }
      if (
        (u === "system" &&
          (window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
            ? M("dark")
            : M("light")),
        typeof window == "undefined")
      )
        return;
      let $ = window.matchMedia("(prefers-color-scheme: dark)");
      try {
        $.addEventListener("change", ({ matches: H }) => {
          M(H ? "dark" : "light");
        });
      } catch (H) {
        $.addListener(({ matches: q }) => {
          try {
            M(q ? "dark" : "light");
          } catch (ie) {
            console.error(ie);
          }
        });
      }
    }, [u]),
    x.useEffect(() => {
      L.length <= 1 && R(!1);
    }, [L]),
    x.useEffect(() => {
      let $ = (H) => {
        var q, ie;
        (o.every((Re) => H[Re] || H.code === Re) &&
          (R(!0), (q = V.current) == null || q.focus()),
          H.code === "Escape" &&
            (document.activeElement === V.current ||
              ((ie = V.current) != null &&
                ie.contains(document.activeElement))) &&
            R(!1));
      };
      return (
        document.addEventListener("keydown", $),
        () => document.removeEventListener("keydown", $)
      );
    }, [o]),
    x.useEffect(() => {
      if (V.current)
        return () => {
          T.current &&
            (T.current.focus({ preventScroll: !0 }),
            (T.current = null),
            (j.current = !1));
        };
    }, [V.current]),
    x.createElement(
      "section",
      {
        ref: t,
        "aria-label": `${A} ${I}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0,
      },
      D.map(($, H) => {
        var q;
        let [ie, Re] = $.split("-");
        return L.length
          ? x.createElement(
              "ol",
              {
                key: $,
                dir: w === "auto" ? pr() : w,
                tabIndex: -1,
                ref: V,
                className: a,
                "data-sonner-toaster": !0,
                "data-theme": U,
                "data-y-position": ie,
                "data-lifted": B && L.length > 1 && !s,
                "data-x-position": Re,
                style: v(
                  v(
                    {
                      "--front-toast-height": `${((q = ee[0]) == null ? void 0 : q.height) || 0}px`,
                      "--width": `${sa}px`,
                      "--gap": `${b}px`,
                    },
                    c,
                  ),
                  ua(l, d),
                ),
                onBlur: (X) => {
                  j.current &&
                    !X.currentTarget.contains(X.relatedTarget) &&
                    ((j.current = !1),
                    T.current &&
                      (T.current.focus({ preventScroll: !0 }),
                      (T.current = null)));
                },
                onFocus: (X) => {
                  (X.target instanceof HTMLElement &&
                    X.target.dataset.dismissible === "false") ||
                    j.current ||
                    ((j.current = !0), (T.current = X.relatedTarget));
                },
                onMouseEnter: () => R(!0),
                onMouseMove: () => R(!0),
                onMouseLeave: () => {
                  z || R(!1);
                },
                onDragEnd: () => R(!1),
                onPointerDown: (X) => {
                  (X.target instanceof HTMLElement &&
                    X.target.dataset.dismissible === "false") ||
                    Y(!0);
                },
                onPointerUp: () => Y(!1),
              },
              L.filter((X) => (!X.position && H === 0) || X.position === $).map(
                (X, Ze) => {
                  var Le, Ue;
                  return x.createElement(da, {
                    key: X.id,
                    icons: S,
                    index: Ze,
                    toast: X,
                    defaultRichColors: f,
                    duration:
                      (Le = h == null ? void 0 : h.duration) != null ? Le : p,
                    className: h == null ? void 0 : h.className,
                    descriptionClassName:
                      h == null ? void 0 : h.descriptionClassName,
                    invert: n,
                    visibleToasts: y,
                    closeButton:
                      (Ue = h == null ? void 0 : h.closeButton) != null
                        ? Ue
                        : i,
                    interacting: z,
                    position: $,
                    style: h == null ? void 0 : h.style,
                    unstyled: h == null ? void 0 : h.unstyled,
                    classNames: h == null ? void 0 : h.classNames,
                    cancelButtonStyle: h == null ? void 0 : h.cancelButtonStyle,
                    actionButtonStyle: h == null ? void 0 : h.actionButtonStyle,
                    removeToast: W,
                    toasts: L.filter((_e) => _e.position == X.position),
                    heights: ee.filter((_e) => _e.position == X.position),
                    setHeights: Z,
                    expandByDefault: s,
                    gap: b,
                    loadingIcon: E,
                    expanded: B,
                    pauseWhenPageIsHidden: k,
                    swipeDirections: e.swipeDirections,
                  });
                },
              ),
            )
          : null;
      }),
    )
  );
});
const pa = (t) => {
    var e = G(t, []);
    const { theme: n = "system" } = zi();
    return m.jsx(
      fa,
      v(
        {
          theme: n,
          className: "toaster group",
          toastOptions: {
            classNames: {
              toast:
                "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
              description: "group-[.toast]:text-muted-foreground",
              actionButton:
                "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
              cancelButton:
                "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
            },
          },
        },
        e,
      ),
    );
  },
  ma = ["top", "right", "bottom", "left"],
  Be = Math.min,
  le = Math.max,
  Bt = Math.round,
  Nt = Math.floor,
  we = (e) => ({ x: e, y: e }),
  ha = { left: "right", right: "left", bottom: "top", top: "bottom" },
  ga = { start: "end", end: "start" };
function Pn(e, t, n) {
  return le(e, Be(t, n));
}
function Te(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Pe(e) {
  return e.split("-")[0];
}
function ct(e) {
  return e.split("-")[1];
}
function Dn(e) {
  return e === "x" ? "y" : "x";
}
function $n(e) {
  return e === "y" ? "height" : "width";
}
const ya = new Set(["top", "bottom"]);
function ve(e) {
  return ya.has(Pe(e)) ? "y" : "x";
}
function zn(e) {
  return Dn(ve(e));
}
function va(e, t, n) {
  n === void 0 && (n = !1);
  const r = ct(e),
    o = zn(e),
    s = $n(o);
  let i =
    o === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
        ? "bottom"
        : "top";
  return (t.reference[s] > t.floating[s] && (i = Vt(i)), [i, Vt(i)]);
}
function wa(e) {
  const t = Vt(e);
  return [Rn(e), t, Rn(t)];
}
function Rn(e) {
  return e.replace(/start|end/g, (t) => ga[t]);
}
const mr = ["left", "right"],
  hr = ["right", "left"],
  ba = ["top", "bottom"],
  xa = ["bottom", "top"];
function Sa(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? hr : mr) : t ? mr : hr;
    case "left":
    case "right":
      return t ? ba : xa;
    default:
      return [];
  }
}
function Ea(e, t, n, r) {
  const o = ct(e);
  let s = Sa(Pe(e), n === "start", r);
  return (
    o && ((s = s.map((i) => i + "-" + o)), t && (s = s.concat(s.map(Rn)))),
    s
  );
}
function Vt(e) {
  return e.replace(/left|right|bottom|top/g, (t) => ha[t]);
}
function Aa(e) {
  return v({ top: 0, right: 0, bottom: 0, left: 0 }, e);
}
function go(e) {
  return typeof e != "number"
    ? Aa(e)
    : { top: e, right: e, bottom: e, left: e };
}
function Ft(e) {
  const { x: t, y: n, width: r, height: o } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n,
  };
}
function gr(e, t, n) {
  let { reference: r, floating: o } = e;
  const s = ve(t),
    i = zn(t),
    a = $n(i),
    l = Pe(t),
    d = s === "y",
    u = r.x + r.width / 2 - o.width / 2,
    f = r.y + r.height / 2 - o.height / 2,
    p = r[a] / 2 - o[a] / 2;
  let c;
  switch (l) {
    case "top":
      c = { x: u, y: r.y - o.height };
      break;
    case "bottom":
      c = { x: u, y: r.y + r.height };
      break;
    case "right":
      c = { x: r.x + r.width, y: f };
      break;
    case "left":
      c = { x: r.x - o.width, y: f };
      break;
    default:
      c = { x: r.x, y: r.y };
  }
  switch (ct(t)) {
    case "start":
      c[i] -= p * (n && d ? -1 : 1);
      break;
    case "end":
      c[i] += p * (n && d ? -1 : 1);
      break;
  }
  return c;
}
const ka = (e, t, n) =>
  Q(null, null, function* () {
    const {
        placement: r = "bottom",
        strategy: o = "absolute",
        middleware: s = [],
        platform: i,
      } = n,
      a = s.filter(Boolean),
      l = yield i.isRTL == null ? void 0 : i.isRTL(t);
    let d = yield i.getElementRects({ reference: e, floating: t, strategy: o }),
      { x: u, y: f } = gr(d, r, l),
      p = r,
      c = {},
      y = 0;
    for (let h = 0; h < a.length; h++) {
      const { name: w, fn: b } = a[h],
        {
          x: E,
          y: S,
          data: A,
          reset: k,
        } = yield b({
          x: u,
          y: f,
          initialPlacement: r,
          placement: p,
          strategy: o,
          middlewareData: c,
          rects: d,
          platform: i,
          elements: { reference: e, floating: t },
        });
      ((u = E != null ? E : u),
        (f = S != null ? S : f),
        (c = C(v({}, c), { [w]: v(v({}, c[w]), A) })),
        k &&
          y <= 50 &&
          (y++,
          typeof k == "object" &&
            (k.placement && (p = k.placement),
            k.rects &&
              (d =
                k.rects === !0
                  ? yield i.getElementRects({
                      reference: e,
                      floating: t,
                      strategy: o,
                    })
                  : k.rects),
            ({ x: u, y: f } = gr(d, p, l))),
          (h = -1)));
    }
    return { x: u, y: f, placement: p, strategy: o, middlewareData: c };
  });
function xt(e, t) {
  return Q(this, null, function* () {
    var n;
    t === void 0 && (t = {});
    const { x: r, y: o, platform: s, rects: i, elements: a, strategy: l } = e,
      {
        boundary: d = "clippingAncestors",
        rootBoundary: u = "viewport",
        elementContext: f = "floating",
        altBoundary: p = !1,
        padding: c = 0,
      } = Te(t, e),
      y = go(c),
      w = a[p ? (f === "floating" ? "reference" : "floating") : f],
      b = Ft(
        yield s.getClippingRect({
          element:
            (n = yield s.isElement == null ? void 0 : s.isElement(w)) == null ||
            n
              ? w
              : w.contextElement ||
                (yield s.getDocumentElement == null
                  ? void 0
                  : s.getDocumentElement(a.floating)),
          boundary: d,
          rootBoundary: u,
          strategy: l,
        }),
      ),
      E =
        f === "floating"
          ? { x: r, y: o, width: i.floating.width, height: i.floating.height }
          : i.reference,
      S = yield s.getOffsetParent == null
        ? void 0
        : s.getOffsetParent(a.floating),
      A = (yield s.isElement == null ? void 0 : s.isElement(S))
        ? (yield s.getScale == null ? void 0 : s.getScale(S)) || { x: 1, y: 1 }
        : { x: 1, y: 1 },
      k = Ft(
        s.convertOffsetParentRelativeRectToViewportRelativeRect
          ? yield s.convertOffsetParentRelativeRectToViewportRelativeRect({
              elements: a,
              rect: E,
              offsetParent: S,
              strategy: l,
            })
          : E,
      );
    return {
      top: (b.top - k.top + y.top) / A.y,
      bottom: (k.bottom - b.bottom + y.bottom) / A.y,
      left: (b.left - k.left + y.left) / A.x,
      right: (k.right - b.right + y.right) / A.x,
    };
  });
}
const Ca = (e) => ({
    name: "arrow",
    options: e,
    fn(n) {
      return Q(this, null, function* () {
        const {
            x: r,
            y: o,
            placement: s,
            rects: i,
            platform: a,
            elements: l,
            middlewareData: d,
          } = n,
          { element: u, padding: f = 0 } = Te(e, n) || {};
        if (u == null) return {};
        const p = go(f),
          c = { x: r, y: o },
          y = zn(s),
          h = $n(y),
          w = yield a.getDimensions(u),
          b = y === "y",
          E = b ? "top" : "left",
          S = b ? "bottom" : "right",
          A = b ? "clientHeight" : "clientWidth",
          k = i.reference[h] + i.reference[y] - c[y] - i.floating[h],
          L = c[y] - i.reference[y],
          O = yield a.getOffsetParent == null ? void 0 : a.getOffsetParent(u);
        let D = O ? O[A] : 0;
        (!D || !(yield a.isElement == null ? void 0 : a.isElement(O))) &&
          (D = l.floating[A] || i.floating[h]);
        const ee = k / 2 - L / 2,
          Z = D / 2 - w[h] / 2 - 1,
          B = Be(p[E], Z),
          R = Be(p[S], Z),
          z = B,
          Y = D - w[h] - R,
          U = D / 2 - w[h] / 2 + ee,
          M = Pn(z, U, Y),
          V =
            !d.arrow &&
            ct(s) != null &&
            U !== M &&
            i.reference[h] / 2 - (U < z ? B : R) - w[h] / 2 < 0,
          I = V ? (U < z ? U - z : U - Y) : 0;
        return {
          [y]: c[y] + I,
          data: v(
            { [y]: M, centerOffset: U - M - I },
            V && { alignmentOffset: I },
          ),
          reset: V,
        };
      });
    },
  }),
  Ta = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        fn(n) {
          return Q(this, null, function* () {
            var r, o;
            const {
                placement: s,
                middlewareData: i,
                rects: a,
                initialPlacement: l,
                platform: d,
                elements: u,
              } = n,
              U = Te(e, n),
              {
                mainAxis: f = !0,
                crossAxis: p = !0,
                fallbackPlacements: c,
                fallbackStrategy: y = "bestFit",
                fallbackAxisSideDirection: h = "none",
                flipAlignment: w = !0,
              } = U,
              b = G(U, [
                "mainAxis",
                "crossAxis",
                "fallbackPlacements",
                "fallbackStrategy",
                "fallbackAxisSideDirection",
                "flipAlignment",
              ]);
            if ((r = i.arrow) != null && r.alignmentOffset) return {};
            const E = Pe(s),
              S = ve(l),
              A = Pe(l) === l,
              k = yield d.isRTL == null ? void 0 : d.isRTL(u.floating),
              L = c || (A || !w ? [Vt(l)] : wa(l)),
              O = h !== "none";
            !c && O && L.push(...Ea(l, w, h, k));
            const D = [l, ...L],
              ee = yield xt(n, b),
              Z = [];
            let B = ((o = i.flip) == null ? void 0 : o.overflows) || [];
            if ((f && Z.push(ee[E]), p)) {
              const M = va(s, a, k);
              Z.push(ee[M[0]], ee[M[1]]);
            }
            if (
              ((B = [...B, { placement: s, overflows: Z }]),
              !Z.every((M) => M <= 0))
            ) {
              var R, z;
              const M = (((R = i.flip) == null ? void 0 : R.index) || 0) + 1,
                V = D[M];
              if (
                V &&
                (!(p === "alignment" ? S !== ve(V) : !1) ||
                  B.every((j) =>
                    ve(j.placement) === S ? j.overflows[0] > 0 : !0,
                  ))
              )
                return {
                  data: { index: M, overflows: B },
                  reset: { placement: V },
                };
              let I =
                (z = B.filter((T) => T.overflows[0] <= 0).sort(
                  (T, j) => T.overflows[1] - j.overflows[1],
                )[0]) == null
                  ? void 0
                  : z.placement;
              if (!I)
                switch (y) {
                  case "bestFit": {
                    var Y;
                    const T =
                      (Y = B.filter((j) => {
                        if (O) {
                          const W = ve(j.placement);
                          return W === S || W === "y";
                        }
                        return !0;
                      })
                        .map((j) => [
                          j.placement,
                          j.overflows
                            .filter((W) => W > 0)
                            .reduce((W, $) => W + $, 0),
                        ])
                        .sort((j, W) => j[1] - W[1])[0]) == null
                        ? void 0
                        : Y[0];
                    T && (I = T);
                    break;
                  }
                  case "initialPlacement":
                    I = l;
                    break;
                }
              if (s !== I) return { reset: { placement: I } };
            }
            return {};
          });
        },
      }
    );
  };
function yr(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function vr(e) {
  return ma.some((t) => e[t] >= 0);
}
const Pa = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "hide",
        options: e,
        fn(n) {
          return Q(this, null, function* () {
            const { rects: r } = n,
              i = Te(e, n),
              { strategy: o = "referenceHidden" } = i,
              s = G(i, ["strategy"]);
            switch (o) {
              case "referenceHidden": {
                const a = yield xt(
                    n,
                    C(v({}, s), { elementContext: "reference" }),
                  ),
                  l = yr(a, r.reference);
                return {
                  data: { referenceHiddenOffsets: l, referenceHidden: vr(l) },
                };
              }
              case "escaped": {
                const a = yield xt(n, C(v({}, s), { altBoundary: !0 })),
                  l = yr(a, r.floating);
                return { data: { escapedOffsets: l, escaped: vr(l) } };
              }
              default:
                return {};
            }
          });
        },
      }
    );
  },
  yo = new Set(["left", "top"]);
function Ra(e, t) {
  return Q(this, null, function* () {
    const { placement: n, platform: r, elements: o } = e,
      s = yield r.isRTL == null ? void 0 : r.isRTL(o.floating),
      i = Pe(n),
      a = ct(n),
      l = ve(n) === "y",
      d = yo.has(i) ? -1 : 1,
      u = s && l ? -1 : 1,
      f = Te(t, e);
    let {
      mainAxis: p,
      crossAxis: c,
      alignmentAxis: y,
    } = typeof f == "number"
      ? { mainAxis: f, crossAxis: 0, alignmentAxis: null }
      : {
          mainAxis: f.mainAxis || 0,
          crossAxis: f.crossAxis || 0,
          alignmentAxis: f.alignmentAxis,
        };
    return (
      a && typeof y == "number" && (c = a === "end" ? y * -1 : y),
      l ? { x: c * u, y: p * d } : { x: p * d, y: c * u }
    );
  });
}
const La = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        fn(n) {
          return Q(this, null, function* () {
            var r, o;
            const { x: s, y: i, placement: a, middlewareData: l } = n,
              d = yield Ra(n, e);
            return a === ((r = l.offset) == null ? void 0 : r.placement) &&
              (o = l.arrow) != null &&
              o.alignmentOffset
              ? {}
              : { x: s + d.x, y: i + d.y, data: C(v({}, d), { placement: a }) };
          });
        },
      }
    );
  },
  _a = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        fn(n) {
          return Q(this, null, function* () {
            const { x: r, y: o, placement: s } = n,
              b = Te(e, n),
              {
                mainAxis: i = !0,
                crossAxis: a = !1,
                limiter: l = {
                  fn: (E) => {
                    let { x: S, y: A } = E;
                    return { x: S, y: A };
                  },
                },
              } = b,
              d = G(b, ["mainAxis", "crossAxis", "limiter"]),
              u = { x: r, y: o },
              f = yield xt(n, d),
              p = ve(Pe(s)),
              c = Dn(p);
            let y = u[c],
              h = u[p];
            if (i) {
              const E = c === "y" ? "top" : "left",
                S = c === "y" ? "bottom" : "right",
                A = y + f[E],
                k = y - f[S];
              y = Pn(A, y, k);
            }
            if (a) {
              const E = p === "y" ? "top" : "left",
                S = p === "y" ? "bottom" : "right",
                A = h + f[E],
                k = h - f[S];
              h = Pn(A, h, k);
            }
            const w = l.fn(C(v({}, n), { [c]: y, [p]: h }));
            return C(v({}, w), {
              data: { x: w.x - r, y: w.y - o, enabled: { [c]: i, [p]: a } },
            });
          });
        },
      }
    );
  },
  Ia = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: o, rects: s, middlewareData: i } = t,
            { offset: a = 0, mainAxis: l = !0, crossAxis: d = !0 } = Te(e, t),
            u = { x: n, y: r },
            f = ve(o),
            p = Dn(f);
          let c = u[p],
            y = u[f];
          const h = Te(a, t),
            w =
              typeof h == "number"
                ? { mainAxis: h, crossAxis: 0 }
                : v({ mainAxis: 0, crossAxis: 0 }, h);
          if (l) {
            const S = p === "y" ? "height" : "width",
              A = s.reference[p] - s.floating[S] + w.mainAxis,
              k = s.reference[p] + s.reference[S] - w.mainAxis;
            c < A ? (c = A) : c > k && (c = k);
          }
          if (d) {
            var b, E;
            const S = p === "y" ? "width" : "height",
              A = yo.has(Pe(o)),
              k =
                s.reference[f] -
                s.floating[S] +
                ((A && ((b = i.offset) == null ? void 0 : b[f])) || 0) +
                (A ? 0 : w.crossAxis),
              L =
                s.reference[f] +
                s.reference[S] +
                (A ? 0 : ((E = i.offset) == null ? void 0 : E[f]) || 0) -
                (A ? w.crossAxis : 0);
            y < k ? (y = k) : y > L && (y = L);
          }
          return { [p]: c, [f]: y };
        },
      }
    );
  },
  Na = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        fn(n) {
          return Q(this, null, function* () {
            var r, o;
            const { placement: s, rects: i, platform: a, elements: l } = n,
              B = Te(e, n),
              { apply: d = () => {} } = B,
              u = G(B, ["apply"]),
              f = yield xt(n, u),
              p = Pe(s),
              c = ct(s),
              y = ve(s) === "y",
              { width: h, height: w } = i.floating;
            let b, E;
            p === "top" || p === "bottom"
              ? ((b = p),
                (E =
                  c ===
                  ((yield a.isRTL == null ? void 0 : a.isRTL(l.floating))
                    ? "start"
                    : "end")
                    ? "left"
                    : "right"))
              : ((E = p), (b = c === "end" ? "top" : "bottom"));
            const S = w - f.top - f.bottom,
              A = h - f.left - f.right,
              k = Be(w - f[b], S),
              L = Be(h - f[E], A),
              O = !n.middlewareData.shift;
            let D = k,
              ee = L;
            if (
              ((r = n.middlewareData.shift) != null && r.enabled.x && (ee = A),
              (o = n.middlewareData.shift) != null && o.enabled.y && (D = S),
              O && !c)
            ) {
              const R = le(f.left, 0),
                z = le(f.right, 0),
                Y = le(f.top, 0),
                U = le(f.bottom, 0);
              y
                ? (ee =
                    h - 2 * (R !== 0 || z !== 0 ? R + z : le(f.left, f.right)))
                : (D =
                    w - 2 * (Y !== 0 || U !== 0 ? Y + U : le(f.top, f.bottom)));
            }
            yield d(C(v({}, n), { availableWidth: ee, availableHeight: D }));
            const Z = yield a.getDimensions(l.floating);
            return h !== Z.width || w !== Z.height
              ? { reset: { rects: !0 } }
              : {};
          });
        },
      }
    );
  };
function Xt() {
  return typeof window != "undefined";
}
function dt(e) {
  return vo(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ce(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function Ee(e) {
  var t;
  return (t = (vo(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function vo(e) {
  return Xt() ? e instanceof Node || e instanceof ce(e).Node : !1;
}
function he(e) {
  return Xt() ? e instanceof Element || e instanceof ce(e).Element : !1;
}
function be(e) {
  return Xt() ? e instanceof HTMLElement || e instanceof ce(e).HTMLElement : !1;
}
function wr(e) {
  return !Xt() || typeof ShadowRoot == "undefined"
    ? !1
    : e instanceof ShadowRoot || e instanceof ce(e).ShadowRoot;
}
const ja = new Set(["inline", "contents"]);
function Et(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = ge(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !ja.has(o);
}
const Oa = new Set(["table", "td", "th"]);
function Ma(e) {
  return Oa.has(dt(e));
}
const Da = [":popover-open", ":modal"];
function Gt(e) {
  return Da.some((t) => {
    try {
      return e.matches(t);
    } catch (n) {
      return !1;
    }
  });
}
const $a = ["transform", "translate", "scale", "rotate", "perspective"],
  za = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
  Ba = ["paint", "layout", "strict", "content"];
function Bn(e) {
  const t = Vn(),
    n = he(e) ? ge(e) : e;
  return (
    $a.some((r) => (n[r] ? n[r] !== "none" : !1)) ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    za.some((r) => (n.willChange || "").includes(r)) ||
    Ba.some((r) => (n.contain || "").includes(r))
  );
}
function Va(e) {
  let t = Ve(e);
  for (; be(t) && !it(t); ) {
    if (Bn(t)) return t;
    if (Gt(t)) return null;
    t = Ve(t);
  }
  return null;
}
function Vn() {
  return typeof CSS == "undefined" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
const Fa = new Set(["html", "body", "#document"]);
function it(e) {
  return Fa.has(dt(e));
}
function ge(e) {
  return ce(e).getComputedStyle(e);
}
function Kt(e) {
  return he(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function Ve(e) {
  if (dt(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (wr(e) && e.host) || Ee(e);
  return wr(t) ? t.host : t;
}
function wo(e) {
  const t = Ve(e);
  return it(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : be(t) && Et(t)
      ? t
      : wo(t);
}
function St(e, t, n) {
  var r;
  (t === void 0 && (t = []), n === void 0 && (n = !0));
  const o = wo(e),
    s = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    i = ce(o);
  if (s) {
    const a = Ln(i);
    return t.concat(
      i,
      i.visualViewport || [],
      Et(o) ? o : [],
      a && n ? St(a) : [],
    );
  }
  return t.concat(o, St(o, [], n));
}
function Ln(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function bo(e) {
  const t = ge(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const o = be(e),
    s = o ? e.offsetWidth : n,
    i = o ? e.offsetHeight : r,
    a = Bt(n) !== s || Bt(r) !== i;
  return (a && ((n = s), (r = i)), { width: n, height: r, $: a });
}
function Fn(e) {
  return he(e) ? e : e.contextElement;
}
function st(e) {
  const t = Fn(e);
  if (!be(t)) return we(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: o, $: s } = bo(t);
  let i = (s ? Bt(n.width) : n.width) / r,
    a = (s ? Bt(n.height) : n.height) / o;
  return (
    (!i || !Number.isFinite(i)) && (i = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    { x: i, y: a }
  );
}
const Ua = we(0);
function xo(e) {
  const t = ce(e);
  return !Vn() || !t.visualViewport
    ? Ua
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function Wa(e, t, n) {
  return (t === void 0 && (t = !1), !n || (t && n !== ce(e)) ? !1 : t);
}
function Ge(e, t, n, r) {
  (t === void 0 && (t = !1), n === void 0 && (n = !1));
  const o = e.getBoundingClientRect(),
    s = Fn(e);
  let i = we(1);
  t && (r ? he(r) && (i = st(r)) : (i = st(e)));
  const a = Wa(s, n, r) ? xo(s) : we(0);
  let l = (o.left + a.x) / i.x,
    d = (o.top + a.y) / i.y,
    u = o.width / i.x,
    f = o.height / i.y;
  if (s) {
    const p = ce(s),
      c = r && he(r) ? ce(r) : r;
    let y = p,
      h = Ln(y);
    for (; h && r && c !== y; ) {
      const w = st(h),
        b = h.getBoundingClientRect(),
        E = ge(h),
        S = b.left + (h.clientLeft + parseFloat(E.paddingLeft)) * w.x,
        A = b.top + (h.clientTop + parseFloat(E.paddingTop)) * w.y;
      ((l *= w.x),
        (d *= w.y),
        (u *= w.x),
        (f *= w.y),
        (l += S),
        (d += A),
        (y = ce(h)),
        (h = Ln(y)));
    }
  }
  return Ft({ width: u, height: f, x: l, y: d });
}
function Zt(e, t) {
  const n = Kt(e).scrollLeft;
  return t ? t.left + n : Ge(Ee(e)).left + n;
}
function So(e, t) {
  const n = e.getBoundingClientRect(),
    r = n.left + t.scrollLeft - Zt(e, n),
    o = n.top + t.scrollTop;
  return { x: r, y: o };
}
function Ha(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
  const s = o === "fixed",
    i = Ee(r),
    a = t ? Gt(t.floating) : !1;
  if (r === i || (a && s)) return n;
  let l = { scrollLeft: 0, scrollTop: 0 },
    d = we(1);
  const u = we(0),
    f = be(r);
  if (
    (f || (!f && !s)) &&
    ((dt(r) !== "body" || Et(i)) && (l = Kt(r)), be(r))
  ) {
    const c = Ge(r);
    ((d = st(r)), (u.x = c.x + r.clientLeft), (u.y = c.y + r.clientTop));
  }
  const p = i && !f && !s ? So(i, l) : we(0);
  return {
    width: n.width * d.x,
    height: n.height * d.y,
    x: n.x * d.x - l.scrollLeft * d.x + u.x + p.x,
    y: n.y * d.y - l.scrollTop * d.y + u.y + p.y,
  };
}
function Ya(e) {
  return Array.from(e.getClientRects());
}
function qa(e) {
  const t = Ee(e),
    n = Kt(e),
    r = e.ownerDocument.body,
    o = le(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    s = le(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + Zt(e);
  const a = -n.scrollTop;
  return (
    ge(r).direction === "rtl" && (i += le(t.clientWidth, r.clientWidth) - o),
    { width: o, height: s, x: i, y: a }
  );
}
const br = 25;
function Xa(e, t) {
  const n = ce(e),
    r = Ee(e),
    o = n.visualViewport;
  let s = r.clientWidth,
    i = r.clientHeight,
    a = 0,
    l = 0;
  if (o) {
    ((s = o.width), (i = o.height));
    const u = Vn();
    (!u || (u && t === "fixed")) && ((a = o.offsetLeft), (l = o.offsetTop));
  }
  const d = Zt(r);
  if (d <= 0) {
    const u = r.ownerDocument,
      f = u.body,
      p = getComputedStyle(f),
      c =
        (u.compatMode === "CSS1Compat" &&
          parseFloat(p.marginLeft) + parseFloat(p.marginRight)) ||
        0,
      y = Math.abs(r.clientWidth - f.clientWidth - c);
    y <= br && (s -= y);
  } else d <= br && (s += d);
  return { width: s, height: i, x: a, y: l };
}
const Ga = new Set(["absolute", "fixed"]);
function Ka(e, t) {
  const n = Ge(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    s = be(e) ? st(e) : we(1),
    i = e.clientWidth * s.x,
    a = e.clientHeight * s.y,
    l = o * s.x,
    d = r * s.y;
  return { width: i, height: a, x: l, y: d };
}
function xr(e, t, n) {
  let r;
  if (t === "viewport") r = Xa(e, n);
  else if (t === "document") r = qa(Ee(e));
  else if (he(t)) r = Ka(t, n);
  else {
    const o = xo(e);
    r = { x: t.x - o.x, y: t.y - o.y, width: t.width, height: t.height };
  }
  return Ft(r);
}
function Eo(e, t) {
  const n = Ve(e);
  return n === t || !he(n) || it(n)
    ? !1
    : ge(n).position === "fixed" || Eo(n, t);
}
function Za(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = St(e, [], !1).filter((a) => he(a) && dt(a) !== "body"),
    o = null;
  const s = ge(e).position === "fixed";
  let i = s ? Ve(e) : e;
  for (; he(i) && !it(i); ) {
    const a = ge(i),
      l = Bn(i);
    (!l && a.position === "fixed" && (o = null),
      (
        s
          ? !l && !o
          : (!l && a.position === "static" && !!o && Ga.has(o.position)) ||
            (Et(i) && !l && Eo(e, i))
      )
        ? (r = r.filter((u) => u !== i))
        : (o = a),
      (i = Ve(i)));
  }
  return (t.set(e, r), r);
}
function Ja(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
  const i = [
      ...(n === "clippingAncestors"
        ? Gt(t)
          ? []
          : Za(t, this._c)
        : [].concat(n)),
      r,
    ],
    a = i[0],
    l = i.reduce(
      (d, u) => {
        const f = xr(t, u, o);
        return (
          (d.top = le(f.top, d.top)),
          (d.right = Be(f.right, d.right)),
          (d.bottom = Be(f.bottom, d.bottom)),
          (d.left = le(f.left, d.left)),
          d
        );
      },
      xr(t, a, o),
    );
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top,
  };
}
function Qa(e) {
  const { width: t, height: n } = bo(e);
  return { width: t, height: n };
}
function el(e, t, n) {
  const r = be(t),
    o = Ee(t),
    s = n === "fixed",
    i = Ge(e, !0, s, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const l = we(0);
  function d() {
    l.x = Zt(o);
  }
  if (r || (!r && !s))
    if (((dt(t) !== "body" || Et(o)) && (a = Kt(t)), r)) {
      const c = Ge(t, !0, s, t);
      ((l.x = c.x + t.clientLeft), (l.y = c.y + t.clientTop));
    } else o && d();
  s && !r && o && d();
  const u = o && !r && !s ? So(o, a) : we(0),
    f = i.left + a.scrollLeft - l.x - u.x,
    p = i.top + a.scrollTop - l.y - u.y;
  return { x: f, y: p, width: i.width, height: i.height };
}
function pn(e) {
  return ge(e).position === "static";
}
function Sr(e, t) {
  if (!be(e) || ge(e).position === "fixed") return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return (Ee(e) === n && (n = n.ownerDocument.body), n);
}
function Ao(e, t) {
  const n = ce(e);
  if (Gt(e)) return n;
  if (!be(e)) {
    let o = Ve(e);
    for (; o && !it(o); ) {
      if (he(o) && !pn(o)) return o;
      o = Ve(o);
    }
    return n;
  }
  let r = Sr(e, t);
  for (; r && Ma(r) && pn(r); ) r = Sr(r, t);
  return r && it(r) && pn(r) && !Bn(r) ? n : r || Va(e) || n;
}
const tl = function (e) {
  return Q(this, null, function* () {
    const t = this.getOffsetParent || Ao,
      n = this.getDimensions,
      r = yield n(e.floating);
    return {
      reference: el(e.reference, yield t(e.floating), e.strategy),
      floating: { x: 0, y: 0, width: r.width, height: r.height },
    };
  });
};
function nl(e) {
  return ge(e).direction === "rtl";
}
const rl = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Ha,
  getDocumentElement: Ee,
  getClippingRect: Ja,
  getOffsetParent: Ao,
  getElementRects: tl,
  getClientRects: Ya,
  getDimensions: Qa,
  getScale: st,
  isElement: he,
  isRTL: nl,
};
function ko(e, t) {
  return (
    e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
  );
}
function ol(e, t) {
  let n = null,
    r;
  const o = Ee(e);
  function s() {
    var a;
    (clearTimeout(r), (a = n) == null || a.disconnect(), (n = null));
  }
  function i(a, l) {
    (a === void 0 && (a = !1), l === void 0 && (l = 1), s());
    const d = e.getBoundingClientRect(),
      { left: u, top: f, width: p, height: c } = d;
    if ((a || t(), !p || !c)) return;
    const y = Nt(f),
      h = Nt(o.clientWidth - (u + p)),
      w = Nt(o.clientHeight - (f + c)),
      b = Nt(u),
      S = {
        rootMargin: -y + "px " + -h + "px " + -w + "px " + -b + "px",
        threshold: le(0, Be(1, l)) || 1,
      };
    let A = !0;
    function k(L) {
      const O = L[0].intersectionRatio;
      if (O !== l) {
        if (!A) return i();
        O
          ? i(!1, O)
          : (r = setTimeout(() => {
              i(!1, 1e-7);
            }, 1e3));
      }
      (O === 1 && !ko(d, e.getBoundingClientRect()) && i(), (A = !1));
    }
    try {
      n = new IntersectionObserver(k, C(v({}, S), { root: o.ownerDocument }));
    } catch (L) {
      n = new IntersectionObserver(k, S);
    }
    n.observe(e);
  }
  return (i(!0), s);
}
function sl(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: s = !0,
      elementResize: i = typeof ResizeObserver == "function",
      layoutShift: a = typeof IntersectionObserver == "function",
      animationFrame: l = !1,
    } = r,
    d = Fn(e),
    u = o || s ? [...(d ? St(d) : []), ...St(t)] : [];
  u.forEach((b) => {
    (o && b.addEventListener("scroll", n, { passive: !0 }),
      s && b.addEventListener("resize", n));
  });
  const f = d && a ? ol(d, n) : null;
  let p = -1,
    c = null;
  i &&
    ((c = new ResizeObserver((b) => {
      let [E] = b;
      (E &&
        E.target === d &&
        c &&
        (c.unobserve(t),
        cancelAnimationFrame(p),
        (p = requestAnimationFrame(() => {
          var S;
          (S = c) == null || S.observe(t);
        }))),
        n());
    })),
    d && !l && c.observe(d),
    c.observe(t));
  let y,
    h = l ? Ge(e) : null;
  l && w();
  function w() {
    const b = Ge(e);
    (h && !ko(h, b) && n(), (h = b), (y = requestAnimationFrame(w)));
  }
  return (
    n(),
    () => {
      var b;
      (u.forEach((E) => {
        (o && E.removeEventListener("scroll", n),
          s && E.removeEventListener("resize", n));
      }),
        f == null || f(),
        (b = c) == null || b.disconnect(),
        (c = null),
        l && cancelAnimationFrame(y));
    }
  );
}
const il = La,
  al = _a,
  ll = Ta,
  cl = Na,
  dl = Pa,
  Er = Ca,
  ul = Ia,
  fl = (e, t, n) => {
    const r = new Map(),
      o = v({ platform: rl }, n),
      s = C(v({}, o.platform), { _c: r });
    return ka(e, t, C(v({}, o), { platform: s }));
  };
var pl = typeof document != "undefined",
  ml = function () {},
  $t = pl ? g.useLayoutEffect : ml;
function Ut(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!Ut(e[r], t[r])) return !1;
      return !0;
    }
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const s = o[r];
      if (!(s === "_owner" && e.$$typeof) && !Ut(e[s], t[s])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Co(e) {
  return typeof window == "undefined"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Ar(e, t) {
  const n = Co(e);
  return Math.round(t * n) / n;
}
function mn(e) {
  const t = g.useRef(e);
  return (
    $t(() => {
      t.current = e;
    }),
    t
  );
}
function hl(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: r = [],
      platform: o,
      elements: { reference: s, floating: i } = {},
      transform: a = !0,
      whileElementsMounted: l,
      open: d,
    } = e,
    [u, f] = g.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [p, c] = g.useState(r);
  Ut(p, r) || c(r);
  const [y, h] = g.useState(null),
    [w, b] = g.useState(null),
    E = g.useCallback((I) => {
      I !== L.current && ((L.current = I), h(I));
    }, []),
    S = g.useCallback((I) => {
      I !== O.current && ((O.current = I), b(I));
    }, []),
    A = s || y,
    k = i || w,
    L = g.useRef(null),
    O = g.useRef(null),
    D = g.useRef(u),
    ee = l != null,
    Z = mn(l),
    B = mn(o),
    R = mn(d),
    z = g.useCallback(() => {
      if (!L.current || !O.current) return;
      const I = { placement: t, strategy: n, middleware: p };
      (B.current && (I.platform = B.current),
        fl(L.current, O.current, I).then((T) => {
          const j = C(v({}, T), { isPositioned: R.current !== !1 });
          Y.current &&
            !Ut(D.current, j) &&
            ((D.current = j),
            Es.flushSync(() => {
              f(j);
            }));
        }));
    }, [p, t, n, B, R]);
  $t(() => {
    d === !1 &&
      D.current.isPositioned &&
      ((D.current.isPositioned = !1),
      f((I) => C(v({}, I), { isPositioned: !1 })));
  }, [d]);
  const Y = g.useRef(!1);
  ($t(
    () => (
      (Y.current = !0),
      () => {
        Y.current = !1;
      }
    ),
    [],
  ),
    $t(() => {
      if ((A && (L.current = A), k && (O.current = k), A && k)) {
        if (Z.current) return Z.current(A, k, z);
        z();
      }
    }, [A, k, z, Z, ee]));
  const U = g.useMemo(
      () => ({ reference: L, floating: O, setReference: E, setFloating: S }),
      [E, S],
    ),
    M = g.useMemo(() => ({ reference: A, floating: k }), [A, k]),
    V = g.useMemo(() => {
      const I = { position: n, left: 0, top: 0 };
      if (!M.floating) return I;
      const T = Ar(M.floating, u.x),
        j = Ar(M.floating, u.y);
      return a
        ? v(
            C(v({}, I), { transform: "translate(" + T + "px, " + j + "px)" }),
            Co(M.floating) >= 1.5 && { willChange: "transform" },
          )
        : { position: n, left: T, top: j };
    }, [n, a, M.floating, u.x, u.y]);
  return g.useMemo(
    () => C(v({}, u), { update: z, refs: U, elements: M, floatingStyles: V }),
    [u, z, U, M, V],
  );
}
const gl = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const { element: r, padding: o } = typeof e == "function" ? e(n) : e;
        return r && t(r)
          ? r.current != null
            ? Er({ element: r.current, padding: o }).fn(n)
            : {}
          : r
            ? Er({ element: r, padding: o }).fn(n)
            : {};
      },
    };
  },
  yl = (e, t) => C(v({}, il(e)), { options: [e, t] }),
  vl = (e, t) => C(v({}, al(e)), { options: [e, t] }),
  wl = (e, t) => C(v({}, ul(e)), { options: [e, t] }),
  bl = (e, t) => C(v({}, ll(e)), { options: [e, t] }),
  xl = (e, t) => C(v({}, cl(e)), { options: [e, t] }),
  Sl = (e, t) => C(v({}, dl(e)), { options: [e, t] }),
  El = (e, t) => C(v({}, gl(e)), { options: [e, t] });
var Al = "Arrow",
  To = g.forwardRef((e, t) => {
    const i = e,
      { children: n, width: r = 10, height: o = 5 } = i,
      s = G(i, ["children", "width", "height"]);
    return m.jsx(
      Ht.svg,
      C(v({}, s), {
        ref: t,
        width: r,
        height: o,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: e.asChild
          ? n
          : m.jsx("polygon", { points: "0,0 30,0 15,10" }),
      }),
    );
  });
To.displayName = Al;
var kl = To;
function Cl(e) {
  const [t, n] = g.useState(void 0);
  return (
    xn(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((o) => {
          if (!Array.isArray(o) || !o.length) return;
          const s = o[0];
          let i, a;
          if ("borderBoxSize" in s) {
            const l = s.borderBoxSize,
              d = Array.isArray(l) ? l[0] : l;
            ((i = d.inlineSize), (a = d.blockSize));
          } else ((i = e.offsetWidth), (a = e.offsetHeight));
          n({ width: i, height: a });
        });
        return (r.observe(e, { box: "border-box" }), () => r.unobserve(e));
      } else n(void 0);
    }, [e]),
    t
  );
}
var Po = "Popper",
  [Ro, Lo] = eo(Po),
  [Id, _o] = Ro(Po),
  Io = "PopperAnchor",
  No = g.forwardRef((e, t) => {
    const d = e,
      { __scopePopper: n, virtualRef: r } = d,
      o = G(d, ["__scopePopper", "virtualRef"]),
      s = _o(Io, n),
      i = g.useRef(null),
      a = Yt(t, i),
      l = g.useRef(null);
    return (
      g.useEffect(() => {
        const u = l.current;
        ((l.current = (r == null ? void 0 : r.current) || i.current),
          u !== l.current && s.onAnchorChange(l.current));
      }),
      r ? null : m.jsx(Ht.div, C(v({}, o), { ref: a }))
    );
  });
No.displayName = Io;
var Un = "PopperContent",
  [Tl, Pl] = Ro(Un),
  jo = g.forwardRef((e, t) => {
    var Ze, Le, Ue, _e, Je, pt, kt, Ct;
    const X = e,
      {
        __scopePopper: n,
        side: r = "bottom",
        sideOffset: o = 0,
        align: s = "center",
        alignOffset: i = 0,
        arrowPadding: a = 0,
        avoidCollisions: l = !0,
        collisionBoundary: d = [],
        collisionPadding: u = 0,
        sticky: f = "partial",
        hideWhenDetached: p = !1,
        updatePositionStrategy: c = "optimized",
        onPlaced: y,
      } = X,
      h = G(X, [
        "__scopePopper",
        "side",
        "sideOffset",
        "align",
        "alignOffset",
        "arrowPadding",
        "avoidCollisions",
        "collisionBoundary",
        "collisionPadding",
        "sticky",
        "hideWhenDetached",
        "updatePositionStrategy",
        "onPlaced",
      ]),
      w = _o(Un, n),
      [b, E] = g.useState(null),
      S = Yt(t, (Ie) => E(Ie)),
      [A, k] = g.useState(null),
      L = Cl(A),
      O = (Ze = L == null ? void 0 : L.width) != null ? Ze : 0,
      D = (Le = L == null ? void 0 : L.height) != null ? Le : 0,
      ee = r + (s !== "center" ? "-" + s : ""),
      Z =
        typeof u == "number"
          ? u
          : v({ top: 0, right: 0, bottom: 0, left: 0 }, u),
      B = Array.isArray(d) ? d : [d],
      R = B.length > 0,
      z = { padding: Z, boundary: B.filter(Ll), altBoundary: R },
      {
        refs: Y,
        floatingStyles: U,
        placement: M,
        isPositioned: V,
        middlewareData: I,
      } = hl({
        strategy: "fixed",
        placement: ee,
        whileElementsMounted: (...Ie) =>
          sl(...Ie, { animationFrame: c === "always" }),
        elements: { reference: w.anchor },
        middleware: [
          yl({ mainAxis: o + D, alignmentAxis: i }),
          l &&
            vl(
              v(
                {
                  mainAxis: !0,
                  crossAxis: !1,
                  limiter: f === "partial" ? wl() : void 0,
                },
                z,
              ),
            ),
          l && bl(v({}, z)),
          xl(
            C(v({}, z), {
              apply: ({
                elements: Ie,
                rects: Tt,
                availableWidth: mt,
                availableHeight: on,
              }) => {
                const { width: Pt, height: We } = Tt.reference,
                  He = Ie.floating.style;
                (He.setProperty("--radix-popper-available-width", `${mt}px`),
                  He.setProperty("--radix-popper-available-height", `${on}px`),
                  He.setProperty("--radix-popper-anchor-width", `${Pt}px`),
                  He.setProperty("--radix-popper-anchor-height", `${We}px`));
              },
            }),
          ),
          A && El({ element: A, padding: a }),
          _l({ arrowWidth: O, arrowHeight: D }),
          p && Sl(v({ strategy: "referenceHidden" }, z)),
        ],
      }),
      [T, j] = Do(M),
      W = ys(y);
    xn(() => {
      V && (W == null || W());
    }, [V, W]);
    const $ = (Ue = I.arrow) == null ? void 0 : Ue.x,
      H = (_e = I.arrow) == null ? void 0 : _e.y,
      q = ((Je = I.arrow) == null ? void 0 : Je.centerOffset) !== 0,
      [ie, Re] = g.useState();
    return (
      xn(() => {
        b && Re(window.getComputedStyle(b).zIndex);
      }, [b]),
      m.jsx("div", {
        ref: Y.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: v(
          C(v({}, U), {
            transform: V ? U.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: ie,
            "--radix-popper-transform-origin": [
              (pt = I.transformOrigin) == null ? void 0 : pt.x,
              (kt = I.transformOrigin) == null ? void 0 : kt.y,
            ].join(" "),
          }),
          ((Ct = I.hide) == null ? void 0 : Ct.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          },
        ),
        dir: e.dir,
        children: m.jsx(Tl, {
          scope: n,
          placedSide: T,
          onArrowChange: k,
          arrowX: $,
          arrowY: H,
          shouldHideArrow: q,
          children: m.jsx(
            Ht.div,
            C(v({ "data-side": T, "data-align": j }, h), {
              ref: S,
              style: C(v({}, h.style), { animation: V ? void 0 : "none" }),
            }),
          ),
        }),
      })
    );
  });
jo.displayName = Un;
var Oo = "PopperArrow",
  Rl = { top: "bottom", right: "left", bottom: "top", left: "right" },
  Mo = g.forwardRef(function (t, n) {
    const a = t,
      { __scopePopper: r } = a,
      o = G(a, ["__scopePopper"]),
      s = Pl(Oo, r),
      i = Rl[s.placedSide];
    return m.jsx("span", {
      ref: s.onArrowChange,
      style: {
        position: "absolute",
        left: s.arrowX,
        top: s.arrowY,
        [i]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[s.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[s.placedSide],
        visibility: s.shouldHideArrow ? "hidden" : void 0,
      },
      children: m.jsx(
        kl,
        C(v({}, o), { ref: n, style: C(v({}, o.style), { display: "block" }) }),
      ),
    });
  });
Mo.displayName = Oo;
function Ll(e) {
  return e !== null;
}
var _l = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var w, b, E, S, A;
    const { placement: n, rects: r, middlewareData: o } = t,
      i = ((w = o.arrow) == null ? void 0 : w.centerOffset) !== 0,
      a = i ? 0 : e.arrowWidth,
      l = i ? 0 : e.arrowHeight,
      [d, u] = Do(n),
      f = { start: "0%", center: "50%", end: "100%" }[u],
      p = ((E = (b = o.arrow) == null ? void 0 : b.x) != null ? E : 0) + a / 2,
      c = ((A = (S = o.arrow) == null ? void 0 : S.y) != null ? A : 0) + l / 2;
    let y = "",
      h = "";
    return (
      d === "bottom"
        ? ((y = i ? f : `${p}px`), (h = `${-l}px`))
        : d === "top"
          ? ((y = i ? f : `${p}px`), (h = `${r.floating.height + l}px`))
          : d === "right"
            ? ((y = `${-l}px`), (h = i ? f : `${c}px`))
            : d === "left" &&
              ((y = `${r.floating.width + l}px`), (h = i ? f : `${c}px`)),
      { data: { x: y, y: h } }
    );
  },
});
function Do(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var Il = No,
  Nl = jo,
  jl = Mo,
  Ol = Symbol("radix.slottable");
function Ml(e) {
  const t = ({ children: n }) => m.jsx(m.Fragment, { children: n });
  return ((t.displayName = `${e}.Slottable`), (t.__radixId = Ol), t);
}
var [Jt] = eo("Tooltip", [Lo]),
  Wn = Lo(),
  $o = "TooltipProvider",
  Dl = 700,
  kr = "tooltip.open",
  [$l, zo] = Jt($o),
  Bo = (e) => {
    const {
        __scopeTooltip: t,
        delayDuration: n = Dl,
        skipDelayDuration: r = 300,
        disableHoverableContent: o = !1,
        children: s,
      } = e,
      i = g.useRef(!0),
      a = g.useRef(!1),
      l = g.useRef(0);
    return (
      g.useEffect(() => {
        const d = l.current;
        return () => window.clearTimeout(d);
      }, []),
      m.jsx($l, {
        scope: t,
        isOpenDelayedRef: i,
        delayDuration: n,
        onOpen: g.useCallback(() => {
          (window.clearTimeout(l.current), (i.current = !1));
        }, []),
        onClose: g.useCallback(() => {
          (window.clearTimeout(l.current),
            (l.current = window.setTimeout(() => (i.current = !0), r)));
        }, [r]),
        isPointerInTransitRef: a,
        onPointerInTransitChange: g.useCallback((d) => {
          a.current = d;
        }, []),
        disableHoverableContent: o,
        children: s,
      })
    );
  };
Bo.displayName = $o;
var Vo = "Tooltip",
  [Nd, Qt] = Jt(Vo),
  _n = "TooltipTrigger",
  zl = g.forwardRef((e, t) => {
    const p = e,
      { __scopeTooltip: n } = p,
      r = G(p, ["__scopeTooltip"]),
      o = Qt(_n, n),
      s = zo(_n, n),
      i = Wn(n),
      a = g.useRef(null),
      l = Yt(t, a, o.onTriggerChange),
      d = g.useRef(!1),
      u = g.useRef(!1),
      f = g.useCallback(() => (d.current = !1), []);
    return (
      g.useEffect(
        () => () => document.removeEventListener("pointerup", f),
        [f],
      ),
      m.jsx(
        Il,
        C(v({ asChild: !0 }, i), {
          children: m.jsx(
            Ht.button,
            C(
              v(
                {
                  "aria-describedby": o.open ? o.contentId : void 0,
                  "data-state": o.stateAttribute,
                },
                r,
              ),
              {
                ref: l,
                onPointerMove: nt(e.onPointerMove, (c) => {
                  c.pointerType !== "touch" &&
                    !u.current &&
                    !s.isPointerInTransitRef.current &&
                    (o.onTriggerEnter(), (u.current = !0));
                }),
                onPointerLeave: nt(e.onPointerLeave, () => {
                  (o.onTriggerLeave(), (u.current = !1));
                }),
                onPointerDown: nt(e.onPointerDown, () => {
                  (o.open && o.onClose(),
                    (d.current = !0),
                    document.addEventListener("pointerup", f, { once: !0 }));
                }),
                onFocus: nt(e.onFocus, () => {
                  d.current || o.onOpen();
                }),
                onBlur: nt(e.onBlur, o.onClose),
                onClick: nt(e.onClick, o.onClose),
              },
            ),
          ),
        }),
      )
    );
  });
zl.displayName = _n;
var Bl = "TooltipPortal",
  [jd, Vl] = Jt(Bl, { forceMount: void 0 }),
  at = "TooltipContent",
  Fo = g.forwardRef((e, t) => {
    const n = Vl(at, e.__scopeTooltip),
      a = e,
      { forceMount: r = n.forceMount, side: o = "top" } = a,
      s = G(a, ["forceMount", "side"]),
      i = Qt(at, e.__scopeTooltip);
    return m.jsx(vs, {
      present: r || i.open,
      children: i.disableHoverableContent
        ? m.jsx(Uo, C(v({ side: o }, s), { ref: t }))
        : m.jsx(Fl, C(v({ side: o }, s), { ref: t })),
    });
  }),
  Fl = g.forwardRef((e, t) => {
    const n = Qt(at, e.__scopeTooltip),
      r = zo(at, e.__scopeTooltip),
      o = g.useRef(null),
      s = Yt(t, o),
      [i, a] = g.useState(null),
      { trigger: l, onClose: d } = n,
      u = o.current,
      { onPointerInTransitChange: f } = r,
      p = g.useCallback(() => {
        (a(null), f(!1));
      }, [f]),
      c = g.useCallback(
        (y, h) => {
          const w = y.currentTarget,
            b = { x: y.clientX, y: y.clientY },
            E = ql(b, w.getBoundingClientRect()),
            S = Xl(b, E),
            A = Gl(h.getBoundingClientRect()),
            k = Zl([...S, ...A]);
          (a(k), f(!0));
        },
        [f],
      );
    return (
      g.useEffect(() => () => p(), [p]),
      g.useEffect(() => {
        if (l && u) {
          const y = (w) => c(w, u),
            h = (w) => c(w, l);
          return (
            l.addEventListener("pointerleave", y),
            u.addEventListener("pointerleave", h),
            () => {
              (l.removeEventListener("pointerleave", y),
                u.removeEventListener("pointerleave", h));
            }
          );
        }
      }, [l, u, c, p]),
      g.useEffect(() => {
        if (i) {
          const y = (h) => {
            const w = h.target,
              b = { x: h.clientX, y: h.clientY },
              E =
                (l == null ? void 0 : l.contains(w)) ||
                (u == null ? void 0 : u.contains(w)),
              S = !Kl(b, i);
            E ? p() : S && (p(), d());
          };
          return (
            document.addEventListener("pointermove", y),
            () => document.removeEventListener("pointermove", y)
          );
        }
      }, [l, u, i, d, p]),
      m.jsx(Uo, C(v({}, e), { ref: s }))
    );
  }),
  [Ul, Wl] = Jt(Vo, { isInside: !1 }),
  Hl = Ml("TooltipContent"),
  Uo = g.forwardRef((e, t) => {
    const f = e,
      {
        __scopeTooltip: n,
        children: r,
        "aria-label": o,
        onEscapeKeyDown: s,
        onPointerDownOutside: i,
      } = f,
      a = G(f, [
        "__scopeTooltip",
        "children",
        "aria-label",
        "onEscapeKeyDown",
        "onPointerDownOutside",
      ]),
      l = Qt(at, n),
      d = Wn(n),
      { onClose: u } = l;
    return (
      g.useEffect(
        () => (
          document.addEventListener(kr, u),
          () => document.removeEventListener(kr, u)
        ),
        [u],
      ),
      g.useEffect(() => {
        if (l.trigger) {
          const p = (c) => {
            const y = c.target;
            y != null && y.contains(l.trigger) && u();
          };
          return (
            window.addEventListener("scroll", p, { capture: !0 }),
            () => window.removeEventListener("scroll", p, { capture: !0 })
          );
        }
      }, [l.trigger, u]),
      m.jsx(ws, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: i,
        onFocusOutside: (p) => p.preventDefault(),
        onDismiss: u,
        children: m.jsxs(
          Nl,
          C(v(v({ "data-state": l.stateAttribute }, d), a), {
            ref: t,
            style: C(v({}, a.style), {
              "--radix-tooltip-content-transform-origin":
                "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width":
                "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height":
                "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width":
                "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height":
                "var(--radix-popper-anchor-height)",
            }),
            children: [
              m.jsx(Hl, { children: r }),
              m.jsx(Ul, {
                scope: n,
                isInside: !0,
                children: m.jsx(bs, {
                  id: l.contentId,
                  role: "tooltip",
                  children: o || r,
                }),
              }),
            ],
          }),
        ),
      })
    );
  });
Fo.displayName = at;
var Wo = "TooltipArrow",
  Yl = g.forwardRef((e, t) => {
    const i = e,
      { __scopeTooltip: n } = i,
      r = G(i, ["__scopeTooltip"]),
      o = Wn(n);
    return Wl(Wo, n).isInside ? null : m.jsx(jl, C(v(v({}, o), r), { ref: t }));
  });
Yl.displayName = Wo;
function ql(e, t) {
  const n = Math.abs(t.top - e.y),
    r = Math.abs(t.bottom - e.y),
    o = Math.abs(t.right - e.x),
    s = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, s)) {
    case s:
      return "left";
    case o:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function Xl(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
      break;
    case "bottom":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
      break;
    case "left":
      r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
      break;
    case "right":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
      break;
  }
  return r;
}
function Gl(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r },
  ];
}
function Kl(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
    const a = t[s],
      l = t[i],
      d = a.x,
      u = a.y,
      f = l.x,
      p = l.y;
    u > r != p > r && n < ((f - d) * (r - u)) / (p - u) + d && (o = !o);
  }
  return o;
}
function Zl(e) {
  const t = e.slice();
  return (
    t.sort((n, r) =>
      n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0,
    ),
    Jl(t)
  );
}
function Jl(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const s = t[t.length - 1],
        i = t[t.length - 2];
      if ((s.x - i.x) * (o.y - i.y) >= (s.y - i.y) * (o.x - i.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const s = n[n.length - 1],
        i = n[n.length - 2];
      if ((s.x - i.x) * (o.y - i.y) >= (s.y - i.y) * (o.x - i.x)) n.pop();
      else break;
    }
    n.push(o);
  }
  return (
    n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y
      ? t
      : t.concat(n)
  );
}
var Ql = Bo,
  Ho = Fo;
const ec = Ql,
  tc = g.forwardRef((o, r) => {
    var s = o,
      { className: e, sideOffset: t = 4 } = s,
      n = G(s, ["className", "sideOffset"]);
    return m.jsx(
      Ho,
      v(
        {
          ref: r,
          sideOffset: t,
          className: Ke(
            "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            e,
          ),
        },
        n,
      ),
    );
  });
tc.displayName = Ho.displayName;
var Cr = {},
  nc = "@vercel/analytics",
  rc = "1.6.1",
  oc = () => {
    window.va ||
      (window.va = function (...t) {
        (window.vaq = window.vaq || []).push(t);
      });
  };
function Yo() {
  return typeof window != "undefined";
}
function qo() {
  try {
    return (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") ? "development" : "production";
  } catch (e) {}
  return "production";
}
function sc(e = "auto") {
  if (e === "auto") {
    window.vam = qo();
    return;
  }
  window.vam = e;
}
function ic() {
  return (Yo() ? window.vam : qo()) || "production";
}
function In() {
  return ic() === "development";
}
function ac(e) {
  return e.scriptSrc
    ? e.scriptSrc
    : In()
      ? "https://va.vercel-scripts.com/v1/script.debug.js"
      : "https://va.vercel-scripts.com/v1/script.js";
}
function lc(e = { debug: !0 }) {
  var t;
  if (!Yo()) return;
  (sc(e.mode),
    oc(),
    e.beforeSend &&
      ((t = window.va) == null || t.call(window, "beforeSend", e.beforeSend)));
  const n = ac(e);
  if (document.head.querySelector(`script[src*="${n}"]`)) return;
  const r = document.createElement("script");
  ((r.src = n),
    (r.defer = !0),
    (r.dataset.sdkn = nc + (e.framework ? `/${e.framework}` : "")),
    (r.dataset.sdkv = rc),
    e.disableAutoTrack && (r.dataset.disableAutoTrack = "1"),
    e.endpoint
      ? (r.dataset.endpoint = e.endpoint)
      : e.basePath && (r.dataset.endpoint = `${e.basePath}/insights`),
    e.dsn && (r.dataset.dsn = e.dsn),
    (r.onerror = () => {
      const o = In()
        ? "Please check if any ad blockers are enabled and try again."
        : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
      console.log(
        `[Vercel Web Analytics] Failed to load script from ${n}. ${o}`,
      );
    }),
    In() && e.debug === !1 && (r.dataset.debug = "false"),
    document.head.appendChild(r));
}
function cc({ route: e, path: t }) {
  var n;
  (n = window.va) == null || n.call(window, "pageview", { route: e, path: t });
}
function dc() {
  if (!(typeof process == "undefined" || typeof Cr == "undefined"))
    return Cr.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH;
}
function uc(e) {
  return (
    g.useEffect(() => {
      var t;
      e.beforeSend &&
        ((t = window.va) == null || t.call(window, "beforeSend", e.beforeSend));
    }, [e.beforeSend]),
    g.useEffect(() => {
      var t;
      lc(
        v(
          v(
            {
              framework: e.framework || "react",
              basePath: (t = e.basePath) != null ? t : dc(),
            },
            e.route !== void 0 && { disableAutoTrack: !0 },
          ),
          e,
        ),
      );
    }, []),
    g.useEffect(() => {
      e.route && e.path && cc({ route: e.route, path: e.path });
    }, [e.route, e.path]),
    null
  );
}
var Tr = {},
  fc = "@vercel/speed-insights",
  pc = "1.3.1",
  mc = () => {
    window.si ||
      (window.si = function (...t) {
        (window.siq = window.siq || []).push(t);
      });
  };
function hc() {
  return typeof window != "undefined";
}
function gc() {
  try {
    return (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") ? "development" : "production";
  } catch (e) {}
  return "production";
}
function Xo() {
  return gc() === "development";
}
function yc(e) {
  return e.scriptSrc
    ? e.scriptSrc
    : Xo()
      ? "https://va.vercel-scripts.com/v1/speed-insights/script.debug.js"
      : e.dsn
        ? "https://va.vercel-scripts.com/v1/speed-insights/script.js"
        : e.basePath
          ? `${e.basePath}/speed-insights/script.js`
          : "/_vercel/speed-insights/script.js";
}
function vc(e = {}) {
  var t;
  if (!hc() || e.route === null) return null;
  mc();
  const n = yc(e);
  if (document.head.querySelector(`script[src*="${n}"]`)) return null;
  e.beforeSend &&
    ((t = window.si) == null || t.call(window, "beforeSend", e.beforeSend));
  const r = document.createElement("script");
  return (
    (r.src = n),
    (r.defer = !0),
    (r.dataset.sdkn = fc + (e.framework ? `/${e.framework}` : "")),
    (r.dataset.sdkv = pc),
    e.sampleRate && (r.dataset.sampleRate = e.sampleRate.toString()),
    e.route && (r.dataset.route = e.route),
    e.endpoint
      ? (r.dataset.endpoint = e.endpoint)
      : e.basePath &&
        (r.dataset.endpoint = `${e.basePath}/speed-insights/vitals`),
    e.dsn && (r.dataset.dsn = e.dsn),
    Xo() && e.debug === !1 && (r.dataset.debug = "false"),
    (r.onerror = () => {
      console.log(
        `[Vercel Speed Insights] Failed to load script from ${n}. Please check if any content blockers are enabled and try again.`,
      );
    }),
    document.head.appendChild(r),
    {
      setRoute: (o) => {
        r.dataset.route = o != null ? o : void 0;
      },
    }
  );
}
function wc() {
  if (!(typeof process == "undefined" || typeof Tr == "undefined"))
    return Tr.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH;
}
function bc(e) {
  g.useEffect(() => {
    var n;
    e.beforeSend &&
      ((n = window.si) == null || n.call(window, "beforeSend", e.beforeSend));
  }, [e.beforeSend]);
  const t = g.useRef(null);
  return (
    g.useEffect(() => {
      var n, r;
      if (t.current) e.route && t.current(e.route);
      else {
        const o = vc(
          v(
            {
              framework: (n = e.framework) != null ? n : "react",
              basePath: (r = e.basePath) != null ? r : wc(),
            },
            e,
          ),
        );
        o && (t.current = o.setRoute);
      }
    }, [e.route]),
    null
  );
}
const xc = () => {
    const { pathname: e } = qt();
    return (
      g.useEffect(() => {
        try {
          window.scrollTo(0, 0);
        } catch (t) {
          window.scrollTo(0, 0);
        }
      }, [e]),
      null
    );
  },
  Sc = () => m.jsx("div", { className: "min-h-screen bg-[#faf9f6]" }),
  Ec = ({ children: e, location: t }) =>
    m.jsx(Ts, {
      mode: "sync",
      initial: !1,
      children: m.jsx(
        Ps.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          transition: { duration: 0.12, ease: "easeOut" },
          style: { width: "100%", minHeight: "100vh" },
          children: m.jsx(g.Suspense, { fallback: m.jsx(Sc, {}), children: e }),
        },
        t.pathname,
      ),
    }),
  Ac = () =>
    m.jsxs("svg", {
      height: "34",
      width: "34",
      viewBox: "0 0 34 34",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        m.jsx("path", {
          d: "M10 6L29 19L20.5 21L25.5 31L20 33L15 23L8 29L10 6Z",
          fill: "#000",
          opacity: "0.8",
        }),
        m.jsx("path", {
          d: "M6 2L25 15L16.5 17L21.5 27L16 29L11 19L4 25L6 2Z",
          fill: "#FFDE59",
          stroke: "#000",
          strokeWidth: "2.5",
          strokeLinejoin: "miter",
        }),
        m.jsx("path", {
          d: "M11.5 10.5L19.5 15.5L15.5 16.5L18 22",
          stroke: "#000",
          strokeWidth: "2",
          strokeLinecap: "square",
          strokeLinejoin: "miter",
        }),
      ],
    }),
  kc = () =>
    m.jsxs("svg", {
      width: "34",
      height: "34",
      fill: "none",
      viewBox: "0 0 34 34",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        m.jsx("path", {
          d: "M9 17V4.5C9 3.1 10.1 2 11.5 2S14 3.1 14 4.5V13V10.5C14 9.1 15.1 8 16.5 8S19 9.1 19 10.5V14V11.5C19 10.1 20.1 9 21.5 9S24 10.1 24 11.5V16V13.5C24 12.1 25.1 11 26.5 11S29 12.1 29 13.5V19C29 24.5 24.5 29 19 29H16.5C13.2 29 10.1 27.4 8.2 24.7L4.2 19C3.4 17.9 3.7 16.3 4.9 15.6C5.8 15.1 7 15.2 7.8 16L9 17Z",
          fill: "#000",
          opacity: "0.8",
        }),
        m.jsx("path", {
          d: "M7 15V2.5C7 1.1 8.1 0 9.5 0S12 1.1 12 2.5V11V8.5C12 7.1 13.1 6 14.5 6S17 7.1 17 8.5V12V9.5C17 8.1 18.1 7 19.5 7S22 8.1 22 9.5V14V11.5C22 10.1 23.1 9 24.5 9S27 10.1 27 11.5V17C27 22.5 22.5 27 17 27H14.5C11.2 27 8.1 25.4 6.2 22.7L2.2 17C1.4 15.9 1.7 14.3 2.9 13.6C3.8 13.1 5 13.2 5.8 14L7 15Z",
          fill: "#FFA33C",
          stroke: "#000",
          strokeWidth: "2.5",
          strokeLinecap: "square",
          strokeLinejoin: "miter",
        }),
        m.jsx("path", {
          d: "M12 11V15M17 12V15.5M22 14V17",
          stroke: "#000",
          strokeWidth: "2",
          strokeLinecap: "square",
        }),
        m.jsx("path", {
          d: "M8.5 4.5V10.5",
          stroke: "#FFDE59",
          strokeWidth: "2",
          strokeLinecap: "square",
        }),
      ],
    }),
  Cc = () => {
    const e = g.useRef(null),
      t = g.useRef(!1),
      n = g.useRef(!1),
      r = g.useRef(!1),
      o = g.useRef(0),
      s = 1e3;
    return (
      g.useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          (e.current && (e.current.style.display = "none"),
            document.body.classList.remove("custom-cursor-active"));
          return;
        }
        const a = window.matchMedia("(pointer: coarse)").matches,
          l = !window.matchMedia("(any-pointer: fine)").matches;
        if (a && l) {
          ((r.current = !0),
            e.current && (e.current.style.display = "none"),
            document.body.classList.remove("custom-cursor-active"));
          return;
        }
        const d = () => {
            e.current &&
              n.current &&
              !r.current &&
              ((e.current.style.opacity = "1"),
              document.body.classList.add("custom-cursor-active"));
          },
          u = () => {
            e.current && (e.current.style.opacity = "0");
          },
          f = () => {
            (e.current &&
              ((e.current.style.display = "none"),
              (e.current.style.opacity = "0")),
              document.body.classList.remove("custom-cursor-active"));
          },
          p = () => {
            r.current || ((n.current = !0), d());
          },
          c = (b) => {
            const S = Date.now() - o.current,
              A = b.movementX !== 0 || b.movementY !== 0;
            if (
              S < s ||
              (r.current &&
                A &&
                ((r.current = !1),
                e.current && (e.current.style.display = "block"),
                d()),
              r.current)
            )
              return;
            n.current || p();
            if (e.current) {
              const _x = b.clientX,
                _y = b.clientY;
              requestAnimationFrame(() => {
                if (!e.current) return;
                e.current.style.setProperty("--clientX", `${_x}px`);
                e.current.style.setProperty("--clientY", `${_y}px`);
              });
            }
            const k = b.target,
              L = !!(
                k &&
                (k.tagName === "BUTTON" ||
                  k.tagName === "A" ||
                  k.closest("button") ||
                  k.closest("a") ||
                  k.closest('[role="button"]') ||
                  k.classList.contains("cursor-pointer") ||
                  k.closest(".cursor-pointer"))
              );
            if (((t.current = L), e.current)) {
              const O = e.current.querySelector(".cursor-default"),
                D = e.current.querySelector(".cursor-pointer");
              O &&
                D &&
                (L
                  ? ((O.style.opacity = "0"), (D.style.opacity = "1"))
                  : ((O.style.opacity = "1"), (D.style.opacity = "0")));
            }
          },
          y = () => {
            n.current && !r.current && d();
          },
          h = () => {
            n.current && u();
          },
          w = () => {
            ((o.current = Date.now()), (r.current = !0), f());
          };
        return (
          window.addEventListener("touchstart", w, {
            passive: !0,
            capture: !0,
          }),
          window.addEventListener("mousemove", c, { passive: !0 }),
          document.documentElement.addEventListener("mouseenter", y),
          document.documentElement.addEventListener("mouseleave", h),
          () => {
            (window.removeEventListener("touchstart", w, { capture: !0 }),
              window.removeEventListener("mousemove", c),
              document.documentElement.removeEventListener("mouseenter", y),
              document.documentElement.removeEventListener("mouseleave", h),
              document.body.classList.remove("custom-cursor-active"));
          }
        );
      }, []),
      m.jsxs("div", {
        ref: e,
        className: "cursor-wrapper",
        style: {
          position: "fixed",
          left: 0,
          top: 0,
          pointerEvents: "none",
          zIndex: 9999,
          opacity: 0,
          transition: "opacity 0.3s ease-in-out",
          willChange: "transform",
          "--clientX": "-100px",
          "--clientY": "-100px",
          transform:
            "translate(calc(var(--clientX) - 7px), calc(var(--clientY) - 4px))",
        },
        role: "presentation",
        "aria-hidden": "true",
        children: [
          m.jsx("div", {
            className: "cursor-default",
            style: {
              position: "absolute",
              opacity: 1,
              transition: "opacity 0.2s ease",
            },
            children: m.jsx(Ac, {}),
          }),
          m.jsx("div", {
            className: "cursor-pointer",
            style: {
              position: "absolute",
              opacity: 0,
              transition: "opacity 0.2s ease",
            },
            children: m.jsx(kc, {}),
          }),
        ],
      })
    );
  },
  Tc = ({ children: e }) => m.jsx(m.Fragment, { children: e }),
  Fe = "https://mayank-dev.in",
  en = "Mayank Dev Portfolio",
  Xe = "/website-preview-og.png",
  Pc =
    "Preview of Mayank Dev portfolio showcasing full-stack builds, DSA practice, and creative products.",
  Pr = "@Mayank_Dev23",
  P = {
    home: "/",
    projects: "/projects",
    life: "/life",
    aiForgeryDetective: "/projects/ai-forgery-detective",
    ridexpress: "/projects/ridexpress",
    ridexpressLegacy: "/projects/ridexpress-legacy",
    parkEz: "/projects/park-ez",
    parkEzConstruction: "/projects/park-ez-construction",
    parkEzLegacy: "/projects/park-ez-legacy",
    questionLibrary: "/projects/question-library",
    hactiq: "/projects/hactiq",
    finease: "/projects/finease",
    shiq: "/projects/shiq",
    vaultdl: "/projects/vaultdl",
    journey: "/journey",
    contact: "/contact",
    blog: "/blog",
    ridexpressAlt: "/projects/ridexpress-alt",
    playground: "/playground",
    notFound: "*",
  },
  se = [
    "Mayank Dev",
    "Full Stack Developer",
    "Software Engineer",
    "DSA Practitioner",
    "Tech Content Creator",
    "Design Portfolio",
    "Product Build",
    "Scalable Systems",
    "User Experience",
    "Kanpur Developer",
  ],
  Ce = [
    "Product Build Case Study",
    "Full Stack Project",
    "Technical Process",
    "Problem Solving",
    "Portfolio Project",
  ],
  oe = (...e) => [...new Set(e.flat().filter(Boolean))],
  jt = {
    "@type": "Person",
    name: "Mayank Dev",
    jobTitle: "Full Stack Developer",
    url: `${Fe}/`,
    image: `${Fe}/my-notion-face-portrait.png`,
    sameAs: [
      "https://www.linkedin.com/in/mayankdev23",
      "https://github.com/Mayank-23-Dev",
    ],
  },
  Rr = { "@type": "WebSite", name: en, url: `${Fe}/` },
  Lr = {
    "@type": "Organization",
    name: en,
    url: `${Fe}/`,
    logo: { "@type": "ImageObject", url: `${Fe}/apple-touch-icon.png` },
  },
  Rc = [
    {
      path: P.home,
      title: "Mayank Dev | Full Stack Developer Portfolio",
      description:
        "Full Stack Developer building products through clear systems, thoughtful architecture, and high-signal builds.",
      keywords: oe(se, [
        "Full Stack Developer Portfolio",
        "Software Engineering",
        "React & Node.js",
        "Full Stack Builds",
      ]),
      canonicalPath: P.home,
      ogImage: Xe,
      ogImageAlt: "Mayank Dev portfolio homepage preview.",
      ogType: "website",
      schemaKind: "website",
      indexable: !0,
      prerender: !0,
    },
    {
      path: P.projects,
      title: "Selected Works | Mayank Dev",
      description:
        "Selected product design and product build work spanning redesigns, systems thinking, and shipped outcomes.",
      keywords: oe(se, [
        "Selected Works",
        "Product Design Portfolio",
        "UX Portfolio Projects",
        "Case Studies",
      ]),
      canonicalPath: P.projects,
      ogImage: Xe,
      ogImageAlt:
        "Preview of Mayank Dev selected work and project case studies.",
      ogType: "website",
      schemaKind: "website",
      indexable: !0,
      prerender: !0,
    },
    {
      path: P.aiForgeryDetective,
      title: "AI Forgery Detective Case Study | Mayank Dev",
      description:
        "A digital forensics product case study combining AI explainability, model design, and a conversational investigation experience.",
      keywords: oe(se, Ce, [
        "AI Product Case Study",
        "Digital Forensics",
        "Computer Vision",
        "Conversational AI",
      ]),
      canonicalPath: P.aiForgeryDetective,
      ogImage: "/images/case studies/cmfd/thumbnail.webp",
      ogImageAlt: "AI Forgery Detective case study cover image.",
      ogType: "article",
      schemaKind: "article",
      indexable: !0,
      prerender: !0,
    },
    {
      path: P.ridexpress,
      title: "RideXpress Case Study | Mayank Dev",
      description:
        "A four-week UX redesign of RideXpress that rebuilt trust, clarified booking, and made the mobile flow feel current and usable.",
      keywords: oe(se, Ce, [
        "RideXpress",
        "Mobile UX Redesign",
        "Booking Flow Design",
        "Service Design",
      ]),
      canonicalPath: P.ridexpress,
      ogImage: "/images/case studies/ridexpress/thumbnail.webp",
      ogImageAlt: "RideXpress case study cover image.",
      ogType: "article",
      schemaKind: "article",
      indexable: !0,
      prerender: !0,
    },
    {
      path: P.ridexpressLegacy,
      title: "RideXpress Legacy Case Study | Mayank Dev",
      description:
        "Legacy version of the RideXpress case study retained for reference while the current case study lives at the main RideXpress URL.",
      keywords: oe(se, Ce, [
        "RideXpress",
        "Legacy Case Study",
        "UX Redesign Archive",
      ]),
      canonicalPath: P.ridexpressLegacy,
      ogImage: "/images/case studies/ridexpress/thumbnail.webp",
      ogImageAlt: "RideXpress legacy case study cover image.",
      ogType: "website",
      schemaKind: "website",
      indexable: !1,
      prerender: !0,
    },
    {
      path: P.parkEz,
      title: "Park EZ Case Study | Mayank Dev",
      description:
        "An academic smart parking case study focused on research, usability, and a calmer mobile booking experience.",
      keywords: oe(se, Ce, [
        "Park EZ",
        "Smart Parking UX",
        "Mobility Design",
        "Research-Backed Design",
      ]),
      canonicalPath: P.parkEz,
      ogImage: "/images/case studies/parkez/thumbnail.webp",
      ogImageAlt: "Park EZ case study cover image.",
      ogType: "article",
      schemaKind: "article",
      indexable: !0,
      prerender: !0,
    },
    {
      path: P.parkEzConstruction,
      title: "Park EZ Case Study In Progress | Mayank Dev",
      description:
        "Work-in-progress Park EZ case study page describing the rebuild of the narrative and supporting artifacts.",
      keywords: oe(se, [
        "Park EZ",
        "Case Study In Progress",
        "Product Design Work in Progress",
      ]),
      canonicalPath: P.parkEzConstruction,
      ogImage: "/images/case studies/parkez/thumbnail.webp",
      ogImageAlt: "Park EZ work-in-progress case study cover image.",
      ogType: "website",
      schemaKind: "website",
      indexable: !1,
      prerender: !0,
    },
    {
      path: P.parkEzLegacy,
      title: "Park EZ Legacy Case Study | Mayank Dev",
      description:
        "Legacy version of the Park EZ case study retained as an archive while the current canonical version lives at the main Park EZ URL.",
      keywords: oe(se, Ce, ["Park EZ", "Legacy Case Study", "UX Archive"]),
      canonicalPath: P.parkEzLegacy,
      ogImage: "/images/case studies/parkez/thumbnail.webp",
      ogImageAlt: "Park EZ legacy case study cover image.",
      ogType: "website",
      schemaKind: "website",
      indexable: !1,
      prerender: !0,
    },
    {
      path: P.questionLibrary,
      title: "Question Library Case Study | Mayank Dev",
      description:
        "A skills-first question library case study covering taxonomy, governance, and operational clarity for assessment workflows.",
      keywords: oe(se, Ce, [
        "Question Library",
        "Assessment Workflow Design",
        "Taxonomy Design",
        "Internal Tool UX",
      ]),
      canonicalPath: P.questionLibrary,
      ogImage: Xe,
      ogImageAlt: "Question Library case study preview.",
      ogType: "article",
      schemaKind: "article",
      indexable: !0,
      prerender: !0,
    },
    {
      path: P.hactiq,
      title: "Hactiq Case Study | Mayank Dev",
      description:
        "A clarity-first habit tracker case study focused on progress visibility without streak pressure for students and young professionals.",
      keywords: oe(se, Ce, [
        "Hactiq",
        "Habit Tracker",
        "Full Stack Case Study",
        "Progress Visibility",
      ]),
      canonicalPath: P.hactiq,
      ogImage: "/images/case studies/couriermgmt/thumbnail.webp",
      ogImageAlt: "Hactiq case study cover image.",
      ogType: "article",
      schemaKind: "article",
      indexable: !0,
      prerender: !0,
    },
    {
      path: P.finease,
      title: "FinEase Case Study | Mayank Dev",
      description:
        "An AI-powered personal financial dashboard case study focused on tracking, budgeting, analytics, and actionable insights.",
      keywords: oe(se, Ce, [
        "FinEase",
        "AI Product Design",
        "Machine Learning Product",
        "Personal Finance Dashboard",
      ]),
      canonicalPath: P.finease,
      ogImage: "/images/case studies/postyai/thumbnail.webp",
      ogImageAlt: "FinEase case study cover image.",
      ogType: "article",
      schemaKind: "article",
      indexable: !0,
      prerender: !0,
    },
    {
      path: P.shiq,
      title: "Shiq Case Study | Mayank Dev",
      description: "Shiq case study by Mayank Dev.",
      keywords: oe(se, Ce, ["Shiq"]),
      canonicalPath: P.shiq,
      ogImage: "/images/case studies/Shiq/thumbnail.webp",
      ogImageAlt: "Shiq case study cover image.",
      ogType: "article",
      schemaKind: "article",
      indexable: !0,
      prerender: !0,
    },
    {
      path: P.vaultdl,
      title: "VaultDL | Mayank Dev",
      description: "VaultDL — a high-performance Windows desktop app for downloading media from hundreds of platforms, powered by yt-dlp and FFmpeg.",
      keywords: oe(se, Ce, ["VaultDL", "Media Downloader", "Desktop App", "yt-dlp", "Windows"]),
      canonicalPath: P.vaultdl,
      ogImage: "/images/case studies/VaultDL/thumbnail.webp",
      ogImageAlt: "VaultDL desktop media downloader preview.",
      ogType: "article",
      schemaKind: "article",
      indexable: !0,
      prerender: !0,
    },
    {
      path: P.life,
      title: "Life | Mayank Dev",
      description:
        "An editorial look at the path behind Mayank Dev’s work, from technical curiosity to full-stack engineering and shipped products.",
      keywords: oe(se, [
        "Life Story",
        "Full Stack Developer Background",
        "Engineering Journey",
        "Career Story",
        "Technical Builds",
      ]),
      canonicalPath: P.life,
      ogImage: "/my-notion-face-portrait.png",
      ogImageAlt: "Portrait of Mayank Dev for the Life page.",
      ogType: "profile",
      schemaKind: "profile",
      indexable: !0,
      prerender: !0,
    },
    {
      path: P.journey,
      title: "Journey | Mayank Dev",
      description:
        "A structured alternate reading mode for the story behind Mayank Dev’s work, with prose, list, and timeline views.",
      keywords: oe(se, [
        "Journey",
        "Full Stack Developer Story",
        "Career Path",
        "Technical Background",
      ]),
      canonicalPath: P.life,
      ogImage: "/my-notion-face-portrait.png",
      ogImageAlt: "Portrait of Mayank Dev.",
      ogType: "profile",
      schemaKind: "profile",
      indexable: !1,
      prerender: !0,
    },
    {
      path: P.contact,
      title: "Contact | Mayank Dev",
      description:
        "Want to build something? Let's talk. Contact Mayank Dev for full stack development projects and collaborations in India.",
      keywords: oe(se, [
        "Contact Mayank Dev",
        "Hire Full Stack Developer India",
        "Web Developer Kanpur",
        "Developer Collaboration",
      ]),
      canonicalPath: P.contact,
      ogImage: Xe,
      ogImageAlt: "Contact page preview for Mayank Dev portfolio.",
      ogType: "website",
      schemaKind: "website",
      indexable: !0,
      prerender: !0,
    },
    {
      path: P.ridexpressAlt,
      title: "RideXpress Case Study | Mayank Dev",
      description:
        "Alternate RideXpress route retained for compatibility and canonicalized to the main RideXpress case study.",
      keywords: oe(se, Ce, ["RideXpress", "Compatibility Route"]),
      canonicalPath: P.ridexpress,
      ogImage: "/images/case studies/ridexpress/thumbnail.webp",
      ogImageAlt: "RideXpress case study cover image.",
      ogType: "article",
      schemaKind: "article",
      indexable: !1,
      prerender: !0,
      aliasOf: P.ridexpress,
    },
    {
      path: P.playground,
      title: "Playground | Mayank Dev",
      description:
        "A focused interface lab with interactive components, UI experiments, and implementation explorations from Mayank Dev.",
      keywords: oe(se, [
        "UI Playground",
        "Component Lab",
        "Interaction Experiments",
        "UI Experiments",
      ]),
      canonicalPath: P.playground,
      ogImage: Xe,
      ogImageAlt: "Playground preview for Mayank Dev portfolio.",
      ogType: "website",
      schemaKind: "website",
      indexable: !1,
      prerender: !0,
    },
    {
      path: P.notFound,
      title: "Page Not Found | Mayank Dev",
      description: "This page does not exist on the Mayank Dev portfolio.",
      keywords: oe(se, ["404", "Page Not Found"]),
      canonicalPath: P.notFound,
      ogImage: Xe,
      ogImageAlt: "Mayank Dev portfolio preview.",
      ogType: "website",
      schemaKind: "none",
      indexable: !1,
      prerender: !1,
    },
  ],
  Nn = new Map(Rc.map((e) => [ze(e.path), e]));
function ze(e) {
  if (!e || e === "") return "/";
  if (e === "*") return "*";
  const [t] = e.split(/[?#]/),
    r = (t.startsWith("/") ? t : `/${t}`).replace(/\/{2,}/g, "/");
  return r.length > 1 && r.endsWith("/") ? r.slice(0, -1) : r;
}
function Lc(e) {
  const t = ze(e);
  return t === "*" || t === "/" ? `${Fe}/` : `${Fe}${t}`;
}
function _c(e) {
  return Nn.get(ze(e)) || Nn.get("*");
}
function Ic(e) {
  return !e || !e.aliasOf ? e : Nn.get(ze(e.aliasOf)) || e;
}
function Go(e) {
  const t = typeof e == "string" ? _c(e) : e;
  if (!t) throw new Error("Unable to resolve SEO route metadata.");
  const n = ze(typeof e == "string" ? e : t.path),
    r = Ic(t),
    o = t.path === "*" ? (n === "*" ? null : n) : ze(r.canonicalPath || r.path),
    s = oe(r.keywords),
    i = jc(r.ogImage || Xe);
  return C(v({}, r), {
    routePath: ze(t.path),
    requestedPath: n,
    canonicalPath: o,
    canonicalUrl: o ? Lc(o) : null,
    ogImage: i,
    ogImageAlt: r.ogImageAlt || Pc,
    keywords: s,
    robots: t.indexable ? "index, follow" : "noindex, nofollow",
    indexable: t.indexable,
    prerender: t.prerender,
    aliasOf: t.aliasOf,
  });
}
function Nc(e) {
  const t = Go(e);
  switch (t.schemaKind) {
    case "article":
      return v(
        v(
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: t.title,
            description: t.description,
            url: t.canonicalUrl,
            image: t.ogImage,
            inLanguage: "en-US",
            author: jt,
            publisher: Lr,
          },
          t.publishedTime ? { datePublished: t.publishedTime } : {},
        ),
        t.modifiedTime ? { dateModified: t.modifiedTime } : {},
      );
    case "profile":
      return {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        name: t.title,
        description: t.description,
        url: t.canonicalUrl,
        isPartOf: Rr,
        mainEntity: jt,
        inLanguage: "en-US",
      };
    case "website":
      return t.canonicalPath === "/"
        ? {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: en,
            description: t.description,
            url: t.canonicalUrl,
            publisher: Lr,
            creator: jt,
            inLanguage: "en-US",
          }
        : {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: t.title,
            description: t.description,
            url: t.canonicalUrl,
            isPartOf: Rr,
            about: jt,
            inLanguage: "en-US",
          };
    case "none":
    default:
      return null;
  }
}
function jc(e) {
  if (/^https?:\/\//.test(e)) return encodeURI(e);
  const t = e.startsWith("/") ? e : `/${e}`;
  return encodeURI(`${Fe}${t}`);
}
const te = (e, t, n = !1) => {
    const r = n ? `meta[property="${e}"]` : `meta[name="${e}"]`;
    let o = document.querySelector(r);
    (o ||
      ((o = document.createElement("meta")),
      o.setAttribute(n ? "property" : "name", e),
      document.head.appendChild(o)),
      o.setAttribute("content", t));
  },
  hn = (e, t = !1) => {
    var r;
    const n = t ? `meta[property="${e}"]` : `meta[name="${e}"]`;
    (r = document.querySelector(n)) == null || r.remove();
  },
  Oc = (e) => {
    g.useEffect(() => {
      const t = Go(e),
        n = Nc(t);
      ((document.title = t.title),
        te("description", t.description),
        te("author", "Mayank Dev"),
        te("keywords", t.keywords.join(", ")),
        te("robots", t.robots));
      let r = document.querySelector('link[rel="canonical"]');
      (t.canonicalUrl &&
        !r &&
        ((r = document.createElement("link")),
        (r.rel = "canonical"),
        document.head.appendChild(r)),
        t.canonicalUrl && r ? (r.href = t.canonicalUrl) : r && r.remove(),
        te("og:type", t.ogType, !0),
        te("og:title", t.title, !0),
        te("og:description", t.description, !0),
        te("og:image", t.ogImage, !0),
        te("og:image:alt", t.ogImageAlt, !0),
        te("og:site_name", en, !0),
        t.canonicalUrl ? te("og:url", t.canonicalUrl, !0) : hn("og:url", !0),
        te("twitter:card", "summary_large_image"),
        te("twitter:site", Pr),
        te("twitter:creator", Pr),
        te("twitter:title", t.title),
        te("twitter:description", t.description),
        te("twitter:image", t.ogImage),
        te("twitter:image:alt", t.ogImageAlt),
        hn("article:published_time", !0),
        hn("article:modified_time", !0),
        t.ogType === "article" &&
          t.publishedTime &&
          te("article:published_time", t.publishedTime, !0),
        t.ogType === "article" &&
          t.modifiedTime &&
          te("article:modified_time", t.modifiedTime, !0));
      const o = document.querySelector("#structured-data");
      if (n) {
        const s = o || document.createElement("script");
        ((s.id = "structured-data"),
          (s.type = "application/ld+json"),
          (s.textContent = JSON.stringify(n)),
          o || document.head.appendChild(s));
      } else o && o.remove();
    }, [e]);
  },
  Mc = () => {
    const { pathname: e } = qt();
    return (Oc(e), null);
  },
  jn = ["press", "nav", "open", "close", "success"],
  Dc = 2500,
  vt = "/sounds/ui/click.wav",
  _r = {
    press: {
      src: vt,
      gain: 0.11,
      playbackRate: 1,
      playbackRateJitter: 0,
      throttleMs: 40,
    },
    nav: {
      src: vt,
      gain: 0.11,
      playbackRate: 1,
      playbackRateJitter: 0,
      throttleMs: 40,
    },
    open: {
      src: vt,
      gain: 0.11,
      playbackRate: 1,
      playbackRateJitter: 0,
      throttleMs: 40,
    },
    close: {
      src: vt,
      gain: 0.11,
      playbackRate: 1,
      playbackRateJitter: 0,
      throttleMs: 40,
    },
    success: {
      src: vt,
      gain: 0.11,
      playbackRate: 1,
      playbackRateJitter: 0,
      throttleMs: 40,
    },
  },
  $c = new Set([...jn, "off"]),
  Ir = typeof window != "undefined";
class zc {
  constructor() {
    Ae(this, "arrayBuffers", new Map());
    Ae(this, "audioContext", null);
    Ae(this, "audioContextCtor", null);
    Ae(this, "buffers", new Map());
    Ae(this, "lastPlayedAt", new Map());
    Ae(this, "navigationIntentExpiresAt", 0);
    Ae(this, "lastRequestedAt", 0);
    Ae(this, "unlocked", !1);
    var n, r;
    if (!Ir) return;
    const t = window;
    this.audioContextCtor =
      (r = (n = window.AudioContext) != null ? n : t.webkitAudioContext) != null
        ? r
        : null;
  }
  prime() {
    this.isSupported() &&
      jn.forEach((t) => {
        this.fetchArrayBuffer(t);
      });
  }
  unlock() {
    return Q(this, null, function* () {
      if (!this.isSupported()) return !1;
      const t = this.getAudioContext();
      if (!t) return !1;
      if (t.state === "suspended")
        try {
          yield t.resume();
        } catch (n) {
          return !1;
        }
      return (
        (this.unlocked = t.state === "running"),
        this.unlocked &&
          jn.forEach((n) => {
            this.decodeBuffer(n);
          }),
        this.unlocked
      );
    });
  }
  play(t) {
    return Q(this, null, function* () {
      var i;
      if (
        !this.isSupported() ||
        t === "off" ||
        document.hidden ||
        ((this.lastRequestedAt = performance.now()),
        !this.unlocked && !(yield this.unlock()))
      )
        return;
      const n = this.getAudioContext();
      if (!n) return;
      if (n.state === "suspended")
        try {
          yield n.resume();
        } catch (a) {
          return;
        }
      if (n.state !== "running") return;
      const r = _r[t],
        o = performance.now(),
        s = (i = this.lastPlayedAt.get(t)) != null ? i : 0;
      if (!(o - s < r.throttleMs)) {
        this.lastPlayedAt.set(t, o);
        try {
          const a = yield this.decodeBuffer(t);
          if (document.hidden) return;
          const l = n.createBufferSource(),
            d = n.createGain();
          ((l.buffer = a),
            (l.playbackRate.value =
              r.playbackRate + this.getJitter(r.playbackRateJitter)),
            (d.gain.value = Math.max(0, r.gain + this.getJitter(0.01))),
            l.connect(d),
            d.connect(n.destination),
            l.start(),
            l.addEventListener(
              "ended",
              () => {
                (l.disconnect(), d.disconnect());
              },
              { once: !0 },
            ));
        } catch (a) {}
      }
    });
  }
  markNavigationIntent() {
    this.isSupported() &&
      (this.navigationIntentExpiresAt = performance.now() + Dc);
  }
  consumeNavigationIntent() {
    if (!this.isSupported()) return !1;
    const t = performance.now() <= this.navigationIntentExpiresAt;
    return ((this.navigationIntentExpiresAt = 0), t);
  }
  getLastRequestedAt() {
    return this.lastRequestedAt;
  }
  decodeBuffer(t) {
    return Q(this, null, function* () {
      const n = this.buffers.get(t);
      if (n) return n;
      const r = this.fetchArrayBuffer(t).then((o) =>
        Q(this, null, function* () {
          const s = this.getAudioContext();
          if (!s) throw new Error("Audio context unavailable");
          return s.decodeAudioData(o.slice(0));
        }),
      );
      return (this.buffers.set(t, r), r);
    });
  }
  fetchArrayBuffer(t) {
    const n = this.arrayBuffers.get(t);
    if (n) return n;
    const r = fetch(_r[t].src).then((o) =>
      Q(this, null, function* () {
        if (!o.ok) throw new Error(`Unable to load sound cue: ${t}`);
        return o.arrayBuffer();
      }),
    );
    return (this.arrayBuffers.set(t, r), r);
  }
  getAudioContext() {
    return this.isSupported()
      ? (this.audioContext || (this.audioContext = new this.audioContextCtor()),
        this.audioContext)
      : null;
  }
  getJitter(t) {
    return (Math.random() * 2 - 1) * t;
  }
  isSupported() {
    return Ir && this.audioContextCtor !== null;
  }
}
const ut = new zc(),
  gn = (e) =>
    e instanceof Element
      ? e.closest(
          '[data-sound], button, a[href], [role="button"], input[type="submit"], input[type="button"]',
        )
      : null,
  Nr = (e) => {
    const t = Ko(e);
    if (t) return t;
    if (
      e.closest(
        'button, [role="button"], input[type="submit"], input[type="button"]',
      )
    )
      return "press";
    const n = e.closest("a[href]");
    if (!n) return null;
    const r = n.getAttribute("href");
    return r
      ? r.startsWith("#") || r.startsWith("mailto:") || r.startsWith("tel:")
        ? "press"
        : new URL(n.href, window.location.href).origin ===
            window.location.origin
          ? null
          : "press"
      : null;
  },
  Ko = (e) => {
    var r;
    const t = e.closest("[data-sound]");
    if (!t) return null;
    const n = (r = t.dataset.sound) != null ? r : null;
    return Uc(n) ? n : null;
  },
  yn = (e) =>
    !!e.closest('button:disabled, input:disabled, [aria-disabled="true"]'),
  jr = (e, t) => {
    const n = e.closest("a[href]");
    if (
      !n ||
      Ko(n) === "off" ||
      (n.target && n.target !== "_self") ||
      n.hasAttribute("download") ||
      (t && Fc(t)) ||
      (t && "button" in t && t.button !== 0)
    )
      return !1;
    const r = n.getAttribute("href");
    return !r ||
      r.startsWith("#") ||
      r.startsWith("mailto:") ||
      r.startsWith("tel:")
      ? !1
      : new URL(n.href, window.location.href).origin === window.location.origin;
  },
  Or = () => {
    ut.markNavigationIntent();
  },
  Bc = () => ut.consumeNavigationIntent(),
  vn = (e) => ut.play(e),
  Mr = () => ut.getLastRequestedAt(),
  Vc = () => {
    ut.prime();
  },
  Dr = () => ut.unlock(),
  Fc = (e) => e.altKey || e.ctrlKey || e.metaKey || e.shiftKey,
  Uc = (e) => e !== null && $c.has(e),
  Wc = 80,
  Hc = (e, t) => {
    if (e.repeat) return !1;
    const n = !!t.closest(
        'button, [role="button"], input[type="submit"], input[type="button"]',
      ),
      r = !!t.closest("a[href]");
    return e.key === "Enter"
      ? n || r
      : (e.key === " " || e.key === "Spacebar") && n;
  },
  Yc = () => {
    const e = qt(),
      t = g.useRef(`${e.pathname}${e.search}${e.hash}`);
    return (
      g.useEffect(() => {
        Vc();
      }, []),
      g.useEffect(() => {
        const n = (s) => {
            if (s.button !== 0 || s.defaultPrevented) return;
            const i = gn(s.target);
            (i && yn(i)) || Dr();
          },
          r = (s) => {
            if (s.button !== 0 || s.defaultPrevented) return;
            const i = gn(s.target);
            if (i && yn(i)) return;
            if (i && jr(i, s)) {
              Or();
              return;
            }
            const a = i ? Nr(i) : "press";
            if (!a || a === "off") return;
            const l = Mr();
            (a === "press" && performance.now() - l < Wc) ||
              queueMicrotask(() => {
                Mr() > l || vn(a);
              });
          },
          o = (s) => {
            if (s.defaultPrevented) return;
            const i = gn(s.target);
            if (!i || yn(i) || !Hc(s, i)) return;
            if ((Dr(), jr(i, s))) {
              Or();
              return;
            }
            const a = Nr(i);
            a && a !== "off" && vn(a);
          };
        return (
          document.addEventListener("pointerdown", n, !0),
          document.addEventListener("click", r, !0),
          document.addEventListener("keydown", o, !0),
          () => {
            (document.removeEventListener("pointerdown", n, !0),
              document.removeEventListener("click", r, !0),
              document.removeEventListener("keydown", o, !0));
          }
        );
      }, []),
      g.useEffect(() => {
        const n = `${e.pathname}${e.search}${e.hash}`;
        t.current !== n && ((t.current = n), Bc() && vn("nav"));
      }, [e.hash, e.pathname, e.search]),
      null
    );
  },
  qc = () => {
    if (typeof window != "undefined" && "performance" in window) {
      const e = window.performance.getEntriesByType("navigation")[0];
      if (e) {
        const t = {
          dns: e.domainLookupEnd - e.domainLookupStart,
          tcp: e.connectEnd - e.connectStart,
          request: e.responseStart - e.requestStart,
          response: e.responseEnd - e.responseStart,
          domLoading: e.domContentLoadedEventStart - e.fetchStart,
          domComplete: e.domComplete - e.fetchStart,
        };
        Object.entries(t).forEach(([n, r]) => {});
      }
    }
  },
  Xc = () => {
    if (typeof window != "undefined") {
      setTimeout(qc, 2e3);
      const e = () => {
        Math.round(
          (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
            100,
        );
      };
      window.addEventListener("scroll", e, { passive: !0 });
      const t = () => {};
      (window.addEventListener("beforeunload", t),
        window.addEventListener("pagehide", t));
    }
  };
var On,
  Zo = -1,
  ft = function (e) {
    addEventListener(
      "pageshow",
      function (t) {
        t.persisted && ((Zo = t.timeStamp), e(t));
      },
      !0,
    );
  },
  Hn = function () {
    var e =
      self.performance &&
      performance.getEntriesByType &&
      performance.getEntriesByType("navigation")[0];
    if (e && e.responseStart > 0 && e.responseStart < performance.now())
      return e;
  },
  tn = function () {
    var e = Hn();
    return (e && e.activationStart) || 0;
  },
  xe = function (e, t) {
    var n = Hn(),
      r = "navigate";
    return (
      Zo >= 0
        ? (r = "back-forward-cache")
        : n &&
          (document.prerendering || tn() > 0
            ? (r = "prerender")
            : document.wasDiscarded
              ? (r = "restore")
              : n.type && (r = n.type.replace(/_/g, "-"))),
      {
        name: e,
        value: t === void 0 ? -1 : t,
        rating: "good",
        delta: 0,
        entries: [],
        id: "v4-"
          .concat(Date.now(), "-")
          .concat(Math.floor(8999999999999 * Math.random()) + 1e12),
        navigationType: r,
      }
    );
  },
  At = function (e, t, n) {
    try {
      if (PerformanceObserver.supportedEntryTypes.includes(e)) {
        var r = new PerformanceObserver(function (o) {
          Promise.resolve().then(function () {
            t(o.getEntries());
          });
        });
        return (
          r.observe(Object.assign({ type: e, buffered: !0 }, n || {})),
          r
        );
      }
    } catch (o) {}
  },
  Se = function (e, t, n, r) {
    var o, s;
    return function (i) {
      t.value >= 0 &&
        (i || r) &&
        ((s = t.value - (o || 0)) || o === void 0) &&
        ((o = t.value),
        (t.delta = s),
        (t.rating = (function (a, l) {
          return a > l[1] ? "poor" : a > l[0] ? "needs-improvement" : "good";
        })(t.value, n)),
        e(t));
    };
  },
  Yn = function (e) {
    requestAnimationFrame(function () {
      return requestAnimationFrame(function () {
        return e();
      });
    });
  },
  nn = function (e) {
    document.addEventListener("visibilitychange", function () {
      document.visibilityState === "hidden" && e();
    });
  },
  qn = function (e) {
    var t = !1;
    return function () {
      t || (e(), (t = !0));
    };
  },
  rt = -1,
  $r = function () {
    return document.visibilityState !== "hidden" || document.prerendering
      ? 1 / 0
      : 0;
  },
  Wt = function (e) {
    document.visibilityState === "hidden" &&
      rt > -1 &&
      ((rt = e.type === "visibilitychange" ? e.timeStamp : 0), Gc());
  },
  zr = function () {
    (addEventListener("visibilitychange", Wt, !0),
      addEventListener("prerenderingchange", Wt, !0));
  },
  Gc = function () {
    (removeEventListener("visibilitychange", Wt, !0),
      removeEventListener("prerenderingchange", Wt, !0));
  },
  Jo = function () {
    return (
      rt < 0 &&
        ((rt = $r()),
        zr(),
        ft(function () {
          setTimeout(function () {
            ((rt = $r()), zr());
          }, 0);
        })),
      {
        get firstHiddenTime() {
          return rt;
        },
      }
    );
  },
  rn = function (e) {
    document.prerendering
      ? addEventListener(
          "prerenderingchange",
          function () {
            return e();
          },
          !0,
        )
      : e();
  },
  Br = [1800, 3e3],
  Qo = function (e, t) {
    ((t = t || {}),
      rn(function () {
        var n,
          r = Jo(),
          o = xe("FCP"),
          s = At("paint", function (i) {
            i.forEach(function (a) {
              a.name === "first-contentful-paint" &&
                (s.disconnect(),
                a.startTime < r.firstHiddenTime &&
                  ((o.value = Math.max(a.startTime - tn(), 0)),
                  o.entries.push(a),
                  n(!0)));
            });
          });
        s &&
          ((n = Se(e, o, Br, t.reportAllChanges)),
          ft(function (i) {
            ((o = xe("FCP")),
              (n = Se(e, o, Br, t.reportAllChanges)),
              Yn(function () {
                ((o.value = performance.now() - i.timeStamp), n(!0));
              }));
          }));
      }));
  },
  Vr = [0.1, 0.25],
  Kc = function (e, t) {
    ((t = t || {}),
      Qo(
        qn(function () {
          var n,
            r = xe("CLS", 0),
            o = 0,
            s = [],
            i = function (l) {
              (l.forEach(function (d) {
                if (!d.hadRecentInput) {
                  var u = s[0],
                    f = s[s.length - 1];
                  o &&
                  d.startTime - f.startTime < 1e3 &&
                  d.startTime - u.startTime < 5e3
                    ? ((o += d.value), s.push(d))
                    : ((o = d.value), (s = [d]));
                }
              }),
                o > r.value && ((r.value = o), (r.entries = s), n()));
            },
            a = At("layout-shift", i);
          a &&
            ((n = Se(e, r, Vr, t.reportAllChanges)),
            nn(function () {
              (i(a.takeRecords()), n(!0));
            }),
            ft(function () {
              ((o = 0),
                (r = xe("CLS", 0)),
                (n = Se(e, r, Vr, t.reportAllChanges)),
                Yn(function () {
                  return n();
                }));
            }),
            setTimeout(n, 0));
        }),
      ));
  },
  es = 0,
  wn = 1 / 0,
  Ot = 0,
  Zc = function (e) {
    e.forEach(function (t) {
      t.interactionId &&
        ((wn = Math.min(wn, t.interactionId)),
        (Ot = Math.max(Ot, t.interactionId)),
        (es = Ot ? (Ot - wn) / 7 + 1 : 0));
    });
  },
  ts = function () {
    return On ? es : performance.interactionCount || 0;
  },
  Jc = function () {
    "interactionCount" in performance ||
      On ||
      (On = At("event", Zc, {
        type: "event",
        buffered: !0,
        durationThreshold: 0,
      }));
  },
  ye = [],
  zt = new Map(),
  ns = 0,
  Qc = function () {
    var e = Math.min(ye.length - 1, Math.floor((ts() - ns) / 50));
    return ye[e];
  },
  ed = [],
  td = function (e) {
    if (
      (ed.forEach(function (o) {
        return o(e);
      }),
      e.interactionId || e.entryType === "first-input")
    ) {
      var t = ye[ye.length - 1],
        n = zt.get(e.interactionId);
      if (n || ye.length < 10 || e.duration > t.latency) {
        if (n)
          e.duration > n.latency
            ? ((n.entries = [e]), (n.latency = e.duration))
            : e.duration === n.latency &&
              e.startTime === n.entries[0].startTime &&
              n.entries.push(e);
        else {
          var r = { id: e.interactionId, latency: e.duration, entries: [e] };
          (zt.set(r.id, r), ye.push(r));
        }
        (ye.sort(function (o, s) {
          return s.latency - o.latency;
        }),
          ye.length > 10 &&
            ye.splice(10).forEach(function (o) {
              return zt.delete(o.id);
            }));
      }
    }
  },
  rs = function (e) {
    var t = self.requestIdleCallback || self.setTimeout,
      n = -1;
    return (
      (e = qn(e)),
      document.visibilityState === "hidden" ? e() : ((n = t(e)), nn(e)),
      n
    );
  },
  Fr = [200, 500],
  nd = function (e, t) {
    "PerformanceEventTiming" in self &&
      "interactionId" in PerformanceEventTiming.prototype &&
      ((t = t || {}),
      rn(function () {
        var n;
        Jc();
        var r,
          o = xe("INP"),
          s = function (a) {
            rs(function () {
              a.forEach(td);
              var l = Qc();
              l &&
                l.latency !== o.value &&
                ((o.value = l.latency), (o.entries = l.entries), r());
            });
          },
          i = At("event", s, {
            durationThreshold:
              (n = t.durationThreshold) !== null && n !== void 0 ? n : 40,
          });
        ((r = Se(e, o, Fr, t.reportAllChanges)),
          i &&
            (i.observe({ type: "first-input", buffered: !0 }),
            nn(function () {
              (s(i.takeRecords()), r(!0));
            }),
            ft(function () {
              ((ns = ts()),
                (ye.length = 0),
                zt.clear(),
                (o = xe("INP")),
                (r = Se(e, o, Fr, t.reportAllChanges)));
            })));
      }));
  },
  Ur = [2500, 4e3],
  bn = {},
  rd = function (e, t) {
    ((t = t || {}),
      rn(function () {
        var n,
          r = Jo(),
          o = xe("LCP"),
          s = function (l) {
            (t.reportAllChanges || (l = l.slice(-1)),
              l.forEach(function (d) {
                d.startTime < r.firstHiddenTime &&
                  ((o.value = Math.max(d.startTime - tn(), 0)),
                  (o.entries = [d]),
                  n());
              }));
          },
          i = At("largest-contentful-paint", s);
        if (i) {
          n = Se(e, o, Ur, t.reportAllChanges);
          var a = qn(function () {
            bn[o.id] ||
              (s(i.takeRecords()), i.disconnect(), (bn[o.id] = !0), n(!0));
          });
          (["keydown", "click"].forEach(function (l) {
            addEventListener(
              l,
              function () {
                return rs(a);
              },
              { once: !0, capture: !0 },
            );
          }),
            nn(a),
            ft(function (l) {
              ((o = xe("LCP")),
                (n = Se(e, o, Ur, t.reportAllChanges)),
                Yn(function () {
                  ((o.value = performance.now() - l.timeStamp),
                    (bn[o.id] = !0),
                    n(!0));
                }));
            }));
        }
      }));
  },
  Wr = [800, 1800],
  od = function e(t) {
    document.prerendering
      ? rn(function () {
          return e(t);
        })
      : document.readyState !== "complete"
        ? addEventListener(
            "load",
            function () {
              return e(t);
            },
            !0,
          )
        : setTimeout(t, 0);
  },
  sd = function (e, t) {
    t = t || {};
    var n = xe("TTFB"),
      r = Se(e, n, Wr, t.reportAllChanges);
    od(function () {
      var o = Hn();
      o &&
        ((n.value = Math.max(o.responseStart - tn(), 0)),
        (n.entries = [o]),
        r(!0),
        ft(function () {
          ((n = xe("TTFB", 0)), (r = Se(e, n, Wr, t.reportAllChanges))(!0));
        }));
    });
  };
const id = () => {
  (Kc(wt), nd(wt), Qo(wt), rd(wt), sd(wt));
};
function wt(e) {
  typeof window != "undefined" &&
    window.va &&
    window.va("track", "Web Vitals", {
      metric: e.name,
      value: e.value,
      id: e.id,
    });
}
const ad = g.lazy(() => import("../Pages/HomePage")),
  ld = g.lazy(() => import("../Pages/ProjectsPage")),
  cd = g.lazy(() => import("../Pages/LifePage")),
  dd = g.lazy(() => import("../Pages/JourneyPage")),
  ud = g.lazy(() => import("../Pages/ContactPage")),
  fd = g.lazy(() => import("../Pages/BlogPage")),
  pd = g.lazy(() => import("../Pages/BlogPostPage")),
  gd = g.lazy(() => import("../Pages/HactiqCaseStudy")),
  yd = g.lazy(() => import("../Pages/FinEaseCaseStudy")),
  sd2 = g.lazy(() => import("../Pages/ShiqCaseStudy")),
  vd = g.lazy(() => import("../Pages/VaultDLCaseStudy")),
  Sd = g.lazy(() => import("../Pages/NotFoundPage")),
  Ed = g.lazy(() => import("../Pages/PlaygroundPage"));
class Ad extends x.Component {
  constructor(t) {
    (super(t), (this.state = { hasError: !1, error: null }));
  }
  static getDerivedStateFromError(t) {
    return { hasError: !0, error: t };
  }
  componentDidCatch(t, n) {
    console.error("App Error:", t, n);
  }
  render() {
    return this.state.hasError
      ? m.jsx("div", {
          className: "min-h-screen flex items-center justify-center bg-gray-50",
          children: m.jsxs("div", {
            className: "text-center p-8",
            children: [
              m.jsx("h1", {
                className: "text-2xl font-bold text-gray-900 mb-4",
                children: "Something went wrong",
              }),
              m.jsx("p", {
                className: "text-gray-600 mb-6",
                children: "Please refresh the page or try again later.",
              }),
              m.jsx("button", {
                onClick: () => window.location.reload(),
                className:
                  "px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700",
                children: "Refresh Page",
              }),
            ],
          }),
        })
      : this.props.children;
  }
}
const kd = () => {
    const e = qt();
    return m.jsx(Ec, {
      location: e,
      children: m.jsxs(ks, {
        location: e,
        children: [
          m.jsx(re, { path: P.home, element: m.jsx(ad, {}) }),
          m.jsx(re, { path: P.projects, element: m.jsx(ld, {}) }),
          m.jsx(re, { path: P.life, element: m.jsx(cd, {}) }),          m.jsx(re, { path: P.hactiq, element: m.jsx(gd, {}) }),
          m.jsx(re, { path: P.finease, element: m.jsx(yd, {}) }),
          m.jsx(re, { path: P.shiq, element: m.jsx(sd2, {}) }),
          m.jsx(re, { path: P.vaultdl, element: m.jsx(vd, {}) }),
          m.jsx(re, { path: P.journey, element: m.jsx(dd, {}) }),
          m.jsx(re, { path: P.contact, element: m.jsx(ud, {}) }),
          m.jsx(re, { path: P.blog, element: m.jsx(fd, {}) }),
          m.jsx(re, { path: "/blog/:slug", element: m.jsx(pd, {}) }),          m.jsx(re, { path: P.playground, element: m.jsx(Ed, {}) }),
          m.jsx(re, { path: P.notFound, element: m.jsx(Sd, {}) }),
        ],
      }),
    });
  },
  Cd = () => (
    g.useEffect(() => {
      (Xc(), id(), (window.__APP_HYDRATED__ = !0));
    }, []),
    m.jsx(ec, {
      children: m.jsx(Tc, {
        children: m.jsxs(Ad, {
          children: [
            m.jsx(SEOManager, {}),
            m.jsx(Oi, {}),
            m.jsx(pa, {}),
            m.jsx(Cc, {}),
            m.jsxs(m.Fragment, {
              children: [
                m.jsx(Yc, {}),
                m.jsx(xc, {}),
                m.jsx(Mc, {}),
                m.jsx(kd, {}),
              ],
            }),
            m.jsx(uc, {}),
            m.jsx(bc, {}),
          ],
        }),
      }),
    })
  );
const AppRoutes = kd;
const AppShell = Cd;

export { Ke as c, vn as p, AppRoutes };
export default AppShell;



