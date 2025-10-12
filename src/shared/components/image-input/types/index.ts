/**
 * Базовые типы и интерфейсы для image input компонентов
 */

/**
 * Базовые пропсы для всех image input компонентов
 */
export interface BaseImageInputProps {
	title?: string
	className?: string
	imageUrl?: string
	onImageChange?: (file: File | null) => void
	onHideImage?: (hidden: boolean) => void
	onDeleteImage?: () => void
}

/**
 * Пропсы для компонентов с opacity контролом
 */
export interface ImageInputWithOpacityProps extends BaseImageInputProps {
	opacity?: number
	onOpacityChange?: (opacity: number) => void
}

/**
 * Пропсы для компонентов с отображением имени файла
 */
export interface ImageInputWithFileNameProps extends BaseImageInputProps {
	fileName?: string
}

/**
 * Состояние изображения
 */
export interface ImageState {
	url?: string
	isHidden: boolean
	opacity: number
	rotation: number
}

/**
 * Результат хука useImageState
 */
export interface UseImageStateReturn {
	imageUrl?: string
	isHidden: boolean
	opacity: number
	rotation: number
	setImageUrl: (url?: string) => void
	setIsHidden: (hidden: boolean) => void
	setOpacity: (opacity: number) => void
	setRotation: (rotation: number) => void
	toggleHidden: () => void
}

/**
 * Результат хука useFileUpload
 */
export interface UseFileUploadReturn {
	previewUrl?: string
	fileName?: string
	fileInputRef: React.RefObject<HTMLInputElement | null>
	handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	handleClick: () => void
	clearFile: () => void
}

/**
 * Результат хука useImageActions
 */
export interface UseImageActionsReturn {
	isHidden: boolean
	handleToggleHide: () => void
	handleDelete: () => void
	isRotateButtonActive: boolean
	setIsRotateButtonActive: (active: boolean) => void
}
