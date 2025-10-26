import { Eye, EyeOff, Trash2 } from 'lucide-react'
import React from 'react'
import { cn } from '../../utils/cn'
import { Divider } from '../divider/divider'
import { IconButton } from '../icon-button/icon-button'
import { OpacityDragControl } from '../opacity-drag-control/opacity-drag-control'

export interface ActionButtonsProps {
	/**
	 * Показывать кнопку видимости
	 */
	showVisibility?: boolean
	/**
	 * Показывать кнопку удаления
	 */
	showDelete?: boolean
	/**
	 * Показывать opacity control
	 */
	showOpacity?: boolean
	/**
	 * Состояние видимости (для кнопки Eye/EyeOff)
	 */
	isHidden?: boolean
	/**
	 * Значение opacity (0-100)
	 */
	opacity?: number
	/**
	 * Обработчик изменения видимости
	 */
	onToggleVisibility?: () => void
	/**
	 * Обработчик удаления
	 */
	onDelete?: () => void
	/**
	 * Обработчик изменения opacity
	 */
	onOpacityChange?: (opacity: number) => void
	/**
	 * Дополнительные классы для divider
	 */
	dividerClassName?: string
	/**
	 * Дополнительные классы для контейнера
	 */
	className?: string
}

/**
 * Группа action buttons для input компонентов
 * Включает: OpacityDragControl, Eye/EyeOff, Trash
 */
export const ActionButtons: React.FC<ActionButtonsProps> = ({
	showVisibility = true,
	showDelete = true,
	showOpacity = true,
	isHidden = false,
	opacity = 100,
	onToggleVisibility,
	onDelete,
	onOpacityChange,
	dividerClassName,
	className,
}) => {
	return (
		<div className={cn('inline-flex items-center gap-0.5', className)}>
			{showOpacity && onOpacityChange && (
				<OpacityDragControl opacity={opacity} onChange={onOpacityChange} />
			)}

			{(showOpacity || showVisibility || showDelete) && (
				<Divider className={dividerClassName} />
			)}

			{showVisibility && onToggleVisibility && (
				<IconButton
					onClick={onToggleVisibility}
					icon={isHidden ? <EyeOff /> : <Eye />}
					variant="muted"
				/>
			)}

			{showDelete && onDelete && (
				<IconButton onClick={onDelete} icon={<Trash2 />} variant="muted" />
			)}
		</div>
	)
}
