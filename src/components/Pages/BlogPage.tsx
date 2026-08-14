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
            "mx-auto w-full max-w-5xl px-6 pb-24 pt-10 md:px-8 md:pt-16",
          children: [
            a.jsx(
              r.h1,
              n(s({}, m(0)), {
                className:
                  "font-handwritten text-4xl text-zinc-950 md:text-5xl",
                children: "Blogs",
              }),
            ),
            a.jsx(
              r.div,
              n(s({}, m(0.06)), {
                className: "mt-6 border-t border-zinc-300/80",
              }),
            ),
            a.jsx("div", {
              className: "mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6",
              children: u.map((t, e) =>
                a.jsx(
                  r.div,
                  n(s({}, m(0.1 + e * 0.06)), {
                    className: "group flex flex-col bg-white border border-zinc-200/50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300",
                    children: a.jsxs(f, {
                      to: `/blog/${t.slug}`,
                      className: "flex flex-col h-full",
                      children: [
                        // Image Container
                        a.jsx("div", {
                          className: "relative w-full aspect-[16/10] overflow-hidden bg-zinc-50 shrink-0 border-b border-zinc-100",
                          children: t.coverImage
                            ? a.jsx("img", {
                                src: t.coverImage,
                                alt: t.title,
                                className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",
                                loading: "lazy",
                              })
                            : a.jsx("div", {
                                className: "w-full h-full bg-[#e8e8e2] flex items-center justify-center text-zinc-500 font-medium text-xs tracking-wider uppercase",
                                children: t.tags[0],
                              }),
                        }),
                        // Content Area
                        a.jsxs("div", {
                          className: "p-5 flex flex-col flex-1",
                          children: [
                            // Category Tag
                            t.tags[0] &&
                              a.jsx("span", {
                                className: "text-[11px] font-semibold text-emerald-600 uppercase tracking-wider",
                                children: t.tags[0],
                              }),
                            // Title
                            a.jsx("h3", {
                              className: "text-[16px] font-bold text-zinc-900 mt-2 line-clamp-2 leading-snug group-hover:text-emerald-700 transition-colors flex-1",
                              children: t.title,
                            }),
                            // Excerpt
                            a.jsx("p", {
                              className: "text-[13px] text-zinc-500 mt-2 line-clamp-2 font-normal leading-relaxed",
                              children: t.excerpt || t.subtitle,
                            }),
                            // Footer row (Date & Read time)
                            a.jsxs("div", {
                              className: "flex items-center gap-3 mt-4 pt-3 border-t border-zinc-100 text-[12px] text-zinc-400 font-medium",
                              children: [
                                a.jsx("time", {
                                  dateTime: t.date,
                                  className: "tabular-nums",
                                  children: t.displayDate,
                                }),
                                a.jsx("span", { children: "•" }),
                                a.jsx("span", { children: t.readingTime }),
                              ],
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

