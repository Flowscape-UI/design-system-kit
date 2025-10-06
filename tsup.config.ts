import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["src/index.ts"],
    format: ["esm", "cjs"],
    dts: true,
    sourcemap: false, // Отключаем sourcemap для production
    clean: true,
    target: "es2020",
    treeshake: true,
    minify: "terser", // Используем terser для лучшей минификации
    splitting: false,
    external: [
        "react", 
        "react-dom",
        "react/jsx-runtime",
        "framer-motion",
        "lucide-react",
        "react-icons",
        "tinycolor2",
        "dom-to-image-more",
        "clsx",
        "tailwind-merge",
        "tailwindcss"
    ],
    esbuildOptions(options) {
        options.jsx = "automatic";
    },
    terserOptions: {
        compress: {
            drop_console: false, // Оставляем console для debug
            passes: 2
        },
        mangle: true,
        format: {
            comments: false
        }
    }
});
