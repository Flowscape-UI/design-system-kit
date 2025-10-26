import React, { useCallback, useEffect, useRef, useState } from 'react'
import { usePicker } from '../context'

const Opacity = () => {
	const {
		hc = {},
		squareWidth,
		handleChange,
		defaultStyles,
		pickerIdSuffix,
	} = usePicker()
	const [dragging, setDragging] = useState(false)
	const { r, g, b } = hc
	const bg = `linear-gradient(90deg, rgba(${r},${g},${b},0) 0%, rgba(${r},${g},${b},1) 100%)`
	const opacityRef = useRef<HTMLDivElement>(null)
	const handleRef = useRef<HTMLDivElement>(null!)
	const boundingBox = useRef<DOMRect | null>(null)
	const rafPending = useRef(false)
	const lastEvent = useRef<MouseEvent | null>(null)

	useEffect(() => {
		if (!dragging && handleRef.current) {
			const x = hc.a * squareWidth
			const handleLeft = Math.max(0, Math.min(x - 9, squareWidth - 18))
			handleRef.current.style.transform = `translateX(${handleLeft}px)`
		}
	}, [hc.a, dragging, squareWidth])

	const updateOnFrame = useCallback(() => {
		if (!lastEvent.current || !boundingBox.current || !handleRef.current) {
			rafPending.current = false
			return
		}

		let x = lastEvent.current.clientX - boundingBox.current.left
		x = Math.max(0, Math.min(x, boundingBox.current.width))

		const newO = x / boundingBox.current.width
		const newColor = `rgba(${r}, ${g}, ${b}, ${newO.toFixed(2)})`
		handleChange(newColor)

		const handleLeft = Math.max(0, Math.min(x - 9, squareWidth - 18))
		handleRef.current.style.transform = `translateX(${handleLeft}px)`

		rafPending.current = false
	}, [r, g, b, handleChange, squareWidth])

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
		if (opacityRef.current) {
			boundingBox.current = opacityRef.current.getBoundingClientRect()
			setDragging(true)
			lastEvent.current = e.nativeEvent
			window.requestAnimationFrame(() => {
				updateOnFrame()
			})
		}
	}

	return (
		<div
			ref={opacityRef}
			onMouseDown={handleMouseDown}
			style={{
				height: 14,
				marginTop: 17,
				marginBottom: 4,
				cursor: 'ew-resize',
				position: 'relative',
			}}
			id={`rbgcp-opacity-wrapper${pickerIdSuffix}`}
		>
			<div
				id={`rbgcp-opacity-checkered-bg${pickerIdSuffix}`}
				style={{ ...defaultStyles.rbgcpCheckered, width: '100%', height: 14 }}
			/>
			<div
				ref={handleRef}
				id={`rbgcp-opacity-handle${pickerIdSuffix}`}
				style={{ ...defaultStyles.rbgcpHandle, top: -2 }}
			/>
			<div
				style={{ ...defaultStyles.rbgcpOpacityOverlay, background: bg }}
				id={`rbgcp-opacity-overlay${pickerIdSuffix}`}
			/>
		</div>
	)
}

export default Opacity
