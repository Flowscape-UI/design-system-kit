/** @type {import('@ladle/react').UserConfig} */
export default {
  stories: "playground/**/*.stories.{js,jsx,ts,tsx,mdx}",
  viteConfig: (config) => {
    // Добавляем поддержку React
    config.plugins = config.plugins || []
    return config
  },
}

