// .vitepress/theme/index.js
import "./custom.css";
import DefaultTheme from "vitepress/theme";
// export default DefaultTheme;

import Layout from "./Layout.vue";

export default {
  extends: DefaultTheme,
  Layout,
};
