import React, { useCallback, useEffect, useRef, useState } from 'react'
import tinycolor from 'tinycolor2'
import { usePicker } from '../context'
import usePaintHue from '../hooks/use-paint-hue'

const Hue = () => {
	const barRef = useRef<HTMLCanvasElement>(null!)
	const { config, handleChange, squareWidth, hc, setHc, pickerIdSuffix } =
		usePicker()
	const hueRef = useRef<HTMLDivElement>(null)
	const handleRef = useRef<HTMLDivElement>(null!)
	const boundingBox = useRef<DOMRect | null>(null)
	const rafPending = useRef(false)
	const lastEvent = useRef<MouseEvent | null>(null)
	const [dragging, setDragging] = useState<boolean>(false)
	const { barSize: _barSize } = config
	usePaintHue(barRef, squareWidth)

	useEffect(() => {
		if (!dragging && handleRef.current) {
			const x = hc?.h * (squareWidth / 360)
			const handleLeft = Math.max(0, Math.min(x - 9, squareWidth - 18))
			handleRef.current.style.transform = `translateX(${handleLeft}px)`
			handleRef.current.style.backgroundColor = `hsl(${hc?.h}, 100%, 50%)`
		}
	}, [hc?.h, dragging, squareWidth])

	const updateOnFrame = useCallback(() => {
		if (!lastEvent.current || !boundingBox.current || !handleRef.current) {
			rafPending.current = false
			return
		}

		let x = lastEvent.current.clientX - boundingBox.current.left
		x = Math.max(0, Math.min(x, boundingBox.current.width))
		const newHue = (x / boundingBox.current.width) * 360

		const handleLeft = Math.max(0, Math.min(x - 9, squareWidth - 18))
		handleRef.current.style.transform = `translateX(${handleLeft}px)`
		handleRef.current.style.backgroundColor = `hsl(${newHue}, 100%, 50%)`

		const tinyHsv = tinycolor({ h: newHue, s: hc?.s, v: hc?.v })
		const { r, g, b } = tinyHsv.toRgb()
		handleChange(`rgba(${r}, ${g}, ${b}, ${hc.a})`)
		setHc({ ...hc, h: newHue })

		rafPending.current = false
	}, [hc, handleChange, setHc, squareWidth])

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

	const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
		if (hueRef.current) {
			boundingBox.current = hueRef.current.getBoundingClientRect()
			setDragging(true)
			lastEvent.current = e.nativeEvent
			window.requestAnimationFrame(() => {
				updateOnFrame()
			})
		}
	}

	return (
		<div
			ref={hueRef}
			style={{
				height: 14,
				marginTop: 17,
				marginBottom: 4,
				cursor: 'ew-resize',
				position: 'relative',
			}}
			onMouseDown={handleMouseDown}
			id={`rbgcp-hue-wrap${pickerIdSuffix}`}
		>
			<div
				ref={handleRef}
				tabIndex={0}
				role="button"
				style={{
					border: '2px solid white',
					borderRadius: '50%',
					boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.5)',
					width: '18px',
					height: '18px',
					zIndex: 1000,
					transition: 'all 10ms linear',
					position: 'absolute',
					top: -2,
					cursor: 'ew-resize',
					boxSizing: 'border-box',
				}}
				id={`rbgcp-hue-handle${pickerIdSuffix}`}
			/>
			<canvas
				ref={barRef}
				height="14px"
				width={`${squareWidth}px`}
				id={`rbgcp-hue-bar${pickerIdSuffix}`}
				style={{
					borderRadius: 14,
					position: 'relative',
					verticalAlign: 'top',
				}}
			/>
		</div>
	)
}

export default Hue
