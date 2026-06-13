import { j as e } from "../_uiVendor.js";
import { a } from "../_reactVendor.js";
const f = (o) =>
    ({
      yellow: "bg-daisy-yellow",
      green: "bg-daisy-green",
      purple: "bg-daisy-purple",
      blue: "bg-daisy-blue",
      orange: "bg-daisy-orange",
      mint: "bg-emerald-200",
      coral: "bg-red-200",
      lavender: "bg-violet-200",
      peach: "bg-orange-200",
      sky: "bg-sky-200",
      rose: "bg-pink-200",
      lime: "bg-lime-200",
      cyan: "bg-cyan-200",
      amber: "bg-amber-200",
      teal: "bg-teal-200",
    })[o] || "bg-white",
  j = ({
    content: o,
    children: n,
    color: d,
    rotate: l = "none",
    className: m = "",
    pinType: r = "pin",
    href: i,
  }) => {
    const u = f(d),
      p =
        l === "left"
          ? "card-rotate-left"
          : l === "right"
            ? "card-rotate-right"
            : "",
      c = a.useRef(null),
      [s, h] = a.useState(!1);
    a.useEffect(() => {
      if (!r || r !== "tape") return;
      const t = c.current,
        g = new IntersectionObserver(
          ([v]) => {
            v.isIntersecting && !s && h(!0);
          },
          { threshold: 0.35 },
        );
      return (
        t && g.observe(t),
        () => {
          t && g.unobserve(t);
        }
      );
    }, [s, r]);
    const b = () =>
      e.jsx("div", {
        className: `note-card ${u} ${p} ${m} p-4 font-mono text-black relative ${s ? "peel-animate" : ""}`,
        children: o || n,
      });
    return e.jsxs("div", {
      className: "relative group sticky-note-mobile",
      ref: c,
      children: [
        r === "tape" &&
          e.jsxs("div", {
            className:
              "absolute -top-1 left-1/2 transform -translate-x-1/2 z-10 transition-all duration-300 group-hover:rotate-6 group-hover:-translate-y-1 group-hover:shadow-lg pointer-events-none",
            children: [
              e.jsx("div", {
                className:
                  "w-12 h-4 bg-yellow-100 opacity-80 rounded-sm shadow-sm border border-yellow-200 transform -rotate-12 group-hover:opacity-90",
              }),
              e.jsx("div", {
                className:
                  "absolute inset-0 w-12 h-4 bg-black opacity-5 rounded-sm transform translate-y-0.5 group-hover:translate-y-1 transition-all duration-300",
              }),
            ],
          }),
        i
          ? e.jsx("a", {
              href: i,
              className: "block transition-transform hover:scale-105",
              children: e.jsx(b, {}),
            })
          : e.jsx(b, {}),
      ],
    });
  };
export { j as S };

