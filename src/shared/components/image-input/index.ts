/**
 * Общая инфраструктура для image input компонентов
 * Экспорт констант, типов, хуков и утилит
 */

// Constants
export { IMAGE_INPUT_THEME_CLASSES } from './constants/theme'

// Types
export type {
	BaseImageInputProps,
	ImageInputWithOpacityProps,
	ImageInputWithFileNameProps,
	ImageState,
	UseImageStateReturn,
	UseFileUploadReturn,
	UseImageActionsReturn,
} from './types'

// Hooks
export { useImageState } from './hooks/use-image-state'
export { useFileUpload } from './hooks/use-file-upload'
export { useImageActions } from './hooks/use-image-actions'

// Utils
export {
	readFileAsDataURL,
	isImageFile,
	getFileExtension,
} from './utils/file-reader'
export { getFileNameDisplay, truncateFileName } from './utils/file-name'
