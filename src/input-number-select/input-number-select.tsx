import React, { useEffect, useMemo, useRef, useState } from 'react'
import { FaRegDotCircle } from 'react-icons/fa'
import { Input } from '../input'
import { INPUT_THEME_CLASSES } from '../shared/constants/input-theme'
import { cn } from '../shared/utils/cn'
import { removeTrailingZeros } from '../shared/utils/remove-trailing-zeros'

export type Unit = 'px' | '%' | 'rem' | 'em' | 'deg' | 'none'

export type Orientation = 'horizontal' | 'vertical'

export type Progression =
	| 'linear'
	| 'arithmetic'
	| 'geometric'
	| 'paraboloid'
	| 'exponential'

export interface InputNumberSelectProps
	extends Omit<
		React.ComponentProps<'input'>,
		'defaultValue' | 'onChange' | 'value' | 'type' | 'min' | 'max' | 'step'
	> {
	value: number
	onChange?: (value: number) => void
	min?: number
	max?: number
	step?: number
	precision?: number
	progression?: Progression
	orientation?: Orientation
	unit?: Unit
	showUnit?: boolean
	icon?: React.JSX.Element | string
	className?: string
	classNameInput?: string
	classNameIcon?: string
	isDisabledMouseEvent?: boolean
}

export const InputNumberSelect = React.forwardRef<
	HTMLInputElement,
	InputNumberSelectProps
>(
	(
		{
			min,
			max,
			icon,
			className,
			classNameInput,
			classNameIcon,
			progression = 'linear',
			step = 0,
			precision = 0,
			value: propsValue,
			onChange,
			orientation = 'horizontal',
			unit = 'none',
			showUnit = true,
			disabled,
			isDisabledMouseEvent = false,
			...props
		},
		ref
	) => {
		const dragRef = useRef<HTMLButtonElement>(null)
		const [inputValue, setInputValue] = useState<number | string>(propsValue)
		const animationFrameId = useRef<number | null>(null)

		useEffect(() => {
			setInputValue(propsValue)
		}, [propsValue])

		const clampValue = (value: number): number => {
			const minNum = min !== undefined ? +min : -Infinity
			const maxNum = max !== undefined ? +max : Infinity
			return Math.max(minNum, Math.min(maxNum, value))
		}

		const effectiveStep = step === 0 ? 1 : step

		const handleChange = (newValue: number | string) => {
			const numericValue = Number(newValue)
			setInputValue(newValue)
			if (!isNaN(numericValue) && String(newValue).slice(-1) !== '.') {
				onChange?.(clampValue(numericValue))
			}
		}

		const handlePointerDown = (e: React.PointerEvent<HTMLButtonElement>) => {
			if (disabled || isDisabledMouseEvent) return
			e.preventDefault()

			const target = e.currentTarget
			target.setPointerCapture(e.pointerId)

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

			const startX = e.clientX
			const startY = e.clientY
			const startValue = inputValue === '' ? 0 : Number(inputValue)

			const autoIncrement = (direction: number) => {
				setInputValue((currentVal: number | string) => {
					const numValue =
						currentVal === '' || Number.isNaN(Number(currentVal))
							? 0
							: Number(currentVal)
					const newValue = clampValue(numValue + direction * effectiveStep)

					const formattedNewValue = removeTrailingZeros(newValue, precision)
					onChange?.(Number(formattedNewValue))
					return formattedNewValue
				})

				animationFrameId.current = requestAnimationFrame(() =>
					autoIncrement(direction)
				)
			}

			const stopAutoIncrement = () => {
				if (animationFrameId.current) {
					cancelAnimationFrame(animationFrameId.current)
					animationFrameId.current = null
				}
			}

			const handlePointerMove = (event: PointerEvent) => {
				if (orientation === 'vertical') {
					// Vertical orientation - movement along the Y axis
					const atTopEdge = event.clientY <= 1
					const atBottomEdge = event.clientY >= window.innerHeight - 1

					if (atTopEdge || atBottomEdge) {
						if (!animationFrameId.current) {
							autoIncrement(atTopEdge ? 1 : -1)
						}
					} else {
						stopAutoIncrement()
						const totalDeltaY = startY - event.clientY // Invert: top = +
						const delta = totalDeltaY * effectiveStep
						let newValue = calculateByProgression(
							startValue,
							delta,
							progression
						)

						newValue = clampValue(newValue)

						handleChange(removeTrailingZeros(newValue, precision))
					}
				} else {
					// Horizontal orientation - movement along the X axis
					const atLeftEdge = event.clientX <= 1
					const atRightEdge = event.clientX >= window.innerWidth - 1

					if (atLeftEdge || atRightEdge) {
						if (!animationFrameId.current) {
							autoIncrement(atLeftEdge ? -1 : 1)
						}
					} else {
						stopAutoIncrement()
						const totalDeltaX = event.clientX - startX
						const delta = totalDeltaX * effectiveStep
						let newValue = calculateByProgression(
							startValue,
							delta,
							progression
						)

						newValue = clampValue(newValue)

						handleChange(removeTrailingZeros(newValue, precision))
					}
				}
			}

			const handlePointerUp = (event: PointerEvent) => {
				target.releasePointerCapture(event.pointerId)
				stopAutoIncrement()

				const styleToRemove = document.getElementById('dragging-cursor-style')
				if (styleToRemove) {
					styleToRemove.remove()
				}
				target.removeEventListener('pointermove', handlePointerMove)
				document.removeEventListener('pointerup', handlePointerUp)
			}

			target.addEventListener('pointermove', handlePointerMove)
			document.addEventListener('pointerup', handlePointerUp)
		}

		const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
			const { key, currentTarget } = e
			const { value, selectionStart, selectionEnd } = currentTarget

			// Allow functional keys and shortcuts
			if (
				e.metaKey ||
				e.ctrlKey ||
				[
					'Backspace',
					'Delete',
					'Tab',
					'Escape',
					'Enter',
					'ArrowLeft',
					'ArrowRight',
					'Home',
					'End',
				].includes(key)
			) {
				return
			}

			// Handle precision for dot: prevent if precision is 0 or dot already exists
			if (key === '.' && (precision === 0 || value.includes('.'))) {
				e.preventDefault()
				return
			}

			// Handle precision for digits: prevent if decimal part length exceeds precision
			const dotIndex = value.indexOf('.')
			if (
				dotIndex > -1 &&
				/\d/.test(key) &&
				selectionStart !== null &&
				selectionEnd !== null &&
				selectionStart > dotIndex && // Cursor is after the dot
				selectionStart === selectionEnd && // No text is selected
				value.substring(dotIndex + 1).length >= precision // Decimal part is already at max length
			) {
				e.preventDefault()
				return
			}

			// Block subsequent minus signs or minus signs not at the start
			if (
				key === '-' &&
				(value.includes('-') || (selectionStart !== null && selectionStart > 0))
			) {
				e.preventDefault()
				return
			}

			// Block any other non-digit characters
			if (!/[\d.-]/.test(key)) {
				e.preventDefault()
			}
		}

		const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
			let inputValue = e.target.value
			const numberRegex = /^-?(\d+(\.\d*)?|\.\d*|)$/

			if (!numberRegex.test(inputValue)) {
				return
			}

			// Enforce precision on paste
			const dotIndex = inputValue.indexOf('.')
			if (dotIndex > -1) {
				if (precision <= 0) {
					inputValue = inputValue.split('.')[0] ?? ''
				} else {
					const decimalPart = inputValue.substring(dotIndex + 1)
					if (decimalPart.length > precision) {
						inputValue = inputValue.substring(0, dotIndex + 1 + precision)
					}
				}
			}

			// Validation min/max
			const numValue = Number(inputValue)
			if (!isNaN(numValue) && inputValue !== '' && !inputValue.endsWith('.')) {
				const clampedValue = clampValue(numValue)
				if (clampedValue !== numValue) {
					inputValue = String(clampedValue)
				}
			}

			handleChange(inputValue)
		}

		const calculateByProgression = (
			value: number,
			delta: number,
			progression?: Progression
		) => {
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

		const renderIcon = useMemo(() => {
			if (icon) {
				return (
					<span
						className={cn(
							'text-sm font-medium select-none',
							INPUT_THEME_CLASSES.light.icon,
							INPUT_THEME_CLASSES.dark.icon
						)}
					>
						{icon}
					</span>
				)
			}
			return (
				<FaRegDotCircle
					className={cn(
						INPUT_THEME_CLASSES.light.icon,
						INPUT_THEME_CLASSES.dark.icon
					)}
				/>
			)
		}, [icon])

		return (
			<div
				className={cn(
					'inline-flex items-center overflow-hidden rounded-lg border-2 focus-within:ring-1 focus-within:ring-ring',
					INPUT_THEME_CLASSES.light.container,
					INPUT_THEME_CLASSES.dark.container,
					{
						'flex-col w-20': orientation === 'vertical',
						'h-8': orientation === 'horizontal',
					},
					className
				)}
			>
				<button
					type="button"
					ref={dragRef}
					onPointerDown={handlePointerDown}
					className={cn(
						'flex items-center justify-center',
						INPUT_THEME_CLASSES.light.dragArea,
						INPUT_THEME_CLASSES.dark.dragArea,
						{
							'aspect-square h-full': orientation === 'horizontal',
							'w-full h-8': orientation === 'vertical',
							'cursor-ew-resize':
								orientation === 'horizontal' &&
								!isDisabledMouseEvent &&
								!disabled,
							'cursor-ns-resize':
								orientation === 'vertical' &&
								!isDisabledMouseEvent &&
								!disabled,
							'cursor-not-allowed opacity-50': disabled || isDisabledMouseEvent,
						},
						classNameIcon
					)}
					disabled={isDisabledMouseEvent || disabled}
				>
					{renderIcon}
				</button>

				<Input
					type="text"
					inputMode="decimal"
					className={cn(
						'w-full rounded-none border-none bg-transparent text-center px-2 py-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none',
						INPUT_THEME_CLASSES.light.input,
						INPUT_THEME_CLASSES.dark.input,
						{
							'h-8': orientation === 'vertical',
							'h-full': orientation === 'horizontal',
						},
						classNameInput
					)}
					value={inputValue ?? ''}
					onChange={handleInputChange}
					onKeyDown={handleKeyDown}
					disabled={disabled}
					ref={ref}
					{...props}
				/>

				{showUnit && unit !== 'none' && (
					<div
						className={cn(
							'px-2 text-xs font-medium select-none',
							INPUT_THEME_CLASSES.light.icon,
							INPUT_THEME_CLASSES.dark.icon
						)}
					>
						{unit}
					</div>
				)}
			</div>
		)
	}
)

InputNumberSelect.displayName = 'InputNumberSelect'
