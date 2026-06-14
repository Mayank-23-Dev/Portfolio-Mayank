var h = Object.defineProperty,
  p = Object.defineProperties;
var x = Object.getOwnPropertyDescriptors;
var c = Object.getOwnPropertySymbols;
var g = Object.prototype.hasOwnProperty,
  u = Object.prototype.propertyIsEnumerable;
var d = (n, r, o) =>
    r in n
      ? h(n, r, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (n[r] = o),
  t = (n, r) => {
    for (var o in r || (r = {})) g.call(r, o) && d(n, o, r[o]);
    if (c) for (var o of c(r)) u.call(r, o) && d(n, o, r[o]);
    return n;
  },
  s = (n, r) => p(n, x(r));
import { j as e } from "../ui/_uiVendor";
import { L as m } from "../ui/_reactVendor";
import { H as b } from "../ui/Landing_UI/Header";
import { F as f } from "../ui/Landing_UI/Footer";
import { P as j } from "../ui/Landing_UI/PaperBackground";
import { B as y } from "../ui/Playground_UI/BookCover";
import { m as a } from "../ui/_animationVendor";
import "../ui/Landing_UI/MenuToggleIcon";
import "../ui/AppShell";
import "../ui/_iconsVendor";
import "../ui/Landing_UI/ConnectDropdown";
import "../ui/_sharedIndex";

const w = [
  {
    src: "https://covers.openlibrary.org/b/isbn/9781544514215-M.jpg",
    largeSrc: "https://covers.openlibrary.org/b/isbn/9781544514215-L.jpg",
    title: "Almanack of Naval",
    author: "Eric Jorgenson",
  },
  {
    src: "https://covers.openlibrary.org/b/isbn/9780761169253-M.jpg",
    largeSrc: "https://covers.openlibrary.org/b/isbn/9780761169253-L.jpg",
    title: "Steal Like an Artist",
    author: "Austin Kleon",
  },
  {
    src: "https://covers.openlibrary.org/b/isbn/9781949759228-M.jpg",
    largeSrc: "https://covers.openlibrary.org/b/isbn/9781949759228-L.jpg",
    title: "The Mountain Is You",
    author: "Brianna Wiest",
  },
];

const i = (n = 0, dur = 0.6) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: !0, margin: "-50px" },
  transition: { duration: dur, delay: n, ease: [0.25, 0.1, 0.25, 1] },
});

const l = () =>
  e.jsxs("div", {
    className: "my-14 flex items-center justify-center gap-4 md:my-16",
    children: [
      e.jsx("span", { className: "h-px w-16 bg-zinc-300/60" }),
      e.jsx("img", {
        src: "/images/life/stamp-star.svg",
        alt: "",
        "aria-hidden": "true",
        className: "h-5 w-5 opacity-40",
      }),
      e.jsx("span", { className: "h-px w-16 bg-zinc-300/60" }),
    ],
  });

const D = () =>
  e.jsxs(j, {
    children: [
      e.jsx("div", {
        className: "container mx-auto px-4 md:px-6 lg:px-8 relative",
        children: e.jsx(b, {}),
      }),
      e.jsxs("main", {
        id: "main-content",
        className: "relative overflow-hidden",
        children: [
          e.jsx("div", {
            className:
              "absolute top-8 -left-6 opacity-50 hidden lg:block transform -rotate-12",
            children: e.jsx("img", {
              src: "/images/graphics/Music-Headphone--Streamline-Beveled-Scribbles.png",
              alt: "",
              "aria-hidden": "true",
              className: "w-28 h-28 mix-blend-multiply",
              loading: "lazy",
            }),
          }),
          e.jsx("div", {
            className:
              "absolute top-12 -right-8 opacity-50 hidden lg:block transform rotate-12",
            children: e.jsx("img", {
              src: "/images/graphics/Small-Flowers-Doodle--Streamline-Beveled-Scribbles.png",
              alt: "",
              "aria-hidden": "true",
              className: "w-32 h-32 mix-blend-multiply",
              loading: "lazy",
            }),
          }),
          e.jsx("section", {
            className: "pb-4 pt-10 md:pt-16",
            children: e.jsxs("div", {
              className: "mx-auto max-w-2xl px-6 text-center md:px-4",
              children: [
                e.jsx(
                  a.p,
                  s(t({}, i(0)), {
                    className:
                      "text-[11px] uppercase tracking-[0.35em] text-zinc-400",
                    children: "A personal note",
                  }),
                ),
                e.jsxs(
                  a.h1,
                  s(t({}, i(0.1)), {
                    className:
                      "mt-6 font-handwritten text-5xl leading-[1.15] text-zinc-900 md:text-6xl lg:text-7xl",
                    children: [
                      "Life, beyond",
                      e.jsx("br", {}),
                      "the portfolio",
                    ],
                  }),
                ),
                e.jsx(
                  a.p,
                  s(t({}, i(0.2)), {
                    className:
                      "mx-auto mt-6 max-w-md text-[15px] leading-relaxed text-zinc-500 md:text-base",
                    children:
                      "Not a résumé. Not a timeline. Just the story underneath the work.",
                  }),
                ),
                e.jsx(
                  a.div,
                  s(t({}, i(0.3)), {
                    className: "mt-8",
                    children: e.jsx("img", {
                      src: "/images/life/divider-stitch.svg",
                      alt: "",
                      "aria-hidden": "true",
                      className: "mx-auto w-48 opacity-30 md:w-56",
                    }),
                  }),
                ),
              ],
            }),
          }),
          e.jsxs("section", {
            className: "relative mx-auto max-w-2xl px-6 pb-24 pt-8 md:px-4",
            children: [
              e.jsx("div", {
                className:
                  "absolute -right-16 top-0 opacity-50 hidden lg:block transform -rotate-6",
                children: e.jsx("img", {
                  src: "/images/graphics/Idea-Light-Bulb--Streamline-Beveled-Scribbles.png",
                  alt: "",
                  "aria-hidden": "true",
                  className: "w-24 h-24 mix-blend-multiply",
                  loading: "lazy",
                }),
              }),
              e.jsx(
                a.div,
                s(t({}, i(0.4)), {
                  className: "mb-24 flex justify-center",
                  children: e.jsxs("div", {
                    className:
                      "rotate-[2deg] bg-white p-2.5 shadow-[0_2px_20px_rgba(0,0,0,0.08)] transition-transform duration-500 hover:rotate-0",
                    children: [
                      e.jsx("img", {
                        src: "/images/life/Mine%20(2).webp",
                        alt: "Mayank Dev",
                        className: "h-56 w-44 object-cover md:h-64 md:w-52",
                        loading: "eager",
                      }),
                      e.jsx("p", {
                        className:
                          "mt-1.5 text-center font-handwritten text-[11px] text-zinc-400",
                        children: "Yeah!! That's Me 😏",
                      }),
                    ],
                  }),
                }),
              ),
              e.jsxs("div", {
                className: "space-y-32 mb-20",
                children: [
                  e.jsxs("div", {
                    children: [
                      e.jsx(a.span, s(t({}, i(0.1)), {
                        className: "block text-[10px] font-bold uppercase tracking-[0.45em] text-zinc-900/40 mb-5 mt-40 text-left font-sans",
                        children: "The Spark"
                      })),
                      e.jsxs("div", {
                        className: "space-y-6 text-left body-text text-[17px] sm:text-[0.95rem] leading-[1.85] sm:leading-[1.8] text-zinc-700 font-sans",
                        children: [
                          e.jsx(a.p, s(t({}, i(0.2)), { children: "I remember the first computer I ever touched. It belonged to my father. He used it for work like Microsoft Office and documents. He did work on it. I was a kid watching from the side. He taught me how to type on that computer. I learned English first then Kruti Dev 010 so I could type in Hindi so that I could actually help my father with his files." })),
                          e.jsx(a.p, s(t({}, i(0.3)), { children: "I do not think he had any idea what he was starting. Because once I had access to that machine I could not stop. I found GTA. I found IGI. I found out how to download games I was not supposed to download. I filled up the drive with things my father did not know existed. He would find them. Delete everything. I would find a way back in. That loop—I still love those days—discovering new ways to download and hide games and get caught then again figure out another route has honestly been my story." })),
                        ]
                      })
                    ]
                  }),
                  e.jsx(a.div, s(t({}, i(0.2, 0.9)), {
                    className: "py-16 border-y border-zinc-200/60 my-24",
                    children: e.jsx("h2", {
                      className: "font-serif italic text-4xl md:text-6xl text-zinc-900 text-center leading-tight",
                      style: { fontSize: "clamp(1.6rem, 7vw, 2.4rem)" },
                      children: '"I\'ve always been the kid finding the window"',
                    }),
                  })),
                  e.jsxs("div", {
                    children: [
                      e.jsx(a.span, s(t({}, i(0.1)), {
                        className: "block text-[10px] font-bold uppercase tracking-[0.45em] text-zinc-900/40 mb-5 mt-20 text-left font-sans",
                        children: "Discovery"
                      })),
                      e.jsxs("div", {
                        className: "space-y-6 text-left body-text text-[17px] sm:text-[0.95rem] leading-[1.85] sm:leading-[1.8] text-zinc-700 font-sans",
                        children: [
                          e.jsx(a.p, s(t({}, i(0.2)), { children: "By the time I was ten I was already obsessed. I was swapping system files like Utilman with CMD to navigate the Windows login and reinstalling Windows from a pendrive I made myself. I was figuring out how to activate it just so I could keep using the machine. Nobody taught me any of that. I just needed access enough to figure it out. I showed the tricks to my friends on the PCs in my School Computer Lab—I was the kid who knew his way around machines in a way nobody else did yet. That felt like something then." })),
                        ]
                      })
                    ]
                  }),
                  e.jsxs("div", {
                    className: "py-12 border-y border-zinc-200/40 my-16",
                    children: [
                      e.jsx(a.p, s(t({}, i(0.1)), {
                        className: "text-[1.1rem] text-zinc-800 font-medium italic text-left",
                        children: "I am telling you this because I want you to understand from the start there was never a moment where someone handed me the door. I have always been the kid finding the window."
                      })),
                    ]
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx(a.span, s(t({}, i(0.1)), {
                        className: "block text-[10px] font-bold uppercase tracking-[0.45em] text-zinc-900/40 mb-5 mt-20 text-left font-sans",
                        children: "The Pivot"
                      })),
                      e.jsxs("div", {
                        className: "space-y-6 text-left body-text text-[17px] sm:text-[0.95rem] leading-[1.85] sm:leading-[1.8] text-zinc-700 font-sans",
                        children: [
                          e.jsx(a.p, s(t({}, i(0.2)), { children: "By the time I reached Class 11 I had a laptop from the COVID period. It was the machine that was entirely mine. There were no one's files on it. Nobody was watching what I did with it. I started learning video editing. Not out of passion at first honestly. I saw that editors were making money online. That felt like a path. I started on Premiere Pro CC 2014 because my laptop could run that version without lagging. I just taught myself from there." })),
                          e.jsx(a.p, s(t({}, i(0.3)), { children: "That turned into a YouTube channel called NotGamerzReact. I made gaming montages, meme edits, long-form videos of creators gameplay cut together with energy and timing. No strategy. Just a kid who had learned to edit and wanted to put something out. That channel hit thousands of subscribers. One video crossed millions of views. I thought this was the beginning of something. Then YouTube rejected my monetization application. The content was not eligible. I was using peoples gameplay. That had a ceiling I had not seen coming." })),
                          e.jsx(a.p, s(t({}, i(0.4)), { children: "So I did the math quickly—the money was not coming from here. I sold the channel for a small amount to a guy named Nishant. I opened a Fiverr account the week. I started editing for creators—one of them had hundreds of thousands of subscribers. I kept moving. I did not stop to grieve it. That is how I have always operated. When something closes I do not stand at that door. I find the next one already open." })),
                        ]
                      })
                    ]
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx(a.span, s(t({}, i(0.1)), {
                        className: "block text-[10px] font-bold uppercase tracking-[0.45em] text-zinc-900/40 mb-5 mt-20 text-left font-sans",
                        children: "The Drift"
                      })),
                      e.jsxs("div", {
                        className: "space-y-6 text-left body-text text-[17px] sm:text-[0.95rem] leading-[1.85] sm:leading-[1.8] text-zinc-700 font-sans",
                        children: [
                          e.jsx(a.p, s(t({}, i(0.2)), { children: "What came after that is the part I talk about the least. Because it does not have a story to it. On the surface I was doing things—freelancing on Fiverr, nominally preparing for JEE, technically showing up for school. But I was also just sitting. Hours in a chair. Eating without paying attention. Gaining weight I did not notice accumulating until one day I looked in the mirror. I genuinely did not like the person looking back at me. Not the number on the scale—I mean the distance between who I was and who I kept telling myself I would eventually become." })),
                          e.jsx(a.p, s(t({}, i(0.3)), { children: "I touched a weight I was not proud of. I was always kind to everyone around me. I was completely careless with myself. I nearly failed Class 11 barely crossing the border. I left JEE coaching because I figured out quickly that JEE and school together was not something I could manage. Somewhere in that decision I also just lost direction for a while. No drama. No single breakdown moment. Just a slow quiet kind of drift that looks completely fine from the outside. It sits very heavy from the inside. I was just not respecting myself. That is the accurate way I know how to say it." })),
                        ]
                      })
                    ]
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx(a.span, s(t({}, i(0.1)), {
                        className: "block text-[10px] font-bold uppercase tracking-[0.45em] text-zinc-900/40 mb-5 mt-20 text-left font-sans",
                        children: "Recalibration"
                      })),
                      e.jsxs("div", {
                        className: "space-y-6 text-left body-text text-[17px] sm:text-[0.95rem] leading-[1.85] sm:leading-[1.8] text-zinc-700 font-sans",
                        children: [
                          e.jsx(a.p, s(t({}, i(0.2)), { children: "The change did not arrive in one moment. It came in a set of decisions I started making when I got tired enough of the alternative. I went to a dietician. I started hitting the gym at 5 AM. I got an apprenticeship at Angirasoft Pvt. Ltd. For the time someone actually trained me properly—C, then C++, all the way through object-oriented programming. Until I could sit in front of a LeetCode problem. Work through it without panicking." })),
                          e.jsx(a.p, s(t({}, i(0.3)), { children: "I started reading books that changed how I thought, The Almanack of Naval Ravikant, Steal Like an Artist by Austin Kleon, books on psychology. I changed who I spent time with slowly and without making a deal of it. I started building things for myself—not for a portfolio, not for anyone to see, just because I had a problem I wanted to solve. The weight started coming down. The confidence started coming—not the fake kind you perform, the real kind that arrives quietly when you are actually doing the work." })),
                          e.jsx(a.p, s(t({}, i(0.4)), { children: "I started feeling like I was finally in my corner again. That gap between boards result and college starting is the period that actually changed me. Not the wins before it. That stretch." })),
                        ]
                      })
                    ]
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx(a.span, s(t({}, i(0.1)), {
                        className: "block text-[10px] font-bold uppercase tracking-[0.45em] text-zinc-900/40 mb-5 mt-20 text-left font-sans",
                        children: "The Academy"
                      })),
                      e.jsxs("div", {
                        className: "space-y-6 text-left body-text text-[17px] sm:text-[0.95rem] leading-[1.85] sm:leading-[1.8] text-zinc-700 font-sans",
                        children: [
                          e.jsx(a.p, s(t({}, i(0.2)), { children: "I walked into PSIT, Kanpur for my semester carrying all of that. The first thing I did was build Hactiq, a habit tracker I made because I kept seeing people selling template versions of it for a few hundred rupees. I thought that was pointless. So I built the thing. Full authentication, a database, real-time statistics—usable from any phone or laptop just by logging in. I made it completely free because I built it for myself first. If it helps me it will help someone. That is always how I think." })),
                          e.jsx(a.p, s(t({}, i(0.3)), { children: "While that was happening I also ran a large-scale experiment on YouTube under a channel called CoreByte—cinematic Minecraft content, one video every day purely to understand how the algorithm makes decisions about what gets pushed and what gets ignored. Not for a brand, not for subscribers, for data. By the end of those videos I had millions of views. The channel is still there. My first semester ended with 8.5 SGPA. After average grades in boards—after thinking I had genuinely finished myself—strong grades. I was not jumping around about it. I just felt like I was finally competing in the right field. In the field where my obsession can defeat anyone out there." })),
                          e.jsx(a.p, s(t({}, i(0.4)), { children: "The next semester I ran the experiment on Instagram and hit millions of views. I also built FinEase that semester—started it as a project built around a real problem I had. Money in India is scattered everywhere—Paytm, PhonePe, bank accounts, wallets, cash, subscriptions. There is no single clean place to see all of it. FinEase centralises that. Adds AI-backed analysis on top of it. Smart expense tracking, budget monitoring, spending analytics, a receipt scanner, AutoPay tracking—the whole thing deployed properly as a PWA with a database working on desktop and mobile." })),
                          e.jsx(a.p, s(t({}, i(0.5)), { children: "Then I heard about the PSIT Protech Hackathon. Submitted it. When I walked into that room I was not nervous honestly because when I looked around I realised we were the team with something actually deployed and working. Everyone else had AI-generated sites running on localhost. We finished among the winners. I was not surprised. I was just glad the work showed up the way it was supposed to." })),
                        ]
                      })
                    ]
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx(a.span, s(t({}, i(0.1)), {
                        className: "block text-[10px] font-bold uppercase tracking-[0.45em] text-zinc-900/40 mb-5 mt-20 text-left font-sans",
                        children: "Present Focus"
                      })),
                      e.jsxs("div", {
                        className: "space-y-6 text-left body-text text-[17px] sm:text-[0.95rem] leading-[1.85] sm:leading-[1.8] text-zinc-700 font-sans",
                        children: [
                          e.jsx(a.p, s(t({}, i(0.2)), { children: "Now I am in my third semester. The work has gotten wider. DSA is something I do every day—not because any exam requires it but because I want to be the kind of developer who can actually think through a problem cleanly, not just find a solution and paste it. There is a difference between those two things and DSA is where that difference lives. I am working on it consistently." })),
                          e.jsx(a.p, s(t({}, i(0.3)), { children: "I have also been getting deep into desktop application development, which is a completely different world from web—local file handling, running without a browser, thinking about performance in a different way. That led to VaultDL—a Windows desktop application I built for media downloading that supports hundreds of platforms, has modes, quality control and queue management and works without the user ever needing to touch a terminal. I built it because I kept wanting something like it and everything that existed either needed command line knowledge or just felt bad to use. So I made it myself." })),
                          e.jsx(a.p, s(t({}, i(0.4)), { children: "I am also working on Shiq now—a full content production pipeline for solo creators covering everything from idea capture to scripting, storyboarding, recording checklists, editing progress and publishing analytics all in one place. It is the tool I would have wanted from day one. It does not exist yet the way I want it to. So I am building it." })),
                          e.jsx(a.p, s(t({}, i(0.5)), { children: "I am also learning to film—aspect ratio, frame rate, exposure—how light actually behaves, what makes a composition feel intentional. I am at the beginning of that curve. I am fine with that. That is the whole point of how I operate. I learn something I start using it and I pass it forward as fast as I can. Not to build an audience, not to prove anything, just because if someone is giving me their time and attention the least I can do is make sure they leave with something." })),
                          e.jsx(a.p, s(t({}, i(0.6)), { children: "I have never had someone one step ahead of me saying 'try this, this actually works.' I had to find everything—on my broken system files, a channel sold for a small amount, an exam result I thought had finished me, a mirror I did not want to look at. If I can be that one step, for even one person sitting where I was sitting, then everything I am building right now is worth it." })),
                        ]
                      })
                    ]
                  }),
                  e.jsx(a.div, s(t({}, i(0.2, 0.9)), {
                    className: "pt-12 pb-32",
                    children: e.jsx("h2", {
                      className: "mt-2 font-serif italic text-4xl md:text-7xl text-zinc-900 text-center leading-tight",
                      style: { fontSize: "clamp(1.8rem, 8vw, 3rem)" },
                      children: "Input without output becomes noise",
                    }),
                  })),
                ],
              }),
              e.jsx(l, {}),
              e.jsxs(a.div, s(t({}, i(0.1)), {
              className: "text-center mb-24",
              children: [
              e.jsx("p", {
                className: "text-[10px] uppercase tracking-[0.35em] text-zinc-400 mb-12 font-sans",
                children: "Books that shaped how I think",
              }),
              e.jsx("div", {
                className: "flex flex-nowrap sm:flex-wrap overflow-x-auto sm:overflow-visible gap-8 md:gap-12 pb-16 sm:pb-16 justify-start sm:justify-center px-4 scrollbar-hide",
                style: { scrollbarWidth: 'none', msOverflowStyle: 'none' },
                children: w.map((n, r) =>
                  e.jsx(y, s(t({}, n), {
                    key: n.title,
                    rotation: r === 0 ? -3 : r === 1 ? 1 : 4,
                  }))
                ),
              }),
              ],
              })),
              e.jsxs(a.div, s(t({}, i(0.2)), {
                className: "mt-24 flex flex-col items-center gap-3 border-t border-zinc-200 pt-10 sm:flex-row sm:justify-between pb-32",
                children: [
                  e.jsx("p", {
                    className: "text-[11px] uppercase tracking-[0.3em] text-zinc-400",
                    children: "WANT THE STRUCTURED VERSION?",
                  }),
                  e.jsxs("div", {
                    className: "flex gap-3",
                    children: [
                      e.jsx(m, {
                        to: "/journey",
                        className: "rounded-full border border-zinc-900 px-5 py-2 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-900 hover:text-white",
                        children: "Journey",
                      }),
                      e.jsx(m, {
                        to: "/projects",
                        className: "rounded-full border border-zinc-300 px-5 py-2 text-sm font-semibold text-zinc-500 transition-colors hover:border-zinc-900 hover:text-zinc-900",
                        children: "Projects",
                      }),
                    ],
                  }),
                ],
              })),
            ],
          }),
        ],
      }),
      e.jsx(f, {}),
    ],
  });

export { D as default };
