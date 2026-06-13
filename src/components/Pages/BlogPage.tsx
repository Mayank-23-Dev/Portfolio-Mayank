var c = Object.defineProperty,
  x = Object.defineProperties;
var d = Object.getOwnPropertyDescriptors;
var l = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty,
  h = Object.prototype.propertyIsEnumerable;
var o = (t, e, i) =>
  e in t
    ? c(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i })
    : (t[e] = i),
  s = (t, e) => {
    for (var i in e || (e = {})) p.call(e, i) && o(t, i, e[i]);
    if (l) for (var i of l(e)) h.call(e, i) && o(t, i, e[i]);
    return t;
  },
  n = (t, e) => x(t, d(e));
import { j as a } from "../ui/_uiVendor";
import { L as f } from "../ui/_reactVendor";
import { H as j } from "../ui/Landing_UI/Header";
import { b as u } from "../ui/Blog_UI/BlogPostsData";
import { m as r } from "../ui/_animationVendor";
import "../ui/Landing_UI/MenuToggleIcon";
import "../ui/AppShell";
import "../ui/_iconsVendor";
import "../ui/Landing_UI/ConnectDropdown";
import "../ui/_sharedIndex";
const m = (t = 0) => ({
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, delay: t, ease: [0.25, 0.1, 0.25, 1] },
}),
  b = (t) => {
    const [, e, i] = t.split("-");
    return `${i}/${e}`;
  },
  D = () =>
    a.jsxs("div", {
      className: "min-h-screen bg-[#faf9f6] text-zinc-900",
      children: [
        a.jsx("div", {
          className: "container relative mx-auto px-4 md:px-6 lg:px-8",
          children: a.jsx(j, {}),
        }),
        a.jsxs("main", {
          id: "main-content",
          className:
            "mx-auto w-full max-w-3xl px-6 pb-24 pt-10 md:px-8 md:pt-16",
          children: [
            a.jsx(
              r.h1,
              n(s({}, m(0)), {
                className:
                  "font-handwritten text-4xl text-zinc-950 md:text-5xl",
                children: "Writing",
              }),
            ),
            a.jsx(
              r.div,
              n(s({}, m(0.06)), {
                className: "mt-6 border-t border-zinc-300/80",
              }),
            ),
            a.jsx("ul", {
              className: "mt-0",
              children: u.map((t, e) =>
                a.jsx(
                  r.li,
                  n(s({}, m(0.1 + e * 0.06)), {
                    className: "border-b border-zinc-200/70",
                    children: a.jsxs(f, {
                      to: `/blog/${t.slug}`,
                      className:
                        "group flex items-baseline justify-between gap-6 py-5 transition-opacity hover:opacity-60",
                      children: [
                        a.jsx("span", {
                          className:
                            "text-[15px] font-semibold leading-snug text-zinc-950",
                          children: t.title,
                        }),
                        a.jsxs("span", {
                          className:
                            "flex shrink-0 items-baseline gap-6 text-[13px] text-zinc-400",
                          children: [
                            t.tags[0] && a.jsx("span", { children: t.tags[0] }),
                            a.jsx("time", {
                              dateTime: t.date,
                              className: "tabular-nums",
                              children: b(t.date),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  t.slug,
                ),
              ),
            }),
          ],
        }),
      ],
    });
export { D as default };

