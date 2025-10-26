import React from 'react'
import { cn } from '../../utils/cn'
import { INPUT_THEME_CLASSES } from '../../constants/input-theme'

export interface DragButtonProps
	extends Omit<React.ComponentProps<'button'>, 'children'> {
	/**
	 * Содержимое кнопки (иконка, текст, элемент)
	 */
	children: React.ReactNode
	/**
	 * Дополнительные классы
	 */
	className?: string
	/**
	 * Disabled состояние для mouse events
	 */
	isDisabledMouseEvent?: boolean
	/**
	 * Ориентация курсора при drag
	 */
	dragOrientation?: 'horizontal' | 'vertical'
}

/**
 * Кнопка с drag-to-change функциональностью
 * Используется в InputHex, InputHexWithPreview, InputNumberSelect
 */
export const DragButton = React.forwardRef<HTMLButtonElement, DragButtonProps>(
	(
		{
			children,
			className,
			disabled = false,
			isDisabledMouseEvent = false,
			dragOrientation = 'horizontal',
			...props
		},
		ref
	) => {
		const cursorClass =
			dragOrientation === 'horizontal' ? 'cursor-ew-resize' : 'cursor-ns-resize'

		return (
			<button
				ref={ref}
				type="button"
				disabled={isDisabledMouseEvent || disabled}
				className={cn(
					'flex items-center justify-center aspect-square h-full select-none',
					INPUT_THEME_CLASSES.light.dragArea,
					INPUT_THEME_CLASSES.dark.dragArea,
					{
						[cursorClass]: !isDisabledMouseEvent && !disabled,
						'cursor-not-allowed opacity-50': disabled || isDisabledMouseEvent,
					},
					className
				)}
				{...props}
			>
				{children}
			</button>
		)
	}
)

DragButton.displayName = 'DragButton'
