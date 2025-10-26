import { useState } from 'react'
import type { UseImageActionsReturn } from '../types'

/**
 * Хук для управления действиями с изображением (hide/delete)
 * Управляет состоянием видимости и обрабатывает удаление
 *
 * @param onHideImage - Callback при скрытии/показе изображения
 * @param onDeleteImage - Callback при удалении изображения
 * @param onClearState - Дополнительный callback для очистки состояния (опционально)
 * @returns Объект с состоянием и обработчиками действий
 */
export const useImageActions = (
	onHideImage?: (hidden: boolean) => void,
	onDeleteImage?: () => void,
	onClearState?: () => void
): UseImageActionsReturn => {
	const [isHidden, setIsHidden] = useState(false)
	const [isRotateButtonActive, setIsRotateButtonActive] = useState(true)

	const handleToggleHide = () => {
		const newHiddenState = !isHidden
		const newRotateButtonState = !isRotateButtonActive
		setIsHidden(newHiddenState)
		onHideImage?.(newHiddenState)
		setIsRotateButtonActive(newRotateButtonState)
	}

	const handleDelete = () => {
		// Сбрасываем состояние
		setIsHidden(false)
		setIsRotateButtonActive(false)
		// Вызываем дополнительную очистку состояния (если передана)
		onClearState?.()

		// Вызываем внешний callback
		onDeleteImage?.()
	}

	return {
		isHidden,
		handleToggleHide,
		handleDelete,
		isRotateButtonActive,
		setIsRotateButtonActive,
	}
}
