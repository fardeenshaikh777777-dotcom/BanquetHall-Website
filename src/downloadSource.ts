import JSZip from "jszip";

// Raw source imports — resolved by Vite at build time, so the zip
// always contains exactly what was deployed.
import indexHtml from "../index.html?raw";
import packageJson from "../package.json?raw";
import tsconfigJson from "../tsconfig.json?raw";
import viteConfig from "../vite.config.js?raw";

import mainTsx from "./main.tsx?raw";
import appTsx from "./App.tsx?raw";
import indexCss from "./index.css?raw";
import hooksTs from "./hooks.ts?raw";
import imagesTs from "./images.ts?raw";
import viteEnv from "./vite-env.d.ts?raw";
import selfTs from "./downloadSource.ts?raw";

import ornaments from "./components/ornaments.tsx?raw";
import uiTsx from "./components/ui.tsx?raw";
import headerTsx from "./components/Header.tsx?raw";
import footerTsx from "./components/Footer.tsx?raw";

import homeTsx from "./pages/Home.tsx?raw";
import aboutTsx from "./pages/About.tsx?raw";
import servicesTsx from "./pages/Services.tsx?raw";
import contactTsx from "./pages/Contact.tsx?raw";

const README = `# Shahi Mahal — Luxury Banquet Hall (Lahore)

Source code for the four-page marketing site:
Home, Our Story, Halls & Packages (Services), and Book Your Date (Contact).

Stack: React 18 + Vite + Tailwind CSS v4 + TypeScript.

## Run it

    npm install
    npm run dev       # local development
    npm run build     # production build -> dist/

## Handoff notes

- Brand: Shahi Mahal (شاہی محل) — "Where Every Guest is Royalty".
  Find-replace the name in src/components/Footer.tsx, Header and page
  intros once the client confirms an alternative (Noor Grand, etc.).
- Palette tokens live in src/index.css (@theme): maroon #5C1A21,
  emerald #0F3D2E, royal blue #1B3A63, gold #D4AF37, marble #F7F5F0.
- Placeholder photography is centralised in src/images.ts — swap the
  URLs for the client's real photos; no component code changes needed.
- Enquiry form is front-end only (demo success state). Wire it to a
  PHP/Laravel endpoint or a headless form service when booking goes live.
- All motion honours prefers-reduced-motion.
`;

export async function downloadProjectZip(): Promise<void> {
  const zip = new JSZip();
  zip.file("README.md", README);
  zip.file("index.html", indexHtml);
  zip.file("package.json", packageJson);
  zip.file("tsconfig.json", tsconfigJson);
  zip.file("vite.config.js", viteConfig);

  const src = zip.folder("src")!;
  src.file("main.tsx", mainTsx);
  src.file("App.tsx", appTsx);
  src.file("index.css", indexCss);
  src.file("hooks.ts", hooksTs);
  src.file("images.ts", imagesTs);
  src.file("vite-env.d.ts", viteEnv);
  src.file("downloadSource.ts", selfTs);

  const components = src.folder("components")!;
  components.file("ornaments.tsx", ornaments);
  components.file("ui.tsx", uiTsx);
  components.file("Header.tsx", headerTsx);
  components.file("Footer.tsx", footerTsx);

  const pages = src.folder("pages")!;
  pages.file("Home.tsx", homeTsx);
  pages.file("About.tsx", aboutTsx);
  pages.file("Services.tsx", servicesTsx);
  pages.file("Contact.tsx", contactTsx);

  const blob = await zip.generateAsync({
    type: "blob",
    compression: "DEFLATE",
    compressionOptions: { level: 9 },
  });

  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "shahi-mahal-source.zip";
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 4000);
}
