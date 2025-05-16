import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CXML - ChemXploreML",
  description: "A documentation site for ChemXploreML application",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      // { text: "GitHub", link: "https://github.com/aravindhnivas/chemxploreml" },
    ],

    sidebar: [
      {
        text: "Guide",
        items: [
          { text: "Getting Started", link: "/getting-started" },
          // { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/aravindhnivas/chemxploreml/" }],
    logo: "/icon.png",
    search: {
      provider: "local",
    },
  },
  base: "/ChemXploreML-docs/",
  head: [
    ["link", { rel: "icon", type: "image/x-icon", href: "/ChemXploreML-docs/icon.ico" }],
    // ["link", { rel: "icon", type: "image/png", href: "/ChemXploreML-docs/icon.png" }],
  ],
});
