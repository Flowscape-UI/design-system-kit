import { useEffect, useState } from 'react'
import tc from 'tinycolor2'
import { convertToHex8, filterHexInput } from '../utils/color-utils'

export interface UseHexInputOptions {
	/**
	 * Входное hex значение (может быть с # или без)
	 */
	hexColor: string
	/**
	 * Callback при изменении hex значения
	 */
	onChange: (hex: string) => void
	/**
	 * Показывать и разрешать ввод alpha канала (еще 2 hex символа)
	 * По умолчанию false (только 6 символов)
	 */
	showAlpha?: boolean
}

export interface UseHexInputReturn {
	/**
	 * Локальное hex значение (без #)
	 */
	localHex: string
	/**
	 * Флаг редактирования
	 */
	isEditing: boolean
	/**
	 * Обработчик изменения input
	 */
	handleHexInput: (e: React.ChangeEvent<HTMLInputElement>) => void
	/**
	 * Установить флаг редактирования
	 */
	setIsEditing: (editing: boolean) => void
	/**
	 * Установить локальное hex значение напрямую (для drag-логики)
	 */
	setLocalHex: (hex: string) => void
}

/**
 * Хук для управления hex input с поддержкой alpha канала
 * Используется в InputHex и InputHexWithPreview
 */
export const useHexInput = ({
	hexColor,
	onChange,
	showAlpha = false,
}: UseHexInputOptions): UseHexInputReturn => {
	const [isEditing, setIsEditing] = useState(false)

	// Нормализация входного значения через tinycolor2
	const color = tc(hexColor)
	const hex = color.toHex() // 6 символов без #
	const alpha = color.getAlpha() // 0-1
	const alphaHex = Math.round(alpha * 255)
		.toString(16)
		.padStart(2, '0')

	// Полное значение: если showAlpha и alpha < 1, добавляем alpha
	const hexFromProp = showAlpha && alpha < 1 ? hex + alphaHex : hex

	const [localHex, setLocalHex] = useState(hexFromProp)

	// Синхронизация с props, когда не редактируем
	useEffect(() => {
		if (!isEditing) {
			setLocalHex(hexFromProp)
		}
	}, [hexColor, isEditing, hexFromProp])

	const handleHexInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		const maxLen = showAlpha ? 8 : 6
		// Фильтруем только hex символы, обрезаем по длине
		const filtered = filterHexInput(e.target.value, maxLen)

		setLocalHex(filtered)

		// Отправляем изменение только когда полная длина
		if (filtered.length === 6) {
			onChange(`#${filtered}`)
		} else if (filtered.length === 8 && showAlpha) {
			onChange(convertToHex8(filtered))
		}
	}

	return {
		localHex,
		isEditing,
		handleHexInput,
		setIsEditing,
		setLocalHex,
	}
}
