import React from 'react'
import { cn } from '../../utils/cn'

export interface ImagePreviewProps {
	/**
	 * URL изображения для отображения
	 */
	imageUrl?: string
	/**
	 * Alt текст для изображения
	 */
	alt?: string
	/**
	 * Прозрачность изображения (0-100)
	 */
	opacity?: number
	/**
	 * Размер preview (по умолчанию 'size-5')
	 */
	size?: 'size-4' | 'size-5' | 'size-6' | 'size-8'
	/**
	 * Дополнительные классы
	 */
	className?: string
	/**
	 * Обработчик клика
	 */
	onClick?: () => void
	/**
	 * Disabled состояние
	 */
	disabled?: boolean
	/**
	 * Цвет placeholder когда нет изображения
	 */
	placeholderColor?: string
}

/**
 * Компонент для отображения preview изображения с placeholder
 */
export const ImagePreview = React.forwardRef<
	HTMLButtonElement,
	ImagePreviewProps
>(
	(
		{
			imageUrl,
			alt = 'Preview',
			opacity = 100,
			size = 'size-5',
			className,
			onClick,
			disabled = false,
			placeholderColor = 'bg-gray-200 dark:bg-gray-700',
		},
		ref
	) => {
		const content = imageUrl ? (
			<img
				src={imageUrl}
				alt={alt}
				className="absolute inset-0 w-full h-full object-cover"
				style={{
					opacity: opacity / 100,
				}}
			/>
		) : (
			<div className={cn('absolute inset-0', placeholderColor)} />
		)

		const baseClasses = cn(
			'relative rounded-sm overflow-hidden bg-white flex-shrink-0',
			size,
			className
		)

		if (onClick) {
			return (
				<button
					ref={ref}
					onClick={onClick}
					disabled={disabled}
					type="button"
					className={cn(baseClasses, {
						'cursor-pointer hover:opacity-90 transition-opacity': !disabled,
						'cursor-not-allowed opacity-50': disabled,
					})}
				>
					{content}
				</button>
			)
		}

		return <div className={baseClasses}>{content}</div>
	}
)

ImagePreview.displayName = 'ImagePreview'
