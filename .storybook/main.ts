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
    // Note: When using GitHub Actions deploy, base path is set automatically by actions/configure-pages
    // No need to manually set cfg.base here
    return cfg;
  },
};
export default config;
