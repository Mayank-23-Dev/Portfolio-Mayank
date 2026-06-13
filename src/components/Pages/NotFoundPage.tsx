import { j as e } from "../ui/_uiVendor";
import { u as s, a as o, L as n } from "../ui/_reactVendor";
import { S as a } from "../ui/Landing_UI/StickyNote";
const m = () => {
  const t = s();
  return (
    o.useEffect(() => {}, [t.pathname]),
    e.jsx("div", {
      className:
        "min-h-screen flex items-center justify-center bg-grid-pattern",
      children: e.jsxs("div", {
        className: "text-center max-w-md",
        children: [
          e.jsx("h1", {
            className: "text-8xl font-bold mb-4",
            children: "404",
          }),
          e.jsx(a, {
            content:
              "Oops! Page not found. This page seems to be missing or doesn't exist.",
            color: "yellow",
            rotate: "right",
            className: "mb-6",
          }),
          e.jsx(n, {
            to: "/",
            className: "daisy-button inline-block",
            children: "Return to Home",
          }),
        ],
      }),
    })
  );
};
export { m as default };

