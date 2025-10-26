import React from 'react'
import { cn } from '../../utils/cn'

export interface TextButtonProps
	extends Omit<React.ComponentProps<'button'>, 'children'> {
	/**
	 * Текст для отображения
	 */
	children: React.ReactNode
	/**
	 * Дополнительные классы
	 */
	className?: string
	/**
	 * Классы для текста (light theme)
	 */
	textLightClass?: string
	/**
	 * Классы для текста (dark theme)
	 */
	textDarkClass?: string
}

/**
 * Текстовая кнопка для отображения информации с возможностью клика
 * Используется для gradient text, filename, labels
 */
export const TextButton = React.forwardRef<HTMLButtonElement, TextButtonProps>(
	(
		{
			children,
			className,
			textLightClass = 'text-gray-700',
			textDarkClass = 'dark:text-gray-300',
			disabled = false,
			...props
		},
		ref
	) => {
		return (
			<button
				ref={ref}
				type="button"
				disabled={disabled}
				className={cn(
					'outline-none px-2 font-mono text-xs flex-1 text-left cursor-pointer hover:opacity-70 transition-opacity min-w-[187px]',
					textLightClass,
					textDarkClass,
					{
						'opacity-50 cursor-not-allowed': disabled,
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

TextButton.displayName = 'TextButton'
