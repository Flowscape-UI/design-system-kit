import React, { useCallback, useEffect, useRef, useState } from 'react'
import { usePicker } from '../context'
import { type GradientProps } from '../types'
import { high, low } from '../utils/formatters'

export const Handle = ({
	left,
	i,
	isSelected,
	onMouseDown,
}: {
	left?: number
	i: number
	isSelected: boolean
	onMouseDown: (e: React.MouseEvent, index: number) => void
}) => {
	const { squareWidth, defaultStyles, pickerIdSuffix } = usePicker()
	const leftMultiplier = (squareWidth - 18) / 100

	const handleMouseDown = (e: React.MouseEvent) => {
		e.stopPropagation()
		onMouseDown(e, i)
	}

	return (
		<div
			onMouseDown={handleMouseDown}
			id={`rbgcp-gradient-handle-${i}${pickerIdSuffix}`}
			style={{
				...defaultStyles.rbgcpGradientHandleWrap,
				left: (left ?? 0) * leftMultiplier,
			}}
		>
			<div
				className="relative size-[18px] cursor-ew-resize rounded-full border-2 border-white"
				id={`rbgcp-gradient-handle-${i}-dot${pickerIdSuffix}`}
			>
				{isSelected && (
					<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-1.5 rounded-full bg-white" />
				)}
			</div>
		</div>
	)
}

const GradientBar = () => {
	const {
		value,
		colors,
		squareWidth,
		currentColor,
		selectedColor,
		deletePoint,
		handleGradient,
		pickerIdSuffix,
		createGradientStr,
	} = usePicker()
	const [dragging, setDragging] = useState(false)
	const barRef = useRef<HTMLDivElement>(null)
	const boundingBox = useRef<DOMRect | null>(null)
	const rafPending = useRef(false)
	const lastEvent = useRef<MouseEvent | null>(null)

	useEffect(() => {
		const handleKeyboard = (e: KeyboardEvent) => {
			if (e.key === 'Delete' || e.key === 'Backspace') {
				if (colors.length > 2) {
					deletePoint()
				}
			}
		}
		window.addEventListener('keydown', handleKeyboard)

		return () => {
			window.removeEventListener('keydown', handleKeyboard)
		}
	}, [colors, deletePoint])

	function force90degLinear(color: string) {
		return color.replace(
			/(radial|linear)-gradient\([^,]+,/,
			'linear-gradient(90deg,'
		)
	}

	const getLeft = (e: MouseEvent) => {
		if (!boundingBox.current) return 0
		const x = e.clientX - boundingBox.current.left
		const newX = Math.max(0, Math.min(x, boundingBox.current.width))
		return (newX / boundingBox.current.width) * 100
	}

	const addPoint = (e: MouseEvent) => {
		const left = getLeft(e)
		const newColors = [
			...colors.map((c: any) => ({ ...c, value: low(c) })),
			{ value: currentColor, left: left },
		]?.sort((a, b) => a.left - b.left)
		createGradientStr(newColors)
	}

	const setSelectedColor = (index: number) => {
		const newGradStr = colors?.map((cc: GradientProps, i: number) => ({
			...cc,
			value: i === index ? high(cc) : low(cc),
		}))
		createGradientStr(newGradStr)
	}

	const updateOnFrame = useCallback(() => {
		if (!lastEvent.current || !boundingBox.current) {
			rafPending.current = false
			return
		}
		const left = getLeft(lastEvent.current)
		handleGradient(currentColor, left)
		rafPending.current = false
	}, [currentColor, handleGradient])

	useEffect(() => {
		const onMouseMove = (e: MouseEvent) => {
			if (dragging) {
				lastEvent.current = e
				if (!rafPending.current) {
					rafPending.current = true
					window.requestAnimationFrame(() => {
						updateOnFrame()
					})
				}
			}
		}

		const onMouseUp = () => {
			setDragging(false)
			boundingBox.current = null
		}

		if (dragging) {
			document.body.style.cursor = 'ew-resize'
			window.addEventListener('mousemove', onMouseMove)
			window.addEventListener('mouseup', onMouseUp)
		}

		return () => {
			document.body.style.cursor = ''
			window.removeEventListener('mousemove', onMouseMove)
			window.removeEventListener('mouseup', onMouseUp)
		}
	}, [dragging, updateOnFrame])

	const handleMouseDownOnBar = (e: React.MouseEvent<HTMLDivElement>) => {
		if (barRef.current) {
			boundingBox.current = barRef.current.getBoundingClientRect()
			addPoint(e.nativeEvent)
			setDragging(true)
			lastEvent.current = e.nativeEvent
		}
	}

	const handleMouseDownOnHandle = (e: React.MouseEvent, index: number) => {
		if (barRef.current) {
			boundingBox.current = barRef.current.getBoundingClientRect()
			setSelectedColor(index)
			setDragging(true)
			lastEvent.current = e.nativeEvent
		}
	}

	return (
		<div
			ref={barRef}
			style={{
				width: '100%',
				marginTop: 17,
				marginBottom: 4,
				position: 'relative',
			}}
			id={`rbgcp-gradient-bar${pickerIdSuffix}`}
		>
			<div
				style={{
					height: 14,
					borderRadius: 10,
					width: squareWidth,
					backgroundImage: force90degLinear(value),
				}}
				onMouseDown={handleMouseDownOnBar}
				id={`rbgcp-gradient-bar-canvas${pickerIdSuffix}`}
			/>
			{colors?.map((c: any, i) => (
				<Handle
					i={i}
					left={c.left}
					key={`${i}-${c.value}`}
					isSelected={selectedColor === i}
					onMouseDown={handleMouseDownOnHandle}
				/>
			))}
		</div>
	)
}

export default GradientBar
