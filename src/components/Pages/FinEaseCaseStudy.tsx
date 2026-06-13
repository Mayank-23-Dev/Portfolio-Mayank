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
const FinEaseCaseStudy = () =>
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
          className: "mx-auto max-w-4xl",
          children: [
            e.jsxs(o, {
              to: "/projects",
              className:
                "inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-stone-800 transition-colors mb-6",
              children: ["<- ", "Back to Projects"],
            }),
            e.jsx("p", {
              className:
                "text-xs font-semibold uppercase tracking-[0.2em] text-stone-500 mb-3",
              children: "Project",
            }),
            e.jsx("h1", {
              className:
                "text-4xl md:text-6xl font-bold leading-tight text-stone-900",
              children: "FinEase",
            }),
            e.jsx("p", {
              className:
                "mt-6 text-lg md:text-xl text-stone-600 leading-relaxed",
              children:
                "An AI-powered Personal Financial Dashboard built to simplify tracking, budgeting, and financial decision-making for students and young professionals.",
            }),
            e.jsxs("div", {
              className: "mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6",
              children: [
                e.jsx("div", {
                  className: "h-full border-2 border-black bg-white p-6 md:p-7",
                  children: e.jsxs("div", {
                    className: "flex h-full flex-col",
                    children: [
                      e.jsx("h2", {
                        className: "text-lg font-bold mb-4",
                        children: "Tech Stack",
                      }),
                      e.jsxs("ul", {
                        className: "space-y-2.5 text-stone-700",
                        style: { fontSize: "15px", lineHeight: "1.75rem" },
                        children: [
                          e.jsx("li", {
                            children: "- Frontend: Vite + React (TypeScript)",
                          }),
                          e.jsx("li", {
                            children: "- Backend: Node.js + Express",
                          }),
                          e.jsx("li", {
                            children: "- Database: Supabase (PostgreSQL)",
                          }),
                          e.jsx("li", {
                            children: "- Hosting & Auth: Firebase",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                e.jsx("div", {
                  className: "h-full border-2 border-black bg-white p-6 md:p-7",
                  children: e.jsxs("div", {
                    className: "flex h-full flex-col",
                    children: [
                      e.jsx("h2", {
                        className: "text-lg font-bold mb-4",
                        children: "AI Models",
                      }),
                      e.jsxs("ul", {
                        className: "space-y-2.5 text-stone-700",
                        style: { fontSize: "15px", lineHeight: "1.75rem" },
                        children: [
                          e.jsx("li", {
                            children: "- Llama-3.1-8B-Instant (Chat)",
                          }),
                          e.jsx("li", {
                            children:
                              "- Llama-4-Scout-17B-16E-Instruct (Insights)",
                          }),
                          e.jsx("li", {
                            children: "- GPT-OSS-120B (Advanced reasoning)",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
            e.jsx("section", {
              className: "mt-10",
              style: { marginTop: "44px" },
              children: e.jsxs("div", {
                className: "border-2 border-black bg-white p-6 md:p-7",
                children: [
                  e.jsx("h2", {
                    className: "text-xl font-bold mb-3",
                    children: "What It Solves",
                  }),
                  e.jsx("p", {
                    className: "text-stone-700",
                    style: { fontSize: "15px", lineHeight: "1.9" },
                    children:
                      "FinEase started as a Semester 2 mini-project idea around one problem: money is scattered across UPI apps, subscriptions, wallets, banks, and cash, so people lose visibility. FinEase centralizes tracking and adds AI-backed analysis to turn raw transactions into actionable insights.",
                  }),
                  e.jsx("h3", {
                    className: "text-lg font-bold mt-7 mb-3",
                    children: "Core Features",
                  }),
                  e.jsxs("ul", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2.5 text-stone-700",
                    style: { fontSize: "15px", lineHeight: "1.75rem" },
                    children: [
                      e.jsx("li", {
                        children: "- Smart expense & income tracking",
                      }),
                      e.jsx("li", { children: "- Budget monitoring" }),
                      e.jsx("li", {
                        children: "- Spending analytics & reports",
                      }),
                      e.jsx("li", {
                        children: "- AI-powered financial insights",
                      }),
                      e.jsx("li", { children: "- Receipt scanner" }),
                      e.jsx("li", {
                        children: "- Savings & portfolio tracking",
                      }),
                      e.jsx("li", {
                        children: "- AutoPay & recurring transaction tracking",
                      }),
                      e.jsx("li", {
                        children: "- Accessible on desktop and mobile",
                      }),
                    ],
                  }),
                ],
              }),
            }),
            e.jsx("section", {
              className: "mt-8",
              style: { marginTop: "32px" },
              children: e.jsxs("div", {
                className: "border-2 border-black bg-[#fff9d9] p-6 md:p-7",
                children: [
                  e.jsx("h2", {
                    className: "text-xl font-bold mb-3",
                    children: "Highlight",
                  }),
                  e.jsx("p", {
                    className: "text-stone-800",
                    style: { fontSize: "15px", lineHeight: "1.9" },
                    children:
                      "Presented at the Grand Finale of Protech at PSIT Kanpur, where FinEase secured 2nd Rank.",
                  }),
                ],
              }),
            }),
            e.jsxs("section", {
              className: "mt-8 flex flex-wrap",
              style: { marginTop: "36px", gap: "14px" },
              children: [
                e.jsxs("a", {
                  href: "https://finease.tech/",
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
                  children: ["Live Product", " ->"],
                }),
                e.jsxs("a", {
                  href: "https://github.com/Mayank-23-Dev/Finease",
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
                  children: ["GitHub Repo", " ->"],
                }),
              ],
            }),
          ],
        }),
      }),
      e.jsx(t, {}),
    ],
  });
export { FinEaseCaseStudy as default };
