import { DefaultTheme } from "vitepress";

export const sidebar: DefaultTheme.Sidebar = {
  "/": [
    {
      text: "Introduction",
      items: [{ text: "Getting Started", link: "/getting-started" }],
    },
    {
      text: "Molecule Analysis",
      items: [{ text: "Overview", link: "/molecular-analysis/" }],
    },
    // {
    //   text: "Data Management",
    //   items: [
    //     { text: "Load Files", link: "/load-file/" },
    //     { text: "Data Analysis", link: "/load-file/analyse" },
    //   ],
    // },
    // {
    //   text: "Molecular Vectorization",
    //   items: [{ text: "Overview", link: "/embedd-molecules/" }],
    // },
    // {
    //   text: "Dimensionality Reduction",
    //   items: [
    //     { text: "Overview", link: "/dimensionality-reduction/" },
    //     { text: "PCA", link: "/dimensionality-reduction/pca" },
    //     { text: "UMAP", link: "/dimensionality-reduction/umap" },
    //     { text: "t-SNE", link: "/dimensionality-reduction/t-sne" },
    //     { text: "KernelPCA", link: "/dimensionality-reduction/kernelpca" },
    //     { text: "PHATE", link: "/dimensionality-reduction/phate" },
    //     { text: "ISOMAP", link: "/dimensionality-reduction/isomap" },
    //     { text: "Laplacian Eigenmaps", link: "/dimensionality-reduction/laplacian-eigenmaps" },
    //     { text: "TriMap", link: "/dimensionality-reduction/trimap" },
    //     { text: "Factor Analysis", link: "/dimensionality-reduction/factor-analysis" },
    //   ],
    // },
    // {
    //   text: "Machine Learning",
    //   items: [
    //     { text: "Model Training", link: "/ml-training/model" },
    //     { text: "Predictions", link: "/ml-training/prediction" },
    //   ],
    // },
    // {
    //   text: "Settings",
    //   items: [
    //     { text: "Configuration", link: "/settings/configuration" },
    //     { text: "Updates", link: "/settings/update" },
    //     { text: "Console", link: "/settings/console" },
    //     { text: "Process Monitor", link: "/settings/process-monitor" },
    //     { text: "System Info", link: "/settings/system" },
    //     { text: "Credits", link: "/settings/credit" },
    //     { text: "License", link: "/settings/license" },
    //   ],
    // },
  ],
};
