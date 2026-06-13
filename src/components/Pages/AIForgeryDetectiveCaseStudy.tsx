import { j as e } from "../ui/_uiVendor";
import { a as u, L as b } from "../ui/_reactVendor";
import { D as j, a as N } from "../ui/CaseStudies_UI/DarkFooter";
import { F as f, R as s } from "../ui/CaseStudies_UI/ResponsiveImage";
import { a as y, B as r } from "../ui/_sharedIndex";
import { p as c } from "../ui/AppShell";
import {
  A as v,
  P as d,
  i as o,
  G as m,
  r as x,
  E as h,
  t as w,
  u as g,
  l as k,
  f as I,
  T as A,
  v as T,
  n as p,
  k as P,
  C as S,
  q as C,
  s as D,
  Z as M,
  D as R,
  b as F,
} from "../ui/_iconsVendor";
import "../ui/Landing_UI/MenuToggleIcon";
import "../ui/Landing_UI/ConnectDropdown";
import "../ui/_animationVendor";
const H = () => {
  const [a, i] = u.useState({ isOpen: !1, type: null }),
    l = (t) => {
      (c("open"), i({ isOpen: !0, type: t }));
    },
    n = () => {
      (c("close"), i({ isOpen: !1, type: null }));
    };
  return e.jsxs("div", {
    className: "min-h-screen bg-black text-white",
    children: [
      e.jsx(f, {}),
      e.jsxs("div", {
        className: "container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl",
        children: [
          e.jsx(j, {}),
          e.jsx("div", {
            className: "py-6 mb-8",
            children: e.jsxs(b, {
              to: "/projects",
              className:
                "inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300",
              children: [
                e.jsx(v, { className: "h-4 w-4" }),
                e.jsx("span", { children: "Back to Projects" }),
              ],
            }),
          }),
          e.jsxs("section", {
            className: "mb-32 md:mb-40",
            children: [
              e.jsxs("div", {
                className: "text-center mb-20 md:mb-24",
                children: [
                  e.jsx("h1", {
                    className:
                      "text-4xl md:text-6xl font-black mb-8 leading-tight opacity-0 animate-fadeInUp",
                    children: "AI Forgery Detective",
                  }),
                  e.jsx("p", {
                    className:
                      "text-lg md:text-xl text-gray-400 mb-8 max-w-4xl mx-auto leading-relaxed opacity-0 animate-fadeInUp",
                    style: { animationDelay: "0.2s" },
                    children: "Conversational AI for Digital Forensics — 2025",
                  }),
                  e.jsxs("div", {
                    className:
                      "flex flex-col sm:flex-row gap-4 justify-center mb-16 opacity-0 animate-fadeInUp",
                    style: { animationDelay: "0.4s" },
                    children: [
                      e.jsxs("button", {
                        onClick: () => l("demo"),
                        "data-sound": "off",
                        className:
                          "group inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-none font-medium hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg",
                        children: [
                          e.jsx(d, {
                            className:
                              "h-4 w-4 group-hover:translate-x-1 transition-transform duration-300",
                          }),
                          "Request Demo Access",
                          e.jsx(o, {
                            className:
                              "h-4 w-4 group-hover:translate-x-1 transition-transform duration-300",
                          }),
                        ],
                      }),
                      e.jsxs("button", {
                        onClick: () => l("source"),
                        "data-sound": "off",
                        className:
                          "group inline-flex items-center gap-2 border border-white text-white px-8 py-4 rounded-none font-medium hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-lg",
                        children: [
                          e.jsx(m, {
                            className:
                              "h-4 w-4 group-hover:rotate-12 transition-transform duration-300",
                          }),
                          "Request Source Access",
                          e.jsx(o, {
                            className:
                              "h-4 w-4 group-hover:translate-x-1 transition-transform duration-300",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className:
                  "mb-20 md:mb-24 group relative overflow-hidden opacity-0 animate-fadeInUp",
                style: { animationDelay: "0.6s" },
                children: [
                  e.jsx(s, {
                    src: "/images/case studies/cmfd/thumbnail.png",
                    alt: "AI Forgery Detective Platform",
                    className:
                      "w-full rounded-none transition-transform duration-700 hover:scale-105",
                    loading: "eager",
                  }),
                  e.jsx("div", {
                    className:
                      "absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                  }),
                ],
              }),
              e.jsx("div", {
                className: "max-w-3xl mx-auto text-center",
                children: e.jsx("p", {
                  className: "text-lg md:text-xl leading-relaxed text-gray-300",
                  children:
                    "An advanced AI system combining Vision Transformers with Siamese Networks to achieve 90%+ forgery detection accuracy. Features a conversational AI that explains detection results through natural language, making digital forensics accessible to everyone.",
                }),
              }),
            ],
          }),
          e.jsx("section", {
            className: "mb-24 md:mb-32",
            children: e.jsxs("div", {
              className:
                "grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-10 md:pt-12 border-t border-gray-800 max-w-3xl mx-auto",
              children: [
                e.jsxs("div", {
                  className: "text-center md:text-left",
                  children: [
                    e.jsx("h3", {
                      className:
                        "text-white font-bold mb-2 text-sm md:text-base",
                      children: "ROLE",
                    }),
                    e.jsx("p", {
                      className: "text-gray-400 text-xs md:text-sm",
                      children: "AI/ML Engineer",
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "text-center md:text-left",
                  children: [
                    e.jsx("h3", {
                      className:
                        "text-white font-bold mb-2 text-sm md:text-base",
                      children: "TEAM",
                    }),
                    e.jsx("p", {
                      className: "text-gray-400 text-xs md:text-sm",
                      children: "4 Members",
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "text-center md:text-left",
                  children: [
                    e.jsx("h3", {
                      className:
                        "text-white font-bold mb-2 text-sm md:text-base",
                      children: "TIMELINE",
                    }),
                    e.jsx("p", {
                      className: "text-gray-400 text-xs md:text-sm",
                      children: "3 Months",
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "text-center md:text-left",
                  children: [
                    e.jsx("h3", {
                      className:
                        "text-white font-bold mb-2 text-sm md:text-base",
                      children: "TYPE",
                    }),
                    e.jsx("p", {
                      className: "text-gray-400 text-xs md:text-sm",
                      children: "AI/ML Research",
                    }),
                  ],
                }),
              ],
            }),
          }),
          e.jsxs("section", {
            className: "mb-28 md:mb-36",
            children: [
              e.jsx("h2", {
                className:
                  "text-3xl md:text-4xl font-black mb-10 md:mb-12 hover:text-gray-300 transition-colors duration-300",
                children: "The Vision",
              }),
              e.jsxs("div", {
                className: "max-w-3xl space-y-8 text-lg text-gray-300",
                children: [
                  e.jsx("p", {
                    children:
                      "Digital forgeries have become increasingly sophisticated, with copy-move manipulation being nearly impossible to detect with the naked eye. Traditional forensic tools require extensive expertise and produce technical outputs that most people can't interpret.",
                  }),
                  e.jsxs("p", {
                    children: [
                      e.jsx("span", {
                        className: "text-white font-semibold",
                        children: "The approach:",
                      }),
                      " What if we created an AI that doesn't just detect forgeries with 90%+ accuracy, but actually explains its findings through natural conversation?",
                    ],
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("section", {
            className: "mb-28 md:mb-36",
            children: [
              e.jsx("h2", {
                className:
                  "text-3xl md:text-4xl font-black mb-10 md:mb-12 hover:text-gray-300 transition-colors duration-300",
                children: "Challenges We Faced",
              }),
              e.jsxs("div", {
                className: "space-y-12 md:space-y-16",
                children: [
                  e.jsxs("div", {
                    className:
                      "grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",
                    children: [
                      e.jsx("div", {
                        className: "lg:col-span-1 flex lg:justify-center",
                        children: e.jsx("div", {
                          className:
                            "w-12 h-12 bg-red-500/20 border border-red-500/40 rounded-lg flex items-center justify-center",
                          children: e.jsx(x, {
                            className: "h-6 w-6 text-red-400",
                          }),
                        }),
                      }),
                      e.jsxs("div", {
                        className: "lg:col-span-11 space-y-4",
                        children: [
                          e.jsx("h3", {
                            className:
                              "text-xl md:text-2xl font-bold text-white",
                            children: "Compute Constraints",
                          }),
                          e.jsx("p", {
                            className: "text-gray-300 text-lg leading-relaxed",
                            children:
                              "Training Vision Transformers is computationally expensive. The standard T4 GPUs available through Google Cloud simply couldn't handle the memory requirements of our hybrid ViT + Siamese architecture. We faced constant out-of-memory errors and training crashes.",
                          }),
                          e.jsxs("div", {
                            className:
                              "bg-green-500/10 border border-green-500/30 rounded-lg p-4",
                            children: [
                              e.jsx("p", {
                                className: "text-green-400 font-medium mb-2",
                                children: "How we solved it:",
                              }),
                              e.jsx("p", {
                                className: "text-gray-300",
                                children:
                                  "We optimized our training pipeline with gradient checkpointing, mixed-precision training, and carefully designed batch sizes. We also leveraged pre-trained ViT weights to reduce training time and memory requirements significantly.",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className:
                      "grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",
                    children: [
                      e.jsx("div", {
                        className: "lg:col-span-1 flex lg:justify-center",
                        children: e.jsx("div", {
                          className:
                            "w-12 h-12 bg-orange-500/20 border border-orange-500/40 rounded-lg flex items-center justify-center",
                          children: e.jsx(y, {
                            className: "h-6 w-6 text-orange-400",
                          }),
                        }),
                      }),
                      e.jsxs("div", {
                        className: "lg:col-span-11 space-y-4",
                        children: [
                          e.jsx("h3", {
                            className:
                              "text-xl md:text-2xl font-bold text-white",
                            children: "Starting from Zero",
                          }),
                          e.jsx("p", {
                            className: "text-gray-300 text-lg leading-relaxed",
                            children:
                              "Our team had absolutely zero prior experience building and training deep learning models. We were starting from scratch — no ML background, no PyTorch experience, no understanding of Vision Transformers or Siamese Networks.",
                          }),
                          e.jsxs("div", {
                            className:
                              "bg-green-500/10 border border-green-500/30 rounded-lg p-4",
                            children: [
                              e.jsx("p", {
                                className: "text-green-400 font-medium mb-2",
                                children: "How we solved it:",
                              }),
                              e.jsx("p", {
                                className: "text-gray-300",
                                children:
                                  "We dedicated the first two months of our three-month timeline purely to learning. We studied research papers, followed tutorials, and built small proof-of-concept models before attempting the full architecture. This investment in learning paid off — when we started building, we moved fast and made fewer mistakes.",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className:
                      "bg-gray-900/50 border border-gray-800 rounded-lg p-6 md:p-8",
                    children: [
                      e.jsx("h4", {
                        className: "text-white font-bold mb-6",
                        children: "Project Timeline",
                      }),
                      e.jsxs("div", {
                        className: "flex flex-col md:flex-row gap-4 md:gap-0",
                        children: [
                          e.jsxs("div", {
                            className:
                              "flex-1 md:border-r border-gray-700 md:pr-6",
                            children: [
                              e.jsx("div", {
                                className:
                                  "text-2xl font-bold text-orange-400 mb-2",
                                children: "Month 1-2",
                              }),
                              e.jsx("p", {
                                className: "text-gray-400 text-sm",
                                children:
                                  "Research, learning, and architecture planning",
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "flex-1 md:px-6",
                            children: [
                              e.jsx("div", {
                                className:
                                  "text-2xl font-bold text-blue-400 mb-2",
                                children: "Month 3",
                              }),
                              e.jsx("p", {
                                className: "text-gray-400 text-sm",
                                children:
                                  "Rapid implementation, training, and deployment",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("section", {
            className: "mb-28 md:mb-36",
            children: [
              e.jsx("h2", {
                className:
                  "text-3xl md:text-4xl font-black mb-10 md:mb-14 hover:text-gray-300 transition-colors duration-300",
                children: "Hybrid AI Architecture",
              }),
              e.jsxs("div", {
                className: "mb-12",
                children: [
                  e.jsxs("h3", {
                    className:
                      "text-2xl font-bold text-white mb-6 flex items-center gap-3",
                    children: [
                      e.jsx(r, { className: "h-6 w-6 text-purple-500" }),
                      "Vision Transformer + Siamese Network Fusion",
                    ],
                  }),
                  e.jsxs("div", {
                    className:
                      "grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20",
                    children: [
                      e.jsxs("div", {
                        className: "space-y-6",
                        children: [
                          e.jsx("p", {
                            className: "text-gray-300 text-lg",
                            children:
                              "The core innovation lies in combining two powerful architectures: Vision Transformers for global image understanding and Siamese Networks for patch-level comparison analysis.",
                          }),
                          e.jsxs("div", {
                            className: "space-y-4",
                            children: [
                              e.jsx("h4", {
                                className: "text-white font-bold mb-4",
                                children: "Architecture Components",
                              }),
                              e.jsxs("div", {
                                className: "space-y-4",
                                children: [
                                  e.jsxs("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                      e.jsx(h, {
                                        className: "h-6 w-6 text-blue-400",
                                      }),
                                      e.jsxs("div", {
                                        children: [
                                          e.jsx("p", {
                                            className: "text-white font-medium",
                                            children: "ViT Backbone",
                                          }),
                                          e.jsx("p", {
                                            className: "text-gray-400",
                                            children:
                                              "Pre-trained ViT-Base with 768-dim embeddings",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                      e.jsx(w, {
                                        className: "h-6 w-6 text-green-400",
                                      }),
                                      e.jsxs("div", {
                                        children: [
                                          e.jsx("p", {
                                            className: "text-white font-medium",
                                            children: "Siamese Branch",
                                          }),
                                          e.jsx("p", {
                                            className: "text-gray-400",
                                            children:
                                              "Multi-head attention for patch comparison",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                      e.jsx(g, {
                                        className: "h-6 w-6 text-orange-400",
                                      }),
                                      e.jsxs("div", {
                                        children: [
                                          e.jsx("p", {
                                            className: "text-white font-medium",
                                            children: "Segmentation Head",
                                          }),
                                          e.jsx("p", {
                                            className: "text-gray-400",
                                            children:
                                              "Progressive upsampling 14×14 → 224×224",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "group relative overflow-hidden",
                        children: [
                          e.jsx(s, {
                            src: "/images/case studies/cmfd/matrix.png",
                            alt: "Hybrid Architecture Matrix - ViT + Siamese Network",
                            className:
                              "w-full rounded-none transition-transform duration-700 hover:scale-105",
                          }),
                          e.jsx("div", {
                            className:
                              "absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                          }),
                          e.jsx("div", {
                            className:
                              "absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-none",
                            children: e.jsx("p", {
                              className: "text-white font-medium",
                              children: "Hybrid Architecture Matrix",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className:
                      "mt-16 md:mt-20 pt-10 md:pt-14 border-t border-gray-800",
                    children: [
                      e.jsx("h4", {
                        className: "text-white font-bold mb-8",
                        children: "Model Specifications",
                      }),
                      e.jsxs("div", {
                        className: "grid grid-cols-2 md:grid-cols-5 gap-6",
                        children: [
                          e.jsxs("div", {
                            className: "text-center",
                            children: [
                              e.jsx("div", {
                                className:
                                  "text-3xl font-bold text-blue-400 mb-2",
                                children: "351MB",
                              }),
                              e.jsx("p", {
                                className: "text-gray-400 text-sm",
                                children: "Model Size",
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "text-center",
                            children: [
                              e.jsx("div", {
                                className:
                                  "text-3xl font-bold text-green-400 mb-2",
                                children: "224×224",
                              }),
                              e.jsx("p", {
                                className: "text-gray-400 text-sm",
                                children: "Input Resolution",
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "text-center",
                            children: [
                              e.jsx("div", {
                                className:
                                  "text-3xl font-bold text-purple-400 mb-2",
                                children: "16×16",
                              }),
                              e.jsx("p", {
                                className: "text-gray-400 text-sm",
                                children: "Patch Size",
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "text-center",
                            children: [
                              e.jsx("div", {
                                className:
                                  "text-3xl font-bold text-orange-400 mb-2",
                                children: "768D",
                              }),
                              e.jsx("p", {
                                className: "text-gray-400 text-sm",
                                children: "Feature Dimension",
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "text-center",
                            children: [
                              e.jsx("div", {
                                className:
                                  "text-3xl font-bold text-red-400 mb-2",
                                children: "3-5s",
                              }),
                              e.jsx("p", {
                                className: "text-gray-400 text-sm",
                                children: "Processing Time",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "pt-16 md:pt-20 border-t border-gray-800",
                children: [
                  e.jsxs("h3", {
                    className:
                      "text-2xl font-bold text-white mb-8 md:mb-10 flex items-center gap-3",
                    children: [
                      e.jsx(k, { className: "h-6 w-6 text-blue-500" }),
                      "Conversational AI Integration",
                    ],
                  }),
                  e.jsxs("div", {
                    className:
                      "grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12",
                    children: [
                      e.jsxs("div", {
                        className: "lg:col-span-2 space-y-4",
                        children: [
                          e.jsx("p", {
                            className: "text-gray-300 text-lg",
                            children:
                              "Powered by Groq AI with Llama 3.1 70B, the system provides expert-level explanations about forgery detection, computer vision concepts, and analysis results. The AI adapts its responses based on the specific image and detection results.",
                          }),
                          e.jsxs("div", {
                            className: "space-y-3",
                            children: [
                              e.jsx("h4", {
                                className: "text-white font-semibold",
                                children: "AI Capabilities",
                              }),
                              e.jsxs("ul", {
                                className: "text-gray-400 space-y-2",
                                children: [
                                  e.jsxs("li", {
                                    className: "flex items-center gap-2",
                                    children: [
                                      e.jsx("div", {
                                        className:
                                          "w-1 h-1 bg-gray-500 rounded-full",
                                      }),
                                      "Context-aware responses based on analysis results",
                                    ],
                                  }),
                                  e.jsxs("li", {
                                    className: "flex items-center gap-2",
                                    children: [
                                      e.jsx("div", {
                                        className:
                                          "w-1 h-1 bg-gray-500 rounded-full",
                                      }),
                                      "Educational explanations of Vision Transformers",
                                    ],
                                  }),
                                  e.jsxs("li", {
                                    className: "flex items-center gap-2",
                                    children: [
                                      e.jsx("div", {
                                        className:
                                          "w-1 h-1 bg-gray-500 rounded-full",
                                      }),
                                      "Interactive learning about digital forensics",
                                    ],
                                  }),
                                  e.jsxs("li", {
                                    className: "flex items-center gap-2",
                                    children: [
                                      e.jsx("div", {
                                        className:
                                          "w-1 h-1 bg-gray-500 rounded-full",
                                      }),
                                      "Real-time chat with technical depth",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "group relative overflow-hidden",
                        children: [
                          e.jsx(s, {
                            src: "/images/case studies/cmfd/convowithai.png",
                            alt: "Conversational AI Interface",
                            className:
                              "w-full rounded-none transition-transform duration-500 hover:scale-105",
                          }),
                          e.jsx("div", {
                            className:
                              "absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300",
                          }),
                          e.jsx("div", {
                            className:
                              "absolute bottom-2 left-2 bg-black/70 px-3 py-1 rounded-none",
                            children: e.jsx("p", {
                              className: "text-white text-sm",
                              children: "AI Expert Chat Interface",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("section", {
            className: "mb-28 md:mb-36",
            children: [
              e.jsx("h2", {
                className:
                  "text-3xl md:text-4xl font-black mb-12 md:mb-16 hover:text-gray-300 transition-colors duration-300",
                children: "The Experience",
              }),
              e.jsxs("div", {
                className: "space-y-20 md:space-y-28",
                children: [
                  e.jsxs("div", {
                    className:
                      "grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center",
                    children: [
                      e.jsxs("div", {
                        className: "space-y-6",
                        children: [
                          e.jsx("h3", {
                            className: "text-2xl font-bold text-white",
                            children: "1. Professional Welcome",
                          }),
                          e.jsx("p", {
                            className: "text-gray-300 text-lg",
                            children:
                              "The experience begins with a sophisticated dark interface that introduces users to a conversational AI for digital forensics. Clean design meets modern technology.",
                          }),
                          e.jsx("blockquote", {
                            className:
                              "border-l-4 border-gray-600 pl-6 text-gray-400 italic",
                            children: `"Hello! I'm your AI Forgery Detective, powered by advanced Vision Transformers and Siamese networks. I specialize in detecting copy-move forgeries and explaining the detection process..."`,
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "group relative overflow-hidden",
                        children: [
                          e.jsx("img", {
                            src: "/images/case studies/cmfd/welcome_dark.png",
                            alt: "Professional Welcome Interface",
                            className:
                              "w-full rounded-none transition-transform duration-700 hover:scale-105 shadow-2xl",
                          }),
                          e.jsx("div", {
                            className:
                              "absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                          }),
                          e.jsx("div", {
                            className:
                              "absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-none",
                            children: e.jsx("p", {
                              className: "text-white font-medium",
                              children: "Modern Dark Theme Interface",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className:
                      "grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center",
                    children: [
                      e.jsxs("div", {
                        className:
                          "group relative overflow-hidden order-2 lg:order-1",
                        children: [
                          e.jsx(s, {
                            src: "/images/case studies/cmfd/image_upload.png",
                            alt: "Intuitive Image Upload Interface",
                            className:
                              "w-full rounded-none transition-transform duration-700 hover:scale-105 shadow-2xl",
                          }),
                          e.jsx("div", {
                            className:
                              "absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                          }),
                          e.jsx("div", {
                            className:
                              "absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-none",
                            children: e.jsx("p", {
                              className: "text-white font-medium",
                              children: "Drag & Drop Upload System",
                            }),
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "space-y-6 order-1 lg:order-2",
                        children: [
                          e.jsx("h3", {
                            className: "text-2xl font-bold text-white",
                            children: "2. Effortless Image Upload",
                          }),
                          e.jsx("p", {
                            className: "text-gray-300 text-lg",
                            children:
                              "Built with React Dropzone for seamless file handling. Users can drag and drop images or click to browse. The AI acknowledges uploads and provides guidance for the analysis process.",
                          }),
                          e.jsxs("div", {
                            className: "flex items-center gap-3",
                            children: [
                              e.jsx(I, { className: "h-5 w-5 text-green-500" }),
                              e.jsx("span", {
                                className: "text-gray-400",
                                children:
                                  "Supports JPEG, PNG, BMP, TIFF, WebP up to 4K resolution",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("section", {
            className: "mb-28 md:mb-36",
            children: [
              e.jsx("h2", {
                className:
                  "text-3xl md:text-4xl font-black mb-12 md:mb-16 hover:text-gray-300 transition-colors duration-300",
                children: "Detection Excellence",
              }),
              e.jsxs("div", {
                className: "space-y-20 md:space-y-28",
                children: [
                  e.jsxs("div", {
                    className:
                      "grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center",
                    children: [
                      e.jsxs("div", {
                        className: "space-y-6",
                        children: [
                          e.jsx("h3", {
                            className: "text-2xl font-bold text-white",
                            children: "90%+ Detection Accuracy",
                          }),
                          e.jsx("p", {
                            className: "text-gray-300 text-lg",
                            children:
                              "Trained on CASIA v2.0 dataset, the hybrid model achieves strong performance with over 90% accuracy on copy-move forgery detection while maintaining less than 8% false positive rate.",
                          }),
                          e.jsxs("div", {
                            className: "space-y-4",
                            children: [
                              e.jsx("h4", {
                                className: "text-white font-bold",
                                children: "Performance Metrics",
                              }),
                              e.jsxs("div", {
                                className: "grid grid-cols-2 gap-6",
                                children: [
                                  e.jsxs("div", {
                                    className: "text-center",
                                    children: [
                                      e.jsx("div", {
                                        className:
                                          "text-3xl font-bold text-green-500 mb-2",
                                        children: "90%+",
                                      }),
                                      e.jsx("p", {
                                        className: "text-gray-400",
                                        children: "Detection Accuracy",
                                      }),
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    className: "text-center",
                                    children: [
                                      e.jsx("div", {
                                        className:
                                          "text-3xl font-bold text-blue-500 mb-2",
                                        children: "<8%",
                                      }),
                                      e.jsx("p", {
                                        className: "text-gray-400",
                                        children: "False Positives",
                                      }),
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    className: "text-center",
                                    children: [
                                      e.jsx("div", {
                                        className:
                                          "text-3xl font-bold text-purple-500 mb-2",
                                        children: "0.75+",
                                      }),
                                      e.jsx("p", {
                                        className: "text-gray-400",
                                        children: "Localization IoU",
                                      }),
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    className: "text-center",
                                    children: [
                                      e.jsx("div", {
                                        className:
                                          "text-3xl font-bold text-orange-500 mb-2",
                                        children: "3-5s",
                                      }),
                                      e.jsx("p", {
                                        className: "text-gray-400",
                                        children: "Processing Time",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "group relative overflow-hidden",
                        children: [
                          e.jsx(s, {
                            src: "/images/case studies/cmfd/resultsummary.png",
                            alt: "Comprehensive Results Summary Dashboard",
                            className:
                              "w-full rounded-none transition-transform duration-700 hover:scale-105 shadow-2xl",
                          }),
                          e.jsx("div", {
                            className:
                              "absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                          }),
                          e.jsx("div", {
                            className:
                              "absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-none",
                            children: e.jsx("p", {
                              className: "text-white font-medium",
                              children: "Results Summary Dashboard",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className:
                      "grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center",
                    children: [
                      e.jsxs("div", {
                        className:
                          "group relative overflow-hidden order-2 lg:order-1",
                        children: [
                          e.jsx(s, {
                            src: "/images/case studies/cmfd/result_forgedarea.png",
                            alt: "Forged Area Detection and Localization Results",
                            className:
                              "w-full rounded-none transition-transform duration-700 hover:scale-105 shadow-2xl",
                          }),
                          e.jsx("div", {
                            className:
                              "absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                          }),
                          e.jsx("div", {
                            className:
                              "absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-none",
                            children: e.jsx("p", {
                              className: "text-white font-medium",
                              children: "Forged Area Detection Results",
                            }),
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "space-y-6 order-1 lg:order-2",
                        children: [
                          e.jsx("h3", {
                            className: "text-2xl font-bold text-white",
                            children: "Precise Forgery Localization",
                          }),
                          e.jsx("p", {
                            className: "text-gray-300 text-lg",
                            children:
                              "The model accurately identifies and localizes copy-move manipulations, showing both the source and target regions of forged content. Advanced visualization techniques highlight exactly where tampering has occurred with pixel-level precision.",
                          }),
                          e.jsxs("div", {
                            className: "space-y-3",
                            children: [
                              e.jsxs("div", {
                                className: "flex items-center gap-3",
                                children: [
                                  e.jsx(A, {
                                    className: "h-6 w-6 text-green-500",
                                  }),
                                  e.jsx("span", {
                                    className: "text-gray-300",
                                    children:
                                      "Source and target region identification",
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className: "flex items-center gap-3",
                                children: [
                                  e.jsx(h, {
                                    className: "h-6 w-6 text-blue-500",
                                  }),
                                  e.jsx("span", {
                                    className: "text-gray-300",
                                    children:
                                      "Confidence-based color coding and overlays",
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className: "flex items-center gap-3",
                                children: [
                                  e.jsx(g, {
                                    className: "h-6 w-6 text-purple-500",
                                  }),
                                  e.jsx("span", {
                                    className: "text-gray-300",
                                    children:
                                      "Multi-scale forgery pattern detection",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("section", {
            className: "mb-28 md:mb-36",
            children: [
              e.jsx("h2", {
                className:
                  "text-3xl md:text-4xl font-black mb-12 md:mb-16 hover:text-gray-300 transition-colors duration-300",
                children: "Real-World Analysis",
              }),
              e.jsxs("div", {
                className: "space-y-20 md:space-y-28",
                children: [
                  e.jsxs("div", {
                    className:
                      "grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center",
                    children: [
                      e.jsxs("div", {
                        className: "space-y-6",
                        children: [
                          e.jsx("h3", {
                            className: "text-2xl font-bold text-white",
                            children: "Field Testing on Complex Images",
                          }),
                          e.jsx("p", {
                            className: "text-gray-300 text-lg",
                            children:
                              "The AI system has been tested on diverse real-world scenarios including news images, social media content, and forensic evidence. Performance remains consistently high across different image qualities, lighting conditions, and manipulation techniques.",
                          }),
                          e.jsxs("div", {
                            className: "space-y-3",
                            children: [
                              e.jsxs("div", {
                                className: "flex items-center gap-3",
                                children: [
                                  e.jsx(T, {
                                    className: "h-6 w-6 text-blue-500",
                                  }),
                                  e.jsx("span", {
                                    className: "text-gray-300",
                                    children: "Multi-domain image analysis",
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className: "flex items-center gap-3",
                                children: [
                                  e.jsx(p, {
                                    className: "h-6 w-6 text-green-500",
                                  }),
                                  e.jsx("span", {
                                    className: "text-gray-300",
                                    children: "Robust to compression artifacts",
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className: "flex items-center gap-3",
                                children: [
                                  e.jsx(P, {
                                    className: "h-6 w-6 text-purple-500",
                                  }),
                                  e.jsx("span", {
                                    className: "text-gray-300",
                                    children:
                                      "Professional forensic validation",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "group relative overflow-hidden",
                        children: [
                          e.jsx("img", {
                            src: "/images/case studies/cmfd/real_world_analysis.png",
                            alt: "Real-World Forgery Analysis Results",
                            className:
                              "w-full rounded-none transition-transform duration-700 hover:scale-105 shadow-2xl",
                          }),
                          e.jsx("div", {
                            className:
                              "absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                          }),
                          e.jsx("div", {
                            className:
                              "absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-none",
                            children: e.jsx("p", {
                              className: "text-white font-medium",
                              children: "Real-World Analysis Results",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className:
                      "grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center",
                    children: [
                      e.jsxs("div", {
                        className:
                          "group relative overflow-hidden order-2 lg:order-1",
                        children: [
                          e.jsx(s, {
                            src: "/images/case studies/cmfd/raw_op.png",
                            alt: "Raw Model Output and Processing Pipeline",
                            className:
                              "w-full rounded-none transition-transform duration-700 hover:scale-105 shadow-2xl",
                          }),
                          e.jsx("div", {
                            className:
                              "absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                          }),
                          e.jsx("div", {
                            className:
                              "absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-none",
                            children: e.jsx("p", {
                              className: "text-white font-medium",
                              children: "Raw Model Output Pipeline",
                            }),
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "space-y-6 order-1 lg:order-2",
                        children: [
                          e.jsx("h3", {
                            className: "text-2xl font-bold text-white",
                            children: "Technical Processing Pipeline",
                          }),
                          e.jsx("p", {
                            className: "text-gray-300 text-lg",
                            children:
                              "The raw output demonstrates the model's internal processing stages, from initial patch analysis through attention mechanisms to final classification and localization. This transparency enables forensic experts to understand and validate the AI's decision-making process.",
                          }),
                          e.jsxs("div", {
                            className: "space-y-3",
                            children: [
                              e.jsxs("div", {
                                className: "flex items-center gap-3",
                                children: [
                                  e.jsx(x, {
                                    className: "h-6 w-6 text-orange-500",
                                  }),
                                  e.jsx("span", {
                                    className: "text-gray-300",
                                    children:
                                      "Multi-stage processing visualization",
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className: "flex items-center gap-3",
                                children: [
                                  e.jsx(r, {
                                    className: "h-6 w-6 text-purple-500",
                                  }),
                                  e.jsx("span", {
                                    className: "text-gray-300",
                                    children:
                                      "Attention mechanism transparency",
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className: "flex items-center gap-3",
                                children: [
                                  e.jsx(S, {
                                    className: "h-6 w-6 text-blue-500",
                                  }),
                                  e.jsx("span", {
                                    className: "text-gray-300",
                                    children: "Interpretable output formats",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("section", {
            className: "mb-28 md:mb-36",
            children: [
              e.jsx("h2", {
                className:
                  "text-3xl md:text-4xl font-black mb-12 md:mb-16 hover:text-gray-300 transition-colors duration-300",
                children: "Technical Implementation",
              }),
              e.jsxs("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20",
                children: [
                  e.jsxs("div", {
                    className: "space-y-10 md:space-y-12",
                    children: [
                      e.jsx("h3", {
                        className: "text-2xl font-bold text-white mb-8",
                        children: "Technology Stack",
                      }),
                      e.jsxs("div", {
                        className: "space-y-8",
                        children: [
                          e.jsxs("div", {
                            children: [
                              e.jsxs("h4", {
                                className:
                                  "text-white font-semibold mb-3 flex items-center gap-2",
                                children: [
                                  e.jsx(r, {
                                    className: "h-5 w-5 text-purple-500",
                                  }),
                                  "Machine Learning",
                                ],
                              }),
                              e.jsxs("div", {
                                className: "space-y-2",
                                children: [
                                  e.jsxs("div", {
                                    className:
                                      "flex justify-between items-center py-2 border-b border-gray-800",
                                    children: [
                                      e.jsx("span", {
                                        className: "text-gray-400",
                                        children: "Framework",
                                      }),
                                      e.jsx("span", {
                                        className:
                                          "text-purple-400 font-medium",
                                        children: "PyTorch",
                                      }),
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    className:
                                      "flex justify-between items-center py-2 border-b border-gray-800",
                                    children: [
                                      e.jsx("span", {
                                        className: "text-gray-400",
                                        children: "Vision Models",
                                      }),
                                      e.jsx("span", {
                                        className: "text-blue-400 font-medium",
                                        children: "timm (PyTorch Image Models)",
                                      }),
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    className:
                                      "flex justify-between items-center py-2",
                                    children: [
                                      e.jsx("span", {
                                        className: "text-gray-400",
                                        children: "Architecture",
                                      }),
                                      e.jsx("span", {
                                        className: "text-green-400 font-medium",
                                        children:
                                          "Vision Transformer + Siamese",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            children: [
                              e.jsxs("h4", {
                                className:
                                  "text-white font-semibold mb-3 flex items-center gap-2",
                                children: [
                                  e.jsx(C, {
                                    className: "h-5 w-5 text-blue-500",
                                  }),
                                  "Frontend",
                                ],
                              }),
                              e.jsxs("div", {
                                className: "space-y-2",
                                children: [
                                  e.jsxs("div", {
                                    className:
                                      "flex justify-between items-center py-2 border-b border-gray-800",
                                    children: [
                                      e.jsx("span", {
                                        className: "text-gray-400",
                                        children: "Framework",
                                      }),
                                      e.jsx("span", {
                                        className: "text-blue-400 font-medium",
                                        children: "React + TypeScript",
                                      }),
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    className:
                                      "flex justify-between items-center py-2 border-b border-gray-800",
                                    children: [
                                      e.jsx("span", {
                                        className: "text-gray-400",
                                        children: "File Upload",
                                      }),
                                      e.jsx("span", {
                                        className: "text-green-400 font-medium",
                                        children: "React Dropzone",
                                      }),
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    className:
                                      "flex justify-between items-center py-2",
                                    children: [
                                      e.jsx("span", {
                                        className: "text-gray-400",
                                        children: "Styling",
                                      }),
                                      e.jsx("span", {
                                        className:
                                          "text-purple-400 font-medium",
                                        children: "Tailwind CSS",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            children: [
                              e.jsxs("h4", {
                                className:
                                  "text-white font-semibold mb-3 flex items-center gap-2",
                                children: [
                                  e.jsx(D, {
                                    className: "h-5 w-5 text-green-500",
                                  }),
                                  "Backend",
                                ],
                              }),
                              e.jsxs("div", {
                                className: "space-y-2",
                                children: [
                                  e.jsxs("div", {
                                    className:
                                      "flex justify-between items-center py-2 border-b border-gray-800",
                                    children: [
                                      e.jsx("span", {
                                        className: "text-gray-400",
                                        children: "API Framework",
                                      }),
                                      e.jsx("span", {
                                        className: "text-green-400 font-medium",
                                        children: "Flask",
                                      }),
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    className:
                                      "flex justify-between items-center py-2 border-b border-gray-800",
                                    children: [
                                      e.jsx("span", {
                                        className: "text-gray-400",
                                        children: "AI Platform",
                                      }),
                                      e.jsx("span", {
                                        className:
                                          "text-orange-400 font-medium",
                                        children: "Groq AI (Llama 3.1 70B)",
                                      }),
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    className:
                                      "flex justify-between items-center py-2",
                                    children: [
                                      e.jsx("span", {
                                        className: "text-gray-400",
                                        children: "Image Processing",
                                      }),
                                      e.jsx("span", {
                                        className: "text-red-400 font-medium",
                                        children: "OpenCV + PIL",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "space-y-10 md:space-y-12",
                    children: [
                      e.jsx("h3", {
                        className: "text-2xl font-bold text-white mb-8",
                        children: "Deployment & Features",
                      }),
                      e.jsxs("div", {
                        className: "space-y-8",
                        children: [
                          e.jsxs("div", {
                            children: [
                              e.jsx("h4", {
                                className: "text-white font-semibold mb-4",
                                children: "One-Command Setup",
                              }),
                              e.jsx("p", {
                                className: "text-gray-300 mb-4",
                                children:
                                  "Automated installation script handles all dependencies, model downloads, and environment setup.",
                              }),
                              e.jsxs("div", {
                                className:
                                  "bg-black border border-gray-700 p-4 rounded-none font-mono text-sm",
                                children: [
                                  e.jsx("div", {
                                    className: "text-green-400",
                                    children: "$ chmod +x setup.sh",
                                  }),
                                  e.jsx("div", {
                                    className: "text-blue-400",
                                    children: "$ ./setup.sh",
                                  }),
                                  e.jsx("div", {
                                    className: "text-gray-500",
                                    children:
                                      "# Installs PyTorch, downloads pre-trained weights",
                                  }),
                                  e.jsx("div", {
                                    className: "text-gray-500",
                                    children:
                                      "# Sets up Flask API and React frontend",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            children: [
                              e.jsx("h4", {
                                className: "text-white font-semibold mb-4",
                                children: "Performance Optimization",
                              }),
                              e.jsxs("div", {
                                className: "space-y-3",
                                children: [
                                  e.jsxs("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                      e.jsx(M, {
                                        className: "h-5 w-5 text-yellow-500",
                                      }),
                                      e.jsx("span", {
                                        className: "text-gray-300",
                                        children:
                                          "GPU acceleration with CUDA support",
                                      }),
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                      e.jsx(R, {
                                        className: "h-5 w-5 text-blue-500",
                                      }),
                                      e.jsx("span", {
                                        className: "text-gray-300",
                                        children:
                                          "Pre-trained ViT weights for faster initialization",
                                      }),
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                      e.jsx(F, {
                                        className: "h-5 w-5 text-green-500",
                                      }),
                                      e.jsx("span", {
                                        className: "text-gray-300",
                                        children:
                                          "Optimized inference pipeline (3-5s processing)",
                                      }),
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                      e.jsx(p, {
                                        className: "h-5 w-5 text-purple-500",
                                      }),
                                      e.jsx("span", {
                                        className: "text-gray-300",
                                        children:
                                          "Robust error handling and validation",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            children: [
                              e.jsx("h4", {
                                className: "text-white font-semibold mb-4",
                                children: "Research Impact",
                              }),
                              e.jsx("p", {
                                className: "text-gray-300 mb-3",
                                children:
                                  "This project advances digital forensics accessibility through conversational AI, bridging the gap between complex computer vision research and practical real-world applications.",
                              }),
                              e.jsx("div", {
                                className:
                                  "text-sm text-gray-400 italic border-l-2 border-gray-600 pl-4",
                                children:
                                  '"Implementation combining Vision Transformers with conversational AI for digital forensics education and detection."',
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          a.isOpen &&
            e.jsx("div", {
              className:
                "fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn",
              onClick: n,
              children: e.jsx("div", {
                className:
                  "bg-black border border-gray-800 rounded-xl max-w-md w-full p-8 transform animate-slideInUp shadow-2xl",
                onClick: (t) => t.stopPropagation(),
                children: e.jsxs("div", {
                  className: "text-center",
                  children: [
                    e.jsx("div", {
                      className: "mb-6",
                      children:
                        a.type === "demo"
                          ? e.jsx(d, {
                              className: "h-16 w-16 text-blue-500 mx-auto mb-4",
                            })
                          : e.jsx(m, {
                              className:
                                "h-16 w-16 text-green-500 mx-auto mb-4",
                            }),
                    }),
                    e.jsx("h3", {
                      className: "text-2xl font-bold text-white mb-4",
                      children:
                        a.type === "demo"
                          ? "Live Demo Access"
                          : "Source Code Access",
                    }),
                    e.jsx("p", {
                      className: "text-gray-300 mb-6 leading-relaxed",
                      children:
                        a.type === "demo"
                          ? "The live demo showcases the complete AI-powered forgery detection system with conversational AI. Due to API costs and server resources, access is provided upon request."
                          : "The complete source code includes proprietary AI model implementations and advanced architectural patterns. Access is available for serious developers and potential collaborators.",
                    }),
                    e.jsxs("div", {
                      className: "space-y-4",
                      children: [
                        e.jsxs("div", {
                          className:
                            "bg-gray-900 border border-gray-700 rounded-lg p-4",
                          children: [
                            e.jsx("h4", {
                              className: "text-white font-semibold mb-2",
                              children: "📧 Request Access",
                            }),
                            e.jsxs("p", {
                              className: "text-gray-400 text-sm",
                              children: [
                                "Send me a DM on",
                                " ",
                                e.jsx("a", {
                                  href: "https://www.linkedin.com/in/mayankdev23",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className:
                                    "text-blue-400 hover:text-blue-300 underline",
                                  children: "LinkedIn",
                                }),
                                " ",
                                "or email",
                                " ",
                                e.jsx("a", {
                                  href: "mailto:nischalskanda@gmail.com",
                                  className:
                                    "text-blue-400 hover:text-blue-300 underline",
                                  children: "nischalskanda@gmail.com",
                                }),
                              ],
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "flex flex-col sm:flex-row gap-3",
                          children: [
                            e.jsx("a", {
                              href: "https://www.linkedin.com/in/mayankdev23",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              "data-sound": "nav",
                              className:
                                "flex-1 bg-daisy-green hover:bg-daisy-yellow text-black px-4 py-3 rounded-lg font-medium transition-colors duration-300 text-center border-2 border-gray-700",
                              children: "Message on LinkedIn",
                            }),
                            e.jsx("a", {
                              href: "mailto:nischalskanda@gmail.com?subject=AI Forgery Detective - Access Request",
                              "data-sound": "nav",
                              className:
                                "flex-1 bg-gray-800 hover:bg-gray-700 text-white px-4 py-3 rounded-lg font-medium transition-colors duration-300 text-center",
                              children: "Send Email",
                            }),
                          ],
                        }),
                        e.jsx("button", {
                          onClick: n,
                          "data-sound": "off",
                          className:
                            "w-full border border-gray-700 text-gray-300 hover:text-white hover:border-gray-600 px-4 py-3 rounded-lg font-medium transition-colors duration-300",
                          children: "Close",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
        ],
      }),
      e.jsx(N, {}),
    ],
  });
};
export { H as default };

