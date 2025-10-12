/**
 * Общие theme классы для input компонентов
 * Используется в InputNumberSelect, InputHex, InputHexWithPreview, InputColorPicker
 */
export const INPUT_THEME_CLASSES = {
	light: {
		container: 'bg-white border-gray-300 focus-within:ring-blue-500',
		input: 'text-gray-900',
		text: 'text-gray-900',
		textMuted: 'text-gray-600',
		icon: 'text-gray-600',
		dragArea: 'bg-gray-100 hover:bg-gray-200',
		preview: 'border-gray-300',
		divider: 'bg-gray-300',
	},
	dark: {
		container:
			'dark:bg-gray-800 dark:border-gray-600 dark:focus-within:ring-blue-400',
		input: 'dark:text-gray-100',
		text: 'dark:text-gray-200',
		textMuted: 'dark:text-gray-400',
		icon: 'dark:text-gray-300',
		dragArea: 'dark:bg-gray-700 dark:hover:bg-gray-600',
		preview: 'dark:border-gray-600',
		divider: 'dark:bg-gray-600',
	},
} as const
