---
title: "I Automated My Entire SEO Workflow with a Single Prompt. Here's How."
date: "2026-06-30"
readTime: "3 min read"
category: "LEARNING"
subtitle: "How turning search engine rules into a declarative AI prompt saved me hours of writing boilerplate meta tags, JSON-LD schemas, and copy."
---

I launched a clean, minimalist web utility that loaded in 200ms, but three weeks later, Google Search Console impressions were a flat line sitting at zero. Crawlers didn't care about my React code; they needed text. To rank, Google needed at least six hundred words of contextual copy, proper meta descriptions, Open Graph cards, sitemaps, and robots.txt files. Writing this boilerplate by hand was a painful, mechanical chore that sucked the joy out of building.

The realization hit me when I looked at how large language models handle structural semantics. LLMs are exceptional syntax compilers. Instead of manually writing metadata, I could feed a seed keyword into a single, declarative prompt to generate the entire SEO package—meta tags, optimized copy, schema JSON-LD, sitemaps, and robots.txt files—in ten seconds.

## The SEO Engine Prompt

I created a system prompt designed specifically for this workflow, forcing the model to generate the exact HTML header metadata, a structured six-hundred-word content section, and a valid schema.org JSON-LD script for rich results.

Copy and use this template in Claude, Gemini, or ChatGPT:

```markdown
You are an expert SEO specialist and technical writer. 

Goal: Perform complete, production-ready On-Page SEO optimization for a web utility/page.

Input Variables:
- Main Keyword: [Insert target keyword here]
- Secondary Keywords: [Insert list of supporting keywords here]
- FAQ Questions: [Insert 4-5 common questions related to this tool here]
- Domain URL: [Insert domain name e.g. https://example.com]

Task:
Generate the following output blocks in clean Markdown and HTML/JS/XML formats, ready to copy-paste:

1. HTML Meta Tags Block:
- A title tag containing the main keyword (under 60 characters)
- A descriptive meta description containing the main keyword and a secondary keyword (under 160 characters)
- Complete Open Graph (OG) and Twitter card tags (og:title, og:description, og:image, twitter:card)

2. Home Page SEO Content:
- Write exactly 600 words of engaging, valuable, and search-optimized body text explaining the utility, its use cases, and how it works. Use the main and secondary keywords naturally throughout.
- Organize the copy with clear h2 and h3 subheadings.

3. FAQ Section:
- Write detailed, helpful answers to the FAQ questions provided.
- Generate a valid, copy-pasteable script block containing JSON-LD structured data (schema.org/FAQPage) representing these questions and answers. Ensure it contains no formatting errors and uses valid JSON.

4. Sitemaps and Robots.txt files:
- Generate a standard, valid sitemap.xml file containing references to the homepage and any primary pages.
- Generate a standard robots.txt file pointing to the sitemap URL. It should explicitly allow all major crawlers (User-agent: *) while adding a directive to block indexing of any development, preview, or testing subdomains (such as *.pages.dev, *.netlify.app, or localhost) using standard disallows, or advising on X-Robots-Tag headers to prevent duplicate content indexation.
```

## How to Use This Workflow

To implement this on your website, copy the prompt template block above and paste it into Claude, ChatGPT, or Gemini. Replace the placeholder values inside the brackets with your primary keyword, secondary phrases, the questions you want to cover, and your target domain address. The model will compile the complete SEO package in seconds.

- <span class="bg-green-200 px-1 rounded text-green-900 font-bold text-xs uppercase tracking-wide">COPY PROMPT</span> — Paste the system prompt template into Claude, ChatGPT, or Gemini.
- <span class="bg-green-200 px-1 rounded text-green-900 font-bold text-xs uppercase tracking-wide">CUSTOMIZE INPUTS</span> — Replace the placeholder brackets with your main keyword, secondary terms, FAQs, and domain URL.
- <span class="bg-red-200 px-1 rounded text-red-900 font-bold text-xs uppercase tracking-wide">HTML HEAD</span> — Copy the generated meta tags and place them directly in your HTML head container.
- <span class="bg-red-200 px-1 rounded text-red-900 font-bold text-xs uppercase tracking-wide">HTML BODY</span> — Paste the 600-word body text into a text container at the bottom of your homepage.
- <span class="bg-yellow-200 px-1 rounded text-yellow-900 font-bold text-xs uppercase tracking-wide">JSON-LD SCHEMA</span> — Insert the script tags inside your page body to enable Google rich snippets.
- <span class="bg-yellow-200 px-1 rounded text-yellow-900 font-bold text-xs uppercase tracking-wide">PUBLIC ASSETS</span> — Save sitemap.xml and robots.txt in your project's public folder and deploy.

## How the Logic Works

To prevent search engines from penalizing your site for duplicate content, the generated files operate on three distinct levels of crawler control:

- <span class="bg-green-200 px-1 rounded text-green-900 font-bold text-xs uppercase tracking-wide">SITEMAPS</span> — Sitemap.xml acts as a structured map, listing only your primary, custom domain URLs to declare them as canonical.
- <span class="bg-red-200 px-1 rounded text-red-900 font-bold text-xs uppercase tracking-wide">ROBOTS.TXT</span> — It serves as the crawler gatekeeper pointing directly to the sitemap URL to ensure index bots find valid pages immediately.
- <span class="bg-yellow-200 px-1 rounded text-yellow-900 font-bold text-xs uppercase tracking-wide">DUPLICATE PREVENTION</span> — To resolve duplicate indexing of development subdomains (like *.pages.dev), it designs an X-Robots-Tag: noindex header rule that ignores preview URLs and consolidates all domain authority onto your custom domain.

## Building for the Search Crawler

Automating the mechanics of SEO turns a three-hour coding chore into a simple copy-paste workflow. It allows developers to focus on the only part of building that actually matters: making a tool that is worth finding in the first place.

The crawler only knows what you tell it, but it's up to you to build something worth searching for.
