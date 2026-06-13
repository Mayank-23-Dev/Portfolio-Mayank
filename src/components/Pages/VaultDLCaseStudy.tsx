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

const VaultDLCaseStudy = () =>
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
            /* ── Title + IN PRODUCTION badge ── */
            e.jsxs("div", {
              className: "flex items-center gap-4 flex-wrap",
              children: [
                e.jsx("h1", {
                  className:
                    "text-4xl md:text-6xl font-bold leading-tight text-stone-900",
                  children: "VaultDL",
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
                "A modern, high-performance desktop application for Windows that lets you download media from hundreds of supported platforms — with full control over quality, format, and queue management.",
            }),
            /* ── Tech Stack + Key Stats ── */
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
                          e.jsx("li", { children: "- Shell: Electron (Node.js runtime)" }),
                          e.jsx("li", { children: "- UI: React + TypeScript + Vite" }),
                          e.jsx("li", { children: "- Engine: Python (yt-dlp)" }),
                          e.jsx("li", { children: "- Processing: FFmpeg (LGPL v2.1+)" }),
                          e.jsx("li", { children: "- Platform: Windows x64" }),
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
                        children: "Download Modes",
                      }),
                      e.jsxs("ul", {
                        className: "space-y-2.5 text-stone-700",
                        style: { fontSize: "15px", lineHeight: "1.75rem" },
                        children: [
                          e.jsx("li", { children: "- Video + Audio (merged)" }),
                          e.jsx("li", { children: "- Audio Only" }),
                          e.jsx("li", { children: "- Video Only" }),
                          e.jsx("li", { children: "- Thumbnail extraction" }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
            /* ── What It Solves ── */
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
                      "Most media downloaders are either buried in command-line tools or wrapped in sketchy websites full of ads. VaultDL gives you the power of yt-dlp and FFmpeg through a clean desktop interface — letting you pick quality, format, audio tracks, and subtitle languages without ever touching a terminal.",
                  }),
                  e.jsx("h3", {
                    className: "text-lg font-bold mt-7 mb-3",
                    children: "Core Features",
                  }),
                  e.jsxs("ul", {
                    className:
                      "grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2.5 text-stone-700",
                    style: { fontSize: "15px", lineHeight: "1.75rem" },
                    children: [
                      e.jsx("li", { children: "- Four download modes" }),
                      e.jsx("li", { children: "- Granular quality & format control" }),
                      e.jsx("li", { children: "- Concurrent queue with pause/resume" }),
                      e.jsx("li", { children: "- Download history tracking" }),
                      e.jsx("li", { children: "- Audio track & subtitle selection" }),
                      e.jsx("li", { children: "- Automated yt-dlp engine updates" }),
                    ],
                  }),
                ],
              }),
            }),
            /* ── Legal Note ── */
            e.jsx("section", {
              className: "mt-8",
              style: { marginTop: "32px" },
              children: e.jsxs("div", {
                className: "border-2 border-black bg-[#fff9d9] p-6 md:p-7",
                children: [
                  e.jsx("h2", {
                    className: "text-xl font-bold mb-3",
                    children: "Attributions & Licensing",
                  }),
                  e.jsx("p", {
                    className: "text-stone-800",
                    style: { fontSize: "15px", lineHeight: "1.9" },
                    children:
                      "VaultDL is a graphical controller for open-source tools: yt-dlp (Unlicense / Public Domain) for media extraction and FFmpeg (LGPL v2.1+) for stream merging and transcoding. It does not contain code to bypass DRM. Users are responsible for complying with platform terms of service.",
                  }),
                ],
              }),
            }),
            /* ── CTA Buttons ── */
            e.jsxs("section", {
              className: "mt-8",
              style: { marginTop: "36px" },
              children: [
                /* Download for Windows x64 label */
                e.jsx("p", {
                  className: "text-xs font-semibold uppercase tracking-[0.18em] text-stone-500 mb-3",
                  children: "Download for Windows x64",
                }),
                /* Download option buttons */
                e.jsxs("div", {
                  className: "flex flex-wrap",
                  style: { gap: "14px", marginBottom: "14px" },
                  children: [
                    e.jsxs("a", {
                      href: "https://github.com/Mayank-23-Dev/vaultdl/releases/download/v0.0.11/VaultDLSetup0.0.11.exe",
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
                      children: ["Download .exe", " ->"],
                    }),
                    e.jsxs("a", {
                      href: "https://github.com/Mayank-23-Dev/vaultdl/releases/download/v0.0.11/VaultDLPortable-0.0.11-win.zip",
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
                      children: ["Download .zip", " ->"],
                    }),
                  ],
                }),
                /* GitHub Latest Release button */
                e.jsxs("a", {
                  href: "https://github.com/Mayank-23-Dev/vaultdl/releases/tag/v0.0.11",
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
                  children: ["GitHub Latest Release", " ->"],
                }),
              ],
            }),
          ],
        }),
      }),
      e.jsx(t, {}),
    ],
  });

export { VaultDLCaseStudy as default };
