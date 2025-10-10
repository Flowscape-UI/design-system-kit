import React, { useEffect, useRef, useState } from 'react'
import tc from 'tinycolor2'
import { Input } from '../input'
import { cn } from '../shared/utils/cn'

export interface InputHexProps
	extends Omit<React.ComponentProps<'input'>, 'onChange' | 'value'> {
	hexColor: string
	handleChange: (hexColor: string) => void
	className?: string
	classNameInput?: string
	classNameIcon?: string
	isDisabledMouseEvent?: boolean
	onIconClick?: (hexColor: string) => void
	onIconPointerDown?: (hexColor: string) => void
	onIconPointerUp?: (hexColor: string) => void
	/**
	 * Show and allow alpha channel input (another 2 hex symbols).
	 * By default disabled (input only 6 symbols).
	 */
	showAlpha?: boolean
}

const THEME_CLASSES = {
	light: {
		container: 'bg-white border-gray-300 focus-within:ring-blue-500',
		input: 'text-gray-900',
		icon: 'text-gray-600',
		dragArea: 'bg-gray-100 hover:bg-gray-200',
	},
	dark: {
		container:
			'dark:bg-gray-800 dark:border-gray-600 dark:focus-within:ring-blue-400',
		input: 'dark:text-gray-100',
		icon: 'dark:text-gray-300',
		dragArea: 'dark:bg-gray-700 dark:hover:bg-gray-600',
	},
} as const

export const InputHex = React.forwardRef<HTMLInputElement, InputHexProps>(
	(
		{
			hexColor,
			handleChange,
			className,
			classNameInput,
			classNameIcon,
			disabled,
			isDisabledMouseEvent = false,
			onIconClick,
			onIconPointerDown,
			onIconPointerUp,
			showAlpha = false,
			...props
		},
		ref
	) => {
		const [isEditing, setIsEditing] = useState(false)

		// Normalize input color through tinycolor2
		const color = tc(hexColor)
		const hex = color.toHex() // 6 symbols without #
		const alpha = color.getAlpha() // 0-1
		const alphaHex = Math.round(alpha * 255)
			.toString(16)
			.padStart(2, '0')
		// Full value: if showAlpha and alpha < 1, add alpha
		const hexFromProp = showAlpha && alpha < 1 ? hex + alphaHex : hex

		const [localHex, setLocalHex] = useState(hexFromProp)
		const dragStartValue = useRef(0)

		useEffect(() => {
			if (!isEditing) {
				setLocalHex(hexFromProp)
			}
		}, [hexColor, isEditing, hexFromProp])

		// Helper: converts 8-symbol hex to format with alpha
		const convertToHex8 = (hex8: string) => {
			const base = hex8.slice(0, 6)
			const alphaHex = hex8.slice(6, 8)
			const alphaDecimal = parseInt(alphaHex, 16) / 255
			return tc(`#${base}`).setAlpha(alphaDecimal).toHex8String().toUpperCase()
		}

		const handleHexInput = (e: React.ChangeEvent<HTMLInputElement>) => {
			const maxLen = showAlpha ? 8 : 6
			// Filter only hex symbols, truncate by length
			const filtered = e.target.value
				.replace(/[^0-9a-fA-F]/g, '')
				.slice(0, maxLen)
				.toUpperCase()

			setLocalHex(filtered)

			// Emit change only when full length
			if (filtered.length === 6) {
				handleChange(`#${filtered}`)
			} else if (filtered.length === 8 && showAlpha) {
				handleChange(convertToHex8(filtered))
			}
		}

		const handleIconClick = () => {
			onIconClick?.(localHex)
		}

		const handlePointerDown = (e: React.PointerEvent<HTMLButtonElement>) => {
			if (disabled || isDisabledMouseEvent) return
			e.preventDefault()

			onIconPointerDown?.(localHex)

			const target = e.currentTarget
			target.setPointerCapture(e.pointerId)

			const styleElement = document.createElement('style')
			styleElement.id = 'dragging-cursor-style'
			styleElement.innerHTML = `
        body, body * {
          cursor: ew-resize !important;
          user-select: none !important;
        }
      `
			document.head.appendChild(styleElement)

			dragStartValue.current = parseInt(hex, 16)
			const startX = e.clientX
			setIsEditing(true)

			// Save initial alpha to preserve it during drag
			const initialAlpha =
				showAlpha && localHex.length >= 8 ? localHex.slice(6, 8) : ''

			const handlePointerMove = (event: PointerEvent) => {
				const movementX = event.clientX - startX
				const step = 55000
				let newhexColorInt = Math.round(
					dragStartValue.current + movementX * step
				)
				newhexColorInt = Math.max(0, Math.min(0xffffff, newhexColorInt))

				// Drag changes only base color (6 symbols)
				const newBaseHex = newhexColorInt
					.toString(16)
					.padStart(6, '0')
					.toUpperCase()

				// Update local state with new base color + preserved alpha
				setLocalHex(newBaseHex + initialAlpha)

				// Emit with alpha if it exists, otherwise just base color
				if (showAlpha && initialAlpha) {
					handleChange(convertToHex8(newBaseHex + initialAlpha))
				} else {
					handleChange(`#${newBaseHex}`)
				}
			}

			const handlePointerUp = (event: PointerEvent) => {
				target.releasePointerCapture(event.pointerId)
				setIsEditing(false)
				onIconPointerUp?.(localHex)

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

		return (
			<div
				className={cn(
					'inline-flex items-center overflow-hidden rounded-lg border-2 focus-within:ring-1 focus-within:ring-ring h-8',
					THEME_CLASSES.light.container,
					THEME_CLASSES.dark.container,
					className
				)}
			>
				<button
					type="button"
					onClick={handleIconClick}
					onPointerDown={handlePointerDown}
					className={cn(
						'flex items-center justify-center aspect-square h-full font-bold font-mono text-base select-none',
						THEME_CLASSES.light.dragArea,
						THEME_CLASSES.dark.dragArea,
						THEME_CLASSES.light.icon,
						THEME_CLASSES.dark.icon,
						{
							'cursor-ew-resize': !isDisabledMouseEvent && !disabled,
							'cursor-not-allowed opacity-50': disabled || isDisabledMouseEvent,
						},
						classNameIcon
					)}
					disabled={isDisabledMouseEvent || disabled}
				>
					#
				</button>

				<Input
					type="text"
					className={cn(
						'w-full rounded-none border-none bg-transparent text-left px-2 py-0 h-full text-sm',
						THEME_CLASSES.light.input,
						THEME_CLASSES.dark.input,
						classNameInput
					)}
					value={localHex.toLocaleUpperCase()}
					onChange={handleHexInput}
					onFocus={() => setIsEditing(true)}
					onBlur={() => setIsEditing(false)}
					maxLength={showAlpha ? 8 : 6}
					disabled={disabled}
					ref={ref}
					{...props}
				/>
			</div>
		)
	}
)

InputHex.displayName = 'InputHex'
