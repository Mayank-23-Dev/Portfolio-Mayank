# Mayank Dev — Full-Stack Developer Portfolio

<div align="center">

  <img src="public/PWA/favicon.svg" alt="Mayank Dev Logo" width="80" height="80" />

  <h3>✨ Interactive, Doodle-Styled Personal Portfolio & Case Studies ✨</h3>

  <p>
    A high-performance, creative developer portfolio built with <strong>React 19</strong>, <strong>TypeScript</strong>, <strong>Vite</strong>, <strong>GSAP</strong>, and <strong>Lenis</strong>.
  </p>

  <p>
    <a href="https://mayank-dev.in/"><strong>🌐 Live Site: mayank-dev.in »</strong></a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React 19" />
    <img src="https://img.shields.io/badge/TypeScript-6.0-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Vite-8.0-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/GSAP-3.15-88CE02?style=flat-square&logo=greensock&logoColor=white" alt="GSAP" />
    <img src="https://img.shields.io/badge/Lenis-Smooth_Scroll-black?style=flat-square" alt="Lenis" />
    <img src="https://img.shields.io/badge/Firebase-Hosting-FFCA28?style=flat-square&logo=firebase&logoColor=black" alt="Firebase Hosting" />
    <img src="https://img.shields.io/badge/PWA-Ready-5A0FC8?style=flat-square&logo=pwa&logoColor=white" alt="PWA Ready" />
  </p>
</div>

---

## 📖 Overview

This is the official portfolio website of **Mayank Dev**, a Full-Stack Developer & 2nd Year BTech CSE student from India. 

Designed with a playful, hand-crafted paper and doodle aesthetic, the site blends visual storytelling with modern web engineering—featuring smooth kinetic scrolling, interactive project case studies, creative coding playgrounds, and technical writing.

---

## 🚀 Key Features

- 🎨 **Playful Paper & Doodle Aesthetic**: Custom paper textures, sticky notes, scribble underlines, and hand-drawn doodles powered by SVG and canvas rendering.
- ⚡ **Ultra-Fast & Modern Stack**: Built with React 19, TypeScript, and Vite 8 for blazing development speeds and sub-second production page loads.
- 🌊 **Fluid Motion & Kinetic Scrolling**: Integrated **Lenis** smooth momentum scrolling paired with **GSAP** micro-interactions and scroll triggers.
- 📁 **Deep-Dive Case Studies**: Comprehensive architectural walkthroughs, challenges, and solutions for flagship products (**VaultDL**, **Shiq**, **FinEase**, **Hactiq**, and **AI Forgery Detective**).
- ✍️ **Developer Blog**: Technical deep dives, development workflows, and frontend performance insights.
- 🧪 **Interactive Playground**: Experiments with physics, creative UI components, and canvas animations.
- 📱 **Progressive Web App (PWA)**: Installable as an app on desktop and mobile with custom app icons and manifest configuration.
- 🔍 **Search Engine & Social Media Optimized**: Dynamic meta tags, OpenGraph cards, Twitter preview cards, and structured JSON-LD schemas via `SEOManager`.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [React 19](https://react.dev/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Bundler & Tooling** | [Vite 8](https://vitejs.dev/) |
| **Animation & Motion** | [GSAP (GreenSock)](https://greensock.com/gsap/) & [@gsap/react](https://www.npmjs.com/package/@gsap/react) |
| **Smooth Scrolling** | [Lenis](https://lenis.darkroom.engineering/) |
| **Styling** | Custom CSS + Utility Styles + Hand-drawn Canvas/SVG Engines |
| **Hosting & CI/CD** | [Firebase Hosting](https://firebase.google.com/docs/hosting) |

---

## 📂 Project Structure

```text
Portfolio-Mayank/
├── public/                 # Static assets, PWA icons, manifest.json
│   ├── PWA/                # Favicons and Apple Touch Icons
│   └── ...
├── src/
│   ├── components/
│   │   ├── Pages/          # Route page views
│   │   │   ├── HomePage.tsx
│   │   │   ├── ProjectsPage.tsx
│   │   │   ├── LifePage.tsx
│   │   │   ├── JourneyPage.tsx
│   │   │   ├── ContactPage.tsx
│   │   │   ├── BlogPage.tsx
│   │   │   ├── BlogPostPage.tsx
│   │   │   ├── PlaygroundPage.tsx
│   │   │   ├── FinEaseCaseStudy.tsx
│   │   │   ├── HactiqCaseStudy.tsx
│   │   │   ├── ShiqCaseStudy.tsx
│   │   │   ├── VaultDLCaseStudy.tsx
│   │   │   └── AIForgeryDetectiveCaseStudy.tsx
│   │   └── ui/             # Shared interactive UI modules & vendors
│   │       ├── AppShell.tsx
│   │       ├── GsapAnimatedDoodle.tsx
│   │       ├── SEOManager.tsx
│   │       ├── Landing_UI/ # Header, Footer, StickyNote, Scribbles, etc.
│   │       └── ...
│   ├── routes/             # Route configurations and paths
│   ├── styles/             # Global CSS and animation stylesheets
│   ├── App.tsx             # Root Application component
│   └── main.tsx            # Application entry point with BrowserRouter
├── firebase.json           # Firebase Hosting configuration (SPA rewrites)
├── index.html              # HTML shell with OpenGraph, PWA, and SEO tags
├── package.json            # Scripts and dependencies
└── vite.config.js          # Vite build configuration
```

---

## 🗺️ Page Routes

| Route | Description |
|---|---|
| `/` | **Home**: Interactive hero, featured projects, timeline highlights, and doodles |
| `/projects` | **Projects Showcase**: Filterable portfolio of web apps, tools, and platforms |
| `/projects/finease` | **FinEase Case Study**: AI-powered financial management dashboard |
| `/projects/hactiq` | **Hactiq Case Study**: Habit tracking and productivity application |
| `/projects/shiq` | **Shiq Case Study**: Real-time collaborative platform |
| `/projects/vaultdl` | **VaultDL Case Study**: Secure download & storage manager |
| `/projects/ai-forgery-detective` | **AI Forgery Detective**: Deepfake & media forensics analyzer |
| `/life` | **Life & Interests**: Personal philosophies, books, music, and setup |
| `/journey` | **Career Journey**: Milestone timeline and education journey |
| `/blog` | **Blog**: Technical articles and developer tutorials |
| `/blog/:slug` | **Blog Article**: Individual post reading view |
| `/playground` | **Playground**: Creative coding experiments and animation lab |
| `/contact` | **Contact**: Message form and social connection hub |

---

## 💻 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18.0 or higher recommended)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/) / [yarn](https://yarnpkg.com/)

### 1. Clone the Repository

```bash
git clone https://github.com/Mayank-23-Dev/Portfolio-Mayank.git
cd Portfolio-Mayank
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

The application will run locally at `http://localhost:5173/`.

### 4. Build for Production

```bash
npm run build
```

To preview the built production bundle locally:

```bash
npm run preview
```

---

## 🚀 Deployment

The site is configured for zero-friction deployment to **Firebase Hosting**:

```bash
# Build the production bundle
npm run build

# Deploy to Firebase Hosting
firebase deploy --only hosting
```

---

## 📬 Connect with Mayank

- **Website**: [mayank-dev.in](https://mayank-dev.in/)
- **GitHub**: [@Mayank-23-Dev](https://github.com/Mayank-23-Dev)
- **Twitter / X**: [@Mayank_Dev23](https://twitter.com/Mayank_Dev23)

---

## 📄 License

This project is created by **Mayank Dev**. Feel free to explore the code for inspiration and learning.
