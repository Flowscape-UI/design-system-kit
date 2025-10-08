import React, { useRef } from 'react'
import { FaRegDotCircle } from 'react-icons/fa'
import { Input } from '../input'
import { cn } from '../shared/utils/cn'
import { removeTrailingZeros } from '../shared/utils/remove-trailing-zeros'

export type Progression =
	| 'linear'
	| 'arithmetic'
	| 'geometric'
	| 'paraboloid'
	| 'exponential'
	| 'logarithmic'

export interface InputNumberSelectProps
	extends Omit<React.ComponentProps<'input'>, 'defaultValue' | 'onChange'> {
	icon?: React.JSX.Element | string
	orientation?: 'horizontal' | 'vertical'
	step?: number
	precision?: number
	progression?: Progression
	classNameInput?: string
	value: number | string
	onChange?: (value: number | string) => void
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
			orientation = 'horizontal',
			className,
			classNameInput,
			progression = 'linear',
			step = 0,
			precision = 0,
			value,
			onChange,
			...props
		},
		ref
	) => {
		const { disabled } = props
		const dragRef = useRef(null)
		const startValueRef = useRef<number>(value === '' ? 0 : Number(value))

		const handleMouseDown = () => {
			startValueRef.current = value === '' ? 0 : Number(value)
			if (!disabled) {
				document.addEventListener('mousemove', handleMouseMove)
				document.addEventListener('mouseup', handleMouseUp)
			}
		}

		const handleMouseUp = () => {
			if (!disabled) {
				document.removeEventListener('mousemove', handleMouseMove)
				document.removeEventListener('mouseup', handleMouseUp)
			}
		}

		const handleMouseMove = (event: MouseEvent) => {
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
			onChange?.(removeTrailingZeros(newValue, precision))
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
				case 'logarithmic': {
					// Logarithmic progression: change is proportional to log of current value
					const logFactor = Math.log10(Math.max(Math.abs(value), 1) + 1)
					return value + delta * logFactor
				}
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

		const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
			const rawValue = e.target.value
			if (rawValue === '') {
				onChange?.('')
				return
			}
			let numericValue = +rawValue
			if (max !== undefined && numericValue > +max) {
				numericValue = +max
			}
			onChange?.(numericValue)
		}

		const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
			const rawValue = e.target.value
			let numericValue: number | string = rawValue === '' ? '' : +rawValue

			if (numericValue === '' || isNaN(numericValue as number)) {
				if (min !== undefined) {
					onChange?.(+min)
				} else {
					onChange?.('')
				}
				return
			}

			if (typeof numericValue === 'number') {
				if (min !== undefined && numericValue < +min) {
					numericValue = +min
				}
				onChange?.(numericValue)
			}
		}

		return (
			<div
				className={cn(
					'inline-flex items-center overflow-hidden rounded-lg border-2 border-gray-400 focus-within:ring-1 focus-within:ring-ring bg-transparent dark:bg-input/30',
					{
						'flex-col w-20': orientation === 'vertical',
						'h-8': orientation === 'horizontal',
					},
					className
				)}
			>
				<div
					ref={dragRef}
					onMouseDown={handleMouseDown}
					className={cn(
						'flex items-center justify-center',
						{
							'aspect-square h-full cursor-ew-resize':
								orientation === 'horizontal',
							'w-full h-8 cursor-ns-resize': orientation === 'vertical',
						},
						disabled && 'cursor-not-allowed opacity-50'
					)}
				>
					{typeof icon === 'string' && icon.length > 0 ? (
						<span className="text-sm font-medium select-none">
							{icon.charAt(0)}
						</span>
					) : React.isValidElement(icon) ? (
						icon
					) : (
						<FaRegDotCircle />
					)}
				</div>

				<Input
					type="number"
					className={cn(
						'w-full rounded-none border-none bg-transparent text-center px-2 py-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none',
						{
							'h-8': orientation === 'vertical',
							'h-full': orientation === 'horizontal',
						},
						classNameInput
					)}
					value={value}
					onChange={handleInputChange}
					onBlur={handleBlur}
					ref={ref}
					{...props}
				/>
			</div>
		)
	}
)

InputNumberSelect.displayName = 'InputNumberSelect'
