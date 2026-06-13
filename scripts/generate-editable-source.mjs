import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const assetsDir = path.join(root, "assets");
const outDir = path.join(root, "src", "modules");

const mapping = {
  "ui-vendor-BxiC0xv2.js": "_uiVendor.js",
  "react-vendor-C0yt_NeB.js": "_reactVendor.js",
  "icons-vendor-fNTw5ypr.js": "_iconsVendor.js",
  "animation-vendor-mN-0RtdB.js": "_animationVendor.js",
  "index-CXZG1tSS.js": "_sharedIndex.js",
  "index-YRVSORi7.js": "_tegakiEngine.js",
  "bundle-BNFmyc5j.js": "_kalamBundle.js",

  "menu-toggle-icon-DHPu0Njg.js": "MenuToggleIcon.js",
  "ConnectDropdown-eUlS5a5Y.js": "ConnectDropdown.js",
  "Header-D11_ua0N.js": "Header.js",
  "ScribbleUnderline-ChIaW2B4.js": "ScribbleUnderline.js",
  "StickyNote-De6kuFBB.js": "StickyNote.js",
  "Footer-Bw-mOvYc.js": "Footer.js",
  "PaperBackground-DtTmCFfd.js": "PaperBackground.js",
  "FloatingCircle-Bko3rbdm.js": "FloatingCircle.js",
  "ResponsiveImage-DYJlNmnR.js": "ResponsiveImage.js",
  "DarkFooter-BmQR3S6K.js": "DarkFooter.js",
  "basic-number-ticker-DPYLMSmq.js": "BasicNumberTicker.js",
  "BookCover-BViFCSs9.js": "BookCover.js",
  "ComponentsShowcase-Bp0LkqRy.js": "ComponentsShowcase.js",

  "Index-DNt8E87r.js": "HomePage.js",
  "Projects-cWvUa3Ul.js": "ProjectsPage.js",
  "Life-BAuTdW4y.js": "LifePage.js",
  "Journey-Df3JTeus.js": "JourneyPage.js",
  "Contact-Dyy9C6dP.js": "ContactPage.js",
  "Blog-1k3ENlnB.js": "BlogPage.js",
  "blog-posts-BrVKwlO4.js": "BlogPostsData.js",
  "BlogPost-DBVPoVgn.js": "BlogPostPage.js",
  "RideXpressCaseStudy-DxGfZ_Hh.js": "RideXpressCaseStudyLegacy.js",
  "RideXpressCaseStudyAlt-sH4Z_N6r.js": "RideXpressCaseStudy.js",
  "ParkEZCaseStudy-wArFzUgz.js": "ParkEZCaseStudyLegacy.js",
  "ParkEZCaseStudyAlt-BipPLsUH.js": "ParkEZCaseStudy.js",
  "ParkEZUnderConstruction-2bvtfDnz.js": "ParkEZUnderConstructionPage.js",
  "QuestionLibraryCaseStudy-CoeiDVLm.js": "QuestionLibraryCaseStudy.js",
  "CourierMgmtCaseStudy-C2pkFpOM.js": "CourierManagementCaseStudy.js",
  "PostyAICaseStudy-Dr0iQgMl.js": "PostyAICaseStudy.js",
  "AIForgeryDetectiveCaseStudy-DRKG2Oqt.js": "AIForgeryDetectiveCaseStudy.js",
  "NotFound-Dpx-IBqT.js": "NotFoundPage.js",
  "Playground-BvaupUZE.js": "PlaygroundPage.js",

  "index-BUsHSwZw.js": "AppShell.js"
};

const files = await fs.readdir(assetsDir);
const jsFiles = files.filter((f) => f.endsWith(".js"));

for (const file of jsFiles) {
  if (!mapping[file]) {
    const base = file.replace(/-[A-Za-z0-9_]+\.js$/, "");
    mapping[file] = `${base}.js`;
  }
}

const entries = Object.entries(mapping);

for (const srcFile of jsFiles) {
  const mapped = mapping[srcFile];
  if (!mapped) continue;

  const srcPath = path.join(assetsDir, srcFile);
  const outPath = path.join(outDir, mapped);

  let content = await fs.readFile(srcPath, "utf8");

  for (const [oldName, newName] of entries) {
    content = content.split(oldName).join(newName);
    content = content.split(`assets/${oldName}`).join(`src/modules/${newName}`);
  }

  await fs.writeFile(outPath, content, "utf8");
}

const cssSrc = path.join(assetsDir, "index-B7cA2ULC.css");
const cssOut = path.join(root, "src", "styles", "app.css");
await fs.copyFile(cssSrc, cssOut);

const mainPath = path.join(root, "src", "main.jsx");
await fs.writeFile(
  mainPath,
  `import "./styles/app.css";\nimport "./modules/AppShell.js";\n`,
  "utf8"
);

console.log(JSON.stringify({ moduleCount: jsFiles.length, outDir }, null, 2));
