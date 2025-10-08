import { Droplets } from 'lucide-react'
import React, { useMemo } from 'react'
import { Input } from '../../input'
import { cn } from '../../shared/utils/cn'
import { THEME_CLASSES, useNumberInput, type BaseInputProps } from '../shared'

export type BlurInputProps = BaseInputProps

export const BlurInput = React.memo(
	React.forwardRef<HTMLInputElement, BlurInputProps>(
		(
			{
				value,
				onChange,
				min = 0,
				max = 100,
				step = 1,
				precision = 0,
				progression = 'linear',
				orientation = 'horizontal',
				unit = 'px',
				showUnit = true,
				icon,
				className,
				classNameInput,
				classNameIcon,
				theme = 'auto',
				disabled,
				...props
			},
			ref
		) => {
			const { handleMouseDown, handleInputChange, handleBlur } = useNumberInput(
				{
					value,
					onChange,
					min,
					max,
					step,
					precision,
					progression,
					orientation,
					disabled,
				}
			)

			const isDark = useMemo(() => {
				if (theme === 'dark') return true
				if (theme === 'light') return false
				return (
					typeof window !== 'undefined' &&
					window.matchMedia('(prefers-color-scheme: dark)').matches
				)
			}, [theme])

			const themeClasses = isDark ? THEME_CLASSES.dark : THEME_CLASSES.light

			const renderIcon = useMemo(() => {
				if (icon) {
					return typeof icon === 'string' ? (
						<span
							className={cn(
								'text-sm font-medium select-none',
								themeClasses.icon
							)}
						>
							{icon}
						</span>
					) : (
						icon
					)
				}
				return <Droplets size={16} className={themeClasses.icon} />
			}, [icon, themeClasses.icon])

			return (
				<div
					className={cn(
						'inline-flex items-center overflow-hidden rounded-lg border-2 focus-within:ring-1 focus-within:ring-ring',
						themeClasses.container,
						{
							'flex-col w-20': orientation === 'vertical',
							'h-8': orientation === 'horizontal',
						},
						className
					)}
				>
					<div
						onMouseDown={handleMouseDown}
						className={cn(
							'flex items-center justify-center',
							themeClasses.dragArea,
							{
								'aspect-square h-full cursor-ew-resize':
									orientation === 'horizontal',
								'w-full h-8 cursor-ns-resize': orientation === 'vertical',
							},
							disabled && 'cursor-not-allowed opacity-50',
							classNameIcon
						)}
					>
						{renderIcon}
					</div>

					<Input
						type="number"
						className={cn(
							'w-full rounded-none border-none bg-transparent text-center px-2 py-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none',
							themeClasses.input,
							{
								'h-8': orientation === 'vertical',
								'h-full': orientation === 'horizontal',
							},
							classNameInput
						)}
						value={value}
						onChange={handleInputChange}
						onBlur={handleBlur}
						disabled={disabled}
						ref={ref}
						{...props}
					/>

					{showUnit && unit !== 'none' && (
						<div
							className={cn(
								'px-2 text-xs font-medium select-none',
								themeClasses.icon
							)}
						>
							{unit}
						</div>
					)}
				</div>
			)
		}
	)
)

BlurInput.displayName = 'BlurInput'
