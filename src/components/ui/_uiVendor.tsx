var Xe = Object.defineProperty,
  ze = Object.defineProperties;
var Je = Object.getOwnPropertyDescriptors;
var Z = Object.getOwnPropertySymbols;
var ve = Object.prototype.hasOwnProperty,
  Ee = Object.prototype.propertyIsEnumerable;
var me = (e, t, r) =>
    t in e
      ? Xe(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  y = (e, t) => {
    for (var r in t || (t = {})) ve.call(t, r) && me(e, r, t[r]);
    if (Z) for (var r of Z(t)) Ee.call(t, r) && me(e, r, t[r]);
    return e;
  },
  g = (e, t) => ze(e, Je(t));
var N = (e, t) => {
  var r = {};
  for (var n in e) ve.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && Z)
    for (var n of Z(e)) t.indexOf(n) < 0 && Ee.call(e, n) && (r[n] = e[n]);
  return r;
};
import {
  r as Ze,
  a as s,
  R as W,
  b as Pe,
  v as Ge,
  c as Qe,
} from "./_reactVendor";
var re = { exports: {} },
  H = {};
var ye;
function et() {
  if (ye) return H;
  ye = 1;
  var e = Ze(),
    t = Symbol.for("react.element"),
    r = Symbol.for("react.fragment"),
    n = Object.prototype.hasOwnProperty,
    o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(c, l, d) {
    var a,
      p = {},
      f = null,
      x = null;
    (d !== void 0 && (f = "" + d),
      l.key !== void 0 && (f = "" + l.key),
      l.ref !== void 0 && (x = l.ref));
    for (a in l) n.call(l, a) && !i.hasOwnProperty(a) && (p[a] = l[a]);
    if (c && c.defaultProps)
      for (a in ((l = c.defaultProps), l)) p[a] === void 0 && (p[a] = l[a]);
    return {
      $$typeof: t,
      type: c,
      key: f,
      ref: x,
      props: p,
      _owner: o.current,
    };
  }
  return ((H.Fragment = r), (H.jsx = u), (H.jsxs = u), H);
}
var we;
function tt() {
  return (we || ((we = 1), (re.exports = et())), re.exports);
}
var v = tt();
function I(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function (o) {
    if ((e == null || e(o), r === !1 || !o.defaultPrevented))
      return t == null ? void 0 : t(o);
  };
}
function Te(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function ue(...e) {
  return (t) => {
    let r = !1;
    const n = e.map((o) => {
      const i = Te(o, t);
      return (!r && typeof i == "function" && (r = !0), i);
    });
    if (r)
      return () => {
        for (let o = 0; o < n.length; o++) {
          const i = n[o];
          typeof i == "function" ? i() : Te(e[o], null);
        }
      };
  };
}
function V(...e) {
  return s.useCallback(ue(...e), e);
}
function be(e, t = []) {
  let r = [];
  function n(i, u) {
    const c = s.createContext(u),
      l = r.length;
    r = [...r, u];
    const d = (p) => {
      var C;
      const m = p,
        { scope: f, children: x } = m,
        P = N(m, ["scope", "children"]),
        E = ((C = f == null ? void 0 : f[e]) == null ? void 0 : C[l]) || c,
        R = s.useMemo(() => P, Object.values(P));
      return v.jsx(E.Provider, { value: R, children: x });
    };
    d.displayName = i + "Provider";
    function a(p, f) {
      var E;
      const x = ((E = f == null ? void 0 : f[e]) == null ? void 0 : E[l]) || c,
        P = s.useContext(x);
      if (P) return P;
      if (u !== void 0) return u;
      throw new Error(`\`${p}\` must be used within \`${i}\``);
    }
    return [d, a];
  }
  const o = () => {
    const i = r.map((u) => s.createContext(u));
    return function (c) {
      const l = (c == null ? void 0 : c[e]) || i;
      return s.useMemo(
        () => ({ [`__scope${e}`]: g(y({}, c), { [e]: l }) }),
        [c, l],
      );
    };
  };
  return ((o.scopeName = e), [n, nt(o, ...t)]);
}
function nt(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const r = () => {
    const n = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (i) {
      const u = n.reduce((c, { useScope: l, scopeName: d }) => {
        const p = l(i)[`__scope${d}`];
        return y(y({}, c), p);
      }, {});
      return s.useMemo(() => ({ [`__scope${t.scopeName}`]: u }), [u]);
    };
  };
  return ((r.scopeName = t.scopeName), r);
}
function he(e) {
  const t = rt(e),
    r = s.forwardRef((n, o) => {
      const d = n,
        { children: i } = d,
        u = N(d, ["children"]),
        c = s.Children.toArray(i),
        l = c.find(st);
      if (l) {
        const a = l.props.children,
          p = c.map((f) =>
            f === l
              ? s.Children.count(a) > 1
                ? s.Children.only(null)
                : s.isValidElement(a)
                  ? a.props.children
                  : null
              : f,
          );
        return v.jsx(
          t,
          g(y({}, u), {
            ref: o,
            children: s.isValidElement(a) ? s.cloneElement(a, void 0, p) : null,
          }),
        );
      }
      return v.jsx(t, g(y({}, u), { ref: o, children: i }));
    });
  return ((r.displayName = `${e}.Slot`), r);
}
function rt(e) {
  const t = s.forwardRef((r, n) => {
    const u = r,
      { children: o } = u,
      i = N(u, ["children"]);
    if (s.isValidElement(o)) {
      const c = at(o),
        l = it(i, o.props);
      return (
        o.type !== s.Fragment && (l.ref = n ? ue(n, c) : c),
        s.cloneElement(o, l)
      );
    }
    return s.Children.count(o) > 1 ? s.Children.only(null) : null;
  });
  return ((t.displayName = `${e}.SlotClone`), t);
}
var ot = Symbol("radix.slottable");
function st(e) {
  return (
    s.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === ot
  );
}
function it(e, t) {
  const r = y({}, t);
  for (const n in t) {
    const o = e[n],
      i = t[n];
    /^on[A-Z]/.test(n)
      ? o && i
        ? (r[n] = (...c) => {
            const l = i(...c);
            return (o(...c), l);
          })
        : o && (r[n] = o)
      : n === "style"
        ? (r[n] = y(y({}, o), i))
        : n === "className" && (r[n] = [o, i].filter(Boolean).join(" "));
  }
  return y(y({}, e), r);
}
function at(e) {
  var n, o;
  let t =
      (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : n.get,
    r = t && "isReactWarning" in t && t.isReactWarning;
  return r
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (r = t && "isReactWarning" in t && t.isReactWarning),
      r ? e.props.ref : e.props.ref || e.ref);
}
function ct(e) {
  const t = e + "CollectionProvider",
    [r, n] = be(t),
    [o, i] = r(t, { collectionRef: { current: null }, itemMap: new Map() }),
    u = (E) => {
      const { scope: R, children: m } = E,
        C = W.useRef(null),
        w = W.useRef(new Map()).current;
      return v.jsx(o, { scope: R, itemMap: w, collectionRef: C, children: m });
    };
  u.displayName = t;
  const c = e + "CollectionSlot",
    l = he(c),
    d = W.forwardRef((E, R) => {
      const { scope: m, children: C } = E,
        w = i(c, m),
        h = V(R, w.collectionRef);
      return v.jsx(l, { ref: h, children: C });
    });
  d.displayName = c;
  const a = e + "CollectionItemSlot",
    p = "data-radix-collection-item",
    f = he(a),
    x = W.forwardRef((E, R) => {
      const S = E,
        { scope: m, children: C } = S,
        w = N(S, ["scope", "children"]),
        h = W.useRef(null),
        _ = V(R, h),
        A = i(a, m);
      return (
        W.useEffect(
          () => (
            A.itemMap.set(h, y({ ref: h }, w)),
            () => {
              A.itemMap.delete(h);
            }
          ),
        ),
        v.jsx(f, { [p]: "", ref: _, children: C })
      );
    });
  x.displayName = a;
  function P(E) {
    const R = i(e + "CollectionConsumer", E);
    return W.useCallback(() => {
      const C = R.collectionRef.current;
      if (!C) return [];
      const w = Array.from(C.querySelectorAll(`[${p}]`));
      return Array.from(R.itemMap.values()).sort(
        (A, S) => w.indexOf(A.ref.current) - w.indexOf(S.ref.current),
      );
    }, [R.collectionRef, R.itemMap]);
  }
  return [{ Provider: u, Slot: d, ItemSlot: x }, P, n];
}
function ut(e) {
  const t = lt(e),
    r = s.forwardRef((n, o) => {
      const d = n,
        { children: i } = d,
        u = N(d, ["children"]),
        c = s.Children.toArray(i),
        l = c.find(ft);
      if (l) {
        const a = l.props.children,
          p = c.map((f) =>
            f === l
              ? s.Children.count(a) > 1
                ? s.Children.only(null)
                : s.isValidElement(a)
                  ? a.props.children
                  : null
              : f,
          );
        return v.jsx(
          t,
          g(y({}, u), {
            ref: o,
            children: s.isValidElement(a) ? s.cloneElement(a, void 0, p) : null,
          }),
        );
      }
      return v.jsx(t, g(y({}, u), { ref: o, children: i }));
    });
  return ((r.displayName = `${e}.Slot`), r);
}
function lt(e) {
  const t = s.forwardRef((r, n) => {
    const u = r,
      { children: o } = u,
      i = N(u, ["children"]);
    if (s.isValidElement(o)) {
      const c = mt(o),
        l = pt(i, o.props);
      return (
        o.type !== s.Fragment && (l.ref = n ? ue(n, c) : c),
        s.cloneElement(o, l)
      );
    }
    return s.Children.count(o) > 1 ? s.Children.only(null) : null;
  });
  return ((t.displayName = `${e}.SlotClone`), t);
}
var dt = Symbol("radix.slottable");
function ft(e) {
  return (
    s.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === dt
  );
}
function pt(e, t) {
  const r = y({}, t);
  for (const n in t) {
    const o = e[n],
      i = t[n];
    /^on[A-Z]/.test(n)
      ? o && i
        ? (r[n] = (...c) => {
            const l = i(...c);
            return (o(...c), l);
          })
        : o && (r[n] = o)
      : n === "style"
        ? (r[n] = y(y({}, o), i))
        : n === "className" && (r[n] = [o, i].filter(Boolean).join(" "));
  }
  return y(y({}, e), r);
}
function mt(e) {
  var n, o;
  let t =
      (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : n.get,
    r = t && "isReactWarning" in t && t.isReactWarning;
  return r
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (r = t && "isReactWarning" in t && t.isReactWarning),
      r ? e.props.ref : e.props.ref || e.ref);
}
var vt = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  M = vt.reduce((e, t) => {
    const r = ut(`Primitive.${t}`),
      n = s.forwardRef((o, i) => {
        const d = o,
          { asChild: u } = d,
          c = N(d, ["asChild"]),
          l = u ? r : t;
        return (
          typeof window != "undefined" && (window[Symbol.for("radix-ui")] = !0),
          v.jsx(l, g(y({}, c), { ref: i }))
        );
      });
    return ((n.displayName = `Primitive.${t}`), g(y({}, e), { [t]: n }));
  }, {});
function ge(e, t) {
  e && Pe.flushSync(() => e.dispatchEvent(t));
}
function $(e) {
  const t = s.useRef(e);
  return (
    s.useEffect(() => {
      t.current = e;
    }),
    s.useMemo(
      () =>
        (...r) => {
          var n;
          return (n = t.current) == null ? void 0 : n.call(t, ...r);
        },
      [],
    )
  );
}
function Et(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = $(e);
  s.useEffect(() => {
    const n = (o) => {
      o.key === "Escape" && r(o);
    };
    return (
      t.addEventListener("keydown", n, { capture: !0 }),
      () => t.removeEventListener("keydown", n, { capture: !0 })
    );
  }, [r, t]);
}
var yt = "DismissableLayer",
  se = "dismissableLayer.update",
  wt = "dismissableLayer.pointerDownOutside",
  Tt = "dismissableLayer.focusOutside",
  Ce,
  Se = s.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  Ne = s.forwardRef((e, t) => {
    var L;
    const S = e,
      {
        disableOutsidePointerEvents: r = !1,
        onEscapeKeyDown: n,
        onPointerDownOutside: o,
        onFocusOutside: i,
        onInteractOutside: u,
        onDismiss: c,
      } = S,
      l = N(S, [
        "disableOutsidePointerEvents",
        "onEscapeKeyDown",
        "onPointerDownOutside",
        "onFocusOutside",
        "onInteractOutside",
        "onDismiss",
      ]),
      d = s.useContext(Se),
      [a, p] = s.useState(null),
      f =
        (L = a == null ? void 0 : a.ownerDocument) != null
          ? L
          : globalThis == null
            ? void 0
            : globalThis.document,
      [, x] = s.useState({}),
      P = V(t, (b) => p(b)),
      E = Array.from(d.layers),
      [R] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1),
      m = E.indexOf(R),
      C = a ? E.indexOf(a) : -1,
      w = d.layersWithOutsidePointerEventsDisabled.size > 0,
      h = C >= m,
      _ = Ct((b) => {
        const D = b.target,
          F = [...d.branches].some((j) => j.contains(D));
        !h ||
          F ||
          (o == null || o(b),
          u == null || u(b),
          b.defaultPrevented || c == null || c());
      }, f),
      A = xt((b) => {
        const D = b.target;
        [...d.branches].some((j) => j.contains(D)) ||
          (i == null || i(b),
          u == null || u(b),
          b.defaultPrevented || c == null || c());
      }, f);
    return (
      Et((b) => {
        C === d.layers.size - 1 &&
          (n == null || n(b),
          !b.defaultPrevented && c && (b.preventDefault(), c()));
      }, f),
      s.useEffect(() => {
        if (a)
          return (
            r &&
              (d.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Ce = f.body.style.pointerEvents),
                (f.body.style.pointerEvents = "none")),
              d.layersWithOutsidePointerEventsDisabled.add(a)),
            d.layers.add(a),
            xe(),
            () => {
              r &&
                d.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (f.body.style.pointerEvents = Ce);
            }
          );
      }, [a, f, r, d]),
      s.useEffect(
        () => () => {
          a &&
            (d.layers.delete(a),
            d.layersWithOutsidePointerEventsDisabled.delete(a),
            xe());
        },
        [a, d],
      ),
      s.useEffect(() => {
        const b = () => x({});
        return (
          document.addEventListener(se, b),
          () => document.removeEventListener(se, b)
        );
      }, []),
      v.jsx(
        M.div,
        g(y({}, l), {
          ref: P,
          style: y(
            { pointerEvents: w ? (h ? "auto" : "none") : void 0 },
            e.style,
          ),
          onFocusCapture: I(e.onFocusCapture, A.onFocusCapture),
          onBlurCapture: I(e.onBlurCapture, A.onBlurCapture),
          onPointerDownCapture: I(
            e.onPointerDownCapture,
            _.onPointerDownCapture,
          ),
        }),
      )
    );
  });
Ne.displayName = yt;
var ht = "DismissableLayerBranch",
  _e = s.forwardRef((e, t) => {
    const r = s.useContext(Se),
      n = s.useRef(null),
      o = V(t, n);
    return (
      s.useEffect(() => {
        const i = n.current;
        if (i)
          return (
            r.branches.add(i),
            () => {
              r.branches.delete(i);
            }
          );
      }, [r.branches]),
      v.jsx(M.div, g(y({}, e), { ref: o }))
    );
  });
_e.displayName = ht;
function Ct(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = $(e),
    n = s.useRef(!1),
    o = s.useRef(() => {});
  return (
    s.useEffect(() => {
      const i = (c) => {
          if (c.target && !n.current) {
            let l = function () {
              Ae(wt, r, d, { discrete: !0 });
            };
            const d = { originalEvent: c };
            c.pointerType === "touch"
              ? (t.removeEventListener("click", o.current),
                (o.current = l),
                t.addEventListener("click", o.current, { once: !0 }))
              : l();
          } else t.removeEventListener("click", o.current);
          n.current = !1;
        },
        u = window.setTimeout(() => {
          t.addEventListener("pointerdown", i);
        }, 0);
      return () => {
        (window.clearTimeout(u),
          t.removeEventListener("pointerdown", i),
          t.removeEventListener("click", o.current));
      };
    }, [t, r]),
    { onPointerDownCapture: () => (n.current = !0) }
  );
}
function xt(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = $(e),
    n = s.useRef(!1);
  return (
    s.useEffect(() => {
      const o = (i) => {
        i.target &&
          !n.current &&
          Ae(Tt, r, { originalEvent: i }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
      );
    }, [t, r]),
    {
      onFocusCapture: () => (n.current = !0),
      onBlurCapture: () => (n.current = !1),
    }
  );
}
function xe() {
  const e = new CustomEvent(se);
  document.dispatchEvent(e);
}
function Ae(e, t, r, { discrete: n }) {
  const o = r.originalEvent.target,
    i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
  (t && o.addEventListener(e, t, { once: !0 }),
    n ? ge(o, i) : o.dispatchEvent(i));
}
var Rt = Ne,
  Pt = _e,
  Y = globalThis != null && globalThis.document ? s.useLayoutEffect : () => {},
  bt = "Portal",
  Ie = s.forwardRef((e, t) => {
    var l;
    const c = e,
      { container: r } = c,
      n = N(c, ["container"]),
      [o, i] = s.useState(!1);
    Y(() => i(!0), []);
    const u =
      r ||
      (o &&
        ((l = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : l.body));
    return u ? Ge.createPortal(v.jsx(M.div, g(y({}, n), { ref: t })), u) : null;
  });
Ie.displayName = bt;
function gt(e, t) {
  return s.useReducer((r, n) => {
    const o = t[r][n];
    return o != null ? o : r;
  }, e);
}
var Oe = (e) => {
  const { present: t, children: r } = e,
    n = St(t),
    o =
      typeof r == "function" ? r({ present: n.isPresent }) : s.Children.only(r),
    i = V(n.ref, Nt(o));
  return typeof r == "function" || n.isPresent
    ? s.cloneElement(o, { ref: i })
    : null;
};
Oe.displayName = "Presence";
function St(e) {
  const [t, r] = s.useState(),
    n = s.useRef(null),
    o = s.useRef(e),
    i = s.useRef("none"),
    u = e ? "mounted" : "unmounted",
    [c, l] = gt(u, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    s.useEffect(() => {
      const d = G(n.current);
      i.current = c === "mounted" ? d : "none";
    }, [c]),
    Y(() => {
      const d = n.current,
        a = o.current;
      if (a !== e) {
        const f = i.current,
          x = G(d);
        (e
          ? l("MOUNT")
          : x === "none" || (d == null ? void 0 : d.display) === "none"
            ? l("UNMOUNT")
            : l(a && f !== x ? "ANIMATION_OUT" : "UNMOUNT"),
          (o.current = e));
      }
    }, [e, l]),
    Y(() => {
      var d;
      if (t) {
        let a;
        const p = (d = t.ownerDocument.defaultView) != null ? d : window,
          f = (P) => {
            const R = G(n.current).includes(CSS.escape(P.animationName));
            if (P.target === t && R && (l("ANIMATION_END"), !o.current)) {
              const m = t.style.animationFillMode;
              ((t.style.animationFillMode = "forwards"),
                (a = p.setTimeout(() => {
                  t.style.animationFillMode === "forwards" &&
                    (t.style.animationFillMode = m);
                })));
            }
          },
          x = (P) => {
            P.target === t && (i.current = G(n.current));
          };
        return (
          t.addEventListener("animationstart", x),
          t.addEventListener("animationcancel", f),
          t.addEventListener("animationend", f),
          () => {
            (p.clearTimeout(a),
              t.removeEventListener("animationstart", x),
              t.removeEventListener("animationcancel", f),
              t.removeEventListener("animationend", f));
          }
        );
      } else l("ANIMATION_END");
    }, [t, l]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(c),
      ref: s.useCallback((d) => {
        ((n.current = d ? getComputedStyle(d) : null), r(d));
      }, []),
    }
  );
}
function G(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Nt(e) {
  var n, o;
  let t =
      (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : n.get,
    r = t && "isReactWarning" in t && t.isReactWarning;
  return r
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (r = t && "isReactWarning" in t && t.isReactWarning),
      r ? e.props.ref : e.props.ref || e.ref);
}
var _t = Qe[" useInsertionEffect ".trim().toString()] || Y;
function At({ prop: e, defaultProp: t, onChange: r = () => {}, caller: n }) {
  const [o, i, u] = It({ defaultProp: t, onChange: r }),
    c = e !== void 0,
    l = c ? e : o;
  {
    const a = s.useRef(e !== void 0);
    s.useEffect(() => {
      const p = a.current;
      (p !== c &&
        console.warn(
          `${n} is changing from ${p ? "controlled" : "uncontrolled"} to ${c ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
        ),
        (a.current = c));
    }, [c, n]);
  }
  const d = s.useCallback(
    (a) => {
      var p;
      if (c) {
        const f = Ot(a) ? a(e) : a;
        f !== e && ((p = u.current) == null || p.call(u, f));
      } else i(a);
    },
    [c, e, i, u],
  );
  return [l, d];
}
function It({ defaultProp: e, onChange: t }) {
  const [r, n] = s.useState(e),
    o = s.useRef(r),
    i = s.useRef(t);
  return (
    _t(() => {
      i.current = t;
    }, [t]),
    s.useEffect(() => {
      var u;
      o.current !== r &&
        ((u = i.current) == null || u.call(i, r), (o.current = r));
    }, [r, o]),
    [r, n, i]
  );
}
function Ot(e) {
  return typeof e == "function";
}
var Dt = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
  }),
  Lt = "VisuallyHidden",
  ee = s.forwardRef((e, t) =>
    v.jsx(M.span, g(y({}, e), { ref: t, style: y(y({}, Dt), e.style) })),
  );
ee.displayName = Lt;
var en = ee,
  le = "ToastProvider",
  [de, Mt, Ft] = ct("Toast"),
  [De] = be("Toast", [Ft]),
  [jt, te] = De(le),
  Le = (e) => {
    const {
        __scopeToast: t,
        label: r = "Notification",
        duration: n = 5e3,
        swipeDirection: o = "right",
        swipeThreshold: i = 50,
        children: u,
      } = e,
      [c, l] = s.useState(null),
      [d, a] = s.useState(0),
      p = s.useRef(!1),
      f = s.useRef(!1);
    return (
      r.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${le}\`. Expected non-empty \`string\`.`,
        ),
      v.jsx(de.Provider, {
        scope: t,
        children: v.jsx(jt, {
          scope: t,
          label: r,
          duration: n,
          swipeDirection: o,
          swipeThreshold: i,
          toastCount: d,
          viewport: c,
          onViewportChange: l,
          onToastAdd: s.useCallback(() => a((x) => x + 1), []),
          onToastRemove: s.useCallback(() => a((x) => x - 1), []),
          isFocusedToastEscapeKeyDownRef: p,
          isClosePausedRef: f,
          children: u,
        }),
      })
    );
  };
Le.displayName = le;
var Me = "ToastViewport",
  kt = ["F8"],
  ie = "toast.viewportPause",
  ae = "toast.viewportResume",
  Fe = s.forwardRef((e, t) => {
    const R = e,
      {
        __scopeToast: r,
        hotkey: n = kt,
        label: o = "Notifications ({hotkey})",
      } = R,
      i = N(R, ["__scopeToast", "hotkey", "label"]),
      u = te(Me, r),
      c = Mt(r),
      l = s.useRef(null),
      d = s.useRef(null),
      a = s.useRef(null),
      p = s.useRef(null),
      f = V(t, p, u.onViewportChange),
      x = n.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      P = u.toastCount > 0;
    (s.useEffect(() => {
      const m = (C) => {
        var h;
        n.length !== 0 &&
          n.every((_) => C[_] || C.code === _) &&
          ((h = p.current) == null || h.focus());
      };
      return (
        document.addEventListener("keydown", m),
        () => document.removeEventListener("keydown", m)
      );
    }, [n]),
      s.useEffect(() => {
        const m = l.current,
          C = p.current;
        if (P && m && C) {
          const w = () => {
              if (!u.isClosePausedRef.current) {
                const S = new CustomEvent(ie);
                (C.dispatchEvent(S), (u.isClosePausedRef.current = !0));
              }
            },
            h = () => {
              if (u.isClosePausedRef.current) {
                const S = new CustomEvent(ae);
                (C.dispatchEvent(S), (u.isClosePausedRef.current = !1));
              }
            },
            _ = (S) => {
              !m.contains(S.relatedTarget) && h();
            },
            A = () => {
              m.contains(document.activeElement) || h();
            };
          return (
            m.addEventListener("focusin", w),
            m.addEventListener("focusout", _),
            m.addEventListener("pointermove", w),
            m.addEventListener("pointerleave", A),
            window.addEventListener("blur", w),
            window.addEventListener("focus", h),
            () => {
              (m.removeEventListener("focusin", w),
                m.removeEventListener("focusout", _),
                m.removeEventListener("pointermove", w),
                m.removeEventListener("pointerleave", A),
                window.removeEventListener("blur", w),
                window.removeEventListener("focus", h));
            }
          );
        }
      }, [P, u.isClosePausedRef]));
    const E = s.useCallback(
      ({ tabbingDirection: m }) => {
        const w = c().map((h) => {
          const _ = h.ref.current,
            A = [_, ...Zt(_)];
          return m === "forwards" ? A : A.reverse();
        });
        return (m === "forwards" ? w.reverse() : w).flat();
      },
      [c],
    );
    return (
      s.useEffect(() => {
        const m = p.current;
        if (m) {
          const C = (w) => {
            var A, S, L;
            const h = w.altKey || w.ctrlKey || w.metaKey;
            if (w.key === "Tab" && !h) {
              const b = document.activeElement,
                D = w.shiftKey;
              if (w.target === m && D) {
                (A = d.current) == null || A.focus();
                return;
              }
              const U = E({ tabbingDirection: D ? "backwards" : "forwards" }),
                X = U.findIndex((T) => T === b);
              oe(U.slice(X + 1))
                ? w.preventDefault()
                : D
                  ? (S = d.current) == null || S.focus()
                  : (L = a.current) == null || L.focus();
            }
          };
          return (
            m.addEventListener("keydown", C),
            () => m.removeEventListener("keydown", C)
          );
        }
      }, [c, E]),
      v.jsxs(Pt, {
        ref: l,
        role: "region",
        "aria-label": o.replace("{hotkey}", x),
        tabIndex: -1,
        style: { pointerEvents: P ? void 0 : "none" },
        children: [
          P &&
            v.jsx(ce, {
              ref: d,
              onFocusFromOutsideViewport: () => {
                const m = E({ tabbingDirection: "forwards" });
                oe(m);
              },
            }),
          v.jsx(de.Slot, {
            scope: r,
            children: v.jsx(M.ol, g(y({ tabIndex: -1 }, i), { ref: f })),
          }),
          P &&
            v.jsx(ce, {
              ref: a,
              onFocusFromOutsideViewport: () => {
                const m = E({ tabbingDirection: "backwards" });
                oe(m);
              },
            }),
        ],
      })
    );
  });
Fe.displayName = Me;
var je = "ToastFocusProxy",
  ce = s.forwardRef((e, t) => {
    const u = e,
      { __scopeToast: r, onFocusFromOutsideViewport: n } = u,
      o = N(u, ["__scopeToast", "onFocusFromOutsideViewport"]),
      i = te(je, r);
    return v.jsx(
      ee,
      g(y({ tabIndex: 0 }, o), {
        ref: t,
        style: { position: "fixed" },
        onFocus: (c) => {
          var a;
          const l = c.relatedTarget;
          !((a = i.viewport) != null && a.contains(l)) && n();
        },
      }),
    );
  });
ce.displayName = je;
var q = "Toast",
  Wt = "toast.swipeStart",
  Vt = "toast.swipeMove",
  $t = "toast.swipeCancel",
  Ut = "toast.swipeEnd",
  ke = s.forwardRef((e, t) => {
    const d = e,
      { forceMount: r, open: n, defaultOpen: o, onOpenChange: i } = d,
      u = N(d, ["forceMount", "open", "defaultOpen", "onOpenChange"]),
      [c, l] = At({
        prop: n,
        defaultProp: o != null ? o : !0,
        onChange: i,
        caller: q,
      });
    return v.jsx(Oe, {
      present: r || c,
      children: v.jsx(
        Ht,
        g(y({ open: c }, u), {
          ref: t,
          onClose: () => l(!1),
          onPause: $(e.onPause),
          onResume: $(e.onResume),
          onSwipeStart: I(e.onSwipeStart, (a) => {
            a.currentTarget.setAttribute("data-swipe", "start");
          }),
          onSwipeMove: I(e.onSwipeMove, (a) => {
            const { x: p, y: f } = a.detail.delta;
            (a.currentTarget.setAttribute("data-swipe", "move"),
              a.currentTarget.style.setProperty(
                "--radix-toast-swipe-move-x",
                `${p}px`,
              ),
              a.currentTarget.style.setProperty(
                "--radix-toast-swipe-move-y",
                `${f}px`,
              ));
          }),
          onSwipeCancel: I(e.onSwipeCancel, (a) => {
            (a.currentTarget.setAttribute("data-swipe", "cancel"),
              a.currentTarget.style.removeProperty(
                "--radix-toast-swipe-move-x",
              ),
              a.currentTarget.style.removeProperty(
                "--radix-toast-swipe-move-y",
              ),
              a.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
              a.currentTarget.style.removeProperty(
                "--radix-toast-swipe-end-y",
              ));
          }),
          onSwipeEnd: I(e.onSwipeEnd, (a) => {
            const { x: p, y: f } = a.detail.delta;
            (a.currentTarget.setAttribute("data-swipe", "end"),
              a.currentTarget.style.removeProperty(
                "--radix-toast-swipe-move-x",
              ),
              a.currentTarget.style.removeProperty(
                "--radix-toast-swipe-move-y",
              ),
              a.currentTarget.style.setProperty(
                "--radix-toast-swipe-end-x",
                `${p}px`,
              ),
              a.currentTarget.style.setProperty(
                "--radix-toast-swipe-end-y",
                `${f}px`,
              ),
              l(!1));
          }),
        }),
      ),
    });
  });
ke.displayName = q;
var [Bt, Kt] = De(q, { onClose() {} }),
  Ht = s.forwardRef((e, t) => {
    const X = e,
      {
        __scopeToast: r,
        type: n = "foreground",
        duration: o,
        open: i,
        onClose: u,
        onEscapeKeyDown: c,
        onPause: l,
        onResume: d,
        onSwipeStart: a,
        onSwipeMove: p,
        onSwipeCancel: f,
        onSwipeEnd: x,
      } = X,
      P = N(X, [
        "__scopeToast",
        "type",
        "duration",
        "open",
        "onClose",
        "onEscapeKeyDown",
        "onPause",
        "onResume",
        "onSwipeStart",
        "onSwipeMove",
        "onSwipeCancel",
        "onSwipeEnd",
      ]),
      E = te(q, r),
      [R, m] = s.useState(null),
      C = V(t, (T) => m(T)),
      w = s.useRef(null),
      h = s.useRef(null),
      _ = o || E.duration,
      A = s.useRef(0),
      S = s.useRef(_),
      L = s.useRef(0),
      { onToastAdd: b, onToastRemove: D } = E,
      F = $(() => {
        var O;
        (R != null &&
          R.contains(document.activeElement) &&
          ((O = E.viewport) == null || O.focus()),
          u());
      }),
      j = s.useCallback(
        (T) => {
          !T ||
            T === 1 / 0 ||
            (window.clearTimeout(L.current),
            (A.current = new Date().getTime()),
            (L.current = window.setTimeout(F, T)));
        },
        [F],
      );
    (s.useEffect(() => {
      const T = E.viewport;
      if (T) {
        const O = () => {
            (j(S.current), d == null || d());
          },
          k = () => {
            const B = new Date().getTime() - A.current;
            ((S.current = S.current - B),
              window.clearTimeout(L.current),
              l == null || l());
          };
        return (
          T.addEventListener(ie, k),
          T.addEventListener(ae, O),
          () => {
            (T.removeEventListener(ie, k), T.removeEventListener(ae, O));
          }
        );
      }
    }, [E.viewport, _, l, d, j]),
      s.useEffect(() => {
        i && !E.isClosePausedRef.current && j(_);
      }, [i, _, E.isClosePausedRef, j]),
      s.useEffect(() => (b(), () => D()), [b, D]));
    const U = s.useMemo(() => (R ? He(R) : null), [R]);
    return E.viewport
      ? v.jsxs(v.Fragment, {
          children: [
            U &&
              v.jsx(Yt, {
                __scopeToast: r,
                role: "status",
                "aria-live": n === "foreground" ? "assertive" : "polite",
                children: U,
              }),
            v.jsx(Bt, {
              scope: r,
              onClose: F,
              children: Pe.createPortal(
                v.jsx(de.ItemSlot, {
                  scope: r,
                  children: v.jsx(Rt, {
                    asChild: !0,
                    onEscapeKeyDown: I(c, () => {
                      (E.isFocusedToastEscapeKeyDownRef.current || F(),
                        (E.isFocusedToastEscapeKeyDownRef.current = !1));
                    }),
                    children: v.jsx(
                      M.li,
                      g(
                        y(
                          {
                            tabIndex: 0,
                            "data-state": i ? "open" : "closed",
                            "data-swipe-direction": E.swipeDirection,
                          },
                          P,
                        ),
                        {
                          ref: C,
                          style: y(
                            { userSelect: "none", touchAction: "none" },
                            e.style,
                          ),
                          onKeyDown: I(e.onKeyDown, (T) => {
                            T.key === "Escape" &&
                              (c == null || c(T.nativeEvent),
                              T.nativeEvent.defaultPrevented ||
                                ((E.isFocusedToastEscapeKeyDownRef.current =
                                  !0),
                                F()));
                          }),
                          onPointerDown: I(e.onPointerDown, (T) => {
                            T.button === 0 &&
                              (w.current = { x: T.clientX, y: T.clientY });
                          }),
                          onPointerMove: I(e.onPointerMove, (T) => {
                            if (!w.current) return;
                            const O = T.clientX - w.current.x,
                              k = T.clientY - w.current.y,
                              B = !!h.current,
                              K = ["left", "right"].includes(E.swipeDirection),
                              z = ["left", "up"].includes(E.swipeDirection)
                                ? Math.min
                                : Math.max,
                              Ye = K ? z(0, O) : 0,
                              qe = K ? 0 : z(0, k),
                              ne = T.pointerType === "touch" ? 10 : 2,
                              J = { x: Ye, y: qe },
                              pe = { originalEvent: T, delta: J };
                            B
                              ? ((h.current = J),
                                Q(Vt, p, pe, { discrete: !1 }))
                              : Re(J, E.swipeDirection, ne)
                                ? ((h.current = J),
                                  Q(Wt, a, pe, { discrete: !1 }),
                                  T.target.setPointerCapture(T.pointerId))
                                : (Math.abs(O) > ne || Math.abs(k) > ne) &&
                                  (w.current = null);
                          }),
                          onPointerUp: I(e.onPointerUp, (T) => {
                            const O = h.current,
                              k = T.target;
                            if (
                              (k.hasPointerCapture(T.pointerId) &&
                                k.releasePointerCapture(T.pointerId),
                              (h.current = null),
                              (w.current = null),
                              O)
                            ) {
                              const B = T.currentTarget,
                                K = { originalEvent: T, delta: O };
                              (Re(O, E.swipeDirection, E.swipeThreshold)
                                ? Q(Ut, x, K, { discrete: !0 })
                                : Q($t, f, K, { discrete: !0 }),
                                B.addEventListener(
                                  "click",
                                  (z) => z.preventDefault(),
                                  { once: !0 },
                                ));
                            }
                          }),
                        },
                      ),
                    ),
                  }),
                }),
                E.viewport,
              ),
            }),
          ],
        })
      : null;
  }),
  Yt = (e) => {
    const d = e,
      { __scopeToast: t, children: r } = d,
      n = N(d, ["__scopeToast", "children"]),
      o = te(q, t),
      [i, u] = s.useState(!1),
      [c, l] = s.useState(!1);
    return (
      zt(() => u(!0)),
      s.useEffect(() => {
        const a = window.setTimeout(() => l(!0), 1e3);
        return () => window.clearTimeout(a);
      }, []),
      c
        ? null
        : v.jsx(Ie, {
            asChild: !0,
            children: v.jsx(
              ee,
              g(y({}, n), {
                children:
                  i && v.jsxs(v.Fragment, { children: [o.label, " ", r] }),
              }),
            ),
          })
    );
  },
  qt = "ToastTitle",
  We = s.forwardRef((e, t) => {
    const o = e,
      { __scopeToast: r } = o,
      n = N(o, ["__scopeToast"]);
    return v.jsx(M.div, g(y({}, n), { ref: t }));
  });
We.displayName = qt;
var Xt = "ToastDescription",
  Ve = s.forwardRef((e, t) => {
    const o = e,
      { __scopeToast: r } = o,
      n = N(o, ["__scopeToast"]);
    return v.jsx(M.div, g(y({}, n), { ref: t }));
  });
Ve.displayName = Xt;
var $e = "ToastAction",
  Ue = s.forwardRef((e, t) => {
    const o = e,
      { altText: r } = o,
      n = N(o, ["altText"]);
    return r.trim()
      ? v.jsx(Ke, {
          altText: r,
          asChild: !0,
          children: v.jsx(fe, g(y({}, n), { ref: t })),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${$e}\`. Expected non-empty \`string\`.`,
        ),
        null);
  });
Ue.displayName = $e;
var Be = "ToastClose",
  fe = s.forwardRef((e, t) => {
    const i = e,
      { __scopeToast: r } = i,
      n = N(i, ["__scopeToast"]),
      o = Kt(Be, r);
    return v.jsx(Ke, {
      asChild: !0,
      children: v.jsx(
        M.button,
        g(y({ type: "button" }, n), {
          ref: t,
          onClick: I(e.onClick, o.onClose),
        }),
      ),
    });
  });
fe.displayName = Be;
var Ke = s.forwardRef((e, t) => {
  const i = e,
    { __scopeToast: r, altText: n } = i,
    o = N(i, ["__scopeToast", "altText"]);
  return v.jsx(
    M.div,
    g(
      y(
        {
          "data-radix-toast-announce-exclude": "",
          "data-radix-toast-announce-alt": n || void 0,
        },
        o,
      ),
      { ref: t },
    ),
  );
});
function He(e) {
  const t = [];
  return (
    Array.from(e.childNodes).forEach((n) => {
      if (
        (n.nodeType === n.TEXT_NODE && n.textContent && t.push(n.textContent),
        Jt(n))
      ) {
        const o = n.ariaHidden || n.hidden || n.style.display === "none",
          i = n.dataset.radixToastAnnounceExclude === "";
        if (!o)
          if (i) {
            const u = n.dataset.radixToastAnnounceAlt;
            u && t.push(u);
          } else t.push(...He(n));
      }
    }),
    t
  );
}
function Q(e, t, r, { discrete: n }) {
  const o = r.originalEvent.currentTarget,
    i = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: r });
  (t && o.addEventListener(e, t, { once: !0 }),
    n ? ge(o, i) : o.dispatchEvent(i));
}
var Re = (e, t, r = 0) => {
  const n = Math.abs(e.x),
    o = Math.abs(e.y),
    i = n > o;
  return t === "left" || t === "right" ? i && n > r : !i && o > r;
};
function zt(e = () => {}) {
  const t = $(e);
  Y(() => {
    let r = 0,
      n = 0;
    return (
      (r = window.requestAnimationFrame(
        () => (n = window.requestAnimationFrame(t)),
      )),
      () => {
        (window.cancelAnimationFrame(r), window.cancelAnimationFrame(n));
      }
    );
  }, [t]);
}
function Jt(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function Zt(e) {
  const t = [],
    r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (n) => {
        const o = n.tagName === "INPUT" && n.type === "hidden";
        return n.disabled || n.hidden || o
          ? NodeFilter.FILTER_SKIP
          : n.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
function oe(e) {
  const t = document.activeElement;
  return e.some((r) =>
    r === t ? !0 : (r.focus(), document.activeElement !== t),
  );
}
var tn = Le,
  nn = Fe,
  rn = ke,
  on = We,
  sn = Ve,
  an = Ue,
  cn = fe;
export {
  an as A,
  cn as C,
  sn as D,
  tn as P,
  rn as R,
  on as T,
  nn as V,
  M as a,
  V as b,
  be as c,
  $ as d,
  Oe as e,
  Ne as f,
  en as g,
  I as h,
  v as j,
  Y as u,
};
