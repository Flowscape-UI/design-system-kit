import React from 'react'
import tc from 'tinycolor2'
import { Input } from '../input'
import { DragButton } from '../shared/components/drag-button/drag-button'
import { InputContainer } from '../shared/components/input-container/input-container'
import { INPUT_THEME_CLASSES } from '../shared/constants/input-theme'
import { useDraggableInput } from '../shared/hooks/use-draggable-input'
import { useHexInput } from '../shared/hooks/use-hex-input'
import { cn } from '../shared/utils/cn'
import { convertToHex8 } from '../shared/utils/color-utils'

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
		// Используем хук для управления hex input
		const { localHex, handleHexInput, setIsEditing, setLocalHex } = useHexInput(
			{
				hexColor,
				onChange: handleChange,
				showAlpha,
			}
		)

		// Получаем hex для drag-логики
		const color = tc(hexColor)
		const hex = color.toHex()

		const handleIconClick = () => {
			onIconClick?.(localHex)
		}

		// Используем хук для drag-to-change логики
		const { handlePointerDown: handleDrag } = useDraggableInput({
			orientation: 'horizontal',
			onDragChange: (delta, startValue) => {
				const step = 55000
				let newhexColorInt = Math.round(startValue + delta * step)
				newhexColorInt = Math.max(0, Math.min(0xffffff, newhexColorInt))

				// Drag changes only base color (6 symbols)
				const newBaseHex = newhexColorInt
					.toString(16)
					.padStart(6, '0')
					.toUpperCase()

				// Save initial alpha to preserve it during drag
				const initialAlpha =
					showAlpha && localHex.length >= 8 ? localHex.slice(6, 8) : ''

				// Update local state immediately for visual feedback
				setLocalHex(newBaseHex + initialAlpha)

				// Emit with alpha if it exists, otherwise just base color
				if (showAlpha && initialAlpha) {
					handleChange(convertToHex8(newBaseHex + initialAlpha))
				} else {
					handleChange(`#${newBaseHex}`)
				}
			},
			onDragStart: () => {
				setIsEditing(true)
				onIconPointerDown?.(localHex)
			},
			onDragEnd: () => {
				setIsEditing(false)
				onIconPointerUp?.(localHex)
			},
			disabled: disabled || isDisabledMouseEvent,
		})

		const handlePointerDown = (e: React.PointerEvent<HTMLButtonElement>) => {
			handleDrag(e, parseInt(hex, 16))
		}

		return (
			<InputContainer className={className}>
				<DragButton
					onClick={handleIconClick}
					onPointerDown={handlePointerDown}
					disabled={disabled}
					isDisabledMouseEvent={isDisabledMouseEvent}
					dragOrientation="horizontal"
					className={cn(
						'font-bold font-mono text-base',
						INPUT_THEME_CLASSES.light.icon,
						INPUT_THEME_CLASSES.dark.icon,
						classNameIcon
					)}
				>
					#
				</DragButton>

				<Input
					type="text"
					className={cn(
						'w-full rounded-none border-none bg-transparent text-left px-2 py-0 h-full text-sm',
						INPUT_THEME_CLASSES.light.input,
						INPUT_THEME_CLASSES.dark.input,
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
			</InputContainer>
		)
	}
)

InputHex.displayName = 'InputHex'
