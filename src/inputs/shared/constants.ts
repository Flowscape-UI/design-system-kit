import type { Progression } from './types'

export const THEME_CLASSES = {
	light: {
		container: 'bg-white border-gray-300 focus-within:ring-blue-500',
		input: 'text-gray-900',
		icon: 'text-gray-600',
		dragArea: 'bg-gray-100 hover:bg-gray-200',
	},
	dark: {
		container: 'bg-gray-800 border-gray-600 focus-within:ring-blue-400',
		input: 'text-gray-100',
		icon: 'text-gray-300',
		dragArea: 'bg-gray-700 hover:bg-gray-600',
	},
} as const

export const calculateByProgression = (
	value: number,
	delta: number,
	progression?: Progression
): number => {
	switch (progression) {
		case 'linear':
			return value + delta
		case 'arithmetic':
			return value + delta * 2
		case 'paraboloid':
			return value + delta * Math.abs(delta) * 0.1
		case 'exponential':
			return value * (1 + delta * 0.01)
		case 'geometric': {
			const factor = 1.05
			if (delta > 0) {
				return (value + delta) * factor
			} else if (delta < 0) {
				return (value + delta) / factor
			} else {
				return value + delta
			}
		}
		default:
			return value + delta
	}
}
