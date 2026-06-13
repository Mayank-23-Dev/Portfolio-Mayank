var Rt = Object.defineProperty;
var ye = Object.getOwnPropertySymbols;
var st = Object.prototype.hasOwnProperty,
  rt = Object.prototype.propertyIsEnumerable;
var ve = (e, t, n) =>
    t in e
      ? Rt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Ae = (e, t) => {
    for (var n in t || (t = {})) st.call(t, n) && ve(e, n, t[n]);
    if (ye) for (var n of ye(t)) rt.call(t, n) && ve(e, n, t[n]);
    return e;
  };
var ot = (e, t) => {
  var n = {};
  for (var r in e) st.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && ye)
    for (var r of ye(e)) t.indexOf(r) < 0 && rt.call(e, r) && (n[r] = e[r]);
  return n;
};
var C = (e, t, n) => ve(e, typeof t != "symbol" ? t + "" : t, n);
var lt = (e, t, n) =>
  new Promise((r, s) => {
    var i = (c) => {
        try {
          a(n.next(c));
        } catch (o) {
          s(o);
        }
      },
      l = (c) => {
        try {
          a(n.throw(c));
        } catch (o) {
          s(o);
        }
      },
      a = (c) => (c.done ? r(c.value) : Promise.resolve(c.value).then(i, l));
    a((n = n.apply(e, t)).next());
  });
const Gt = [
    "BN",
    "BN",
    "BN",
    "BN",
    "BN",
    "BN",
    "BN",
    "BN",
    "BN",
    "S",
    "B",
    "S",
    "WS",
    "B",
    "BN",
    "BN",
    "BN",
    "BN",
    "BN",
    "BN",
    "BN",
    "BN",
    "BN",
    "BN",
    "BN",
    "BN",
    "BN",
    "BN",
    "B",
    "B",
    "B",
    "S",
    "WS",
    "ON",
    "ON",
    "ET",
    "ET",
    "ET",
    "ON",
    "ON",
    "ON",
    "ON",
    "ON",
    "ON",
    "CS",
    "ON",
    "CS",
    "ON",
    "EN",
    "EN",
    "EN",
    "EN",
    "EN",
    "EN",
    "EN",
    "EN",
    "EN",
    "EN",
    "ON",
    "ON",
    "ON",
    "ON",
    "ON",
    "ON",
    "ON",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "ON",
    "ON",
    "ON",
    "ON",
    "ON",
    "ON",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "ON",
    "ON",
    "ON",
    "ON",
    "BN",
    "BN",
    "BN",
    "BN",
    "BN",
    "BN",
    "B",
    "BN",
    "BN",
    "BN",
    "BN",
    "BN",
    "BN",
    "BN",
    "BN",
    "BN",
    "BN",
    "BN",
    "BN",
    "BN",
    "BN",
    "BN",
    "BN",
    "BN",
    "BN",
    "BN",
    "BN",
    "BN",
    "BN",
    "BN",
    "BN",
    "BN",
    "BN",
    "CS",
    "ON",
    "ET",
    "ET",
    "ET",
    "ET",
    "ON",
    "ON",
    "ON",
    "ON",
    "L",
    "ON",
    "ON",
    "ON",
    "ON",
    "ON",
    "ET",
    "ET",
    "EN",
    "EN",
    "ON",
    "L",
    "ON",
    "ON",
    "ON",
    "EN",
    "L",
    "ON",
    "ON",
    "ON",
    "ON",
    "ON",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "ON",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "ON",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
    "L",
  ],
  zt = [
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "CS",
    "AL",
    "ON",
    "ON",
    "NSM",
    "NSM",
    "NSM",
    "NSM",
    "NSM",
    "NSM",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "NSM",
    "NSM",
    "NSM",
    "NSM",
    "NSM",
    "NSM",
    "NSM",
    "NSM",
    "NSM",
    "NSM",
    "NSM",
    "NSM",
    "NSM",
    "NSM",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AN",
    "AN",
    "AN",
    "AN",
    "AN",
    "AN",
    "AN",
    "AN",
    "AN",
    "AN",
    "ET",
    "AN",
    "AN",
    "AL",
    "AL",
    "AL",
    "NSM",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "NSM",
    "NSM",
    "NSM",
    "NSM",
    "NSM",
    "NSM",
    "NSM",
    "NSM",
    "NSM",
    "NSM",
    "NSM",
    "NSM",
    "NSM",
    "NSM",
    "NSM",
    "NSM",
    "NSM",
    "NSM",
    "NSM",
    "ON",
    "NSM",
    "NSM",
    "NSM",
    "NSM",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
    "AL",
  ];
function Dt(e) {
  return e <= 255
    ? Gt[e]
    : 1424 <= e && e <= 1524
      ? "R"
      : 1536 <= e && e <= 1791
        ? zt[e & 255]
        : 1792 <= e && e <= 2220
          ? "AL"
          : "L";
}
function It(e) {
  const t = e.length;
  if (t === 0) return null;
  const n = new Array(t);
  let r = 0;
  for (let o = 0; o < t; o++) {
    const u = Dt(e.charCodeAt(o));
    ((u === "R" || u === "AL" || u === "AN") && r++, (n[o] = u));
  }
  if (r === 0) return null;
  const s = t / r < 0.3 ? 0 : 1,
    i = new Int8Array(t);
  for (let o = 0; o < t; o++) i[o] = s;
  const l = s & 1 ? "R" : "L",
    a = l;
  let c = a;
  for (let o = 0; o < t; o++) n[o] === "NSM" ? (n[o] = c) : (c = n[o]);
  c = a;
  for (let o = 0; o < t; o++) {
    const u = n[o];
    u === "EN"
      ? (n[o] = c === "AL" ? "AN" : "EN")
      : (u === "R" || u === "L" || u === "AL") && (c = u);
  }
  for (let o = 0; o < t; o++) n[o] === "AL" && (n[o] = "R");
  for (let o = 1; o < t - 1; o++)
    (n[o] === "ES" && n[o - 1] === "EN" && n[o + 1] === "EN" && (n[o] = "EN"),
      n[o] === "CS" &&
        (n[o - 1] === "EN" || n[o - 1] === "AN") &&
        n[o + 1] === n[o - 1] &&
        (n[o] = n[o - 1]));
  for (let o = 0; o < t; o++) {
    if (n[o] !== "EN") continue;
    let u;
    for (u = o - 1; u >= 0 && n[u] === "ET"; u--) n[u] = "EN";
    for (u = o + 1; u < t && n[u] === "ET"; u++) n[u] = "EN";
  }
  for (let o = 0; o < t; o++) {
    const u = n[o];
    (u === "WS" || u === "ES" || u === "ET" || u === "CS") && (n[o] = "ON");
  }
  c = a;
  for (let o = 0; o < t; o++) {
    const u = n[o];
    u === "EN"
      ? (n[o] = c === "L" ? "L" : "EN")
      : (u === "R" || u === "L") && (c = u);
  }
  for (let o = 0; o < t; o++) {
    if (n[o] !== "ON") continue;
    let u = o + 1;
    for (; u < t && n[u] === "ON"; ) u++;
    const d = o > 0 ? n[o - 1] : a,
      g = u < t ? n[u] : a,
      h = d !== "L" ? "R" : "L";
    if (h === (g !== "L" ? "R" : "L")) for (let p = o; p < u; p++) n[p] = h;
    o = u - 1;
  }
  for (let o = 0; o < t; o++) n[o] === "ON" && (n[o] = l);
  for (let o = 0; o < t; o++) {
    const u = n[o];
    (i[o] & 1) === 0
      ? u === "R"
        ? i[o]++
        : (u === "AN" || u === "EN") && (i[o] += 2)
      : (u === "L" || u === "AN" || u === "EN") && i[o]++;
  }
  return i;
}
function jt(e, t) {
  const n = It(e);
  if (n === null) return null;
  const r = new Int8Array(t.length);
  for (let s = 0; s < t.length; s++) r[s] = n[t[s]];
  return r;
}
const Ht = /[ \t\n\r\f]+/g,
  $t = /[\t\n\r\f]| {2,}|^ | $/;
function qt(e) {
  const t = e != null ? e : "normal";
  return t === "pre-wrap"
    ? { mode: t, preserveOrdinarySpaces: !0, preserveHardBreaks: !0 }
    : { mode: t, preserveOrdinarySpaces: !1, preserveHardBreaks: !1 };
}
function Kt(e) {
  if (!$t.test(e)) return e;
  let t = e.replace(Ht, " ");
  return (
    t.charCodeAt(0) === 32 && (t = t.slice(1)),
    t.length > 0 && t.charCodeAt(t.length - 1) === 32 && (t = t.slice(0, -1)),
    t
  );
}
function Jt(e) {
  return /[\r\f]/.test(e)
    ? e
        .replace(
          /\r\n/g,
          `
`,
        )
        .replace(
          /[\r\f]/g,
          `
`,
        )
    : e.replace(
        /\r\n/g,
        `
`,
      );
}
let Me = null,
  Ut;
function Qt() {
  return (
    Me === null && (Me = new Intl.Segmenter(Ut, { granularity: "word" })),
    Me
  );
}
const Yt = new RegExp("\\p{Script=Arabic}", "u"),
  we = new RegExp("\\p{M}", "u"),
  Nt = new RegExp("\\p{Nd}", "u");
function Te(e) {
  return Yt.test(e);
}
function re(e) {
  for (const t of e) {
    const n = t.codePointAt(0);
    if (
      (n >= 19968 && n <= 40959) ||
      (n >= 13312 && n <= 19903) ||
      (n >= 131072 && n <= 173791) ||
      (n >= 173824 && n <= 177983) ||
      (n >= 177984 && n <= 178207) ||
      (n >= 178208 && n <= 183983) ||
      (n >= 183984 && n <= 191471) ||
      (n >= 196608 && n <= 201551) ||
      (n >= 63744 && n <= 64255) ||
      (n >= 194560 && n <= 195103) ||
      (n >= 12288 && n <= 12351) ||
      (n >= 12352 && n <= 12447) ||
      (n >= 12448 && n <= 12543) ||
      (n >= 44032 && n <= 55215) ||
      (n >= 65280 && n <= 65519)
    )
      return !0;
  }
  return !1;
}
const wt = new Set([
    "，",
    "．",
    "！",
    "：",
    "；",
    "？",
    "、",
    "。",
    "・",
    "）",
    "〕",
    "〉",
    "》",
    "」",
    "』",
    "】",
    "〗",
    "〙",
    "〛",
    "ー",
    "々",
    "〻",
    "ゝ",
    "ゞ",
    "ヽ",
    "ヾ",
  ]),
  xe = new Set([
    '"',
    "(",
    "[",
    "{",
    "“",
    "‘",
    "«",
    "‹",
    "（",
    "〔",
    "〈",
    "《",
    "「",
    "『",
    "【",
    "〖",
    "〘",
    "〚",
  ]),
  ze = new Set(["'", "’"]),
  Le = new Set([
    ".",
    ",",
    "!",
    "?",
    ":",
    ";",
    "،",
    "؛",
    "؟",
    "।",
    "॥",
    "၊",
    "။",
    "၌",
    "၍",
    "၏",
    ")",
    "]",
    "}",
    "%",
    '"',
    "”",
    "’",
    "»",
    "›",
    "…",
  ]),
  Xt = new Set([":", ".", "،", "؛"]),
  Vt = new Set(["၏"]),
  Zt = new Set(["”", "’", "»", "›", "」", "』", "】", "》", "〉", "〕", "）"]);
function en(e) {
  if (De(e)) return !0;
  let t = !1;
  for (const n of e) {
    if (Le.has(n)) {
      t = !0;
      continue;
    }
    if (!(t && we.test(n))) return !1;
  }
  return t;
}
function tn(e) {
  for (const t of e) if (!wt.has(t) && !Le.has(t)) return !1;
  return e.length > 0;
}
function nn(e) {
  if (De(e)) return !0;
  for (const t of e) if (!xe.has(t) && !ze.has(t) && !we.test(t)) return !1;
  return e.length > 0;
}
function De(e) {
  let t = !1;
  for (const n of e)
    if (!(n === "\\" || we.test(n))) {
      if (xe.has(n) || Le.has(n) || ze.has(n)) {
        t = !0;
        continue;
      }
      return !1;
    }
  return t;
}
function sn(e) {
  const t = Array.from(e);
  let n = t.length;
  for (; n > 0; ) {
    const r = t[n - 1];
    if (we.test(r)) {
      n--;
      continue;
    }
    if (xe.has(r) || ze.has(r)) {
      n--;
      continue;
    }
    break;
  }
  return n <= 0 || n === t.length
    ? null
    : { head: t.slice(0, n).join(""), tail: t.slice(n).join("") };
}
function rn(e, t) {
  if (e.length === 0) return !1;
  for (const n of e) if (n !== t) return !1;
  return !0;
}
function on(e) {
  return !Te(e) || e.length === 0 ? !1 : Xt.has(e[e.length - 1]);
}
function ln(e) {
  return e.length === 0 ? !1 : Vt.has(e[e.length - 1]);
}
function an(e) {
  if (e.length < 2 || e[0] !== " ") return null;
  const t = e.slice(1);
  return new RegExp("^\\p{M}+$", "u").test(t) ? { space: " ", marks: t } : null;
}
function xt(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    const n = e[t];
    if (Zt.has(n)) return !0;
    if (!Le.has(n)) return !1;
  }
  return !1;
}
function un(e, t) {
  if (t.preserveOrdinarySpaces || t.preserveHardBreaks) {
    if (e === " ") return "preserved-space";
    if (e === "	") return "tab";
    if (
      t.preserveHardBreaks &&
      e ===
        `
`
    )
      return "hard-break";
  }
  return e === " "
    ? "space"
    : e === " " || e === " " || e === "⁠" || e === "\uFEFF"
      ? "glue"
      : e === "​"
        ? "zero-width-break"
        : e === "­"
          ? "soft-hyphen"
          : "text";
}
function V(e) {
  return e.length === 1 ? e[0] : e.join("");
}
function cn(e, t, n, r) {
  const s = [];
  let i = null,
    l = [],
    a = n,
    c = !1,
    o = 0;
  for (const u of e) {
    const d = un(u, r),
      g = d === "text" && t;
    if (i !== null && d === i && g === c) {
      (l.push(u), (o += u.length));
      continue;
    }
    (i !== null && s.push({ text: V(l), isWordLike: c, kind: i, start: a }),
      (i = d),
      (l = [u]),
      (a = n + o),
      (c = g),
      (o += u.length));
  }
  return (
    i !== null && s.push({ text: V(l), isWordLike: c, kind: i, start: a }),
    s
  );
}
function Oe(e) {
  return (
    e === "space" ||
    e === "preserved-space" ||
    e === "zero-width-break" ||
    e === "hard-break"
  );
}
const hn = /^[A-Za-z][A-Za-z0-9+.-]*:$/;
function fn(e, t) {
  const n = e.texts[t];
  return n.startsWith("www.")
    ? !0
    : hn.test(n) &&
        t + 1 < e.len &&
        e.kinds[t + 1] === "text" &&
        e.texts[t + 1] === "//";
}
function dn(e) {
  return e.includes("?") && (e.includes("://") || e.startsWith("www."));
}
function pn(e) {
  const t = e.texts.slice(),
    n = e.isWordLike.slice(),
    r = e.kinds.slice(),
    s = e.starts.slice();
  for (let l = 0; l < e.len; l++) {
    if (r[l] !== "text" || !fn(e, l)) continue;
    const a = [t[l]];
    let c = l + 1;
    for (; c < e.len && !Oe(r[c]); ) {
      (a.push(t[c]), (n[l] = !0));
      const o = t[c].includes("?");
      if (((r[c] = "text"), (t[c] = ""), c++, o)) break;
    }
    t[l] = V(a);
  }
  let i = 0;
  for (let l = 0; l < t.length; l++) {
    const a = t[l];
    a.length !== 0 &&
      (i !== l && ((t[i] = a), (n[i] = n[l]), (r[i] = r[l]), (s[i] = s[l])),
      i++);
  }
  return (
    (t.length = i),
    (n.length = i),
    (r.length = i),
    (s.length = i),
    { len: i, texts: t, isWordLike: n, kinds: r, starts: s }
  );
}
function gn(e) {
  const t = [],
    n = [],
    r = [],
    s = [];
  for (let i = 0; i < e.len; i++) {
    const l = e.texts[i];
    if (
      (t.push(l),
      n.push(e.isWordLike[i]),
      r.push(e.kinds[i]),
      s.push(e.starts[i]),
      !dn(l))
    )
      continue;
    const a = i + 1;
    if (a >= e.len || Oe(e.kinds[a])) continue;
    const c = [],
      o = e.starts[a];
    let u = a;
    for (; u < e.len && !Oe(e.kinds[u]); ) (c.push(e.texts[u]), u++);
    c.length > 0 &&
      (t.push(V(c)), n.push(!0), r.push("text"), s.push(o), (i = u - 1));
  }
  return { len: t.length, texts: t, isWordLike: n, kinds: r, starts: s };
}
const Ln = new Set([":", "-", "/", "×", ",", ".", "+", "–", "—"]),
  at = /^[A-Za-z0-9_]+[,:;]*$/,
  ut = /[,:;]+$/;
function Ct(e) {
  for (const t of e) if (Nt.test(t)) return !0;
  return !1;
}
function Re(e) {
  if (e.length === 0) return !1;
  for (const t of e) if (!(Nt.test(t) || Ln.has(t))) return !1;
  return !0;
}
function mn(e) {
  const t = [],
    n = [],
    r = [],
    s = [];
  for (let i = 0; i < e.len; i++) {
    const l = e.texts[i],
      a = e.kinds[i];
    if (a === "text" && Re(l) && Ct(l)) {
      const c = [l];
      let o = i + 1;
      for (; o < e.len && e.kinds[o] === "text" && Re(e.texts[o]); )
        (c.push(e.texts[o]), o++);
      (t.push(V(c)),
        n.push(!0),
        r.push("text"),
        s.push(e.starts[i]),
        (i = o - 1));
      continue;
    }
    (t.push(l), n.push(e.isWordLike[i]), r.push(a), s.push(e.starts[i]));
  }
  return { len: t.length, texts: t, isWordLike: n, kinds: r, starts: s };
}
function _n(e) {
  const t = [],
    n = [],
    r = [],
    s = [];
  for (let i = 0; i < e.len; i++) {
    const l = e.texts[i],
      a = e.kinds[i],
      c = e.isWordLike[i];
    if (a === "text" && c && at.test(l)) {
      const o = [l];
      let u = ut.test(l),
        d = i + 1;
      for (
        ;
        u &&
        d < e.len &&
        e.kinds[d] === "text" &&
        e.isWordLike[d] &&
        at.test(e.texts[d]);
      ) {
        const g = e.texts[d];
        (o.push(g), (u = ut.test(g)), d++);
      }
      (t.push(V(o)),
        n.push(!0),
        r.push("text"),
        s.push(e.starts[i]),
        (i = d - 1));
      continue;
    }
    (t.push(l), n.push(c), r.push(a), s.push(e.starts[i]));
  }
  return { len: t.length, texts: t, isWordLike: n, kinds: r, starts: s };
}
function yn(e) {
  const t = [],
    n = [],
    r = [],
    s = [];
  for (let i = 0; i < e.len; i++) {
    const l = e.texts[i];
    if (e.kinds[i] === "text" && l.includes("-")) {
      const a = l.split("-");
      let c = a.length > 1;
      for (let o = 0; o < a.length; o++) {
        const u = a[o];
        if (!c) break;
        (u.length === 0 || !Ct(u) || !Re(u)) && (c = !1);
      }
      if (c) {
        let o = 0;
        for (let u = 0; u < a.length; u++) {
          const d = a[u],
            g = u < a.length - 1 ? `${d}-` : d;
          (t.push(g),
            n.push(!0),
            r.push("text"),
            s.push(e.starts[i] + o),
            (o += g.length));
        }
        continue;
      }
    }
    (t.push(l),
      n.push(e.isWordLike[i]),
      r.push(e.kinds[i]),
      s.push(e.starts[i]));
  }
  return { len: t.length, texts: t, isWordLike: n, kinds: r, starts: s };
}
function An(e) {
  const t = [],
    n = [],
    r = [],
    s = [];
  let i = 0;
  for (; i < e.len; ) {
    const l = [e.texts[i]];
    let a = e.isWordLike[i],
      c = e.kinds[i],
      o = e.starts[i];
    if (c === "glue") {
      const u = [l[0]],
        d = o;
      for (i++; i < e.len && e.kinds[i] === "glue"; ) (u.push(e.texts[i]), i++);
      const g = V(u);
      if (i < e.len && e.kinds[i] === "text")
        ((l[0] = g),
          l.push(e.texts[i]),
          (a = e.isWordLike[i]),
          (c = "text"),
          (o = d),
          i++);
      else {
        (t.push(g), n.push(!1), r.push("glue"), s.push(d));
        continue;
      }
    } else i++;
    if (c === "text")
      for (; i < e.len && e.kinds[i] === "glue"; ) {
        const u = [];
        for (; i < e.len && e.kinds[i] === "glue"; ) (u.push(e.texts[i]), i++);
        const d = V(u);
        if (i < e.len && e.kinds[i] === "text") {
          (l.push(d, e.texts[i]), (a = a || e.isWordLike[i]), i++);
          continue;
        }
        l.push(d);
      }
    (t.push(V(l)), n.push(a), r.push(c), s.push(o));
  }
  return { len: t.length, texts: t, isWordLike: n, kinds: r, starts: s };
}
function Sn(e) {
  const t = e.texts.slice(),
    n = e.isWordLike.slice(),
    r = e.kinds.slice(),
    s = e.starts.slice();
  for (let i = 0; i < t.length - 1; i++) {
    if (r[i] !== "text" || r[i + 1] !== "text" || !re(t[i]) || !re(t[i + 1]))
      continue;
    const l = sn(t[i]);
    l !== null &&
      ((t[i] = l.head),
      (t[i + 1] = l.tail + t[i + 1]),
      (s[i + 1] = s[i] + l.head.length));
  }
  return { len: t.length, texts: t, isWordLike: n, kinds: r, starts: s };
}
function kn(e, t, n) {
  var g;
  const r = Qt();
  let s = 0;
  const i = [],
    l = [],
    a = [],
    c = [];
  for (const h of r.segment(e))
    for (const f of cn(
      h.segment,
      (g = h.isWordLike) != null ? g : !1,
      h.index,
      n,
    )) {
      const p = f.kind === "text";
      (t.carryCJKAfterClosingQuote &&
        p &&
        s > 0 &&
        a[s - 1] === "text" &&
        re(f.text) &&
        re(i[s - 1]) &&
        xt(i[s - 1])) ||
      (p && s > 0 && a[s - 1] === "text" && tn(f.text) && re(i[s - 1])) ||
      (p && s > 0 && a[s - 1] === "text" && ln(i[s - 1]))
        ? ((i[s - 1] += f.text), (l[s - 1] = l[s - 1] || f.isWordLike))
        : p &&
            s > 0 &&
            a[s - 1] === "text" &&
            f.isWordLike &&
            Te(f.text) &&
            on(i[s - 1])
          ? ((i[s - 1] += f.text), (l[s - 1] = !0))
          : (p &&
                !f.isWordLike &&
                s > 0 &&
                a[s - 1] === "text" &&
                f.text.length === 1 &&
                f.text !== "-" &&
                f.text !== "—" &&
                rn(i[s - 1], f.text)) ||
              (p &&
                !f.isWordLike &&
                s > 0 &&
                a[s - 1] === "text" &&
                (en(f.text) || (f.text === "-" && l[s - 1])))
            ? (i[s - 1] += f.text)
            : ((i[s] = f.text),
              (l[s] = f.isWordLike),
              (a[s] = f.kind),
              (c[s] = f.start),
              s++);
    }
  for (let h = 1; h < s; h++)
    a[h] === "text" &&
      !l[h] &&
      De(i[h]) &&
      a[h - 1] === "text" &&
      ((i[h - 1] += i[h]), (l[h - 1] = l[h - 1] || l[h]), (i[h] = ""));
  for (let h = s - 2; h >= 0; h--)
    if (a[h] === "text" && !l[h] && nn(i[h])) {
      let f = h + 1;
      for (; f < s && i[f] === ""; ) f++;
      f < s &&
        a[f] === "text" &&
        ((i[f] = i[h] + i[f]), (c[f] = c[h]), (i[h] = ""));
    }
  let o = 0;
  for (let h = 0; h < s; h++) {
    const f = i[h];
    f.length !== 0 &&
      (o !== h && ((i[o] = f), (l[o] = l[h]), (a[o] = a[h]), (c[o] = c[h])),
      o++);
  }
  ((i.length = o), (l.length = o), (a.length = o), (c.length = o));
  const u = An({ len: o, texts: i, isWordLike: l, kinds: a, starts: c }),
    d = Sn(_n(yn(mn(gn(pn(u))))));
  for (let h = 0; h < d.len - 1; h++) {
    const f = an(d.texts[h]);
    f !== null &&
      ((d.kinds[h] !== "space" && d.kinds[h] !== "preserved-space") ||
        d.kinds[h + 1] !== "text" ||
        !Te(d.texts[h + 1]) ||
        ((d.texts[h] = f.space),
        (d.isWordLike[h] = !1),
        (d.kinds[h] =
          d.kinds[h] === "preserved-space" ? "preserved-space" : "space"),
        (d.texts[h + 1] = f.marks + d.texts[h + 1]),
        (d.starts[h + 1] = d.starts[h] + f.space.length)));
  }
  return d;
}
function Nn(e, t) {
  if (e.len === 0) return [];
  if (!t.preserveHardBreaks)
    return [
      {
        startSegmentIndex: 0,
        endSegmentIndex: e.len,
        consumedEndSegmentIndex: e.len,
      },
    ];
  const n = [];
  let r = 0;
  for (let s = 0; s < e.len; s++)
    e.kinds[s] === "hard-break" &&
      (n.push({
        startSegmentIndex: r,
        endSegmentIndex: s,
        consumedEndSegmentIndex: s + 1,
      }),
      (r = s + 1));
  return (
    r < e.len &&
      n.push({
        startSegmentIndex: r,
        endSegmentIndex: e.len,
        consumedEndSegmentIndex: e.len,
      }),
    n
  );
}
function wn(e, t, n = "normal") {
  const r = qt(n),
    s = r.mode === "pre-wrap" ? Jt(e) : Kt(e);
  if (s.length === 0)
    return {
      normalized: s,
      chunks: [],
      len: 0,
      texts: [],
      isWordLike: [],
      kinds: [],
      starts: [],
    };
  const i = kn(s, t, r);
  return Ae({ normalized: s, chunks: Nn(i, r) }, i);
}
let ce = null;
const ct = new Map();
let he = null;
const xn = new RegExp("\\p{Emoji_Presentation}", "u"),
  Cn =
    /[\p{Emoji_Presentation}\p{Extended_Pictographic}\p{Regional_Indicator}\uFE0F\u20E3]/u;
let Fe = null;
const ht = new Map();
function Ie() {
  if (ce !== null) return ce;
  if (typeof OffscreenCanvas != "undefined")
    return ((ce = new OffscreenCanvas(1, 1).getContext("2d")), ce);
  if (typeof document != "undefined")
    return ((ce = document.createElement("canvas").getContext("2d")), ce);
  throw new Error(
    "Text measurement requires OffscreenCanvas or a DOM canvas context.",
  );
}
function bn(e) {
  let t = ct.get(e);
  return (t || ((t = new Map()), ct.set(e, t)), t);
}
function ie(e, t) {
  let n = t.get(e);
  return (
    n === void 0 &&
      ((n = { width: Ie().measureText(e).width, containsCJK: re(e) }),
      t.set(e, n)),
    n
  );
}
function Ce() {
  if (he !== null) return he;
  if (typeof navigator == "undefined")
    return (
      (he = {
        lineFitEpsilon: 0.005,
        carryCJKAfterClosingQuote: !1,
        preferPrefixWidthsForBreakableRuns: !1,
        preferEarlySoftHyphenBreak: !1,
      }),
      he
    );
  const e = navigator.userAgent,
    n =
      navigator.vendor === "Apple Computer, Inc." &&
      e.includes("Safari/") &&
      !e.includes("Chrome/") &&
      !e.includes("Chromium/") &&
      !e.includes("CriOS/") &&
      !e.includes("FxiOS/") &&
      !e.includes("EdgiOS/"),
    r =
      e.includes("Chrome/") ||
      e.includes("Chromium/") ||
      e.includes("CriOS/") ||
      e.includes("Edg/");
  return (
    (he = {
      lineFitEpsilon: n ? 1 / 64 : 0.005,
      carryCJKAfterClosingQuote: r,
      preferPrefixWidthsForBreakableRuns: n,
      preferEarlySoftHyphenBreak: n,
    }),
    he
  );
}
function En(e) {
  const t = e.match(/(\d+(?:\.\d+)?)\s*px/);
  return t ? parseFloat(t[1]) : 16;
}
function je() {
  return (
    Fe === null &&
      (Fe = new Intl.Segmenter(void 0, { granularity: "grapheme" })),
    Fe
  );
}
function vn(e) {
  return xn.test(e) || e.includes("️");
}
function Mn(e) {
  return Cn.test(e);
}
function Fn(e, t) {
  let n = ht.get(e);
  if (n !== void 0) return n;
  const r = Ie();
  r.font = e;
  const s = r.measureText("😀").width;
  if (
    ((n = 0),
    s > t + 0.5 && typeof document != "undefined" && document.body !== null)
  ) {
    const i = document.createElement("span");
    ((i.style.font = e),
      (i.style.display = "inline-block"),
      (i.style.visibility = "hidden"),
      (i.style.position = "absolute"),
      (i.textContent = "😀"),
      document.body.appendChild(i));
    const l = i.getBoundingClientRect().width;
    (document.body.removeChild(i), s - l > 0.5 && (n = s - l));
  }
  return (ht.set(e, n), n);
}
function Bn(e) {
  let t = 0;
  const n = je();
  for (const r of n.segment(e)) vn(r.segment) && t++;
  return t;
}
function Wn(e, t) {
  return (t.emojiCount === void 0 && (t.emojiCount = Bn(e)), t.emojiCount);
}
function se(e, t, n) {
  return n === 0 ? t.width : t.width - Wn(e, t) * n;
}
function Pn(e, t, n, r) {
  if (t.graphemeWidths !== void 0) return t.graphemeWidths;
  const s = [],
    i = je();
  for (const l of i.segment(e)) {
    const a = ie(l.segment, n);
    s.push(se(l.segment, a, r));
  }
  return ((t.graphemeWidths = s.length > 1 ? s : null), t.graphemeWidths);
}
function Tn(e, t, n, r) {
  if (t.graphemePrefixWidths !== void 0) return t.graphemePrefixWidths;
  const s = [],
    i = je();
  let l = "";
  for (const a of i.segment(e)) {
    l += a.segment;
    const c = ie(l, n);
    s.push(se(l, c, r));
  }
  return (
    (t.graphemePrefixWidths = s.length > 1 ? s : null),
    t.graphemePrefixWidths
  );
}
function On(e, t) {
  const n = Ie();
  n.font = e;
  const r = bn(e),
    s = En(e),
    i = t ? Fn(e, s) : 0;
  return { cache: r, fontSize: s, emojiCorrection: i };
}
function Ne(e) {
  return (
    e === "space" ||
    e === "preserved-space" ||
    e === "tab" ||
    e === "zero-width-break" ||
    e === "soft-hyphen"
  );
}
function Rn(e, t) {
  for (; t < e.widths.length; ) {
    const n = e.kinds[t];
    if (n !== "space" && n !== "zero-width-break" && n !== "soft-hyphen") break;
    t++;
  }
  return t;
}
function Gn(e, t) {
  if (t <= 0) return 0;
  const n = e % t;
  return Math.abs(n) <= 1e-6 ? t : t - n;
}
function bt(e, t, n, r) {
  return !r || t === null ? e[n] : t[n] - (n > 0 ? t[n - 1] : 0);
}
function zn(e, t, n, r, s, i) {
  let l = 0,
    a = t;
  for (; l < e.length; ) {
    const c = i ? t + e[l] : a + e[l];
    if ((l + 1 < e.length ? c + s : c) > n + r) break;
    ((a = c), l++);
  }
  return { fitCount: l, fittedWidth: a };
}
function Dn(e, t, n) {
  const {
    widths: r,
    kinds: s,
    breakableWidths: i,
    breakablePrefixWidths: l,
  } = e;
  if (r.length === 0) return 0;
  const a = Ce(),
    c = a.lineFitEpsilon;
  let o = 0,
    u = 0,
    d = !1,
    g = 0,
    h = 0,
    f = 0,
    p = 0,
    S = -1,
    W = 0;
  function P() {
    ((S = -1), (W = 0));
  }
  function B(L = f, b = p, R = u) {
    (o++,
      n == null ||
        n({
          startSegmentIndex: g,
          startGraphemeIndex: h,
          endSegmentIndex: L,
          endGraphemeIndex: b,
          width: R,
        }),
      (u = 0),
      (d = !1),
      P());
  }
  function m(L, b) {
    ((d = !0), (g = L), (h = 0), (f = L + 1), (p = 0), (u = b));
  }
  function y(L, b, R) {
    ((d = !0), (g = L), (h = b), (f = L), (p = b + 1), (u = R));
  }
  function F(L, b) {
    if (!d) {
      m(L, b);
      return;
    }
    ((u += b), (f = L + 1), (p = 0));
  }
  function E(L, b) {
    Ne(s[L]) && ((S = L + 1), (W = u - b));
  }
  function x(L) {
    T(L, 0);
  }
  function T(L, b) {
    var H;
    const R = i[L],
      j = (H = l[L]) != null ? H : null;
    for (let $ = b; $ < R.length; $++) {
      const O = bt(R, j, $, a.preferPrefixWidthsForBreakableRuns);
      if (!d) {
        y(L, $, O);
        continue;
      }
      u + O > t + c ? (B(), y(L, $, O)) : ((u += O), (f = L), (p = $ + 1));
    }
    d && f === L && p === R.length && ((f = L + 1), (p = 0));
  }
  let A = 0;
  for (; A < r.length && !(!d && ((A = Rn(e, A)), A >= r.length)); ) {
    const L = r[A],
      b = s[A];
    if (!d) {
      (L > t && i[A] !== null ? x(A) : m(A, L), E(A, L), A++);
      continue;
    }
    if (u + L > t + c) {
      if (Ne(b)) {
        (F(A, L), B(A + 1, 0, u - L), A++);
        continue;
      }
      if (S >= 0) {
        if (f > S || (f === S && p > 0)) {
          B();
          continue;
        }
        B(S, 0, W);
        continue;
      }
      if (L > t && i[A] !== null) {
        (B(), x(A), A++);
        continue;
      }
      B();
      continue;
    }
    (F(A, L), E(A, L), A++);
  }
  return (d && B(), o);
}
function In(e, t, n) {
  if (e.simpleLineWalkFastPath) return Dn(e, t, n);
  const {
    widths: r,
    lineEndFitAdvances: s,
    lineEndPaintAdvances: i,
    kinds: l,
    breakableWidths: a,
    breakablePrefixWidths: c,
    discretionaryHyphenWidth: o,
    tabStopAdvance: u,
    chunks: d,
  } = e;
  if (r.length === 0 || d.length === 0) return 0;
  const g = Ce(),
    h = g.lineFitEpsilon;
  let f = 0,
    p = 0,
    S = !1,
    W = 0,
    P = 0,
    B = 0,
    m = 0,
    y = -1,
    F = 0,
    E = 0,
    x = null;
  function T() {
    ((y = -1), (F = 0), (E = 0), (x = null));
  }
  function A(k = B, N = m, w = p) {
    (f++,
      n == null ||
        n({
          startSegmentIndex: W,
          startGraphemeIndex: P,
          endSegmentIndex: k,
          endGraphemeIndex: N,
          width: w,
        }),
      (p = 0),
      (S = !1),
      T());
  }
  function L(k, N) {
    ((S = !0), (W = k), (P = 0), (B = k + 1), (m = 0), (p = N));
  }
  function b(k, N, w) {
    ((S = !0), (W = k), (P = N), (B = k), (m = N + 1), (p = w));
  }
  function R(k, N) {
    if (!S) {
      L(k, N);
      return;
    }
    ((p += N), (B = k + 1), (m = 0));
  }
  function j(k, N) {
    if (!Ne(l[k])) return;
    const w = l[k] === "tab" ? 0 : s[k],
      z = l[k] === "tab" ? N : i[k];
    ((y = k + 1), (F = p - N + w), (E = p - N + z), (x = l[k]));
  }
  function H(k) {
    $(k, 0);
  }
  function $(k, N) {
    var D;
    const w = a[k],
      z = (D = c[k]) != null ? D : null;
    for (let J = N; J < w.length; J++) {
      const Q = bt(w, z, J, g.preferPrefixWidthsForBreakableRuns);
      if (!S) {
        b(k, J, Q);
        continue;
      }
      p + Q > t + h ? (A(), b(k, J, Q)) : ((p += Q), (B = k), (m = J + 1));
    }
    S && B === k && m === w.length && ((B = k + 1), (m = 0));
  }
  function O(k) {
    var Q;
    if (x !== "soft-hyphen") return !1;
    const N = a[k];
    if (N === null) return !1;
    const w =
        g.preferPrefixWidthsForBreakableRuns && (Q = c[k]) != null ? Q : N,
      z = w !== N,
      { fitCount: D, fittedWidth: J } = zn(w, p, t, h, o, z);
    return D === 0
      ? !1
      : ((p = J),
        (B = k),
        (m = D),
        T(),
        D === N.length
          ? ((B = k + 1), (m = 0), !0)
          : (A(k, D, J + o), $(k, D), !0));
  }
  function X(k) {
    (f++,
      n == null ||
        n({
          startSegmentIndex: k.startSegmentIndex,
          startGraphemeIndex: 0,
          endSegmentIndex: k.consumedEndSegmentIndex,
          endGraphemeIndex: 0,
          width: 0,
        }),
      T());
  }
  for (let k = 0; k < d.length; k++) {
    const N = d[k];
    if (N.startSegmentIndex === N.endSegmentIndex) {
      X(N);
      continue;
    }
    ((S = !1),
      (p = 0),
      (W = N.startSegmentIndex),
      (P = 0),
      (B = N.startSegmentIndex),
      (m = 0),
      T());
    let w = N.startSegmentIndex;
    for (; w < N.endSegmentIndex; ) {
      const z = l[w],
        D = z === "tab" ? Gn(p, u) : r[w];
      if (z === "soft-hyphen") {
        (S &&
          ((B = w + 1),
          (m = 0),
          (y = w + 1),
          (F = p + o),
          (E = p + o),
          (x = z)),
          w++);
        continue;
      }
      if (!S) {
        (D > t && a[w] !== null ? H(w) : L(w, D), j(w, D), w++);
        continue;
      }
      if (p + D > t + h) {
        const Q = p + (z === "tab" ? 0 : s[w]),
          me = p + (z === "tab" ? D : i[w]);
        if (x === "soft-hyphen" && g.preferEarlySoftHyphenBreak && F <= t + h) {
          A(y, 0, E);
          continue;
        }
        if (x === "soft-hyphen" && O(w)) {
          w++;
          continue;
        }
        if (Ne(z) && Q <= t + h) {
          (R(w, D), A(w + 1, 0, me), w++);
          continue;
        }
        if (y >= 0 && F <= t + h) {
          if (B > y || (B === y && m > 0)) {
            A();
            continue;
          }
          const pe = y;
          (A(pe, 0, E), (w = pe));
          continue;
        }
        if (D > t && a[w] !== null) {
          (A(), H(w), w++);
          continue;
        }
        A();
        continue;
      }
      (R(w, D), j(w, D), w++);
    }
    if (S) {
      const z = y === N.consumedEndSegmentIndex ? E : p;
      A(N.consumedEndSegmentIndex, 0, z);
    }
  }
  return f;
}
let Be = null,
  ft = new WeakMap();
function Et() {
  return (
    Be === null &&
      (Be = new Intl.Segmenter(void 0, { granularity: "grapheme" })),
    Be
  );
}
function jn(e) {
  return {
    widths: [],
    lineEndFitAdvances: [],
    lineEndPaintAdvances: [],
    kinds: [],
    simpleLineWalkFastPath: !0,
    segLevels: null,
    breakableWidths: [],
    breakablePrefixWidths: [],
    discretionaryHyphenWidth: 0,
    tabStopAdvance: 0,
    chunks: [],
    segments: [],
  };
}
function Hn(e, t, n) {
  const r = Et(),
    s = Ce(),
    { cache: i, emojiCorrection: l } = On(t, Mn(e.normalized)),
    a = se("-", ie("-", i), l),
    o = se(" ", ie(" ", i), l) * 8;
  if (e.len === 0) return jn();
  const u = [],
    d = [],
    g = [],
    h = [];
  let f = e.chunks.length <= 1;
  const p = n ? [] : null,
    S = [],
    W = [],
    P = n ? [] : null,
    B = Array.from({ length: e.len }),
    m = Array.from({ length: e.len });
  function y(x, T, A, L, b, R, j, H) {
    (b !== "text" && b !== "space" && b !== "zero-width-break" && (f = !1),
      u.push(T),
      d.push(A),
      g.push(L),
      h.push(b),
      p == null || p.push(R),
      S.push(j),
      W.push(H),
      P !== null && P.push(x));
  }
  for (let x = 0; x < e.len; x++) {
    B[x] = u.length;
    const T = e.texts[x],
      A = e.isWordLike[x],
      L = e.kinds[x],
      b = e.starts[x];
    if (L === "soft-hyphen") {
      (y(T, 0, a, a, L, b, null, null), (m[x] = u.length));
      continue;
    }
    if (L === "hard-break") {
      (y(T, 0, 0, 0, L, b, null, null), (m[x] = u.length));
      continue;
    }
    if (L === "tab") {
      (y(T, 0, 0, 0, L, b, null, null), (m[x] = u.length));
      continue;
    }
    const R = ie(T, i);
    if (L === "text" && R.containsCJK) {
      let O = "",
        X = 0;
      for (const k of r.segment(T)) {
        const N = k.segment;
        if (O.length === 0) {
          ((O = N), (X = k.index));
          continue;
        }
        if (
          xe.has(O) ||
          wt.has(N) ||
          Le.has(N) ||
          (s.carryCJKAfterClosingQuote && re(N) && xt(O))
        ) {
          O += N;
          continue;
        }
        const w = ie(O, i),
          z = se(O, w, l);
        (y(O, z, z, z, "text", b + X, null, null), (O = N), (X = k.index));
      }
      if (O.length > 0) {
        const k = ie(O, i),
          N = se(O, k, l);
        y(O, N, N, N, "text", b + X, null, null);
      }
      m[x] = u.length;
      continue;
    }
    const j = se(T, R, l),
      H =
        L === "space" || L === "preserved-space" || L === "zero-width-break"
          ? 0
          : j,
      $ = L === "space" || L === "zero-width-break" ? 0 : j;
    if (A && T.length > 1) {
      const O = Pn(T, R, i, l),
        X = s.preferPrefixWidthsForBreakableRuns ? Tn(T, R, i, l) : null;
      y(T, j, H, $, L, b, O, X);
    } else y(T, j, H, $, L, b, null, null);
    m[x] = u.length;
  }
  const F = $n(e.chunks, B, m),
    E = p === null ? null : jt(e.normalized, p);
  return P !== null
    ? {
        widths: u,
        lineEndFitAdvances: d,
        lineEndPaintAdvances: g,
        kinds: h,
        simpleLineWalkFastPath: f,
        segLevels: E,
        breakableWidths: S,
        breakablePrefixWidths: W,
        discretionaryHyphenWidth: a,
        tabStopAdvance: o,
        chunks: F,
        segments: P,
      }
    : {
        widths: u,
        lineEndFitAdvances: d,
        lineEndPaintAdvances: g,
        kinds: h,
        simpleLineWalkFastPath: f,
        segLevels: E,
        breakableWidths: S,
        breakablePrefixWidths: W,
        discretionaryHyphenWidth: a,
        tabStopAdvance: o,
        chunks: F,
      };
}
function $n(e, t, n) {
  var s, i, l;
  const r = [];
  for (let a = 0; a < e.length; a++) {
    const c = e[a],
      o =
        c.startSegmentIndex < t.length
          ? t[c.startSegmentIndex]
          : (s = n[n.length - 1]) != null
            ? s
            : 0,
      u =
        c.endSegmentIndex < t.length
          ? t[c.endSegmentIndex]
          : (i = n[n.length - 1]) != null
            ? i
            : 0,
      d =
        c.consumedEndSegmentIndex < t.length
          ? t[c.consumedEndSegmentIndex]
          : (l = n[n.length - 1]) != null
            ? l
            : 0;
    r.push({
      startSegmentIndex: o,
      endSegmentIndex: u,
      consumedEndSegmentIndex: d,
    });
  }
  return r;
}
function qn(e, t, n, r) {
  const s = wn(e, Ce(), r == null ? void 0 : r.whiteSpace);
  return Hn(s, t, n);
}
function We(e, t, n) {
  return qn(e, t, !0, n);
}
function dt(e, t, n) {
  let r = n.get(e);
  if (r !== void 0) return r;
  r = [];
  const s = Et();
  for (const i of s.segment(t[e])) r.push(i.segment);
  return (n.set(e, r), r);
}
function Kn(e) {
  let t = ft.get(e);
  return (t !== void 0 || ((t = new Map()), ft.set(e, t)), t);
}
function Jn(e, t, n, r) {
  return r > 0 && e[r - 1] === "soft-hyphen" && !(t === r && n > 0);
}
function Un(e, t, n, r, s, i, l) {
  let a = "";
  const c = Jn(t, r, s, i);
  for (let o = r; o < i; o++)
    t[o] === "soft-hyphen" ||
      t[o] === "hard-break" ||
      (o === r && s > 0 ? (a += dt(o, e, n).slice(s).join("")) : (a += e[o]));
  return (
    l > 0
      ? (c && (a += "-"),
        (a += dt(i, e, n)
          .slice(r === i ? s : 0, l)
          .join("")))
      : c && (a += "-"),
    a
  );
}
function Qn(e, t, n, r, s, i, l) {
  return {
    text: Un(e.segments, e.kinds, t, r, s, i, l),
    width: n,
    start: { segmentIndex: r, graphemeIndex: s },
    end: { segmentIndex: i, graphemeIndex: l },
  };
}
function Yn(e, t, n) {
  return Qn(
    e,
    t,
    n.width,
    n.startSegmentIndex,
    n.startGraphemeIndex,
    n.endSegmentIndex,
    n.endGraphemeIndex,
  );
}
function Se(e, t, n) {
  const r = [];
  if (e.widths.length === 0) return { lineCount: 0, height: 0, lines: r };
  const s = Kn(e),
    i = In(e, t, (l) => {
      r.push(Yn(e, s, l));
    });
  return { lineCount: i, height: i * n, lines: r };
}
const Xn = { pressureWidth: !0 },
  pt = new Set(["glow", "wobble", "pressureWidth", "taper", "gradient"]);
function gt(e) {
  var r;
  const t = Ae(Ae({}, Xn), e),
    n = [];
  for (const [i, l] of Object.entries(t)) {
    if (l === !1 || l == null) continue;
    let a, c, o;
    if (l === !0) {
      if (((a = pt.has(i) ? i : void 0), !a)) continue;
      ((c = {}), (o = 0));
    } else {
      if (
        l.enabled === !1 ||
        ((a = (r = l.effect) != null ? r : pt.has(i) ? i : void 0), !a)
      )
        continue;
      const s = l,
        { effect: u, order: d, enabled: g } = s;
      ((c = ot(s, ["effect", "order", "enabled"])), (o = d != null ? d : 0));
    }
    n.push({ effect: a, order: o, config: c });
  }
  return (n.sort((i, l) => i.order - l.order), n);
}
function fe(e, t) {
  return e.find((n) => n.effect === t);
}
function vt(e, t) {
  return e.filter((n) => n.effect === t);
}
const Vn = new Intl.Segmenter(void 0, { granularity: "grapheme" });
function Ge(e, t) {
  return typeof e == "number" ? e : parseFloat(e) * t;
}
function He(e) {
  return Array.from(Vn.segment(e), (t) => t.segment);
}
function Lt(e) {
  const t = e.replace("#", "");
  return t.length === 3
    ? [
        parseInt(t[0] + t[0], 16),
        parseInt(t[1] + t[1], 16),
        parseInt(t[2] + t[2], 16),
        1,
      ]
    : t.length === 4
      ? [
          parseInt(t[0] + t[0], 16),
          parseInt(t[1] + t[1], 16),
          parseInt(t[2] + t[2], 16),
          parseInt(t[3] + t[3], 16) / 255,
        ]
      : t.length === 8
        ? [
            parseInt(t.slice(0, 2), 16),
            parseInt(t.slice(2, 4), 16),
            parseInt(t.slice(4, 6), 16),
            parseInt(t.slice(6, 8), 16) / 255,
          ]
        : [
            parseInt(t.slice(0, 2), 16),
            parseInt(t.slice(2, 4), 16),
            parseInt(t.slice(4, 6), 16),
            1,
          ];
}
function Zn(e, t, n) {
  const r = Math.round(e[0] + (t[0] - e[0]) * n),
    s = Math.round(e[1] + (t[1] - e[1]) * n),
    i = Math.round(e[2] + (t[2] - e[2]) * n),
    l = e[3] + (t[3] - e[3]) * n;
  return l >= 1
    ? `rgb(${r},${s},${i})`
    : `rgba(${r},${s},${i},${l.toFixed(3)})`;
}
function ei(e, t, n) {
  if (t.length === 0) return "#000";
  if (t.length === 1) return t[0];
  const r = ((((e + n * 0.1) % 1) + 1) % 1) * (t.length - 1),
    s = Math.min(Math.floor(r), t.length - 2),
    i = r - s;
  return Zn(Lt(t[s]), Lt(t[s + 1]), i);
}
function ti(e, t, n, r) {
  return `hsl(${(e * 360 + r * 137.5) % 360}, ${t}%, ${n}%)`;
}
function mt(e) {
  let t = (e * 2654435761) | 0;
  return (
    (t = ((t >>> 16) ^ t) * 73244475),
    (t = ((t >>> 16) ^ t) * 73244475),
    (t = (t >>> 16) ^ t),
    (t & 2147483647) / 2147483647
  );
}
function _t(e, t) {
  const n = Math.floor(e),
    r = e - n,
    s = r * r * (3 - 2 * r);
  return mt(n + t * 7919) * (1 - s) + mt(n + 1 + t * 7919) * s;
}
function ni(e, t, n, r, s, i, l = [], a = 0, c) {
  var k, N, w, z, D, J, Q, me, pe, Ke, Je, Ue, Qe, Ye, Xe, Ve, Ze, et;
  const o = n.fontSize / n.unitsPerEm,
    u = n.x,
    d = n.y,
    g = vt(l, "glow"),
    h = fe(l, "wobble"),
    f = fe(l, "pressureWidth"),
    p = fe(l, "taper"),
    S = fe(l, "gradient"),
    W = f
      ? Math.max(0, Math.min((k = f.config.strength) != null ? k : 1, 1))
      : 0,
    P = h ? ((N = h.config.amplitude) != null ? N : 1.5) : 0,
    B = h ? ((w = h.config.frequency) != null ? w : 8) : 0,
    m = (z = h == null ? void 0 : h.config.mode) != null ? z : "sine",
    y = p
      ? Math.max(0, Math.min((D = p.config.startLength) != null ? D : 0.15, 1))
      : 0,
    F = p
      ? Math.max(0, Math.min((J = p.config.endLength) != null ? J : 0.15, 1))
      : 0,
    E = S == null ? void 0 : S.config.colors,
    x = E === "rainbow",
    T = Array.isArray(E) ? E : void 0,
    A = (Q = S == null ? void 0 : S.config.saturation) != null ? Q : 80,
    L = (me = S == null ? void 0 : S.config.lightness) != null ? me : 55,
    b = (G, q, Z) =>
      h
        ? m === "noise"
          ? G + P * (_t(q * 0.1 + Z * 0.7, a) * 2 - 1)
          : G + P * Math.sin(B * (q * 0.01 + Z * 0.7) + a)
        : G,
    R = (G, q, Z) =>
      h
        ? m === "noise"
          ? q + P * (_t(G * 0.1 + Z * 0.5, a * 1.3 + 1e3) * 2 - 1)
          : q + P * Math.cos(B * (G * 0.01 + Z * 0.5) + a * 1.3)
        : q,
    j = (G) => u + G * o,
    H = (G) => d + (G + n.ascender) * o,
    $ = (G) => (x ? ti(G, A, L, a) : T ? ei(G, T, a) : i),
    O = !!S,
    X = (G) => {
      let q = 1;
      return (
        y > 0 && G < y && (q = Math.min(q, G / y)),
        F > 0 && G > 1 - F && (q = Math.min(q, (1 - G) / F)),
        q
      );
    };
  for (const G of t.s) {
    if (r < G.d) continue;
    const q = r - G.d,
      Z = Math.min(q / G.a, 1),
      U = G.p;
    if (U.length === 0) continue;
    const Wt = U.reduce((_, v) => _ + v[2], 0) / U.length,
      oe = Math.max(Wt, 0.5) * o;
    if (U.length === 1) {
      if (Z <= 0) continue;
      const _ = U[0],
        v = j(b(_[0], _[1], 0)),
        M = H(R(_[0], _[1], 0));
      let I = oe + (Math.max(_[2], 0.5) * o - oe) * W;
      I *= X(0.5);
      for (const K of g)
        (e.save(),
          (e.shadowBlur = Ge(
            (pe = K.config.radius) != null ? pe : 8,
            n.fontSize,
          )),
          (e.shadowColor = (Ke = K.config.color) != null ? Ke : i),
          (e.shadowOffsetX = ((Je = K.config.offsetX) != null ? Je : 0) * o),
          (e.shadowOffsetY = ((Ue = K.config.offsetY) != null ? Ue : 0) * o),
          (e.fillStyle = (Qe = K.config.color) != null ? Qe : i),
          e.beginPath(),
          s === "round"
            ? e.arc(v, M, I / 2, 0, Math.PI * 2)
            : e.rect(v - I / 2, M - I / 2, I, I),
          e.fill(),
          e.restore());
      ((e.fillStyle = $(0)),
        e.beginPath(),
        s === "round"
          ? (e.arc(v, M, I / 2, 0, Math.PI * 2), e.fill())
          : e.fillRect(v - I / 2, M - I / 2, I, I));
      continue;
    }
    let _e = 0;
    for (let _ = 1; _ < U.length; _++) {
      const v = U[_][0] - U[_ - 1][0],
        M = U[_][1] - U[_ - 1][1];
      _e += Math.sqrt(v * v + M * M);
    }
    const be = _e * Z;
    if (be <= 0) continue;
    const Y = [];
    let ge = 0;
    for (let _ = 1; _ < U.length; _++) {
      const v = U[_ - 1],
        M = U[_],
        I = M[0] - v[0],
        K = M[1] - v[1],
        ne = Math.sqrt(I * I + K * K);
      if (ge + ne <= be)
        (Y.push({
          x0: j(b(v[0], v[1], _ - 1)),
          y0: H(R(v[0], v[1], _ - 1)),
          x1: j(b(M[0], M[1], _)),
          y1: H(R(M[0], M[1], _)),
          width0: v[2],
          width1: M[2],
          segProgress: (ge + ne / 2) / _e,
        }),
          (ge += ne));
      else {
        const le = be - ge,
          ee = ne > 0 ? le / ne : 0,
          ae = v[0] + I * ee,
          ue = v[1] + K * ee,
          Ot = v[2] + (M[2] - v[2]) * ee;
        Y.push({
          x0: j(b(v[0], v[1], _ - 1)),
          y0: H(R(v[0], v[1], _ - 1)),
          x1: j(b(ae, ue, _)),
          y1: H(R(ae, ue, _)),
          width0: v[2],
          width1: Ot,
          segProgress: (ge + le / 2) / _e,
        });
        break;
      }
    }
    if (Y.length === 0) continue;
    const Ee = Y.slice(),
      tt = c != null ? c : W > 0 || O || h || p ? 2 : void 0;
    if (tt != null) {
      const _ = tt * o,
        v = [];
      for (const M of Y) {
        const I = M.x1 - M.x0,
          K = M.y1 - M.y0,
          ne = Math.sqrt(I * I + K * K),
          le = Math.max(1, Math.ceil(ne / _));
        for (let ee = 0; ee < le; ee++) {
          const ae = ee / le,
            ue = (ee + 1) / le;
          v.push({
            x0: M.x0 + I * ae,
            y0: M.y0 + K * ae,
            x1: M.x0 + I * ue,
            y1: M.y0 + K * ue,
            width0: M.width0 + (M.width1 - M.width0) * ae,
            width1: M.width0 + (M.width1 - M.width0) * ue,
            segProgress: M.segProgress,
          });
        }
      }
      for (let M = 0; M < v.length; M++)
        v[M].segProgress = v.length > 1 ? M / (v.length - 1) : 0;
      ((Y.length = 0), Y.push(...v));
    }
    const nt = (_) => {
        const v = ((_.width0 + _.width1) / 2) * o;
        return Math.max(oe + (v - oe) * W, 0.5 * o) * X(_.segProgress);
      },
      it = W > 0 || p,
      Pt = () => {
        if (it)
          for (const _ of Y)
            ((e.lineWidth = nt(_)),
              e.beginPath(),
              e.moveTo(_.x0, _.y0),
              e.lineTo(_.x1, _.y1),
              e.stroke());
        else {
          ((e.lineWidth = oe), e.beginPath(), e.moveTo(Y[0].x0, Y[0].y0));
          for (const _ of Y) e.lineTo(_.x1, _.y1);
          e.stroke();
        }
      },
      Tt = () => {
        for (const _ of Y)
          ((e.strokeStyle = $(_.segProgress)),
            it && (e.lineWidth = nt(_)),
            e.beginPath(),
            e.moveTo(_.x0, _.y0),
            e.lineTo(_.x1, _.y1),
            e.stroke());
      };
    ((e.lineCap = s), (e.lineJoin = "round"));
    for (const _ of g) {
      (e.save(),
        (e.shadowBlur = Ge(
          (Ye = _.config.radius) != null ? Ye : 8,
          n.fontSize,
        )),
        (e.shadowColor = (Xe = _.config.color) != null ? Xe : i),
        (e.shadowOffsetX = ((Ve = _.config.offsetX) != null ? Ve : 0) * o),
        (e.shadowOffsetY = ((Ze = _.config.offsetY) != null ? Ze : 0) * o),
        (e.strokeStyle = (et = _.config.color) != null ? et : i),
        (e.lineWidth = oe),
        e.beginPath(),
        e.moveTo(Ee[0].x0, Ee[0].y0));
      for (const v of Ee) e.lineTo(v.x1, v.y1);
      (e.stroke(), e.restore());
    }
    O ? Tt() : ((e.strokeStyle = i), Pt());
  }
}
const yt = new Map();
function di(e) {
  return lt(this, null, function* () {
    yield Mt(e.family, e.fontUrl);
  });
}
function Mt(e, t) {
  if (typeof document == "undefined") return Promise.resolve();
  for (const r of document.fonts)
    if (r.family === e) {
      if (r.status === "loaded") return null;
      if (r.status === "loading") return r.loaded.then(() => {});
    }
  let n = yt.get(t);
  return (
    n ||
      ((n = new FontFace(e, `url(${t})`, {
        featureSettings: "'calt' 0, 'liga' 0",
      })
        .load()
        .then((r) => {
          document.fonts.add(r);
        })),
      yt.set(t, n)),
    n
  );
}
function ii(e, t, n, r, s) {
  var P, B;
  const i = `${n}px ${t}`,
    l = He(e),
    a = new Map(),
    c = [];
  for (const m of l) {
    let y = a.get(m);
    if (y === void 0) {
      if (
        m ===
        `
`
      )
        y = 0;
      else {
        const F = Se(We(m, i, { whiteSpace: "pre-wrap" }), 1 / 0, r);
        y = F.lines.length > 0 ? F.lines[0].width / n : 0;
      }
      a.set(m, y);
    }
    c.push(y);
  }
  const o = We(e, i, { whiteSpace: "pre-wrap" }),
    u = Se(o, 1 / 0, r),
    d = Math.max(0, ...u.lines.map((m) => m.width)) / n,
    g = Se(o, s, r),
    h = [];
  for (let m = 0; m < l.length; m++)
    for (let y = 0; y < l[m].length; y++) h.push(m);
  const f = [];
  let p = 0;
  for (const m of g.lines) {
    const y = [],
      F = new Set();
    for (let E = 0; E < m.text.length; E++) {
      const x = h[p + E];
      F.has(x) || (F.add(x), y.push(x));
    }
    if (
      ((p += m.text.length),
      p < e.length &&
        e[p] ===
          `
`)
    ) {
      const E = h[p];
      (y.push(E), p++);
    }
    f.push(y);
  }
  if (p < e.length) {
    const m = [],
      y = new Set();
    for (let F = p; F < e.length; F++) {
      const E = h[F];
      y.has(E) || (y.add(E), m.push(E));
    }
    f.push(m);
  }
  const S = [],
    W = new Map();
  for (let m = 0; m < l.length - 1; m++) {
    const y = l[m],
      F = l[m + 1];
    if (
      y ===
        `
` ||
      F ===
        `
`
    ) {
      S.push(0);
      continue;
    }
    const E = `${y}${F}`;
    let x = W.get(E);
    if (x === void 0) {
      const T = Se(We(E, i, { whiteSpace: "pre-wrap" }), 1 / 0, r);
      ((x =
        (T.lines.length > 0 ? T.lines[0].width / n : 0) -
        ((P = a.get(y)) != null ? P : 0) -
        ((B = a.get(F)) != null ? B : 0)),
        Math.abs(x) < 0.001 && (x = 0),
        W.set(E, x));
    }
    S.push(x);
  }
  return { lines: f, charWidths: c, kernings: S, intrinsicWidth: d };
}
const ke = { glyphGap: 0.1, wordGap: 0.15, lineGap: 0.3, unknownDuration: 0.2 };
function Ft(e, t, n) {
  var u, d, g, h, f;
  const r = (u = n == null ? void 0 : n.glyphGap) != null ? u : ke.glyphGap,
    s = (d = n == null ? void 0 : n.wordGap) != null ? d : ke.wordGap,
    i = (g = n == null ? void 0 : n.lineGap) != null ? g : ke.lineGap,
    l =
      (h = n == null ? void 0 : n.unknownDuration) != null
        ? h
        : ke.unknownDuration,
    a = He(e),
    c = [];
  let o = 0;
  for (const p of a) {
    const S = t.glyphData[p],
      W = !!S,
      P = W ? ((f = S.t) != null ? f : 1) : l;
    (c.push({ char: p, offset: o, duration: P, hasGlyph: W }),
      (o += P),
      p ===
      `
`
        ? (o += i)
        : p === " "
          ? (o += s)
          : (o += r));
  }
  if (c.length > 0) {
    const p = a[a.length - 1];
    o -=
      p ===
      `
`
        ? i
        : p === " "
          ? s
          : r;
  }
  return { entries: c, totalDuration: Math.max(0, o) };
}
function pi({
  family: e,
  fontUrl: t,
  glyphData: n,
  lineCap: r = "round",
  unitsPerEm: s = 1e3,
  ascender: i = 800,
  descender: l = -200,
}) {
  return {
    family: e,
    lineCap: r,
    fontUrl: t,
    fontFaceCSS: `@font-face { font-family: '${e}'; src: url(${t}); }`,
    unitsPerEm: s,
    ascender: i,
    descender: l,
    glyphData: n,
  };
}
const $e = "--tegaki-time",
  de = "--tegaki-progress",
  qe = "--tegaki-duration",
  si = 0.2,
  ri = 1.8,
  oi = 0.2;
let At = !1;
function li() {
  if (
    !At &&
    ((At = !0), typeof CSS != "undefined" && "registerProperty" in CSS)
  )
    for (const e of [$e, de, qe])
      try {
        CSS.registerProperty({
          name: e,
          syntax: "<number>",
          inherits: !0,
          initialValue: "0",
        });
      } catch (t) {}
}
function ai(e, t, n, r, s, i, l, a = [], c = 0) {
  var W, P, B, m, y, F, E, x, T;
  const o = vt(a, "glow"),
    u = fe(a, "wobble"),
    d = fe(a, "gradient");
  let g = 0,
    h = 0;
  if (u) {
    const A = ((W = u.config.amplitude) != null ? W : 1.5) * (s / 100),
      L = (P = u.config.frequency) != null ? P : 8;
    ((g = A * Math.sin(L * (r * 0.01) + c)),
      (h = A * Math.cos(L * (n * 0.01) + c * 1.3)));
  }
  const f = n + g,
    p = r + h;
  let S = l;
  if (d) {
    const A = d.config.colors;
    if (A === "rainbow") {
      const L = (B = d.config.saturation) != null ? B : 80,
        b = (m = d.config.lightness) != null ? m : 55;
      S = `hsl(${(c * 137.5) % 360}, ${L}%, ${b}%)`;
    } else
      Array.isArray(A) && A.length > 0 && (S = A[Math.floor(c) % A.length]);
  }
  (e.save(), (e.font = `${s}px ${i}`), (e.textBaseline = "alphabetic"));
  for (const A of o)
    (e.save(),
      (e.shadowBlur = Ge((y = A.config.radius) != null ? y : 8, s)),
      (e.shadowColor = (F = A.config.color) != null ? F : l),
      (e.shadowOffsetX = (E = A.config.offsetX) != null ? E : 0),
      (e.shadowOffsetY = (x = A.config.offsetY) != null ? x : 0),
      (e.fillStyle = (T = A.config.color) != null ? T : l),
      e.fillText(t, f, p),
      e.restore());
  ((e.fillStyle = S), e.fillText(t, f, p), e.restore());
}
const Pe = "max(0.2em, 0.9em - 0.5lh)";
function St(e) {
  var a, c, o, u;
  const t = (a = e.text) != null ? a : "",
    n = Bt(e.font),
    r = n == null ? void 0 : n.family,
    s = t && n ? Ft(t, n, e.timing).totalDuration : 0,
    i =
      typeof e.time == "number"
        ? e.time
        : typeof e.time == "object" &&
            ((c = e.time) == null ? void 0 : c.mode) === "controlled"
          ? e.time.unit === "progress"
            ? e.time.value * s
            : e.time.value
          : typeof e.time == "object" &&
              ((o = e.time) == null ? void 0 : o.mode) === "uncontrolled" &&
              (u = e.time.initialTime) != null
            ? u
            : 0,
    l = s > 0 ? i / s : 0;
  return {
    "data-tegaki": "root",
    style: {
      position: "relative",
      maxWidth: "100%",
      width: "auto",
      height: "auto",
      fontFamily: r != null ? r : void 0,
      [qe]: s,
      [$e]: i,
      [de]: l,
    },
  };
}
function kt(e, t) {
  var i, l;
  const n = (i = e.text) != null ? i : "",
    r =
      e.time === "css" ||
      (typeof e.time == "object" &&
        ((l = e.time) == null ? void 0 : l.mode) === "css"),
    s = e.showOverlay;
  return t(
    "span",
    { style: { display: "block", position: "relative" } },
    t("span", {
      "data-tegaki": "sentinel",
      "aria-hidden": "true",
      style: {
        position: "absolute",
        width: 0,
        overflow: "hidden",
        pointerEvents: "none",
        fontSize: "inherit",
        lineHeight: "inherit",
        visibility: "hidden",
        transition: r
          ? `font-size 0.001s, line-height 0.001s, color 0.001s, ${de} 0.001s`
          : "font-size 0.001s, line-height 0.001s, color 0.001s",
      },
    }),
    t(
      "canvas",
      {
        "data-tegaki": "canvas",
        "aria-hidden": "true",
        style: {
          position: "absolute",
          inset: `calc(-1 * ${Pe}) -0.2em`,
          width: "calc(100% + 0.4em)",
          height: `calc(100% + 2 * ${Pe})`,
          pointerEvents: "none",
          overflow: "visible",
        },
      },
      t(
        "span",
        {
          "data-tegaki": "canvas-fallback",
          style: { display: "inline-block", padding: `${Pe} 0.2em` },
        },
        n,
      ),
    ),
    t(
      "span",
      {
        "data-tegaki": "overlay",
        style: {
          display: "block",
          userSelect: "auto",
          whiteSpace: "pre-wrap",
          overflowWrap: "break-word",
          paddingRight: 1,
          WebkitTextFillColor: s ? void 0 : "transparent",
          color: s ? "rgba(255, 0, 0, 0.4)" : void 0,
        },
      },
      n,
    ),
  );
}
function ui(e, t, ...n) {
  const r = document.createElement(e);
  for (const [s, i] of Object.entries(t))
    if (s === "style" && typeof i == "object")
      for (const [l, a] of Object.entries(i))
        a != null &&
          (l.startsWith("--")
            ? r.style.setProperty(l, String(a))
            : (r.style[l] =
                typeof a == "number" && l !== "opacity" && l !== "zIndex"
                  ? `${a}px`
                  : a));
    else
      s === "aria-hidden"
        ? r.setAttribute("aria-hidden", String(i))
        : s.startsWith("data-") && r.setAttribute(s, String(i));
  for (const s of n)
    typeof s == "string"
      ? r.appendChild(document.createTextNode(s))
      : r.appendChild(s);
  return r;
}
function ci(e) {
  return e == null
    ? { mode: "uncontrolled" }
    : typeof e == "number"
      ? { mode: "controlled", value: e }
      : e === "css"
        ? { mode: "css" }
        : e;
}
function Bt(e) {
  if (typeof e == "string") {
    const t = hi.getBundle(e);
    if (!t)
      throw new Error(
        `TegakiEngine: no bundle registered for "${e}". Call TegakiEngine.registerBundle() first.`,
      );
    return t;
  }
  return e;
}
var te,
  hi =
    ((te = class {
      constructor(t, n) {
        C(this, "_rootEl");
        C(this, "_contentEl", null);
        C(this, "_sentinelEl");
        C(this, "_canvasEl");
        C(this, "_overlayEl");
        C(this, "_canvasFallbackEl");
        C(this, "_text", "");
        C(this, "_font", null);
        C(this, "_timeControl", { mode: "uncontrolled" });
        C(this, "_effects");
        C(this, "_timing");
        C(this, "_segmentSize");
        C(this, "_showOverlay", !1);
        C(this, "_onComplete");
        C(this, "_resolvedEffects", gt(void 0));
        C(this, "_seed");
        C(this, "_timeline", { entries: [], totalDuration: 0 });
        C(this, "_layout", null);
        C(this, "_fontReady", !1);
        C(this, "_containerWidth", 0);
        C(this, "_fontSize", 0);
        C(this, "_lineHeight", 0);
        C(this, "_currentColor", "");
        C(this, "_internalTime", 0);
        C(this, "_cssTime", 0);
        C(this, "_playing", !0);
        C(this, "_smoothedBoost", 0);
        C(this, "_delayRemaining", 0);
        C(this, "_loopGapRemaining", 0);
        C(this, "_lastTs", null);
        C(this, "_rafId", 0);
        C(this, "_prevCompleted", !1);
        C(this, "_prefersReducedMotion", !1);
        C(this, "_destroyed", !1);
        C(this, "_resizeObserver");
        C(this, "_mql", null);
        C(this, "_onResize", (t) => {
          const n = t[0];
          if (!n) return;
          const r = n.contentRect.width,
            s = getComputedStyle(this._rootEl),
            i = Number.parseFloat(s.fontSize),
            l = Number.parseFloat(s.lineHeight),
            a = Number.isNaN(l) ? this._fallbackLineHeight(i) : l,
            c = s.color;
          let o = !1,
            u = !1;
          (r !== this._containerWidth &&
            ((this._containerWidth = r), (u = !0), (o = !0)),
            i !== this._fontSize && ((this._fontSize = i), (u = !0), (o = !0)),
            a !== this._lineHeight &&
              ((this._lineHeight = a), (u = !0), (o = !0)),
            c !== this._currentColor && ((this._currentColor = c), (o = !0)),
            u && this._recomputeLayout(),
            o && this._render());
        });
        C(this, "_onSentinelTransition", (t) => {
          const n = getComputedStyle(this._sentinelEl);
          let r = !1;
          if (
            t.propertyName === "font-size" ||
            t.propertyName === "line-height"
          ) {
            const s = Number.parseFloat(n.fontSize),
              i = Number.parseFloat(n.lineHeight),
              l = Number.isNaN(i) ? this._fallbackLineHeight(s) : i;
            (s !== this._fontSize || l !== this._lineHeight) &&
              ((this._fontSize = s),
              (this._lineHeight = l),
              this._recomputeLayout(),
              (r = !0));
          }
          if (t.propertyName === "color") {
            const s = n.color;
            s !== this._currentColor && ((this._currentColor = s), (r = !0));
          }
          (t.propertyName === "--tegaki-progress" &&
            ((this._cssTime =
              Number(n.getPropertyValue(de)) * this._timeline.totalDuration),
            (r = !0)),
            r && this._render());
        });
        C(this, "_onReducedMotionChange", (t) => {
          ((this._prefersReducedMotion = t.matches),
            this._prefersReducedMotion &&
              this._timeControl.mode === "uncontrolled" &&
              this._timeline.totalDuration > 0 &&
              (this._internalTime = this._timeline.totalDuration),
            this._evaluatePlayback(),
            this._render());
        });
        C(this, "_tick", (t) => {
          var u, d, g, h;
          if (this._destroyed) return;
          this._lastTs === null && (this._lastTs = t);
          const n = (t - this._lastTs) / 1e3;
          this._lastTs = t;
          const r = this._timeControl;
          if (r.mode !== "uncontrolled") return;
          const s = (u = r.speed) != null ? u : 1,
            i = (d = r.loop) != null ? d : !1,
            l = (g = r.catchUp) != null ? g : 0,
            a = this._timeline.totalDuration;
          if (a === 0 || (!i && this._internalTime >= a)) {
            ((this._internalTime = a),
              (this._rafId = requestAnimationFrame(this._tick)));
            return;
          }
          if (this._delayRemaining > 0) {
            ((this._delayRemaining = Math.max(0, this._delayRemaining - n)),
              (this._rafId = requestAnimationFrame(this._tick)));
            return;
          }
          if (this._loopGapRemaining > 0) {
            ((this._loopGapRemaining = Math.max(0, this._loopGapRemaining - n)),
              this._loopGapRemaining <= 0 &&
                ((this._internalTime = 0),
                (this._prevCompleted = !1),
                (this._smoothedBoost = 0)),
              this._notifyTimeChange(),
              this._render(),
              this._updateCssProperties(),
              (this._rafId = requestAnimationFrame(this._tick)));
            return;
          }
          let c = s;
          if (l > 0) {
            const f = Math.max(0, a - this._internalTime),
              p = l * Math.max(0, f - 2),
              S = 4,
              W = i ? 30 : 2,
              P = p > this._smoothedBoost ? S : W;
            ((this._smoothedBoost +=
              (p - this._smoothedBoost) * (1 - Math.exp(-P * n))),
              (c = s + this._smoothedBoost));
          }
          let o = this._internalTime + n * c;
          if (o >= a) {
            if (i) {
              const f = (h = r.loopGap) != null ? h : 0;
              f > 0 ? ((o = a), (this._loopGapRemaining = f)) : (o = o % a);
            } else o = a;
            this._smoothedBoost = 0;
          }
          ((this._internalTime = o),
            this._notifyTimeChange(),
            this._checkCompletion(),
            this._render(),
            this._updateCssProperties(),
            (this._rafId = requestAnimationFrame(this._tick)));
        });
        if (
          (li(),
          (this._seed = Math.random() * 1e3),
          (this._rootEl = t),
          !(n != null && n.adopt))
        ) {
          const r = kt(n != null ? n : {}, ui);
          (t.appendChild(r), (this._contentEl = r));
          const s = St(n != null ? n : {});
          for (const [i, l] of Object.entries(s.style))
            l != null &&
              (i.startsWith("--")
                ? t.style.setProperty(i, String(l))
                : (t.style[i] =
                    typeof l == "number" && i !== "opacity" && i !== "zIndex"
                      ? `${l}px`
                      : l));
          t.dataset.tegaki = "root";
        }
        ((this._sentinelEl = t.querySelector('[data-tegaki="sentinel"]')),
          (this._canvasEl = t.querySelector('[data-tegaki="canvas"]')),
          (this._canvasFallbackEl = t.querySelector(
            '[data-tegaki="canvas-fallback"]',
          )),
          (this._overlayEl = t.querySelector('[data-tegaki="overlay"]')),
          (this._resizeObserver = new ResizeObserver(this._onResize)),
          this._resizeObserver.observe(this._rootEl),
          this._sentinelEl.addEventListener(
            "transitionend",
            this._onSentinelTransition,
          ),
          typeof window != "undefined" &&
            ((this._mql = window.matchMedia(
              "(prefers-reduced-motion: reduce)",
            )),
            (this._prefersReducedMotion = this._mql.matches),
            this._mql.addEventListener("change", this._onReducedMotionChange)),
          this._measure(),
          n && this.update(n));
      }
      static registerBundle(t) {
        te._bundles.set(t.family, t);
      }
      static getBundle(t) {
        return te._bundles.get(t);
      }
      static renderElements(t, n) {
        return { rootProps: St(t), content: kt(t, n) };
      }
      get currentTime() {
        const t = this._timeControl;
        return t.mode === "css"
          ? this._cssTime
          : t.mode === "controlled"
            ? t.unit === "progress"
              ? t.value * this._timeline.totalDuration
              : t.value
            : this._internalTime;
      }
      get duration() {
        return this._timeline.totalDuration;
      }
      get isPlaying() {
        return this._playing;
      }
      get isComplete() {
        return (
          this._timeline.totalDuration > 0 &&
          this.currentTime >= this._timeline.totalDuration
        );
      }
      get element() {
        return this._rootEl;
      }
      play() {
        this._timeControl.mode === "uncontrolled" &&
          ((this._playing = !0), this._evaluatePlayback());
      }
      pause() {
        this._timeControl.mode === "uncontrolled" &&
          ((this._playing = !1), this._evaluatePlayback());
      }
      seek(t) {
        this._timeControl.mode === "uncontrolled" &&
          ((this._internalTime = Math.max(
            0,
            Math.min(t, this._timeline.totalDuration),
          )),
          (this._delayRemaining = 0),
          (this._loopGapRemaining = 0),
          this._checkCompletion(),
          this._notifyTimeChange(),
          this._render(),
          this._updateCssProperties());
      }
      restart() {
        var t;
        this._timeControl.mode === "uncontrolled" &&
          ((this._internalTime = 0),
          (this._playing = !0),
          (this._prevCompleted = !1),
          (this._delayRemaining =
            (t = this._timeControl.delay) != null ? t : 0),
          (this._loopGapRemaining = 0),
          this._notifyTimeChange(),
          this._evaluatePlayback());
      }
      update(t) {
        var l, a, c, o, u, d;
        if (this._destroyed) return;
        let n = !1,
          r = !1,
          s = !1,
          i = !1;
        if (
          ("text" in t &&
            t.text !== this._text &&
            ((this._text = (l = t.text) != null ? l : ""), (n = !0), (r = !0)),
          "font" in t)
        ) {
          const g = (a = Bt(t.font)) != null ? a : null;
          g !== this._font && (this._loadFont(g), (n = !0), (r = !0), (i = !0));
        }
        if ("time" in t) {
          const g = ci(t.time),
            h = this._timeControl,
            f = g.mode !== h.mode,
            p =
              g.mode === "controlled" &&
              h.mode === "controlled" &&
              (g.value !== h.value || g.unit !== h.unit),
            S =
              g.mode === "uncontrolled" &&
              h.mode === "uncontrolled" &&
              (g.speed !== h.speed ||
                g.playing !== h.playing ||
                g.loop !== h.loop ||
                g.delay !== h.delay ||
                g.loopGap !== h.loopGap ||
                g.catchUp !== h.catchUp);
          if (f || p || S) {
            if (((this._timeControl = g), g.mode === "uncontrolled")) {
              this._playing = (c = g.playing) != null ? c : !0;
              const W =
                  h.mode === "uncontrolled" && (o = h.delay) != null ? o : 0,
                P = (u = g.delay) != null ? u : 0;
              (f || W !== P) &&
                ((this._delayRemaining = P), (this._loopGapRemaining = 0));
            }
            ((i = !0), (s = !0), this._updateSentinelTransition());
          }
        }
        ("effects" in t &&
          t.effects !== this._effects &&
          ((this._effects = t.effects),
          (this._resolvedEffects = gt(this._effects)),
          (s = !0)),
          "timing" in t &&
            t.timing !== this._timing &&
            ((this._timing = t.timing), (n = !0)),
          "segmentSize" in t &&
            t.segmentSize !== this._segmentSize &&
            ((this._segmentSize = t.segmentSize), (s = !0)),
          "showOverlay" in t &&
            t.showOverlay !== this._showOverlay &&
            ((this._showOverlay = (d = t.showOverlay) != null ? d : !1),
            this._updateOverlayStyle(),
            (s = !0)),
          "onComplete" in t && (this._onComplete = t.onComplete),
          n && this._recomputeTimeline(),
          r && this._recomputeLayout(),
          i && this._evaluatePlayback(),
          (s || n || r) && (this._updateDom(), this._render()));
      }
      destroy() {
        var t, n;
        ((this._destroyed = !0),
          this._stopLoop(),
          this._resizeObserver.disconnect(),
          this._sentinelEl.removeEventListener(
            "transitionend",
            this._onSentinelTransition,
          ),
          (t = this._mql) == null ||
            t.removeEventListener("change", this._onReducedMotionChange),
          (n = this._contentEl) == null || n.remove());
      }
      _fallbackLineHeight(t) {
        return this._font
          ? ((this._font.ascender - this._font.descender) /
              this._font.unitsPerEm) *
              t
          : t * 1.2;
      }
      _measure() {
        const t = getComputedStyle(this._rootEl);
        ((this._containerWidth = this._rootEl.getBoundingClientRect().width),
          (this._fontSize = Number.parseFloat(t.fontSize)));
        const n = Number.parseFloat(t.lineHeight);
        ((this._lineHeight = Number.isNaN(n)
          ? this._fallbackLineHeight(this._fontSize)
          : n),
          (this._currentColor = t.color));
      }
      _updateDom() {
        var t, n;
        ((this._rootEl.style.fontFamily =
          (n = (t = this._font) == null ? void 0 : t.family) != null ? n : ""),
          this._updateCssProperties(),
          this._overlayEl.textContent !== this._text &&
            (this._overlayEl.textContent = this._text),
          (this._canvasFallbackEl.textContent = this._text));
      }
      _updateCssProperties() {
        const t = this.currentTime,
          n = this._timeline.totalDuration;
        (this._rootEl.style.setProperty(qe, String(n)),
          this._rootEl.style.setProperty($e, String(t)),
          this._rootEl.style.setProperty(de, String(n > 0 ? t / n : 0)));
      }
      _updateOverlayStyle() {
        this._showOverlay
          ? ((this._overlayEl.style.webkitTextFillColor = ""),
            (this._overlayEl.style.color = "rgba(255, 0, 0, 0.4)"))
          : ((this._overlayEl.style.webkitTextFillColor = "transparent"),
            (this._overlayEl.style.color = ""));
      }
      _updateSentinelTransition() {
        const t = this._timeControl.mode === "css";
        this._sentinelEl.style.transition = t
          ? `font-size 0.001s, line-height 0.001s, color 0.001s, ${de} 0.001s`
          : "font-size 0.001s, line-height 0.001s, color 0.001s";
      }
      _loadFont(t) {
        if (((this._font = t), (this._fontReady = !1), !t)) return;
        const n = Mt(t.family, t.fontUrl);
        if (n === null) {
          this._fontReady = !0;
          return;
        }
        const r = t;
        n.then(() => {
          this._font === r &&
            !this._destroyed &&
            ((this._fontReady = !0),
            this._recomputeTimeline(),
            this._recomputeLayout(),
            this._evaluatePlayback(),
            this._updateDom(),
            this._render());
        });
      }
      _recomputeTimeline() {
        this._font && this._text
          ? (this._timeline = Ft(this._text, this._font, this._timing))
          : (this._timeline = { entries: [], totalDuration: 0 });
      }
      _recomputeLayout() {
        var n;
        const t = (n = this._font) == null ? void 0 : n.family;
        this._fontReady &&
        t &&
        this._fontSize &&
        this._containerWidth &&
        this._text
          ? (this._layout = ii(
              this._text,
              t,
              this._fontSize,
              this._lineHeight,
              this._containerWidth,
            ))
          : (this._layout = null);
      }
      _evaluatePlayback() {
        this._timeControl.mode === "uncontrolled" &&
        this._playing &&
        this._font &&
        this._fontReady &&
        !this._prefersReducedMotion
          ? this._startLoop()
          : this._stopLoop();
      }
      _startLoop() {
        this._rafId ||
          ((this._lastTs = null),
          (this._smoothedBoost = 0),
          (this._rafId = requestAnimationFrame(this._tick)));
      }
      _stopLoop() {
        this._rafId && (cancelAnimationFrame(this._rafId), (this._rafId = 0));
      }
      _notifyTimeChange() {
        const t = this._timeControl;
        t.mode === "uncontrolled" &&
          t.onTimeChange &&
          t.onTimeChange(this._internalTime);
      }
      _checkCompletion() {
        var n;
        const t =
          this._timeline.totalDuration > 0 &&
          this.currentTime >= this._timeline.totalDuration;
        t && !this._prevCompleted
          ? ((this._prevCompleted = !0),
            (n = this._onComplete) == null || n.call(this))
          : t || (this._prevCompleted = !1);
      }
      _render() {
        var W, P;
        const t = this._canvasEl,
          n = this._font,
          r = this._layout,
          s = this._fontSize;
        if (!(n != null && n.glyphData) || !r || !s) return;
        const i = window.devicePixelRatio || 1,
          l = t.offsetWidth,
          a = t.offsetHeight;
        (t.width !== Math.round(l * i) || t.height !== Math.round(a * i)) &&
          ((t.width = Math.round(l * i)), (t.height = Math.round(a * i)));
        const c = t.getContext("2d");
        if (!c) return;
        (c.setTransform(i, 0, 0, i, 0, 0), c.clearRect(0, 0, l, a));
        const o = si * s,
          u = this._lineHeight,
          d = Math.max(oi * s, (ri * s - u) / 2);
        c.translate(o, d);
        const g = this._currentColor || "black",
          h = (u - ((n.ascender - n.descender) / n.unitsPerEm) * s) / 2,
          f = He(this._text),
          p = this.currentTime;
        let S = 0;
        for (const B of r.lines) {
          let m = 0;
          for (const y of B) {
            const F = f[y];
            if (
              F ===
              `
`
            )
              continue;
            const E = this._timeline.entries[y],
              x = (W = r.charWidths[y]) != null ? W : 0,
              T = (P = r.kernings[y]) != null ? P : 0,
              A = n.glyphData[F];
            if (A && E.hasGlyph) {
              const L = Math.max(0, Math.min(p - E.offset, E.duration)),
                b = S + h;
              ni(
                c,
                A,
                {
                  x: m,
                  y: b,
                  fontSize: s,
                  unitsPerEm: n.unitsPerEm,
                  ascender: n.ascender,
                  descender: n.descender,
                },
                L,
                n.lineCap,
                g,
                this._resolvedEffects,
                this._seed + y,
                this._segmentSize,
              );
            } else if (!E.hasGlyph && p >= E.offset + E.duration) {
              const L = S + h + (n.ascender / n.unitsPerEm) * s;
              ai(
                c,
                F,
                m,
                L,
                s,
                n.family,
                g,
                this._resolvedEffects,
                this._seed + y,
              );
            }
            m += (x + T) * s;
          }
          S += u;
        }
      }
    }),
    C(te, "_bundles", new Map()),
    te);
export {
  hi as TegakiEngine,
  ii as computeTextLayout,
  Ft as computeTimeline,
  pi as createBundle,
  ni as drawGlyph,
  di as ensureFontFace,
  gt as resolveEffects,
};
