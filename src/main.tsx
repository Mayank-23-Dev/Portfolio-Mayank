import "./styles/app.css";
import {
  d as reactDomClient,
  a as ReactVendor,
  B as BrowserRouter,
} from "./components/ui/_reactVendor";
import { j as jsxRuntime } from "./components/ui/_uiVendor";
import App from "./App";

const { createRoot } = reactDomClient();

createRoot(document.getElementById("root")).render(
  jsxRuntime.jsx(ReactVendor.StrictMode, {
    children: jsxRuntime.jsx(BrowserRouter, {
      children: jsxRuntime.jsx(App, {}),
    }),
  }),
);
