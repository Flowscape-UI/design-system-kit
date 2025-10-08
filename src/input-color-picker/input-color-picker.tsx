import { Eye, EyeOff, Trash2, X } from 'lucide-react'
import { useRef, useState } from 'react'
import { ColorPicker } from '../color-picker'
import { InputNumberSelect } from '../input-number-select'
import { cn } from '../shared/utils/cn'
import { useColorPickerState } from './hooks/use-color-picker-state'
import { useDraggable } from './hooks/use-draggable'
import type { InputColorPickerProps } from './types'
import { createDisplayColor } from './utils/color-utils'

export const InputColorPicker = ({
	title = 'Background Color',
	className,
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
		handleInputFocus,
		handleHexChange,
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

	return (
		<div className="w-fit">
			<div
				className={cn(
					'flex items-center justify-between bg-[#3D3D3D] rounded-md p-1 border border-transparent',
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
									opacity: opacityValue / 100,
								}}
							/>
						</button>
						<input
							type="text"
							value={inputValue}
							onChange={handleInputChange}
							onFocus={handleInputFocus}
							onBlur={handleHexChange}
							onKeyDown={e => {
								if (e.key === 'Enter') {
									handleHexChange()
									;(e.target as HTMLInputElement).blur()
								}
							}}
							className="bg-transparent outline-none px-2 text-gray-200 font-mono text-xs"
							disabled={hex === 'Mixed'}
						/>
					</div>
				) : (
					<button
						onClick={handleTogglePicker}
						className="inline-flex items-center gap-1 w-full"
					>
						<div className="relative size-5 rounded-sm overflow-hidden">
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
									opacity: opacityValue / 100,
								}}
							/>
						</div>
						<span className="outline-none px-2 text-gray-200 font-mono text-xs">
							{inputValue}
						</span>
					</button>
				)}

				<div className="inline-flex items-center">
					<InputNumberSelect
						value={opacityValue}
						onChange={value => handleOpacityChange(Number(value) || 0)}
						step={1}
						min={0}
						icon="%"
						max={100}
						className="bg-transparent dark:bg-transparent flex-row-reverse px-0 py-0 h-4 outline-none border-none font-mono text-xs text-gray-400"
						classNameInput="w-10 text-gray-400 font-mono text-xs px-0 py-0 text-right"
					/>
					<div className="w-px h-4 bg-gray-600 mx-1" />
					<button
						onClick={() => {
							onHideBackground?.(!isBackgroundHidden)
							setIsBackgroundHidden(!isBackgroundHidden)
						}}
						className="p-1 text-gray-400 hover:text-white"
					>
						{isBackgroundHidden ? <EyeOff size={14} /> : <Eye size={14} />}
					</button>
					<button
						onClick={onDeleteBackground}
						className="p-1 text-gray-400 hover:text-white"
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
