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
    // Important for GitHub Pages project pages: prefix asset URLs with repo name
    // If your repo name differs, change "/color-picker/" accordingly or use an env var
    cfg.base = "/color-picker/";
    return cfg;
  },
};
export default config;
