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

const ShiqCaseStudy = () =>
  e.jsxs(i, {
    children: [
      e.jsx("div", {
        className: "container mx-auto px-4 md:px-5 lg:px-8",
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
            /* ── Title + IN PRODUCTION badge ── */
            e.jsxs("div", {
              className: "flex items-center gap-4 flex-wrap",
              children: [
                e.jsx("h1", {
                  className:
                    "text-4xl md:text-6xl font-bold leading-tight text-stone-900",
                  children: "Shiq",
                }),
                e.jsx("span", {
                  className:
                    "inline-flex border-2 border-black bg-green-100 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-green-900",
                  children: "In Production",
                }),
              ],
            }),
            e.jsx("p", {
              className:
                "mt-6 text-lg md:text-xl text-stone-600 leading-relaxed",
              children:
                "A personal content production studio dashboard built for solo creators who want to go from idea to published post without losing track of anything.",
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
                      "Managing content across Notion, Google Docs, scattered voice memos, and Instagram drafts was chaos. Shiq brings everything — ideas, scripts, assets, scheduling, and publishing — into one focused workspace built for how creators actually work.",
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
                      e.jsx("li", { children: "- Idea capture and script drafting in one place" }),
                      e.jsx("li", { children: "- Content calendar with platform-aware scheduling" }),
                      e.jsx("li", { children: "- Asset management for thumbnails, clips, and captions" }),
                      e.jsx("li", { children: "- Publishing workflow tracker from draft to live" }),
                      e.jsx("li", { children: "- Designed for solo creators, zero team overhead" }),
                    ],
                  }),
                ],
              }),
            }),
            e.jsx("section", {
              className: "mt-8",
              children: e.jsxs("div", {
                className: "border-2 border-black bg-[#d1fae5] p-6",
                children: [
                  e.jsx("h2", {
                    className: "text-xl font-bold mb-3",
                    children: "Current Status",
                  }),
                  e.jsx("p", {
                    className: "text-stone-800 leading-relaxed",
                    children:
                      "Shiq is actively in production and being used. The focus right now is on refining the core workflow based on real usage before expanding features.",
                  }),
                ],
              }),
            }),
            e.jsxs("section", {
              className: "mt-8 flex flex-wrap",
              style: { marginTop: "36px", gap: "14px" },
              children: [
                e.jsxs("a", {
                  href: "https://www.shiq.app",   // ← update with your real URL
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
                  children: ["Try Shiq", " ->"],
                }),
                e.jsxs("a", {
                  href: "https://www.linkedin.com/search/results/content/?keywords=%23shiq",
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

export { ShiqCaseStudy as default };