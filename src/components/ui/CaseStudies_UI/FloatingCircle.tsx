import { j as i } from "../_uiVendor.js";
const u = ({
  size: t,
  color: o,
  top: a,
  left: s,
  right: e,
  bottom: l,
  delay: n = "0s",
}) => {
  const r = {
    width: t,
    height: t,
    backgroundColor: o,
    top: a,
    left: s,
    right: e,
    bottom: l,
    animationDelay: n,
  };
  return i.jsx("div", {
    className: "absolute rounded-full animate-float -z-10",
    style: r,
  });
};
export { u as F };

