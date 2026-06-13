import { j as a } from "../_uiVendor.js";
const p = ({ children: r, className: e = "" }) =>
  a.jsxs("div", {
    className: `min-h-screen w-full bg-[#faf6ef] relative overflow-x-hidden ${e}`,
    children: [
      a.jsx("div", {
        className: "absolute inset-0 z-0 pointer-events-none",
        style: {
          backgroundImage: `
            radial-gradient(ellipse at 50% 0%, rgba(255,250,240,0.8) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 100%, rgba(235,225,210,0.4) 0%, transparent 50%),
            radial-gradient(circle at 1px 1px, rgba(0,0,0,0.06) 1px, transparent 0),
            repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(139,119,90,0.018) 2px, rgba(139,119,90,0.018) 4px),
            repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(139,119,90,0.018) 2px, rgba(139,119,90,0.018) 4px),
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 40px,
              rgba(180,160,130,0.012) 40px,
              rgba(180,160,130,0.012) 41px
            )
          `,
          backgroundSize:
            "8px 8px, 8px 8px, 8px 8px, 32px 32px, 32px 32px, 60px 60px",
        },
      }),
      a.jsx("div", { className: "relative z-10", children: r }),
    ],
  });
export { p as P };

