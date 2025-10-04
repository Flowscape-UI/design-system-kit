import type { StorybookConfig } from "@storybook/react-vite";
import tailwind from "@tailwindcss/vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-docs"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  async viteFinal(cfg) {
    // Ensure Tailwind CSS v4 is processed inside Storybook
    cfg.plugins = [...(cfg.plugins || []), tailwind()];
    // Avoid multiple React copies being bundled (can cause weird runtime errors)
    cfg.resolve = {
      ...(cfg.resolve || {}),
      dedupe: [...((cfg.resolve || {}).dedupe || []), "react", "react-dom"],
    };
    // If environment provides a base (e.g., for GitHub Pages project path), honor it
    if (process.env.STORYBOOK_BASE_HREF) {
      cfg.base = process.env.STORYBOOK_BASE_HREF;
    }
    return cfg;
  },
};
export default config;
