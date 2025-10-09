import type { Decorator, Preview } from '@storybook/react'
import React, { useEffect } from 'react'
import '../src/styles/tailwind.css'
/**
 * Decorator for dynamic change theme (light/dark)
 */
const ThemeDecorator: Decorator = (Story, context) => {
	const selectedBackground = context.globals.backgrounds?.value
	const backgroundValues = context.parameters.backgrounds?.values || []
	const defaultBackground = context.parameters.backgrounds?.default

	useEffect(() => {
		let themeName: string

		if (!selectedBackground) {
			themeName = defaultBackground
		} else if (selectedBackground.startsWith('#')) {
			const currentBg = backgroundValues.find(
				(bg: any) => bg.value === selectedBackground
			)
			themeName = currentBg?.name || defaultBackground
		} else {
			themeName = selectedBackground
		}

		if (themeName === 'dark') {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	}, [selectedBackground, backgroundValues, defaultBackground])

	return <Story />
}

const preview: Preview = {
	decorators: [ThemeDecorator],
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		backgrounds: {
			default: 'light',
			values: [
				{
					name: 'light',
					value: '#f9fafb',
				},
				{
					name: 'dark',
					value: '#1f2937',
				},
			],
		},
	},
}

export default preview
