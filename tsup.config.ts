import { defineConfig } from 'tsup'

export default defineConfig({
	entry: {
		// Main export (all components)
		index: 'src/index.ts',

		// Modular exports
		'color-picker/index': 'src/color-picker/index.tsx',
		'input-number-select/index': 'src/input-number-select/index.tsx',
		'input-color-picker/index': 'src/input-color-picker/index.tsx',
		'input/index': 'src/input/index.tsx',
		'input-hex/index': 'src/input-hex/index.tsx',
		'input-hex-with-preview/index': 'src/input-hex-with-preview/index.tsx',
		'shared/index': 'src/shared/index.ts',
	},
	format: ['esm', 'cjs'],
	dts: true,
	sourcemap: false,
	clean: true,
	target: 'es2020',
	treeshake: true,
	minify: false, // Don't minify - code should be readable
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
