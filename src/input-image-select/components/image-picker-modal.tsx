import { RotateCw, Upload } from 'lucide-react'
import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { InputSelectModal } from '../../shared/components/input-select-modal/input-select-modal'
import { cn } from '../../shared/utils/cn'

const THEME_CLASSES = {
	light: {
		container: 'bg-white',
		text: 'text-gray-900',
		textMuted: 'text-gray-500',
		button: 'bg-blue-600 hover:bg-blue-700',
		overlay: 'bg-black/50',
		placeholder: 'bg-gray-200 text-gray-500',
	},
	dark: {
		container: 'dark:bg-gray-800',
		text: 'dark:text-gray-200',
		textMuted: 'dark:text-gray-400',
		button: 'dark:bg-blue-600 dark:hover:bg-blue-700',
		overlay: 'dark:bg-black/60',
		placeholder: 'dark:bg-gray-700 dark:text-gray-400',
	},
} as const

export interface ImageFilters {
	exposure: number
	contrast: number
	saturation: number
	temperature: number
	tint: number
	highlights: number
	shadows: number
}

interface ImagePickerModalProps {
	isOpen: boolean
	isRotateButtonActive: boolean
	onClose: () => void
	title: string
	imageUrl?: string
	opacityImage?: number
	imageHidden?: boolean
	onImageChange?: (file: File | null) => void
	filters?: ImageFilters
	onFiltersChange?: (filters: ImageFilters) => void
	rotation?: number
	onRotationChange?: (rotation: number) => void
	className?: string
	classNameContainer?: string
	classNameButton?: string
	classNameOverlay?: string
	classNamePlaceholder?: string
	classNameModal?: string
	classNameModalHeader?: string
	classNameModalTitle?: string
	classNameModalCloseButton?: string
	classNameModalContent?: string
}

export const ImagePickerModal = ({
	isOpen,
	isRotateButtonActive,
	onClose,
	title,
	imageUrl,
	opacityImage = 100,
	imageHidden,
	onImageChange,
	filters,
	onFiltersChange,
	rotation = 0,
	onRotationChange,
	className,
	classNameContainer,
	classNameButton,
	classNameOverlay,
	classNamePlaceholder,
	classNameModal,
	classNameModalHeader,
	classNameModalTitle,
	classNameModalCloseButton,
	classNameModalContent,
}: ImagePickerModalProps) => {
	const [previewUrl, setPreviewUrl] = useState<string | undefined>(imageUrl)
	const [localFilters, setLocalFilters] = useState<ImageFilters>(
		filters || {
			exposure: 0,
			contrast: 0,
			saturation: 0,
			temperature: 0,
			tint: 0,
			highlights: 0,
			shadows: 0,
		}
	)
	const fileInputRef = useRef<HTMLInputElement>(null)
	const modalRef = useRef<HTMLDivElement>(null)

	const clamp = (value: number, min: number, max: number) =>
		Math.min(Math.max(value, min), max)
	const [rotationAngle, setRotationAngle] = useState(rotation)

	useEffect(() => {
		setPreviewUrl(imageUrl)
	}, [imageUrl])

	useEffect(() => {
		if (filters) {
			setLocalFilters(filters)
		}
	}, [filters])

	useEffect(() => {
		setRotationAngle(rotation)
	}, [rotation])

	const handleFilterChange = (key: keyof ImageFilters, value: number) => {
		const newFilters = { ...localFilters, [key]: value }
		setLocalFilters(newFilters)
		onFiltersChange?.(newFilters)
	}

	const handleRotate = () => {
		const nextRotation = (rotationAngle + 90) % 360
		setRotationAngle(nextRotation)
		onRotationChange?.(nextRotation)
	}

	const getFilterStyle = () => {
		const highlightsBoost = localFilters.highlights / 100
		const shadowsBoost = localFilters.shadows / 100

		const brightness = clamp(
			1 +
				localFilters.exposure / 100 +
				Math.max(highlightsBoost, 0) * 0.4 -
				Math.max(shadowsBoost, 0) * 0.5 +
				Math.max(-shadowsBoost, 0) * 0.3 -
				Math.max(-highlightsBoost, 0) * 0.3,
			0.1,
			3
		)
		const contrast = clamp(
			1 +
				localFilters.contrast / 100 +
				Math.max(highlightsBoost, 0) * 0.3 +
				Math.max(shadowsBoost, 0) * 0.4 -
				Math.max(-highlightsBoost, 0) * 0.3 -
				Math.max(-shadowsBoost, 0) * 0.4,
			0.1,
			4
		)
		const saturate = clamp(1 + localFilters.saturation / 100, 0, 4)
		const hueRotate = localFilters.temperature * 0.6

		return {
			filter: `brightness(${brightness}) contrast(${contrast}) saturate(${saturate}) hue-rotate(${hueRotate}deg)`,
		}
	}

	const getTintOverlayStyle = (): CSSProperties | null => {
		if (!localFilters.tint) return null
		const intensity = Math.min(Math.abs(localFilters.tint) / 100, 1)
		const hue = localFilters.tint >= 0 ? 120 : 300
		return {
			backgroundColor: `hsla(${hue}, 100%, 50%, ${intensity * 0.5})`,
			mixBlendMode: 'color',
			opacity: intensity * 0.6,
		}
	}

	const getHighlightsOverlayStyle = (): CSSProperties | null => {
		if (!localFilters.highlights) return null
		const value = localFilters.highlights
		const intensity = Math.min(Math.abs(value) / 100, 1)
		if (value > 0) {
			return {
				backgroundColor: 'rgba(255, 255, 255, 1)',
				mixBlendMode: 'screen',
				opacity: intensity * 0.5,
			}
		}
		return {
			backgroundColor: 'rgba(0, 0, 0, 1)',
			mixBlendMode: 'multiply',
			opacity: intensity * 0.4,
		}
	}

	const getShadowsOverlayStyle = (): CSSProperties | null => {
		if (!localFilters.shadows) return null
		const value = localFilters.shadows
		const intensity = Math.min(Math.abs(value) / 100, 1)
		if (value > 0) {
			return {
				backgroundColor: 'rgba(0, 0, 0, 1)',
				mixBlendMode: 'multiply',
				opacity: intensity * 0.6,
			}
		}
		return {
			backgroundColor: 'rgba(255, 255, 255, 1)',
			mixBlendMode: 'screen',
			opacity: intensity * 0.4,
		}
	}

	const tintOverlayStyle = getTintOverlayStyle()
	const highlightsOverlayStyle = getHighlightsOverlayStyle()
	const shadowsOverlayStyle = getShadowsOverlayStyle()

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0]
		if (file) {
			const reader = new FileReader()
			reader.onloadend = () => {
				setPreviewUrl(reader.result as string)
			}
			reader.readAsDataURL(file)
			onImageChange?.(file)
		}
	}

	const handleUploadClick = () => {
		fileInputRef.current?.click()
	}

	if (!isOpen) return null

	return (
		<InputSelectModal
			title={title}
			onClose={onClose}
			inputRef={modalRef}
			className={classNameModal}
			classNameHeader={classNameModalHeader}
			classNameTitle={classNameModalTitle}
			classNameCloseButton={classNameModalCloseButton}
			classNameContent={classNameModalContent}
		>
			<div className={cn('w-[280px]', className)}>
				<div className="flex items-center justify-end mb-2">
					{isRotateButtonActive && imageUrl && (
						<button
							type="button"
							onClick={handleRotate}
							className={cn(
								'flex items-center justify-center gap-2 text-white py-2 px-3 rounded-md text-sm font-medium transition-colors cursor-pointer',
								THEME_CLASSES.light.button,
								THEME_CLASSES.dark.button,
								classNameButton
							)}
						>
							<RotateCw size={16} />
						</button>
					)}
				</div>
				<div
					className={cn(
						'rounded-md overflow-hidden relative group',
						THEME_CLASSES.light.container,
						THEME_CLASSES.dark.container,
						classNameContainer
					)}
				>
					{previewUrl && (
						<>
							{imageHidden ? (
								<div
									className={cn(
										'w-full h-[250px] flex items-center justify-center',
										THEME_CLASSES.light.placeholder,
										THEME_CLASSES.dark.placeholder,
										classNamePlaceholder
									)}
								>
									Image Hidden
								</div>
							) : (
								<>
									<div
										className="w-full h-[250px] relative"
										style={{
											backgroundColor: '#ffffff',
											backgroundImage:
												'linear-gradient(45deg, #e5e5e5 25%, transparent 25%), linear-gradient(-45deg, #e5e5e5 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #e5e5e5 75%), linear-gradient(-45deg, transparent 75%, #e5e5e5 75%)',
											backgroundSize: '20px 20px',
											backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
										}}
									>
										<img
											src={previewUrl}
											alt="Preview"
											className="w-full h-full object-contain"
											style={{
												opacity: opacityImage / 100,
												...getFilterStyle(),
											}}
										/>
										{tintOverlayStyle && (
											<div
												className="absolute inset-0 pointer-events-none"
												style={tintOverlayStyle}
											/>
										)}
										{highlightsOverlayStyle && (
											<div
												className="absolute inset-0 pointer-events-none"
												style={highlightsOverlayStyle}
											/>
										)}
										{shadowsOverlayStyle && (
											<div
												className="absolute inset-0 pointer-events-none"
												style={shadowsOverlayStyle}
											/>
										)}
									</div>
									<div
										className={cn(
											'absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center',
											THEME_CLASSES.light.overlay,
											THEME_CLASSES.dark.overlay,
											classNameOverlay
										)}
									>
										<UploadImageButton
											handleUploadClick={handleUploadClick}
											fileInputRef={fileInputRef}
											handleFileChange={handleFileChange}
											classNameButton={classNameButton}
										/>
									</div>
								</>
							)}
						</>
					)}
					{!previewUrl && (
						<div
							className={cn(
								'w-full h-[250px] flex items-center justify-center',
								THEME_CLASSES.light.placeholder,
								THEME_CLASSES.dark.placeholder,
								classNamePlaceholder
							)}
						>
							<UploadImageButton
								handleUploadClick={handleUploadClick}
								fileInputRef={fileInputRef}
								handleFileChange={handleFileChange}
								classNameButton={classNameButton}
							/>
						</div>
					)}
				</div>
			</div>
			{previewUrl && !imageHidden && (
				<ImageFiltersPanel
					filters={localFilters}
					onFilterChange={handleFilterChange}
				/>
			)}
		</InputSelectModal>
	)
}

const ImageFiltersPanel = ({
	filters,
	onFilterChange,
}: {
	filters: ImageFilters
	onFilterChange: (key: keyof ImageFilters, value: number) => void
}) => {
	const filterControls = [
		{
			key: 'exposure' as keyof ImageFilters,
			label: 'Exposure',
			min: -100,
			max: 100,
		},
		{
			key: 'contrast' as keyof ImageFilters,
			label: 'Contrast',
			min: -100,
			max: 100,
		},
		{
			key: 'saturation' as keyof ImageFilters,
			label: 'Saturation',
			min: -100,
			max: 100,
		},
		{
			key: 'temperature' as keyof ImageFilters,
			label: 'Temperature',
			min: -100,
			max: 100,
		},
		{ key: 'tint' as keyof ImageFilters, label: 'Tint', min: -100, max: 100 },
		{
			key: 'highlights' as keyof ImageFilters,
			label: 'Highlights',
			min: -100,
			max: 100,
		},
		{
			key: 'shadows' as keyof ImageFilters,
			label: 'Shadows',
			min: -100,
			max: 100,
		},
	]

	const handleSliderChange = (
		key: keyof ImageFilters,
		rawValue: number,
		snapThreshold = 5
	) => {
		const snappedValue = Math.abs(rawValue) <= snapThreshold ? 0 : rawValue
		onFilterChange(key, snappedValue)
	}

	return (
		<div className="mt-4 space-y-3">
			{filterControls.map(({ key, label, min, max }) => (
				<div key={key} className="flex items-center gap-3">
					<label
						className={cn(
							'text-sm font-medium w-24 flex-shrink-0',
							THEME_CLASSES.light.text,
							THEME_CLASSES.dark.text
						)}
					>
						{label}
					</label>
					<input
						type="range"
						min={min}
						max={max}
						value={filters[key]}
						onChange={e => handleSliderChange(key, Number(e.target.value))}
						className="flex-1 h-1 bg-gray-300 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
						style={{
							background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${
								((filters[key] - min) / (max - min)) * 100
							}%, #d1d5db ${((filters[key] - min) / (max - min)) * 100}%, #d1d5db 100%)`,
						}}
					/>
				</div>
			))}
		</div>
	)
}

const UploadImageButton = ({
	handleUploadClick,
	fileInputRef,
	handleFileChange,
	classNameButton,
}: {
	handleUploadClick: () => void
	fileInputRef: React.RefObject<HTMLInputElement | null>
	handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	classNameButton?: string
}) => {
	return (
		<>
			<button
				onClick={handleUploadClick}
				className={cn(
					'text-white py-2 px-4 rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer',
					THEME_CLASSES.light.button,
					THEME_CLASSES.dark.button,
					classNameButton
				)}
			>
				<Upload size={16} />
				Upload from computer
			</button>
			<input
				ref={fileInputRef}
				type="file"
				accept="image/*"
				onChange={handleFileChange}
				className="hidden"
			/>
		</>
	)
}
