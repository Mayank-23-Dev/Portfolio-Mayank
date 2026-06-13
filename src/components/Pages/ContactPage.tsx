var C = Object.defineProperty,
  I = Object.defineProperties;
var T = Object.getOwnPropertyDescriptors;
var w = Object.getOwnPropertySymbols;
var P = Object.prototype.hasOwnProperty,
  R = Object.prototype.propertyIsEnumerable;
var v = (a, l, t) =>
    l in a
      ? C(a, l, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (a[l] = t),
  b = (a, l) => {
    for (var t in l || (l = {})) P.call(l, t) && v(a, t, l[t]);
    if (w) for (var t of w(l)) R.call(l, t) && v(a, t, l[t]);
    return a;
  },
  y = (a, l) => I(a, T(l));
var N = (a, l, t) =>
  new Promise((c, r) => {
    var n = (o) => {
        try {
          x(t.next(o));
        } catch (u) {
          r(u);
        }
      },
      g = (o) => {
        try {
          x(t.throw(o));
        } catch (u) {
          r(u);
        }
      },
      x = (o) => (o.done ? c(o.value) : Promise.resolve(o.value).then(n, g));
    x((t = t.apply(a, l)).next());
  });
import { j as e } from "../ui/_uiVendor";
import { a as p } from "../ui/_reactVendor";
import { H as E } from "../ui/Landing_UI/Header";
import { F as O } from "../ui/Landing_UI/Footer";
import { F as j } from "../ui/CaseStudies_UI/FloatingCircle";
import { S as q } from "../ui/Landing_UI/StickyNote";
import { P as D } from "../ui/Landing_UI/PaperBackground";
import {
  S as z,
  a as A,
  M as W,
  b as M,
  c as k,
  d as U,
  L as H,
  G as L,
  B as X,
} from "../ui/_iconsVendor";
import "../ui/Landing_UI/MenuToggleIcon";
import "../ui/AppShell";
import "../ui/_animationVendor";
import "../ui/Landing_UI/ConnectDropdown";
import "../ui/_sharedIndex";
const ie = () => {
  const [a, l] = p.useState({
      name: "",
      email: "",
      company: "",
      projectType: "",
      timeline: "",
      message: "",
    }),
    [t, c] = p.useState(!1),
    [r, n] = p.useState(null),
    g = p.useRef(null),
    x = [
      {
        icon: e.jsx(U, { className: "h-6 w-6" }),
        title: "Email",
        description: "For detailed project discussions",
        value: "dmayank2323@gmail.com",
        action: "mailto:dmayank2323@gmail.com",
        color: "bg-daisy-yellow",
      },
      {
        icon: e.jsx(H, { className: "h-6 w-6" }),
        title: "LinkedIn",
        description: "Professional networking",
        value: "/in/mayankdev23",
        action: "https://www.linkedin.com/in/mayankdev23",
        color: "bg-daisy-blue",
      },
      {
        icon: e.jsx(L, { className: "h-6 w-6" }),
        title: "GitHub",
        description: "Code and projects",
        value: "@Mayank-23-Dev",
        action: "https://github.com/Mayank-23-Dev",
        color: "bg-daisy-purple",
      },
    ],
    o = [
      {
        icon: e.jsx(X, { className: "h-6 w-6" }),
        title: "Full-time Opportunities",
        description:
          "I'm actively seeking product design roles where I can create meaningful impact",
        tags: ["Product Design", "UX Research", "Design Systems"],
        color: "bg-daisy-green",
      },
      {
        icon: e.jsx(k, { className: "h-6 w-6" }),
        title: "Freelance Projects",
        description:
          "Short-term projects focusing on user research, UX audits, or complete redesigns",
        tags: ["UX Audit", "Redesign", "Research"],
        color: "bg-daisy-yellow",
      },
    ],
    u = [
      {
        question: "What's your design process like?",
        answer:
          "I start with understanding users through research, define problems clearly, design solutions iteratively, and test everything with real users. No shortcuts, just solid methodology.",
      },
      {
        question: "How long do projects typically take?",
        answer:
          "It depends on scope. UX audits take 1-2 weeks, full redesigns can take 2-3 months. I believe in thorough research and testing, which takes time but delivers better results.",
      },
      {
        question: "Do you work with startups or enterprises?",
        answer:
          "Both! I've worked with enterprise platforms and startup products. Each has unique challenges, and I adapt my approach accordingly.",
      },
      {
        question: "What makes your approach different?",
        answer:
          "My CS background helps me design solutions that are both user-friendly and technically feasible. I focus on data-driven decisions and measurable improvements.",
      },
    ],
    S = [
      {
        content:
          "I believe in collaborative design. Your domain expertise + my design thinking = amazing results.",
        color: "yellow",
        rotate: "left",
      },
      {
        content:
          "Every project starts with understanding your users, not just your business goals.",
        color: "green",
        rotate: "right",
      },
      {
        content:
          "I document everything. Process, decisions, learnings - you'll always know why we made certain choices.",
        color: "purple",
        rotate: "none",
      },
    ],
    d = (s) => {
      const { name: i, value: m } = s.target;
      (r && n(null), l((h) => y(b({}, h), { [i]: m })));
    },
    F = (s) =>
      N(null, null, function* () {
        if (
          (s.preventDefault(),
          n(null),
          c(!0),
          !a.name.trim() || !a.email.trim() || !a.message.trim())
        ) {
          (n({
            tone: "error",
            message:
              "Please fill in all required fields (Name, Email, Message).",
          }),
            c(!1));
          return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a.email)) {
          (n({ tone: "error", message: "Please enter a valid email address." }),
            c(!1));
          return;
        }
        const m = localStorage.getItem("lastFormSubmission"),
          h = Date.now();
        if (m && h - parseInt(m) < 6e4) {
          (n({
            tone: "info",
            message: "Please wait a moment before submitting again.",
          }),
            c(!1));
          return;
        }
        try {
          const f = y(b({}, a), {
            timestamp: new Date().toISOString(),
            source: "portfolio-contact",
          });
          (yield fetch("https://formspree.io/f/mdkznvaa", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(f),
          })).ok
            ? (localStorage.setItem("lastFormSubmission", h.toString()),
              n({
                tone: "success",
                message:
                  "Thanks for reaching out! I'll get back to you within 24 hours.",
              }),
              l({
                name: "",
                email: "",
                company: "",
                projectType: "",
                timeline: "",
                message: "",
              }))
            : n({
                tone: "error",
                message:
                  "Oops! There was a problem sending your message. Please try again or email me directly.",
              });
        } catch (f) {
          n({
            tone: "error",
            message:
              "Oops! There was a problem sending your message. Please try again or email me directly.",
          });
        } finally {
          c(!1);
        }
      });
  return (
    p.useEffect(() => {
      const s = g.current;
      if (!s) return;
      s.setAttribute("data-text", "build something amazing");
      const i = setTimeout(() => {
        s.classList.add("animate-highlight");
      }, 1200);
      return () => clearTimeout(i);
    }, []),
    e.jsxs(D, {
      children: [
        e.jsxs("div", {
          className: "hidden md:block",
          children: [
            e.jsx(j, {
              size: "120px",
              color: "#E5C1F0",
              top: "10%",
              right: "5%",
              delay: "0.3s",
            }),
            e.jsx(j, {
              size: "80px",
              color: "#A2FF86",
              top: "40%",
              left: "3%",
              delay: "1s",
            }),
            e.jsx(j, {
              size: "100px",
              color: "#FFDE59",
              bottom: "30%",
              right: "8%",
              delay: "0.7s",
            }),
            e.jsx(j, {
              size: "60px",
              color: "#A6D1E6",
              bottom: "60%",
              left: "10%",
              delay: "1.5s",
            }),
          ],
        }),
        e.jsxs("div", {
          className: "container mx-auto px-4 md:px-6 lg:px-8 relative",
          children: [
            e.jsx(E, {}),
            e.jsxs("section", {
              className: "py-12 md:py-20 text-center",
              children: [
                e.jsxs("h1", {
                  className: "headline-text mb-6",
                  children: [
                    "Let's ",
                    e.jsx("span", {
                      ref: g,
                      className: "handwritten-highlight relative",
                      children: "build something amazing",
                    }),
                  ],
                }),
                e.jsx("p", {
                  className:
                    "text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed",
                  children:
                    "I'm always excited to work on projects that make a real difference. Whether it's a complete redesign or a new product from scratch, let's talk about it.",
                }),
                e.jsxs("div", {
                  className:
                    "bg-white rounded-xl p-6 shadow-lg max-w-2xl mx-auto mb-12",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center justify-center gap-3 mb-4",
                      children: [
                        e.jsx("div", {
                          className:
                            "w-3 h-3 bg-green-500 rounded-full animate-pulse",
                        }),
                        e.jsx("span", {
                          className: "font-semibold text-lg",
                          children: "Currently Available",
                        }),
                      ],
                    }),
                    e.jsx("p", {
                      className: "text-gray-600",
                      children:
                        "Open to full-time product design roles and select freelance projects. Response time: Usually within 24 hours.",
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("section", {
              className: "py-16 relative",
              children: [
                e.jsx("h2", {
                  className:
                    "section-title text-3xl md:text-4xl mb-12 text-center",
                  children: "How to Reach Me",
                }),
                e.jsx("div", {
                  className:
                    "grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16",
                  children: x.map((s, i) =>
                    e.jsxs(
                      "a",
                      {
                        href: s.action,
                        className:
                          "bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group",
                        children: [
                          e.jsx("div", {
                            className: `w-12 h-12 ${s.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`,
                            children: s.icon,
                          }),
                          e.jsx("h3", {
                            className: "font-bold text-lg mb-2",
                            children: s.title,
                          }),
                          e.jsx("p", {
                            className: "text-gray-600 text-sm mb-3",
                            children: s.description,
                          }),
                          e.jsx("p", {
                            className: "font-mono text-sm text-daisy-purple",
                            children: s.value,
                          }),
                        ],
                      },
                      i,
                    ),
                  ),
                }),
              ],
            }),
            e.jsxs("section", {
              className: "py-16 relative",
              children: [
                e.jsx("div", {
                  className:
                    "absolute -left-20 top-20 w-40 h-40 rounded-full bg-daisy-green opacity-20 blur-xl hidden md:block",
                }),
                e.jsxs("div", {
                  className:
                    "grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto",
                  children: [
                    e.jsxs("div", {
                      children: [
                        e.jsx("h2", {
                          className: "section-title text-3xl mb-8",
                          children: "Start a Conversation",
                        }),
                        e.jsxs("form", {
                          onSubmit: F,
                          className:
                            "bg-white rounded-xl p-8 shadow-lg space-y-6",
                          "aria-busy": t,
                          children: [
                            e.jsxs("div", {
                              className:
                                "grid grid-cols-1 md:grid-cols-2 gap-6",
                              children: [
                                e.jsxs("div", {
                                  children: [
                                    e.jsx("label", {
                                      htmlFor: "name",
                                      className: "daisy-label",
                                      children: "Name *",
                                    }),
                                    e.jsx("input", {
                                      type: "text",
                                      id: "name",
                                      name: "name",
                                      value: a.name,
                                      onChange: d,
                                      required: !0,
                                      autoComplete: "name",
                                      className: "daisy-input",
                                      placeholder: "Your name",
                                    }),
                                  ],
                                }),
                                e.jsxs("div", {
                                  children: [
                                    e.jsx("label", {
                                      htmlFor: "email",
                                      className: "daisy-label",
                                      children: "Email *",
                                    }),
                                    e.jsx("input", {
                                      type: "email",
                                      id: "email",
                                      name: "email",
                                      value: a.email,
                                      onChange: d,
                                      required: !0,
                                      autoComplete: "email",
                                      className: "daisy-input",
                                      placeholder: "your@email.com",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              children: [
                                e.jsx("label", {
                                  htmlFor: "company",
                                  className: "daisy-label",
                                  children: "Company",
                                }),
                                e.jsx("input", {
                                  type: "text",
                                  id: "company",
                                  name: "company",
                                  value: a.company,
                                  onChange: d,
                                  autoComplete: "organization",
                                  className: "daisy-input",
                                  placeholder: "Your company name",
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className:
                                "grid grid-cols-1 md:grid-cols-2 gap-6",
                              children: [
                                e.jsxs("div", {
                                  children: [
                                    e.jsx("label", {
                                      htmlFor: "projectType",
                                      className: "daisy-label",
                                      children: "Project Type",
                                    }),
                                    e.jsxs("select", {
                                      id: "projectType",
                                      name: "projectType",
                                      value: a.projectType,
                                      onChange: d,
                                      className: "daisy-input",
                                      children: [
                                        e.jsx("option", {
                                          value: "",
                                          children: "Select project type",
                                        }),
                                        e.jsx("option", {
                                          value: "full-time",
                                          children: "Full-time Role",
                                        }),
                                        e.jsx("option", {
                                          value: "freelance",
                                          children: "Freelance Project",
                                        }),
                                        e.jsx("option", {
                                          value: "consultation",
                                          children: "UX Consultation",
                                        }),
                                        e.jsx("option", {
                                          value: "audit",
                                          children: "UX Audit",
                                        }),
                                        e.jsx("option", {
                                          value: "other",
                                          children: "Other",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                e.jsxs("div", {
                                  children: [
                                    e.jsx("label", {
                                      htmlFor: "timeline",
                                      className: "daisy-label",
                                      children: "Timeline",
                                    }),
                                    e.jsxs("select", {
                                      id: "timeline",
                                      name: "timeline",
                                      value: a.timeline,
                                      onChange: d,
                                      className: "daisy-input",
                                      children: [
                                        e.jsx("option", {
                                          value: "",
                                          children: "Select timeline",
                                        }),
                                        e.jsx("option", {
                                          value: "asap",
                                          children: "ASAP",
                                        }),
                                        e.jsx("option", {
                                          value: "1-month",
                                          children: "Within 1 month",
                                        }),
                                        e.jsx("option", {
                                          value: "3-months",
                                          children: "Within 3 months",
                                        }),
                                        e.jsx("option", {
                                          value: "6-months",
                                          children: "Within 6 months",
                                        }),
                                        e.jsx("option", {
                                          value: "flexible",
                                          children: "Flexible",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              children: [
                                e.jsx("label", {
                                  htmlFor: "message",
                                  className: "daisy-label",
                                  children: "Message *",
                                }),
                                e.jsx("textarea", {
                                  id: "message",
                                  name: "message",
                                  value: a.message,
                                  onChange: d,
                                  required: !0,
                                  rows: 5,
                                  autoComplete: "off",
                                  className: "daisy-input resize-none",
                                  placeholder:
                                    "Tell me about your project, goals, and how I can help...",
                                }),
                              ],
                            }),
                            r &&
                              e.jsx("div", {
                                role: r.tone === "error" ? "alert" : "status",
                                "aria-live":
                                  r.tone === "error" ? "assertive" : "polite",
                                className: `rounded-lg border px-4 py-3 text-sm font-medium ${r.tone === "success" ? "border-green-200 bg-green-50 text-green-700" : r.tone === "info" ? "border-blue-200 bg-blue-50 text-blue-700" : "border-red-200 bg-red-50 text-red-700"}`,
                                children: r.message,
                              }),
                            e.jsx("button", {
                              type: "submit",
                              disabled: t,
                              className:
                                "daisy-button w-full py-4 text-lg flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed",
                              children: t
                                ? e.jsxs(e.Fragment, {
                                    children: [
                                      e.jsx("div", {
                                        className:
                                          "animate-spin rounded-full h-5 w-5 border-b-2 border-black",
                                      }),
                                      "Sending...",
                                    ],
                                  })
                                : e.jsxs(e.Fragment, {
                                    children: [
                                      e.jsx(z, { className: "h-5 w-5" }),
                                      "Send Message",
                                    ],
                                  }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsx("h2", {
                          className: "section-title text-3xl mb-8",
                          children: "Ways We Can Work Together",
                        }),
                        e.jsx("div", {
                          className: "space-y-6",
                          children: o.map((s, i) =>
                            e.jsx(
                              "div",
                              {
                                className:
                                  "bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300",
                                children: e.jsxs("div", {
                                  className: "flex items-start gap-4",
                                  children: [
                                    e.jsx("div", {
                                      className: `w-12 h-12 ${s.color} rounded-full flex items-center justify-center flex-shrink-0`,
                                      children: s.icon,
                                    }),
                                    e.jsxs("div", {
                                      className: "flex-1",
                                      children: [
                                        e.jsx("h3", {
                                          className: "font-bold text-lg mb-2",
                                          children: s.title,
                                        }),
                                        e.jsx("p", {
                                          className:
                                            "text-gray-600 mb-3 leading-relaxed",
                                          children: s.description,
                                        }),
                                        e.jsx("div", {
                                          className: "flex flex-wrap gap-2",
                                          children: s.tags.map((m, h) =>
                                            e.jsx(
                                              "span",
                                              {
                                                className:
                                                  "bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium",
                                                children: m,
                                              },
                                              h,
                                            ),
                                          ),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              },
                              i,
                            ),
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("section", {
              className: "py-16 relative",
              children: [
                e.jsx("div", {
                  className:
                    "absolute -right-20 top-10 w-40 h-40 rounded-full bg-daisy-yellow opacity-20 blur-xl hidden md:block",
                }),
                e.jsx("h2", {
                  className:
                    "section-title text-3xl md:text-4xl mb-12 text-center",
                  children: "What to Expect",
                }),
                e.jsx("div", {
                  className:
                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto",
                  children: S.map((s, i) =>
                    e.jsx(
                      q,
                      {
                        content: s.content,
                        color: s.color,
                        rotate: s.rotate,
                        className:
                          "w-full hover:scale-105 transition-transform",
                      },
                      i,
                    ),
                  ),
                }),
              ],
            }),
            e.jsxs("section", {
              className: "py-16 relative",
              children: [
                e.jsx("h2", {
                  className:
                    "section-title text-3xl md:text-4xl mb-12 text-center",
                  children: "Frequently Asked Questions",
                }),
                e.jsx("div", {
                  className: "max-w-4xl mx-auto space-y-6",
                  children: u.map((s, i) =>
                    e.jsxs(
                      "div",
                      {
                        className:
                          "bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300",
                        children: [
                          e.jsxs("h3", {
                            className:
                              "font-bold text-lg mb-3 flex items-center gap-3",
                            children: [
                              e.jsx(A, {
                                className: "h-5 w-5 text-daisy-purple",
                              }),
                              s.question,
                            ],
                          }),
                          e.jsx("p", {
                            className: "text-gray-700 leading-relaxed pl-8",
                            children: s.answer,
                          }),
                        ],
                      },
                      i,
                    ),
                  ),
                }),
              ],
            }),
            e.jsx("section", {
              className: "py-16",
              children: e.jsxs("div", {
                className:
                  "bg-white rounded-xl p-8 md:p-12 shadow-lg max-w-4xl mx-auto",
                children: [
                  e.jsx("h2", {
                    className:
                      "text-2xl md:text-3xl font-bold mb-8 text-center",
                    children: "Quick Info",
                  }),
                  e.jsxs("div", {
                    className:
                      "grid grid-cols-1 md:grid-cols-3 gap-8 text-center",
                    children: [
                      e.jsxs("div", {
                        children: [
                          e.jsx(W, {
                            className: "h-8 w-8 mx-auto mb-4 text-daisy-purple",
                          }),
                          e.jsx("h3", {
                            className: "font-bold mb-2",
                            children: "Location",
                          }),
                          e.jsxs("p", {
                            className: "text-gray-600",
                            children: [
                              "Based in India",
                              e.jsx("br", {}),
                              "Open to remote work",
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        children: [
                          e.jsx(M, {
                            className: "h-8 w-8 mx-auto mb-4 text-daisy-green",
                          }),
                          e.jsx("h3", {
                            className: "font-bold mb-2",
                            children: "Response Time",
                          }),
                          e.jsxs("p", {
                            className: "text-gray-600",
                            children: [
                              "Usually within 24 hours",
                              e.jsx("br", {}),
                              "Sometimes faster!",
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        children: [
                          e.jsx(k, {
                            className: "h-8 w-8 mx-auto mb-4 text-daisy-yellow",
                          }),
                          e.jsx("h3", {
                            className: "font-bold mb-2",
                            children: "Availability",
                          }),
                          e.jsxs("p", {
                            className: "text-gray-600",
                            children: [
                              "Open for new opportunities",
                              e.jsx("br", {}),
                              "Full-time & freelance",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
        e.jsx(O, {}),
      ],
    })
  );
};
export { ie as default };

