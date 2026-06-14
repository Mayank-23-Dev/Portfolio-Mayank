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
        value: "connect@mayank-dev.in",
        action: "mailto:connect@mayank-dev.in",
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
        title: "Full-time & Internship",
        description:
          "I'm actively seeking roles in Full Stack, Android Development, or Content Strategy & Production.",
        tags: ["Full Stack", "Android", "Content Strategy", "Viral Packaging"],
        color: "bg-daisy-green",
      },
      {
        icon: e.jsx(k, { className: "h-6 w-6" }),
        title: "Collaborations",
        description:
          "I'm currently in my 2nd Year, figuring things out and always open for interesting collaborations or technical chats",
        tags: ["Open Source", "Content Projects", "Learning Together"],
        color: "bg-daisy-yellow",
      },
    ],
    u = [
      {
        question: "What's your current focus?",
        answer:
          "As a 2nd year BTech CSE student, I am balancing my academic foundations with deep dives into full stack development and content creation. I focus on building real-world products and understanding the 'why' behind the code.",
      },
      {
        question: "What do you mean by Content Strategy & Production?",
        answer:
          "It's about engineering content for reach. Gaining over 12.5M+ views in the last 3 years across different channels (Insta & YT), I specialize in the psychology of viral packaging. I handle everything from cinematography and shot selection to data-driven scripting and viewer psychology.",
      },
      {
        question: "Are you open to internships?",
        answer:
          "Yes! I am actively looking for opportunities where I can contribute to a team, learn from seniors, and apply my skills in development or content strategy.",
      },
      {
        question: "How do you manage development and content?",
        answer:
          "I see them as two sides of the same coin. Building a product requires technical skill; communicating it requires content direction. I use my builds as the foundation for my tutorials and guides.",
      },
      {
        question: "Are you familiar with AI tools?",
        answer:
          "Absolutely. I integrate AI extensively into my workflow—whether it's using CLI-based models, fine-tuning prompts for engineering tasks, or leveraging AI for content optimization. I treat AI as a force multiplier for both development and production.",
      },
    ],
    S = [
      {
        content:
          "I believe in collaborative growth. Your domain expertise + my content engineering = viral results.",
        color: "yellow",
        rotate: "left",
      },
      {
        content:
          "Every piece of content starts with understanding viewer psychology, not just the technical details.",
        color: "green",
        rotate: "right",
      },
      {
        content:
          "I document the strategy. Hooks, pacing, packaging - you'll always know the science behind the views.",
        color: "purple",
        rotate: "none",
      },
      {
        content:
          "Architecture: Across Web, Android, and Desktop, I build scalable foundations with high-performance code that handles complexity with ease.",
        color: "blue",
        rotate: "left",
      },
      {
        content:
          "Experience: Expect fluid, native-feeling interactions and Material Design principles that make every app feel intuitive and zero-latency.",
        color: "orange",
        rotate: "right",
      },
      {
        content:
          "Delivery: Clean, maintainable code with technical SEO—including sitemaps and metadata—ensures long-term utility and search discoverability.",
        color: "cyan",
        rotate: "left",
      },
      {
        content:
          "Workflow: I am fully compatible with Discord and Notion for seamless asynchronous communication, project tracking, and feedback loops.",
        color: "peach",
        rotate: "right",
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
          (yield fetch("https://formspree.io/f/mnjylpyn", {
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
                    "text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed text-stone-600",
                  children:
                    "I am learning and figuring out things nowadays. As a 2nd year BTech CSE student, I'm constantly exploring new tech and figuring out how things work. I'm always open for collaboration and interesting projects.",
                }),
                e.jsxs("div", {
                  className:
                    "bg-white rounded-xl p-6 shadow-lg max-w-2xl mx-auto mb-12 border border-black/5",
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
                          children: "Open for Collaboration",
                        }),
                      ],
                    }),
                    e.jsx("p", {
                      className: "text-gray-600",
                      children:
                        "Currently looking for full-time opportunities as a Full Stack Developer or Content Manager. I'm still in my 2nd Year, figuring things out and ready to contribute to exciting builds.",
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
                                          value: "content-strategy",
                                          children: "Content Strategy",
                                        }),
                                        e.jsx("option", {
                                          value: "content-production",
                                          children: "Content Production",
                                        }),
                                        e.jsx("option", {
                                          value: "viral-packaging",
                                          children: "Viral Packaging",
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
                      "grid grid-cols-1 md:grid-cols-2 gap-8 text-center",
                    children: [
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