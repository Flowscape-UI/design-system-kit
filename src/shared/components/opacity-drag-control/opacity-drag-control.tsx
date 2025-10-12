import { useState } from 'react'
import { cn } from '../../utils/cn'

interface OpacityDragControlProps {
	opacity: number
	onChange: (value: number) => void
	className?: string
}

export const OpacityDragControl = ({
	opacity,
	onChange,
	className,
}: OpacityDragControlProps) => {
	const [isDragging, setIsDragging] = useState(false)

	const handlePointerDown = (e: React.PointerEvent<HTMLButtonElement>) => {
		e.preventDefault()
		const target = e.currentTarget
		target.setPointerCapture(e.pointerId)

		const styleElement = document.createElement('style')
		styleElement.id = 'opacity-dragging-cursor'
		styleElement.innerHTML = `
			body, body * {
				cursor: ew-resize !important;
				user-select: none !important;
			}
		`
		document.head.appendChild(styleElement)

		const startX = e.clientX
		const startOpacity = opacity
		setIsDragging(true)

		const handlePointerMove = (event: PointerEvent) => {
			const deltaX = event.clientX - startX
			const step = 0.5
			let newOpacity = Math.round(startOpacity + deltaX * step)
			newOpacity = Math.max(0, Math.min(100, newOpacity))
			onChange(newOpacity)
		}

		const handlePointerUp = (event: PointerEvent) => {
			target.releasePointerCapture(event.pointerId)
			setIsDragging(false)

			const styleToRemove = document.getElementById('opacity-dragging-cursor')
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
		<button
			type="button"
			onPointerDown={handlePointerDown}
			className={cn(
				'text-xs font-mono select-none cursor-ew-resize whitespace-nowrap w-10 text-right',
				'text-gray-600',
				'dark:text-gray-400',
				'hover:text-gray-900 dark:hover:text-white',
				isDragging && 'text-gray-900 dark:text-white',
				className
			)}
		>
			{opacity}%
		</button>
	)
}
