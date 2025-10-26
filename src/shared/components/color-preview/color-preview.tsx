import React from 'react'
import { cn } from '../../utils/cn'

export interface ColorPreviewProps {
	/**
	 * Цвет для отображения (любой валидный CSS color)
	 */
	color: string
	/**
	 * Показывать checkerboard фон для прозрачности
	 */
	showCheckerboard?: boolean
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
}

const CHECKERBOARD_PATTERN =
	"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cg fill='%23d1d1d1'%3E%3Cpath fill-rule='evenodd' d='M0 0h4v4H0V0zm4 4h4v4H4V4z'/%3E%3C/g%3E%3C/svg%3E\")"

/**
 * Компонент для отображения цветового preview с опциональным checkerboard фоном
 */
export const ColorPreview = React.forwardRef<
	HTMLButtonElement,
	ColorPreviewProps
>(
	(
		{
			color,
			showCheckerboard = true,
			size = 'size-5',
			className,
			onClick,
			disabled = false,
		},
		ref
	) => {
		const content = (
			<>
				{/* Checkerboard background для прозрачности */}
				{showCheckerboard && (
					<div
						className="absolute inset-0"
						style={{
							backgroundImage: CHECKERBOARD_PATTERN,
						}}
					/>
				)}

				{/* Color overlay */}
				<div
					className="absolute inset-0"
					style={{
						background: color,
					}}
				/>
			</>
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

ColorPreview.displayName = 'ColorPreview'
