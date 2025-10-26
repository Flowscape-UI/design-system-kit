import { useEffect, useState } from 'react'
import { ActionButtons } from '../shared/components/action-buttons/action-buttons'
import {
	IMAGE_INPUT_THEME_CLASSES,
	useImageActions,
	useImageState,
} from '../shared/components/image-input'
import { ImagePreview } from '../shared/components/image-preview/image-preview'
import { TextButton } from '../shared/components/text-button/text-button'
import { cn } from '../shared/utils/cn'
import {
	ImagePickerModal,
	type ImageFilters,
} from './components/image-picker-modal'

export interface InputImageSelectProps {
	title?: string
	className?: string
	imageUrl?: string
	opacity?: number
	onOpacityChange?: (opacity: number) => void
	onHideImage?: (hidden: boolean) => void
	onDeleteImage?: () => void
	onImageChange?: (file: File | null) => void
	filters?: ImageFilters
	onFiltersChange?: (filters: ImageFilters) => void
	rotation?: number
	onRotationChange?: (rotation: number) => void
	classNameModal?: string
	classNameModalContainer?: string
	classNameModalButton?: string
	classNameModalOverlay?: string
	classNameModalPlaceholder?: string
	classNameModalWrapper?: string
	classNameModalHeader?: string
	classNameModalTitle?: string
	classNameModalCloseButton?: string
	classNameModalContent?: string
}

export const InputImageSelect = ({
	title = 'Image',
	className,
	imageUrl,
	opacity = 100,
	onImageChange,
	onOpacityChange,
	onHideImage,
	onDeleteImage,
	filters,
	onFiltersChange,
	rotation = 0,
	onRotationChange,
	classNameModal,
	classNameModalContainer,
	classNameModalButton,
	classNameModalOverlay,
	classNameModalPlaceholder,
	classNameModalWrapper,
	classNameModalHeader,
	classNameModalTitle,
	classNameModalCloseButton,
	classNameModalContent,
}: InputImageSelectProps) => {
	// Используем новые хуки из общей инфраструктуры
	const [isPickerOpen, setIsPickerOpen] = useState(false)

	const {
		opacity: opacityValue,
		rotation: rotationValue,
		setOpacity: setOpacityValue,
		setRotation: setRotationValue,
	} = useImageState(imageUrl, opacity, rotation)

	const {
		isHidden,
		isRotateButtonActive,
		handleToggleHide,
		handleDelete,
		setIsRotateButtonActive,
	} = useImageActions(onHideImage, onDeleteImage)

	useEffect(() => {
		if (imageUrl) {
			setIsRotateButtonActive(true)
		}
	}, [imageUrl, setIsRotateButtonActive])

	const handleTogglePicker = () => {
		setIsPickerOpen(prev => !prev)
	}

	const handleOpacityChange = (newOpacity: number) => {
		setOpacityValue(newOpacity)
		onOpacityChange?.(newOpacity)
	}

	const handleRotationChange = (nextRotation: number) => {
		setRotationValue(nextRotation)
		onRotationChange?.(nextRotation)
	}

	return (
		<div className="w-fit">
			<div
				className={cn(
					'flex items-center justify-between rounded-md p-1 border',
					IMAGE_INPUT_THEME_CLASSES.light.container,
					IMAGE_INPUT_THEME_CLASSES.dark.container,
					className
				)}
			>
				<div className="flex items-center gap-1 w-full">
					<ImagePreview
						imageUrl={imageUrl}
						opacity={opacityValue}
						onClick={handleTogglePicker}
					/>
					<TextButton
						onClick={handleTogglePicker}
						textLightClass={IMAGE_INPUT_THEME_CLASSES.light.text}
						textDarkClass={IMAGE_INPUT_THEME_CLASSES.dark.text}
					>
						Image
					</TextButton>
				</div>

				<ActionButtons
					opacity={opacityValue}
					onOpacityChange={handleOpacityChange}
					isHidden={isHidden}
					onToggleVisibility={handleToggleHide}
					onDelete={handleDelete}
					dividerClassName={cn(
						IMAGE_INPUT_THEME_CLASSES.light.divider,
						IMAGE_INPUT_THEME_CLASSES.dark.divider
					)}
				/>
			</div>

			<ImagePickerModal
				isOpen={isPickerOpen}
				isRotateButtonActive={isRotateButtonActive}
				onClose={() => setIsPickerOpen(false)}
				title={title}
				imageUrl={imageUrl}
				opacityImage={opacityValue}
				imageHidden={isHidden}
				onImageChange={onImageChange}
				filters={filters}
				onFiltersChange={onFiltersChange}
				rotation={rotationValue}
				onRotationChange={handleRotationChange}
				className={classNameModalWrapper}
				classNameContainer={classNameModalContainer}
				classNameButton={classNameModalButton}
				classNameOverlay={classNameModalOverlay}
				classNamePlaceholder={classNameModalPlaceholder}
				classNameModal={classNameModal}
				classNameModalHeader={classNameModalHeader}
				classNameModalTitle={classNameModalTitle}
				classNameModalCloseButton={classNameModalCloseButton}
				classNameModalContent={classNameModalContent}
			/>
		</div>
	)
}
