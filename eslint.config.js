import js from '@eslint/js'
import reactHooks from 'eslint-plugin-react-hooks'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default [
	{
		ignores: [
			'dist/**',
			'node_modules/**',
			'storybook-static/**',
			'*.config.*',
			'.storybook/**',
			'src/stories/**',
		],
	},
	js.configs.recommended,
	...tseslint.configs.recommended,
	{
		files: ['src/**/*.{ts,tsx}'],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
		},
		plugins: {
			'react-hooks': reactHooks,
		},
		rules: {
			...reactHooks.configs.recommended.rules,
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_',
				},
			],
			'no-console': ['warn', { allow: ['warn', 'error'] }],
			'no-var': 'error',
			'no-empty': 'error',
			'no-case-declarations': 'error',
		},
	},
]
