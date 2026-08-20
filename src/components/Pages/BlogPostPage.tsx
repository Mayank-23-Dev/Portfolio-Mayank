var N = Object.defineProperty,
  z = Object.defineProperties;
var w = Object.getOwnPropertyDescriptors;
var u = Object.getOwnPropertySymbols;
var k = Object.prototype.hasOwnProperty,
  $ = Object.prototype.propertyIsEnumerable;
var f = (a, t, r) =>
    t in a
      ? N(a, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (a[t] = r),
  l = (a, t) => {
    for (var r in t || (t = {})) k.call(t, r) && f(a, r, t[r]);
    if (u) for (var r of u(t)) $.call(t, r) && f(a, r, t[r]);
    return a;
  },
  m = (a, t) => z(a, w(t));
import { j as e } from "../ui/_uiVendor";
import { h as E, a as p, N as I, L as b } from "../ui/_reactVendor";
import { H as B } from "../ui/Landing_UI/Header";
import { g as C } from "../ui/Blog_UI/BlogPostsData";
import { m as d } from "../ui/_animationVendor";
import { P } from "../ui/Landing_UI/PaperBackground";
import "../ui/Landing_UI/MenuToggleIcon";
import "../ui/AppShell";
import "../ui/_iconsVendor";
import "../ui/Landing_UI/ConnectDropdown";
import "../ui/_sharedIndex";
const h = (a = 0) => ({
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay: a, ease: [0.25, 0.1, 0.25, 1] },
  }),
  j = { type: "spring", stiffness: 280, damping: 26 },
  M = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.038, delayChildren: 0.08 },
    },
  },
  V = {
    hidden: { opacity: 0, x: -6 },
    visible: { opacity: 1, x: 0, transition: l({}, j) },
  },
  A = {
    hidden: { opacity: 0, x: -5 },
    visible: { opacity: 1, x: 0, transition: l({}, j) },
  },
  v = (a) =>
    a
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, ""),
  CodeBlock = ({ code }: { code: string }) => {
    const [copied, setCopied] = p.useState(false);
    const handleCopy = async () => {
      try {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Failed to copy text", err);
      }
    };
    return e.jsxs("div", {
      className: "relative my-6 group",
      children: [
        e.jsx("pre", {
          className:
            "overflow-x-auto rounded-none border-2 border-black bg-white p-5 font-mono text-[13px] text-zinc-800 leading-relaxed shadow-[3px_3px_0px_0px_rgba(0,0,0,0.18)] max-w-full",
          children: e.jsx("code", {
            className: "block whitespace-pre-wrap break-words",
            children: code,
          }),
        }),
        e.jsx("button", {
          id: "copy-code-block-button",
          onClick: handleCopy,
          className:
            "absolute right-3 top-3 rounded-none border-2 border-black bg-daisy-green px-2.5 py-1 text-[11px] font-mono font-bold text-black shadow-[1px_1px_0px_0px_rgba(0,0,0,0.18)] transition-all hover:bg-emerald-300 active:translate-x-0.5 active:translate-y-0.5",
          children: copied ? "Copied!" : "Copy",
        }),
      ],
    });
  },
  renderTextWithLinks = (text: any) => {
    if (typeof text !== "string") return text;
    const linkRegex = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)|(https?:\/\/[^\s)]+)/g;
    const elements = [];
    let lastIdx = 0;
    let m;
    while ((m = linkRegex.exec(text)) !== null) {
      if (m.index > lastIdx) {
        elements.push(text.substring(lastIdx, m.index));
      }
      const label = m[1] || m[3];
      const url = m[2] || m[3];
      elements.push(
        e.jsx(
          "a",
          {
            href: url,
            target: "_blank",
            rel: "noopener noreferrer",
            className:
              "text-emerald-600 font-medium underline underline-offset-2 hover:text-emerald-800 transition-colors",
            children: label,
          },
          `link-${m.index}`
        )
      );
      lastIdx = linkRegex.lastIndex;
    }
    if (lastIdx < text.length) {
      elements.push(text.substring(lastIdx));
    }
    return elements.length > 0 ? elements : text;
  },
  G = () => {
    const { slug: a } = E(),
      t = a ? C(a) : void 0,
      [r, y] = p.useState(""),
      x = p.useMemo(() => {
        if (!t) return [];
        const s = new Map();
        return t.sections
          .filter((i) => i.heading)
          .map((i) => {
            var g;
            const n = v(i.heading),
              c = (g = s.get(n)) != null ? g : 0;
            s.set(n, c + 1);
            const o = c > 0 ? `${n}-${c}` : n;
            return { text: i.heading, id: o };
          });
      }, [t]);
    return (
      p.useEffect(
        () => (
          document.body.setAttribute("data-cursor-idle", "true"),
          () => document.body.removeAttribute("data-cursor-idle")
        ),
        [],
      ),
      p.useEffect(() => {
        if (x.length === 0) return;
        const s = new IntersectionObserver(
          (i) => {
            const n = i.filter((c) => c.isIntersecting);
            n.length > 0 && y(n[0].target.id);
          },
          { rootMargin: "-10% 0px -80% 0px", threshold: 0 },
        );
        return (
          x.forEach(({ id: i }) => {
            const n = document.getElementById(i);
            n && s.observe(n);
          }),
          () => s.disconnect()
        );
      }, [x]),
      p.useEffect(() => {
        t && (document.title = `${t.title} | Mayank Dev`);
      }, [t]),
      t
        ? e.jsxs(P, {
            className: "text-zinc-900",
            children: [
              e.jsx("div", {
                className:
                  "pointer-events-none fixed bottom-0 left-0 right-0 z-40 h-28",
                style: {
                  background:
                    "linear-gradient(to top, rgba(250,246,239,0.95) 0%, transparent 100%)",
                },
              }),
              e.jsx("div", {
                className: "container relative mx-auto px-4 md:px-6 lg:px-8",
                children: e.jsx(B, { disableSticky: !0 }),
              }),
              e.jsxs("main", {
                id: "main-content",
                className: "px-6 pb-24 pt-8 md:px-8 md:pt-14",
                children: [
                  x.length > 0 &&
                    e.jsxs(d.aside, {
                      className: "fixed top-28 hidden w-44 lg:block",
                      style: {
                        left: "calc(max(0px, (100vw - 1400px) / 2) + 4rem)",
                      },
                      variants: M,
                      initial: "hidden",
                      animate: "visible",
                      children: [
                        e.jsx(d.div, {
                          variants: V,
                          children: e.jsx(b, {
                            to: "/blog",
                            className:
                              "block text-[11px] uppercase tracking-[0.24em] text-zinc-400 transition-colors hover:text-zinc-900",
                            children: "← Back to Blogs",
                          }),
                        }),
                        e.jsx("nav", {
                          className: "mt-5 space-y-2.5",
                          "aria-label": "Table of contents",
                          children: x.map(({ text: s, id: i }) =>
                            e.jsx(
                              d.a,
                              {
                                variants: A,
                                href: `#${i}`,
                                onClick: (n) => {
                                  var o;
                                  n.preventDefault();
                                  const c = window.matchMedia(
                                    "(prefers-reduced-motion: reduce)",
                                  ).matches;
                                  (o = document.getElementById(i)) == null ||
                                    o.scrollIntoView({
                                      behavior: c ? "auto" : "smooth",
                                    });
                                },
                                "aria-current": r === i ? "location" : void 0,
                                className: `block text-[13px] font-semibold leading-snug transition-colors duration-200 ${r === i ? "text-zinc-950" : "text-zinc-400 hover:text-zinc-600"}`,
                                children: s,
                              },
                              i,
                            ),
                          ),
                        }),
                      ],
                    }),
                  e.jsx("div", {
                    className: "relative mx-auto w-full max-w-[548px] blog-post-article-container",
                    children: e.jsxs("article", {
                      children: [
                        e.jsx(
                          d.div,
                          m(l({}, h(0)), {
                            className: "mb-10 lg:hidden",
                            children: e.jsx(b, {
                              to: "/blog",
                              className:
                                "text-[11px] uppercase tracking-[0.24em] text-zinc-400 transition-colors hover:text-zinc-900",
                              children: "← Back to Blogs",
                            }),
                          }),
                        ),
                        e.jsxs(
                          d.header,
                          m(l({}, h(0.08)), {
                            children: [
                              e.jsxs("div", {
                                className:
                                  "flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] uppercase tracking-[0.22em] text-zinc-400",
                                children: [
                                  e.jsx("time", {
                                    dateTime: t.date,
                                    children: t.displayDate,
                                  }),
                                  e.jsx("span", {
                                    "aria-hidden": "true",
                                    children: "/",
                                  }),
                                  e.jsx("span", { children: t.readingTime }),
                                ],
                              }),
                              e.jsx("h1", {
                                className:
                                  "mt-5 text-4xl font-semibold leading-[1.05] text-zinc-950 md:text-5xl",
                                children: t.title,
                              }),
                              e.jsx("p", {
                                className:
                                  "mt-6 text-[17px] leading-8 text-zinc-600",
                                children: t.subtitle,
                              }),
                            ],
                          }),
                        ),
                        t.coverImage &&
                          e.jsx(
                            d.div,
                            m(l({}, h(0.12)), {
                              className: "mt-10 overflow-hidden lg:-mx-16 xl:-mx-24",
                              children: e.jsx("img", {
                                src: t.coverImage,
                                alt: t.title,
                                className:
                                  "w-full object-cover aspect-[16/9] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.18)]",
                                loading: "eager",
                              }),
                            }),
                          ),
                        e.jsx(
                          d.div,
                          m(l({}, h(0.16)), {
                            className:
                              "mt-12 space-y-12 border-t border-zinc-300/70 pt-10",
                            children: t.sections.map((s, i) => {
                              var n;
                              return e.jsxs(
                                "section",
                                {
                                  children: [
                                    s.heading &&
                                      e.jsx("h2", {
                                        id: v(s.heading),
                                        className:
                                          "mb-5 scroll-mt-10 text-2xl font-semibold leading-tight text-zinc-950",
                                        children: s.heading,
                                      }),
                                    s.paragraphs &&
                                      e.jsx("div", {
                                        className:
                                          "space-y-5 text-left text-[16px] leading-[1.85] text-zinc-700 sm:text-justify",
                                        children: s.paragraphs.map((c, o) =>
                                          e.jsx(
                                            "p",
                                            { children: renderTextWithLinks(c) },
                                            `${i}-p-${o}`,
                                          ),
                                        ),
                                      }),
                                    s.points &&
                                      e.jsx("ul", {
                                        className:
                                          "mt-6 space-y-3 text-left text-[15px] leading-7 text-zinc-700",
                                        children: s.points.map((c, o) =>
                                          e.jsx(
                                            "li",
                                            {
                                              className:
                                                "border-l border-zinc-300 pl-4",
                                              children: typeof c === "string" && c.includes(" — ") ? (() => {
                                                const parts = c.split(" — ");
                                                const keyword = parts[0];
                                                const rest = parts.slice(1).join(" — ");
                                                let colorClass = "bg-emerald-200 text-emerald-950 font-bold";
                                                const uKw = keyword.toUpperCase();
                                                if (uKw.includes("HEAD") || uKw.includes("BODY") || uKw.includes("ROBOTS") || uKw.includes("AUDIT") || uKw.includes("VERIF") || uKw.includes("ERROR")) {
                                                  colorClass = "bg-rose-200 text-rose-950 font-bold";
                                                } else if (uKw.includes("SCHEMA") || uKw.includes("ASSETS") || uKw.includes("PREVENTION") || uKw.includes("ATMOSPHERE") || uKw.includes("GLOW") || uKw.includes("CARD") || uKw.includes("SPOTLIGHT")) {
                                                  colorClass = "bg-amber-200 text-amber-950 font-bold";
                                                } else if (uKw.includes("LENIS") || uKw.includes("SMOOTH") || uKw.includes("SCROLL") || uKw.includes("SYNC") || uKw.includes("RAF") || uKw.includes("PHASE 2")) {
                                                  colorClass = "bg-cyan-200 text-cyan-950 font-bold";
                                                } else if (uKw.includes("GSAP") || uKw.includes("TRIGGER") || uKw.includes("SVG") || uKw.includes("CONNECTOR") || uKw.includes("BEZIER") || uKw.includes("REVEAL")) {
                                                  colorClass = "bg-purple-200 text-purple-950 font-bold";
                                                }
                                                return e.jsxs("span", {
                                                  children: [
                                                    e.jsx("span", {
                                                      className: `${colorClass} px-1.5 py-0.5 rounded font-bold text-xs uppercase tracking-wide mr-1.5`,
                                                      children: keyword,
                                                    }),
                                                    " — ",
                                                    renderTextWithLinks(rest),
                                                  ],
                                                });
                                              })() : renderTextWithLinks(c),
                                            },
                                            `${i}-pt-${o}`,
                                          ),
                                        ),
                                      }),
                                    s.code &&
                                      e.jsx(CodeBlock, { code: s.code }),
                                  ],
                                },
                                `${(n = s.heading) != null ? n : "section"}-${i}`,
                              );
                            }),
                          }),
                        ),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          })
        : e.jsx(I, { to: "/blog", replace: !0 })
    );
  };
export { G as default };

