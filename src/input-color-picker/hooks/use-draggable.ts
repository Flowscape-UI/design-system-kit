import { useRef, useState } from 'react'
import type { DragStart, Position } from '../types'

export const useDraggable = () => {
	const [position, setPosition] = useState<Position>({
		top: window.innerHeight / 2,
		left: window.innerWidth / 2,
	})
	const dragStart = useRef<DragStart | null>(null)

	const handleDragStart = (
		e: React.MouseEvent,
		element: HTMLDivElement | null
	) => {
		if (!element) return

		dragStart.current = {
			x: e.clientX,
			y: e.clientY,
			top: element.offsetTop,
			left: element.offsetLeft,
		}

		const handleMouseMove = (moveEvent: MouseEvent) => {
			if (!dragStart.current) return
			const dx = moveEvent.clientX - dragStart.current.x
			const dy = moveEvent.clientY - dragStart.current.y
			setPosition({
				top: dragStart.current.top + dy,
				left: dragStart.current.left + dx,
			})
		}

		const handleMouseUp = () => {
			dragStart.current = null
			window.removeEventListener('mousemove', handleMouseMove)
			window.removeEventListener('mouseup', handleMouseUp)
		}

		window.addEventListener('mousemove', handleMouseMove)
		window.addEventListener('mouseup', handleMouseUp)
	}

	const resetPosition = () => {
		setPosition({
			top: window.innerHeight / 2,
			left: window.innerWidth / 2,
		})
	}

	return {
		position,
		handleDragStart,
		resetPosition,
	}
}
