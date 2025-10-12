import tc from 'tinycolor2'

export interface RGB {
	r: number
	g: number
	b: number
}

export interface ParsedColor {
	hex: string
	opacity: number
}

/**
 * Конвертирует 8-символьный hex (с alpha) в формат с alpha каналом
 * @param hex8 - 8-символьный hex без #, например "FF0000FF"
 * @returns Hex8 строка в формате #RRGGBBAA
 */
export const convertToHex8 = (hex8: string): string => {
	const base = hex8.slice(0, 6)
	const alphaHex = hex8.slice(6, 8)
	const alphaDecimal = parseInt(alphaHex, 16) / 255
	return tc(`#${base}`).setAlpha(alphaDecimal).toHex8String().toUpperCase()
}

/**
 * Парсит строку цвета в HEX и прозрачность
 * @param colorStr - Строка цвета (hex, rgb, rgba, gradient)
 * @returns Объект с hex и opacity
 */
export const parseColor = (colorStr: string): ParsedColor => {
	if (!colorStr) return { hex: '------', opacity: 100 }

	// Обработка градиентов
	if (colorStr.includes('gradient')) {
		return { hex: 'Linear', opacity: 100 }
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
 * @param rgbStr - RGB/RGBA строка
 * @returns HEX строка
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
 * @param hexStr - HEX строка
 * @returns RGB объект или null
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
 * Создает display color с учетом прозрачности
 * @param livePreviewColor - Цвет для preview
 * @param opacityValue - Прозрачность 0-100
 * @returns Display color строка
 */
export const createDisplayColor = (
	livePreviewColor: string,
	opacityValue: number
): string => {
	let displayColor =
		livePreviewColor &&
		(livePreviewColor.includes('gradient') ||
			livePreviewColor.startsWith('rgba') ||
			livePreviewColor.startsWith('rgb') ||
			livePreviewColor.startsWith('#'))
			? livePreviewColor
			: '#FFFFFF'

	// Обработка градиентов - возвращаем как есть
	if (displayColor.includes('gradient')) {
		return displayColor
	}

	// Нормализация rgb/rgba -> rgba с учётом текущей opacityValue
	if (displayColor.startsWith('rgb')) {
		const match = displayColor.match(
			/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/
		)
		if (match) {
			const r = parseInt(match[1], 10)
			const g = parseInt(match[2], 10)
			const b = parseInt(match[3], 10)
			const a = match[4] !== undefined ? parseFloat(match[4]) : undefined
			const finalA = isNaN(opacityValue)
				? typeof a === 'number'
					? a
					: 1
				: opacityValue / 100
			displayColor = `rgba(${r}, ${g}, ${b}, ${finalA})`
		}
	}

	// HEX -> HEXA с учётом opacityValue
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
 * Конвертирует opacity (0-100) в hex формат (00-FF)
 * @param opacity - Прозрачность от 0 до 100
 * @returns Hex строка из 2 символов
 */
export const opacityToHex = (opacity: number): string => {
	if (opacity < 0 || opacity > 100) return 'FF'
	const alpha = Math.round((opacity / 100) * 255)
	return alpha.toString(16).padStart(2, '0').toUpperCase()
}

/**
 * Конвертирует alpha (0-1) в hex формат (00-FF)
 * @param alpha - Прозрачность от 0 до 1
 * @returns Hex строка из 2 символов
 */
export const alphaToHex = (alpha: number): string => {
	if (typeof alpha !== 'number') return 'FF'
	if (alpha < 0) return '00'
	if (alpha > 1) return 'FF'
	return Math.round(alpha * 255)
		.toString(16)
		.padStart(2, '0')
		.toUpperCase()
}

/**
 * Фильтрует ввод для hex значения (удаляет невалидные символы)
 * @param value - Входная строка
 * @param maxLength - Максимальная длина (по умолчанию 6)
 * @returns Отфильтрованная hex строка
 */
export const filterHexInput = (value: string, maxLength: number = 6): string => {
	return value
		.replace(/[^0-9a-fA-F]/g, '')
		.slice(0, maxLength)
		.toUpperCase()
}
