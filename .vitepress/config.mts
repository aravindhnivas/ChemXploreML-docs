import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ChemXploreML",
  description: "A documentaion site for ChemXploreML application",
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
    logo: "/logo1.png",
    search: {
      provider: "local",
    },
  },

  base: "/ChemXploreML-docs/",
});
