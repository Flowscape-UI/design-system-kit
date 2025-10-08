import { useEffect, useState } from 'react'
import { filterHexInput, hexToRgb, parseColor, rgbToHex } from '../utils/color-utils'

interface UseColorPickerStateProps {
	value: string
	onChange?: (color: string) => void
	onOpacityChange?: (opacity: number) => void
}

export const useColorPickerState = ({
	value,
	onChange,
	onOpacityChange,
}: UseColorPickerStateProps) => {
	const { hex, opacity } = parseColor(value)
	const [color, setColor] = useState(value)
	const [inputValue, setInputValue] = useState(hex)
	const [livePreviewColor, setLivePreviewColor] = useState(value)
	const [colorType, setColorType] = useState<'color' | 'gradient'>('color')
	const [opacityValue, setOpacityValue] = useState(isNaN(opacity) ? 100 : opacity)

	useEffect(() => {
		const { hex: newHex, opacity: newOpacity } = parseColor(value)
		setInputValue(newHex)
		setColor(value)
		setLivePreviewColor(value)
		setOpacityValue(isNaN(newOpacity) ? 100 : newOpacity)
	}, [value])

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const finalValue = filterHexInput(e.target.value)
		setInputValue(finalValue)

		if (finalValue.length === 3 || finalValue.length === 6) {
			const newHex = `#${finalValue}`
			const rgb = hexToRgb(newHex)
			if (rgb) {
				const newRgbaColor = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${
					opacityValue / 100
				})`
				setLivePreviewColor(newRgbaColor)
			}
		}
	}

	const handleInputFocus = () => {
		if (inputValue.startsWith('#')) {
			setInputValue(inputValue.substring(1))
		}
	}

	const handleHexChange = () => {
		if (hex === 'Mixed') return

		let newHex = inputValue.trim()
		if (!newHex.startsWith('#')) {
			newHex = `#${newHex}`
		}

		const rgb = hexToRgb(newHex)

		if (rgb) {
			const newRgbaColor = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${
				opacityValue / 100
			})`
			onChange?.(newRgbaColor)
			setInputValue(newHex.toUpperCase())
		} else {
			const { hex: originalHex } = parseColor(value)
			setInputValue(originalHex)
			setLivePreviewColor(value)
		}
	}

	const handleOpacityChange = (newOpacity: number) => {
		// Проверка на валидность значения
		const validOpacity = isNaN(newOpacity) ? 100 : newOpacity
		onOpacityChange?.(validOpacity)
		setOpacityValue(validOpacity)

		if (color.includes('gradient')) {
			return
		}

		const rgbMatch = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/)
		if (rgbMatch) {
			const r = rgbMatch[1]
			const g = rgbMatch[2]
			const b = rgbMatch[3]
			const newRgbaColor = `rgba(${r}, ${g}, ${b}, ${validOpacity / 100})`
			setColor(newRgbaColor)
			onChange?.(newRgbaColor)
		} else {
			const rgb = hexToRgb(color)
			if (rgb) {
				const newRgbaColor = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${
					validOpacity / 100
				})`
				setColor(newRgbaColor)
				onChange?.(newRgbaColor)
			}
		}
	}

	const handleColorChange = (newColor: string) => {
		onChange?.(newColor)
		setColor(newColor)

		if (newColor.includes('gradient')) {
			setLivePreviewColor(newColor)

			if (colorType === 'color') {
				setColorType('gradient')
			}

			if (newColor.includes('linear-gradient')) {
				setInputValue('Linear')
			} else if (newColor.includes('radial-gradient')) {
				setInputValue('Radial')
			} else {
				setInputValue('Gradient')
			}

			return
		}

		if (colorType === 'gradient') {
			setColorType('color')
			return
		}

		const rgbaMatch = newColor.match(
			/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/
		)
		if (rgbaMatch) {
			const alpha = rgbaMatch[4] !== undefined ? parseFloat(rgbaMatch[4]) : 1
			const newOpacity = Math.round(alpha * 100)
			setOpacityValue(isNaN(newOpacity) ? 100 : newOpacity)
		}

		setLivePreviewColor(newColor)
		setInputValue(rgbToHex(newColor))
	}

	return {
		hex,
		color,
		inputValue,
		livePreviewColor,
		colorType,
		opacityValue,
		handleInputChange,
		handleInputFocus,
		handleHexChange,
		handleOpacityChange,
		handleColorChange,
	}
}
