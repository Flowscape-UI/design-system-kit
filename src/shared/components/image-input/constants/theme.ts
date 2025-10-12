/**
 * Общие theme классы для image input компонентов
 * Используется в InputImageSelect, InputUploadImage и связанных компонентах
 */
export const IMAGE_INPUT_THEME_CLASSES = {
	light: {
		container: 'bg-white border-gray-300 focus-within:ring-blue-500',
		text: 'text-gray-900',
		textMuted: 'text-gray-600',
		icon: 'text-gray-600',
		preview: 'border-gray-300',
		divider: 'bg-gray-300',
	},
	dark: {
		container:
			'dark:bg-gray-800 dark:border-gray-600 dark:focus-within:ring-blue-400',
		text: 'dark:text-gray-200',
		textMuted: 'dark:text-gray-400',
		icon: 'dark:text-gray-300',
		preview: 'dark:border-gray-600',
		divider: 'dark:bg-gray-600',
	},
} as const
