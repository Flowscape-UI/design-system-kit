import { useCallback, useEffect, useRef, useState } from 'react'
import { removeTrailingZeros } from '../../shared/utils/remove-trailing-zeros'
import { calculateByProgression } from './constants'
import type { Orientation, Progression } from './types'

interface UseNumberInputProps {
	value: number
	onChange?: (value: number) => void
	min?: number
	max?: number
	step?: number
	precision?: number
	progression?: Progression
	orientation?: Orientation
	disabled?: boolean
}

export const useNumberInput = ({
	value,
	onChange,
	min,
	max,
	step = 0,
	precision = 0,
	progression = 'linear',
	orientation = 'horizontal',
	disabled = false,
}: UseNumberInputProps) => {
	const startValueRef = useRef<number>(value)
	const onChangeRef = useRef(onChange)
	const [isDragging, setIsDragging] = useState(false)

	// Обновляем ref при каждом рендере
	useEffect(() => {
		onChangeRef.current = onChange
	}, [onChange])

	const handleMouseMove = useCallback(
		(event: MouseEvent) => {
			const movement =
				orientation === 'vertical' ? -event.movementY : event.movementX
			const delta: number = movement * step
			let newValue = calculateByProgression(
				startValueRef.current,
				delta,
				progression
			)

			if (min !== undefined && newValue < +min) newValue = +min
			if (max !== undefined && newValue > +max) newValue = +max

			startValueRef.current = newValue
			onChangeRef.current?.(removeTrailingZeros(newValue, precision))
		},
		[orientation, step, progression, min, max, precision]
	)

	const handleMouseUp = useCallback(() => {
		setIsDragging(false)
		document.removeEventListener('mousemove', handleMouseMove)
		document.removeEventListener('mouseup', handleMouseUp)
	}, [handleMouseMove])

	const handleMouseDown = useCallback(() => {
		if (disabled) return
		startValueRef.current = value
		setIsDragging(true)
		document.addEventListener('mousemove', handleMouseMove)
		document.addEventListener('mouseup', handleMouseUp)
	}, [disabled, value, handleMouseMove, handleMouseUp])

	const handleInputChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const rawValue = e.target.value
			if (rawValue === '') {
				// Пустое поле - устанавливаем min или 0
				onChangeRef.current?.(min !== undefined ? +min : 0)
				return
			}
			let numericValue = +rawValue
			if (max !== undefined && numericValue > +max) {
				numericValue = +max
			}
			onChangeRef.current?.(numericValue)
		},
		[max, min]
	)

	const handleBlur = useCallback(
		(e: React.FocusEvent<HTMLInputElement>) => {
			const rawValue = e.target.value
			let numericValue = rawValue === '' ? (min !== undefined ? +min : 0) : +rawValue

			if (isNaN(numericValue)) {
				onChangeRef.current?.(min !== undefined ? +min : 0)
				return
			}

			if (min !== undefined && numericValue < +min) {
				numericValue = +min
			}
			onChangeRef.current?.(numericValue)
		},
		[min]
	)

	useEffect(() => {
		return () => {
			document.removeEventListener('mousemove', handleMouseMove)
			document.removeEventListener('mouseup', handleMouseUp)
		}
	}, [handleMouseMove, handleMouseUp])

	return {
		isDragging,
		handleMouseDown,
		handleInputChange,
		handleBlur,
	}
}
