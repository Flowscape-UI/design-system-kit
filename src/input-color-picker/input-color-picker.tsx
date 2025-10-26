import { useRef, useState } from 'react'
import { ColorPicker } from '../color-picker'
import { InputHex } from '../input-hex'
import { ActionButtons } from '../shared/components/action-buttons/action-buttons'
import { ColorPreview } from '../shared/components/color-preview/color-preview'
import { useImageActions } from '../shared/components/image-input'
import { InputSelectModal } from '../shared/components/input-select-modal/input-select-modal'
import { TextButton } from '../shared/components/text-button/text-button'
import { INPUT_THEME_CLASSES } from '../shared/constants/input-theme'
import { useDraggable } from '../shared/hooks/use-draggable'
import { cn } from '../shared/utils/cn'
import { createDisplayColor, opacityToHex } from '../shared/utils/color-utils'
import { useColorPickerState } from './hooks/use-color-picker-state'
import type { InputColorPickerProps } from './types'

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
	const pickerRef = useRef<HTMLDivElement>(null)

	const { isHidden, handleToggleHide, handleDelete } = useImageActions(
		onHideBackground,
		onDeleteBackground
	)

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

	const { resetPosition } = useDraggable()

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
					INPUT_THEME_CLASSES.light.container,
					INPUT_THEME_CLASSES.dark.container,
					className
				)}
			>
				{colorType === 'color' ? (
					<div className="flex items-center gap-1 w-full">
						<ColorPreview color={displayColor} onClick={handleTogglePicker} />
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
								INPUT_THEME_CLASSES.light.text,
								INPUT_THEME_CLASSES.dark.text
							)}
						/>
					</div>
				) : (
					<div className="flex items-center gap-1 w-full">
						<ColorPreview color={displayColor} onClick={handleTogglePicker} />
						<TextButton
							onClick={handleCopyGradient}
							textLightClass={INPUT_THEME_CLASSES.light.text}
							textDarkClass={INPUT_THEME_CLASSES.dark.text}
							className={classNameGradientInput}
							title="Click to copy"
						>
							{inputValue}
						</TextButton>
					</div>
				)}

				<ActionButtons
					showOpacity={showOpacity}
					opacity={opacityValue}
					onOpacityChange={handleOpacityChange}
					isHidden={isHidden}
					onToggleVisibility={handleToggleHide}
					onDelete={handleDelete}
					dividerClassName={cn(
						INPUT_THEME_CLASSES.light.divider,
						INPUT_THEME_CLASSES.dark.divider
					)}
				/>
			</div>

			{isPickerOpen && (
				<InputSelectModal
					title={title}
					onClose={() => setIsPickerOpen(false)}
					inputRef={pickerRef}
				>
					<ColorPicker
						className="mx-auto"
						value={color}
						width={pickerSize}
						height={pickerSize}
						hideOpacity={!showOpacity}
						hideGradientControls={!showGradient}
						onChange={handleColorChange}
					/>
				</InputSelectModal>
			)}
		</div>
	)
}
