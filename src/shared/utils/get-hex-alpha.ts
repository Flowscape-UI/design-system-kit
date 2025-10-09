export const getHexAlpha = (opacityPercent: number): string => {
	if (typeof opacityPercent !== 'number') {
		return 'FF'
	}

	if (opacityPercent < 0) {
		return '00'
	}

	if (opacityPercent > 1) {
		return 'FF'
	}

	return Math.round(opacityPercent * 255)
		.toString(16)
		.padStart(2, '0')
		.toUpperCase()
}
