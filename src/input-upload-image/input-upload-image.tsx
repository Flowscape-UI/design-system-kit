import { ActionButtons } from '../shared/components/action-buttons/action-buttons'
import { ImagePreview } from '../shared/components/image-preview/image-preview'
import { TextButton } from '../shared/components/text-button/text-button'
import {
	IMAGE_INPUT_THEME_CLASSES,
	useFileUpload,
	useImageActions,
	getFileNameDisplay,
} from '../shared/components/image-input'
import { cn } from '../shared/utils/cn'

export interface InputUploadImageProps {
	title?: string
	className?: string
	imageUrl?: string
	fileName?: string
	onImageChange?: (file: File | null) => void
	onHideImage?: (hidden: boolean) => void
	onDeleteImage?: () => void
}

export const InputUploadImage = ({
	title = 'Upload image',
	className,
	imageUrl,
	fileName,
	onImageChange,
	onHideImage,
	onDeleteImage,
}: InputUploadImageProps) => {
	// Используем новые хуки из общей инфраструктуры
	const {
		previewUrl,
		fileName: currentFileName,
		fileInputRef,
		handleFileChange,
		handleClick,
		clearFile,
	} = useFileUpload(onImageChange, imageUrl, fileName)

	const { isHidden, handleToggleHide, handleDelete } = useImageActions(
		onHideImage,
		onDeleteImage,
		clearFile
	)

	const displayFileName = getFileNameDisplay(
		currentFileName,
		fileName,
		imageUrl,
		title
	)

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
					<ImagePreview imageUrl={previewUrl} onClick={handleClick} />
					<TextButton
						onClick={handleClick}
						textLightClass={IMAGE_INPUT_THEME_CLASSES.light.text}
						textDarkClass={IMAGE_INPUT_THEME_CLASSES.dark.text}
					>
						{displayFileName}
					</TextButton>
				</div>

				<ActionButtons
					showOpacity={false}
					isHidden={isHidden}
					onToggleVisibility={handleToggleHide}
					onDelete={handleDelete}
					dividerClassName={cn(
						IMAGE_INPUT_THEME_CLASSES.light.divider,
						IMAGE_INPUT_THEME_CLASSES.dark.divider
					)}
				/>
			</div>

			<input
				ref={fileInputRef}
				type="file"
				accept="image/*"
				onChange={handleFileChange}
				className="hidden"
			/>
		</div>
	)
}
