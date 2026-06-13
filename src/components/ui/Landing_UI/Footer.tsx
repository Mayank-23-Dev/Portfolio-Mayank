var m = (l, n, o) =>
  new Promise((r, i) => {
    var s = (a) => {
        try {
          c(o.next(a));
        } catch (d) {
          i(d);
        }
      },
      t = (a) => {
        try {
          c(o.throw(a));
        } catch (d) {
          i(d);
        }
      },
      c = (a) => (a.done ? r(a.value) : Promise.resolve(a.value).then(s, t));
    c((o = o.apply(l, n)).next());
  });
import { j as e } from "../_uiVendor.js";
import { a as h, L as f } from "../_reactVendor.js";
const x = "connect@mayank-dev.in",
  u = () => {
    const [l, n] = h.useState(!1),
      o = [
        { label: "Contact", href: "/contact" },
        { label: "Instagram", href: "https://www.instagram.com/mayankdev.mov/#" },
        { label: "X (Twitter)", href: "https://x.com/Mayank_Dev23" },
        { label: "GitHub", href: "https://github.com/Mayank-23-Dev" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/mayankdev23" },
        { label: "LeetCode", href: "https://leetcode.com/u/Mayank_Dev_23/" },
      ],
      r = () => {
        (n(!0), window.setTimeout(() => n(!1), 1600));
      },
      i = () =>
        m(null, null, function* () {
          try {
            (yield navigator.clipboard.writeText(x), r());
          } catch (s) {
            const t = document.createElement("textarea");
            ((t.value = x),
              t.setAttribute("readonly", ""),
              (t.style.position = "fixed"),
              (t.style.opacity = "0"),
              document.body.appendChild(t),
              t.select(),
              document.execCommand("copy"),
              document.body.removeChild(t),
              r());
          }
        });
    return e.jsxs("div", {
      className: "w-full",
      children: [
        /* ── CONTACT CTA SECTION ── */
        e.jsx("div", {
          className: "container mx-auto px-4 md:px-6 lg:px-8",
          children: e.jsxs("section", {
            className: "py-16 md:py-24 text-center border-t border-black/5",
            children: [
              e.jsx("h4", {
                className: "text-2xl md:text-4xl font-bold text-[#21180f] mb-4",
                style: { fontFamily: "'Sora', sans-serif" },
                children: "Want to build something? Let's talk.",
              }),
              e.jsx("p", {
                className:
                  "text-base md:text-xl text-[#4b3b29]/70 mb-10 max-w-2xl mx-auto",
                children:
                  "I am always looking for new challenges and opportunities to collaborate. Whether you want to hire a full stack developer India or just chat about tech, feel free to reach out.",
              }),
              e.jsx(f, {
                to: "/contact",
                className:
                  "daisy-button inline-flex items-center gap-2 text-base md:text-lg bg-[#A2FF86] hover:bg-black hover:text-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
                children: "Approach Now →",
              }),
            ],
          }),
        }),
        /* ── MAIN FOOTER ── */
        e.jsx("footer", {
          className:
            "group/footer relative isolate overflow-hidden border-t border-[#d9c7a8]/70 bg-[#fbf5ec] text-[#2c241b]",
          children: e.jsxs("div", {
            className: "footer-scene relative z-10",
            children: [
              e.jsx("img", {
                src: "/images/graphics/footer-light.webp",
                alt: "",
                className: "footer-scene__image footer-art pointer-events-none",
                loading: "eager",
                decoding: "async",
                "aria-hidden": "true",
              }),
              e.jsx("div", {
                className:
                  "footer-scene__content container relative z-10 mx-auto px-6",
                children: e.jsxs("div", {
                  className: "flex items-start justify-between",
                  children: [
                    e.jsxs("div", {
                      className: "max-w-md",
                      children: [
                        e.jsx(f, {
                          to: "/",
                          className:
                            "footer-brand inline-block text-xl font-bold leading-none tracking-tight text-[#21180f] transition-transform duration-300 hover:-translate-y-0.5 md:text-3xl lg:text-4xl",
                          children: "Mayank Dev",
                        }),
                        e.jsxs("div", {
                          className:
                            "mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs font-semibold text-[#4b3b29] md:mt-6 md:gap-x-5 md:gap-y-2 md:text-sm",
                          children: [
                            e.jsx("button", {
                              type: "button",
                              onClick: i,
                              "data-sound": "nav",
                              className: "footer-nav-link text-left",
                              children: l ? "Copied" : "Email",
                            }),
                            o.map((s) =>
                              e.jsx(
                                "a",
                                {
                                  href: s.href,
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className: "footer-nav-link",
                                  children: s.label,
                                },
                                s.label,
                              ),
                            ),
                          ],
                        }),
                      ],
                    }),
                    e.jsx("p", {
                      className: "footer-year",
                      "aria-label": `Copyright ${new Date().getFullYear()}`,
                      children: new Date().getFullYear(),
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
      ],
    });
  };
export { u as F };

