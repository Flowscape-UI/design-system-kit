import { useRef } from 'react'

export type DragOrientation = 'horizontal' | 'vertical'

export interface UseDraggableInputOptions {
	/**
	 * Ориентация драга (horizontal или vertical)
	 */
	orientation?: DragOrientation
	/**
	 * Функция для вычисления нового значения на основе движения
	 */
	onDragChange: (delta: number, startValue: number) => void
	/**
	 * Callback при начале драга
	 */
	onDragStart?: () => void
	/**
	 * Callback при окончании драга
	 */
	onDragEnd?: () => void
	/**
	 * Отключить drag
	 */
	disabled?: boolean
}

/**
 * Хук для реализации drag-to-change функционала в input компонентах
 * Используется в InputNumberSelect, InputHex, InputHexWithPreview
 */
export const useDraggableInput = ({
	orientation = 'horizontal',
	onDragChange,
	onDragStart,
	onDragEnd,
	disabled = false,
}: UseDraggableInputOptions) => {
	const dragStartValueRef = useRef<number>(0)
	const startPositionRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 })

	const handlePointerDown = (
		e: React.PointerEvent<HTMLButtonElement>,
		currentValue: number
	) => {
		if (disabled) return
		e.preventDefault()

		const target = e.currentTarget
		target.setPointerCapture(e.pointerId)

		// Создаём динамический стиль для курсора
		const styleElement = document.createElement('style')
		styleElement.id = 'dragging-cursor-style'
		const cursorType = orientation === 'vertical' ? 'ns-resize' : 'ew-resize'
		styleElement.innerHTML = `
			body, body * {
				cursor: ${cursorType} !important;
				user-select: none !important;
			}
		`
		document.head.appendChild(styleElement)

		// Сохраняем начальные значения
		dragStartValueRef.current = currentValue
		startPositionRef.current = { x: e.clientX, y: e.clientY }

		onDragStart?.()

		const handlePointerMove = (event: PointerEvent) => {
			const deltaX = event.clientX - startPositionRef.current.x
			const deltaY = startPositionRef.current.y - event.clientY // Инвертируем для vertical

			const delta = orientation === 'vertical' ? deltaY : deltaX

			onDragChange(delta, dragStartValueRef.current)
		}

		const handlePointerUp = (event: PointerEvent) => {
			target.releasePointerCapture(event.pointerId)

			// Удаляем стиль курсора
			const styleToRemove = document.getElementById('dragging-cursor-style')
			if (styleToRemove) {
				styleToRemove.remove()
			}

			target.removeEventListener('pointermove', handlePointerMove)
			document.removeEventListener('pointerup', handlePointerUp)

			onDragEnd?.()
		}

		target.addEventListener('pointermove', handlePointerMove)
		document.addEventListener('pointerup', handlePointerUp)
	}

	return {
		handlePointerDown,
	}
}
