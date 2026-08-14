import { j as e } from "../ui/_uiVendor.js";
import { L as o } from "../ui/_reactVendor.js";
import { H as r } from "../ui/Landing_UI/Header.js";
import { F as t } from "../ui/Landing_UI/Footer.js";
import { P as i } from "../ui/Landing_UI/PaperBackground.js";
import "../ui/Landing_UI/MenuToggleIcon.js";
import "../ui/AppShell.js";
import "../ui/_iconsVendor.js";
import "../ui/Landing_UI/ConnectDropdown.js";
import "../ui/_sharedIndex.js";
const HactiqCaseStudy = () =>
  e.jsxs(i, {
    children: [
      e.jsx("div", {
        className: "container mx-auto px-4 md:px-6 lg:px-8",
        children: e.jsx(r, {}),
      }),
      e.jsx("main", {
        className:
          "relative z-10 container mx-auto px-6 md:px-12 lg:px-24 pb-24 md:pb-32",
        children: e.jsxs("div", {
          className: "max-w-4xl",
          children: [
            e.jsxs(o, {
              to: "/projects",
              className:
                "inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-stone-800 transition-colors mb-8",
              children: ["<- ", "Back to Projects"],
            }),
            e.jsx("p", {
              className:
                "text-xs font-semibold uppercase tracking-[0.2em] text-stone-500 mb-3",
              children: "Project",
            }),
            e.jsxs("div", {
              className: "flex items-center gap-4 flex-wrap",
              children: [
                e.jsx("h1", {
                  className:
                    "text-4xl md:text-6xl font-bold leading-tight text-stone-900",
                  children: "Hactiq",
                }),
                e.jsx("span", {
                  className:
                    "inline-flex border-2 border-black bg-green-100 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-green-900",
                  children: "LIVE",
                }),
              ],
            }),
            e.jsx("p", {
              className:
                "mt-6 text-lg md:text-xl text-stone-600 leading-relaxed",
              children:
                "A personal clarity-first habit tracker built to help students and working professionals stay aware of progress without streak pressure.",
            }),
            e.jsx("section", {
              className: "mt-10",
              children: e.jsxs("div", {
                className: "border-2 border-black bg-white p-6",
                children: [
                  e.jsx("h2", {
                    className: "text-xl font-bold mb-4",
                    children: "Why It Started",
                  }),
                  e.jsx("p", {
                    className: "text-stone-700 leading-relaxed",
                    children:
                      "Hactiq started from a personal problem: planning days but losing track of where time actually went. Traditional templates felt generic or overwhelming, so I built a system that only tracks completed habits and makes effort visible over time.",
                  }),
                ],
              }),
            }),
            e.jsx("section", {
              className: "mt-8",
              children: e.jsxs("div", {
                className: "border-2 border-black bg-white p-6",
                children: [
                  e.jsx("h2", {
                    className: "text-xl font-bold mb-4",
                    children: "Core Features",
                  }),
                  e.jsxs("ul", {
                    className: "space-y-2 text-stone-700",
                    children: [
                      e.jsx("li", { children: "- Monthly habit trends" }),
                      e.jsx("li", {
                        children: "- Heatmap-based day visualization",
                      }),
                      e.jsx("li", {
                        children: "- Focus on clarity over streak pressure",
                      }),
                      e.jsx("li", {
                        children: "- Useful insights without overwhelm",
                      }),
                    ],
                  }),
                ],
              }),
            }),
            e.jsx("section", {
              className: "mt-8",
              children: e.jsxs("div", {
                className: "border-2 border-black bg-[#fff9d9] p-6",
                children: [
                  e.jsx("h2", {
                    className: "text-xl font-bold mb-3",
                    children: "Current Status",
                  }),
                  e.jsx("p", {
                    className: "text-stone-800 leading-relaxed",
                    children:
                      "Hactiq is currently free to use. The goal right now is usefulness and real impact, not monetization.",
                  }),
                ],
              }),
            }),
            e.jsxs("section", {
              className: "mt-8 flex flex-wrap",
              style: { marginTop: "36px", gap: "14px" },
              children: [
                e.jsxs("a", {
                  href: "https://www.hactiq.com",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "inline-flex px-6 py-3.5 text-sm md:text-base font-semibold border-2 border-black bg-black text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all",
                  style: {
                    minWidth: "192px",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                  },
                  children: ["Try Hactiq", " ->"],
                }),
                e.jsxs("a", {
                  href: "https://www.linkedin.com/search/results/content/?keywords=%23hactiq",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "inline-flex px-6 py-3.5 text-sm md:text-base font-semibold border-2 border-black bg-white text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all",
                  style: {
                    minWidth: "192px",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                  },
                  children: ["Project Journey", " ->"],
                }),
              ],
            }),
          ],
        }),
      }),
      e.jsx(t, {}),
    ],
  });
export { HactiqCaseStudy as default };


