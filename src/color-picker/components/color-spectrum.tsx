import { useCallback, useEffect, useRef, useState } from 'react'
import tinycolor from 'tinycolor2'
import { usePicker } from '../context'
import { computeSquareXY } from '../utils/utils'

const ColorSpectrum = () => {
	const {
		hc,
		config,
		squareWidth,
		squareHeight,
		handleChange,
		currentColor,
		defaultStyles,
		pickerIdSuffix,
	} = usePicker()
	const { crossSize } = config
	const [dragging, setDragging] = useState(false)
	const canvas = useRef<HTMLCanvasElement>(null)
	const squareRef = useRef<HTMLDivElement>(null)
	const boundingBox = useRef<DOMRect | null>(null)
	const rafPending = useRef(false)
	const lastEvent = useRef<MouseEvent | null>(null)
	const [x, y] = computeSquareXY(
		hc?.s,
		hc?.v * 100,
		squareWidth,
		squareHeight,
		crossSize
	)
	const [dragPos, setDragPos] = useState({ x, y })

	useEffect(() => {
		if (canvas.current) {
			const ctx = canvas.current.getContext('2d', { willReadFrequently: true })
			if (ctx) {
				ctx.fillStyle = `hsl(${hc?.h}, 100%, 50%)`
				ctx.fillRect(0, 0, squareWidth, squareHeight)
				const gradientWhite = ctx.createLinearGradient(0, 0, squareWidth, 0)
				gradientWhite.addColorStop(0, `rgba(255, 255, 255, 1)`)
				gradientWhite.addColorStop(1, `rgba(255, 255, 255, 0)`)
				ctx.fillStyle = gradientWhite
				ctx.fillRect(0, 0, squareWidth, squareHeight)
				const gradientBlack = ctx.createLinearGradient(0, 0, 0, squareHeight)
				gradientBlack.addColorStop(0, `rgba(0, 0, 0, 0)`)
				gradientBlack.addColorStop(1, `rgba(0, 0, 0, 1)`)
				ctx.fillStyle = gradientBlack
				ctx.fillRect(0, 0, squareWidth, squareHeight)
			}
		}
	}, [canvas, hc?.h, squareWidth, squareHeight])

	useEffect(() => {
		if (!dragging) {
			const [newX, newY] = computeSquareXY(
				hc?.s,
				hc?.v * 100,
				squareWidth,
				squareHeight,
				crossSize
			)
			if (hc?.v === 0) {
				setDragPos(current => ({ x: current.x, y: newY }))
			} else {
				setDragPos({ x: newX, y: newY })
			}
		}
	}, [hc?.s, hc?.v, squareWidth, squareHeight, crossSize, dragging])

	const updateOnFrame = useCallback(() => {
		if (!lastEvent.current || !boundingBox.current) {
			rafPending.current = false
			return
		}
		const { left, top, width, height } = boundingBox.current
		let x = lastEvent.current.clientX - left
		let y = lastEvent.current.clientY - top

		x = Math.max(0, Math.min(x, width))
		y = Math.max(0, Math.min(y, height))

		const newS = (x / width) * 100
		const newV = 100 - (y / height) * 100
		setDragPos({ x: x - crossSize / 2, y: y - crossSize / 2 })
		const updated = tinycolor(`hsva(${hc?.h}, ${newS}%, ${newV}%, ${hc?.a})`)
		handleChange(updated.toRgbString())

		rafPending.current = false
	}, [crossSize, hc?.h, hc?.a, handleChange])

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
			window.addEventListener('mousemove', onMouseMove)
			window.addEventListener('mouseup', onMouseUp)
		}

		return () => {
			window.removeEventListener('mousemove', onMouseMove)
			window.removeEventListener('mouseup', onMouseUp)
		}
	}, [dragging, updateOnFrame])

	const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
		if (squareRef.current) {
			boundingBox.current = squareRef.current.getBoundingClientRect()
			setDragging(true)
			lastEvent.current = e.nativeEvent
			window.requestAnimationFrame(() => {
				updateOnFrame()
			})
		}
	}

	return (
		<div
			style={{ position: 'relative', marginBottom: 12 }}
			id={`rbgcp-square-wrapper${pickerIdSuffix}`}
		>
			<div
				ref={squareRef}
				onMouseDown={handleMouseDown}
				id={`rbgcp-square${pickerIdSuffix}`}
				style={{
					position: 'relative',
				}}
			>
				<div
					style={{
						...defaultStyles.rbgcpHandle,
						transform: `translate(${dragPos?.x ?? 0}px, ${dragPos?.y ?? 0}px)`,
						backgroundColor: currentColor,
					}}
					id={`rbgcp-square-handle${pickerIdSuffix}`}
				/>

				<div
					style={{ ...defaultStyles.rbgcpCanvasWrapper, height: squareHeight }}
					id={`rbgcp-square-canvas-wrapper${pickerIdSuffix}`}
				>
					<canvas
						ref={canvas}
						width={`${squareWidth}px`}
						height={`${squareHeight}px`}
						id={`rbgcp-square-canvas${pickerIdSuffix}`}
					/>
				</div>
			</div>
		</div>
	)
}

export default ColorSpectrum
