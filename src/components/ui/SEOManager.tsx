import { a as React } from "./_reactVendor";
import { u as useLocation } from "./_reactVendor";
import { g as getBlogPost } from "./Blog_UI/BlogPostsData";

const SEO_DATA: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Mayank Dev | Full Stack Developer India | 2nd Year BTech CSE Student",
    description: "Portfolio of Mayank Dev, a 2nd year BTech CSE student and full stack developer from Kanpur, India. Specializing in React, Next.js, and tech content creation.",
  },
  "/projects": {
    title: "Full Stack Projects | React Developer India | Mayank Dev",
    description: "Explore web developer projects by Mayank Dev, including FinEase AI dashboard and Hactiq habit tracker. Student developer portfolio 2026.",
  },
  "/playground": {
    title: "Playground | Young Developer Experiments 2026 | Mayank Dev",
    description: "A collection of curiosity-driven builds and coding experiments by Mayank Dev, a DSA full stack developer and tech content creator.",
  },
  "/blog": {
    title: "Developer Blog India | AI Tools & Coding Tutorials | Mayank Dev",
    description: "Insights from a student developer. Coding tutorials, AI tool guides, and developer tips by Mayank Dev, tech content creator from India.",
  },
  "/contact": {
    title: "Contact | Hire Full Stack Developer India | Mayank Dev",
    description: "Want to build something? Let's talk. Contact Mayank Dev for full stack development projects and collaborations in India.",
  },
  "/journey": {
    title: "My Journey | BTech CSE student projects India | Mayank Dev",
    description: "The evolution of Mayank Dev as a developer. From first lines of code to building FinEase and Hactiq. A story of growth and curiosity.",
  },
  "/life": {
    title: "Life | Developer Content Creator India | Mayank Dev",
    description: "Beyond the code - glimpses into the life of Mayank Dev. DSA practice, tech content creation, and personal interests.",
  }
};

export const SEOManager = () => {
  const location = useLocation();
  const path = location.pathname;

  React.useEffect(() => {
    let data = SEO_DATA[path];
    if (!data && path.startsWith("/blog/")) {
      const slug = path.substring(6);
      const post = getBlogPost(slug);
      if (post) {
        data = {
          title: `${post.title} | Mayank Dev`,
          description: post.subtitle || post.excerpt,
        };
      }
    }
    if (!data) {
      data = SEO_DATA["/"];
    }
    
    // Update Title
    document.title = data.title;

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", data.description);
    }

    // Update OG Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", data.title);
    }

    // Update OG Description
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute("content", data.description);
    }

    // Update Twitter Title
    let twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute("content", data.title);
    }

    // Update Twitter Description
    let twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute("content", data.description);
    }

    // Update Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    const fullUrl = `https://mayank-dev.in${path === "/" ? "" : path}`;
    if (canonical) {
      canonical.setAttribute("href", fullUrl);
    } else {
      const link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      link.setAttribute("href", fullUrl);
      document.head.appendChild(link);
    }

    // Update OG URL
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute("content", fullUrl);
    }
  }, [path]);

  return null;
};
