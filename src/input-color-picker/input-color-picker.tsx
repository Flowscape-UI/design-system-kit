import { Eye, EyeOff, Trash2, X } from 'lucide-react'
import { useRef, useState } from 'react'
import { ColorPicker } from '../color-picker'
import { InputHex } from '../input-hex'
import { cn } from '../shared/utils/cn'
import { useColorPickerState } from './hooks/use-color-picker-state'
import { useDraggable } from './hooks/use-draggable'
import type { InputColorPickerProps } from './types'
import { createDisplayColor, opacityToHex } from './utils/color-utils'

const THEME_CLASSES = {
	light: {
		container: 'bg-white border-gray-300 focus-within:ring-blue-500',
		text: 'text-gray-900',
		textMuted: 'text-gray-600',
		input: 'text-gray-900',
		icon: 'text-gray-600',
		dragArea: 'bg-gray-100 hover:bg-gray-200',
		preview: 'border-gray-300',
		divider: 'bg-gray-300',
	},
	dark: {
		container:
			'dark:bg-gray-800 dark:border-gray-600 dark:focus-within:ring-blue-400',
		text: 'dark:text-gray-200',
		textMuted: 'dark:text-gray-400',
		input: 'dark:text-gray-100',
		icon: 'dark:text-gray-300',
		dragArea: 'dark:bg-gray-700 dark:hover:bg-gray-600',
		preview: 'dark:border-gray-600',
		divider: 'dark:bg-gray-600',
	},
} as const

interface OpacityDragControlProps {
	opacity: number
	onChange: (value: number) => void
}

const OpacityDragControl = ({ opacity, onChange }: OpacityDragControlProps) => {
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
				THEME_CLASSES.light.textMuted,
				THEME_CLASSES.dark.textMuted,
				'hover:text-gray-900 dark:hover:text-white',
				isDragging && 'text-gray-900 dark:text-white'
			)}
		>
			{opacity}%
		</button>
	)
}

export const InputColorPicker = ({
	title = 'Background Color',
	className,
	classNameGradientInput,
	value = 'rgba(255,255,255,1)',
	onChange,
	onShowPicker,
	onHideBackground,
	onOpacityChange,
	onDeleteBackground,
	showOpacity = true,
	showGradient = false,
	pickerSize = 250,
}: InputColorPickerProps) => {
	const [isPickerOpen, setIsPickerOpen] = useState(false)
	const [isBackgroundHidden, setIsBackgroundHidden] = useState(false)
	const pickerRef = useRef<HTMLDivElement>(null)

	const {
		hex,
		color,
		inputValue,
		livePreviewColor,
		colorType,
		opacityValue,
		handleInputChange,
		handleInputFocus: _handleInputFocus,
		handleHexChange: _handleHexChange,
		handleOpacityChange,
		handleColorChange,
	} = useColorPickerState({ value, onChange, onOpacityChange })

	const { position, handleDragStart, resetPosition } = useDraggable()

	const handleTogglePicker = () => {
		if (!isPickerOpen) {
			resetPosition()
		}
		onShowPicker?.(!isPickerOpen)
		setIsPickerOpen(prev => !prev)
	}

	const displayColor = createDisplayColor(livePreviewColor, opacityValue)

	const handleCopyGradient = async () => {
		if (colorType === 'gradient' && color) {
			try {
				await navigator.clipboard.writeText(color)
			} catch (err) {
				console.error('Failed to copy gradient:', err)
			}
		}
	}

	return (
		<div className="w-fit">
			<div
				className={cn(
					'flex items-center justify-between rounded-md p-1 border',
					THEME_CLASSES.light.container,
					THEME_CLASSES.dark.container,
					className
				)}
			>
				{colorType === 'color' ? (
					<div className="flex items-center gap-1 w-full">
						<button
							onClick={handleTogglePicker}
							className="relative size-5 rounded-sm overflow-hidden bg-white"
						>
							<div
								className="absolute inset-0"
								style={{
									backgroundImage:
										"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cg fill='%23d1d1d1'%3E%3Cpath fill-rule='evenodd' d='M0 0h4v4H0V0zm4 4h4v4H4V4z'/%3E%3C/g%3E%3C/svg%3E\")",
								}}
							/>
							<div
								className="absolute inset-0"
								style={{
									background: displayColor,
								}}
							/>
						</button>
						<InputHex
							hexColor={`#${hex.replace('#', '')}${opacityToHex(opacityValue)}`}
							handleChange={newHex => {
								const cleanHex = newHex.replace('#', '').toUpperCase()

								// Извлекаем base color (первые 6 символов)
								const baseColor = cleanHex.slice(0, 6)

								// Извлекаем alpha (последние 2 символа, если есть)
								let newOpacity = opacityValue
								if (cleanHex.length >= 8) {
									const alphaHex = cleanHex.slice(6, 8)
									const parsedOpacity = Math.round(
										(parseInt(alphaHex, 16) / 255) * 100
									)
									if (
										!isNaN(parsedOpacity) &&
										parsedOpacity >= 0 &&
										parsedOpacity <= 100
									) {
										newOpacity = parsedOpacity
										handleOpacityChange(parsedOpacity)
									}
								}

								// Обновляем основной цвет только если он валидный
								if (
									baseColor.length === 6 &&
									/^[0-9A-F]{6}$/i.test(baseColor)
								) {
									// Конвертируем HEX в RGB
									const r = parseInt(baseColor.slice(0, 2), 16)
									const g = parseInt(baseColor.slice(2, 4), 16)
									const b = parseInt(baseColor.slice(4, 6), 16)
									const newRgbaColor = `rgba(${r}, ${g}, ${b}, ${newOpacity / 100})`

									// Обновляем состояние
									onChange?.(newRgbaColor)
									handleInputChange({
										target: { value: baseColor },
									} as any)
								}
							}}
							showAlpha={true}
							className="ml-1 bg-transparent border-none h-auto focus-within:ring-0 flex-1"
							classNameInput={cn(
								'bg-transparent px-2 font-mono text-xs',
								THEME_CLASSES.light.text,
								THEME_CLASSES.dark.text
							)}
							// disabled={hex === 'Mixed'}
						/>
					</div>
				) : (
					<div className="flex items-center gap-1 w-full">
						<button
							onClick={handleTogglePicker}
							className="relative size-5 rounded-sm overflow-hidden bg-white flex-shrink-0"
						>
							<div
								className="absolute inset-0"
								style={{
									backgroundImage:
										"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cg fill='%23d1d1d1'%3E%3Cpath fill-rule='evenodd' d='M0 0h4v4H0V0zm4 4h4v4H4V4z'/%3E%3C/g%3E%3C/svg%3E\")",
								}}
							/>
							<div
								className="absolute inset-0"
								style={{
									background: displayColor,
								}}
							/>
						</button>
						<button
							onClick={handleCopyGradient}
							className={cn(
								'outline-none px-2 font-mono text-xs flex-1 text-left cursor-pointer hover:opacity-70 transition-opacity min-w-[187px]',
								THEME_CLASSES.light.text,
								THEME_CLASSES.dark.text,
								classNameGradientInput
							)}
							title="Click to copy"
						>
							{inputValue}
						</button>
					</div>
				)}

				<div className="inline-flex items-center gap-0.5">
					<OpacityDragControl
						opacity={opacityValue}
						onChange={handleOpacityChange}
					/>
					<div
						className={cn(
							'w-px h-4 mx-1',
							THEME_CLASSES.light.divider,
							THEME_CLASSES.dark.divider
						)}
					/>
					<button
						onClick={() => {
							onHideBackground?.(!isBackgroundHidden)
							setIsBackgroundHidden(!isBackgroundHidden)
						}}
						className={cn(
							'p-1',
							THEME_CLASSES.light.textMuted,
							THEME_CLASSES.dark.textMuted,
							'hover:text-gray-900 dark:hover:text-white'
						)}
					>
						{isBackgroundHidden ? <EyeOff size={14} /> : <Eye size={14} />}
					</button>
					<button
						onClick={onDeleteBackground}
						className={cn(
							'p-1',
							THEME_CLASSES.light.textMuted,
							THEME_CLASSES.dark.textMuted,
							'hover:text-gray-900 dark:hover:text-white'
						)}
					>
						<Trash2 size={14} />
					</button>
				</div>
			</div>

			{isPickerOpen && (
				<div
					ref={pickerRef}
					className="fixed z-50 bg-[#202020] overflow-hidden rounded-md"
					style={{
						top: `${position.top}px`,
						left: `${position.left}px`,
						transform: 'translate(-50%, -50%)',
					}}
				>
					<header
						className="flex items-center justify-between mb-2 py-1 cursor-move pl-3 pr-1"
						onMouseDown={e => handleDragStart(e, pickerRef.current)}
					>
						<span className="text-gray-200 font-mono text-xs select-none">
							{title}
						</span>
						<button
							className="text-gray-400 hover:text-white"
							onClick={() => setIsPickerOpen(false)}
						>
							<X size={22} />
						</button>
					</header>

					<div className="px-3 pb-3">
						<ColorPicker
							className="mx-auto"
							value={color}
							width={pickerSize}
							height={pickerSize}
							hideOpacity={!showOpacity}
							hideGradientControls={!showGradient}
							onChange={handleColorChange}
						/>
					</div>
				</div>
			)}
		</div>
	)
}
