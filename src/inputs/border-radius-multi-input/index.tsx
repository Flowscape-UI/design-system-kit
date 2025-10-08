import { Link, Unlink } from 'lucide-react'
import React, { useCallback, useMemo, useState } from 'react'
import { cn } from '../../shared/utils/cn'
import { BorderRadiusInput } from '../border-radius-input'
import { THEME_CLASSES } from '../shared'

export interface BorderRadiusMultiInputProps {
	value?: [number, number, number, number]
	onChange?: (value: [number, number, number, number]) => void
	min?: number
	max?: number
	step?: number
	unit?: 'px' | '%' | 'rem'
	className?: string
	theme?: 'light' | 'dark' | 'auto'
	disabled?: boolean
}

export const BorderRadiusMultiInput = React.memo<BorderRadiusMultiInputProps>(
	({
		value = [0, 0, 0, 0],
		onChange,
		min = 0,
		max = 999,
		step = 1,
		unit = 'px',
		className,
		theme = 'auto',
		disabled = false,
	}) => {
		const [isLinked, setIsLinked] = useState(true)

		const isDark = useMemo(() => {
			if (theme === 'dark') return true
			if (theme === 'light') return false
			return (
				typeof window !== 'undefined' &&
				window.matchMedia('(prefers-color-scheme: dark)').matches
			)
		}, [theme])

		const themeClasses = isDark ? THEME_CLASSES.dark : THEME_CLASSES.light

		const handleChange = useCallback(
			(index: number) => (newValue: number) => {
				if (isNaN(newValue)) return

				if (isLinked) {
					onChange?.([newValue, newValue, newValue, newValue])
				} else {
					const newValues: [number, number, number, number] = [...value]
					newValues[index] = newValue
					onChange?.(newValues)
				}
			},
			[isLinked, value, onChange]
		)

		return (
			<div className={cn('inline-flex flex-col gap-2', className)}>
				<div className="flex items-center justify-between gap-2">
					<div className="grid grid-cols-2 gap-2 flex-1">
						<BorderRadiusInput
							value={value[0]}
							onChange={handleChange(0)}
							min={min}
							max={max}
							step={step}
							unit={unit}
							showUnit={false}
							icon="↖"
							theme={theme}
							disabled={disabled}
							className="w-full"
						/>
						<BorderRadiusInput
							value={value[1]}
							onChange={handleChange(1)}
							min={min}
							max={max}
							step={step}
							unit={unit}
							showUnit={false}
							icon="↗"
							theme={theme}
							disabled={disabled}
							className="w-full"
						/>
						<BorderRadiusInput
							value={value[2]}
							onChange={handleChange(2)}
							min={min}
							max={max}
							step={step}
							unit={unit}
							showUnit={false}
							icon="↙"
							theme={theme}
							disabled={disabled}
							className="w-full"
						/>
						<BorderRadiusInput
							value={value[3]}
							onChange={handleChange(3)}
							min={min}
							max={max}
							step={step}
							unit={unit}
							showUnit={false}
							icon="↘"
							theme={theme}
							disabled={disabled}
							className="w-full"
						/>
					</div>

					<button
						onClick={() => setIsLinked(!isLinked)}
						disabled={disabled}
						className={cn(
							'p-2 rounded-md transition-colors',
							themeClasses.dragArea,
							disabled && 'cursor-not-allowed opacity-50'
						)}
						title={isLinked ? 'Разъединить углы' : 'Связать углы'}
					>
						{isLinked ? (
							<Link size={16} className={themeClasses.icon} />
						) : (
							<Unlink size={16} className={themeClasses.icon} />
						)}
					</button>
				</div>

				<div className={cn('text-xs text-center', themeClasses.icon)}>
					{unit}
				</div>
			</div>
		)
	}
)

BorderRadiusMultiInput.displayName = 'BorderRadiusMultiInput'
