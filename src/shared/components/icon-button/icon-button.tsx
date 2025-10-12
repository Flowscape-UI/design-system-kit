import React from 'react'
import { cn } from '../../utils/cn'

export interface IconButtonProps
	extends Omit<React.ComponentProps<'button'>, 'children'> {
	/**
	 * Иконка для отображения (React element или компонент)
	 */
	icon: React.ReactNode
	/**
	 * Размер иконки (по умолчанию 14)
	 */
	iconSize?: number
	/**
	 * Вариант стиля
	 */
	variant?: 'default' | 'muted' | 'danger'
	/**
	 * Дополнительные классы
	 */
	className?: string
}

/**
 * Компонент кнопки с иконкой для action buttons
 */
export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
	(
		{
			icon,
			iconSize = 14,
			variant = 'muted',
			className,
			disabled = false,
			...props
		},
		ref
	) => {
		// Клонируем иконку с нужным размером, если это React element
		const iconElement = React.isValidElement(icon)
			? React.cloneElement(icon as React.ReactElement<{ size?: number }>, {
					size: iconSize,
			  })
			: icon

		return (
			<button
				ref={ref}
				type="button"
				disabled={disabled}
				className={cn(
					'p-1 transition-colors',
					{
						// Default variant
						'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white':
							variant === 'default',
						// Muted variant (более приглушенный)
						'text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white':
							variant === 'muted',
						// Danger variant
						'text-red-500 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300':
							variant === 'danger',
						// Disabled state
						'opacity-50 cursor-not-allowed': disabled,
					},
					className
				)}
				{...props}
			>
				{iconElement}
			</button>
		)
	}
)

IconButton.displayName = 'IconButton'
