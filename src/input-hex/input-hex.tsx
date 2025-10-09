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
			...props
		},
		ref
	) => {
		const dragRef = useRef<HTMLButtonElement>(null)
		const [disable, setDisable] = useState('')
		const hex = tc(hexColor).toHex()
		const [newHex, setNewHex] = useState(hex)
		const dragStartValue = useRef(0)

		useEffect(() => {
			if (disable !== 'hex') {
				setNewHex(hex)
			}
		}, [hexColor, disable, hex])

		const hexFocus = () => {
			setDisable('hex')
		}

		const hexBlur = () => {
			setDisable('')
		}

		const getCurrenthexColor = () => {
			return newHex || hex
		}

		const handleHexInput = (e: React.ChangeEvent<HTMLInputElement>) => {
			const val = e.target.value
			setNewHex(val)
			if (tc(val).isValid()) {
				const hexWithHash = val.startsWith('#') ? val : `#${val}`
				handleChange(hexWithHash)
			}
		}

		const handleIconClick = () => {
			if (onIconClick) {
				onIconClick(getCurrenthexColor())
			}
		}

		const handlePointerDown = (e: React.PointerEvent<HTMLButtonElement>) => {
			if (disabled || isDisabledMouseEvent) return
			e.preventDefault()

			if (onIconPointerDown) {
				onIconPointerDown(getCurrenthexColor())
			}

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
			setDisable('hex')

			const handlePointerMove = (event: PointerEvent) => {
				const movementX = event.clientX - startX
				const step = 55000
				let newhexColorInt = Math.round(
					dragStartValue.current + movementX * step
				)
				newhexColorInt = Math.max(0, Math.min(0xffffff, newhexColorInt))

				const newhexColorHex = newhexColorInt.toString(16).padStart(6, '0')
				setNewHex(newhexColorHex)
				handleChange(`#${newhexColorHex}`)
			}

			const handlePointerUp = (event: PointerEvent) => {
				target.releasePointerCapture(event.pointerId)
				setDisable('')

				if (onIconPointerUp) {
					onIconPointerUp(getCurrenthexColor())
				}

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

		const displayValue = newHex

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
					ref={dragRef}
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
					value={displayValue?.toUpperCase()}
					onChange={handleHexInput}
					onFocus={hexFocus}
					onBlur={hexBlur}
					disabled={disabled}
					ref={ref}
					{...props}
				/>
			</div>
		)
	}
)

InputHex.displayName = 'InputHex'
