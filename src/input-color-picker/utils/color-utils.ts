import type { ParsedColor, RGB } from '../types'

/**
 * Парсит строку цвета в HEX и прозрачность
 */
export const parseColor = (colorStr: string): ParsedColor => {
	if (!colorStr) return { hex: '------', opacity: 100 }

	// Обработка градиентов
	if (colorStr.includes('gradient')) {
		return { hex: 'Mixed', opacity: 100 }
	}

	// Обработка HEX
	if (colorStr.startsWith('#')) {
		return { hex: colorStr.toUpperCase(), opacity: 100 }
	}

	// Обработка RGB/RGBA
	const rgbaMatch = colorStr.match(
		/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/
	)
	if (rgbaMatch) {
		const r = parseInt(rgbaMatch[1])
		const g = parseInt(rgbaMatch[2])
		const b = parseInt(rgbaMatch[3])
		const a = rgbaMatch[4] !== undefined ? parseFloat(rgbaMatch[4]) : 1
		const componentToHex = (c: number) => {
			const hex = c.toString(16)
			return hex.length == 1 ? '0' + hex : hex
		}
		const hex = '#' + componentToHex(r) + componentToHex(g) + componentToHex(b)
		return { hex: hex.toUpperCase(), opacity: Math.round(a * 100) }
	}

	// Fallback для невалидных цветов
	return { hex: colorStr, opacity: 100 }
}

/**
 * Конвертирует RGB строку в HEX
 */
export const rgbToHex = (rgbStr: string): string => {
	if (!rgbStr) return '#000000'

	// Если уже HEX, возвращаем как есть
	if (rgbStr.startsWith('#')) return rgbStr.toUpperCase()

	// Парсим rgb(r,g,b) или rgba(r,g,b,a)
	const match = rgbStr.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)/)

	if (match) {
		const r = parseInt(match[1], 10)
		const g = parseInt(match[2], 10)
		const b = parseInt(match[3], 10)

		const toHex = (c: number) => ('0' + c.toString(16)).slice(-2)

		return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase()
	}

	return '#000000'
}

/**
 * Конвертирует HEX в RGB
 */
export const hexToRgb = (hexStr: string): RGB | null => {
	const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
	const fullHex = hexStr.replace(
		shorthandRegex,
		(_m, r, g, b) => r + r + g + g + b + b
	)
	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(fullHex)
	if (!result) return null
	return {
		r: parseInt(result[1], 16),
		g: parseInt(result[2], 16),
		b: parseInt(result[3], 16),
	}
}

/**
 * Конвертирует прозрачность (0-100) в HEX (00-FF)
 */
export const opacityToHex = (opacity: number): string => {
	if (opacity < 0 || opacity > 100) return 'ff'
	const alpha = Math.round((opacity / 100) * 255)
	return alpha.toString(16).padStart(2, '0')
}

/**
 * Создает display color с учетом прозрачности
 */
export const createDisplayColor = (
	livePreviewColor: string,
	opacityValue: number
): string => {
	let displayColor =
		livePreviewColor &&
		(livePreviewColor.includes('gradient') ||
			livePreviewColor.startsWith('rgba') ||
			livePreviewColor.startsWith('#'))
			? livePreviewColor
			: '#FFFFFF'

	if (displayColor.startsWith('#')) {
		let hexVal = displayColor.substring(1)
		if (hexVal.length === 3 || hexVal.length === 4) {
			hexVal = hexVal
				.split('')
				.map(char => char + char)
				.join('')
		}
		const rgbHex = hexVal.substring(0, 6)
		displayColor = `#${rgbHex}${opacityToHex(opacityValue)}`
	}

	return displayColor
}

/**
 * Фильтрует ввод для HEX значения
 */
export const filterHexInput = (value: string): string => {
	const filteredValue = value.replace(/[^0-9a-fA-F]/g, '')
	return filteredValue.substring(0, 6).toUpperCase()
}
