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

		// Inputs модульные экспорты
		'inputs/index': 'src/inputs/index.ts',
		'inputs/opacity-input/index': 'src/inputs/opacity-input/index.tsx',
		'inputs/angle-input/index': 'src/inputs/angle-input/index.tsx',
		'inputs/border-radius-input/index': 'src/inputs/border-radius-input/index.tsx',
		'inputs/border-radius-multi-input/index':
			'src/inputs/border-radius-multi-input/index.tsx',
		'inputs/width-input/index': 'src/inputs/width-input/index.tsx',
		'inputs/height-input/index': 'src/inputs/height-input/index.tsx',
		'inputs/spacing-input/index': 'src/inputs/spacing-input/index.tsx',
		'inputs/font-size-input/index': 'src/inputs/font-size-input/index.tsx',
		'inputs/line-height-input/index': 'src/inputs/line-height-input/index.tsx',
		'inputs/letter-spacing-input/index':
			'src/inputs/letter-spacing-input/index.tsx',
		'inputs/z-index-input/index': 'src/inputs/z-index-input/index.tsx',
		'inputs/scale-input/index': 'src/inputs/scale-input/index.tsx',
		'inputs/blur-input/index': 'src/inputs/blur-input/index.tsx',
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
