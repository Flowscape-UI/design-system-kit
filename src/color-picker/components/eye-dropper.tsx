import domtoimage from 'dom-to-image-more'
import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import tc from 'tinycolor2'
import { usePicker } from '../context'
import { controlBtnStyles } from '../styles/styles'
import Portal from './Portal'

const Magnifier = ({
	mousePos,
	currentColor,
	imageData,
	size = 120,
	gridSize = 9,
}: {
	mousePos: { x: number; y: number }
	currentColor: string
	imageData: string
	size?: number
	gridSize?: number
}) => {
	const canvasRef = useRef<HTMLCanvasElement>(null)
	const { r, g, b } = tc(currentColor).toRgb()
	const hex = tc(currentColor).toHexString().toUpperCase()

	useEffect(() => {
		const canvas = canvasRef.current
		const ctx = canvas?.getContext('2d')
		const img = new Image()
		img.src = imageData
		img.onload = () => {
			if (!ctx) return
			ctx.imageSmoothingEnabled = false
			ctx.clearRect(0, 0, size, size)

			const halfGrid = Math.floor(gridSize / 2)
			const sx = mousePos.x - halfGrid
			const sy = mousePos.y - halfGrid

			ctx.drawImage(img, sx, sy, gridSize, gridSize, 0, 0, size, size)

			const pixelSize = size / gridSize
			ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)'
			ctx.lineWidth = 0.5
			for (let i = 0; i < gridSize; i++) {
				ctx.beginPath()
				ctx.moveTo(i * pixelSize, 0)
				ctx.lineTo(i * pixelSize, size)
				ctx.stroke()
				ctx.beginPath()
				ctx.moveTo(0, i * pixelSize)
				ctx.lineTo(size, i * pixelSize)
				ctx.stroke()
			}

			ctx.strokeStyle = 'white'
			ctx.lineWidth = 2
			ctx.strokeRect(
				halfGrid * pixelSize,
				halfGrid * pixelSize,
				pixelSize,
				pixelSize
			)
		}
	}, [mousePos, currentColor, imageData, size, gridSize])

	const magnifierWidth = 280
	const magnifierHeight = 84
	const offset = 20

	const yPos =
		typeof window !== 'undefined' && mousePos.y < window.innerHeight / 2
			? mousePos.y + offset
			: mousePos.y - magnifierHeight - offset

	const xPos =
		typeof window !== 'undefined' && mousePos.x < window.innerWidth / 2
			? mousePos.x + offset
			: mousePos.x - magnifierWidth - offset

	const magnifierStyle: React.CSSProperties = {
		position: 'fixed',
		top: 0,
		left: 0,
		width: magnifierWidth,
		height: magnifierHeight,
		backgroundColor: '#2D2D2D',
		borderRadius: 12,
		border: '1px solid rgba(255, 255, 255, 0.1)',
		boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
		display: 'flex',
		alignItems: 'center',
		padding: '8px',
		color: 'white',
		fontFamily: 'sans-serif',
		zIndex: 100000,
		pointerEvents: 'none',
	}

	const transition = {
		duration: 0.4,
		ease: [0.23, 1, 0.32, 1] as const,
	}

	const canvasContainerStyle: React.CSSProperties = {
		width: 68,
		height: 68,
		borderRadius: 8,
		overflow: 'hidden',
		marginRight: 12,
		border: '1px solid rgba(255, 255, 255, 0.1)',
	}

	return (
		<motion.div
			style={magnifierStyle}
			initial={false}
			animate={{ x: xPos, y: yPos }}
			transition={transition}
		>
			<div style={canvasContainerStyle}>
				<canvas
					ref={canvasRef}
					width={size}
					height={size}
					style={{ width: '100%', height: '100%' }}
				/>
			</div>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
				}}
			>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						marginBottom: 4,
					}}
				>
					<div
						style={{
							width: 20,
							height: 20,
							backgroundColor: currentColor,
							borderRadius: 4,
							marginRight: 8,
							border: '1px solid rgba(255, 255, 255, 0.1)',
						}}
					/>
					<div style={{ display: 'flex', flexDirection: 'column' }}>
						<div
							style={{
								fontSize: 14,
								fontWeight: '500',
								letterSpacing: '0.5px',
							}}
						>{`RGB ${r} ${g} ${b}`}</div>
						<div
							style={{
								fontSize: 12,
								color: '#9E9E9E',
								letterSpacing: '0.5px',
							}}
						>
							{hex}
						</div>
					</div>
				</div>
				<div
					style={{ display: 'flex', alignItems: 'center', color: '#9E9E9E' }}
				>
					<DropperIcon color="#9E9E9E" />
					<div style={{ fontSize: 12, marginLeft: 4 }}>Click to sample</div>
				</div>
			</div>
		</motion.div>
	)
}

const DropperIcon = ({ color }: { color: string }) => {
	const { defaultStyles } = usePicker()
	const col = color ?? ''
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			style={{ width: 16 }}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				style={{
					fill: 'none',
					strokeWidth: '1.4px',
					...defaultStyles.rbgcpControlIcon,
					...(col && { stroke: col }),
				}}
				d="M15.6,7h0L7.78,14.86c-.37.37-1.61.38-2,.75s-.5,1.53-.76,2a3.53,3.53,0,0,1-.52.52,1.6,1.6,0,0,1-2.27-.06l-.32-.32a1.61,1.61,0,0,1-.06-2.27A3.25,3.25,0,0,1,2.4,15c.47-.26,1.65-.35,2-.73s.34-1.64.71-2c1.68-1.73,5.61-5.65,7.91-7.93h0l1.14,1.38L15.6,7Z"
			/>
			<polygon
				strokeLinecap="round"
				strokeLinejoin="round"
				style={{
					strokeWidth: '1.4px',
					...defaultStyles.rbgcpControlIcon2,
					...(col && { stroke: col, fill: col }),
				}}
				points="15.7 8.87 11.13 4.29 12.69 2.73 17.25 7.31 15.7 8.87"
			/>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				style={{
					strokeWidth: '1.4px',
					...defaultStyles.rbgcpControlIcon2,
					...(col && { stroke: col, fill: col }),
				}}
				d="M18.18,3.71,16.36,5.53a1.33,1.33,0,0,1-1.88,0h0a1.34,1.34,0,0,1,0-1.89l1.81-1.82a1.34,1.34,0,0,1,1.89,0h0A1.34,1.34,0,0,1,18.18,3.71Z"
			/>
		</svg>
	)
}

const Dropper = ({ onSelect }: { onSelect: (arg0: string) => void }) => {
	const { defaultStyles } = usePicker()
	const [isPicking, setIsPicking] = useState(false)
	const [imageData, setImageData] = useState<string | null>(null)
	const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
	const [currentColor, setCurrentColor] = useState<string | null>(null)
	const canvasRef = useRef<HTMLCanvasElement | null>(null)

	useEffect(() => {
		if (!imageData) {
			canvasRef.current = null
			return
		}

		const canvas = document.createElement('canvas')
		const ctx = canvas.getContext('2d')
		const img = new Image()
		img.src = imageData
		img.onload = () => {
			canvas.width = img.width
			canvas.height = img.height
			ctx?.drawImage(img, 0, 0, img.width, img.height)
			canvasRef.current = canvas
		}
	}, [imageData])

	const legacyEyeDropper = async () => {
		setIsPicking(true)
		document.body.style.cursor = 'crosshair'
		const styleEl = document.createElement('style')
		styleEl.innerHTML =
			'* { border: none !important; box-shadow: none !important; outline: none !important; }'
		document.head.appendChild(styleEl)
		try {
			const dataUrl = await domtoimage.toSvg(document.body, {
				width: document.body.clientWidth,
				height: document.body.clientHeight,
				cacheBust: true,
				filter: (node: HTMLElement) => {
					if (node.id === 'rbgcp-eyedropper-btn') return false
					return true
				},
			})
			setImageData(dataUrl)
		} catch (e) {
			console.error('Could not take a screenshot.', e)
			setIsPicking(false)
			document.body.style.cursor = 'default'
		} finally {
			document.head.removeChild(styleEl)
		}
	}

	const getEyeDrop = async () => {
		legacyEyeDropper()
	}

	const handleMouseMove = (e: React.MouseEvent) => {
		const canvas = canvasRef.current
		const ctx = canvas?.getContext('2d')
		if (!ctx) return

		const x = e.clientX
		const y = e.clientY
		setMousePos({ x, y })

		const pixelData = ctx.getImageData(x, y, 1, 1).data
		setCurrentColor(
			`rgba(${pixelData[0]}, ${pixelData[1]}, ${pixelData[2]}, 1)`
		)
	}

	const handleImageClick = () => {
		if (currentColor) {
			onSelect(currentColor)
			const hex = tc(currentColor).toHexString().toUpperCase()
			navigator.clipboard.writeText(hex).catch(err => {
				console.error('Failed to copy text: ', err)
			})
		}
		setIsPicking(false)
		setImageData(null)
		setCurrentColor(null)
		document.body.style.cursor = 'default'
	}

	const cancelPicking = (e: React.MouseEvent) => {
		e.preventDefault()
		setIsPicking(false)
		setImageData(null)
		setCurrentColor(null)
		document.body.style.cursor = 'default'
	}

	return (
		<div data-rbgcp-ignore="true">
			<div
				onClick={getEyeDrop}
				id="rbgcp-eyedropper-btn"
				style={{
					...defaultStyles.rbgcpEyedropperBtn,
					...controlBtnStyles(isPicking, defaultStyles),
				}}
			>
				<DropperIcon color={isPicking ? 'rgb(86, 140, 245)' : ''} />
			</div>
			{isPicking && imageData && (
				<Portal>
					<img
						src={imageData}
						alt="Color picker screenshot"
						style={{
							position: 'fixed',
							top: 0,
							left: 0,
							width: '100%',
							height: '100%',
							cursor: 'crosshair',
							zIndex: 99999,
						}}
						onClick={handleImageClick}
						onMouseMove={handleMouseMove}
						onContextMenu={cancelPicking}
					/>
					{currentColor && (
						<Magnifier
							mousePos={mousePos}
							currentColor={currentColor}
							imageData={imageData}
						/>
					)}
				</Portal>
			)}
		</div>
	)
}

export default Dropper
