import React from 'react'
import { cn } from '../../utils/cn'
import { INPUT_THEME_CLASSES } from '../../constants/input-theme'

export interface InputContainerProps {
	/**
	 * Дочерние элементы
	 */
	children: React.ReactNode
	/**
	 * Дополнительные классы
	 */
	className?: string
	/**
	 * Высота контейнера (по умолчанию h-8)
	 */
	height?: 'h-6' | 'h-8' | 'h-10' | 'h-12'
	/**
	 * Вариант границы
	 */
	borderVariant?: 'default' | 'thick'
	/**
	 * Показывать focus ring
	 */
	showFocusRing?: boolean
}

/**
 * Универсальный контейнер для input компонентов с темизацией
 */
export const InputContainer = React.forwardRef<
	HTMLDivElement,
	InputContainerProps
>(
	(
		{
			children,
			className,
			height = 'h-8',
			borderVariant = 'thick',
			showFocusRing = true,
		},
		ref
	) => {
		return (
			<div
				ref={ref}
				className={cn(
					'inline-flex items-center overflow-hidden rounded-lg',
					height,
					{
						'border-2': borderVariant === 'thick',
						border: borderVariant === 'default',
						'focus-within:ring-1 focus-within:ring-ring': showFocusRing,
					},
					INPUT_THEME_CLASSES.light.container,
					INPUT_THEME_CLASSES.dark.container,
					className
				)}
			>
				{children}
			</div>
		)
	}
)

InputContainer.displayName = 'InputContainer'
