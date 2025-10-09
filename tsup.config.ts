import { defineConfig } from 'tsup'

export default defineConfig({
	entry: {
		// Главный экспорт (все компоненты)
		index: 'src/index.ts',

		// Модульные экспорты
		'color-picker/index': 'src/color-picker/index.tsx',
		'input-number-select/index': 'src/input-number-select/index.tsx',
		'input-color-picker/index': 'src/input-color-picker/index.tsx',
		'input/index': 'src/input/index.tsx',
		'shared/index': 'src/shared/index.ts',
	},
	format: ['esm', 'cjs'],
	dts: true,
	sourcemap: false,
	clean: true,
	target: 'es2020',
	treeshake: true,
	minify: false, // Не минифицируем - код должен быть читаемым
	splitting: false,
	external: [
		'react',
		'react-dom',
		'react/jsx-runtime',
		'framer-motion',
		'lucide-react',
		'react-icons',
		'tinycolor2',
		'dom-to-image-more',
		'clsx',
		'tailwind-merge',
	],
	esbuildOptions(options) {
		options.jsx = 'automatic'
	},
})
